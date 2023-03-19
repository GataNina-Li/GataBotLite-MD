import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, lenguajeGB.smsAvisoMG() + lenguajeGB.smsMalused2() + `\n*${usedPrefix + command} ${lenguajeGB.smsCreA}?*` , m)
await conn.sendPresenceUpdate('composing', m.chat)
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=${lenguajeGB.lenguaje()}`)  
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
}
handler.command = ['bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'okgoogle']
export default handler



