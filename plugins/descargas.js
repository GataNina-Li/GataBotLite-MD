import { youtubedl, youtubedlv2, youtubedlv3, tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'  
import { facebook } from "@xct007/frieren-scraper"
import { googleImage } from '@bochilteam/scraper'
import fetch from "node-fetch"
import yts from 'yt-search'
import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality
const isCommand1 = /^(gimage|imagen?)$/i.test(command)
const isCommand2 = /^(play2?)$/i.test(command)
const isCommand3 = /^(fgmp3|dlmp3|getaud|yt(a|mp3)?)$/i.test(command)
const isCommand4 = /^(ytmp3doc|ytadoc)$/i.test(command)
const isCommand5 = /^(fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i.test(command)
const isCommand6 = /^(ytmp4doc|ytvdoc)$/i.test(command)
const isCommand7 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)
const isCommand8 = /^(mediafire(dl)?|dlmediafire)$/i.test(command)
const isCommand9 = /^(ytmax)$/i.test(command)
const isCommand10 = /^(tkdl|tiktok)$/i.test(command)
const isCommand11 = /^(ytmaxdoc)$/i.test(command)
const isCommand12 = /^(dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage)$/i.test(command)
const isCommand13 = /^(openjourney|journey|midjourney)$/i.test(command)
const isCommand14 = /^(spotify|music)$/i.test(command)
const isCommand15 = /^(spot(ify)?search)$/i.test(command)
const isCommand16 = /^(i(nsta)?g(ram)?(dl)?|igimage|igdownload)$/i.test(command)


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
let vid = (await yts(text)).all[0]
if (!vid) return m.reply(lenguajeGB.smsMalError2() + `_${lenguajeGB.smsYT6()}_`)
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
url = 'https://www.youtube.com/watch?v=' + videoId
let link_web = `https://yt.btch.bz/downloadAudio?URL=${url}&videoName=video`     

let message = await conn.sendMessage(m.chat, { text: video, contextInfo: { externalAdReply: { title: wm, body: wait2.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: md, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}})
await m.react(sending)
await message.react(waitemot)
setTimeout(() => { message.react(waitemot2) }, 1000)
if (!title || !description || !url || !thumbnail || !timestamp || !views) {
setTimeout(() => { message.react(alert) }, 2000)}
    
q = '128kbps'
v = url
yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
dl_url = await yt.audio[q].download()
title = await yt.title
size = await yt.audio[q].fileSizeH  
await conn.sendMessage(m.chat, { audio: { url: link_web }, mimetype: 'audio/mpeg' }, { quoted: m })
await m.react(sent)    
await message.react(correct)
} catch (e) {
reportError(e)
}    
break
        
case isCommand3:
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
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m }) 
} catch (e) {
reportError(e)
}}       
break
        
case isCommand4:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`)
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
reportError(e)
}}         
break
        
case isCommand5:
if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`)
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTV1() + '*', m)
try {
qu = args[1] || '360'
q = qu + 'p'
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.video[q].download()
ttl = await yt.title
size = await yt.video[q].fileSizeH
await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${ttl}*\n*⚖️ ${size}*`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
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
reportError(e)}}     
break

case isCommand6:
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
        
case isCommand7:
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
        
case isCommand8:
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
        
case isCommand9:
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
case isCommand10:
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
   
case isCommand11:
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
        
case isCommand12:
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, `${lenguajeGB['smsMalused3']()}\n*${usedPrefix + command} ${lenguajeGB.smsIAimage2()}*`, m)
await m.reply(wait) 
try{   
let response = await fetch(`https://botcahx.cyclic.app/dalle?text=${encodeURIComponent(text)}`)
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
        
case isCommand13:
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
        
case isCommand14:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} Runaway*\n\n*${usedPrefix + command} https://open.spotify.com/track/23rdcrD0Eky4vYn2TZidxJ*\n\n${lenguajeGB.smsSP0(usedPrefix)}`)
let link
if (text.startsWith('https://open.spotify.com/track/')) {
link = text
} else {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
link = json.result[0].link
}
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
if (json2.status != '200') return m.reply(lenguajeGB.smsSP6())
let { thumbnail, title, artists, link: songLink } = json2.result
try {
let spotifyi = `${lenguajeGB.smsSP1()}
⭔ _${title}_

${lenguajeGB.smsSP2()}
⭔ _${artists}_

${lenguajeGB.smsSP3()}
⭔ _${link}_

${lenguajeGB.smsSP4()}
⭔ _${songLink}_

${lenguajeGB.smsSP5()}`

await m.reply(wait)
await conn.sendFile(m.chat, thumbnail, 'image.jpg', '💚 *Ｓ Ｐ Ｏ Ｔ Ｉ Ｆ Ｙ* 💚\n\n' + spotifyi, m)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
reportError(e)}              
break
        
case isCommand15:
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
        
case isCommand16:
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
}}

handler.command = /^(gimage|imagen?|play2?|fgmp3|dlmp3|getaud|yt(a|mp3)?|ytmp3doc|ytadoc|fgmp4|dlmp4|getvid|yt(v|mp4)?|ytmp4doc|ytvdoc|facebook|fb|facebookdl|fbdl|mediafire(dl)?|dlmediafire|ytmax|ytmaxdoc|tiktok|tkdl|dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage|openjourney|journey|midjourney|spotify|music|spot(ify)?search|i(nsta)?g(ram)?(dl)?|igimage|igdownload)$/i
handler.register = true
export default handler

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

