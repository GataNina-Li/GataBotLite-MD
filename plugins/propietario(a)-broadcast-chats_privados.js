let handler = async (m, { conn, text }) => {
let cc3 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks3 = text ? text : cc3.text  
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
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
let time = (end - start) / 1000
if (time >= 60) {
time = (time / 60).toFixed(2) + ' minutos'
} else {
time = time.toFixed(2) + ' segundos'
}
await m.reply(`✅ *EL MENSAJE FUE ENVIADO A ${totalPri} CHAT(S) PRIVADO(S)*\n\nTiempo total de envío: ${time}`)
}

handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.owner = true

export default handler

  
