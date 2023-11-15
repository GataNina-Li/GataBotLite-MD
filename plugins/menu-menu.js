// VERSIÓN POR NAVIDAD MES DE NOVIEMBRE - DICIEMBRE

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
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `*〲🝯☃️⁘ ${user.registered === true ? user.name : `👉 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'verificar nombre.edad' : 'verify name.age'}`} ◈*
 *╰🜙🜙🜙🜙《 @${m.sender.split("@")[0]} 》*

*╭┈🎄┈🎄┈🎄┈🎄┈🎄┈🎄┈╮*
*┆⠸⋑* ${packname}
*┆❄️ 🝆 ${vs} ㎇ 🝆 ❄️*
*╰┈🎄┈🎄┈🎄┈🎄┈🎄┈🎄┈╯*${conn.user.jid == global.conn.user.jid ? '' : `🌨️🐈🌨️ *>>* 𝗚𝗕 - 𝗦𝗨𝗕 𝗕𝗢𝗧 ⇢ *@${global.conn.user.jid.split`@`[0]}*`}

*╭●⇢ 🌟 ${lenguajeGB.smsMenuTotal1()} 🌟*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'creadora' : 'owner'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'contacto' : 'contact'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cuentasgb' : 'account'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'donar' : 'donate'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'codigo' : 'sc'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gruposgb' : 'groupsgb'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instalarbot' : 'installbot'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'estado' : 'status'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'velocidad' : 'ping'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'infogata' : 'infobot'}\`\`\`
*┆* \`\`\`${lenguajeGB.lenguaje() == 'es' ? 'términos y condiciones' : 'terms'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ 🪅 ${lenguajeGB.smsMenuTotal2()} 🪅*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'serbot' : 'jadibot'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bots' : 'subsbots'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'pausarsb' : 'pausesb'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'eliminarsesion' : 'delsession'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ 🔎 ${lenguajeGB.smsMenuTotal3()} 🔍*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'google «texto»' : 'googlef «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bot «texto»' : 'simsimi «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ia «texto»' : 'chatgpt «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yts «texto»' : 'yts «text»'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ 🎁${lenguajeGB.smsMenuTotal4()} 🎁*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'imagen «texto»' : 'gimage «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'facebook «enlace»' : 'facebookdl «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mediafire «enlace»' : 'mediafiredl «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'play «nombre o enlace»' : 'play «name»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yta «enlace»' : 'yta «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytv «enlace»' : 'ytv «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmax «enlace»' : 'ytmax «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytadoc «enlace»' : 'ytadoc «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytvdoc «enlace»' : 'ytvdoc «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmaxdoc «enlace»' : 'ytmaxdoc «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tiktok «enlace»' : 'tkdl «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'openiamage «texto»' : 'dalle «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'midjourney «texto»' : 'openjourney «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotify «texto o enlace»' : 'spotify «text or link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotifysearch «texto»' : 'spotifysearch «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instagram «enlace»' : 'instagram «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'twitterx «enlace»' : 'twitterx «link»'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ ⚡ ${lenguajeGB.smsMenuTotal5()} ⚡*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img «sticker»' : 'toimg «sticker»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'url «imagen»' : 'tourl «image»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp4 «sticker»' : 'tovideo «sticker»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gif «video»' : 'togif «video»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp3 «video o audio»' : 'tovn «video or audio»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tts «texto»' : 'totts «text»'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ ⛱️ ${lenguajeGB.smsMenuTotal6()} ⛱️*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'infogrupo' : 'groupinfo'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'admins' : 'dmins'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'enlace' : 'linkgroup'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'inspeccionar «enlace»' : 'inspect «link»'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ 🌺 ${lenguajeGB.smsMenuTotal7()} 🌺*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'notificar «texto»' : 'hidetag'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'sacar «tag»' : 'kick «tag»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'invitar «número»' : 'invite «number»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'daradmin «tag»' : 'promote «tag»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'quitaradmin «tag»' : 'demote «tag»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'prohibir «tag»' : 'deprive «tag»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desprohibir «tag»' : 'undeprive «tag»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarwelcome «texto»' : 'setwelcome'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarbye «texto»' : 'setbye'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiardesc «texto»' : 'setdesc'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarnombre «texto»' : 'setname'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarpp «imagen»' : 'setppgc «image»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevoenlace' : 'resetlink'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo abrir' : 'group open'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo cerrar' : 'group close'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'invocar' : 'tagall'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ 🩵 ${lenguajeGB.smsMenuTotal8()} 🩵*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarbass' : 'editbass'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarvibra' : 'editvibra'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarblown' : 'editblown'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editardeep' : 'editdeep'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarearrape' : 'editearrape'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarfast' : 'editfast'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarfat' : 'editfat'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarnightcore' : 'editnightcore'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarrobot' : 'editrobot'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarslow' : 'editslow'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarsmooth' : 'editsmooth'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editartupai' : 'edittupai'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editaraudio8d' : 'editaudio8d'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ 🍄 ${lenguajeGB.smsMenuTotal9()} 🍄*
*┆*
*┆* \`\`\`${usedPrefix}bass\`\`\`
*┆* \`\`\`${usedPrefix}blown\`\`\`
*┆* \`\`\`${usedPrefix}deep\`\`\`
*┆* \`\`\`${usedPrefix}earrape\`\`\`
*┆* \`\`\`${usedPrefix}fast\`\`\`
*┆* \`\`\`${usedPrefix}fat\`\`\`
*┆* \`\`\`${usedPrefix}nightcore\`\`\`
*┆* \`\`\`${usedPrefix}reverse\`\`\`
*┆* \`\`\`${usedPrefix}robot\`\`\`
*┆* \`\`\`${usedPrefix}slow\`\`\`
*┆* \`\`\`${usedPrefix}smooth\`\`\`
*┆* \`\`\`${usedPrefix}tupai\`\`\`
*┆* \`\`\`${usedPrefix}audio8d\`\`\`
*┆* \`\`\`${usedPrefix}echo\`\`\`
*┆* \`\`\`${usedPrefix}distortion\`\`\`
*┆* \`\`\`${usedPrefix}pitch\`\`\`
*┆* \`\`\`${usedPrefix}reverb\`\`\`
*┆* \`\`\`${usedPrefix}flanger\`\`\`
*┆* \`\`\`${usedPrefix}apulsator\`\`\`
*┆* \`\`\`${usedPrefix}tremolo\`\`\`
*┆* \`\`\`${usedPrefix}chorus\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ ⚙️ ${lenguajeGB.smsMenuTotal10()} ⚙️*
*┆*
*┆* \`\`\`on\`\`\`
*┆* \`\`\`off\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ 💌 ${lenguajeGB.smsMenuTotal11()} 💌*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'verificar «nombre.edad»' : 'verify «name.age»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'anulareg «id de registro»' : 'unreg «id registration»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'idregistro' : 'idregister'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*

*╭●⇢ 👑 ${lenguajeGB.smsMenuTotal12()} 👑*
*┆*
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'respaldo' : 'backup'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'banusuario «@tag»' : 'banuser «@tag»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbanusuario «@tag»' : 'unbanuser «@tag»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tenerpoder' : 'autoadmin'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevabiobot «texto»' : 'setbiobot «texto»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevonombrebot «texto»' : 'setbiobot «texto»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevafotobot «imagen»' : 'setppbot «image»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'actualizar' : 'update'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'banearchat' : 'banchat'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbanearchat' : 'unbanchat'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'salir' : 'leave'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bloquear «@tag»' : 'block «@tag»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbloquear «@tag»' : 'unblock «@tag»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'obtenercodigo «nombre de archivo»' : 'getplugin «filename»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'borrardatos «número»' : 'deletedatauser «number»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'unete «enlace»' : 'join «link»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcsubbot «texto»' : 'bcsubbot «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcc «texto»' : 'bcchats «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcgc «texto»' : 'broadcastgc «text»'}\`\`\`
*┆* \`\`\`${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bc «texto»' : 'broadcastall «text»'}\`\`\`
*┆*
*╰:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*
 `.trim()
    
const vi = ['https://telegra.ph/file/405daebd4bc0d69e5d165.mp4',
'https://telegra.ph/file/1d0ad9f79f65f39895b08.mp4',
'https://telegra.ph/file/c25afc1685b13210ce602.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}



/*import fs, { promises } from 'fs'
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
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `*◈ ${user.registered === true ? user.name : `👉 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'verificar nombre.edad' : 'verify name.age'}`} ◈*
*˚₊·˚₊· ͟͟͞͞➳❥ @${m.sender.split("@")[0]}*
*˚₊·˚₊· ͟͟͞͞➳❥* ${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n*˚₊·˚₊· ͟͟͞͞➳❥* 𝗚𝗕 - 𝗦𝗨𝗕 𝗕𝗢𝗧 ⇢ *@${global.conn.user.jid.split`@`[0]}*`}
*☆═━┈◈ ╰ ${vs} ㎇ ╯ ◈┈━═☆*
*│* 
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal1()}_ ◂◂*
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
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal2()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'serbot' : 'jadibot'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bots' : 'subsbots'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'pausarsb' : 'pausesb'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'eliminarsesion' : 'delsession'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal3()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'google *texto*' : 'googlef *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bot *texto*' : 'simsimi *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ia *texto*' : 'chatgpt *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yts *texto*' : 'yts *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal4()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'imagen *texto*' : 'gimage *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'facebook *enlace*' : 'facebookdl *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mediafire *enlace*' : 'mediafiredl *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'play *nombre o enlace*' : 'play *name*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yta *enlace*' : 'yta *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytv *enlace*' : 'ytv *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmax *enlace*' : 'ytmax *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytadoc *enlace*' : 'ytadoc *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytvdoc *enlace*' : 'ytvdoc *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmaxdoc *enlace*' : 'ytmaxdoc *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tiktok *enlace*' : 'tkdl *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'openiamage *texto*' : 'dalle *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'midjourney *texto*' : 'openjourney *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotify *texto o enlace*' : 'spotify *text or link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotifysearch *texto*' : 'spotifysearch *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instagram *enlace*' : 'instagram *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'twitterx *enlace*' : 'twitterx *link*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal5()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *sticker*' : 'toimg *sticker*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'url *imagen*' : 'tourl *image*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp4 *sticker*' : 'tovideo *sticker*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gif *video*' : 'togif *video*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp3 *video o audio*' : 'tovn *video or audio*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tts *texto*' : 'totts *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal6()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'infogrupo' : 'groupinfo'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'admins' : 'dmins'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'enlace' : 'linkgroup'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'inspeccionar *enlace*' : 'inspect *link*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal7()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'notificar *texto*' : 'hidetag'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'sacar *tag*' : 'kick *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'invitar *número*' : 'invite *number*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'daradmin *tag*' : 'promote *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'quitaradmin *tag*' : 'demote *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'prohibir *tag*' : 'deprive *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desprohibir *tag*' : 'undeprive *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarwelcome *texto*' : 'setwelcome'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarbye *texto*' : 'setbye'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiardesc *texto*' : 'setdesc'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarnombre *texto*' : 'setname'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarpp *imagen*' : 'setppgc *image*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevoenlace' : 'resetlink'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo abrir' : 'group open'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo cerrar' : 'group close'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'invocar' : 'tagall'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal8()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarbass' : 'editbass'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarvibra' : 'editvibra'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarblown' : 'editblown'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editardeep' : 'editdeep'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarearrape' : 'editearrape'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarfast' : 'editfast'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarfat' : 'editfat'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarnightcore' : 'editnightcore'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarrobot' : 'editrobot'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarslow' : 'editslow'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarsmooth' : 'editsmooth'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editartupai' : 'edittupai'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editaraudio8d' : 'editaudio8d'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal9()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}bass_
*│* ┊▸ ✦ _${usedPrefix}blown_
*│* ┊▸ ✦ _${usedPrefix}deep_
*│* ┊▸ ✦ _${usedPrefix}earrape_
*│* ┊▸ ✦ _${usedPrefix}fast_
*│* ┊▸ ✦ _${usedPrefix}fat_
*│* ┊▸ ✦ _${usedPrefix}nightcore_
*│* ┊▸ ✦ _${usedPrefix}reverse_
*│* ┊▸ ✦ _${usedPrefix}robot_
*│* ┊▸ ✦ _${usedPrefix}slow_
*│* ┊▸ ✦ _${usedPrefix}smooth_
*│* ┊▸ ✦ _${usedPrefix}tupai_
*│* ┊▸ ✦ _${usedPrefix}audio8d_
*│* ┊▸ ✦ _${usedPrefix}echo_
*│* ┊▸ ✦ _${usedPrefix}distortion_
*│* ┊▸ ✦ _${usedPrefix}pitch_
*│* ┊▸ ✦ _${usedPrefix}reverb_
*│* ┊▸ ✦ _${usedPrefix}flanger_
*│* ┊▸ ✦ _${usedPrefix}apulsator_
*│* ┊▸ ✦ _${usedPrefix}tremolo_
*│* ┊▸ ✦ _${usedPrefix}chorus_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal10()}_ ◂◂*
*│* ┊ 
*│* ┊▸ ✦ _on_
*│* ┊▸ ✦ _off_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal11()}_ ◂◂*
*│* ┊ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'verificar *nombre.edad*' : 'verify *name.age*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'anulareg *id de registro*' : 'unreg *id registration*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'idregistro' : 'idregister'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal12()}_ ◂◂*
*│* ┊ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'respaldo' : 'backup'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'banusuario *@tag*' : 'banuser *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbanusuario *@tag*' : 'unbanuser *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tenerpoder' : 'autoadmin'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevabiobot *texto*' : 'setbiobot *texto*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevonombrebot *texto*' : 'setbiobot *texto*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevafotobot *imagen*' : 'setppbot *image*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'actualizar' : 'update'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'banearchat' : 'banchat'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbanearchat' : 'unbanchat'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'salir' : 'leave'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bloquear *@tag*' : 'block *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbloquear *@tag*' : 'unblock *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'obtenercodigo *nombre de archivo*' : 'getplugin *filename*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'borrardatos *número*' : 'deletedatauser *number*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'unete *enlace*' : 'join *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcsubbot *texto*' : 'bcsubbot *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcc *texto*' : 'bcchats *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcgc *texto*' : 'broadcastgc *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bc *texto*' : 'broadcastall *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
 `.trim()
    
const vi = ['https://telegra.ph/file/405daebd4bc0d69e5d165.mp4',
'https://telegra.ph/file/1d0ad9f79f65f39895b08.mp4',
'https://telegra.ph/file/c25afc1685b13210ce602.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}*/
