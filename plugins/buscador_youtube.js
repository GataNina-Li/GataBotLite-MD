import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text, usedPrefix, command }) => {
if (!text) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command}* GataBot`
await conn.reply(m.chat, global.wait, m)
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
⁖❤️꙰༻ *TÍTULO*
» ${v.title || lenguajeGB.smsGit14()}

⁖🩵꙰༻ *ENLACE*
» ${v.url || lenguajeGB.smsGit14()}

⁖💜꙰༻ *DURACIÓN*
» ${v.timestamp || lenguajeGB.smsGit14()}

⁖💚꙰༻ *SUBIDO*
» ${v.ago || lenguajeGB.smsGit14()}

⁖🧡꙰༻ *VISTAS*
» ${v.views || lenguajeGB.smsGit14()}`.trim()
}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')
await conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.command = /^(yt(s|search))$/i
export default handler
