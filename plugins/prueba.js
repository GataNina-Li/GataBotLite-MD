import fs from 'fs'
import axios from 'axios'
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import formData from 'form-data'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let handler = async (m, { conn, participants, text }) => {
const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
let users = participants.map(u => conn.decodeJid(u.id))
if (!text) return m.reply('_⚠️😿 Ingresa enlaces de los grupos y el mensaje a promocionar_')
  
const enlaces = text.match(linkRegex)
if (!enlaces || enlaces.length === 0) return m.reply('_⚠️😿 No se encontraron enlaces de grupos válidos en el mensaje_')
  
let message = text.replace(linkRegex, '').trim();
if (message.length < 10) return m.reply('_⚠️😿 El mensaje de promoción debe contener al menos 10 letras_')
let url
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
const urlRegex = /https:\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png)/i
const matches = text.match(urlRegex)
if (matches) {
url = matches[0] 
} else if (m.quoted && /image\/(png|jpe?g)/.test(mime) || mime.startsWith('image/')) {
let media = await q.download()
url = await uploadImage(media)  
} else if (m.quoted && /image\/webp/.test(mime)) {
let media = await q.download()
url = await webp2png(media)   
} else {
message = text
url = false
}
message = text
const linkRegex2 = /https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24}/ig
const enlacesConComillas = text.match(/['"](https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24})['"]/ig) || []
for (const link of enlacesConComillas) {
const linkWithoutQuotes = link.replace(/['"]/g, '')
text = text.replace(link, linkWithoutQuotes)
}
const enlacesSinComillas = text.match(linkRegex2) || [];
for (const link of enlacesSinComillas) {
text = text.replace(link, '')
}
message = text.replace(/['"]/g, '').trim() 
 
for (const link of enlaces) {
const [_, code] = link.match(linkRegex) || []
  
try {
const res = await conn.groupAcceptInvite(code)
await delay(2000); // Esperar 4 segundos antes de continuar
      
await //conn.sendMessage(res, {image: {url, url}, text: message, mentions: (await conn.groupMetadata(res)).participants.map(v => v.id) }, { quoted: fkontak });
conn.sendMessage(res, { text: md + `\n\n` + text + `\n\nsiguierme el Instagram\n` + ig, mentions: (await conn.groupMetadata(res)).participants.map(v => v.id) }, { quoted: fkontak });
await delay(2000) // Esperar 2 segundos antes de enviar el mensaje

// Dejar el grupo solo si el bot se unió durante esta iteración
if (!m.messageStubParameters || m.messageStubType[0] !== 145) {
if (!m.messageStubParameters || m.messageStubParameters[0] !== 30) {
await conn.groupLeave(res)
await delay(5000); // Esperar 6 segundos antes de repetir con otros enlaces
  
}}} catch (error) {
console.error(error)
await conn.sendMessage(m.chat, { text: `Ocurrió un error al unirse o enviar el mensaje al grupo https://${link}\n\nVerifique que el Grupo no tenga activada la opción de aprobar usuarios o que en el grupo todos puedan enviar mensaje` }, { quoted: m });
}} 
await m.reply('_Mensaje enviado a todos los grupos_')
}

handler.command = ['prueba']
handler.owner = true
export default handler


/*import fs from 'fs'
import axios from 'axios'
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import formData from 'form-data'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let handler = async (m, { conn, text }) => {
const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
  
if (!text) return m.reply('_⚠️😿 Ingresa enlaces de los grupos y el mensaje a promocionar_')
  
const enlaces = text.match(linkRegex)
if (!enlaces || enlaces.length === 0) return m.reply('_⚠️😿 No se encontraron enlaces de grupos válidos en el mensaje_')
  
let message = text.replace(linkRegex, '').trim();
if (message.length < 10) return m.reply('_⚠️😿 El mensaje de promoción debe contener al menos 10 letras_')

let url
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
const urlRegex = /https:\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png)/i
const matches = text.match(urlRegex)
if (matches) {
url = matches[0] 
} else if (m.quoted && /image\/(png|jpe?g)/.test(mime) || mime.startsWith('image/')) {
let media = await q.download()
url = await uploadImage(media)  
} else if (m.quoted && /image\/webp/.test(mime)) {
let media = await q.download()
url = await webp2png(media)   
} else {
message = text
url = false
}

message = text
const linkRegex2 = /https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24}/ig
const enlacesConComillas = text.match(/['"](https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24})['"]/ig) || []
for (const link of enlacesConComillas) {
const linkWithoutQuotes = link.replace(/['"]/g, '')
text = text.replace(link, linkWithoutQuotes)
}
const enlacesSinComillas = text.match(linkRegex2) || [];
for (const link of enlacesSinComillas) {
text = text.replace(link, '')
}
message = text.replace(/['"]/g, '').trim() 
 
for (const link of enlaces) {
const [_, code] = link.match(linkRegex) || []
  
try {
const res = await conn.groupAcceptInvite(code)
await delay(url ? 3000 : 2000) // Esperar 4 segundos antes de continuar
      
if (url) {
await conn.sendFile(res, url, 'imagen.jpg', message, m);
} else {
await conn.sendMessage(res, { text: message }, { quoted: m });
}
await delay(url ? 4000 : 2000) // Esperar 2 segundos antes de enviar el mensaje

// Dejar el grupo solo si el bot se unió durante esta iteración
if (!m.messageStubParameters || m.messageStubParameters[0] !== 30) {
await conn.groupLeave(res)
await delay(url ? 7000 : 5000) // Esperar 6 segundos antes de repetir con otros enlaces
  
}} catch (error) {
console.error(error)
await conn.sendMessage(m.chat, { text: `Ocurrió un error al unirse o enviar el mensaje al grupo https://${link}\n\nVerifique que el Grupo no tenga activada la opción de aprobar usuarios o que en el grupo todos puedan enviar mensaje` }, { quoted: m });
}} 
await m.reply('_Mensaje enviado a todos los grupos_')
}

handler.command = ['promocionar']
handler.owner = true
export default handler*/

