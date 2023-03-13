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
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number+'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || 'Descripción no encontrada'
  
nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : 'Owner' 
description = official[0][0] == String(contact[0]) ? 'Solo temas de GataBot' : official[1][0] == String(contact[0]) ? 'Asistente Oficial de GataBot' : official[2][0] == String(contact[0]) ? 'Asistente Oficial de GataBot' : desc === '' ? 'How can I help you?' : desc
correo = official[0][0] == String(contact[0]) ? 'socialplus.gata@gamil.com' : official[1][0] == String(contact[0]) ? 'thelolibotm@gmail.com' : official[2][0] == String(contact[0]) ? 'alexismaldonado90700@gmail.com' : mail === '' ? 'I do not have mail' : mail
lugar = official[0][0] == String(contact[0]) ? '🇪🇨 Ecuador' : official[1][0] == String(contact[0]) ? '🇦🇷 Argentina' : official[2][0] == String(contact[0]) ? '🇲🇽 México' : country === '' ? '🌎 Global' : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/GataNina-Li' : official[1][0] == String(contact[0]) ? 'https://github.com/elrebelde21' : official[2][0] == String(contact[0]) ? 'https://github.com/Azami19' : md 
biog = official[0][0] == String(contact[0]) ? bio : official[1][0] == String(contact[0]) ? bio : official[2][0] == String(contact[0]) ? bio : desc === '' ? 'I am the Owner of the Bot if you have any questions you can tell me' : desc 
   
lista.push([number, ofc, nombre, description, null, lugar, enlace, biog, official[0][0] == String(contact[0]) ? md : ''])
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), packname, '📵 No hacer Spam por favor', 'centergatabot@gmail.com', '🌎 Global', md, bio, yt, ig, fb, paypal, nna])}

await conn.sendContactArray(m.chat, lista, null, { quoted: m })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}} 
handler.command = ['contacto', 'contact']  
export default handler
