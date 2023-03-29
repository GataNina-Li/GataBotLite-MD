import fs from 'fs'
let handler = async (m, { conn, command, usedPrefix, text }) => {
let fkontak, who, user, number, bot, bant, ownerNumber, aa, users, usr
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const isCommand1 = /^(backup|respaldo|copia)$/i.test(command)
const isCommand2 = /^(ban(user|ear(user)?)?)$/i.test(command);

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
bant = `*ETIQUETE A ALGUIEN O RESPONDA AL MENSAJE DEL USUARIO O ESCRIBA EL NÚMERO QUE QUIERE BANEAR DE LOS COMANDOS*\n\n*EJEMPLO:*\n*${usedPrefix + command} @${bot}*`
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

if(user === conn.user.jid) return conn.reply(m.chat, `*@${bot} NO PUEDE SER BANEADO CON ESTE COMANDO*`, null, { mentions: [user] })
    
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `*NO PUEDO BANEAR AL OWNER @${ownerNumber} DE ${packname}*`, null, { mentions: [aa] })
return
}}
users = global.db.data.users

if (users[user].banned === true) conn.reply(m.chat, `*NO ES NECESARIO VOLVER A BANEAR A @${number} SI YA LO ESTÁ*`, null, { mentions: [user] }) 

try{
users[user].banned = true
} catch (e) {
users[number + '@s.whatsapp.net'].banned = true    
}
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, `*USUARIO BANEADO CON ÉXITO*`, null, { mentions: [user] })   
await conn.reply(user, `*@${number} ESTAS BANEADO/A POR @${usr} NO PUEDES USAR LOS COMANDOS HASTA QUE ALGUIEN REVIERTA EL BANEO*`, null, { mentions: [user, m.sender] })
}
} catch (e) {
await conn.reply(m.chat, `*SURGIÓ UN ERROR, PUEDE SER QUE EL USUARIO NO ESTE EN MI BASE DE DATOS INTENTE ESCRIBIR EL NÚMERO ${number}, SI EL ERROR CONTINÚA REPORTE ESTE COMANDO*`, null, m)
console.log(e) 
}
break
}}

handler.command = /^(backup|respaldo|copia|ban(user|ear(user)?)?)$/i
handler.owner = true

export default handler
