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

/*import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const image = await Jimp.create(1200, 800, 0xffffffff);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);


  const formattedText = text.replace(/\\n/g, '\n');

  
  const lines = formattedText.split('\n');

 
  let yPosition = 0;


  lines.forEach((line) => {
    image.print(
      font,
      0,
      yPosition,
      {
        text: line,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      },
      1200,
      800
    );

   
    const textHeight = Jimp.measureTextHeight(font, line);

    
    yPosition += textHeight;
  });

  const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
  await conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje', m);
};

handler.command = /^pruebaimg$/i;
export default handler;*/

import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

  const formattedText = text.replace(/\\n/g, '\n');

  const lines = formattedText.split('\n');

  let totalTextHeight = 0;

  
  lines.forEach((line) => {
    const textHeight = Jimp.measureTextHeight(font, line);
    totalTextHeight += textHeight;
  });

  
  const imageWidth = 1200;
  const imageHeight = Math.max(totalTextHeight + 100, totalTextHeight + 800); 

  
  const image = await Jimp.create(imageWidth + 100, imageHeight, 0xffffffff);

  let yPosition = 0;

  
  lines.forEach((line) => {
    image.print(
      font,
      0,
      yPosition,
      {
        text: line,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      },
      imageWidth,
      imageHeight
    );

    const textHeight = Jimp.measureTextHeight(font, line);
    yPosition += textHeight;
  });

  const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
  await conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje', m);
};

handler.command = /^pruebaimg$/i;
export default handler;

