import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `RESPONDE A UN STICKER CON MOVIMIENTO PARA CONVERTIR EN VIDEO\n\n*${usedPrefix + command}*` 
let mime = m.quoted.mimetype || ''
if (!/webp|gif/.test(mime)) throw `RESPONDE AL AUDIO PARA CONVERTIR EN VIDEL\n\n*${usedPrefix + command}*`
try{
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
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
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^to(video|mp4)?|mp4|togif$/i
export default handler
