import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw lenguajeGB.smsConURL()
try{
let media = await q.download()
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
  
let caption = `
${lenguajeGB.smsConURL1()}
» ${link}\n
${lenguajeGB.smsConURL2()}
» ${result}\n
${lenguajeGB.smsConUR3L()}
» ${isTele ? lenguajeGB.smsConURLERR1() : lenguajeGB.smsConURLERR2()}\n
${lenguajeGB.smsConURL4()}
» ${await shortUrl(link)}`.trim()
m.reply(caption)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.command = /^(url|tourl|upload)$/i
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()}
