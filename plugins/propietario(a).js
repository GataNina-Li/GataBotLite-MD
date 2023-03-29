import fs from 'fs'
let handler = async (m, { conn, command, usedPrefix, text }) => {
let fkontak, who
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
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}
var user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'        
let bant = `*ETIQUETE A ALGUIEN O RESPONDA AL MENSAJE DEL USUARIO O ESCRIBA EL NÚMERO QUE QUIERE BANEAR DE LOS COMANDOS*\n\n*EJEMPLO:*\n*${usedPrefix + command} @${conn.user.jid.split`@`[0]}*`
if (!text && !m.quoted) return conn.reply(m.chat, bant, null, { mentions: [user] })
               
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
let number = user.split('@')[0]

if(user === conn.user.jid) conn.reply(m.chat, `*@${conn.user.jid.split`@`[0]} NO PUEDE SER BANEADA CON ESTE COMANDO*`, null, { mentions: [user] })
 
let users = global.db.data.users
users[user].banned = true
conn.reply(m.chat, `*USUARIO BANEADO CON ÉXITO*`, null, { mentions: [user] })   
conn.reply(user, `*@${number} ESTAS BANEADO/A POR @${m.sender.split('@')[0]} NO PUEDES USAR LOS COMANDOS HASTA QUE ALGUIEN REVIERTA EL BANEO*`, null, { mentions: [user, m.sender] })
}
} catch (e) {
conn.reply(m.chat, `*SURGIÓ UN ERROR, INTENTE ESCRIBIR EL NÚMERO, SI EL ERROR CONTINÚA REPORTE ESTE COMANDO*`, null, m)
console.log(e) 
}
break
}}

handler.command = /^(backup|respaldo|copia|ban(user|ear(user)?)?)$/i
handler.owner = true

export default handler
