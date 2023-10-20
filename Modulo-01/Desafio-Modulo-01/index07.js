const texto =
  ' Cuidado, pois usuarios as vezes  deixam espacos vazios no fim do    texto sem querer !'

let textoSemCaractere = texto.replace(/[^\w\s]/g, '')
let novaFrase = textoSemCaractere.trim()
let novaArray = novaFrase.split(' ')
let tamanhoDaArray = novaArray.length
for (let palavra of novaArray) {
  if (palavra === '') {
    tamanhoDaArray -= 1
  }
}

console.log(tamanhoDaArray)
