let handler = async (m, { conn, usedPrefix, args }) => {

let amount = args[0]

if (global.db.data.users[m.sender].coins < amount) {
  return m.reply('No tienes suficientes monedas para realizar esa apuesta.')
}

let payout = 0;
const randomNumber = Math.floor(Math.random() * 36) + 1; // Generar un número aleatorio entre 1 y 36
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
  global.db.data.users[m.sender].coins += payout // Gano la apuesta
  m.reply(`¡Ganaste ${payout} 🪙! Ahora tienes un total de ${global.db.data.users[m.sender].coins} monedas.`)
} else {
  global.db.data.users[m.sender].coins -= amount; // Perdio la apuesta
  m.reply(`Perdiste ${amount} monedas. Ahora tienes un total de ${global.db.data.users[m.sender].coins} monedas.`)
   }
  
}
handler.disabled = false 
handler.command = ['ruleta']
export default handler