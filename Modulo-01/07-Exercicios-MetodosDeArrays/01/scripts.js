const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva']

let frutasNovo = frutas.reverse()
let frutasString = frutas.join(', ')
console.log(frutasString)
//aplicando o reverse novamente para o array voltar a composição original
frutasNovo = frutas.reverse()
frutas.pop()
frutas.shift()
frutas.splice(frutas.length, 0, 'Melão')
console.log(frutas)
