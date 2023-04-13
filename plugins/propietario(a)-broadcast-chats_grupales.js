import fetch from 'node-fetch'
let handler = async (m, { conn, text, groupMetadata, participants, usedPrefix }) => {
let cc2 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks2 = text ? text : cc2.text  
let d = new Date(new Date + 3600000)
let locale = lenguajeGB.lenguaje()
let dia = d.toLocaleDateString(locale, { weekday: 'long' })
let fecha = d.toLocaleDateString(lenguajeGB.lenguaje(), { day: 'numeric', month: 'numeric', year: 'numeric' })
let mes = d.toLocaleDateString(lenguajeGB.lenguaje(), { month: 'long' })
let año = d.toLocaleDateString(lenguajeGB.lenguaje(), { year: 'numeric' })
let tiempo = d.toLocaleString('es-CO', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
let groups = Object.keys(await conn.groupFetchAllParticipating())
await m.reply('*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*')
for (let id of groups) {  
let infoGP = `✅ 𝗖𝗢𝗠𝗨𝗡𝗜𝗖𝗔𝗗𝗢 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 ✅
${String.fromCharCode(8206).repeat(850)}
${dia}, ${mes} ${año} || ${fecha} || ${tiempo}\n\n`  
await conn.reply(id, infoGP + teks2, m)         
}
await m.reply(`✅ *El mensaje fue enviado a ${groups.length} Chats Grupales*\n\n✅ *The message was sent to ${groups.length} Groups Chats*`)
/*await m.reply('*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*')
await enviarMensajeConRetraso(conn, groups, teks2)
async function enviarMensajeConRetraso(conn, grupos, mensaje) {
for (let id of grupos) {  
let infoGP = `✅ 𝗖𝗢𝗠𝗨𝗡𝗜𝗖𝗔𝗗𝗢 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 ✅
${String.fromCharCode(8206).repeat(850)}
${dia}, ${mes} ${año} || ${fecha} || ${tiempo}\n\n`  
await conn.reply(id, infoGP + mensaje, m);
await new Promise(resolve => setTimeout(resolve, 2000))
}
await m.reply(`✅ *El mensaje fue enviado a ${grupos.length} Chats Grupales*\n\n✅ *The message was sent to ${grupos.length} Groups Chats*`)
}*/
}
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
export default handler
