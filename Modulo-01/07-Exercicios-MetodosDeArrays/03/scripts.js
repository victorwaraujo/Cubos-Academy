const nomes = [
  'Ford Ká',
  'Ranger',
  'Hilux',
  'Corola',
  'Fusca',
  'Chevete',
  'Brasilia'
]
const posicao = 3

function imprimirPosicaoMaisDois(carros, posicao) {
  let carroPosicao = []
  for (i = 0; i < carros.length; i++) {
    if (i === posicao) {
      carroPosicao = carros.splice(i, 3)
    }
  }
  console.log(`${carroPosicao.join(' - ')}`)
}
imprimirPosicaoMaisDois(nomes, posicao)
