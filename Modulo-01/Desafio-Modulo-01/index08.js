const numeros = [1, 1, 1]

const somaTotal = numeros.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual
})

let posicaoDoJodador = 0

let i = 0
while (i < somaTotal) {
  posicaoDoJodador++

  if (posicaoDoJodador > numeros.length) {
    posicaoDoJodador = 1
  }
  i++
}
console.log(posicaoDoJodador)
