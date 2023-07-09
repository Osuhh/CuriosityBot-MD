let handler = async (m, { conn, usedPrefix, args }) => {

let amount = args[0]

if (global.db.data.users[m.sender].exp < amount) {
  return m.reply('No tienes suficientes exp para realizar esa apuesta.')
}

let payout = 0;
const randomNumber = Math.floor(Math.random() * 850) + 1; // Generar un número aleatorio entre 1 y 850
let type = args[1].toLowerCase()
switch (type) {
  case '1st':
    if (randomNumber >= 1 && randomNumber <= 12) {
      payout = amount * 3
    }
    break
  default:
    return m.reply('El espacio apostado es inválido.')
}
if (payout > 0) {
  global.db.data.users[m.sender].exp += payout // Gano la apuesta
  m.reply(`¡Ganaste ${payout} 🪙! Ahora tienes un total de ${global.db.data.users[m.sender].exp} exp.`)
} else {
  global.db.data.users[m.sender].exp -= amount; // Perdio la apuesta
  m.reply(`Perdiste ${amount} monedas. Ahora tienes un total de ${global.db.data.users[m.sender].exp} monedas.`)
   }
  
}
handler.disabled = false 
handler.command = ['ruleta']
export default handler