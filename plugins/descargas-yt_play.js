import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
let tempStorage = {}
const youtubeRegexID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/

const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} Billie Eilish - Bellyache*`)

const videoIdToFind = text.match(youtubeRegexID)
  
const yt_play = await search(args.join(' '))
let ytplay2 = await yts(videoIdToFind ? 'https://youtu.be/' + videoIdToFind[1] : text)
  
const videoIdToFind = text.match(youtubeRegexID)
if (videoIdToFind) {
const videoId = videoIdToFind[1]  
console.log(videoId)
ytplay2 = ytplay2.all.find(item => item.videoId === videoId) || ytplay2.videos.find(item => item.videoId === videoId)
console.log(ytplay2)
if (!ytplay2) {
ytplay2 = null
}} else {
ytplay2 = await yts(text)
}
  
let caption = `*◜⋯ ⋯ ⋯ Y O U T U B E ⋯ ⋯ ⋯◞*
*◎ ${lenguajeGB.smsYT1()}*
${yt_play[0]?.title}

*◎ ${lenguajeGB.smsYT2()}*
${yt_play[0]?.description}

*◎ ${lenguajeGB.smsYT3()}*
${secondString(yt_play[0]?.duration?.seconds)}

*◎ ${lenguajeGB.smsYT4()}*
${MilesNumber(yt_play[0]?.views)}

*◎ ${lenguajeGB.smsYT5()}*
${yt_play[0]?.url.replace(/^https:\/\//, "")}
*◜⋯ ⋯ ⋯ ${gt} ⋯ ⋯ ⋯◞*

*_Para seleccionar, reacciona o escribe respondiendo a este mensaje:_*
> "❤️" o "audio" → *Audio*
> "👍" o "video" → *Video*
> "🙏" o "audiodoc" → *Audio (doc)*
> "😮" o "videodoc" → *Video (doc)*`
tempStorage[m.sender] = { url: yt_play[0].url, title: yt_play[0].title, resp: m, usedPrefix: usedPrefix, command: command }

await conn.sendMessage(m.chat, {text: caption, contextInfo: { externalAdReply: { title: wm, body: wait2.replace(/\*/g, ''), thumbnailUrl: yt_play[0].thumbnail, sourceUrl: md, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}});
}

handler.before = async (m, { conn }) => {
const text = m.text.trim().toLowerCase()
if (!['❤️', 'audio', '👍', 'video', '🙏', 'audiodoc', '😮', 'videodoc'].includes(text)) return
const userVideoData = tempStorage[m.sender]
const gata = tempStorage[m.sender]
if (!userVideoData || !userVideoData.url) return
  
const optionsAudio = {
"❤️": "audio",
"audio": "audio",
"🙏": "document",
"audiodoc": "document"
}
const typeAudio = optionsAudio[text]

const optionsVideo = {
"👍": { type: "video", caption: true },
"video": { type: "video", caption: true },
"😮": { type: "document", caption: false },
"videodoc": { type: "document", caption: false }
}
const typeVideo = optionsVideo[text]
  
try {
if ((typeAudio === "audio" || typeAudio === "document") && ['❤️', '🙏', 'audio', 'audiodoc'].includes(text)) {
if (typeAudio === "audio") {
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + `*${lenguajeGB.smsYTA1()}*`, fkontak, m || null)
} else if (typeAudio === "document") {
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + `*${lenguajeGB.smsYTA2()}*`, fkontak, m || null)
}
try {
const response = await fetch(APIs.ryzendesu.url + `downloader/ytmp3?url=${userVideoData.url}`)
const json = await response.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: json.url }, mimetype: 'audio/mpeg', fileName: json.filename }, { quoted: gata.resp })
} catch {   
try {
const response = await fetch(APIs.delirius.url + `download/ytmp3?url=${userVideoData.url}`)
const json = await response.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: json.data.download.url }, mimetype: 'audio/mpeg', fileName: json.data.download.filename }, { quoted: gata.resp })
} catch {
try {
const res = await fetch(APIs.vreden.url + `ytmp3?url=${userVideoData.url}`);
const { result } = await res.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: result.download.url }, mimetype: 'audio/mpeg', fileName: result.download.filename }, { quoted: gata.resp })
} catch {   
try {   
const response = await fetch(APIs.exonity.url + `dl/ytmp3?url=${userVideoData.url}&apikey=${APIs.exonity.key}`)
const json = await response.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: json.result.dl }, mimetype: 'audio/mpeg', fileName: json.result.title + '.mp3' }, { quoted: gata.resp })
} catch {
try {
const res = await fetch(APIs.siputzx.url + `d/ytmp3?url=${userVideoData.url}`)
let { data } = await res.json();
await conn.sendMessage(m.chat, { [typeAudio]: { url: data.dl }, mimetype: 'audio/mpeg' }, { quoted: gata.resp })
} catch {
try {   
const response = await fetch(APIs.alyachan.url + `yta?url=${userVideoData.url}&apikey=${APIs.alyachan.key}`)
const json = await response.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: json.data.url }, mimetype: 'audio/mpeg', fileName: json.data.filename }, { quoted: gata.resp })
} catch (e) { 
reportError(e, conn, m, gata)
}}}}}}
  
} else if ((typeVideo.type === "video" || typeVideo.type === "document") && ['👍', '😮', 'video', 'videodoc'].includes(text)) {
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + `*${typeVideo.type === "video" ? lenguajeGB.smsYTV1() : lenguajeGB.smsYTV2()}*`, fkontak, m || null)
try {
const response = await fetch(APIs.delirius.url + `download/ytmp4?url=${userVideoData.url}`)
const json = await response.json()
let caption = `🎬 *${json.data.title}*\n📺 *Canal:* ${json.data.author}\n📁 *Calidad:* ${json.data.download.quality}\n📦 *Tamaño:* ${json.data.download.size}`
//let url = await fetch(json.data.download.url, { method: 'HEAD' }).then(response => response.url)
await conn.sendMessage(m.chat, { [typeVideo.type]: { url: json.data.download.url }, mimetype: 'video/mp4', fileName: json.data.download.filename, ...(typeVideo.caption && { caption: caption }) }, { quoted: gata.resp })
} catch {
try {
const response = await fetch(APIs.alyachan.url + `ytv?url=${userVideoData.url}&apikey=${APIs.alyachan.key}`)
const json = await response.json()
let caption = `🎬 *${json.title}*\n📺 *Canal:* ${json.channel}\n📁 *Calidad:* ${json.data.quality}\n📦 *Tamaño:* ${json.data.size}`
await conn.sendMessage(m.chat, { [typeVideo.type]: { url: json.data.url }, mimetype: 'video/mp4', fileName: json.data.filename, ...(typeVideo.caption && { caption: caption }) }, { quoted: gata.resp })
} catch {
try {
const response = await fetch(APIs.ryzendesu.url + `downloader/ytmp4?url=${userVideoData.url}&quality=720`)
const json = await response.json()
let caption = `🎬 *${json.title}*\n📺 *Canal:* ${json.authorUrl}\n📁 *Calidad:* 720p\n📦 *Tamaño:* ${await getFileSize(json.url)}`
await conn.sendMessage(m.chat, { [typeVideo.type]: { url: json.url }, mimetype: 'video/mp4', fileName: json.filename, ...(typeVideo.caption && { caption: caption }) }, { quoted: gata.resp })
} catch {
try {   
const response = await fetch(APIs.exonity.url + `dl/ytmp4?url=${userVideoData.url}&apikey=${APIs.exonity.key}`)
const json = await response.json()
let caption = `🎬 *${json.result.title}*`
await conn.sendMessage(m.chat, { [typeVideo.type]: { url: json.result.dl }, mimetype: 'video/mp4', fileName: json.result.title + '.mp4', ...(typeVideo.caption && { caption: caption }) }, { quoted: gata.resp })
} catch (e) {
reportError(e, conn, m, gata)
}}}}
}

} catch (error) {
console.log(error)
} finally {
delete tempStorage[m.sender]
}}
handler.command = /^(play|play2)$/i
handler.register = true 
export default handler

async function reportError(e, conn, m, gata) {
let errb = await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + gata.usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + gata.usedPrefix + gata.command)
await console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${gata.usedPrefix + gata.command} ❗❗`)
await console.log(e)
let faultkey = await conn.sendMessage(m.chat, { react: { text: fault, key: errb.key }})
await m.react(notsent)
}

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options})
return search.videos
}

function secondString(seconds) {
seconds = Number(seconds)
const d = Math.floor(seconds / (3600 * 24))
const h = Math.floor((seconds % (3600 * 24)) / 3600)
const m = Math.floor((seconds % 3600) / 60)
const s = Math.floor(seconds % 60)
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : ''
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : ''
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : ''
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : ''
return dDisplay + hDisplay + mDisplay + sDisplay
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

async function getFileSize(url) {
try {
const response = await fetch(url, { method: 'HEAD' })
const contentLength = response.headers.get('content-length')
if (!contentLength) return "Tamaño no disponible"
const sizeInBytes = parseInt(contentLength, 10);
return await formatSize(sizeInBytes)
} catch (error) {
console.error("Error al obtener el tamaño del archivo:", error)
return "Error al obtener el tamaño"
}}

async function formatSize(bytes) {
if (bytes >= 1e9) {
return (bytes / 1e9).toFixed(2) + " GB"
} else if (bytes >= 1e6) {
return (bytes / 1e6).toFixed(2) + " MB"
} else {
return bytes + " bytes"
}}
