import { webp2mp4, webp2png  } from '../lib/webp2mp4.js' 
import { ffmpeg } from '../lib/converter.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, command, usedPrefix }) => {
let q, mime, media, out, caption
const isCommand1 = /^(to(img|image)?|img|jpe?g|png)$/i.test(command)
const isCommand2 = /^(tourl|url|upload)$/i.test(command)
const isCommand3 = /^(to(video|mp4)?|mp4)$/i.test(command)
const isCommand4 = /^(to(gif|gifau)?|gif|gifau)$/i.test(command)

switch (true) {     
case isCommand1:
const notStickerMessage = lenguajeGB.smsToimg()
if (!m.quoted) throw notStickerMessage
try{  
q = m.quoted || m
mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
media = await q.download()
out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)} 
break  
  
case isCommand2:    
q = m.quoted ? m.quoted : m
mime = (q.msg || q).mimetype || ''
if (!mime) throw lenguajeGB.smsConURL()
try{ 
media = await q.download()
const urlRegex = /(https?:\/\/.*\.(?:png|jpe?g|webp))/i
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media) 
//Resultado en MG o KB
const bytes = media.length;
let result
const kilobytes = bytes / 1024;
if (kilobytes < 1) {
result = kilobytes.toFixed(2) + ' KB';
} else {
const megabytes = bytes / (1024 * 1024);
if (Math.floor(megabytes) >= 1) {
result = megabytes.toFixed(2) + ' MB';
} else {
result = kilobytes.toFixed(2) + ' KB';
}} 
caption = `
${lenguajeGB.smsConURL1()}
» ${link}\n
${lenguajeGB.smsConURL2()}
» ${result}\n
${lenguajeGB.smsConURL3()}
» ${isTele ? lenguajeGB.smsConURLERR1() : lenguajeGB.smsConURLERR2()}\n
${lenguajeGB.smsConURL4()}
» ${await shortUrl(link)}`.trim()
m.reply(caption) 
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()}    
break 

case isCommand3:       
if (!m.quoted) throw lenguajeGB.smsConVIDEO() 
mime = m.quoted.mimetype || ''
if (!/webp|gif/.test(mime)) throw lenguajeGB.smsConVIDEO2() 
try{ 
media = await m.quoted.download()
out = Buffer.alloc(0)
if (/webp|gif/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')}
await conn.sendFile(m.chat, out, 'error.mp4', lenguajeGB.smsConVIDEO3(), m, 0, { thumbnail: out }) 
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
break 

case isCommand4:       
if (!m.quoted) throw lenguajeGB.smsConGIF()
q = m.quoted || m
mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw lenguajeGB.smsConGIF2() + mime
try{ 
m.reply(global.wait)
media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*ᴀϙᴜɪ ᴇsᴛᴀ sᴜ ɢɪғ ᴄᴏɴ ᴀᴜᴅɪᴏ, ᴀʟ ᴀʙʀɪʀʟᴏ sᴇ ʀᴇᴘʀᴏᴅᴜᴄᴇ ᴄᴏɴ ᴀᴜᴅɪᴏ*' }, { quoted: m })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
break 
}}

handler.command = /^to(img|image)?|img|jpe?g|png|tourl|url|upload|tovideo|mp4|to(gif|gifau)|gif|togif|gifau$/i
export default handler
