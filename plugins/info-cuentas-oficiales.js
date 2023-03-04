let media = './media/menus/Menu2.jpg'
let handler = async (m, { conn, usedPrefix, command }) => {
let str = `
◎ *GITHUB*
*${md}*

◎ *INSTAGRAM*
*${ig}*

◎ *YOUTUBE*
*${yt}*

◎ *FACEBOOK*
*${fb}*

❥ *_Siguenos en las Cuentas Oficiales para mantenerte al tanto de ${packname}*_`.trim()
  
await conn.sendButton(m.chat, '🌸 *◜CUENTAS OFICIALES◞* 🌸', str, null, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)}

handler.command = /^cuenta|cuentas|cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
export default handler
