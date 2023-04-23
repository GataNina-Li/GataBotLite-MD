import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
//if (!text) throw `*INGRESE SU NOMBRE Y EDAD PARA ESTAR REGISTRADO*\n*EJEMPLO*\n\n${usedPrefix + command} GataBot.18`  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(m.sender).catch(_ => img2) 
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let user = global.db.data.users[m.sender]
let tag = `${m.sender.split("@")[0]}`
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let str =
`*⎔ NOMBRE* 
• ${name} || @${tag}

*⎔ EDAD*
• ${age}

*⎔ NÚMERO*
• ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

*⎔ ID DE REGISTRO*
• \`\`\`${sn}\`\`\``.trim()
await conn.sendFile(m.chat, pp, 'gata.jpg', str, m, { mentions: [m.sender] }) 
}
handler.command = /^perfil|profile?$/i
handler.register = true
export default handler
