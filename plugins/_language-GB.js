import { en, es, id, ar, pt, de ,it } from '../lib/idiomas/total-idiomas.js'  
export async function before(m, { conn }) {
global.wait = lenguajeGB['smsMeWait']()
global.wait2 = lenguajeGB.smsWait()
  
let user = global.db.data.users[m.sender]

if (user.GBLanguage == 'es') {
global.lenguajeGB = es
} else if (user.GBLanguage == 'en') {
global.lenguajeGB = en
} else if (user.GBLanguage == 'pt') {
global.lenguajeGB = pt
} else if (user.GBLanguage == 'ar') {
global.lenguajeGB = ar
} else if (user.GBLanguage == 'id') {
global.lenguajeGB = id
} else if (user.GBLanguage == 'de') {
global.lenguajeGB = de
} else if (user.GBLanguage == 'it') {
global.lenguajeGB = it
} else {
global.lenguajeGB = es
}
}
