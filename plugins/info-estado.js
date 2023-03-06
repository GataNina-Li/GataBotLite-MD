let handler = async (m, { conn, command, usedPrefix }) => { 
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

await conn.sendButton(m.chat, wm, `
*╭𝄗𝄗✦ --ESTADO-- ✦𝄗𝄗⬣*
 ⎸ *⍟ Versión *
 ⎸ ❉ ➺ ${vs}
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ❉ *Usuario(s)* ➺ ${Object.keys(global.db.data.users).length} 
 ⎸ ❉ *Registrados(as)* ➺ ${rtotalreg}/${totalreg}
 ⎸ ❉ *Chat(s) Prohibido(s)* ➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
 ⎸ ❉ *Usuario(s) Prohibido(s)* ➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ❉ *Activa durante:*    *_${uptime}_*
*╰𝄗𝄗𝄗𝄗𝄗𝄗𝄗⬣*`, gataImg.getRandom(), [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)
}
handler.command = /^(estado|status|estate|state|stado|stats|botstat(us)?)$/i
handler.register = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}


