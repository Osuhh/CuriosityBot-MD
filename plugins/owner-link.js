let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = `｡ﾟﾟ･｡･ﾟﾟ｡
ﾟ。𝙒𝙚𝙡𝙘𝙤𝙢𝙚 ✨
 ﾟ･｡･¢σмραятє тυѕ єηℓα¢єѕ ❤ •˚ 

💫 ＊*•̩̩͙✩•̩̩͙*˚ 𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜 ˚*•̩̩͙✩•̩̩͙*˚＊ 💫

🍓⃟➤ 𝐄𝐧𝐥𝐚𝐜𝐞𝐬, 𝐘𝐨𝐮𝐭𝐮𝐛𝐞, 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤, 
🍒⃟➤ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦,𝐓𝐢𝐤𝐭𝐨𝐤,𝐒𝐧𝐚𝐩𝐜𝐡𝐚𝐭...)
🍓⃟➤ 𝐌𝐮𝐬𝐢𝐜𝐚
🍒⃟➤ 𝐅𝐨𝐧𝐝𝐨𝐬 𝐃𝐞 𝐏𝐚𝐧𝐭𝐚𝐥𝐥𝐚
🍓⃟➤ 𝐕𝐢𝐝𝐞𝐨𝐬
🍒⃟➤ 𝐋𝐢𝐛𝐫𝐨𝐬
🍓⃟➤ 𝐈𝐦𝐚𝐠𝐞𝐧𝐞𝐬
🍒⃟➤ 𝐉𝐮𝐞𝐠𝐨𝐬
🍓⃟➤ 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬
🍒⃟➤ 𝐀𝐩𝐤❴𝐌𝐨𝐝/𝐍𝐨𝐫𝐦𝐚𝐥❵
🍓⃟➤ 𝐏𝐝𝐟
🍒⃟➤ 𝐏𝐞𝐥𝐢𝐜𝐮𝐥𝐚𝐬
🍓⃟➤ 𝐀𝐧𝐢𝐦𝐞𝐬

🧨 ＊*•̩̩͙✩•̩̩͙*˚ 𝑃𝑟𝑜ℎ𝑖𝑏𝑖𝑑𝑜 ˚*•̩̩͙✩•̩̩͙*˚＊ 🧨

⚠️⃟➤ 𝐂𝐩 ❴𝐏𝐨𝐫𝐧𝐨 𝐈𝐧𝐟𝐚𝐧𝐭𝐢𝐥❵ 
⚠️⃟➤ 𝐆𝐨𝐫𝐞
⚠️➤ 𝐍𝐞𝐜𝐫𝐨𝐟𝐢𝐥𝐢𝐚
⚠️⃟➤ 𝐙𝐨𝐨𝐟𝐢𝐥𝐢𝐚
⚠️⃟➤ 𝐒𝐩𝐚𝐦
⚠️⃟➤ 𝐓𝐫𝐚𝐛𝐚𝐬

╔.★. .═══════════╗
 𝙰𝚐𝚛𝚎𝚐𝚊 𝚙𝚎𝚛𝚜𝚘𝚗𝚊𝚜 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘 𝚙𝚊𝚛𝚊 𝚐𝚊𝚗𝚊𝚛 𝚊𝚍𝚖𝚒𝚗 🇭🇰
╚═══════════. .★.╝ 

🥏 𝐋𝐢𝐧𝐤
╭┉┉┅┄┄•◦ೋ•◦❥•◦ೋ  https://chat.whatsapp.com/KlRcEfl8snBEEOA0JXzw5A         
•◦ೋ•◦❥•◦ೋ•┈┄┄┅┉╯

🍿 𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐭𝐲𝐁𝐨𝐭-𝐌𝐃
╭┉┉┅┄┄•◦ೋ•◦❥•◦ೋ   https://chat.whatsapp.com/JiCOqSlcPVfEDu8WroH6ed         
•◦ೋ•◦❥•◦ೋ•┈┄┄┅┉╯`
let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'CuriosityBot-MD', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': 'Unirte a mi grupo ^~^', 'jpegThumbnail': false }}}

  if (!text) throw `⚠️ *Ingrese el link de un grupo de WhatsApp.*`
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw '❎ El link es invalido'
  let res = await conn.groupAcceptInvite(code)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`*Haciendo cositas malas >:) . . .*`)
  await conn.sendMessage(res, { text: grupo, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.sendMessage(res, { text: grupo, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res)
  await m.reply(`*Ya se spameo el grupo :D*`)
}

handler.help = ['spamgp']
handler.tags = ['owner']
handler.command = ['spamgp'] 

handler.owner = true

export default handler
