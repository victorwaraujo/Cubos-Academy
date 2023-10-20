let lista = [2, 3, 4, 7, 20, 4]

const somaTotal = lista.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual
})
let mediaPorDia = (somaTotal / lista.length).toFixed(2)
console.log(mediaPorDia)
