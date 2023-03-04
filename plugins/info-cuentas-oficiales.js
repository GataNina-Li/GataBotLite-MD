let handler = async (m, { conn, usedPrefix, command }) => {
let media = './media/menus/Menu2.jpg'
let str = `
◎ *GITHUB*
*${md}*

◎ *INSTAGRAM*
*${ig}*

◎ *YOUTUBE*
*${yt}*

◎ *FACEBOOK*
*${fb}*

${lenguajeGB.smsOfc2()}`.trim() 
  
await conn.sendButton(m.chat, lenguajeGB.smsOfc1(), str, media, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)}

handler.command = /^cuenta|cuentas|cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
export default handler
