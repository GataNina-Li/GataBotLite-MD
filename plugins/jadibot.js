import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from "fs"
import path, { join } from 'path'

let handler = async (m, { conn, command, usedPrefix, args, text, isOwner }) => {
const isCommand1 = /^(deletesesion|eliminarsesion|borrarsesion|delsesion|cerrarsesion)$/i.test(command)  
const isCommand2 = /^(berhenti|stopsb|detenersb)$/i.test(command)  
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
let userS = `${conn.getName(who)}`
if (global.conn.user.jid !== conn.user.jid) return conn.sendMessage(m.chat, {text: lenguajeGB.smsJBDel() + `\n\n*https://api.whatsapp.com/send/?phone=${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}&type=phone_number&app_absent=0*`}, { quoted: m }) 
else {
await conn.sendMessage(m.chat, { text: lenguajeGB.smsJBAdios() }, { quoted: m })}
try {
fs.rmdir("./GataJadiBot/" + uniqid, { recursive: true, force: true })
await conn.sendMessage(m.chat, { text : lenguajeGB.smsJBCerrarS() } , { quoted: m })
} catch(err) {
console.error(userS + ' ' + lenguajeGB.smsJBErr(), err)   
}    
break
    
case isCommand2:
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `${ag}𝙎𝙄 𝙉𝙊 𝙀𝙎 𝙎𝙐𝘽 𝘽𝙊𝙏, 𝘾𝙊𝙈𝙐𝙉𝙄𝙌𝙐𝙀𝙎𝙀 𝘼𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝙋𝘼𝙍𝘼 𝙎𝙀𝙍 𝘽𝙊𝙏\n\n𝙄𝙁 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙏 𝘼 𝙎𝙐𝘽 𝘽𝙊𝙏, 𝘾𝙊𝙉𝙏𝘼𝘾𝙏 𝙏𝙃𝙀 𝙈𝘼𝙄𝙉 𝙉𝙐𝙈𝘽𝙀𝙍 𝙏𝙊 𝘽𝙀𝘾𝙊𝙈𝙀 𝘼 𝘽𝙊𝙏`, m)
else {
await conn.reply(m.chat, `${rg}𝙐𝙎𝙏𝙀𝘿 𝙃𝘼 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 𝙎𝙀𝙎𝙄𝙊𝙉 𝘾𝙊𝙉𝙈𝙄𝙂𝙊 🙀\n\n𝙔𝙊𝙐 𝙃𝘼𝙑𝙀 𝙇𝙊𝙂𝙂𝙀𝘿 𝙊𝙐𝙏 𝙒𝙄𝙏𝙃 𝙈𝙀 😯`, m)
conn.ws.close()}  
break
    
case isCommand3:
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '😺 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 (𝙎𝙀𝙍𝘽𝙊𝙏/𝙅𝘼𝘿𝙄𝘽𝙊𝙏) 𝘼𝘾𝙏𝙄𝙑𝙊𝙎\n\n🙌 𝙋𝙐𝙀𝘿𝙀𝙎 𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝘼𝙍𝙇𝙊𝙎 𝙋𝘼𝙍𝘼 𝙋𝙀𝘿𝙄𝙍 𝙌𝙐𝙀 𝙎𝙀 𝙐𝙉𝘼𝙉 𝘼 𝙏𝙐 𝙂𝙍𝙐𝙋𝙊, 𝙎𝙀 𝙍𝙀𝙎𝙋𝙀𝙏𝙐𝙊𝙎𝙊\n\n❕ 𝙎𝙄 𝙀𝙇 𝙏𝙀𝙓𝙏𝙊 𝘼𝙋𝘼𝙍𝙀𝘾𝙀 𝙀𝙉 𝘽𝙇𝘼𝙉𝘾𝙊 𝙎𝙄𝙂𝙉𝙄𝙁𝙄𝘾𝘼 𝙌𝙐𝙀 𝙉𝙊 𝘼𝙃𝙄 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 𝘼𝘾𝙏𝙄𝙑𝙊𝙎\n\n❗ 𝘾𝘼𝘿𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙎𝙐𝘽 𝘽𝙊𝙏 𝙈𝘼𝙉𝙀𝙅𝘼 𝙇𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝘾𝙊𝙈𝙊 𝙌𝙐𝙄𝙀𝙍𝘼, 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝙉𝙊 𝙎𝙀 𝙃𝘼𝘾𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝘼𝘽𝙇𝙀')
await m.reply(users.map(v => '🐈 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n'))    
break
    
}}

handler.command = /^(deletesesion|eliminarsesion|borrarsesion|delsesion|cerrarsesion|berhenti|stopsb|detenersb|listjadibot|bots|subsbots|subbots)$/i
export default handler
