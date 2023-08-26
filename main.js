process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"
process.on('uncaughtException', console.error)
 import "./config.js"
 import {createRequire} from "module"
 import path, {join} from "path"
 import {fileURLToPath, pathToFileURL} from "url"
 import {platform} from "process" 
 import * as ws from "ws"
 import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch} from "fs"
 import yargs from "yargs"
 import {spawn} from "child_process"
 import lodash from "lodash"
 import chalk from "chalk"
 import syntaxerror from "syntax-error"
 import {tmpdir} from "os"
 import readline from "readline" 
 import parsePhoneNumber from "awesome-phonenumber" 
 import {format} from "util"
 import P from "pino"
 import Pino from "pino"
 import {Boom} from '@hapi/boom'
 import {makeWASocket, protoType, serialize} from './lib/simple.js'
 import {Low, JSONFile} from "lowdb"
 import {mongoDB, mongoDBV2} from "./lib/mongoDB.js" 
 //import store from "./lib/store.js" 
 //const {proto} = (await import("@whiskeysockets/baileys")).default; 
 const { DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeInMemoryStore, proto, jidNormalizedUser, PHONENUMBER_MCC, Browsers} = await import("@whiskeysockets/baileys") 
 //const {CONNECTING} = ws; 
 //const {chain} = lodash; 
 //const PORT = process.env.PORT || process.env.SERVER_PORT || 3000; 
  
 global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== "win32") { 
return rmPrefix ? (/file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL) : pathToFileURL(pathURL).toString(); 
 }; 
 global.__dirname = function dirname(pathURL) { 
return path.dirname(global.__filename(pathURL, true)); 
 }; 
 global.__require = function require(dir = import.meta.url) { 
return createRequire(dir); 
 }; 
 /*********** 
 ADAPTADO POR DIEGO-OFC 
  
 SOLUCIÓN DE MENSAJES EN ESPERA Y NUEVO METODO DE CONEXIÓN A WHATSSAP
 ***********/ 
 const store = makeInMemoryStore({ logger: Pino().child({ level: 'fatal', stream: 'store' }) })  
  
const pairingCode = process.argv.includes("--pairing-code")  
const useMobile = process.argv.includes("--mobile")  
const useQr = process.argv.includes("--qr")  
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })  
const question = (text) => new Promise((resolve) => rl.question(text, resolve))  
import NodeCache from "node-cache"  
const msgRetryCounterCache = new NodeCache()  
const { CONNECTING } = ws  
const { chain } = lodash  
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000  
  
protoType()  
serialize()  
  
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({  
...query,  
...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')  
global.timestamp = { start: new Date }  
  
const _dirname = global._dirname(import.meta.url)
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())  
const symbolRegex = /^[^\w\s\d]/; 
const emojiRegex = /^(\p{Emoji}|[\uFE0F\u200D])/u; 
global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts[0] ? opts[0] + '_' : ''}database.json`))
  
global.DATABASE = global.db  
global.loadDatabase = async function loadDatabase() {  
if (global.db.READ) return new Promise((resolve) => setInterval(async function() {  
if (!global.db.READ) {  
clearInterval(this)  
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)  
}}, 1 * 1000))  
if (global.db.data !== null) return  
global.db.READ = true  
await global.db.read().catch(console.error)  
global.db.READ = null  
global.db.data = { users: {}, chats: {}, stats: {}, msgs: {}, sticker: {}, settings: {},  
...(global.db.data || {})  
}  
global.db.chain = chain(global.db.data)  
}  
loadDatabase()  
  
global.chatgpt = new Low(new JSONFile(path.join(__dirname, '/db/chatgpt.json')));  
global.loadChatgptDB = async function loadChatgptDB() {  
if (global.chatgpt.READ) {  
return new Promise((resolve) =>  
setInterval(async function() {  
if (!global.chatgpt.READ) {  
clearInterval(this);  
resolve( global.chatgpt.data === null ? global.loadChatgptDB() : global.chatgpt.data );  
}}, 1 * 1000));  
}  
if (global.chatgpt.data !== null) return
global.chatgpt.READ = true
await global.chatgpt.read().catch(console.error) 
global.chatgpt.READ = null;  
global.chatgpt.data = { users: {},  
...(global.chatgpt.data || {}),  
}  
global.chatgpt.chain = lodash.chain(global.chatgpt.data);  
}  
loadChatgptDB()
  
global.authFile = `GataBotSession`  
const { state, saveState, saveCreds } = await useMultiFileAuthState(global.authFile);  
const msgRetryCounterMap = (MessageRetryMap) => {};  
const { version } = await fetchLatestBaileysVersion();  
  
if (!pairingCode && !useMobile && !useQr) {  
const title = "INFO"  
const message = "Please use one of the options: --pairing-code, --mobile, --qr" 
const boxWidth = 40 
const horizontalLine = chalk.redBright("─".repeat(boxWidth)) 
const formatText = (text, bgColor, textColor) => chalk[bgColor](chalk[textColor](text.padStart(boxWidth / 2 + text.length / 2).padEnd(boxWidth)));  
console.log(`╭${horizontalLine}╮  
|${formatText(title, 'bgRed', 'white')}|  
├${horizontalLine}┤  
|${formatText(message, 'bgWhite', 'red')}|  
╰${horizontalLine}╯`)  
}  
const connectionOptions = {  
...(!pairingCode && !useMobile && !useQr && { printQRInTerminal: false, mobile: false }),  
...(pairingCode && { printQRInTerminal: !pairingCode }),  
...(useMobile && { mobile: true }),  
...(useQr && { printQRInTerminal: true }),  
patchMessageBeforeSending: (message) => {  
const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage) 
if (requiresPatch) {  
message = { viewOnceMessage: { message: { messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {} },  
...message  
}}}}  
return message 
},  
msgRetryCounterMap, logger: Pino({ level: 'fatal' }),  
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, Pino().child({ level: 'fatal', stream: 'store' })),  
},  
browser: Browsers.macOS('Desktop'),  
version,  
getMessage: async (key) => {  
let jid = jidNormalizedUser(key.remoteJid)  
let msg = await store.loadMessage(jid, key.id)  
return msg?.message || ""  
},  
msgRetryCounterCache, connectTimeoutMs: 60_000, defaultQueryTimeoutMs: 0, keepAliveIntervalMs: 10000, emitOwnEvents: true, fireInitQueries: true, generateHighQualityLinkPreview: true,  
syncFullHistory: true, markOnlineOnConnect: true  
} 
  
global.conn = makeWASocket(connectionOptions)
store.bind(conn.ev)  
conn.isInit = false  
  
if (pairingCode && !conn.authState.creds.registered) {  
if (useMobile) conn.logger.error('Cannot use pairing code with mobile api')  
console.log(chalk.cyan('╭──────────────────────────────────────···'))
console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`) 
console.log(chalk.cyan('├──────────────────────────────────────···')) 
let phoneNumber = await question(`   ${chalk.cyan('- Number')}: `)
console.log(chalk.cyan('╰──────────────────────────────────────···')) 
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')  
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {  
console.log(chalk.cyan('╭─────────────────────────────────────────────────···'))  
console.log(`💬 ${chalk.redBright("Start with your country's WhatsApp code, Example 62xxx")}:`)  
console.log(chalk.cyan('╰─────────────────────────────────────────────────···'))
console.log(chalk.cyan('╭──────────────────────────────────────···')) 
console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`) 
console.log(chalk.cyan('├──────────────────────────────────────···')) 
phoneNumber = await question(`   ${chalk.cyan('- Number')}: `);  
console.log(chalk.cyan('╰──────────────────────────────────────···'))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')  }  
let code = await conn.requestPairingCode(phoneNumber)  
code = code?.match(/.{1,4}/g)?.join("-") || code  
console.log(chalk.cyan('╭──────────────────────────────────────···'));  
console.log(` 💻 ${chalk.redBright('Your Pairing Code')}:`);  
console.log(chalk.cyan('├──────────────────────────────────────···'));  
console.log(`   ${chalk.cyan('- Code')}: ${code}`);  
console.log(chalk.cyan('╰──────────────────────────────────────···'));  
rl.close()  
}  
  
if (useMobile && !conn.authState.creds.registered) {  
const { registration } = conn.authState.creds || { registration: {} }  
if (!registration.phoneNumber) {  
console.log(chalk.cyan('╭──────────────────────────────────────···'));  
console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`);  
console.log(chalk.cyan('├──────────────────────────────────────···'));  
let phoneNumber = await question(`   ${chalk.cyan('- Number')}: `);  
console.log(chalk.cyan('╰──────────────────────────────────────···'));  
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')  
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {  
console.log(chalk.cyan('╭─────────────────────────────────────────────────···'));  
console.log(`💬 ${chalk.redBright("Start with your country's WhatsApp code, Example 62xxx")}:`);  
console.log(chalk.cyan('╰─────────────────────────────────────────────────···'));  
console.log(chalk.cyan('╭──────────────────────────────────────···'));  
console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`);  
console.log(chalk.cyan('├──────────────────────────────────────···'));  
phoneNumber = await question(`   ${chalk.cyan('- Number')}: `);  
console.log(chalk.cyan('╰──────────────────────────────────────···'));  
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')  
}  
registration.phoneNumber = "+" + phoneNumber  
}  
  
const phoneNumber = parsePhoneNumber(registration.phoneNumber)  
if (!phoneNumber.isValid()) conn.logger.error('Invalid phone number: ' + registration.phoneNumber)  
registration.phoneNumber = phoneNumber.format("E.164")  
registration.phoneNumberCountryCode = phoneNumber.countryCallingCode  
registration.phoneNumberNationalNumber = phoneNumber.nationalNumber  
const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode]  
registration.phoneNumberMobileCountryCode = mcc  
async function enterCode() {  
try {  
console.log(chalk.cyan('╭──────────────────────────────────────···'));  
console.log(`📨 ${chalk.redBright('Please Enter Your OTP Code')}:`);  
console.log(chalk.cyan('├──────────────────────────────────────···'));  
const code = await question(`   ${chalk.cyan('- Code')}: `);  
console.log(chalk.cyan('╰──────────────────────────────────────···'));  
const response = await conn.register(code.replace(/[^0-9]/g, '').trim().toLowerCase())  
console.log(chalk.cyan('╭─────────────────────────────────────────────────···'));  
console.log(`💬 ${chalk.redBright("Successfully registered your phone number.")}`);  
console.log(chalk.cyan('╰─────────────────────────────────────────────────···'));  
console.log(response)  
rl.close()  
} catch (error) {  
conn.logger.error('Failed to register your phone number. Please try again.\n', error)  
await askOTP()  
}}  
  
async function askOTP() {  
console.log(chalk.cyan('╭──────────────────────────────────────···'));  
console.log(`📨 ${chalk.redBright('What method do you want to use? "sms" or "voice"')}`);  
console.log(chalk.cyan('├──────────────────────────────────────···'));  
let code = await question(`   ${chalk.cyan('- Method')}: `);  
console.log(chalk.cyan('╰──────────────────────────────────────···'));  
code = code.replace(/["']/g, '').trim().toLowerCase()  
if (code !== 'sms' && code !== 'voice') return await askOTP()  
registration.method = code  
try {  
await conn.requestRegistrationCode(registration)  
await enterCode()  
} catch (error) {  
conn.logger.error('Failed to request registration code. Please try again.\n', error)  
await askOTP()  
}}  
await askOTP()  
} 
  
 if (!opts['test']) { 
 if (global.db) setInterval(async () => { 
 if (global.db.data) await global.db.write() 
 if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', "GataJadiBot"], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '2', '-type', 'f', '-delete'])))}, 30 * 1000)} 
 if (opts['server']) (await import('./server.js')).default(global.conn, PORT) 
  
 async function connectionUpdate(update) { 
 const {connection, lastDisconnect, isNewLogin} = update 
 global.stopped = connection 
 if (isNewLogin) conn.isInit = true 
 const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode 
 if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) { 
 console.log(await global.reloadHandler(true).catch(console.error)) 
 global.timestamp.connect = new Date 
 } 
 if (global.db.data == null) loadDatabase() 
 if (update.qr != 0 && update.qr != undefined) { 
 console.log(chalk.bold.yellow(lenguajeGB['smsCodigoQR']()))} 
 if (connection == 'open') { 
 console.log(chalk.bold.greenBright(lenguajeGB['smsConexion']()))} 
 let reason = new Boom(lastDisconnect?.error)?.output?.statusCode 
 if (connection === 'close') { 
 if (reason === DisconnectReason.badSession) { 
 console.log(chalk.bold.cyanBright(lenguajeGB['smsConexionOFF']())) 
 } else if (reason === DisconnectReason.connectionClosed) { 
 console.log(chalk.bold.magentaBright(lenguajeGB['smsConexioncerrar']())) 
 process.send('reset') 
 } else if (reason === DisconnectReason.connectionLost) { 
 console.log(chalk.bold.blueBright(lenguajeGB['smsConexionperdida']())) 
 process.send('reset') 
 } else if (reason === DisconnectReason.connectionReplaced) { 
 console.log(chalk.bold.yellowBright(lenguajeGB['smsConexionreem']())) 
 } else if (reason === DisconnectReason.loggedOut) { 
 console.log(chalk.bold.redBright(lenguajeGB['smsConexionOFF']())) 
 } else if (reason === DisconnectReason.restartRequired) { 
 console.log(chalk.bold.cyanBright(lenguajeGB['smsConexionreinicio']())) 
 } else if (reason === DisconnectReason.timedOut) { 
 console.log(chalk.bold.yellowBright(lenguajeGB['smsConexiontiem']())) 
 process.send('reset') 
 } else { 
 console.log(chalk.bold.redBright(lenguajeGB['smsConexiondescon'](reason, connection))) 
 }}} 
 process.on('uncaughtException', console.error) 
  
 let isInit = true 
 let handler = await import('./handler.js') 
 global.reloadHandler = async function(restatConn) { 
 try { 
 const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error) 
 if (Object.keys(Handler || {}).length) handler = Handler 
 } catch (e) { 
 console.error(e) 
 } 
 if (restatConn) { 
 const oldChats = global.conn.chats 
 try { 
 global.conn.ws.close() 
 } catch { } 
 conn.ev.removeAllListeners() 
 global.conn = makeWASocket(connectionOptions, {chats: oldChats}) 
 isInit = true 
 } 
 if (!isInit) { 
 conn.ev.off('messages.upsert', conn.handler); 
 conn.ev.off('group-participants.update', conn.participantsUpdate); 
 conn.ev.off('groups.update', conn.groupsUpdate); 
 conn.ev.off('message.delete', conn.onDelete); 
 conn.ev.off('call', conn.onCall); 
 conn.ev.off('connection.update', conn.connectionUpdate); 
 conn.ev.off('creds.update', conn.credsUpdate); 
 } 
  
 //Información para Grupos 
 conn.welcome = lenguajeGB['smsWelcome']()  
 conn.bye = lenguajeGB['smsBye']()  
 conn.spromote = lenguajeGB['smsSpromote']()  
 conn.sdemote = lenguajeGB['smsSdemote']()  
 conn.sDesc = lenguajeGB['smsSdesc']()  
 conn.sSubject = lenguajeGB['smsSsubject']()  
 conn.sIcon = lenguajeGB['smsSicon']()  
 conn.sRevoke = lenguajeGB['smsSrevoke']()  
  
 conn.handler = handler.handler.bind(global.conn); 
 conn.participantsUpdate = handler.participantsUpdate.bind(global.conn); 
 conn.groupsUpdate = handler.groupsUpdate.bind(global.conn); 
 conn.onDelete = handler.deleteUpdate.bind(global.conn); 
 conn.onCall = handler.callUpdate.bind(global.conn); 
 conn.connectionUpdate = connectionUpdate.bind(global.conn); 
 conn.credsUpdate = saveCreds.bind(global.conn, true); 
  
 /*  const currentDateTime = new Date(); 
 const messageDateTime = new Date(conn.ev * 1000); 
 if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) { 
 //  console.log('Leyendo mensaje entrante:', conn.ev); 
   Object.keys(conn.chats).forEach(jid => { 
     conn.chats[jid].isBanned = false; 
     conn.chats[jid].isWelcome = false; 
   }); 
 } else { 
 // console.log(conn.chats, `Omitiendo mensajes en espera.`, conn.ev);  
 Object.keys(conn.chats).forEach(jid => { 
 conn.chats[jid].isBanned = true; 
 conn.chats[jid].isWelcomd = true; 
 }) 
 }*/ 
  
 conn.ev.on('messages.upsert', conn.handler); 
 conn.ev.on('group-participants.update', conn.participantsUpdate); 
 conn.ev.on('groups.update', conn.groupsUpdate); 
 conn.ev.on('message.delete', conn.onDelete); 
 conn.ev.on('call', conn.onCall); 
 conn.ev.on('connection.update', conn.connectionUpdate); 
 conn.ev.on('creds.update', conn.credsUpdate); 
 isInit = false 
 return true 
 } 
  
 const pluginFolder = global._dirname(join(_dirname, './plugins/index')) 
 const pluginFilter = (filename) => /\.js$/.test(filename); 
 global.plugins = {}; 
 async function filesInit() { 
 for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) { 
 try { 
 const file = global.__filename(join(pluginFolder, filename)) 
 const module = await import(file); 
 global.plugins[filename] = module.default || module 
 } catch (e) { 
 conn.logger.error(e); 
 delete global.plugins[filename] 
 }}} 
 filesInit().then((_) => Object.keys(global.plugins)).catch(console.error) 
  
 global.reload = async (_ev, filename) => { 
 if (pluginFilter(filename)) { 
 const dir = global.__filename(join(pluginFolder, filename), true) 
 if (filename in global.plugins) { 
 if (existsSync(dir)) conn.logger.info(` updated plugin - '${filename}'`) 
 else { 
 conn.logger.warn(`deleted plugin - '${filename}'`) 
 return delete global.plugins[filename] 
 }} else conn.logger.info(`new plugin - '${filename}'`) 
 const err = syntaxerror(readFileSync(dir), filename, { 
 sourceType: 'module', 
 allowAwaitOutsideFunction: true, 
 }) 
  
 if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`) 
 else { 
 try { 
 const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`)) 
 global.plugins[filename] = module.default || module 
 } catch (e) { 
 conn.logger.error(`error require plugin '${filename}\n${format(e)}'`) 
 } finally { 
 global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b))) 
 }}}} 
  
 Object.freeze(global.reload) 
 watch(pluginFolder, global.reload) 
 await global.reloadHandler() 
 async function _quickTest() { 
 const test = await Promise.all([ spawn('ffmpeg'), spawn('ffprobe'), spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']), 
 spawn('convert'), spawn('magick'), spawn('gm'), spawn('find', ['--version']), ].map((p) => { 
 return Promise.race([ 
 new Promise((resolve) => { 
 p.on('close', (code) => { 
 resolve(code !== 127) 
 })}), 
 new Promise((resolve) => { 
 p.on('error', (_) => resolve(false)) 
 })]) 
 })) 
 const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test 
 const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find} 
 Object.freeze(global.support) 
 } 
  
 function clearTmp() { 
 const tmpDir = join(__dirname, 'tmp') 
 const filenames = readdirSync(tmpDir) 
 filenames.forEach(file => { 
 const filePath = join(tmpDir, file) 
 unlinkSync(filePath)}) 
 } 
  
 function purgeSession() { 
 let prekey = [] 
 let directorio = readdirSync("./GataBotSession") 
 let filesFolderPreKeys = directorio.filter(file => { 
 return file.startsWith('pre-key-') || file.startsWith('session-') || file.startsWith('sender-') || file.startsWith('app-') 
 }) 
 prekey = [...prekey, ...filesFolderPreKeys] 
 filesFolderPreKeys.forEach(files => { 
 unlinkSync(`./GataBotSession/${files}`) 
 }) 
 }  
  
 function purgeSessionSB() { 
 try { 
 const listaDirectorios = readdirSync('./GataJadiBot/'); 
 let SBprekey = []; 
 listaDirectorios.forEach(directorio => { 
 if (statSync(`./GataJadiBot/${directorio}`).isDirectory()) { 
 const DSBPreKeys = readdirSync(`./GataJadiBot/${directorio}`).filter(fileInDir => { 
 return fileInDir.startsWith('pre-key-') || fileInDir.startsWith('app-') || fileInDir.startsWith('session-') 
 }) 
 SBprekey = [...SBprekey, ...DSBPreKeys]; 
 DSBPreKeys.forEach(fileInDir => { 
 if (fileInDir !== 'creds.json') { 
 unlinkSync(`./GataJadiBot/${directorio}/${fileInDir}`) 
 }}) 
 }}) 
 if (SBprekey.length === 0) { 
 console.log(chalk.bold.green(lenguajeGB.smspurgeSessionSB1())) 
 } else { 
 console.log(chalk.bold.cyanBright(lenguajeGB.smspurgeSessionSB2())) 
 }} catch (err) { 
 console.log(chalk.bold.red(lenguajeGB.smspurgeSessionSB3() + err)) 
 }} 
  
 function purgeOldFiles() { 
 const directories = ['./GataBotSession/', './GataJadiBot/'] 
 directories.forEach(dir => { 
 readdirSync(dir, (err, files) => { 
 if (err) throw err 
 files.forEach(file => { 
 if (file !== 'creds.json') { 
 const filePath = path.join(dir, file); 
 unlinkSync(filePath, err => { 
 if (err) { 
 console.log(chalk.bold.red(`${lenguajeGB.smspurgeOldFiles3()} ${file} ${lenguajeGB.smspurgeOldFiles4()}` + err)) 
 } else { 
 console.log(chalk.bold.green(`${lenguajeGB.smspurgeOldFiles1()} ${file} ${lenguajeGB.smspurgeOldFiles2()}`)) 
 } }) } 
 }) }) }) } 
  
 setInterval(async () => { 
 await clearTmp()         
 console.log(chalk.bold.cyanBright(lenguajeGB.smsClearTmp()))}, 1000 * 60 * 4) // 4 min  
  
 setInterval(async () => { 
 await purgeSession() 
 console.log(chalk.bold.cyanBright(lenguajeGB.smspurgeSession()))}, 1000 * 60 * 10) // 10 min 
  
 setInterval(async () => { 
 await purgeSessionSB()}, 1000 * 60 * 10) 
  
 setInterval(async () => { 
 await purgeOldFiles() 
 console.log(chalk.bold.cyanBright(lenguajeGB.smspurgeOldFiles()))}, 1000 * 60 * 10) 
  
 _quickTest().then(() => conn.logger.info(chalk.bold(lenguajeGB['smsCargando']().trim()))).catch(console.error)
