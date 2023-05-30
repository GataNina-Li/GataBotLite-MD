let handler = async (m, { conn, text }) => {
let cometido, text2
cometido = `@${m.sender.split('@')[0]}`

if (text.length >= 1) {
//text = text.slice(0).join(" ")  
} else if (m.quoted && m.quoted.sender) {
text2 = `@${m.quoted.sender.split('@')[0]}`
} else if (m.quoted && m.quoted.fromMe) {
text2 = `${text.split('@')[0]}` //`${m.mentionedJid.map((user)=>(user === m.sender) ? text : `${user.split('@')[0]}`).join(', ')}` //m.sender
}
  

let coger = `🥵 *Acaban de coger a ${text2}* 🥵 

*${text2} ¡te han cogido!* 😏

*${cometido}*
●
█▄
█ ▄█▀█● *${text2}*
*¡Te han cogido!* 😫🍆`.trim()

await conn.reply(m.chat, coger, m, { mentions: [m.sender, m.quoted.sender, text, text2, ...m.mentionedJid] })
}

handler.command = /^(coger|follar|prueba34)$/i
export default handler
