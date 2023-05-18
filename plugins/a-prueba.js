import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m) {
	if (!m.messageStubType || !m.isGroup) return;
	let edtr = `@${m.sender.split`@`[0]}`
	if (m.messageStubType == 21) {
		await this.sendMessage(m.chat, { text: `${edtr} mengubah Subject Grup menjadi :\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fakes })
	} else if (m.messageStubType == 22) {
		await this.sendMessage(m.chat, { text: `${edtr} has cambiado la foto del Grupo`, mentions: [m.sender] }, { quoted: fakes }) 
	} else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
		await this.sendMessage(m.chat, { text: `${edtr} has cambiado el link del Grupo!\n\n`, mentions: [m.sender] }, { quoted: fakes })
	} else if (m.messageStubType == 24) {
		await this.sendMessage(m.chat, { text: `${edtr} cambio la descripción del Grupo.\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fakes })
	} else if (m.messageStubType == 25) {
		await this.sendMessage(m.chat, { text: `${edtr} ha arreglado a *${m.messageStubParameters[0] == 'on' ? 'hanya admin' : 'semua peserta'}* Quién puede editar información grupal.`, mentions: [m.sender] }, { quoted: fakes })
	} else if (m.messageStubType == 26) {
		await this.sendMessage(m.chat, { text: `${edtr} cambio *${m.messageStubParameters[0] == 'on' ? 'menutup' : 'membuka'}* grupo!\nhecho ${m.messageStubParameters[0] == 'on' ? 'hanya admin yang' : 'semua peserta'} puede enviar mensajes.`, mentions: [m.sender] }, { quoted: fakes })
	} else if (m.messageStubType == 29) {
		await this.sendMessage(m.chat, { text: `${edtr} te doy admin a @${m.messageStubParameters[0].split`@`[0]}.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fakes })
	} else if (m.messageStubType == 30) {
		await this.sendMessage(m.chat, { text: `${edtr} has quitado de admin a @${m.messageStubParameters[0].split`@`[0]}.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fakes })
	} else if (m.messageStubType == 72) {
		await this.sendMessage(m.chat, { text: `${edtr} cambiar la duración del mensaje temporalmente a *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fakes })
	} else if (m.messageStubType == 123) {
		await this.sendMessage(m.chat, { text: `${edtr} *Desactivar* Mensaje temporal..`, mentions: [m.sender] }, { quoted: fakes })
	} else {
		console.log({
			messageStubType: m.messageStubType,
			messageStubParameters: m.messageStubParameters,
			type: WAMessageStubType[m.messageStubType],
		});
	}
}

export const disabled = false