let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn, participants, groupMetadata }) {
	
let chat = global.db.data.chats[m.chat] 
let usuario = `@${m.sender.split`@`[0]}`
let inf = lenguajeGB['smsAvisoIIG']()
	
if (!m.messageStubType || !m.isGroup || !chat.detect) return
const botIsAdminCommunity = groupMetadata.participants.some(p => p.id === conn.user.jid && (p.admin === 'admin' || p.admin === 'superadmin'))

if (m.messageStubType === 21) { // Anunciar nuevo nombre del grupo
await conn.sendMessage(m.chat, { text: lenguajeGB.smsAutodetec1(inf, usuario, m), mentions: [m.sender] })   
  
} else if (m.messageStubType === 22) { // Nueva foto del grupo
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => gataMenu)
await conn.sendMessage(m.chat, { image: { url: pp }, caption: lenguajeGB.smsAutodetec2(inf, usuario, groupMetadata), mentions: [m.sender] })

} else if (m.messageStubType === 23) { // Nuevo enlace del grupo
await conn.sendMessage(m.chat, { text: lenguajeGB.smsAutodetec4(inf, groupMetadata, usuario), mentions: [m.sender] })    

} else if (m.messageStubType === 24) { // Detectar una nueva descripción 
let mensaje = `📝 *La descripción de este chat ha sido actualizada. La nueva descripción es:*\n\n${m.messageStubParameters[0]}`
await conn.sendMessage(m.chat, { text: mensaje, mentions: [m.sender] })

} else if (m.messageStubType === 25) { // Permitir o no configurar el grupo [on/off]
await conn.sendMessage(m.chat, { text: lenguajeGB.smsAutodetec3(inf, usuario, m, groupMetadata), mentions: [m.sender] })  
	
} else if (m.messageStubType === 26) { // Cerrar o abrir grupo [on/off]
await conn.sendMessage(m.chat, { text: lenguajeGB.smsAutodetec5(inf, groupMetadata, m, usuario), mentions: [m.sender] })  

} else if (m.messageStubType == 29) { // Detectar nuevo admin
await conn.sendMessage(m.chat, { text: lenguajeGB.smsAutodetec6(inf, m, groupMetadata, usuario), mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }) 

} else if (m.messageStubType === 30) { // Detectar revocación de admin
await conn.sendMessage(m.chat, { text: lenguajeGB.smsAutodetec7(inf, m, groupMetadata, usuario), mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }) 

} else if (m.messageStubType === 145) { // Aprobación de usuarios [on/off]
let status = m.messageStubParameters[0] === 'on' ? 'activado' : 'desactivado';
let mensaje = `🔔 *Modo de aprobación para unirse al grupo ha sido ${status}.*`
await conn.sendMessage(m.chat, { text: mensaje, mentions: [m.sender] })

} else if (m.messageStubType === 171) { // Agregar nuevos usuarios al grupo o nuevos usuarios a la comunidad
let all_member_add = m.messageStubParameters[0] === 'all_member_add' ? "✅ *Ahora todos pueden añadir usuarios.*" : "⚠ *Ahora solo los administradores pueden añadir usuarios.*"
await conn.sendMessage(m.chat, { text: all_member_add, mentions: [m.sender] }) 

} else if (m.messageStubType === 172 && botIsAdminCommunity) { // Unirse mediante enlace o vinculación de grupo con la comunidad
let usuario = m.messageStubParameters[0]
let metodo = m.messageStubParameters[2] === 'invite_link' ? 'un enlace de invitación' : 'un grupo vinculado a la comunidad'
let mensaje = `🚪 @${usuario.split('@')[0]} ha solicitado unirse mediante ${metodo}.`
await conn.sendMessage(m.chat, { text: mensaje, mentions: [usuario] })
if (!chat.antifake) {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [usuario], 'approve')
await conn.sendMessage(m.chat, { text: `Solicitud de ingreso de @${usuario.split('@')[0]} aprobada automáticamente ya que el anti fake está desactivado.`, mentions: [usuario] })
} catch (error) {
console.error(`Error al aprobar la solicitud de @${usuario.split('@')[0]}: `, error)
}}

} else {
if (m.messageStubType === 2) return
console.log({ messageStubType: m.messageStubType, messageStubParameters: m.messageStubParameters, type: WAMessageStubType[m.messageStubType] })
}}
