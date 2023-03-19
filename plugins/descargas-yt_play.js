import fetch from "node-fetch"
import yts from 'yt-search'

let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw lenguajeGB.smsMalused2() + `*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await yts(text)).all[0]
if (!vid) throw lenguajeGB.smsMalError2() + `_${lenguajeGB.smsYT6()}_`

try{
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let video = `*◜⋯ ⋯ ⋯ Y O U T U B E ⋯ ⋯ ⋯◞*

*◎ ${lenguajeGB.smsYT1()}*
${title}

*◎ ${lenguajeGB.smsYT2()}*
${description}

*◎ ${lenguajeGB.smsYT3()}*
${timestamp}

*◎ ${lenguajeGB.smsYT4()}*
${views}

*◎ URL*
${url}`.trim()
		
let templateButtons = [ 
{index: 1, urlButton: {displayText: lenguajeGB.smsYT5(), url: url}},
{index: 2, quickReplyButton: {displayText: '㊁ AUDIO', id: `${usedPrefix}yta ${url}`}},
{index: 3, quickReplyButton: {displayText: '㊁ VIDEO', id: `${usedPrefix}ytv ${url}`}},
{index: 4, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}},
]
await conn.sendMessage(m.chat, { image: { url: thumbnail }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: video, footer: wm, templateButtons }, { quoted: m})
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.register = true

export default handler
