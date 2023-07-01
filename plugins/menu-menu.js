//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/Azami19 | @Azami

import fs from 'fs'
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
let menu = `╭━━━━━═[ INFO BOT ]═━━━━━⋆
┃★╭──────────────
┃★│ *Creador:* ${azami}
┃★│ *Dueño:* wa.me/59894808483
┃★│ *Bot:* wa.me/56962237366
┃★│ *Tiempo activo:* ${uptime}
┃★│ *Usuarios:* ${rtotalreg}
┃★╰──────────────
├────────────────. . .
┣━━━━━═[ INFO BOT ]═━━━━━⋆
┃★╭──────────────
┃★│ *Nombre:* ${name}
┃★│ *Nivel:* ${level}
┃★│ *Exp:* ${exp}
┃★│ *Límites:* ${diamond}
┃★╰──────────────
├────────────────. . .
┣━━━━━═[ HOY ]═━━━━━⋆
┃★╭──────────────
┃★│ *${ucapan()}*
┃★│ *Fecha:* ${date}
┃★╰──────────────
╰━━━━━━━━━━━━━━━━━━━⋆

*「 I N F O R M A C I Ó N 」*
${usedPrefix}estado
${usedPrefix}owner
${usedPrefix}grouplist
${usedPrefix}donar
${usedPrefix}grupos
${usedPrefix}infobot
${usedPrefix}cuentas
${usedPrefix}reporte
${usedPrefix}join
bot

*「 S E R B O T/J A D I B O T 」*
${usedPrefix}Serbot 
${usedPrefix}jadibot
${usedPrefix}bots
${usedPrefix}deletesesion
${usedPrefix}stop

*「 D E S C A R G A S 」*
${usedPrefix}play
${usedPrefix}play2
${usedPrefix}yta
${usedPrefix}ytv
${usedPrefix}facebook
${usedPrefix}tiktok
${usedPrefix}instagram
${usedPrefix}gitclone
${usedPrefix}pinterest
${usedPrefix}imagen
${usedPrefix}mediafire

*「 B U S C A D O R E S 」*
${usedPrefix}google
${usedPrefix}yts

*「 C O N V E R T I D O R E S 」*
${usedPrefix}toimg
${usedPrefix}tomp3
${usedPrefix}toptt
${usedPrefix}tourl
${usedPrefix}tovideo
${usedPrefix}tts

*「 A U D I O S   E F E C T O S 」*
${usedPrefix}bass
${usedPrefix}blown
${usedPrefix}deep
${usedPrefix}earrape
${usedPrefix}fas
${usedPrefix}fast
${usedPrefix}nightcore
${usedPrefix}reverse
${usedPrefix}robot
${usedPrefix}slow
${usedPrefix}smooth
${usedPrefix}tupai
${usedPrefix}squirrel
${usedPrefix}chipmunk

*「 H E R R A M I E N T A S 」*
${usedPrefix}acortar
${usedPrefix}qr
${usedPrefix}delete
${usedPrefix}readmore
${usedPrefix}styletext

*「 J U E G O S 」*
${usedPrefix}mates
${usedPrefix}math
${usedPrefix}simi
${usedPrefix}suerte
${usedPrefix}ppt
${usedPrefix}tictactoe
${usedPrefix}deltictactoe
${usedPrefix}topgays
${usedPrefix}topotakus
${usedPrefix}gay
${usedPrefix}doxear
${usedPrefix}pregunta
${usedPrefix}apostar
${usedPrefix}slot
${usedPrefix}dado

*「 G R U P O S 」*
${usedPrefix}grupo
${usedPrefix}kick
${usedPrefix}add
${usedPrefix}banchat
${usedPrefix}unbanchat
${usedPrefix}admins
${usedPrefix}infogroup
${usedPrefix}promote
${usedPrefix}demote
${usedPrefix}hidetag
${usedPrefix}tagall
${usedPrefix}link
${usedPrefix}banchat
${usedPrefix}unbanchat

*「 E N A B L E / D I S A B L E 」*
${usedPrefix}enable welcome
${usedPrefix}disable welcome
${usedPrefix}enable public
${usedPrefix}disable public
${usedPrefix}enble antilink
${usedPrefix}disable antilink
${usedPrefix}enable antilink2
${usedPrefix}disable antilink2
${usedPrefix}enable restrict
${usedPrefix}disable restrict
${usedPrefix}enable autoread
${usedPrefix}disable autoread
${usedPrefix}enable detect
${usedPrefix}disable detect
${usedPrefix}enable pconly
${usedPrefix}disable pconly
${usedPrefix}enable gconly
${usedPrefix}disable gconly

*「 R P G 」*
${usedPrefix}minar
${usedPrefix}minar3
${usedPrefix}minardiamantes
${usedPrefix}daily
${usedPrefix}work
${usedPrefix}afk
${usedPrefix}rob
${usedPrefix}limit
${usedPrefix}reg
${usedPrefix}unreg
${usedPrefix}myns
${usedPrefix}perfil
${usedPrefix}levelup

*「 STICKER 」*
${usedPrefix}s
${usedPrefix}wm

*「 O W N E R 」*
${usedPrefix}update
${usedPrefix}restart
${usedPrefix}autoadmin
${usedPrefix}leave
${usedPrefix}salir
${usedPrefix}cleartpm
${usedPrefix}bc
${usedPrefix}bcgc
${usedPrefix}bcc
${usedPrefix}banuser
${usedPrefix}unbanuser`
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
            'thumbnail': fs.readFileSync('./storage/menus/Menu1.jpg'),
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
}
