import { getUrlFromDirectPath } from "@whiskeysockets/baileys"
import _ from "lodash"

let handler = async (m, { conn, command, usedPrefix, args, text }) => {
const isCommand1 = /^(inspect2)$/i.test(command)
    
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {     
case isCommand1:
try { 
let thumb = gataMenu.getRandom()
try {
let res = text ? null : await conn.groupMetadata(m.chat)
if (res) {
let caption = `*Inspector de enlaces de grupo*\n- ${res.id || ""}\n*Título:* ${res.subject || ""}\n*Creado* por @${res.owner?.split("@")[0] || ""} en *${formatDate(1e3 * res.creation) || ""}*${res.subjectOwner ? `\n*Título cambiado* por @${res.subjectOwner?.split("@")[0]} en *${formatDate(1e3 * res.subjectTime)}*` : ""}${res.descOwner ? `\n*Descripción* por @${res.descOwner?.split("@")[0]} en *${formatDate(1e3 * res.descTime)}*` : ""}\n*Número de miembros:* ${res.size || ""}\n*Miembro superior:* ${res.participants ? "\n" + res.participants.slice(0, 5).map((user, i) => `${i + 1}. @${user.id?.split("@")[0]}${"superadmin" === user.admin ? " (superadmin)" : "admin" === user.admin ? " (admin)" : ""}`).join("\n").trim() : "No hay"}${res.participants?.length > 5 ? `\nY ${res.participants?.length - 5} otros miembros.` : ""}\n${res.desc ? `*Descripción:*\n${res.desc}` : "*No hay descripción*"}\n\n*Detalles completos del grupo*\n\n*Restringido:* ${res.restrict ? "Si" : "No"}\n*Anunciar:* ${res.announce ? "Si" : "No"}\n*Es comunidad:* ${res.isCommunity ? "Si" : "No"}\n*Es un anuncio de la comunidad:* ${res.isCommunityAnnounce ? "Si" : "No"}\n*Modo de Aprobación para Unirse:* ${res.joinApprovalMode ? "Si" : "No"}\n*Modo para agregar Miembros:* ${res.memberAddMode ? "Si" : "No"}\n*Duración:* ${void 0 !== res.ephemeralDuration ? res.ephemeralDuration + " segundos" : "desconocido"}`
let pp
try {
pp = await conn.profilePictureUrl(res?.id)
} catch (e) {
pp = thumb
}
if (caption) {
await conn.reply(m.chat, caption, m, {
contextInfo: {
mentionedJid: conn.parseMention(caption),
externalAdReply: {
title: "Ver enlace de grupo",
body: "",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: false,
thumbnailUrl: pp,
sourceUrl: ""
}}
})
}
} else {
const inviteUrl = text?.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:invite\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1]
const channelUrl = text?.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:channel\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1]
if (inviteUrl) {
let inviteInfo = await conn.groupGetInviteInfo(inviteUrl)
if (!inviteInfo) return m.reply("Group tidak ditemukan.")
let caption = `*Inspector de enlaces de grupo*\n- ${inviteInfo.id || ""}\n*Título:* ${inviteInfo.subject || ""}\n*Creado* por @${inviteInfo.owner?.split("@")[0] || ""} en *${formatDate(1e3 * inviteInfo.creation) || ""}*${inviteInfo.subjectOwner ? `\n*Título cambiado* por @${inviteInfo.subjectOwner?.split("@")[0]} en *${formatDate(1e3 * inviteInfo.subjectTime)}*` : ""}${inviteInfo.descOwner ? `\n*Descripción* por @${inviteInfo.descOwner?.split("@")[0]} en *${formatDate(1e3 * inviteInfo.descTime)}*` : ""}\n*Número de miembros:* ${inviteInfo.size || ""}\n*Miembro superior:* ${inviteInfo.participants ? "\n" + inviteInfo.participants.slice(0, 5).map((user, i) => `${i + 1}. @${user.id?.split("@")[0]}${"superadmin" === user.admin ? " (superadmin)" : "admin" === user.admin ? " (admin)" : ""}`).join("\n").trim() : "No hay"}${inviteInfo.participants?.length > 5 ? `\nY ${inviteInfo.participants?.length - 5} otros miembros.` : ""}\n${inviteInfo.desc ? `*Descripción:*\n${inviteInfo.desc}` : "*No hay descripción*"}\n\n*Detalles completos del grupo*\n\n*Restringido:* ${inviteInfo.restrict ? "Si" : "No"}\n*Anunciar:* ${inviteInfo.announce ? "Si" : "No"}\n*Es comunidad:* ${inviteInfo.isCommunity ? "Si" : "No"}\n*Es un anuncio de la comunidad:* ${inviteInfo.isCommunityAnnounce ? "Si" : "No"}\n*Modo de Aprobación para Unirse:* ${inviteInfo.joinApprovalMode ? "Si" : "No"}\n*Modo para agregar Miembros:* ${inviteInfo.memberAddMode ? "Si" : "No"}\n*Duración:* ${void 0 !== inviteInfo.ephemeralDuration ? inviteInfo.ephemeralDuration + " segundos" : "desconocido"}`
let pp
try {
pp = await conn.profilePictureUrl(inviteInfo?.id)
} catch (e) {
pp = thumb
}
if (caption) {
await conn.reply(m.chat, caption, m, {
contextInfo: {
mentionedJid: conn.parseMention(caption),
externalAdReply: {
title: "Ver enlace de grupo",
body: "",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: false,
thumbnailUrl: pp,
sourceUrl: ""
}}
})
}
} else if (channelUrl) {
let newsletterInfo = await conn.newsletterMetadata("invite", channelUrl)
if (!newsletterInfo) return m.reply("Canal no encontrado.")
let caption = "*Inspector de enlaces de Canales*\n"
caption += processObject(newsletterInfo)
let pp
try {
pp = getUrlFromDirectPath(newsletterInfo.preview)
console.log(pp)
} catch (e) {
pp = thumb
}
if (caption) {
await conn.sendMessage(m.chat, { text: caption, contextInfo: {
mentionedJid: conn.parseMention(caption),
externalAdReply: {
title: "Inspector de enlaces de Canales",
body: packname,
thumbnailUrl: pp,
sourceUrl: args[0],
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}} , { quoted: fkontak })
}
}}} catch (e) {
console.error(e)
await m.reply("Error.")
}} catch (e) {
reportError(e)
}
break
        
}}
handler.command = /^(inspect2)$/i
handler.register = true
export default handler 

function formatDate(n, locale = "id", includeTime = true) {
const date = new Date(n)
if (isNaN(date)) return "Fecha no válida"
// Formato de fecha: día/mes/año
const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' }
const formattedDate = date.toLocaleDateString(locale, optionsDate)
if (!includeTime) return formattedDate;
// Formato de hora: hora:minuto:segundos AM/PM
const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }
const formattedTime = date.toLocaleTimeString(locale, optionsTime)
return `${formattedDate}, ${formattedTime}`
}

function formatValue(key, value) {
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
case "ACTIVE": return "Activo";
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
default:
return value !== null && value !== undefined ? value.toString() : "No hay información disponible"
}}

function processObject(obj, prefix = "") {
let caption = ""
Object.keys(obj).forEach(key => {
const value = obj[key]
if (typeof value === "object" && value !== null) {
if (Object.keys(value).length > 0) {
const sectionName = _.startCase(prefix + key.replace(/_/g, " "))
.replace("Id", "ID")
.replace("State", "Estado")
.replace("Creation Time", "Fecha de creación")
.replace("Name Time", "Fecha de modificación del nombre")
.replace("Description Time", "Fecha de modificación de la descripción")
.replace("Invite", "Invitación")
.replace("Handle", "Alias")
.replace("Picture", "Imagen")
.replace("Preview", "Vista previa")
.replace("Reaction Codes", "Reacciones")
.replace("Subscribers", "Suscriptores")
.replace("Verification", "Verificación")
.replace("Viewer Metadata", "Datos avanzados")
caption += `\n*\`${sectionName}\`*\n`;
caption += processObject(value, `${prefix}${key}_`)
}} else {
const shortKey = prefix ? prefix.split("_").pop() + "_" + key : key
const displayValue = formatValue(shortKey, value)
caption += `- *${_.startCase(shortKey.replace(/_/g, " "))
.replace("Id", "ID")
.replace("State", "Estado")
.replace("Creation Time", "Fecha de creación")
.replace("Name Time", "Fecha de modificación del nombre")
.replace("Description Time", "Fecha de modificación de la descripción")
.replace("Invite", "Invitación")
.replace("Handle", "Alias")
.replace("Picture", "Imagen")
.replace("Preview", "Vista previa")
.replace("Reaction Codes", "Códigos de reacción")
.replace("Subscribers", "Suscriptores")
.replace("Verification", "Verificación")
.replace("Viewer Metadata", "Datos avanzados")
}:* ${displayValue}\n`
}})
return caption.trim()
}
