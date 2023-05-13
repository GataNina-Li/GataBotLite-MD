let handler = async (m, { conn, args, isAdmin, isOwner }) => {
/*if (m.isGroup) {
if (!(isAdmin || isOwner)) {
dfail('admin', m, conn)
throw false
}
}*/
let id = args && /.*@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(conn.chats.get(id).presences), conn.user.jid]
await conn.reply(m.chat, '*USUARIOS EN LÍNEA* \n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + '------------', m, { contextInfo: { mentionedJid: online }})
}
handler.command = /^((list)?online)$/i

export default handler
