let handler = async (m, { conn, usedPrefix, command }) => {
let str = `
🌼 Se acepta apoyo voluntario por PayPal, si deseas apoyar de otra forma puedes donar un Número en Instagram para que el repositorio siga vigente, Gracias!!

🌺 Siempre podrás apoyar siguiendo las Cuentas Oficiales y Compartiendo el trabajo logrado de ${packname}`.trim()
  
let templateButtons = [ 
{index: 1, urlButton: {displayText: '💙 ＰＡＹＰＡＬ', url: paypal}},
{index: 2, urlButton: {displayText: '💚 ＩＮＳＴＡＧＲＡＭ', url: ig}},
{index: 3, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { image: { url: img21 }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: '*◜🌹❤️ DONACIÓN VOLUNTARIA ❤️🌹◞*', footer: str, templateButtons }, { quoted: m})
await conn.sendMessage(m.sender, { text: '🍄 *_También puedes compartir lo siguiente como Muestra de Apoyo_*\n*_Califica el repositorio con una 🌟 Gracias!!_*', templateButtons: [{index: 1, urlButton: {displayText: '💜 ＧＩＴＨＵＢ', url: paypal}}, {index: 2, urlButton: {displayText: packname, url: 'https://www.whatsapp.com/otp/copy/' + md}}, ], footer: wm })
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating|aportar$/i 
export default handler
