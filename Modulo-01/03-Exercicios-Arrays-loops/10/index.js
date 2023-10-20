const numeros = [3, 24, 8, 11, 37, 7, 15]

let menorNumero = Infinity

let numeroMaior = 0
for (let numbers of numeros) {
  if (numbers > numeroMaior) {
    numeroMaior = numbers
  }
  if (numbers < menorNumero) {
    menorNumero = numbers
  }
}
let diferencaFinal = numeroMaior - menorNumero
console.log(diferencaFinal)
