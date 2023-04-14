import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const image = await Jimp.create(200, 100, 0xFFFFFFFF);
  image.print(
    await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK),
    0, 0, { text: 'HOLA MUNDO', alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE },
    200, 100
  );
  const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
  conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje de prueba', m);
}

handler.command = /^pruebaimg$/i;
export default handler;
