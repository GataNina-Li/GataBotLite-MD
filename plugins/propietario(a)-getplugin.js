
/*import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let ar = Object.keys(plugins)
let ar1 = ar.map(v => v.replace('.js', ''))
if (!text) throw `*${mg}\nINGRESA EL TEXTO DEL PLUGIN\nejemplo:\n${usedPrefix + command} menu`
if (!ar1.includes(text)) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
m.reply(fs.readFileSync('./plugins/' + text + '.js', 'utf-8'))
    
let filename = `${text}.js`
let fileContent = await fs.readFileSync(`./plugins/${text}.js`)
conn.sendMessage(m.chat, { document: fileContent, mimetype: 'text/javascript', fileName: filename }, { quoted: m })

}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true

export default handler*/

/*import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let ar = Object.keys(plugins)
  let ar1 = ar.map(v => v.replace('.js', ''))
  let cmd = ar1.find(v => new RegExp(`^${v}`, 'i').test(text)) // encuentra el comando correspondiente al archivo
  
  if (!text) throw `*${mg}\nINGRESA EL TEXTO DEL PLUGIN\nejemplo:\n${usedPrefix + command} menu`
  if (!cmd) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
  
  let filename = `${cmd}.js`
  let fileContent = await fs.readFileSync(`./plugins/${cmd}.js`)
  conn.sendMessage(m.chat, { document: fileContent, mimetype: 'text/javascript', fileName: filename }, { quoted: m })
}

handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true

export default handler*/


import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readdir = promisify(fs.readdir)

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Por favor, proporciona el nombre del comando para buscar el archivo correspondiente\nEjemplo: ${usedPrefix + command} info`

  const pluginsDir = './plugins'
  const files = await readdir(pluginsDir)

  const matchingFile = files.find(file => {
    const plugin = (await import(path.join(process.cwd(), pluginsDir, file))).default
    return plugin.command && plugin.command.test(text)
  })

  if (!matchingFile) {
    return m.reply(`El comando '${text}' no fue encontrado`)
  }

  const plugin = (await import(path.join(process.cwd(), pluginsDir, matchingFile))).default

  const filename = matchingFile.replace('.js', '')
  const fileContent = await fs.promises.readFile(path.join(process.cwd(), pluginsDir, matchingFile), 'utf-8')

  conn.sendMessage(m.chat, { document: fileContent, mimetype: 'text/javascript', fileName: `${filename}.js` }, { quoted: m })
}

handler.help = ['getplugin'].map(v => v + ' <nombre del comando>')
handler.tags = ['host']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true

export default handler




