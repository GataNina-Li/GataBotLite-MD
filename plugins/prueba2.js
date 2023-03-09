import cloudinary from 'cloudinary'

let handler = async (m, { conn, usedPrefix, command, text }) => {
cloudinary.config({
  cloud_name: 'deuj1ythb',
  api_key: '348851633961558',
  api_secret: 'Ug2NBtbnNyvq6wDEbRuYxGj8ckk'
});

async function uploadFile(filePath) {
try {
const result = await cloudinary.uploader.upload(filePath);
m.reply(result)
  } catch (error) {
    console.error(error);
  }
}

uploadFile('imagen1');
}
handler.command = ['nuevow']
export default handler
