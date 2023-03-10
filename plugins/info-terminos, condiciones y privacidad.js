let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
let Terminos = `
*_Toda la información que se mencione aquí no excluye a la Propietaria del Bot, y Propietarios Acredores al uso de GataBot_*
*_No Somos responsables del desconocimiento que tenga por parte de esta información._* 


*TÉRMINOS DE PRIVACIDAD*
_- Somos consciente del constante uso que le pueda dar al Bot, y también Garantizamos que la información como (imágenes, vídeos, enlaces, ubicación, Audios, Stickers, Gif, Contactos que Usted Proporcione en torno a Número(s) Oficial(es) No son ni serán Compartido Con Nadie, ni se usaran dicho Datos fuera del entorno del BOT._

_- Lo que realicé con el BOT queda sólo en Usted ya que en Número(s) Oficial(es) El Chat se Borra cada 24 Horas, según el tiempo de Mensajes Temporales de WhatsApp._

_- Es posible que en Número(s) Oficial(es) el Bot no esté Activado las 24 Horas de los 7 días de la Semana, eso no implica que no lo esté o que Propietarios NO OFICIALES puedan Hacerlo._

_- El chat anónimo del comando #start, valga la redundancia no mostrará ningún dato de los Usuarios por parte de GataBot. Eso no implica que las personas que hagan uso de esta función puedan dar a conocer sus datos. en Número(s) Oficial(es)._

_- Los Datos que Obtenga GataBot en Cuentas Oficiales de Usuarios(as), Grupos y Ajustes del Mismo puede verse Reiniciado, Modificado, y/o Retificado con el fin de que el Bot este en Óptimas Condiciones para su Uso. (Usuarios(as) Pueden Pedir Compensación Por Instagram o por el comando #Reporte. Debe de Presentar Pruebas)._

_- NO somos responsable si Hay alteraciones de este Bot no siendo Número(s) Oficial(es) y tengan de uso un Repositorio de GitHub que no corresponda al Oficial, o que implementen Usuarios de Terceros integraciones que comprometan a los(as) Usuarios(as) al utilizar Versiones no Oficiales._

_- La función Sub Bot Garantiza la seguridad de sus Datos aplicada a Cuentas Oficiales._


*TÉRMINOS DE USO* 
_- La información que haya en este Bot y el/la usuario/a Haga uso de las Mismas asumirá saber los Términos y Condiciones de tal forma que no habrá incovenientes al hacer un uso Particular de las Funciones del Bot._

_- El Bot contiene Material que solo puede ser visible para mayores de 18 Años, NO somos responsable si no cumple con la edad mínima para usar el Material para Adultos._

_- Las imágenes, Vídeos y Audios que tenga este Bot son de uso Público, Pero se considerará Falta de Respeto al realizar Ediciones en el Material ya exitente que porte Nombre del Bot o información relevante._

_- Al hacer uso de una solicitud para ingreso de grupo con Una Cuenta Oficial, es recomendable que el grupo no cuente con temas de Odio, virus, contenido indebido, temas de discriminación u campañas sin fundamentos._

_- Si ha recibido un Comunicado Oficial siendo Número(s) Oficial(es) Mantener el Respeto de la misma manera si recibe un Mensaje sin haber usado un Comando Mantener el Respeto ya que puede en este ultimo caso ser una Persona Real._

_- Las Cuentas Oficiales de GataBot no se hacen responsable del Uso que usted haga con la función "Sub Bot"._


*CONDICIONES DE USO*
_- NO haga ni intente Llamar o hacer Videollamada al Bot siendo Número(s) Oficial(es) ya que obstaculiza el funcionamiento del BOT._

_- NO usar el Bot siendo Número(s) Oficial(es) para llevar a cabo alguna acción hostil que pueda verse comprometida el Funcionamiento del BOT._

_- NO use el comando de SPAM repetidamente, ya que Provocará un Mal funcionamiento en el BOT, tampoco envie al BOT mensajes que puedan comprometer el Funcionamiento de la misma._

_- Al hacer uso de ciertos comandos que tengan como objetivo socavar la incomodidad, intranquilidad, molestia u otro termino tajante, se tomarán las respectivas sanciones o llamados de alerta para prevalecer la integridad de los/las Usuarios(as) y funcionamiento de GataBot._


*ESTE ES EL REPOSITORIO OFICIAL*
*https://github.com/GataNina-Li/GataBot-MD*

*~ Muchas Gracias Por tomarte el tiempo en informate sobre GataBot*
`.trim()
await conn.sendButton(m.chat, wm, Terminos, img3, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m)
}

handler.customPrefix = /terminos|términos|terms|condiciones|privacidad/i
handler.command = new RegExp
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
