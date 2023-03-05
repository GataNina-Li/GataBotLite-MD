import * as baileys from '@adiwajshing/baileys'
const grupo = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4]

let handler = async (m, { conn, usedPrefix , command }) => { 
let enlace1 = ''	
let enlace2 = ''	
let enlace3 = ''	
	
async function grupo1() {	
let [_1, code] = grupo[0].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let res1 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] })
let data1 = extractGroupMetadata(res1)
enlace1 = data1.subject
}
	
async function grupo2() {	
let [_1, code] = grupo[1].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let res1 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] })
let data1 = extractGroupMetadata(res1)
enlace2 = data1.subject
}
	
async function grupo3() {	
let [_1, code] = grupo[2].match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
let res1 = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] })
let data1 = extractGroupMetadata(res1)
enlace3 = data1.subject
}


let str = `
${enlace1}
${enlace2}
${enlace3}
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

