import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Ejemplo: ${usedPrefix + command} Runaway`
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${encodeURIComponent(text)}`)
if (!res.ok) throw await `URL de Spotify no válida / se produjo un error.`
let json = await res.json()
if (json.status != '200') throw `Ocurrió un error, inténtalo de nuevo más tarde.`
let get_result = json.result
let ini_txt = `Encontro : *${text}*`
for (var x of get_result) {
ini_txt += `\n\n*Título : ${x.title}*\n`
ini_txt += `Artistas : ${x.artists}\n`
ini_txt += `Duración : ${x.duration}\n`
ini_txt += `Enlace : ${x.link}\n`
ini_txt += `${x.preview_url ? `Preview : ${x.preview_url}\n` : ''}`
ini_txt += `───────────────────`
}
m.reply(ini_txt)
}
handler.command = /^spot(ify)?search$/i

export default handler
