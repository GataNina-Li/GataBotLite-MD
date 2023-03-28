/*BY https://github.com/DIEGO-OFC*/

import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  m.reply(`_[!] Espera, enviando base de datos. . ._`)
  try {
    let date_ob = new Date()
    let date = ("0" + date_ob.getDate()).slice(-2)
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
    let year = date_ob.getFullYear()
    let hours = date_ob.getHours()
    let minutes = date_ob.getMinutes()
    let seconds = date_ob.getSeconds()
    let ini_txt = `${year + month + date + "_" + hours + minutes + seconds}`
    let database = await fs.readFileSync(`./database.json`)
    let creds = await fs.readFileSync(`./GataBotSession/creds.json`)
    await conn.sendMessage(m.sender, {document: database, mimetype: 'application/json', fileName: `database.azami.${ini_txt}.json`}, { quoted: m })
    await conn.sendMessage(m.sender, {document: creds, mimetype: 'application/json', fileName: `creds.azami.${ini_txt}.json`}, { quoted: m })
  } catch (e) {
    console.log(e)
    m.reply(`Ocurrió un error, inténtalo de nuevo.`)
  }
}


handler.menuowner = ['backup']
handler.tagsowner = ['owner']
handler.command = /^(backup)$/i

handler.owner = true

export default handler
