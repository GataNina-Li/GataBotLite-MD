let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let catalogo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: wm, orderTitle: 'Bang', thumbnail: imagen1, sellerJid: '0@s.whatsapp.net'}}}
let type = (args[0] || '').toLowerCase()
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
⎔ ${name} 👋`,
buttonText: "🌹 SELECCIONAR AQUÍ 🌹",
sections }

try {
if (/(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)/i.test(command)) {
switch (type){
		
case 'nombre':
conn.reply(m.chat, `🍄 Hola!! ${taguser}, Me llamo ${packname} siempre a disposición para ayudarte 😸`, m, { contextInfo: { mentionedJid: [nowner] }})
break
		
case 'numero':	
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let num = `${packname}\n◎ ${owner[0][0]}`
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
conn.sendButton(m.chat, num, wm, ppown, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), catalogo, { contextInfo: { externalAdReply: { showAdAttribution: true }}})		
break
		
default:
return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
}}
	
} catch (err) {
m.reply("Error\n\n\n" + err.stack)
}}

handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
