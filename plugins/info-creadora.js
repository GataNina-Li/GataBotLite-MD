import { promises } from 'fs'
import { join } from 'path'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, __dirname, command, args, usedPrefix, DevMode }) => {
let taguser = conn.getName(m.sender)
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let type = (args[0] || '').toLowerCase()

let sib = '⊜⇢ '
const sections = [
{ title: lenguajeGB.smsCreInfo(),
rows: [
{title: sib + lenguajeGB.smsCreNombre(), rowId: `${usedPrefix + command + ' ' + lenguajeGB.lenguaje() == 'es' ? 'nombre' : 'name'}`},
{title: sib + lenguajeGB.smsCreNum(), rowId: usedPrefix + command + lenguajeGB.lenguaje() == 'es' ? ' numero' : ' number'},
{title: sib + lenguajeGB.smsCreContag(), rowId: usedPrefix + lenguajeGB.lenguaje() == 'es' ? 'contacto' : 'contact'},
{title: sib + lenguajeGB.smsCreGrupos(), rowId: usedPrefix + lenguajeGB.lenguaje() == 'es' ? 'gruposgb' : 'groupsgb'},
]},
{ title: lenguajeGB.smsCreApoyo(),
rows: [
{title: sib + lenguajeGB.smsCreDonar(), rowId: usedPrefix + lenguajeGB.lenguaje() == 'es' ? 'donar' : 'paypal'},
{title: sib + lenguajeGB.smsCreCuenta(), rowId: usedPrefix + lenguajeGB.lenguaje() == 'es' ? 'cuentasgb' : 'accounts'},
{title: sib + lenguajeGB.smsCreInstall(), rowId: usedPrefix + lenguajeGB.lenguaje() == 'es' ? 'instalarbot' : 'installbot'},
{title: sib + lenguajeGB.smsCreInfoBot(), rowId: usedPrefix + lenguajeGB.lenguaje() == 'es' ? 'infobot' : 'infobot'},
]},
]

const listMessage = {
text: lenguajeGB.smsCreDesc(),
footer: wm,
title: null,
buttonText: lenguajeGB.smsCreSelec(),
sections }

try {
if (/(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)/i.test(command)) {
switch (type) {
		
case 'nombre': //| 'name':
conn.reply(m.chat, `*_🍄 ${lenguajeGB.smsCreA()} ${taguser}, ${lenguajeGB.smsCreB()} ${_package.name} ${lenguajeGB.smsCreC()}_*`, m, { contextInfo: { mentionedJid: [taguser] }})
break
            
case 'numero': //| 'number':	
let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let num = `${packname}\n*◎ Wa.me/${owner[0][0]}*`
conn.sendButton(m.chat, num, wm, pp, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)		
break
		
default:
return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [taguser] }})
}}
} catch (err) {
m.reply("Error\n\n\n" + err.stack)}}

handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
