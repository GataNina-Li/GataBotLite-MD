let handler = async (m, { conn, args, isAdmin, isOwner, participants }) => {
/*if (m.isGroup) {
if (!(isAdmin || isOwner)) {
dfail('admin', m, conn)
throw false
}
}*/
//let id = args && /.*@g.us/.test(args[0]) ? args[0] : m.chat
let online = participants.filter((participant) => participant.jid !== conn.user.jid && participant.presence?.isOnline)
let onlineJids = online.map((participant) => participant.jid)
await conn.reply(m.chat, '*USUARIOS EN LÍNEA* \n' + onlineJids.map((jid) => '- @' + jid.replace(/@.+/, '')).join('\n') + '------------', m, { contextInfo: { mentionedJid: onlineJids } })
}
handler.command = /^((list)?online)$/i

export default handler
