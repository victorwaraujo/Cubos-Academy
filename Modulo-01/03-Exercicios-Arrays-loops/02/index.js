const letras = ['e', 'c', 'E', 'J', 'K', 'e', 'f', 'E', 'e']

totalLetrasEe = 0
letraEncontrada = false

for (let words of letras) {
  if (words === 'E' || words === 'e') {
    totalLetrasEe++
    letraEncontrada = true
  }
}

if (letraEncontrada) {
  console.log(totalLetrasEe)
} else {
  console.log('Nenhuma letra E ou e foi encontrada.')
}

//else {
// console.log('Nenhuma letra E ou e foi encontrada.')
