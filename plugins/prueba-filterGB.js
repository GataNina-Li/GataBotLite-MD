import translate from '@vitalets/google-translate-api'
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito', 'pussy']

let handler = async (m, { conn, text, usedPrefix, command }) => { 
function detectProhibitedWords(text_) {
const lowercaseText = text.toLowerCase()

async function translateWord(word) {
const translations = await translate(word, { to: 'en' })
return translations.text.toLowerCase()
}
const translationPromises = prohibited.map(translateWord)
return Promise.all(translationPromises)
.then(translatedProhibitedWords => {
if (translatedProhibitedWords.some(word => lowercaseText.includes(word))) {
return '⚠️😾'
} else {
return null
}
})
.catch(error => {
console.error('Error en la traducción:', error)
return null
})
}

const text_ = text
detectProhibitedWords(text_)
.then(response => {
if (response) {
console.log('Se detectó una palabra prohibida:', response)
} else {
console.log('El texto no contiene palabras prohibidas.')
}})

}

handler.command = /^(prueba03)$/i
export default handler
