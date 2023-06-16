import fs from 'fs' 
import { execSync } from 'child_process'
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, { conn, command, usedPrefix, text, isAdmin, isOwner, isROwner, participants, groupMetadata  }) => {
let fkontak, who, user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const isCommand1 = /^(backup|respaldo|copia)$/i.test(command)
const isCommand2 = /^(ban(user|usuario|earuser|earusuario))$/i.test(command) 
const isCommand3 = /^(seradmin|autoadmin|tenerpoder)$/i.test(command)
const isCommand4 = /^((set|cambiar|nueva|new)(bio|botbio|biobot))$/i.test(command)
const isCommand5 = /^((set|cambiar|nuev(a|o)?|new)(name|botname|namebot|nombre|nombrebot|botnombre))$/i.test(command)
const isCommand6 = /^((set|cambiar|nueva|new)(ppbot|botpp|fotobot|botfoto))$/i.test(command)
const isCommand7 = /^(update|actualizar|ups)$/i.test(command)
const isCommand8 = /^(banchat|banearchat)$/i.test(command)
const isCommand9 = /^(block|unblock|bloquear|desbloquear)$/i.test(command)
const isCommand10 = /^(restablecerdatos|borrardatos|deletedatauser)$/i.test(command)
const isCommand11 = /^(join|nuevogrupo|newgrupo|unete)$/i.test(command)
const isCommand12 = /^(bcbot|bcsubbot|bcsubot)$/i.test(command)
const isCommand13 = /^((broadcast|bc)(group|grup|gc))$/i.test(command)
const isCommand14 = /^(broadcastchats?|bcc(hats?)?)$/i.test(command)
const isCommand15 = /^(broadcastall|bc)$/i.test(command)

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
if (isAdmin) return m.reply(lenguajeGB.smsAutoAdmin1())
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply(lenguajeGB.smsAutoAdmin2())}        
break
        
case isCommand4:
if (!text) return m.reply(lenguajeGB.smsBioEd1())
if (text.length > 139) return m.reply(lenguajeGB.smsBioEd2())
try {
await conn.updateProfileStatus(text).catch(_ => _)
await conn.reply(m.chat, lenguajeGB.smsBioEd3(), m)
} catch (e) {
reportError(e)
}        
break
        
case isCommand5:
if (!text) return m.reply(lenguajeGB.smsNameEd1())
if (text.length > 25) return m.reply(lenguajeGB.smsNameEd2())
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
if (!img) return m.reply(lenguajeGB.smsFotoEd1(usedPrefix, command))
await conn.updateProfilePicture(bot, img)
await conn.reply(m.chat, lenguajeGB.smsFotoEd2(), m)
} else return m.reply(lenguajeGB.smsFotoEd3(usedPrefix, command))     
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
let toUser = `@${m.sender.split("@")[0]}`
let why = lenguajeGB.smsBlockUn1(usedPrefix, command, toUser)
who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
let res = []	
let cmd = command.toLowerCase()
let comd = command.toUpperCase()
if (!who) return conn.reply(m.chat, why, m, { mentions: [m.sender] })
if (!((cmd === "unblock" || cmd === "desbloquear") && (isOwner || isROwner))) {
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0]
if (who.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, lenguajeGB.smsBlockUn2(comd, ownerNumber), null, { mentions: [aa] })
return
}}}
switch (true) {		
case cmd == "block" || cmd == "bloquear":
if (who) {
await conn.updateBlockStatus(who, "block").then(() => { res.push(who) })
} else {
await conn.reply(m.chat, why, m, { mentions: [m.sender] })}
break
case cmd == "unblock" || cmd == "desbloquear":
if (who) {
await conn.updateBlockStatus(who, "unblock").then(() => { res.push(who) })
} else {
await conn.reply(m.chat, why, m, { mentions: [m.sender] })}
break
}
let useB = `${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}`
if (res[0]) conn.reply(m.chat, lenguajeGB.smsBlockUn3(comd, useB), m, { mentions: res })
break
        
case isCommand10:
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
if(!text && !m.quoted) return conn.reply(m.chat, lenguajeGB.smsRestarU1(), m)
if(isNaN(number)) return conn.reply(m.chat, lenguajeGB.smsRestarU2(), m)
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
users = m.isGroup ? participants.find(u => u.jid == user) : {}
number = user.split('@')[0] 
delete global.global.db.data.users[user]
conn.reply(m.chat, lenguajeGB.smsRestarU3(number), null, { mentions: [user] })
}        
break
        
case isCommand11:
user = m.sender.split('@')[0] 
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_1, code1] = link.match(linkRegex) || []
if (!code1) return m.reply(lenguajeGB.smsJoin1(usedPrefix, command))
try {      
if ( isOwner || m.fromMe) {
await m.reply(lenguajeGB.smsJoin2())
let res1 = await conn.groupAcceptInvite(code1)
await conn.sendMessage(res1, { text: lenguajeGB.smsJoin(user), mentions: (await conn.groupMetadata(`${res1}`)).participants.map(v => v.id) }, [user], { quoted: fkontak })
}} catch (e) {
reportError(e)
}        
break

case isCommand12:
if (!text && !m.quoted) return m.reply(lenguajeGB.smsBCMensaje(usedPrefix, command))
if (conn.user.jid !== global.conn.user.jid) return false
users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
if (users.length === 0) {
await m.reply(lenguajeGB.smsJBCom4())
return
}
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : lenguajeGB.smsJBDifu1() + teks)
for (let id of users) {
await delay(1500)
await conn.copyNForward(id, content, true)
}
let difuUser = `${users.map(v => '🌺 wa.me/' + v.replace(/[^0-9]/g, '') + `?text=${encodeURIComponent(usedPrefix)}estado`).join('\n')}`
let tolUser = users.length * 1.5
let numUser = users.length
await conn.reply(m.chat, lenguajeGB.smsJBDifu2(numUser, difuUser, tolUser).trim(), m)        
break
        
case isCommand13:
if (!text && !m.quoted) return m.reply(lenguajeGB.smsBCMensaje(usedPrefix, command))        
let cc2 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks2 = text ? text : cc2.text 
let d = new Date(new Date + 3600000)
let locale = lenguajeGB.lenguaje()
let dia = d.toLocaleDateString(locale, { weekday: 'long' })
let fecha = d.toLocaleDateString(lenguajeGB.lenguaje(), { day: 'numeric', month: 'numeric', year: 'numeric' })
let mes = d.toLocaleDateString(lenguajeGB.lenguaje(), { month: 'long' })
let año = d.toLocaleDateString(lenguajeGB.lenguaje(), { year: 'numeric' })
let tiempo = d.toLocaleString('es-CO', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
let groups = Object.keys(await conn.groupFetchAllParticipating())
let usersTag = participants.map(u => conn.decodeJid(u.id))
let readMS = String.fromCharCode(8206).repeat(850)
await m.reply(lenguajeGB.smsChatGP1())
//for (let id of groups) {  
//let infoGP = lenguajeGB.smsChatGP2(readMS, dia, mes, año, fecha, tiempo)  
//await conn.reply(id, infoGP + teks2, { mentions: usersTag }, { quoted: null })         
//}
for (let i = 0; i < groups.length; i++) {
const id = groups[i];
const infoGP = lenguajeGB.smsChatGP2(readMS, dia, mes, año, fecha, tiempo)
const delay = i * 4000 //4 seg
setTimeout(async () => {
await conn.reply(id, infoGP + teks2, { mentions: usersTag }, { quoted: fkontak });
}, delay)}        
let totalGP = groups.length
await m.reply(lenguajeGB.smsChatGP3(totalGP))        
break
        
case isCommand14:
if (!text && !m.quoted) return m.reply(lenguajeGB.smsBCMensaje(usedPrefix, command))        
let cc3 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks3 = text ? text : cc3.text  
let chats = Object.keys(global.db.data.users).filter(user => user.endsWith('@s.whatsapp.net')) 
await conn.reply(m.chat, lenguajeGB.smsBCMensaje2(), m)
let start = new Date().getTime()
let totalPri = 0
for (let user of chats) {
await new Promise(resolve => setTimeout(resolve, 2000)) // 2 segundos
await conn.reply(user, `${lenguajeGB.smsBCbot7()}\n\n` + teks3, null)
totalPri++
if (totalPri >= 500000) { 
break
}}   
let end = new Date().getTime() 
let time = Math.floor((end - start) / 1000)
if (time >= 60) {
let minutes = Math.floor(time / 60)
let seconds = time % 60
time = `${minutes} minutos y ${seconds} segundos`
} else {
time = `${time} segundos`
}
await m.reply(lenguajeGB.smsBCMensaje3(totalPri, time))        
break
        
case isCommand15:
if (!text && !m.quoted) return m.reply(lenguajeGB.smsBCMensaje(usedPrefix, command))   
let cc4 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks4 = text ? text : cc4.text 
let groups2 = Object.keys(await conn.groupFetchAllParticipating())
let chats2 = Object.keys(global.db.data.users).filter(user => user.endsWith('@s.whatsapp.net'))
await conn.reply(m.chat, lenguajeGB.smsBCMensaje2(), m)
let start2 = new Date().getTime()
let usersTag2 = participants.map(u => conn.decodeJid(u.id))
let totalPri2 = 0
//for (let group of groups2) {
//await conn.reply(group, `${lenguajeGB.smsBCbot7()}\n\n` + teks4, { mentions: usersTag2 }, { quoted: m })     
//}
for (let i = 0; i < groups2.length; i++) {
const group = groups2[i];
const delay = i * 4000; // 4 seg
setTimeout(async () => {
await conn.reply(group, `${lenguajeGB.smsBCbot7()}\n\n` + teks4, { mentions: usersTag2 }, { quoted: fkontak });
}, delay)}
for (let user of chats2) {
await new Promise(resolve => setTimeout(resolve, 2000)) // 2 segundos
await conn.reply(user, `${lenguajeGB.smsBCbot7()}\n\n` + teks4, null)
totalPri2++
if (totalPri2 >= 500000) { 
break
}}  
let end2 = new Date().getTime()
let totalPrivate2 = chats2.length
let totalGroups2 = groups2.length
let total2 = totalPrivate2 + totalGroups2
let time2 = Math.floor((end2 - start2) / 1000)
if (time2 >= 60) {
let minutes = Math.floor(time2 / 60)
let seconds = time2 % 60
time2 = `${minutes} minutos y ${seconds} segundos`
} else {
time2 = `${time2} segundos`
} 
await m.reply(`${lenguajeGB.smsBCbot1()}
\`\`\`${lenguajeGB.smsBCbot2()} >> ${totalPrivate2}\`\`\`
\`\`\`${lenguajeGB.smsBCbot3()} >>   ${totalGroups2}\`\`\`
\`\`\`${lenguajeGB.smsBCbot4()} >>   ${total2}\`\`\`\n\n*${lenguajeGB.smsBCbot5()} ${time2}*\n${totalPri2 >= 500000 ? `\n*${lenguajeGB.smsBCbot6()}*` : ''}`)        
break
        
}}

handler.command = /^(backup|respaldo|copia|ban(user|usuario|earuser|earusuario)|seradmin|autoadmin|tenerpoder|(set|cambiar|nueva|new)(bio|botbio|biobot)|(set|cambiar|nuev(a|o)?|new)(name|botname|namebot|nombre|nombrebot|botnombre)|(set|cambiar|nueva|new)(ppbot|botpp|fotobot|botfoto)|update|actualizar|ups|banchat|banearchat|block|unblock|bloquear|desbloquear|restablecerdatos|borrardatos|deletedatauser|join|nuevogrupo|newgrupo|unete|bcbot|bcsubbot|bcsubot|(broadcast|bc)(group|grup|gc)|broadcastchats?|bcc(hats?)?|broadcastall|bc)$/i
handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
  
const delay = time => new Promise(res => setTimeout(res, time))
