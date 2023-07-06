import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'main': 'I N F O R M A C I Ó N',
  'game': 'JUEGOS',
  'econ': 'NIVEL & ECONOMIA',
  'rg': 'REGISTRO',
  'sticker': 'STICKER',
  'img': ' C O N V E R T I D O R E S',
  'maker': 'LOGOS',
  'prem': 'PREMIUM', 
  'group': 'GRUPO',
  'nable': 'OPCIONES PARA ACTIVA Y DESACTIVA', 
  'downloader': ' D E S C A R G A S',
  'tools': 'HERRAMIENTA',
  'fun': 'FUN',
  'cmd': 'DATABASE',
  'nsfw': 'COMANDO +18', 
  'ansfw': 'NSFW ANIME',
  'owner': 'ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ/ᴏᴡɴᴇʀ', 
}
const defaultMenu = {
  before: '╔═══[ ＵＳＵＡＲＩＯＳ ]═══╗
║╭──────────────
║├⫹⫺ *Nombre :* ${name}
║├⫹⫺ *Limite :* ${diamond}
║├⫹⫺ *Nivel :* ${level}
〬║├⫹⫺ *Rango :* ${role}
║├⫹⫺ *Exp :* ${exp}
║╰──────────────
╚══════════════════⋆

╔═══[ ＩＮＦＯＢＯＴ ]═══╗
║╭──────────────
║├⫹⫺ *Creador :* ${azami}
║├⫹⫺ *Numero:* wa.me/59894808483
║├⫹⫺ *${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de :* https://wa.me/${global.conn.user.jid.split`@`[0]}`) || 'Bot Ofc :* wa.me/56962237366'}
║├⫹⫺ *Prefix :* ${usedPrefix}
║├⫹⫺ *Tiempo Activo:* ${uptime}
║├⫹⫺ *Registrado :* ${rtotalreg} de ${totalreg} usuarios
║╰────────────── 
╚══════════════════⋆

╔═════「 ＨＯＹ 」════╗
║⫹⫺ *Fecha :* ${date}
〬╚═════ ≪ •❈• ≫ ═════╝'
.trimStart(),
  header: '〬╔══「 %category 」═╗',
  body: '〬║ႌ〬⫹⫺ %cmd %isdiamond %isPremium',
  footer: '╚════ ≪ •❈• ≫ ════╝\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: `Hola ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(pp)).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let pp = './src/fg_logo.jpg'
    await conn.reply(m.chat, '*Enviando el menu . . .*', ftrol) 
     /*conn.sendHydrated2(m.chat, text.trim(), '▢ DyLux  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff', pp, fgyt, 'YouTube', 'https://paypal.me/fg98f', 'PayPal', [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ], m)*/  
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m, null, nna)
  /* conn.sendButton(m.chat, text.trim(), '*ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ*', pp, [
      ['Info', `${_p}botinfo`],
      ['Grupos', `${_p}grupos`]
    ],m, rpl)*/
  
    m.react('🙌') 
    
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.help = ['help']
handler.tags = ['main']
//handler.command = ['menucompleto', 'help', 'fullmenu'] 
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/Azami19 | @Azami

/*import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let { exp, diamond, level, role, money } = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./storage/menus/Menu3.jpg'), thumbnail: fs.readFileSync('./storage/menus/Menu3.jpg'),sendEphemeral: true}}}
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: `Hola ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(pp)).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }

let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let d4 = 'application/pdf'
let d5 = 'application/vnd.android.package-archive'
let d6 = 'application/zip'
let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
 
 const fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: 'Menú...' + '\n🚀 Cargando ^ω^', 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(pp)).buffer(), 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    await conn.reply(m.chat, '*Enviando el menu . . .*', ftrol) 
m.react('🚀')     
let menu = `╔═══[ ＵＳＵＡＲＩＯＳ ]═══╗
║╭──────────────
║├⫹⫺ *Nombre :* ${name}
║├⫹⫺ *Limite :* ${diamond}
║├⫹⫺ *Nivel :* ${level}
〬║├⫹⫺ *Rango :* ${role}
║├⫹⫺ *Exp :* ${exp}
║╰──────────────
╚══════════════════⋆

╔═══[ ＩＮＦＯＢＯＴ ]═══╗
║╭──────────────
║├⫹⫺ *Creador :* ${azami}
║├⫹⫺ *Numero:* wa.me/59894808483
║├⫹⫺ *${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de :* https://wa.me/${global.conn.user.jid.split`@`[0]}`) || 'Bot Ofc :* wa.me/56962237366'}
║├⫹⫺ *Prefix :* ${usedPrefix}
║├⫹⫺ *Tiempo Activo:* ${uptime}
║├⫹⫺ *Registrado :* ${rtotalreg} de ${totalreg} usuarios
║╰────────────── 
╚══════════════════⋆

╔═════「 ＨＯＹ 」════╗
║⫹⫺ *Fecha :* ${date}
〬╚═════ ≪ •❈• ≫ ═════╝

〬╔══「 I N F O R M A C I Ó N 」═╗
〬║ႌ〬⫹⫺ ${usedPrefix}estado
║ႌ〬⫹⫺ ${usedPrefix}owner
〬║ႌ〬⫹⫺ ${usedPrefix}grouplist
║ႌ〬⫹⫺ ${usedPrefix}donar
║ႌ〬⫹⫺ ${usedPrefix}grupos
〬║ႌ〬⫹⫺ ${usedPrefix}infobot
〬║ႌ〬⫹⫺ ${usedPrefix}cuentas
〬║ႌ〬⫹⫺ ${usedPrefix}reporte
║ႌ〬⫹⫺ ${usedPrefix}join
║ႌ〬⫹⫺ ${usedPrefix}bot
〬╚════ ≪ •❈• ≫ ════╝

╔══「  J A D I B O T 」═╗
║ႌ〬⫹⫺ ${usedPrefix}Serbot 
║ႌ〬⫹⫺ ${usedPrefix}jadibot
║ႌ〬⫹⫺ ${usedPrefix}bots
║ႌ〬⫹⫺ ${usedPrefix}deletesesion
║ႌ〬⫹⫺ ${usedPrefix}stop
〬╚════ ≪ •❈• ≫ ════╝

╔══「 D E S C A R G A S 」═╗
║ႌ〬⫹⫺ ${usedPrefix}play
║ႌ〬⫹⫺ ${usedPrefix}play2
║ႌ〬⫹⫺ ${usedPrefix}yta
║ႌ〬⫹⫺ ${usedPrefix}ytv
║ႌ〬⫹⫺ ${usedPrefix}facebook
║ႌ〬⫹⫺ ${usedPrefix}tiktok
║ႌ〬⫹⫺ ${usedPrefix}instagram
║ႌ〬⫹⫺ ${usedPrefix}gitclone
║ႌ〬⫹⫺ ${usedPrefix}pinterest
║ႌ〬⫹⫺ ${usedPrefix}imagen
║ႌ〬⫹⫺ ${usedPrefix}mediafire
〬╚════ ≪ •❈• ≫ ════╝

╔══「 B U S C A D O R E S 」═╗
║ႌ〬⫹⫺ ${usedPrefix}google
║ႌ〬⫹⫺ ${usedPrefix}yts
〬╚════ ≪ •❈• ≫ ════╝

╔══「 C O N V E R T I D O R E S 」═╗
║ႌ〬⫹⫺ ${usedPrefix}toimg
║ႌ〬⫹⫺ ${usedPrefix}tomp3
║ႌ〬⫹⫺ ${usedPrefix}toptt
║ႌ〬⫹⫺ ${usedPrefix}tourl
║ႌ〬⫹⫺ ${usedPrefix}tovideo
║ႌ〬⫹⫺ ${usedPrefix}tts
〬╚════ ≪ •❈• ≫ ════╝

╔══「 A U D I O S   E F E C T O S 」═╗
║ႌ〬⫹⫺ ${usedPrefix}bass
║ႌ〬⫹⫺ ${usedPrefix}blown
║ႌ〬⫹⫺ ${usedPrefix}deep
║ႌ〬⫹⫺ ${usedPrefix}earrape
║ႌ〬⫹⫺ ${usedPrefix}fas
║ႌ〬⫹⫺ ${usedPrefix}fast
║ႌ〬⫹⫺ ${usedPrefix}nightcore
║ႌ〬⫹⫺ ${usedPrefix}reverse
║ႌ〬⫹⫺ ${usedPrefix}robot
║ႌ〬⫹⫺ ${usedPrefix}slow
║ႌ〬⫹⫺ ${usedPrefix}smooth
║ႌ〬⫹⫺ ${usedPrefix}tupai
║ႌ〬⫹⫺ ${usedPrefix}squirrel
║ႌ〬⫹⫺ ${usedPrefix}chipmunk
〬╚════ ≪ •❈• ≫ ════╝

╔══「 H E R R A M I E N T A S 」═╗
║ႌ〬⫹⫺ ${usedPrefix}acortar
║ႌ〬⫹⫺ ${usedPrefix}qr
║ႌ〬⫹⫺ ${usedPrefix}delete
║ႌ〬⫹⫺ ${usedPrefix}readmore
║ႌ〬⫹⫺ ${usedPrefix}styletext
〬╚════ ≪ •❈• ≫ ════╝

╔══「 J U E G O S 」═╗
║ႌ〬⫹⫺ ${usedPrefix}mates
║ႌ〬⫹⫺ ${usedPrefix}math
║ႌ〬⫹⫺ ${usedPrefix}simi
║ႌ〬⫹⫺ ${usedPrefix}suerte
║ႌ〬⫹⫺ ${usedPrefix}ppt
║ႌ〬⫹⫺ ${usedPrefix}tictactoe
║ႌ〬⫹⫺ ${usedPrefix}deltictactoe
║ႌ〬⫹⫺ ${usedPrefix}topgays
║ႌ〬⫹⫺ ${usedPrefix}topotakus
║ႌ〬⫹⫺ ${usedPrefix}gay
║ႌ〬⫹⫺ ${usedPrefix}doxear
║ႌ〬⫹⫺ ${usedPrefix}pregunta
║ႌ〬⫹⫺ ${usedPrefix}apostar
║ႌ〬⫹⫺ ${usedPrefix}slot
║ႌ〬⫹⫺ ${usedPrefix}dado
〬╚════ ≪ •❈• ≫ ════╝

╔══「 G R U P O S 」═╗
║ႌ〬⫹⫺ ${usedPrefix}grupo
║ႌ〬⫹⫺ ${usedPrefix}kick
║ႌ〬⫹⫺ ${usedPrefix}add
║ႌ〬⫹⫺ ${usedPrefix}banchat
║ႌ〬⫹⫺ ${usedPrefix}unbanchat
║ႌ〬⫹⫺ ${usedPrefix}admins
║ႌ〬⫹⫺ ${usedPrefix}infogroup
║ႌ〬⫹⫺ ${usedPrefix}promote
║ႌ〬⫹⫺ ${usedPrefix}demote
║ႌ〬⫹⫺ ${usedPrefix}hidetag
║ႌ〬⫹⫺ ${usedPrefix}tagall
║ႌ〬⫹⫺ ${usedPrefix}link
║ႌ〬⫹⫺ ${usedPrefix}banchat
║ႌ〬⫹⫺ ${usedPrefix}unbanchat
〬╚════ ≪ •❈• ≫ ════╝

╔══「 E N A B L E / D I S A B L E 」═╗
║ႌ〬⫹⫺ ${usedPrefix}enable welcome
║ႌ〬⫹⫺ ${usedPrefix}disable welcome
║ႌ〬⫹⫺ ${usedPrefix}enable public
║ႌ〬⫹⫺ ${usedPrefix}disable public
║ႌ〬⫹⫺ ${usedPrefix}enble antilink
║ႌ〬⫹⫺ ${usedPrefix}disable antilink
║ႌ〬⫹⫺ ${usedPrefix}enable antilink2
║ႌ〬⫹⫺ ${usedPrefix}disable antilink2
║ႌ〬⫹⫺ ${usedPrefix}enable restrict
║ႌ〬⫹⫺ ${usedPrefix}disable restrict
║ႌ〬⫹⫺ ${usedPrefix}enable autoread
║ႌ〬⫹⫺ ${usedPrefix}disable autoread
║ႌ〬⫹⫺ ${usedPrefix}enable detect
║ႌ〬⫹⫺ ${usedPrefix}disable detect
║ႌ〬⫹⫺ ${usedPrefix}enable pconly
║ႌ〬⫹⫺ ${usedPrefix}disable pconly
║ႌ〬⫹⫺ ${usedPrefix}enable gconly
║ႌ〬⫹⫺ ${usedPrefix}disable gconly
〬╚════ ≪ •❈• ≫ ════╝

╔══「 R P G 」═╗
║ႌ〬⫹⫺ ${usedPrefix}minar
║ႌ〬⫹⫺ ${usedPrefix}minar3
║ႌ〬⫹⫺ ${usedPrefix}minardiamantes
║ႌ〬⫹⫺ ${usedPrefix}daily
║ႌ〬⫹⫺ ${usedPrefix}work
║ႌ〬⫹⫺ ${usedPrefix}afk
║ႌ〬⫹⫺ ${usedPrefix}rob
║ႌ〬⫹⫺ ${usedPrefix}limit
║ႌ〬⫹⫺ ${usedPrefix}reg
║ႌ〬⫹⫺ ${usedPrefix}unreg
║ႌ〬⫹⫺ ${usedPrefix}myns
║ႌ〬⫹⫺ ${usedPrefix}perfil
║ႌ〬⫹⫺ ${usedPrefix}levelup
〬╚════ ≪ •❈• ≫ ════╝

╔══「 STICKER 」═╗
║ႌ〬⫹⫺ ${usedPrefix}s
║ႌ〬⫹⫺ ${usedPrefix}wm
〬╚════ ≪ •❈• ≫ ════╝

╔══「 O W N E R 」═╗
║ႌ〬⫹⫺ ${usedPrefix}update
║ႌ〬⫹⫺ ${usedPrefix}restart
║ႌ〬⫹⫺ ${usedPrefix}autoadmin
║ႌ〬⫹⫺ ${usedPrefix}leave
║ႌ〬⫹⫺ ${usedPrefix}salir
║ႌ〬⫹⫺ ${usedPrefix}cleartpm
║ႌ〬⫹⫺ ${usedPrefix}bc
║ႌ〬⫹⫺ ${usedPrefix}bcgc
║ႌ〬⫹⫺ ${usedPrefix}bcc
║ႌ〬⫹⫺ ${usedPrefix}banuser
║ႌ〬⫹⫺ ${usedPrefix}unbanuser
〬╚════ ≪ •❈• ≫ ════╝`
function _0x2daf() {
    const _0x4c1076 = ['namedoc', 'social', '1017dFLzIP', '11680bWFOeX', 'sendMessage', '1FnTozH', '6qNtNxK', '445374chjKag', '2096504ySppGm', '627669MaFyqj', 'readFileSync', 'En breve se enviará el menú...', '374160lMCurS', '356228pujvOS', './storage/menus/Menu3.jpg', '1019845zOpQQK', 'pdf', 'chat'];
    _0x2daf = function() {
        return _0x4c1076;
    };
    return _0x2daf();
}
const _0x110137 = _0x13bb;
(function(_0x14d3d7, _0x67b65e) {
    const _0x3a56bf = {
            _0x2e964c: 0x1b0,
            _0x4fc539: 0x1bd,
            _0x2a1845: 0x1b1,
            _0x2b6724: 0x1b3,
            _0x4293cc: 0x1b8,
            _0x59080a: 0x1b9
        },
        _0x30692c = _0x13bb,
        _0x119b1c = _0x14d3d7();
    while (!![]) {
        try {
            const _0x181128 = parseInt(_0x30692c(0x1bb)) / 0x1 * (parseInt(_0x30692c(_0x3a56bf._0x2e964c)) / 0x2) + parseInt(_0x30692c(_0x3a56bf._0x4fc539)) / 0x3 + parseInt(_0x30692c(_0x3a56bf._0x2a1845)) / 0x4 + parseInt(_0x30692c(_0x3a56bf._0x2b6724)) / 0x5 * (parseInt(_0x30692c(0x1bc)) / 0x6) + -parseInt(_0x30692c(0x1ad)) / 0x7 + -parseInt(_0x30692c(0x1be)) / 0x8 + parseInt(_0x30692c(_0x3a56bf._0x4293cc)) / 0x9 * (-parseInt(_0x30692c(_0x3a56bf._0x59080a)) / 0xa);
            if (_0x181128 === _0x67b65e) break;
            else _0x119b1c['push'](_0x119b1c['shift']());
        } catch (_0x1caf7d) {
            _0x119b1c['push'](_0x119b1c['shift']());
        }
    }
}(_0x2daf, 0x235d2));

function _0x13bb(_0x16c7de, _0x1a27b8) {
const _0x2dafbc = _0x2daf();
return _0x13bb = function(_0x13bbaf, _0x156d41) {
_0x13bbaf = _0x13bbaf - 0x1ad;
let _0x1a2b8a = _0x2dafbc[_0x13bbaf];
return _0x1a2b8a;
}, _0x13bb(_0x16c7de, _0x1a27b8);
}
let buttonMessage = {
    'document': {
        'url': md
    },
    'mimetype': td,
    'fileName': 'D A S H B O A R D',
    'fileLength': '99999999999999',
    'pageCount': '999',
    'contextInfo': {
    'externalAdReply': {
    'showAdAttribution': !![],
            'mediaType': 0x1,
            'previewType': "PHOTO",
            'title': 'Hola!!',
            'thumbnail': fs.readFileSync('./storage/img/Menu2.jpg'),
            'renderLargerThumbnail': !![],
            'sourceUrl': yt
        }
    },
  'caption': menu['trim']()
}
await conn[_0x110137(0x1ba)](m[_0x110137(0x1b5)], buttonMessage, { 'quoted': fkontak })
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu)$/i
handler.register = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function ucapan() {
    const time = moment.tz('America/Los_Angeled').format('HH')
    let res = "Buenas noches 🌙"
    if (time >= 4) {
        res = "Buen día 🌄"
    }
    if (time > 10) {
        res = "Buenas tardes ☀️"
    }
    if (time >= 15) {
        res = "Buenas tardes 🌅"
    }
    if (time >= 18) {
        res = "Buenas noches 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}*/

