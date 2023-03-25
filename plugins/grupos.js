import fetch from 'node-fetch'
import * as baileys from '@adiwajshing/baileys'

let handler = async (m, { conn, command, usedPrefix, args, participants, groupMetadata, text }) => {
let pp, groupAdmins, listAdmin, owner
const isCommand1 = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i.test(command)
const isCommand2 = /^(admins|@admins|dmins)$/i.test(command)
const isCommand3 = /^(enlace|link(gro?up)?)$/i.test(command)
const isCommand4 = /^(inspect|inspeccionar|revisar)$/i.test(command)

async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {     
case isCommand1:
try{
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
groupAdmins = participants.filter(p => p.admin) 
listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let info = 
`✤ ${lenguajeGB['smsGI1']()} ✤
⎔ ${lenguajeGB['smsGI2']()}
・ ${groupMetadata.id}

⎔ ${lenguajeGB['smsGI3']()}
・ ${groupMetadata.subject}

⎔ ${lenguajeGB['smsGI4']()}
・ ${groupMetadata.desc?.toString() || lenguajeGB['smsGI5']()}

⎔ ${lenguajeGB['smsGI6']()}
・ ${participants.length} ${lenguajeGB['smsGI7']()}

⎔ ${lenguajeGB['smsGI8']()}
・ @${owner.split('@')[0]}

⎔ ${lenguajeGB['smsGI9']()}
${listAdmin}
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', info, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })    
} catch (e) {
reportError(e)
}
break
    
case isCommand2:
try{
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
groupAdmins = participants.filter(p => p.admin)
listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${lenguajeGB.smsAddB5()} ${pesan ? '_' + pesan + '_' : "📣📣📣📣"}`
let textoA = `⭔ ${lenguajeGB.smsAddB3()}
⭔ ${oi}\n\n`
let textoB = `${listAdmin}\n
⛔ ${lenguajeGB.smsAddB4()} ⛔`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA + textoB, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
} catch (e) {
reportError(e)
} 
break
    
case isCommand3:
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let group = m.chat
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
let fsizedoc = '1'.repeat(10)
try{
await conn.sendFile(m.chat, pp, 'error.jpg', '*https://chat.whatsapp.com/' + await conn.groupInviteCode(group) + '*', m)
} catch (e) {
reportError(e)
} 
break
    
case isCommand4:

let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
if (!code) throw lenguajeGB.smsMalused() + usedPrefix + command + ' ' + nna 
try{
const extractGroupMetadata = (result) => {
const group = baileys.getBinaryNodeChild(result, 'group')
const descChild = baileys.getBinaryNodeChild(group, 'description')
let desc
if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
const metadata = {
id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
subject: group.attrs.subject,
creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'America/Los_Angeles' }),
owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
desc
}
return metadata
}  
let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
data = extractGroupMetadata(res),
txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n'),
pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error)
let groupinfo = `
🌺 *ID*
→ ${data.id}

🌸 *NOMBRE*
→ ${data.subject}

🌼 *CREADO*
→ ${data.creation}

🌻 *ADMIN PRINCIPAL*
→ ${data.owner}

🌹 *DESCRIPCIÓN*
→ ${data.desc}
`.trim()
//await conn.reply(m.chat, groupinfo, m)
await conn.sendFile(m.chat, pp, 'error.jpg', groupinfo, m)
} catch (e) {
reportError(e)
}   
break
}}

handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc)|admins|@admins|dmins|enlace|link(gro?up)?|inspect|inspeccionar|revisar)$/i
handler.group = true
handler.register = true
export default handler
