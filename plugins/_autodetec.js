import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn, participants }) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let groupAdmins = participants.filter(p => p.admin)
const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)]
let tag = [m.sender, m.messageStubParameters[0]]
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  

let nombre
nombre = `*${usuario} HA CAMBIADO EL NOMBRE DEL GRUPO*\n\n🔰 *AHORA EL GRUPO SE LLAMA:*\n${m.messageStubParameters[0]}`

if (m.messageStubType == 21) {
await conn.sendFile(m.chat, pp, nombre, fkontak, false, { mentions: tag }) 
//await conn.sendMessage(m.chat, { image: { url: pp }, caption: nombre, mentions: tag }, { quoted: fkontak })
//await this.sendMessage(m.chat, { text: nombre, mentions: tag }, { quoted: fkontak }) 
  
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `${usuario} 𝙃𝘼𝙎 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼𝙎 𝙁𝙊𝙏𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `${usuario} 𝙉𝙐𝙀𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 25) {
//await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt6, mentions: mentionsContentM }, { quoted: fkontak2 })
//await this.sendMessage(m.chat, { text: `🔒 AHORA *${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS'}* PUEDE EDITAR LAS INFORMACION DEL GRUPO.`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `EL GRUPO *${m.messageStubParameters[0] == 'on' ? 'ESTA CERRADO 🔒' : 'ESTA ABIERTO 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS'} PUEDEN ENVIAR MENSAJES.`, mentions: [m.sender] }, { quoted: fkontak })
/* } else if (m.messageStubType == 28) {
conn.sendMessage(m.chat, { text: `${usuario} ELIMINO A @${m.messageStubParameters[0].split`@`[0]} 🫵`, mentions: [m.sender]}, { quoted: fkontak })  */
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} AHORA ES ADMIN EN ESTE GRUPO\n\n😼🫵ACCIÓN REALIZADA POR: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} DEJA DE SER ADMIN EN ESTE GRUPO\n\n😼🫵ACCION REALIZADA POR: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} CAMBIO LAS DURACIÓN DEL LOS MENSAJE TEMPORALES A *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *DESACTIVÓ* LOS MENSAJE TEMPORAL..`, mentions: [m.sender] }, { quoted: fkontak })
} else {
console.log({
messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})
}
}
