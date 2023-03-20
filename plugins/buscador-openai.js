/*import fetch from 'node-fetch'
let handler = async (m, { text, conn, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, lenguajeGB.smsOpenai1() + `\n*${usedPrefix + command}* ${lenguajeGB.smsOpenai2()}\n\n*${usedPrefix + command}* ${lenguajeGB.smsOpenai3()}` , m)
try {
let tiores = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let hasil = await tiores.json()
m.reply(`${hasil.data.data}`.trim())
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.command = ['openai', 'chatgpt', 'ia', 'ai']
handler.register = true
export default handler*/

import axios from 'axios';
import { createInterface } from 'readline';
import mongoose from 'mongoose';

const openaiApiKey = 'tamvan';
mongoose.connect('mongodb://localhost/chatgpt', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const messageSchema = new mongoose.Schema({
  conversationId: String,
  userMessage: String,
  botMessage: String
});

const Message = mongoose.model('Message', messageSchema);

async function enviarMensaje(mensaje) {
  try {
    const respuesta = await axios.post(
      'https://api.openai.com/v1/chat/engines/davinci-codex/completions',
      {
        prompt: `Conversación ID: ${mensaje.id}\nUsuario: ${mensaje.text}\nChatbot:`,
        max_tokens: 50,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );
    return respuesta.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
    return null;
  }
}

async function leerMensaje() {
  return new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Tú: ', (mensaje) => {
      rl.close();
      resolve(mensaje);
    });
  });
}

let handler = async (m, { text, conn, usedPrefix, command }) => {
  try {
    if (m.type === 'chat' && text) {
      const userMessage = text.trim();
      m.reply(`Usuario: ${userMessage}`);
      let botMessage = await enviarMensaje({ id: m.id, text: userMessage });
      if (botMessage) {
        m.reply(`Chatbot: ${botMessage}`);
        const message = new Message({ conversationId: m.id, userMessage, botMessage });
        await message.save();
      }
    }
  } catch (error) {
    console.error('Error en el manejador:', error);
  }
}

handler.command = ['openai', 'chatgpt', 'ia', 'ai']
handler.register = true
export default handler;








