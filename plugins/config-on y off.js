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
		
case 'antilink': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break

case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break

case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break

case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
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
${lenguajeGB.smsConfi1bot()}\n\n
\🌺 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'bienvenida' : 'welcome'}\n
\🌸 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'antienlace' : 'antilink'}\n
\🌺 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'antienlace2' : 'antilink2'}\n
\🌸 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` antitiktok\n
\🌺 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` antiyoutube\n
\🌸 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` antitelegram\n
\🌺 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` antifacebook\n
\🌸 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` antinstagram\n
\🌺 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` antitwitter\n
\🌸 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'antinternacional' : 'antifake'}\n
\🌺 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'restringir' : 'restrict'}\n
\🌸 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'publico' : 'public'}\n
\🌺 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'modoserbot' : 'modejadibot'}\n
\🌸 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'antillamar' : 'anticall'}\n
\🌺 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'autovisto' : 'autoread'}\n
\🌸 `\`\`\${usedPrefix}on / ${usedPrefix}off\`\`\` ${lenguajeGB.lenguaje() == 'es' ? 'modoadmin' : 'modeadmin'}`.split('\n').map(line => line.trim()).join('\n')
throw false
}
m.reply(`*⭔ ${lenguajeGB.smsConfi2bot()}:* _${type}_
*⭔ ${lenguajeGB.smsConfi3bot()}:* _${isEnable ? lenguajeGB.smsConfi5bot() : lenguajeGB.smsConfi6bot()}_
*⭔ ${lenguajeGB.smsConfi4bot()}:* _${isAll ? packname : isUser ? '' : lenguajeGB.smsConfi7bot()}_`)
}
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
