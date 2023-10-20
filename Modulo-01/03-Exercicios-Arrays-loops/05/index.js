const original = [4, 16, 4, 7, 27, 53, 58, 90, 44]

let numerosPares = []

for (let numeros of original) {
  if (numeros % 2 === 0) {
    numerosPares.push(numeros)
  }
}
console.log(numerosPares)
