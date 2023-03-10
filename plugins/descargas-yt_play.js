import fetch from "node-fetch";
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙏𝙄𝙏𝙇𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await yts(text)).all[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()}𝙉𝙊 𝙎𝙀 𝙋𝙐𝘿𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝙍 𝙀𝙇 𝘼𝙐𝘿𝙄𝙊/𝙑𝙄𝘿𝙀𝙊. 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘾𝙊𝙉 𝙊𝙏𝙍𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n\n𝙏𝙃𝙀 𝘼𝙐𝘿𝙄𝙊/𝙑𝙄𝘿𝙀𝙊 𝘾𝙊𝙐𝙇𝘿 𝙉𝙊𝙏 𝘽𝙀 𝙁𝙊𝙐𝙉𝘿. 𝙏𝙍𝙔 𝘼𝙉𝙊𝙏𝙃𝙀𝙍 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙏𝙄𝙏𝙇𝙀`
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid

let video = `*◜Y O U T U B E◞*

*◎ TÍTULO*
${title}

*◎ DESCRIPCIÓN*
${description}

*◎ PUBLICADO*
${published}

*◎ DURACION*
${timestamp}

*◎ VISTAS*
${views}

*◎ URL*
${url}

${wm}`, thumbnail, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom())
	
	
let templateButtons = [ 
{index: 1, urlButton: {displayText: 'VER EN YOUTUBE', url: url}},
{index: 3, quickReplyButton: {displayText: 'AUDIO', id: `${usedPrefix}yta ${url}`}},
{index: 3, quickReplyButton: {displayText: 'VIDEO', id: `${usedPrefix}ytv ${url}`}},
{index: 3, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}},
]
await conn.sendMessage(m.chat, { image: { url: thumbnail }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: video, footer: wm, templateButtons }, { quoted: m})
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
//handler.register = true

export default handler
