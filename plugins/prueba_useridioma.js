let handler = async (m, { conn, command, usedPrefix, args, text }) => {
let userPri = global.db.data.users[m.sender] 
if (userPri.languageUser == 'es') {
userPri.languageUser = 'es'
return m.reply('*Exito*')
} else {
userPri.languageUser = 'en'
return m.reply('*Error*')
}
  
}
handler.command = /^(prueba22)$/i
export default handler
