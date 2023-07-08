import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, command, usedPrefix, args, text }) => {
//let user = global.db.data.users[m.sender] 
//if (args[0] == 'es'){
//user.languageUser = 'es'
//return m.reply('*Exito*')
//} else {
//user.languageUser = 'en'
//await m.reply('*Error*')
//await console.log(user.languageUser)
//}
const phoneNumber = '+59894808483'
const pn = new PhoneNumber(phoneNumber)
const country = pn.getRegionCode()

m.reply('País: ', country)  
}
handler.command = /^(prueba22)$/i
export default handler
