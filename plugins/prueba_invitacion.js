let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	

//let user = global.db.data.users[who]
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`, fkontak, m)

if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else {
return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}*INGRESE EL NÚMERO COMPLETO DEL USUARIO QUE QUIERA ENVIAR INVITACIÓN*`, m);
}
if (/^[a-zA-Z]+$/.test(text) || (m.quoted && /^[a-zA-Z]+$/.test(m.quoted.text))) {
return conn.reply(m.chat, "El texto solo contiene letras. Por favor, proporciona un número válido.", m)
}
  
let NumeroUser = text.replace(/\D/g, '')
let user = m.sender.split`@`[0] + '@s.whatsapp.net'
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat)
 
await conn.reply(NumeroUser + '@s.whatsapp.net', `¡Hola! @${NumeroUser} Soy ${packname}, un Bot para WhatsApp. Parece que @${user} intentó agregarte, pero no pude hacerlo. No te preocupes, ¡aquí tienes una invitación para unirte! ¡Te esperamos con ansias en el grupo!\n\n${link}`, m, {mentions: [NumeroUser + '@s.whatsapp.net', m.sender]})
await conn.reply(m.chat, `*INVITACIÓN ENVIADA AL PRIVADO DE @${NumeroUser}*`, m, {mentions: [m.sender]})
}
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
