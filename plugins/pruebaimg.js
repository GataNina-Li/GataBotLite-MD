import sharp from 'sharp';

const handler = async (m, { conn, text }) => {
  const image = await sharp({
    create: {
      width: 200,
      height: 100,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  });

  const textImage = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" font-family="Arial" fill="#000000">HOLA MUNDO</text>
    </svg>`));

  const compositeImage = await image.composite([{
    input: await textImage.toBuffer(),
    gravity: 'center',
  }]);

  const buffer = await compositeImage.jpeg({ quality: 95 }).toBuffer();
  conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje de prueba', m);
}

handler.command = /^pruebaimg$/i
export default handler
