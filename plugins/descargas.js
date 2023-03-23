import { googleImage } from '@bochilteam/scraper'
import fetch from "node-fetch"
import yts from 'yt-search'

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const isCommand1 = /^(gimage|image|imagen)$/i.test(command)
const isCommand2 = /^(play|play2)$/i.test(command)

switch (true) {     
case isCommand1:
if (!text) throw lenguajeGB.smsMalused2() + `\n*${usedPrefix + command} Gata*`
try{
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*💞 Resultado de:* ${text}`, m)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
break
    
case isCommand2:
if (!text) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await yts(text)).all[0]
if (!vid) throw lenguajeGB.smsMalError2() + `_${lenguajeGB.smsYT6()}_`
try{
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let video = `*◜⋯ ⋯ ⋯ Y O U T U B E ⋯ ⋯ ⋯◞*
*◎ ${lenguajeGB.smsYT1()}*
${title}

*◎ ${lenguajeGB.smsYT2()}*
${description}

*◎ ${lenguajeGB.smsYT3()}*
${timestamp}

*◎ ${lenguajeGB.smsYT4()}*
${views}

*◎ URL*
${url}`.trim()
await conn.sendFile(m.chat, thumbnail, 'error.jpg', video, m)
    
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
await conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: m})  
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}    
break
}}

handler.command = /^(gimage|image|imagen|play|play2)$/i
handler.register = true
export default handler
