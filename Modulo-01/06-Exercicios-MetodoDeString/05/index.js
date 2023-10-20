const numeroCartao = '3411222233334444'

let primeiros_numeroCartao = numeroCartao.slice(0, 4)
//let 8proximos_numeros = numeroCartao.slice(4,12)
//8proximos_numeros = 8proximos_numeros.replace( )
let ultimos_numeroCartao = numeroCartao.slice(12, 16)
ultimos_numeroCartao = ultimos_numeroCartao.padStart(12, '*')
console.log(`${primeiros_numeroCartao}${ultimos_numeroCartao}`)
