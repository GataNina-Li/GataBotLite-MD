import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
let set
//try {
//let q = m.quoted ? m.quoted : m
//let mime = (q.msg || q).mimetype || ''
//if (!/audio/.test(mime)) throw `*PARA APLICAR EL EFECTO RESPONDA A UN AUDIO O NOTA DE VOZ USANDO ${usedPrefix + command}*`
//let audio = await q.download?.()
//if (!audio) throw '*NO SE PUDO DESCARGAR EL AUDIO*'
//let set
if (!args[0] || !args[1]) throw 'Ejemplo .bass 10 30'
if (isNaN(args[0]) || isNaN(args[1])) return m.reply('Solo numeros')
        
if (/bass/.test(command)) {
      
let f = Number(args[0]);
let g = Number(args[1]);
if (isNaN(f) || isNaN(g) || f < 21 || f > 20001 || g < -31 || g > 31) {
f = 94;
g = 30;
m.reply(`Valores f y/o g fuera de rango, se han asignado los valores predeterminados: f=${f}, g=${g}`);
}
const allowedWidthTypes = ['q', 'h', 'o'];
const allowedTypes = ['peak', 'lowshelf', 'highshelf'];
const width_type = allowedWidthTypes.includes(args[2]) ? args[2] : 'o';
const width = isNaN(args[3]) ? 2 : Number(args[3]);
const type = allowedTypes.includes(args[4]) ? args[4] : 'peak';
let set = `-af equalizer=f=${f}:width_type=${width_type}:width=${width}:g=${g}:type=${type}`
m.reply(`Valores asignados a set:\n${set.replace(/:/g, ':\n')}`);
}
        
//if (/bass/.test(command)) set = `-af equalizer=f=${args[0]}:width_type=o:width=2:g=${args[1]}` //'-af equalizer=f=94:width_type=o:width=2:g=30'
if (/vibra/.test(command)) set = '-filter_complex "vibrato=f=15"'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/vibra/.test(command)) set = '-filter_complex "vibrato=f=15"'
if (/audio8d/.test(command)) set = '-af apulsator=hz=0.125'
if (/audio/.test(mime)) {
let ran = getRandom('.mp3')
let filename = join(__dirname, '../tmp/' + ran)
let media = await q.download(true)
exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err, stderr, stdout) => {
await unlinkSync(media)
if (err) throw `_*Error!*_`
let buff = await readFileSync(filename)
conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})})
} else throw `*RESPONDA*`
} catch (e) {
throw e
}}
handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk|vibra|volume|audio8d)$/i
export default handler

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}



/*let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
  try {
    let q = m.quoted ? m.quoted : m
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
    

    /*if (/bass/.test(command)) {
      if (!args[0] || !args[1]) throw 'Ejemplo .bass 10 9 2 3 8';
      let f = Number(args[0]);
      let g = Number(args[1]);
      if (isNaN(f) || isNaN(g) || f < 20 || f > 20000 || g < -30 || g > 30) {
        f = 94;
        g = 30;
        await m.reply(`Valores f y/o g fuera de rango, se han asignado los valores predeterminados: f=${f}, g=${g}`);
      }
      const allowedWidthTypes = ['q', 'h', 'o'];
      const allowedTypes = ['peak', 'lowshelf', 'highshelf'];
      const width_type = allowedWidthTypes.includes(args[2]) ? args[2] : 'o';
      const width = isNaN(args[3]) ? 2 : Number(args[3]);
      const type = allowedTypes.includes(args[4]) ? args[4] : 'peak';
      let set = `-af equalizer=f=${f}:width_type=${width_type}:width=${width}:g=${g}:type=${type}`
      await m.reply(`Valores asignados a set:\n${set.replace(/:/g, ':\n')}`);
    }*/
    
/*if (!args[0] || !args[1]) throw 'Ejemplo .bass 10 9 2 3 8'
if (isNaN(args[0]) || isNaN(args[1])) return m.reply('Pake angka')
let set
if (/bass/.test(command)) set = `-af equalizer=f=${args[0]}:width_type=o:width=2:g=${args[1]}`
if (/vibra/.test(command)) set = '-filter_complex "vibrato=f=15"'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/vibra/.test(command)) set = '-filter_complex "vibrato=f=15"'
if (/audio8d/.test(command)) set = '-af apulsator=hz=0.125'
if (/audio/.test(mime)) {
     // let ran = getRandom('.mp3')
  let ran = (new Date * 1) + '.mp3'
      let filename = join(__dirname, '../tmp/' + ran)
      let media = await q.download(true)

      try {
        await exec(`ffmpeg -i ${media} ${set} ${filename}`)
        await unlinkSync(media)
        let buff = await readFileSync(filename)
        await conn.sendFile(m.chat, buff, ran, null, m, true, {
          type: 'audioMessage', 
          ptt: true 
        })
      } catch (e) {
        throw `_*Error!*_`
      }
    } else {
      throw `*RESPONDA*`
    }
  } catch (e) {
    throw e
  }
}

handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk|vibra|volume|audio8d)$/i
export default handler

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}*/

