const grupo = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4, nnnttt5]

let handler = async (m, { conn, usedPrefix , command }) => { 

let str = `
*◎⇢ ◜🌺 GRUPOS OFICIALES 🌺◞*
_⭔ ${grupo[0]}_

_⭔ ${grupo[1]}_

_⭔ ${grupo[2]}_

_⭔ ${grupo[3]}_

_⭔ ${grupo[4]}_

_⭔ ${grupo[5]}_


*◎⇢ ◜🌸 COLABORACIÓN 🌸◞*
_⭔ ${grupo[6]}_

_⭔ ${grupo[7]}_

_⭔ ${grupo[8]}_

_⭔ ${grupo[9]}_`.trim()
  
await conn.sendButton(m.chat, wm, str, img, [[lenguajeGB.smsConMenu(), usedPrefix  + 'menu']], m)
}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupsgb$/i
export default handler
