import FormData from "form-data"; 
 import Jimp from "jimp"; 
  
 let handler = async (m, { conn, usedPrefix, command }) => { 
   conn.hdr = conn.hdr ? conn.hdr : {} 
   if (m.sender in conn.hdr) 
     throw "*⚠️ Todavía hay un proceso que no se ha Terminado. Espere hasta que termine. >//<*" 
   let q = m.quoted ? m.quoted : m 
   let mime = (q.msg || q).mimetype || q.mediaType || "" 
   if (!mime) 
     throw `*⚠️ Y LA FOTO?*` 
   if (!/image\/(jpe?g|png)/.test(mime)) 
     throw `⚠️ *Mímica ${mime} No soportada*` 
   else conn.hdr[m.sender] = true; 
   m.reply("*🚀 P R O C E S A N D O*") 
   let img = await q.download?.() 
   let error 
   try { 
     const This = await processing(img, "enhance") 
     conn.sendFile(m.chat, This, "", "*🚀 Foto en hd >//<*\n\n_Si la foto no sale en hd vuelva a intentar_", m) 
   } catch (er) { 
     error = true 
   } finally { 
     if (error) { 
       m.reply("*⚠️ Proceso fallido :( ⚠️*") 
     } 
     delete conn.hdr[m.sender] 
   } 
 } 
  
 handler.help = ['hd'] 
 handler.tags = ['tools', 'ai'] 
 handler.command = /^(hd)$/i 
  
 handler.register = true 
 handler.limit = true 
  
 export default handler 
  
 async function processing(urlPath, method) { 
   return new Promise(async (resolve, reject) => { 
     let Methods = ["enhance", "recolor", "dehaze"] 
     Methods.includes(method) ? (method = method) : (method = Methods[0]); 
     let buffer, 
       Form = new FormData(), 
       scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method; 
     Form.append("model_version", 1, { 
       "Content-Transfer-Encoding": "binary", 
       contentType: "multipart/form-data; charset=uttf-8", 
     }); 
     Form.append("image", Buffer.from(urlPath), { 
       filename: "enhance_image_body.jpg", 
       contentType: "image/jpeg", 
     }); 
     Form.submit( 
       { 
         url: scheme, 
         host: "inferenceengine" + ".vyro" + ".ai", 
         path: "/" + method, 
         protocol: "https:", 
         headers: { 
           "User-Agent": "okhttp/4.9.3", 
           Connection: "Keep-Alive", 
           "Accept-Encoding": "gzip", 
         }, 
       }, 
       function (err, res) { 
         if (err) reject(); 
         let data = []; 
         res 
           .on("data", function (chunk, resp) { 
             data.push(chunk); 
           }) 
           .on("end", () => { 
             resolve(Buffer.concat(data)); 
           }); 
         res.on("error", (e) => { 
           reject(); 
         }); 
       } 
     ); 
   }); 
 }
