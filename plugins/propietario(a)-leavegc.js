let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, lenguajeGB.smsLeave()) 
await conn.groupLeave(id)}
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.owner = true
export default handler
