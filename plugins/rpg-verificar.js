/*import { createHash } from 'crypto'  
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i 
let handler = async function (m, { conn, text, usedPrefix, command }) {
let codigosIdiomas = ['es', 'en', 'pt', 'id', 'ar', 'de', 'it']
let nombresIdiomas = {
'es': 'Español',
'en': 'English',
'pt': 'Português',
'id': 'Bahasa Indonesia',
'ar': 'Arab (عرب)',
'de': 'Deutsch',
'it': 'Italiano'
}
 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let api = await axios.get(`${apis}/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let userNationalityData = api.data.result
let userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido' 

let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataImg.getRandom())
let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => gataMenu.getRandom())

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
let listaIdiomasTexto = ''
listaIdiomasTexto += '*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
listaIdiomasTexto += '*┆ 🌐 IDIOMA DINÁMICO 🌐*\n' 
listaIdiomasTexto += '*┆┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
codigosIdiomas.forEach((codigo, index) => {
listaIdiomasTexto += `*┆* \`\`\`[ ${index + 1} ] » ${nombresIdiomas[codigo]}\`\`\`\n`
})
listaIdiomasTexto += '*╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n'    
let genText = `🌟 *NUEVA FUNCIÓN - MULTI LENGUAJE DINÁMICO (BETA)*\n
👉 *ESCRIBA EL NÚMERO PARA ELEGIR EL IDIOMA, EJEMPLO:*
✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\`\n
${listaIdiomasTexto}
⚠️ *TENGA EN CONSIDERACIÓN QUE EL IDIOMA QUE SELECCIONE ${packname} SE ENCARGARÁ DE INTERACTUAR EN DICHO IDIOMA, SI SU IDIOMA NO APARECE SOLICITE QUE SE AGREGUE*\n${ig}\n
❇️ *SU REGISTRO ESTÁ EN PAUSA, COMPLETE EL IDIOMA PARA CONTINUAR*`
await conn.sendMessage(m.chat, { text: genText }, { quoted: m })	
} 
  
if (command == 'idiomagb') {	
if (!user.name || !user.age) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoFG']()}*REGISTRE SU NOMBRE Y EDAD PARA PODER USAR ESTE COMANDO*` }, { quoted: m })   
var emojiANumero = { "0️⃣": "0", "1️⃣": "1", "2️⃣": "2", "3️⃣": "3", "4️⃣": "4", "5️⃣": "5", "6️⃣": "6", "7️⃣": "7", "8️⃣": "8", "9️⃣": "9" }
text = text.replace(/[\u{0030}-\u{0039}]\u{FE0F}\u{20E3}/gu, function(match) {
return emojiANumero[match] || match
})
let idioma = ''
async function asignarIdioma(text) { 
if (!text) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoAG']()}*ESCRIBA UN NÚMERO PARA ELEGIR EL IDIOMA, EJEMPLO:*\n\n✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\`` }, { quoted: m })	  
if (text < 1 || (text > codigosIdiomas.length && text)) {
conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*"${text}" NO ES VÁLIDO PARA ELEGIR, RECUERDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA SELECCIONAR EL IDIOMA, EJEMPLO:*\n\n✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\``, m) 
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
case "6️⃣":
case "6":
idioma = 'de'
break
case "7️⃣":
case "7":
idioma = 'it'
break
default:
if (text == 0 || text > codigosIdiomas.length) return
return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*RECUERDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA SELECCIONAR EL IDIOMA, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}idiomagb 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomagb 2\`\`\``, m)
}}
await asignarIdioma(text)
user.GBLanguage = idioma
if (!user.GBLanguage) return m.reply(`${lenguajeGB['smsAvisoFG']()}*NO SE LOGRÓ CONFIGURAR EL IDIOMA, INTENTE DE NUEVO POR FAVOR*`)
if (codigosIdiomas.includes(user.GBLanguage)) {
nombresIdiomas = nombresIdiomas[user.GBLanguage]
} else {
nombresIdiomas = `IDIOMA NO DETECTADO`
}  
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
*⎔ PAÍS:*
• ${userNationality}
*⎔ ${lenguajeGB.smsVerify9()}*
• 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
*⎔ ${lenguajeGB.smsPerfil5()}*
• \`\`\`${sn}\`\`\`
> *Mira tú registro en este canal*
${canal5}`.trim()
await conn.sendFile(m.chat, pp, 'gata.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply(lenguajeGB.smsVerify8(usedPrefix)) 
await m.reply(`${sn}`) 
let chtxt = `🌐 *Idioma:* ${nombresIdiomas}\n🌎 *País:* ${userNationality}\n👤 *Usuario:* ${m.pushName || 'Anónimo'}\n✅ *Verificación:* ${user.name}\n🔢 *Edad:* ${user.age} años\n🐈 *Bot:* ${packname}`.trim()
await conn.sendMessage(global.ch.ch1, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '🥳 ¡Nuevo usuario registrado!',
thumbnailUrl: ppch,
sourceUrl: accountsgb,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}}
handler.command = /^(verify|verificar|reg(ister)?|idiomagb)$/i
export default handler*/

import { createHash } from 'crypto'  
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
import axios from 'axios'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i 
let codigosIdiomas = ['es', 'en', 'pt', 'id', 'ar', 'de', 'it']
let nombresIdiomas = {
'es': 'Español',
'en': 'English',
'pt': 'Português',
'id': 'Bahasa Indonesia',
'ar': 'Arab (عرب)',
'de': 'Deutsch',
'it': 'Italiano'
}

let msg, user, userNationality, tag, aa, pp, ppch, codigo, nombre, edad, finalizar
let handler = async function (m, { conn, text, usedPrefix, command }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let api = await axios.get(`${apis}/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let userNationalityData = api.data.result
userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido' 

pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataImg.getRandom())
ppch = await conn.profilePictureUrl(who, 'image').catch(_ => gataMenu.getRandom())
  
tag = `${m.sender.split("@")[0]}`
aa = tag + '@s.whatsapp.net'
user = global.db.data.users[m.sender]

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
edad = age
nombre = name
  
let listaIdiomasTexto = ''
listaIdiomasTexto += '*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
listaIdiomasTexto += '*┆ 🌐 IDIOMA DINÁMICO 🌐*\n' 
listaIdiomasTexto += '*┆ 🌐 DYNAMIC LANGUAGE 🌐*\n' 
listaIdiomasTexto += '*┆┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
codigosIdiomas.forEach((codigo, index) => {
listaIdiomasTexto += `*┆* \`\`\`[ ${index + 1} ] » ${nombresIdiomas[codigo]}\`\`\`\n`
})
listaIdiomasTexto += '*╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n'    
let genText = `
${listaIdiomasTexto}
🌟 *MULTI LENGUAJE DINÁMICO* 🌟\n
👉 *Verificación pausada. Responda a este mensaje con el número del idioma.*\n
> _El idioma elegido será el que_ ${packname} _usará. Si no está disponible, selecciona otro o solicita agregarlo en:_ ${ig}
\n⋯⋯⋯⋯⋯⋯⋯⋯⋯\n
🌟 *DYNAMIC MULTI LANGUAGE* 🌟\n
👉 *Verification paused. Reply to this message with the language number.*\n
> _The chosen language will be the one that_ ${packname} _will use. If it is not available, select another one or request to add it at:_ ${ig}`
msg = await conn.sendMessage(m.chat, { text: genText.trim() }, { quoted: m })	
finalizar = true
}
 
handler.before = async function (m, { conn }) {
if (user.registered === true) return
if (!finalizar) return
if (m.quoted && m.quoted.id == msg.key.id) {
if (!/^\d+$/.test(m.text)) return conn.reply(m.chat, `*Solo se permiten números del \`1\` al \`${codigosIdiomas.length}\` de acuerdo con el orden de idiomas disponibles*`, m)
}
const numero = parseInt(m.text, 10)
let isVerified = m.quoted ? (m.quoted.id == msg.key.id && !isNaN(numero) && numero >= 1 && numero <= codigosIdiomas.length) : false
if (isVerified) {
user.GBLanguage = codigosIdiomas[numero - 1]
nombresIdiomas = nombresIdiomas[user.GBLanguage]
user.name = nombre + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'.trim()
user.age = edad
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
*⎔ PAÍS:*
• ${userNationality}
*⎔ ${lenguajeGB.smsVerify9()}*
• 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
*⎔ ${lenguajeGB.smsPerfil5()}*
• \`\`\`${sn}\`\`\`

> *Mira tú registro en este canal*
${canal5}`.trim()
await m.reply(`${lenguajeGB['smsAvisoIIG']()}*EN CASO QUE QUIERA CAMBIAR O ELIMINAR EL IDIOMA DEBE DE ELIMINAR SU REGISTRO PRIMERO*`)
await conn.sendFile(m.chat, pp, 'gata.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply(lenguajeGB.smsVerify8(usedPrefix)) 
await conn.sendMessage(m.chat, {text: sn }, { quoted: null })
let chtxt = `🌐 *Idioma:* ${nombresIdiomas}\n🌎 *País:* ${userNationality}\n👤 *Usuario:* ${m.pushName || 'Anónimo'}\n✅ *Verificación:* ${user.name}\n🔢 *Edad:* ${user.age} años\n🐈 *Bot:* ${packname}`.trim()
await conn.sendMessage('', { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '🥳 ¡Nuevo usuario registrado!',
thumbnailUrl: ppch,
sourceUrl: accountsgb,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
finalizar = '' 
return
}  }
handler.command = /^(verify|verificar|reg(ister)?)$/i
export default handler

/*import { createHash } from 'crypto'  
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

handler.before = async (m) => {
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

if (/(^1|es)$/i.test(m.text) && m.quoted) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
userData.confirmacion = true
user.GBLanguage = languageCodes[1]
clearTimeout(timeout)
}

if (/(^2|en)$/i.test(m.text) && m.quoted) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
userData.confirmacion = true
user.GBLanguage = languageCodes[2]
clearTimeout(timeout)
}

if (/(^3|pt)$/i.test(m.text) && m.quoted) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
user.GBLanguage = languageCodes[3]
clearTimeout(timeout)
}

if (/(^4|id)$/i.test(m.text) && m.quoted) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
userData.confirmacion = true
user.GBLanguage = languageCodes[4]
clearTimeout(timeout)
}

if (/(^5|ar)$/i.test(m.text) && m.quoted) { //&& m.quoted && m.quoted.text.includes(userData.codeMessage)) {
userData.confirmacion = true
user.GBLanguage = languageCodes[5]
clearTimeout(timeout)
}

if (userData.confirmacion === true) {
}
if (codigosIdiomas.includes(user.GBLanguage)) {
nombresIdiomas = nombresIdiomas[user.GBLanguage]
} else {
nombresIdiomas = `IDIOMA NO DETECTADO`
}
  
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
}}
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
*/
