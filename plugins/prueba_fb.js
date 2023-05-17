import fetch from 'node-fetch'
import { facebook } from "@xct007/frieren-scraper"
var handler = async (m, { conn, command, text, args, usedPrefix }) => {
if (!text) throw `${usedPrefix}${command} https://www.facebook.com/100010929794713/posts/1885825845125057/`
//let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
//let _json = await res.json()
//let vid = _json.result[0]
//if (vid == '' || !vid || vid == null) vid = _json.result[1]
//conn.sendFile(m.chat, vid, 'error.mp4', wm, m)  

//const d2ata = await facebook.v1(args[0])
//let r2es = ''
//if (d2ata.urls && d2ata.urls.length > 0) {
//r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`}
//conn.sendFile(m.chat, r2es, 'error.mp4', packname, m)

var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`);
var js = await get.json()   
conn.sendFile(m.chat, js.result.HD, 'fb.mp4', wm, m);
}

handler.command = /^(facebook5)$/i
export default handler
