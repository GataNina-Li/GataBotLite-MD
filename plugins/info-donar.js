let handler = async (m, { conn, usedPrefix, command }) => {
let media = './media/menus/Menu4paypal.jpg'  
let str = `
🌼 Se acepta apoyo voluntario por PayPal, si deseas apoyar de otra forma puedes donar un Número en Instagram para que el repositorio siga vigente, Gracias!!

◎ *PAYPAL*
*_https://paypal.me/OficialGD_*`.trim()
  
//await conn.sendButton(m.chat, lenguajeGB.smsOfc1(), str, media, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)
let templateButtons = [ 
{index: 1, urlButton: {displayText: '💙 ＰＡＹＰＡＬ', url: paypal}},
{index: 2, urlButton: {displayText: '🧡 ＩＮＳＴＡＧＲＡＭ', url: ig}},
{index: 3, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { image: { url: img21 }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: '*◜🌹❤️ DONACIÓN VOLUNTARIA❤️🌹◞*', footer: str, templateButtons }, { quoted: m})
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i 
export default handler
