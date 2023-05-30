import fetch from 'node-fetch'
import { search, download } from 'aptoide-scraper'

let handler = async (m, { conn, usedPrefix, command, args, text }) => {
   /*if (!args[0]) throw `Ex: ${usedPrefix + command} https://play.google.com/store/apps/details?id=com.linecorp.LGGRTHN`
   let res = await fetch(`https://api.lolhuman.xyz/api/apkdownloader?apikey=${lolkeysapi}&package=${args[0]}`)
   let f = await res.json()
   let { apk_name, apk_icon, apk_version, apk_author, apk_link } = f.result
   let apkk = `Nombre : ${apk_name}
Versión : ${apk_version}
Autor : ${apk_author}

`
await conn.sendFile(m.chat, apk_icon, 'apk.jpg', apkk, m)
await conn.sendFile(m.chat, apk_link, 'file.apk', apk_name, m)*/
     
if (!text) throw `*ESCRIBA EL NOMBRE DEL APK*`    
let searchA = await search(text)
if (searchA.length < 1) return await  conn.sendMessage(m.chat, { text: '*NO HAY RESULTADOS DE LO QUE SOLICITA*' }, { quoted: m } )
let apk = searchA.id
let apk_dl = await download(apk)
if ( apk_dl.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*EL APK PESA MUCHO*' }, { quoted: m } )
if ( apk_dl.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*EL APK ES MUY PESADO*' }, { quoted: m } )
await conn.sendMessage(m.chat, { document: { url: apk_dl.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: apk_dl.name + '.apk', caption: null }, { quoted: m })      
}

handler.command = /^(apkdl|apkdwonload)$/i
export default handler
