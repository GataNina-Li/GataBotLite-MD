import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
const fs = { ...fsPromises, existsSync };
import path, { join } from 'path' 

let handler = async (m, { conn, command, usedPrefix, args, text, isOwner }) => {
const isCommand1 = /^(deletesesion|eliminarsesion|borrarsesion|delsesion|delsession|cerrarsesion)$/i.test(command)  
const isCommand2 = /^(berhenti|pausesb|detenersb|pausarsb)$/i.test(command)  
const isCommand3 = /^(listjadibot|bots|subsbots|subbots)$/i.test(command)  

async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}
  
switch (true) {       
case isCommand1:
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`
const path = `./GataJadiBot/${uniqid}`
let comd = `${lenguajeGB.lenguaje() == 'es' ? 'serbot' : 'jadibot'}`
let comd2 = `${lenguajeGB.lenguaje() == 'es' ? 'pausarsb' : 'pausesb'}`

if (!await fs.existsSync(path)) {
await conn.sendMessage(m.chat, { text: lenguajeGB.smsFoldErr(usedPrefix, comd) }, { quoted: m })
return
}
if (global.conn.user.jid !== conn.user.jid) return conn.sendMessage(m.chat, {text: lenguajeGB.smsJBDel() + `\n\n*https://api.whatsapp.com/send/?phone=${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}&type=phone_number&app_absent=0*`}, { quoted: m }) 
else {
await conn.sendMessage(m.chat, { text: lenguajeGB.smsJBAdios() }, { quoted: m })}
try {
fs.rmdir("./GataJadiBot/" + uniqid, { recursive: true, force: true })
await conn.sendMessage(m.chat, { text : lenguajeGB.smsJBCerrarS() } , { quoted: m })
} catch (e) {
reportError(e)
}  
break
    
case isCommand2:
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, lenguajeGB.smsJBCom1(), m)
else {
await conn.reply(m.chat, lenguajeGB.smsJBCom2(), m)
conn.ws.close()}  
break
    
case isCommand3:
if (global.db.data.settings[conn.user.jid].jadibotmd) throw `${lenguajeGB['smsSoloOwnerJB']()}`
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( lenguajeGB.smsJBCom3())
const message = users.map(v => '🐈 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n')
const replyMessage = (message.length === 0) ? lenguajeGB.smsJBCom4() : message
await m.reply(replyMessage.trim())
break    
}}

handler.command = /^(deletesesion|eliminarsesion|borrarsesion|delsesion|delsession|cerrarsesion|berhenti|pausesb|detenersb|pausarsb|listjadibot|bots|subsbots|subbots)$/i
export default handler
