const toxicRegex = /g0re|g0r3|g.o.r.e|sap0|sap4|malparido|malparida|malparidos|malparidas|m4lp4rid0|m4lp4rido|m4lparido|malp4rido|m4lparid0|malp4rid0|chocha|chup4la|chup4|sabandija|hijodelagranputa|hijodeputa|hijadeputa|hijadelagranputa|cajetuda|laconchadedios|putita|put1t4|putit4|put1to|put1ta|pr0stitut4s|pr0stitutas|pr05titutas|pr0stitut45|prostitut45|prostituta5|pr0stitut45|fanax|f4nax|p3n3|pen3|p.e.n.e|pvt0|pvto|put0|hijodelagransetentamilparesdeputa|Chingadamadre|c0ño|afeminado|drog4|cocaína|marihuana|chocho|pedorro|agrandado|agrandada|pedorra|cagona|mamar|chigadamadre|hijueputa|chupa|caca|boba|loca|chupapolla|estupido|estupida|estupidos|idiota|maricon|chucha|verga|vrga|naco|rctmre|mrd|csm|cp|cepe|sepe|sepesito|cepecito|cepesito|hldv|baboso|babosa|babosos|babosas|fea|feos|feas|chupame|bolas|imbecil|embeciles|kbrones|cabron|capullo|gore|gorre|gorreo|sapa|mierda|cerdo|cerda|puerco|puerca|bullshit|cunt|semen|bitch|motherfucker/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://telegra.ph/file/635b82df8d7abb4792eab.jpg'
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
/* if (!(user.warn >= 4)) await m.reply(`${user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`},  ${lenguajeGB['smsToxic1']()} (${isToxic}) ${lenguajeGB['smsToxic2']()}*\n\n${lenguajeGB['smsToxic3']()} *${user.warn}/4*`, false, { mentions: [m.sender] })
    }*/
if (!(user.warn >= 4)) await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`} *${lenguajeGB['smsToxic1']()} (${isToxic}) ${lenguajeGB['smsToxic2']()}*`, `${lenguajeGB['smsToxic3']()} *${user.warn}/4*\n\n${wm}`, img, [
[lenguajeGB.smsToxic4(), 'ok'],
[lenguajeGB.smsToxic5(), '.off antitoxic'],
[lenguajeGB.smsConMenu(), '/menu']], false, { mentions: [m.sender] })}

if (user.warn >= 4) {
user.warn = 0
await m.reply(`*${lenguajeGB['smsToxic6']()}*\n*@${m.sender.split`@`[0]} ${lenguajeGB['smsToxic7']()}*`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
global.db.data.users[m.sender].limit -= 5
}
return !1
}
