const grupo = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4, nnnttt5]

let handler = async (m, { conn, usedPrefix , command }) => { 
try{
let str = `
${lenguajeGB.smsGrupoOfc1()}
_⭔ ${grupo[0]}_

_⭔ ${grupo[1]}_

_⭔ ${grupo[2]}_

_⭔ ${grupo[3]}_

_⭔ ${grupo[4]}_

_⭔ ${grupo[5]}_


${lenguajeGB.smsGrupoOfc2()}
_⭔ ${grupo[6]}_

_⭔ ${grupo[7]}_

_⭔ ${grupo[8]}_

_⭔ ${grupo[9]}_`.trim()
await conn.sendButton(m.chat, wm, str, gataMenu.getRandom(), [[lenguajeGB.smsConMenu(), usedPrefix  + 'menu']], m)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupsgb$/i
export default handler
