import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import { en, es, id, ar, pt, de, it } from './lib/idiomas/total-idiomas.js'

// ES ➜ Agregué primero el número del Bot como prioridad
// ES ➜ Si desea recibir reportes debe de usar los tres parámetros (Número, nombre y true)
// EN ➜ Add the Bot number as priority first
// EN ➜ If you want to receive reports you must use the three parameters (Number, name and true)
global.owner = [
['5214774444444', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿 🌻🐈', true], 
['593968263524', '𝙂𝘽 𝘼𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖 🌻🐈', true],
['573012482597'],
['5218715746374'],
['5492266613038'], 
['595976126756'],
['593968585383'],
['5219999699999'],
['5216646666666'],
['51968382008']]

global.mods = [] 
global.prems = []

// Cambiar a false para desactivar en "auto-reconexion" de sub-bots
global.gataJadibts = true

// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = true

// ❰❰ methodCode ❱❱
// [ES] > Agregue el número del Bot en "botNumberCode" si desea recibir código de 8 dígitos sin registrar el número en la consola.
// [EN] > Add the Bot number in "botNumberCode" if you want to receive 8-digit code without registering the number in the console.
global.botNumberCode = "" //example: "+59309090909"
global.confirmCode = "" // No tocar esto : Do not touch this line

// ES ➜ Agregue el código de idioma el cual usará GataBot  
// EN ➜ Add the language code which GataBot will use
//  es = Español      id = Bahasa Indonesia       ar = عرب
//  en = English      pt = Português              de = Deutsch
//  it = Italiano
global.lenguajeGB = es  //<-- Predeterminado en idioma Español 

// ES ➜ Consigue Apikey en https://platform.openai.com/account/api-keys
global.openai_key = 'sk-0'

// ES ➜ Consigue tu ID de organizacion en: https://platform.openai.com/account/org-settings
global.openai_org_id = 'org-3'

//global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
//global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.baileys = '@whiskeysockets/baileys'

global.APIs = { 
lolhuman: { url: 'https://api.lolhuman.xyz/api/', key: 'GataDiosV3' },
skizo: { url: 'https://skizo.tech/api/', key: 'GataDios' },
alyachan: { url: 'https://api.alyachan.dev/api/', key: null }, 
exonity: { url: 'https://exonity.tech/api/', key: 'GataDios' },
ryzendesu: { url: 'https://api.ryzendesu.vip/api/', key: null },
neoxr: { url: 'https://api.neoxr.eu/api/', key: 'GataDios' },
davidcyriltech: { url: 'https://api.davidcyriltech.my.id/', key: null },
dorratz: { url: 'https://api.dorratz.com/', key: null },
siputzx: { url: 'https://api.siputzx.my.id/api/', key: null },
vreden: { url: 'https://api.vreden.web.id/api/', key: null },
delirius: { url: 'https://delirius-apiofc.vercel.app/', key: null },
fgmods: { url: 'https://api.fgmods.xyz/api/', key: 'elrebelde21' },
popcat: { url: 'https://api.popcat.xyz', key: null }
}

global.mods = [] 
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

global.packname = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿 🌻🐈'
global.author = '𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨'
global.policyGB = 'github.com/GataNina-Li/GataBot-MD/blob/master/terms.md'

// ES ➜ Está parte es para mostrar el contacto de alguien al usar #contacto
// EN ➜ This part is to display someone's contact using #contact
global.official = [ 
['593968263524', 'Gata Dios 💻', 1], 
['573147616444', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],  
['5214434703586', '𝗖𝘂𝘀𝘁𝗼𝗺𝗲𝗿 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 🥏', 1],
['5521989092076', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗮 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1]] 

global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇪🇨

global.vs = '1.4.0'
global.vsJB = '5.0 (beta)'
global.gt = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿'

global.wm = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿 🌻🐈 : 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨'
global.igfg = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿'
global.nomorown = owner[0][0]

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.htjava = '⫹⫺'
global.correct = '✅'
global.fault = '💔'
global.alert = '⚠️'
global.sending = '📋'
global.sent = '❇️'
global.notsent = '❗'
global.waitemot = '⌛'
global.waitemot2 = '⏳'

// redes
global.tk = 'https://www.tiktok.com/@gata_dios'
global.ths = 'https://www.threads.net/@gata_dios'
global.yt = 'https://youtube.com/@gatadios'
global.yt2 = 'https://youtu.be/Ko019wvu2Tc'
global.ig = 'https://www.instagram.com/gata_dios'
global.md = 'https://github.com/GataNina-Li/GataBotLite-MD'
global.fb = 'https://www.facebook.com/groups/872989990425789'
global.paypal = 'https://paypal.me/OficialGD'
global.asistencia = 'https://wa.me/message/MEKOUFBEOG5ED1'
global.tg = 'https://t.me/globalgb' // canal

// canales
global.canal1 = "https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A"
global.canal2 = "https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A"
global.canal3 = "https://whatsapp.com/channel/0029VaKn22pDJ6GwY61Ftn15"
global.canal4 = "https://whatsapp.com/channel/0029VabS4KD8KMqeVXXmkG1D"
global.canal5 = "https://whatsapp.com/channel/0029VatPwXw7Noa8n1Vinx3g"

// grupos (algunos pueden estar repetidos con otros, es temporal)
global.nna = 'https://whatsapp.com/channel/0029Va6yY0iLY6d6XDmqA03g' //CANAL UPDATE
global.nn2 = 'https://t.me/globalgb'
global.nna2 = 'https://chat.whatsapp.com/KaTeeaexrGSHBzPm4s945b' //Help
global.nn = 'https://chat.whatsapp.com/JRG6rVJJV40IxlI1wjQ0E9' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/B5s3ohjEGofH5YDD05jAV5' //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/HVLk7c3ZlNN0mJjodw4NkV' //Grupo 3
global.nnntt = 'https://chat.whatsapp.com/BSDrNVhj2lVElUgrNnGoby' //Grupo 4
global.nnnttt = 'https://chat.whatsapp.com/CciFSHhsYxd9TqW2tZhhZx' //Grupo 5
global.nnnttt1 = 'https://chat.whatsapp.com/Ej5AUrpmYnJKYtEa6YMwK6' //Grupo 6 COL
global.nnnttt2 = 'https://chat.whatsapp.com/I9DsG6ABKer27NbW01Nl39' //Grupo 7 COL
global.nnnttt3 = 'https://chat.whatsapp.com/KQtWZDVfosTKbheIlndLBN' //Grupo 8 COL
global.nnnttt4 = 'https://chat.whatsapp.com/BngbJC3aBVhF5KjoaawiT1' //Grupo 9 COL
global.nnnttt5 = 'https://chat.whatsapp.com/HOCsvLox0Ui7cwzTCeFhPP' //A.T.M.M

// Imágenes locales
global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/img1.jpg')
global.imagen3 = fs.readFileSync('./media/menus/img2.jpg')
global.imagen4 = fs.readFileSync('./media/menus/img3.jpg')
global.imagen5 = fs.readFileSync('./media/menus/img4.jpg')
global.imagen6 = fs.readFileSync('./media/menus/img5.jpg')
global.imagen7 = fs.readFileSync('./media/menus/img6.jpg')
global.imagen8 = fs.readFileSync('./media/menus/img7.jpg')
global.imagen9 = fs.readFileSync('./media/menus/img8.jpg')
global.imagen10 = fs.readFileSync('./media/menus/img9.jpg')
global.imagen11 = fs.readFileSync('./media/menus/img10.jpg')
global.imagen12 = fs.readFileSync('./media/menus/img11.jpg')
global.imagen13 = fs.readFileSync('./media/menus/img12.jpg')

// Imágenes en la nube
global.img = 'https://i.imgur.com/AwlL9kc.jpeg'
global.img2 = 'https://i.imgur.com/p18q1Ok.jpeg'
global.img3 = 'https://i.imgur.com/01Z8a0a.jpg' //ft rectangular
global.img5 = 'https://i.imgur.com/80uz37R.jpeg'
global.img6 = 'https://i.imgur.com/3zSvnGY.jpeg'
global.img7 = 'https://i.imgur.com/WY4r6up.jpeg'
global.img8 = 'https://i.imgur.com/qCO3RYa.jpeg'
global.img9 = 'https://i.imgur.com/dWk51FS.jpeg'
global.img10 = 'https://i.imgur.com/T4NjKMi.jpeg'
global.img11 = 'https://i.imgur.com/jqyWSlh.jpeg'
global.img12 = 'https://i.imgur.com/mpCRttm.jpeg'
global.img13 = 'https://i.imgur.com/O04epJI.jpeg'
global.img14 = 'https://i.imgur.com/jfbuJRU.jpeg'
global.img15 = 'https://i.imgur.com/DzqUXkW.jpeg'
global.img17 = 'https://i.imgur.com/Y3ZWq7z.jpeg'
global.img18 = 'https://i.imgur.com/kaUN1Nz.jpeg'
global.img19 = 'https://i.imgur.com/7yJ22hJ.jpeg'
global.img20 = 'https://i.imgur.com/qcD353P.jpeg'
global.img21 = 'https://i.imgur.com/3fJTaX6.jpeg'
global.img21 = 'https://i.imgur.com/akofqcE.jpeg' // imagen paypal

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tg]
global.redesMenu = [nna, nn2, nn, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, md, ig, paypal, yt, asistencia, fb, tg]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]
global.accountsgb = [canal1, canal2, canal3, canal4, canal5, tk, ig, yt, paypal, fb, ths, md, asistencia, tg]

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel

// IDs de canales
global.ch = {
ch1: '120363336642332098@newsletter',
ch2: '120363160031023229@newsletter',
ch3: '120363169294281316@newsletter',
ch4: '120363203805910750@newsletter',
ch5: '120363302472386010@newsletter',
ch6: '120363301598733462@newsletter',
ch7: '120363190430436554@newsletter',
ch8: '120363374372683775@newsletter', 
ch9: '120363167110224268@newsletter',
ch10: '120363323882134704@newsletter',
ch11: '120363370415738881@newsletter',
ch12: '120363385983031660@newsletter',
ch13: '120363343811229130@newsletter',
ch14: '120363305941657414@newsletter',
ch15: '120363263466636910@newsletter',
ch16: '120363420992828502@newsletter',
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})
