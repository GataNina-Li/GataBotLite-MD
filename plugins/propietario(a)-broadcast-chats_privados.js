import { getAllChats } from '@adiwajshing/baileys'
let handler = async (m, { conn, text }) => {
let cc3 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks3 = text ? text : cc3.text  
const chats = (await getAllChats(conn, true))
.filter(chat => chat.jid.endsWith('@s.whatsapp.net'))
.map(chat => chat.jid)
//let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
await conn.reply(m.chat, "*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*", m)
/*for (let id of chats) {
await new Promise(resolve => setTimeout(resolve, 2000)) 
await m.reply(`✅ *COMUNICADO OFICIAL* ✅\n\n` + teks3)      
}
let totalPri = chats.length
await m.reply(`✅ *EL MENSAJE FUE ENVIADO A ${totalPri} CHAT(S) PRIVADO(S)*`)*/
let start = new Date().getTime() 
for (let id of chats) {
await new Promise(resolve => setTimeout(resolve, 2000)) 
await conn.reply(id, `✅ *COMUNICADO OFICIAL* ✅\n\n` + teks3, m)
}
let end = new Date().getTime() 
let totalPri = chats.length
let time = Math.floor((end - start) / 1000)
if (time >= 60) {
let minutes = Math.floor(time / 60)
let seconds = time % 60
time = `${minutes} minutos y ${seconds} segundos`
} else {
time = `${time} segundos`
}

await m.reply(`✅ *EL MENSAJE FUE ENVIADO A ${totalPri} CHAT(S) PRIVADO(S)*\n\nTiempo total de envío: ${time}`)
}

handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.owner = true

export default handler

  
