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

import axios from 'axios'
const openaiApiKey = 'tamvan';
let handler = async (m, { text, conn, usedPrefix, command }) => {
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
    m.reply('Error al enviar la solicitud:', error);
    return null;
  }
}

async function chat() {
let conversacionId = Date.now().toString();
m.reply('¡Hola! Soy GataBot impulsada por la IA de ChatGPT. ¿En qué puedo ayudarte?');

let mensaje = await leerMensaje();
while (mensaje !== 'salir') {
let respuesta = await enviarSolicitud(mensaje, conversacionId);
if (respuesta) {
m.reply(`Chatbot: ${respuesta}`);
    }

mensaje = await leerMensaje();
}

m.reply('¡Hasta la vista!');
}

async function leerMensaje() {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question('Tú: ', (mensaje) => {
      readline.close();
      resolve(mensaje);
    });
  });
}
chat(text)
}
handler.command = ['openai', 'chatgpt', 'ia', 'ai']
handler.register = true
export default handler

