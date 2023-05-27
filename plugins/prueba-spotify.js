import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(lenguajeGB.smsMalused2(), `⊱ *${usedPrefix + command} Bellyache*`)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result

let spotifyi = `✨ *TITULO:* 
_${title}_

🗣️ *ARTISTA:* 
» _${artists}_

🌐 *URL*: 
» _${link}_

💚 *URL DE DESCARGA:* 
» _${json2.result.link}_

🎶 *Enviando canción...*`

await m.reply('🎧 *Ｓ Ｐ Ｏ Ｔ Ｉ Ｆ Ｙ* 🎧\n\n' + spotifyi)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch (e) {
m.reply(e)
}}
handler.command = /^(spotify|music)$/i
export default handler
