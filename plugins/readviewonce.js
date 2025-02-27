let { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'));

let handler = async (m, { conn }) => {
let quoted = m.quoted || (m.mediaMessage?.imageMessage || m.mediaMessage?.videoMessage || m.mediaMessage?.audioMessage)
    
if (!quoted) return conn.reply(m.chat, `*Responde a un mensaje de una sola vez "ViewOnce" para ver su contenido.*`, m)

let buffer = await quoted.download?.(false)
if (!buffer) return conn.reply(m.chat, `❌ No se pudo descargar el contenido.`, m)

let messageType = quoted.mtype || m.mediaType

if (/videoMessage/.test(messageType)) {
await conn.sendMessage(m.chat, { video: buffer, caption: quoted.caption || '', mimetype: 'video/mp4' }, { quoted: m })

} else if (/imageMessage/.test(messageType)) {
await conn.sendMessage(m.chat, { image: buffer, caption: quoted.caption || '' }, { quoted: m })

} else if (/audioMessage/.test(messageType)) {
await conn.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: false }, { quoted: m })

} else {
return conn.reply(m.chat, `❌ No es un mensaje de imagen, video o audio ViewOnce.`, m)
}}

handler.command = ['readviewonce', 'read', 'viewonce', 'ver']
handler.register = true

export default handler
