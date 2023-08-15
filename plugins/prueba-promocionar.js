const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let handler = async (m, { conn, text, groupMetadata }) => {
const linkRegex = /https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24}/ig;

if (!text) return m.reply('_⚠️😿 Ingresa enlaces de los grupos y el mensaje a promocionar_')

const enlaces = text.match(linkRegex)
if (!enlaces || enlaces.length === 0) return m.reply('_⚠️😿 No se encontraron enlaces de grupos válidos en el mensaje_')

const message = text.replace(linkRegex, '').trim()
if (message.length < 10) return m.reply('_⚠️😿 El mensaje de promoción debe contener al menos 10 letras_')
  
const links = text.match(linkRegex)
const mensaje = text.replace(linkRegex, '').trim()
const modificarMensaje = mensaje.replace(/['"]/g, '') // eliminar comillas

try {
for (const link of links) {
const groupId = link.match(/https:\/\/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i)[1]

// Verificar si ya hay una solicitud pendiente de unión
//const pendingRequests = await conn.groupAcceptInvite(groupId)
//const existingRequest = pendingRequests.find(req => req.id === groupId)
//if (existingRequest) {
//m.reply(`Ya hay una solicitud de unión pendiente para el grupo ${groupId}`)
//continue // Saltar a la siguiente iteración del bucle
//}

// Intentar unirse al grupo
//try {
await conn.groupAcceptInvite(groupId)
await delay(2000) // 2 segundos
//} catch (error) {
if (error.message.includes("conflict")) {
// Ya hay una solicitud pendiente, omitir el proceso de unirse
await conn.sendMessage(groupId, { text: `Solicitud de unión pendiente para el grupo ${groupId}` }, { quoted: m })
continue // Saltar a la siguiente iteración del bucle
}
//return error // Lanzar otro error 
//}

await conn.sendMessage(groupId, { text: modificarMensaje }, { quoted: m })
await delay(2000); // enviar mensaje en 2 segundos

// Dejar el grupo solo si el bot se unió durante esta iteración
if (!m.messageStubParameters || m.messageStubParameters[0] !== 30) {
await conn.groupLeave(groupId)
await delay(5000) // espera 5 segundos antes de repetir con otros enlaces
}}
await m.reply('_Mensaje enviado a todos los grupos_');
} catch (e) {
console.error(e)
await m.reply('_Ocurrió un error al promocionar en los grupos_')
}}

handler.command = ['promocionar']
handler.owner = true

export default handler
