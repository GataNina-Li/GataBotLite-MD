/*import translate from '@vitalets/google-translate-api' // Importar la librería @vitalets/google-translate-api para traducciones
const prohibited = ['poop', 'dick', 'porn', 'gore', 'cum', 'prostitute', 'ass', 'pussy'] // Lista de palabras prohibidas en inglés

let handler = async (m, { conn, text, usedPrefix, command }) => {
// Función para detectar palabras prohibidas
async function detectProhibitedWords(text) {
const lowercaseText = text.toLowerCase() // Convertir el texto a minúsculas para hacer la detección sin distinguir mayúsculas y minúsculas

// Función para traducir el texto a inglés
async function translateTextToEnglish(text) {
try {
const translation = await translate(text, { to: 'en' }) // Traducir el texto a inglés
return translation.text.toLowerCase(); // Devolver el texto traducido en minúsculas
} catch (error) {
console.error('Error en la traducción:', error)
return null // En caso de error, devolver null
}}

const translatedText = await translateTextToEnglish(text) // Traducir el texto ingresado a inglés
// Comprobar si alguna de las palabras prohibidas traducidas se encuentra en el texto
if (prohibited.some(word => translatedText.includes(word))) {
return m.reply('⚠️😾') // Devolver un mensaje de advertencia si se detecta una palabra prohibida
} else {
return null; // Devolver null si no se encontraron palabras prohibidas
}}

// Invocar la función detectProhibitedWords para realizar la detección
detectProhibitedWords(text)
.then(response => {
if (response) {
m.reply('Se detectó una palabra prohibida:', response) // Responder con un mensaje de advertencia si se detecta una palabra prohibida
} else {
m.reply('El texto no contiene palabras prohibidas.') // Responder si no se encontraron palabras prohibidas en el texto
}})
}

handler.command = /^(prueba03)$/i 
export default handler */

import translate from '@vitalets/google-translate-api';
const prohibited = ['poop', 'dick', 'porn', 'gore', 'cum', 'prostitute', 'ass', 'pussy', 'rule34', 'harddick', 'dick', 'penis', 'pornography', 'child porn', 'child pornography', 'cp', 'cock', 'vagina', 'pussy']

let handler = async (m, { conn, text, usedPrefix, command }) => {
async function detectProhibitedWords(text) {
const translatedText = await translate(text, { to: 'en' })
const lowercaseTranslatedText = translatedText.text.toLowerCase()

if (prohibited.some(word => lowercaseTranslatedText.includes(word))) {
return m.reply('⚠️😾')
} else {
return null
}}

detectProhibitedWords(text)
.then(response => {
if (response) {
console.log(response)
} else {
m.reply('El texto no contiene palabras prohibidas.')
}})
}

handler.command = /^(prueba03)$/i 
export default handler

