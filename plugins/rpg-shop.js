//import db from '../lib/database.js'

const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `╔═❖ *ɴᴏᴛᴀ ᴅᴇ ᴘᴀɢᴏ*
║‣ *ᴄᴏᴍᴘʀᴀ* : + ${count}💎 
║‣ *ɢᴀsᴛᴀᴅᴏ* : -${xpperdiamond * count} XP
╚═══════════════`, m)
  } else conn.reply(m.chat, `❎ ʟᴏ sɪᴇɴᴛᴏ, ɴᴏ ᴛɪᴇɴᴇs sᴜғɪᴄɪᴇɴᴛᴇs *xᴘ* ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ *${count}* ᴅɪᴀᴍᴀɴᴛᴇs💎\n\n ᴘᴜᴇᴅᴇs ᴄᴏɴsᴇɢᴜɪʀ *xᴘ* ᴜsᴀɴᴅᴏ ʟᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴇʟ *ᴍᴇɴᴜ ᴊᴜᴇɢᴏs ʏ ᴇᴄᴏɴᴏᴍɪᴀ`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['econ']
handler.command = ['buy', 'buyall'] 
handler.register = true
handler.disabled = false

export default handler
