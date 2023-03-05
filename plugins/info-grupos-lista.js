let handler = async (m, { conn, isOwner }) => {
	let groups = Object.values(await conn.groupFetchAllParticipating()),
		txt = ` ${gt} _ESTÁ EN ESTOS GRUPOS_\n_IS IN THESE GROUPS:_\n\n*✦ Total de Grupos:* ${groups.length}\n\n`
	for (let i = 0; i < groups.length; i++) {
		txt += `*✦ Grupo:* ${groups[i].subject}\n`
			+ `*✦ ID:* ${groups[i].id}\n`
			+ `${isOwner ? `*✦ Participantes:* ${groups[i].participants.length}\n` : ''}`
			+ `${isOwner ? `*✦ Bot Admin:* ${!!groups[i].participants.find(v => v.id == conn.user.jid).admin}\n` : ''}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`
	}
	m.reply(txt.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.register = true

export default handler
