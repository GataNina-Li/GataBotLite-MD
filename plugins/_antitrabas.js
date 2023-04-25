//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿 🌻🐈', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 4000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `𝙀𝙇 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍 @${m.sender.split("@")[0]} 𝘼𝘾𝘼𝘽𝘼 𝘿𝙀 𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙌𝙐𝙀 𝘾𝙊𝙉𝙏𝙄𝙀𝙉𝙀 𝙈𝙐𝘾𝙃𝙊 𝘾𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙀𝙎 -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] SE DETECTO UN MENSAJE QUE CONTIENE MUCHOS CARACTERES [ ! ]*\n`, `${isBotAdmin ? '' : 'NO SOY ADMINISTRADOR, NO PUEDO HACER NADA :/'}`, author, ['[ DESACTIVAR ANTITRABA ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `*MARCA EL CHAT COMO LEIDO ✓\n${"\n".repeat(400)}\n• EL NÚMERO : wa.me/${m.sender.split("@")[0]}\n• ALIAS : ${name}\n‼️ACABA DE ENVIAR UN TEXTO QUE CONTIENE MUCHOS CARACTERES QUE PUEDE OCASIONAR FALLOS EN LOS DISPOSITIVOS`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply(`${lenguajeGB['smsSoloOwner']()}`)
    }
    return !0
} 
