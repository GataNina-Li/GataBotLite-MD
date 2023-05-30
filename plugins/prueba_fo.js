let handler = async (m, {conn, text}) => {
let cometido, victima
cometido = `@${m.sender.split('@')[0]}`
victima = `${m.mentionedJid.map((user)=>(user === m.sender) ? text : `${user.split('@')[0]}`).join(', ')}`
let coger = `🥵 Acaban de coger a ${text} !🥵 
    
${text} ¡te han cogido! 😏

${cometido}
●
█▄
█ ▄█▀█● @${victima}
¡te han cogido! 😫🍆`.trim()
await conn.reply(m.chat, coger, m, { mentions: [m.sender, victima + '@s.whatsapp.net', text + '@s.whatsapp.net']})
//m.reply(coger, null, {mentions: conn.parseMention(coger)});
}

handler.command = /^(coger|follar|prueba34)$/i;
export default handler


