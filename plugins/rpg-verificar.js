import { createHash } from 'crypto'  
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i 
const registro = {}
const randomCode = generateRandomCode(5)

let handler = async function (m, { conn, text, usedPrefix, command }) {
let codigosIdiomas = ['es', 'en', 'pt', 'id', 'ar']
let nombresIdiomas = {
'es': 'Español',
'en': 'English',
'pt': 'Português',
'id': 'Bahasa Indonesia',
'ar': 'Arab (عرب)'
}
  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataImg.getRandom())
  
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
} 
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
  
//if (/^(verify|verificar|reg(ister)?)$/i.test(command)) {
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

let listaIdiomasTexto = ''
listaIdiomasTexto += '*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
listaIdiomasTexto += '*┆ 🌐 IDIOMA DINÁMICO 🌐*\n' 
listaIdiomasTexto += '*┆┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
codigosIdiomas.forEach((codigo, index) => {
listaIdiomasTexto += `*┆* \`\`\`[ ${index + 1} ] » ${nombresIdiomas[codigo]}\`\`\`\n`
})
listaIdiomasTexto += '*╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n'    
let genText = `🌟 *MULTI LENGUAJE DINÁMICO*\n
👉 *ELEGIR EL IDIOMA, EJEMPLO:*
✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\`\n
${listaIdiomasTexto}

🍄 *AL SELECCIONAR SU IDIOMA, NO IMPORTA DONDE ${packname} ESTÉ, LE RESPONDERÁ EN SU IDIOMA.*
❇️ *SU REGISTRO ESTÁ EN PAUSA, COMPLETE EL IDIOMA PARA CONTINUAR*

\`\`\`Id: ${randomCode}\`\`\``
await conn.sendMessage(m.chat, { text: genText }, { quoted: m })
}

//handler.before = async (m) => {
handler.before = async function(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
const sender = m.sender
registro[sender] = registro[sender] ?? {
confirmacion: false,
codeMessage: 0,
}
const userData = registro[sender]
const languageCodes = {
1: 'es',
2: 'en',
3: 'pt',
4: 'id',
5: 'ar',
}
let timeout 
userData.codeMessage = randomCode

timeout = setTimeout(() => {
userData.confirmacion = true
conn.sendMessage(m.chat, { text: `*TIEMPO AGOTADO: SE UTILIZARÁ EL IDIOMA PREDETERMINADO.*`, mentions: [m.sender]}, {quoted: m})
registro.confirmacion = true
}, 60 * 1000)

if (/(^1|es)$/i.test(m.text)) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
userData.confirmacion = true
user.GBLanguage = languageCodes[1]
clearTimeout(timeout)
}

if (/(^2|en)$/i.test(m.text)) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
userData.confirmacion = true
user.GBLanguage = languageCodes[2]
clearTimeout(timeout)
}

if (/(^3|pt)$/i.test(m.text)) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
user.GBLanguage = languageCodes[3]
clearTimeout(timeout)
}

if (/(^4|id)$/i.test(m.text)) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
userData.confirmacion = true
user.GBLanguage = languageCodes[4]
clearTimeout(timeout)
}

if (/(^5|ar)$/i.test(m.text)) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
userData.confirmacion = true
user.GBLanguage = languageCodes[5]
clearTimeout(timeout)
}

if (userData.confirmacion === true) {
await m.reply(`${lenguajeGB['smsAvisoIIG']()}*EN CASO QUE QUIERA CAMBIAR O ELIMINAR EL IDIOMA DEBE DE ELIMINAR SU REGISTRO PRIMERO*`)
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let caption = `${lenguajeGB.smsVerify7()}

*⎔ IDIOMA* 
• ${nombresIdiomas}

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
await conn.sendFile(m.chat, pp, 'gata.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply(lenguajeGB.smsVerify8(usedPrefix)) 
await m.reply(`${sn}`)
userData.confirmacion = false
userData.codeMessage = 0
}}//}
handler.command = /^(verify|verificar|reg(ister)?|idiomagb)$/i
export default handler

function generateRandomCode(length) {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let code = ''
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length)
code += characters.charAt(randomIndex)
}
return code
}

