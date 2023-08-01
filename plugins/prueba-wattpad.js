/*import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'

let handler = async(m, { conn, text }) => {
if (!text) throw `*Falta texto*`
let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&lc=es&apikey=uwgflzFEh6`)
let anu = await res.json()
anu = anu.data.map((v) => `Título: ${v.title}\n*Leídos:* ${v.reads}\n*Votos:* ${v.vote}\n*Capítulos:* ${v.chapter}\n*Enlace:* ${v.link}\n*Description:* ${v.desc}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
//let akuariapiresult2 = await translate(`${anu}`, { to: 'es', autoCorrect: true })
await m.reply(anu) 
//await conn.sendFile(m.chat, null, 'dorrat.jpg',  anu, m)
}
handler.command = /^(wattpad)$/i

export default handler*/

import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'

let handler = async (m, { conn, text }) => {
    if (!text) throw `*Falta texto*`
    let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&lc=es&apikey=uwgflzFEh6`)
    let anu = await res.json()
    let translatedResults = await Promise.all(anu.data.map(async (v) => {
        let titleTranslation = await translate(v.title, { to: 'es', autoCorrect: true })
        let descTranslation = await translate(v.desc, { to: 'es', autoCorrect: true })
        return `Título: ${titleTranslation.text}\n*Leídos:* ${v.reads}\n*Votos:* ${v.vote}\n*Capítulos:* ${v.chapter}\n*Enlace:* ${v.link}\n*Description:* ${descTranslation.text}`
    }))
    let resultText = translatedResults.join('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n')
    await m.reply(resultText)
    //await conn.sendFile(m.chat, null, 'dorrat.jpg', resultText, m)
}
handler.command = /^(wattpad)$/i

export default handler

