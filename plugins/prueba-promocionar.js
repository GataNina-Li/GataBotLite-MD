import fs from 'fs'
import axios from 'axios'
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import formData from 'form-data'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i 
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
const urlRegex = text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
const matches = text.match(urlRegex)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('El vídeo no puede durar más de 10 segundos')
/*if (matches) {
url = matches[0] 
} else if (/image\/(png|jpe?g)/.test(mime)) { //(m.quoted && /image\/(png|jpe?g)/.test(mime) || mime.startsWith('image/')) {
let media = await q.download()
url = await uploadImage(media)  
} else if (/webp|image|video/g.test(mime)) { //(m.quoted && /image\/webp/.test(mime)) {
let media = await q.download()
url = await webp2png(media)   
} else {
message = text
url = false
}*/
if (/video/g.test(mime) || /image\/(png|jpe?g)/.test(mime)) {
media = await m.download()
url = await uploadImage(media) // PuploadFile para manejar vídeos
} else if (/webp|image|video/g.test(mime)) {
media = await m.download()
url = await webp2png(media)
} else if (matches) {
url = matches[0]
} else {
message = text
url = false
}

message = text
const linkRegex2 = /https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24}/ig
const enlacesConComillas = text.match(/['"()](https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24})['"()]/ig) || []
for (const link of enlacesConComillas) {
const linkWithoutQuotes = link.replace(/['"()]/g, '')
text = text.replace(link, linkWithoutQuotes)
}
const enlacesSinComillas = text.match(linkRegex2) || [];
for (const link of enlacesSinComillas) {
text = text.replace(link, '')
}
message = text.replace(/['"()]/g, '').replace(url, '').trim() 
 
for (const link of enlaces) {
const [_, code] = link.match(linkRegex) || []  
try {
const res = await conn.groupAcceptInvite(code)
await delay(url ? 3000 : 2000) // Esperar 4 segundos antes de continuar

let users = (await conn.groupMetadata(res)).participants.map(v => v.id)
if (url) {
const sendOptions = { image: url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') ? { url: url } : url, caption: message, mentions: users }
await conn.sendMessage(res, sendOptions, { quoted: fkontak })
} else {
await conn.sendMessage(res, { text: message, mentions: users }, { quoted: fkontak })
}
await delay(url ? 4000 : 2000) // Esperar 2 segundos antes de enviar el mensaje

// Dejar el grupo solo si el bot se unió durante esta iteración
if (!m.messageStubParameters || m.messageStubParameters[0] !== 30) {
await conn.groupLeave(res)
await delay(url ? 7000 : 5000) // Esperar 6 segundos antes de repetir con otros enlaces
  
}} catch (error) {
console.error(error)
await conn.sendMessage(m.chat, { text: `\`\`\`Ocurrió un error al unirse o enviar el mensaje al grupo:\`\`\`\n*https://${link}*\n\n*Verifique lo siguiente:*\n\n- Que el Grupo no tenga activada la opción de aprobar usuarios.\n- Que en el grupo todos puedan enviar mensaje.\n- Que usted no este eliminado del Grupo.` }, { quoted: m });
}} 
await m.reply('_Mensaje enviado a todos los grupos_')
}

handler.command = ['promocionar']
handler.owner = true
export default handler
