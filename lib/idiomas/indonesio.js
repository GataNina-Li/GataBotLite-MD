const lenguaje = () => { return 'id' } //Bahasa Indonesia

const smsAvisoRG = () => { return `╰⊱✅⊱ *HASIL* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *PERINGATAN* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMASI* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *KESALAHAN* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *TINDAKAN YANG DISALAHKAN* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *LAPORAN* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *KESUKSESAN* ⊱💚⊱╮\n\n` }

const smsRowner = () => { return `\`\`\`¡¡PERINTAH INI HANYA BISA MENGGUNAKAN JUMLAH BOT!!\`\`\`` }
const smsOwner = () => { return `\`\`\`¡¡PERINTAH INI HANYA PENCIPTA SAYA YANG DAPAT MENGGUNAKANNYA!!\`\`\`` }
const smsMods = () => { return `\`\`\`¡¡PERINTAH INI HANYA MODERATOR DAN PENCIPTA SAYA YANG DAPAT MENGGUNAKANNYA!!\`\`\`\`` }
const smsPremium = () => { return `\`\`\`¡¡PERINTAH INI HANYA TERSEDIA UNTUK PENGGUNA PREMIUM DAN PENCIPTA SAYA (A)!! UNTUK MENDAPATKAN PREMIUM, BELI PASS MENGGUNAKAN #pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`¡¡PERINTAH INI HANYA BISA DIGUNAKAN DALAM GRUP!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`¡¡PERINTAH INI HANYA BISA DIGUNAKAN OLEH PRIBADI!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`¡¡PERINTAH INI HANYA UNTUK ADMIN!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`¡¡SAYA PERLU MENJADI ADMIN AGAR ANDA DAPAT MENGGUNAKAN PERINTAH INI!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`¡¡ANDA PERLU TERDAFTAR UNTUK MENGGUNAKAN PERINTAH INI, TULIS #verify UNTUK MENDAFTAR!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`¡¡PERINTAH INI DIBATASI OLEH PENCIPTA SAYA!!\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ SELAMAT DATANG!!*\n┊💖 @user\n┊📄 *BACA DESKRIPSI GRUP*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *@user*\n┊ *DIA TIDAK LAYAK BERADA DI SINI!!* 🌟\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user DIA TELAH DIPROMOSIKAN SEBAGAI ADMIN GROUP!!*'}
const smsSdemote = () => { return '*@user DIA TELAH DEMOVED SEBAGAI ADMIN GROUP!!*'}
const smsSdesc = () => { return '*TAHU DESKRIPSI BARU GRUP:*\n\n@desc'}
const smsSsubject = () => { return '*NAMA GROUP TELAH DIPERBARUI!!*\n@subject'}
const smsSicon = () => { return '*FOTO GRUP TELAH DIPERBARUI!!*'}
const smsSrevoke = () => { return '*TEMUKAN LINK GRUP BARU!!*\n*@revoke*'}
const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ 💚 KONEKSI SUKSES DENGAN WHATSAPP 💚\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ PENGISIAN...\n`} 
const smsCodigoQR = () => { return `\n✅ PINDAI KODE QR BERAKHIR DALAM 45 DETIK ✅`}
const smsConexionOFF = () => { return `\n⚠️ TIDAK ADA KONEKSI, HAPUS FOLDER ${global.authFile} DAN PINDAI KODE QR ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ MULTIMEDIA ☘️\n┆• FILE DARI FOLDER TMP DIHAPUS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• SESI NON-ESENSIAL DIHILANGKAN\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 MENGAJUKAN 🌹\n┆• FILE SISA DIHAPUS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺 GataJadiBot 🌺\n┆• TIDAK ADA YANG DIHAPUS \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼 GataJadiBot 🌼\n┆• FILE NON-ESENSIAL DIHAPUS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️ GataJadiBot ⚠️\n┆• TERJADI KESALAHAN\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ ARSIP ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `HAPUS BERHASIL\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ ARSIP ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `GAGAL DIHAPUS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 

//_antiprivado 
const smsprivado = () => { return `*Anda tidak dapat menggunakan bot ini dalam obrolan pribadi*\n\n*Bergabunglah dengan grup bot resmi untuk menggunakan bot*`}

//Boton
const smsConMenu = () => { return `🌻 MENU`}

//info-creadora.js
const smsCreA = () => { return 'Halo!!'}
const smsCreB = () => { return 'Nama saya adalah'}
const smsCreC = () => { return 'Selalu tersedia untuk membantu Anda 😸'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return '🌸 *◜AKUN RESMI◞* 🌸'}
const smsOfc2 = () => { return `*❥ _Ikuti kami di Akun Resmi untuk tetap mendapatkan informasi terbaru_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `🌼 Sukarela dukungan diterima melalui PayPal, jika Anda ingin membantu dengan cara lain Anda dapat menyumbangkan Nomor di Instagram agar repositori tetap valid, Terima Kasih!!\n\n🌺 Anda selalu dapat mendukung dengan mengikuti Akun Resmi dan Berbagi pekerjaan yang dicapai ${packname}`}
const smsTituloDonar = () => { return '*◜🌹❤️ DONASI SUKARELA ❤️🌹◞*'}
const smsPrivadoDonar = () => { return '🍄 *_Anda juga dapat membagikan yang berikut ini sebagai Tunjukkan Dukungan_*\n*_Nilai repositori dengan a 🌟 Terima kasih!!_*'}

//info-gruposofc.js
const smsGrupoOfc1 = () => { return '*◜🌺 GRUP RESMI 🌺◞*'}
const smsGrupoOfc2 = () => { return '*◜🌸 KOLABORASI 🌸◞*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*ANDA BERADA DI KELOMPOK INI:*_'}
const smsLisB = () => { return '*⭔ Jumlah Grup:*'}
const smsLisC = () => { return '*⋄ Gugus:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ Peserta:*'}

//info-estado.js
const smsCreApoyo = () => { return '✨ M E N D U K U N G'}
const smsEstado1 = () => { return 'NEGARA'}
const smsEstado2 = () => { return 'Versi'}
const smsEstado3 = () => { return 'Pengguna'}
const smsEstado4 = () => { return 'Terdaftar'}
const smsEstado5 = () => { return 'Obrolan yang Dilarang'}
const smsEstado6 = () => { return 'Pengguna yang Dilarang'}
const smsEstado7 = () => { return 'Aktif selama'}

//info-ping.js
const smsVl1 = () => { return 'KECEPATAN'}
const smsVl2 = () => { return 'S E R V E R*'}
const smsVl3 = () => { return '*🔵 RAM gratis:*'}
const smsVl4 = () => { return '*💻 Platform :*'}
const smsVl5 = () => { return '*📡 Tempat :*'}
const smsVl6 = () => { return '*Penggunaan Memori NodeJS*'}

//info-infobot.js
const smsBT1 = () => { return 'PENCIPTA'}
const smsBT2 = () => { return 'VERSI'}
const smsBT3 = () => { return 'AWALAN'}
const smsBT4 = () => { return 'CHAT PRIBADI'}
const smsBT5 = () => { return 'OBROLAN KELOMPOK'}
const smsBT6 = () => { return 'TOTAL CHAT'}
const smsBT7 = () => { return 'AKTIVITAS'}
const smsBT8 = () => { return 'PENGGUNA'}
const smsBT9 = () => { return 'SUB BOT AKTIF'}
const smsCreInfo = () => { return '🌟 I N F O R M A S I '}


//info-contacto.js
const smsContacto1 = () => { return ' Saya ' + packname + ' Bot WhatsApp yang didedikasikan untuk membantu apa pun yang Anda minta 😎'}
const smsContacto2 = () => { return 'Saya Pemilik ' + packname + ' jika Anda memiliki pertanyaan, Anda dapat memberi tahu saya ✌️'}
const smsContacto3 = () => { return '👑 Pemilik'}
const smsContacto4 = () => { return 'Kontak Resmi GataBot 🐈'}
const smsContacto5 = () => { return '🐣 Apa yang bisa saya bantu?'}
const smsContacto6 = () => { return 'Saya tidak punya surat 🙏'}
const smsContacto7 = () => { return '🌎 Global'}
const smsContacto8 = () => { return 'Akun ini Bot 👀'}

//ejemplos
const smsMalused = () => { return '⚡ *GUNAKAN PERINTAH SEPERTI INI:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ANDA HARUS MENGGUNAKAN PERINTAH SEPERTI DALAM CONTOH INI:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *BALAS PESAN DENGAN PERINTAH ATAU GUNAKAN CONTOH INI:*\n`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`TERJADI KESALAHAN YANG TIDAK TERDUGA.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`TIMBUL KETIDAKMURAN.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ADA YANG SALAH, LAPORAN PERINTAH INI MENGGUNAKAN:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'KUALIFIKASI'}
const smsYT2 = () => { return 'KETERANGAN'}
const smsYT3 = () => { return 'DURASI'}
const smsYT4 = () => { return 'TAMPILAN'}
const smsYT5 = () => { return 'LIHAT DI YOUTUBE'}
const smsYT6 = () => { return 'COBA NAMA LAIN'}

//descargas.js
const smsYTA1 = () => { return 'MENGUNDUH AUDIO... TUNGGU SEMENTARA'}

//descargas.js
const smsYTV1 = () => { return 'MENGUNDUH VIDEO...HARAP TUNGGU SEMENTARA'}

//descargas.js
const smsYTA2 = () => { return 'MENGUNDUH DOKUMEN AUDIO... TUNGGU SEMENTARA'}

//descargas.js
const smsYTV2 = () => { return 'MENGUNDUH DOKUMEN VIDEO...TUNGGU SEJENAK'}

//descargas.js
const smsTiktok = () => { return 'SEGERA AKAN PUNYA VIDEO TIKTOK'}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🪻 \`\`\`DILARANG MENYEMBUNYIKAN VIDEO\`\`\` 🪻`} 
const smsAntiView2 = () => { return `\n🪷 \`\`\`GAMBAR TERSEMBUNYI TERLARANG\`\`\` 🪷`} 

//buscadores.js
const smsOpenai1 = () => { return '*MEMBUAT PERTANYAAN, CONTOH:*'} 
const smsOpenai2 = () => { return 'Merekomendasikan 10 film aksi teratas'} 
const smsOpenai3 = () => { return 'Jelaskan apa itu persamaan kuadrat dan lakukan contoh sederhana dan gabungan.'} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*TANGGAPI STIKER UNTUK MENGUBAH KE GAMBAR*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*TANGGAPI GAMBAR UNTUK DIKONVERSI KE LINK*'} 
const smsConURL1 = () => { return '🔗 *TAUTAN*'} 
const smsConURL2 = () => { return '⚖️ *UKURAN*'} 
const smsConURL3 = () => { return '♻️ *KADALUARSA*'} 
const smsConURL4 = () => { return '🪄 *LINK PENDEK*'}
const smsConURLERR1 = () => { return 'Tak terbatas'} 
const smsConURLERR2 = () => { return 'Tidak dikenal'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + '*RESPONS TO MOTION STICKER UNTUK MENGUBAH KE VIDEO*'} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*STIKER HANYA BERGERAK UNTUK DIKONVERSI KE VIDEO*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*✓ DI SINI ANDA MEMILIKI VIDEO ANDA!!*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*BALAS KE VIDEO UNTUK MENGUBAH KE GIF DENGAN AUDIO*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + '*TANGGAPAN VIDEO. JENIS FILE YANG DIGUNAKAN TIDAK BENAR* '} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + '*GIF DENGAN AUDIO (Buka gif untuk mendengarkan audio)*'} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*BALAS KE VIDEO ATAU AUDIO UNTUK MENGUBAH KE CATATAN SUARA*'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + '*ADA YANG SALAH DENGAN VIDEONYA, COBA LAGI*'} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + '*ADA YANG SALAH DENGAN AUDIO, COBA LAGI*'} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + '*ADA YANG SALAH SAAT MENCOBA MENGUBAH AUDIO ANDA MENJADI MEMO SUARA*'}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + '*ADA YANG SALAH SAAT MENCOBA MENGUBAH VIDEO ANDA MENJADI MEMO SUARA*'} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '*BALAS PESAN TEKS ATAU KETIK KODE DAN TEKS UNTUK MENGUBAH KE AUDIO, CONTOH:*\n'}
const smsTradc2 = () => { return ' (kode) (teks)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + ' Teks ini akan menjadi audio\n\n'}
const smsTradc4 = () => { return '*ANDA DAPAT MENDAPATKAN KODE BAHASA YANG DIDUKUNG DI:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*❤️ Tunggu sebentar...*'}

//descargas.js
const smsMediaFr = () => { return '❕ *_LEBIH DARI 150 MG MUNGKIN TIDAK DIKIRIM_*'}
const smsImageGg = () => { return '*💞 HASIL DARI:*'}

//grupos.js
const smsGI1 = () => { return '*INFORMASI KELOMPOK*'}
const smsGI2 = () => { return '*ID GRUP*'}
const smsGI3 = () => { return '*NAMA GRUP*'}
const smsGI4 = () => { return '*DESKRIPSI KELOMPOK*'}
const smsGI5 = () => { return '*TIDAK ADA DESKRIPSI*'}
const smsGI6 = () => { return '*JUMLAH PENGGUNA*'}
const smsGI7 = () => { return '*Pengguna*'}
const smsGI8 = () => { return '*PENCIPTA GRUP*'}
const smsGI9 = () => { return '*ADMIN GRUP*'}

//grupos.js
const smsAddB3 = () => { return `*PEMBERITAHUAN UNTUK ADMIN*`}
const smsAddB4 = () => { return `*KEHADIRAN ADMIN*`}
const smsAddB5 = () => { return `*PESAN:*`}
const smsAddB6 = () => { return `Mohon tanya Admin.`}

//grupos-admins.js
const smsDemott = () => { return '*NOMORNYA INVALID, COBA LAGI BALAS PESAN ORANG ATAU GUNAKAN CONTOH SEPERTI INI:*\n'}
const smsDemott2 = () => { return '*SEKARANG DIA MEMILIKI KEKUATAN DI GRUP!!*'}
const smsDemott3 = () => { return '*TIDAK LAGI MEMILIKI KEKUATAN DI GRUP!!*'}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*SAMBUTAN GRUP TELAH DIATUR*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_TULIS PESAN SELAMAT DATANG_*\n*_OPSIONAL ANDA DAPAT MENGGUNAKAN APA DENGAN "@" UNTUK MENAMBAHKAN INFORMASI LEBIH LANJUT:_*\n\n*⚡ @user (Sebutkan kepada pengguna)*\n*⚡ @subject (Nama grup)*\n*⚡ @desc (Deskripsi grup)*\n\n*INGAT BAHWA "@" ADALAH OPSIONAL*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*PERPISAHAN GRUP TELAH DIKONFIGURASI*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_TULIS PESAN PERPISAHAN_*\n*_OPSIONAL ANDA DAPAT MENGGUNAKAN APA DENGAN "@" UNTUK MENAMBAHKAN INFORMASI LEBIH LANJUT:_*\n\n*⚡ @user (Sebutkan kepada pengguna)*\n\n*INGAT BAHWA "@" ADALAH OPSIONAL*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*DESKRIPSI GRUP TELAH DIKONFIGURASI*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*NAMA GRUP TELAH DITETAPKAN*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 TULIS NAMA GRUP BARU*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*NAMA GRUP TIDAK BOLEH MEMILIKI LEBIH DARI 25 KARAKTER*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeGB['smsAvisoMG']()}*RESPON GAMBAR UNTUK MENGUBAH FOTO GRUP*`}
const smsGrupoPP2 = () => { return `${lenguajeGB['smsAvisoEG']()}*🪄 GAMBAR GRUP DIPERBARUI!!*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*TAUTAN GROUP TELAH DIATUR ULANG*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*TAG ORANG ATAU BALAS PESAN ORANG YANG INGIN ANDA HAPUS*\n\n*EJEMPLO: `}
const smskick2 = () => { return `DIHAPUS 😼`}
const smskick3 = () => { return `SAYA TIDAK BISA MENGHAPUS PENCIPTA GRUP 😆🫵`}
const smskick4 = () => { return `TIDAK DI GRUP INI 👻`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeGB['smsAvisoEG']()}*SEMUA ORANG DAPAT MENULIS SEKARANG!!*`}
const smsGrupoClose = () => { return `${lenguajeGB['smsAvisoEG']()}*GROUP TERTUTUP, HANYA ADMIN YANG BISA MENULIS!!*`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ MEMANGGIL GRUP ⚡`}

//grupos.js
const smsInsGC1 = () => { return `*ID*`}
const smsInsGC2 = () => { return `*NAMA*`}
const smsInsGC3 = () => { return `*DIBUAT*`}
const smsInsGC4 = () => { return `*ADMIN UTAMA*`}
const smsInsGC5 = () => { return `*KETERANGAN*`}

//propietario(a.js
const smsResP1 = () => { return `_*🗂️ MENGIRIM BACKUP KE PRIBADI ANDA...*_`}
const smsResP2 = (date) => { return `*🗓️ Basis data:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*TAG SESEORANG ATAU BALAS PESAN PENGGUNA ATAU TULIS NOMOR YANG INGIN ANDA BALAS DARI PERINTAH*\n\n*CONTOH:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} TIDAK DAPAT DILARANG DENGAN PERINTAH INI* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *SAYA TIDAK BISA MELARKAN PEMILIK @${ownerNumber} DARI ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*TIDAK PERLU BAN LAGI @${number} YA SUDAH ADA* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*PENGGUNA BERHASIL DILARANG* 🙀`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} ANDA DILARANG OLEH @${usr} ANDA TIDAK DAPAT MENGGUNAKAN PERINTAH HINGGA SESEORANG MEMBALIKKAN BAN* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*KESALAHAN MUNCUL, MUNGKIN PENGGUNA TIDAK DALAM DATABASE SAYA MENCOBA MENULIS ${usedPrefix + command} ${number}*\n\`\`\`JIKA KESALAHAN TERUS LANGSUNG LAPORKAN PERINTAH INI\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*TAG SESEORANG ATAU BALAS PESAN PENGGUNA ATAU TULIS NOMOR YANG INGIN ANDA UNBAN DARI PERINTAH*\n\n*CONTOH:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*TIDAK PERLU UNBAN LAGI @${number} YA SUDAH ADA* 😊`}
const smsPropdesban3 = () => { return `${lenguajeGB['smsAvisoEG']()}*USER UNBANED BERHASIL* 💙`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} ANDA DIBUKA OLEH @${usr} ANDA SEKARANG DAPAT MENGGUNAKAN PERINTAH!!* 🪄`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*MUNCUL KESALAHAN, MUNGKIN PENGGUNA TIDAK ADA DI DATABASE SAYA COBA MENULIS ${usedPrefix + command} ${number}*\n\`\`\`JIKA KESALAHAN TERUS LANGSUNG LAPORKAN PERINTAH INI\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return '*ANDA SUDAH MENJADI ADMIN 😳🌹*'}
const smsAutoAdmin2 = () => { return '*SAYA TIDAK BISA MEMBUAT ADMIN 🥹🥀*'}

//owner-unbanchat.js
const smsUnbanCH1 = () => { return lenguajeGB['smsAvisoFG']() + '🗂️ *CHAT INI TIDAK TERDAFTAR DI DATABASE*'}
const smsUnbanCH2 = () => { return lenguajeGB.smsAvisoAG() + '🌹 *CHAT INI TIDAK DILARANG!!*'}
const smsUnbanCH3 = () => { return lenguajeGB['smsAvisoEG']() + '🪄 *CHAT INI TIDAK DIBANDINGKAN, ANDA SEKARANG DAPAT MENGGUNAKAN PERINTAH!!*'}

//propietario(a).js
const smsBioEd1 = () => { return `*TULIS TEKS YANG INGIN DITAMPILKAN DALAM BIOGRAFI* ${packname}`}
const smsBioEd2 = () => { return `*BIOGRAFI SANGAT PANJANG, SILAHKAN RINGKASAN INFORMASINYA*`}
const smsBioEd3 = () => { return '✅ ```BOT BIO INFO BERUBAH BERHASIL```'}

//propietario(a).js
const smsNameEd1 = () => { return `*TULIS TEKS YANG INGIN DITAMPILKAN SEBAGAI USERNAME DI* ${packname}`}
const smsNameEd2 = () => { return `*NAMA TERLALU PANJANG, MOHON RINGKASAN INFORMASINYA*`}
const smsNameEd3 = () => { return '✅ ```USERNAME BOT BERHASIL BERUBAH```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `*MERESPON GAMBAR MENGGUNAKAN PERINTAH ${usedPrefix + command} UNTUK MEMPERBARUI FOTO PROFIL BOT*`}
const smsFotoEd2 = () => { return '✅ ```FOTO PROFIL BOT BERHASIL DIUBAH```'}
const smsFotoEd3 = (usedPrefix, command) => { return `*INGAT UNTUK MERESPON GAMBAR MENGGUNAKAN PERINTAH ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return '✅ *CHAT INI DILARANG, ANDA TIDAK AKAN DAPAT MENGGUNAKAN PERINTAH HINGGA ANDA MEMBATALKAN CHAT*'}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeGB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeGB.smsAvisoAG() + `*TIDAK BISA ${comd} KEPADA PEMILIK @${ownerNumber}*`}
const smsBlockUn3 = (comd, useB) => { return `*TELAH ${comd} KE ${useB} BERHASIL*`}

//propietario(a).js
const smsRestarU1 = () => { return lenguajeGB['smsAvisoMG']() + '*LABEL PENGGUNA, TULIS NOMOR MEREKA, ATAU TANGGAPI PESAN UNTUK MULAI ULANG DATA*'}
const smsRestarU2 = () => { return lenguajeGB['smsAvisoFG']() + '*NOMOR YANG ANDA MASUKKAN TIDAK VALID UNTUK RESET DATA*'}
const smsRestarU3 = (number) => { return lenguajeGB['smsAvisoEG']() + `*SETEL ULANG KE @${number} DARI DATABASE*`}

//propietario(a).js
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*MASUKKAN LINK GRUP*\n*CONTOH:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*DIA TELAH BERGABUNG DENGAN GROUP ✅*`}

//info.js
const smsReportGB1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*MENULIS SEBUAH LAPORAN*\n*CONTOH:*\n\n*${usedPrefix + command}* _Perintah ${usedPrefix}play tidak bekerja._`}
const smsReportGB2 = () => { return lenguajeGB['smsAvisoFG']() + `✨ *MINIMAL 10 KARAKTER UNTUK MEMBUAT LAPORAN*`}
const smsReportGB3 = () => { return lenguajeGB['smsAvisoFG']() + `😼 *MAKSIMAL 1000 KARAKTER UNTUK MEMBUAT LAPORAN*`}
const smsReportGB4 = (urs, text) => { return `
💌 \`\`\`LAPORAN\`\`\` 💌
*⎔ Nomor:*
*» Wa.me/${urs}*

*⎔ Pengguna:*
*» @${urs}*

*⎔ Pesan:*
*» ${text}*`.trim()}
const smsReportGB5 = () => { return lenguajeGB['smsAvisoEG']() + `*LAPORAN TELAH DIKIRIM KE DEVELOPER, JIKA PERLU ANDA AKAN TANGGAPAN*`}

//buscadores.js
const smsGit1 = (usedPrefix, command) => { return `*MASUKKAN NAMA PENGGUNA GITHUB*\n*CONTOH*\n\n*${usedPrefix + command}* GataNina-Li`}
const smsGit2 = () => { return '*M E N C A R I... 🔎*'}
const smsGit3 = () => { return '🌻 *NAMA BELAKANG*'}
const smsGit4 = () => { return '🌼 *BIOGRAFI*'}
const smsGit5 = () => { return '🌸 *PERUSAHAAN*'}
const smsGit6 = () => { return '🌺 *SURAT*'}
const smsGit7 = () => { return '🪷 *BLOG*'}
const smsGit8 = () => { return '🌹 *REPOSITORI PUBLIK*'}
const smsGit9 = () => { return '🌷 *ESENCIALES PÚBLICAS*'}
const smsGit10 = () => { return '🪸 *PENGIKUT*'}
const smsGit11 = () => { return '🍁 *MENGIKUTI*'}
const smsGit12 = () => { return '☘️ *LOKASI*'}
const smsGit13 = () => { return '🌱 *PRIA*'}
const smsGit14 = () => { return 'Tidak ditemukan'}

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • ミ★ ${global.packname} ミ★ • • ⊹*\n\n*ღ ${global.packname} » _${global.vs}_*\n*ღ Versi dari JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNGSI MENJADI SUB BOT_* 🟢\n\n*➡️ Dengan ponsel atau PC lain, pindai QR ini untuk menjadi Sub Bot*\n\n*1️⃣ Pergi ke tiga titik di sudut kanan atas*\n*2️⃣ Buka opsi Perangkat yang Dipasangkan*\n*3️⃣ Pindai kode QR ini untuk masuk*\n\n📢 *¡Kode QR ini kedaluwarsa dalam 45 detik!*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*PERINTAH INI DINONAKTIFKAN OLEH PEMILIK SAYA*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *UNTUK JADI SUB BOT MASUK KE NOMOR UTAMA*\n*ღ Masukkan tautan berikut:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *KONEKSI TELAH DITUTUP SECARA TIDAK TERDUGA, KAMI AKAN MENCOBA UNTUK MENGHUBUNGKAN KEMBALI...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *KONEKSI TELAH DITUTUP, ANDA HARUS CONNECT MANUAL MENGGUNAKAN PERINTAH #jadibot DAN RESCAN QR CODE BARU${lenguajeGB['smsJBConexionTrue3']()}* *YANG DIKIRIM PERTAMA KALI SUB BOT DIBUAT*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *KONEKSI SUKSES!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *KONEKSI BERHASIL!!! ANDA DAPAT MENGHUBUNGKAN MENGGUNAKAN:*`}
const smsJBConexionTrue3 = () => { return `.`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *TERHUBUNG!! SILAKAN TUNGGU PESAN SEDANG DIMUAT...*\n\n♻️ *PILIHAN YANG TERSEDIA:*\n*» ${usedPrefix}pausesb _(Hentikan Fitur Sub Bot)_*\n*» ${usedPrefix}delsession _(Hapus semua jejak Sub Bot)_*\n*» ${usedPrefix}jadibot _(Kode QR baru atau Login jika Anda sudah menjadi Jadi Bot)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*GUNAKAN PERINTAH INI KE BOT UTAMA*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*AKU AKAN MERINDUKANMU ${global.packname} SELAMAT TINGGAL!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*ANDA TELAH KELUAR DAN MENGHAPUS SEMUA JEJAK*`}
const smsFoldErr = (usedPrefix, comd) => { return `*ANDA TIDAK MEMILIKI SESI, ANDA DAPAT MEMBUAT SATU MENGGUNAKAN:*\n*${usedPrefix}${comd}*\n\n*JIKA ANDA MEMILIKI (ID) ANDA DAPAT MELEWATKAN LANGKAH SEBELUMNYA MENGGUNAKAN:*\n*${usedPrefix}${comd}* \`\`\`(ID)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeGB['smsAvisoAG']() + `*JIKA ANDA BUKAN SUB BOT, HUBUNGI NOMOR UTAMA UNTUK MENJADI SUB BOT*`}
const smsJBCom2 = () => { return lenguajeGB['smsAvisoRG']() + `*ANDA TELAH MENUTUP/MENJEDA SESI.*`}

//jadibot
const smsJBCom3 = () => { return `😺 *DAFTAR SUBBOT*\n\n🌟 _ANDA DAPAT MEMINTA IZIN UNTUK MENGIZINKAN KELOMPOK ANDA MENGGUNAKAN BOT_\n\n\`\`\`SETIAP PENGGUNA SUB BOT MENGGUNAKAN FUNGSI SESUAI KEINGINANNYA, NOMOR UTAMA TIDAK BERTANGGUNG JAWAB ATAS PENGGUNAAN FUNGSI \`\`\``}
const smsJBCom4 = () => { return "*TIDAK ADA SUB BOT YANG TERSEDIA. PERIKSA NANTI.*"}

//propietario(a).js
const smsJBDifu1 = () => { return "*📣 PENYIARAN UNTUK SUB BOT 📣*\n\n"}
const smsJBDifu2 = (numUser, difuUser, tolUser) => { return `*DISEMINASI YANG SUKSES UNTUK ${numUser} SUB BOTS*\n\n${difuUser}\n\n*PENGIRIMAN SELESAI DI ${tolUser} DETIK*`}

//propietario(a).js
const smsChatGP1 = () => { return "*MENGIRIM PESAN, TUNGGU SEMENTARA...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *RILIS RESMI* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *PESAN DIKIRIM KE ${totalGP} GUGUS*`}

//propietario(a)-getplugin.js
const smsPlugin1 = (usedPrefix, command) => { return `*HARAP TULIS NAMA FILE ATAU PERINTAH KIRIM KODE*\n*CONTOH*\n\n*${usedPrefix + command} menu-menu.js*\n*${usedPrefix + command} menu*`}
const smsPlugin2 = (contenidoArchivo, contenido) => { return `\`\`\`KODE FILE ${contenidoArchivo}\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${contenido.toString()}`}
const smsPlugin3 = (text) => { return `*KODE UNTUK '${text}' ITU TIDAK DITEMUKAN*`}
const smsPlugin4 = (filename, fileContent) => { return `\`\`\`KODE FILE ${filename}.js\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${fileContent.toString()}`}
const smsPlugin5 = (matchingFile, err) => { return `KESALAHAN SAAT MENGIRIM FILE '${matchingFile}': ${err.message}`}
const smsPlugin6 = (matchingFile) => { return `TERJADI KESALAHAN SAAT MENGIRIM FILE '${matchingFile}'`}

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n_😻 DIA TELAH BERGABUNG DENGAN GROUP_\n\n🫶 *DITAMBAHKAN OLEH: @${user}*`}

//propietario(a)-leavegc.js
const smsLeave = () => { return `${packname} *TINGGALKAN GRUP, SANGAT SENANG BERADA DI SINI 🌸*`}

//rpg-perfil.js
const smsPerfil0 = () => { return `🌸 *P R O F I L* 🌸`}
const smsPerfil1 = () => { return `PENGGUNA`}
const smsPerfil2 = () => { return `NAMA`}
const smsPerfil3 = () => { return `USIA`}
const smsPerfil4 = () => { return `NOMOR`}
const smsPerfil5 = () => { return `REGISTRASI ID`}

//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}*ANDA SUDAH TERDAFTAR!!*\n*JIKA ANDA INGIN MEMBATALKAN PENDAFTARAN ANDA GUNAKAN PERINTAH INI*\n*${usedPrefix}unreg nomor seri*\n\n*JIKA ANDA TIDAK INGAT NOMOR SERI ANDA GUNAKAN PERINTAH INI*\n*${usedPrefix}myns`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoIIG']()}*MASUKKAN NAMA DAN UMUR ANDA UNTUK DAFTAR*\n*CONTOH*\n\n${usedPrefix + command} GataBot.18`}
const smsVerify2 = () => { return `${lenguajeGB['smsAvisoAG']()}*MASUKKAN NAMA ANDA*`}
const smsVerify3 = () => { return `${lenguajeGB['smsAvisoAG']()}*MASUKKAN UMUR ANDA*`}
const smsVerify4 = () => { return `${lenguajeGB['smsAvisoAG']()}*ANDA SANGAT TUA*`}
const smsVerify5 = () => { return `${lenguajeGB['smsAvisoAG']()}*ANDA SANGAT MINOR*`}
const smsVerify6 = () => { return `${lenguajeGB['smsAvisoAG']()}*TULIS NAMA YANG LEBIH PENDEK*`}
const smsVerify7 = () => { return `✅ *M E M E R I K S A* ✅`}
const smsVerify8 = (usedPrefix) => { return `*ID PENDAFTARAN ANDA AKAN DIGUNAKAN JIKA ANDA INGIN MENGUBAH ATAU MENGHAPUS PENDAFTARAN MENGGUNAKAN ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `LENCANA VERIFIKASI`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `*MENANGGAPI VIDEO, GAMBAR, ATAU TULIS ${usedPrefix + command} BERIKUTNYA DENGAN LINK YANG BERAKHIR DI .jpg .jpeg .gif .png*`}
const smsSticker2 = () => { return `*VIDEO TIDAK HARUS BERAKHIR LEBIH DARI 10 DETIK*`}
const smsSticker3 = (usedPrefix, command) => { return `*LINK TIDAK VALID, HARUS DIAKHIRKAN DI .jpg .jpeg .gif .png CONTOH:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*MASUKKAN ID PENDAFTARAN ANDA. JIKA ANDA TIDAK TAHU YANG MANA, GUNAKAN PERINTAH ${usedPrefix}${idreg}*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*ID PENDAFTARAN ANDA TIDAK BENAR. GUNAKAN PERINTAH ${usedPrefix}${idreg} UNTUK MENDAPATKAN ID ANDA*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `*ANDA MEMBATALKAN PENDAFTARAN DARI* ${packname}\n\n*ANDA DAPAT GUNAKAN ${usedPrefix}${regbot} UNTUK MELAKUKAN PENDAFTARAN BARU*`}

//rpg-myns.js
const smsIDserie = () => { return `⬇️ *PENDAFTARAN KTP* ⬇️`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *PESAN TERKIRIM:*`}
const smsBCbot2 = () => { return `PRIBADI`}
const smsBCbot3 = () => { return `GUGUS`}
const smsBCbot4 = () => { return `TOTAL`}
const smsBCbot5 = () => { return `JUMLAH WAKTU PENGIRIMAN:`}
const smsBCbot6 = () => { return `MEREKA TIDAK DIKIRIM KE SEMUA CHAT PRIBADI UNTUK MENGHINDARI JENUH`}
const smsBCbot7 = () => { return `✅ *RILIS RESMI* ✅`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*BALAS PESAN ATAU TULIS PESAN MENGGUNAKAN ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*MENGIRIM PESAN RESMI, TUNGGU SEMENTARA...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *PESAN DIKIRIM KE ${totalPri} CHAT PRIBADI*\n\n*JUMLAH WAKTU PENGIRIMAN: ${time}*\n${totalPri >= 500000 ? '\n*MEREKA TIDAK DIKIRIM KE SEMUA CHAT UNTUK MENGHINDARI JATUH*' : ''}`}

//reiniciar 
const smsreiniciar = () => { return `*MENGATUR ULANG 🚀🚀🚀*\n*SILAKAN TUNGGU BEBERAPA SAAT*`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *PENGATURAN* ⚙️`}
const smsConfi2bot = () => { return `MEMERINTAH`}
const smsConfi3bot = () => { return `NEGARA`}
const smsConfi4bot = () => { return `UNTUK`}
const smsConfi5bot = () => { return `DIAKTIFKAN`}
const smsConfi6bot = () => { return `DENGAN DISABILITAS`}
const smsConfi7bot = () => { return `CHAT INI`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*SEBAGAI ADMIN TIDAK AKAN DIHAPUS*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*LINK WHATSAPP TERDETEKSI!!*\n\n*ANDA AKAN DIHAPUS*`}
const smsWaMismoEnlace = () => { return '*LINK INI DARI GRUP INI, HANYA UNTUK ITU, TIDAK AKAN DIHAPUS*'}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}*TAUTAN YANG BERISI HTTPS TERDETEKSI!!*\n\n*ANDA AKAN DIHAPUS*`}

//_allantilink.js 
const smsTextoYT = () => { return '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ MENONAKTIFKAN'} 
const smsEncender = () => { return '✅ MENGAKTIFKAN'} 
const smsEnlaceTik = () => { return `*LINK TIKTOK TERDETEKSI!!*\n\n*ANDA AKAN DIHAPUS*`}
const smsEnlaceYt = () => { return `*LINK YOUTUBE TERDETEKSI!!*\n\n*ANDA AKAN DIHAPUS*`}
const smsEnlaceTel = () => { return `*TAUTAN TELEGRAM TERDETEKSI!!*\n\n*ANDA AKAN DIHAPUS*`}
const smsEnlaceFb = () => { return `*LINK FACEBOOK TERDETEKSI!!*\n\n*ANDA AKAN DIHAPUS*`}
const smsEnlaceIg = () => { return `*LINK INSTAGRAM TERDETEKSI!!*\n\n*ANDA AKAN DIHAPUS*`}
const smsEnlaceTw = () => { return `*TAUTAN TWITTER TERDETEKSI!!*\n\n*ANDA AKAN DIHAPUS*`}
const smsAllAdmin = () => { return `*SAYA HARUS MENJADI ADMIN UNTUK MENGHAPUS PENGGUNA*`}
const smsSoloOwner = () => { return `*PEMILIK SAYA HARUS MENGAKTIFKAN FUNGSI PEMBATASAN*`}

//config-on y off.js
const smsParaAdmins = () => { return `UNTUK ADMIN DAN PENCIPTA: GRUP`}
const smsParaAdYOw = () => { return `UNTUK ADMIN DAN CREATOR : CHAT`}
const smsParaOw = () => { return `UNTUK KREATOR : CHAT`}
const smsNoGg = () => { return ` | ⚠️`}

//_anti-internacional.js
const smsInt1 = () => { return `NOMOR INI`}
const smsInt2 = () => { return `ANDA TIDAK DIIZINKAN DI GRUP INI!!`}

//handler.js
const smsCont1 = () => { return `*🥀 PERINTAH GAGAL 🥀*`}
const smsCont2 = () => { return `*⛈️ PLUGIN:*`}
const smsCont3 = () => { return `*⛈️ PENGGUNA:*`}
const smsCont4 = () => { return `*⛈️ MEMERINTAH:*`}
const smsCont5 = () => { return `*⛈️ KESALAHAN:*`}
const smsCont6 = () => { return `*✨ LAPORAN PESAN INI MENGGUNAKAN PERINTAH #report MENYELESAIKAN*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*TIDAK MEMILIKI BERLIAN!! 💎 ANDA BISA PERGI KE TOKO DENGAN PERINTAH*`}
const smsCont8 = () => { return ` *BERLIAN 💎 DIGUNAKAN*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*MEMBUTUHKAN TINGKAT ➡️*`}
const smsCont10 = () => { return `*UNTUK MENGGUNAKAN PERINTAH INI. TINGKAT ANDA SAAT INI ADALAH ➡️*`}
const smsCont11 = () => { return `*PERBARUI DENGAN PERINTAH*`}
const smsAntiEliminar = (userDelete) => { return `♻️ *ANTI HAPUS* ♻️\n*@${userDelete} DIHAPUS PESAN!!*\n\n\`\`\`PENGIRIMAN PESAN DIHAPUS...\`\`\``}
const smsHandler = () => { return "BERHASIL MEMPERBARUI 'handler.js'"} 
const smsHandlerLlamar = (tagUserL, llamadaVideo) => { return `*HALO @${tagUserL} ${llamadaVideo ? 'PANGGILAN VIDEO 📲' : 'PANGGILAN 📞'} DILARANG DALAM CHAT INI. ANDA AKAN DIBLOKIR*`} 

//audio-efectos-edit.js
const smsControlAudio1 = () => { return '*MERESPONS AUDIO ATAU CATATAN SUARA*'}
const smsControlAudio2 = (usedPrefix, command) => { return `*PARAMETER INI HANYA MENGAKUI ANGKA TULIS ${usedPrefix + command} UNTUK MENGETAHUI PARAMETER*`}
const smsControlAudio3 = () => { return `*KESALAHAN MUNCUL SAYA MENCOBA UNTUK MENGUBAH NILAI PARAMETER DAN INGAT UNTUK MENERAPKAN FILTER YANG HARUS MERESPON KE AUDIO ATAU CATATAN SUARA*`}
const smsControlAudio4 = () => { return `*MENANGGAPI AUDIO ATAU CATATAN SUARA UNTUK MENERAPKAN FILTER*`}
const smsAudioEdit1 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *20* | MAX: *20000*
⎔ Standar: *94*
1️⃣👉 _Frekuensi tengah filter dalam Hz_

⎔ *(Parameter wajib)*
⎔ MIN: *-30* | MAX: *30*
⎔ Standar: *25*
2️⃣👉 _Filter keuntungan dalam dB_

⎔ *(Parameter opsional)*
⎔ PILIHAN: *"q", "h", "o"*
⎔ Standar: *o*
3️⃣👉 _Filter Jenis Bandwidth_
*q:* Rasio kualitas, frekuensi yang lebih spesifik.
*h:* Bandwidth konstan, kesetaraan di semua frekuensi.
*o:* Bandwidth dalam oktaf, akan menggandakan atau membagi dua setiap oktaf (setiap kali frekuensi digandakan atau dibelah dua).

⎔ *(Parameter opsional)*
⎔ MIN: *2* | MAX: *500*
⎔ Standar: *5*
4️⃣👉 _Setel bandwidth filter ke nilai X jika Anda menggunakan [q, h, o]_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ JIKA ANDA TIDAK MENAMBAHKAN PARAMETER OPSIONAL ATAU MELEBIHI BATAS MEREKA, PARAMETER AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MERESPONS AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit2 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *20* | MAX: *20000*
⎔ Standar: *15*
1️⃣👉 _Frekuensi getaran dalam Hz_

⎔ *(Parameter wajib)*
⎔ MIN: *0* | MAX: *100*
⎔ Standar: *0.5*
2️⃣👉 _Kedalaman vibrato, nilai akhirnya akan dalam desimal jika nilainya lebih besar dari 95 maka akan menjadi bilangan bulat_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*❕ SEMUA PARAMETER ADALAH WAJIB, JIKA ANDA MELEBIHI BATAS MEREKA, MEREKA AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MERESPONS AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit3 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *8* | MAX: *32*
⎔ Standar: *16*
1️⃣👉 _Tingkat kuantisasi sampel audio dalam bit_

⎔ *(Parameter wajib)*
⎔ MIN: *500* | MAX: *48000*
⎔ Standar: *44100*
2️⃣👉 _Berapa kali per detik audio diambil sampelnya_

⎔ *(Parameter opsional)*
⎔ MIN: *0* | MAX: *100*
⎔ Standar: *0.5*
3️⃣👉 _Tingkat campuran antara audio asli dan audio dengan efek penghancur (Nilai akhirnya akan menjadi desimal jika kurang dari 95)_

⎔ *(Parameter opsional)*
⎔ MIN: *0* | MAX: *100*
⎔ Standar: *0.5*
4️⃣👉 _Jumlah pencampuran antara audio asli dan audio yang diacak (Nilai akhirnya akan berupa bilangan bulat jika lebih besar dari 95)_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*❕ JIKA ANDA TIDAK MENAMBAHKAN PARAMETER OPSIONAL ATAU MELEBIHI BATAS MEREKA, PARAMETER AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MERESPONS AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit4 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *1* | MAX: *15*
⎔ Standar: *4*
1️⃣👉 _Input audio, harus disesuaikan dengan kecepatan playback yang diinginkan, melibatkan perubahan durasi audio_

⎔ *(Parameter wajib)*
⎔ MIN: *2000* | MAX: *2550000*
⎔ Standar: *48000*
2️⃣👉 _Output sampling audio dalam Hz, atur sample rate yang diinginkan_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*❕ SEMUA PARAMETER ADALAH WAJIB, JIKA ANDA MELEBIHI BATAS MEREKA, INI AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MENANGGAPI AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit5 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *-1024* | MAX: *1024*
⎔ Standar: *6*
1️⃣👉 _Penguat Audio dalam dB, nilai negatif menurunkan suara audio dan nilai positif meningkatkan suara audio_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*❕ PARAMETER WAJIB, JIKA MELEBIHI BATASNYA, INI AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MERESPON AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit6 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *1* | MAX: *100*
⎔ Standar: *1.63*
1️⃣👉 _Mengubah kecepatan pemutaran file audio_

⎔ *(Parameter wajib)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Standar: *44100*
2️⃣👉 _Mengubah laju sampel file audio_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ SEMUA PARAMETER ADALAH WAJIB, JIKA ANDA MELEBIHI BATAS MEREKA, INI AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MENANGGAPI AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit7 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *1* | MAX: *300*
⎔ Standar: *1.3*
1️⃣👉 _Mengubah kecepatan pemutaran file audio_

⎔ *(Parameter wajib)*
⎔ MIN: *4000* | MAX: *4800000*
⎔ Standar: *22100*
2️⃣👉 _Mengubah laju sampel file audio_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ SEMUA PARAMETER ADALAH WAJIB, JIKA ANDA MELEBIHI BATAS MEREKA, INI AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MENANGGAPI AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit8 = (usedPrefix, command) => { return `*_PUNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *1* | MAX: *150*
⎔ Standar: *1.06*
1️⃣👉 _Mengubah kecepatan pemutaran file audio_

⎔ *(Parameter wajib)*
⎔ MIN: *1000* | MAX: *550000*
⎔ Standar: *44100*
2️⃣👉 _Mengubah laju sampel file audio_

⎔ *(Parameter opsional)*
⎔ MIN: *1* | MAX: *7*
⎔ Standar: *1.25*
3️⃣👉 _Mengatur frekuensi yang dikalikan ke nilai yang diinginkan_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*❕ JIKA ANDA TIDAK MENAMBAHKAN PARAMETER OPSIONAL ATAU MELAMPAUI BATASNYA, INI AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MERESPONS AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit9 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *32* | MAX: *16384*
⎔ Standar: *512*
1️⃣👉 _Ukuran fragmen sinyal audio yang diproses setiap saat_

⎔ *(Parameter wajib)*
⎔ MIN: *1* | MAX: *100*
⎔ Standar: *0.75*
2️⃣👉 _Jumlah tumpang tindih yang digunakan antara jendela yang berurutan Membagi sinyal audio menjadi segmen atau jendela untuk menerapkan pemrosesan tertentu padanya_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ SEMUA PARAMETER ADALAH WAJIB, JIKA ANDA MELEBIHI BATAS MEREKA, INI AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MENANGGAPI AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit10 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *0.5* | MAX: *12*
⎔ Standar: *0.7*
1️⃣👉 _Kecepatan pemutaran audio. Nilai 1,0 adalah kecepatan normal, sedangkan nilai lebih besar dari 1,0 mempercepat pemutaran, dan nilai kurang dari 1,0 memperlambatnya.._

⎔ *(Parameter wajib)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Standar: *44100*
2️⃣👉 _Laju sampel audio, menunjukkan seberapa sering suara diambil sampelnya. Semakin tinggi sample rate, semakin tinggi kualitas audionya_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ SEMUA PARAMETER ADALAH WAJIB, JIKA ANDA MELEBIHI BATAS MEREKA, INI AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MENANGGAPI AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit11 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *1* | MAX: *5*
⎔ Standar: *2*
1️⃣👉 _Mode motion tween digunakan oleh filter._

⎔ *(Parameter wajib)*
⎔ MIN: *1* | MAX: *4*
⎔ Standar: *2*
2️⃣👉 _Mode kompensasi gerak yang digunakan oleh filter._

⎔ *(Parameter opsional)*
⎔ MIN: *0* | MAX: *10*
⎔ Standar: *1*
3️⃣👉 _Penggunaan interpolasi vertikal subpiksel_

⎔ *(Parameter opsional)*
⎔ MIN: *1* | MAX: *240*
⎔ Standar: *120*
4️⃣👉 _Mengontrol laju bingkai keluaran audio_

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*❕ JIKA ANDA TIDAK MENAMBAHKAN PARAMETER OPSIONAL ATAU MELEBIHI BATAS MEREKA, PARAMETER AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MERESPONS AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit12 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *0.5* | MAX: *10*
⎔ Standar: *0.5*
1️⃣👉 _Menyesuaikan kecepatan pemutaran audio tanpa memengaruhi nada._

⎔ *(Parameter wajib)*
⎔ MIN: *2000* | MAX: *260000*
⎔ Standar: *65100*
2️⃣👉 _Sesuaikan laju sampel audio, yaitu jumlah sampel audio per detik._

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 3 9483
${usedPrefix + command} 0.8 3849

*❕ SEMUA PARAMETER ADALAH WAJIB, JIKA ANDA MELEBIHI BATAS MEREKA, INI AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MENANGGAPI AUDIO ATAU CATATAN SUARA*`}
const smsAudioEdit13 = (usedPrefix, command) => { return `*_UNTUK MEMBUAT MODIFIKASI AUDIO ANDA YANG BENAR, GUNAKAN PARAMETER INI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parameter wajib)*
⎔ MIN: *0.001* | MAX: *5*
⎔ Standar: *0.125*
1️⃣👉 _Frekuensi gelombang pulsa dalam hertz (Hz)_

⎔ *(Parameter wajib)*
⎔ MIN: *0.01* | MAX: *1*
⎔ Standar: *1*
2️⃣👉 _Menyesuaikan jumlah modulasi yang diterapkan ke audio._

*»» CONTOH PENGGUNAAN:*
${usedPrefix + command} 0.555 0.50
${usedPrefix + command} 1 0.07

*❕ SEMUA PARAMETER ADALAH WAJIB, JIKA ANDA MELEBIHI BATAS MEREKA, INI AKAN DITAMBAHKAN KE NILAI DEFAULT, INGAT UNTUK MENANGGAPI AUDIO ATAU CATATAN SUARA*`}
const smsControlAudio5 = () => { return `NILAI-NILAI YANG DITENTUKAN:`}

//config.js
const smsConfigBot = () => { return "DIPERBARUI 'config.js' BERHASIL"}

//menu-menu.js
const smsMenuTotal1 = () => { return "INFORMASI MENU"}
const smsMenuTotal2 = () => { return "JADIBOT"}
const smsMenuTotal3 = () => { return "PENCARI / IA"}
const smsMenuTotal4 = () => { return "UNDUHAN"}
const smsMenuTotal5 = () => { return "KONVERTER"}
const smsMenuTotal6 = () => { return "KELOMPOK ~ SEMUA"}
const smsMenuTotal7 = () => { return "GRUP ~ ADMIN"}
const smsMenuTotal8 = () => { return "EDIT EFEK AUDIO"}
const smsMenuTotal9 = () => { return "EFEK AUDIO"}
const smsMenuTotal10 = () => { return "PENGATURAN"}
const smsMenuTotal11 = () => { return "UNTUK DIVERIFIKASI"}
const smsMenuTotal12 = () => { return "PEMILIK"}

//Error2
const smsMensError1 = () => { return `❕ PERINTAH LAPORAN ❕`} 
const smsMensError2 = () => { return `Perintah berikut gagal`} 

//config.js
const smsMeWait = () => { return '*⌛ TUNGGU SEBENTAR...*'} 

//buscadores.js
const smsytserh1 = () => { return 'KUALIFIKASI'} 
const smsytserh2 = () => { return 'TAUTAN'} 
const smsytserh3 = () => { return 'DURASI'} 
const smsytserh4 = () => { return 'DIUNGGAH'} 
const smsytserh5 = () => { return 'TAMPILAN'} 

//descargas.js
const smsIAimage = () => { return '💻 *GAMBAR DIBUAT DENGAN AI/DALL-E* ✨'} 
const smsIAimage2 = () => { return 'Seekor kucing ungu dengan biru muda berada di Jupiter, menyinari kosmos dengan pesonanya dengan efek minimalis.'} 
const smsIAimage3 = () => { return '💻 *GAMBAR DIBUAT DENGAN AI/Midjourney* ✨'} 
const smsIAimage4 = () => { return 'Seekor bayi singa, berlari melewati genangan air, tercermin dalam genangan air, fotografi.'} 

//descargas.js
const smsyFBvid1 = () => { return '*BUKAN LINK YANG VALID, INGAT GUNAKAN LINK VIDEO FACEBOOK*'} 
const smsyFBvid2 = () => { return 'UNDUH VIDEO GRUP FACEBOOK 💚'} 
const smsyFBvid3 = () => { return 'VIDEO REELS FACEBOOK YANG DIUNDUH 💚'} 
const smsyFBvid4 = () => { return 'VIDEO CERITA FACEBOOK YANG DIUNDUH 💚'} 
const smsyFBvid5 = () => { return 'UNDUHAN VIDEO POSTINGAN FACEBOOK 💚'} 
const smsyFBvid6 = () => { return 'VIDEO FACEBOOK YANG DIUNDUH 💚'}

//grupos-admin.js
const smsInvite1 = () => { return '*HANYA DIGIT YANG DITERIMA, TIDAK ADA HURUF*'} 
const smsInvite2 = (usedPrefix, command, bot) => { return `*MASUKKAN JUMLAH LENGKAP PENGGUNA YANG INGIN DIUNDANG KE GRUP*\n*CONTOH:*\n\n*${usedPrefix + command}* +${bot}`} 
const smsInvite3 = (NumeroUser, user, groupMetadata, link) => { return `✨ ¡Halo! *@${NumeroUser}* Saya ${packname}, bot untuk whatsapp. Tampaknya *@${user}* mengundang Anda ke Grup ${groupMetadata.subject}\n\n\`\`\`¡Kami berharap dapat melihat Anda di grup!\`\`\`\n\n*${link}*`} 
const smsInvite4 = (NumeroUser) => { return `*UNDANGAN DIKIRIM KE PRIBADI DARI @${NumeroUser}*`} 

//descargas.js
const smsSP0 = (usedPrefix) => { return `🌸 _ANDA DAPAT GUNAKAN *${usedPrefix}spotifysearch* UNTUK MENDAPATKAN LINK LAGU KHUSUS_`} 
const smsSP1 = () => { return '✨ *KUALIFIKASI:*'} 
const smsSP2 = () => { return '🗣️ *ARTIS:*'} 
const smsSP3 = () => { return '🌐 *URL*:'} 
const smsSP4 = () => { return '♻️ *UNDUH URL:*'} 
const smsSP5 = () => { return '🎶 *MENGIRIM LAGU...*'} 
const smsSP6 = () => { return `${lenguajeGB['smsAvisoFG']()}*TIDAK ADA HASIL YANG DITEMUKAN. COBA NAMA ATAU LINK LAIN*`} 

//_autodetec.js
const smsAutodetec1 = (inf, usuario, m) => { return `${inf}*» ${usuario}*\n*NAMA GRUP TELAH BERUBAH*\n\n🔰 *SEKARANG KELOMPOK DIPANGGIL:*\n*${m.messageStubParameters[0]}*`} 
const smsAutodetec2 = (inf, usuario, groupMetadata) => { return `${inf}*» ${usuario}*\n*GAMBAR TELAH BERUBAH:*\n*${groupMetadata.subject}*`} 
const smsAutodetec3 = (inf, usuario, m, groupMetadata) => { return `${inf}*» ${usuario}*\n*TELAH MENGIZINKAN ITU ${m.messageStubParameters[0] == 'on' ? 'HANYA ADMIN' : 'SEMUA'} BISA KONFIGURASI ${groupMetadata.subject}*`} 
const smsAutodetec4 = (inf, groupMetadata, usuario) => { return `${inf}*LINK DARI ${groupMetadata.subject} TELAH DI-RESET OLEH:*\n*» ${usuario}*`} 
const smsAutodetec5 = (inf, groupMetadata, m, usuario) => { return `${inf}*${groupMetadata.subject} TELAH ${m.messageStubParameters[0] == 'on' ? 'TERTUTUP 🔒' : 'MEMBUKA 🔓'} OLEH ${usuario}*\n\n💬 *SEKARANG ${m.messageStubParameters[0] == 'on' ? 'HANYA ADMIN' : 'SEMUA'} ANDA BISA KIRIM PESAN*`} 
const smsAutodetec6 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} DIA SEKARANG ADMIN DI*\n*» ${groupMetadata.subject}*\n\n✨ *TINDAKAN YANG DILAKUKAN OLEH:*\n*» ${usuario}*`} 
const smsAutodetec7 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} BERHENTI MENJADI ADMIN DI*\n*» ${groupMetadata.subject}*\n\n✨ *TINDAKAN YANG DILAKUKAN OLEH:*\n*» ${usuario}*`} 


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
