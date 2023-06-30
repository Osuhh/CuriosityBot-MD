//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\nFelicidades subiste de nivel sigue asi 👏\n\n☞ NIVEL ANTERIOR: ${before}\n☞ NIVEL ACTUAL: ${user.level}\n☞ RANGO : ${user.role}\n☞ FECHA: ${new Date().toLocaleString('id-ID')}\n\n\n_*Para ver tu XP en tiempo real coloca el comando #level*_`.trim())
    }
}

