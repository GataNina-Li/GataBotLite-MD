/*import axios from 'axios'
import fetch from "node-fetch"

let handler = async (m, { conn, args, usedPrefix, command }) => {
  const api_key = '45e67c4cbc3d784261ffc83806b5a1d7e3bd09ae'
  const image_url = 'https://i.imgur.com/oZjCxGo.jpg'

  try {
    const response = await axios.get(`https://saucenao.com/search.php?db=999&output_type=2&testmode=1&numres=6&api_key=${api_key}&url=${encodeURIComponent(image_url)}`)
    const results = response.data.results;
    const primerResultado = results[0];
    
    let resultadoEnBruto = '';
    for (let prop in primerResultado.header) {
      resultadoEnBruto += `${prop}: ${primerResultado.header[prop]}\n`;
    }
    resultadoEnBruto += '\n';
    for (let prop in primerResultado.data) {
      resultadoEnBruto += `${prop}: ${primerResultado.data[prop]}\n`;
    }*/
import axios from 'axios'
import fetch from "node-fetch"

let handler = async (m, { conn, args, usedPrefix, command }) => {
  const api_key = '45e67c4cbc3d784261ffc83806b5a1d7e3bd09ae'
  const image_url = 'https://i.imgur.com/oZjCxGo.jpg'

  try {
    const response = await axios.get(`https://saucenao.com/search.php?db=999&output_type=2&testmode=1&numres=6&api_key=${api_key}&url=${encodeURIComponent(image_url)}`)
    const results = response.data.results;
    const primerResultado = results[0];
    
    let resultadoEnBruto = '';
    for (let prop in primerResultado.header) {
      let propName = '';
      switch (prop) {
        case 'similarity':
          propName = 'Puntuación de similitud';
          break;
        case 'thumbnail':
          propName = 'URL de la miniatura';
          break;
        case 'index_id':
          propName = 'ID del índice';
          break;
        case 'index_name':
          propName = 'Nombre del índice';
          break;
        case 'from':
          propName = 'Origen';
          break;
        case 'da':
          propName = 'Fecha de creación';
          break;
        case 'author_name':
          propName = 'Nombre del autor';
          break;
        case 'source':
          propName = 'Fuente';
          break;
        case 'material':
          propName = 'Material';
          break;
        default:
          propName = prop;
      }
      resultadoEnBruto += `${propName}: ${primerResultado.header[prop]}\n`;
    }
    
    resultadoEnBruto += '\n';
    
    for (let prop in primerResultado.data) {
      let propName = '';
      switch (prop) {
        case 'title':
          propName = 'Título';
          break;
        case 'ext_urls':
          propName = 'URLs';
          break;
        case 'member_name':
          propName = 'Nombre del autor';
          break;
        case 'pixiv_id':
          propName = 'ID de Pixiv';
          break;
        case 'danbooru_id':
          propName = 'ID de Danbooru';
          break;
        case 'gelbooru_id':
          propName = 'ID de Gelbooru';
          break;
        case 'source':
          propName = 'Fuente';
          break;
        case 'material':
          propName = 'Material';
          break;
        default:
          propName = prop;
      }
      resultadoEnBruto += `${propName}: ${primerResultado.data[prop]}\n`;
    }
    
let enlace = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: ig, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(primerResultado.header.thumbnail)).buffer(), sourceUrl: ig }}}
await conn.sendButton(m.chat, `
Número de resultados: ${results.length}
Resultados encontrados: ${Boolean(results)}

*LÍMITES*
Solicitudes restantes (corto plazo) 
${results.short_remaining} 

Solicitudes restantes (largo plazo)
${results.long_remaining}

*RESULTADO*
URL de la miniatura
${primerResultado.header.thumbnail}

Puntuación de similitud
${primerResultado.header.similarity}

Título
${primerResultado.data.title}

URLs
${primerResultado.data.ext_urls}

Autor
${primerResultado.data.member_name}`.trim(),  `*RESULTADO EN BRUTO*
${resultadoEnBruto}`.trim(), image_url, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, enlace)
} catch (error) {
console.log(error);
}
}

handler.command = /^sauce$/i
//handler.register = true
export default handler
