import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
  
user 
}  
if (command == 'idiomagb') {
if (!user.name || !user.age) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoFG']()}*REGISTRE SU NOMBRE Y EDAD PARA PODER USAR ESTE COMANDO*` }, { quoted: m })   
var emojiANumero = { "0️⃣": "0", "1️⃣": "1", "2️⃣": "2", "3️⃣": "3", "4️⃣": "4", "5️⃣": "5", "6️⃣": "6", "7️⃣": "7", "8️⃣": "8", "9️⃣": "9" }
text = text.replace(/[\u{0030}-\u{0039}]\u{FE0F}\u{20E3}/gu, function(match) {
return emojiANumero[match] || match
})
let idioma = ''
function asignarIdioma(text) { 
if (!text) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoAG']()}*ESCRIBA UN NÚMERO PARA ELEGIR EL IDIOMA, EJEMPLO:*\n\n✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\`` }, { quoted: m })	 
if (text == 0 || (text > 5 && text)) {
conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*"${text}" NO ES VÁLIDO PARA ELEGIR, RECUERDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA SELECCIONAR EL IDIOMA, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\``, m) 
}
switch (text) {
case "1️⃣":
case "1":
idioma = 'es'
break
case "2️⃣":
case "2":
idioma = 'en'
break
case "3️⃣":
case "3":
idioma = 'pt'
break
case "4️⃣":
case "4":
idioma = 'id'
break   
case "5️⃣":
case "5":
idioma = 'ar'
break
default:
if (text == 0 || text > 5) return
return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*RECUERDE USAR EL EMOJI NUMÉRICO, EMOJI DE GÉNERO O TEXTO NUMÉRICO PARA SELECCIONAR EL IDIOMA, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\``, m)
}}
asignarIdioma(text)
user.GBLanguage = idioma
if (text == 0 || text > 5) return
m.reply(`Idioma configurado como: ${user.GBLanguage}`)
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataMenu.getRandom())
let caption = `${lenguajeGB.smsVerify7()}

*⎔ ${lenguajeGB.smsPerfil1()}* 
• @${tag}

*⎔ ${lenguajeGB.smsPerfil2()}* 
• ${user.name}

*⎔ ${lenguajeGB.smsPerfil3()}*
• ${user.age}

*⎔ ${lenguajeGB.smsVerify9()}*
• 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'

*⎔ ${lenguajeGB.smsPerfil5()}*
• \`\`\`${sn}\`\`\``.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply(lenguajeGB.smsVerify8(usedPrefix)) 
await m.reply(`${sn}`) 
}
}
handler.command = ['verify', 'verificar', 'reg', 'register', 'idiomagb'] ///^(verify|verificar|reg(ister)?|idiomagb)$/i
export default handler
