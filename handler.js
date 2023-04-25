import { generateWAMessageFromContent } from "@adiwajshing/baileys" 
import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'   
import fetch from 'node-fetch' 

/**
 * @type {import('@adiwajshing/baileys')}  
 */
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        m.money = false
        try {
          // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
                global.db.data.users[m.sender] = {}
		
            if (user) {
                if (!isNumber(user.exp)) user.exp = 0
                if (!isNumber(user.money)) user.money = 150
                if (!isNumber(user.limit)) user.limit = 15 
		if (!('registered' in user)) user.registered = false
		if (!('premium' in user)) user.premium = false    
                    
            if (!user.registered) {
		                    	 
		if (!('name' in user)) user.name = m.name
		if (!isNumber(user.regTime)) user.regTime = -1
		if (!isNumber(user.age)) user.age = 0
                        
	        }
		                    		    
                if (!isNumber(user.afk)) user.afk = -1
	        if (!('role' in user)) user.role = '*NOVATO(A)* 🪤'
                if (!user.premium) user.premium = false
                if (!user.premium) user.premiumTime = 0
                                                   		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            } else
                global.db.data.users[m.sender] = {
		    
		    afk: -1,
                    afkReason: '',
                    age: 0,
		    limit: 15,
		    money: 150,
		    premium: false,
                    premiumTime: 0,
		    name: m.name,
		    regTime: -1,
		    registered: false,
		    role: '*NOVATO(A)* 🪤',
		     	
                }
		let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
                
            if (chat) {
                if (!('isBanned' in chat)) chat.isBanned = false                    
                if (!('welcome' in chat)) chat.welcome = true                    
                if (!('detect' in chat)) chat.detect = true                    
                if (!('sWelcome' in chat)) chat.sWelcome = ''                    
                if (!('sBye' in chat)) chat.sBye = ''                    
                if (!('sPromote' in chat)) chat.sPromote = ''                    
                if (!('sDemote' in chat)) chat.sDemote = '' 
                if (!('delete' in chat)) chat.delete = true                        
                if (!('viewonce' in chat)) chat.viewonce = true         
                if (!('modoadmin' in chat)) chat.modoadmin = false           
                if (!('antiLink' in chat)) chat.antiLink = false
		if (!('antiLink2' in chat)) chat.antiLink2 = false    
                if (!('antiTiktok' in chat)) chat.antiTiktok = false
		if (!('antiYoutube' in chat)) chat.antiYoutube = false
		if (!('antiTelegram' in chat)) chat.antiTelegram = false
		if (!('antiFacebook' in chat)) chat.antiFacebook = false
		if (!('antiInstagram' in chat)) chat.antiInstagram = false
		if (!('antiTwitter' in chat)) chat.antiInstagram = false
		if (!('antifake' in chat)) chat.antifake = false 
		if (!('antiTraba' in chat)) chat.antiTraba = true
	        if (!('antitoxic' in chat)) chat.antitoxic = true 
                if (!isNumber(chat.expired)) chat.expired = 0
                    
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: true,
                    detect: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '', 
                    delete: true,
                    viewonce: true,
                    modoadmin: false,
                    antiLink: false,
		    antiLink2: false,	
                    antiTiktok: false,
		    antiYoutube: false,
		    antiTelegram: false,
		    antiFacebook: false,
		    antiInstagram: false,
		    antiTwitter: false,
		    antifake: false,
		    antiTraba: true,
		    antitoxic: true,
                    expired: 0,
                }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = false
		if (!('antiCall' in settings)) settings.antiCall = true
		if (!('autoread2' in settings)) settings.autoread2 = false
		if (!('jadibotmd' in settings)) settings.jadibotmd = false  
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
		autoread2: false,
                restrict: false,
		antiCall: true,
		jadibotmd: false,
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        //const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const isPrems = isROwner || global.db.data.users[m.sender].premiumTime > 0

       if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false
		
		//if (text) {
		//m.reply('*ERROR DE COMANDO*')}

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (!['propietario(a)-unbanchat.js'].includes(name) && chat && chat.isBanned && !isROwner) return // Except this
                    if (!['propietario(a)-unbanuser.js'].includes(name) && user && user.banned && !isROwner) {
                    if (!opts['msgifbanned']) m.reply(`❰ ⚠️ ❱ *ESTAS BANEADO/A* ❰ ⚠️ ❱ ${user.bannedReason ? `\n*Motivo:* *${user.bannedReason}*` : ''}

*👉 Puedes contactar a la propietaria del Bot si crees que se trata de un error (TENER PRUEBAS) para tratar el motivo de tú desbaneo*

👉 ${global.asistencia}
👉 wa.me/5492266466080
👉 wa.me/584125778026
👉 wa.me/51993042301
👉 ${global.ig}
`.trim())
                        return
                }
                }

               let hl = _prefix 
                let adminMode = global.db.data.chats[m.chat].modoadmin
                let gata = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
                if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && gata) return   

               if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }

                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 10 // Ganancia de XP por comando
                if (xp > 2000)
                    m.reply('Exp limit') // Hehehe
                else               
                if (!isPrems && plugin.money && global.db.data.users[m.sender].money < plugin.money * 1) {
                    this.reply(m.chat, `🐈 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎`, m)
                    continue     
		}
			
                    m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.reply(m.chat, `${lenguajeGB['smsCont7']()} *${usedPrefix}buy*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `${lenguajeGB['smsCont9']()} *${plugin.level}* ${lenguajeGB['smsCont10']()} *${_user.level}* ${lenguajeGB['smsCont11']()} *${usedPrefix}nivel*`, m)
		    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                        m.money = m.money || plugin.money || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + lenguajeGB.smsCont8())
                }
                 if (m.money)
                        m.reply(+m.money + ' 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎 🐱 𝙐𝙎𝘼𝘿𝙊(𝙎)')
              
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
                user.money -= m.money * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
	let settingsREAD = global.db.data.settings[this.user.jid] || {}  
        if (opts['autoread']) await this.readMessages([m.key])
	if (settingsREAD.autoread2) await this.readMessages([m.key])  
	if (settingsREAD.autoread2 == 'true') await this.readMessages([m.key])    
	    
        if (!db.data.chats[m.chat].reaction && m.isGroup) throw 0
        if (!m.fromMem && m.text.match(/(ata|des|able|izo|ido|.-.|._.|:)|:(|:v|v:|o.o|;v|v;|v':|:'v)/gi)) {
        let emot = pickRandom(["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤩", "😏", "😳", "🥵", "🤯", "😱", "😨", "🤫", "🥴", "🤧", "🤑", "🤠", "🤖", "🤝", "💪", "👑", "😚", "🐱", "🐈", "🐆", "🐅", "⚡️", "🌈", "☃️", "⛄️", "🌝", "🌛", "🌜", "🍓", "🍎", "🎈", "🪄", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "💘", "💝", "💟", "🌝", "😎", "🔥", "🖕", "🐦"])
        this.sendMessage(m.chat, { react: { text: emot, key: m.key }})}
        function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
		
    }
}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                    let pp = 'https://i.imgur.com/whjlJSf.jpg'
                    let ppgp = 'https://i.imgur.com/whjlJSf.jpg'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                        ppgp = await this.profilePictureUrl(id, 'image')
                   } catch (e) {
                    } finally {
                  // let apii = await this.getFile(pp)
                    const antiArab = JSON.parse(fs.readFileSync('./lib/antiArab.json'))
                    const userPrefix = antiArab.some(prefix => user.startsWith(prefix))                        
                    const botTt2 = groupMetadata.participants.find(u => this.decodeJid(u.id) == this.user.jid) || {} 
                    const isBotAdminNn = botTt2?.admin === "admin" || false
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Bienvenido, @user').replace('@group', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'Desconocido') :
                            (chat.sBye || this.bye || conn.bye || 'Adiós, @user')).replace('@user', '@' + user.split('@')[0])
                              
			    let wel = API('fgmods', '/api/welcome', {
                                username: await this.getName(user),
                                groupname: await this.getName(id),
                                groupicon: ppgp,
                                membercount: groupMetadata.participants.length,
                                profile: pp,
                                background: 'https://i.imgur.com/bbWbASn.jpg'
                            }, 'apikey')

                            let lea = API('fgmods', '/api/goodbye', {
                                username: await this.getName(user),
                                groupname: await this.getName(id),
                                groupicon: ppgp,
                                membercount: groupMetadata.participants.length,
                                profile: pp,
                                background: 'https://i.imgur.com/klTSO3d.jpg'
                            }, 'apikey')
                            
if (userPrefix && chat.antifake && botTt.restrict && isBotAdminNn && action === 'add') {
 let responseb = await this.groupParticipantsUpdate(id, [user], 'remove')
     if (responseb[0].status === "404") return 
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }      
this.sendMessage(id, { text: `este @${m.sender.split`@`[0]}* numero no se permite el este grupo...`, mentions: [user] }, { quoted: fkontak2 });          
return    
}    
			    
//this.sendFile(id, apii.data, 'pp.jpg', text, null, false, { mentions: [user] }) 
                }
            }
	     }
	     
break
case 'promote':
case 'daradmin':
case 'darpoder':
text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
case 'demote':
case 'quitarpoder':
case 'quitaradmin':
if (!text)
text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
text = text.replace('@user', '@' + participants[0].split('@')[0])
if (chat.detect)
this.sendMessage(id, { text, mentions: this.parseMention(text) })
break
}}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function callUpdate(callUpdate) {
    let isAnticall = global.db.data.settings[this.user.jid].antiCall  
    if (!isAnticall) return
    for (let nk of callUpdate) { 
    if (nk.isGroup == false) {
    if (nk.status == "offer") {
    let tagUserL = `${nk.from.split('@')[0]}`
    let llamadaVideo = nk.isVideo
    let callmsg = await this.reply(nk.from, lenguajeGB['smsHandlerLlamar'](tagUserL, llamadaVideo), false, { mentions: [nk.from] })
    //let data = global.owner.filter(([id, isCreator]) => id && isCreator)
    //await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
    await this.updateBlockStatus(nk.from, 'block')
    }}}}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete) 
            return
        await this.reply(msg.chat, `
━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━
*■ Nombre:* @${participant.split`@`[0]}
*■ Enviando el mensaje..*
*■ Para desactivar esta función escriba el comando:*
*—◉ #disable antidelete*
*—◉ #enable delete*
━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━
`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
let msg = {
        rowner: lenguajeGB['smsRowner'](),
        owner: lenguajeGB['smsOwner'](),
        mods: lenguajeGB['smsMods'](),
        premium: lenguajeGB['smsPremium'](),
	group: lenguajeGB['smsGroup'](),
        private: lenguajeGB['smsPrivate'](),
        admin: lenguajeGB['smsAdmin'](),
	botAdmin: lenguajeGB['smsBotAdmin'](),
        unreg: lenguajeGB['smsUnreg'](),
        restrict: lenguajeGB['smsRestrict'](),
}[type]
//if (msg) return m.reply(msg)
let tg = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: msg, contextInfo: { externalAdReply: { title: lenguajeGB.smsAvisoAG().slice(0,-2), body: [wm, '😻 𝗦𝘂𝗽𝗲𝗿 ' + gt + ' 😻', '🌟 centergatabot.gmail.com'].getRandom(), thumbnail: gataImg.getRandom(), sourceUrl: [md, yt, nna, nn, nnn, ig, paypal, fb].getRandom() }}}}, tg)
if (msg) return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsHandler']()))
if (global.reloadHandler) console.log(await global.reloadHandler())
})
