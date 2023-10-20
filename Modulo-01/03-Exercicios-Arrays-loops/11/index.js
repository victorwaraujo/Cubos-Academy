const original = [5, 7, 13, 17, 26, 34, 118, 245, 10, 100, 103, 20]

let novaArray = []

for (let numeros of original) {
  if ((numeros >= 10 && numeros <= 20) || numeros > 100) {
    novaArray.push(numeros)
  }
}
console.log(novaArray)
