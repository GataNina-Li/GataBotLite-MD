import fetch from 'node-fetch'

let handler = async (m, { conn, args, command, usedPrefix }) => {
let loll = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await loll.json()
let imgig = json.result
await conn.sendMessage(m.chat, { image: { url: imgig }, caption: 'Hecho.' }, { quoted: m })
//await conn.sendFile(m.chat, imgig, 'error.jpg', wm, m)
  
}
handler.command = /^(igimg)$/i
export default handler
	
