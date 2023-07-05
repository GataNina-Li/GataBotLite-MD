import fetch from 'node-fetch'
let handler = async (m, { conn,usedPrefix, command, text, args, isOwner, isAdmin, participants, groupMetadata }) => {
var number, user, fkontak, pp, bot, bant, ownerNumber, aa, users, usr
const isCommand1 = /^(promote|daradmin|darpoder)$/i.test(command)
const isCommand2 = /^(demote|quitarpoder|quitaradmin)$/i.test(command)
const isCommand3 = /^(setwelcome|bienvenida|edit(?:ar)?wel(?:come)?)$/i.test(command)
const isCommand4 = /^(setbye|despedida|edit(?:ar)?(bye)?)$/i.test(command)
const isCommand5 = /^(setdesk|setdesc|newdesc|descripción|descripcion|cambiardesc)$/i.test(command)
const isCommand6 = /^(setname|newnombre|nuevonombre|cambiarnombre)$/i.test(command);
const isCommand7 = /^(setpp(group|grup|gc)?|cambiarpp)$/i.test(command)
const isCommand8 = /^(nuevolink|nuevoenlace|revoke|resetlink)$/i.test(command)
const isCommand9 = /^(kick|echar|hechar|sacar|ban)$/i.test(command)
const isCommand10 = /^(group|grupo)$/i.test(command)
const isCommand11 = /^(tagall|invocar|invocacion|todos|invocación)$/i.test(command)
const isCommand12 = /^(prohibir|prohibit|privar|deprive)$/i.test(command)
const isCommand13 = /^(add|agregar|invitar|invite|añadir)$/i.test(command)

fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
switch (true) {     
case isCommand1:
if(isNaN(text) && !text.match(/@/g)){
}else if(isNaN(text)) {
number = text.split`@`[1]
}else if(!isNaN(text)) {
number = text
}
if(!text && !m.quoted) return conn.reply(m.chat, lenguajeGB['smsMalused3']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, lenguajeGB['smsDemott']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)	
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
} } catch (e) {
} finally {
await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
await conn.reply(m.chat, lenguajeGB['smsAvisoEG']() + lenguajeGB['smsDemott2'](), fkontak, m)
}
break
  
case isCommand2:
if(isNaN(text) && !text.match(/@/g)){	
}else if(isNaN(text)) {
number = text.split`@`[1]
}else if(!isNaN(text)) {
number = text
}	
if (!text && !m.quoted) return conn.reply(m.chat, lenguajeGB['smsMalused3']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, lenguajeGB['smsDemott']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)	  
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
await conn.reply(m.chat, lenguajeGB['smsAvisoEG']() + lenguajeGB['smsDemott3'](), fkontak, m)
}  
break
  
case isCommand3:
if (text) {
global.db.data.chats[m.chat].sWelcome = text
await conn.reply(m.chat, lenguajeGB['smsSetW'](), fkontak, m)
} else return m.reply(`${lenguajeGB['smsSetW2']()}`)
break
  
case isCommand4:
if (text) {
global.db.data.chats[m.chat].sBye = text
await conn.reply(m.chat, lenguajeGB['smsSetB'](), fkontak, m)
} else return m.reply(`${lenguajeGB['smsSetB2']()}`) 
break
  
case isCommand5:
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
await conn.sendFile(m.chat, pp, 'error.jpg', lenguajeGB.smsDest(), m, fkontak)
break
  
case isCommand6:
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
if (!text) return conn.reply(m.chat, lenguajeGB['smsNam2'](), fkontak, m)
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
await conn.groupUpdateSubject(m.chat, text)}
} catch (e) { 
throw lenguajeGB['smsNam3']()
}  
break
  
case isCommand7:
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) return m.reply(lenguajeGB.smsGrupoPP())
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(lenguajeGB.smsGrupoPP2()))
} else return m.reply(lenguajeGB.smsGrupoPP())
break
  
case isCommand8:
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
let res = await conn.groupRevokeInvite(m.chat)
await conn.sendFile(m.chat, pp, 'error.jpg', lenguajeGB.smsRestGp() + '\n\n*https://chat.whatsapp.com/' + res + '*', m, fkontak)
break
  
case isCommand9:
try{
let texto = `${lenguajeGB['smskick1']()}${usedPrefix + command} @${global.owner[0][0]}*`
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`, fkontak, m)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(texto, m.chat, { mentions: conn.parseMention(texto)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
let eliminar = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return conn.reply(m.chat, texto, fkontak, m) 
if(m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
if(conn.user.jid.includes(mentioned)) return conn.reply(m.chat, `${lenguajeGB['smskick1']()}${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)  
//let eliminar = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove')
let done = `${lenguajeGB['smsAvisoEG']()}*@${mentioned.split("@")[0]} ${lenguajeGB['smskick2']()}*`
let err1 = `${lenguajeGB['smsAvisoFG']()}*@${mentioned.split("@")[0]} ${lenguajeGB['smskick3']()}*`
let err2 = `${lenguajeGB['smsAvisoAG']()}*@${mentioned.split("@")[0]} ${lenguajeGB['smskick4']()}*`
if (eliminar[0].status === "200") m.reply(done, m.chat, { mentions: conn.parseMention(done)})  
else if (eliminar[0].status === "406") m.reply(err1, m.chat, { mentions: conn.parseMention(err1)})   
else if (eliminar[0].status === "404") m.reply(err2, m.chat, { mentions: conn.parseMention(err2)})  
else conn.reply(m.chat, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, m)  
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) return
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}
break
    
case isCommand10:
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { 
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
return m.reply(`${lenguajeGB['smsMalused']()}
*⭔ ${usedPrefix + command} ${lenguajeGB.lenguaje() == 'es' ? 'abrir' : 'open'}*
*⭔ ${usedPrefix + command} ${lenguajeGB.lenguaje() == 'es' ? 'cerrar' : 'close'}*`.trim())
await conn.groupSettingUpdate(m.chat, isClose)
if (isClose === 'not_announcement'){
await conn.sendFile(m.chat, pp, 'error.jpg', lenguajeGB.smsGrupoOpen(), m)}
if (isClose === 'announcement'){
await conn.sendFile(m.chat, pp, 'error.jpg', lenguajeGB.smsGrupoClose(), m)}      
break
    
case isCommand11:
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
return false
}
let pesan = args.join` `
let oi = `» ${lenguajeGB['smsAddB5']()} ${pesan}`
let teks = `*${lenguajeGB['smstagaa']()}*\n\n${oi}\n\n`
for (let mem of participants) {
teks += `⎔ @${mem.id.split('@')[0]}\n`}
await conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )    
break
    
case isCommand12:
try{
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = lenguajeGB.smsPropban1(usedPrefix, command, bot)
if (!text && !m.quoted) return conn.reply(m.chat, bant, null, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, lenguajeGB.smsPropban2(bot), null, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, lenguajeGB.smsPropban3(ownerNumber), null, { mentions: [aa] })
return
}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, lenguajeGB.smsPropban4(number), null, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, lenguajeGB.smsPropban5(), null, { mentions: [user] })   
await conn.reply(user, lenguajeGB.smsPropban6(number, usr), null, { mentions: [user, m.sender] })
}} catch (e) {
await conn.reply(m.chat, lenguajeGB.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}
break
    
case isCommand13:
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
bot = conn.user.jid.split`@`[0]
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`, fkontak, m)
if (args.length >= 1) {
if (/[a-zA-Z]/.test(text)) return conn.reply(m.chat, lenguajeGB.smsAvisoFG() + lenguajeGB.smsInvite1(), m)
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else {
return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}${lenguajeGB.smsInvite2(usedPrefix, command, bot)}`, m);
}  
let NumeroUser = text.replace(/\D/g, '')
user = m.sender.split`@`[0]
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat)
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || gataMenu.getRandom()//'./media/menus/Menu2.jpg' 
await conn.reply(NumeroUser + '@s.whatsapp.net', `✨ *¡Hola! @${NumeroUser}, @${user} ¡¡Te ha invitado!!*`, null, {mentions: [NumeroUser + '@s.whatsapp.net', m.sender]})    
await conn.sendMessage(NumeroUser + '@s.whatsapp.net', { text: `*Soy ${packname}, un Bot para WhatsApp.*\n\n:¨·.·¨:\n\`·. ${groupMetadata.subject}`, contextInfo: { externalAdReply: { title: '❤️ ¡Te esperamos con ansias en el grupo!', body: '9999999999', thumbnailUrl: pp, sourceUrl: link, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}})
//await conn.reply(NumeroUser + '@s.whatsapp.net', lenguajeGB.smsInvite3(NumeroUser, user, groupMetadata, link), null, {mentions: [NumeroUser + '@s.whatsapp.net', m.sender]})    
//await conn.sendMessage(NumeroUser + '@s.whatsapp.net', { text: `:¨·.·¨:\n\`·. ${groupMetadata.subject}`, contextInfo: { externalAdReply: { title: wm, body: '9999999999', thumbnailUrl: pp, sourceUrl: link, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}})
await conn.reply(m.chat, lenguajeGB.smsInvite4(NumeroUser), m, {mentions: [NumeroUser + '@s.whatsapp.net', m.sender]})    
break
}} 
  
handler.command = /^(promote|daradmin|darpoder|demote|quitarpoder|quitaradmin|setwelcome|bienvenida|edit(?:ar)?wel(?:come)?|setbye|despedida|edit(?:ar)?(bye)?|setdesk|setdesc|newdesc|descripción|descripcion|cambiardesc|setname|newnombre|nuevonombre|cambiarnombre|cambiarpp|setpp(group|grup|gc)?|nuevolink|nuevoenlace|revoke|resetlink|kick|echar|hechar|sacar|ban|group|grupo|tagall|invocar|invocacion|todos|invocación|prohibir|prohibit|privar|deprive|add|agregar|invitar|invite|añadir)$/i
handler.group = true
handler.botAdmin = true 
handler.register = true
handler.admin = true

export default handler 
