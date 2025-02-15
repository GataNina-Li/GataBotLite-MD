import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
const LimitAud = 725 * 1024 * 1024 //700MB
const LimitVid = 425 * 1024 * 1024 //425MB
let tempStorage = {};

const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} Billie Eilish - Bellyache*`)
const yt_play = await search(args.join(' '))
const ytplay2 = await yts(text)
let caption = `*◜⋯ ⋯ ⋯ Y O U T U B E ⋯ ⋯ ⋯◞*
*◎ ${lenguajeGB.smsYT1()}*
${yt_play[0].title}

*◎ ${lenguajeGB.smsYT3()}*
${secondString(yt_play[0].duration.seconds)}

*◎ ${lenguajeGB.smsYT4()}*
${MilesNumber(yt_play[0].views)}

*◎ URL*
${yt_play[0].url}
*◜⋯ ⋯ ⋯ ${gt} ⋯ ⋯ ⋯◞*

*_Para seleccionar, reacciona o escribe respondiendo a este mensaje:_*
> "❤️" o "audio" → *Audio*
> "👍" o "video" → *Video*
> "🙏" o "audiodoc" → *Audio (doc)*
> "😮" o "videodoc" → *Video (doc)*`
tempStorage[m.sender] = { url: yt_play[0].url, title: yt_play[0].title, resp: m }

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
"👍": "video",
"video": "video",
"😮": "document",
"videodoc": "document"
}
const typeVideo = optionsVideo[text]
  
try {
if (typeAudio === "audio" || typeAudio === "document") {
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
await conn.sendMessage(m.chat, { audio: { url: json.data.download.url }, mimetype: 'audio/mpeg', fileName: json.data.download.filename }, { quoted: gata.resp })
} catch {
try {
const res = await fetch(APIs.vreden.url + `ytmp3?url=${userVideoData.url}`);
const { result } = await res.json()
await conn.sendMessage(m.chat, { audio: { url: result.download.url }, mimetype: 'audio/mpeg', fileName: result.download.filename }, { quoted: gata.resp })
} catch {   
try {   
const response = await fetch(APIs.exonity.url + `dl/ytmp3?url=${userVideoData.url}&apikey=${APIs.exonity.key}`)
const json = await response.json()
await conn.sendMessage(m.chat, { audio: { url: json.result.dl }, mimetype: 'audio/mpeg', fileName: json.result.title + '.mp3' }, { quoted: gata.resp })
} catch {
try {
const res = await fetch(APIs.siputzx.url + `d/ytmp3?url=${userVideoData.url}`)
let { data } = await res.json();
await conn.sendMessage(m.chat, { audio: { url: data.dl }, mimetype: 'audio/mpeg' }, { quoted: gata.resp })
} catch {
try {   
const response = await fetch(APIs.alyachan.url + `yta?url=${userVideoData.url}&apikey=${APIs.alyachan.key}`)
const json = await response.json()
await conn.sendMessage(m.chat, { audio: { url: json.data.url }, mimetype: 'audio/mpeg', fileName: json.data.filename }, { quoted: gata.resp })
} catch { 
await conn.sendMessage(m.chat, { text: "Error al descargar el Audio" }, { quoted: gata.resp })
}}}}}}
} else if (text === '👍' || text === 'video') {
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + lenguajeGB.smsYTV1(), fkontak, m || null)
try {
const res = await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${userVideoData.url}`);
let { data } = await res.json();
await conn.sendMessage(m.chat, { video: { url: data.dl }, fileName: `video.mp4`, mimetype: 'video/mp4', caption: `⟡ *${userVideoData.title}*\n> ${wm}`}, { quoted: gata.resp })
} catch {
try {   
const axeelUrl = `https://axeel.my.id/api/download/audio?url=${userVideoData.url}`;
const axeelResponse = await fetch(axeelUrl);
const axeelData = await axeelResponse.json();
if (!axeelData || !axeelData.downloads?.url) throw new Error();
await conn.sendFile(m.chat, axeelData.downloads.url, 'error.mp4', `${gt}`, gata.resp)
} catch {
try {   
const ryzenUrl = `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${userVideoData.url}`;
const ryzenResponse = await fetch(ryzenUrl);
const ryzenData = await ryzenResponse.json();
if (ryzenData.status === 'tunnel' && ryzenData.url) {
const downloadUrl = ryzenData.url;
await conn.sendFile(m.chat, downloadUrl, 'error.mp4', `${gt}`, gata.resp)
}       
} catch {
try {   
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${userVideoData.url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp3);
const fileSize = await getFileSize(dp.result.media.mp3);
await conn.sendFile(m.chat, audiop, 'error.mp4', `${gt}`, gata.resp)
} catch (error) {
}}}}
}
} catch (error) {
console.error(error);
} finally {
delete tempStorage[m.sender];
}
}
handler.command = /^(play|play2)$/i
//handler.limit = 2
handler.register = true 
export default handler

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}
  
const getBuffer = async (url) => {
try {
const response = await fetch(url);
const buffer = await response.arrayBuffer();
return Buffer.from(buffer);
} catch (error) {
console.error("Error al obtener el buffer", error);
throw new Error("Error al obtener el buffer");
}}

async function getFileSize(url) {
try {
const response = await fetch(url, { method: 'HEAD' })
const contentLength = response.headers.get('content-length')
return contentLength ? parseInt(contentLength, 10) : 0
} catch (error) {
console.error("Error al obtener el tamaño del archivo", error)
return 0
}}

async function fetchInvidious(url) {
const apiUrl = `https://invidious.io/api/v1/get_video_info`
const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`)
const data = await response.json()
if (data && data.video) {
const videoInfo = data.video
return videoInfo
} else {
throw new Error("No se pudo obtener información del video desde Invidious")
}}

function getBestVideoQuality(videoData) {
const preferredQualities = ['720p', '360p', 'auto']
const availableQualities = Object.keys(videoData.video)
for (let quality of preferredQualities) {
if (availableQualities.includes(quality)) {
return videoData.video[quality].quality
}}
return '360p'
}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};
