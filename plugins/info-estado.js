let handler = async (m, { conn, command, usedPrefix }) => { 
try{
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

conn.reply(m.chat, `*╭𝄗𝄗✦ --${lenguajeGB.smsEstado1()}-- ✦𝄗𝄗⬣*
 ⎸ *⍟ ${lenguajeGB.smsEstado2()}*
 ⎸ ❉ ➺ ${vs}
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ❉ *${lenguajeGB.smsEstado3()}* ➺ *_${Object.keys(global.db.data.users).length}_*
 ⎸ ❉ *${lenguajeGB.smsEstado4()}* ➺ *_${rtotalreg}/${totalreg}_*
 ⎸ ❉ *${lenguajeGB.smsEstado5()}* ➺ *_${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_* 
 ⎸ ❉ *${lenguajeGB.smsEstado6()}* ➺ *_${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_* 
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ❉ *${lenguajeGB.smsEstado7()}* ➺ *_${uptime}_*
*╰𝄗𝄗𝄗𝄗𝄗𝄗𝄗⬣`, m) 
/*await conn.sendButton(m.chat, wm, `
*╭𝄗𝄗✦ --${lenguajeGB.smsEstado1()}-- ✦𝄗𝄗⬣*
 ⎸ *⍟ ${lenguajeGB.smsEstado2()}*
 ⎸ ❉ ➺ ${vs}
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ❉ *${lenguajeGB.smsEstado3()}* ➺ *_${Object.keys(global.db.data.users).length}_*
 ⎸ ❉ *${lenguajeGB.smsEstado4()}* ➺ *_${rtotalreg}/${totalreg}_*
 ⎸ ❉ *${lenguajeGB.smsEstado5()}* ➺ *_${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_* 
 ⎸ ❉ *${lenguajeGB.smsEstado6()}* ➺ *_${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_* 
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ❉ *${lenguajeGB.smsEstado7()}* ➺ *_${uptime}_*
*╰𝄗𝄗𝄗𝄗𝄗𝄗𝄗⬣*`.trim(), gataImg.getRandom(), [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)*/
} catch (e) {
//await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.command = /^(estado|status|estate|state|stado|stats|botstat(us)?)$/i
handler.register = true
export default handler
                
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}


