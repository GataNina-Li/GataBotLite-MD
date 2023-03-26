let handler = async (m, { conn, isOwner, usedPrefix, command, participants }) => {
try{
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
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.command = /^(mundogrupo)$/i

export default handler
