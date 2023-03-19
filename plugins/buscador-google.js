import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, lenguajeGB.smsAvisoMG + '*ESCRIBA LO QUE QUIERE BUSCAR, EJEMPLO:*' + `\n*${usedPrefix + command} Qué es Matemáticas?*` , m)
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text, { limit: 30 });
let msg = search.articles.map(({ title, url, description }) => { return `*${title}*\n_${url}_\n_${description}_` }).join('\n\n')
m.reply(msg)
}
handler.command = /^googlef?$/i
export default handler
