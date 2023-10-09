//import { en, es, id, ar, pt } from '../lib/idiomas/total-idiomas.js'
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
let [_, name, splitter, age] = text.match(Reg)
  
if (command == 'verificar') {  
if (user.registered === true) return m.reply(lenguajeGB.smsVerify0(usedPrefix) + '*')
if (!Reg.test(text)) return m.reply(lenguajeGB.smsVerify1(usedPrefix, command))
if (!name) return m.reply(lenguajeGB.smsVerify2())
if (!age) return m.reply(lenguajeGB.smsVerify3())
age = parseInt(age)
if (age > 50) return m.reply(lenguajeGB.smsVerify4())
if (age < 10) return m.reply(lenguajeGB.smsVerify5())
if (name.length >= 30) return m.reply(lenguajeGB.smsVerify6())
user.name = name + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'.trim()
user.age = age
} 

if (command == 'idiomagb') { 
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
listaIdiomasTexto += `[ ${index + 1} ] » ${nombresIdiomas[codigo]}\n`
})
let genText = `🌟 *SELECCIONA EL IDIOMA EL CUAL VA INTERACTUAR GATABOT CONTIGO*
${listaIdiomasTexto}`
await conn.sendMessage(m.chat, { text: genText }, { quoted: m })	
  
function asignarIdioma(text) {
if (text == 0 && text > 5) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*"${text}" NO ES VÁLIDO PARA ELEGIR, RECUERDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA SELECCIONAR EL IDIOMA, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\``, m) 
switch (text) {
case "1️⃣":
case "1":
user.userLanguage = 'es'
break
case "2️⃣":
case "2":
user.userLanguage = 'en'
break
case "3️⃣":
case "3":
user.userLanguage = 'pt'
break
case "4️⃣":
case "4":
user.userLanguage = 'id'
break   
case "5️⃣":
case "5":
user.userLanguage = 'ar'
break
default:
return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*RECUERDE USAR EL EMOJI NUMÉRICO, EMOJI DE GÉNERO O TEXTO NUMÉRICO PARA SELECCIONAR EL IDIOMA, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\``, m)
}}
asignarIdioma(text)

  
if (!user.userLanguage) return
m.reply(`Idioma configurado como: ${user.userLanguage}`)
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataMenu.getRandom())
let caption = `${lenguajeGB.smsVerify7()}

*⎔ ${lenguajeGB.smsPerfil1()}* 
• @${tag}

*⎔ ${lenguajeGB.smsPerfil2()}* 
• ${name}

*⎔ ${lenguajeGB.smsPerfil3()}*
• ${age}

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
