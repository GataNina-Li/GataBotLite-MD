import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
if (!text) throw '*_Que quieres que busque en YouTube?_*'
await conn.reply(m.chat, global.wait, m)
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
⁖❤️꙰༻ *TÍTULO*
${v.title}

⁖🩵꙰༻ *ENLACE*
${v.url}

⁖💜꙰༻ *DURACIÓN*
${v.timestamp}

⁖💚꙰༻ *SUBIDO*
${v.ago}

⁖🧡꙰༻ *VISTAS*
${v.views}`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
await conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.command = ['ytsearch', 'yts'] 
export default handler
