import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
  
if (/^(verify|verificar|reg(ister)?)$/i.test(command)) {
if (user.registered === true) return m.reply(lenguajeGB.smsVerify0(usedPrefix) + '*')
if (!Reg.test(text)) return m.reply(lenguajeGB.smsVerify1(usedPrefix, command))
let [_, name, splitter, age] = text.match(Reg)  
if (!name) return m.reply(lenguajeGB.smsVerify2())
if (!age) return m.reply(lenguajeGB.smsVerify3())
age = parseInt(age)
if (age > 50) return m.reply(lenguajeGB.smsVerify4())
if (age < 10) return m.reply(lenguajeGB.smsVerify5())
if (name.length >= 30) return m.reply(lenguajeGB.smsVerify6())
user.name = name + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'.trim()
user.age = age

const codigosIdiomas = ['es', 'en', 'pt', 'id', 'ar']
const nombresIdiomas = {
'es': 'Español',
'en': 'Inglés',
'pt': 'Portugués',
'id': 'Indonesio',
'ar': 'Árabe'
}
let listaIdiomasTexto = ''
codigosIdiomas.forEach((codigo, index) => {
listaIdiomasTexto += `\`\`\`[ ${index + 1} ] » ${nombresIdiomas[codigo]}\`\`\`\n`
})
let genText = `🌟 *NUEVA FUNCIÓN - MULTI LENGUAJE DINÁMICO (BETA)*\n
🫶 *SELECCIONA EL IDIOMA EL CUAL VA INTERACTUAR GATABOT CONTIGO*
👉 *ESCRIBA EL NÚMERO PARA ELEGIR EL IDIOMA, EJEMPLO:*
✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\`\n
${listaIdiomasTexto}
❇️ *SU REGISTRO ESTÁ EN PAUSA, COMPLETE EL IDIOMA PARA CONTINUAR*`
await conn.sendMessage(m.chat, { text: genText }, { quoted: m })	
} 
  
if (command == 'idiomagb') {
var regex = /^[\d\u{0030}-\u{0039}\u{FE0F}\u{20E3}]+$/u
if (!user.name || !user.age) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoFG']()}*REGISTRE SU NOMBRE Y EDAD PARA PODER USAR ESTE COMANDO*` }, { quoted: m })   
var emojiANumero = { "0️⃣": "0", "1️⃣": "1", "2️⃣": "2", "3️⃣": "3", "4️⃣": "4", "5️⃣": "5", "6️⃣": "6", "7️⃣": "7", "8️⃣": "8", "9️⃣": "9" }
text = text.replace(/[\u{0030}-\u{0039}]\u{FE0F}\u{20E3}/gu, function(match) {
return emojiANumero[match] || match
})
let idioma = ''
function asignarIdioma(text) { 
if (!text) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoAG']()}*ESCRIBA UN NÚMERO PARA ELEGIR EL IDIOMA, EJEMPLO:*\n\n✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\`` }, { quoted: m })	 
if (regex.test(text) || text == 0 || (text > 5 && text)) {
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
handler.command = /^(verify|verificar|reg(ister)?|idiomagb)$/i
export default handler
