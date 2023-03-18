import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + '*' + lenguajeGB.smsYTV1() + '*', m)
try {
let qu = args[1] || '720';
let sizes = ['1080p', '720p', '480p', '360p', '240p', '144p'];
let i = 0;
let size = null;
let dl_url = null;
let ttl = null;

while (size == null && i < sizes.length) {
  let q = sizes[i];
  const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v));
  dl_url = await yt.video[q].download();
  ttl = await yt.title;
  size = await yt.video[q].fileSizeH;
  i++;
}

if (size == null) {
  q = '360p';
  const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v));
  dl_url = await yt.video[q].download();
  ttl = await yt.title;
  size = await yt.video[q].fileSizeH;
}

await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${ttl}*\n*⚖️ ${size}*`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m });
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
