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

import { WAConnection, MessageType } from '@adiwajshing/baileys';
import axios from 'axios';

const openaiApiKey = 'tamvan';
import { createInterface } from 'readline';

async function enviarSolicitud(texto, conversacionId) {
  try {
    const respuesta = await axios.post(
      'https://api.openai.com/v1/chat/engines/davinci-codex/completions',
      {
        prompt: `Conversación ID: ${conversacionId}\nUsuario: ${texto}\nChatbot:`,
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

async function chat(mensaje, conn) {
  let conversacionId = Date.now().toString();
  conn.sendMessage(mensaje.chat, '¡Hola! Soy GataBot impulsada por la IA de ChatGPT. ¿En qué puedo ayudarte?', MessageType.text);
  let respuesta = await enviarSolicitud(mensaje.body, conversacionId);
  if (respuesta) {
    conn.sendMessage(mensaje.chat, `Chatbot: ${respuesta}`, MessageType.text);
  }
}

const conn = new WAConnection();
conn.on('open', () => {
  console.log('Conexión establecida');
});

conn.on('message', async message => {
  if (message.type === 'chat' && message.body) {
    chat(message, conn);
  }
});

const handler = (m) => {
  chat(m, conn);
};
conn.connect();
handler.command = ['openai', 'chatgpt', 'ia', 'ai']
handler.register = true
export default handler

