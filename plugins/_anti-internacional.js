/*let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, groupMetadata } ) {
let   groupMetadata.participants.map(v => v.id)
let texto = `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} *@${m.sender.split`@`[0]}* ${lenguajeGB['smsInt2']()}`    
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antifake && !isAdmin && !isOwner && !isROwner && bot.restrict) {

if (m.sender.startsWith('6' || '6')) {
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
  
}}
export default handler*/

/*let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, groupMetadata }) {
  
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
let texto = `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} *@${m.sender.split`@`[0]}* ${lenguajeGB['smsInt2']()}`

if (isBotAdmin && chat.antifake && !isAdmin && !isOwner && !isROwner && bot.restrict) { 
while (chat.antifake && bot.restrict) {
  
let participantIds = groupMetadata.participants.map(p => p.id)
for (let participantId of participantIds) {
if (participantId.startsWith('51' || '51')) {
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [participantId], 'remove')
  
}}
await new Promise(resolve => setTimeout(resolve, 2000))
  
}
}}
export default handler*/

