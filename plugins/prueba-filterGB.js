import translate from '@vitalets/google-translate-api'
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'semen', 'cum', 'puta', 'puto', 'culo', 'putita', 'putito', 'pussy']

let handler = async (m, { conn, text, usedPrefix, command }) => { 
async function detectProhibitedWords(text) {
  
  const lowercaseText = text.toLowerCase();

  
  async function translateTextToEnglish(text) {
    try {
      const translation = await translate(text, { to: 'en' });
      return translation.text.toLowerCase();
    } catch (error) {
      console.error('Error en la traducción:', error);
      return null;
    }
  }

  
  const translatedText = await translateTextToEnglish(text);

  
  if (prohibited.some(word => translatedText.includes(word))) {
    return '⚠️😾';
  } else {
    return null; 
  }
}

detectProhibitedWords(text)
  .then(response => {
    if (response) {
      console.log('Se detectó una palabra prohibida:', response);
    } else {
      console.log('El texto no contiene palabras prohibidas.');
    }
  });
}

handler.command = /^(prueba03)$/i
export default handler
