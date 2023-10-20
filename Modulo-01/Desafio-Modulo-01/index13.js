const input = '5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7'

const arrayDeLinhas = input.split('\n')
const numeroDeFuncionarios = Number(arrayDeLinhas[0])

arrayDeLinhas.shift()
const coordenadasXY = []

for (let coordenada of arrayDeLinhas) {
  let pontoA = coordenada.split(' ')
  let x = Number(pontoA[0])
  let y = Number(pontoA[1])
  coordenadasXY.push({
    coordenadaX: x,
    coordenadaY: y
  })
}

let maiorDistancia = 0
for (let i = 0; i < coordenadasXY.length; i++) {
  for (let j = i + 1; j < coordenadasXY.length; j++) {
    let d = Math.sqrt(
      (coordenadasXY[j].coordenadaX - coordenadasXY[i].coordenadaX) ** 2 +
        (coordenadasXY[j].coordenadaY - coordenadasXY[i].coordenadaY) ** 2
    )
    if (d > maiorDistancia) {
      maiorDistancia = d
    }
  }
}
console.log(maiorDistancia)
