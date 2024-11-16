//Código echo por: https://github.com/elrebelde21 

import { webp2png } from '../lib/webp2mp4.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import axios from 'axios';
import fs from 'fs'; 
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let suggestionQueue = {}; 
//let cooldown = {}; 
const ADMIN_GROUP_ID = "120363317570465699@g.us";  
const CANAL_ID = "120363160031023229@newsletter";
const MAX_VIDEO_SIZE_MB = 40; // Límite de 40MB X videos

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid.length > 0 ? m.mentionedJid[0] : (m.fromMe ? conn.user.jid : m.sender);
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => "https://telegra.ph/file/33bed21a0eaa789852c30.jpg");

let time = global.db.data.users[m.sender].suggetimme + 86400000; //24hs
if (new Date() - global.db.data.users[m.sender].suggetimme < 86400000) {
return m.reply(`⚠️ Ya has enviado una publicación. Por favor, espera ${msToTime(time - new Date())} antes de enviar otra.`);
}
     
if (!text && !m.quoted) return m.reply(`*⚠️ Por favor, escribe tu sugerencia, pregunta o propuesta o envía un archivo multimedia.* 📝\n\n> *Elige una categoría:*\n\n1. Sugerencia 💡\n2. Propuesta 📝\n3. Publicidad 📢\n4. Opinión 💬\n5. Feedback 🤔\n6. Pregunta ❓\n7. Error 🚨\n8. Queja 😐\n9. Música 🎵\n10. Eventos 🎉\n11. Películas 🍿\n12. Juegos 🎮\n13. Tecnología 🤖\n14. Diseño 🎨\n15. Desarrollo de software 💻\n16. Humor 😂\n17. Soporte técnico 🤝\n18. Frases ✨\n19. Contenido creativo 📸\n\nEjemplo: ${usedPrefix + command} 1 Texto`);

    let media = false;
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    let url = '';

    if (/image|video/.test(mime)) {
        media = await q.download();

        if (/video/.test(mime)) {
            let videoPath = join(__dirname, `./temp_video_${new Date().getTime()}.mp4`);
            fs.writeFileSync(videoPath, media);

            let videoStats = fs.statSync(videoPath);
            let videoSizeMB = videoStats.size / (1024 * 1024); 

            if (videoSizeMB > MAX_VIDEO_SIZE_MB) {
                fs.unlinkSync(videoPath); 
                return m.reply(`⚠️ El video es demasiado grande (más de 40MB). Por favor, córtalo o envía uno menos pesado.`);
            }

            url = videoPath;
        } else {
            url = await uploadImage(media);
        }
    } else if (/webp/.test(mime)) {
        media = await q.download();
        url = await webp2png(media);  
    }

    let [categoryChoice, ...rest] = text.split(' ');
    let suggestionText = rest.join(' ');

    if (!suggestionText && !media) return m.reply(`⚠️ Debes agregar un texto o archivo multimedia después de seleccionar la categoría.\nEjemplo: ${usedPrefix + command} 1 Mi sugerencia es...`);

    let categories = {
    '1': 'sugerencia',
    '2': 'propuesta',
    '3': 'publicidad',
    '4': 'opinión',
    '5': 'feedback',
    '6': 'pregunta',
    '7': 'error',
    '8': 'queja',
    '9': 'música',
    '10': 'eventos',
    '11': 'películas',
    '12': 'juegos',
    '13': 'tecnología',
    '14': 'diseño',
    '15': 'desarrollo de software',
    '16': 'humor', 
    '17': 'soporte técnico',
    '18': 'frases', 
    '19': 'contenido creativo'
};

    let category = categories[categoryChoice];
    if (!category) return m.reply('⚠️ Opción inválida. Elige una categoría correcta: 1, 2, 3 o 4.');

    m.reply(`✅ Tu Publicación ha sido enviada a los administradores para su revisión.`);

    let groupMetadata = await conn.groupMetadata(ADMIN_GROUP_ID);
    let groupAdmins = groupMetadata.participants.filter(p => p.admin);

if (!groupAdmins || groupAdmins.length === 0) {
return 
}

    let suggestionId = Math.floor(Math.random() * 901);  
    suggestionQueue[suggestionId] = { suggestionText, category, sender: m.sender, senderName: m.pushName, pp, suggestionId, url, mime };
 global.db.data.users[m.sender].suggetimme = new Date * 1

let confirmMessage = `El usuario @${m.sender.split('@')[0]} ha enviado una publicación. ¿La aprueban?\n\n*📝 ${category.charAt(0).toUpperCase() + category.slice(1)}:* ${suggestionText || 'Sin texto'}\n\n> Escriba "si ${suggestionId}" para aceptar\n> Escriba "no ${suggestionId}" para rechazar.\n\n> *ID de la publicación:* ${suggestionId}`;
//let options = { mentions: [m.sender], quoted: m };

    if (url) {
        if (/image/.test(mime)) {
await conn.sendMessage(ADMIN_GROUP_ID, {image: { url }, caption: confirmMessage, contextInfo:{ mentionedJid:[m.sender]}}, { quoted: m })
        } else if (/video/.test(mime)) {
await conn.sendMessage(ADMIN_GROUP_ID, {video: { url }, caption: confirmMessage, contextInfo:{ mentionedJid:[m.sender]}}, { quoted: m })        
        }
    } else {
        await conn.sendMessage(ADMIN_GROUP_ID, {text: confirmMessage, mentions: [m.sender]}, {quoted: m })
    }
};

handler.before = async (response) => {
if (!response.text || !response.text.match(/^(si|no)\s*(\d+)?/i)) return;

    let groupMetadata = await conn.groupMetadata(ADMIN_GROUP_ID);
    let groupAdmins = groupMetadata.participants.filter(p => p.admin);
    const isAdmin = groupAdmins.some(admin => admin.id === response.sender);
    if (!isAdmin) return;

    let matches = response.text.match(/^(si|no)\s*(\d+)?/i);
    let action = matches[1].toLowerCase();  
    let suggestionId = matches[2];  

    if (!suggestionId || !suggestionQueue[suggestionId]) {
        return; 
    }

    const { suggestionText, category, sender, senderName, pp, url, mime } = suggestionQueue[suggestionId];

        if (action === 'no') {
await conn.sendMessage(ADMIN_GROUP_ID, { react: { text: "❌", key: response.key } });
await conn.reply(sender, `⚠️ Los administradores han rechazado tu publicación ya que no cumple con los requisitos.`, null, { mentions: [sender] });
delete suggestionQueue[suggestionId]; 
return;
}

if (action === 'si') {
await conn.sendMessage(ADMIN_GROUP_ID, { react: { text: "✅", key: response.key } });
let approvedText = `👤 *Usuario:* ${senderName || 'Anónimo'}\n📝 *${category.charAt(0).toUpperCase() + category.slice(1)}:* ${suggestionText || 'Sin descripción'}`;
let title, body;
switch (category) {
case 'sugerencia': case 'propuesta': case 'opinion': case 'feedback':
title = `【 🔔 ¡Nueva ${category.charAt(0).toUpperCase() + category.slice(1)}! 🔔 】`;
body = `🌟 ¡Nueva ${category.charAt(0).toUpperCase() + category.slice(1)} de un usuario! 🌟`;
break;
case 'error': case 'queja':
title = `【 ⚠️ ¡Nueva queja o error! ⚠️ 】`;
body = `🔧 ¡Nuevo reporte de error o queja de un usuario! 🔧`;
break;
case 'música': case 'eventos':
title = `【 🎵 ¡Nuevo evento o música! 🎵 】`;
body = `🎤 ¡Nueva sugerencia de música o evento de un usuario! 🎤`;
break;
case 'películas': case 'juegos':
title = `【 🎬 ¡Nueva sugerencia de películas o juegos! 🎮 】`;
body = `🎥 ¡Nuevo comentario sobre películas/juegos de un usuario! 🎮`;
break;
case 'humor':
title = `【 😜 ¡Nueva broma o chiste compartido! 😂 】`;
body = `🤣 ¡Nuevo comentario gracioso de un usuario! 🤣`;
break;
case 'frases':
title = `【 ✍️ Nueva frase compartida! 】`;
body = `Un usuario compartió una frase que te hará reflexionar. ¡Lee y disfruta!`;
break;
case 'tecnología': case 'diseño': case 'desarrollo de software':
title = `【 💻 ¡Nueva sugerencia en tecnología o diseño! 💻 】`;
body = `💡 ¡Nueva sugerencia de tecnología o diseño de un usuario! 💡`;
break;
default:
title = `【 🔔 ¡Nuevo aporte! 🔔 】`;
body = `🌟 ¡Nuevo aporte de un usuario! 🌟`;
break;
}

let options = { contextInfo: { externalAdReply: {
title: title, body: body,
thumbnailUrl: pp, 
sourceUrl: accountsgb,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}};

if (url && /image/.test(mime)) {
await conn.sendMessage(CANAL_ID, { image: { url }, caption: approvedText, contextInfo: options.contextInfo }, { quoted: null });
} else if (url && /video/.test(mime)) {
await conn.sendMessage(CANAL_ID, { video: { url }, caption: approvedText, contextInfo: options.contextInfo }, { quoted: null });
fs.unlinkSync(url);  
} else {
await conn.sendMessage(CANAL_ID, { text: approvedText, contextInfo: options.contextInfo }, { quoted: null });
}

await conn.reply(sender, `✅ *¡Tu publicación fue aprobada por los administradores!* Puedes ver la publicación en el siguiente canal:\nhttps://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A`);
delete suggestionQueue[suggestionId];
}};
handler.command = /^(suggestion|propuesta|feedback|idea|contenido|sug|suggest)$/i;

export default handler;

function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours > 0 ? `${hours} horas, ` : '';
    minutes = minutes > 0 ? `${minutes} minutos, ` : '';
    seconds = `${seconds} segundo(s)`;

    return `${hours}${minutes}`;
}
