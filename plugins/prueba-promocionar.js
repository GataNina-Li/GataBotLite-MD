import fs from 'fs'
import axios from 'axios'
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import formData from 'form-data'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let handler = async (m, { conn, text, usedPrefix, command, groupMetadata, participants }) => {
let chat = global.db.data.chats[m.chat]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
chat.welcome = false 
  
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i 
if (!text) return m.reply(`_⚠️😿 Ingresa enlaces de los grupos y el mensaje a promocionar_\n\n*Opciones:*
Puede usar \"\", \'\', o () para los enlaces de WhatsApp que desea promocionar.\n\nCabe recalcar que al momento de promocionar no se verá los enlaces que se desea ingresar y los \"\", \'\', o ()\n
Tiene la opción de responder a una imagen o enlace que termine en jpg, jpeg, o png de tal forma que será promocionado, en el caso de agregar un enlace de imagen puede agregar donde quiera y no será mostrado el enlace de la imagen en el mensaje de promoción 
\nEjemplo:\n${usedPrefix + command} enlace1 enlace2 enlace3 Mensaje de promoción "https://chat.whatsapp.com/ABCDE"
\nResultado:\nMensaje de promoción https://chat.whatsapp.com/ABCDE`)
  
const enlaces = text.match(linkRegex)
if (!enlaces || enlaces.length === 0) return m.reply('_⚠️😿 No se encontraron enlaces de grupos válidos en el mensaje_')
  
let message = text.replace(linkRegex, '').trim();
if (message.length < 10) return m.reply('_⚠️😿 El mensaje de promoción debe contener al menos 10 letras_')

let url, media
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
const urlRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi')
const matches = text.match(urlRegex)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('El vídeo no puede durar más de 10 segundos')
if (/video/g.test(mime) || /image\/(png|jpe?g)/.test(mime)) {
let media = await m.download()
if (/video/g.test(mime)) {
url = await uploadFile(media)
} else {
url = await uploadImage(media)
}} else if (/webp|image|video/g.test(mime)) {
media = await m.download()
url = await webp2png(media)
} else if (matches) {
url = matches[0]
} else {
message = text
url = false
}

let message2 = ''
message = text
const linkRegex2 = /['"()]*(https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24}|\S+\.(jpg|jpeg|png|gif|mp4))['"()]*(?=\s|$)/ig
const enlacesConSignos = text.match(linkRegex2) || []
let currentIndex = 0
for (const linkWithSigns of enlacesConSignos) {
const linkWithoutSigns = linkWithSigns.replace(/['"()]/g, '')
const linkIndex = text.indexOf(linkWithSigns, currentIndex)
const isImageLink = linkWithSigns.match(/\.(jpg|jpeg|png|gif|mp4)/i)
if (isImageLink && linkWithSigns.includes('[') && linkWithSigns.includes(']')) {
message2 += text.substring(currentIndex, linkIndex + linkWithSigns.length)
} else {
message2 += text.substring(currentIndex, linkIndex)
if ((linkWithoutSigns !== linkWithSigns) && linkWithSigns.match(/['"()]/)) {
message2 += linkWithoutSigns
} else if (!linkWithSigns.match(/['"()]/)) {
message2 = message2.trim();
}}
currentIndex = linkIndex + linkWithSigns.length
}
const remainingText = text.substring(currentIndex);
message2 += remainingText;
message = message2.replace(/\[|\]/g, '')

let totalTime = 0
let errorGroups = []

for (const link of enlaces) {
const [_, code] = link.match(linkRegex) || []

try {
const res = await conn.groupAcceptInvite(code)
await delay(url ? 3000 : 2000) // Esperar 3 segundos antes de continuar
totalTime += url ? 3000 : 2000

let users = (await conn.groupMetadata(res)).participants.map(v => v.id)
if (url) {
const sendOptions = { image: url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') ? { url: url } : url, caption: message /*mentions: users */ }
if (/video/g.test(mime)) {
await conn.sendMessage(res, { video: url, mimetype: 'video/mp4', caption: message /*mentions: users */ }, { quoted: fkontak })
} else {
await conn.sendMessage(res, sendOptions, { quoted: fkontak })
}} else {
await conn.sendMessage(res, { text: message /*mentions: users */ }, { quoted: fkontak }) //, mentions: users
}
chat.welcome = false
await delay(url ? 4000 : 2000) // Esperar 4 segundos antes de enviar el mensaje
totalTime += url ? 4000 : 2000

// Dejar el grupo solo si el bot se unió durante esta iteración
if (!m.messageStubParameters || m.messageStubParameters[0] !== 30) {
await conn.groupLeave(res)
await delay(url ? 7000 : 5000) // Esperar 7 segundos antes de repetir con otros enlaces
totalTime += url ? 7000 : 5000
//chat.welcome = true
  
}} catch (error) {
console.error(error)
if (!error.message.includes('forbidden')) {
errorGroups.push(`https://${link}`)
}
continue // Continuar con el siguiente enlace en caso de error
}}

if (errorGroups.length > 0) {
await conn.sendMessage(m.chat, {
text: `Ocurrieron errores al unirse o enviar mensajes en los siguientes grupos:\n\n${errorGroups.join("\n")}\n\nVerifique los siguientes puntos:\n- Que los grupos no tengan activada la opción de aprobar usuarios.\n- Que en los grupos todos puedan enviar mensajes.\n- Que usted no esté eliminado de los grupos.`,
mentions: [m.sender],
})
}
await m.reply(`_Mensaje enviado a todos los grupos_. Tiempo total: ${totalTime / 1000} segundos`)
}

handler.command = ['promocionar']
handler.owner = true
export default handler
