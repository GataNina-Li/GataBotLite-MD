let handler = async (m, { conn, command }) => {
let media = './media/menus/Menu4paypal.jpg'  
let str = `
🌼 *_Se acepta apoyo voluntario por PayPal, si deseas apoyar de otra forma puedes donar un Número en Instagram para que el repositorio siga vigente, Gracias!!_

◎ *PAYPAL*
*_https://paypal.me/OficialGD_*`.trim()
  
//await conn.sendButton(m.chat, lenguajeGB.smsOfc1(), str, media, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)
let templateButtons = [ 
{index: 1, urlButton: {displayText: '❤️ 🅖🅘🅣🅗🅤🅑', url: md}},
{index: 2, urlButton: {displayText: '💚 🅘🅝🅢🅣🅐🅖🅡🅐🅜', url: ig}},
{index: 3, quickReplyButton: {displayText: 'INFOBOT', id: '#infobot'}}
]
await conn.sendMessage(m.chat, { video: { url: img21 }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: '*◜🌹❤️ DONACIÓN VOLUNTARIA❤️🌹◞*', footer: str, templateButtons }, { quoted: m})
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i 
export default handler
