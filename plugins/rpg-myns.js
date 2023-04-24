import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
await m.reply(lenguajeGB.smsIDserie())
await m.reply(`${sn}`.trim())
}
handler.command = /^(myns|ceksn|numid|idregistro|idregister)$/i
handler.register = true
export default handler
