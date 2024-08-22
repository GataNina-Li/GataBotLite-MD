import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, [`¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 📱⏳

¡Tenemos la solución perfecta para ti! 🎉 Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 💸 

🖥️ *Totalmente compatible con GataBot:* Disfruta al máximo de su potencial en nuestros servidores de alto rendimiento, asegurando una experiencia fluida y de alta calidad. El staff de GataBot y CorinPlus Host se encarga de que disfrutes de todas sus funciones al máximo. 😺✨

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://dash.corinplus.com

*🟢 Dashboard:*
https://dash.corinplus.com

⚙️ *Panel*
https://panel.corinplus.com

💥 *Comunidad de WhatsApp:*
https://chat.whatsapp.com/HR3OLhsuZPqCMImzuHcuON

*🟣 Discord:*
https://discord.com/invite/bjKpRBtkHv

🧡 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029VakUvreFHWpyWUr4Jr0g

🗣📲 *Contacto:*
• wa.me/5214531287294
• wa.me/573147616444
• https://www.facebook.com/elrebelde21

No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀`, `🚀 *¡Nuevos planes para futuros resellers disponibles!* 🚀

_Si quieres apoyar económicamente al Host y obtener beneficios exclusivos, ¡esta es tu oportunidad!_ 🎁

👑 *Únete a nuestro programa de resellers desde solo $15 USD.*

☁️ *Planes disponibles* ☁️

> ✨ *\`Reseller Plus\`*
💰 *Aportación:* $15 USD/mes
🎯 *Beneficios:*
- Acceso a grupo exclusivo 🔰
- Soporte personalizado 🛠️
- Lucrar con nuestros servicios 
- 10K CorinPlus 🎉

> 🌟 *\`Reseller Ultra\`*
💰 *Aportación:* $30 USD/mes
🎯 *Beneficios:*
- Acceso a grupo exclusivo 🔰
- Soporte personalizado 🛠️
- Lucrar con nuestros servicios 
- 20K CorinPlus 🎉
- 20 slots 🗝️

> 💫 *\`Reseller Estrella\`*
💰 *Aportación:* $50 USD/mes
🎯 *Beneficios:*
- Acceso a grupo exclusivo 🔰
- Soporte personalizado 🛠️
- Lucrar con nuestros servicios 
- 40K CorinPlus 🎉
- 30 slots 🗝️
- 40% de descuento en toda nuestra tienda 🛒
- Nodo exclusivo 💻

> 💎 *\`Reseller Diamante\`*
💰 *Aportación:* $70 USD/mes o más 
🎯 *Beneficios:*
* Acceso a grupo exclusivo 🔰
* Soporte personalizado 🛠️
* Lucrar con nuestros servicios 
* 50K CorinPlus 🎉
* 40 slots 🗝️
* 60% de descuento en toda nuestra tienda 🛒
* Nodo exclusivo 💻

🔰 *Novedades de grupo exclusivo para resellers:*
- Asistencia 24/7
- Anuncios de prioridad
- Reporte de estado de servicios
- Ofertas temporales
- Spoilers 

✅ *No te pierdas esta oportunidad de unirte a nuestro equipo y disfrutar de estos increíbles beneficios. ¡Te esperamos!* 
https://chat.whatsapp.com/HR3OLhsuZPqCMImzuHcuON

*Contacto(s):*
+505 7533 0073
https://wa.me/message/B3KTM5XN2JMRD1

*CorinPlus Host*
_¡El plus que necesitas!_`].getRandom(), m)

user.pc = new Date * 1
}
