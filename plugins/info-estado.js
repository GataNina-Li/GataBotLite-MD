/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE LOLIBOT-MD, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE LOLIBOT-MD, GRACIAS 
**/
let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
conn.sendButton(m.chat, wm, `*╭𝄗𝄗✦ 𝙏𝙄𝙀𝙈𝙋𝙊 | 𝙍𝙐𝙉𝙏𝙄𝙈𝙀 ✦𝄗𝄗⬣*
 ⎸ *⍟ Versión 𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿 🌻🐈*
 ⎸ ❉ ➺ ${vs}
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ❉ *Activa durante:*    *_${uptime}_*
 ⎸ ❉ *Active during:*      *_${uptime}_*
*╰𝄗𝄗𝄗𝄗𝄗𝄗𝄗⬣*`, [
['𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟 ⚡', '.menu']], m)

/*conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m)}*/
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats|botstat(us)?)$/i
handler.register = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}


