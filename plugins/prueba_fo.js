let handler = async (m, {conn, text}) => {
let coger = `🥵 Acaban de coger a ${text}!🥵 
    
${text} ¡te han cogido! 😏

${m.sender.split('@')[0]}
●
█▄
█ ▄█▀█● ${m.mentionedJid.map((user)=>(user === m.sender) ? text : `+${user.split('@')[0]}`).join(', ')}
¡te han cogido! 😫🍆`.trim()
await conn.reply(m.chat, coger, m, { mentions: [m.sender, m.user]})
//m.reply(coger, null, {mentions: conn.parseMention(coger)});
}

handler.command = /^(coger|follar)$/i;
export default handler


