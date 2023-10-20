const numeros = [3, 24, 1, 8, 11, 37, 7, 15]

numeroMaior = 0
for (let numbers of numeros) {
  if (numbers > numeroMaior) {
    numeroMaior = numbers
  }
}
console.log(numeroMaior)
