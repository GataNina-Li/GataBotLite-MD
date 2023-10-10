/*import { en, es, id, ar, pt } from "../idiomas/total-idiomas.js"
let handler = m => m
handler.before = async function (m, { conn }) {
let user = global.db.data.users[m.sender]
  
setInterval(() => {
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
} else {
global.lenguajeGB = es
}}, 1000)
}

export default handler*/

import { en, es, id, ar, pt } from "../idiomas/total-idiomas.js"

let handler = m => m
handler.before = async function (m, { conn }) {
    let user = global.db.data.users[m.sender]

    
    if (m && user && user.GBLanguage) {
       
        switch (user.GBLanguage) {
            case 'es':
                global.lenguajeGB = es;
                break;
            case 'en':
                global.lenguajeGB = en;
                break;
            case 'pt':
                global.lenguajeGB = pt;
                break;
            case 'ar':
                global.lenguajeGB = ar;
                break;
            case 'id':
                global.lenguajeGB = id;
                break;
            default:
                global.lenguajeGB = es
        }
    }
    
    return m

export default handler

