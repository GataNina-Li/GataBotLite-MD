let handler  = async (m, { conn, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let picture = './media/menus/Menu1.jpg'
let codigo = `termux-setup-storage
apt update
pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
git clone https://github.com/GataNina-Li/GataBotLite-MD
cd GataBotLite-MD
npm start`
	
let gata = `*◎ T E R M U X*
_◊ Puedes visitar el repositorio o Copiar los comandos de instalación._`

let buttons = [ 
{index: 1, urlButton: {displayText: '⍟ G I T H U B', url: md}},
{index: 2, urlButton: {displayText: 'C O M A N D O S', url: 'https://www.whatsapp.com/otp/copy/' + md}},
{index: 3, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]

await conn.sendMessage(m.sender, { text: gata, templateButtons: buttons, footer: wm })
}

handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
