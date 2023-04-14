/*import Jimp from 'jimp'

const handler = async (m, { conn, text }) => {
const image = await Jimp.create(1200, 800, 0xffffffff)
const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
image.print( font, 0, 0, { text: `asirhf
wjfny
epodu`, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE }, 1200, 800)
const buffer = await image.getBufferAsync(Jimp.MIME_JPEG)
await conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje', m)
}

handler.command = /^pruebaimg$/i
export default handler*/


import Jimp from 'jimp'

const handler = async (m, { conn, text }) => {
  const image = await Jimp.create(1200, 800, 0xffffffff)
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
  const textLines = [
    'Updating 2ca8060b..ef4130e6',
    'Fast-forward',
    'plugins/pruebaimg.js | 14 ++++++++------',
    '1 file changed, 8 insertions(+), 6 deletions(-)'
  ]
  const yPos = (800 - font.bitmap.height * textLines.length) / 2 // Calcular la posición Y del primer carácter
  textLines.forEach((line, index) => {
    image.print(font, 0, yPos + index * font.bitmap.height, {
      text: line,
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    }, 1200, 800)
  })
  const buffer = await image.getBufferAsync(Jimp.MIME_JPEG)
  await conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje', m)
}

handler.command = /^pruebaimg$/i
export default handler
