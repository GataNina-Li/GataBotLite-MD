/*let totalPri = 0
let handler = async (m, { conn, text }) => {
let cc3 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks3 = text ? text : cc3.text  
let chats = Object.keys(global.db.data.users).filter(user => user.endsWith('@s.whatsapp.net'))
  
await conn.reply(m.chat, "*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*", m)
let start = new Date().getTime()
for (let user of chats) {
await new Promise(resolve => setTimeout(resolve, 2000)) // 2 segundos
await conn.reply(user, `✅ *COMUNICADO OFICIAL* ✅\n\n` + teks3, null)
totalPri++
if (totalPri >= 1000) { 
break
}} 
  
let end = new Date().getTime() 
let time = Math.floor((end - start) / 1000)
if (time >= 60) {
let minutes = Math.floor(time / 60)
let seconds = time % 60
time = `${minutes} minutos y ${seconds} segundos`
} else {
time = `${time} segundos`
}
await m.reply(`✅ *EL MENSAJE FUE ENVIADO A ${totalPri} CHAT(S) PRIVADO(S)*\n\nTiempo total de envío: ${time}${totalPri >= 1000 ? '\n\n*NO SE ENVIARON A TODOS PARA EVITAR SATURACIÓN*' : ''}`)
}

handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.owner = true

export default handler*/

/*let handler = async (m, { conn, text }) => {
let cc4 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks4 = text ? text : cc4.text  
let groups2 = Object.keys(await conn.groupFetchAllParticipating())
let chats2 = Object.keys(global.db.data.users).filter(user => user.endsWith('@s.whatsapp.net'))
await conn.reply(m.chat, "*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*", m)
let start = new Date().getTime()
let totalPri2 = 0
for (let group of groups2) {
await conn.sendMessage(group, `✅ *COMUNICADO OFICIAL* ✅\n\n` + teks4, null)
}
for (let user of chats2) {
await new Promise(resolve => setTimeout(resolve, 2000)) // 2 segundos
await conn.sendMessage(user, `✅ *COMUNICADO OFICIAL* ✅\n\n` + teks4, null)
totalPri2++
if (totalPri2 >= 1000) { 
break
}} 
  
let end2 = new Date().getTime()
let totalPri2 = chats2.length
let totalGroups2 = groups2.length
let total2 = totalPri2 + totalGroups2
let time2 = Math.floor((end2 - start) / 1000)
  
if (time2 >= 60) {
let minutes = Math.floor(time2 / 60)
let seconds = time2 % 60
time2 = `${minutes} minutos y ${seconds} segundos`
} else {
time2 = `${time2} segundos`
}
  
await m.reply(`✅ *EL MENSAJE FUE ENVIADO A
\`\`\`PRIVADO >> ${totalPri2}\`\`\`
\`\`\`GRUPO >> ${totalGroups2}\`\`\`
\`\`\`TOTAL >> ${total2}\`\`\`\n\nTiempo total de envío: ${time2}${totalPri2 >= 1000 ? '\n\n*NO SE ENVIARON A TODOS LOS CHATS PRIVADOS PARA EVITAR SATURACIÓN*' : ''}`)
}

handler.command = /^(broadcast(chats?|groups?)?|bc(chats?|groups?)?)$/i
handler.owner = true

export default handler*/

