const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let handler = async (m, { conn, text }) => {
const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
  
if (!text) return m.reply('_⚠️😿 Ingresa enlaces de los grupos y el mensaje a promocionar_')
  
const enlaces = text.match(linkRegex)
if (!enlaces || enlaces.length === 0) return m.reply('_⚠️😿 No se encontraron enlaces de grupos válidos en el mensaje_')
  
const message = text.replace(linkRegex, '').trim();
if (message.length < 10) return m.reply('_⚠️😿 El mensaje de promoción debe contener al menos 10 letras_')

const linksWithQuotes = text.match(/['"](https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24})['"]/ig) || []
message = text.replace(/['"](https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24})['"]/ig, '').trim();
  
for (const link of links) {
if (linksWithQuotes.includes(link)) {
continue; // Ignorar los enlaces con comillas
}
const [_, code] = link.match(linkRegex) || []
  
try {
const res = await conn.groupAcceptInvite(code)
await delay(2000); // Esperar 4 segundos antes de continuar
      
await conn.sendMessage(res, { text: message }, { quoted: m });
await delay(4000) // Esperar 2 segundos antes de enviar el mensaje

// Dejar el grupo solo si el bot se unió durante esta iteración
if (!m.messageStubParameters || m.messageStubParameters[0] !== 30) {
await conn.groupLeave(res)
await delay(5000); // Esperar 6 segundos antes de repetir con otros enlaces
  
}} catch (error) {
console.error(error)
await conn.sendMessage(m.chat, { text: `Ocurrió un error al unirse o enviar el mensaje al grupo ${link}\n\nVerifique que el Grupo no tenga activada la opción de aprobar usuarios o que en el grupo todos puedan enviar mensaje` }, { quoted: m });
}} 
await m.reply('_Mensaje enviado a todos los grupos_')
}

handler.command = ['promocionar']
handler.owner = true
export default handler
