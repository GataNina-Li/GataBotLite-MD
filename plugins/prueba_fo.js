let handler = async (m, { conn, text, usedPrefix, command }) => { 
let cometido
cometido = `@${m.sender.split('@')[0]}`

if(!text && !m.quoted) return conn.reply(m.chat, `*Etiquete al usuario o responda al mensaje del usuario usando ${usedPrefix + command}*`, m)
if (text.length >= 1) {
} else if (m.quoted && m.quoted.sender) {
text = `@${m.quoted.sender.split('@')[0].replace('@', '')}`
} else if (m.quoted && m.quoted.fromMe) {
if (text.includes('@') && m.quoted && m.quoted.fromMe) {
text = `${m.mentionedJid.map((user)=>(user === m.sender) ? text.replace('@', '') : `${user.split('@')[0].replace('@', '')}`).join(', ')}`
else {
text = `@${m.quoted.sender.split('@')[0].replace('@', '')}`  
}}
text = text.match(/[\d@]+/g).join('')
  
let coger = `🥵 *Acaban de coger a ${text}* 🥵 

*${text} ¡te han cogido!* 😏

*${cometido}*
●
█▄
█ ▄█▀█● *${text}*
*¡Te han cogido!* 😫🍆`.trim()

await conn.reply(m.chat, coger, m, { mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net'] })
}

handler.command = /^(coger|follar|prueba34)$/i
export default handler
