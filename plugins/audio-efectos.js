import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
let set
//function showAudioParamsUsage() { throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣`}
function replyToAudio() { m.reply('*RESPONDA A UN AUDIO O NOTA DE VOZ*')}
function replyToNumber() { m.reply(`*ESTOS PARÁMETROS SOLO ADMITE NÚMEROS ESCRIBA ${usedPrefix + command} PARA CONOCER LOS PARÁMETROS*`)}
        
// -- bass -- //
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
4️⃣👉 Establece el ancho de banda del filtro en X valor si usa [q, h, o]

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()
if (!mime) return replyToAudio()
let f, g, width_type, width
f = isNaN(args[0]) || args[0] < 21 || args[0] > 20001 || Number.isInteger(parseFloat(args[2])) === false ? 94 : Number(args[0])
        
let input_g = isNaN(args[1]) ? '' : args[1]
let num_g = parseInt(input_g)
if (/^-?\d+$/.test(input_g) && num_g >= -31 && num_g <= 31) {
args[1] = num_g < 0 ? input_g : `${input_g}-`
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
        
// -- vibra -- //
if (/vibra/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *20* | MAX: *20000*
⎔ Predeterminada: *15*
1️⃣👉 _Frecuencia del vibrato en Hz_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
2️⃣👉 _Profundidad del vibrato, su valor final será en decimal si el valor es mayor a 95 será un entero_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let f, d
f = isNaN(args[0]) || args[0] < 19 || args[0] > 20001 ? 15 : Number(args[0])
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
set = `-filter_complex "vibrato=f=${f}:d=${d}"`
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${f}* 2️⃣ *${d}*`)
}
        
// -- blown -- //        
if (/blown/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *8* | MAX: *32*
⎔ Predeterminada: *16*
1️⃣👉 _Nivel de cuantización de los samples de audio en bits_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *500* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Número de veces por segundo que se muestrea el audio_

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
3️⃣👉 _Nivel de mezcla entre el audio original y el audio con efecto de acrusher (Su valor final será un decimal si es menor a 95)_

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
4️⃣👉 _Cantidad de mezcla entre el audio original y el audio con efecto de acrusher (Su valor final será un entero si es mayor a 95)_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let bit_depth, sample_rate, mix, mix_log
let d_min, d_max, input_d, num_d, nearest
bit_depth = isNaN(args[0]) || args[0] < 7 || args[0] > 33 ? 16 : Number(args[0])
sample_rate = isNaN(args[1]) || args[1] < 499 || args[1] > 48001 ? 44100 : Number(args[1])
                       
d_min = 0, d_max = 100
input_d = isNaN(args[2]) || args[2] > 100 || Number.isInteger(parseFloat(args[2])) === false ? 50 : args[2]
num_d = parseFloat(input_d)
switch (num_d) {
case 0:case 10:case 20:case 30:case 40:case 50:case 60:case 70:case 80:case 90:case 100:
num_d = Math.max(Math.min(num_d, d_max), d_min)
args[2] = num_d.toFixed(1)
break
default:
nearest = Math.round(num_d / 10) * 10;
num_d = Math.max(Math.min(nearest, d_max), d_min);
args[2] = num_d.toFixed(1);
break    
}
mix = args[2] !== '' ? parseFloat(args[2]) / 100 : 0.5   
               
d_min = 0, d_max = 100
input_d = isNaN(args[3]) || args[3] > 100 || Number.isInteger(parseFloat(args[3])) === false ? 50 : args[3]
num_d = parseFloat(input_d)
switch (num_d) {
case 0:case 10:case 20:case 30:case 40:case 50:case 60:case 70:case 80:case 90:case 100:
num_d = Math.max(Math.min(num_d, d_max), d_min)
args[3] = num_d.toFixed(1)
break
default:
nearest = Math.round(num_d / 10) * 10;
num_d = Math.max(Math.min(nearest, d_max), d_min);
args[3] = num_d.toFixed(1);
break    
}
mix_log = args[3] !== '' ? parseFloat(args[3]) / 100 : 0.5

set = `-af acrusher=.${sample_rate}:${mix}:${bit_depth}:${mix_log}:log`
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${bit_depth}* 2️⃣ *${sample_rate}* 3️⃣ *${mix}* 4️⃣ *${mix_log}*`)
}
        
// -- deep -- //         
if (/deep/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *15*
⎔ Predeterminada: *4*
1️⃣👉 _Audio de entrada, debe ser ajustado a una velocidad de reproducción deseada, involucra cambio en la duración del audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *2000* | MAX: *2550000*
⎔ Predeterminada: *48000*
2️⃣👉 _Muestreo de audio de salida en Hz, ajuste la frecuencia de muestreo deseada_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
let atempo, asetrate
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
atempo = isNaN(args[0]) || args[0] < 0 || args[0] > 16 || Number.isInteger(parseFloat(args[0])) === false ? '4' : Number(args[0])
asetrate = isNaN(args[1]) || args[1] < 1999 || args[1] > 2550001 || Number.isInteger(parseFloat(args[0])) === false ? 48000 : Number(args[1])
set = `-af atempo=${atempo}/${atempo},asetrate=${asetrate}*2/3`
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${atempo}* 2️⃣ *${asetrate}*`)
}
        
// -- earrape -- //    
if (/earrape/.test(command)) {
if (!args[0]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *-1024* | MAX: *1024*
⎔ Predeterminada: *6*
1️⃣👉 _Amplificador de audio en dB, un valor negativo disminuye el sonido del audio y un valor positivo aumenta el sonido del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*❕ EL PARÁMETRO ES OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0])) return replyToNumber()  
if (!mime) return replyToAudio()
let vl, input_g, num_g
input_g = isNaN(args[0]) ? '' : args[0]
num_g = parseInt(input_g)
if (/^-?\d+$/.test(input_g) && num_g >= -1024 && num_g <= 1024) {
args[0] = num_g < 0 ? `${num_g}-` : `${num_g}`
} else {
args[0] = ''
}
vl = args[0] !== '' ? parseInt(args[0]) : 6

set = `-af volume=${vl}`
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${vl}*`)
}
        
// -- fast -- //     
if (/fast/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *100*
⎔ Predeterminada: *1.63*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let tempo, setrate
tempo = isNaN(args[0]) || args[0] < 1 || args[0] > 100 || Number.isInteger(parseFloat(args[0])) === false ? 1.63 : Number(args[0])
setrate = isNaN(args[1]) || args[1] < 8000 || args[1] > 48000 || Number.isInteger(parseFloat(args[1])) === false ? 44100 : Number(args[1])
set = `-filter:a "atempo=${tempo},asetrate=${setrate}"`;
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${tempo}* 2️⃣ *${setrate}*`)
}
        
// -- fat -- //     
if (/fast/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *300*
⎔ Predeterminada: *1.3*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *4000* | MAX: *4800000*
⎔ Predeterminada: *22100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let tempo, setrate
tempo = isNaN(args[0]) || args[0] < 1 || args[0] > 300 || Number.isInteger(parseFloat(args[0])) === false ? 1.3 : Number(args[0])
setrate = isNaN(args[1]) || args[1] < 4000 || args[1] > 4800000 || Number.isInteger(parseFloat(args[1])) === false ? 22100 : Number(args[1])
set = `-filter:a "atempo=${tempo},asetrate=${setrate}"`;
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${tempo}* 2️⃣ *${setrate}*`)
}
              
// -- nightcore -- //     
if (/nightcore/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *150*
⎔ Predeterminada: *1.06*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1000* | MAX: *550000*
⎔ Predeterminada: *44100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *7*
⎔ Predeterminada: *1.25*
3️⃣👉 _Ajusta la frecuencia multiplicada al valor deseado_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*❕ SI OMITE AGREGAR EL PARÁMETRO OPCIONAL O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let tempo, setrate, multi
tempo = isNaN(args[0]) || args[0] < 1 || args[0] > 150 || Number.isInteger(parseFloat(args[0])) === false ? 1.06 : Number(args[0])
setrate = isNaN(args[1]) || args[1] < 1000 || args[1] > 550000 || Number.isInteger(parseFloat(args[1])) === false ? 44100 : Number(args[1])
multi = isNaN(args[2]) || args[2] < 1 || args[2] > 7 || Number.isInteger(parseFloat(args[2])) === false ? 1.25 : Number(args[2])
set = `-filter:a atempo=${tempo},asetrate=${setrate}*${multi}`
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${tempo}* 2️⃣ *${setrate}* 3️⃣ *${multi}*`)
}

// -- robot -- //     
if (/robot/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *32* | MAX: *16384*
⎔ Predeterminada: *512*
1️⃣👉 _Tamaño de los fragmentos de señal de audio que se procesan en cada momento_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *100*
⎔ Predeterminada: *0.75*
2️⃣👉 _Cantidad de solapamiento que se utiliza entre ventanas consecutivas, Se divide una señal de audio en segmentos o ventanas para aplicarle cierto procesamiento_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let win_size, overlap, filter
win_size = isNaN(args[0]) || args[0] < 32 || args[0] > 16384 || Number.isInteger(parseFloat(args[0])) === false ? 512 : Number(args[0])
overlap = isNaN(args[1]) || args[1] < 1 || args[1] > 100 ? 0.75 : args[1] < 100 ? Number(args[1]) / 100 : Number(args[1]) / 100;
set = `-filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=${win_size}:overlap=${overlap}"`
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${win_size}* 2️⃣ *${overlap}*`)
}

// -- slow -- //  
if (/slow/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.5* | MAX: *12*
⎔ Predeterminada: *0.7*
1️⃣👉 _Velocidad de reproducción del audio. Un valor de 1.0 es la velocidad normal, mientras que un valor mayor a 1.0 acelera la reproducción, y un valor menor a 1.0 la ralentiza._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Frecuencia de muestreo del audio, indica con qué frecuencia se toman muestras del sonido. Cuanto mayor sea la frecuencia de muestreo, mayor será la calidad del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
        
let speed, sample_rate, ar
if (Number.isInteger(parseFloat(args[0]))) {
speed = isNaN(args[0]) || args[0] < 1 || args[0] > 12 ? 0.7 : Number(args[0])
} else {
ar = parseFloat(args[0]).toFixed(1);
speed = isNaN(ar) || ar < 0.5 || ar > 0.9 ? 0.7 : Number(ar)
}
sample_rate = isNaN(args[1]) || args[1] < 8000 || args[1] > 48000 || Number.isInteger(parseFloat(args[1])) === false ? 44100 : Number(args[1]);
set = `-filter:a "atempo=${speed},asetrate=${sample_rate}"`;
m.reply(`*🎧 VALORES ASIGNADOS:*\n\`\`\`${set}\`\`\`\n1️⃣ *${speed}* 2️⃣ *${sample_rate}*`);
}

// -- smooth -- //          
if (/smooth/.test(command)) {
if (!args[0] || !args[1]) throw `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *5*
⎔ Predeterminada: *2*
1️⃣👉 _Modo de interpolación de movimiento utilizado por el filtro._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *4*
⎔ Predeterminada: *2*
2️⃣👉 _Modo de compensación de movimiento utilizado por el filtro._

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *10*
⎔ Predeterminada: *1*
3️⃣👉 _Uso de interpolación vertical subpíxel_

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *240*
⎔ Predeterminada: *120*
4️⃣👉 _Controla la tasa de fotogramas de salida del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()
if (!mime) return replyToAudio()
        
let mi_mode, mc_mode, vsbmc, fps
mi_mode = args[0] < 1 || args[0] > 5 || Number.isInteger(parseFloat(args[0])) === false ? 2 : Number(args[0])
mc_mode = args[1] < 1 || args[1] > 4 || Number.isInteger(parseFloat(args[1])) === false ? 2 : Number(args[1])
vsbmc = args[2] < 0 || args[2] > 10 || Number.isInteger(parseFloat(args[2])) === false ? 1 : Number(args[2])
fps = args[3] < 1 || args[3] > 240 || Number.isInteger(parseFloat(args[3])) === false ? 120 : Number(args[3])

set = `-filter:v "minterpolate='mi_mode=${mi_mode}:mc_mode=${mc_mode}:vsbmc=${vsbmc}:fps=${fps}'"`;
m.reply(`*🎥 VALORES ASIGNADOS:*\n\`\`\`${set.replace(/:/g, ':\n')}\`\`\`\n1️⃣ *${mi_mode}* 2️⃣ *${mc_mode}* 3️⃣ *${vsbmc}* 4️⃣ *${fps}*`);
}
        

        
               
/*
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
if (err) return m.reply(`*SURGIÓ UN ERROR INTENTÉ CAMBIAR LOS VALORES DE LOS PARÁMETROS Y RECUERDE PARA APLICAR EL FILTRO DEBE DE RESPONDER AL AUDIO O NOTA DE VOZ*`)
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
