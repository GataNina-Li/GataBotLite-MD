let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'

if (isBotAdmin && chat.antifake && !isAdmin && !isOwner && !isROwner && bot.restrict) {
let texto = `*${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} @${toUser} ${lenguajeGB['smsInt2']()}*`
	
if (m.sender.startsWith('5' || '5')) {
await conn.reply(m.chat, texto, null, { mentions: [aa] })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('6' || '6')) {
await conn.reply(m.chat, texto, null, { mentions: [aa] })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
		
if (m.sender.startsWith('9' || '9')) {
await conn.reply(m.chat, texto, null, { mentions: [aa] })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('7' || '7')) {
await conn.reply(m.chat, texto, null, { mentions: [aa] })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('4' || '4')) {
await conn.reply(m.chat, texto, null, { mentions: [aa] })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('2' || '2')) {
await conn.reply(m.chat, texto, null, { mentions: [aa] })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

}}
export default handler
