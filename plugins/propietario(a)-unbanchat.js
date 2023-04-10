//NO BORRAR O CAMBIAR NOMBRE DEL ARCHIVO, DE LO CONTRAIO NO FUNCIONARÁ  
let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return m.reply(lenguajeGB.smsUnbanCH1())
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return m.reply(lenguajeGB.smsUnbanCH2())
chat.isBanned = false
await conn.reply(m.chat, lenguajeGB.smsUnbanCH3(), m)
}
handler.command = /^unbanchat|desbanearchat|desbanchat$/i
handler.owner = true

export default handler
