const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

//a) Ordenar o array abaixo em ordem crescente.
const ordenarCrescente = numeros.sort((a, b) => {
  return a - b
})
console.log(numeros)

//b) Ordenar o array abaixo em ordem decrescente.
const ordenarDecrescente = numeros.sort((a, b) => {
  return b - a
})
console.log(numeros)

//c) Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode

numeros.sort()
console.log(numeros)

//d) Ordenar o array abaixo em ordem alfabética.

const frutas = ['Banana', 'Amora', 'abacaxi', 'uva', 'Pera']

const ordemAlfabeticaCresc = frutas.sort((primeiro, segundo) => {
  return primeiro.localeCompare(segundo)
})
console.log(frutas)

//e) Ordenar o array abaixo em ordem alfabética decrescente.

const ordemAlfabeticaDecresc = frutas.sort((primeiro, segundo) => {
  return segundo.localeCompare(primeiro)
})
console.log(frutas)

//f) Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).

const ordenarPorCaractere = frutas.sort((primeiro, segundo) => {
  return primeiro.length - segundo.length
})
console.log(frutas)
