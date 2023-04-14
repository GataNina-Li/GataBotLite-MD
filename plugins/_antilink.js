import fetch from 'node-fetch'
const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com|t.me/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com/i 
const isLink = /chat.whatsapp.com/i 
const isFake = /91|92|93|94|210|212|49|48|40|27|20|98|96|61|62|60|63|64/i 

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: lenguajeGB.smsTextoYT(), thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    

if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
const isAntiLink = isLink.exec(m.text)
const isAntiFake = isFake.exec(m.text)

if (chat.antiLink && isAntiLink) {
await m.reply(`${lenguajeGB['smsEnlaceWat']()} ${await this.getName(m.sender)}`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAllAdmin']()}`)  
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
} else if (!bot.restrict) return await conn.sendButton(m.chat, `${lenguajeGB['smsSoloOwner']()}`, wm, img5, [[`${lenguajeGB['smsEncender']()}`, '/on restrict']], m, dos.getRandom())
}

if (chat.antifake && isAntiFake) {
await m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} *@${m.sender.split`@`[0]}* ${lenguajeGB['smsInt2']()}`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

if (chat.antiTiktok && isAntiLinkTik) {
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsEnlaceTik']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${lenguajeGB['smsAvisoFG']()}${lenguajeGB['smsAllAdmin']()}`}`, wm, img5, [[`${lenguajeGB['smsApagar']()}`, '/off antitiktok']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `${lenguajeGB['smsSoloOwner']()}`, wm, img5, [[`${lenguajeGB['smsEncender']()}`, '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiYoutube && isAntiLinkYt) {
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsEnlaceYt']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${lenguajeGB['smsAvisoFG']()}${lenguajeGB['smsAllAdmin']()}`}`, wm, img5, [[`${lenguajeGB['smsApagar']()}`, '/off antitiktok']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `${lenguajeGB['smsSoloOwner']()}`, wm, img5, [[`${lenguajeGB['smsEncender']()}`, '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiTelegram && isAntiLinkTel) {
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsEnlaceTel']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${lenguajeGB['smsAvisoFG']()}${lenguajeGB['smsAllAdmin']()}`}`, wm, img5, [[`${lenguajeGB['smsApagar']()}`, '/off antitiktok']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `${lenguajeGB['smsSoloOwner']()}`, wm, img5, [[`${lenguajeGB['smsEncender']()}`, '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiFacebook && isAntiLinkFb) {
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsEnlaceFb']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${lenguajeGB['smsAvisoFG']()}${lenguajeGB['smsAllAdmin']()}`}`, wm, img5, [[`${lenguajeGB['smsApagar']()}`, '/off antitiktok']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `${lenguajeGB['smsSoloOwner']()}`, wm, img5, [[`${lenguajeGB['smsEncender']()}`, '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiInstagram && isAntiLinkIg) {
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsEnlaceIg']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${lenguajeGB['smsAvisoFG']()}${lenguajeGB['smsAllAdmin']()}`}`, wm, img5, [[`${lenguajeGB['smsApagar']()}`, '/off antitiktok']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `${lenguajeGB['smsSoloOwner']()}`, wm, img5, [[`${lenguajeGB['smsEncender']()}`, '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiTwitter && isAntiLinkTw) {
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsEnlaceTw']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${lenguajeGB['smsAvisoFG']()}${lenguajeGB['smsAllAdmin']()}`}`, wm, img5, [[`${lenguajeGB['smsApagar']()}`, '/off antitiktok']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `${lenguajeGB['smsSoloOwner']()}`, wm, img5, [[`${lenguajeGB['smsEncender']()}`, '/on restrict']], m, dos.getRandom())
}
return !0
}

