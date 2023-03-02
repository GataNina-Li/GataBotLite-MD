//import { promises } from 'fs'
//import { join } from 'path'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, __dirname, command, args, usedPrefix, DevMode }) => {
let taguser = conn.getName(m.sender)
//let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let type = (args[0] || '').toLowerCase()

const sections = [
{ title: '🌟 I N F O',
rows: [
{title: "⊜ NOMBRE", rowId: usedPrefix + command + " nombre"},
{title: "⊜ NUMERO", rowId: usedPrefix + command + " numero"},
{title: "⊜ CONTACTO", rowId: usedPrefix + "contacto"},
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
text: `🌼 *_SELECCIONE QUE QUIERE SABER_*
⎔ ${taguser} 👋`,
footer: wm,
title: null,
buttonText: "🌹 SELECCIONAR AQUÍ 🌹",
sections }

try {
if (/(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)/i.test(command)) {
switch (type) {
		
case 'nombre':
conn.reply(m.chat, `*_🍄 Hola!! ${taguser}, Me llamo ${package.name} siempre a disposición para ayudarte 😸_*`, m, { contextInfo: { mentionedJid: [taguser] }})
break
            
case 'numero':	
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let num = `${packname}\n*◎ Wa.me/${owner[0][0]}*`
conn.sendButton(m.chat, num, wm, ppown, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)		
break
		
default:
return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [taguser] }})
}}
} catch (err) {
m.reply("Error\n\n\n" + err.stack)}}

handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
