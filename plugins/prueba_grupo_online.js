let handler = async (m, { conn, participants }) => {
  let onlineUsers = participants
    .filter(user => user.presence && user.presence.isOnline && user.jid !== conn.user.jid)
    .map(user => user.jid.replace(/@.+/, ''))

  let mentionList = onlineUsers.map(jid => `@${jid}`).join('\n')

  let replyText = `Usuarios en línea:\n\n${mentionList}`

  await conn.reply(m.chat, replyText, m, { mentions: onlineUsers })
}

handler.command = /^(listonline)$/i

export default handler
