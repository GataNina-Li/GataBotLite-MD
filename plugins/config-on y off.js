let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let setting = global.db.data.settings
let type = (args[0] || '').toLowerCase()
let isAll = false
let isUser = false
switch (type) {
		
case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
		
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
		
case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
		
case 'jadibotmd': case 'modejadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = isEnable
break 
		
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
		
case 'anticall': case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'modoadmin': case 'modeadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
		
default:
if (!/[01]/.test(command)) throw `
⚙️ *CONFIGURACIÓN* ⚙️
🟢 ${usedPrefix}on ${lenguajeGB.lenguaje() == 'es' ? 'bienvenida' : 'welcome'}
🔴 ${usedPrefix}off ${lenguajeGB.lenguaje() == 'es' ? 'bienvenida' : 'welcome'}

🟢 ${usedPrefix}on ${lenguajeGB.lenguaje() == 'es' ? 'restringir' : 'restrict'}
🔴 ${usedPrefix}off ${lenguajeGB.lenguaje() == 'es' ? 'restringir' : 'restrict'}

🟢 ${usedPrefix}on ${lenguajeGB.lenguaje() == 'es' ? 'publico' : 'public'}
🔴 ${usedPrefix}off ${lenguajeGB.lenguaje() == 'es' ? 'publico' : 'public'}

🟢 ${usedPrefix}on ${lenguajeGB.lenguaje() == 'es' ? 'modoserbot' : 'modejadibot'}
🔴 ${usedPrefix}off ${lenguajeGB.lenguaje() == 'es' ? 'modoserbot' : 'modejadibot'}

🟢 ${usedPrefix}on ${lenguajeGB.lenguaje() == 'es' ? 'antillamar' : 'anticall'}
🔴 ${usedPrefix}off ${lenguajeGB.lenguaje() == 'es' ? 'antillamar' : 'anticall'}

🟢 ${usedPrefix}on ${lenguajeGB.lenguaje() == 'es' ? 'autovisto' : 'autoread'}
🔴 ${usedPrefix}off ${lenguajeGB.lenguaje() == 'es' ? 'autovisto' : 'autoread'}

🟢 ${usedPrefix}on ${lenguajeGB.lenguaje() == 'es' ? 'modoadmin' : 'modeadmin'}
🔴 ${usedPrefix}off ${lenguajeGB.lenguaje() == 'es' ? 'modoadmin' : 'modeadmin'}
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
