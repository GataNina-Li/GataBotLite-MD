import { downloadContentFromMessage } from "@whiskeysockets/baileys";

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
let media, msg, type

const { antiver, isBanned } = global.db.data.chats[m.chat]
if (!antiver || isBanned || !(m.mtype === 'viewOnceMessageV2' || m.mtype === 'viewOnceMessageV2Extension' || m.mtype === 'messageContextInfo')) return

if (m.mtype === 'viewOnceMessageV2' || m.mtype === 'viewOnceMessageV2Extension') {
msg = m.mtype === 'viewOnceMessageV2' ? m.message.viewOnceMessageV2.message : m.message.viewOnceMessageV2Extension.message
} else if (m.mtype === 'messageContextInfo' && m.mediaMessage?.imageMessage) {
msg = { imageMessage: m.mediaMessage.imageMessage }
} else {
return
}

type = Object.keys(msg)[0]
let mediaType = type === 'imageMessage' ? 'image' : type === 'videoMessage' ? 'video' : type === 'audioMessage' ? 'audio' : null

if (!mediaType) return

try {
media = await downloadContentFromMessage(msg[type], mediaType)

let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}

const fileSize = formatFileSize(msg[type].fileLength)
const description = mid.antiviewonce(type, fileSize, m, msg)

if (/image|video/.test(type)) {
return await conn.sendFile(m.chat, buffer, type === 'imageMessage' ? 'error.jpg' : 'error.mp4', description, m, false, { mentions: [m.sender] })
} else if (/audio/.test(type)) {
await conn.reply(m.chat, description, m, { mentions: [m.sender] })
await conn.sendMessage(m.chat, { audio: buffer, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
}} catch (error) {
console.error('Error al procesar el mensaje de visualización única: ', error)
}}

export default handler


/*import { downloadContentFromMessage } from "@whiskeysockets/baileys"

export async function before(m, { isAdmin, isBotAdmin }) {
let chat = db.data.chats[m.chat]
if (!chat.antiver || chat.isBanned) return
if (m.mtype == 'viewOnceMessageV2' || m.mtype.hasOwnProperty("viewOnce")) {
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption}` + lenguajeGB.smsAntiView1(), m)
} else if (/image/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption}` + lenguajeGB.smsAntiView2(), m)
}}}*/
