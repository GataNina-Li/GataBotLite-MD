import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper' 
import { googleImage } from '@bochilteam/scraper'
import fetch from "node-fetch"
import yts from 'yt-search'
import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu
const isCommand1 = /^(gimage|imagen?)$/i.test(command)
const isCommand2 = /^(play2?)$/i.test(command)
const isCommand3 = /^(fgmp3|dlmp3|getaud|yt(a|mp3)?)$/i.test(command)
const isCommand4 = /^(ytmp3doc|ytadoc)$/i.test(command)
const isCommand5 = /^(fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i.test(command)
const isCommand6 = /^(ytmp4doc|ytvdoc)$/i.test(command)
const isCommand7 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)
const isCommand8 = /^(mediafire(dl)?|dlmediafire)$/i.test(command)
const isCommand9 = /^(ytmax(v|mp4)?)$/i.test(command)

switch (true) {     
case isCommand1:
if (!text) throw lenguajeGB.smsMalused2() + `\n*${usedPrefix + command} Gata*`
try{
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*💞 Resultado de:* ${text}`, m)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
break
    
case isCommand2:
if (!text) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await yts(text)).all[0]
if (!vid) throw lenguajeGB.smsMalError2() + `_${lenguajeGB.smsYT6()}_`
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
await conn.sendFile(m.chat, thumbnail, 'error.jpg', video, m)    
q = '128kbps'
v = url
yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
dl_url = await yt.audio[q].download()
title = await yt.title
size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}    
break
        
case isCommand3:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
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
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}        
break
        
case isCommand4:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
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
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}        
break
        
case isCommand5:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
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
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}        
break

case isCommand6:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
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
await await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
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
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}
break
        
case isCommand7:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`
if (!args[0].match(/www.facebook.com|fb.watch/g)) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`    
try {  
let contenido = `✅ *FACEBOOK*`
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await m.reply(wait)
await conn.sendFile(m.chat, videovio, `error.mp4`, contenido, m)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
break
        
case isCommand8:
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://www.mediafire.com/file/04kaaqx9oe3tb8b/DOOM_v13_CLONE%255BCOM.FM%255D.apk/file*`
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
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTV1() + '*', m)
try {
q = '';
v = args[0];
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
  if (yt.video['1080p']) {
  dl_url = await yt.video['1080p'].download().catch(async (_) => {
    if (yt.video['720p']) {
      dl_url = await yt.video['720p'].download().catch(async (_) => {
        if (yt.video['480p']) {
          dl_url = await yt.video['480p'].download().catch(async (_) => {
            if (yt.video['360p']) {
              dl_url = await yt.video['360p'].download();
              size = await yt.video['360p'].fileSizeH;
            }
          });
          if (!dl_url) {
            size = '480p' //await yt.video['480p'].fileSizeH;
          }
        }
      });
      if (!dl_url) {
        size = '720p' //await yt.video['720p'].fileSizeH;
      }
    }
  });
  if (!dl_url) {
    size = '1080p' //await yt.video['1080p'].fileSizeH;
  }
}
  ttl = await yt.title;
await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${ttl}*\n*⚖️ ${size}*`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
//await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: 'Prueba', thumbnail: await fetch(yt.thumbnail)}, { quoted: m })
/*qu = args[1] || '720'
q = qu + 'p' 
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.video[q].download()
ttl = await yt.title
size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${ttl}*\n*⚖️ ${size}*`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })*/
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}        
break
}}

handler.command = /^(gimage|imagen?|play2?|fgmp3|dlmp3|getaud|yt(a|mp3)?|ytmp3doc|ytadoc|fgmp4|dlmp4|getvid|yt(v|mp4)?|ytmp4doc|ytvdoc|facebook|fb|facebookdl|fbdl|mediafire(dl)?|dlmediafire|ytmax(v|mp4)?)$/i
handler.register = true
export default handler
