import fetch from 'node-fetch'
import instagramGetUrl from 'instagram-url-direct'

let handler = async (m, { conn, args, command, usedPrefix }) => {
/*let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await human.json()
let videoig = json.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `🔗 *Url:* ${shortUrl1}`.trim()
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m)*/
  
const resultss = await instagramGetUrl(args[0]).url_list[0]    
let shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt2 = `🔗 *Url:* ${shortUrl2}`.trim()
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m)
  
}
handler.command = /^(igdl)$/i
export default handler
