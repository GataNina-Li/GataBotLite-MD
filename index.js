import { join, dirname } from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import chalk from "chalk"
import { createInterface } from 'readline'
import yargs from 'yargs'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, './package.json')) 
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const startColor = chalk.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));

function getRandomGradient() {
const color1 = Math.floor(Math.random() * 16777215).toString(16);
const color2 = Math.floor(Math.random() * 16777215).toString(16);
return [`#${color1}`, `#${color2}`];
}

const options = {
font: 'block',
align: 'center',
colors: getRandomGradient(),
background: 'transparent',
letterSpacing: 1,
lineHeight: 1,
space: true,
maxLength: '0',
};
console.log(startColor('❤️ Iniciando...'));
cfonts.say('gatabot\nlite\nmd'.trim(), options);
say(`Gracias a @gata_dios`, {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']});

var isRunning = false
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]

say('✅ 𝙔𝘼 𝙋𝙐𝙀𝘿𝙀 𝙀𝙎𝘾𝘼𝙉𝙀𝘼𝙍 𝙀𝙇 𝘾𝙊𝘿𝙄𝙂𝙊 𝙌𝙍\n𝙔𝙊𝙐 𝘾𝘼𝙉 𝙉𝙊𝙒 𝙎𝘾𝘼𝙉 𝙏𝙃𝙀 𝙌𝙍 𝘾𝙊𝘿𝙀', {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']})
  
setupMaster({
exec: args[0],
args: args.slice(1), })
let p = fork()
p.on('message', data => {
//setTimeout(() => {  
//console.log('┆ ✓ ACTIVIDAD ACTUALIZADA\n╰----------------- - - -', data)//}, 50000)
}
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break }})
p.on('exit', (_, code) => {
isRunning = false
console.error('⚠️ Error Inesperado', code)
  
p.process.kill()
isRunning = false
start.apply(this, arguments)
  
if (process.env.pm_id) {
process.exit(1)
} else {
process.exit()
}
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())})}
start('main.js')
