import fetch from 'node-fetch'
import { facebook } from "@xct007/frieren-scraper"
var handler = async (m, { conn, command, text, args, usedPrefix }) => {
async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}
  
if (!text) throw `${usedPrefix}${command} https://www.facebook.com/100010929794713/posts/1885825845125057/`    
try {
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
let _json = await res.json();
let vid = _json.result[0];
if (vid == '' || !vid || vid == null) vid = _json.result[1];
await conn.sendFile(m.chat, vid, 'error.mp4', wm, m);
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0]);
let r2es = '';
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`;
}
await conn.sendFile(m.chat, r2es, 'error.mp4', packname, m);
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`);
var js = await get.json();
await conn.sendFile(m.chat, js.result.HD, 'fb.mp4', wm, m);
} catch (e) {
reportError(e)} 
}}
 
}

handler.command = /^(facebook5)$/i
export default handler
