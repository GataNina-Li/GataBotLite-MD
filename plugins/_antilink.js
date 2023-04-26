let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i 
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`${lenguajeGB['smsAdwa']()}`)
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return m.reply(lenguajeGB['smsWaMismoEnlace']())  
}    
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `${lenguajeGB['smsEnlaceWat']()} *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`)
}
return !0
}
