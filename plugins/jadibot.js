import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
const fs = { ...fsPromises, existsSync };
import path, { join } from 'path' 
import { fileURLToPath } from 'url'
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
// carpetas creadas
const __filename = fileURLToPath(import.meta?.url)
const __dirname = path?.dirname(__filename)
const carpetaBase = path?.resolve(__dirname, '..', 'GataJadiBot')
const cantidadCarpetas = (fs?.readdirSync(carpetaBase, { withFileTypes: true }).filter(item => item?.isDirectory())?.length) || 0

// servidor
let _uptime = process.uptime() * 1000
let uptime = convertirMs(_uptime)

const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])]

const message = users.map((v, index) => {
const botConfig = global.db.data.users[v.user.jid] || {};
const botNumber = botConfig.privacy ? `[ OCULTÓ POR PRIVACIDAD ]` : `wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}serbot%20code`;
const prestarStatus = botConfig.privacy ? '' : (botConfig.prestar ? '✅ Prestar el bot para unirlo a grupos' : '');
    
return `👤 \`[${index + 1}]\` *${v.user.name || global.db.data.users[v.user.jid]?.name || 'Anónimo' }*
⏱️ \`\`\`${v.uptime ? convertirMs(Date.now() - v.uptime) : "Desconocido"}\`\`\`
🐈 ${botNumber}
${prestarStatus}`
}).join('\n\n∵ ∵ ∵ ∵ ∵ ∵ ∵ ∵ ∵ ∵\n\n')

const replyMessage = message.length === 0 ? `${lenguajeGB.smsJBCom4()}\n🐈 wa.me/${conn.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}serbot%20code` : message
const totalUsers = users.length

const responseMessage = `${lenguajeGB.smsJBCom3()}

${totalUsers ? `💠 *Sub Bots conectados:* ${totalUsers || 0}\n` : ''}${cantidadCarpetas ? `📁 *Sesiones creadas:* ${cantidadCarpetas}\n` : ''}${totalUsers ? `📁 *Sesiones activas:* ${totalUsers || 0}\n` : ''}💻 *Servidor:* \`\`\`${uptime}\`\`\`\n\n${replyMessage.trim()}`.trim()

try { 
await conn.sendMessage(m.chat, { image: { url: ['https://qu.ax/spUwF.jpeg', 'https://qu.ax/ZfKAD.jpeg', 'https://qu.ax/UKUqX.jpeg'].getRandom() }, caption: responseMessage }, { quoted: m })
} catch {
await conn.sendMessage(m.chat, { text: responseMessage }, { quoted: m })
break    
}}}

handler.command = /^(deletesesion|eliminarsesion|borrarsesion|delsesion|delsession|cerrarsesion|berhenti|pausesb|detenersb|pausarsb|listjadibot|bots|subsbots|subbots)$/i
export default handler

function convertirMs(ms) {
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / 60000) % 60;
  const h = Math.floor(ms / 3600000) % 24;
  const d = Math.floor(ms / 86400000);
  return [ d > 0 ? `${d}d` : "", `${h}h`, `${m}m`, `${s}s` ].filter(Boolean).join(" ")
}