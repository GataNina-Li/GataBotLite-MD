let handler = async (m, { conn, text }) => {
  let cometido, victima
  cometido = `@${m.sender.split('@')[0]}`

  if (text.length >= 1) {
  //text = text.slice(0).join(" ")  
} else if (m.quoted && m.quoted.sender) {
    victima = m.quoted.sender
    text = m.quoted.sender
  } else if (m.quoted && m.quoted.fromMe) {
    victima = `${m.mentionedJid.map((user)=>(user === m.sender) ? text : `@${user.split('@')[0]}`).join(', ')}` //m.sender
    text = `${m.mentionedJid.map((user)=>(user === m.sender) ? text : `@${user.split('@')[0]}`).join(', ')}` //m.sender
  }
  

  let coger = `🥵 *Acaban de coger a ${m.quoted && m.quoted.fromMe ? `@${text.split('@')[0]}` : text}* 🥵 

*${m.quoted && m.quoted.fromMe ? `@${text.split('@')[0]}` : text} ¡te han cogido!* 😏

*${cometido}*
●
█▄
█ ▄█▀█● *${m.quoted && m.quoted.fromMe ? `@${victima.split('@')[0]}` : victima}*
*¡Te han cogido!* 😫🍆`.trim();

  await conn.reply(m.chat, coger, m, { mentions: [...m.mentionedJid] });
};

handler.command = /^(coger|follar|prueba34)$/i;
export default handler;


/*let handler = async (m, {conn, text}) => {
let cometido, victima
cometido = `@${m.sender.split('@')[0]}`
victima = `${m.mentionedJid.map((user)=>(user === m.sender) ? text : `${user.split('@')[0]}`).join(', ')}`

if (text.length >= 1) {
text = text.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
victima = m.quoted.text
}
 
let coger = `🥵 *Acaban de coger a ${text}* 🥵 
    
*${text} ¡te han cogido!* 😏

*${cometido}*
●
█▄
█ ▄█▀█● @${victima}
*¡Te han cogido!* 😫🍆`.trim()
await conn.reply(m.chat, coger, m, { mentions: [m.sender, victima + '@s.whatsapp.net', text + '@s.whatsapp.net']})
//m.reply(coger, null, {mentions: conn.parseMention(coger)});
}

handler.command = /^(coger|follar|prueba34)$/i;
export default handler*/


