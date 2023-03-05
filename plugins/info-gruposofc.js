import * as baileys from '@adiwajshing/baileys'

const grupo = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4]
let handler = async (m, { conn, command }) => { 	

let [, code1] = grupo[0].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let [, code2] = grupo[1].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let [, code3] = grupo[2].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let [, code4] = grupo[3].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let [, code5] = grupo[4].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let [, code6] = grupo[5].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let [, code7] = grupo[6].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let [, code8] = grupo[7].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let [, code9] = grupo[8].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []

let res1 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code1 } }] })
let res2 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code2 } }] })
let res3 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code3 } }] })
let res4 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code4 } }] })
let res5 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code5 } }] })
let res6 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code6 } }] })
let res7 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code7 } }] })
let res8 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code8 } }] })
let res9 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code9 } }] })

let data1 = extractGroupMetadata(res1)
let data2 = extractGroupMetadata(res2)
let data3 = extractGroupMetadata(res3)
let data4 = extractGroupMetadata(res4)
let data5 = extractGroupMetadata(res5)
let data6 = extractGroupMetadata(res6)
let data7 = extractGroupMetadata(res7)
let data8 = extractGroupMetadata(res8)
let data9 = extractGroupMetadata(res9)

let str = `
*◜🌺 GRUPOS OFICIALES 🌺◞*

◎⇢ ${data1.subject}
┆ ⭔ *id* ${data1.id}
┆ ⭔ *creado* ${data1.creation}
┆ ⭔ *owner* ${data1.owner}
◎⇢ ${grupo[0]}

◎⇢ ${data2.subject}
┆ ⭔ *id* ${data2.id}
┆ ⭔ *creado* ${data2.creation}
┆ ⭔ *owner* ${data2.owner}
◎⇢ ${grupo[1]}

◎⇢ ${data3.subject}
┆ ⭔ *id* ${data3.id}
┆ ⭔ *creado* ${data3.creation}
┆ ⭔ *owner* ${data3.owner}
◎⇢ ${grupo[2]}

◎⇢ ${data4.subject}
┆ ⭔ *id* ${data4.id}
┆ ⭔ *creado* ${data4.creation}
┆ ⭔ *owner* ${data4.owner}
◎⇢ ${grupo[3]}

◎⇢ ${data5.subject}
┆ ⭔ *id* ${data5.id}
┆ ⭔ *creado* ${data5.creation}
┆ ⭔ *owner* ${data5.owner}
◎⇢ ${grupo[4]}

◎⇢ ${data6.subject}
┆ ⭔ *id* ${data6.id}
┆ ⭔ *creado* ${data6.creation}
┆ ⭔ *owner* ${data6.owner}
◎⇢ ${grupo[5]}

*◜🌸 COLABORACIÓN 🌸◞*

◎⇢ ${data7.subject}
┆ ⭔ *id* ${data7.id}
┆ ⭔ *creado* ${data7.creation}
┆ ⭔ *owner* ${data7.owner}
◎⇢ ${grupo[6]}

◎⇢ ${data8.subject}
┆ ⭔ *id* ${data8.id}
┆ ⭔ *creado* ${data8.creation}
┆ ⭔ *owner* ${data8.owner}
◎⇢ ${grupo[7]}

◎⇢ ${data9.subject}
┆ ⭔ *id* ${data9.id}
┆ ⭔ *creado* ${data9.creation}
┆ ⭔ *owner* ${data9.owner}
◎⇢ ${grupo[8]}

`.trim()
  
conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, null, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupsgb$/i
export default handler
