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

/*import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

  const formattedText = text.replace(/\\n/g, '\n');

  const lines = formattedText.split('\n');

  let totalTextHeight = 0;

  
  lines.forEach((line) => {
    const textHeight = Jimp.measureTextHeight(font, line);
    totalTextHeight += textHeight;
  });

  const baseWidth = 1250;
  const baseHeight = 400;

  const imageWidth = baseWidth + Math.floor(formattedText.length / 50) * 40
  const imageHeight = Math.max(baseHeight, totalTextHeight + 100 + Math.floor(formattedText.length / 50) * 4)
 
  //const imageWidth = 2500 + Math.floor(formattedText.length / 100) * 8
  //const imageHeight = Math.max(totalTextHeight + 20 + Math.floor(formattedText.length / 100) * 3, 1200)

  
  const image = await Jimp.create(imageWidth, imageHeight, 0xffffffff);

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
export default handler;*/

import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

  const paragraphs = text.split('\n\n'); // Separar el texto en párrafos

  const maxCharsPerLine = 300;

  let totalTextHeight = 0;
  let lines = [];

  paragraphs.forEach((paragraph) => {
    const formattedParagraph = paragraph.replace(/\\n/g, '\n');

    // Dividir el párrafo en líneas basándose en el número máximo de caracteres por línea
    let currentLine = '';
    for (let word of formattedParagraph.split(' ')) {
      if (currentLine.length + word.length <= maxCharsPerLine) {
        currentLine += word + ' ';
      } else {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      }
    }

    // Agregar la última línea restante del párrafo
    lines.push(currentLine.trim());

    // Calcular la altura total del texto
    lines.forEach((line) => {
      const textHeight = Jimp.measureTextHeight(font, line);
      totalTextHeight += textHeight;
    });
  });

  const baseWidth = 1250;
  const baseHeight = 400;

  const imageWidth = baseWidth + Math.floor(text.length / maxCharsPerLine) * 40;
  const imageHeight = Math.max(baseHeight, totalTextHeight + 100 + Math.floor(text.length / maxCharsPerLine) * 4);

  // Crear la imagen con el tamaño ajustado
  const image = await Jimp.create(imageWidth, imageHeight, 0xffffffff);

  let yPosition = 0;

  // Imprimir cada línea de texto en la imagen
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

