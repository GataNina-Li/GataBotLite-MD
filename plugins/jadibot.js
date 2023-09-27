import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
const fs = { ...fsPromises, existsSync };
import path, { join } from 'path' 
import ws from 'ws';

let handler = async (m, { conn: _envio, command, usedPrefix, args, text, isOwner}) => {
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
//if (global.db.data.settings[conn.user.jid].jadibotmd) return m.reply(`${lenguajeGB['smsSoloOwnerJB']()}`)
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
function convertirMsADiasHorasMinutosSegundos(ms) {
var segundos = Math.floor(ms / 1000);
var minutos = Math.floor(segundos / 60);
var horas = Math.floor(minutos / 60);
var días = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
horas %= 24;
var resultado = "";
if (días !== 0) {
resultado += días + " días, ";
}
if (horas !== 0) {
resultado += horas + " horas, ";
}
if (minutos !== 0) {
resultado += minutos + " minutos, ";
}
if (segundos !== 0) {
resultado += segundos + " segundos";
}
return resultado;
}
const message = users.map((v, index) => `[ ${index + 1} ]\n🐈 wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n👤 ${lenguajeGB.smsBT8()} : ${v.user.name || '-'}*\n🔰 ${lenguajeGB.smsBT7()} : ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n__________________________\n\n');
const replyMessage = message.length === 0 ? `${lenguajeGB.smsJBCom4()}` : message;
const totalUsers = users.length;
const responseMessage = `${lenguajeGB.smsJBCom3()} ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})
break    
}}

handler.command = /^(deletesesion|eliminarsesion|borrarsesion|delsesion|delsession|cerrarsesion|berhenti|pausesb|detenersb|pausarsb|listjadibot|bots|subsbots|subbots)$/i
export default handler
