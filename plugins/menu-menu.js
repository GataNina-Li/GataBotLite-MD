import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
˚₊·˚₊· ͟͟͞͞➳❥ ${packname}
*☆═━┈◈ ╰ ${vs} ㎇ ╯ ◈┈━═☆*
*│*    
*╰ ㊂ ▸▸ _INFORMACIÓN DEL MENÚ_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'creadora' : 'owner'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'contacto' : 'contact'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cuentasgb' : 'account'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'donar' : 'donate'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'codigo' : 'sc'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gruposgb' : 'groupsgb'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instalarbot' : 'installbot'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'estado' : 'status'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'velocidad' : 'ping'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'infogata' : 'infobot'}_ 
*│* ┊▸ ✦ _${lenguajeGB.lenguaje() == 'es' ? 'términos y condiciones' : 'terms'}_ 
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _BUSCADOR / IA_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'google *(texto)*' : 'googlef *(text)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bot *(texto)*' : 'simsimi *(text)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ia *(texto)*' : 'chatgpt *(text)*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _DESCARGAS_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'imagen *(texto)*' : 'gimage *(text)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'facebook *(enlace)*' : 'facebookdl *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mediafire *(enlace)*' : 'mediafiredl *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'play *(nombre o enlace)*' : 'play *(name)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yta *(enlace)*' : 'yta *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytv *(enlace)*' : 'ytv *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytadoc *(enlace)*' : 'ytadoc *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytvdoc *(enlace)*' : 'ytvdoc *(link)*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _CONVERTIDOR_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *(sticker)*' : 'toimg *(sticker)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'url *(imagen)*' : 'tourl *(image)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp4 *(sticker)*' : 'tovideo *(sticker)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gif *(video)*' : 'togif *(video)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp3 *(video o audio)*' : 'tovn *(video or audio)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tts *(texto)*' : 'totts *(text)*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _GRUPO ~ TODOS_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'infogrupo' : 'groupinfo'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'admins' : 'dmins'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'enlace' : 'linkgroup'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _GRUPO ~ ADMINS_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'notificar' : 'hidetag'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'sacar' : 'kick'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'daradmin' : 'promote'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'quitaradmin' : 'demote'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarwelcome' : 'setwelcome'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarbye' : 'setbye'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiardesc' : 'setdesc'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarnombre' : 'setname'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarpp' : 'setppgc'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevoenlace' : 'resetlink'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo abrir' : 'group open'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo cerrar' : 'group close'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'invocar' : 'tagall'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
 `.trim()
    
const vi = ['https://telegra.ph/file/405daebd4bc0d69e5d165.mp4',
'https://telegra.ph/file/1d0ad9f79f65f39895b08.mp4',
'https://telegra.ph/file/c25afc1685b13210ce602.mp4']
await conn.sendFile(m.chat, vi.getRandom(), 'error.mp4', menu, fkontak)
 
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
