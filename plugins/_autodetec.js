import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
let usuario = `@${m.sender.split`@`[0]}`
let inf = lenguajeGB['smsAvisoIIG']()
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  

let nombre, foto, edit, newlink, status, admingp, noadmingp
nombre = `${inf}*${usuario} HA CAMBIADO EL NOMBRE DEL GRUPO*\n\n🔰 *AHORA EL GRUPO SE LLAMA:*\n*${m.messageStubParameters[0]}*`
foto = `${inf}*${usuario} HA CAMBIADO LA IMAGEN DE ${groupMetadata.subject}*`
edit = `${inf}*${usuario} HA PERMITIDO QUE ${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS'} PUEDAN CONFIGURAR ${groupMetadata.subject}*`
newlink = `${inf}*EL ENLACE DE ${groupMetadata.subject} HA SIDO RESTABLECIDO POR ${usuario}*`
status = `${inf}*${groupMetadata.subject} HA SIDO ${m.messageStubParameters[0] == 'on' ? 'CERRADO 🔒' : 'ABIERTO 🔓'} POR ${usuario}*\n\n💬 *AHORA ${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS'} PUEDEN ENVIAR MENSAJES*`
admingp = `${inf}*${usuario} HA DECIDIDO QUE @${m.messageStubParameters[0].split`@`[0]} SEA ADMIN EN ${groupMetadata.subject}*`
noadmingp = `${inf}*${usuario} HA DECIDIDO QUE @${m.messageStubParameters[0].split`@`[0]} DEJA DE SER ADMIN EN ${groupMetadata.subject}*`

if (m.messageStubType == 21) {
await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, { quoted: fkontak })   
  
} else if (m.messageStubType == 22) {
await conn.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentions: [m.sender] }, { quoted: fkontak })

} else if (m.messageStubType == 23) {
await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, { quoted: fkontak })    

} else if (m.messageStubType == 25) {
await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, { quoted: fkontak })  
	
} else if (m.messageStubType == 26) {
await conn.sendMessage(m.chat, { text: status, mentions: [m.sender] }, { quoted: fkontak })  

} else if (m.messageStubType == 29) {
await conn.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

} else if (m.messageStubType == 30) {
await conn.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} CAMBIO LAS DURACIÓN DEL LOS MENSAJE TEMPORALES A *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })

} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *DESACTIVÓ* LOS MENSAJE TEMPORAL..`, mentions: [m.sender] }, { quoted: fkontak })
} else {
console.log({ messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})
}}
