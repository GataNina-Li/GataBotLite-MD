import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: 'org-1uO5i0TQQwQ055s6XZrCDGZk', apiKey: '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' }); //apiKey = https://platform.openai.com/account/api-keys , organization = https://platform.openai.com/account/org-settings
const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, text, command }) => {
    try {
        if (!text) throw new Error(`Creación de una imagen a partir de IA.\n\nEjemplo:\n.img Gata\n\n\n\nCrear imagen a partir de IA\n\nExample:\nCasa de madera en la montaña nevada`);
        
        await m.reply(wait)
        const response = await openai.createImage({
            prompt: text,
            n: 1,
            size: "1024x1024",
        });
        
        //conn.sendButtonImg(m.chat, , 'Done', wm, 'Menu', '.m', m)
      await conn.sendFile(m.chat, response.data.data[0].url, 'error.jpg', wm, m)
        
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
        } else {
            console.log(error);
            m.reply(error.message);
        }
    }
}

handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image|img|gambar)$/i

export default handler
