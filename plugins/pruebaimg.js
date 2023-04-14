import { createCanvas, registerFont } from 'canvas';
let handler  = async (m, { conn, text }) => {
registerFont('./fonts/Roboto-Bold.ttf', { family: 'Roboto', weight: 'bold' });

const canvas = createCanvas(200, 100);
const context = canvas.getContext('2d');

context.fillStyle = '#ffffff';
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = '#000000';
context.font = 'bold 48px Roboto';
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillText('HOLA MUNDO', canvas.width / 2, canvas.height / 2);

const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
conn.sendFile(m.chat, buffer, 'img.jpg', 'EJEMPLO DE IMAGEN', m);
  
}
handler.command = /^pruebaimg$/i
export default handler  
