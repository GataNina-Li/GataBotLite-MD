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

πΊκ°α β₯ *β${lenguajeGB.smsBT1()}β* β’ ${author}
πΌκ°α β₯ *β${lenguajeGB.smsBT2()}β* β’ ${vs}
πΊκ°α β₯ *β${lenguajeGB.smsBT3()}β* β’ ( ${usedPrefix} )
π»κ°α β₯ *β${lenguajeGB.smsBT4()}β* β’ ${chats.length - groups.length}
πΌκ°α β₯ *β${lenguajeGB.smsBT5()}β* β’ ${groups.length}
πΊκ°α β₯ *β${lenguajeGB.smsBT6()}β* β’ ${chats.length}
π»κ°α β₯ *β${lenguajeGB.smsBT7()}β* β’ ${uptime}
πΌκ°α β₯ *β${lenguajeGB.smsBT8()}β* β’ ${totalreg}
πΊκ°α β₯ *β${lenguajeGB.smsEstado4().toUpperCase()}β* β’ ${rtotalreg}/${totalreg}
π»κ°α β₯ *β${lenguajeGB.smsVl1()}β* β’ ${(speed * 1000).toFixed(0) / 1000}
πΌκ°α β₯ *β${lenguajeGB.smsBT11()}β* β’ ${totaljadibot.length}`.trim()

let templateButtons = [ 
{index: 1, urlButton: {displayText: lenguajeGB.smsBT12(), url: ig}},
{index: 2, quickReplyButton: {displayText: 'πΉ ' + lenguajeGB.smsBT9(), id: `${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'creadora' : 'owner'}`}},
{index: 3, quickReplyButton: {displayText: 'πΉ ' + lenguajeGB.smsBT10(), id: `${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}`}},
{index: 4, quickReplyButton: {displayText: 'πΉ' + lenguajeGB.smsConMenu().substring(3, lenguajeGB.smsConMenu().length), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { image: { url: img3 }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: info, footer: wm, templateButtons }, { quoted: m})
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`ββ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ββ`)
console.log(e)}}
handler.command = /^(infobot|informacionbot|infogata|informaciΓ³ngata|informaciongata)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
