import axios from 'axios'
import fetch from "node-fetch"

let handler = async (m, { conn, args, usedPrefix, command }) => {
const api_key = '45e67c4cbc3d784261ffc83806b5a1d7e3bd09ae'
const image_url = 'https://i.imgur.com/oZjCxGo.jpg'

axios.get(`https://saucenao.com/search.php?db=999&output_type=2&testmode=1&numres=6&api_key=${api_key}&url=${encodeURIComponent(image_url)}`)
.then(response => {
const results = response.data.results;
const primerResultado = results[0];
  
let resultadoEnBruto = '\n';
for (let prop in primerResultado.header) {
resultadoEnBruto += `${prop}: ${primerResultado.header[prop]}\n`;
}
resultadoEnBruto += '\n';
for (let prop in primerResultado.data) {
resultadoEnBruto += `${prop}: ${primerResultado.data[prop]}\n`;
}
  
let enlace = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: ig, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(primerResultado.header.thumbnail)).buffer(), sourceUrl: ig }}}
await conn.sendButton(m.chat, wm, `
Número de resultados: ${results.length}
Resultados encontrados? ${Boolean(results)}

Límites:
Solicitudes restantes (corto plazo): ${results.short_remaining} 
Solicitudes restantes (largo plazo): ${results.long_remaining}

Resultado:
URL de la miniatura: ${primerResultado.header.thumbnail}
Puntuación de similitud: ${primerResultado.header.similarity}
Título: ${primerResultado.data.title}
URLs: ${primerResultado.data.ext_urls}
Autor: ${primerResultado.data.member_name}
Resultado en bruto:
${resultadoEnBruto}
`.trim(), image_url, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, enlace)
})
  .catch(error => {
    console.log(error);
  });

}
handler.command = /^sauce$/i
//handler.register = true
export default handler
