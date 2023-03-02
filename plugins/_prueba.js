function handler(m) {
let catalogo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: wm, orderTitle: 'Bang', thumbnail: imagen1, sellerJid: '0@s.whatsapp.net'}}}
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), catalogo, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.help = ['creador']
handler.tags = ['info']

handler.command = ['prueba04'] 


export default handler
