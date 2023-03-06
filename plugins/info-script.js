import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname, usedPrefix, command }) {
try{
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
//await conn.reply(m.chat, `*_${_package.homepage}_*`, m, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: lenguajeGB.smsCreApoyo(), previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"), sourceUrl: md}}})
let tg = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `*_${_package.homepage}_*`, contextInfo: { externalAdReply: { title: wm, body: lenguajeGB.smsCreApoyo(), thumbnail: gataMenu.getRandom(), sourceUrl: md }}}}, tg)
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = ['codigo', 'código', 'sc', 'git', 'script'] 
export default handler
