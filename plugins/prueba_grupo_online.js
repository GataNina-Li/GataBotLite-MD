/*let handler = async (m, { conn, participants }) => {
  let onlineUsers = participants
    .filter(user => user.presence && user.presence.isOnline && user.jid !== conn.user.jid)
    .map(user => user.jid.replace(/@.+/, ''))

  let mentionList = onlineUsers.map(jid => `@${jid}`).join('\n')

  let replyText = `Usuarios en línea:\n\n${mentionList}`

  await conn.reply(m.chat, replyText, m, { mentions: onlineUsers })
}

handler.command = /^(listonline)$/i

export default handler*/

let handler = async (m, { conn }) => {
  if (!m.quoted) throw 'RESPONDA A UN MENSAJE'
  if (!m.quoted.fromMe) throw false
  if (!m.quoted.id) throw false
  let members = m.quoted.chat.endsWith('g.us') ? (await conn.groupMetadata(m.quoted.chat)).participants.length - 1 : m.quoted.chat.endsWith('@broadcast') ? -1 : 1
  let { reads, deliveries } = await conn.messageInfo(m.quoted.chat, m.quoted.id)
  let txt = `
*Leído por:*
${reads.sort((a, b) => b.t - a.t).map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`).join('\n')}
${members > 1 ? `${members - reads.length} restante` : ''}

*Entregado a:*
${deliveries.sort((a, b) => b.t - a.t).map(({ jid, t }) => `wa.me/${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`).join('\n')}
${members > 1 ? `${members - reads.length - deliveries.length} restante` : ''}
`.trim()
  m.reply(txt, null, {
    contextInfo: {
      mentionedJid: conn.parseMention(txt)
    }
  })
}
handler.command = /^((list)?online)$/i

export default handler

function formatDate(n, locale = 'es') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
