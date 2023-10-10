import { youtubedl, youtubeSearch, youtubedlv2, tiktokdl } from '@bochilteam/scraper'  
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
import { facebook } from "@xct007/frieren-scraper"
import { googleImage } from '@bochilteam/scraper'
import fetch from "node-fetch"
import yts from "yt-search"
import ytdl from 'ytdl-core'
import axios from 'axios'
import Spotify from "spotifydl-x"

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality
const isCommand1 = /^(gimage|imagen?)$/i.test(command)
const isCommand2 = /^(play|play2)$/i.test(command)
//const isCommand3 = /^(play2)$/i.test(command)
const isCommand4 = /^(fgmp3|dlmp3|getaud|yt(a|mp3)?)$/i.test(command)
const isCommand5 = /^(ytmp3doc|ytadoc)$/i.test(command)
const isCommand6 = /^(fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i.test(command)
const isCommand7 = /^(ytmp4doc|ytvdoc)$/i.test(command)
const isCommand8 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)
const isCommand9 = /^(mediafire(dl)?|dlmediafire)$/i.test(command)
const isCommand10 = /^(ytmax)$/i.test(command)
const isCommand11 = /^(tkdl|tiktok)$/i.test(command)
const isCommand12 = /^(ytmaxdoc)$/i.test(command)
const isCommand13 = /^(dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage)$/i.test(command)
const isCommand14 = /^(openjourney|journey|midjourney)$/i.test(command)
const isCommand15 = /^(spotify|music)$/i.test(command)
const isCommand16 = /^(spot(ify)?search)$/i.test(command)
const isCommand17 = /^(i(nsta)?g(ram)?(dl)?|igimage|igdownload)$/i.test(command)
const isCommand18 = /^((dl)?tw(it(ter(dl|x)?)?)?|x|t?tx)$/i.test(command)
const isCommand19 = /^(gitclone|clonarepo|clonarrepo|repoclonar)$/i.test(command)

async function reportError(e) {
let errb = await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
await console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
await console.log(e)
let faultkey = await conn.sendMessage(m.chat, { react: { text: fault, key: errb.key }})
await m.react(notsent)
//setTimeout(() => { faultkey, m.react(notsent) }, 1000)
}

switch (true) {     
case isCommand1:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `\n*${usedPrefix + command} Gata*`)
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito','pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('⚠️😾')      
try{
    
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `${lenguajeGB.smsImageGg()} ${text}`, m)
} catch (e) {
reportError(e)
} 
break
    
case isCommand2:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} Billie Eilish - Bellyache*`)
try{    
if (command == 'play') { 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
if (!yt_play) return m.reply(lenguajeGB.smsMalError2() + `_${lenguajeGB.smsYT6()}_`)
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let video = `*◜⋯ ⋯ ⋯ Y O U T U B E ⋯ ⋯ ⋯◞*
*◎ ${lenguajeGB.smsYT1()}*
${yt_play[0].title}

*◎ ${lenguajeGB.smsYT3()}*
${secondString(yt_play[0].duration.seconds)}

*◎ ${lenguajeGB.smsYT4()}*
${MilesNumber(yt_play[0].views)}

*◎ URL*
${yt_play[0].url}
*◜⋯ ⋯ ⋯ ⬇️ A U D I O ⬇️ ⋯ ⋯ ⋯◞*`.trim()
url = 'https://www.youtube.com/watch?v=' + videoId
//let link_web = `https://yt.btch.bz/downloadAudio?URL=${url}&videoName=video`  
let apiUrl = `https://api.akuari.my.id/downloader/yt1?link=${url}`
let response = await fetch(apiUrl)
let apiResponse = await response.json() 
let dl_audio_url = apiResponse.urldl_audio.link
let dl_video_url = apiResponse.urldl_video.link
ttl = apiResponse.info.title  
let message = await conn.sendMessage(m.chat, { text: video, contextInfo: { externalAdReply: { title: wm, body: wait2.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: md, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}})
await m.react(sending)
await message.react(waitemot)
setTimeout(() => { message.react(waitemot2) }, 1000)
//if (apiResponse.status !== 200) { 
//setTimeout(() => { message.react(alert) }, 2000)}
try{    
let q = '128kbps'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch {
try{ 
const dataRE = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${yt_play[0].url}`)
const dataRET = await dataRE.json()
await conn.sendMessage(m.chat, { audio: { url: dataRET.dl_audio }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch {
try{ 
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
await conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: 'audio/mpeg' }, { quoted: m })   
} catch { 
await conn.sendMessage(m.chat, { audio: { url: dl_audio_url }, mimetype: 'audio/mpeg' }, { quoted: m })
}}}
await m.react(sent)    
await message.react(correct)}
if (command == 'play2') {
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
if (!yt_play) return m.reply(lenguajeGB.smsMalError2() + `_${lenguajeGB.smsYT6()}_`)
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let video = `*◜⋯ ⋯ ⋯ Y O U T U B E ⋯ ⋯ ⋯◞*
*◎ ${lenguajeGB.smsYT1()}*
${yt_play[0].title}

*◎ ${lenguajeGB.smsYT3()}*
${secondString(yt_play[0].duration.seconds)}

*◎ ${lenguajeGB.smsYT4()}*
${MilesNumber(yt_play[0].views)}

*◎ URL*
${yt_play[0].url}
*◜⋯ ⋯ ⋯ ⬇️ V I D E O ⬇️ ⋯ ⋯ ⋯◞*`.trim()
let message = await conn.sendMessage(m.chat, { text: video, contextInfo: { externalAdReply: { title: wm, body: wait2.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: md, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}})
await m.react(sending)
await message.react(waitemot)
setTimeout(() => { message.react(waitemot2) }, 1000)
//if (apiResponse.status !== 200) { 
//setTimeout(() => { message.react(alert) }, 2000)}
let mediaa = await ytMp4(yt_play[0].url)
await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `${wm}`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m }) 
//await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `💜 ${ttl}`, thumbnail: await fetch(thumbnail) }, { quoted: m }) 
await m.react(sent)    
await message.react(correct)
}} catch (e) {
reportError(e)}    
break
            
case isCommand4:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`)
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
let searchh = await yts(text)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
await conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: 'audio/mpeg' }, { quoted: m })  
} catch (e) {
reportError(e)
}}       
break
        
case isCommand5:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`)
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTA2() + '*', m)
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
try {
let searchh = await yts(text)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
await conn.sendMessage(m.chat, { document: { url: ress.url }, caption: description, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
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
reportError(e)
}}         
break
        
case isCommand6:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`)
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTV1() + '*', m)
try {
qu = '360'
q = qu + 'p';
v = args[0]
yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
dl_url = await yt.video[q].download()
ttl = await yt.title
size = await yt.video[q].fileSizeH
await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${ttl}*${size !== undefined ? `\n*⚖️ ${size}*` : ''}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
n2 = lolh.result.link
n3 = lolh.result.size
n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${n}*${n3 !== undefined ? `\n*⚖️ ${n3}*` : ''}`, thumbnail: await fetch(n4) }, { quoted: m })
} catch (e) {
reportError(e)}}     
break

case isCommand7:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`)
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
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
} catch {
try{
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
n2 = lolh.result.link
n3 = lolh.result.size
cap = `🎥 *VIDEO* 🎥\n\n*⎔ ${n}*\n\n*⎔ ${n3}*`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m})
} catch (e) {
reportError(e)
} 
}
break
        
case isCommand8:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `\n*${usedPrefix}${command}* https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz\n\n*${usedPrefix}${command}* https://www.facebook.com/reel/1662783117489590?s=yWDuG2&fs=e&mibextid=Nif5oz`)
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) throw lenguajeGB.smsAvisoFG() + lenguajeGB.smsyFBvid1()
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
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
let _json = await res.json()
vid = _json.result[0]
if (vid == '' || !vid || vid == null) vid = _json.result[1]
await conn.sendFile(m.chat, vid, 'error.mp4', `*${message}*`, m)
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0])
let r2es = ''
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`
}
await conn.sendFile(m.chat, r2es, 'error.mp4', `*${message}*`, m)
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`)
var js = await get.json()
await conn.sendFile(m.chat, js.result.HD, 'error.mp4', `*${message}*`, m)
} catch (e) {
reportError(e)} 
}}    
break
        
case isCommand9:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://www.mediafire.com/file/04kaaqx9oe3tb8b/DOOM_v13_CLONE%255BCOM.FM%255D.apk/file*`)
try {  
let res = await mediafireDl(args[0])
let { name, date, mime, link, size:peso } = res
let caption = `
🗂️ ${name}
⌛ ${date}
⚖️ ${peso}
📡 ${mime}

${lenguajeGB.smsMediaFr()}`.trim()
await m.reply(caption)
await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })  
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}    
async function mediafireDl(url) {
const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
const $ = cheerio.load(res.data)
const link = $('#downloadButton').attr('href')
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
let mime = ''
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name, size, date, mime, link }
}
break 
        
case isCommand10:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`)
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTV1() + '*', m)
try {
q = ''
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
  let quality = null
let qualities = ['2160p', '1440p', '1080p', '720p', '480p', '360p', '240p', '144p']

for (let i = 0; i < qualities.length; i++) {
currentQuality = qualities[i]
  
if (yt.video[currentQuality]) {
dl_url = await yt.video[currentQuality].download();
size = currentQuality
quality = currentQuality
break
}}
ttl = await yt.title;
await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*🌻 ${ttl}*\n*🔱 ${size == '720p' ? 'HD' : size == '1080p' ? 'FULL HD' : size == '1440p' ? '2K' : '4K'}*`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch (e) {
reportError(e)
}        
break

//codigo adaptado por https://github.com/elrebelde21
case isCommand11:
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsMalused2']()}\n*${usedPrefix + command} https://vm.tiktok.com/ZM2e66NBM/?t=1*`, m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*${lenguajeGB['smsYT6']()}*`, m)  
try {
const { author: { nickname }, video, description, audio } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*${lenguajeGB['smsTiktok']()}*`, m)    
await conn.sendFile(m.chat, url, 'tiktok.mp4', `
💜 *${nickname}*`.trim(), m)
await conn.sendMessage(m.chat, { audio: { url: url }, fileName: 'tiktok.mp3', mimetype: 'audio/mp4', ptt: false }, { quoted: m })     
} catch (e) {
reportError(e)
}         
break
   
case isCommand12:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`)
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTV2() + '*', m)
try {
q = ''
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
let quality = null
let qualities = ['2160p', '1440p', '1080p', '720p', '480p', '360p', '240p', '144p']
for (let i = 0; i < qualities.length; i++) {
currentQuality = qualities[i] 
if (yt.video[currentQuality]) {
dl_url = await yt.video[currentQuality].download();
size = currentQuality
quality = currentQuality
break
}}
ttl = await yt.title;
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `*🪷 ${ttl}*\n*🎞️ ${size == '720p' ? 'HD' : size == '1080p' ? 'FULL HD' : size == '1440p' ? '2K' : '4K'}*`, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
} catch (e) {
reportError(e)
}        
break
        
case isCommand13:
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, `${lenguajeGB['smsMalused3']()}\n*${usedPrefix + command} ${lenguajeGB.smsIAimage2()}*`, m)
await m.reply(wait) 
try{   
let response = await fetch(`https://api.lolhuman.xyz/api/diffusion-prompt?apikey=${lolkeysapi}&prompt=${text}`)
let image = await response.buffer()
await conn.sendFile(m.chat, image, 'image.jpg', lenguajeGB.smsIAimage() + `\n\n_${text}_`, m)
} catch {
try{
let res = `https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`  
await conn.sendFile(m.chat, res, 'image.jpg', lenguajeGB.smsIAimage() + `\n\n_${text}_`, m)
} catch (e) {
reportError(e)} 
}        
break
        
case isCommand14:
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
        
case isCommand15:
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
//let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
//if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
reportError(e)}              
break
        
case isCommand16:
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
        
case isCommand17:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command}* ` + 'https://www.instagram.com/reel/CrWooCiKGKP/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==')
try{
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json3 = await human.json()
let ig_ = json3.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `🔗 *URL:* ${shortUrl1}`.trim()
await m.reply(wait)
try{
await conn.sendFile(m.chat, ig_, 'error.mp4', txt1, m)  
} catch (e) {
await conn.sendMessage(m.chat, { image: { url: ig_ }, caption: txt1 }, { quoted: m })    
}} catch (e) {
reportError(e)} 
break

case isCommand18:
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

case isCommand19:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command}* ${md}`)
//await m.reply(`*${lenguajeGB.smsGit()}*`);
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
}}
handler.command = /^(gimage|imagen?|play|play2|fgmp3|dlmp3|getaud|yt(a|mp3)?|ytmp3doc|ytadoc|fgmp4|dlmp4|getvid|yt(v|mp4)?|ytmp4doc|ytvdoc|facebook|fb|facebookdl|fbdl|mediafire(dl)?|dlmediafire|ytmax|ytmaxdoc|tiktok|tkdl|dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage|openjourney|journey|midjourney|spotify|music|spot(ify)?search|i(nsta)?g(ram)?(dl)?|igimage|igdownload|(dl)?tw(it(ter(dl|x)?)?)?|x|t?tx|gitclone|clonarepo|clonarrepo|repoclonar)$/i
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
