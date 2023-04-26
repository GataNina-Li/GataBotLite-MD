/*let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner } ) {
const participants = await conn.groupMetadata(m.chat).participants.map((user) => user.jid);
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin && chat.antifake) {
let texto = `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} *@${m.sender.split`@`[0]}* ${lenguajeGB['smsInt2']()}`
  
for (const participant of participants) {
if (/^(2|33|44|51)/.test(participant)) {
await conn.reply(m.chat, texto, fkontak)
setTimeout(async () => {
await conn.groupParticipantsUpdate(m.chat, [participant], 'remove')
}, 2000) 
}}
  
}
}
export default handler*/

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  const chat = global.db.data.chats[m.chat]
  if (!m.isGroup || !isBotAdmin || !chat.antifake) return !1

  const texto = `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} *@${m.sender.split`@`[0]}* ${lenguajeGB['smsInt2']()}`
  const fkontak = {
    "key": {
      "participants":"0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  }

  conn('group-participants-update', async (event) => {
    const { jid, action, participants } = event

    if (action === 'add' && participants) {
      for (const participant of participants) {
        if (/^(2|33|44|51)/.test(participant.split('@')[0])) {
          await conn.groupParticipantsUpdate(m.chat, [participant], 'remove')
          await conn.reply(m.chat, texto, fkontak)
        }
      }
    }
  })
}

export default handler

