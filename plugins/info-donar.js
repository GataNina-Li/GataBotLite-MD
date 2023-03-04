let handler = async (m, { conn, usedPrefix, command }) => {
try { 
let donar = lenguajeGB.smsMensajeDonar().trim()
let templateButtons = [ 
{index: 1, urlButton: {displayText: '💙 ＰＡＹＰＡＬ', url: paypal}},
{index: 2, urlButton: {displayText: '💚 ＩＮＳＴＡＧＲＡＭ', url: ig}},
{index: 3, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { image: { url: img21 }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: lenguajeGB.smsTituloDonar(), footer: donar, templateButtons }, { quoted: m})
await conn.sendMessage(m.sender, { text: lenguajeGB.smsPrivadoDonar(), templateButtons: [{index: 1, urlButton: {displayText: '💜 ＧＩＴＨＵＢ', url: paypal}}, {index: 2, urlButton: {displayText: packname, url: 'https://www.whatsapp.com/otp/copy/' + md}}, ], footer: wm })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating|aportar$/i 
export default handler
