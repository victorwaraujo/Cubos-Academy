const numeros = [3, 8, 4, 7, 8, 34, 1, 6, 5, 10]

let soma = 0
for (let number of numeros) {
  if (number % 2 === 0) {
    soma += number
  }
}
console.log(soma)
