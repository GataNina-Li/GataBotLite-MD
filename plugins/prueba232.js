//let handler = async (m, { conn, isOwner, usedPrefix, command, participants }) => {
let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n ${await conn.getName(jid)}\n ${jid} [${chat?.metadata?.read_only ? 'NO' : 'SI'}]\n\n`
m.reply(`*GRUPOS*
${txt}
`.trim())
}
handler.command = /^(mundogrupo)$/i

export default handler
