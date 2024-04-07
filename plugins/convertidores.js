import { webp2mp4, webp2png  } from '../lib/webp2mp4.js'  
import { ffmpeg, toPTT } from '../lib/converter.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, command, usedPrefix, args, text }) => {
let q, mime, media, out, caption

const isCommand1 = /^(to(img|image)?|img|jpe?g|png)\b$/i.test(command)
const isCommand2 = /^(tourl|url|upload)\b$/i.test(command)
const isCommand3 = /^(to(video|mp4)?|mp4)\b$/i.test(command)
const isCommand4 = /^(to(gif|gifau)?|gif|gifau)\b$/i.test(command)
const isCommand5 = /^(to(vn|ptt|audio|mp3)?|mp3)\b$/i.test(command)
const isCommand6 = /^(to(voice|tts)?|tts)\b$/i.test(command)
const isCommand7 = /^(toanime)\b$/i.test(command)
const isCommand8 = /^(toillusion|toilusi(ó|o)?n)\b$/i.test(command)

switch (true) {     
case isCommand1:
const notStickerMessage = lenguajeGB.smsToimg()
if (!m.quoted) return m.reply(notStickerMessage)
try{  
q = m.quoted || m
mime = q.mediaType || ''
if (!/sticker/.test(mime)) return m.reply(notStickerMessage)
media = await q.download()
out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)} 
break  

// CÓDIGO ADAPTADO POR https://github.com/Azami19   
case isCommand2:    
q = m.quoted ? m.quoted : m
mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(lenguajeGB.smsConURL())
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
if (!m.quoted) return m.reply(lenguajeGB.smsConVIDEO())
mime = m.quoted.mimetype || ''
if (!/webp|gif/.test(mime)) return m.reply(lenguajeGB.smsConVIDEO2()) 
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
if (!m.quoted) return m.reply(lenguajeGB.smsConGIF())
q = m.quoted || m
mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) return m.reply(lenguajeGB.smsConGIF2() + mime)
try{ 
m.reply(global.wait)
media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: lenguajeGB.smsConGIF3() }, { quoted: m })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
break
    
case isCommand5:       
q = m.quoted ? m.quoted : m
mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) return m.reply(lenguajeGB.smsConVN())
media = await q.download?.()
if (!media && !/video/.test(mime)) return m.reply(lenguajeGB.smsConVN1())
if (!media && !/audio/.test(mime)) return m.reply(lenguajeGB.smsConVN2())
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) return m.reply(lenguajeGB.smsConVN3())
if (!audio.data && !/video/.test(mime)) return m.reply(lenguajeGB.smsConVN4())
try{
let aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
if (!aa) return conn.sendMessage(m.chat, { audio: { url: media }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
break
        
case isCommand6: 
let defaultLang = lenguajeGB.lenguaje()
let lang = args[0]
text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) { 
lang = defaultLang 
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text
let res
try { res = await tts(text, lang) }
catch (e) {
//m.reply(e + '')
text = args.join(' ')
if (!text) return m.reply(lenguajeGB.smsTradc1() + usedPrefix + command + lenguajeGB.smsTradc2() + usedPrefix + command + ' ' + lenguajeGB.smsTradc3() + lenguajeGB.smsTradc4())
res = await tts(text, defaultLang)
} finally {
try{
if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}        
}    
function tts(text, lang = lenguajeGB.lenguaje()) {
console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(readFileSync(filePath))
unlinkSync(filePath)
})
} catch (e) { reject(e) }
})}
break   

case isCommand7: 
let bufferImg
try{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
let media = await (uploadImage)(buffer)
bufferImg = await (await fetch(APIs.skizo.url + `toanime?apikey=${APIs.skizo.key}&url=${media}`)).buffer()
} else if (text) {
bufferImg = await (await fetch(APIs.skizo.url + `toanime?apikey=${APIs.skizo.key}&url=${text.trim()}`)).buffer()
} else return m.reply(`*Responde a una imagen o ingresa una url que sea \`(jpg, jpeg o png)\` para convertir a estilo Anime*`)
await m.reply(wait)
await conn.sendMessage(m.chat, { image: bufferImg, caption: null }, { quoted: m })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
break

case isCommand8:
const filters = [
{ id: "pattern001", title: "Personalizado" },
{ id: "pattern113", title: "Arroz al amanecer" },
{ id: "pattern147", title: "Hamburguesa" },
{ id: "pattern146", title: "Marruecos" },
{ id: "pattern120", title: "Dunas de arena" },
{ id: "pattern138", title: "Las Vegas" },
{ id: "pattern135", title: "Tokio" },
{ id: "pattern111", title: "Lago de otoño" },
{ id: "pattern122", title: "Lavanda" },
{ id: "pattern136", title: "Sabana" },
{ id: "pattern145", title: "Paisaje urbano" },
{ id: "pattern116", title: "Pueblo nevado" },
{ id: "pattern118", title: "Escocia" },
{ id: "pattern119", title: "Camino de senderismo" },
{ id: "pattern112", title: "Interior" },
{ id: "pattern123", title: "Aurora" },
{ id: "pattern133", title: "Coliseo" },
{ id: "pattern107", title: "Picos de estrellas" },
{ id: "pattern148", title: "Pizza" },
{ id: "pattern130", title: "Parque de atracciones" },
{ id: "pattern144", title: "Castillo" },
{ id: "pattern124", title: "Embrujado" },
{ id: "pattern128", title: "Camino solar" },
{ id: "pattern115", title: "Ruinas antiguas" },
{ id: "pattern125", title: "Estación de tren" },
{ id: "pattern149", title: "Lasagna" },
{ id: "pattern106", title: "Otoño" },
{ id: "pattern109", title: "Bliss de arena" },
{ id: "pattern143", title: "Templo" },
{ id: "pattern104", title: "Lago alpino" },
{ id: "pattern142", title: "Encanto alpino" },
{ id: "pattern127", title: "Pila de papel" },
{ id: "pattern102", title: "Utah" },
{ id: "pattern132", title: "Manhattan" },
{ id: "pattern108", title: "Acantilado" },
{ id: "pattern117", title: "Caribe" },
{ id: "pattern134", title: "Venecia" },
{ id: "pattern126", title: "Colina de tela" },
{ id: "pattern101", title: "Picos nevados" },
{ id: "pattern137", title: "Dubái" },
{ id: "pattern129", title: "Plaza de la ciudad" },
{ id: "pattern114", title: "Monte Fuji" },
{ id: "pattern141", title: "Plaza de arte" }
]
let list = ''
filters.forEach((filter, index) => {
list += `*\`[${index + 1}]\`* (${filter.title})\n`
})   
let filterList = `*Para convertir la imagen a una ilusión de patrones:*

> *Agregando un enlace de imagen:*
*${usedPrefix + command}* [enlace] | [filtro] | [consulta] *(opcional)*
> *Ejemplo:*
*${usedPrefix + command}* https://telegra.ph/file/587c0111afe97997ea0d8.jpg | 3 | Color verde

> *Respondiendo a una imagen:*
*${usedPrefix + command}* [filtro] | [consulta] *(opcional)*
> *Ejemplo:*
*${usedPrefix + command}* 3 | Color verde

\`Elige un filtro usando el número correspondiente\`\n
${list.trim()}
`
if (!text) return m.reply(filterList)  
const parts = text.split("|").map(s => s.trim()) 
const randomFilterIndex = Math.floor(Math.random() * (filters.length - 1)) + 1
const randomFilterNumber = randomFilterIndex
let [url, filterid, prompt] = text.split("|").map(s => s.trim())
const isUrlValid = url && /https?:\/\/.*\.(jpeg|jpg|png)/i.test(url)
const isPromptValid = prompt && /https?:\/\/.*\.(jpeg|jpg|png)/i.test(prompt)
if (!isUrlValid && !isPromptValid && m.quoted) {
url = true
filterid = !/\|/.test(text) && /^\d+$/.test(text) ? text : ((text.match(/\|/g)).length === 1) && /^\d+$/.test(parts[0]) ? parts[0] : (randomFilterNumber + 1).toString()
prompt = text.split("|").length === 2 ? parts[1] ? parts[1].trim() : "" : ""
}
try {
if (!url && !m.quoted) {
return m.reply("Debe agregar un enlace de imagen o responder a una imagen.")
}
if (!filterid) return m.reply('> *Falta seleccionar un filtro!!*\n\n' + filterList)   
const selectedFilterIndex = parseInt(filterid) - 1
if (isNaN(selectedFilterIndex) || selectedFilterIndex < 0 || selectedFilterIndex >= filters.length) {
return m.reply(`El número \`'${filterid}'\` no corresponde a ningún filtro disponible.`)
}
const selectedFilterId = filters[selectedFilterIndex].id || Math.floor(Math.random() * (filters.length - 1)) + 1
let promptText = ''
if (selectedFilterId === "pattern001") {
if (!prompt) {
return m.reply("Para este filtro es obligatorio agregar una consulta, vuelva a intentarlo.")
}
promptText = prompt
} else {
promptText = prompt || ''
}
let bufferImg
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
await m.reply(wait)    
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
let media = await uploadImage(buffer)
let response = await fetch(APIs.skizo.url + `illusion?apikey=${APIs.skizo.key}&url=${media}&filterid=${selectedFilterId}&prompt=${promptText}`)
bufferImg = await response.buffer()    
} else if (isUrlValid) {
let response = await fetch(APIs.skizo.url + `illusion?apikey=${APIs.skizo.key}&url=${url.trim()}&filterid=${selectedFilterId}&prompt=${promptText}`)
bufferImg = await response.buffer()
} else return m.reply("La URL proporcionada no es un enlace de imagen válido o no se ha respondido a una imagen.")
   
await conn.sendMessage(m.chat, { image: bufferImg, caption: `🪄 *Efecto:* ${filters[selectedFilterIndex].title}\n📌 *Prompt:* ${promptText || 'Ninguno'}` }, { quoted: m })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.error(e)
}
break

}}

handler.command = /^(to(img|image)?|img|jpe?g|png|tourl|url|upload|to(video|mp4)?|mp4|to(gif|gifau)?|gif|gifau|to(vn|ptt|audio|mp3)?|mp3|to(voice|tts)?|tts|toanime|toillusion|toilusi(ó|o)?n)\b$/i
export default handler
