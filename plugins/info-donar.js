let handler = async (m, { conn, usedPrefix, command }) => {
let pay = { contextInfo: { externalAdReply: { mediaUrl: paypal, mediaType: 'VIDEO', description: 'Donación', title: 'PayPal', body: packname, thumbnailUrl: img1, sourceUrl: paypal }}}
let media = './media/menus/Menu4paypal.jpg'  
let str = `
🌼 Se acepta apoyo voluntario por PayPal, si deseas apoyar de otra forma puedes donar un Número en Instagram para que el repositorio siga vigente, Gracias!!

◎ 𝗣𝗔𝗬𝗣𝗔𝗟
https://paypal.me/OficialGD`.trim()
  
let templateButtons = [ 
{index: 1, urlButton: {displayText: '💙 ＰＡＹＰＡＬ', url: paypal}},
{index: 2, urlButton: {displayText: '🧡 ＩＮＳＴＡＧＲＡＭ', url: ig}},
{index: 3, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { image: { url: img21 }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: '*◜🌹❤️ DONACIÓN VOLUNTARIA❤️🌹◞*', footer: str, templateButtons }, { quoted: pay})
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i 
export default handler
