const numeros = [0, 122, 4, 6, 8, 44, 1]

const resultado = numeros.every(numero => {
  return numero % 2 === 0
})
if (resultado) {
  console.log('array válido')
} else {
  console.log('array inválido')
}
