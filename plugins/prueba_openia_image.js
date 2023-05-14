import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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'
});

const openai = new OpenAIApi(configuration);

const handler = async (m, { conn, text, command }) => {
  try {
    if (!text) {
      throw new Error(`Ejemplo: ${command} Gata`);
    }

    await conn.reply(m.chat, 'Espera un momento...', m);

    const response = await openai.createImage({
      prompt: text,
      numImages: 1,
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
