import { createHash } from 'crypto'
let handler = async function (m, { args, usedPrefix, command }) {
let idreg = `${lenguajeGB.lenguaje() == 'es' ? 'idregistro' : 'idregister'}`
let regbot = `${lenguajeGB.lenguaje() == 'es' ? 'verificar nombre.edad' : 'verify name.age'}`
if (!args[0]) return m.reply(lenguajeGB.smsUnreg1(usedPrefix, idreg))
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
if (args[0] !== sn) return m.reply(lenguajeGB.smsUnreg2(usedPrefix, idreg))
user.registered = false
m.reply(lenguajeGB.smsUnreg3(usedPrefix, regbot))
}
handler.command = /^anulareg|unreg(ister)?$/i
handler.register = true
export default handler
