const lenguaje = () => { return 'es' } //Español  

const smsAvisoRG = () => { return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` } 
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *ADVERTENCIA* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMACIÓN* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *REPORTE* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n` }

const smsRowner = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO EL NÚMERO DEL BOT PUEDE USAR!!\`\`\`` }
const smsOwner = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO MI CREADOR(A) LO PUEDE USAR!!\`\`\`` }
const smsMods = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO MODERADORES Y MI CREADOR(A) LO PUEDEN USAR!!\`\`\`\`` }
const smsPremium = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO ESTA DISPONIBLE PARA USUARIOS PREMIUM Y MI CREADOR(A)!! PARA SER PREMIUM COMPRE UN PASE USANDO #pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO SE PUEDE UTILIZAR EN GRUPOS!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO SE PUEDE UTILIZAR AL PRIVADO!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO ES PARA ADMINS!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`¡¡NECESITO SER ADMIN PARA QUE PUEDAS USAR ESTE COMANDO!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`¡¡NECESITAS ESTAR REGISTRADO(A) PARA USAR ESTE COMANDO, ESCRIBE #verificar PARA REGISTRARTE!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`¡¡ESTE COMANDO ESTÁ RESTRINGIDO POR MI CREADORA(A)!!\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BIENVENIDO(A)!!*\n┊💖 @user\n┊📄 *LEA LA DESCRIPCIÓN DEL GRUPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *@user*\n┊ *NO FUE DIGNO(A) DE ESTAR AQUÍ!!* 🌟\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user HA SIDO ASCENDIDO COMO ADMIN DEL GRUPO!!*'}
const smsSdemote = () => { return '*@user HA SIDO DEGRADADO COMO ADMIN DEL GRUPO!!*'}
const smsSdesc = () => { return '*CONOZCAN LA NUEVA DESCRIPCIÓN DEL GRUPO:*\n\n@desc'}
const smsSsubject = () => { return '*SE HA ACTUALIZADO EL NOMBRE DEL GRUPO!!*\n@subject'}
const smsSicon = () => { return '*SE HA ACTUALIZADO LA FOTO DEL GRUPO!!*'}
const smsSrevoke = () => { return '*CONOZCAN EL NUEVO ENLACE DEL GRUPO!!*\n*@revoke*'}
const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ 💚 CONEXIÓN EXITOSA CON WHATSAPP 💚\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ CARGANDO...\n`} 
const smsCodigoQR = () => { return `\n✅ ESCANEA EL CÓDIGO QR EXPIRA EN 45 SEGUNDOS ✅`}
const smsConexionOFF = () => { return `\n⚠️ SIN CONEXIÓN, BORRE LA CARPETA ${global.authFile} Y ESCANEA EL CÓDIGO QR ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ MULTIMEDIA ☘️\n┆• ARCHIVOS DE LA CARPETA TMP ELIMINADAS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• SESIONES NO ESENCIALES ELIMINADAS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 ARCHIVOS 🌹\n┆• ARCHIVOS RESIDUALES ELIMINADAS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺 GataJadiBot 🌺\n┆• NADA POR ELIMINAR \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼 GataJadiBot 🌼\n┆• ARCHIVOS NO ESENCIALES ELIMINADOS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️ GataJadiBot ⚠️\n┆• OCURRIÓ UN ERROR\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ ARCHIVO ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `BORRADO CON ÉXITO\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ ARCHIVO ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `NO SE LOGRÓ BORRAR\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 

//_antiprivado 
const smsprivado = () => { return `*NO PUEDE USAR ESTE BOT EN CHAT PRIVADO*\n\n*Unirte al Grupo oficial del bot para poder usar el bot*`}

//Boton
const smsConMenu = () => { return `🌻 MENU`}

//info-creadora.js
const smsCreA = () => { return 'Hola'}
const smsCreB = () => { return 'Me llamo'}
const smsCreC = () => { return 'Siempre a disposición para ayudarte 😸'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return '🌸 *◜CUENTAS OFICIALES◞* 🌸'}
const smsOfc2 = () => { return `*❥ _Siguenos en las Cuentas Oficiales para mantenerte al tanto de_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `🌼 Se acepta apoyo voluntario por PayPal, si deseas apoyar de otra forma puedes donar un Número en Instagram para que el repositorio siga vigente, Gracias!!\n\n🌺 Siempre podrás apoyar siguiendo las Cuentas Oficiales y Compartiendo el trabajo logrado en ${packname}`}
const smsTituloDonar = () => { return '*◜🌹❤️ DONACIÓN VOLUNTARIA ❤️🌹◞*'}
const smsPrivadoDonar = () => { return '🍄 *_También puedes compartir lo siguiente como Muestra de Apoyo_*\n*_Califica el repositorio con una 🌟 Gracias!!_*'}

//info-gruposofc.js
const smsGrupoOfc1 = () => { return '*◜🌺 GRUPOS OFICIALES 🌺◞*'}
const smsGrupoOfc2 = () => { return '*◜🌸 COLABORACIÓN 🌸◞*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*ESTÁ EN ESTOS GRUPOS:*_'}
const smsLisB = () => { return '*⭔ Total de Grupos:*'}
const smsLisC = () => { return '*⋄ Grupo:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ Participantes:*'}

//info-estado.js
const smsCreApoyo = () => { return '✨ A P O Y O'}
const smsEstado1 = () => { return 'ESTADO'}
const smsEstado2 = () => { return 'Versión'}
const smsEstado3 = () => { return 'Usuarios/as'}
const smsEstado4 = () => { return 'Registrados/as'}
const smsEstado5 = () => { return 'Chat/s Prohibido/s'}
const smsEstado6 = () => { return 'Usuarios/as Prohibidos/as'}
const smsEstado7 = () => { return 'Activa durante'}

//info-ping.js
const smsVl1 = () => { return 'VELOCIDAD'}
const smsVl2 = () => { return 'S E R V I D O R*'}
const smsVl3 = () => { return '*🔵 RAM Libre:*'}
const smsVl4 = () => { return '*💻 Plataforma :*'}
const smsVl5 = () => { return '*📡 Lugar :*'}
const smsVl6 = () => { return '*NodeJS Uso de memoria*'}

//info-infobot.js
const smsBT1 = () => { return 'CREADORA'}
const smsBT2 = () => { return 'VERSIÓN'}
const smsBT3 = () => { return 'PREFIJO'}
const smsBT4 = () => { return 'CHATS PRIVADOS'}
const smsBT5 = () => { return 'CHATS DE GRUPOS'}
const smsBT6 = () => { return 'CHATS TOTAL'}
const smsBT7 = () => { return 'ACTIVIDAD'}
const smsBT8 = () => { return 'USUARIOS'}
const smsBT9 = () => { return 'SUB BOTS ACTIVOS'}
const smsCreInfo = () => { return '🌟 I N F O R M A C I Ó N '}

//info-contacto.js
const smsContacto1 = () => { return ' Soy ' + packname + ' un Bot de WhatsApp dedicado en ayudar con lo que me pidas 😎'}
const smsContacto2 = () => { return 'Soy Owner de ' + packname + ' sí tienes alguna duda me la puedes decir ✌️'}
const smsContacto3 = () => { return '👑 Owner'}
const smsContacto4 = () => { return 'Contacto Oficial de GataBot 🐈'}
const smsContacto5 = () => { return '🐣 ¿Le puedo ayudar en algo?'}
const smsContacto6 = () => { return 'No tengo correo 🙏'}
const smsContacto7 = () => { return '🌎 Global'}
const smsContacto8 = () => { return 'Esta Cuenta es Bot 👀'}

//ejemplos
const smsMalused = () => { return '⚡ *USAR EL COMANDO DE ESTA FORMA:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *DEBE DE USAR EL COMANDO COMO EN ESTE EJEMPLO:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *RESPONDE A UN MENSAJE CON EL COMANDO O USE ESTE EJEMPLO:*\n`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`OCURRIÓ UN ERROR INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SURGIÓ UN INCONVENIENTE.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'TÍTULO'}
const smsYT2 = () => { return 'DESCRIPCIÓN'}
const smsYT3 = () => { return 'DURACIÓN'}
const smsYT4 = () => { return 'VISTAS'}
const smsYT5 = () => { return 'VER EN YOUTUBE'}
const smsYT6 = () => { return 'INTENTE CON OTRO NOMBRE'}

//descargas.js
const smsYTA1 = () => { return 'DESCARGANDO AUDIO... ESPERE UN MOMENTO'}

//descargas.js
const smsYTV1 = () => { return 'DESCARGANDO VIDEO... ESPERE UN MOMENTO'}

//descargas.js
const smsYTA2 = () => { return 'DESCARGANDO DOCUMENTO DE AUDIO... ESPERE UN MOMENTO'}

//descargas.js
const smsYTV2 = () => { return 'DESCARGANDO DOCUMENTO DE VIDEO... ESPERE UN MOMENTO'}

//descargas.js
const smsTiktok = () => { return 'PRONTO TENDRÁ EL VÍDEO DE TIKTOK'}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🪻 \`\`\`PROHIBIDO OCULTAR VÍDEO\`\`\` 🪻`} 
const smsAntiView2 = () => { return `\n🪷 \`\`\`PROHIBIDO OCULTAR IMAGEN\`\`\` 🪷`} 

//buscadores.js
const smsOpenai1 = () => { return '*REALICE UNA CONSULTA, EJEMPLO:*'} 
const smsOpenai2 = () => { return 'Recomienda un top 10 de películas de acción'} 
const smsOpenai3 = () => { return 'Explica que es una ecuación de tercer grado y realiza un ejemplo simple y otro compuesto'} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN STICKER PARA CONVERTIR A IMAGEN*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UNA IMAGEN PARA CONVERTIR A ENLACE*'} 
const smsConURL1 = () => { return '🔗 *ENLACE*'} 
const smsConURL2 = () => { return '⚖️ *TAMAÑO*'} 
const smsConURL3 = () => { return '♻️ *CADUCIDAD*'} 
const smsConURL4 = () => { return '🪄 *ENLACE ACORTADO*'}
const smsConURLERR1 = () => { return 'Infinita'} 
const smsConURLERR2 = () => { return 'Desconocida'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A STICKER EN MOVIMIENTO PARA CONVERTIR A VÍDEO*'} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*SÓLO STICKER EN MOVIMIENTO PARA CONVERTIR A VÍDEO*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*✓ AQUÍ TIENES TÚ VÍDEO!!*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN VÍDEO PARA CONVERTIR A GIF CON AUDIO*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN VÍDEO. EL TIPO DE ARCHIVOS USADO NO ES CORRECTO* '} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + '*GIF CON AUDIO (Abra el gif para escuchar el audio)*'} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN VÍDEO O AUDIO PARA CONVERTIR A NOTA DE VOZ*'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + '*ALGO NO SALIÓ BIEN CON EL VÍDEO, INTENTE DE NUEVO*'} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + '*ALGO NO SALIÓ BIEN CON EL AUDIO, INTENTE DE NUEVO*'} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + '*ALGO NO SALIÓ BIEN AL TRATAR DE CONVERTIR SU AUDIO A NOTA DE VOZ*'}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + '*ALGO NO SALIÓ BIEN AL TRATAR DE CONVERTIR SU VÍDEO A NOTA DE VOZ*'} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN MENSAJE DE TEXTO O ESCRIBA EL CÓDIGO Y TEXTO PARA CONVERTIR A AUDIO, EJEMPLO:*\n'}
const smsTradc2 = () => { return ' (codigo) (texto)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + ' Este texto será audio\n\n'}
const smsTradc4 = () => { return '*PUEDE OBTENER EL CÓDIGO DE LOS IDIOMAS ADMITIDOS EN:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*❤️ Por favor espere un momento...*'}

//descargas.js
const smsMediaFr = () => { return '❕ *_MAYOR A 150 MG ES POSIBLE QUE NO SE ENVIE_*'}
const smsImageGg = () => { return '*💞 RESULTADO DE:*'}

//grupos.js
const smsGI1 = () => { return '*INFORMACIÓN DEL GRUPO*'}
const smsGI2 = () => { return '*ID DEL GRUPO*'}
const smsGI3 = () => { return '*NOMBRE DEL GRUPO*'}
const smsGI4 = () => { return '*DESCRIPCIÓN DEL GRUPO*'}
const smsGI5 = () => { return '*NO HAY DESCRIPCIÓN*'}
const smsGI6 = () => { return '*NÚMERO DE USUARIOS*'}
const smsGI7 = () => { return '*Usuarios*'}
const smsGI8 = () => { return '*CREADOR(A) DEL GRUPO*'}
const smsGI9 = () => { return '*ADMINS DEL GRUPO*'}

//grupos.js
const smsAddB3 = () => { return `*NOTIFICACIÓN PARA ADMINS*`}
const smsAddB4 = () => { return `*PRESENCIA DE ADMINS*`}
const smsAddB5 = () => { return `*MENSAJE:*`}
const smsAddB6 = () => { return `Solicito a los Admins por favor.`}

//grupos-admins.js
const smsDemott = () => { return '*EL NÚMERO NO ES VÁLIDO, VUELVA INTENTAR RESPONDA AL MENSAJE DE ALGUIEN O USE COMO EN ESTE EJEMPLO:*\n'}
const smsDemott2 = () => { return '*AHORA TIENE PODER EN EL GRUPO!!*'}
const smsDemott3 = () => { return '*YA NO TIENE PODER EN EL GRUPO!!*'}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*LA BIENVENIDA DEL GRUPO HA SIDO CONFIGURADA*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ESCRIBA EL MENSAJE DE BIENVENIDA_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n*⚡ @subject (Nombre de grupo)*\n*⚡ @desc (Description de grupo)*\n\n*RECUERDE QUE LOS "@" SON OPCIONALES*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*LA DESPEDIDA DEL GRUPO HA SIDO CONFIGURADA*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ESCRIBA EL MENSAJE DE DESPEDIDA_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n\n*RECUERDE QUE EL "@" ES OPCIONAL*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*LA DESCRIPCIÓN DEL GRUPO HA SIDO CONFIGURADA*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*EL NOMBRE DEL GRUPO HA SIDO CONFIGURADO*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 ESCRIBA EL NUEVO NOMBRE DEL GRUPO*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*EL NOMBRE DEL GRUPO NO DEBE DE TENER MÁS DE 25 CARACTERES*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeGB['smsAvisoMG']()}*RESPONDA A UNA IMAGEN PARA CAMBIAR LA FOTO DEL GRUPO*`}
const smsGrupoPP2 = () => { return `${lenguajeGB['smsAvisoEG']()}*🪄 LA IMAGEN DEL GRUPO FUE ACTUALIZADA!!*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*EL ENLACE DEL GRUPO HA SIDO RESTABLECIDO*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ETIQUETE A LA PERSONA O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE ELIMINAR*\n\n*EJEMPLO: `}
const smskick2 = () => { return `ELIMINADO(A) 😼`}
const smskick3 = () => { return `NO PUEDO ELIMINAR AL CREADOR DEL GRUPO 😆🫵`}
const smskick4 = () => { return `NO ESTÁ EN ESTE GRUPO 👻`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeGB['smsAvisoEG']()}*YA PUEDEN ESCRIBIR TODOS!!*`}
const smsGrupoClose = () => { return `${lenguajeGB['smsAvisoEG']()}*GRUPO CERRADO, SÓLO ADMINS PUEDEN ESCRIBIR!!*`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ INVOCANDO AL GRUPO ⚡`}

//grupos.js
const smsInsGC1 = () => { return `*ID*`}
const smsInsGC2 = () => { return `*NOMBRE*`}
const smsInsGC3 = () => { return `*CREADO*`}
const smsInsGC4 = () => { return `*ADMIN PRINCIPAL*`}
const smsInsGC5 = () => { return `*DESCRIPCIÓN*`}

//propietario(a.js
const smsResP1 = () => { return `_*🗂️ ENVIANDO RESPALDO A SU PRIVADO...*_`}
const smsResP2 = (date) => { return `*🗓️ Base de datos:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ETIQUETE A ALGUIEN O RESPONDA AL MENSAJE DEL USUARIO O ESCRIBA EL NÚMERO QUE QUIERE BANEAR DE LOS COMANDOS*\n\n*EJEMPLO:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} NO PUEDE SER BANEADO CON ESTE COMANDO* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *NO PUEDO BANEAR AL OWNER @${ownerNumber} DE ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*NO ES NECESARIO VOLVER A BANEAR A @${number} SI YA LO ESTÁ* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*USUARIO BANEADO CON ÉXITO* 🙀`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} ESTAS BANEADO/A POR @${usr} NO PUEDES USAR LOS COMANDOS HASTA QUE ALGUIEN REVIERTA EL BANEO* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*SURGIÓ UN ERROR, PUEDE SER QUE EL USUARIO NO ESTE EN MI BASE DE DATOS INTENTE ESCRIBIR ${usedPrefix + command} ${number}*\n\`\`\`SI EL ERROR CONTINÚA REPORTE ESTE COMANDO\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ETIQUETE A ALGUIEN O RESPONDA AL MENSAJE DEL USUARIO O ESCRIBA EL NÚMERO QUE QUIERE DESBANEAR DE LOS COMANDOS*\n\n*EJEMPLO:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*NO ES NECESARIO VOLVER A DESBANEAR A @${number} SI YA LO ESTÁ* 😊`}
const smsPropdesban3 = () => { return `${lenguajeGB['smsAvisoEG']()}*USUARIO DESBANEADO CON ÉXITO* 💙`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} ESTAS DESBANEADO/A POR @${usr} YA PUEDES USAR LOS COMANDOS!!* 🪄`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*SURGIÓ UN ERROR, PUEDE SER QUE EL USUARIO NO ESTE EN MI BASE DE DATOS INTENTE ESCRIBIR ${usedPrefix + command} ${number}*\n\`\`\`SI EL ERROR CONTINÚA REPORTE ESTE COMANDO\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return '*USTED YA ES ADMIN 😳🌹*'}
const smsAutoAdmin2 = () => { return '*NO PUDE HACER QUE SEA ADMIN 🥹🥀*'}

//owner-unbanchat.js
const smsUnbanCH1 = () => { return lenguajeGB['smsAvisoFG']() + '🗂️ *ESTE CHAT NO ESTÁ REGISTRADO EN LA BASE DE DATOS*'}
const smsUnbanCH2 = () => { return lenguajeGB.smsAvisoAG() + '🌹 *ESTE CHAT NO ESTÁ BANEADO!!*'}
const smsUnbanCH3 = () => { return lenguajeGB['smsAvisoEG']() + '🪄 *ESTE CHAT FUE DESBANEADO, YA PUEDEN USAR LOS COMANDOS!!*'}

//propietario(a).js
const smsBioEd1 = () => { return `*ESCRIBA EL TEXTO QUE QUIERE QUE SE MUESTRE EN LA BIOGRAFÍA DE* ${packname}`}
const smsBioEd2 = () => { return `*LA BIOGRAFÍA ES MUY LARGA, RESUMA LA INFORMACIÓN POR FAVOR*`}
const smsBioEd3 = () => { return '✅ ```INFORMACIÓN DE BIOGRAFÍA DEL BOT CAMBIADA CON ÉXITO```'}

//propietario(a).js
const smsNameEd1 = () => { return `*ESCRIBA EL TEXTO QUE QUIERE QUE SE MUESTRE COMO NOMBRE DE USUARIO EN* ${packname}`}
const smsNameEd2 = () => { return `*EL NOMBRE ES MUY LARGO, RESUMA LA INFORMACIÓN POR FAVOR*`}
const smsNameEd3 = () => { return '✅ ```NOMBRE DE USUARIO DEL BOT CAMBIADA CON ÉXITO```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `*RESPONDA A UNA IMAGEN USANDO EL COMANDO ${usedPrefix + command} PARA ACTUALIZAR LA FOTO DEL PERFIL DEL BOT*`}
const smsFotoEd2 = () => { return '✅ ```FOTO DE PERFIL DEL BOT CAMBIADA CON ÉXITO```'}
const smsFotoEd3 = (usedPrefix, command) => { return `*RECUERDE RESPONDER A UNA IMAGEN USANDO EL COMANDO ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return '✅ *ESTE CHAT FUE BANEADO, NO PODRÁN USAR LOS COMANDOS HASTA DESBANEAR EL CHAT*'}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeGB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeGB.smsAvisoAG() + `*NO PUEDO ${comd} AL OWNER @${ownerNumber}*`}
const smsBlockUn3 = (comd, useB) => { return `*SE HA ${comd} A ${useB} CON ÉXITO*`}

//propietario(a).js
const smsRestarU1 = () => { return lenguajeGB['smsAvisoMG']() + '*ETIQUETE AL USUARIO, ESCRIBA SU NUMERO O RESPONDA AL MENSAJE PARA REINICIAR DATOS*'}
const smsRestarU2 = () => { return lenguajeGB['smsAvisoFG']() + '*EL NÚMERO QUE INGRESÓ NO ES VÁLIDO PARA REINICIAR LOS DATOS*'}
const smsRestarU3 = (number) => { return lenguajeGB['smsAvisoEG']() + `*SE REINICIÓ A @${number} DE LA BASE DE DATOS*`}

//propietario(a).js
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*INGRESE EL ENLACE DE UN GRUPO*\n*EJEMPLO:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*SE HA UNIDO AL GRUPO ✅*`}

//info.js
const smsReportGB1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*ESCRIBA UN REPORTE*\n*EJEMPLO:*\n\n*${usedPrefix + command}* _El comando ${usedPrefix}play no funciona._`}
const smsReportGB2 = () => { return lenguajeGB['smsAvisoFG']() + `✨ *MÍNIMO 10 CARACTERES PARA REALIZAR EL REPORTE*`}
const smsReportGB3 = () => { return lenguajeGB['smsAvisoFG']() + `😼 *MÁXIMO 1000 CARACTERES PARA REALIZAR EL REPORTE*`}
const smsReportGB4 = (urs, text) => { return `
💌 \`\`\`REPORTE\`\`\` 💌
*⎔ Número:*
*» Wa.me/${urs}*

*⎔ Usuario:*
*» @${urs}*

*⎔ Mensaje:*
*» ${text}*`.trim()}
const smsReportGB5 = () => { return lenguajeGB['smsAvisoEG']() + `*EL REPORTE HA SIDO ENVIADO A LOS DESARROLLADORES, DE SER NECESARIO TENDRÁ UNA RESPUESTA*`}

//buscadores.js
const smsGit1 = (usedPrefix, command) => { return `*INGRESE EL NOMBRE DE UN USUARIO DE GITHUB*\n*EJEMPLO*\n\n*${usedPrefix + command}* GataNina-Li`}
const smsGit2 = () => { return '*B U S C A N D O... 🔎*'}
const smsGit3 = () => { return '🌻 *NOMBRE DE USUARIO*'}
const smsGit4 = () => { return '🌼 *BIO*'}
const smsGit5 = () => { return '🌸 *COMPAÑÍA*'}
const smsGit6 = () => { return '🌺 *CORREO*'}
const smsGit7 = () => { return '🪷 *BLOGS*'}
const smsGit8 = () => { return '🌹 *REPOSITORIOS PÚBLICOS*'}
const smsGit9 = () => { return '🌷 *ESENCIALES PÚBLICAS*'}
const smsGit10 = () => { return '🪸 *SEGUIDORES*'}
const smsGit11 = () => { return '🍁 *SIGUIENDO*'}
const smsGit12 = () => { return '☘️ *UBICACIÓN*'}
const smsGit13 = () => { return '🌱 *TIPO*'}
const smsGit14 = () => { return 'No encontrado'}

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • ミ★ ${global.packname} ミ★ • • ⊹*\n\n*ღ ${global.packname} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNCIÓN SER SUB BOT_* 🟢\n\n*➡️ Con otro celular o en la PC escanea este QR para convertirte en Sub Bot*\n\n*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ Escanee este codigo QR para iniciar sesión*\n\n📢 *¡Este código QR expira en 45 segundos!*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*ESTE COMANDO ESTÁ DESACTIVADO POR MÍ PROPIETARIO(A)*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *PARA SER SUB BOT DIRÍJASE AL NÚMERO PRINCIPAL*\n*ღ Ingrese al siguiente enlace:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *LA CONEXIÓN SE HA CERRADO DE MANERA INESPERADA, INTENTAREMOS RECONECTAR...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *LA CONEXIÓN SE HA CERRADO, DEBERÁ DE CONECTARSE MANUALMENTE USANDO EL COMANDO #serbot Y REESCANEAR EL NUEVO CÓDIGO QR*${lenguajeGB['smsJBConexionTrue3']()} *QUE FUE ENVIADA LA PRIMERA VEZ QUE SE HIZO SUB BOT*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO!!! PUEDE CONECTARSE USANDO SU (ID) O USAR:*`}
const smsJBConexionTrue3 = () => { return ` *O PUEDE USAR SU (ID)*`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *ESTÁ CONECTADO(A)!! POR FAVOR ESPERE SE ESTÁ CARGANDO LOS MENSAJES...*\n\n♻️ *OPCIONES DISPONIBLES:*\n*» ${usedPrefix}pausarsb _(Detener la función Sub Bot)_*\n*» ${usedPrefix}eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n*» ${usedPrefix}serbot _(Obtener nuevo código QR para ser Sub Bot)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*USE ESTE COMANDO AL BOT PRINCIPAL*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*TE VOY A EXTRAÑAR ${global.packname} CHAOO!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*HA CERRADO SESIÓN Y BORRADO TODO RASTRO*`}
const smsFoldErr = (usedPrefix, comd) => { return `*USTED NO TIENE UNA SESIÓN, PUEDE CREAR UNA USANDO:*\n*${usedPrefix}${comd}*\n\n*SI TIENE UNA (ID) PUEDE USAR PARA SALTARSE EL PASO ANTERIOR USANDO:*\n*${usedPrefix}${comd}* \`\`\`(ID)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeGB['smsAvisoAG']() + `*SI NO ES SUB BOT COMUNÍQUESE AL NÚMERO PRINCIPAL PARA SER SUB BOT*`}
const smsJBCom2 = () => { return lenguajeGB['smsAvisoRG']() + `*HA CERRADO/PAUSADO LA SESIÓN.*`}

//jadibot
const smsJBCom3 = () => { return `😺 *LISTA DE SUBBOTS*\n\n🌟 _PUEDES PEDIR PERMISO PARA QUE TE DEJEN UNIR EL BOT A TÚ GRUPO_\n\n\`\`\`CADA USUARIO SUB BOT USA FUNCIÓN COMO QUIERA, EL NÚMERO PRINCIPAL NO SE HACE RESPONSABLE DEL USO DE LA FUNCIÓN \`\`\``}
const smsJBCom4 = () => { return "*NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.*"}

//propietario(a).js
const smsJBDifu1 = () => { return "*📣 DIFUSION PARA SUB BOTS 📣*\n\n"}
const smsJBDifu2 = (numUser, difuUser, tolUser) => { return `*DIFUSIÓN EXITOSA PARA ${numUser} SUB BOTS*\n\n${difuUser}\n\n*ENVÍO FINALIZADO EN ${tolUser} SEGUNDOS*`}

//propietario(a).js
const smsChatGP1 = () => { return "*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *COMUNICADO OFICIAL* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *EL MENSAJE FUE ENVIADO A ${totalGP} GRUPO(S)*`}

//propietario(a)-getplugin.js
const smsPlugin1 = (usedPrefix, command) => { return `*POR FAVOR ESCRIBA EL NOMBRE DEL ARCHIVO O EL COMANDO PARA ENVIAR EL CÓDIGO*\n*EJEMPLO*\n\n*${usedPrefix + command} menu-menu.js*\n*${usedPrefix + command} menu*`}
const smsPlugin2 = (contenidoArchivo, contenido) => { return `\`\`\`CÓDIGO DEL ARCHIVO ${contenidoArchivo}\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${contenido.toString()}`}
const smsPlugin3 = (text) => { return `*EL CÓDIGO PARA '${text}' NO FUE ENCONTRADO*`}
const smsPlugin4 = (filename, fileContent) => { return `\`\`\`CÓDIGO DEL ARCHIVO ${filename}.js\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${fileContent.toString()}`}
const smsPlugin5 = (matchingFile, err) => { return `ERROR AL ENVIAR EL ARCHIVO '${matchingFile}': ${err.message}`}
const smsPlugin6 = (matchingFile) => { return `OCURRIÓ UN ERROR AL ENVIAR EL ARCHIVO '${matchingFile}'`}

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n_😻 SE HA UNIDO AL GRUPO_\n\n🫶 *FUE AGREGADA POR: @${user}*`}

//propietario(a)-leavegc.js
const smsLeave = () => { return `${packname} *ABANDONA EL GRUPO, FUE GENIAL ESTAR AQUÍ 🌸*`}

//rpg-perfil.js
const smsPerfil0 = () => { return `🌸 *P E R F I L* 🌸`}
const smsPerfil1 = () => { return `USUARIO`}
const smsPerfil2 = () => { return `NOMBRE`}
const smsPerfil3 = () => { return `EDAD`}
const smsPerfil4 = () => { return `NÚMERO`}
const smsPerfil5 = () => { return `ID DE REGISTRO`}

//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}*YA ESTAS REGISTRADO(A)!!*\n*SI QUIERE ANULAR SU REGISTRO USE ESTE COMANDO*\n*${usedPrefix}unreg numero de serie*\n\n*SI NO RECUERDA SU NÚMERO DE SERIE USE ESTE COMANDO*\n*${usedPrefix}myns`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoIIG']()}*INGRESE SU NOMBRE Y EDAD PARA ESTAR REGISTRADO*\n*EJEMPLO*\n\n${usedPrefix + command} GataBot.18`}
const smsVerify2 = () => { return `${lenguajeGB['smsAvisoAG']()}*INGRESE SU NOMBRE*`}
const smsVerify3 = () => { return `${lenguajeGB['smsAvisoAG']()}*INGRESE SU EDAD*`}
const smsVerify4 = () => { return `${lenguajeGB['smsAvisoAG']()}*USTED ES MUY MAYOR*`}
const smsVerify5 = () => { return `${lenguajeGB['smsAvisoAG']()}*USTED ES MUY MENOR*`}
const smsVerify6 = () => { return `${lenguajeGB['smsAvisoAG']()}*ESCRIBA UN NOMBRE MÁS CORTO*`}
const smsVerify7 = () => { return `✅ *V E R I F I C A C I O N* ✅`}
const smsVerify8 = (usedPrefix) => { return `*SU ID DE REGISTRO SERVIRÁ EN CASO QUE DESEE MODIFICAR O ELIMINAR SU REGISTRO USANDO ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `INSIGNIA DE VERIFICACIÓN`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `*RESPONDER A UN VÍDEO, IMAGEN, O ESCRIBA ${usedPrefix + command} JUNTO A UN ENLACE QUE TERMINE EN .jpg .jpeg .gif .png*`}
const smsSticker2 = () => { return `*EL VÍDEO NO DEBE DE DURAR MÁS DE 10 SEGUNDOS*`}
const smsSticker3 = (usedPrefix, command) => { return `*EL ENLACE NO ES VALIDO, DEBE DE TERMINAR EN .jpg .jpeg .gif .png EJEMPLO:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*INGRESE SU ID DE REGISTRO. SI NO SABE CUAL ES USE EL COMANDO ${usedPrefix}${idreg}*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*SU ID DE REGISTRO NO ES CORRECTO. USE EL COMANDO ${usedPrefix}${idreg} PARA OBTENER SU ID*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `*USTED ANULÓ SU REGISTRO DE* ${packname}\n\n*PUEDE USAR ${usedPrefix}${regbot} PARA REALIZAR UN NUEVO REGISTRO*`}

//rpg-myns.js
const smsIDserie = () => { return `⬇️ *ID DE REGISTRO* ⬇️`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *MENSAJE ENVIADO:*`}
const smsBCbot2 = () => { return `PRIVADO`}
const smsBCbot3 = () => { return `GRUPO`}
const smsBCbot4 = () => { return `TOTAL`}
const smsBCbot5 = () => { return `TIEMPO TOTAL DE ENVÍO:`}
const smsBCbot6 = () => { return `NO SE ENVIARON A TODOS LOS CHATS PRIVADOS PARA EVITAR SATURACIÓN`}
const smsBCbot7 = () => { return `✅ *COMUNICADO OFICIAL* ✅`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*RESPONDA AL MENSAJE O ESCRIBA EL MENSAJE USANDO ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*ENVIANDO MENSAJE OFICIAL, ESPERE UN MOMENTO...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *EL MENSAJE FUE ENVIADO A ${totalPri} CHAT(S) PRIVADO(S)*\n\n*TIEMPO TOTAL DE ENVÍO: ${time}*\n${totalPri >= 500000 ? '\n*NO SE ENVIARON A TODOS LOS CHATS PARA EVITAR SATURACIÓN*' : ''}`}

//reiniciar 
const smsreiniciar = () => { return `*REINICIADO 🚀🚀🚀*\n*POR FAVOR AGUARDE UN MOMENTO*`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *CONFIGURACIÓN* ⚙️`}
const smsConfi2bot = () => { return `COMANDO`}
const smsConfi3bot = () => { return `ESTADO`}
const smsConfi4bot = () => { return `PARA`}
const smsConfi5bot = () => { return `ACTIVADO`}
const smsConfi6bot = () => { return `DESACTIVADO`}
const smsConfi7bot = () => { return `ESTE CHAT`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*COMO ES ADMIN NO SERÁ ELIMINADO(A)*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*SE DETECTÓ UN ENLACE DE WHATSAPP!!*\n\n*SERÁS ELIMINADO(A)*`}
const smsWaMismoEnlace = () => { return '*ESTE ENLACE ES DE ESTE GRUPO, SÓLO POR ESO NO SERÁ ELIMINADO(A)*'}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}*SE DETECTÓ UN ENLACE QUE CONTIENE HTTPS!!*\n\n*SERÁS ELIMINADO(A)*`}

//_allantilink.js 
const smsTextoYT = () => { return '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ DESACTIVAR'} 
const smsEncender = () => { return '✅ ACTIVAR'} 
const smsEnlaceTik = () => { return `*SE DETECTÓ UN ENLACE DE TIKTOK!!*\n\n*SERÁS ELIMINADO(A)*`}
const smsEnlaceYt = () => { return `*SE DETECTÓ UN ENLACE DE YOUTUBE!!*\n\n*SERÁS ELIMINADO(A)*`}
const smsEnlaceTel = () => { return `*SE DETECTÓ UN ENLACE DE TELEGRAM!!*\n\n*SERÁS ELIMINADO(A)*`}
const smsEnlaceFb = () => { return `*SE DETECTÓ UN ENLACE DE FACEBOOK!!*\n\n*SERÁS ELIMINADO(A)*`}
const smsEnlaceIg = () => { return `*SE DETECTÓ UN ENLACE DE INSTAGRAM!!*\n\n*SERÁS ELIMINADO(A)*`}
const smsEnlaceTw = () => { return `*SE DETECTÓ UN ENLACE DE TWITTER!!*\n\n*SERÁS ELIMINADO(A)*`}
const smsAllAdmin = () => { return `*DEBO DE SER ADMIN PARA ELIMINAR A USUARIOS*`}
const smsSoloOwner = () => { return `*MÍ PROPIETARIO(A) DEBE DE ACTIVAR LA FUNCIÓN DE RESTRINGIR*`}

//config-on y off.js
const smsParaAdmins = () => { return `PARA ADMINS Y CREADOR(A) : GRUPOS`}
const smsParaAdYOw = () => { return `PARA ADMINS Y CREADOR(A) : CHATS`}
const smsParaOw = () => { return `PARA CREADOR(A) : CHATS`}
const smsNoGg = () => { return ` | ⚠️`}

//_anti-internacional.js
const smsInt1 = () => { return `ESTE NÚMERO`}
const smsInt2 = () => { return `NO ESTÁ PERMITIDO EN ESTE GRUPO!!`}

//handler.js
const smsCont1 = () => { return `*🥀 COMANDO FALLANDO 🥀*`}
const smsCont2 = () => { return `*⛈️ PLUGIN:*`}
const smsCont3 = () => { return `*⛈️ USUARIO:*`}
const smsCont4 = () => { return `*⛈️ COMANDO:*`}
const smsCont5 = () => { return `*⛈️ ERROR:*`}
const smsCont6 = () => { return `*✨ REPORTE ESTE MENSAJE USANDO EL COMANDO #reporte PARA SOLUCIONAR*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NO TIENE DIAMANTES!! 💎 PUEDE IR A LA TIENDA CON EL COMANDO*`}
const smsCont8 = () => { return ` *DIAMASTE(S) 💎 USADO(S)*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NECESITA EL NIVEL ➡️*`}
const smsCont10 = () => { return `*PARA USAR ESTE COMANDO. TÚ NIVEL ACTUAL ES ➡️*`}
const smsCont11 = () => { return `*ACTUALIZA CON EL COMANDO*`}
const smsAntiEliminar = (userDelete) => { return `♻️ *ANTI ELIMINAR* ♻️\n*@${userDelete} ELIMINÓ UN MENSAJE!!*\n\n\`\`\`ENVIANDO MENSAJE ELIMINADO...\`\`\``}
const smsHandler = () => { return "SE ACTUALIZÓ EL 'handler.js' CON ÉXITO"} 
const smsHandlerLlamar = (tagUserL, llamadaVideo) => { return `*HOLA @${tagUserL} ${llamadaVideo ? 'LAS VÍDEOLLAMADAS 📲' : 'LAS LLAMADAS 📞'} ESTÁ PROHIBIDO EN ESTE CHAT. SERÁS BLOQUEADO(A)*`} 

//audio-efectos-edit.js
const smsControlAudio1 = () => { return '*RESPONDA A UN AUDIO O NOTA DE VOZ*'}
const smsControlAudio2 = (usedPrefix, command) => { return `*ESTOS PARÁMETROS SOLO ADMITE NÚMEROS ESCRIBA ${usedPrefix + command} PARA CONOCER LOS PARÁMETROS*`}
const smsControlAudio3 = () => { return `*SURGIÓ UN ERROR INTENTÉ CAMBIAR LOS VALORES DE LOS PARÁMETROS Y RECUERDE PARA APLICAR EL FILTRO DEBE DE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsControlAudio4 = () => { return `*RESPONDA A UN AUDIO O NOTA DE VOZ PARA APLICAR EL FILTRO*`}
const smsAudioEdit1 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *20* | MAX: *20000*
⎔ Predeterminada: *94*
1️⃣👉 _Frecuencia central del filtro en Hz_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *-30* | MAX: *30*
⎔ Predeterminada: *25*
2️⃣👉 _Ganancias del filtro en dB_

⎔ *(Parámetro opcional)*
⎔ OPCIONES: *"q", "h", "o"*
⎔ Predeterminada: *o*
3️⃣👉 _Tipo de ancho de banda del filtro_
*q:* Relación de calidad, frecuencia más específica.
*h:* Ancho de banda constante, igualdad en todas las frecuencias.
*o:* Ancho de banda en octavas, se duplicará o reducirá a la mitad en cada octava (cada vez que la frecuencia se duplica o se divide por dos).

⎔ *(Parámetro opcional)*
⎔ MIN: *2* | MAX: *500*
⎔ Predeterminada: *5*
4️⃣👉 _Establece el ancho de banda del filtro en X valor si usa [q, h, o]_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit2 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *20* | MAX: *20000*
⎔ Predeterminada: *15*
1️⃣👉 _Frecuencia del vibrato en Hz_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
2️⃣👉 _Profundidad del vibrato, su valor final será en decimal si el valor es mayor a 95 será un entero_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit3 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *8* | MAX: *32*
⎔ Predeterminada: *16*
1️⃣👉 _Nivel de cuantización de los samples de audio en bits_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *500* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Número de veces por segundo que se muestrea el audio_

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
3️⃣👉 _Nivel de mezcla entre el audio original y el audio con efecto de acrusher (Su valor final será un decimal si es menor a 95)_

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
4️⃣👉 _Cantidad de mezcla entre el audio original y el audio con efecto de acrusher (Su valor final será un entero si es mayor a 95)_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit4 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *15*
⎔ Predeterminada: *4*
1️⃣👉 _Audio de entrada, debe ser ajustado a una velocidad de reproducción deseada, involucra cambio en la duración del audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *2000* | MAX: *2550000*
⎔ Predeterminada: *48000*
2️⃣👉 _Muestreo de audio de salida en Hz, ajuste la frecuencia de muestreo deseada_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit5 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *-1024* | MAX: *1024*
⎔ Predeterminada: *6*
1️⃣👉 _Amplificador de audio en dB, un valor negativo disminuye el sonido del audio y un valor positivo aumenta el sonido del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*❕ EL PARÁMETRO ES OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit6 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *100*
⎔ Predeterminada: *1.63*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit7 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *300*
⎔ Predeterminada: *1.3*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *4000* | MAX: *4800000*
⎔ Predeterminada: *22100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit8 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *150*
⎔ Predeterminada: *1.06*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1000* | MAX: *550000*
⎔ Predeterminada: *44100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *7*
⎔ Predeterminada: *1.25*
3️⃣👉 _Ajusta la frecuencia multiplicada al valor deseado_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*❕ SI OMITE AGREGAR EL PARÁMETRO OPCIONAL O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit9 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *32* | MAX: *16384*
⎔ Predeterminada: *512*
1️⃣👉 _Tamaño de los fragmentos de señal de audio que se procesan en cada momento_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *100*
⎔ Predeterminada: *0.75*
2️⃣👉 _Cantidad de solapamiento que se utiliza entre ventanas consecutivas, Se divide una señal de audio en segmentos o ventanas para aplicarle cierto procesamiento_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit10 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.5* | MAX: *12*
⎔ Predeterminada: *0.7*
1️⃣👉 _Velocidad de reproducción del audio. Un valor de 1.0 es la velocidad normal, mientras que un valor mayor a 1.0 acelera la reproducción, y un valor menor a 1.0 la ralentiza._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Frecuencia de muestreo del audio, indica con qué frecuencia se toman muestras del sonido. Cuanto mayor sea la frecuencia de muestreo, mayor será la calidad del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit11 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *5*
⎔ Predeterminada: *2*
1️⃣👉 _Modo de interpolación de movimiento utilizado por el filtro._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *4*
⎔ Predeterminada: *2*
2️⃣👉 _Modo de compensación de movimiento utilizado por el filtro._

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *10*
⎔ Predeterminada: *1*
3️⃣👉 _Uso de interpolación vertical subpíxel_

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *240*
⎔ Predeterminada: *120*
4️⃣👉 _Controla la tasa de fotogramas de salida del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit12 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.5* | MAX: *10*
⎔ Predeterminada: *0.5*
1️⃣👉 _Ajusta la velocidad de reproducción del audio sin afectar el tono._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *2000* | MAX: *260000*
⎔ Predeterminada: *65100*
2️⃣👉 _Ajustar la tasa de muestreo del audio, es decir, la cantidad de muestras de audio por segundo._

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 3 9483
${usedPrefix + command} 0.8 3849

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit13 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.001* | MAX: *5*
⎔ Predeterminada: *0.125*
1️⃣👉 _La frecuencia de la onda pulsada en hercios (Hz)_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.01* | MAX: *1*
⎔ Predeterminada: *1*
2️⃣👉 _Ajusta la cantidad de modulación que se aplica al audio._

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 0.555 0.50
${usedPrefix + command} 1 0.07

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsControlAudio5 = () => { return `VALORES ASIGNADOS:`}

//config.js
const smsConfigBot = () => { return "SE ACTUALIZÓ 'config.js' CON ÉXITO"}

//menu-menu.js
const smsMenuTotal1 = () => { return "INFORMACIÓN DEL MENÚ"}
const smsMenuTotal2 = () => { return "SERBOT"}
const smsMenuTotal3 = () => { return "BUSCADOR / IA"}
const smsMenuTotal4 = () => { return "DESCARGAS"}
const smsMenuTotal5 = () => { return "CONVERTIDOR"}
const smsMenuTotal6 = () => { return "GRUPO ~ TODOS"}
const smsMenuTotal7 = () => { return "GRUPO ~ ADMINS"}
const smsMenuTotal8 = () => { return "EDITAR EFECTOS DE AUDIO"}
const smsMenuTotal9 = () => { return "EFECTOS DE AUDIO"}
const smsMenuTotal10 = () => { return "CONFIGURACIÓN"}
const smsMenuTotal11 = () => { return "SER VERIFICADO"}
const smsMenuTotal12 = () => { return "PROPIETARIO(A)"}

//Error2
const smsMensError1 = () => { return `❕ REPORTAR COMANDO ❕`} 
const smsMensError2 = () => { return `Está Fallando el siguiente comando`} 

//config.js
const smsMeWait = () => { return '*⌛ ESPERE UN MOMENTO POR FAVOR...*'} 

//buscadores.js
const smsytserh1 = () => { return 'TÍTULO'} 
const smsytserh2 = () => { return 'ENLACE'} 
const smsytserh3 = () => { return 'DURACIÓN'} 
const smsytserh4 = () => { return 'SUBIDO'} 
const smsytserh5 = () => { return 'VISTAS'} 

//descargas.js
const smsIAimage = () => { return '💻 *IMAGEN CREADA CON AI/DALL-E* ✨'} 
const smsIAimage2 = () => { return 'Un gato de color morado con celeste estando en Júpiter, iluminando el cosmo con su encanto con un efecto minimalista.'} 
const smsIAimage3 = () => { return '💻 *IMAGEN CREADA CON AI/Midjourney* ✨'} 
const smsIAimage4 = () => { return 'Un león bebé, corre por el charco, se refleja en el charco, fotografía.'} 

//descargas.js
const smsyFBvid1 = () => { return '*NO ES UN ENLACE VÁLIDO, RECUERDE USAR UN ENLACE DE VÍDEO DE FACEBOOK*'} 
const smsyFBvid2 = () => { return 'VÍDEO DE GRUPO DE FACEBOOK DESCARGADO 💚'} 
const smsyFBvid3 = () => { return 'VÍDEO DE REELS DE FACEBOOK DESCARGADO 💚'} 
const smsyFBvid4 = () => { return 'VÍDEO DE HISTORIAS DE FACEBOOK DESCARGADO 💚'} 
const smsyFBvid5 = () => { return 'VÍDEO DE PUBLICACIONES DE FACEBOOK DESCARGADO 💚'} 
const smsyFBvid6 = () => { return 'VÍDEO DE FACEBOOK DESCARGADO 💚'}

//grupos-admin.js
const smsInvite1 = () => { return '*SOLO SE ACEPTA DIGITOS, NO LETRAS*'} 
const smsInvite2 = (usedPrefix, command, bot) => { return `*INGRESE EL NÚMERO COMPLETO DEL USUARIO QUE QUIERE INVITAR AL GRUPO*\n*EJEMPLO:*\n\n*${usedPrefix + command}* +${bot}`} 
const smsInvite3 = (NumeroUser, user, groupMetadata, link) => { return `✨ ¡Hola! *@${NumeroUser}* Soy ${packname}, un Bot para WhatsApp. Parece que *@${user}* te está invitando al Grupo ${groupMetadata.subject}\n\n\`\`\`¡Te esperamos con ansias en el grupo!\`\`\`\n\n*${link}*`} 
const smsInvite4 = (NumeroUser) => { return `*INVITACIÓN ENVIADA AL PRIVADO DE @${NumeroUser}*`} 

//descargas.js
const smsSP0 = (usedPrefix) => { return `🌸 _PUEDE USAR *${usedPrefix}spotifysearch* PARA OBTENER EL ENLACE DE LA CANCIÓN ESPECÍFICA_`} 
const smsSP1 = () => { return '✨ *TITULO:*'} 
const smsSP2 = () => { return '🗣️ *ARTISTA:*'} 
const smsSP3 = () => { return '🌐 *URL*:'} 
const smsSP4 = () => { return '♻️ *URL DE DESCARGA:*'} 
const smsSP5 = () => { return '🎶 *ENVIANDO CANCIÓN...*'} 
const smsSP6 = () => { return `${lenguajeGB['smsAvisoFG']()}*NO SE ENCONTRÓ RESULTADOS. INTENTE CON OTRO NOMBRE O ENLACE*`} 

//_autodetec.js
const smsAutodetec1 = (inf, usuario, m) => { return `${inf}*» ${usuario}*\n*HA CAMBIADO EL NOMBRE DEL GRUPO*\n\n🔰 *AHORA EL GRUPO SE LLAMA:*\n*${m.messageStubParameters[0]}*`} 
const smsAutodetec2 = (inf, usuario, groupMetadata) => { return `${inf}*» ${usuario}*\n*HA CAMBIADO LA IMAGEN DE:*\n*${groupMetadata.subject}*`} 
const smsAutodetec3 = (inf, usuario, m, groupMetadata) => { return `${inf}*» ${usuario}*\n*HA PERMITIDO QUE ${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS'} PUEDAN CONFIGURAR ${groupMetadata.subject}*`} 
const smsAutodetec4 = (inf, groupMetadata, usuario) => { return `${inf}*EL ENLACE DE ${groupMetadata.subject} HA SIDO RESTABLECIDO POR:*\n*» ${usuario}*`} 
const smsAutodetec5 = (inf, groupMetadata, m, usuario) => { return `${inf}*${groupMetadata.subject} HA SIDO ${m.messageStubParameters[0] == 'on' ? 'CERRADO 🔒' : 'ABIERTO 🔓'} POR ${usuario}*\n\n💬 *AHORA ${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS'} PUEDEN ENVIAR MENSAJES*`} 
const smsAutodetec6 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} AHORA ES ADMIN EN*\n*» ${groupMetadata.subject}*\n\n✨ *ACCIÓN HECHA POR:*\n*» ${usuario}*`} 
const smsAutodetec7 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} DEJA DE SER ADMIN EN*\n*» ${groupMetadata.subject}*\n\n✨ *ACCIÓN HECHA POR:*\n*» ${usuario}*`} 


export default { lenguaje, smsAvisoRG, smsprivado, smsreiniciar, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCodigoQR, smsConexionOFF, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsConMenu, smsCreA,
smsCreB, smsCreC, smsOfc1, smsOfc2, smsMensajeDonar, smsTituloDonar, smsPrivadoDonar, smsGrupoOfc1, smsGrupoOfc2, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsEstado1, smsEstado2, smsEstado3, smsEstado4, smsEstado5, smsEstado6, smsEstado7, smsVl1, smsVl2, smsVl3, smsVl4, smsVl5, smsVl6, smsBT1, smsBT2, smsBT3, smsBT4, smsBT5, smsBT6, smsBT7, smsBT8, smsBT9, smsYT1, smsYT2, smsYT3, smsYT4, smsYT5, smsYT6, smsYTA1, smsContacto1, smsContacto2, smsContacto3, smsContacto4, smsContacto5, smsContacto6, smsContacto7,
smsContacto8, smsYTV1, smsYTA2, smsYTV2, smsAntiView1, smsAntiView2, smsOpenai1, smsOpenai2, smsOpenai3, smsToimg, smsConURL, smsConURL1, smsConURL2, smsConURL3, smsConURL4, smsConURLERR1, smsConURLERR2,
smsConVIDEO, smsConVIDEO2, smsConVIDEO3, smsConGIF, smsConGIF2, smsConGIF3, smsConVN, smsConVN1, smsConVN2, smsConVN3, smsConVN4, smsTradc1, smsTradc2, smsTradc3, smsTradc4, smsWait, smsMediaFr, smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsDemott, smsDemott2, smsDemott3,
smsSetW, smsSetW2, smsSetB, smsSetB2, smsDest, smsNam1, smsNam2, smsNam3, smsGrupoPP, smsGrupoPP2, smsRestGp, smskick1, smskick2, smskick3, smskick4, smsGrupoOpen, smsGrupoClose, smstagaa, smsInsGC1, smsInsGC2, smsInsGC3, smsInsGC4, smsInsGC5, smsCreApoyo, smsCreInfo, smsResP1, smsResP2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5,
smsPropban6, smsPropban7, smsPropdesban1, smsPropdesban2, smsPropdesban3, smsPropdesban4, smsPropdesban5, smsAutoAdmin1, smsAutoAdmin2, smsUnbanCH1, smsUnbanCH2, smsUnbanCH3,
smsBioEd1, smsBioEd2, smsBioEd3, smsNameEd1, smsNameEd2, smsNameEd3, smsFotoEd1, smsFotoEd2, smsFotoEd3, smsBanChE, smsBlockUn1, smsBlockUn2, smsBlockUn3, smsRestarU1, smsRestarU2, smsRestarU3, smsJoin1, smsJoin2, smsReportGB1, smsReportGB2, smsReportGB3, smsReportGB3, smsReportGB4, smsReportGB5, smsGit1, smsGit2,
smsGit3, smsGit4, smsGit5, smsGit6, smsGit7, smsGit8, smsGit9, smsGit10, smsGit11, smsGit12, smsGit13, smsGit14, smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBConexionTrue3, smsJBCargando, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsFoldErr, smsJBCom1, smsJBCom2, smsJBCom3, smsJBCom4, smsJBDifu1, smsJBDifu2, smsChatGP1, smsChatGP2, smsChatGP3, smsPlugin1, smsPlugin2,
smsPlugin3, smsPlugin4, smsPlugin5, smsPlugin6, smsJoin, smsLeave, smsPerfil0, smsPerfil1, smsPerfil2, smsPerfil3, smsPerfil4, smsPerfil5, smsVerify0, smsVerify1, smsVerify2,
smsVerify3, smsVerify4, smsVerify5, smsVerify6, smsVerify7, smsVerify8, smsVerify9, smsSticker1, smsSticker2, smsSticker3, smsUnreg1, smsUnreg2, smsUnreg3, smsIDserie,
smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsConfi1bot, smsConfi2bot, smsConfi3bot, smsConfi4bot,
smsConfi5bot, smsConfi6bot, smsConfi7bot, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsHandler, smsHandlerLlamar, smsWaMismoEnlace, smsParaAdmins, smsParaAdYOw, smsParaOw, smsNoGg, smsInt1, smsInt2, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7,
smsCont8, smsCont9, smsCont10, smsCont11, smsAntiEliminar, smsControlAudio1, smsControlAudio2, smsControlAudio3, smsControlAudio4, smsControlAudio5, smsAudioEdit1,
smsAudioEdit2, smsAudioEdit3, smsAudioEdit4, smsAudioEdit5, smsAudioEdit6, smsAudioEdit7, smsAudioEdit8, smsAudioEdit9, smsAudioEdit10, smsAudioEdit11, smsAudioEdit12, smsAudioEdit13,
smsConfigBot, smsMenuTotal1, smsMenuTotal2, smsMenuTotal3, smsMenuTotal4, smsMenuTotal5, smsMenuTotal6, smsMenuTotal7, smsMenuTotal8, smsMenuTotal9,
smsMenuTotal10, smsMenuTotal11, smsMenuTotal12, smsMalused, smsMalused2, smsMalused3, smsMalError, smsMalError2, smsMalError3, smsMensError1, smsMensError2, smsMeWait,
smsytserh1, smsytserh2, smsytserh3, smsytserh4, smsytserh5, smsTiktok, smsIAimage, smsIAimage2, smsIAimage3, smsIAimage4, smsyFBvid1, smsyFBvid2, smsyFBvid3,
smsyFBvid4, smsyFBvid5, smsyFBvid6, smsInvite1, smsInvite2, smsInvite3, smsInvite4, smsSP0, smsSP1, smsSP2, smsSP3, smsSP4, smsSP5, smsSP6, smsAutodetec1, smsAutodetec2,
smsAutodetec3, smsAutodetec4, smsAutodetec5, smsAutodetec6, smsAutodetec7, smsImageGg }
