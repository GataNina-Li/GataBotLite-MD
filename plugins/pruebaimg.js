/*import Jimp from 'jimp'

const handler = async (m, { conn, text }) => {
const image = await Jimp.create(1200, 800, 0xffffffff)
const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
image.print( font, 0, 0, { text: 'asirhf\nwjfny\nepodu', alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE }, 1200, 800)
const buffer = await image.getBufferAsync(Jimp.MIME_JPEG)
await conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje', m)
}

handler.command = /^pruebaimg$/i
export default handler*/

import Jimp from 'jimp'

const handler = async (m, { conn, text }) => {
  const image = await Jimp.create(1200, 800, 0xffffffff)
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
  const textHeight = Jimp.measureTextHeight(font, 'W') 
  const lineHeight = Math.max(textHeight + 10, 50) 
  font.setHeight(50)
  image.print(font, 0, 0, { text: 'asirhf\nwjfny\nepodu', alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE }, 1200, 800)
  const buffer = await image.getBufferAsync(Jimp.MIME_JPEG)
  await conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje', m)
}

handler.command = /^pruebaimg$/i
export default handler

