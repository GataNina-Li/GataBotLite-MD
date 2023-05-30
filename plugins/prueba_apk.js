import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) throw `Ex: ${usedPrefix + command} https://play.google.com/store/apps/details?id=com.linecorp.LGGRTHN`
   let res = await fetch(`https://api.lolhuman.xyz/api/apkdownloader?apikey=${lolkeysapi}&package=${args[0]}`)
   let f = await res.json()
   let { apk_name, apk_icon, apk_version, apk_author, apk_link } = f.result
   let apkk = `Nombre : ${apk_name}
Versión : ${apk_version}
Autor : ${apk_author}

`
await conn.sendFile(m.chat, apk_icon, 'apk.jpg', apkk, m)
await conn.sendFile(m.chat, apk_link, 'apk.zip', apk_name, m)
}

handler.command = /^(apkdl|apkdwonload)$/i
export default handler
