let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, participants} ) {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin && chat.antifake) {
let texto = `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} *@${m.sender.split`@`[0]}* ${lenguajeGB['smsInt2']()}`

for (const participant of participants) {
if (/^(2|33|44|51)/.test(participant)) {
await conn.reply(chat.jid, texto, fkontak)
setTimeout(async () => {
let responseb = await conn.groupParticipantsUpdate(chat.jid, [participant], 'remove')
if (responseb[0].status === "404") return
}, 2000) 
}}
   
/*if (m.sender.startsWith('265' || '265')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('90' || '90')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 
	
if (m.sender.startsWith('91' || '91')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('92' || '92')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('93' || '93')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('94' || '94')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('7' || '7')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('49' || '49')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('49' || '49')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('6' || '6')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('222' || '222')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('92' || '92')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 	
*/   
}
}
export default handler
