import { webp2mp4 } from '../lib/webp2mp4.js' 
import { ffmpeg } from '../lib/converter.js'
import { webp2png } from '../lib/webp2mp4.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, command, usedPrefix }) => {
let q, mime, media, out, caption
const isCommand1 = /^(to(img|image)?|jpe?g)$/i.test(command)
const isCommand2 = /^(t?ourl|upload)$/i.test(command)
const isCommand3 = /^(to(video|mp4)?|mp4|togif)$/i.test(command)
const isCommand4 = /^(to(gif|taud)?|gif|taud)$/i.test(command)
//try{
switch (true) {     
case isCommand1:
const notStickerMessage = lenguajeGB.smsToimg()
if (!m.quoted) throw notStickerMessage
q = m.quoted || m
mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
media = await q.download()
out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m) 
break  
  
case isCommand2:    
q = m.quoted ? m.quoted : m
mime = (q.msg || q).mimetype || ''
if (!mime) throw lenguajeGB.smsConURL()
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
${lenguajeGB.smsConUR3L()}
» ${isTele ? lenguajeGB.smsConURLERR1() : lenguajeGB.smsConURLERR2()}\n
${lenguajeGB.smsConURL4()}
» ${await shortUrl(link)}`.trim()
m.reply(caption) 
async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()}
break 

case isCommand3:       
if (!m.quoted) throw `RESPONDE A UN STICKER CON MOVIMIENTO PARA CONVERTIR EN VIDEO\n\n*${usedPrefix + command}*` 
mime = m.quoted.mimetype || ''
if (!/webp|gif/.test(mime)) throw `RESPONDE AL AUDIO PARA CONVERTIR EN VIDEL\n\n*${usedPrefix + command}*`
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
await conn.sendFile(m.chat, out, 'error.mp4', '*✓ AQUÍ TIENES TÚ VÍDEO!!*', m, 0, { thumbnail: out })  
break 

case isCommand4:       
if (!m.quoted) throw `RESPONDE A UN VIDEO QUE DESEE CONVERTIR EN GIF CON AUDIO`
q = m.quoted || m
mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `EL TIPO DE ARCHIVOS ${mime} NO ES CORRECTO, RESPONDA A UN VIDEO QUE DESEE CONVENTIR EN GIF CON AUDIO`
m.reply(global.wait)
media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*ᴀϙᴜɪ ᴇsᴛᴀ sᴜ ɢɪғ ᴄᴏɴ ᴀᴜᴅɪᴏ, ᴀʟ ᴀʙʀɪʀʟᴏ sᴇ ʀᴇᴘʀᴏᴅᴜᴄᴇ ᴄᴏɴ ᴀᴜᴅɪᴏ*' }, { quoted: m })
break 
    
}//} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
///console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
//console.log(e)}
}

handler.command = /^(to(img|image)?|jpe?g|t?ourl|upload|to(video|mp4)?|mp4|togif|to(gif|taud)?|gif|taud)$/i
export default handler
