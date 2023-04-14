import Jimp from 'jimp';
import path from 'path';

const handler = async (m, { conn, text }) => {
  const fontPath = '/data/data/com.termux/files/home/GataBotLite-MD/src/Monospace.ttf'
  const font = await Jimp.loadFont(fontPath);
  const image = await Jimp.create(1200, 800, 0xffffffff)
  image.print(
    font,
    0, 0, { text: 'GataBot', alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE },
    1200, 800
  );
  const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
  conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje de prueba', m);
};

handler.command = /^pruebaimg$/i
export default handler
