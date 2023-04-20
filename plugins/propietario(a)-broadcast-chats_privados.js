let handler = async (m, { conn, text }) => {
let cc3 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks3 = text ? text : cc3.text  
let chats = Object.keys(global.db.data.users).filter(user => user.endsWith('@s.whatsapp.net'))
await conn.reply(m.chat, "*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*", m)
let start = new Date().getTime() 
for (let user of chats) {
await new Promise(resolve => setTimeout(resolve, 2000)) // 2 segundos
let fkontak = {
  "key": {
    "participants": `${user}@s.whatsapp.net`,
    "remoteJid": "status@broadcast",
    "fromMe": false,
    "id": "Halo"
  },
  "message": {
    "contactMessage": {
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
    }
  },
  "participant": `${user}@s.whatsapp.net`
}
await conn.reply(user, `✅ *COMUNICADO OFICIAL* ✅\n\n` + teks3, null)
}
let end = new Date().getTime() 
let totalPri = chats.length
let time = Math.floor((end - start) / 1000)
if (time >= 60) {
let minutes = Math.floor(time / 60)
let seconds = time % 60
time = `${minutes} minutos y ${seconds} segundos`
} else {
time = `${time} segundos`
}

await m.reply(`✅ *EL MENSAJE FUE ENVIADO A ${totalPri} CHAT(S) PRIVADO(S)*\n\nTiempo total de envío: ${time}`)
}

handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.owner = true

export default handler
