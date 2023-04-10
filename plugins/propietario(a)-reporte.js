let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙧𝙚𝙥𝙤𝙧𝙩𝙚*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona.*\n\n*𝙒𝙧𝙞𝙩𝙚 𝙩𝙝𝙚 𝙧𝙚𝙥𝙤𝙧𝙩*\n\n*𝙀𝙓𝘼𝙈𝙋𝙇𝙀:*\n*${usedPrefix + command} the command ${usedPrefix}owner it does not work.*`
if (text.length < 8) throw `${fg} ✨ *Mínimo 10 caracteres para hacer El Reporte.*\n\n✨ *Minimum 10 characters to make the Report.*`
if (text.length > 1000) throw `${fg} 😼 *Máximo 1000 caracteres para hacer El Reporte.*\n\n😼 *Maximum 1000 characters to make the Report.*`

let urs = m.sender.split('@')[0]
for (let i = 0; i < global.owner.length; i++) {
let ownerNumber = global.owner[i][0]

if (global.owner[i][2] === true) { 
let aa = ownerNumber + '@s.whatsapp.net'
let teks = `
💌 \`\`\`REPORTE\`\`\` 💌
*⎔ Número:*
*» Wa.me/${m.sender.split`@`[0]}*

*⎔ Usuario:*
*» @${urs + '@s.whatsapp.net'}*

*⎔ Mensaje:*
*» ${text}*`.trim()
await conn.reply(aa, m.quoted ? teks + m.quoted.text : teks, null, { mentions: [m.sender] })
}}
await m.reply(`╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n*El reporte ha sido enviado a mí Creadora. Tendrá una respuesta pronto. De ser Falso será Ignorado el reporte.*\n\n*The report has been sent to my Creator. You will have an answer soon. If false, the report will be ignored.*`)
}

handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
