import db from '../lib/database.js'
let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    if (!text) return m.reply(`Por favor diga su motivo para irse AFK\nEjemplo de uso : \n#afk Voy al baño :v`)
    if (text.length < 10) return m.reply(`El motivo es muy corto`)
    user.afk = + new Date
    user.afkReason = text
    conn.reply(m.chat, `
\t\t\t\t *「 ⏰ ESTADO AFK ⏰ 」*
 
*► Estarás afk hasta que envíes un mensaje.*

👤 *Usuario:* @${m.sender.split`@`[0]} 
👀 *Razón:* ${text ? ': ' + text : ''}
  `, m, { mentions: [m.sender]})
}
handler.help = ['afk *<razón>*']
handler.tags = ['rpg']
handler.command = ['azami']
handler.register = true

export default handler
