import * as baileys from '@adiwajshing/baileys'

const grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4]
//const grupo = nna
let handler = async (m, { conn, command }) => { 	

//let [, code] = grupo.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
//let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] })
//let data = extractGroupMetadata(res)

//let groups = Object.keys(grupos).map((v, index) => {
//let [, code] = grupos[v].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []	
//let res = conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] })
//let data = extractGroupMetadata(res)
//})
	
for (let i = 0; i < grupos.length; i++) {
  const [, code] = grupos[i].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
  const res = conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] })
  const data = extractGroupMetadata(res)
  console.log(`Metadata for ${grupos[i]}: `, data)
}

let str = `

💕 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎

💞 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝙂𝙍𝙊𝙐𝙋𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙪𝙣𝙖𝙨 𝙖 𝙡𝙖 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙 𝙂𝙖𝙩𝙖𝘽𝙤𝙩. ✨ 𝙏𝙚𝙣 𝙪𝙣 𝙗𝙪𝙚𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙘𝙞𝙤𝙣𝙖 𝙘𝙤𝙣 𝙉𝙤𝙨𝙤𝙩𝙧𝙤𝙨. 😸

𝙄 𝙞𝙣𝙫𝙞𝙩𝙚 𝙮𝙤𝙪 𝙩𝙤 𝙟𝙤𝙞𝙣 𝙩𝙝𝙚 𝙂𝙖𝙩𝙖𝘽𝙤𝙩 𝘾𝙤𝙢𝙢𝙪𝙣𝙞𝙩𝙮. 💫 𝙃𝙖𝙫𝙚 𝙖 𝙜𝙤𝙤𝙙 𝙩𝙞𝙢𝙚 𝙖𝙣𝙙 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙩 𝙬𝙞𝙩𝙝 𝙪𝙨. 😼
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *Informate de las Novedades!!!*
🐈 *${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *COLABORACIÓN CON* ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt4}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *https://chat.whatsapp.com/J8HOf2T3QYeKu3UN9UBkT6*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n
*Please, do not enter with Bot numbers, and maintain respect.*
`.trim()
  
conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, null, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupsgb$/i
export default handler

const extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'Asia/Jakarta' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
		desc
	}
	return metadata
}
