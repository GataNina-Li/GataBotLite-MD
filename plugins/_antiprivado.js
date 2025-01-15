export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

let setting = global.db.data.settings[this.user.jid]
const settingsREAD = global.db.data.settings[this.user.jid] || {}

if (m.text && prefixRegex.test(m.text)) {
this.readMessages([m.key])
//this.sendPresenceUpdate('composing', m.chat)
        
let usedPrefix = m.text.match(prefixRegex)[0]
let command = m.text.slice(usedPrefix.length).trim().split(' ')[0]
}

if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('deletesesion') || m.text.includes('estado') || m.text.includes('bots')) return !0
const chat = global.db.data.chats[m.chat]
const bot = global.db.data.settings[this.user.jid] || {}
if (m.chat === '120363336642332098@newsletter') return !0
if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`*${lenguajeGB['smsCreA']()}* *@${m.sender.split`@`[0]}*, ${lenguajeGB['smsprivado']()}\n${nn}`)
await this.updateBlockStatus(m.chat, 'block')
}
return !1
}
