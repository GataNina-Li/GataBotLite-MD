let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let setting = global.db.data.settings
let type = (args[0] || '').toLowerCase()
let isAll = false
let isUser = false
switch (type) {
		
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
		
default:
if (!/[01]/.test(command)) throw `
⚙️ *CONFIGURACIÓN* ⚙️
🟢 ${usedPrefix}on ${lenguajeGB.lenguaje() == 'es' ? 'bienvenida' : 'welcome'}
🔴 ${usedPrefix}off ${lenguajeGB.lenguaje() == 'es' ? 'bienvenida' : 'welcome'}
`.trim()
throw false
}
m.reply(`
*⭔ COMANDO:* _${type}_
*⭔ ESTADO:* _${isEnable ? 'ACTIVADO' : 'DESACTIVADO'}_
*⭔ PARA:* _${isAll ? packname : isUser ? '' : 'ESTE CHAT'}_`)
}
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
