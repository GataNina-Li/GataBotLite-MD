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


import Jimp from 'jimp'
const handler = async (m, { conn, text }) => {

const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK) // Cargar la fuente de texto para Jimp
const formattedText = '\n' + text.replace(/\\n/g, '\n') // Agregar un salto de línea al principio del texto para asegurar alto de línea al inicio
const lines = formattedText.split('\n') // Separar el texto en líneas
let totalTextHeight = 0 //almacenar la altura total del texto
let wrappedLines = [] // Array para almacenar las líneas envueltas (divididas) que no superen el límite de caracteres por línea

lines.forEach((line) => { // Recorrer cada línea del texto
const splitLines = splitLine(line, text.length > 50 ? 100 : 15) // Divider una línea de texto en fragmentos de longitud máxima (50)
wrappedLines.push(...splitLines) // Agregar las líneas divididas al array de líneas 
    
splitLines.forEach((splitLine) => { // Calcular la altura total del texto
const textHeight = Jimp.measureTextHeight(font, splitLine)
totalTextHeight += textHeight
})
})

let baseWidth, baseHeight, imageWidth, imageHeight
if (text.length > 50) { // Verificar si el total del texto es mayor a 50 caracteres
// Configuración del lienzo para textos Grandes
baseWidth = 1400 // Ancho
baseHeight = 400 // Alto 
imageWidth = baseWidth + Math.floor(300 / 50) * 30 // Ajustar el ancho en función del límite de caracteres por línea
imageHeight = Math.max(baseHeight, totalTextHeight + 20 + Math.floor(300 / 50) * 4) // Ajustar el alto en función del tamaño del texto
} else {
// Configuración del lienzo para textos cortos
baseWidth = 400 // Ancho 
baseHeight = 20 // Alto 
imageWidth = baseWidth + Math.floor(300 / 50) * 30 
imageHeight = Math.max(baseHeight, totalTextHeight + 5 + Math.floor(300 / 50) * 4)
}

const image = await Jimp.create(imageWidth, imageHeight, 0xffffffff) // Crear la imagen con el tamaño ajustado
let yPosition = 0 // Posición inicial del texto

wrappedLines.forEach((line) => { // Imprimir cada línea de texto en la imagen
image.print( font, 0, yPosition, { text: line, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, }, imageWidth, imageHeight)
const textHeight = Jimp.measureTextHeight(font, line) // Calcular la altura del texto actual e incrementar la posición del eje Y para la siguiente línea
yPosition += textHeight
})

const buffer = await image.getBufferAsync(Jimp.MIME_JPEG) // Obtener el buffer de la imagen en formato JPEG
await conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje', m) // Enviar la imagen 
}

const splitLine = (line, maxChars) => { // Función para dividir una línea en fragmentos de longitud máxima (Salto de línea sin cortar las palabras)
const lines = [];
let currentLine = ''
const words = line.split(' ')
for (let word of words) {
if (currentLine.length + word.length <= maxChars) {
currentLine += word + ' '
} else {
lines.push(currentLine.trim())
currentLine = word + ' '
}}
lines.push(currentLine.trim())
return lines
}

handler.command = /^pruebaimg$/i;
export default handler;

