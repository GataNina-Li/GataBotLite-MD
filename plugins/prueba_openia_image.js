import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsMalused2']()}\n*${usedPrefix + command} Un gato morado con celeste en Júpiter, iluminando el cosmos con su encanto de efecto de anime.*`, m)
//let res = `https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`
await m.reply(wait)
//await conn.sendFile(m.chat, res, 'image.jpg', '💻 *IMAGEN CREADA CON AI!!* ✨', m)
let response = await fetch(`https://botcahx.cyclic.app/dalle?text=${encodeURIComponent(text)}`)
let image = await response.buffer()
await conn.sendFile(m.chat, image, 'aneh.jpg',  wm, m)
  
}
handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image|img|gambar)$/i

export default handler
       
