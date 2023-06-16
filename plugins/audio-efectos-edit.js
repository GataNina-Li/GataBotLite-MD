import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
let set
function replyToAudio() { m.reply(lenguajeGB.smsControlAudio1())}
function replyToNumber() { m.reply(lenguajeGB.smsControlAudio2(usedPrefix, command))}
        
// -- bass -- //
if (/edit(ed|ar)?bass/.test(command)) {
if (!args[0] || !args[1]) return  m.reply(lenguajeGB.smsAudioEdit1(usedPrefix, command))
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
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set.replace(/:/g, ':\n')}\`\`\`\n1️⃣ *${f}* 2️⃣ *${g}* 3️⃣ *${width_type}* 4️⃣ *${width}*`)
}
        
// -- vibra -- //
if (/edit(ed|ar)?vibra/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit2(usedPrefix, command))
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
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${f}* 2️⃣ *${d}*`)
}
        
// -- blown -- //        
if (/edit(ed|ar)?blown/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit3(usedPrefix, command))
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
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${bit_depth}* 2️⃣ *${sample_rate}* 3️⃣ *${mix}* 4️⃣ *${mix_log}*`)
}
        
// -- deep -- //         
if (/edit(ed|ar)?deep/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit4(usedPrefix, command))
let atempo, asetrate
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
atempo = isNaN(args[0]) || args[0] < 0 || args[0] > 16 || Number.isInteger(parseFloat(args[0])) === false ? '4' : Number(args[0])
asetrate = isNaN(args[1]) || args[1] < 1999 || args[1] > 2550001 || Number.isInteger(parseFloat(args[0])) === false ? 48000 : Number(args[1])
set = `-af atempo=${atempo}/${atempo},asetrate=${asetrate}*2/3`
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${atempo}* 2️⃣ *${asetrate}*`)
}
        
// -- earrape -- //    
if (/edit(ed|ar)?earrape/.test(command)) {
if (!args[0]) throw lenguajeGB.smsAudioEdit5(usedPrefix, command)
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
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${vl}*`)
}
        
// -- fast -- //     
if (/edit(ed|ar)?fast/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit6(usedPrefix, command))
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let tempo, setrate
tempo = isNaN(args[0]) || args[0] < 1 || args[0] > 100 || Number.isInteger(parseFloat(args[0])) === false ? 1.63 : Number(args[0])
setrate = isNaN(args[1]) || args[1] < 8000 || args[1] > 48000 || Number.isInteger(parseFloat(args[1])) === false ? 44100 : Number(args[1])
set = `-filter:a "atempo=${tempo},asetrate=${setrate}"`;
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${tempo}* 2️⃣ *${setrate}*`)
}
        
// -- fat -- //     
if (/edit(ed|ar)?fat/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit7(usedPrefix, command))
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let tempo, setrate
tempo = isNaN(args[0]) || args[0] < 1 || args[0] > 300 || Number.isInteger(parseFloat(args[0])) === false ? 1.3 : Number(args[0])
setrate = isNaN(args[1]) || args[1] < 4000 || args[1] > 4800000 || Number.isInteger(parseFloat(args[1])) === false ? 22100 : Number(args[1])
set = `-filter:a "atempo=${tempo},asetrate=${setrate}"`;
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${tempo}* 2️⃣ *${setrate}*`)
}
              
// -- nightcore -- //     
if (/edit(ed|ar)?nightcore/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit8(usedPrefix, command))
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let tempo, setrate, multi
tempo = isNaN(args[0]) || args[0] < 1 || args[0] > 150 || Number.isInteger(parseFloat(args[0])) === false ? 1.06 : Number(args[0])
setrate = isNaN(args[1]) || args[1] < 1000 || args[1] > 550000 || Number.isInteger(parseFloat(args[1])) === false ? 44100 : Number(args[1])
multi = isNaN(args[2]) || args[2] < 1 || args[2] > 7 || Number.isInteger(parseFloat(args[2])) === false ? 1.25 : Number(args[2])
set = `-filter:a atempo=${tempo},asetrate=${setrate}*${multi}`
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${tempo}* 2️⃣ *${setrate}* 3️⃣ *${multi}*`)
}

// -- robot -- //     
if (/edit(ed|ar)?robot/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit9(usedPrefix, command))
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let win_size, overlap, filter
win_size = isNaN(args[0]) || args[0] < 32 || args[0] > 16384 || Number.isInteger(parseFloat(args[0])) === false ? 512 : Number(args[0])
overlap = isNaN(args[1]) || args[1] < 1 || args[1] > 100 ? 0.75 : args[1] < 100 ? Number(args[1]) / 100 : Number(args[1]) / 100;
set = `-filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=${win_size}:overlap=${overlap}"`
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${win_size}* 2️⃣ *${overlap}*`)
}

// -- slow -- //  
if (/edit(ed|ar)?slow/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit10(usedPrefix, command))
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
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${speed}* 2️⃣ *${sample_rate}*`);
}

// -- smooth -- //          
if (/edit(ed|ar)?smooth/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit11(usedPrefix, command))
if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()
if (!mime) return replyToAudio()
        
let mi_mode, mc_mode, vsbmc, fps
mi_mode = args[0] < 1 || args[0] > 5 || Number.isInteger(parseFloat(args[0])) === false ? 2 : Number(args[0])
mc_mode = args[1] < 1 || args[1] > 4 || Number.isInteger(parseFloat(args[1])) === false ? 2 : Number(args[1])
vsbmc = isNaN(args[2]) || args[2] < 0 || args[2] > 10 || Number.isInteger(parseFloat(args[2])) === false ? 1 : Number(args[2])
fps = isNaN(args[3]) || args[3] < 1 || args[3] > 240 || Number.isInteger(parseFloat(args[3])) === false ? 120 : Number(args[3])

set = `-filter:v "minterpolate='mi_mode=${mi_mode}:mc_mode=${mc_mode}:vsbmc=${vsbmc}:fps=${fps}'"`;
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set.replace(/:/g, ':\n')}\`\`\`\n1️⃣ *${mi_mode}* 2️⃣ *${mc_mode}* 3️⃣ *${vsbmc}* 4️⃣ *${fps}*`);
}

// -- tupai -- //       
if (/edit(ed|ar)?(tupai|squirrel|chipmunk)/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit12(usedPrefix, command))

if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let atempo, asetrate, ar       
if (Number.isInteger(parseFloat(args[0]))) {
atempo = isNaN(args[0]) || args[0] < 1 || args[0] > 10 ? 0.5 : Number(args[0])
} else {
ar = parseFloat(args[0]).toFixed(1);
atempo = isNaN(ar) || ar < 0.5 || ar > 0.9 ? 0.5 : Number(ar)
}
asetrate = isNaN(args[1]) || args[1] < 2000 || args[1] > 960000 ? 65100 : Number(args[1])
set = `-filter:a "atempo=${atempo},asetrate=${asetrate}"`;
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${atempo}* 2️⃣ *${asetrate}*`);
}

//if (/audio8d/.test(command)) set = '-af apulsator=hz=0.125:amount=1'   
if (/edit(ed|ar)?audio8d/.test(command)) {
if (!args[0] || !args[1]) return m.reply(lenguajeGB.smsAudioEdit13(usedPrefix, command))

if (isNaN(args[0]) || isNaN(args[1])) return replyToNumber()  
if (!mime) return replyToAudio()
let hz, amount, ar 

if (Number.isInteger(parseFloat(args[0]))) {
hz = isNaN(args[0]) || args[0] < 1 || args[0] > 5 ? 0.125 : Number(args[0]);
} else {
ar = parseFloat(args[0]).toFixed(3);
hz = isNaN(ar) || ar < 0.001 || ar > 0.999 ? 0.125 : Number(ar);
}
        
if (Number.isInteger(parseFloat(args[1]))) {
amount = isNaN(args[1]) || args[1] < 0 || args[1] > 1 ? 1 : Number(args[1]);
} else {
ar = parseFloat(args[1]).toFixed(2);
amount = isNaN(ar) || ar < 0.01 || ar > 0.99 ? 1 : Number(ar);
}
set = `-af apulsator=hz=${hz}:amount=${amount}`
m.reply(`*🎧 ${lenguajeGB.smsControlAudio5()}*\n\`\`\`${set}\`\`\`\n1️⃣ *${hz}* 2️⃣ *${amount}*`);
}    
if (/audio/.test(mime)) {
let ran = getRandom('.mp3')
let filename = join(__dirname, '../tmp/' + ran)
let media = await q.download(true)
exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err, stderr, stdout) => {
await unlinkSync(media)
if (err) return m.reply(lenguajeGB.smsControlAudio3())
let buff = await readFileSync(filename)
conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})})
} else return m.reply(lenguajeGB.smsControlAudio4())
} catch (e) {
return e
}}
handler.command = /^(edit(ed|ar)?(bass|vibra|blown|deep|earrape|fas?t|nightcore|robot|slow|smooth|tupai|squirrel|chipmunk|audio8d))$/i
export default handler

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
