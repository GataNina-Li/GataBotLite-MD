import fs from 'fs'
let handler = async (m, { conn, command, usedPrefix, text }) => {
let fkontak, who, user, number, bot, bant, ownerNumber, aa, users, usr
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const isCommand1 = /^(backup|respaldo|copia)$/i.test(command)
const isCommand2 = /^(ban(user|usuario|earuser|earusuario))$/i.test(command) 
const isCommand3 = /^((unban|desban)(user|usuario|earuser|earusuario))$/i.test(command) 

async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {     
case isCommand1:
await conn.reply(m.sender, lenguajeGB.smsResP1(), fkontak)
try {
let d = new Date
let date = d.toLocaleDateString('fr', { day: 'numeric', month: 'long', year: 'numeric' })
let database = await fs.readFileSync(`./database.json`)
let creds = await fs.readFileSync(`./GataBotSession/creds.json`)
await conn.reply(m.sender, lenguajeGB.smsResP2(date), fkontak)
await conn.sendMessage(m.sender, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: m })
await conn.sendMessage(m.sender, {document: creds, mimetype: 'application/json', fileName: `creds.json`}, { quoted: m })
} catch (e) {
reportError(e)
}   
break
    
case isCommand2:
try{
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = lenguajeGB.smsPropban1(usedPrefix, command, bot)
if (!text && !m.quoted) return conn.reply(m.chat, bant, null, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, lenguajeGB.smsPropban2(bot), null, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, lenguajeGB.smsPropban3(ownerNumber), null, { mentions: [aa] })
return
}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, lenguajeGB.smsPropban4(number), null, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, lenguajeGB.smsPropban5(), null, { mentions: [user] })   
await conn.reply(user, lenguajeGB.smsPropban6(number, usr), null, { mentions: [user, m.sender] })
}} catch (e) {
await conn.reply(m.chat, lenguajeGB.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}
break
        
case isCommand3:
try{
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = lenguajeGB.smsPropdesban1(usedPrefix, command, bot)
if (!text && !m.quoted) return conn.reply(m.chat, bant, null, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
//if(user === conn.user.jid) return conn.reply(m.chat, lenguajeGB.smsPropban2(bot), null, { mentions: [user] })   
//for (let i = 0; i < global.owner.length; i++) {
//ownerNumber = global.owner[i][0];
//if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
//aa = ownerNumber + '@s.whatsapp.net'
//await conn.reply(m.chat, lenguajeGB.smsPropban3(ownerNumber), null, { mentions: [aa] })
//return
//}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, lenguajeGB.smsPropdesban2(number), null, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, lenguajeGB.smsPropdesban3(), null, { mentions: [user] })   
await conn.reply(user, lenguajeGB.smsPropdesban4(number, usr), null, { mentions: [user, m.sender] })
}} catch (e) {
await conn.reply(m.chat, lenguajeGB.smsPropdesban5(usedPrefix, command, number), null, m)
console.log(e) 
}        
break
}}

handler.command = /^(backup|respaldo|copia|ban(user|usuario|earuser|earusuario)|(unban|desban)(user|usuario|earuser|earusuario))$/i
handler.owner = true

export default handler
