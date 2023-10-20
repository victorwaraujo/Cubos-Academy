let min = 2
let max = 10
let valores = [0, 5, 6, 10, 11]

let listaDeJogadores = []
function quantidadeJogadores(minimo, maximo, valores) {
  for (let valor of valores) {
    if (valor >= minimo && valor <= maximo) {
      listaDeJogadores.push(valor)
    }
  }
}
quantidadeJogadores(min, max, valores)
console.log(listaDeJogadores)
