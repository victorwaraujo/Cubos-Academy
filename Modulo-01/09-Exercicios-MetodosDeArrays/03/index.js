const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44, 234, -788]

const maiorNumero = numeros.reduce((acumulador, elementoAtual) => {
  if (acumulador > elementoAtual) {
    return acumulador
  } else {
    return elementoAtual
  }
})
console.log(maiorNumero)
