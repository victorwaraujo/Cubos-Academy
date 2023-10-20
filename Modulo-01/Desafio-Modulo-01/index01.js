let lista = [1, 2, 3, 4, 9, 11, 13, 18]

const somaTotal = lista.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual
})
console.log(somaTotal)
