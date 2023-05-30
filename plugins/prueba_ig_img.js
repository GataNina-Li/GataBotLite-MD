import fetch from 'node-fetch'

let handler = async (m, { conn, args, command, usedPrefix }) => {
let loll = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${args[0]}`)
conn.sendMessage(m.chat, { image: { url: loll.result }, caption: 'Hecho.' }, { quoted: m })
  
}
handler.command = /^(igimg)$/i
export default handler
	
