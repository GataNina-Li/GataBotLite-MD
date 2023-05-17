import axios from 'axios'
import fetch from 'node-fetch'
var handler = async (m, { conn, command, text, args, usedPrefix }) => {
    if (!text) throw `${usedPrefix}${command} https://www.facebook.com/100010929794713/posts/1885825845125057/`
    let Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
let Jjson = await Rres.json()
let VIDEO = Jjson.result[0]
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1]
conn.sendFile(m.chat, VIDEO, 'error.mp4', wm, m)    
}

handler.command = /^(facebook5)$/i
export default handler
