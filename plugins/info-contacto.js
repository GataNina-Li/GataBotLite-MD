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
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = String(contact[1]) //await conn.getName(number+'@s.whatsapp.net')
let biografia = await conn.fetchStatus(number+'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || 'No encontrada'

  
nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : 'Owner' 
description = official[0][0] == String(contact[0]) ? 'Solo temas de GataBot' : official[1][0] == String(contact[0]) ? 'Asistente Oficial de GataBot' : 5214531173598 == String(contact[0]) ? 'Asistente Oficial de GataBot' : desc === '' ? 'How can I help you?' : desc
correo = official[0][0] || official[1][0] || official[2][0]  == String(contact[0]) ? 'centergatabot@gmail.com' : mail === '' ? 'I do not have mail' : mail
lugar = official[0][0] == String(contact[0]) ? '🇪🇨 Ecuador' : official[1][0] == String(contact[0]) ? '🇦🇷 Argentina' : official[2][0] == String(contact[0]) ? '🇲🇽 México' : country === '' ? '🌎 Global' : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/GataNina-Li' : official[1][0] == String(contact[0]) ? 'https://github.com/elrebelde21' : 5214531173598 == String(contact[0]) ? 'https://github.com/Azami19' : md 
biog = official[0][0] == String(contact[0]) ? bio : official[1][0] == String(contact[0]) ? bio : official[2][0] == String(contact[0]) ? bio : desc === '' ? 'I am the Owner of the Bot if you have any questions you can tell me' : desc 
   
lista.push([number, ofc, nombre, description, correo, lugar, enlace, biog])}
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), '🐈 Bot de WhatsApp', '📵 No hacer Spam por favor', 'gatabot@gmail.com', '🇪🇨 Ecuador', '🎁 ' + md, packname])

await conn.sendContactArray(m.chat, lista, null, { quoted: m })
await m.reply(`Hola @${m.sender.split(`@`)[0]} Contactos disponibles`)
} 
handler.command = ['contacto', 'contact']  
export default handler
