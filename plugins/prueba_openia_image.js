import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Ejemplo: ${command} Gata`
await m.reply('Searching...')
let res = `https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${text}`
await conn.sendFile(m.chat, res, 'image.jpg', 'Aquí está la imagen generada:', m)
  
}
handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image|img|gambar)$/i

export default handler
       
