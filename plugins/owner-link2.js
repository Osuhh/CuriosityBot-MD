let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = `https://chat.whatsapp.com/KlRcEfl8snBEEOA0JXzw5A`
const grupo1 = 'https://chat.whatsapp.com/JegOp8NUSMd0vn75s4hkaj'
const grupo2 = 'https://chat.whatsapp.com/Kd0Wz2njjzQFtlCvvXHTOc'
const grupo3 = 'https://chat.whatsapp.com/H9qLgMSiTWMBEcfCFXH01X'
const grupo4 = 'https://chat.whatsapp.com/CtpC4uVn0k14XPYOt0fwzo'
const grupo5 = 'https://chat.whatsapp.com/COCca5OBe9MEkR2cs929rg'
const grupo6 = 'https://chat.whatsapp.com/IHoWJiPLkRcJ8UfREeLqhC'
const grupo7  = 'https://chat.whatsapp.com/Dxnmx8LHnYTBlshaPqguL7'
//const grupo8 = 'https://chat.whatsapp.com/Kpoes0QPZi4LOfNUgLKef7'
const grupo9 = 'https://chat.whatsapp.com/LZkygD2NUWCAx1ipsJiSz9'
const grupo10 = 'https://chat.whatsapp.com/E3p8lq6Ya3o2DIoIhoKQw1' //a
const grupo11 = 'https://chat.whatsapp.com/HPcoGd32atmKZPEbgCYDaO'

let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'CuriosityBot-MD', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': 'Unirte a mi grupo ^~^', 'jpegThumbnail': false }}}
let [_, code] = grupo.match(linkRegex) || []
let [_1, code1] = grupo1.match(linkRegex) || []
let [_2, code2] = grupo2.match(linkRegex) || []
let [_3, code3] = grupo3.match(linkRegex) || []
let [_4, code4] = grupo4.match(linkRegex) || []
let [_5, code5] = grupo5.match(linkRegex) || []
let [_6, code6] = grupo6.match(linkRegex) || []
let [_7, code7] = grupo7.match(linkRegex) || []
//let [_8, code8] = grupo8.match(linkRegex) || []
let [_9, code9] = grupo9.match(linkRegex) || []
let [_10, code10] = grupo10.match(linkRegex) || []
let [_11, code11] = grupo11.match(linkRegex) || []
try {
if (!text) return m.reply(`_Ingrese Texto/link del grupo_`) 
    
let res = await conn.groupAcceptInvite(code)
//await delay(3 * 3000)
let res1 = await conn.groupAcceptInvite(code1)
let res2 = await conn.groupAcceptInvite(code2)
let res3 = await conn.groupAcceptInvite(code3)
let res4 = await conn.groupAcceptInvite(code4)
let res5 = await conn.groupAcceptInvite(code5)
let res6 = await conn.groupAcceptInvite(code6)
//await delay(2 * 2000)
let res7 = await conn.groupAcceptInvite(code7)
//let res8 = await conn.groupAcceptInvite(code8)
let res9 = await conn.groupAcceptInvite(code9)
let res10 = await conn.groupAcceptInvite(code10)
let res11 = await conn.groupAcceptInvite(code11)

 // let [_, code] = grupo.match(linkRegex) || []
 // if (!code) throw '❎ El link es invalido' 
  //let res = await conn.groupAcceptInvite(code)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`*vamos divertinos un rato :v*`)
  await delay(5 * 5000)
  await conn.sendMessage(res, { text: text, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await delay(3 * 3000)
  await conn.sendMessage(res1, { text: text, mentions: (await conn.groupMetadata(`${res1}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await delay(3 * 3000)
  await conn.sendMessage(res2, { text: text, mentions: (await conn.groupMetadata(`${res2}`)).participants.map(v => v.id) }, { quoted: fakegif }),
  await delay(3 * 3000)
  await conn.sendMessage(res3, { text: text, mentions: (await conn.groupMetadata(`${res3}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await delay(3 * 3000)
  await conn.sendMessage(res4, { text: text, mentions: (await conn.groupMetadata(`${res4}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await delay(3 * 3000)
  await conn.sendMessage(res5, { text: text, mentions: (await conn.groupMetadata(`${res5}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await delay(3 * 3000)
  await conn.sendMessage(res6, { text: text, mentions: (await conn.groupMetadata(`${res6}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await delay(3 * 3000)
  await conn.sendMessage(res7, { text: text, mentions: (await conn.groupMetadata(`${res7}`)).participants.map(v => v.id) }, { quoted: fakegif })
/*  await delay(3 * 3000)
  await conn.sendMessage(res8, { text: text, mentions: (await conn.groupMetadata(`${res8}`)).participants.map(v => v.id) }, { quoted: fakegif })*/
  await delay(3 * 3000)
  await conn.sendMessage(res9, { text: text, mentions: (await conn.groupMetadata(`${res9}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await delay(3 * 3000)
  await conn.sendMessage(res10, { text: text, mentions: (await conn.groupMetadata(`${res10}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await delay(3 * 3000)
  await conn.sendMessage(res11, { text: text, mentions: (await conn.groupMetadata(`${res11}`)).participants.map(v => v.id) }, { quoted: fakegif })
  
  await conn.groupLeave(res1)
  await conn.groupLeave(res2)
  await conn.groupLeave(res3)
  await conn.groupLeave(res4)
  await conn.groupLeave(res5)
  await conn.groupLeave(res6)
  await conn.groupLeave(res7)
 // await conn.groupLeave(res8)
  await conn.groupLeave(res9)
  await conn.groupLeave(res10)
  await conn.groupLeave(res11)
  await m.reply(`*Listo :D*`)
} catch (e) {
await m.reply(`Error no pude manda link a todo los grupo sera que alguno tiene la aprobación :v`)
}}
handler.help = ['enlace1']
handler.tags = ['owner']
handler.command = ['enlace1'] 

handler.owner = true

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
