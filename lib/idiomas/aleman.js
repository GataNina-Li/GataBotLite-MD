const lenguaje = () => { return 'de' } // Deutsch  

const smsAvisoRG = () => { return `╰⊱✅⊱ *ERGEBNIS* ⊱✅⊱╮\n\n` } 
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *WARNUNG* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMATION* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *FEHLER* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *MISSBRAUCHENDE HANDLUNG* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *BERICHT* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *ERFOLG* ⊱💚⊱╮\n\n` }

const smsRowner = () => { return `\`\`\`¡¡DIESEN BEFEHL KANN NUR DIE BOT-NUMMER VERWENDEN!!\`\`\`` }
const smsOwner = () => { return `\`\`\`¡¡NUR MEIN ERSTELLER KANN DIESEN BEFEHL VERWENDEN!!\`\`\`` }
const smsMods = () => { return `\`\`\`¡¡NUR MODERATOREN UND MEIN ERSTELLER KÖNNEN DIESEN BEFEHL VERWENDEN!!\`\`\`\`` }
const smsPremium = () => { return `\`\`\`¡¡DIESER BEFEHL IST NUR FÜR PREMIUM-BENUTZER UND MEINEN ERSTELLER VERFÜGBAR!! UM PREMIUM ZU WERDEN, KAUFEN SIE EINEN PASS MIT #pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`¡¡DIESER BEFEHL KANN NUR IN GRUPPEN VERWENDET WERDEN!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`¡¡DIESER BEFEHL KANN NUR PRIVAT VERWENDET WERDEN!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`¡¡DIESER BEFEHL IST NUR FÜR ADMINISTRATOREN!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`¡¡ICH MUSS ADMINISTRATOR SEIN, DAMIT SIE DIESEN BEFEHL VERWENDEN KÖNNEN!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`¡¡SIE MÜSSEN REGISTRIERT SEIN, UM DIESEN BEFEHL ZU VERWENDEN. GEBEN SIE #VERIFY EIN, UM SICH ZU REGISTRIEREN!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`¡¡DIESER BEFEHL IST VON MEINEM ERSTELLER EINGESCHRÄNKT!!\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ WILLKOMMEN!!*\n┊💖 @user\n┊📄 *LESEN SIE DIE GRUPPENBESCHREIBUNG*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *@user*\n┊ *ER WAR ES NICHT WERT, HIER ZU SEIN!!* 🌟\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user ER WURDE ZUM GRUPPENADMINISTRATOR BEFÖRDERT!!*'}
const smsSdemote = () => { return '*@user WURDE ALS ADMINISTRATOR DER GRUPPE ABGESTIMMT!!*'}
const smsSdesc = () => { return '*CONOZCAN DIE NEUE BESCHREIBUNG DER GRUPPE:*\n\n@desc'}
const smsSsubject = () => { return '*DER GRUPPENNAME WURDE AKTUALISIERT!!*\n@subject'}
const smsSicon = () => { return '*DAS GRUPPENFOTO WURDE AKTUALISIERT!!*'}
const smsSrevoke = () => { return '*LERNEN SIE DEN NEUEN GRUPPENLINK KENNEN!!*\n*@revoke*'}
const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ 💚 ERFOLGREICHE VERBINDUNG MIT WHATSAPP 💚\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ AUFLADEN...\n`}  
const smsCodigoQR = () => { return `\n✅ SCANNEN SIE DEN QR-CODE, DER IN 45 SEKUNDEN ABLÄUFT ✅`}
const smsConexionOFF = () => { return `\n⚠️ OFFLINE, ORDNER LÖSCHEN ${global.authFile} UND SCANNEN SIE DEN QR-CODE ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ MULTIMEDIA ☘️\n┆• TMP-ORDNERDATEIEN GELÖSCHT\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• NICHT WESENTLICHE SITZUNGEN ENTFERNT\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 DATEIEN 🌹\n┆• RESTDATEIEN GELÖSCHT\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺 GataJadiBot 🌺\n┆• NICHTS ZU BESEITEN \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼 GataJadiBot 🌼\n┆• NICHT WESENTLICHE DATEIEN GELÖSCHT\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️ GataJadiBot ⚠️\n┆• EIN FEHLER IST AUFGETRETEN\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ ARCHIV ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `ERFOLGREICH GELÖSCHT\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ ARCHIV ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `LÖSCHEN FEHLGESCHLAGEN\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smsConexioncerrar = () => { return `\n⚠️ VERBINDUNG GESCHLOSSEN, VERBINDUNG WIEDERHERGESTELLT....`}
const smsConexionperdida = () => { return `\n⚠️ VERBINDUNG MIT DEM SERVER VERLOREN, VERBINDUNG WIEDERHERGESTELLT....`}
const smsConexionreem = () => { return `\n⚠️ VERBINDUNG ERSETZT, EINE NEUE SITZUNG WURDE ERÖFFNET. BITTE SCHLIESSEN SIE ZUERST DIE AKTUELLE SITZUNG.`}
const smsConexionreinicio = () => { return `\n❇️ VERBINDE MIT DEM SERVER...`}
const smsConexiontiem = () => { return `\n⌛ ZEITÜBERSCHREITUNG DER VERBINDUNG, VERBINDUNG WIEDERHERGESTELLT....`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗ UNBEKANNTER GRUND DER ABSCHEIDUNG: ${reason || ''} >> ${connection || ''}`}
const languageSave = () => { return `✅ Die Sprache ist bereits eingestellt.`} 
const languageRegister = (selectedLanguage) => { return `❇️ Die Sprache wurde auf eingestellt "${selectedLanguage}".\n`} 
const smsMainBot = () => { return "'main.js' WURDE ERFOLGREICH AKTUALISIERT"}

//_antiprivado 
const smsprivado = () => { return `*SIE KÖNNEN DIESEN BOT NICHT IM PRIVATEN CHAT VERWENDEN*\n\n*Treten Sie der offiziellen Gruppe des Bots bei, um den Bot nutzen zu können*`}

//Boton
const smsConMenu = () => { return `🌻 MENÜ`}

//info-creadora.js
const smsCreA = () => { return 'Hallo'}
const smsCreB = () => { return 'Ich heiße'}
const smsCreC = () => { return 'Immer verfügbar, um Ihnen zu helfen 😸'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return '🌸 *◜OFFIZIELLEN KONTEN◞* 🌸'}
const smsOfc2 = () => { return `*❥ _Folgen Sie uns auf den offiziellen Konten, um auf dem Laufenden zu bleiben_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `🌼 Freiwillige Unterstützung wird über PayPal akzeptiert. Wenn Sie auf andere Weise unterstützen möchten, können Sie eine Nummer auf Instagram spenden, damit das Repository gültig bleibt. Vielen Dank!!\n\n🌺 Sie können jederzeit unterstützen, indem Sie den offiziellen Konten folgen und die geleistete Arbeit teilen ${packname}`}
const smsTituloDonar = () => { return '*◜🌹❤️ FREIWILLIGE SPENDE ❤️🌹◞*'}
const smsPrivadoDonar = () => { return '🍄 *_Sie können Folgendes auch als Zeichen Ihrer Unterstützung teilen_*\n*_Bewerten Sie das Repository mit a 🌟 Danke!!_*'}

//info-gruposofc.js
const smsGrupoOfc1 = () => { return '*◜🌺 OFFIZIELLE GRUPPEN 🌺◞*'}
const smsGrupoOfc2 = () => { return '*◜🌸 ZUSAMMENARBEIT 🌸◞*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*ES IST IN DIESEN GRUPPEN:*_'}
const smsLisB = () => { return '*⭔ Gesamtgruppen:*'}
const smsLisC = () => { return '*⋄ Cluster:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ Teilnehmer:*'}

//info-estado.js
const smsCreApoyo = () => { return '✨ UNTERSTÜTZUNG'}
const smsEstado1 = () => { return 'ZUSTAND'}
const smsEstado2 = () => { return 'Ausführung'}
const smsEstado3 = () => { return 'Benutzer'}
const smsEstado4 = () => { return 'Eingetragen'}
const smsEstado5 = () => { return 'Gesperrter Chat'}
const smsEstado6 = () => { return 'Verbotene Benutzer'}
const smsEstado7 = () => { return 'Aktiv während'}

//info-ping.js
const smsVl1 = () => { return 'GESCHWINDIGKEIT'}
const smsVl2 = () => { return 'S E R V E R*'}
const smsVl3 = () => { return '*🔵 Freier RAM:*'}
const smsVl4 = () => { return '*💻 Plattform :*'}
const smsVl5 = () => { return '*📡 Ort :*'}
const smsVl6 = () => { return '*NodeJS-Speichernutzung*'}

//info-infobot.js
const smsBT1 = () => { return 'SCHÖPFER'}
const smsBT2 = () => { return 'AUSFÜHRUNG'}
const smsBT3 = () => { return 'PRÄFIX'}
const smsBT4 = () => { return 'PRIVATE CHATS'}
const smsBT5 = () => { return 'GRUPPENCHATS'}
const smsBT6 = () => { return 'TOTAL CHATS'}
const smsBT7 = () => { return 'AKTIVITÄT'}
const smsBT8 = () => { return 'BENUTZER'}
const smsBT9 = () => { return 'AKTIVE SUB-BOTS'}
const smsCreInfo = () => { return '🌟 I N F O R M A T I O N '}

//info-contacto.js
const smsContacto1 = () => { return ' Bin ' + packname + ' ein WhatsApp-Bot, der Ihnen bei allem hilft, was Sie von mir verlangen 😎'}
const smsContacto2 = () => { return 'Ich bin Eigentümer von ' + packname + ' Wenn Sie Fragen haben, können Sie sie mir gerne mitteilen ✌️'}
const smsContacto3 = () => { return '👑 Eigentümer'}
const smsContacto4 = () => { return 'Offizieller GataBot-Kontakt 🐈'}
const smsContacto5 = () => { return '🐣 Wie kann ich dir helfen?'}
const smsContacto6 = () => { return 'Ich habe keine Post 🙏'}
const smsContacto7 = () => { return '🌎 Global'}
const smsContacto8 = () => { return 'Dieses Konto ist Bot 👀'}

//ejemplos
const smsMalused = () => { return '⚡ *VERWENDEN SIE DEN BEFEHL AUF DIESE WEISE:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *SIE MÜSSEN DEN BEFEHL WIE DIESES BEISPIEL VERWENDEN:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *REAGIEREN SIE AUF EINE NACHRICHT MIT DEM BEFEHL ODER VERWENDEN SIE DIESES BEISPIEL:*\n`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`EIN UNERWARTETER FEHLER IST AUFGETRETEN.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ES SIND PROBLEME AUFGETRETEN.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ETWAS IST FALSCH GELAUFEN. MELDEN SIE DIESEN BEFEHL MIT:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'QUALIFIKATION'}
const smsYT2 = () => { return 'BESCHREIBUNG'}
const smsYT3 = () => { return 'DAUER'}
const smsYT4 = () => { return 'ANSICHTEN'}
const smsYT5 = () => { return 'SIEHE AUF YOUTUBE'}
const smsYT6 = () => { return 'VERSUCHEN SIE EINEN ANDEREN NAMEN'}

//descargas.js
const smsYTA1 = () => { return 'AUDIO WIRD HERUNTERGELADEN... WARTEN SIE EINEN MOMENT'}

//descargas.js
const smsYTV1 = () => { return 'VIDEO WIRD HERUNTERGELADEN... WARTEN SIE EINEN MOMENT'}

//descargas.js
const smsYTA2 = () => { return 'AUDIO-DOKUMENT WIRD HERUNTERGELADEN... WARTEN SIE EINEN MOMENT'}

//descargas.js
const smsYTV2 = () => { return 'VIDEODOKUMENT WIRD HERUNTERGELADEN... WARTEN SIE EINEN MOMENT'}

//descargas.js
const smsTiktok = () => { return 'DAS TIKTOK-VIDEO WERDEN SIE BALD HABEN'}

//descargas.js
const smsGit = () => { return '*DATEIEN SENDEN, EIN MOMENT 🚀*\n*WENN DIE DATEIEN NICHT ANKOMMEN, LIEGT DAS DARAN, DASS DAS REPOSITORIUM SCHWER IST*'}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🪻 \`\`\`KEIN VERSTECKTES VIDEO\`\`\` 🪻`} 
const smsAntiView2 = () => { return `\n🪷 \`\`\`ES IST VERBOTEN, DAS BILD AUSZUBLENDEN\`\`\` 🪷`} 

//buscadores.js
const smsOpenai1 = () => { return '*STELLEN SIE EINE ANFRAGE, BEISPIEL:*'} 
const smsOpenai2 = () => { return 'Empfehlen Sie die 10 besten Actionfilme'} 
const smsOpenai3 = () => { return 'Erklären Sie, dass es sich um eine Gleichung dritten Grades handelt, und erstellen Sie ein einfaches und ein zusammengesetztes Beispiel.'} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*REAGIEREN SIE AUF EINEN AUFKLEBER, UM IHN IN EIN BILD UMZUWANDELN*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*REANTIEREN SIE AUF EIN BILD, UM IN DEN LINK ZU UMWANDELN*'} 
const smsConURL1 = () => { return '🔗 *LINK*'} 
const smsConURL2 = () => { return '⚖️ *GRÖSSE*'} 
const smsConURL3 = () => { return '♻️ *ABLAUF*'} 
const smsConURL4 = () => { return '🪄 *LINK VERKÜRZT*'}
const smsConURLERR1 = () => { return 'Unendlich'} 
const smsConURLERR2 = () => { return 'Unbekannt'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + '*REAGIEREN SIE AUF DAS BEWEGEN DES STICKERS, UM IN VIDEO ZU KONVERTIEREN*'} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*NUR BEWEGEN DES AUFKLEBERS, UM IN VIDEO ZU KONVERTIEREN*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*✓ HIER IST DEIN VIDEO!!*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*REAGIEREN SIE AUF EIN VIDEO, UM ES IN GIF MIT AUDIO ZU KONVERTIEREN*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + '*ANTWORT AUF EIN VIDEO. DER VERWENDETE DATEITYP IST NICHT KORREKT* '} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + '*GIF MIT AUDIO (Öffnen Sie das GIF, um den Ton zu hören)*'} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*REAGIEREN SIE AUF EIN VIDEO ODER AUDIO, UM ES IN EINE SPRACHNOTIZ UMZUWANDELN*'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + '*ETWAS IST MIT DEM VIDEO NICHT RICHTIG GELAUFEN. VERSUCHEN SIE ES NOCH EINMAL*'} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + '*ETWAS IST MIT DEM AUDIO NICHT RICHTIG GELEGT, VERSUCHEN SIE ES NOCHMAL*'} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + '*BEIM VERSUCH, IHRE AUDIO- IN EINE SPRACHNOTIZ UMZUWANDELN, IST ETWAS NICHT RICHTIG GELAUFEN*'}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + '*BEIM VERSUCH, IHR VIDEO IN EINE SPRACHNOTIZ UMZUWANDELN, IST ETWAS NICHT RICHTIG GELAUFEN*'} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '*AUF EINE TEXTNACHRICHT ANTWORTEN ODER CODE UND TEXT SCHREIBEN, UM IHN IN AUDIO UMZUWANDELN, BEISPIEL:*\n'}
const smsTradc2 = () => { return ' (Code) (Text)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + ' Dieser Text wird als Audio vorliegen\n\n'}
const smsTradc4 = () => { return '*DEN CODE DER UNTERSTÜTZTEN SPRACHEN ERHALTEN SIE UNTER:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*❤️ Warten Sie bitte einen Moment...*'}

//descargas.js
const smsMediaFr = () => { return '❕ *_MEHR ALS 150 MG DARF NICHT VERSANDT WERDEN_*'}
const smsImageGg = () => { return '*💞 ERGEBNIS VON:*'}

//grupos.js
const smsGI1 = () => { return '*GRUPPENINFORMATIONEN*'}
const smsGI2 = () => { return '*GRUPPEN-ID*'}
const smsGI3 = () => { return '*GRUPPENNAME*'}
const smsGI4 = () => { return '*GRUPPENBESCHREIBUNG*'}
const smsGI5 = () => { return '*KEINE BESCHREIBUNG*'}
const smsGI6 = () => { return '*ANZAHL DER NUTZER*'}
const smsGI7 = () => { return '*Benutzer*'}
const smsGI8 = () => { return '*SCHÖPFER DER GRUPPE*'}
const smsGI9 = () => { return '*GRUPPENADMINISTREN*'}

//grupos.js
const smsAddB3 = () => { return `*BENACHRICHTIGUNG FÜR ADMINISTRATOREN*`}
const smsAddB4 = () => { return `*ADMIN-PRÄSENZ*`}
const smsAddB5 = () => { return `*NACHRICHT:*`}
const smsAddB6 = () => { return `Ich bitte die Admins.`}

//grupos-admins.js
const smsDemott = () => { return '*DIE NUMMER IST UNGÜLTIG. VERSUCHEN SIE ES ERNEUT UND ANTWORTEN SIE AUF DIE NACHRICHT VON JEMANDEM ODER VERWENDEN SIE ES WIE DIESES BEISPIEL:*\n'}
const smsDemott2 = () => { return '*JETZT HABEN SIE DIE MACHT IN DER GRUPPE!!*'}
const smsDemott3 = () => { return '*SIE HABEN KEINE MACHT MEHR IN DER GRUPPE!!*'}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*DIE BEGRÜßUNG DER GRUPPE IST KONFIGURIERT*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_SCHREIBEN SIE DIE WILLKOMMENSNACHRICHT_*\n*_OPTIONAL KÖNNEN SIE WAS MIT "@" VERWENDEN, UM WEITERE INFORMATIONEN HINZUZUFÜGEN:_*\n\n*⚡ @user (Erwähnung gegenüber dem Benutzer)*\n*⚡ @subject (Name der Gruppe)*\n*⚡ @desc (Gruppenbeschreibung)*\n\n*Denken Sie daran, dass das "@" optional ist*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*DER ABSCHIED DER GRUPPE STEHT FEST*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_SCHREIBEN SIE IHRE ABSCHIEDSBOTSCHAFT_*\n*_OPTIONAL KÖNNEN SIE WAS MIT "@" VERWENDEN, UM WEITERE INFORMATIONEN HINZUZUFÜGEN:_*\n\n*⚡ @user (Erwähnung gegenüber dem Benutzer)*\n\n*Denken Sie daran, dass das "@" optional ist*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*DIE GRUPPENBESCHREIBUNG WURDE KONFIGURIERT*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*DER GRUPPENNAME WURDE KONFIGURIERT*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 SCHREIBEN SIE DEN NEUEN GRUPPENNAMEN*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*DER GRUPPENNAME SOLLTE NICHT MEHR ALS 25 ZEICHEN LANG SEIN*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeGB['smsAvisoMG']()}*REAGIEREN SIE AUF EIN BILD, UM DAS GRUPPENFOTO ZU ÄNDERN*`}
const smsGrupoPP2 = () => { return `${lenguajeGB['smsAvisoEG']()}*🪄 DAS GRUPPENBILD WURDE AKTUALISIERT!!*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*DIE GRUPPENVERKNÜPFUNG WURDE WIEDERHERGESTELLT*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*MARKIEREN SIE DIE PERSON ODER ANTWORTEN SIE AUF DIE NACHRICHT DER PERSON, DIE SIE ELIMINIEREN MÖCHTEN*\n\n*BEISPIEL: `}
const smskick2 = () => { return `ENTFERNT 😼`}
const smskick3 = () => { return `ICH KANN DEN ERSTELLER NICHT AUS DER GRUPPE LÖSCHEN 😆🫵`}
const smskick4 = () => { return `NICHT IN DIESER GRUPPE 👻`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeGB['smsAvisoEG']()}*JEDER KANN JETZT SCHREIBEN!!*`}
const smsGrupoClose = () => { return `${lenguajeGB['smsAvisoEG']()}*GESCHLOSSENE GRUPPE, NUR ADMINISTREN KÖNNEN SCHREIBEN!!*`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ DIE GRUPPE AUFRUFEN ⚡`}

//grupos.js
const smsInsGC1 = () => { return `*ID*`}
const smsInsGC2 = () => { return `*NAME*`}
const smsInsGC3 = () => { return `*ERSTELLT*`}
const smsInsGC4 = () => { return `*HAUPTADMIN*`}
const smsInsGC5 = () => { return `*BESCHREIBUNG*`}

//propietario(a.js
const smsResP1 = () => { return `_*🗂️ BACKUP AN IHR PRIVATES SENDEN...*_`}
const smsResP2 = (date) => { return `*🗓️ Datenbank:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*MARKIEREN SIE JEMANDEN ODER ANTWORTEN SIE AUF DIE NACHRICHT DES BENUTZERS ODER GEBEN SIE DIE NUMMER EIN, DIE SIE AUS DEN BEFEHLEN VERBANNEN MÖCHTEN*\n\n*BEISPIEL:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} SIE KÖNNEN MIT DIESEM BEFEHL NICHT GESPERRT WERDEN* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *ICH KANN DEN BESITZER NICHT VERBIETEN @${ownerNumber} VON ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*EIN ERNEUTES VERBOT IST NICHT NOTWENDIG @${number} WENN ES BEREITS IST* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*BENUTZER ERFOLGREICH GESPERRT* 🙀`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} SIE SIND VERBOTEN VON @${usr} SIE KÖNNEN DIE BEFEHLE ERST VERWENDEN, WENN JEMAND DAS VERBOT AUFHEBT* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*ES IST EIN FEHLER AUFGETRETEN. ES KANN SEIN, DASS SICH DER BENUTZER NICHT IN MEINER DATENBANK BEFINDET. VERSUCHEN SIE ZU SCHREIBEN ${usedPrefix + command} ${number}*\n\`\`\`WENN DER FEHLER WEITERHIN AUFTRITT, MELDEN SIE DIESEN BEFEHL\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*MARKIEREN SIE JEMANDEN ODER ANTWORTEN SIE AUF DIE NACHRICHT DES BENUTZERS ODER GEBEN SIE DIE NUMMER EIN, DIE SIE AUS DEN BEFEHLEN ENTFERNEN MÖCHTEN*\n\n*BEISPIEL:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*ES IST NICHT NOTWENDIG, DAS VERBOT ERNEUT AUFZUHEBEN @${number} WENN ES BEREITS IST* 😊`}
const smsPropdesban3 = () => { return `${lenguajeGB['smsAvisoEG']()}*BENUTZER ERFOLGREICH ENTHÄLT* 💙`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} SIE SIND UNVERBANDT VON @${usr} SIE KÖNNEN JETZT DIE BEFEHLE VERWENDEN!!* 🪄`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*ES IST EIN FEHLER AUFGETRETEN. ES KANN SEIN, DASS SICH DER BENUTZER NICHT IN MEINER DATENBANK BEFINDET. VERSUCHEN SIE ZU SCHREIBEN ${usedPrefix + command} ${number}*\n\`\`\`WENN DER FEHLER WEITERHIN AUFTRITT, MELDEN SIE DIESEN BEFEHL\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return '*SIE SIND BEREITS ADMIN 😳🌹*'}
const smsAutoAdmin2 = () => { return '*ICH KONNTE ES NICHT ALS ADMINISTRATOR EINRICHTEN 🥹🥀*'}

//owner-unbanchat.js
const smsUnbanCH1 = () => { return lenguajeGB['smsAvisoFG']() + '🗂️ *DIESER CHAT IST NICHT IN DER DATENBANK REGISTRIERT*'}
const smsUnbanCH2 = () => { return lenguajeGB.smsAvisoAG() + '🌹 *DIESER CHAT IST NICHT GESPERRT!!*'}
const smsUnbanCH3 = () => { return lenguajeGB['smsAvisoEG']() + '🪄 *DIESER CHAT WURDE ENTBANNT, SIE KÖNNEN JETZT DIE BEFEHLE VERWENDEN!!*'}

//propietario(a).js
const smsBioEd1 = () => { return `*SCHREIBEN SIE DEN TEXT, DEN SIE IN DER BIOGRAPHIE ANZEIGEN WOLLEN* ${packname}`}
const smsBioEd2 = () => { return `*DIE BIOGRAFIE IST SEHR LANG, BITTE FASSEN SIE DIE INFORMATIONEN ZUSAMMEN*`}
const smsBioEd3 = () => { return '✅ ```BOT-BIO-INFORMATIONEN ERFOLGREICH GEÄNDERT```'}

//propietario(a).js
const smsNameEd1 = () => { return `*GEBEN SIE DEN TEXT EIN, IN DEM SIE IHN ALS BENUTZERNAMEN ANZEIGEN MÖCHTEN* ${packname}`}
const smsNameEd2 = () => { return `*DER NAME IST SEHR LANG, BITTE FASSEN SIE DIE INFORMATIONEN ZUSAMMEN*`}
const smsNameEd3 = () => { return '✅ ```BOT-BENUTZERNAME ERFOLGREICH GEÄNDERT```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `*REAGIEREN SIE MIT DEM BEFEHL AUF EIN BILD ${usedPrefix + command} UM DAS PROFILFOTO DES BOT ZU AKTUALISIEREN*`}
const smsFotoEd2 = () => { return '✅ ```BOT-PROFILFOTO ERFOLGREICH GEÄNDERT```'}
const smsFotoEd3 = (usedPrefix, command) => { return `*DENKEN SIE DARAN, MIT DEM BEFEHL AUF EIN BILD ZU REAGIEREN ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return '✅ *DIESER CHAT WURDE GESPERRT. SIE KÖNNEN DIE BEFEHLE ERST VERWENDEN, WENN SIE DEN CHAT AUFGEHOBEN HABEN*'}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeGB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeGB.smsAvisoAG() + `*KANN NICHT ${comd} AN DEN EIGENTÜMER @${ownerNumber}*`}
const smsBlockUn3 = (comd, useB) => { return `*ES IST GEWESEN ${comd} ZU ${useB} MIT ERFOLGREICH*`}

//propietario(a).js
const smsRestarU1 = () => { return lenguajeGB['smsAvisoMG']() + '*MARKIEREN SIE DEN BENUTZER, GEBEN SIE SEINE NUMMER EIN ODER ANTWORTEN SIE AUF DIE NACHRICHT, UM DIE DATEN ZURÜCKZUSETZEN*'}
const smsRestarU2 = () => { return lenguajeGB['smsAvisoFG']() + '*DIE VON IHNEN EINGEGEBENE NUMMER IST NICHT ZUM ZURÜCKSETZEN DER DATEN GÜLTIG*'}
const smsRestarU3 = (number) => { return lenguajeGB['smsAvisoEG']() + `*ZURÜCKSETZEN AUF @${number} AUS DER DATENBANK*`}

//propietario(a).js
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*GEBEN SIE EINEN GRUPPENLINK EIN*\n*BEISPIEL:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*IST DER GRUPPE BEIGETRETEN ✅*`}

//info.js
const smsReportGB1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*SCHREIBE EINEN BERICHT*\n*BEISPIEL:*\n\n*${usedPrefix + command}* _Der Befehl ${usedPrefix}play funktioniert nicht._`}
const smsReportGB2 = () => { return lenguajeGB['smsAvisoFG']() + `✨ *MINDESTENS 10 ZEICHEN, UM DEN BERICHT ZU VERVOLLSTÄNDIGEN*`}
const smsReportGB3 = () => { return lenguajeGB['smsAvisoFG']() + `😼 *MAXIMAL 1000 ZEICHEN, UM DEN BERICHT ZU VERvollständigen*`}
const smsReportGB4 = (urs, text) => { return `
💌 \`\`\`BERICHT\`\`\` 💌
*⎔ Nummer:*
*» Wa.me/${urs}*

*⎔ User:*
*» @${urs}*

*⎔ Botschaft:*
*» ${text}*`.trim()}
const smsReportGB5 = () => { return lenguajeGB['smsAvisoEG']() + `*DER BERICHT WURDE AN DIE ENTWICKLER GESENDET, FALLS ERFORDERLICH, WERDEN SIE EINE ANTWORT ERHALTEN*`}

//buscadores.js
const smsGit1 = (usedPrefix, command) => { return `*GEBEN SIE DEN NAMEN EINES GITHUB-BENUTZERS EIN*\n*BEISPIEL*\n\n*${usedPrefix + command}* GataNina-Li`}
const smsGit2 = () => { return '*S U C H E... 🔎*'}
const smsGit3 = () => { return '🌻 *NUTZERNAME*'}
const smsGit4 = () => { return '🌼 *BIOGRAFIE*'}
const smsGit5 = () => { return '🌸 *UNTERNEHMEN*'}
const smsGit6 = () => { return '🌺 *POST*'}
const smsGit7 = () => { return '🪷 *BLOGS*'}
const smsGit8 = () => { return '🌹 *ÖFFENTLICHE REPOSITOREN*'}
const smsGit9 = () => { return '🌷 *ÖFFENTLICHES WESENTLICHES*'}
const smsGit10 = () => { return '🪸 *FOLGER*'}
const smsGit11 = () => { return '🍁 *FOLGENDES*'}
const smsGit12 = () => { return '☘️ *STANDORT*'}
const smsGit13 = () => { return '🌱 *TYP*'}
const smsGit14 = () => { return 'Nicht gefunden'}

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • ミ★ ${global.packname} ミ★ • • ⊹*\n\n*ღ ${global.packname} » _${global.vs}_*\n*ღ JadiBot-Version » _${global.vsJB}_*\n\n🟢 *_FUNKTION SIND SUB BOT_* 🟢\n\n*➡️ Scannen Sie diesen QR mit einem anderen Mobiltelefon oder PC, um ein Sub Bot zu werden*\n\n*1️⃣ Gehen Sie zu den drei Punkten in der oberen rechten Ecke*\n*2️⃣ Gehen Sie zur Option "Verbundene Geräte".*\n*3️⃣ Scannen Sie diesen QR-Code, um sich anzumelden*\n\n📢 *Dieser QR-Code verfällt in 45 Sekunden!*`}
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*

*ღ ${global.packname} » _${global.vs}_*
*ღ JadiBot-Version » _${global.vsJB}_*

🟢 *_NEUE FUNKTION, UM SICH ZUM SUB-BOT ZU MACHEN_* 🟢

*1️⃣ Gehen Sie zu den drei Punkten in der oberen rechten Ecke*
*2️⃣ Gehen Sie zur Option "Verknüpfte Geräte".*
*3️⃣ Klicken Sie auf den Link mit dem Telefoncode*
*4️⃣ Fügen Sie den Code unten ein*`}
const smsreenvia = () => { return `*🟢 BEFEHL ERNEUT SENDEN...*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*DIESER BEFEHL WURDE VON MEINEM EIGENTÜMER DEAKTIVIERT*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *UM EIN SUB-BOT ZU WERDEN, GEHEN SIE ZUR HAUPTNUMMER*\n*ღ Geben Sie den folgenden Link ein:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *DIE VERBINDUNG WURDE UNERWARTET GESCHLOSSEN. WIR WERDEN VERSUCHEN, DIE VERBINDUNG WIEDERHERZUSTELLEN...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *DIE VERBINDUNG WURDE GESCHLOSSEN. SIE MÜSSEN SICH MANUELL MIT DEM BEFEHL #SERBOT VERBINDEN UND DEN NEUEN QR-CODE ERNEUT SCANNEN${lenguajeGB['smsJBConexionTrue3']()}* *WAS BEI DER ERSTEN HERSTELLUNG DES SUB BOT VERSENDET WURDE*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *IHR GERÄT WURDE NICHT VERBUNDEN*\n\n*SIE MÜSSEN DIE VERBINDUNG ERNEUT HERSTELLEN:\n#deletesesion (UM DATEN ZU LÖSCHEN UND ALLEIN ZUM QR ODER CODE ZURÜCKKEHREN ZU KÖNNEN)`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *VERBINDUNG MIT ERFOLG!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *ERFOLGREICHE VERBINDUNG!!! SIE KÖNNEN EINE VERBINDUNG HERSTELLEN MIT:*`}
const smsJBConexionTrue3 = () => { return `.`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *BIST DU VERBUNDEN!! BITTE WARTEN. NACHRICHTEN WERDEN GELADEN...*\n\n♻️ *VERFÜGBARE OPTIONEN:*\n*» ${usedPrefix}pausarsb _(Stoppen Sie die Sub-Bot-Funktion)_*\n*» ${usedPrefix}eliminarsesion _(Löschen Sie alle Spuren von Sub Bot)_*\n*» ${usedPrefix}serbot _(Neuer QR-Code oder Connect, wenn Sie bereits Sub Bot sind)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*VERWENDEN SIE DIESEN BEFEHL FÜR DEN HAUPT-BOT*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*ICH WERDE DICH VERMISSEN ${global.packname} TSCHÜSS!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*SIE HABEN SICH ABGEMELDET UND ALLE SPUREN GELÖSCHT*`}
const smsFoldErr = (usedPrefix, comd) => { return `*SIE HABEN KEINE SITZUNG, SIE KÖNNEN EINE ERSTELLEN MIT:*\n*${usedPrefix}${comd}*\n\n*WENN SIE EINE (ID) HABEN, KÖNNEN SIE DEN VORHERIGEN SCHRITT ÜBERSPRINGEN, INDEM SIE FOLGENDES VERWENDEN:*\n*${usedPrefix}${comd}* \`\`\`(ID)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeGB['smsAvisoAG']() + `*WENN SIE KEIN SUB-BOT SIND, KONTAKTIEREN SIE DIE HAUPTNUMMER, UM SUB-BOT ZU WERDEN*`}
const smsJBCom2 = () => { return lenguajeGB['smsAvisoRG']() + `*SIE HABEN DIE SITZUNG GESCHLOSSEN/ANGEHALTEN.*`}

//jadibot
const smsJBCom3 = () => { return `😺 *SUBBOTS-LISTE*\n\n🌟 _SIE KÖNNEN DIE ERLAUBNIS ANFRAGEN, DEN BOT IHRER GRUPPE BEITRETEN ZU DÜRFEN_\n\n\`\`\`JEDER SUB-BOT-BENUTZER VERWENDET DIE FUNKTION NACH IHREN WÜNSCHEN. DIE HAUPTNUMMER IST NICHT FÜR DIE NUTZUNG DER FUNKTION VERANTWORTLICH \`\`\`\n\nVERBUNDENER UNTERBOT:`}
const smsJBCom4 = () => { return "*KEINE SUB-BOTS VERFÜGBAR. ÜBERPRÜFEN SIE SPÄTER.*"}

//propietario(a).js
const smsJBDifu1 = () => { return "*📣 ÜBERTRAGUNG FÜR SUB-BOTS 📣*\n\n"}
const smsJBDifu2 = (numUser, difuUser, tolUser) => { return `*ERFOLGREICHE VERBREITUNG FÜR ${numUser} SUB BOTS*\n\n${difuUser}\n\n*VERSAND ABGESCHLOSSEN IN ${tolUser} SEKUNDEN*`}

//propietario(a).js
const smsChatGP1 = () => { return "*NACHRICHT WIRD SENDEN, WARTEN SIE EINEN MOMENT...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *OFFIZIELLE AUSSAGE* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *DIE NACHRICHT WURDE GESENDET AN ${totalGP} GRUPPEN*`}

//propietario(a)-getplugin.js
const smsPlugin1 = (usedPrefix, command) => { return `*BITTE GEBEN SIE DEN DATEINAMEN ODER BEFEHL EIN, UM DEN CODE ZU SENDEN*\n*BEISPIEL*\n\n*${usedPrefix + command} menu-menu.js*\n*${usedPrefix + command} menu*`}
const smsPlugin2 = (contenidoArchivo, contenido) => { return `\`\`\`DATEICODE ${contenidoArchivo}\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${contenido.toString()}`}
const smsPlugin3 = (text) => { return `*DER CODE FÜR '${text}' ES WURDE NICHT GEFUNDEN*`}
const smsPlugin4 = (filename, fileContent) => { return `\`\`\`DATEICODE ${filename}.js\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${fileContent.toString()}`}
const smsPlugin5 = (matchingFile, err) => { return `FEHLER BEIM SENDEN DER DATEI '${matchingFile}': ${err.message}`}
const smsPlugin6 = (matchingFile) => { return `BEIM SENDEN DER DATEI IST EIN FEHLER AUFGETRETEN '${matchingFile}'`}

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n_😻 IST DER GRUPPE BEIGETRETEN_\n\n🫶 *WURDE HINZUGEFÜGT VON: @${user}*`}

//propietario(a)-leavegc.js
const smsLeave = () => { return `${packname} *VERLASSEN SIE DIE GRUPPE, ES WAR TOLLES, HIER ZU SEIN 🌸*`}

//rpg-perfil.js
const smsPerfil0 = () => { return `🌸 *P R O F I L* 🌸`}
const smsPerfil1 = () => { return `BENUTZER`}
const smsPerfil2 = () => { return `NAME`}
const smsPerfil3 = () => { return `ALTER`}
const smsPerfil4 = () => { return `NUMMER`}
const smsPerfil5 = () => { return `ID-REGISTRIERUNG`}

//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}*DU BIST BEREITS REGISTRIERT!!*\n*WENN SIE IHRE REGISTRIERUNG STORNIEREN MÖCHTEN, VERWENDEN SIE DIESEN BEFEHL*\n*${usedPrefix}unreg Seriennummer*\n\n*WENN SIE SICH IHRE SERIENNUMMER NICHT ERINNERN, VERWENDEN SIE DIESEN BEFEHL*\n*${usedPrefix}myns`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoIIG']()}*GEBEN SIE IHREN NAMEN UND IHR ALTER EIN, UM SICH ZU REGISTRIEREN*\n*BEISPIEL*\n\n${usedPrefix + command} GataBot.18`}
const smsVerify2 = () => { return `${lenguajeGB['smsAvisoAG']()}*GIB DEINEN NAMEN EIN*`}
const smsVerify3 = () => { return `${lenguajeGB['smsAvisoAG']()}*GEBE DEIN ALTER EIN*`}
const smsVerify4 = () => { return `${lenguajeGB['smsAvisoAG']()}*DU BIST SEHR ÄLTER*`}
const smsVerify5 = () => { return `${lenguajeGB['smsAvisoAG']()}*DU BIST SEHR MINDERJÄHRIG*`}
const smsVerify6 = () => { return `${lenguajeGB['smsAvisoAG']()}*ESCRIBA UN NOMBRE MÁS CORTO*`}
const smsVerify7 = () => { return `✅ *Ü B E R P R Ü F E N* ✅`}
const smsVerify8 = (usedPrefix) => { return `*IHRE REGISTRIERUNGS-ID WIRD VERWENDET, WENN SIE IHRE REGISTRIERUNG ÄNDERN ODER LÖSCHEN MÖCHTEN ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `VERIFIZIERUNGSABZEICHEN`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `*REAGIEREN SIE AUF EIN VIDEO, BILD ODER SCHREIBEN ${usedPrefix + command} ZUSAMMEN MIT EINEM LINK, DER AUF .jpg .jpeg .gif .png endet*`}
const smsSticker2 = () => { return `*DAS VIDEO SOLLTE NICHT LÄNGER ALS 10 SEKUNDEN DAUERN*`}
const smsSticker3 = (usedPrefix, command) => { return `*DER LINK IST UNGÜLTIG, ER MUSS AUF .jpg, .jpeg, .gif oder .png enden. BEISPIEL:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*GEBEN SIE IHRE REGISTRIERUNGS-ID EIN. WENN SIE NICHT WISSEN, WELCHES ES IST, VERWENDEN SIE DEN BEFEHL ${usedPrefix}${idreg}*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*IHRE REGISTRIERUNGS-ID IST NICHT KORREKT. VERWENDEN SIE DEN BEFEHL ${usedPrefix}${idreg} UM IHREN AUSWEIS ZU BEKOMMEN*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `*SIE HABEN IHRE ANMELDUNG STORNIERT* ${packname}\n\n*SIE KÖNNEN BENUTZEN ${usedPrefix}${regbot} UM EINE NEUE REGISTRIERUNG VORZUNEHMEN*`}

//rpg-myns.js
const smsIDserie = () => { return `⬇️ *ID-REGISTRIERUNG* ⬇️`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *NACHRICHT GESENDET:*`}
const smsBCbot2 = () => { return `PRIVAT`}
const smsBCbot3 = () => { return `CLUSTER`}
const smsBCbot4 = () => { return `GESAMT`}
const smsBCbot5 = () => { return `GESAMTVERSANDZEIT:`}
const smsBCbot6 = () => { return `SIE WURDEN NICHT AN ALLE PRIVATEN CHATS GESENDET, UM EINE SÄTTIGUNG ZU VERMEIDEN`}
const smsBCbot7 = () => { return `✅ *OFFIZIELLE AUSSAGE* ✅`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*ANTWORTEN SIE AUF DIE NACHRICHT ODER GEBEN SIE DIE NACHRICHT EIN MIT ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*OFFIZIELLE NACHRICHT WIRD SENDEN, WARTEN SIE EINEN MOMENT ...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *DIE NACHRICHT WURDE GESENDET AN ${totalPri} PRIVATER CHAT*\n\n*GESAMTVERSANDZEIT: ${time}*\n${totalPri >= 500000 ? '\n*SIE WURDEN NICHT AN ALLE CHATS GESENDET, UM EINE SÄTTIGUNG ZU VERMEIDEN*' : ''}`}

//reiniciar 
const smsreiniciar = () => { return `${lenguajeGB['smsAvisoEG']()}\`\`\`✨ NEUSTART ✨\`\`\`\n${wait}`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *EINSTELLUNG* ⚙️`}
const smsConfi2bot = () => { return `BEFEHL`}
const smsConfi3bot = () => { return `ZUSTAND`}
const smsConfi4bot = () => { return `FÜR`}
const smsConfi5bot = () => { return `AKTIVIERT`}
const smsConfi6bot = () => { return `DEAKTIVIERT`}
const smsConfi7bot = () => { return `DIESER CHAT`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*DA ER ADMINISTRATOR IST, WIRD ER NICHT GELÖSCHT*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*EIN WHATSAPP-LINK WURDE ERKENNT!!*\n\n*IHR WERDET ELIMINIERT*`}
const smsWaMismoEnlace = () => { return '*DIESER LINK IST AUS DIESER GRUPPE, NUR AUS DIESEM GRUND WIRD ER NICHT ENTFERNT*'}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}*ES WURDE EIN LINK ERKANNT, DER HTTPS ENTHÄLT!!*\n\n*IHR WERDET ELIMINIERT*`}

//_allantilink.js 
const smsTextoYT = () => { return '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ DEAKTIVIEREN'} 
const smsEncender = () => { return '✅ AKTIVIEREN SIE'} 
const smsEnlaceTik = () => { return `*EIN TIKTOK-LINK WURDE ERKENNT!!*\n\n*IHR WERDET ELIMINIERT*`}
const smsEnlaceYt = () => { return `*EIN YOUTUBE-LINK WURDE ERKENNT!!*\n\n*IHR WERDET ELIMINIERT*`}
const smsEnlaceTel = () => { return `*ES WURDE EINE TELEGRAMMVERKNÜPFUNG ERKANNT!!*\n\n*IHR WERDET ELIMINIERT*`}
const smsEnlaceFb = () => { return `*EIN FACEBOOK-LINK WURDE ERKENNT!!*\n\n*IHR WERDET ELIMINIERT*`}
const smsEnlaceIg = () => { return `*EIN INSTAGRAM-LINK WURDE ERKENNT!!*\n\n*IHR WERDET ELIMINIERT*`}
const smsEnlaceTw = () => { return `*EIN TWITTER-LINK WURDE ERKENNT!!*\n\n*IHR WERDET ELIMINIERT*`}
const smsAllAdmin = () => { return `*ICH MUSS ADMINISTRATOR SEIN, UM BENUTZER ZU LÖSCHEN*`}
const smsSoloOwner = () => { return `*MEIN EIGENTÜMER MUSS DIE EINSCHRÄNKUNGSFUNKTION AKTIVIEREN*`}

//config-on y off.js
const smsParaAdmins = () => { return `FÜR ADMINISTRATOREN UND ERSTELLER: GRUPPEN`}
const smsParaAdYOw = () => { return `FÜR ADMINISTREN UND ERSTELLER: CHATS`}
const smsParaOw = () => { return `FÜR ERSTELLER : CHATS`}
const smsNoGg = () => { return ` | ⚠️`}

//_anti-internacional.js
const smsInt1 = () => { return `DIESE NUMMER`}
const smsInt2 = () => { return `IN DIESER GRUPPE NICHT ERLAUBT!!`}

//handler.js
const smsCont1 = () => { return `*🥀 BEFEHL FEHLGESCHLAGEN 🥀*`}
const smsCont2 = () => { return `*⛈️ PLUGIN:*`}
const smsCont3 = () => { return `*⛈️ BENUTZER:*`}
const smsCont4 = () => { return `*⛈️ BEFEHL:*`}
const smsCont5 = () => { return `*⛈️ ERROR:*`}
const smsCont6 = () => { return `*✨ MELDEN SIE DIESE NACHRICHT MIT DEM BEFEHL #report, um sie zu beheben*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*ES HAT KEINE DIAMANTEN!! 💎 MIT DEM BEFEHL KÖNNEN SIE ZUM STORE GEHEN*`}
const smsCont8 = () => { return ` *DIAMANT 💎 GEBRAUCHT*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*SIE BRAUCHEN DAS NIVEAU ➡️*`}
const smsCont10 = () => { return `*UM DIESEN BEFEHL ZU VERWENDEN. IHR AKTUELLES NIVEAU IST ➡️*`}
const smsCont11 = () => { return `*AKTUALISIEREN MIT DEM BEFEHL*`}
const smsAntiEliminar = (userDelete) => { return `♻️ *ANTI-LÖSCHEN* ♻️\n*@${userDelete} EINE NACHRICHT GELÖSCHT!!*\n\n\`\`\`GELÖSCHTE NACHRICHT WIRD GESENDET...\`\`\``}
const smsHandler = () => { return "'handler.js' WURDE ERFOLGREICH AKTUALISIERT"} 
const smsHandlerLlamar = (tagUserL, llamadaVideo) => { return `*HALLO @${tagUserL} ${llamadaVideo ? 'VIDEOANRUFE 📲' : 'DIE ANRUFE 📞'} ES IST IN DIESEM CHAT VERBOTEN. SIE WERDEN GESPERRT*`} 

//audio-efectos-edit.js
const smsControlAudio1 = () => { return '*REAGIEREN SIE AUF EINE AUDIO- ODER SPRACHNOTIZ*'}
const smsControlAudio2 = (usedPrefix, command) => { return `*DIESE PARAMETER LASSEN NUR TYPENNUMMERN ZU ${usedPrefix + command} UM DIE PARAMETER ZU KENNEN*`}
const smsControlAudio3 = () => { return `*ES IST EIN FEHLER AUFGETRETEN. ICH HABE VERSUCHT, DIE WERTE DER PARAMETER ZU ÄNDERN. DENKEN SIE DARAN, DEN FILTER ANZUWENDEN, DER AUF DIE AUDIO- ODER SPRACHNOTIZ REAGIEREN MUSS*`}
const smsControlAudio4 = () => { return `*REAGIEREN SIE AUF EINE AUDIO- ODER SPRACHNOTIZ, UM DEN FILTER ANZUWENDEN*`}
const smsAudioEdit1 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *20* | MAX: *20000*
⎔ Standard: *94*
1️⃣👉 _Filtermittenfrequenz in Hz_

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *-30* | MAX: *30*
⎔ Standard: *25*
2️⃣👉 _Filterverstärkungen in dB_

⎔ *(Optionaler Parameter)*
⎔ OPTIONEN: *"q", "h", "o"*
⎔ Standard: *o*
3️⃣👉 _Filterbandbreitentyp_
*q:* Qualitätsverhältnis, spezifischere Frequenz.
*h:* Konstante Bandbreite, Gleichheit bei allen Frequenzen.
*o:* Bandbreite in Oktaven, Verdoppelung oder Halbierung in jeder Oktave (jedes Mal, wenn die Frequenz verdoppelt oder halbiert wird).

⎔ *(Optionaler Parameter)*
⎔ MIN: *2* | MAX: *500*
⎔ Standard: *5*
4️⃣👉 _Setzt die Filterbandbreite bei Verwendung auf den X-Wert [q, h, o]_

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ WENN SIE DIE OPTIONALEN PARAMETER NICHT HINZUFÜGEN ODER DEREN GRENZWERTE ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit2 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *20* | MAX: *20000*
⎔ Standard: *15*
1️⃣👉 _Vibratofrequenz in Hz_

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *0* | MAX: *100*
⎔ Standard: *0.5*
2️⃣👉 _Vibrato-Tiefe, der Endwert ist eine Dezimalzahl, wenn der Wert größer als 95 ist, ist er eine Ganzzahl_

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*❕ ALLE PARAMETER SIND OBLIGATORISCH. WENN SIE IHRE GRENZEN ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit3 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *8* | MAX: *32*
⎔ Standard: *16*
1️⃣👉 _Quantisierungsgrad von Audio-Samples in Bits_

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *500* | MAX: *48000*
⎔ Standard: *44100*
2️⃣👉 _Häufigkeit, mit der Audiodaten pro Sekunde abgetastet werden_

⎔ *(Optionaler Parameter)*
⎔ MIN: *0* | MAX: *100*
⎔ Standard: *0.5*
3️⃣👉 _Mischpegel zwischen dem Original-Audio und dem Audio mit Crusher-Effekt (Der Endwert ist eine Dezimalzahl, wenn er weniger als 95 beträgt)_

⎔ *(Optionaler Parameter)*
⎔ MIN: *0* | MAX: *100*
⎔ Standard: *0.5*
4️⃣👉 _Mischungsverhältnis zwischen dem Original-Audio und dem Audio mit Crusher-Effekt (der Endwert ist eine Ganzzahl, wenn er größer als 95 ist)_

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*❕ WENN SIE DIE OPTIONALEN PARAMETER NICHT HINZUFÜGEN ODER IHRE GRENZEN ÜBERSCHREITEN, WERDEN SIE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit4 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *1* | MAX: *15*
⎔ Standard: *4*
1️⃣👉 _Eingangsaudio muss auf die gewünschte Wiedergabegeschwindigkeit eingestellt werden, was eine Änderung der Audiodauer mit sich bringt_

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *2000* | MAX: *2550000*
⎔ Standard: *48000*
2️⃣👉 _Geben Sie Audio-Sampling in Hz aus und stellen Sie die gewünschte Sample-Rate ein_

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*❕ ALLE PARAMETER SIND OBLIGATORISCH. WENN SIE IHRE GRENZEN ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit5 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *-1024* | MAX: *1024*
⎔ Standard: *6*
1️⃣👉 _Audioverstärker in dB, ein negativer Wert verringert den Audioton und ein positiver Wert erhöht den Audioton_

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*❕ DER PARAMETER IST PFLICHTLICH. WENN ER SEINE GRENZEN ÜBERSCHREITET, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit6 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *1* | MAX: *100*
⎔ Standard: *1.63*
1️⃣👉 _Ändern Sie die Wiedergabegeschwindigkeit einer Audiodatei_

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Standard: *44100*
2️⃣👉 _Ändern Sie die Abtastrate einer Audiodatei_

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ ALLE PARAMETER SIND OBLIGATORISCH. WENN SIE IHRE GRENZEN ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit7 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *1* | MAX: *300*
⎔ Standard: *1.3*
1️⃣👉 _Ändern Sie die Wiedergabegeschwindigkeit einer Audiodatei_

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *4000* | MAX: *4800000*
⎔ Standard: *22100*
2️⃣👉 _Ändern Sie die Abtastrate einer Audiodatei_

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ ALLE PARAMETER SIND OBLIGATORISCH. WENN SIE IHRE GRENZEN ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit8 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *1* | MAX: *150*
⎔ Standard: *1.06*
1️⃣👉 _Ändern Sie die Wiedergabegeschwindigkeit einer Audiodatei_

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *1000* | MAX: *550000*
⎔ Standard: *44100*
2️⃣👉 _Ändern Sie die Abtastrate einer Audiodatei_

⎔ *(Optionaler Parameter)*
⎔ MIN: *1* | MAX: *7*
⎔ Standard: *1.25*
3️⃣👉 _Stellen Sie die multiplizierte Frequenz auf den gewünschten Wert ein_

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*❕ WENN SIE DEN OPTIONALEN PARAMETER NICHT HINZUFÜGEN ODER SEINE GRENZEN ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit9 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *32* | MAX: *16384*
⎔ Standard: *512*
1️⃣👉 _Größe der Audiosignalfragmente, die jeweils verarbeitet werden_

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *1* | MAX: *100*
⎔ Standard: *0.75*
2️⃣👉 _Ausmaß der Überlappung zwischen aufeinanderfolgenden Fenstern. Ein Audiosignal wird in Segmente oder Fenster unterteilt, um eine bestimmte Verarbeitung anzuwenden._

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ ALLE PARAMETER SIND OBLIGATORISCH. WENN SIE IHRE GRENZEN ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit10 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *0.5* | MAX: *12*
⎔ Standard: *0.7*
1️⃣👉 _Geschwindigkeit der Audiowiedergabe. Ein Wert von 1,0 ist die normale Geschwindigkeit, während ein Wert größer als 1,0 die Wiedergabe beschleunigt und ein Wert kleiner als 1,0 sie verlangsamt._

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Standard: *44100*
2️⃣👉 _Die Audio-Sampling-Rate gibt an, wie oft der Ton abgetastet wird. Je höher die Abtastrate, desto höher die Audioqualität._

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ ALLE PARAMETER SIND OBLIGATORISCH. WENN SIE IHRE GRENZEN ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit11 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *1* | MAX: *5*
⎔ Standard: *2*
1️⃣👉 _Vom Filter verwendeter Bewegungsinterpolationsmodus._

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *1* | MAX: *4*
⎔ Standard: *2*
2️⃣👉 _Vom Filter verwendeter Bewegungskompensationsmodus._

⎔ *(Optionaler Parameter)*
⎔ MIN: *0* | MAX: *10*
⎔ Standard: *1*
3️⃣👉 _Verwendung der vertikalen Subpixel-Interpolation_

⎔ *(Optionaler Parameter)*
⎔ MIN: *1* | MAX: *240*
⎔ Standard: *120*
4️⃣👉 _Steuert die Bildrate der Audioausgabe_

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*❕ WENN SIE DIE OPTIONALEN PARAMETER NICHT HINZUFÜGEN ODER IHRE GRENZEN ÜBERSCHREITEN, WERDEN SIE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit12 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *0.5* | MAX: *10*
⎔ Standard: *0.5*
1️⃣👉 _Passt die Geschwindigkeit der Audiowiedergabe an, ohne die Tonhöhe zu beeinflussen._

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *2000* | MAX: *260000*
⎔ Standard: *65100*
2️⃣👉 _Passen Sie die Audio-Abtastrate an, d. h. die Anzahl der Audio-Samples pro Sekunde._

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 3 9483
${usedPrefix + command} 0.8 3849

*❕ ALLE PARAMETER SIND OBLIGATORISCH. WENN SIE IHRE GRENZEN ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsAudioEdit13 = (usedPrefix, command) => { return `*_UM EINE KORREKTE ÄNDERUNG IHRES AUDIOS VORZUNEHMEN, VERWENDEN SIE DIESE PARAMETER_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Obligatorischer Parameter)*
⎔ MIN: *0.001* | MAX: *5*
⎔ Standard: *0.125*
1️⃣👉 _Die Frequenz der gepulsten Welle in Hertz (Hz)_

⎔ *(Obligatorischer Parameter)*
⎔ MIN: *0.01* | MAX: *1*
⎔ Standard: *1*
2️⃣👉 _Passt den Grad der auf das Audio angewendeten Modulation an._

*»» ANWENDUNGSBEISPIELE:*
${usedPrefix + command} 0.555 0.50
${usedPrefix + command} 1 0.07

*❕ ALLE PARAMETER SIND OBLIGATORISCH. WENN SIE IHRE GRENZEN ÜBERSCHREITEN, WERDEN DIESE ZUM STANDARDWERT HINZUGEFÜGT. DENKEN SIE DARAN, AUF DIE AUDIO- ODER SPRACHNOTIZ ZU REAGIEREN*`}
const smsControlAudio5 = () => { return `ZUGEWIESENE WERTE:`}

//config.js
const smsConfigBot = () => { return "'config.js' WURDE ERFOLGREICH AKTUALISIERT"}

//menu-menu.js
const smsMenuTotal1 = () => { return "MENÜINFORMATIONEN"}
const smsMenuTotal2 = () => { return "JADIBOT"}
const smsMenuTotal3 = () => { return "SUCHE / AI"}
const smsMenuTotal4 = () => { return "DOWNLOADS"}
const smsMenuTotal5 = () => { return "KONVERTER"}
const smsMenuTotal6 = () => { return "GRUPPE ~ ALLE"}
const smsMenuTotal7 = () => { return "GRUPPE ~ ADMINISTR"}
const smsMenuTotal8 = () => { return "AUDIOEFFEKTE BEARBEITEN"}
const smsMenuTotal9 = () => { return "AUDIOEFFEKTE"}
const smsMenuTotal10 = () => { return "RAHMEN"}
const smsMenuTotal11 = () => { return "MUSS BESTÄTIGT WERDEN"}
const smsMenuTotal12 = () => { return "EIGENTÜMER(A)"}

//Error2
const smsMensError1 = () => { return `❕ BEFEHL BERICHTEN ❕`} 
const smsMensError2 = () => { return `Der folgende Befehl schlägt fehl`} 

//config.js
const smsMeWait = () => { return '*⌛ WARTEN SIE BITTE EINEN MOMENT...*'} 

//buscadores.js
const smsytserh1 = () => { return 'QUALIFIKATION'} 
const smsytserh2 = () => { return 'LINK'} 
const smsytserh3 = () => { return 'DAUER'} 
const smsytserh4 = () => { return 'HOCHGELADEN'} 
const smsytserh5 = () => { return 'ANSICHTEN'} 

//descargas.js
const smsIAimage = () => { return '💻 *BILD ERSTELLT MIT AI/DALL-E* ✨'} 
const smsIAimage2 = () => { return 'Eine violette und hellblaue Katze im Jupiter, die den Kosmos mit ihrem Charme und minimalistischer Wirkung erleuchtet.'} 
const smsIAimage3 = () => { return '💻 *BILD ERSTELLT MIT AI/Midjourney* ✨'} 
const smsIAimage4 = () => { return 'Ein kleiner Löwe rennt durch die Pfütze, spiegelt sich in der Pfütze, Foto.'} 

//descargas.js
const smsyFBvid1 = () => { return '*DIES IST KEIN GÜLTIGER LINK. DENKEN SIE DARAN, EINEN FACEBOOK-VIDEOLINK ZU VERWENDEN*'} 
const smsyFBvid2 = () => { return 'FACEBOOK-GRUPPENVIDEO HERUNTERGELADEN 💚'} 
const smsyFBvid3 = () => { return 'FACEBOOK-REELS-VIDEO HERUNTERGELADEN 💚'} 
const smsyFBvid4 = () => { return 'FACEBOOK-STORIES-VIDEO HERUNTERGELADEN 💚'} 
const smsyFBvid5 = () => { return 'FACEBOOK-POST-VIDEO HERUNTERGELADEN 💚'} 
const smsyFBvid6 = () => { return 'FACEBOOK-VIDEO HERUNTERGELADEN 💚'}

//grupos-admin.js
const smsInvite1 = () => { return '*ES WERDEN NUR ZIFFERN AKZEPTIERT, KEINE BUCHSTABEN*'} 
const smsInvite2 = (usedPrefix, command, bot) => { return `*GEBEN SIE DIE VOLLSTÄNDIGE NUMMER DES BENUTZERS EIN, DEN SIE IN DIE GRUPPE EINLADEN MÖCHTEN*\n*BEISPIEL:*\n\n*${usedPrefix + command}* +${bot}`} 
const smsInvite3 = (NumeroUser, user, groupMetadata, link) => { return `✨ ¡Hallo! *@${NumeroUser}* Bin ${packname}, ein Bot für WhatsApp. Es scheint, dass *@${user}* lädt Sie in die Gruppe ein ${groupMetadata.subject}\n\n\`\`\`Wir freuen uns darauf, Sie in der Gruppe zu sehen.!\`\`\`\n\n*${link}*`} 
const smsInvite4 = (NumeroUser) => { return `*EINLADUNG GESENDET AN DIE PRIVATE VON @${NumeroUser}*`} 

//descargas.js
const smsSP0 = (usedPrefix) => { return `🌸 _SIE KÖNNEN BENUTZEN *${usedPrefix}spotifysearch* UM DEN LINK DES BESTIMMTEN SONG ZU ERHALTEN_`} 
const smsSP1 = () => { return '✨ *QUALIFIKATION:*'} 
const smsSP2 = () => { return '🗣️ *KÜNSTLER:*'} 
const smsSP3 = () => { return '🌐 *URL*:'} 
const smsSP4 = () => { return '♻️ *URL HERUNTERLADEN:*'} 
const smsSP5 = () => { return '🎶 *LIEDER SENDEN...*'} 
const smsSP6 = () => { return `${lenguajeGB['smsAvisoFG']()}*KEINE ERGEBNISSE GEFUNDEN. VERSUCHEN SIE EINEN ANDEREN NAMEN ODER LINK*`} 

//_autodetec.js
const smsAutodetec1 = (inf, usuario, m) => { return `${inf}*» ${usuario}*\n*DER GRUPPENNAME HAT SICH GEÄNDERT*\n\n🔰 *JETZT HEISST DIE GRUPPE:*\n*${m.messageStubParameters[0]}*`} 
const smsAutodetec2 = (inf, usuario, groupMetadata) => { return `${inf}*» ${usuario}*\n*DAS BILD HAT SICH GEÄNDERT:*\n*${groupMetadata.subject}*`} 
const smsAutodetec3 = (inf, usuario, m, groupMetadata) => { return `${inf}*» ${usuario}*\n*HAT ERLAUBT ${m.messageStubParameters[0] == 'on' ? 'NUR FÜR ADMINISTREN' : 'ALLE'} PSIE KÖNNEN KONFIGURIEREN ${groupMetadata.subject}*`} 
const smsAutodetec4 = (inf, groupMetadata, usuario) => { return `${inf}*DER LINK VON ${groupMetadata.subject} WURDE RESTAURIERT VON:*\n*» ${usuario}*`} 
const smsAutodetec5 = (inf, groupMetadata, m, usuario) => { return `${inf}*${groupMetadata.subject} IST GEWESEN ${m.messageStubParameters[0] == 'on' ? 'GESCHLOSSEN 🔒' : 'OFFEN 🔓'} VON ${usuario}*\n\n💬 *JETZT ${m.messageStubParameters[0] == 'on' ? 'NUR FÜR ADMINISTREN' : 'ALLE'} SIE KÖNNEN NACHRICHTEN SENDEN*`} 
const smsAutodetec6 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} ER IST JETZT ADMIN BEI*\n*» ${groupMetadata.subject}*\n\n✨ *AKTION GEMACHT VON:*\n*» ${usuario}*`} 
const smsAutodetec7 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} HÖREN SIE AUF, EIN ADMIN ZU SEIN*\n*» ${groupMetadata.subject}*\n\n✨ *AKTION GEMACHT VON:*\n*» ${usuario}*`} 

export default { lenguaje, smsAvisoRG, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsprivado, smsreiniciar, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCodigoQR, smsConexionOFF, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsConMenu, smsCreA,
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
smsAutodetec3, smsAutodetec4, smsAutodetec5, smsAutodetec6, smsAutodetec7, smsImageGg, smsGit, languageSave, languageRegister, smsMainBot, smsIniJadi2, smsreenvia, smsJBConexionClose2}
