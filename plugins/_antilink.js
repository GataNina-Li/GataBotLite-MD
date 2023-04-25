let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`${lenguajeGB['smsAdwa']()}`)
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = grupo + `/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}  
if (!isBotAdmin) return await m.reply(`${lenguajeGB['smsAllAdmin']()}`) 
if (isBotAdmin && bot.restrict) {
await m.reply(`${lenguajeGB['smsEnlaceWat']()} ${await this.getName(m.sender)}`)
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} else if (!bot.restrict)  return m.reply(`${lenguajeGB['smsSoloOwner']()}`)
}
return !0
}
