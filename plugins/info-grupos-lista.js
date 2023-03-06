let handler = async (m, { conn, isOwner }) => {
let groups = Object.values(await conn.groupFetchAllParticipating()),
txt = `${packname} _*ESTÁ EN ESTOS GRUPOS:*_

*⭔ Total de Grupos:* ${groups.length}\n`

for (let i = 0; i < groups.length; i++) {
txt += `
*⋄ Grupo:* ${groups[i].subject}
*⋄ ID:* ${groups[i].id}
${isOwner ? `*⋄ Participantes:* ${groups[i].participants.length}` : ''}
${isOwner ? `*⋄ Bot Admin:* ${!!groups[i].participants.find(v => v.id == conn.user.jid).admin == true ? '✅' : '❌'}\n` : ''}`
}
m.reply(txt.trim())
}
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i

export default handler
