import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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'
});

const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, text, command }) => {
  try {
    if (!text) throw new Error(`Creación de una imagen a partir de IA.\n\nEjemplo:\n.img Gata\n\nCrear imagen a partir de IA\n\nExample:\nCasa de madera en la montaña nevada`);

    await conn.reply(m.chat, 'Espera un momento...', m);

    const response = await openai.createImage({
      prompt: text,
      num_images: 1,
      width: 1024,
      height: 1024,
    });

    await conn.sendFile(m.chat, response.data.images[0].file, 'image.jpg', 'Aquí está la imagen generada:', m);

  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(`${error.response.status}\n\n${error.response.data}`);
    } else {
      console.log(error);
      conn.reply(m.chat, error.message, m);
    }
  }
};

handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image|img|gambar)$/i;

export default handler;
