import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const image = await Jimp.create(1200, 800, 0xffffffff);
  //image.print(
   // await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK),
   // 0, 0, { text: 'ⒸⒹ La parte de la biología que estudia los animales es la zoología.', alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE },
   // 1200, 800
 // );
  image.print(
  await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK),
  0, 0, { text: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ', alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE },
  1200, 800
);
  const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
  conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje de prueba', m);
}

handler.command = /^pruebaimg$/i;
export default handler;

