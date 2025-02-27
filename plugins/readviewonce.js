let { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'))

let handler = async (m, { conn }) => {
if (!m.quoted.viewOnce && !m.quoted) return conn.reply(m.chat, `*Responde a un mensaje de una sola vez "ViewOnce" para ver su contenido.*`, m)

let buffer = await m.quoted.download(false)
let messageType = m.quoted.mtype

if (/videoMessage/.test(messageType)) {
await conn.sendMessage(m.chat, { video: buffer, caption: m.quoted.caption || '', mimetype: 'video/mp4' }, { quoted: m })

} else if (/imageMessage/.test(messageType)) {
await conn.sendMessage(m.chat, { image: buffer, caption: m.quoted.caption || '' }, { quoted: m })

} else if (/audioMessage/.test(messageType)) {
await conn.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: false }, { quoted: m })
    
} else {
return conn.reply(m.chat, `❌ No es un mensaje de imagen, video o audio ViewOnce.`, m)
}}

handler.command = ['readviewonce', 'read', 'viewonce', 'ver']
handler.register = true

export default handler
