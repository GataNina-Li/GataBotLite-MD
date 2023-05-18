import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn }) {
	if (!m.messageStubType || !m.isGroup) return
	let edtr = `@${m.sender.split`@`[0]}`
	let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	if (m.messageStubType == 21) {
		await this.sendMessage(m.chat, { text: `${edtr} cambio el nombre del grupo a:\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 22) {
		await this.sendMessage(m.chat, { text: `${edtr} has cambiado la foto del Grupo`, mentions: [m.sender] }, { quoted: fkontak }) 
	} else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
		await this.sendMessage(m.chat, { text: `${edtr} has cambiado el link del Grupo!\n\n`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 24) {
		await this.sendMessage(m.chat, { text: `${edtr} cambio la descripción del Grupo a:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 25) {
		await this.sendMessage(m.chat, { text: `${edtr} ahora  *${m.messageStubParameters[0] == 'on' ? 'solo admin' : 'cualquier persona'}* puede edita la información del Grupo.`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 26) {
		await this.sendMessage(m.chat, { text: `${edtr} ahora el grupo esta *${m.messageStubParameters[0] == 'on' ? 'cerrado' : 'abierto'}*\n ${m.messageStubParameters[0] == 'on' ? 'solo los admin' : 'todos'} puede enviar mensajes.`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 29) {
		await this.sendMessage(m.chat, { text: `${edtr} Le doy admin a @${m.messageStubParameters[0].split`@`[0]}.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
	} else if (m.messageStubType == 30) {
		await this.sendMessage(m.chat, { text: `${edtr} le quito admin a @${m.messageStubParameters[0].split`@`[0]}.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
	} else if (m.messageStubType == 72) {
		await this.sendMessage(m.chat, { text: `${edtr} cambiar la duración del mensaje temporalmente a *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 123) {
		await this.sendMessage(m.chat, { text: `${edtr} *Desactivar* Mensaje temporal..`, mentions: [m.sender] }, { quoted: fkontak })
	} else {
		console.log({
			messageStubType: m.messageStubType,
	    messageStubParameters: m.messageStubParameters,
	    type: WAMessageStubType[m.messageStubType], 
		});
	}
}