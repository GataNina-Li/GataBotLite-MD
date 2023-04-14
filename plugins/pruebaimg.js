import Jimp from 'jimp';

const handler = async (m, { conn, text }) => {
  const image = await Jimp.create(1200, 800, 0xffffffff);
  image.print(
    await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK),
    0, 0, { text: 'En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.', alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE },
    1200, 800
  );
  const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
  conn.sendFile(m.chat, buffer, 'img.jpg', 'Mensaje de prueba', m);
}

handler.command = /^pruebaimg$/i;
export default handler;
