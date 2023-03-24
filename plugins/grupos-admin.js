import fetch from 'node-fetch'
let handler = async (m, { conn,usedPrefix, command, text, args }) => {
var number, user, fkontak, pp
const isCommand1 = /^(promote|daradmin|darpoder)$/i.test(command)
const isCommand2 = /^(demote|quitarpoder|quitaradmin)$/i.test(command)
const isCommand3 = /^(setwelcome|bienvenida|edit(?:ar)?wel(?:come)?)$/i.test(command)
const isCommand4 = /^(setbye|despedida|edit(?:ar)?(bye)?)$/i.test(command)
const isCommand5 = /^(setdesk|setdesc|newdesc|descripción|descripcion|editardesc)$/i.test(command)
const isCommand6 = /^(setname|newnombre|nuevonombre|cambiarnombre)$/i.test(command);
const isCommand7 = /^(setpp(group|grup|gc)?|cambiarfoto)$/i.test(command)
const isCommand8 = /^(nuevolink|nuevoenlace|revoke|resetlink)$/i.test(command)
const isCommand9 = /^(kick|echar|hechar|sacar|ban)$/i.test(command)

switch (true) {     
case isCommand1:
try{
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
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
}}
break
  
/*case isCommand2:
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
break*/
  
case isCommand3:
if (text) {
global.db.data.chats[m.chat].sWelcome = text
await conn.reply(m.chat, lenguajeGB['smsSetW'](), fkontak, m)
} else throw `${lenguajeGB['smsSetW2']()}`  
break
  
case isCommand4:
if (text) {
global.db.data.chats[m.chat].sBye = text
await conn.reply(m.chat, lenguajeGB['smsSetB'](), fkontak, m)
} else throw `${lenguajeGB['smsSetB2']()}`  
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
if (!img) throw lenguajeGB.smsGrupoPP()
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(lenguajeGB.smsGrupoPP2()))
} else throw lenguajeGB.smsGrupoPP()
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
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return conn.reply(m.chat, texto, fkontak, m) 
if(m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
if(conn.user.jid.includes(mentioned)) return conn.reply(m.chat, `${lenguajeGB['smskick1']()}${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)  
let eliminar = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove')
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
}} 
  
handler.command = /^(promote|daradmin|darpoder|demote|quitarpoder|quitaradmin|setwelcome|bienvenida|edit(?:ar)?wel(?:come)?|setbye|despedida|edit(?:ar)?(bye)?|setdesk|setdesc|newdesc|descripción|descripcion|editardesc|setname|newnombre|nuevonombre|cambiarnombre|setpp(group|grup|gc)?|cambiarfoto|nuevolink|nuevoenlace|revoke|resetlink|kick|echar|hechar|sacar|ban)$/i
handler.group = true
handler.botAdmin = true  
handler.admin = true
export default handler 
