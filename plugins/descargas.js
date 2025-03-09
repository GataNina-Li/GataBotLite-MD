import { youtubedl, youtubeSearch, youtubedlv2, tiktokdl } from '@bochilteam/scraper'
import { codeToEmoji, flagToCountry } from 'emoji-country-flags'
import uploader from '../lib/uploadImage.js'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
import { facebook } from "@xct007/frieren-scraper"
import { googleImage, mediafiredl } from '@bochilteam/scraper'
import fetch from "node-fetch"
import yts from "yt-search"
import ytdl from 'ytdl-core'
import { pipeline } from 'stream'
import { promisify } from 'util'
import os from 'os'
import axios from 'axios'
import Spotify from "spotifydl-x"
const LimitAud = 725 * 1024 * 1024; //700MB
const LimitVid = 425 * 1024 * 1024; //425MB

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality
const isCommand1 = /^(gimage|imagen?)$/i.test(command)
const isCommand2 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)
const isCommand3 = /^(mediafire(dl)?|dlmediafire)$/i.test(command)
const isCommand4 = /^(tkdl|tiktok)$/i.test(command)
const isCommand5 = /^(dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage)$/i.test(command)
const isCommand6 = /^(openjourney|journey|midjourney)$/i.test(command)
const isCommand7 = /^(spotify|music)$/i.test(command)
const isCommand8 = /^(spot(ify)?search)$/i.test(command)
const isCommand9 = /^(i(nsta)?g(ram)?(dl)?|igimage|igdownload)$/i.test(command)
const isCommand10 = /^((dl)?tw(it(ter(dl|x)?)?)?|x|t?tx)$/i.test(command)
const isCommand11 = /^(gitclone|clonarepo|clonarrepo|repoclonar)$/i.test(command)
const isCommand12 = /^(bardimg|bardimage|geminiimg|geminiimage|geminimg|geminimage)$/i.test(command)

async function reportError(e) {
let errb = await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
await console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
await console.log(e)
let faultkey = await conn.sendMessage(m.chat, { react: { text: fault, key: errb.key }})
await m.react(notsent)
}

switch (true) {     
case isCommand1:
if (!text) m.reply(lenguajeGB.smsMalused2() + `\n*${usedPrefix + command} Gata*`)
conn.reply(m.chat, wait, m)
try {
const google = `https://api.dorratz.com/googleimagen?text=${text}`
const res = await fetch(google)
const buffer = await res.buffer()
if (!buffer) {
conn.reply(m.chat, `No se encontraron resultados para "${text}".`, m)
break
}
await conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
} catch (e) {
reportError(e)
}
break
 
case isCommand2:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `\n*${usedPrefix}${command}* https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz\n\n*${usedPrefix}${command}* https://www.facebook.com/reel/1662783117489590?s=yWDuG2&fs=e&mibextid=Nif5oz`)
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) 
throw lenguajeGB.smsAvisoFG() + lenguajeGB.smsyFBvid1()
await m.reply(wait)
let messageType = checkMessageType(args[0])
let message = ''
switch (messageType) {
case "groups":
message = lenguajeGB.smsyFBvid2()
break
case "reel":
message = lenguajeGB.smsyFBvid3()
break
case "stories":
message = lenguajeGB.smsyFBvid4()
break
case "posts":
message = lenguajeGB.smsyFBvid5()
break
default:
message = lenguajeGB.smsyFBvid6()
break
}
try {
let neoxrRes = await fetch(`https://api.neoxr.eu/api/fb?url=${encodeURIComponent(args[0])}&apikey=GataDios`)
let neoxrJson = await neoxrRes.json()
if (neoxrJson.status && neoxrJson.data.length > 0) {
let videoURL = neoxrJson.data.find(video => video.quality === 'HD')?.url || neoxrJson.data.find(video => video.quality === 'SD')?.url
if (!videoURL) throw new Error('No se encontró URL del video.')
await conn.sendFile(m.chat, videoURL, 'video.mp4', `*${message}*`, m)
} else {
throw new Error('Error al obtener información del video.')
}
} catch (error) {
reportError(error) 
}
break
        
case isCommand3:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://www.mediafire.com/file/04kaaqx9oe3tb8b/DOOM_v13_CLONE%255BCOM.FM%255D.apk/file*`)
try {
const res = await fetch(`https://api.neoxr.eu/api/mediafire?url=${args[0]}&apikey=GataDios`)
if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
const data = await res.json()
if (!data || !data.data) 
throw new Error("No se encontró información del archivo")
const fileData = data.data
const caption = `🗂️ Nombre: ${fileData.filename}
⚖️ Tamaño: ${fileData.size}
📡 Tipo MIME: ${fileData.mime}
🖇️ Extensión: ${fileData.extension}

${lenguajeGB.smsMediaFr()}`.trim()
await m.reply(caption)
await conn.sendFile(m.chat, fileData.url, fileData.filename, '', m, null, { mimetype: fileData.mime, asDocument: true })
} catch (error) {
console.error(error)
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ${usedPrefix + command}`)
}
break

case isCommand4:
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsMalused2']()}\n*${usedPrefix + command} https://vm.tiktok.com/ZM2e66NBM/?t=1*`, m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) 
return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*${lenguajeGB['smsYT6']()}*`, m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*${lenguajeGB['smsTiktok']()}*`, m)
try {
const response = await fetch(`https://api.dorratz.com/v2/tiktok-dl?url=${text}`)
const { data } = await response.json()
const { id, region, title, duration, repro: total_play, like: total_like, share: total_share, comment: total_comment, download: total_download, author, media, } = data
const { username, nickname } = author
const { hd, music } = media
const minutes = Math.floor(duration / 60)
const seconds = duration % 60
const durationText = minutes > 0 ? `${minutes} minutos${seconds > 0 ? ` y ${seconds} segundos` : ''}` : `${seconds} segundos`
const txtTK = `
> *INFORMACIÓN DE USUARIO*\n
👤 *Usuario:* \`${username}\` 
🔗 *Enlace:* tiktok.com/@${username} 
📌 *Nombre:* ${nickname || 'No encontrado'}\n
> *INFORMACIÓN DEL VÍDEO*\n
🕒 *Duración:* ${durationText}
📝 *Descripción:* ${title || 'No encontrado'}\n
> *INFORMACIÓN DEL SONIDO*\n
🎙️ *Autor:* ${data.music.author || 'Desconocido'}
🎶 *Música:* ${data.music.title || 'Desconocido'}\n
> *INFORMACIÓN ADICIONAL*\n
👀 *Reproducciones:* ${total_play}
❤️ *Me gusta:* ${total_like}
📈 *Descargas:* ${total_download}
🔁 *Compartidos:* ${total_share}
💬 *Comentarios:* ${total_comment}`.trim()
await conn.sendMessage(m.chat, { video: { url: hd }, mimetype: 'video/mp4', caption: txtTK }, { quoted: m })
} catch (e) {
reportError(e)
}
break
        
case isCommand5:
if (!args[0]) {
return conn.reply(m.chat, `${lenguajeGB['smsMalused3']()}\n*${usedPrefix + command} ${lenguajeGB.smsIAimage2()}*`, m)
}
const prompt = args.join(' ')
const apiUrl = `https://api.dorratz.com/v3/ai-image?prompt=${prompt}`
try {
await m.reply(wait)
const response = await axios.get(apiUrl)
if (response.data && response.data.data && response.data.data.image_link) {
const imageUrl = response.data.data.image_link;
await conn.sendFile(m.chat, imageUrl, 'image.jpg', lenguajeGB.smsIAimage() + `\n\n_${text}_`, m)
} else {
throw new Error('No se encontró una imagen con dicha descripción.')
}
} catch (error) {
reportError(e)
}
break
        
case isCommand6:
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, `${lenguajeGB['smsMalused3']()}\n*${usedPrefix + command} ${lenguajeGB.smsIAimage4()}*`, m)
m.reply(wait)
try {
await Draw(text).then((img) => {
conn.sendFile(m.chat, img, 'image.jpg', lenguajeGB.smsIAimage3() + `\n\n_${text}_`, m)
})
} catch (e) {
reportError(e)}        
break
        
case isCommand7:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} Runaway*\n\n*${usedPrefix + command} https://open.spotify.com/track/23rdcrD0Eky4vYn2TZidxJ*\n\n${lenguajeGB.smsSP0(usedPrefix)}`)
try {
let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
let linkDL = jsonDL.result[0].link
let spty = await spotifydl(linkDL)
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
let randomName = getRandom(".mp3")
const filePath = `./tmp/${randomName}`
fs.writeFileSync(filePath, spty.audio)
let spotifyi = `${lenguajeGB.smsSP1()}
⭔ _${spty.data.name}_

${lenguajeGB.smsSP2()}
⭔ _${spty.data.artists}_

${lenguajeGB.smsSP3()}
⭔ _${linkDL}_

${lenguajeGB.smsSP5()}`
await m.reply(wait)
await conn.sendFile(m.chat, spty.data.cover_url, 'image.jpg', '💚 *Ｓ Ｐ Ｏ Ｔ Ｉ Ｆ Ｙ* 💚\n\n' + spotifyi, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mp4", }, { quoted: m })    
} catch (e) {
reportError(e)}              
break
        
case isCommand8:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} Bellyache*`)
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${encodeURIComponent(text)}`)
let json = await res.json()
if (json.status != '200') return m.reply(lenguajeGB.smsSP6())
try{
let get_result = json.result
let ini_txt = `🔎 \`\`\`${text}\`\`\``
for (var sh of get_result) {
const duration = sh.duration
const formatted = formatVideoDuration(duration)
ini_txt += `\n\n${lenguajeGB.smsSP1()} ${sh.title} | ⏱️ ${formatted}\n`
ini_txt += `${lenguajeGB.smsSP2()} ${sh.artists}\n`
ini_txt += `${lenguajeGB.smsSP3()} ${sh.link}\n`
ini_txt += `⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯`
}
await m.reply(wait)
await m.reply(ini_txt)  
} catch (e) {
reportError(e)} 
break
        
case isCommand9:
if (!args[0]) { return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command}* ` + 'https://www.instagram.com/reel/CrWooCiKGKP/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==')}
try {
let apiResponse = await fetch(`https://api.neoxr.eu/api/ig-fetch?url=${args[0]}&apikey=GataDios`)
let responseJson = await apiResponse.json()
if (!responseJson.status || !responseJson.data || !responseJson.data[0].url) { throw new Error('Respuesta inválida de la API Neox')}
let videoUrl = responseJson.data[0].url;
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let messageText = `🔗 *URL:* ${shortUrl}`.trim()
await m.reply(wait)
try {
await conn.sendFile(m.chat, videoUrl, 'video.mp4', messageText, m)
} catch (e) {
await conn.sendMessage(m.chat, { image: { url: videoUrl }, caption: messageText }, { quoted: m })}
} catch (e) {
reportError(e)}
break

case isCommand10:
const twitterUrlRegex = /^https?:\/\/(www\.)?twitter\.com\/(\w+)\/status\/(\d+)$/i
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command}* ` + 'https://twitter.com/gofoodindonesia/status/1229369819511709697')
try{ 
const apiUrl = `https://api.lolhuman.xyz/api/twitter?apikey=${lolkeysapi}&url=${encodeURIComponent(text)}`
const response = await fetch(apiUrl)
const jsonData = await response.json()
const tweetData = jsonData.result
const tweetTitle = tweetData.title
const tweetVideoUrl = tweetData.media[0].url
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
const tweetTitleWithoutUrl = tweetTitle.replace(/https?:\/\/t\.co\/\w+/i, '').trim()
const txt1 = `🖤 ${tweetTitleWithoutUrl}\n\n🔗 *URL:*\n• _${shortUrl1}_`.trim()
await conn.sendFile(m.chat, tweetVideoUrl, 'error.mp4', txt1, m)
} catch (e) {
reportError(e)} 
break

case isCommand11:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command}* ${md}`)
conn.reply(m.chat, `${lenguajeGB.smsAvisoEG()} ${lenguajeGB.smsGit()}`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: igfg, 
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu2.jpg"),
sourceUrl: `https://github.com/GataNina-Li/GataBotLite-MD`}}})
if (!regex.test(args[0])) throw 'LINK INCORRECTO';
let [_, user, repo] = args[0].match(regex) || [];
repo = repo.replace(/.git$/, '');
let urlrepo = `https://api.github.com/repos/${user}/${repo}/zipball`;
const filename = (await fetch(urlrepo, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
conn.sendFile(m.chat, urlrepo, filename, null, m);
break

case isCommand12:
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
await m.reply(wait)
let media = await (uploader)(buffer)
let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()
await conn.sendMessage(m.chat, { text: json.result }, { quoted: m })
} else return m.reply(`*RESPONDE A UNA IMAGEN CON UN TEXTO*\n\n*EJEMPLO*\n*${usedPrefix + command}* describe esta imagen`)
} catch (e) {
reportError(e)}
break   
        
}}
handler.command = /^(gimage|imagen?|facebook|fb|facebookdl|fbdl|mediafire(dl)?|dlmediafire|tiktok|tkdl|dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage|openjourney|journey|midjourney|spotify|music|spot(ify)?search|i(nsta)?g(ram)?(dl)?|igimage|igdownload|(dl)?tw(it(ter(dl|x)?)?)?|x|t?tx|gitclone|clonarepo|clonarrepo|repoclonar|bardimg|bardimage|geminiimg|geminiimage|geminimg|geminimage)$/i
handler.register = true
export default handler

async function cut(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`)
  if (!res.ok) throw false
  return await res.text()
}

async function Draw(propmt) {
const Blobs = await fetch(
"https://api-inference.huggingface.co/models/prompthero/openjourney-v2",
{
method: "POST",
headers: {
"content-type": "application/json",
Authorization: "Bearer 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",
},
body: JSON.stringify({ inputs: propmt }),
})
.then((res) => res.blob())
const arrayBuffer = await Blobs.arrayBuffer();
const buffer = Buffer.from(arrayBuffer);
return buffer
}

function checkMessageType(url) {
if (url.includes("www.facebook.com")) {
if (url.includes("/groups/")) {
return "groups"
} else if (url.includes("/reel/")) {
return "reel"
} else if (url.includes("/stories/")) {
return "stories"
} else if (url.includes("/posts/")) {
return "posts"
}}
return "default"
}

function formatVideoDuration(duration) {
const durationString = String(duration)
const length = durationString.length

if (length === 2) {
const seconds = durationString
return `${seconds} seg`
} else if (length === 3) {
const minutes = durationString.substring(0, 1)
const seconds = durationString.substring(1)
return `${minutes}:${seconds} min`
} else if (length === 4) {
const minutes = durationString.substring(0, 2)
const seconds = durationString.substring(2)
return `${minutes}:${seconds} min`
} else {
return "--"
}}

async function search(query, options = {}) {
const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay};

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

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

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};

async function spotifydl(url) {
const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
const res = await spotify.getTrack(url).catch(() => {
return { error: 'Fallo la descarga' }})
return { data: res, audio: await spotify.downloadTrack(url) }}

const getBuffer = async (url, options) => {
options ? options : {}
const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'})
return res.data
}

function formatNumber(number) {
if (number < 1000) return number.toString()
if (number < 1000000) return (number / 1000).toFixed(1) + 'K'
return (number / 1000000).toFixed(1) + 'M'
}

async function getFileSize(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentLength = response.headers.get('content-length');
        return contentLength ? parseInt(contentLength, 10) : 0;
    } catch (error) {
        console.error("Error al obtener el tamaño del archivo", error);
        return 0;
    }
}
