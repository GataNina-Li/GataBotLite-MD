const lenguaje = () => { return 'fr' } //Français  

const smsAvisoRG = () => { return `╰⊱✅⊱ *RÉSULTAT* ⊱✅⊱╮\n\n` } 
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *AVERTISSEMENT* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMATION* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERREUR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *ACTION MALUTILISEE* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *RAPPORT* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *SUCCÈS* ⊱💚⊱╮\n\n` }

const smsRowner = () => { return `\`\`\`¡¡CETTE COMMANDE SEUL LE NUMÉRO DE BOT PEUT UTILISER!!\`\`\`` }
const smsOwner = () => { return `\`\`\`¡¡SEUL MON CRÉATEUR PEUT UTILISER CETTE COMMANDE!!\`\`\`` }
const smsMods = () => { return `\`\`\`¡¡SEULS LES MODÉRATEURS ET MON CRÉATEUR PEUVENT UTILISER CETTE COMMANDE!!\`\`\`\`` }
const smsPremium = () => { return `\`\`\`¡¡CETTE COMMANDE EST UNIQUEMENT DISPONIBLE POUR LES UTILISATEURS PREMIUM ET MON CRÉATEUR !! POUR DEVENIR PREMIUM ACHETEZ UN PASS EN UTILISANT le #pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`¡¡CETTE COMMANDE NE PEUT ÊTRE UTILISÉE QUE DANS LES GROUPES!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`¡¡CETTE COMMANDE NE PEUT ÊTRE UTILISÉE QUE EN PRIVÉ!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`¡¡CETTE COMMANDE EST UNIQUEMENT POUR LES ADMINISTES!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`¡¡J'AI BESOIN D'ÊTRE UN ADMINISTE POUR QUE VOUS POUVEZ UTILISER CETTE COMMANDE!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`¡¡VOUS DEVEZ ÊTRE ENREGISTRÉ POUR UTILISER CETTE COMMANDE, TYPE #verify POUR VOUS INSCRIRE!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`¡¡CETTE COMMANDE EST RESTREINTE PAR MON CRÉATEUR!!\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BIENVENUE!!*\n┊💖 @user\n┊📄 *LIRE LA DESCRIPTION DU GROUPE*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return `*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *@user*\n┊ *IL N'ÉTAIT PAS DIGNE D'ÊTRE ICI!!* 🌟\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*`}
const smsSpromote = () => { return '*@user IL A ÉTÉ PROMU COMME ADMINISTRATEUR DU GROUPE!!*'}
const smsSdemote = () => { return '*@user A ÉTÉ RÉTROMINÉ COMME ADMINISTRATEUR DU GROUPE!!*'}
const smsSdesc = () => { return '*DÉCOUVREZ LA NOUVELLE DESCRIPTION DU GROUPE:*\n\n@desc'}
const smsSsubject = () => { return '*LE NOM DU GROUPE A ÉTÉ MIS À JOUR!!*\n@subject'}
const smsSicon = () => { return '*LA PHOTO DE GROUPE A ÉTÉ ACTUALISÉE!!*'}
const smsSrevoke = () => { return '*DÉCOUVREZ LE NOUVEAU LIEN DU GROUPE!!*\n*@revoke*'}

const methodCode1 = () => { return ` MÉTHODE DE RELIURE` }
const methodCode2 = () => { return ` COMMENT VOULEZ-VOUS VOUS CONNECTER ?` }
const methodCode3 = () => { return ` Option` }
const methodCode4 = () => { return ` QR Code` }
const methodCode5 = () => { return ` Code à 8 chiffres.` }
const methodCode6 = () => { return ` Écrivez uniquement le nombre de` }
const methodCode7 = () => { return ` la possibilité de se connecter.` }
const methodCode8 = () => { return ` CONSEIL` }
const methodCode9 = () => { return ` Si vous utilisez Termux, Replit, Linux ou Windows` }
const methodCode10 = () => { return ` Utilisez ces commandes pour une exécution directe :` }
const methodCode11 = () => { return ` LES NUMÉROS AUTRES QUE NE SONT PAS AUTORISÉS ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, PAS DE LETTRES OU DE SYMBOLES SPÉCIAUX.\n${chalk.bold.yellowBright(" CONSEIL : COPIEZ LE NUMÉRO D'OPTION ET COLLEZ-LE DANS LA CONSOLE.")}` }
const methodCode12 = () => { return ` Commencez par le code QR` }
const methodCode13 = () => { return ` Commencez par un code à 8 chiffres` }
const methodCode14 = () => { return ` Démarrage par défaut avec options` }
const phNumber = (chalk) => { return ` Définir le fichier ${chalk.bold.greenBright("config.js")} Le numéro saisi n'a pas de code pays. ${chalk.bold.yellowBright(" Exemple: +593090909090")}` }
const phNumber2 = (chalk) => { return ` Veuillez entrer le numéro WhatsApp.\n${chalk.bold.yellowBright(" CONSEIL : copiez le numéro WhatsApp et collez-le dans la console.")}\n${chalk.bold.yellowBright(" Exemple: +593090909090")}\n${chalk.bold.magentaBright('---> ')}` }
const phNumber3 = () => { return ` Assurez-vous d'ajouter le code du pays.` }
const pairingCode = () => { return ` CODE DE LIAISON :` }

const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ 💚 CONNEXION RÉUSSIE AVEC WHATSAPP 💚\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ MISE EN CHARGE...\n`}  
const smsCodigoQR = () => { return `\n✅ SCANNER LE QR CODE EXPIRE DANS 45 SECONDES ✅`}
const smsConexionOFF = () => { return `\n⚠️ HORS LIGNE, SUPPRIMER LE DOSSIER ${global.authFile} ET SCANNEZ LE QR CODE ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ MULTIMÉDIA ☘️\n┆• FICHIERS DU DOSSIER TMP SUPPRIMÉS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• SÉANCES NON ESSENTIELLES ÉLIMINÉES\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 DES DOSSIERS 🌹\n┆• FICHIERS RÉSIDUELS SUPPRIMÉS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺 GataJadiBot 🌺\n┆• RIEN À ÉLIMINER \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼 GataJadiBot 🌼\n┆• FICHIERS NON ESSENTIELS SUPPRIMÉS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️ GataJadiBot ⚠️\n┆• UNE ERREUR EST SURVENUE\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ ARCHIVO ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `SUPPRIMÉ AVEC SUCCÈS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ ARCHIVE ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `ÉCHEC DE LA SUPPRESSION\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smsConexioncerrar = () => { return `\n⚠️ CONNEXION FERMÉE, RECONNEXION....`}
const smsConexionperdida = () => { return `\n⚠️ PERTE DE CONNEXION AU SERVEUR, RECONNEXION....`}
const smsConexionreem = () => { return `\n⚠️ CONNEXION REMPLACÉE, UNE AUTRE NOUVELLE SESSION A ÉTÉ OUVERTE, VEUILLEZ FERMER D'ABORD LA SESSION EN COURS.`}
const smsConexionreinicio = () => { return `\n❇️ CONNEXION AU SERVEUR...`}
const smsConexiontiem = () => { return `\n⌛ CONNEXION TEMPORISÉE, RECONNEXION....`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗ RAISON DE DÉCONNEXION INCONNUE: ${reason || ''} >> ${connection || ''}`}
const languageSave = () => { return `✅ La langue est déjà définie.`} 
const languageRegister = (selectedLanguage) => { return `❇️ La langue a été définie sur "${selectedLanguage}".\n`} 
const smsMainBot = () => { return "'main.js' A ÉTÉ MIS À JOUR AVEC SUCCÈS"}

//_antiprivado 
const smsprivado = () => { return `*VOUS NE POUVEZ PAS UTILISER CE BOT EN CHAT PRIVÉ*\n\n*Rejoignez le groupe officiel du bot pour pouvoir utiliser le bot*`}

//Boton
const smsConMenu = () => { return `🌻 MENU`}

//info-creadora.js
const smsCreA = () => { return 'Salut'}
const smsCreB = () => { return `Je m'appelle`}
const smsCreC = () => { return 'Toujours disponible pour vous aider 😸'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return '🌸 *◜COMPTES OFFICIELS◞* 🌸'}
const smsOfc2 = () => { return `*❥ _Suivez-nous sur les comptes officiels pour rester informé_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `🌼 Le soutien volontaire est accepté via PayPal, si vous souhaitez soutenir d'une autre manière, vous pouvez donner un numéro sur Instagram afin que le référentiel reste valide, merci !!\n\n🌺 Vous pouvez toujours soutenir en suivant les comptes officiels et en partageant le travail réalisé dans ${packname}`}
const smsTituloDonar = () => { return '*◜🌹❤️ DON VOLONTAIRE ❤️🌹◞*'}
const smsPrivadoDonar = () => { return '🍄 *_Vous pouvez également partager ce qui suit en guise de soutien_*\n*_Évaluez le référentiel avec un 🌟 Merci!!_*'}

//info-gruposofc.js
const smsGrupoOfc1 = () => { return '*◜🌺 GROUPES OFFICIELS 🌺◞*'}
const smsGrupoOfc2 = () => { return '*◜🌸 COLLABORATION 🌸◞*'}

//info-grupos-lista.js
const smsLisA = () => { return `_*C'EST DANS CES GROUPES:*_`}
const smsLisB = () => { return '*⭔ Total des groupes:*'}
const smsLisC = () => { return '*⋄ Grappe:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ Participants:*'}

//info-estado.js
const smsCreApoyo = () => { return '✨ SUPPORT'}
const smsEstado1 = () => { return 'ÉTAT'}
const smsEstado2 = () => { return 'Version'}
const smsEstado3 = () => { return 'Utilisateurs'}
const smsEstado4 = () => { return 'Inscrit'}
const smsEstado5 = () => { return 'Chat(s) interdit(s)'}
const smsEstado6 = () => { return 'Utilisateurs interdits'}
const smsEstado7 = () => { return 'Actif pendant'}

//info-ping.js
const smsVl1 = () => { return 'VITESSE'}
const smsVl2 = () => { return 'S E R V E U R*'}
const smsVl3 = () => { return '*🔵 RAM gratuite:*'}
const smsVl4 = () => { return '*💻 Plate-forme :*'}
const smsVl5 = () => { return '*📡 Lieu :*'}
const smsVl6 = () => { return '*Utilisation de la mémoire NodeJS*'}

//info-infobot.js
const smsBT1 = () => { return 'CRÉATEUR'}
const smsBT2 = () => { return 'VERSION'}
const smsBT3 = () => { return 'PRÉFIXE'}
const smsBT4 = () => { return 'CHATS PRIVÉS'}
const smsBT5 = () => { return 'DISCUSSIONS DE GROUPE'}
const smsBT6 = () => { return 'TOTAL DES CHATTES'}
const smsBT7 = () => { return 'ACTIVITÉ'}
const smsBT8 = () => { return 'UTILISATEURS'}
const smsBT9 = () => { return 'SOUS-BOTS ACTIFS'}
const smsCreInfo = () => { return '🌟 I N F O R M A T I O N'}

//info-contacto.js
const smsContacto1 = () => { return ' Suis ' + packname + ' un Bot WhatsApp dédié à vous aider avec tout ce que vous me demandez 😎'}
const smsContacto2 = () => { return 'Je suis propriétaire de ' + packname + ' si vous avez des questions, vous pouvez me le dire ✌️'}
const smsContacto3 = () => { return '👑 Propriétaire'}
const smsContacto4 = () => { return 'Contact officiel de GataBot 🐈'}
const smsContacto5 = () => { return '🐣 Puis-je vous aider?'}
const smsContacto6 = () => { return `je n'ai pas de courrier 🙏`}
const smsContacto7 = () => { return '🌎 Mondial'}
const smsContacto8 = () => { return 'Ce compte est un robot 👀'}

//ejemplos
const smsMalused = () => { return '⚡ *UTILISEZ LA COMMANDE DE CETTE MANIÈRE :*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *VOUS DEVEZ UTILISER LA COMMANDE COMME CET EXEMPLE :*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *RÉPONDEZ À UN MESSAGE AVEC LA COMMANDE OU UTILISEZ CET EXEMPLE :*\n`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`UNE ERREUR INATTENDUE EST APPARUE.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`DES PROBLEMES SONT SURVENUS.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`QUELQUE CHOSE NE S'EST PAS BIEN PASSÉ, SIGNALEZ CETTE COMMANDE EN UTILISANT:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'QUALIFICATION'}
const smsYT2 = () => { return 'DESCRIPTION'}
const smsYT3 = () => { return 'DURÉE'}
const smsYT4 = () => { return 'VUES'}
const smsYT5 = () => { return 'REGARDER SUR YOUTUBE'}
const smsYT6 = () => { return 'ESSAYEZ UN AUTRE NOM'}

//descargas.js
const smsYTA1 = () => { return `TÉLÉCHARGEMENT DE L'AUDIO... ATTENDEZ UN MOMENT`}

//descargas.js
const smsYTV1 = () => { return 'TÉLÉCHARGEMENT DE LA VIDÉO... ATTENDEZ UN MOMENT'}

//descargas.js
const smsYTA2 = () => { return 'TÉLÉCHARGEMENT DU DOCUMENT AUDIO... ATTENDEZ UN MOMENT'}

//descargas.js
const smsYTV2 = () => { return 'TÉLÉCHARGEMENT DU DOCUMENT VIDÉO... ATTENDEZ UN MOMENT'}

//descargas.js
const smsTiktok = () => { return 'VOUS AUREZ BIENTÔT LA VIDÉO TIKTOK'}

//descargas.js
const smsGit = () => { return `*ENVOI DE FICHIERS, UN INSTANT 🚀*\n*SI LES FICHIERS N'ARRIVENT PAS C'EST PARCE QUE LE RÉFÉRENTIEL EST LOURD*`}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🪻 \`\`\`PAS DE CACHER LA VIDÉO\`\`\` 🪻`} 
const smsAntiView2 = () => { return `\n🪷 \`\`\`IL EST INTERDIT DE CACHER L'IMAGE\`\`\` 🪷`} 

//buscadores.js
const smsOpenai1 = () => { return '*FAIRE UNE REQUÊTE, EXEMPLE:*'} 
const smsOpenai2 = () => { return `Recommander un top 10 des films d'action`} 
const smsOpenai3 = () => { return `Expliquez qu'il s'agit d'une équation du troisième degré et faites un exemple simple et un exemple composé.`} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*RÉPONDRE À UN AUTOCOLLANT POUR LE CONVERTIR EN IMAGE*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*RÉPONDRE À UNE IMAGE POUR CONVERTIR EN LIEN*'} 
const smsConURL1 = () => { return '🔗 *LIEN*'} 
const smsConURL2 = () => { return '⚖️ *TAILLE*'} 
const smsConURL3 = () => { return '♻️ *EXPIRATION*'} 
const smsConURL4 = () => { return '🪄 *LIEN COURT*'}
const smsConURLERR1 = () => { return 'Infini'} 
const smsConURLERR2 = () => { return 'Inconnu'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + `*RÉPONDRE À L'AUTOCOLLANT EN MOUVEMENT POUR CONVERTIR EN VIDÉO*`} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*UNIQUEMENT AUTOCOLLANT EN MOUVEMENT POUR CONVERTIR EN VIDÉO*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*✓ VOICI VOTRE VIDÉO!!*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*RÉPONDRE À UNE VIDÉO POUR CONVERTIR EN GIF AVEC AUDIO*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + '*RÉPONDRE À UNE VIDÉO. LE TYPE DE FICHIERS UTILISÉS N'EST PAS CORRECT* '} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + '*GIF AVEC AUDIO (Ouvrez le gif pour entendre l'audio)*'} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*RÉPONDRE À UNE VIDÉO OU UN AUDIO POUR CONVERTIR EN NOTE VOCALE*'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + `*QUELQUE CHOSE NE S'EST PAS BIEN PASSÉ AVEC LA VIDÉO, RÉESSAYEZ*`} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + `*QUELQUE CHOSE NE S'EST PAS ALLÉ AVEC L'AUDIO, RÉESSAYEZ*`} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + `*QUELQUE CHOSE NE S'EST PAS ALLÉ LORS DE LA ESSAI DE CONVERTIR VOTRE AUDIO EN NOTE VOCALE*`}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + `*QUELQUE CHOSE NE S'EST PAS ALLÉ LORS DE LA ESSAI DE CONVERTIR VOTRE VIDÉO EN NOTE VOCALE*`} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '*RÉPONDEZ À UN MESSAGE TEXTE OU ÉCRIVEZ UN CODE ET UN TEXTE À CONVERTIR EN AUDIO, EXEMPLE:*\n'}
const smsTradc2 = () => { return ' (code) (texte)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + ' Ce texte sera audio\n\n'}
const smsTradc4 = () => { return '*VOUS POUVEZ OBTENIR LE CODE DES LANGUES SUPPORTÉES DANS:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return `*❤️ Attendez un moment s'il vous plaît...*`}

//descargas.js
const smsMediaFr = () => { return '❕ *_SUPÉRIEUR À 150 MG, IL NE PEUT PAS ÊTRE EXPÉDIÉ_*'}
const smsImageGg = () => { return '*💞 RÉSULTAT DE:*'}

//grupos.js
const smsGI1 = () => { return '*INFORMATIONS GROUPE*'}
const smsGI2 = () => { return '*ID DE GROUPE*'}
const smsGI3 = () => { return '*NOM DE GROUPE*'}
const smsGI4 = () => { return '*DESCRIPTION DU GROUPE*'}
const smsGI5 = () => { return '*PAS DE DESCRIPTION*'}
const smsGI6 = () => { return `*NOMBRE D'UTILISATEURS*`}
const smsGI7 = () => { return '*Utilisateurs*'}
const smsGI8 = () => { return '*CRÉATEUR DU GROUPE*'}
const smsGI9 = () => { return '*ADMINISTRATEURS DE GROUPE*'}

//grupos.js
const smsAddB3 = () => { return `*NOTIFICATION POUR LES ADMINISTRATEURS*`}
const smsAddB4 = () => { return `*PRÉSENCE ADMINISTRATEUR*`}
const smsAddB5 = () => { return `*MESSAGE:*`}
const smsAddB6 = () => { return `Je demande aux administrateurs s'il vous plaît.`}

//grupos-admins.js
const smsDemott = () => { return `*LE NUMÉRO EST INVALIDE, ESSAYEZ À NOUVEAU DE RÉPONDRE AU MESSAGE DE QUELQU'UN OU D'UTILISER COMME CET EXEMPLE:*\n`}
const smsDemott2 = () => { return '*MAINTENANT VOUS AVEZ LE POUVOIR DANS LE GROUPE!!*'}
const smsDemott3 = () => { return `*VOUS N'AVEZ PLUS DE POUVOIR DANS LE GROUPE!!*`}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*L'ACCUEIL DU GROUPE A ÉTÉ CONFIGURÉ*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ÉCRIVEZ LE MESSAGE DE BIENVENUE_*\n*_EN OPTION, VOUS POUVEZ UTILISER CE QUI EST AVEC "@" POUR AJOUTER PLUS D'INFORMATIONS:_*\n\n*⚡ @user (Mentionner à l'utilisateur)*\n*⚡ @subject (Nom de groupe)*\n*⚡ @desc (Description du groupe)*\n\n*N'OUBLIEZ PAS QUE LES "@" SONT OPTIONNELS*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*LES ADIEUX DU GROUPE ONT ÉTÉ DÉFINIS*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ÉCRIVEZ VOTRE MESSAGE D'ADieu_*\n*_EN OPTION, VOUS POUVEZ UTILISER CE QUI EST AVEC "@" POUR AJOUTER PLUS D'INFORMATIONS:_*\n\n*⚡ @user (Mentionner à l'utilisateur)*\n\n*N'OUBLIEZ PAS QUE LE "@" EST FACULTATIF*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*LA DESCRIPTION DU GROUPE A ÉTÉ CONFIGURÉ*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*LE NOM DU GROUPE A ÉTÉ CONFIGURÉ*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 ÉCRIVEZ LE NOUVEAU NOM DU GROUPE*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*LE NOM DU GROUPE NE DOIT PAS COMPRENDRE PLUS DE 25 CARACTÈRES*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeGB['smsAvisoMG']()}*RÉPONDRE À UNE IMAGE POUR CHANGER LA PHOTO DE GROUPE*`}
const smsGrupoPP2 = () => { return `${lenguajeGB['smsAvisoEG']()}*🪄 L'IMAGE DU GROUPE A ÉTÉ MIS À JOUR!!*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*LE LIEN DU GROUPE A ÉTÉ Rétabli*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*TAGUER LA PERSONNE OU RÉPONDRE AU MESSAGE DE LA PERSONNE QUE VOUS SOUHAITEZ ÉLIMINER*\n\n*EJEMPLO: `}
const smskick2 = () => { return `ÉLIMINÉ 😼`}
const smskick3 = () => { return `JE NE PEUX PAS SUPPRIMER LE CRÉATEUR DU GROUPE 😆🫵`}
const smskick4 = () => { return `PAS DANS CE GROUPE 👻`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeGB['smsAvisoEG']()}*TOUT LE MONDE PEUT MAINTENANT ÉCRIRE!!*`}
const smsGrupoClose = () => { return `${lenguajeGB['smsAvisoEG']()}*GROUPE FERMÉ, SEULS LES ADMINS PEUVENT ÉCRIRE!!*`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ INVOQUER LE GROUPE ⚡`}

//grupos.js
const smsInsGC1 = () => { return `*ID*`}
const smsInsGC2 = () => { return `*NOM*`}
const smsInsGC3 = () => { return `*CRÉÉ*`}
const smsInsGC4 = () => { return `*ADMINISTRATEUR PRINCIPAL*`}
const smsInsGC5 = () => { return `*DESCRIPTION*`}

//propietario(a.js
const smsResP1 = () => { return `_*🗂️ ENVOI DE SAUVEGARDE À VOTRE PRIVÉ...*_`}
const smsResP2 = (date) => { return `*🗓️ Base de données:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*TAG QUELQU'UN OU RÉPONDRE AU MESSAGE DE L'UTILISATEUR OU TAPEZ LE NUMÉRO QUE VOUS SOUHAITEZ INTERDIRE DES COMMANDES*\n\n*EXEMPLE:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} VOUS NE POUVEZ PAS ÊTRE BANNI AVEC CETTE COMMANDE* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *JE NE PEUX PAS INTERDIRE LE PROPRIÉTAIRE @${ownerNumber} DE ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*IL N'EST PAS NÉCESSAIRE D'INTERDIRE À NOUVEAU @${number} SI C'EST DÉJÀ* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*UTILISATEUR INTERDIT AVEC SUCCÈS* 🙀`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} VOUS ÊTES BANNIS PAR @${usr} VOUS NE POUVEZ PAS UTILISER LES COMMANDES JUSQU'À QUE QUELQU'UN RETOURNE L'INTERDICTION* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*UNE ERREUR EST ARRIVÉE, IL PEUT ÊTRE QUE L'UTILISATEUR NE SOIT PAS DANS MA BASE DE DONNÉES ESSAYEZ D'ÉCRIRE ${usedPrefix + command} ${number}*\n\`\`\`SI L'ERREUR CONTINUE, SIGNALER CETTE COMMANDE\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*TAG QUELQU'UN OU RÉPONDRE AU MESSAGE DE L'UTILISATEUR OU TAPEZ LE NUMÉRO QUE VOUS SOUHAITEZ DÉBANNIR DES COMMANDES*\n\n*EXEMPLE:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*IL N'EST PAS NÉCESSAIRE DE DÉBANNER À NOUVEAU @${number} SI C'EST DÉJÀ* 😊`}
const smsPropdesban3 = () => { return `${lenguajeGB['smsAvisoEG']()}*UTILISATEUR DÉBANNÉ AVEC SUCCÈS* 💙`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} VOUS N'ÊTES PAS BANNIS PAR @${usr} VOUS POUVEZ MAINTENANT UTILISER LES COMMANDES!!* 🪄`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*UNE ERREUR EST ARRIVÉE, IL PEUT ÊTRE QUE L'UTILISATEUR NE SOIT PAS DANS MA BASE DE DONNÉES ESSAYEZ D'ÉCRIRE ${usedPrefix + command} ${number}*\n\`\`\`SI L'ERREUR CONTINUE, SIGNALER CETTE COMMANDE\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return '*VOUS ÊTES DÉJÀ ADMINISTRATEUR 😳🌹*'}
const smsAutoAdmin2 = () => { return `*JE N'AI PAS PU LE FAIRE ADMIN 🥹🥀*`}

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
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ ${global.packname} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_NUEVA FUNCIÓN DE HACERTE UN SUB BOT_* 🟢\n\n*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ Da click en vincular con codigo de teléfono*\n*4️⃣ Pega el codigo a continuación*`}
const smsreenvia = () => { return `*🟢 REENVIA EL COMANDO...*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*ESTE COMANDO ESTÁ DESACTIVADO POR MÍ PROPIETARIO(A)*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *PARA SER SUB BOT DIRÍJASE AL NÚMERO PRINCIPAL*\n*ღ Ingrese al siguiente enlace:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *LA CONEXIÓN SE HA CERRADO DE MANERA INESPERADA, INTENTAREMOS RECONECTAR...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *LA CONEXIÓN SE HA CERRADO, DEBERÁ DE CONECTARSE MANUALMENTE USANDO EL COMANDO #serbot Y REESCANEAR EL NUEVO CÓDIGO QR${lenguajeGB['smsJBConexionTrue3']()}* *QUE FUE ENVIADA LA PRIMERA VEZ QUE SE HIZO SUB BOT*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *TU DISPOSITIVO SE DESCONECTADO*\n\n*TENDRAS QUE VOLVER A CONECTARTE USAR:\n#deletesesion (Para borrar datos y poder volver a solita el QR o el code)`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO!!! PUEDE CONECTARSE USANDO:*`}
const smsJBConexionTrue3 = () => { return `.`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *ESTÁ CONECTADO(A)!! POR FAVOR ESPERE SE ESTÁ CARGANDO LOS MENSAJES...*\n\n♻️ *OPCIONES DISPONIBLES:*\n*» ${usedPrefix}pausarsb _(Detener la función Sub Bot)_*\n*» ${usedPrefix}eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n*» ${usedPrefix}serbot _(Nuevo código QR o Conectarse si ya es Sub Bot)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*USE ESTE COMANDO AL BOT PRINCIPAL*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*TE VOY A EXTRAÑAR ${global.packname} CHAOO!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*HA CERRADO SESIÓN Y BORRADO TODO RASTRO*`}
const smsFoldErr = (usedPrefix, comd) => { return `*USTED NO TIENE UNA SESIÓN, PUEDE CREAR UNA USANDO:*\n*${usedPrefix}${comd}*\n\n*SI TIENE UNA (ID) PUEDE USAR PARA SALTARSE EL PASO ANTERIOR USANDO:*\n*${usedPrefix}${comd}* \`\`\`(ID)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeGB['smsAvisoAG']() + `*SI NO ES SUB BOT COMUNÍQUESE AL NÚMERO PRINCIPAL PARA SER SUB BOT*`}
const smsJBCom2 = () => { return lenguajeGB['smsAvisoRG']() + `*HA CERRADO/PAUSADO LA SESIÓN.*`}

//jadibot
const smsJBCom3 = () => { return `😺 *LISTA DE SUBBOTS*\n\n🌟 _PUEDES PEDIR PERMISO PARA QUE TE DEJEN UNIR EL BOT A TÚ GRUPO_\n\n\`\`\`CADA USUARIO SUB BOT USA FUNCIÓN COMO QUIERA, EL NÚMERO PRINCIPAL NO SE HACE RESPONSABLE DEL USO DE LA FUNCIÓN \`\`\`\n\nSUBBOT CONECTADO:`}
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
const smsreiniciar = () => { return `${lenguajeGB['smsAvisoEG']()}\`\`\`✨ REINICIANDO ✨\`\`\`\n${wait}`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *PARAMÈTRES* ⚙️\n\n> *Signification Emoji :*\n✅ ❱❱ Activé\n❌ ❱❱ Désactivé\n⚠️ ❱❱ Disponible uniquement dans les groupes/communautés`}
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
smsAutodetec3, smsAutodetec4, smsAutodetec5, smsAutodetec6, smsAutodetec7, smsImageGg, smsGit, languageSave, languageRegister, smsMainBot, smsIniJadi2, smsreenvia, smsJBConexionClose2, methodCode1, methodCode2, methodCode3, methodCode4, methodCode5, methodCode6, methodCode7, methodCode8, methodCode9, methodCode10, methodCode11, methodCode12, methodCode13, methodCode14, phNumber, phNumber2, phNumber3, pairingCode }
