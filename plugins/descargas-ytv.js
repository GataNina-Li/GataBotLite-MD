import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTV1() + '*', m)
try {
const qualities = ['1080', '720', '480', '360', '240', '144'];
let quIndex = qualities.indexOf(args[1]);
if (quIndex === -1) {
  quIndex = qualities.indexOf('360');
}
let dl_url, ttl, size, q;

for (let i = quIndex; i < qualities.length; i++) {
  q = qualities[i] + 'p';
  const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v));
  if (yt.video[q]) {
    dl_url = await yt.video[q].download();
    ttl = await yt.title;
    size = await yt.video[q].fileSizeH;
    break;
  }
}

await conn.sendMessage(m.chat, { 
  video: { url: dl_url }, 
  fileName: `${ttl}.mp4`, 
  mimetype: 'video/mp4', 
  caption: `*💫 ${ttl}*\n*⚖️ ${size}*`, 
  thumbnail: await fetch(yt.thumbnail) 
}, { quoted: m });
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${n}*\n*⚖️ ${n3}*`, thumbnail: await fetch(n4) }, { quoted: m })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}}
handler.command = /^fgmp4|dlmp4|getvid|yt(v|mp4)?$/i
handler.register = true
export default handler
