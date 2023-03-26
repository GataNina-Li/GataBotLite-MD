import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
let set
if (/bass/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *20* | MAX: *20000*
⎔ Predeterminada: *94*
1️⃣👉 _Frecuencia central del filtro en Hz_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *-30* | MAX: *30*
⎔ Predeterminada: *25*
2️⃣👉 _Ganancias del filtro en dB_

⎔ *(Parámetro opcional)*
⎔ OPCIONES: *"q", "h", "o"*
⎔ Predeterminada: *o*
3️⃣👉 _Tipo de ancho de banda del filtro_
*q:* Relación de calidad, frecuencia más específica.
*h:* Ancho de banda constante, igualdad en todas las frecuencias.
*o:* Ancho de banda en octavas, se duplicará o reducirá a la mitad en cada octava (cada vez que la frecuencia se duplica o se divide por dos).

⎔ *(Parámetro opcional)*
⎔ MIN: *2* | MAX: *500*
⎔ Predeterminada: *5*
4️⃣ Establece el ancho de banda del filtro en X valor si usa [q, h, o]

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`

if (isNaN(args[0]) || isNaN(args[1])) return m.reply(`*ESTOS PARÁMETROS SOLO ADMITE NÚMEROS ESCRIBA ${usedPrefix + command} PARA CONOCER LOS PARÁMETROS*`)     
let f, g, width_type, width
f = isNaN(args[0]) || args[0] < 21 || args[0] > 20001 ? 94 : Number(args[0])
        
let input_g = isNaN(args[1]) ? '' : args[1]
let num_g = parseInt(input_g);
if (/^-?\d+$/.test(input_g) && num_g >= -31 && num_g <= 31) {
args[1] = num_g < 0 ? input_g : `-${input_g}`
} else {
args[1] = ''
}
g = args[1] !== '' ? parseInt(args[1]) : 25
        
const allowedWidthTypes = ['q', 'h', 'o']
width_type = allowedWidthTypes.includes(args[2]) ? args[2] : 'o'
width = isNaN(args[3]) || args[3] < 3 || args[3] > 501 ? 5 : Number(args[3])
set = `-af equalizer=f=${f}:width_type=${width_type}:width=${width}:g=${g}`
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set.replace(/:/g, ':\n')}\`\`\`\n1️⃣ *${f}* 2️⃣ *${g}* 3️⃣ *${width_type}* 4️⃣ *${width}*`)
}

//if (/vibra/.test(command)) set = '-filter_complex "vibrato=f=15"'
if (/vibra/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *20* | MAX: *20000*
⎔ Predeterminada: *15*
1️⃣👉 _Frecuencia del vibrato en Hz_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
2️⃣👉 _Profundidad del vibrato, su valor final será en decimal_

⎔ *(Parámetro opcional)*
⎔ OPCIONES: *"sine", "square", "triangle", "sawup", "sawdown"*
⎔ Predeterminada: *sine*
3️⃣ Tipo de forma de onda del vibrato

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *20*
⎔ Predeterminada: *5*
4️⃣ Tamaño del buffer interno en segundos

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *10*
⎔ Predeterminada: *0.3*
5️⃣ Ratio de mezcla de vibrato seco/húmedo

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
  
let f, d, t, s, r
f = isNaN(args[0]) || args[0] < 19 || args[0] > 20001 ? 15 : Number(args[0])
//d = isNaN(args[1]) || args[1] < 0 || args[1] > 1 ? 0.5 : Number(args[1])
let d_min = 0, d_max = 100;
let input_d = isNaN(args[1]) ? '' : args[1]
let num_d = parseFloat(input_d)
switch (num_d) {
case 0:case 10:case 20:case 30:case 40:case 50:case 60:case 70:case 80:case 90:case 100:
num_d = Math.max(Math.min(num_d, d_max), d_min)
args[1] = num_d.toFixed(1)
break
default:
let nearest = Math.round(num_d / 10) * 10
num_d = Math.max(Math.min(nearest, d_max), d_min)
args[1] = num_d.toFixed(1)
break
}
d = args[1] !== '' ? parseFloat(args[1]) / 100 : 0.5
t = ['sine', 'square', 'triangle', 'sawup', 'sawdown'].includes(args[2]) ? args[2] : 'sine'
s = isNaN(args[3]) || args[3] < 0 || args[3] > 21 ? 5 : Number(args[3])
r = isNaN(args[4]) || args[4] < 0 || args[4] > 11 ? 0.3 : Number(args[4])
//set = `-filter_complex "vibrato=f=${f}:d=${d}:t=${t}:s=${s}:r=${r}"`
set = `-filter_complex "vibrato=f=${f}"`
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${f}* 2️⃣ *${d}* 3️⃣ *${t}* 4️⃣ *${s}* 5️⃣ *${r}*`)
}
        
        
/*
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
if (/audio8d/.test(command)) set = '-af apulsator=hz=0.125'*/
if (/audio/.test(mime)) {
let ran = getRandom('.mp3')
let filename = join(__dirname, '../tmp/' + ran)
let media = await q.download(true)
exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err, stderr, stdout) => {
await unlinkSync(media)
if (err) throw `*SURGIÓ UN ERROR INTENTÉ CAMBIAR LOS VALORES DE LOS PARÁMETROS Y RECUERDE PARA APLICAR EL FILTRO DEBE DE RESPONDER AL AUDIO O NOTA DE VOZ*`
let buff = await readFileSync(filename)
conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})})
} else throw `*RESPONDA A UN AUDIO O NOTA DE VOZ PARA APLICAR EL FILTRO*`
} catch (e) {
throw e
}}
handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk|vibra|volume|audio8d)$/i
export default handler

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
