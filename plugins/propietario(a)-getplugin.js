//CÓDIGO CREADO Y ADAPTADO POR GATA DIOS


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


/*import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `Por favor, proporciona el nombre del comando para buscar el archivo correspondiente\nEjemplo: ${usedPrefix + command} info`

const pluginsDir = './plugins'
const files = await readdir(pluginsDir)

let matchingFile;
for (let file of files) {
const plugin = (await import(path.join(process.cwd(), pluginsDir, file))).default
try {
if (plugin && plugin.command && plugin.command.test(text) && text.match(plugin.command)) {
matchingFile = file;
break

}
} catch (err) {
console.log(`Error en el archivo ${file}: ${err.message}`)
}}

if (!matchingFile) {
console.log(`El comando '${text}' no fue encontrado`)
return m.reply(`El comando '${text}' no fue encontrado`)
}

try{
const plugin = (await import(path.join(process.cwd(), pluginsDir, matchingFile))).default

const filename = matchingFile.replace('.js', '')
const fileContent = await readFile(path.join(process.cwd(), pluginsDir, matchingFile), 'utf-8')
   
let fileContentT = await fs.readFileSync(`./plugins/${filename}.js`)
await conn.sendMessage(m.chat, { document: fileContentT, mimetype: 'text/javascript', fileName: filename }, { quoted: m })
await m.reply(`Código del archivo ${filename}.js:\n\n${fileContent.toString()}`)
  
} catch (err) {
console.log(`Error al enviar el archivo '${matchingFile}': ${err.message}`)
return m.reply(`Ocurrió un error al enviar el archivo '${matchingFile}'`)
}
}

handler.help = ['getplugin'].map(v => v + ' <nombre del comando>')
handler.tags = ['host']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true

export default handler*/

/*import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Por favor, proporciona el nombre del comando para buscar el archivo correspondiente\nEjemplo: ${usedPrefix + command} info`

  const pluginsDir = './plugins'
  const files = await readdir(pluginsDir)

  let matchingFile;

  // Busca ARC
  if (text.endsWith('-exec.js')) {
    const cmd = text.replace(/\.js$/, '') // Elimina el .js del final
    const filename = `${cmd}.js`
    try {
      const fileContent = await fs.readFileSync(path.join(process.cwd(), pluginsDir, filename))
      await conn.sendMessage(m.chat, { document: fileContent, mimetype: 'text/javascript', fileName: filename }, { quoted: m })
      await m.reply(`Código del archivo ${filename}:\n\n${fileContent.toString()}`)
      return
        
    } catch {
        try{
        const plugin = (await import(path.join(process.cwd(), pluginsDir, matchingFile))).default

    const filename = matchingFile.replace('.js', '')
    const fileContent = await readFile(path.join(process.cwd(), pluginsDir, matchingFile), 'utf-8')
   
    await conn.sendMessage(m.chat, { document: fileContent, mimetype: 'text/javascript', fileName: filename }, { quoted: m })
    await m.reply(`Código del archivo ${filename}.js:\n\n${fileContent.toString()}`)
    } catch (err) {
     m.reply('*ERROR*')   
    }
    }*/
        
        
     // m.reply(`Error al buscar el archivo de manera directa '${filename}': ${err.message}`)
   // }
 // }

  // Busca CYE
  /*for (let file of files) {
    const plugin = (await import(path.join(process.cwd(), pluginsDir, file))).default
    try {
      if (plugin && plugin.command && plugin.command.test(text) && text.match(plugin.command)) {
        matchingFile = file;
        break
      }
    } catch (err) {
      m.reply(`Error en el archivo ${file}: ${err.message}`)
    }
  }

  
  if (!matchingFile) {
    //console.log(`El comando '${text}' no fue encontrado`)
    return m.reply(`El comando '${text}' no fue encontrado`)
  }*/

  /*try {
    const plugin = (await import(path.join(process.cwd(), pluginsDir, matchingFile))).default

    const filename = matchingFile.replace('.js', '')
    const fileContent = await readFile(path.join(process.cwd(), pluginsDir, matchingFile), 'utf-8')
   
    await conn.sendMessage(m.chat, { document: fileContent, mimetype: 'text/javascript', fileName: filename }, { quoted: m })
    await m.reply(`Código del archivo ${filename}.js:\n\n${fileContent.toString()}`)
  
  } catch (err) {
    console.log(`Error al enviar el archivo '${matchingFile}': ${err.message}`)
    return m.reply(`Ocurrió un error al enviar el archivo '${matchingFile}'`)
  }*/
/*}

handler.help = ['getplugin'].map(v => v + ' <nombre del comando>')
handler.tags = ['host']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true

export default handler*/


import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Por favor, proporciona el nombre del comando para buscar el archivo correspondiente\nEjemplo: ${usedPrefix + command} info`

  const pluginsDir = './plugins'
  const files = await readdir(pluginsDir)

  let matchingFile;

  // Busca ARC
  if (text.endsWith('-exec.js')) {
    const cmd = text.replace(/\.js$/, '') // Elimina el .js del final
    const filename = `${cmd}.js`
    try {
      const fileContent = await fs.readFileSync(path.join(process.cwd(), pluginsDir, filename))
      await conn.sendMessage(m.chat, { document: fileContent, mimetype: 'text/javascript', fileName: filename }, { quoted: m })
      await m.reply(`MD Código del archivo ${filename}:\n\n${fileContent.toString()}`)
      return
    } catch {
      try {
        const plugin = (await import(path.join(process.cwd(), pluginsDir, matchingFile))).default

        const filename = matchingFile.replace('.js', '')
        const fileContent = await readFile(path.join(process.cwd(), pluginsDir, matchingFile), 'utf-8')
   
        await conn.sendMessage(m.chat, { document: fileContent, mimetype: 'text/javascript', fileName: filename }, { quoted: m })
        await m.reply(`MC Código del archivo ${filename}.js:\n\n${fileContent.toString()}`)
      } catch (err) {
        m.reply(`Ocurrió un error al buscar el archivo '${filename}': ${err.message}`)
      }
    }
  }

  // Busca CYE
  /*for (let file of files) {
    const plugin = (await import(path.join(process.cwd(), pluginsDir, file))).default
    try {
      if (plugin && plugin.command && plugin.command.test(text) && text.match(plugin.command)) {
        matchingFile = file;
        break
      }
    } catch (err) {
      m.reply(`Error en el archivo ${file}: ${err.message}`)
    }
  }

  
  if (!matchingFile) {
    //console.log(`El comando '${text}' no fue encontrado`)
    return m.reply(`El comando '${text}' no fue encontrado`)
  }*/

  /*try {
    const plugin = (await import(path.join(process.cwd(), pluginsDir, matchingFile))).default

    const filename = matchingFile.replace('.js', '')
    const fileContent = await readFile(path.join(process.cwd(), pluginsDir, matchingFile), 'utf-8')
   
    await conn.sendMessage(m.chat, { document: fileContent, mimetype: 'text/javascript', fileName: filename }, { quoted: m })
    await m.reply(`Código del archivo ${filename}.js:\n\n${fileContent.toString()}`)
  
  } catch (err) {
    console.log(`Error al enviar el archivo '${matchingFile}': ${err.message}`)
    return m.reply(`Ocurrió un error al enviar el archivo '${matchingFile}'`)
  }*/
}

handler.help = ['getplugin'].map(v => v + ' <nombre del comando>')
handler.tags = ['host']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true

export default handler















