import fs from 'fs'
import { execSync } from 'child_process'
let handler = async (m, { conn, command, usedPrefix, text, isAdmin }) => {
let fkontak, who, user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const isCommand1 = /^(backup|respaldo|copia)$/i.test(command)
const isCommand2 = /^(ban(user|usuario|earuser|earusuario))$/i.test(command) 
const isCommand3 = /^(seradmin|autoadmin|tenerpoder)$/i.test(command)
const isCommand4 = /^((set|cambiar|nueva|new)(bio|botbio|biobot))$/i.test(command)
const isCommand5 = /^((set|cambiar|nuev(a|o)?|new)(name|botname|namebot|nombre|nombrebot|botnombre))$/i.test(command)
const isCommand6 = /^((set|cambiar|nueva|new)(ppbot|botpp|fotobot|botfoto))$/i.test(command)
const isCommand7 = /^(update|actualizar|ups)$/i.test(command)
const isCommand8 = /^(banchat|banearchat)$/i.test(command)
const isCommand9 = /^(block|unblock|bloquear|desbloquear)$/i.test(command)

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
if (m.fromMe) return
if (isAdmin) throw lenguajeGB.smsAutoAdmin1()
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply(lenguajeGB.smsAutoAdmin2())}        
break
        
case isCommand4:
if (!text) throw lenguajeGB.smsBioEd1()
if (text.length > 139) throw lenguajeGB.smsBioEd2()
try {
await conn.updateProfileStatus(text).catch(_ => _)
await conn.reply(m.chat, lenguajeGB.smsBioEd3(), m)
} catch (e) {
reportError(e)
}        
break
        
case isCommand5:
if (!text) throw lenguajeGB.smsNameEd1()
if (text.length > 25) throw lenguajeGB.smsNameEd2()
try {
await conn.updateProfileStatus(text).catch(_ => _)
await conn.reply(m.chat, lenguajeGB.smsNameEd3(), m)
} catch (e) {
reportError(e)
}        
break
        
case isCommand6:
bot = conn.user.jid
q = m.quoted ? m.quoted : m
mime = (q.msg || q).mimetype || ''
if (/image/.test(mime)) {
img = await q.download()
if (!img) throw  lenguajeGB.smsFotoEd1(usedPrefix, command)
await conn.updateProfilePicture(bot, img)
await conn.reply(m.chat, lenguajeGB.smsFotoEd2(), m)
} else throw lenguajeGB.smsFotoEd3(usedPrefix, command)        
break
        
case isCommand7:
try {  
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
await conn.reply(m.chat, stdout.toString(), m)}
} catch {
var update = execSync('git remote set-url origin' + md + '.git && git pull')
await m.reply(update.toString())
}        
break
        
case isCommand8:
global.db.data.chats[m.chat].isBanned = true
await conn.reply(m.chat, lenguajeGB.smsBanChE(), m)        
break
        
case isCommand9:
let why = `*Ejemplo:*\n${usedPrefix + command} @${m.sender.split("@")[0]}`
who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
let res = []	
let cmd = command.toLowerCase()
switch (true) {
if (!who) return conn.reply(m.chat, why, m, { mentions: [m.sender] })
		
let status = await conn.getBlockStatus(who)
if (cmd == "block" || cmd == "bloquear") {
  if (status) {
    conn.reply(m.chat, `El usuario ya está bloqueado`, m, { mentions: res })
    return
  }
} else if (cmd == "unblock" || cmd == "desbloquear") {
  if (!status) {
    conn.reply(m.chat, `El usuario no está bloqueado`, m, { mentions: res })
    return
  }
}
		
case cmd == "block" || cmd == "bloquear":
if (who) {
await conn.updateBlockStatus(who, "block").then(() => {
res.push(who)
})
} else {
await conn.reply(m.chat, why, m, { mentions: [m.sender] })
}
break
case cmd == "unblock" || cmd == "desbloquear":
if (who) {
await conn.updateBlockStatus(who, "unblock").then(() => {
res.push(who)
})
} else {
await conn.reply(m.chat, why, m, { mentions: [m.sender] })
}
break
}
if (res[0]) conn.reply(m.chat, `*Éxito ${command} ${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}*`, m, { mentions: res })
break
       
}}

handler.command = /^(backup|respaldo|copia|ban(user|usuario|earuser|earusuario)|seradmin|autoadmin|tenerpoder|(set|cambiar|nueva|new)(bio|botbio|biobot)|(set|cambiar|nuev(a|o)?|new)(name|botname|namebot|nombre|nombrebot|botnombre)|(set|cambiar|nueva|new)(ppbot|botpp|fotobot|botfoto)|update|actualizar|ups|banchat|banearchat|salir|leavegc|salirdelgrupo|leave|block|unblock|bloquear|desbloquear)$/i
handler.owner = true

export default handler
