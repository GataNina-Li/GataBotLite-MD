let handler = async (m, { conn, command, usedPrefix, args, text }) => {
let user = global.db.data.users[m.sender] 
if (args[0] == 'es'){
user.languageUser += 'es'
return m.reply('*Exito*')
} else {
user.languageUser += 'en'
await m.reply('*Error*')
await console.log(user.languageUser)
}
  
}
handler.command = /^(prueba22)$/i
export default handler
