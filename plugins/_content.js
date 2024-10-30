import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

let handler = m => m
handler.before = async function (m, { conn } ) {

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
global.nn = 'https://chat.whatsapp.com/HBIIrHorHbW2LIxlS9MjRI' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/CtA2nopOZor0bRwV3FCYH3' //Grupo 2
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
global.accountsgb = [canal1, canal2, canal3, canal4, canal5, tk, ig, yt, paypal, fb, ths, md, asistencia, tg].getRandom()

global.canalIdGB = ["120363160031023229@newsletter", "120363169294281316@newsletter", "120363203805910750@newsletter", "120363302472386010@newsletter"]
global.canalNombreGB = ["INFINITY-WA 💫", "GB - UPDATE 🐈", "Tips sobre GataBot 🤩", "NEW PROJECT: YartexBot-MD ✨"]
global.channelRD = await getRandomChannel()

global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: gataImg.getRandom(), thumbnail: imagen1, sourceUrl: accountsgb }}}, { quoted: m }
global.fakeChannel2 = { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }, forwardingScore: 200, externalAdReply: { title: packname, body: author, thumbnailUrl: gataMenu.getRandom(), sourceUrl: accountsgb, mediaType: 1, renderLargerThumbnail: false }}
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

}
export default handler

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdGB.length)
let id = canalIdGB[randomIndex]
let nombre = canalNombreGB[randomIndex]
return { id, nombre }
} 	
