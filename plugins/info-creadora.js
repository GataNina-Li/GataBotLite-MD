/*let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
try {

let catalogo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: wm, orderTitle: 'Bang', thumbnail: imagen1, sellerJid: '0@s.whatsapp.net'}}}
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let taguser = conn.getName(m.sender)

const sections = [
{ title: '🌟 I N F O',
rows: [
{title: "⊜ NOMBRE", rowId: usedPrefix + command + "nombre"},
{title: "⊜ NUMERO", rowId: usedPrefix + command + "numero"},
{title: "⊜ CUENTAS", rowId: usedPrefix + "cuentasgb"},
{title: "⊜ GRUPOS", rowId: usedPrefix + "grupos"},
]},{
title: '✨ A P O Y O',
rows: [
{title: "⊜ DONAS", rowId: usedPrefix + "paypal"},
{title: "⊜ INSTALARBOT", rowId: usedPrefix + "instalarbot"},
{title: "⊜ PREMIUM", rowId: usedPrefix + "pase premium"},
]},]

const listMessage = {
text: null,
footer: wm,
title: `🌼 *SELECCIONE QUE QUIERE SABER*
⎔ ${taguser} 👋`,
buttonText: "🌹 SELECCIONAR AQUÍ 🌹",
sections }

if (/(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type){
		
case 'nombre':
conn.reply(m.chat, `🍄 Hola!! ${taguser}, Me llamo ${packname} siempre a disposición para ayudarte 😸`, m, { contextInfo: { mentionedJid: [nowner] }})
break
		
case 'numero':	
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let num = `${packname}\n◎ Wa.me/${owner[0][0]}`
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
conn.sendButton(m.chat, num, wm, ppown, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), catalogo, { contextInfo: { externalAdReply: { showAdAttribution: true }}})		
break
		
default:
return await conn.sendMessage(m.chat, listMessage, {quoted: m})
}
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, wm, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}
//}}
	
//} catch (err) {
//m.reply("Error\n\n" + err.stack)
//}}

handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler*/

import { promises } from 'fs'
import { join } from 'path'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let catalogo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: wm, orderTitle: 'Bang', thumbnail: imagen1, sellerJid: '0@s.whatsapp.net'}}}
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let taguser = conn.getName(m.sender)
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()

const sections = [
{ title: '🌟 I N F O',
rows: [
{title: "⊜ NOMBRE", rowId: usedPrefix + command + " nombre"},
{title: "⊜ NUMERO", rowId: usedPrefix + command + " numero"},
{title: "⊜ CUENTAS", rowId: usedPrefix + "cuentasgb"},
{title: "⊜ GRUPOS", rowId: usedPrefix + "grupos"},
]},
{ title: '✨ A P O Y O',
rows: [
{title: "⊜ DONAS", rowId: usedPrefix + "paypal"},
{title: "⊜ INSTALARBOT", rowId: usedPrefix + "instalarbot"},
{title: "⊜ PREMIUM", rowId: usedPrefix + "pase premium"},
]},
]

const listMessage = {
text: wm,
footer: null,
title: `🌼 *SELECCIONE QUE QUIERE SABER*
⎔ ${taguser} 👋`,
buttonText: "🌹 SELECCIONAR AQUÍ 🌹",
sections }

try {
if (/(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
		
case 'nombre':
conn.reply(m.chat, `*_🍄 Hola!! ${taguser}, Me llamo_* ${_package.name} *_siempre a disposición para ayudarte 😸_*`, m, { contextInfo: { mentionedJid: [taguser] }})
break
            
case 'numero':	
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let num = `${packname}\n◎ Wa.me/${owner[0][0]}`
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
conn.sendButton(m.chat, num, wm, ppown, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), catalogo, { contextInfo: { externalAdReply: { showAdAttribution: true }}})		
break
		
default:
return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
}}
} catch (err) {
m.reply("Error\n\n\n" + err.stack)}}

handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
