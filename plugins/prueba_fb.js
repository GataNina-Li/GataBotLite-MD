import fetch from 'node-fetch'
import fbDownloader from 'fb-downloader-scrapper'
var handler = async (m, { conn, command, text, args, usedPrefix }) => {
if (!text) throw `${usedPrefix}${command} https://www.facebook.com/100010929794713/posts/1885825845125057/`
//let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
//let _json = await res.json()
//let vid = _json.result[0]
//if (vid == '' || !vid || vid == null) vid = _json.result[1]
//conn.sendFile(m.chat, vid, 'error.mp4', wm, m)    
let res = await fbDownloader(args[0])
for (let result of res.download) {
let ur = result.url    
await conn.sendFile(m.chat, ur, 'error.mp4', packname, m)}
}

handler.command = /^(facebook5)$/i
export default handler
