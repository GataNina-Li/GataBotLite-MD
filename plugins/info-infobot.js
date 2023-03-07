import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = './media/menus/Menu1.jpg'
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let totaljadibot
try{
totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
}catch (error) {
totaljadibot = 'ERROR...'
}

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
🌼꙰᠁❥ *◜SUB BOTS ACTIVOS◞* ⇢ ${totaljadibot.length || totaljadibot}`.trim()

let templateButtons = [ 
{index: 1, urlButton: {displayText: 'C O N T A C T O', url: ig}},
{index: 2, quickReplyButton: {displayText: '🌹 ' + lenguajeGB.smsBT9(), id: `${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'creadora' : 'owner'}`}},
{index: 3, quickReplyButton: {displayText: '🌹 ' + lenguajeGB.smsBT10(), id: `${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}`}},
{index: 4, quickReplyButton: {displayText: '🌹' + lenguajeGB.smsConMenu().substring(1, lenguajeGB.smsConMenu().length), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { image: { url: img3 }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: info, footer: wm, templateButtons }, { quoted: m})
}
handler.command = /^(infobot|informacionbot|infogata|informacióngata|informaciongata)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
