let handler = async (m, { conn, isOwner }) => {
let groups = Object.values(await conn.groupFetchAllParticipating()),
txt = `${packname} ${lenguajeGB.smsLisA()}

${lenguajeGB.smsLisB()} ${groups.length}\n`

for (let i = 0; i < groups.length; i++) {
txt += ` 
${lenguajeGB.smsLisC()} ${groups[i].subject}
${lenguajeGB.smsLisD()} ${groups[i].id}
${isOwner ? `${lenguajeGB.smsLisE()} ${groups[i].participants.length}` : ''}
${isOwner ? `${lenguajeGB.smsLisF()} ${!!groups[i].participants.find(v => v.id == conn.user.jid).admin == true ? '✅' : '❌'}\n` : ''}`
}
m.reply(txt.trim())
}
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i

export default handler
