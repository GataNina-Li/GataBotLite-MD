import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `${iig}YA ESTAS REGISTRADO(A)!!\nSI QUIERE ANULAR SU REGISTRO USE ESTE COMANDO\n*${usedPrefix}unreg numero de serie*\n\nSI NI RECUEDAD SU NUMERO DE SERIE USE ESTE COMANDO\n*${usedPrefix}myns`
if (!Reg.test(text)) throw `*INGRESE SU NOMBRE Y EDAD PARA ESTAR REGISTRADO*\n*EJEMPLO*\n\n${usedPrefix + command} GataBot.18`  
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '*INGRESE SU NOMBRE*'
if (!age) throw '*INGRESE SU EDAD*'
age = parseInt(age)
if (age > 50) throw '*USTED ES MUY MAYOR*'
if (age < 10) throw '*USTED ES MUY MENOR*'
if (name.length >= 30) throw '*ESCRIBA UN NOMBRE MÁS CORTO*' 
user.name = name.trim() + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataMenu.getRandom())
let caption = `✅ *V E R I F I C A D O* ✅

*⎔ ${lenguajeGB.smsPerfil1()}* 
• @${tag}

*⎔ ${lenguajeGB.smsPerfil2()}* 
• ${name}

*⎔ ${lenguajeGB.smsPerfil3()}*
• ${age}

*⎔ INSIGNIA DE VERIFICACIÓN*
• 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'

*⎔ ${lenguajeGB.smsPerfil5()}*
• \`\`\`${sn}\`\`\``.trim()
await conn.sendFile(m.chat, pp, 'gata.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply(`*SU ID DE REGISTRO SERVIRÁ EN CASO QUE DESE MODIFICAR O ELIMINAR SU REGISTRO USANDO ${usedPrefix}unreg*`) 
await m.reply(`${sn}`) 
}
handler.command = /^(verify|verificar|reg(ister)?)$/i
export default handler
