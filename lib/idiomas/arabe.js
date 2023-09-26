const lenguaje = () => { return 'ar' } //عرب 

const smsAvisoRG = () => { return `╰⊱✅⊱ *نتيجة* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *تحذير* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *معلومة* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *خطأ* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *تصرف خاطئ* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *تقرير* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *نجاح* ⊱💚⊱╮\n\n` }

const smsRowner = () => { return `\`\`\`يمكن استخدام هذا الأمر فقط رقم الروبوت!!\`\`\`` }
const smsOwner = () => { return `\`\`\`هذا الأمر فقط منشئ المحتوى الخاص بي يمكنه استخدامه!!\`\`\`` }
const smsMods = () => { return `\`\`\`هذا الأمر فقط للمنسقين ومنشئ المحتوى الخاص بي يمكنهم استخدامه!!\`\`\`\`` }
const smsPremium = () => { return `\`\`\`يتوفر هذا الأمر فقط للمستخدمين المتميزين ومنشئ المحتوى (أ) !! للحصول على قسط شراء تذكرة باستخدام #pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`لا يمكن استخدام هذا الأمر إلا في مجموعات!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`لا يمكن استخدام هذا الأمر إلا من قِبل الشخص الخاص!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`هذا الأمر مخصص فقط للمشرفين!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`أحتاج إلى أن أكون مشرفًا حتى تتمكن من استخدام هذا الأمر!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`أنت بحاجة إلى التسجيل لاستخدام هذا الأمر ، اكتب #verify للتسجيل!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`هذا الأمر مقيد من قِبل خالقي!!\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ اهلا!!*\n┊💖 @user\n┊📄 *اقرأ وصف المجموعة*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *@user*\n┊ *لم يكن يستحق أن يكون هنا!!* 🌟\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user تمت ترقيته بصفته مشرفًا للمجموعة!!*'}
const smsSdemote = () => { return '*@user تم استبعاده من منصب مدير المجموعة!!*'}
const smsSdesc = () => { return '*تعرف على الوصف الجديد للمجموعة:*\n\n@desc'}
const smsSsubject = () => { return '*تم تحديث اسم المجموعة!!*\n@subject'}
const smsSicon = () => { return '*تم تحديث صورة المجموعة!!*'}
const smsSrevoke = () => { return '*تعرف على الرابط الجديد للمجموعة!!*\n*@revoke*'}
const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ 💚 اتصال ناجح مع WHATSAPP 💚\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ الشحن ...\n`} 
const smsCodigoQR = () => { return `\n✅ تنتهي صلاحية رمز QR في 45 ثانية ✅`}
const smsConexionOFF = () => { return `\n⚠️ لا يوجد اتصال ، احذف المجلد ${global.authFile} وامسح رمز الاستجابة السريعة ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ الوسائط المتعددة ☘️\n┆• تم حذف الملفات من مجلد TMP\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• إنهاء الجلسات غير الأساسية\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 ملفات 🌹\n┆• تم حذف الملفات المتبقية\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺 GataJadiBot 🌺\n┆• لا شيء لحذفه \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼 GataJadiBot 🌼\n┆• تم حذف الملفات غير الأساسية\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️ GataJadiBot ⚠️\n┆• حدث خطأ\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ أرشيف ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `احذفها بنجاح\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ أرشيف ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `فشل في الحذف\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smsConexioncerrar = () => { return `\n⚠️ اتصال مغلق، إعادة الاتصال....`}
const smsConexionperdida = () => { return `\n⚠️ تم فقدان الاتصال بالخادم، جارٍ إعادة الاتصال...`}
const smsConexionreem = () => { return `\n⚠️ تم استبدال الاتصال، وتم فتح جلسة جديدة أخرى، يرجى إغلاق الجلسة الحالية أولاً.`}
const smsConexionreinicio = () => { return `\n❇️ جاري التوصيل بالخادم...`}
const smsConexiontiem = () => { return `\n⌛ انتهت مهلة الاتصال، جارٍ إعادة الاتصال...`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗ سبب قطع الاتصال غير معروف: ${reason || ''} >> ${connection || ''}`}
const languageSave = () => { return `✅ تم تعيين اللغة بالفعل.`} 
const languageRegister = (selectedLanguage) => { return `❇️ تم تعيين اللغة ك "${selectedLanguage}".\n`} 
const smsMainBot = () => { return "تم تحديث 'main.js' بنجاح"}

//_antiprivado 
const smsprivado = () => { return `*لا يمكنك استخدام هذا الروبوت في الدردشة الخاصة*\n\n*انضم إلى مجموعة الروبوت الرسمية لاستخدام الروبوت*`}

//Boton
const smsConMenu = () => { return `🌻 قائمة طعام`}

//info-creadora.js
const smsCreA = () => { return 'مرحبا!!'}
const smsCreB = () => { return 'اسمي هو'}
const smsCreC = () => { return 'متوفر دائمًا لمساعدتك 😸'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return '🌸 *◜الحسابات الرسمية◞* 🌸'}
const smsOfc2 = () => { return `*❥ _تابعنا على الحسابات الرسمية لتبقى على اطلاع دائم مع_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `🌼 يتم قبول الدعم التطوعي من خلال PayPal ، إذا كنت ترغب في المساعدة بطريقة أخرى يمكنك التبرع برقم على Instagram حتى يظل المستودع صالحًا ، شكرًا لك !!\n\n🌺 يمكنك دائمًا الدعم من خلال متابعة الحسابات الرسمية ومشاركة العمل المنجز فيها ${packname}`}
const smsTituloDonar = () => { return '*◜🌹❤️ التبرع الطوعي ❤️🌹◞*'}
const smsPrivadoDonar = () => { return '🍄 *_يمكنك أيضًا مشاركة ما يلي كعرض للدعم_*\n*_قيم المستودع بـ 🌟 شكرا!!_*'} 

//info-gruposofc.js
const smsGrupoOfc1 = () => { return '*◜🌺 الجماعات الرسمية 🌺◞*'}
const smsGrupoOfc2 = () => { return '*◜🌸 تعاون 🌸◞*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*يوجد في هذه المجموعات:*_'}
const smsLisB = () => { return '*⭔ إجمالي المجموعات:*'}
const smsLisC = () => { return '*⋄ تَجَمَّع:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ مشاركون:*'}

//info-estado.js
const smsCreApoyo = () => { return '✨ يدعم'}
const smsEstado1 = () => { return 'ولاية'}
const smsEstado2 = () => { return 'إصدار'}
const smsEstado3 = () => { return 'المستخدمين'}
const smsEstado4 = () => { return 'مسجل'}
const smsEstado5 = () => { return 'الدردشة المحظورة'}
const smsEstado6 = () => { return 'المستخدمون المحظورون'}
const smsEstado7 = () => { return 'نشط خلال'}

//info-ping.js
const smsVl1 = () => { return 'سرعة'}
const smsVl2 = () => { return 'الخادم*'}
const smsVl3 = () => { return '*🔵 ذاكرة الوصول العشوائي المجانية:*'}
const smsVl4 = () => { return '*💻 منصة :*'}
const smsVl5 = () => { return '*📡 مكان :*'}
const smsVl6 = () => { return '*استخدام ذاكرة NodeJS*'}

//info-infobot.js
const smsBT1 = () => { return 'المنشئ'}
const smsBT2 = () => { return 'إصدار'}
const smsBT3 = () => { return 'بادئة'}
const smsBT4 = () => { return 'دردشة خاصة'}
const smsBT5 = () => { return 'مجموعة محادثة'}
const smsBT6 = () => { return 'مجموع المحادثات'}
const smsBT7 = () => { return 'نشاط'}
const smsBT8 = () => { return 'المستخدمون'}
const smsBT9 = () => { return 'روبوتات فرعية نشطة'}
const smsCreInfo = () => { return '🌟 معلومة '}


//info-contacto.js
const smsContacto1 = () => { return ' اكون ' + packname + ' بوت WhatsApp مخصص للمساعدة في كل ما تطلبه 😎'}
const smsContacto2 = () => { return 'أنا مالك ' + packname + ' إذا كان لديك أي أسئلة يمكنك إخباري بها ✌️'}
const smsContacto3 = () => { return '👑 مالك'}
const smsContacto4 = () => { return 'جهة اتصال GataBot الرسمية 🐈'}
const smsContacto5 = () => { return '🐣 كيف يمكنني مساعدك؟'}
const smsContacto6 = () => { return 'ليس لدي بريد 🙏'}
const smsContacto7 = () => { return '🌎 عالمي'}
const smsContacto8 = () => { return 'هذا الحساب هو بوت 👀'}

//ejemplos
const smsMalused = () => { return '⚡ *استخدم الأمر مثل هذا:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *يجب عليك استخدام الأمر مثل هذا المثال:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *قم بالرد على رسالة بالأمر أو استخدم هذا المثال:*\n`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`حدث خطأ غير متوقع.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ظهرت مشكلة.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`حدث خطأ ما ، أبلغ عن هذا الأمر باستخدام:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'مؤهل'}
const smsYT2 = () => { return 'وصف'}
const smsYT3 = () => { return 'مدة'}
const smsYT4 = () => { return 'الآراء'}
const smsYT5 = () => { return 'انظر على يوتيوب'}
const smsYT6 = () => { return 'جرب اسمًا آخر'}

//descargas.js
const smsYTA1 = () => { return 'جارٍ تنزيل الصوت ... انتظر لحظة'}

//descargas.js
const smsYTV1 = () => { return 'تحميل الفيديو ... من فضلك انتظر لحظة'}

//descargas.js
const smsYTA2 = () => { return 'جارٍ تنزيل المستند الصوتي ... انتظر لحظة'}

//descargas.js
const smsYTV2 = () => { return 'جارٍ تنزيل مستند الفيديو ... يُرجى الانتظار لحظة'}

//descargas.js
const smsTiktok = () => { return 'قريبا سيكون لديك فيديو TIKTOK'}

//descargas.js
const smsGit = () => { return 'إرسال الملفات ، لحظة 🚀\nsi لا تصل الملفات لأن المستودع ثقيل'}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🪻 \`\`\`يحظر إخفاء الفيديو\`\`\` 🪻`} 
const smsAntiView2 = () => { return `\n🪷 \`\`\`يحظر إخفاء الصورة\`\`\` 🪷`} 

//buscadores.js
const smsOpenai1 = () => { return '*تقديم استعلام ، مثال:*'} 
const smsOpenai2 = () => { return 'اقترح أفضل 10 أفلام حركة'} 
const smsOpenai3 = () => { return 'اشرح ما هي المعادلة التربيعية وقم بعمل مثال بسيط ومركب.'} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*الرد على ملصق للتحويل إلى صورة*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*الرد على صورة للتحويل إلى رابط*'} 
const smsConURL1 = () => { return '🔗 *وصلة*'} 
const smsConURL2 = () => { return '⚖️ *مقاس*'} 
const smsConURL3 = () => { return '♻️ *انتهاء الصلاحية*'} 
const smsConURL4 = () => { return '🪄 *رابط قصير*'}
const smsConURLERR1 = () => { return 'لانهائي'} 
const smsConURLERR2 = () => { return 'مجهول'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + '*الرد على ملصق الحركة للتحويل إلى الفيديو*'} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*ملصق في الحركة فقط للتحويل إلى فيديو*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*✓ هنا لديك الفيديو الخاص بك !!*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*رد على مقطع فيديو للتحويل إلى ملف GIF بالصوت*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + '*الرد على الفيديو. نوع الملفات المستخدمة غير صحيح* '} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + '*GIF مع الصوت (افتح gif لسماع الصوت)*'} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*رد على مقطع فيديو أو صوت للتحويل إلى ملاحظة صوتية*'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + '*خطأ في الفيديو ، حاول مرة أخرى*'} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + '*خطأ في الصوت ، حاول مرة أخرى*'} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + '*حدث خطأ ما عند محاولة تحويل الصوت إلى المذكرة الصوتية*'}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + '*حدث خطأ ما عند محاولة تحويل الفيديو الخاص بك إلى مذكرة صوتية*'} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '*رد على رسالة نصية أو اكتب الكود والنص للتحويل إلى الصوت ، على سبيل المثال:*\n'}
const smsTradc2 = () => { return ' (كود) (نص)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + ' سيكون هذا النص صوتيًا\n\n'}
const smsTradc4 = () => { return '*يمكنك الحصول على رمز اللغات المدعومة في:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*❤️ إنتظر لحظة من فضلك...*'}

//descargas.js
const smsMediaFr = () => { return '❕ *_أكبر من 150 ملجم من الممكن عدم إرسالها_*'}
const smsImageGg = () => { return '*💞 نتيجة ل:*'}

//grupos.js
const smsGI1 = () => { return '*معلومات المجموعة*'}
const smsGI2 = () => { return '*معرف مجموعة*'}
const smsGI3 = () => { return '*أسم المجموعة*'}
const smsGI4 = () => { return '*وصف المجموعة*'}
const smsGI5 = () => { return '*بدون وصف*'}
const smsGI6 = () => { return '*عدد المستخدمين*'}
const smsGI7 = () => { return '*المستخدمين*'}
const smsGI8 = () => { return '*منشئ المجموعة*'}
const smsGI9 = () => { return '*المشرف مجموعة*'}

//grupos.js
const smsAddB3 = () => { return `*إخطار للمسؤولين*`}
const smsAddB4 = () => { return `*حضور المشرف*`}
const smsAddB5 = () => { return `*رسالة:*`}
const smsAddB6 = () => { return `طلب من المسؤولين من فضلك.`}

//grupos-admins.js
const smsDemott = () => { return '*الرقم غير صالح ، حاول مرة أخرى الرد على رسالة شخص ما أو استخدمه مثل هذا المثال:*\n'}
const smsDemott2 = () => { return '*الآن لديه قوة في المجموعة !!*'}
const smsDemott3 = () => { return '*لم يعد لديه قوة في المجموعة !!*'}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*تم إعداد ترحيب المجموعة*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_اكتب رسالة الترحيب_*\n*_اختياري يمكنك استخدام ما هو مع "@" لإضافة المزيد من المعلومات:_*\n\n*⚡ @user (أذكر للمستخدم)*\n*⚡ @subject (أسم المجموعة)*\n*⚡ @desc (وصف المجموعة)*\n\n*تذكر أن علامة "@" اختيارية*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*تم تكوين وداع المجموعة*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_اكتب رسالة الوداع_*\n*_اختياري يمكنك استخدام ما هو مع "@" لإضافة المزيد من المعلومات:_*\n\n*⚡ @user (أذكر للمستخدم)*\n\n*تذكر أن علامة "@" اختيارية*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*تم تكوين وصف المجموعة*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*تم تعيين اسم المجموعة*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 اكتب اسم المجموعة الجديد*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*يجب ألا يحتوي اسم المجموعة على أكثر من 25 حرفًا*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeGB['smsAvisoMG']()}*الرد على صورة لتغيير صورة المجموعة*`}
const smsGrupoPP2 = () => { return `${lenguajeGB['smsAvisoEG']()}*🪄 تم تحديث صورة المجموعة !!*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*تمت إعادة ضبط رابط المجموعة*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ضع علامة باسم الشخص أو رد على رسالة الشخص الذي تريد إزالته*\n\n*مثال: `}
const smskick2 = () => { return `إزالة 😼`}
const smskick3 = () => { return `لا يمكنني حذف منشئ المجموعة 😆🫵`}
const smskick4 = () => { return `ليس في هذه المجموعة 👻`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeGB['smsAvisoEG']()}*يمكن للجميع الكتابة !!*`}
const smsGrupoClose = () => { return `${lenguajeGB['smsAvisoEG']()}*مجموعة مغلقة ، يمكن للمشرفين فقط الكتابة !!*`}

//grupo-tagall.js
const smstagaa = () => { return `⚡اجتماع المجموعة ⚡`}

//grupos.js
const smsInsGC1 = () => { return `*بطاقة تعريف*`}
const smsInsGC2 = () => { return `*اسم*`}
const smsInsGC3 = () => { return `*مخلوق*`}
const smsInsGC4 = () => { return `*المسؤول الرئيسي*`}
const smsInsGC5 = () => { return `*وصف*`}

//propietario(a.js
const smsResP1 = () => { return `_*🗂️ إرسال النسخة الاحتياطية إلى جهازك الخاص ...*_`}
const smsResP2 = (date) => { return `*🗓️ قاعدة البيانات:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ضع علامة على أحد الأشخاص أو رد على رسالة المستخدم أو اكتب الرقم الذي تريد حظره من الأوامر*\n\n*مثال:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} لا يمكن حظره بهذا الأمر* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *لا يمكنني منع المالك @${ownerNumber} من ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*ليس من الضروري الحظر مرة أخرى @${number} نعم إنه موجود بالفعل* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*المستخدم محظور بنجاح* 🙀`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} أنت محظور من قبل @${usr} لا يمكنك استخدام الأوامر حتى يقوم أحدهم بعكس الحظر* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*ظهر خطأ ، ربما يكون المستخدم غير موجود في قاعدة بياناتي ، حاول الكتابة ${usedPrefix + command} ${number}*\n\`\`\`إذا استمر الخطأ في الإبلاغ عن هذا الأمر\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ضع علامة على أي شخص أو رد على رسالة المستخدم أو اكتب الرقم الذي تريد حظره من الأوامر*\n\n*مثال:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*لا حاجة إلى إلغاء الحظر مرة أخرى @${number} نعم إنه موجود بالفعل* 😊`}
const smsPropdesban3 = () => { return `${lenguajeGB['smsAvisoEG']()}*مستخدم غير محظور بنجاح* 💙`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} أنت غير محظور من قبل @${usr} يمكنك الآن استخدام الأوامر!!* 🪄`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*ظهر خطأ ، ربما يكون المستخدم غير موجود في قاعدة بياناتي ، حاول الكتابة ${usedPrefix + command} ${number}*\n\`\`\`إذا استمر الخطأ في الإبلاغ عن هذا الأمر\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return '*أنت مشرف بالفعل 😳🌹*'}
const smsAutoAdmin2 = () => { return '*لم أستطع جعله مشرفًا 🥹🥀*'}

//owner-unbanchat.js
const smsUnbanCH1 = () => { return lenguajeGB['smsAvisoFG']() + '🗂️ *هذه المحادثة غير مسجلة في قاعدة البيانات*'}
const smsUnbanCH2 = () => { return lenguajeGB.smsAvisoAG() + '🌹 *هذه المحادثة غير محظورة !!*'}
const smsUnbanCH3 = () => { return lenguajeGB['smsAvisoEG']() + '🪄 *كانت هذه المحادثة غير محظورة ، يمكنك الآن استخدام الأوامر !!*'}

//propietario(a).js
const smsBioEd1 = () => { return `*اكتب النص الذي تريد عرضه في سيرة* ${packname}`}
const smsBioEd2 = () => { return `*السيرة الذاتية طويلة جدا ، لخص المعلومات من فضلك*`}
const smsBioEd3 = () => { return '✅ ```تم تغيير معلومات BOT BIO بنجاح```'}

//propietario(a).js
const smsNameEd1 = () => { return `*اكتب النص الذي تريد عرضه باسم المستخدم* ${packname}`}
const smsNameEd2 = () => { return `*الاسم طويل جدًا ، لخص المعلومات من فضلك*`}
const smsNameEd3 = () => { return '✅ ```تم تغيير اسم المستخدم بنجاح```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `*الرد على صورة باستخدام الأمر ${usedPrefix + command} لتحديث صورة ملف تعريف الروبوت*`}
const smsFotoEd2 = () => { return '✅ ```تم تغيير صورة ملف تعريف الروبوت بنجاح```'}
const smsFotoEd3 = (usedPrefix, command) => { return `*تذكر الرد على صورة باستخدام الأمر ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return '✅ *تم حظر هذه المحادثة ، ولن تكون قادرًا على استخدام الأوامر حتى تقوم بإلغاء حظر الدردشة*'}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeGB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeGB.smsAvisoAG() + `*لا أستطيع ${comd} للمالك @${ownerNumber}*`}
const smsBlockUn3 = (comd, useB) => { return `*قد كان ${comd} ل ${useB} بنجاح*`}

//propietario(a).js
const smsRestarU1 = () => { return lenguajeGB['smsAvisoMG']() + '*قم بتسمية المستخدم أو كتابة رقمه أو الرد على الرسالة لإعادة تشغيل البيانات*'}
const smsRestarU2 = () => { return lenguajeGB['smsAvisoFG']() + '*الرقم الذي أدخلته غير صالح لإعادة تعيين البيانات*'}
const smsRestarU3 = (number) => { return lenguajeGB['smsAvisoEG']() + `*يعيد إلى @${number} من قاعدة البيانات*`}

//propietario(a).js
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*أدخل رابط مجموعة*\n*مثال:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*لقد انضم إلى المجموعة ✅*`}

//info.js
const smsReportGB1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*اكتب تقريرًا*\n*مثال:*\n\n*${usedPrefix + command}* _الامر ${usedPrefix}play انه لا يعمل._`}
const smsReportGB2 = () => { return lenguajeGB['smsAvisoFG']() + `✨ *10 أحرف كحد أدنى لإعداد التقرير*`}
const smsReportGB3 = () => { return lenguajeGB['smsAvisoFG']() + `😼 *1000 حرف كحد أقصى لإعداد التقرير*`}
const smsReportGB4 = (urs, text) => { return `
💌 \`\`\`تقرير\`\`\` 💌
*⎔ رقم:*
*» Wa.me/${urs}*

*⎔ مستخدم:*
*» @${urs}*

*⎔ رسالة:*
*» ${text}*`.trim()}
const smsReportGB5 = () => { return lenguajeGB['smsAvisoEG']() + `*تم إرسال التقرير إلى المطورين ، إذا لزم الأمر ، فستحصل على رد*`}

//buscadores.js
const smsGit1 = (usedPrefix, command) => { return `*أدخل اسم مستخدم GITHUB*\n*مثال*\n\n*${usedPrefix + command}* GataNina-Li`}
const smsGit2 = () => { return '*يبحث... 🔎*'}
const smsGit3 = () => { return '🌻 *اسم المستخدم*'}
const smsGit4 = () => { return '🌼 *سيرة شخصية*'}
const smsGit5 = () => { return '🌸 *شركة*'}
const smsGit6 = () => { return '🌺 *بريد*'}
const smsGit7 = () => { return '🪷 *تدوين*'}
const smsGit8 = () => { return '🌹 *المستودعات العامة*'}
const smsGit9 = () => { return '🌷 *الأساسيات العامة*'}
const smsGit10 = () => { return '🪸 *متابعون*'}
const smsGit11 = () => { return '🍁 *التالي*'}
const smsGit12 = () => { return '☘️ *موقع*'}
const smsGit13 = () => { return '🌱 *رجل*'}
const smsGit14 = () => { return 'غير معثور عليه'}

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • ミ★ ${global.packname} ミ★ • • ⊹*\n\n*ღ ${global.packname} » _${global.vs}_*\n*ღ نسخة JadiBot » _${global.vsJB}_*\n\n🟢 *_الوظيفة تكون فرعية_* 🟢\n\n*➡️ باستخدام هاتف خلوي أو كمبيوتر شخصي آخر ، امسح رمز الاستجابة السريعة هذا ليصبح روبوتًا فرعيًا*\n\n*1️⃣ انتقل إلى النقاط الثلاث في الزاوية اليمنى العليا*\n*2️⃣ انتقل إلى خيار الأجهزة المقترنة*\n*3️⃣ امسح رمز الاستجابة السريعة هذا لتسجيل الدخول*\n\n📢 *تنتهي صلاحية رمز الاستجابة السريعة هذا في 45 ثانية!*`}
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*

*ღ ${global.packname} » _${global.vs}_*
*ღ نسخة JadiBot » _${global.vsJB}_*

🟢 _وظيفة جديدة تجعلك روبوتًا فرعيًا_ 🟢

*1️⃣ انتقل إلى النقاط الثلاث في الزاوية اليمنى العليا*
*2️⃣ انتقل إلى خيار الأجهزة المقترنة*
*3️⃣ اضغط على الرابط الذي يحتوي على رمز الهاتف*
*4️⃣ الصق الرمز أدناه*`}
const smsreenvia = () => { return `*🟢 أعد إرسال الأمر...*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *تم فصل الجهاز*\n\n*سيكون عليك الاتصال مرة أخرى للاستخدام:\n#deletesesion`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*تم تعطيل هذا الأمر من قبل المالك*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *لكي تكون تابعًا ثانويًا ، انتقل إلى الرقم الرئيسي*\n*ღ أدخل الرابط التالي:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *تم إغلاق الاتصال بطريقة غير متوقعة ، سنحاول إعادة الاتصال ...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *تم إغلاق الاتصال ، يجب عليك الاتصال يدويًا باستخدام الأمر #jadibot وإعادة إنشاء رمز الاستجابة السريعة الجديد${lenguajeGB['smsJBConexionTrue3']()}* *الذي تم إرساله لأول مرة تم إنشاء بوت فرعي*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *اتصال ناجح !!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *تم الاتصال بنجاح!!! يمكنك الاتصال باستخدام:*`}
const smsJBConexionTrue3 = () => { return `.`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *هل أنت متصل!! الرجاء الانتظار يتم تحميل الرسائل ...*\n\n♻️ *الخيارات المتاحة:*\n*» ${usedPrefix}pausesb _(ميزة Stop Sub Bot)_*\n*» ${usedPrefix}delsession _(احذف كل آثار Sub Bot)_*\n*» ${usedPrefix}jadibot _(رمز QR جديد أو تسجيل الدخول إذا كنت بالفعل Jadi Bot)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*استخدم هذا الأمر مع الروبوت الرئيسي*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*سوف نفتقدك ${global.packname} الوداع!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*لقد قمت بتسجيل الخروج وحذف جميع المسارات*`}
const smsFoldErr = (usedPrefix, comd) => { return `*ليس لديك جلسة ، يمكنك إنشاء جلسة واحدة باستخدام:*\n*${usedPrefix}${comd}*\n\n*إذا كان لديك (معرف) ، فيمكنك تخطي الخطوة السابقة باستخدام:*\n*${usedPrefix}${comd}* \`\`\`(هوية شخصية)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeGB['smsAvisoAG']() + `*إذا لم تكن روبوتًا فرعيًا ، فاتصل بالرقم الرئيسي لتصبح روبوتًا فرعيًا*`}
const smsJBCom2 = () => { return lenguajeGB['smsAvisoRG']() + `*لقد أغلقت / أوقفت الجلسة.*`}

//jadibot
const smsJBCom3 = () => { return `😺 *قائمة البرامج الفرعية*\n\n🌟 _يمكنك طلب الإذن للسماح لمجموعتك باستخدام الروبوت_\n\n\`\`\`يستخدم كل مستخدم روبوت فرعي الوظيفة كما يريد ، والرقم الرئيسي ليس مسؤولاً عن استخدام الوظيفة \`\`\``}
const smsJBCom4 = () => { return "*لا تتوفر بوتات فرعية. التحقق لاحقا.*"}

//propietario(a).js
const smsJBDifu1 = () => { return "*📣 البث للروبوتات الفرعية 📣*\n\n"}
const smsJBDifu2 = (numUser, difuUser, tolUser) => { return `*نشر ناجح لـ ${numUser} الروبوتات الفرعية*\n\n${difuUser}\n\n*انتهى الشحن في ${tolUser} ثوانى*`}

//propietario(a).js
const smsChatGP1 = () => { return "*إرسال الرسالة ، انتظر لحظة ...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *الافراج عن مسؤول* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *تم إرسال الرسالة إلى ${totalGP} تَجَمَّع*`}

//propietario(a)-getplugin.js
const smsPlugin1 = (usedPrefix, command) => { return `*يرجى كتابة اسم الملف أو الأمر لإرسال الكود*\n*EJEMPLO*\n\n*${usedPrefix + command} menu-menu.js*\n*${usedPrefix + command} menu*`}
const smsPlugin2 = (contenidoArchivo, contenido) => { return `\`\`\`كود الملف ${contenidoArchivo}\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${contenido.toString()}`}
const smsPlugin3 = (text) => { return `*مدونة لـ '${text}' لم يتم العثور عليها*`}
const smsPlugin4 = (filename, fileContent) => { return `\`\`\`كود الملف ${filename}.js\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${fileContent.toString()}`}
const smsPlugin5 = (matchingFile, err) => { return `خطأ أثناء إرسال الملف '${matchingFile}': ${err.message}`}
const smsPlugin6 = (matchingFile) => { return `حدث خطأ عند إرسال الملف '${matchingFile}'`}

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n_😻 لقد انضم إلى المجموعة_\n\n🫶 *تمت إضافته بواسطة: @${user}*`}

//propietario(a)-leavegc.js
const smsLeave = () => { return `${packname} *اترك المجموعة ، كان من الرائع التواجد هنا 🌸*`}

//rpg-perfil.js
const smsPerfil0 = () => { return `🌸 *حساب تعريفي* 🌸`}
const smsPerfil1 = () => { return `مستخدم`}
const smsPerfil2 = () => { return `اسم`}
const smsPerfil3 = () => { return `عمر`}
const smsPerfil4 = () => { return `رقم`}
const smsPerfil5 = () => { return `تسجيل الهوية`}

//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}*انت مسجل مسبقا(A)!!*\n*إذا كنت تريد إلغاء التسجيل ، فاستخدم هذا الأمر*\n*${usedPrefix}unreg رقم سري*\n\n*إذا كنت لا تتذكر رقمك التسلسلي ، فاستخدم هذا الأمر*\n*${usedPrefix}myns`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoIIG']()}*أدخل اسمك والعمر ليتم تسجيلك*\n*مثال*\n\n${usedPrefix + command} GataBot.18`}
const smsVerify2 = () => { return `${lenguajeGB['smsAvisoAG']()}*أدخل أسمك*`}
const smsVerify3 = () => { return `${lenguajeGB['smsAvisoAG']()}*أدخل عمرك*`}
const smsVerify4 = () => { return `${lenguajeGB['smsAvisoAG']()}*انت متقدم في العمركثيرا*`}
const smsVerify5 = () => { return `${lenguajeGB['smsAvisoAG']()}*أنت قاصر جدا*`}
const smsVerify6 = () => { return `${lenguajeGB['smsAvisoAG']()}*اكتب اسمًا قصيرًا*`}
const smsVerify7 = () => { return `✅ *يفحص* ✅`}
const smsVerify8 = (usedPrefix) => { return `*سيتم استخدام معرف التسجيل الخاص بك في حالة رغبتك في تعديل أو حذف تسجيلك باستخدام ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `شارة التحقق`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `*الرد على مقطع فيديو أو صورة أو كتابة ${usedPrefix + command} بجوار الرابط الذي ينتهي بـ .jpg .jpeg .gif .png*`}
const smsSticker2 = () => { return `*يجب ألا يزيد الفيديو عن 10 ثوانٍ*`}
const smsSticker3 = (usedPrefix, command) => { return `*الرابط غير صالح ، يجب أن ينتهي بـ .jpg .jpeg .gif .png مثال:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*أدخل معرف التسجيل الخاص بك. إذا كنت لا تعرف ما هو الأمر ، فاستخدم الأمر ${usedPrefix}${idreg}*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*معرف التسجيل الخاص بك غير صحيح. استخدم الأمر ${usedPrefix}${idreg} للحصول على هويتك*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `*لقد ألغيت تسجيلك من* ${packname}\n\n*يمكنك استخدام ${usedPrefix}${regbot} لعمل تسجيل جديد*`}

//rpg-myns.js
const smsIDserie = () => { return `⬇️ *تسجيل الهوية* ⬇️`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *تم الارسال:*`}
const smsBCbot2 = () => { return `خاص`}
const smsBCbot3 = () => { return `تَجَمَّع`}
const smsBCbot4 = () => { return `المجموع`}
const smsBCbot5 = () => { return `إجمالي وقت الشحن:`}
const smsBCbot6 = () => { return `لم يتم إرسالهم إلى جميع المحادثات الخاصة لتجنب التشبع`}
const smsBCbot7 = () => { return `✅ *الافراج عن مسؤول* ✅`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*الرد على الرسالة أو كتابة الرسالة باستخدام ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*إرسال رسالة رسمية ، انتظر لحظة ...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *تم إرسال الرسالة إلى ${totalPri} دردشة خاصة*\n\n*إجمالي وقت الشحن: ${time}*\n${totalPri >= 500000 ? '\n*لم يتم إرسالهم إلى جميع الدردشات لتجنب التشبع*' : ''}`}

//reiniciar 
const smsreiniciar = () => { return `*إعادة ضبط 🚀🚀🚀*\n*فضلا انتظر لحظة*`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *جلسة* ⚙️`}
const smsConfi2bot = () => { return `يأمر`}
const smsConfi3bot = () => { return `ولاية`}
const smsConfi4bot = () => { return `إلى عن على`}
const smsConfi5bot = () => { return `مفعل`}
const smsConfi6bot = () => { return `عاجز`}
const smsConfi7bot = () => { return `هذه المحادثة`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*نظرًا لأنه مسؤول ، فلن يتم حذفه*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*تم اكتشاف رابط WHATSAPP !!*\n\n*سيتم حذفك*`}
const smsWaMismoEnlace = () => { return '*هذا الرابط من هذه المجموعة ، فقط لأنه لن يتم حذفه*'}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}*تم اكتشاف رابط يحتوي على HTTPS !!*\n\n*سيتم حذفك*`}

//_allantilink.js 
const smsTextoYT = () => { return '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ تعطيل'} 
const smsEncender = () => { return '✅ تفعيل'} 
const smsEnlaceTik = () => { return `*تم اكتشاف رابط TIKTOK !!*\n\n*سيتم حذفك*`}
const smsEnlaceYt = () => { return `*تم اكتشاف رابط يوتيوب !!*\n\n*سيتم حذفك*`}
const smsEnlaceTel = () => { return `*تم الكشف عن رابط هاتف !!*\n\n*سيتم حذفك*`}
const smsEnlaceFb = () => { return `*تم اكتشاف رابط فيسبوك !!*\n\n*سيتم حذفك*`}
const smsEnlaceIg = () => { return `*تم اكتشاف رابط إنستغرام !!*\n\n*سيتم حذفك*`}
const smsEnlaceTw = () => { return `*تم اكتشاف رابط تويتر !!*\n\n*سيتم حذفك*`}
const smsAllAdmin = () => { return `*يجب أن أكون مشرفًا لحذف المستخدمين*`}
const smsSoloOwner = () => { return `*يجب على المالك تنشيط وظيفة التقييد*`}

//config-on y off.js
const smsParaAdmins = () => { return `للمشرفين والمبدعين : المجموعات`}
const smsParaAdYOw = () => { return `للمشرفين والمبدعين : الدردشات`}
const smsParaOw = () => { return `لمنشئ المحتوى : محادثات`}
const smsNoGg = () => { return ` | ⚠️`}

//_anti-internacional.js
const smsInt1 = () => { return `هذا العدد`}
const smsInt2 = () => { return `لا يسمح لك في هذه المجموعة !!`}

//handler.js
const smsCont1 = () => { return `*🥀 فشل الأمر 🥀*`}
const smsCont2 = () => { return `*⛈️ PLUGIN:*`}
const smsCont3 = () => { return `*⛈️ مستخدم:*`}
const smsCont4 = () => { return `*⛈️ يأمر:*`}
const smsCont5 = () => { return `*⛈️ خطأ:*`}
const smsCont6 = () => { return `*✨ أبلغ عن هذه الرسالة باستخدام الأمر #report لتحل*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*ليس لديها الماس!! 💎 يمكنك الذهاب إلى المتجر باستخدام الأمر*`}
const smsCont8 = () => { return ` *الماس 💎 مستعمل*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*بحاجة إلى المستوى ➡️*`}
const smsCont10 = () => { return `*لاستخدام هذا الأمر. المستوى الحالي الخاص بك هو ➡️*`}
const smsCont11 = () => { return `*قم بالتحديث باستخدام الأمر*`}
const smsAntiEliminar = (userDelete) => { return `♻️ *منع الحذف* ♻️\n*@${userDelete} حذف رسالة !!*\n\n\`\`\`تم حذف الرسالة ...\`\`\``}
const smsHandler = () => { return "تم تحديث 'handler.js' بنجاح"} 
const smsHandlerLlamar = (tagUserL, llamadaVideo) => { return `*مرحبا @${tagUserL} ${llamadaVideo ? 'مكالمات الفيديو 📲' : 'المكالمات 📞'} إنه ممنوع في هذه المحادثة. سيتم حظرك*`} 

//audio-efectos-edit.js
const smsControlAudio1 = () => { return '*الرد على ملاحظة صوتية أو صوتية*'}
const smsControlAudio2 = (usedPrefix, command) => { return `*هذه المعلمات فقط تسمح لكتابة الأرقام ${usedPrefix + command} لمعرفة المعلمات*`}
const smsControlAudio3 = () => { return `*حدث خطأ حاولت تغيير قيم المعلمات وتذكر تطبيق المرشح الذي يجب أن يستجيب لمذكرة الصوت أو الصوت*`}
const smsControlAudio4 = () => { return `*الرد على ملاحظة صوتية أو صوتية لتطبيق الفلتر*`}
const smsAudioEdit1 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *20* | MAX: *20000*
⎔ الإفتراضي: *94*
1️⃣👉 _التردد المركزي للمرشح بالهرتز_

⎔ *(معلمة إلزامية)*
⎔ MIN: *-30* | MAX: *30*
⎔ الإفتراضي: *25*
2️⃣👉 _تصفية المكاسب في ديسيبل_

⎔ *(معلمة اختيارية)*
⎔ خيارات: *"q", "h", "o"*
⎔ الإفتراضي: *o*
3️⃣👉 _تصفية نوع النطاق الترددي_
*q:* نسبة الجودة ، تردد أكثر تحديدًا.
*h:* عرض النطاق الترددي الثابت ، والمساواة في جميع الترددات.
*o:* عرض النطاق الترددي بالأوكتافات ، سيتضاعف أو ينقص كل أوكتاف إلى النصف (في كل مرة يتضاعف التردد أو ينخفض ​​إلى النصف).

⎔ *(معلمة اختيارية)*
⎔ MIN: *2* | MAX: *500*
⎔ الإفتراضي: *5*
4️⃣👉 _اضبط عرض النطاق الترددي للفلتر على قيمة X إذا كنت تستخدم [q, h, o]_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ إذا أغفلت إضافة المعلمات الاختيارية أو تجاوزت حدودها ، فسيتم إضافتها إلى القيمة الافتراضية ، فتذكر الرد على الملاحظة الصوتية أو الصوتية*`}
const smsAudioEdit2 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *20* | MAX: *20000*
⎔ الإفتراضي: *15*
1️⃣👉 _تردد الاهتزازات بالهرتز_

⎔ *(معلمة إلزامية)*
⎔ MIN: *0* | MAX: *100*
⎔ الإفتراضي: *0.5*
2️⃣👉 _عمق الاهتزاز ، ستكون قيمته النهائية في النظام العشري إذا كانت القيمة أكبر من 95 فسيكون عددًا صحيحًا_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*❕ جميع المعلمات إلزامية ، إذا تجاوزت حدودها ، فستتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsAudioEdit3 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *8* | MAX: *32*
⎔ الإفتراضي: *16*
1️⃣👉 _مستوى تكميم العينات الصوتية بالبتات_

⎔ *(معلمة إلزامية)*
⎔ MIN: *500* | MAX: *48000*
⎔ الإفتراضي: *44100*
2️⃣👉 _عدد مرات أخذ عينات الصوت في الثانية_

⎔ *(معلمة اختيارية)*
⎔ MIN: *0* | MAX: *100*
⎔ الإفتراضي: *0.5*
3️⃣👉 _مستوى المزج بين الصوت الأصلي والصوت مع تأثير acrusher (ستكون قيمته النهائية رقمًا عشريًا إذا كانت أقل من 95)_

⎔ *(معلمة اختيارية)*
⎔ MIN: *0* | MAX: *100*
⎔ الإفتراضي: *0.5*
4️⃣👉 _مقدار المزج بين الصوت الأصلي والصوت المتداخل (ستكون قيمته النهائية عددًا صحيحًا إذا كانت أكبر من 95)_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*❕ إذا أغفلت إضافة المعلمات الاختيارية أو تجاوزت حدودها ، فسيتم إضافتها إلى القيمة الافتراضية ، فتذكر الرد على الملاحظة الصوتية أو الصوتية*`}
const smsAudioEdit4 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *1* | MAX: *15*
⎔ الإفتراضي: *4*
1️⃣👉 _صوت الإدخال ، يجب ضبطه على سرعة التشغيل المطلوبة ، يتضمن تغيير مدة الصوت_

⎔ *(معلمة إلزامية)*
⎔ MIN: *2000* | MAX: *2550000*
⎔ الإفتراضي: *48000*
2️⃣👉 _أخذ عينات الصوت الناتج بالهرتز ، اضبط معدل العينة المطلوب_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*❕ جميع المعلمات إلزامية ، إذا تجاوزت حدودها ، فستتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsAudioEdit5 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *-1024* | MAX: *1024*
⎔ الإفتراضي: *6*
1️⃣👉 _مضخم الصوت بالديسيبل ، القيمة السالبة تقلل من صوت الصوت والقيمة الموجبة تزيد من صوت الصوت_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*❕ المعلمة إلزامية ، إذا تجاوزت حدودها ، فسيتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsAudioEdit6 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *1* | MAX: *100*
⎔ الإفتراضي: *1.63*
1️⃣👉 _قم بتغيير سرعة تشغيل ملف صوتي_

⎔ *(معلمة إلزامية)*
⎔ MIN: *8000* | MAX: *48000*
⎔ الإفتراضي: *44100*
2️⃣👉 _تغيير معدل العينة لملف صوتي_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ جميع المعلمات إلزامية ، إذا تجاوزت حدودها ، فسيتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsAudioEdit7 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *1* | MAX: *300*
⎔ تقصير: *1.3*
1️⃣👉 _قم بتغيير سرعة تشغيل ملف صوتي_

⎔ *(معلمة إلزامية)*
⎔ MIN: *4000* | MAX: *4800000*
⎔ الإفتراضي: *22100*
2️⃣👉 _تغيير معدل العينة لملف صوتي_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ جميع المعلمات إلزامية ، إذا تجاوزت حدودها ، فستتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsAudioEdit8 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *1* | MAX: *150*
⎔ تقصير: *1.06*
1️⃣👉 _قم بتغيير سرعة تشغيل ملف صوتي_

⎔ *(معلمة إلزامية)*
⎔ MIN: *1000* | MAX: *550000*
⎔ الإفتراضي: *44100*
2️⃣👉 _تغيير معدل العينة لملف صوتي_

⎔ *(معلمة اختيارية)*
⎔ MIN: *1* | MAX: *7*
⎔ تقصير: *1.25*
3️⃣👉 _يضبط التردد المضاعف على القيمة المطلوبة_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*❕ إذا أغفلت إضافة المعلمة الاختيارية أو تجاوزت حدودها ، فستتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsAudioEdit9 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *32* | MAX: *16384*
⎔ الإفتراضي: *512*
1️⃣👉 _حجم أجزاء الإشارة الصوتية التي تتم معالجتها في كل لحظة_

⎔ *(معلمة إلزامية)*
⎔ MIN: *1* | MAX: *100*
⎔ الإفتراضي: *0.75*
2️⃣👉 _مقدار التداخل المستخدم بين النوافذ المتتالية يقسم الإشارة الصوتية إلى مقاطع أو نوافذ لتطبيق معالجة معينة عليها_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ جميع المعلمات إلزامية ، إذا تجاوزت حدودها ، فستتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsAudioEdit10 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *0.5* | MAX: *12*
⎔ Predeterminada: *0.7*
1️⃣👉 _سرعة تشغيل الصوت. القيمة 1.0 هي السرعة العادية ، بينما تسرع القيمة الأكبر من 1.0 التشغيل ، والقيمة الأقل من 1.0 تبطئها.._

⎔ *(معلمة إلزامية)*
⎔ MIN: *8000* | MAX: *48000*
⎔ تقصير: *44100*
2️⃣👉 _معدل عينة الصوت ، يشير إلى عدد مرات أخذ عينات الصوت. كلما ارتفع معدل العينة ، زادت جودة الصوت_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ جميع المعلمات إلزامية ، إذا تجاوزت حدودها ، فستتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsAudioEdit11 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *1* | MAX: *5*
⎔ تقصير: *2*
1️⃣👉 _وضع توين الحركة الذي يستخدمه المرشح._

⎔ *(معلمة إلزامية)*
⎔ MIN: *1* | MAX: *4*
⎔ الإفتراضي: *2*
2️⃣👉 _وضع تعويض الحركة الذي يستخدمه المرشح._

⎔ *(معلمة اختيارية)*
⎔ MIN: *0* | MAX: *10*
⎔ تقصير: *1*
3️⃣👉 _استخدام الاستيفاء الرأسي للبكسل الفرعي_

⎔ *(معلمة اختيارية)*
⎔ MIN: *1* | MAX: *240*
⎔ الإفتراضي: *120*
4️⃣👉 _يتحكم في معدل إطار إخراج الصوت_

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*❕ إذا أغفلت إضافة المعلمات الاختيارية أو تجاوزت حدودها ، فسيتم إضافتها إلى القيمة الافتراضية ، فتذكر الرد على الملاحظة الصوتية أو الصوتية*`}
const smsAudioEdit12 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *0.5* | MAX: *10*
⎔ تقصير: *0.5*
1️⃣👉 _يضبط سرعة تشغيل الصوت دون التأثير على طبقة الصوت._

⎔ *(معلمة إلزامية)*
⎔ MIN: *2000* | MAX: *260000*
⎔ الإفتراضي: *65100*
2️⃣👉 _اضبط معدل عينة الصوت ، أي عدد عينات الصوت في الثانية._

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 3 9483
${usedPrefix + command} 0.8 3849

*❕ جميع المعلمات إلزامية ، إذا تجاوزت حدودها ، فستتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsAudioEdit13 = (usedPrefix, command) => { return `*_لإجراء تعديل صحيح على استخدامك الصوتي ، استخدم هذه المعلمات_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(معلمة إلزامية)*
⎔ MIN: *0.001* | MAX: *5*
⎔ تقصير: *0.125*
1️⃣👉 _تردد الموجة النبضية بالهرتز (هرتز)_

⎔ *(معلمة إلزامية)*
⎔ MIN: *0.01* | MAX: *1*
⎔ الإفتراضي: *1*
2️⃣👉 _يضبط مقدار التعديل المطبق على الصوت._

*»» أمثلة على الاستخدام:*
${usedPrefix + command} 0.555 0.50
${usedPrefix + command} 1 0.07

*❕ جميع المعلمات إلزامية ، إذا تجاوزت حدودها ، فستتم إضافتها إلى القيمة الافتراضية ، تذكر الرد على الصوت أو الملاحظة الصوتية*`}
const smsControlAudio5 = () => { return `القيم المحددة:`}

//config.js
const smsConfigBot = () => { return "تم تحديث 'config.js' بنجاح"}

//menu-menu.js
const smsMenuTotal1 = () => { return "معلومات القائمة"}
const smsMenuTotal2 = () => { return "سيربوت"}
const smsMenuTotal3 = () => { return "سيكر / IA"}
const smsMenuTotal4 = () => { return "التحميلات"}
const smsMenuTotal5 = () => { return "كونفيرتر"}
const smsMenuTotal6 = () => { return "مجموعة ~ الكل"}
const smsMenuTotal7 = () => { return "مجموعة ~ المشرفين"}
const smsMenuTotal8 = () => { return "تحرير تأثيرات الصوت"}
const smsMenuTotal9 = () => { return "تأثيرات الصوت"}
const smsMenuTotal10 = () => { return "جلسة"}
const smsMenuTotal11 = () => { return "ليتم التحقق منها"}
const smsMenuTotal12 = () => { return "صاحب"}

//Error2
const smsMensError1 = () => { return `❕ تقرير كوماندو ❕`} 
const smsMensError2 = () => { return `الأمر التالي يفشل`} 

//config.js
const smsMeWait = () => { return '*⌛ إنتظر لحظة من فضلك...*'} 

//buscadores.js
const smsytserh1 = () => { return 'مؤهل'} 
const smsytserh2 = () => { return 'وصلة'} 
const smsytserh3 = () => { return 'مدة'} 
const smsytserh4 = () => { return 'تم التحميل'} 
const smsytserh5 = () => { return 'عدد المشاهدات'} 

//descargas.js
const smsIAimage = () => { return '💻 *تم إنشاء الصورة باستخدام AI / DALL-E* ✨'} 
const smsIAimage2 = () => { return 'قطة أرجوانية ذات لون أزرق فاتح في كوكب المشتري ، تضيء الكون بسحره مع تأثير بسيط.'} 
const smsIAimage3 = () => { return '💻 *تم إنشاء الصورة باستخدام AI / Midjourney* ✨'} 
const smsIAimage4 = () => { return 'أسد صغير يمر عبر البركة ، ينعكس في التصوير الفوتوغرافي في البركة.'} 

//descargas.js
const smsyFBvid1 = () => { return '*ليس رابطًا صالحًا ، تذكر استخدام رابط فيديو FACEBOOK*'} 
const smsyFBvid2 = () => { return 'تم تنزيل فيديو مجموعة الفيسبوك الذي تم تنزيله 💚'} 
const smsyFBvid3 = () => { return 'تم تنزيل فيديو FACEBOOK REELS 💚'} 
const smsyFBvid4 = () => { return 'تم تنزيل فيديو قصص فيسبوك 💚'} 
const smsyFBvid5 = () => { return 'تم تنزيل مقطع فيديو آخر على الفيسبوك 💚'} 
const smsyFBvid6 = () => { return 'تم تنزيل فيديو الفيسبوك 💚'}

//grupos-admin.js
const smsInvite1 = () => { return '*يتم قبول الأرقام فقط ، بدون أحرف*'} 
const smsInvite2 = (usedPrefix, command, bot) => { return `*أدخل الرقم الكامل للمستخدم الذي تريد دعوته إلى المجموعة*\n*مثال:*\n\n*${usedPrefix + command}* +${bot}`} 
const smsInvite3 = (NumeroUser, user, groupMetadata, link) => { return `✨ ¡مرحبا! *@${NumeroUser}* اكون ${packname}, بوت للواتس اب. يبدو أن *@${user}* يدعوك إلى المجموعة ${groupMetadata.subject}\n\n\`\`\`¡نحن نتطلع لرؤيتك في المجموعة!\`\`\`\n\n*${link}*`} 
const smsInvite4 = (NumeroUser) => { return `*دعوة موجهة إلى خاص من @${NumeroUser}*`} 

//descargas.js
const smsSP0 = (usedPrefix) => { return `🌸 _يمكنك استخدام *${usedPrefix}spotifysearch* للحصول على رابط الأغنية المحددة_`} 
const smsSP1 = () => { return '✨ *مؤهل:*'} 
const smsSP2 = () => { return '🗣️ *الفنان:*'} 
const smsSP3 = () => { return '🌐 *URL*:'} 
const smsSP4 = () => { return '♻️ *تحميل URL:*'} 
const smsSP5 = () => { return '🎶 *إرسال الأغنية ...*'} 
const smsSP6 = () => { return `${lenguajeGB['smsAvisoFG']()}*لم يتم العثور على نتائج. جرب اسمًا أو رابطًا آخر*`} 

//_autodetec.js
const smsAutodetec1 = (inf, usuario, m) => { return `${inf}*» ${usuario}*\n*تم تغيير اسم المجموعة*\n\n🔰 *الآن يتم استدعاء المجموعة:*\n*${m.messageStubParameters[0]}*`} 
const smsAutodetec2 = (inf, usuario, groupMetadata) => { return `${inf}*» ${usuario}*\n*الصورة تغيرت:*\n*${groupMetadata.subject}*`} 
const smsAutodetec3 = (inf, usuario, m, groupMetadata) => { return `${inf}*» ${usuario}*\n*سمح بذلك ${m.messageStubParameters[0] == 'on' ? 'المشرفون فقط' : 'الجميع'} يمكن التكوين ${groupMetadata.subject}*`} 
const smsAutodetec4 = (inf, groupMetadata, usuario) => { return `${inf}*ارتباط ${groupMetadata.subject} تمت إعادة الضبط بواسطة:*\n*» ${usuario}*`} 
const smsAutodetec5 = (inf, groupMetadata, m, usuario) => { return `${inf}*${groupMetadata.subject} كان ${m.messageStubParameters[0] == 'on' ? 'مغلق 🔒' : 'يفتح 🔓'} بواسطة ${usuario}*\n\n💬 *الآن ${m.messageStubParameters[0] == 'on' ? 'المشرفون فقط' : 'الجميع'} يمكنك إرسال الرسائل*`} 
const smsAutodetec6 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} هو الآن المسؤول عن*\n*» ${groupMetadata.subject}*\n\n✨ *الإجراء الذي تم اتخاذه:*\n*» ${usuario}*`} 
const smsAutodetec7 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} توقف عن كونك مشرفًا في*\n*» ${groupMetadata.subject}*\n\n✨ *الإجراء الذي تم اتخاذه:*\n*» ${usuario}*`} 


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
smsAutodetec3, smsAutodetec4, smsAutodetec5, smsAutodetec6, smsAutodetec7, smsImageGg, smsGit, languageSave, languageRegister, smsMainBot, smsJBConexionClose2, smsreenvia, smsIniJadi2}
