import { googleIt } from '@bochilteam/scraper'  
import fetch from 'node-fetch'
import axios from 'axios'
import yts from 'yt-search'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
import fs from 'fs' 

let handler = async (m, { conn, command, usedPrefix, args, text }) => {
const isCommand1 = /^(googlef?)$/i.test(command)
const isCommand2 = /(openai|chatgpt|ia|ai)/i.test(command)
const isCommand3 = /^(bot|simi|simsimi|alexa|bixby|cortana|siri|okgoogle)$/i.test(command)
const isCommand4 = /^(githubstalk|usuariogithub|usergithub)$/i.test(command)
const isCommand5 = /^(yt(s|search))$/i.test(command)

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {     
case isCommand1:
if (!text) return conn.reply(m.chat, lenguajeGB.smsAvisoMG() + lenguajeGB.smsMalused2() + `\n*${usedPrefix + command} Qué es Matemáticas?*` , m)
try{
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text, { limit: 30 });
let msg = search.articles.map(({ title, url, description }) => { return `*${title}*\n_${url}_\n_${description}_` }).join('\n\n')
m.reply(msg)
} catch (e) {
reportError(e)
}    
break 
    
case isCommand2:
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, lenguajeGB.smsOpenai1() + `\n*${usedPrefix + command}* ${lenguajeGB.smsOpenai2()}\n\n*${usedPrefix + command}* ${lenguajeGB.smsOpenai3()}` , m)
try {
await conn.sendPresenceUpdate('composing', m.chat)
        let syms = `Actuaras como un Bot de WhatsApp el cual fue creado por GataNina-Li, tu seras GataBotLite-MD`
        let res = await gpt.ChatGpt(text, syms)
         await m.reply(res.text)
/*let ia1 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let resu1 = await ia1.json()
m.reply(`${resu1.response}`.trim())    */
} catch {
try {   
let ia2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`) //fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let resu2 = await ia2.json()
m.reply(resu2.response.trim())    
//m.reply(resu2.data.data.trim())    
} catch {      
try {    
let ia3 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`)
let resu3 = await ia3.json()
m.reply(`${resu3.result}`.trim())   
} catch (e) {
reportError(e)
}}} 
break
    
case isCommand3:
if (!text) return conn.reply(m.chat, lenguajeGB.smsMalused2() + `\n*${usedPrefix + command} ${lenguajeGB.smsCreA()}*` , m) 
try{
await conn.sendPresenceUpdate('composing', m.chat)
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=${lenguajeGB.lenguaje()}`)  
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
} catch (e) {
reportError(e)
}     
break
        
case isCommand4:
if (!text) return conn.reply(m.chat, lenguajeGB.smsGit1(usedPrefix, command), m)
await m.reply(lenguajeGB.smsGit2())
try{
let err = lenguajeGB.smsGit14()
let request = await githubstalk(text) 
let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request
let thumb = await profile_pic
let cont = `*╭•  •  •  •  • G I T H U B •  •  •  •  •╮*\n
${lenguajeGB.smsGit3()}
${username || err}

${lenguajeGB.smsGit4()}
${bio || err}

${lenguajeGB.smsGit5()}
${company || err}

${lenguajeGB.smsGit6()}
${email || err}

${lenguajeGB.smsGit7()}
${blog || err}

${lenguajeGB.smsGit8()}
${public_repo || err}

${lenguajeGB.smsGit9()}
${public_gists || err}

${lenguajeGB.smsGit10()}
${followers || err}

${lenguajeGB.smsGit11()}
${following || err}

${lenguajeGB.smsGit12()}
${location || err}

${lenguajeGB.smsGit13()}
${type || err}`
await conn.sendFile(m.chat, thumb || gataMenu.getRandom(), 'githubstalk.jpg', cont, fkontak) 
} catch (e) {
reportError(e)}  
break   
        
case isCommand5:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command}* GataBot`)
try{
await conn.reply(m.chat, global.wait, m)
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
⁖❤️꙰༻ *${lenguajeGB.smsytserh1()}*
» ${v.title || lenguajeGB.smsGit14()}

⁖🩵꙰༻ *${lenguajeGB.smsytserh2()}*
» ${v.url || lenguajeGB.smsGit14()}

⁖💜꙰༻ *${lenguajeGB.smsytserh3()}*
» ${v.timestamp || lenguajeGB.smsGit14()}

⁖💚꙰༻ *${lenguajeGB.smsytserh4()}*
» ${v.ago || lenguajeGB.smsGit14()}

⁖🧡꙰༻ *${lenguajeGB.smsytserh5()}*
» ${v.views || lenguajeGB.smsGit14()}`.trim()
}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')
await conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
} catch (e) {
reportError(e)
}          
break
}}

handler.command = /^(googlef?|openai|chatgpt|ia|ai|bot|simi|simsimi|alexa|bixby|cortana|siri|okgoogle|githubstalk|usuariogithub|usergithub|(yt(s|search)))$/i
handler.register = true
export default handler

async function githubstalk(user) {
return new Promise((resolve, reject) => {
axios.get('https://api.github.com/users/'+user)
.then(({ data }) => {
let hasil = {
 username: data.login,
 nickname: data.name,
 bio: data.bio,
 id: data.id,
 nodeId: data.node_id,
 profile_pic: data.avatar_url,
 url: data.html_url,
 type: data.type,
 admin: data.site_admin,
 company: data.company,
 blog: data.blog,
 location: data.location,
 email: data.email,
 public_repo: data.public_repos,
 public_gists: data.public_gists,
 followers: data.followers,
 following: data.following,
 ceated_at: data.created_at,
 updated_at: data.updated_at
}
resolve(hasil)})})  
}
