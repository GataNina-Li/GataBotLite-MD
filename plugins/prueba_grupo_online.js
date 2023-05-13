let handler = async (m, { conn, args, isAdmin, isOwner, participants, text }) => {
/*if (m.isGroup) {
if (!(isAdmin || isOwner)) {
dfail('admin', m, conn)
throw false
}
}*/
//let online = participants.filter((participant) => participant.jid !== conn.user.jid && participant.presence?.isOnline)
//let onlineJids = online.map((participant) => participant.jid)
//await conn.reply(m.chat, '*USUARIOS EN LÍNEA* \n' + onlineJids.map((jid) => '- @' + jid.replace(/@.+/, '')).join('\n') + '------------', m, { contextInfo: { mentionedJid: onlineJids } })
//}
//let users = participants.map(u => u.presences.id).filter(v => v !== conn.user.jid)
//m.reply(`*Tep:*\n${text ? `${text}\n` : ''}\nEN LINEA\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\nEN LINEA', null, {
//mentions: users })

//let onlineUsers = participants.filter(user => user.presence && user.presence.isOnline && user.jid !== conn.user.jid)
//let mentionList = onlineUsers.map(user => `@${user.jid.replace(/@.+/, '')}`).join('\n')

//let replyText = `Usuarios en línea:\n\n${mentionList}`
//await conn.reply(m.chat, replyText, m, { mentions: onlineUsers })
let users = participants.map(u => u.presences).filter(v => v !== conn.user.jid)
m.reply(`EN LINEA\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\nEN LINEA', null, {
mentions: users
})
}
handler.command = /^((list)?online)$/i

export default handler
