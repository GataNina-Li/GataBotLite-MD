import * as baileys from '@adiwajshing/baileys'
const grupo = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4]

let handler = async (m, { conn, usedPrefix , command }) => { 

let str = `
*◎⇢ ◜🌺 GRUPOS OFICIALES 🌺◞*
⭔ ${grupo[0]}

⭔ ${grupo[1]}

⭔ ${grupo[2]}

⭔ ${grupo[3]}

⭔ ${grupo[4]}

⭔ ${grupo[5]}


*◎⇢ ◜🌸 COLABORACIÓN 🌸◞*
⭔ ${grupo[6]}

⭔ ${grupo[7]}

⭔ ${grupo[8]}`.trim()
  
await conn.sendButton(m.chat, wm, str, img, [[lenguajeGB.smsConMenu(), usedPrefix  + 'menu']], m)
}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupsgb$/i
export default handler
