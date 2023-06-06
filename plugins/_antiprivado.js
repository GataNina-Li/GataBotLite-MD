//by https://github.com/elrebelde21 

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0 
if (m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('deletesesion') || m.text.includes('estado') || m.text.includes('bots')) return !0
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antiPrivate && !isOwner && !isROwner) { 
user.warn += 1
if (!(user.warn >= 6)) await this.sendMessage(m.chat, { text: `*${lenguajeGB['smsCreA']()}* *@${m.sender.split`@`[0]}*, ${lenguajeGB['smsprivado']()}\n${nn}`, mentions: [m.sender] }, { quoted: fkontak })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'banchat')}
//await m.reply(`*${lenguajeGB['smsCreA']()}* *@${m.sender.split`@`[0]}*, ${lenguajeGB['smsprivado']()}\n${nn}`,mentions: [m.sender] }, { quoted: fkontak })
if (user.warn >= 6) {
user.warn = 0 
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'banchat')
}
return !1
}