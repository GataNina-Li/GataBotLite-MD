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
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *يجب عليك استخدام الأمر أو الرد على رسالة شخص ما مثل هذا المثال:*\n`}

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
const smsBioEd3 = () => { return '✅ ```تم تغيير BOT BIO INFO بنجاح```'}

//propietario(a).js
const smsNameEd1 = () => { return `*اكتب النص الذي تريد عرضه باسم المستخدم* ${packname}`}
const smsNameEd2 = () => { return `*الاسم طويل جدًا ، لخص المعلومات من فضلك*`}
const smsNameEd3 = () => { return '✅ ```NOMBRE DE USUARIO DEL BOT CAMBIADA CON ÉXITO```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `*RESPONDA A UNA IMAGEN USANDO EL COMANDO ${usedPrefix + command} PARA ACTUALIZAR LA FOTO DEL PERFIL DEL BOT*`}
const smsFotoEd2 = () => { return '✅ ```FOTO DE PERFIL DEL BOT CAMBIADA CON ÉXITO```'}
const smsFotoEd3 = (usedPrefix, command) => { return `*RECUERDE RESPONDER A UNA IMAGEN USANDO EL COMANDO ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return '✅ *ESTE CHAT FUE BANEADO, NO PODRÁN USAR LOS COMANDOS HASTA DESBANEAR EL CHAT*'}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeGB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeGB.smsAvisoMG() + `*NO PUEDO ${comd} AL OWNER @${ownerNumber}*`}
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
const smsBCMensaje3 = (totalPri, time) => { return `✅ *EL MENSAJE FUE ENVIADO A ${totalPri} CHAT(S) PRIVADO(S)*\n\n*TIEMPO TOTAL DE ENVÍO: ${time}*\n${totalPri >= 3000 ? '\n*NO SE ENVIARON A TODOS LOS CHATS PARA EVITAR SATURACIÓN*' : ''}`}

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
const smsMensError1 = () => { return `❕ تقرير كوماندو ❕`} 
const smsMensError2 = () => { return `الأمر التالي يفشل`} 

export default { lenguaje, smsAvisoRG, smsreiniciar, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCodigoQR, smsConexionOFF, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsConMenu, smsCreA,
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
smsMenuTotal10, smsMenuTotal11, smsMenuTotal12, smsMalused, smsMalused2, smsMalused3, smsMalError, smsMalError2, smsMalError3, smsMensError1, smsMensError2 }
