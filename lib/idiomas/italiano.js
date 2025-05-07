const lenguaje = () => { return 'it' } //ITALIANO

const smsAvisoRG = () => { return `╰⊱✅⊱ *RISULTATI* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *ATTENZIONE* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFO* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERRORE* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *AZIONE ERRATA* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *AVVISO* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *COMPLETATO* ⊱💚⊱╮\n\n` }

const smsRowner = () => { return `\`\`\`¡¡QUESTO COMANDO PUO' ESSERE UTILIZZATO SOLO DAL NUMERO PRINCIPALE DEL BOT!!\`\`\`` }
const smsOwner = () => { return `\`\`\`¡¡QUESTO COMANDOPUO' USARLO SOLO IL MIO CREATORE!!\`\`\`` }
const smsMods = () => { return `\`\`\`¡¡QUESTO COMANDO POSSONO USARLO SOLO CREATORE E MODERATORI!!\`\`\`\`` }
const smsPremium = () => { return `\`\`\`¡¡QUESTO COMANDO E' DISPONIBILE SOLO PER GLI UTENTI PREMIUM E IL MIO CREATORE !! PER OTTENERE IL PREMIUM ACQUISTA UN PASS UTILIZZANDO IL COMANDO  #pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`¡¡QUESTO COMANDO PUÒ ESSERE UTILIZZATO SOLO NEI GRUPPI!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`¡¡QUESTO COMANDO PUO' ESSERE UTILIZZATO SOLO IN PRIVATO!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`¡¡QUESTO COMANDO E' SOLO PER GLI AMMINISTRATORI!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`¡¡E' NECESSARIO ESSERE AMMINISTRATORE PER POTER USARE QUESTO COMANDO!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`¡¡DEVI ESSERE REGISTRATO PER USARE QUESTO COMANDO, SCRIVI  #verify PER REGISTRARTI!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`¡¡QUESTO COMANDO E' LIMITATO DAL MIO CREATORE!!\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BENVENUTO/A!!*\n┊💖 @user\n┊📄 *LEGGI LA DESCRIZIONE DEL GRUPPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *@user*\n┊ *NON ERA DEGNO DI ESSERE QUI!!* 🌟\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return `*@user E STATO PROMOSSO AD AMMINISTRATORE!!*`}
const smsSdemote = () => { return `*@user E' STATO RETROCESSO COME AMMINISTRATORE!!*`}
const smsSdesc = () => { return '*LEGGI LA NUOVA DESCRIZIONE DEL GRUPPO:*\n\n@desc'}
const smsSsubject = () => { return `*IL NOME DEL GRUPPO E' STATO AGGIORNATO!!*\n@subject`}
const smsSicon = () => { return `*LA FOTO DEL GRUPPP E' STATA AGGIORNATA!!*`}
const smsSrevoke = () => { return '*CONTROLLA IL NUOVO LINK DEL GRUPPO!!*\n*@revoke*'}

const methodCode1 = () => { return ` METODO VINCOLANTE` }
const methodCode2 = () => { return ` COME VUOI CONNETTERTI?` }
const methodCode3 = () => { return ` Opzione` }
const methodCode4 = () => { return ` QR Code` }
const methodCode5 = () => { return ` Codice a 8 cifre.` }
const methodCode6 = () => { return ` Scrivi solo il numero di` }
const methodCode7 = () => { return ` la possibilità di connettersi.` }
const methodCode8 = () => { return ` CONSIGLIO` }
const methodCode9 = () => { return ` Se usi Termux, Replit, Linux o Windows` }
const methodCode10 = () => { return ` Utilizzare questi comandi per l'esecuzione diretta:` }
const methodCode11 = (chalk) => { return ` NUMERI DIVERSI DA NON SONO AMMESSI ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, NESSUNA LETTERA O SIMBOLO SPECIALE.\n${chalk.bold.yellowBright(" CONSIGLIO: COPIA IL NUMERO DI OPZIONE E INCOLLA NELLA CONSOLE.")}` }
const methodCode12 = () => { return ` Inizia con il codice QR` }
const methodCode13 = () => { return ` Inizia con un codice di 8 cifre` }
const methodCode14 = () => { return ` Avvio predefinito con opzioni` }
const phNumber = (chalk) => { return ` Imposta file${chalk.bold.greenBright("config.js")} Il numero inserito non ha un codice paese.${chalk.bold.yellowBright(" Esempio: +593090909090")}` }
const phNumber2 = (chalk) => { return ` Inserisci il numero WhatsApp.\n${chalk.bold.yellowBright(" SUGGERIMENTO: copia il numero WhatsApp e incollalo nella console.")}\n${chalk.bold.yellowBright(" Esempio: +593090909090")}\n${chalk.bold.magentaBright('---> ')}` }
const phNumber3 = () => { return ` Assicurati di aggiungere il codice paese.` }
const pairingCode = () => { return ` CODICE VINCOLANTE:` }

const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ 💚 CONNESSIONE CON WHATSAPP RIUSCITA 💚\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ CARICAMENTO ...\n`} 
const smsCodigoQR = () => { return `\n✅ SCANSIONA IL CODICE QR SCADE TRA 45 SECONDI  ✅`}
const smsConexionOFF = () => { return `\n⚠️ NESSUNA CONNESSIONE, ELIMINA LA CARTELLA  ${global.authFile} E SCANSIONA IL CODICE QR  ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ MULTIMEDIA ☘️\n┆• FILE DALLA CARTELLA TMP ELIMINATI \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• SESSIONI NON ESSENZIALI ELIMINATE \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 FILE 🌹\n┆• FILE RESIDUI CANCELLATI \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺 GataJadiBot 🌺\n┆• NIENTE DA ELIMINARE \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼 GataJadiBot 🌼\n┆• FILE NON ESSENZIALI ELIMINATI \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️ GataJadiBot ⚠️\n┆• SI E' VERIFICATO UN ERRORE \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ ARCHIVIO  ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `ELIMINATO CON SUCCESSO \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ ARCHIVIO ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `ELIMINAZIONE NON RIUSCITA\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`}
const smsConexioncerrar = () => { return `\n⚠️ CONNESSIONE CHIUSA, RICONESSIONE ....`}
const smsConexionperdida = () => { return `\n⚠️ CONNESSIONE PERSA CON IL SERVER, RICONNESSIONE...`}
const smsConexionreem = () => { return `\n⚠️ CONNESSIONE SOSTITUITA, UN'ALTRA NUOVA SESSIONE È STATA APERTA, CHIUDERE PRIMA LA SESSIONE CORRENTE.`}
const smsConexionreinicio = () => { return `\n❇️ CONNESSIONE AL SERVER IN CORSO...`}
const smsConexiontiem = () => { return `\n⌛ TIMEOUT DI CONNESSIONE, RICONNESSIONE IN CORSO...`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗ MOTIVO SCONOSCIUTO DELLA DISCONNESSIONE : ${reason || ''} >> ${connection || ''}`}
const languageSave = () => { return `✅ La lingua e' gia' configurata.`} 
const languageRegister = (selectedLanguage) => { return `❇️ La lingua e' stata impostata in "${selectedLanguage}".\n`} 
const smsMainBot = () => { return "AGGIORNATO 'main.js' CON SUCCESSO"}

//_antiprivado 
const smsprivado = () => { return `*Non puoi utilizzare questo bot in una chat privata*\n\n*Unisciti al gruppo ufficiale del bot per poterlo usare*`}

//Boton
const smsConMenu = () => { return `🌻 MENU`}

//info-creadora.js
const smsCreA = () => { return 'Ciao!!'}
const smsCreB = () => { return 'Mi chiamo'}
const smsCreC = () => { return 'Sempre disponibile per aiutarti 😸'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return '🌸 *◜ACCOUNT UFFICIALI◞* 🌸'}
const smsOfc2 = () => { return `*❥ _Seguici sugli Account Ufficiali per restare sempre aggiornato_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `🌼 Si accetta supporto volontario tramite PayPal, se vuoi aiutare in altro modo puoi donare un Numero su Instagram in modo che la repository rimanga valida, Grazie!!\n\n🌺 Puoi sempre supportare seguendo gli Account Ufficiali e Condividendo il lavoro realizzato in ${packname}`}
const smsTituloDonar = () => { return '*◜🌹❤️ DONAZIONE VOLONTARIA ❤️🌹◞*'}
const smsPrivadoDonar = () => { return '🍄 *_Puoi anche condividere quanto segue come dimostrazione di supporto_*\n*_Valuta il repository con una 🌟 Grazie!!_*'}

//info-gruposofc.js
const smsGrupoOfc1 = () => { return '*◜🌺 GRUPPI UFFICIALI 🌺◞*'}
const smsGrupoOfc2 = () => { return '*◜🌸 COLLABORAZIONE 🌸◞*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*SEI IN QUESTI GRUPPI:*_'}
const smsLisB = () => { return '*⭔ Gruppi Totali:*'}
const smsLisC = () => { return '*⋄ Gruppo:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ Partecipanti:*'}

//info-estado.js
const smsCreApoyo = () => { return '✨ S U P P O R T O'}
const smsEstado1 = () => { return 'STATO'}
const smsEstado2 = () => { return 'Versione'}
const smsEstado3 = () => { return 'Utenti'}
const smsEstado4 = () => { return 'Registrati'}
const smsEstado5 = () => { return 'Chat dimenticate'}
const smsEstado6 = () => { return 'Utenti bannati'}
const smsEstado7 = () => { return 'Attivo durante'}

//info-ping.js
const smsVl1 = () => { return `VELOCITA'`}
const smsVl2 = () => { return 'S E R V E R*'}
const smsVl3 = () => { return '*🔵 RAM libera:*'}
const smsVl4 = () => { return '*💻 Piattaforma :*'}
const smsVl5 = () => { return '*📡 Luogo :*'}
const smsVl6 = () => { return '*Utilizzo della memoria NodeJS*'}

//info-infobot.js
const smsBT1 = () => { return 'CREATORE'}
const smsBT2 = () => { return 'VERSIONE'}
const smsBT3 = () => { return 'PREFISSO'}
const smsBT4 = () => { return 'CHAT PRIVATE'}
const smsBT5 = () => { return 'GRUPPI'}
const smsBT6 = () => { return 'CHAT TOTALI'}
const smsBT7 = () => { return `ATTIVITA'`}
const smsBT8 = () => { return 'UTENTI'}
const smsBT9 = () => { return 'SUB BOT ATTIVI'}
const smsCreInfo = () => { return '🌟 I N F O R M A Z I O N I '}


//info-contacto.js
const smsContacto1 = () => { return ' Io sono ' + packname + ' un Bot WhatsApp dedicato ad aiutarti con qualunque cosa tu abbia bisogno 😎'}
const smsContacto2 = () => { return 'Sono il proprietario di ' + packname + ' se hai qualche domanda puoi dirmelo ✌️'}
const smsContacto3 = () => { return '👑 Proprietario'}
const smsContacto4 = () => { return 'GataBot Contatto Ufficiale 🐈'}
const smsContacto5 = () => { return '🐣 Come posso aiutarti?'}
const smsContacto6 = () => { return 'Non ho email 🙏'}
const smsContacto7 = () => { return '🌎 Globale'}
const smsContacto8 = () => { return `Questo account e' un Bot  👀`}

//ejemplos
const smsMalused = () => { return '⚡ *USA IL COMANDO IN QUESTO MODO:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *E' NECESSARIO UTILIZZARE IL COMANDO COME IN QUESTO ESEMPIO:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *RISPONDI A UN MESSAGGIO CON IL COMANDO O USA QUESTO ESEMPIO:*\n`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SI E' VERIFICATO UN ERRORE IMPREVISTO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`RISCONTRATA UNA INCONVENIENZA.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`QUALCOSA E' ANDATO storto, SEGNALA QUESTO COMANDO USANDO:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'TITOLO'}
const smsYT2 = () => { return 'DESCRIZIONE'}
const smsYT3 = () => { return 'DURATA'}
const smsYT4 = () => { return 'VISUALIZZAZIONI'}
const smsYT5 = () => { return 'GUARDA SU YOUTUBE'}
const smsYT6 = () => { return 'PROVA UN ALTRO NOME'}

//descargas.js
const smsYTA1 = () => { return `DOWNLOAD DELL' AUDIO... ASPETTA UN MOMENTO`}

//descargas.js
const smsYTV1 = () => { return 'DOWNLOAD DEL VIDEO...ASPETTA UN MOMENTO'}

//descargas.js
const smsYTA2 = () => { return 'DOWNLOAD DEL FILE AUDIO... ASPETTA UN MOMENTO'}

//descargas.js
const smsYTV2 = () => { return 'DOWNLOAD DEL FILE VIDEO...ASPETTA UN MOMENTO'}

//descargas.js
const smsTiktok = () => { return 'PRESTO AVRAI IL TIKTOK'}

//descargas.js
const smsGit = () => { return `Invio file, il momento 🚀\nse non invia il file e' perche' e' pesante`}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🪻 \`\`\`VIETATO NASCONDERE IL VIDEO\`\`\` 🪻`} 
const smsAntiView2 = () => { return `\n🪷 \`\`\`VIETATO NASCONDERE L' IMMAGINE\`\`\` 🪷`} 

//buscadores.js
const smsOpenai1 = () => { return '*FAI UNA DOMANDA, ESEMPIO:*'} 
const smsOpenai2 = () => { return 'Consigliami i 10 migliori film di azione'} 
const smsOpenai3 = () => { return `Spiega cosa e' un'equazione quantica ed esegui un esempio semplice e uno composto.`} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*RISPONDI A UNO STICKER PER CONVERTIRLO IN UNA IMMAGINE*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*RISPONDI A UNA IMMAGINE PER CONVERTIRLA IN UN LINK*'} 
const smsConURL1 = () => { return '🔗 *LINK*'} 
const smsConURL2 = () => { return '⚖️ *DIMENSIONE*'} 
const smsConURL3 = () => { return '♻️ *SCADENZA*'} 
const smsConURL4 = () => { return '🪄 *SHORT LINK*'}
const smsConURLERR1 = () => { return 'Infinito'} 
const smsConURLERR2 = () => { return 'Sconosciuto'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + '*RISPONDI A UNO STICKER ANIMATO PER CONVERTIRLO IN UN VIDEO*'} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*SOLO STICKER ANIMATO PER CONVERTIRLO IN UN VIDEO*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*✓ ECCO IL TUO VIDEO!!*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*RISPONDI A UNA GIF PER CONVERTIRLA IN UN VIDEO*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + `*RISPONDI A UN VIDEO. IL TIPO DI FILE UTILIZZATO NON E" CORRETTO*`} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + `*GIF CON AUDIO (Apri la gif per ascoltare l'audio)*`} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*RISPONDI A UN VIDEO O UN AUDIO PER CONVERTIRLO IN UNA NOTA VOCALE*'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + '*QUALCOSA NON VA NEL VIDEO, RIPROVA*'} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + `*QUALCOSA NON VA NELL' AUDIO, RIPROVA*`} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + `*QUALCOSA E' ANDATO STORTO QUANDO HAI PROVATO A CONVERTIRE IL TUO AUDIO IN NOTA VOCALE*`}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + `*QUALCOSA E' ANDATO STORTO QUANDO HAI PROVATO A CONVERTIRE IL TUO VIDEO IN NOTA VOCALE *`} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '*RISPONDI A UN MESSAGGIO DI TESTO O DIGITA IL CODICE E IL TESTO DA CONVERTIRE IN AUDIO, ESEMPIO:*\n'}
const smsTradc2 = () => { return ' (code) (text)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + `Questo testo sara' convertito in un audio \n\n`}
const smsTradc4 = () => { return '*PUOI OTTENERE IL CODICE DELLE LINGUE SUPPORTATE SU:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*❤️ Aspetta un momento perfavore...*'}

//descargas.js
const smsMediaFr = () => { return '❕ *_SUPERIORI A 150 MG È POSSIBILE NON ESSERE INVIATI_*'}
const smsImageGg = () => { return '*💞 RISULTATO DI:*'}

//grupos.js
const smsGI1 = () => { return '*INFORMAZIONI SUL GRUPPO*'}
const smsGI2 = () => { return '*ID GRUPPO*'}
const smsGI3 = () => { return '*NOME DEL GRUPPO*'}
const smsGI4 = () => { return '*DESCRIZIONE DEL GRUPPO*'}
const smsGI5 = () => { return '*NESSUNA DESCRIZIONE*'}
const smsGI6 = () => { return '*PARTECIPANTI TOTALI*'}
const smsGI7 = () => { return '*PARTECIPANTI*'}
const smsGI8 = () => { return '*OWNER DEL GRUPPO*'}
const smsGI9 = () => { return '*AMMINISTRATORI DEL GRUPPO*'}

//grupos.js
const smsAddB3 = () => { return `*NOTIFICA PER GLI AMMINISTRATORI*`}
const smsAddB4 = () => { return `*PRESENZA AMMINISTRATIVA*`}
const smsAddB5 = () => { return `*MESSAGGIO:*`}
const smsAddB6 = () => { return `Chiedo agli amministratori per favore.`}

//grupos-admins.js
const smsDemott = () => { return `*IL NUMERO NON E' VALIDO, RIPROVARE RISPONDERE AL MESSAGGIO DI QUALCUNO O USARE COME IN QUESTO ESEMPIO:*\n`}
const smsDemott2 = () => { return '*ORA HA IL POTERE NEL GRUPPO!!*'}
const smsDemott3 = () => { return '*NON HA PIÙ POTERE NEL GRUPPO!!*'}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*E' STATO IMPOSTATO IL BENVENUTO DEL GRUPPO*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_SCRIVI IL MESSAGGIO DI BENVENUTO_*\n*_OPZIONALE PUOI UTILIZZARE "@" PER AGGIUNGERE ALTRE INFORMAZIONI:_*\n\n*⚡ @user (Menzione utente)*\n*⚡ @subject (Nome del gruppo)*\n*⚡ @desc (Descrizione del gruppo)*\n\n*RICORDA CHE LE "@" SONO FACOLTATIVE*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*L'ADDIO DEL GRUPPO E' STATO CONFIGURATO*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_SCRIVI IL MESSAGGIO DI ADDIO_*\n*_OPZIONALE PUOI UTILIZZARE "@" PER AGGIUNGERE ALTRE INFORMAZIONI:_*\n\n*⚡ @user (Menzione utente)*\n\n*RICORDA CHE IL "@" E' OPZIONALE*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*LA DESCRIZIONE DEL GRUPPO E' STATA CONFIGURATA*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*IL NOME DEL GRUPPO E' STATO IMPOSTATO*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 INSERISCI IL NUOVO NOME DEL GRUPPO*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*IL NOME DEL GRUPPO NON DEVE AVERE PIÙ DI 25 CARATTERI*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeGB['smsAvisoMG']()}*RISPONDI A UN'IMMAGINE PER CAMBIARE LA FOTO DI GRUPPO*`}
const smsGrupoPP2 = () => { return `${lenguajeGB['smsAvisoEG']()}*🪄 L'IMMAGINE DEL GRUPPO È STATA AGGIORNATA!!*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*IL LINK DEL GRUPPO È STATO RIPRISTINATO*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*TAGGA LA PERSONA O RISPONDI AL MESSAGGIO DELLA PERSONA CHE VUOI RIMUOVERE*\n\n*ESEMPIO:* `}
const smskick2 = () => { return `ELIMINATO 😼`}
const smskick3 = () => { return `NON RIESCO A ELIMINARE IL CREATORE DEL GRUPPO 😆🫵`}
const smskick4 = () => { return `NON IN QUESTO GRUPPO 👻`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeGB['smsAvisoEG']()}*TUTTI POSSONO SCRIVERE ORA!!*`}
const smsGrupoClose = () => { return `${lenguajeGB['smsAvisoEG']()}*GRUPPO CHIUSO, SOLO GLI AMMINISTRATORI POSSONO SCRIVERE!!*`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ CONVOCAZIONE DEL GRUPPO ⚡`}

//grupos.js
const smsInsGC1 = () => { return `*ID*`}
const smsInsGC2 = () => { return `*NOME*`}
const smsInsGC3 = () => { return `*CREATO*`}
const smsInsGC4 = () => { return `*AMMINISTRAZIONE PRINCIPALE*`}
const smsInsGC5 = () => { return `*DESCRIZIONE*`}

//propietario(a.js
const smsResP1 = () => { return `_*🗂️ INVIO BACKUP IN PRIVATO...*_`}
const smsResP2 = (date) => { return `*🗓️ Database:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*TAGGA QUALCUNO O RISPONDI AL MESSAGGIO DELL'UTENTE O SCRIVI IL NUMERO A CUI VUOI BANNARE DAI COMANDI*\n\n*ESEMPIO:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} NON PUÒ ESSERE BANNATO CON QUESTO COMANDO* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *NON POSSO BANNARE IL PROPRIETARIO @${ownerNumber} OF ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*NON È NECESSARIO BANNARE NUOVAMENTE @${number} GIA LO E'* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*UTENTE BANNATO CON SUCCESSO* 🙀`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} SEI BANNATO DA @${usr} NON PUOI UTILIZZARE I COMANDI FINO A CHE QUALCUNO NON ANNULLA IL BAN* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*SI E' VERIFICATO UN ERRORE, PUO' ESSERE CHE L'UTENTE NON E' NEL MIO DATABASE PROVA A SCRIVERE ${usedPrefix + command} ${number}*\n\`\`\`SE L'ERRORE CONTINUA RIPORTARE QUESTO COMANDO\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*TAGGA QUALCUNO O RISPONDI AL MESSAGGIO DELL'UTENTE O SCRIVI IL NUMERO CHE VUOI SBANNARE DAI COMANDI*\n\n*ESEMPIO:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*NON C'È BISOGNO DI SBANNARE DI NUOVO @${number} GIA' LO E'* 😊`}
const smsPropdesban3 = () => { return `${lenguajeGB['smsAvisoEG']()}*UTENTE SBANNATO CON SUCCESSO * 💙`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} SEI STATO BANNATO DA @${usr} ORA PUOI USARE I COMANDI!!* 🪄`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*SI E' AVVENUTO UN ERRORE, PUO' ESSERE CHE L'UTENTE NON E' NEL MIO DATABASE PROVA A SCRIVERE ${usedPrefix + command} ${number}*\n\`\`\`SE L'ERRORE CONTINUA RIPORTARE QUESTO COMANDO\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return `*SEI GIA' AMMINISTRATORE 😳🌹*`}
const smsAutoAdmin2 = () => { return `*NON RIESCO A FARLO AMMINISTRATORE 🥹🥀*`}

//owner-unbanchat.js
const smsUnbanCH1 = () => { return lenguajeGB['smsAvisoFG']() + `🗂️ *QUESTA CHAT NON E' REGISTRATA NEL DATABASE*`}
const smsUnbanCH2 = () => { return lenguajeGB.smsAvisoAG() + `🌹 *QUESTA CHAT NON E' BANNATA!!*`}
const smsUnbanCH3 = () => { return lenguajeGB['smsAvisoEG']() + `🪄 *QUESTA CHAT E' STATA SBANNARA, ORA PUOI USARE I COMANDI!!*`}

//propietario(a).js
const smsBioEd1 = () => { return `*SCRIVI IL TESTO CHE VUOI VISUALIZZARE NELLA BIO DI* ${packname}`}
const smsBioEd2 = () => { return `*LA BIOGRAFIA E' MOLTO LUNGA, RIASSUMERE LE INFORMAZIONI PER FAVORE*`}
const smsBioEd3 = () => { return '✅ ```INFORMAZIONI SULLA BIO DEL BOT MODIFICATE CON SUCCESSO```'}

//propietario(a).js
const smsNameEd1 = () => { return `*SCRIVI IL TESTO CHE VUOI VISUALIZZARE COME NOME UTENTE* ${packname}`}
const smsNameEd2 = () => { return `*IL NOME E' TROPPO LUNGO, RIASSUMERE LE INFORMAZIONI PER FAVORE*`}
const smsNameEd3 = () => { return '✅ ```IL NOME DEL BOT E STATO CAMBIATO CON SUCCESSO```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `*RISPONDI A UN'IMMAGINE UTILIZZANDO IL COMANDO ${usedPrefix + command} PER AGGIORNARE LA FOTO DEL PROFILO DEL BOT*`}
const smsFotoEd2 = () => { return '✅ ```FOTO PROFILO BOT MODIFICATA CON SUCCESSO```'}
const smsFotoEd3 = (usedPrefix, command) => { return `*RICORDATI DI RISPONDERE AD UN'IMMAGINE UTILIZZANDO IL COMANDO ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return `✅ *QUESTA CHAT E' STATA BANNATA, NON POTRAI UTILIZZARE I COMANDI FINO A QUANDO NON LA SBANNERAI DI NUOVO*`}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeGB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeGB.smsAvisoAG() + `*NON POSSO ${comd} AL PROPRIETARIO @${ownerNumber}*`}
const smsBlockUn3 = (comd, useB) => { return `*E' STATO ${comd} A ${useB} CON SUCCESSO*`}

//propietario(a).js
const smsRestarU1 = () => { return lenguajeGB['smsAvisoMG']() + `*ETICHETTA L'UTENTE, SCRIVI IL LORO NUMERO O RISPONDI AL MESSAGGIO PER RIAVVIARE I SUOI DATI*`}
const smsRestarU2 = () => { return lenguajeGB['smsAvisoFG']() + `*IL NUMERO INSERITO NON E' VALIDO PER RESETTARE I DATI*`}
const smsRestarU3 = (number) => { return lenguajeGB['smsAvisoEG']() + `*RESETTA A @${number} DAL DATABASE*`}

//propietario(a).js
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*INSERISCI IL LINK DI UN GRUPPO*\n*ESEMPIO:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*SI E' UNITO AL GRUPPO ✅*`}

//info.js
const smsReportGB1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*SCRIVI UNA SEGNALAZIONE*\n*ESEMPIO:*\n\n*${usedPrefix + command}* _Il comando ${usedPrefix}play non funziona._`}
const smsReportGB2 = () => { return lenguajeGB['smsAvisoFG']() + `✨ *MINIMO 10 CARATTERI PER EFFETTUARE LA SEGNALAZIONE*`}
const smsReportGB3 = () => { return lenguajeGB['smsAvisoFG']() + `😼 *MASSIMO 1000 CARATTERI PER EFFETTUARE LA SEGNALAZIONE*`}
const smsReportGB4 = (urs, text) => { return `
💌 \`\`\`SEGNALAZIONE\`\`\` 💌
*⎔ NUMERO:*
*» Wa.me/${urs}*

*⎔ UTENTE:*
*» @${urs}*

*⎔ MESSAGGIO:*
*» ${text}*`.trim()}
const smsReportGB5 = () => { return lenguajeGB['smsAvisoEG']() + `*LA SEGNALAZIONE E' STATA INVIATA AGLI SVILUPPATORI, SE NECESSARIO AVRETE UNA RISPOSTA*`}

//buscadores.js
const smsGit1 = (usedPrefix, command) => { return `*INSERIRE IL NOME DI UN UTENTE GITHUB*\n*ESEMPIO*\n\n*${usedPrefix + command}* GataNina-Li`}
const smsGit2 = () => { return '*R I C E R C A... 🔎*'}
const smsGit3 = () => { return '🌻 *USERNAME*'}
const smsGit4 = () => { return '🌼 *BIO*'}
const smsGit5 = () => { return '🌸 *COMPANIA*'}
const smsGit6 = () => { return '🌺 *EMAIL*'}
const smsGit7 = () => { return '🪷 *BLOG*'}
const smsGit8 = () => { return '🌹 *REPOSITORIES PUBBLICHE*'}
const smsGit9 = () => { return '🌷 *ELEMENTI PUBBLICI ESSENZIALI*'}
const smsGit10 = () => { return '🪸 *FOLLOWERS*'}
const smsGit11 = () => { return '🍁 *SEGUITI*'}
const smsGit12 = () => { return '☘️ *POSIZIONE*'}
const smsGit13 = () => { return '🌱 *TIPO*'}
const smsGit14 = () => { return 'Non trovato'}

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • ミ★ ${global.packname} ミ★ • • ⊹*\n\n*ღ ${global.packname} » _${global.vs}_*\n*ღ Versione JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNZIONE DEL SUB BOT_* 🟢\n\n*➡️ Con un altro cellulare o PC, scansiona questo QR per collegare un Sub Bot*\n\n*1️⃣ Vai ai tre punti nell'angolo in alto a destra*\n*2️⃣ Vai all'opzione Dispositivi accoppiati*\n*3️⃣ Scansiona questo codice QR per accedere*\n\n📢 *¡Questo codice QR scade tra 45 secondi!*`}
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*

*ღ ${global.packname} » _${global.vs}_*
*ღ Versione JadiBot » _${global.vsJB}_*

🟢 *_NUOVA FUNZIONE PER DIVENTARE SUB BOT_* 🟢

*1️⃣ Vai ai tre punti nell'angolo in alto a destra*
*2️⃣ Vai all'opzione Dispositivi accoppiati*
*3️⃣ Fare clic sul collegamento con il codice del telefono* 
*4️⃣ Incolla il codice qui sotto*`}
const smsreenvia = () => { return `*🟢 INVIO I COMANDI...*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *IL TUO DISPOSITIVO E' CONNESSO*\n\n* PER CONNETTERSI NUOVAMENTE PER L'UTILIZZO:\n#deletesesion`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*QUESTO COMANDO E' DISABILITATO DAL MIO PROPRIETARIO*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *PER ESSERE UN SUB BOT VAI AL NUMERO PRINCIPALE*\n*ღ Inserisci il questo link:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *LA CONNESSIONE E' STATA CHIUSA, PROVEREMO A RICOLLEGARCI...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *LA CONNESSIONE E' STATA CHIUSA, E' NECESSARIO COLLEGARSI MANUALMENTE UTILIZZANDO IL COMANDO #serbot E RISCANSIONARE IL NUOVO CODICE QR${lenguajeGB['smsJBConexionTrue3']()}* *CHE E' STATO INVIATO LA PRIMA VOLTA CHE È STATO REALIZZATO UN SUB BOT*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONNESSIONE RIUSCITA!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONNESSIONE RIUSCITA!!! PUOI CONNETTERTI USANDO:*`}
const smsJBConexionTrue3 = () => { return `.`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *E' CONNESSO!! ATTENDERE CARICAMENTO MESSAGGI IN CORSO...*\n\n♻️ *OPZIONI DISPONIBILI:*\n*» ${usedPrefix}pausesb _(Interrompi le funzionalita' del sub bot)_*\n*» ${usedPrefix}delsession _(Elimina tutte le tracce del Sub Bot)_*\n*» ${usedPrefix}jadibot _(Nuovo codice QR o Login se sei gia' un Sub Bot)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*USA QUESTO COMANDO NEL BOT PRINCIPALE*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*MI MANCHERAI ${global.packname} BYE!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*TI SEI DISCONNESSO ED ELIMINATO TUTTE LE TRACCE*`}
const smsFoldErr = (usedPrefix, comd) => { return `*NON HAI UNA SESSIONE, PUOI CREARNE UNA UTILIZZANDO:*\n*${usedPrefix}${comd}*\n\n*SE HAI UN (ID) PUOI SALTARE IL PASSO PRECEDENTE USANDO:*\n*${usedPrefix}${comd}* \`\`\`(ID)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeGB['smsAvisoAG']() + `*SE NON SEI UN SUB BOT, CONTATTA IL NUMERO PRINCIPALE PER DIVENTARE UN SUB BOT*`}
const smsJBCom2 = () => { return lenguajeGB['smsAvisoRG']() + `*HAI CHIUSO/MESSO IN PAUSA LA SESSIONE.*`}

//jadibot
const smsJBCom3 = () => { return `😺 *ELENCO DEI SUBBOT*\n\n🌟 _PUOI CHIEDERE IL PERMESSO PER FARE UTILIZZARE IL BOT AL TUO GRUPPO_\n\n\`\`\`OGNI UTENTE SUB BOT UTILIZZA LA FUNZIONE COME VUOLE, IL NUMERO PRINCIPALE NON E' RESPONSABILE DELL'UTILIZZO DELLA FUNZIONE\`\`\`\n\nSUBBOT CONNESSO:`}
const smsJBCom4 = () => { return "*NESSUN BOT SUB DISPONIBILE. CONTROLLA PIU' TARDI.*"}

//propietario(a).js
const smsJBDifu1 = () => { return "*📣 TRASMISSIONE PER SUB BOT 📣*\n\n"}
const smsJBDifu2 = (numUser, difuUser, tolUser) => { return `*DIFFUSIONE DI SUCCESSO PER ${numUser} SUB BOTS*\n\n${difuUser}\n\n*SUCCESSO IN${tolUser} SECONDI*`}

//propietario(a).js
const smsChatGP1 = () => { return "*INVIO MESSAGGIO, ASPETTARE UN ATTIMO...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *RELEASE UFFICIALE* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *IL MESSAGGIO E' STATO INVIATO A ${totalGP} GRUPPI*`}

//propietario(a)-getplugin.js
const smsPlugin1 = (usedPrefix, command) => { return `*SCRIVERE IL NOME DEL FILE O IL COMANDO PER INVIARE IL CODICE*\n*ESEMPIO*\n\n*${usedPrefix + command} menu-menu.js*\n*${usedPrefix + command} menu*`}
const smsPlugin2 = (contenidoArchivo, contenido) => { return `\`\`\`CODICE FILE ${contenidoArchivo}\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${contenido.toString()}`}
const smsPlugin3 = (text) => { return `*IL CODICE PER '${text}' NON E' STATO TROVATO*`}
const smsPlugin4 = (filename, fileContent) => { return `\`\`\`CODICE FILE ${filename}.js\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${fileContent.toString()}`}
const smsPlugin5 = (matchingFile, err) => { return `ERRORE DURANTE L'INVIO DEL FILE '${matchingFile}': ${err.message}`}
const smsPlugin6 = (matchingFile) => { return `SI E' VERIFICATO UN ERRORE DURANTE L'INVIO DEL FILE'${matchingFile}'`}

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n_😻 SI E' UNITO AL GRUPPO_\n\n🫶 *E' STATO AGGIUNTO DA: @${user}*`}

//propietario(a)-leavegc.js
const smsLeave = () => { return `${packname} *STO ABBANDONANDO IL GRUPPO, E' STATO BELLISSIMO ESSERE QUI 🌸*`}

//rpg-perfil.js
const smsPerfil0 = () => { return `🌸 *P R O F I L O* 🌸`}
const smsPerfil1 = () => { return `UTENTE`}
const smsPerfil2 = () => { return `NOME`}
const smsPerfil3 = () => { return `ETA'`}
const smsPerfil4 = () => { return `NUMERO`}
const smsPerfil5 = () => { return `ID DI REGISTRAZIONE`}

//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}*SEI GIÀ' REGISTRATO!!*\n*SE VUOI CANCELLARE LA TUA REGISTRAZIONE USA QUESTO COMANDO*\n*${usedPrefix}unreg numero seriale*\n\n*SE NON RICORDI IL TUO NUMERO SERIALE USA QUESTO COMANDO*\n*${usedPrefix}myns`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoIIG']()}*INSERISCI IL TUO NOME ED ETA' PER ESSERE REGISTRATO*\n*ESEMPIO*\n\n${usedPrefix + command} GataBot.18`}
const smsVerify2 = () => { return `${lenguajeGB['smsAvisoAG']()}*INSERISCI IL TUO NOME*`}
const smsVerify3 = () => { return `${lenguajeGB['smsAvisoAG']()}*INSERISCI LA TUA ETA'*`}
const smsVerify4 = () => { return `${lenguajeGB['smsAvisoAG']()}*SEI TROPPO GRANDE*`}
const smsVerify5 = () => { return `${lenguajeGB['smsAvisoAG']()}*SEI TROPPO PICCOLO*`}
const smsVerify6 = () => { return `${lenguajeGB['smsAvisoAG']()}*SCRIVI UN NOME PIU' CORTO*`}
const smsVerify7 = () => { return `✅ *V E R I F I C A Z I O N E* ✅`}
const smsVerify8 = (usedPrefix) => { return `*IL TUO ID DI REGISTRAZIONE VERRA' UTILIZZATO NEL CASO IN CUI DESIDERI MODIFICARE O ELIMINARE LA TUA REGISTRAZIONE UTILIZZANDO ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `BADGE DI VERIFICA`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `*RISPONDI A UN VIDEO, UN'IMMAGINE O SCRIVI ${usedPrefix + command} ACCANTO A UN LINK CHE FINISCE CON .jpg .jpeg .gif .png*`}
const smsSticker2 = () => { return `*IL VIDEO NON DEVE DURARE PIU' DI 10 SECONDI*`}
const smsSticker3 = (usedPrefix, command) => { return `*IL LINK NON E' VALIDO, DEVE FINIRE IN .jpg .jpeg .gif .png ESEMPIO:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*INSERISCI IL TUO ID DI REGISTRAZIONE. SE NON SAI QUALE SIA, USA IL COMANDO ${usedPrefix}${idreg}*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*IL TUO ID DI REGISTRAZIONE NON E' CORRETTO. USA IL COMANDO ${usedPrefix}${idreg} PER AVERLO*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `*HAI ANNULLATO LA TUA ISCRIZIONE DA* ${packname}\n\n*PUOI USARE ${usedPrefix}${regbot} PER EFFETTUARE UNA NUOVA REGISTRAZIONE*`}

//rpg-myns.js
const smsIDserie = () => { return `⬇️ *REGISTRAZIONE DELL'ID* ⬇️`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *MESSAGGIO INVIATO:*`}
const smsBCbot2 = () => { return `PRIVATO`}
const smsBCbot3 = () => { return `GRUPPO`}
const smsBCbot4 = () => { return `TOTALE`}
const smsBCbot5 = () => { return `TEMPO DI SPEDIZIONE TOTALE:`}
const smsBCbot6 = () => { return `NON SONO STATI INVIATI A TUTTE LE CHAT PRIVATE PER EVITARE LA SATURAZIONE`}
const smsBCbot7 = () => { return `✅ *RELEASE UFFICIALE* ✅`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*RISPONDI AL MESSAGGIO O SCRIVI IL MESSAGGIO USANDO ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*SENDING OFFICIAL MESSAGE, WAIT A MOMENT...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *IL MESSAGGIO È STATO INVIATO A ${totalPri} CHAT PRIVATE*\n\n*IN: ${time}*\n${totalPri >= 500000 ? '\n*NON SONO STATI INVIATI A TUTTE LE CHAT PER EVITARE LA SATURAZIONE*' : ''}`}

//reiniciar 
const smsreiniciar = () => { return `*RIAVVIO 🚀🚀🚀*\n*ASPETTA UN MOMENTO*`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *IMPOSTAZIONI* ⚙️\n\n> *Significato emoji:*\n✅ ❱❱ Attivata\n❌ ❱❱ Disattivata\n⚠️ ❱❱ Disponibile solo in gruppi/comunità`}
const smsConfi2bot = () => { return `COMANDI`}
const smsConfi3bot = () => { return `STATO`}
const smsConfi4bot = () => { return `PER`}
const smsConfi5bot = () => { return `ATTIVATO`}
const smsConfi6bot = () => { return `DISATTIVATO`}
const smsConfi7bot = () => { return `QUESTA CHAT`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*IN QUANTO AMMINISTRATORE IL LINK NON VERRA' ELIMINATO *`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*E' STATO RILEVATO UN LINK WHATSAPP!!*\n\n*SARAI RIMOSSO*`}
const smsWaMismoEnlace = () => { return `*QUESTO E' IL LINK DEL GRUPPO, NON VERRA' ELIMINATO*`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}*E' STATO RILEVATO UN LINK HTTPS!!*\n\n*VERRAI ELIMINATO*`}

//_allantilink.js 
const smsTextoYT = () => { return '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ DISATTIVARE'} 
const smsEncender = () => { return '✅ ATTIVARE'} 
const smsEnlaceTik = () => { return `*E' STATO RILEVATO UN LINK TIKTOK!!*\n\n*VERRAI ELIMINATO*`}
const smsEnlaceYt = () => { return `*E' STATO RILEVATO UN LINK YOUTUBE!!*\n\n*VERRAI ELIMINATO*`}
const smsEnlaceTel = () => { return `*E' STATO RILEVATO UN LINK TELEGRAM!!*\n\n*VERRAI ELIMINATO*`}
const smsEnlaceFb = () => { return `*E' STATO RILEVATO UN LINK FACEBOOK!!*\n\n*VERRAI ELIMINATO*`}
const smsEnlaceIg = () => { return `*E' STATO RILEVATO UN LINK INSTAGRAM!!*\n\n*VERRAI ELIMINATO*`}
const smsEnlaceTw = () => { return `*E' STATO RILEVATO UN LINK TWITTER!!*\n\n*VERRAI ELIMINATO*`}
const smsAllAdmin = () => { return `*DEVO ESSERE UN AMMINISTRATORE PER ELIMINARE GLI UTENTI*`}
const smsSoloOwner = () => { return `*IL MIO PROPRIETARIO DEVE ATTIVARE LA FUNZIONE RESTRICT*`}

//config-on y off.js
const smsParaAdmins = () => { return `PER AMMINISTRATORI E CREATORE: GRUPPI`}
const smsParaAdYOw = () => { return `PER AMMINISTRATORI E CREATORE: CHAT`}
const smsParaOw = () => { return `PER IL CREATORE: CHAT`}
const smsNoGg = () => { return ` | ⚠️`}

//_anti-internacional.js
const smsInt1 = () => { return `QUESTO NUMERO`}
const smsInt2 = () => { return `NON E' AMMESSO IN QUESTO GRUPPO!!`}

//handler.js
const smsCont1 = () => { return `*🥀 COMANDO FALLITO 🥀*`}
const smsCont2 = () => { return `*⛈️ PLUGIN:*`}
const smsCont3 = () => { return `*⛈️ UTENTE:*`}
const smsCont4 = () => { return `*⛈️ COMANDO:*`}
const smsCont5 = () => { return `*⛈️ ERRORE:*`}
const smsCont6 = () => { return `*✨ SEGNALA QUESTO MESSAGGIO USANDO IL COMANDO #report PER RISOLVERE*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NON HAI DIAMANTI!! 💎 PUOI ANDARE IN NEGOZIO CON IL COMANDO*`}
const smsCont8 = () => { return ` *DIAMANTI 💎 USATI*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*HAI BISOGNO DEL LIVELLO ➡️*`}
const smsCont10 = () => { return `*PER USARE QUESTO COMANDO. IL TUO LIVELLO ATTUALE E' ➡️*`}
const smsCont11 = () => { return `*AGGIORNAMENTO CON IL COMANDO*`}
const smsAntiEliminar = (userDelete) => { return `♻️ *ANTI DELETE* ♻️\n*@${userDelete} HA ELIMINATO UN MESSAGGIO!!*\n\n\`\`\`INVIO MESSAGGIO ELIMINATO...\`\`\``}
const smsHandler = () => { return "AGGIORNATO 'handler.js' CON SUCCESSO"} 
const smsHandlerLlamar = (tagUserL, llamadaVideo) => { return `*CIAO @${tagUserL} ${llamadaVideo ? 'LE VIDEOCHIAMATE 📲' : 'LE CHIAMATE 📞'} IN QUESTA CHAT SONO VIETATE. SARAI BLOCCATO*`} 

//audio-efectos-edit.js
const smsControlAudio1 = () => { return '*RISPONDERE AD UNA NOTA VOCALE O A UN AUDIO*'}
const smsControlAudio2 = (usedPrefix, command) => { return `*QUESTI PARAMETRI AMMETTONO SOLO LA SCRITTURA DEI NUMERI ${usedPrefix + command} CONOSCERE I PARAMETRI*`}
const smsControlAudio3 = () => { return `*SI E' VERIFICATO UN ERRORE HO PROVATO A CAMBIARE I VALORI DEI PARAMETRI E RICORDO CHE PER APPLICARE IL FILTRO DEVE RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsControlAudio4 = () => { return `*RISPONDI A UNA NOTA AUDIO O VOCALE PER APPLICARE IL FILTRO*`}
const smsAudioEdit1 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parametri obbligatorii)*
⎔ MIN: *20* | MAX: *20000*
⎔ Default: *94*
1️⃣👉 _Frequenza centrale del filtro in Hz_

⎔ *(Parametri obbligatori)*
⎔ MIN: *-30* | MAX: *30*
⎔ Default: *25*
2️⃣👉 _Filtra i guadagni in dB_

⎔ *(Parametri facoltativi)*
⎔ OPZIONI: *"q", "h", "o"*
⎔ Default: *o*
3️⃣👉 _Filtra il tipo di larghezza di banda_
*q:* Rapporto qualita, frequenza più specifica.
*h:* Larghezza di banda costante, uguaglianza a tutte le frequenze.
*o:* La larghezza di banda in ottave raddoppiera' o dimezzera' ogni ottava (ogni volta che la frequenza viene raddoppiata o dimezzata).

⎔ *(Parametri facoltativi)*
⎔ MIN: *2* | MAX: *500*
⎔ Default: *5*
4️⃣👉 _Imposta la larghezza di banda del filtro sul valore X, se lo usi [q, h, o]_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ SE OMETTI DI AGGIUNGERE I PARAMETRI OPZIONALI O SUPERI I LORO LIMITI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit2 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *20* | MAX: *20000*
⎔ Default: *15*
1️⃣👉 _Frequenza delle vibrazioni in Hz_

⎔ *(Parametri obbligatori)*
⎔ MIN: *0* | MAX: *100*
⎔ Default: *0.5*
2️⃣👉 _Profondita del vibrato, il suo valore finale sara' in decimale se il valore e' maggiore di 95 sara' un numero intero_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*❕ TUTTI I PARAMETRI SONO OBBLIGATORI, SE SUPERI I LORO LIMITI QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit3 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *8* | MAX: *32*
⎔ Default: *16*
1️⃣👉 _Livello di quantizzazione dei campioni audio in bit_

⎔ *(Parametri obbligatori)*
⎔ MIN: *500* | MAX: *48000*
⎔ Default: *44100*
2️⃣👉 _Numero di volte al secondo in cui l'audio viene campionato_

⎔ *(Parametri facoltativi)*
⎔ MIN: *0* | MAX: *100*
⎔ Default: *0.5*
3️⃣👉 _Livello di mix tra l'audio originale e l'audio con l'effetto acrusher (il suo valore finale sara' un decimale se e' inferiore a 95)_

⎔ *(Parametri facoltativi)*
⎔ MIN: *0* | MAX: *100*
⎔ Default: *0.5*
4️⃣👉 _Quantità di mixaggio tra l'audio originale e l'audio frantumato (il suo valore finale sara' un numero intero se e' maggiore di 95)_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*❕ SE OMETTI DI AGGIUNGERE I PARAMETRI OPZIONALI O SUPERI I LORO LIMITI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit4 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *1* | MAX: *15*
⎔ Default: *4*
1️⃣👉 _L'audio in ingresso deve essere regolato alla velocita' di riproduzione desiderata e comporta la modifica della durata dell'audio_

⎔ *(Parametri obbligatori)*
⎔ MIN: *2000* | MAX: *2550000*
⎔ Default: *48000*
2️⃣👉 _Campionamento audio in uscita in Hz, impostare la frequenza di campionamento desiderata_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*❕ TUTTI I PARAMETRI SONO OBBLIGATORI, SE SUPERI I LORO LIMITI QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit5 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *-1024* | MAX: *1024*
⎔ Default: *6*
1️⃣👉 _Amplificatore audio in dB, un valore negativo diminuisce il suono dell'audio e un valore positivo aumenta il suono dell'audio_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*❕ IL PARAMETRO E' OBBLIGATORIO, SE SUPERA I SUOI LIMITI QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit6 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *1* | MAX: *100*
⎔ Default: *1.63*
1️⃣👉 _Modificare la velocita' di riproduzione di un file audio_

⎔ *(Parametri obbligatori)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Default: *44100*
2️⃣👉 _Modifica la frequenza di campionamento di un file audio_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ TUTTI I PARAMETRI SONO OBBLIGATORI, SE SUPERI I LORO LIMITI QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit7 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *1* | MAX: *300*
⎔ Default: *1.3*
1️⃣👉 _Modificare la velocita' di riproduzione di un file audio_

⎔ *(Parametri obbligatori)*
⎔ MIN: *4000* | MAX: *4800000*
⎔ Default: *22100*
2️⃣👉 _Modifica la frequenza di campionamento di un file audio_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ TUTTI I PARAMETRI SONO OBBLIGATORI, SE SUPERI I LORO LIMITI QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit8 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *1* | MAX: *150*
⎔ Default: *1.06*
1️⃣👉 _Modificare la velocita' di riproduzione di un file audio_

⎔ *(Parametri obbligatori)*
⎔ MIN: *1000* | MAX: *550000*
⎔ Default: *44100*
2️⃣👉 _Modifica la frequenza di campionamento di un file audio_

⎔ *(Parametri facoltativi)*
⎔ MIN: *1* | MAX: *7*
⎔ Default: *1.25*
3️⃣👉 _Imposta la frequenza moltiplicata sul valore desiderato_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*❕ SE OMETTI DI AGGIUNGERE IL PARAMETRO OPZIONALE O SUPERI I SUOI LIMITI, QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit9 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *32* | MAX: *16384*
⎔ Default: *512*
1️⃣👉 _Dimensione dei frammenti del segnale audio che vengono elaborati in ogni momento_

⎔ *(Parametri obbligatori)*
⎔ MIN: *1* | MAX: *100*
⎔ Default: *0.75*
2️⃣👉 _Quantita' di sovrapposizione utilizzata tra finestre consecutive divide un segnale audio in segmenti o finestre per applicarvi una determinata elaborazione_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ TUTTI I PARAMETRI SONO OBBLIGATORI, SE SUPERI I LORO LIMITI QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit10 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *0.5* | MAX: *12*
⎔ Default: *0.7*
1️⃣👉 _Velocita' di riproduzione audio. Un valore di 1.0 e' la velocità normale, mentre un valore maggiore di 1.0 accelera la riproduzione e un valore inferiore a 1.0 la rallenta._

⎔ *(Parametri obbligatori)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Default: *44100*
2️⃣👉 _Frequenza di campionamento audio: indica la frequenza con cui viene campionato il suono. Maggiore e' la frequenza di campionamento, maggiore e' la qualità audio_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ TUTTI I PARAMETRI SONO OBBLIGATORI, SE SUPERI I LORO LIMITI QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit11 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *1* | MAX: *5*
⎔ Default: *2*
1️⃣👉 _Modalita' di interpolazione di movimento utilizzata dal filtro._

⎔ *(Parametri obbligatori)*
⎔ MIN: *1* | MAX: *4*
⎔ Default: *2*
2️⃣👉 _Modalita' di compensazione del movimento utilizzata dal filtro._

⎔ *(Parametri facolativi)*
⎔ MIN: *0* | MAX: *10*
⎔ Default: *1*
3️⃣👉 _Utilizzo dell'interpolazione verticale dei subpixel_

⎔ *(Parametri facoltativi)*
⎔ MIN: *1* | MAX: *240*
⎔ Default: *120*
4️⃣👉 _Controlla la frequenza fotogrammi di uscita dell'audio_

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*❕ SE OMETTI DI AGGIUNGERE I PARAMETRI OPZIONALI O SUPERI I LORO LIMITI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit12 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *0.5* | MAX: *10*
⎔ Default: *0.5*
1️⃣👉 _Regola la velocita di riproduzione dell'audio senza influenzare il tono._

⎔ *(Parametri obbligatori)*
⎔ MIN: *2000* | MAX: *260000*
⎔ Default: *65100*
2️⃣👉 _Regola la frequenza di campionamento audio, ovvero il numero di campioni audio al secondo._

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 3 9483
${usedPrefix + command} 0.8 3849

*❕ TUTTI I PARAMETRI SONO OBBLIGATORI, SE SUPERI I LORO LIMITI QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsAudioEdit13 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parametri obbligatori)*
⎔ MIN: *0.001* | MAX: *5*
⎔ Default: *0.125*
1️⃣👉 _La frequenza dell'onda pulsata in hertz (Hz)_

⎔ *(Parametri obbligatori)*
⎔ MIN: *0.01* | MAX: *1*
⎔ Default: *1*
2️⃣👉 _Regola la quantita' di modulazione applicata all'audio._

*»» ESEMPI DI UTILIZZO:*
${usedPrefix + command} 0.555 0.50
${usedPrefix + command} 1 0.07

*❕ TUTTI I PARAMETRI SONO OBBLIGATORI, SE SUPERI I LORO LIMITI QUESTI VERRANNO AGGIUNTI AL VALORE DI DEFAULT, RICORDATI DI RISPONDERE ALLA NOTA AUDIO O VOCALE*`}
const smsControlAudio5 = () => { return `VALORI ASSEGNATI:`}

//config.js
const smsConfigBot = () => { return "AGGIORNATO 'config.js' CON SUCCESSO"}

//menu-menu.js
const smsMenuTotal1 = () => { return "INFORMAZIONI SUL MENU'"}
const smsMenuTotal2 = () => { return "JADIBOT"}
const smsMenuTotal3 = () => { return "RICERCA / IA"}
const smsMenuTotal4 = () => { return "DOWNLOADS"}
const smsMenuTotal5 = () => { return "CONVERTITORI"}
const smsMenuTotal6 = () => { return "GRUPPO ~ TUTTI"}
const smsMenuTotal7 = () => { return "GRUPPO ~ ADMINS"}
const smsMenuTotal8 = () => { return "MODIFICA AUDIO"}
const smsMenuTotal9 = () => { return "EFFETTI SONORI"}
const smsMenuTotal10 = () => { return "IMPOSTAZIONI"}
const smsMenuTotal11 = () => { return "PER VERIFICARE"}
const smsMenuTotal12 = () => { return "CREATORE"}

//Error2
const smsMensError1 = () => { return `❕ SEGNALAZIONE COMANDO ❕`} 
const smsMensError2 = () => { return `Il comando seguente non puo' essere eseguito`} 

//config.js
const smsMeWait = () => { return '*⌛ ASPETTA UN MOMENTO PERFAVORE...*'} 

//buscadores.js
const smsytserh1 = () => { return 'TITILO'} 
const smsytserh2 = () => { return 'LINK'} 
const smsytserh3 = () => { return 'DURATA'} 
const smsytserh4 = () => { return 'CARICATO'} 
const smsytserh5 = () => { return 'VISUALIZZAZIONI'} 

//descargas.js
const smsIAimage = () => { return '💻 *IMMAGINE REALIZZATA CON AI/DALL-E* ✨'} 
const smsIAimage2 = () => { return `Un gatto viola con l'essere azzurro in Giove, illumina il cosmo con il suo fascino dall'effetto minimalista.`} 
const smsIAimage3 = () => { return '💻 *IMMAGINE CREATA CON AI/Midjourney* ✨'} 
const smsIAimage4 = () => { return 'Un leoncino, corre attraverso la pozzanghera, si riflette nella pozzanghera, fotografia.'} 

//descargas.js
const smsyFBvid1 = () => { return '*LINK NON VALIDO, RICORDATI DI UTILIZZARE UN LINK VIDEO DI FACEBOOK*'} 
const smsyFBvid2 = () => { return 'VIDEO DAL GRUPPO FACEBOOK SCARICATO 💚'} 
const smsyFBvid3 = () => { return 'VIDEO REEL DI FACEBOOK SCARICATO 💚'} 
const smsyFBvid4 = () => { return 'VIDEO SCARICATO DELLE STORIE DI FACEBOOK 💚'} 
const smsyFBvid5 = () => { return 'VIDEO POST SU FACEBOOK SCARICATO 💚'} 
const smsyFBvid6 = () => { return 'VIDEO SCARICATO DA FACEBOOK 💚'}

//grupos-admin.js
const smsInvite1 = () => { return '*SI ACCETTANO SOLO CIFRE, NON LETTERE*'} 
const smsInvite2 = (usedPrefix, command, bot) => { return `*INSERISCI IL NUMERO COMPLETO DELL'UTENTE CHE VUOI INVITARE NEL GRUPPO*\n*ESEMPIO:*\n\n*${usedPrefix + command}* +${bot}`} 
const smsInvite3 = (NumeroUser, user, groupMetadata, link) => { return `✨ ¡Ciao! *@${NumeroUser}* Io sono ${packname}, un Bot per WhatsApp. Sembra che *@${user}* ti sta invitando al Gruppo ${groupMetadata.subject}\n\n\`\`\`¡Ti aspettiamo nel gruppo!\`\`\`\n\n*${link}*`} 
const smsInvite4 = (NumeroUser) => { return `*INVITO INVIATO IN PRIVATO A @${NumeroUser}*`} 

//descargas.js
const smsSP0 = (usedPrefix) => { return `🌸 _PUOI USARE *${usedPrefix}spotifysearch* PER OTTENERE IL LINK DELLA CANZONE SPECIFICA_`} 
const smsSP1 = () => { return '✨ *TITOLO:*'} 
const smsSP2 = () => { return '🗣️ *ARTISTA:*'} 
const smsSP3 = () => { return '🌐 *URL*:'} 
const smsSP4 = () => { return '♻️ *DOWNLOAD URL:*'} 
const smsSP5 = () => { return '🎶 *INVIO CANZONE...*'} 
const smsSP6 = () => { return `${lenguajeGB['smsAvisoFG']()}*NESSUN RISULTATO TROVATO. PROVA UN ALTRO NOME O LINK*`} 

//_autodetec.js
const smsAutodetec1 = (inf, usuario, m) => { return `${inf}*» ${usuario}*\n*IL NOME DEL GRUPPO E' CAMBIATO*\n\n🔰 *ORA IL GRUPPO SI CHIAMA:*\n*${m.messageStubParameters[0]}*`} 
const smsAutodetec2 = (inf, usuario, groupMetadata) => { return `${inf}*» ${usuario}*\n*L'IMMAGINE E' STATA CAMBIATA:*\n*${groupMetadata.subject}*`} 
const smsAutodetec3 = (inf, usuario, m, groupMetadata) => { return `${inf}*» ${usuario}*\n*LO HA PERMESSO ${m.messageStubParameters[0] == 'on' ? 'SOLO GLI ADMIN' : 'TUTTI'} POSSONO' CONFIGURARE ${groupMetadata.subject}*`} 
const smsAutodetec4 = (inf, groupMetadata, usuario) => { return `${inf}*IL LINK DI ${groupMetadata.subject} E' STATO RESETTATO DA:*\n*» ${usuario}*`} 
const smsAutodetec5 = (inf, groupMetadata, m, usuario) => { return `${inf}*${groupMetadata.subject} E' STATO ${m.messageStubParameters[0] == 'on' ? 'CHIUSO 🔒' : 'APERTO 🔓'} DA ${usuario}*\n\n💬 *ORA ${m.messageStubParameters[0] == 'on' ? 'SOLO GLI ADMIN' : 'TUTTI'} POSSONO INVIARE MESSAGGI*`} 
const smsAutodetec6 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} ORA È AMMINISTRATORE DEL GRUPPO*\n*» ${groupMetadata.subject}*\n\n✨ *AZIONE EFFETTUATA DA:*\n*» ${usuario}*`} 
const smsAutodetec7 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} ORA NON E' PIU' AMMINISTRATORE DEL GRUPPO*\n*» ${groupMetadata.subject}*\n\n✨ *AZIONE EFFETTUATA DA:*\n*» ${usuario}*`} 


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
smsAutodetec3, smsAutodetec4, smsAutodetec5, smsAutodetec6, smsAutodetec7, smsImageGg, smsGit, languageSave, languageRegister, smsMainBot, smsJBConexionClose2, smsreenvia, smsIniJadi2, methodCode1, methodCode2, methodCode3, methodCode4, methodCode5, methodCode6, methodCode7, methodCode8, methodCode9, methodCode10, methodCode11, methodCode12, methodCode13, methodCode14, phNumber, phNumber2, phNumber3, pairingCode }
