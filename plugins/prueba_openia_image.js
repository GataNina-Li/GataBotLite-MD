import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}
  
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsMalused2']()}\n*${usedPrefix + command} Un gato morado con celeste en Júpiter, iluminando el cosmos con su encanto de efecto de anime.*`, m)
await m.reply(wait)
try{
let response = await fetch(`https://botcahx.cyclic.app/dalle?text=${encodeURIComponent(text)}`)
let image = await response.buffer()
await conn.sendFile(m.chat, image, 'image.jpg', '💻 *IMAGEN CREADA CON AI!!* ✨', m)
} catch {
try{
let res = `https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`  
await conn.sendFile(m.chat, res, 'image.jpg', '💻 *IMAGEN CREADA CON AI!!* ✨', m)
} catch (e) {
reportError(e)} 
}}
handler.command = /^(dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage)$/i

export default handler
       
