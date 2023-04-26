//NO BORRAR O CAMBIAR NOMBRE DEL ARCHIVO, DE LO CONTRAIO NO FUNCIONARÁ   
let handler = async (m, { conn, text, usedPrefix, command}) => {
let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
try{
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = lenguajeGB.smsPropdesban1(usedPrefix, command, bot)
if (!text && !m.quoted) return conn.reply(m.chat, bant, null, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
users = global.db.data.users
if (users[user].banned === false) conn.reply(m.chat, lenguajeGB.smsPropdesban2(number), null, { mentions: [user] }) 
users[user].banned = false
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, lenguajeGB.smsPropdesban3(), null, { mentions: [user] })   
await conn.reply(user, lenguajeGB.smsPropdesban4(number, usr), null, { mentions: [user, m.sender] })
}} catch (e) {
await conn.reply(m.chat, lenguajeGB.smsPropdesban5(usedPrefix, command, number), null, m)
console.log(e)
}}

handler.command = /^(desprohibir|unprohibit|desprivar|undeprive)$/i
handler.group = true
handler.botAdmin = true 
handler.register = true
handler.admin = true
export default handler
