process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1'
import './config.js' 
import './plugins/_content.js'
import { createRequire } from 'module'
import path, { join } from 'path'
import {fileURLToPath, pathToFileURL} from 'url'
import { platform } from 'process'
import * as ws from 'ws'
import fs, { watchFile, unwatchFile, writeFileSync, readdirSync, statSync, unlinkSync, existsSync, readFileSync, copyFileSync, watch, rmSync, readdir, stat, mkdirSync, rename, writeFile } from 'fs'
import yargs from 'yargs'
import { spawn } from 'child_process'
import lodash from 'lodash'
import chalk from 'chalk'
import syntaxerror from 'syntax-error'
import { tmpdir } from 'os'
import { format } from 'util'
import P from 'pino'
import pino from 'pino'
import Pino from 'pino'
import { Boom } from '@hapi/boom'
import { makeWASocket, protoType, serialize } from './lib/simple.js'
import {Low, JSONFile} from 'lowdb'
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js'
import Datastore from '@seald-io/nedb';
import store from './lib/store.js'
import readline from 'readline'
import NodeCache from 'node-cache'
import { gataJadiBot } from './plugins/jadibot-serbot.js';
const { PHONENUMBER_MCC, makeInMemoryStore, DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore } = await import('@whiskeysockets/baileys')
const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000
let stopped = 'close'

protoType()
serialize()

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
  return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '')
global.timestamp = { start: new Date }

const __dirname = global.__dirname(import.meta.url);

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
//global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@').replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ']');

//news
const dbPath = path.join(__dirname, 'database');
if (!fs.existsSync(dbPath)) fs.mkdirSync(dbPath);

const collections = {
users: new Datastore({ filename: path.join(dbPath, 'users.db'), autoload: true }),
chats: new Datastore({ filename: path.join(dbPath, 'chats.db'), autoload: true }),
settings: new Datastore({ filename: path.join(dbPath, 'settings.db'), autoload: true }),
msgs: new Datastore({ filename: path.join(dbPath, 'msgs.db'), autoload: true }),
sticker: new Datastore({ filename: path.join(dbPath, 'sticker.db'), autoload: true }),
stats: new Datastore({ filename: path.join(dbPath, 'stats.db'), autoload: true }),
};

Object.values(collections).forEach(db => {
  db.setAutocompactionInterval(60000);
});

global.db = { data: {
users: {},
chats: {},
settings: {},
msgs: {},
sticker: {},
stats: {},
},
};

function sanitizeId(id) {
  return id.replace(/\./g, '_');
}

function unsanitizeId(id) {
  return id.replace(/_/g, '.');
}

function sanitizeObject(obj) {
const sanitized = {};
for (const [key, value] of Object.entries(obj)) {
const sanitizedKey = key.replace(/\./g, '_');
sanitized[sanitizedKey] = (typeof value === 'object' && value !== null) ? sanitizeObject(value) : value;
}
return sanitized;
}

function unsanitizeObject(obj) {
const unsanitized = {};
for (const [key, value] of Object.entries(obj)) {
const unsanitizedKey = key.replace(/_/g, '.');
unsanitized[unsanitizedKey] = (typeof value === 'object' && value !== null) ? unsanitizeObject(value) : value;
}
return unsanitized;
}

async function readFromNeDB(category, id) {
const sanitizedId = sanitizeId(id);
return new Promise((resolve, reject) => {
collections[category].findOne({ _id: sanitizedId }, (err, doc) => {
if (err) {
console.error(`Error leyendo ${category}/${id}:`, err);
return reject(err);
}
resolve(doc ? unsanitizeObject(doc.data) : {});
});
});
}

async function writeToNeDB(category, id, data) {
const sanitizedId = sanitizeId(id);
const sanitizedData = sanitizeObject(data);
return new Promise((resolve, reject) => {
collections[category].update(
{ _id: sanitizedId },
{ $set: { data: sanitizedData } },
{ upsert: true, multi: false },
(err) => {
if (err) {
console.error(`Error escribiendo ${category}/${id}:`, err);
return reject(err);
}
collections[category].compactDatafile();
resolve();
});
});
}

global.db.readData = async function (category, id) {
const originalId = id;
if (!global.db.data[category][originalId]) {
const data = await readFromNeDB(category, originalId);
global.db.data[category][originalId] = data;
}
return global.db.data[category][originalId];
};

global.db.writeData = async function (category, id, data) {
const originalId = id;
global.db.data[category][originalId] = { ...global.db.data[category][originalId], ...data };
await writeToNeDB(category, originalId, global.db.data[category][originalId]);
};

global.db.loadDatabase = async function () {
const loadPromises = Object.keys(collections).map(async (category) => {
const docs = await new Promise((resolve, reject) => {
collections[category].find({}, (err, docs) => {
if (err) return reject(err);
resolve(docs);
});
});
const seenIds = new Set();
for (const doc of docs) {
const originalId = unsanitizeId(doc._id);
if (seenIds.has(originalId)) {
await new Promise((res, rej) => {
collections[category].remove({ _id: doc._id }, {}, (err) => {
if (err) {
console.error(`Error eliminando duplicado ${originalId}:`, err);
rej(err);
} else {
collections[category].persistence.compactDatafile();
res();
}});
});
} else {
seenIds.add(originalId);
if (category === 'users' && (originalId.includes('@newsletter') || originalId.includes('lid'))) continue;
if (category === 'chats' && originalId.includes('@newsletter')) continue;
global.db.data[category][originalId] = unsanitizeObject(doc.data);
}}});

await Promise.all(loadPromises);
};

global.db.save = async function () {
const savePromises = [];
for (const category of Object.keys(global.db.data)) {
for (const [id, data] of Object.entries(global.db.data[category])) {
if (Object.keys(data).length > 0) {
if (category === 'users' && (id.includes('@newsletter') || id.includes('lid'))) continue;
if (category === 'chats' && id.includes('@newsletter')) continue;
savePromises.push(writeToNeDB(category, id, data));
}}}
await Promise.all(savePromises);
};

global.db.loadDatabase().then(() => {
console.log('Base de datos lista');
}).catch(err => {
console.error('Error cargando base de datos:', err);
});

// Guardar antes de cerrar
async function gracefulShutdown() {
console.log('Guardando base de datos antes de cerrar...');
await global.db.save();
console.log('Base de datos guardada. Cerrando el bot...');
process.exit(0);
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

/*const databasePath = path.join(__dirname, 'database');
if (!fs.existsSync(databasePath)) {
fs.mkdirSync(databasePath)}

const usersPath = path.join(databasePath, 'users');
const chatsPath = path.join(databasePath, 'chats');
const settingsPath = path.join(databasePath, 'settings');
const msgsPath = path.join(databasePath, 'msgs');
const stickerPath = path.join(databasePath, 'sticker');
const statsPath = path.join(databasePath, 'stats');

if (!fs.existsSync(usersPath)) fs.mkdirSync(usersPath);
if (!fs.existsSync(chatsPath)) fs.mkdirSync(chatsPath);
if (!fs.existsSync(settingsPath)) fs.mkdirSync(settingsPath);
if (!fs.existsSync(msgsPath)) fs.mkdirSync(msgsPath);
if (!fs.existsSync(stickerPath)) fs.mkdirSync(stickerPath);
if (!fs.existsSync(statsPath)) fs.mkdirSync(statsPath);

function getFilePath(basePath, id) {
return path.join(basePath, `${id}.json`)}

global.db = {
data: {
users: {},
chats: {},
settings: {},
msgs: {},
sticker: {},
stats: {},
},
chain: null,
};

global.loadDatabase = async function loadDatabase() {
const userFiles = fs.readdirSync(usersPath);
for (const file of userFiles) {
const userId = path.basename(file, '.json');
const userDb = new Low(new JSONFile(getFilePath(usersPath, userId)));
await userDb.read();
userDb.data = userDb.data || {};
global.db.data.users[userId] = userDb.data;
}

const chatFiles = fs.readdirSync(chatsPath);
for (const file of chatFiles) {
const chatId = path.basename(file, '.json');
const chatDb = new Low(new JSONFile(getFilePath(chatsPath, chatId)));
await chatDb.read();
chatDb.data = chatDb.data || {};
global.db.data.chats[chatId] = chatDb.data;
}

const settingsFiles = fs.readdirSync(settingsPath);
for (const file of settingsFiles) {
const settingId = path.basename(file, '.json');
const settingDb = new Low(new JSONFile(getFilePath(settingsPath, settingId)));
await settingDb.read();
settingDb.data = settingDb.data || {};
global.db.data.settings[settingId] = settingDb.data;
}

const msgsFiles = fs.readdirSync(msgsPath);
for (const file of msgsFiles) {
const msgId = path.basename(file, '.json');
const msgDb = new Low(new JSONFile(getFilePath(msgsPath, msgId)));
await msgDb.read();
msgDb.data = msgDb.data || {};
global.db.data.msgs[msgId] = msgDb.data;
}

const stickerFiles = fs.readdirSync(stickerPath);
for (const file of stickerFiles) {
const stickerId = path.basename(file, '.json');
const stickerDb = new Low(new JSONFile(getFilePath(stickerPath, stickerId)));
await stickerDb.read();
stickerDb.data = stickerDb.data || {};
global.db.data.sticker[stickerId] = stickerDb.data;
}

const statsFiles = fs.readdirSync(statsPath);
for (const file of statsFiles) {
const statId = path.basename(file, '.json');
const statDb = new Low(new JSONFile(getFilePath(statsPath, statId)));
await statDb.read();
statDb.data = statDb.data || {};
global.db.data.stats[statId] = statDb.data;
}};

global.db.save = async function saveDatabase() {
for (const [userId, userData] of Object.entries(global.db.data.users)) {
const userDb = new Low(new JSONFile(getFilePath(usersPath, userId)));
userDb.data = userData;
await userDb.write();
}

for (const [chatId, chatData] of Object.entries(global.db.data.chats)) {
const chatDb = new Low(new JSONFile(getFilePath(chatsPath, chatId)));
chatDb.data = chatData;
await chatDb.write();
}

for (const [settingId, settingData] of Object.entries(global.db.data.settings)) {
const settingDb = new Low(new JSONFile(getFilePath(settingsPath, settingId)));
settingDb.data = settingData;
await settingDb.write();
}

for (const [msgId, msgData] of Object.entries(global.db.data.msgs)) {
const msgDb = new Low(new JSONFile(getFilePath(msgsPath, msgId)));
msgDb.data = msgData;
await msgDb.write();
}

for (const [stickerId, stickerData] of Object.entries(global.db.data.sticker)) {
const stickerDb = new Low(new JSONFile(getFilePath(stickerPath, stickerId)));
stickerDb.data = stickerData;
await stickerDb.write();
}

for (const [statId, statData] of Object.entries(global.db.data.stats)) {
const statDb = new Low(new JSONFile(getFilePath(statsPath, statId)));
statDb.data = statData;
await statDb.write();
}};
loadDatabase();
*/

/*global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile('database.json'))

global.DATABASE = global.db; 
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) {
return new Promise((resolve) => setInterval(async function() {
if (!global.db.READ) {
clearInterval(this);
resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
}}, 1 * 1000));
}
if (global.db.data !== null) return;
global.db.READ = true;
await global.db.read().catch(console.error);
global.db.READ = null;
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {}),
};
global.db.chain = chain(global.db.data);
};
loadDatabase();*/

/* ------------------------------------------------*/

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
if (global.chatgpt.data !== null) return;
global.chatgpt.READ = true;
await global.chatgpt.read().catch(console.error);
global.chatgpt.READ = null;
global.chatgpt.data = {
users: {},
...(global.chatgpt.data || {}),
};
global.chatgpt.chain = lodash.chain(global.chatgpt.data);
};
loadChatgptDB();

/* ------------------------------------------------*/

global.creds = 'creds.json'
global.authFile = `GataBotSession`
global.authFileJB  = 'GataJadiBot'
global.rutaBot = join(__dirname, authFile)
global.rutaJadiBot = join(__dirname, authFileJB)
const respaldoDir = join(__dirname, 'BackupSession');
const credsFile = join(global.rutaBot, global.creds);
const backupFile = join(respaldoDir, global.creds);

if (!fs.existsSync(rutaJadiBot)) {
fs.mkdirSync(rutaJadiBot)
}

if (!fs.existsSync(respaldoDir)) fs.mkdirSync(respaldoDir);

const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile)
const msgRetryCounterMap = new Map();
const msgRetryCounterCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });
const userDevicesCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = global.botNumberCode

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: true,
})
const question = (texto) => {
rl.clearLine(rl.input, 0)
return new Promise((resolver) => {
rl.question(texto, (respuesta) => {
rl.clearLine(rl.input, 0)
resolver(respuesta.trim())
})})
}

let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./${authFile}/creds.json`)) {
do {
let lineM = '⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ 》'
opcion = await question(`╭${lineM}  
┊ ${chalk.blueBright('╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}
┊ ${chalk.blueBright('┊')} ${chalk.blue.bgBlue.bold.cyan(lenguajeGB['methodCode1']())}
┊ ${chalk.blueBright('╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}   
┊ ${chalk.blueBright('╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}     
┊ ${chalk.blueBright('┊')} ${chalk.green.bgMagenta.bold.yellow(lenguajeGB['methodCode2']())}
┊ ${chalk.blueBright('┊')} ${chalk.bold.redBright(`⇢  ${lenguajeGB['methodCode3']()} 1:`)} ${chalk.greenBright(lenguajeGB['methodCode4']())}
┊ ${chalk.blueBright('┊')} ${chalk.bold.redBright(`⇢  ${lenguajeGB['methodCode3']()} 2:`)} ${chalk.greenBright(lenguajeGB['methodCode5']())}
┊ ${chalk.blueBright('╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}
┊ ${chalk.blueBright('╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}     
┊ ${chalk.blueBright('┊')} ${chalk.italic.magenta(lenguajeGB['methodCode6']())}
┊ ${chalk.blueBright('┊')} ${chalk.italic.magenta(lenguajeGB['methodCode7']())}
┊ ${chalk.blueBright('╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')} 
┊ ${chalk.blueBright('╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}    
┊ ${chalk.blueBright('┊')} ${chalk.red.bgRed.bold.green(lenguajeGB['methodCode8']())}
┊ ${chalk.blueBright('┊')} ${chalk.italic.cyan(lenguajeGB['methodCode9']())}
┊ ${chalk.blueBright('┊')} ${chalk.italic.cyan(lenguajeGB['methodCode10']())}
┊ ${chalk.blueBright('┊')} ${chalk.bold.yellow(`npm run qr ${chalk.italic.magenta(`(${lenguajeGB['methodCode12']()})`)}`)}
┊ ${chalk.blueBright('┊')} ${chalk.bold.yellow(`npm run code ${chalk.italic.magenta(`(${lenguajeGB['methodCode13']()})`)}`)}
┊ ${chalk.blueBright('┊')} ${chalk.bold.yellow(`npm start ${chalk.italic.magenta(`(${lenguajeGB['methodCode14']()})`)}`)}
┊ ${chalk.blueBright('╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')} 
╰${lineM}\n${chalk.bold.magentaBright('---> ')}`)
if (!/^[1-2]$/.test(opcion)) {
console.log(chalk.bold.redBright(lenguajeGB['methodCode11'](chalk)))
}} while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./${authFile}/creds.json`))
}

console.info = () => {} 
const originalConsoleWarn = console.warn
console.warn = function() {
const message = arguments[0]
if (typeof message === 'string' && (message.includes(atob("Q2xvc2luZyBzdGFsZSBvcGVu")) || message.includes(atob("Q2xvc2luZyBvcGVuIHNlc3Npb24=")))) {
arguments[0] = ""
}
originalConsoleWarn.apply(console, arguments)
}
const originalConsoleError = console.error
console.error = function() {
const message = arguments[0]
if (typeof message === 'string' && (message.includes(atob("RmFpbGVkIHRvIGRlY3J5cHQ=")) || message.includes(atob("U2Vzc2lvbiBlcnJvcg==")))) {
arguments[0] = ""
}
originalConsoleError.apply(console, arguments)
}

/*const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile, 
browser: opcion == '1' ? ['GataBotLite-MD', 'Edge', '20.0.04'] : methodCodeQR ? ['GataBotLite-MD', 'Edge', '20.0.04'] : ["Ubuntu", "Chrome", "20.0.04"],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
syncFullHistory: false,
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache, // Resolver mensajes en espera
msgRetryCounterMap, // Determinar si se debe volver a intentar enviar un mensaje o no
defaultQueryTimeoutMs: undefined,
version,
}*/

const connectionOptions = {
logger: pino({ level: 'silent' }), 
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile,
auth: { 
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
browser: opcion == '1' ? ['GataBotLite-MD', 'Edge', '20.0.04'] : methodCodeQR ? ['GataBotLite-MD', 'Edge', '20.0.04'] : ["Ubuntu", "Chrome", "20.0.04"],
version: version, 
generateHighQualityLinkPreview: true, 
markOnlineOnConnect: false, 
syncFullHistory: false, 
msgRetryCounterCache: msgRetryCounterCache, 
userDevicesCache: userDevicesCache, 
defaultQueryTimeoutMs: 60000, 
cachedGroupMetadata: async (jid) => { 
return global.db.data.chats[jid] || {};
},
getMessage: async (key) => { 
try {
let jid = jidNormalizedUser(key.remoteJid);
let msg = await store.loadMessage(jid, key.id);
return msg?.message || "";
} catch {
return "";
}
},
keepAliveIntervalMs: 55000, 
maxIdleTimeMs: 60000, 
};

/*const supportedLanguages = ['es', 'en', 'pt', 'ar', 'id']
const configPath = path.join(__dirname, 'config.js')
let configContent = fs.readFileSync(configPath, 'utf8')
if (!global.languageLen) {
promptLoop()
} else {
console.log(chalk.bold.greenBright(lenguajeGB.languageSave()))}
function promptLoop() {
console.log(`
╭⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 𓃠             
┆ • ${chalk.bold.magentaBright('Select a language.')}
┆ • ${chalk.bold.magentaBright('Seleccione un idioma.')}
╰⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 𓃠           
┆ ${chalk.bold.cyanBright('1')} → ${chalk.bold.greenBright('"es" (Español)')}
┆ ${chalk.bold.cyanBright('2')} → ${chalk.bold.greenBright('"en" (English)')}
┆ ${chalk.bold.cyanBright('3')} → ${chalk.bold.greenBright('"pt" (Português)')}
┆ ${chalk.bold.cyanBright('4')} → ${chalk.bold.greenBright('"ar" (عرب / Arab)')}
┆ ${chalk.bold.cyanBright('5')} → ${chalk.bold.greenBright('"id" (Indonesia)')}
┆ ${chalk.bold.cyanBright('6')} → ${chalk.bold.greenBright('(Omitir / Skip)')}
╰⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 𓃠         
⚠️ ${chalk.bold.yellowBright('If you choose to skip, you will not have the opportunity to change the language later through the console.')}
⚠️ ${chalk.bold.yellowBright('Si elige omitir, no tendrá oportunidad de cambiar el idioma más tarde a través de la consola.')}\n
⬇️  ⬇️  ⬇️`.trim())
const options = ['es', 'en', 'pt', 'ar', 'id', 'Omitir / Skip']
const formattedOptions = options.map(option => chalk.bold.blueBright(option))
const selectedOptionIndex = readlineSync.keyInSelect(formattedOptions, `${chalk.bold.magentaBright('Write the number of the option.\nEscriba el número de la opción.\n--->')} `, { cancel: false })
if (selectedOptionIndex >= 0 && selectedOptionIndex <= 4) {
const selectedLanguage = supportedLanguages[selectedOptionIndex]
configContent = configContent.replace('global.languageLen = ""', 'global.languageLen = true')
configContent = configContent.replace('global.lenguajeGB = es', `global.lenguajeGB = ${selectedLanguage}`)
fs.writeFileSync(configPath, configContent, 'utf8')
console.log(chalk.bold.cyanBright(lenguajeGB.languageRegister(selectedLanguage)))
} else if (selectedOptionIndex === 5) {
configContent = configContent.replace('global.languageLen = ""', 'global.languageLen = true')
fs.writeFileSync(configPath, configContent, 'utf8')
console.log(chalk.bold.cyanBright(`\n🆗 Ignoring language settings.`))
console.log(chalk.bold.cyanBright(`🆗 Omitiendo la configuración del idioma.\n`))
} else {
console.log(chalk.bold.redBright(`\n❌ Invalid option. Remember to write only the number of the option.`))
console.log(chalk.bold.redBright(`❌ Opción no válida. Recuerde escribir sólo el número de la opción.\n`))
process.send('reset')
}}*/

global.conn = makeWASocket(connectionOptions)

if (!fs.existsSync(`./${authFile}/creds.json`)) {
if (opcion === '2' || methodCode) {
opcion = '2'
if (!conn.authState.creds.registered) {
let addNumber
if (!!phoneNumber) {
addNumber = phoneNumber.replace(/[^0-9]/g, '')
} else {
do {
phoneNumber = await question(chalk.bgBlack(chalk.bold.greenBright(lenguajeGB['phNumber2'](chalk))))
phoneNumber = phoneNumber.replace(/\D/g,'')
} while (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v)))
rl.close()
addNumber = phoneNumber.replace(/\D/g, '')

setTimeout(async () => {
let codeBot = await conn.requestPairingCode(addNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
console.log(chalk.bold.white(chalk.bgMagenta(lenguajeGB['pairingCode']())), chalk.bold.white(chalk.white(codeBot)))
}, 2000)
}}}
}

conn.isInit = false
conn.well = false

if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.save()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', "GataJadiBot"], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '2', '-type', 'f', '-delete'])))}, 30 * 1000)}

if (global.obtenerQrWeb === 1) (await import('./server.js')).default(global.conn, PORT)

//respaldo de la sesión "GataBotSession"
const backupCreds = () => {
if (fs.existsSync(credsFile)) {
fs.copyFileSync(credsFile, backupFile);
console.log(`[✅] Respaldo creado en ${backupFile}`);
} else {
console.log('[⚠] No se encontró el archivo creds.json para respaldar.');
}};

const restoreCreds = () => {
try {
if (fs.existsSync(credsFile)) {
fs.copyFileSync(backupFile, credsFile)
console.log(`[✅] creds.json reemplazado desde el respaldo.`)
} else if (fs.existsSync(backupFile)) {
fs.copyFileSync(backupFile, credsFile)
console.log(`[✅] creds.json restaurado desde el respaldo.`)
} else {
console.log('[⚠] No se encontró ni el archivo creds.json ni el respaldo.')
}} catch (error) {
console.error(`[❌] Error al restaurar creds.json`)
}}

setInterval(async () => {
await backupCreds();
console.log('[♻️] Respaldo periódico realizado.');
}, 5 * 60 * 1000);

async function connectionUpdate(update) {  
const {connection, lastDisconnect, isNewLogin} = update
global.stopped = connection
if (isNewLogin) conn.isInit = true
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
await global.reloadHandler(true).catch(console.error)
//console.log(await global.reloadHandler(true).catch(console.error));
global.timestamp.connect = new Date
}
if (global.db.data == null) loadDatabase()
if (update.qr != 0 && update.qr != undefined || methodCodeQR) {
if (opcion == '1' || methodCodeQR) {
console.log(chalk.bold.yellow(lenguajeGB['smsCodigoQR']()))}
}
if (connection == 'open') {
console.log(chalk.bold.greenBright(lenguajeGB['smsConexion']()))
await joinChannels(conn)
}
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
if (connection === 'close') {
if (reason === DisconnectReason.badSession) {
console.log(chalk.bold.cyanBright(lenguajeGB['smsConexionOFF']()))
} else if (reason === DisconnectReason.connectionClosed) {
console.log(chalk.bold.magentaBright(lenguajeGB['smsConexioncerrar']()))
restoreCreds();
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.connectionLost) {
console.log(chalk.bold.blueBright(lenguajeGB['smsConexionperdida']()))
restoreCreds();
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(chalk.bold.yellowBright(lenguajeGB['smsConexionreem']()))
} else if (reason === DisconnectReason.loggedOut) {
console.log(chalk.bold.redBright(lenguajeGB['smsConexionOFF']()))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.restartRequired) {
console.log(chalk.bold.cyanBright(lenguajeGB['smsConexionreinicio']()))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.timedOut) {
console.log(chalk.bold.yellowBright(lenguajeGB['smsConexiontiem']()))
await global.reloadHandler(true).catch(console.error) //process.send('reset')
} else {
console.log(chalk.bold.redBright(lenguajeGB['smsConexiondescon'](reason, connection)))
}}
}
process.on('uncaughtException', console.error)
//process.on('uncaughtException', (err) => {
//console.error('Se ha cerrado la conexión:\n', err)
//process.send('reset') })

let isInit = true;
let handler = await import('./handler.js');
global.reloadHandler = async function(restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error);
if (Object.keys(Handler || {}).length) handler = Handler;
} catch (e) {
console.error(e);
}
if (restatConn) {
const oldChats = global.conn.chats;
try {
global.conn.ws.close();
} catch { }
conn.ev.removeAllListeners();
global.conn = makeWASocket(connectionOptions, {chats: oldChats});
isInit = true;
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

/** Arranque nativo para subbots by - ReyEndymion >> https://github.com/ReyEndymion
 */
if (global.gataJadibts) {
const readRutaJadiBot = readdirSync(rutaJadiBot)
if (readRutaJadiBot.length > 0) {
const creds = 'creds.json'
for (const gjbts of readRutaJadiBot) {
const botPath = join(rutaJadiBot, gjbts)
const readBotPath = readdirSync(botPath)
if (readBotPath.includes(creds)) {
gataJadiBot({pathGataJadiBot: botPath, m: null, conn, args: '', usedPrefix: '/', command: 'serbot'})
}

}
}
}

/*const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {};
async function filesInit() {
for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
const file = global.__filename(join(pluginFolder, filename));
const module = await import(file);
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(e);
delete global.plugins[filename];
}}}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error)*/

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = (filename) => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
const file = global.__filename(join(pluginFolder, filename))
const module = await import(file)
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(e)
delete global.plugins[filename]
}}}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error)

global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
const dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(` SE ACTULIZADO - '${filename}' CON ÉXITO`)
else {
conn.logger.warn(`SE ELIMINO UN ARCHIVO : '${filename}'`)
return delete global.plugins[filename];
}
} else conn.logger.info(`SE DETECTO UN NUEVO PLUGINS : '${filename}'`)
const err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true,
});
if (err) conn.logger.error(`SE DETECTO UN ERROR DE SINTAXIS | SYNTAX ERROR WHILE LOADING '${filename}'\n${format(err)}`);
else {
try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`));
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(`HAY UN ERROR REQUIERE EL PLUGINS '${filename}\n${format(e)}'`);
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)));
}}}};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
const test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version']),
].map((p) => {
return Promise.race([
new Promise((resolve) => {
p.on('close', (code) => {
resolve(code !== 127);
});
}),
new Promise((resolve) => {
p.on('error', (_) => resolve(false));
})]);
}));
const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find};
Object.freeze(global.support);
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
return file.startsWith('pre-key-')
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
return fileInDir.startsWith('pre-key-')
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
if (stopped === 'close' || !conn || !conn.user) return
await clearTmp()
console.log(chalk.bold.cyanBright(lenguajeGB.smsClearTmp()))}, 1000 * 60 * 5) // 5 min 

setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await purgeSession()
console.log(chalk.bold.cyanBright(lenguajeGB.smspurgeSession()))}, 1000 * 60 * 10) // 10 min

setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await purgeSessionSB()}, 1000 * 60 * 10)

setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await purgeOldFiles()
console.log(chalk.bold.cyanBright(lenguajeGB.smspurgeOldFiles()))}, 1000 * 60 * 10)

_quickTest().then(() => conn.logger.info(chalk.bold(lenguajeGB['smsCargando']().trim()))).catch(console.error)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsMainBot']().trim()))
import(`${file}?update=${Date.now()}`)
})

async function joinChannels(conn) {
for (const channelId of Object.values(global.ch)) {
await conn.newsletterFollow(channelId).catch(() => {})
}}