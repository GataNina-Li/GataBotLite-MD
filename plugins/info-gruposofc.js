import * as baileys from '@adiwajshing/baileys'

const grupo = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4]
let handler = async (m, { conn, usedPrefix , command }) => { 
let enlace = ''	
	
async function grupo1() {	
let [_1, code] = grupo[0].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let res1 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] })
let data1 = extractGroupMetadata(res1)
enlace = data1.subject
}

//let [_1, code_] = grupo[0].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
//let [_2, code__] = grupo[0].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []

//let res1 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code_ } }] })
//let res2 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code__ } }] })

//let data1 = extractGroupMetadata(res1)
//let data2 = extractGroupMetadata(res2)

let str = `
${enlace}
`.trim()

/*let str = `
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

`.trim()*/
  
await conn.sendButton(m.chat, wm, str, img, [[lenguajeGB.smsConMenu(), usedPrefix  + 'menu']], m)
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

