let handler = async (m, { conn, command, usedPrefix, args, text }) => {
let userPri = global.db.data.users[m.sender]
let idioma = args[0]  
userPri.languageUser = idioma
if (userPri.languageUser == idioma) {
return m.reply('*Exito*')
} else {
return m.reply('*Error*')
}
  
}
handler.command = /^(prueba22)$/i
export default handler
