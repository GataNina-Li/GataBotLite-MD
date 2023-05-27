let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {

let delet = m.key.participant;
let bang = m.key.id;
  
if (isBotAdmin && m.isGroup) {
if (m.text && m.text.toLowerCase().includes("wa.me/settings") || m.text.toLowerCase().includes("wa.me/setting")) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
return null
}
}}
export default handler;
