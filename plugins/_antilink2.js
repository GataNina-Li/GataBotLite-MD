let linkRegex = /https?:/i
let linkRegex2 = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i 
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text) || linkRegex2.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink2 && m.text.includes(grupo)) return m.reply(`${lenguajeGB['smsAdwa']()}`)
if (chat.antiLink2 && isGroupLink && !isAdmin) {  
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup) || m.text.includes(linkThisGroup2)) return m.reply(lenguajeGB['smsWaMismoEnlace']())  
}    
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `${lenguajeGB['smsEnlaceWatt']()} *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`)
}
return !0
}

function extraerIDWhatsApp(texto) {
var inicio = texto.indexOf("https://chat.whatsapp.com/") + "https://chat.whatsapp.com/".length
var fin = texto.indexOf(" ", inicio);
if (fin === -1) {
fin = texto.length // Si no hay espacio después de la ID, tomar hasta el final del texto
}
var id = texto.substring(inicio, fin)
return id
}










