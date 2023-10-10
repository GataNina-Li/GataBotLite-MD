import { en, es, id, ar, pt } from '../lib/idiomas/total-idiomas.js'
export async function before(m, { conn }) {
let user = global.db.data.users[m.sender]

let idioma = ''
if (user.GBLanguage == 'es') {
idioma = es
} else if (user.GBLanguage == 'en') {
idioma = en
} else if (user.GBLanguage == 'pt') {
idioma = pt
} else if (user.GBLanguage == 'ar') {
idioma = ar
} else if (user.GBLanguage == 'id') {
idioma = id
} else {
idioma = es
}
global.lenguajeGB = idioma

}
