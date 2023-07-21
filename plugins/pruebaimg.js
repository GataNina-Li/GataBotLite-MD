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

/*import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

  const formattedText = text.replace(/\\n/g, '\n');

  const lines = formattedText.split('\n');

  let totalTextHeight = 0;
  let wrappedLines = [];

  lines.forEach((line) => {
    // Dividir la línea si supera el límite de 300 caracteres
    const splitLines = splitLine(line, 300);
    wrappedLines.push(...splitLines);

    // Calcular la altura total del texto
    splitLines.forEach((splitLine) => {
      const textHeight = Jimp.measureTextHeight(font, splitLine);
      totalTextHeight += textHeight;
    });
  });

  const baseWidth = 1250;
  const baseHeight = 400;

  const imageWidth = baseWidth + Math.floor(text.length / 50) * 40;
  const imageHeight = Math.max(baseHeight, totalTextHeight + 100 + Math.floor(text.length / 50) * 4);

  // Crear la imagen con el tamaño ajustado
  const image = await Jimp.create(imageWidth, imageHeight, 0xffffffff);

  let yPosition = 0;

  wrappedLines.forEach((line) => {
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

// Función para dividir una línea en fragmentos de longitud máxima
const splitLine = (line, maxChars) => {
  const lines = [];
  while (line.length > maxChars) {
    lines.push(line.slice(0, maxChars));
    line = line.slice(maxChars);
  }
  lines.push(line);
  return lines;
};

handler.command = /^pruebaimg$/i;
export default handler;*/

/*import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

  const formattedText = text.replace(/\\n/g, '\n');

  const lines = formattedText.split('\n');

  let totalTextHeight = 0;
  let wrappedLines = [];

  lines.forEach((line) => {
    // Dividir la línea si supera el límite de 300 caracteres
    const splitLines = splitLine(line, 200);
    wrappedLines.push(...splitLines);

    // Calcular la altura total del texto
    splitLines.forEach((splitLine) => {
      const textHeight = Jimp.measureTextHeight(font, splitLine);
      totalTextHeight += textHeight;
    });
  });

  const baseWidth = 3000; // Ancho inicial del lienzo
  const baseHeight = 800; // Alto inicial del lienzo

  const imageWidth = baseWidth + Math.floor(200 / 50) * 55; // Ajustar el ancho del lienzo en función del límite de caracteres por línea
  const imageHeight = Math.max(baseHeight, totalTextHeight + 100 + Math.floor(200 / 50) * 40); // Ajustar el alto del lienzo en función del tamaño del texto

  // Crear la imagen con el tamaño ajustado
  const image = await Jimp.create(imageWidth, imageHeight, 0xffffffff);

  let yPosition = 0;

  wrappedLines.forEach((line) => {
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

// Función para dividir una línea en fragmentos de longitud máxima
const splitLine = (line, maxChars) => {
  const lines = [];
  let currentLine = '';
  const words = line.split(' ');

  for (let word of words) {
    if (currentLine.length + word.length <= maxChars) {
      currentLine += word + ' ';
    } else {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    }
  }

  lines.push(currentLine.trim());
  return lines;
};

handler.command = /^pruebaimg$/i;
export default handler;*/

import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

  const formattedText = text.replace(/\\n/g, '\n');

  const lines = formattedText.split('\n');

  let totalTextHeight = 0;
  let wrappedLines = [];

  lines.forEach((line) => {
    // Dividir la línea si supera el límite de 300 caracteres
    const splitLines = splitLine(line, 300);
    wrappedLines.push(...splitLines);

    // Calcular la altura total del texto
    splitLines.forEach((splitLine) => {
      const textHeight = Jimp.measureTextHeight(font, splitLine);
      totalTextHeight += textHeight;
    });
  });

  let baseWidth;
  let baseHeight;
  let imageWidth;
  let imageHeight;

  if (formattedText.length > 200) {
    baseWidth = 3000;
    baseHeight = 800;
    imageWidth = baseWidth + Math.floor(200 / 50) * 55;
    imageHeight = Math.max(baseHeight, totalTextHeight + 100 + Math.floor(200 / 50) * 40);
  } else {
    baseWidth = 2000;
    baseHeight = 400;
    imageWidth = baseWidth + Math.floor(200 / 50) * 30;
    imageHeight = Math.max(baseHeight, totalTextHeight + 100 + Math.floor(200 / 50) * 20);
  }

  // Crear la imagen con el tamaño ajustado
  const image = await Jimp.create(imageWidth, imageHeight, 0xffffffff);

  let yPosition = 0;

  wrappedLines.forEach((line) => {
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

// Función para dividir una línea en fragmentos de longitud máxima
const splitLine = (line, maxChars) => {
  const lines = [];
  let currentLine = '';
  const words = line.split(' ');

  for (let word of words) {
    if (currentLine.length + word.length <= maxChars) {
      currentLine += word + ' ';
    } else {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    }
  }

  lines.push(currentLine.trim());
  return lines;
};

handler.command = /^pruebaimg$/i;
export default handler;

