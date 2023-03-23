import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
import fetch from "node-fetch"
import yts from 'yt-search'

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu
const isCommand1 = /^(gimage|image|imagen)$/i.test(command)
const isCommand2 = /^(play|play2)$/i.test(command)
const isCommand3 = /^(fgmp3|dlmp3|getaud|yt(a|mp3)?)$/i.test(command)
const isCommand4 = /^(ytmp3doc|ytadoc)$/i.test(command)
const isCommand5 = /^(fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i.test(command)
const isCommand6 = /^(ytmp4doc|ytvdoc)$/i.test(command)

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
${url}
*◜⋯ ⋯ ⋯ ⬇️ A U D I O ⬇️ ⋯ ⋯ ⋯◞*`.trim()
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
        
case isCommand3:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTA1() + '*', m)
try {
q = '128kbps'
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.audio[q].download()
ttl = await yt.title
size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m }) 
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}        
break
        
case isCommand4:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTA2() + '*', m)
try {
q = '128kbps'
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.audio[q].download()
ttl = await yt.title
size = await yt.audio[q].fileSizeH
cap = `🎼 *AUDIO* 🎼\n\n*⎔ ${ttl}*\n\n*⎔ ${size}*`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)   
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
n2 = lolh.result.link
n3 = lolh.result.size
cap = `🎧 *AUDIO* 🎧\n\n*⎔ ${n}*\n\n*⎔ ${n3}*`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}        
break
        
case isCommand5:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTV1() + '*', m)
try {
qu = args[1] || '360'
q = qu + 'p'
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.video[q].download()
ttl = await yt.title
size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${ttl}*\n*⚖️ ${size}*`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
n2 = lolh.result.link
n3 = lolh.result.size
n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${n}*\n*⚖️ ${n3}*`, thumbnail: await fetch(n4) }, { quoted: m })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}        
break

case isCommand6:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTV2() + '*', m)
try {
qu = args[1] || '360'
q = qu + 'p'
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.video[q].download()
ttl = await yt.title
size = await yt.video[q].fileSizeH
cap = `📡 *VIDEO* 📡\n\n*⎔ ${ttl}*\n\n*⎔ ${size}*`.trim()
await await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
} catch {
try{
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
n2 = lolh.result.link
n3 = lolh.result.size
cap = `🎥 *VIDEO* 🎥\n\n*⎔ ${n}*\n\n*⎔ ${n3}*`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m})
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}
break
}}

handler.command = /^(gimage|image|imagen|play|play2|fgmp3|dlmp3|getaud|yt(a|mp3)?|ytmp3doc|ytadoc|fgmp4|dlmp4|getvid|yt(v|mp4)?|ytmp4doc|ytvdoc)$/i
handler.register = true
export default handler
