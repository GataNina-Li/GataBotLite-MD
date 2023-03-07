import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'

let handler = async (m, { conn, usedPrefix }) => {
try{
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])] 
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
//const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
let old = performance.now()
let neww = performance.now()
let speed = neww - old
//let pp = './media/menus/Menu1.jpg'

let info = `
*${lenguajeGB.smsCreInfo().slice(0, -1)}*

🌺꙰᠁❥ *◜${lenguajeGB.smsBT1()}◞* ⇢ ${author}
🌼꙰᠁❥ *◜${lenguajeGB.smsBT2()}◞* ⇢ ${vs}
🌺꙰᠁❥ *◜${lenguajeGB.smsBT3()}◞* ⇢ ( ${usedPrefix} )
🌻꙰᠁❥ *◜${lenguajeGB.smsBT4()}◞* ⇢ ${chats.length - groups.length}
🌼꙰᠁❥ *◜${lenguajeGB.smsBT5()}◞* ⇢ ${groups.length}
🌺꙰᠁❥ *◜${lenguajeGB.smsBT6()}◞* ⇢ ${chats.length}
🌻꙰᠁❥ *◜${lenguajeGB.smsBT7()}◞* ⇢ ${uptime}
🌼꙰᠁❥ *◜${lenguajeGB.smsBT8()}◞* ⇢ ${totalreg}
🌺꙰᠁❥ *◜${lenguajeGB.smsEstado4().toUpperCase()}◞* ⇢ ${rtotalreg}/${totalreg}
🌻꙰᠁❥ *◜${lenguajeGB.smsVl1()}◞* ⇢ ${(speed * 1000).toFixed(0) / 1000}
🌼꙰᠁❥ *◜${lenguajeGB.smsBT11()}◞* ⇢ ${totaljadibot.length}`.trim()

let templateButtons = [ 
{index: 1, urlButton: {displayText: lenguajeGB.smsBT12(), url: ig}},
{index: 2, quickReplyButton: {displayText: '🌹 ' + lenguajeGB.smsBT9(), id: `${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'creadora' : 'owner'}`}},
{index: 3, quickReplyButton: {displayText: '🌹 ' + lenguajeGB.smsBT10(), id: `${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}`}},
{index: 4, quickReplyButton: {displayText: '🌹' + lenguajeGB.smsConMenu().substring(1, lenguajeGB.smsConMenu().length), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { image: { url: img3 }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: info, footer: wm, templateButtons }, { quoted: m})
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.command = /^(infobot|informacionbot|infogata|informacióngata|informaciongata)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
