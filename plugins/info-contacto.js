/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['contacto', 'contact']  
export default handler*/

import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

//const sentMsg = await conn.sendContactArray(m.chat, [
//[`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💖 Creadora `, `Solo temas de GataBot`, `centergatabot@gmail.com`, `🇪🇨 Ecuador`, '🎁 https://github.com/GataNina-Li', `🐱 GataNina-Li`],
//[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🐈 Bot de WhatsApp`, `📵 No hacer Spam por favor`, `gatabot@gmail.com`, `🇪🇨 Ecuador`, '🎁 ' + md, packname]
//], fkontak)
//await m.reply(`ʜᴇʟʟᴏ @${m.sender.split(`@`)[0]} Contactos disponibles`)

/*let contacts = global.owner.filter(c => c[2] === true)
let numero = contacts.map(c => c[0])
let nombres = []

for (let n of numero) {
  let nombre = await conn.getName(n)
  nombres.push(nombre)
}

const sentMsg = await conn.sendContactArray(m.chat, [
[`${numero[0]}`, `${nombres[0].notify}`, `💖 Creadora `, `Solo temas de GataBot`, `centergatabot@gmail.com`, `🇪🇨 Ecuador`, '🎁 https://github.com/GataNina-Li', `🐱 GataNina-Li`],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🐈 Bot de WhatsApp`, `📵 No hacer Spam por favor`, `gatabot@gmail.com`, `🇪🇨 Ecuador`, '🎁 ' + md, packname]
], fkontak)*/

let contacts = global.owner.filter(c => c[2] === true)
let numbers = contacts.map(c => c[0])
let names = await conn.getName(numbers)

for (let i = 0; i < contacts.length; i++) {
  let contact = contacts[i]
  let number = contact[0]
  let name = names[i].notify

  let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${contact[1] || ''}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${contact[3] || ''}
item2.EMAIL;type=INTERNET:${contact[4] || ''}
item2.X-ABLabel:📧 Email
item3.ADR:;;${contact[5] || ''};;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:${contact[6] || ''}
item4.X-ABLabel:Website
item5.X-ABLabel:${contact[7] || ''}
END:VCARD`.trim()

await conn.sendContactArray(m.chat, [[number, name, '💖 Creadora', 'Solo temas de GataBot', 'centergatabot@gmail.com', '🇪🇨 Ecuador', '🎁 https://github.com/GataNina-Li', '🐱 GataNina-Li']], null, { thumbnail: Buffer.from(contact[8] || '', 'base64'), quoted: m })
}
await m.reply(`Hola @${m.sender.split(`@`)[0]} Contactos disponibles`)
} 
handler.command = ['contacto', 'contact']  
export default handler
