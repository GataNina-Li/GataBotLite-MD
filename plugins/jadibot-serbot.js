/*⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic >> https://github.com/ferhacks

El codigo de este archivo fue parchado por:
- ReyEndymion >> https://github.com/ReyEndymion
- BrunoSobrino >> https://github.com/BrunoSobrino

Contenido adaptado por:
- GataNina-Li >> https://github.com/GataNina-Li
- elrebelde21 >> https://github.com/elrebelde21
*/

const {
  useMultiFileAuthState,
  DisconnectReason,
  makeCacheableSignalKeyStore,
  fetchLatestBaileysVersion
} = await import("@whiskeysockets/baileys");
import _0x36edb8 from 'qrcode';
import _0x28411e from 'node-cache';
import _0x2a39f4 from 'fs';
import 'path';
import _0x3c4631 from 'pino';
import 'util';
import 'ws';
const {
  child,
  spawn,
  exec
} = await import("child_process");
import { makeWASocket } from '../lib/simple.js';
import { channel } from 'diagnostics_channel';
if (global.conns instanceof Array) {
  console.log();
} else {
  global.conns = [];
}
let handler = async (_0x229076, {
  conn: _0x3b0d31,
  args: _0x42414c,
  usedPrefix: _0x3dccaa,
  command: _0x509ed3,
  isOwner: _0x49d59e
}) => {

const _0x4ea9f2 = _0x42414c[0x0] && /code/.test(_0x42414c[0x0].trim()) ? true : !!(_0x42414c[0x1] && /code/.test(_0x42414c[0x1].trim()));
let _0x125157;
let _0x214d0e;
let _0x41d791;
let _0xea6198 = _0x229076.mentionedJid && _0x229076.mentionedJid[0x0] ? _0x229076.mentionedJid[0x0] : _0x229076.fromMe ? _0x3b0d31.user.jid : _0x229076.sender;
let _0x3b9930 = '' + _0xea6198.split`@`[0x0];
if (_0x4ea9f2) {
  _0x42414c[0x0] = _0x42414c[0x0].replace(/^code$/, '').trim();
  if (_0x42414c[0x1]) {
    _0x42414c[0x1] = _0x42414c[0x1].replace(/^code$/, '').trim();
  }
  if (_0x42414c[0x0] == '') {
    _0x42414c[0x0] = undefined;
  }
}
/*  const _0x4ea9f2 = _0x42414c[0x0] && /(--code|code)/.test(_0x42414c[0x0].trim()) ? true : !!(_0x42414c[0x1] && /(--code|code)/.test(_0x42414c[0x1].trim()));
  let _0x125157;
  let _0x214d0e;
  let _0x41d791;
  let _0xea6198 = _0x229076.mentionedJid && _0x229076.mentionedJid[0x0] ? _0x229076.mentionedJid[0x0] : _0x229076.fromMe ? _0x3b0d31.user.jid : _0x229076.sender;
  let _0x3b9930 = '' + _0xea6198.split`@`[0x0];
  if (_0x4ea9f2) {
    _0x42414c[0x0] = _0x42414c[0x0].replace(/^--code$|^code$/, '').trim();
    if (_0x42414c[0x1]) {
      _0x42414c[0x1] = _0x42414c[0x1].replace(/^--code$|^code$/, '').trim();
    }
    if (_0x42414c[0x0] == '') {
      _0x42414c[0x0] = undefined;
    }
  } */

   let channel = '';
  if (!_0x2a39f4.existsSync('./' + jadi + '/' + _0x3b9930)) {
    _0x2a39f4.mkdirSync('./' + jadi + '/' + _0x3b9930, {
      'recursive': true
    });
  }
  if (_0x42414c[0x0] && _0x42414c[0x0] != undefined) {
    _0x2a39f4.writeFileSync('./' + jadi + '/' + _0x3b9930 + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x42414c[0x0], "base64").toString("utf-8")), null, "\t"));
  } else {
    '';
  }
  if (_0x2a39f4.existsSync('./' + jadi + '/' + _0x3b9930 + "/creds.json")) {
    let _0x294b90 = JSON.parse(_0x2a39f4.readFileSync('./' + jadi + '/' + _0x3b9930 + "/creds.json"));
    if (_0x294b90) {
      if (_0x294b90.registered = false) {
        _0x2a39f4.unlinkSync('./' + jadi + '/' + _0x3b9930 + "/creds.json");
      }
    }
  }
  const _0x5e8ff0 = Buffer.from("Y2QgcGx1Z2lucyA7IG1kNXN1bSBpbmZvLWRvbmFyLmpzIF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz", 'base64');
  exec(_0x5e8ff0.toString("utf-8"), async (_0x467fe3, _0x4c69b8, _0x301f58) => {
    const _0x261df0 = Buffer.from("", "base64");
    async function _0x5c4c72() {
      let _0x5e53b8 = _0x229076.mentionedJid && _0x229076.mentionedJid[0x0] ? _0x229076.mentionedJid[0x0] : _0x229076.fromMe ? _0x3b0d31.user.jid : _0x229076.sender;
      let _0x3596f8 = '' + _0x5e53b8.split`@`[0x0];
      if (!_0x2a39f4.existsSync('./' + jadi + '/' + _0x3596f8)) {
        _0x2a39f4.mkdirSync('./' + jadi + '/' + _0x3596f8, {
          'recursive': true
        });
      }
      if (_0x42414c[0x0]) {
        _0x2a39f4.writeFileSync('./' + jadi + '/' + _0x3596f8 + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(_0x42414c[0x0], "base64").toString("utf-8")), null, "\t"));
      } else {
        '';
      }
      let {
        version: _0xa15245,
        isLatest: _0x5122f5
      } = await fetchLatestBaileysVersion();
      const _0x5317af = _0x4c7c8e => {};
      const _0x36b413 = new _0x28411e();
      const {
        state: _0x21e9f6,
        saveState: _0x1d7e73,
        saveCreds: _0x2c75bf
      } = await useMultiFileAuthState('./' + jadi + '/' + _0x3596f8);
      const _0x5cce4d = {
        'printQRInTerminal': false,
        'logger': _0x3c4631({
          'level': 'silent'
        }),
        'auth': {
          'creds': _0x21e9f6.creds,
          'keys': makeCacheableSignalKeyStore(_0x21e9f6.keys, _0x3c4631({
            'level': "silent"
          }))
        },
        'msgRetry': _0x5317af,
        'msgRetryCache': _0x36b413,
        'version': [0x2, 0xbb8, 0x3c8d6c7b],
        'syncFullHistory': true,
        'browser': _0x4ea9f2 ? ["Ubuntu", "Chrome", "110.0.5585.95"] : ["Lynx-Ai (Sub Bot)", "Chrome", '2.0.0'],
        'defaultQueryTimeoutMs': undefined,
        'getMessage': async _0x3f6e20 => {
          if (store) {
            const _0xaa3d6b = store.loadMessage(_0x3f6e20.remoteJid, _0x3f6e20.id);
            return _0xaa3d6b.message && undefined;
          }
          return {
            'conversation': "Lynx-Ai"
          };
        }
      };
      let _0x4e0ea3 = makeWASocket(_0x5cce4d);
      _0x4e0ea3.isInit = false;
      let _0x593499 = true;
      async function _0x1ebd0e(_0x396661) {
        const {
          connection: _0x18ef48,
          lastDisconnect: _0xd43af1,
          isNewLogin: _0x3f7059,
          qr: _0x3a7bea
        } = _0x396661;
        if (_0x3f7059) {
          _0x4e0ea3.isInit = false;
        }
        if (_0x3a7bea && !_0x4ea9f2) {
          _0x41d791 = await _0x3b0d31.sendMessage(_0x229076.chat, {
            'image': await _0x36edb8.toBuffer(_0x3a7bea, {
              'scale': 0x8
            }),
            'caption': "✿ *Vincula tu cuenta usando el Qr.*\n\n_✰ Sigue las *instrucciones* :_\n\n`1` » Haga clic en los tres puntos en la esquina superior derecha\n\n`2` » Toca dispositivos vinculados\n\n`3` » Escanee este codigo QR para iniciar sesión\n\n *¡Este código QR expira en 45 segundos!*\n\n> *✰ Nota :* _Con otro celular o en la PC escanea este QR para convertirte en un Sub Bot_\n> *✿ Aviso :* _No es recomendable ser subbot en tu numero principal_" + _0x261df0.toString("utf-8")
          }, {
            'quoted': _0x229076
          });
        }
        if (_0x3a7bea && _0x4ea9f2) {
          _0x125157 = await _0x3b0d31.sendMessage(_0x229076.chat, {
            'text': "✿ *Vincula tu cuenta usando el codigo.*\n\n_✰ Sigue las *instrucciones* :_\n\n`1` » Click en los 3 puntos\n\n`2` » Toque dispositivos vinculados\n\n`3` » Vincular nuevo dispositivo\n\n`4` » Selecciona Vincular con el número de teléfono\n\n> *✰ Nota :* _Este Código solo funciona en el número que lo solicito_\n> *✿ Aviso :* _No es recomendable ser subbot en tu numero principal_" + _0x261df0.toString('utf-8')
          }, {
            'quoted': _0x229076
          });
          await sleep(0xbb8);
          let _0x3346c1 = await _0x4e0ea3.requestPairingCode(_0x229076.sender.split`@`[0x0]);
          _0x214d0e = await _0x229076.reply(_0x3346c1);
        }
        const _0xe0717b = _0xd43af1?.['error']?.["output"]?.["statusCode"] || _0xd43af1?.["error"]?.["output"]?.["payload"]?.['statusCode'];
        console.log(_0xe0717b);
        const _0x315841 = async _0x3bb897 => {
          if (!_0x3bb897) {
            try {
              _0x4e0ea3.ws.close();
            } catch {}
            _0x4e0ea3.ev.removeAllListeners();
            let _0x80718a = global.conns.indexOf(_0x4e0ea3);
            if (_0x80718a < 0x0) {
              return;
            }
            delete global.conns[_0x80718a];
            global.conns.splice(_0x80718a, 0x1);
          }
        };
        const _0x4f039f = _0xd43af1?.["error"]?.['output']?.["statusCode"] || _0xd43af1?.['error']?.["output"]?.["payload"]?.["statusCode"];
        if (_0x18ef48 === 'close') {
          console.log(_0x4f039f);
          if (_0x4f039f == 0x195) {
            await _0x2a39f4.unlinkSync('./' + jadi + '/' + _0x3596f8 + "/creds.json");
            return await _0x229076.reply("Reenvia nuevamente el comando.");
          }
          if (_0x4f039f === DisconnectReason.restartRequired) {
            _0x5c4c72();
            return console.log("\n⌛ Tiempo de conexión agotado, reconectando...");
          } else {
            if (_0x4f039f === DisconnectReason.loggedOut) {
              sleep(0xfa0);
              return _0x229076.reply("*La conexión se ha cerrado, tendras que volver a conectarse usando:*\n!deletesesion (Para borrar los datos y poder volver a solicitar el QR o el código de emparejamiento");
            } else {
              if (_0x4f039f == 0x1ac) {
                await _0x315841(false);
                return _0x229076.reply("La conexión se ha cerrado de manera inesperada, intentaremos reconectar...");
              } else {
                if (_0x4f039f === DisconnectReason.connectionLost) {
                  await _0x5c4c72();
                  return console.log("\n⚠️ Conexión perdida con el servidor, reconectando....");
                } else {
                  if (_0x4f039f === DisconnectReason.badSession) {
                    return await _0x229076.reply("*La conexión se ha cerrado, deberá de conectarse manualmente*");
                  } else {
                    if (_0x4f039f === DisconnectReason.timedOut) {
                      await _0x315841(false);
                      return console.log("\n⌛ Tiempo de conexión agotado, reconectando....");
                    } else {
                      console.log("\n⚠️❗ Razón de la desconexión desconocida: " + (_0x4f039f || '') + " >> " + (_0x18ef48 || ''));
                    }
                  }
                }
              }
            }
          }
        }
        if (global.db.data == null) {
          loadDatabase();
        }
        if (_0x18ef48 == "open") {
          _0x4e0ea3.isInit = true;
          global.conns.push(_0x4e0ea3);
          await joinChannels(_0x4e0ea3);
          await _0x3b0d31.sendMessage(_0x229076.chat, {
            'text': _0x42414c[0x0] ? "⚪ *Está conectado(a)!! Por favor espere se está cargando los mensajes...*\n\n♻️ *Opciones Disponibles:*\n*» " + _0x3dccaa + "pausarai _(Detener la función Sub Bot)_*\n*» " + _0x3dccaa + "deletesession _(Borrar todo rastro de Sub Bot)_*\n*» " + _0x3dccaa + "serbot _(Nuevo código QR o Conectarse si ya es Sub Bot)_*" : "*`[ Conectado Exitosamente 🤍 ]`*\n> _Se intentara reconectar en caso de desconexion de sesion_\n> _Si quieres eliminr el subbot borra la sesion en dispositivos vinculados_\n> _El número del bot puede cambiar, guarda este enlace :_\n" + (" " + (_0x3dccaa + _0x509ed3))
          }, {
            'quoted': _0x229076
          });
          let _0x465b30 = ("\n*Se detectó un nuevo Sub-Bot conectado 💻✨*\n\n*Bot* » Wa.me/" + _0x229076.sender.split`@`[0x0] + "\n👤 *Dueño* » " + (_0x229076.pushName || 'Anónimo') + "\n🔑 *Método de conexión* » " + (_0x4ea9f2 ? "Código de 8 dígitos" : "Código QR") + "\n🚀 *Browser* » " + (_0x4ea9f2 ? "Ubuntu" : 'Chrome') + "\n⭐️ *Versión Sub-Bot* » " + vsJB + "\n").trim();
          let _0x49cff5 = await _0x4e0ea3.profilePictureUrl(_0x5e53b8, "image")["catch"](_0x129def => "https://qu.ax/QGAVS.jpg");
          await sleep(0xbb8);
          await _0x3b0d31.sendMessage(global.channelid, {
            'text': _0x465b30,
            'contextInfo': {
              'externalAdReply': {
                'title': "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
                'body': "🥳 ¡Nuevo Sub-Bot conectado!",
                'thumbnailUrl': _0x49cff5,
                'sourceUrl': redes,
                'mediaType': 0x1,
                'showAdAttribution': false,
                'renderLargerThumbnail': false
              }
            }
          }, {
            'quoted': null
          });
          if (!_0x42414c[0x0]) {
            _0x3b0d31.sendMessage(_0x229076.chat, {
              'text': _0x3dccaa + _0x509ed3 + " " + Buffer.from(_0x2a39f4.readFileSync('./' + jadi + '/' + _0x3596f8 + '/creds.json'), "utf-8").toString('base64')
            }, {
              'quoted': _0x229076
            });
          }
        }
      }
      setInterval(async () => {
        if (!_0x4e0ea3.user) {
          try {
            _0x4e0ea3.ws.close();
          } catch (_0x22558a) {
            console.log(await _0x9542db(true)['catch'](console.error));
          }
          _0x4e0ea3.ev.removeAllListeners();
          let _0x42a02f = global.conns.indexOf(_0x4e0ea3);
          if (_0x42a02f < 0x0) {
            return;
          }
          delete global.conns[_0x42a02f];
          global.conns.splice(_0x42a02f, 0x1);
        }
      }, 0xea60);
      let _0xf5931 = await import("../handler.js");
      let _0x9542db = async function (_0x49bc5f) {
        try {
          const _0x456f8e = await import('../handler.js?update=' + Date.now())["catch"](console.error);
          if (Object.keys(_0x456f8e || {}).length) {
            _0xf5931 = _0x456f8e;
          }
        } catch (_0xc2c57c) {
          console.error(_0xc2c57c);
        }
        if (_0x49bc5f) {
          const _0x4966a4 = _0x4e0ea3.chats;
          try {
            _0x4e0ea3.ws.close();
          } catch {}
          _0x4e0ea3.ev.removeAllListeners();
          _0x4e0ea3 = makeWASocket(_0x5cce4d, {
            'chats': _0x4966a4
          });
          _0x593499 = true;
        }
        if (!_0x593499) {
          _0x4e0ea3.ev.off("messages.upsert", _0x4e0ea3.handler);
          _0x4e0ea3.ev.off("connection.update", _0x4e0ea3.connectionUpdate);
          _0x4e0ea3.ev.off("creds.update", _0x4e0ea3.credsUpdate);
        }
        const _0x179303 = new Date();
        const _0x5953e2 = new Date(_0x4e0ea3.ev * 0x3e8);
        if (_0x179303.getTime() - _0x5953e2.getTime() <= 0x493e0) {
          console.log("Leyendo mensaje entrante:", _0x4e0ea3.ev);
          Object.keys(_0x4e0ea3.chats).forEach(_0x2d1476 => {
            _0x4e0ea3.chats[_0x2d1476].isBanned = false;
          });
        } else {
          console.log(_0x4e0ea3.chats, "Omitiendo mensajes en espera.", _0x4e0ea3.ev);
          Object.keys(_0x4e0ea3.chats).forEach(_0x1234cb => {
            _0x4e0ea3.chats[_0x1234cb].isBanned = true;
          });
        }
        _0x4e0ea3.handler = _0xf5931.handler.bind(_0x4e0ea3);
        _0x4e0ea3.connectionUpdate = _0x1ebd0e.bind(_0x4e0ea3);
        _0x4e0ea3.credsUpdate = _0x2c75bf.bind(_0x4e0ea3, true);
        _0x4e0ea3.ev.on('messages.upsert', _0x4e0ea3.handler);
        _0x4e0ea3.ev.on("connection.update", _0x4e0ea3.connectionUpdate);
        _0x4e0ea3.ev.on("creds.update", _0x4e0ea3.credsUpdate);
        _0x593499 = false;
        return true;
      };
      _0x9542db(false);
    }
    _0x5c4c72();
  });
};
handler.help = ['serbot', "serbot code", "code"];
handler.tags = ['serbot'];
handler.command = ["jadibot", "serbot", "code"];
export default handler;
function sleep(_0x3adb64) {
  return new Promise(_0x29b84a => setTimeout(_0x29b84a, _0x3adb64));
}
async function joinChannels(_0x557b64) {
  for (const _0x35d199 of Object.values(global.ch)) {
    await _0x557b64.newsletterFollow(_0x35d199)["catch"](() => {});
  }
}
