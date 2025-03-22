import ws from 'ws';
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender] || {};
let setting = global.db.data.settings[this.user.jid]
const settingsREAD = global.db.data.settings[this.user.jid] || {}
let prefixRegex = new RegExp('^[' + setting.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ']');
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const participants = m.isGroup ? (await conn.groupMetadata(m.chat)).participants : [];
const mainBotInGroup = participants.some(p => p.id === global.conn.user.jid);
const primaryBot = chat.primaryBot;
const primaryBotConnected = users.some(conn => conn.user.jid === primaryBot);
const primaryBotInGroup = participants.some(p => p.id === primaryBot);

if (m.isGroup) {
if (primaryBot) {
if (primaryBotConnected && primaryBotInGroup) {
if (this.user.jid !== primaryBot) throw !1; 
}
else if (mainBotInGroup) {
if (this.user.jid !== global.conn.user.jid) throw !1;
}}}

if (m.text && prefixRegex.test(m.text)) {
//this.readMessages([m.key])
//this.sendPresenceUpdate('composing', m.chat)
        
let usedPrefix = m.text.match(prefixRegex)[0]
let command = m.text.slice(usedPrefix.length).trim().split(' ')[0]
}

if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('deletesesion') || m.text.includes('estado') || m.text.includes('bots')) return !0
if (m.chat === '120363336642332098@newsletter') return !0
if (setting.antiPrivate && !isOwner && !isROwner) {
await m.reply(`*${lenguajeGB['smsCreA']()}* *@${m.sender.split`@`[0]}*, ${lenguajeGB['smsprivado']()}\n${nn}`)
await this.updateBlockStatus(m.chat, 'block')
}
return !1
}
