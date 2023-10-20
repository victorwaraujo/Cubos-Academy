const precos = [150, 50]

let itemMaisBarato = Infinity

for (let item of precos) {
  if (item < itemMaisBarato) {
    itemMaisBarato = item
  }
}

const somaTotal = precos.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual
})
if (precos.length >= 3) {
  itemMaisBarato = itemMaisBarato / 2
  console.log(somaTotal - itemMaisBarato)
} else {
  console.log(somaTotal)
}
