import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataImg.getRandom())
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let user = global.db.data.users[m.sender]
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let str = `${lenguajeGB.smsPerfil0()}

*⎔ ${lenguajeGB.smsPerfil1()}* 
• @${tag}

*⎔ ${lenguajeGB.smsPerfil2()}* 
• ${name}

*⎔ ${lenguajeGB.smsPerfil3()}*
• ${age}

*⎔ ${lenguajeGB.smsPerfil4()}*
• ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

*⎔ ${lenguajeGB.smsPerfil5()}*
• \`\`\`${sn}\`\`\``.trim()
await conn.sendFile(m.chat, pp, 'gata.jpg', str, m, false, { mentions: [aa] }) 
}
handler.command = /^perfil|profile?$/i
handler.register = true
export default handler