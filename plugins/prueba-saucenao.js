import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
const api_key = '45e67c4cbc3d784261ffc83806b5a1d7e3bd09ae'
const image_url = 'https://i.imgur.com/oZjCxGo.jpg'

axios.get(`https://saucenao.com/search.php?db=999&output_type=2&testmode=1&numres=6&api_key=${api_key}&url=${encodeURIComponent(image_url)}`)
.then(response => {
const results = response.data.results
const primerResultado = results[0] 
  
m.reply(`Relevancia:
Número de resultados: ${results.length}
Resultados encontrados? ${Boolean(results)}

Límites:
Solicitudes restantes (corto plazo): ${response.data.short_remaining}
Solicitudes restantes (largo plazo): ${response.data.long_remaining}

Resultado:
URL de la miniatura: ${primerResultado.header.thumbnail}
Puntuación de similitud: ${primerResultado.header.similarity}
Título: ${primerResultado.data.title}
URLs: ${primerResultado.data.ext_urls}
Autor: ${primerResultado.data.member_name}
Resultado en bruto: ${JSON.stringify(primerResultado)}`)
})
.catch(error => {
console.log(error);
})
}
handler.command = /^sauce$/i
//handler.register = true
export default handler
