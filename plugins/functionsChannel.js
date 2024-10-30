// Código adaptado por https://github.com/GataNina-Li
// Código compatible con canales y comunidades de WhatsApp 
// También encontrarás código para comandos enfocados para canales de WhatsApp

import { getUrlFromDirectPath } from "@whiskeysockets/baileys"
import _ from "lodash"
import axios from 'axios' 

let handler = async (m, { conn, command, usedPrefix, args, text, groupMetadata, isOwner, isROwner }) => {
const isCommand1 = /^(superinspect|inspect|revisar|inspeccionar)\b$/i.test(command)
const isCommand2 = /^(seguircanal|seguirch|followchannel|followch)\b$/i.test(command)
const isCommand3 = /^(noseguircanal|noseguirch|unfollowchannel|unfollowch)\b$/i.test(command)
const isCommand4 = /^(silenciarcanal|silenciarch|mutechannel|mutech)\b$/i.test(command)
const isCommand5 = /^(nosilenciarcanal|nosilenciarch|unmutechannel|unmutech)\b$/i.test(command)
const isCommand6 = /^(ppcanal|ppchannel|cambiarppcanal|cambiarppch|setppchannel|ppch|setppch)\b$/i.test(command)
const isCommand7 = /^(eliminarppcanal|eliminarppch|deleteppchannel|deleteppch)\b$/i.test(command)
const isCommand8 = /^(avisos?canal|updates?channel|updates?ch)\b$/i.test(command)
const isCommand9 = /^(reaccionescanal|reaccionesch|reactions?channel|reactionch)\b$/i.test(command)
const isCommand10 = /^(nuevonombrecanal|nuevonombrech|nuevonombrech|newnamechannel|newnamech)\b$/i.test(command)
const isCommand11 = /^(nuevadescc?anal|nuevadescripcioncanal|nuevadescripcionch|newdescc?hannel|newdescriptionchannel|newdescc?h)\b$/i.test(command)

const channelUrl = text?.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:channel\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1]
let txtBotAdminCh = '\n\n> *Verifique que el Bot sea admin en el canal, de lo contrario no funcionará el comando*'
    
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}
let thumb = gataMenu.getRandom()
let pp, ch, q, mime, buffer, media, inviteUrlch, imageBuffer
    
switch (true) {     
case isCommand1:
let inviteCode
if (!text) return await conn.reply(m.chat, `*Ingrese un enlace de un grupo/comunidad/canal de WhatsApp para obtener información.*`, m)
const MetadataGroupInfo = async (res, isInviteInfo = false) => {
let nameCommunity = "no pertenece a ninguna Comunidad"
let groupPicture = "No se pudo obtener"

if (res.linkedParent) {
let linkedGroupMeta = await conn.groupMetadata(res.linkedParent).catch(e => { return null })
nameCommunity = linkedGroupMeta ? "\n" + ("`Nombre:` " + linkedGroupMeta.subject || "") : nameCommunity
}
pp = await conn.profilePictureUrl(res.id, 'image').catch(e => { return null })
inviteCode = await conn.groupInviteCode(m.chat).catch(e => { return null })
const formatParticipants = (participants) =>
participants && participants.length > 0
? participants.map((user, i) => `${i + 1}. @${user.id?.split("@")[0]}${user.admin === "superadmin" ? " (superadmin)" : user.admin === "admin" ? " (admin)" : ""}`).join("\n")
: "No encontrado"
let caption = `🆔 *Identificador del grupo:*\n${res.id || "No encontrado"}\n\n` +
`👑 *Creado por:*\n${res.owner ? `@${res.owner?.split("@")[0]}` : "No encontrado"} ${res.creation ? `el ${formatDate(res.creation)}` : "(Fecha no encontrada)"}\n\n` +
`🏷️ *Nombre:*\n${res.subject || "No encontrado"}\n\n` +
`✏️ *Nombre cambiado por:*\n${res.subjectOwner ? `@${res.subjectOwner?.split("@")[0]}` : "No encontrado"} ${res.subjectTime ? `el ${formatDate(res.subjectTime)}` : "(Fecha no encontrada)"}\n\n` +
`📄 *Descripción:*\n${res.desc || "No encontrado"}\n\n` +
`📝 *Descripción cambiado por:*\n${res.descOwner ? `@${res.descOwner?.split("@")[0]}` : "No encontrado"}\n\n` +
`🗃️ *Id de la descripción:*\n${res.descId || "No encontrado"}\n\n` +
`🖼️ *Imagen del grupo:*\n${pp ? pp : groupPicture}\n\n` +
`💫 *Autor:*\n${res.author || "No encontrado"}\n\n` +
`🎫 *Código de invitación:*\n${res.inviteCode || inviteCode || "No disponible"}\n\n` +
`⌛ *Duración:*\n${res.ephemeralDuration !== undefined ? `${res.ephemeralDuration} segundos` : "Desconocido"}\n\n` +
`🛃 *Admins:*\n` + (res.participants && res.participants.length > 0 ? res.participants.filter(user => user.admin === "admin" || user.admin === "superadmin").map((user, i) => `${i + 1}. @${user.id?.split("@")[0]}${user.admin === "superadmin" ? " (superadmin)" : " (admin)"}`).join("\n") : "No encontrado") + `\n\n` +
`🔰 *Usuarios en total:*\n${res.size || "Cantidad no encontrada"}\n\n` +
`✨ *Información avanzada* ✨\n\n🔎 *Comunidad vinculada al grupo:*\n${res.isCommunity ? "Este grupo es un chat de avisos" : `${res.linkedParent ? "`Id:` " + res.linkedParent : "Este grupo"} ${nameCommunity}`}\n\n` +
`⚠️ *Restricciones:* ${res.restrict ? "✅" : "❌"}\n` +
`📢 *Anuncios:* ${res.announce ? "✅" : "❌"}\n` +
`🏘️ *¿Es comunidad?:* ${res.isCommunity ? "✅" : "❌"}\n` +
`📯 *¿Es anuncio de comunidad?:* ${res.isCommunityAnnounce ? "✅" : "❌"}\n` +
`🤝 *Tiene aprobación de miembros:* ${res.joinApprovalMode ? "✅" : "❌"}\n` +
`🆕 *Puede Agregar futuros miembros:* ${res.memberAddMode ? "✅" : "❌"}\n\n` 
return caption.trim()
}
        
const inviteGroupInfo = async (groupData) => {
const { id, subject, subjectOwner, subjectTime, size, creation, owner, desc, descId, linkedParent, restrict, announce, isCommunity, isCommunityAnnounce, joinApprovalMode, memberAddMode, ephemeralDuration } = groupData
let nameCommunity = "no pertenece a ninguna Comunidad"
let groupPicture = "No se pudo obtener"
if (linkedParent) {
let linkedGroupMeta = await conn.groupMetadata(linkedParent).catch(e => { return null })
nameCommunity = linkedGroupMeta ? "\n" + ("`Nombre:` " + linkedGroupMeta.subject || "") : nameCommunity
}
pp = await conn.profilePictureUrl(id, 'image').catch(e => { return null })
const formatParticipants = (participants) =>
participants && participants.length > 0
? participants.map((user, i) => `${i + 1}. @${user.id?.split("@")[0]}${user.admin === "superadmin" ? " (superadmin)" : user.admin === "admin" ? " (admin)" : ""}`).join("\n")
: "No encontrado"

let caption = `🆔 *Identificador del grupo:*\n${id || "No encontrado"}\n\n` +
`👑 *Creado por:*\n${owner ? `@${owner?.split("@")[0]}` : "No encontrado"} ${creation ? `el ${formatDate(creation)}` : "(Fecha no encontrada)"}\n\n` +
`🏷️ *Nombre:*\n${subject || "No encontrado"}\n\n` +
`✏️ *Nombre cambiado por:*\n${subjectOwner ? `@${subjectOwner?.split("@")[0]}` : "No encontrado"} ${subjectTime ? `el ${formatDate(subjectTime)}` : "(Fecha no encontrada)"}\n\n` +
`📄 *Descripción:*\n${desc || "No encontrada"}\n\n` +
`💠 *ID de la descripción:*\n${descId || "No encontrado"}\n\n` +
`🖼️ *Imagen del grupo:*\n${pp ? pp : groupPicture}\n\n` +
`🏆 *Miembros destacados:*\n${formatParticipants(groupData.participants)}\n\n` +
`👥 *Destacados total:*\n${size || "Cantidad no encontrada"}\n\n` +
`✨ *Información avanzada* ✨\n\n🔎 *Comunidad vinculada al grupo:*\n${isCommunity ? "Este grupo es un chat de avisos" : `${linkedParent ? "`Id:` " + linkedParent : "Este grupo"} ${nameCommunity}`}\n\n` +
`📢 *Anuncios:* ${announce ? "✅ Si" : "❌ No"}\n` +
`🏘️ *¿Es comunidad?:* ${isCommunity ? "✅ Si" : "❌ No"}\n` +
`📯 *¿Es anuncio de comunidad?:* ${isCommunityAnnounce ? "✅" : "❌"}\n` +
`🤝 *Tiene aprobación de miembros:* ${joinApprovalMode ? "✅" : "❌"}\n`
return caption.trim()
}

let info
try {
let res = text ? null : await conn.groupMetadata(m.chat)
info = await MetadataGroupInfo(res) // Si el bot esta en el grupo
console.log('Método de metadatos')
} catch {
const inviteUrl = text?.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:invite\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1]
//if (!inviteUrl &&) return await conn.reply(m.chat, "*Verifique que sea un enlace de grupo o comunidad de WhatsApp.*", m)
let inviteInfo
if (inviteUrl) {
try {
inviteInfo = await conn.groupGetInviteInfo(inviteUrl)
info = await inviteGroupInfo(inviteInfo) // Para cualquier enlace de grupo/comunidad
console.log(info)
console.log('Método de enlace')    
} catch (e) {
m.reply('Grupo no encontrado')
return
}}}
if (info) {
await conn.sendMessage(m.chat, { text: info, contextInfo: {
mentionedJid: conn.parseMention(info),
externalAdReply: {
title: "🔰 Inspector de Grupos",
body: packname,
thumbnailUrl: pp ? pp : thumb,
sourceUrl: args[0] ? args[0] : inviteCode ? `https://chat.whatsapp.com/${inviteCode}` : md,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: fkontak })
} else {
// Manejo de enlaces de canales
let newsletterInfo
if (!channelUrl) return await conn.reply(m.chat, "*Verifique que sea un enlace de canal de WhatsApp.*", m)
if (channelUrl) {
try {
newsletterInfo = await conn.newsletterMetadata("invite", channelUrl).catch(e => { return null })
if (!newsletterInfo) return await conn.reply(m.chat, "*No se encontró información del canal.* Verifique que el enlace sea correcto.", m)       
let caption = "*Inspector de enlaces de Canales*\n\n" + processObject(newsletterInfo, "", newsletterInfo?.preview)
if (newsletterInfo?.preview) {
pp = getUrlFromDirectPath(newsletterInfo.preview)
} else {
pp = thumb
}
if (channelUrl && newsletterInfo) {
await conn.sendMessage(m.chat, { text: caption, contextInfo: {
mentionedJid: conn.parseMention(caption),
externalAdReply: {
title: "📢 Inspector de Canales",
body: packname,
thumbnailUrl: pp,
sourceUrl: args[0],
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: fkontak })}
newsletterInfo.id ? conn.sendMessage(m.chat, { text: newsletterInfo.id }, { quoted: null }) : ''
} catch (e) {
reportError(e)
}}}
break

// Seguir un canal de WhatsApp 
case isCommand2:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
ch
if (!text) return await conn.reply(m.chat, `*Ingrese el ID o enlace de un canal de WhatsApp que quiere que el bot siga.*\n\n*Puede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`, m)
if (text.includes("@newsletter")) {
ch = text
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}       
try {
const chtitle = await conn.newsletterMetadata(text.includes("@newsletter") ? "jid" : "invite", text.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.newsletterFollow(ch)
await conn.reply(m.chat, `${packname} ha empezado a seguir el canal *${chtitle}* con éxito.`, m) 
} catch (e) {
reportError(e)
}
break

// Dejar de seguir un canal de WhatsApp 
case isCommand3:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
ch
if (!text) return await conn.reply(m.chat, `*Ingrese el ID o enlace de un canal de WhatsApp que quiere que el bot deje de seguir.*\n\n*Puede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`, m)
if (text.includes("@newsletter")) {
ch = text
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}       
try {
const chtitle = await conn.newsletterMetadata(text.includes("@newsletter") ? "jid" : "invite", text.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.newsletterUnfollow(ch)
await conn.reply(m.chat, `${packname} ha dejado de seguir el canal *${chtitle}* con éxito.`, m) 
} catch (e) {
reportError(e)
}
break

// Silenciar un canal de WhatsApp 
case isCommand4:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
ch
if (!text) return await conn.reply(m.chat, `*Ingrese el ID o enlace de un canal de WhatsApp que quiere que el bot silencie las actualizaciones.*\n\nPuede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`, m)
if (text.includes("@newsletter")) {
ch = text
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}       
try {
const chtitle = await conn.newsletterMetadata(text.includes("@newsletter") ? "jid" : "invite", text.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.newsletterMute(ch)
await conn.reply(m.chat, `${packname} ha silenciado las notificaciones para el canal *${chtitle}* con éxito.`, m) 
} catch (e) {
reportError(e)
}
break

// Dejar de sileciar un canal de WhatsApp 
case isCommand5:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
ch
if (!text) return await conn.reply(m.chat, `*Ingrese el ID o enlace de un canal de WhatsApp que quiere que el bot active las actualizaciones.*\n\n*Puede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`, m)
if (text.includes("@newsletter")) {
ch = text
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}       
try {
const chtitle = await conn.newsletterMetadata(text.includes("@newsletter") ? "jid" : "invite", text.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.newsletterUnmute(ch)
await conn.reply(m.chat, `${packname} ha dejado de silenciar las notificaciones para el canal *${chtitle}* con éxito.`, m) 
} catch (e) {
reportError(e)
}
break

// Modificar la imagen del canal
case isCommand6:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
if (!text) return await conn.reply(m.chat, `*Ingrese el ID o enlace de un canal de WhatsApp respondiendo a una imagen jpg/jpeg/png o agregue un enlace de imagen*\n
*Respondiendo a una imagen*
*${usedPrefix + command}* 12345@newsletter

*Agregando url de imagen*
*${usedPrefix + command}* 12345@newsletter https://example.com/image.jpg\n\n*Puede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`, m)
const regex = /(\b\w+@newsletter\b)(?:.*?(https?:\/\/[^\s]+?\.(?:jpe?g|png)))?/i
const match = text.match(regex)
let match1 = match ? match[1] ? match[1] : null : null
let match2 = match ? match[2] ? match[2] : null : null
if (m.quoted) {
q = m.quoted ? m.quoted : m
mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
media = await q.download()
} else {
return await conn.reply(m.chat, `*Responda a una imagen jpg/png.*`, m)
}} else { 
const imageUrlRegex = /(https?:\/\/[^\s]+?\.(?:jpe?g|png))/
if (!match2 && !text.match(imageUrlRegex)) return await conn.reply(m.chat, `*Agregué el enlace jpg/png después del ID del canal.*`, m)
try {
const response = await axios.get(match2 ? match2 : text.match(imageUrlRegex), { responseType: 'arraybuffer' })
imageBuffer = Buffer.from(response.data, 'binary')
} catch (error) {
return await conn.reply(m.chat, `*Error al descargar la imagen de la URL proporcionada.*`, m)
}
media = imageBuffer
}
if (text.includes("@newsletter")) {
if(!match1) return await conn.reply(m.chat, `*No se encontró el ID del canal.*`, m)
ch = match1
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}       
try {
const chtitle = await conn.newsletterMetadata(text.includes("@newsletter") ? "jid" : "invite", text.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.newsletterUpdatePicture(ch, media)
await conn.reply(m.chat, `${packname} ha actualizado la imagen del canal *${chtitle}* con éxito.`, m) 
} catch (e) {
reportError(e)
}
break

// Eliminar la imagen del canal
case isCommand7:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
ch
if (!text) return await conn.reply(m.chat, `*Ingrese el ID o enlace de un canal de WhatsApp que quiere que el bot elimine la imagen del canal.*\n\n*Puede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`, m)
if (text.includes("@newsletter")) {
ch = text
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}       
try {
const chtitle = await conn.newsletterMetadata(text.includes("@newsletter") ? "jid" : "invite", text.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.newsletterRemovePicture(ch)
await conn.reply(m.chat, `${packname} ha eliminado la imagen del canal *${chtitle}* con éxito.`, m) 
} catch (e) {
reportError(e)
}
break

// Recibir notificaciones de actualizaciones del canal en tiempo real
case isCommand8:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
ch
if (!text) return await conn.reply(m.chat, `*Ingrese el ID o enlace de un canal de WhatsApp para que el bot reciba notificaciones en tiempo real.*\n\n*Puede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`, m)
if (text.includes("@newsletter")) {
ch = text
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}       
try {
const chtitle = await conn.newsletterMetadata(text.includes("@newsletter") ? "jid" : "invite", text.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.subscribeNewsletterUpdates(ch)
await conn.reply(m.chat, `${packname} recibirá notificaciones del canal *${chtitle}*`, m) 
} catch (e) {
reportError(e)
}
break

// Establece el modo de reacciones en un canal de WhatsApp 
case isCommand9:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
ch
if (!text) return await conn.reply(m.chat, `
*Ingrese el ID o enlace de un canal de WhatsApp seguido de un espacio y la opción del modo de reacciones para el canal.*

*Modo de reacciones:*
> Use solo el número de la opción.

*Opciones:*
\`\`\`[1]\`\`\` _Reacción con cualquier emoji._
\`\`\`[2]\`\`\` _Reacción con emojis predeterminados._
\`\`\`[3]\`\`\` _Ninguna reacción._

*Ejemplo de uso:*
*${usedPrefix + command}* 12345@newsletter 1

*Puede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`.trim(), m)

const parts = text.split(' ')
const modeNumber = parseInt(parts.pop())
ch = parts.join(' ')

let mode
switch (modeNumber) {
case 1:
mode = 'ALL'
break
case 2:
mode = 'BASIC'
break
case 3:
mode = 'NONE'
break
default:
return await conn.reply(m.chat, `*Modo de reacción no válida.*\n
*Modo de reacciones:*
> Use solo el número de la opción.

*Opciones:*
\`\`\`[1]\`\`\` _Reacción con cualquier emoji._
\`\`\`[2]\`\`\` _Reacción con emojis predeterminados._
\`\`\`[3]\`\`\` _Ninguna reacción._

*Ejemplo de uso:*
*${usedPrefix + command}* 12345@newsletter 1`, m)
}

if (ch.includes("@newsletter")) {
ch = ch.trim()
} else {
ch = await conn.newsletterMetadata("invite", ch).then(data => data.id).catch(e => null)
}

try {
const chtitle = await conn.newsletterMetadata(ch.includes("@newsletter") ? "jid" : "invite", ch.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.newsletterReactionMode(ch, mode)
await conn.reply(m.chat, `${packname} ha establecido el modo de reacciones como \`"${mode}"\` para el canal *${chtitle}*`, m)
} catch (e) {
reportError(e)
}
break

// Modificar nombre del canal
case isCommand10:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
if (!text) return await conn.reply(m.chat, `*Ingrese el ID o enlace de un canal de WhatsApp para que el bot modifique el nombre del canal.*\n\n
*Parámetros de uso:*
*${usedPrefix + command}* \`id\` \`nombre\` 

*Ejemplo de uso:*
*${usedPrefix + command}* 12345@newsletter NombreDelcanal\n\n*Puede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`, m)
const [id, ...nameParts] = text.split(' ')
const name = nameParts.join(' ').trim()
if (name.length > 99) return await conn.reply(m.chat, `*El nombre del canal no puede tener más de 99 caracteres.*`, m)
if (text.includes("@newsletter")) {
ch = id.trim()
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}       
try {
const chtitle = await conn.newsletterMetadata(text.includes("@newsletter") ? "jid" : "invite", text.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.newsletterUpdateName(ch, name)
//await conn.reply(m.chat, `${packname} ha cambiado el nombre del canal *${name}*\n\n*Anterior nombre:* ${chtitle}\n*Nuevo nombre:* ${name}`, m) 
m.react("✨") 
await conn.sendMessage(ch, { text: `${packname} ha cambiado el nombre del canal *${name}*\n\n*Anterior nombre:* ${chtitle}\n*Nuevo nombre:* ${name}`, contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '¡Nuevo nombre para el canal!',
thumbnailUrl: gataMenu, 
sourceUrl: accountsgb,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
} catch (e) {
reportError(e)
}
break

// Modificar la descripción del canal
case isCommand11:
if (!isOwner || !isROwner) return await conn.reply(m.chat, `*No tienes permiso para usar este comando.*`, m)
if (!text) return await conn.reply(m.chat, `*Ingrese el ID o enlace de un canal de WhatsApp para que el bot modifique la descripción del canal.*\n\n
*Parámetros de uso:*
*${usedPrefix + command}* \`id\` \`descripción\` 

*Ejemplo de uso:*
*${usedPrefix + command}* 12345@newsletter DescripciónDelcanal\n\n*Puede obtener el ID usando el comando:*\n*${usedPrefix}superinspect* enlace${txtBotAdminCh}`, m)
const [idch, ...descriptionParts] = text.split(' ')
const description = descriptionParts.join(' ').trim()
if (text.includes("@newsletter")) {
ch = idch.trim()
} else {
ch = await conn.newsletterMetadata("invite", channelUrl).then(data => data.id).catch(e => null)
}       
try {
const chtitle = await conn.newsletterMetadata(text.includes("@newsletter") ? "jid" : "invite", text.includes("@newsletter") ? ch : channelUrl).then(data => data.name).catch(e => null)
await conn.newsletterUpdateDescription(ch, description)
await conn.reply(m.chat, `${packname} ha modificado la descripción del canal *${chtitle}*`, m) 
} catch (e) {
reportError(e)
}
break

//const channels = _.values(conn.chats).filter(c => c.id && c.id.endsWith("@newsletter"))
        
}}
handler.command = /^(superinspect|inspect|revisar|inspeccionar|seguircanal|seguirch|followchannel|followch|noseguircanal|noseguirch|unfollowchannel|unfollowch|silenciarcanal|silenciarch|mutechannel|mutech|nosilenciarcanal|nosilenciarch|unmutechannel|unmutech|ppcanal|ppchannel|cambiarppcanal|cambiarppch|setppchannel|ppch|setppch|eliminarppcanal|eliminarppch|deleteppchannel|deleteppch|avisos?canal|updates?channel|updates?ch|reaccionescanal|reaccionesch|reactions?channel|reactionch|nuevonombrecanal|nuevonombrech|nuevonombrech|newnamechannel|newnamech|nuevadescc?anal|nuevadescripcioncanal|nuevadescripcionch|newdescc?hannel|newdescriptionchannel|newdescc?h)\b$/i
handler.register = true
export default handler 

function formatDate(n, locale = "es", includeTime = true) {
if (n > 1e12) {
n = Math.floor(n / 1000)  // Convertir de milisegundos a segundos
} else if (n < 1e10) {
n = Math.floor(n * 1000)  // Convertir de segundos a milisegundos
}
const date = new Date(n)
if (isNaN(date)) return "Fecha no válida"
// Formato de fecha: día/mes/año
const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' }
const formattedDate = date.toLocaleDateString(locale, optionsDate)
if (!includeTime) return formattedDate
// horas, minutos y segundos
const hours = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const seconds = String(date.getSeconds()).padStart(2, '0')
const period = hours < 12 ? 'AM' : 'PM'
const formattedTime = `${hours}:${minutes}:${seconds} ${period}`
return `${formattedDate}, ${formattedTime}`
}

function formatValue(key, value, preview) {
switch (key) {
case "subscribers":
return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "No hay suscriptores"
case "creation_time":
case "nameTime":
case "descriptionTime":
return formatDate(value)
case "description": 
case "name":
return value || "No hay información disponible"
case "state":
switch (value) {
case "ACTIVE": return "Activo"
case "GEOSUSPENDED": return "Suspendido por región"
case "SUSPENDED": return "Suspendido"
default: return "Desconocido"
}
case "reaction_codes":
switch (value) {
case "ALL": return "Todas las reacciones permitidas"
case "BASIC": return "Reacciones básicas permitidas"
case "NONE": return "No se permiten reacciones"
default: return "Desconocido"
}
case "verification":
switch (value) {
case "VERIFIED": return "Verificado"
case "UNVERIFIED": return "No verificado"
default: return "Desconocido"
}
case "mute":
switch (value) {
case "ON": return "Silenciado"
case "OFF": return "No silenciado"
case "UNDEFINED": return "Sin definir"
default: return "Desconocido"
}
case "view_role":
switch (value) {
case "ADMIN": return "Administrador"
case "OWNER": return "Propietario"
case "SUBSCRIBER": return "Suscriptor"
case "GUEST": return "Invitado"
default: return "Desconocido"
}
case "picture":
if (preview) {
return getUrlFromDirectPath(preview)
} else {
return "No hay imagen disponible"
}
default:
return value !== null && value !== undefined ? value.toString() : "No hay información disponible"
}}

function newsletterKey(key) {
return _.startCase(key.replace(/_/g, " "))
.replace("Id", "🆔 Identificador")
.replace("State", "📌 Estado")
.replace("Creation Time", "📅 Fecha de creación")
.replace("Name Time", "✏️ Fecha de modificación del nombre")
.replace("Name", "🏷️ Nombre")
.replace("Description Time", "📝 Fecha de modificación de la descripción")
.replace("Description", "📜 Descripción")
.replace("Invite", "📩 Invitación")
.replace("Handle", "👤 Alias")
.replace("Picture", "🖼️ Imagen")
.replace("Preview", "👀 Vista previa")
.replace("Reaction Codes", "😃 Reacciones")
.replace("Subscribers", "👥 Suscriptores")
.replace("Verification", "✅ Verificación")
.replace("Viewer Metadata", "🔍 Datos avanzados")
}

function processObject(obj, prefix = "", preview) {
let caption = ""
Object.keys(obj).forEach(key => {
const value = obj[key]
if (typeof value === "object" && value !== null) {
if (Object.keys(value).length > 0) {
const sectionName = newsletterKey(prefix + key)
caption += `\n*\`${sectionName}\`*\n`
caption += processObject(value, `${prefix}${key}_`)
}} else {
const shortKey = prefix ? prefix.split("_").pop() + "_" + key : key
const displayValue = formatValue(shortKey, value, preview)
const translatedKey = newsletterKey(shortKey)
caption += `- *${translatedKey}:*\n${displayValue}\n\n`
}})
return caption.trim()
}

