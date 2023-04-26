let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`${lenguajeGB['smsAdwa']()}`)
if (chat.antiLink && isGroupLink && !isAdmin) { 
if (m.text.includes(linkThisGroup)) return m.reply(lenguajeGB['smsWaMismoEnlace']())
//if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAllAdmin']()}`)  
if (isBotAdmin) {
await conn.reply(m.chat, `${lenguajeGB['smsEnlaceWat']()} *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`${lenguajeGB['smsSoloOwner']()}`)
}
return !0
}
