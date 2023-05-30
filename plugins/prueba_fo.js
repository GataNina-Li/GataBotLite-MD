let handler = async (m, { conn, text }) => {
let cometido
cometido = `@${m.sender.split('@')[0]}`

if (text.length >= 1) {
//text = text.slice(0).join(" ")  
} else if (m.quoted && m.quoted.sender) {
text = m.quoted.sender
} else if (m.quoted && m.quoted.fromMe) {
text = `${text.split('@')[0]}` //`${m.mentionedJid.map((user)=>(user === m.sender) ? text : `${user.split('@')[0]}`).join(', ')}` //m.sender
}
  

let coger = `🥵 *Acaban de coger a ${text}* 🥵 

*${text} ¡te han cogido!* 😏

*${cometido}*
●
█▄
█ ▄█▀█● *${text}*
*¡Te han cogido!* 😫🍆`.trim()

await conn.reply(m.chat, coger, m, { mentions: [m.sender, text, ...m.mentionedJid] })
}

handler.command = /^(coger|follar|prueba34)$/i
export default handler
