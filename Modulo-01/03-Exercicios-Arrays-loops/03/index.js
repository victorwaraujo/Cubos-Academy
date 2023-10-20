const numeros = [54, 22, 10, 14, 87, 284, 10]

let indice = 0

let tem10 = false

for (let num of numeros) {
  if (num === 10) {
    tem10 = true
    console.log(indice)
    break
  }

  indice++
}

if (!tem10) {
  console.log(-1)
}
