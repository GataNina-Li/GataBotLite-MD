import { randomBytes } from 'crypto'
let handler = async (m, { conn, text }) => {
let cc3 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks3 = text ? text : cc3.text  
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
await conn.reply(m.chat, "*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*", m)
let start = new Date().getTime() 
for (let id of chats) {
await new Promise(resolve => setTimeout(resolve, 3000)) 
//await conn.reply(id, `✅ *COMUNICADO OFICIAL* ✅\n\n` + teks3, m)
await conn.copyNForward(id, conn.cMod(m.chat, cc3, /bc|broadcast/i.test(teks3) ? teks3 : teks3 + '\n' + String.fromCharCode(8206).repeat(850) + '「 ' + packname + ' All Chat Broadcast 」\n' + randomID(32)), true).catch(_ => _)
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

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
