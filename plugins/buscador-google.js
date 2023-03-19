import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix, text }) => {
if (!text) return conn.reply(m.chat, lenguajeGB.smsAvisoMG + '*ESCRIBA LO QUE QUIERE BUSCAR, EJEMPLO:*' + `\n*${usedPrefix + command} Qué es Matemáticas?*` , m)
async function searchGoogle(query) {
try {
const results = await googleIt({ query });
m.reply(`Resultados para '${query}':`);
results.forEach((result, index) => {
m.reply(`${index + 1}. ${result.title} (${result.link})`);
});
} catch (error) {
console.error(error);
}
}
const texto = { myquery: text }; 
const query = texto.toString(); 
searchGoogle(query);
}
handler.command = /^googlef?$/i
handler.register = true
export default handler
