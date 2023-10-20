const cartaParaCima = '3'

let conjuntoDecartas = ['Q', 'J', 'K', 'A', '2', '3']

const encontarCarta = conjuntoDecartas.indexOf(cartaParaCima)
let cartaMatilha = encontarCarta + 1
if (cartaMatilha >= conjuntoDecartas.length) {
  cartaMatilha = 0
}
console.log(conjuntoDecartas[cartaMatilha])
