/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['contacto', 'contact']  
export default handler*/

//CÓDIGO CREADO GRACIAS A https://github.com/Azami19 & https://github.com/GataNina-Li
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let nombre, description, correo, lugar, enlace, otro
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let contacts = global.owner.filter(c => c[2] === true)
let lista = []

for (let i = 0; i < contacts.length; i++) {
  let contact = contacts[i]
  let number = String(contact[0])
  let name = await conn.getName(m.number+'@s.whatsapp.net')
  
nombre = 18059196237 == String(contact[0]) ? 'Gata Dios' : 5492266613038 == String(contact[0]) ? 'Owner Oficial (1)' : 5214531173598 == String(contact[0]) ? 'Owner Oficial (1)' : 'Owner' 
description = 18059196237 == String(contact[0]) ? 'Solo temas de GataBot' : 5492266613038 == String(contact[0]) ? 'Escríbeme si tiene dudas sobre GataBot' : 5214531173598 == String(contact[0]) ? 'Escríbeme si tiene dudas sobre GataBot' : 'Colaborador' 
correo = 18059196237 || 5492266613038 || 5214531173598  == String(contact[0]) ? 'centergatabot@gmail.com' : 'No definido'
lugar = 18059196237 == String(contact[0]) ? '🇪🇨 Ecuador' : 5492266613038 == String(contact[0]) ? '🇦🇷 Argentina' : 5214531173598 == String(contact[0]) ? '🇲🇽 México' : '🌎 Global' 
enlace = 18059196237 == String(contact[0]) ? 'https://github.com/GataNina-Li' : 5492266613038 == String(contact[0]) ? 'https://github.com/elrebelde21' : 5214531173598 == String(contact[0]) ? 'https://github.com/Azami19' : md 
otro = 18059196237 == String(contact[0]) ? '1' : 5492266613038 == String(contact[0]) ? '2' : 5214531173598 == String(contact[0]) ? '3' : '4' 
  
  
lista.push([number, name, nombre, description, correo, lugar, enlace, otro])}
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), '🐈 Bot de WhatsApp', '📵 No hacer Spam por favor', 'gatabot@gmail.com', '🇪🇨 Ecuador', '🎁 ' + md, packname])

await conn.sendContactArray(m.chat, lista, null, { quoted: m })
await m.reply(`Hola @${m.sender.split(`@`)[0]} Contactos disponibles`)
} 
handler.command = ['contacto', 'contact']  
export default handler
