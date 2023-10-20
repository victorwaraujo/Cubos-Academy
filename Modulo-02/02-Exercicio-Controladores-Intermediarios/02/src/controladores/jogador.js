const jogadores = require('../bancodedados')
let posicao = 0
const vezDeJogar = (req, res) => {
  const jogadorDaVez = jogadores[posicao]
  posicao += 1
  if (posicao >= jogadores.length) {
    posicao = 0
  }
  res.send(`É a vez de ${jogadorDaVez} jogar!`)
}

const removerJogador = (req, res) => {
  const indice = parseInt(req.query.indice)
  if (indice >= 0 && indice < jogadores.length) {
    jogadores.splice(indice, 1)
    res.send(jogadores)
  } else {
    res.send('Não existe jogador no índice para ser removido.')
  }
}
const adicionarJogador = (req, res) => {
  const nome = req.query.nome
  const indice = parseInt(req.query.indice)
  if (nome && indice <= jogadores.length) {
    jogadores.splice(indice, 0, nome)
    res.send(jogadores)
  } else if (nome && indice > jogadores.length) {
    res.send(
      'O índice informado não existe no array. Novo jogador não adicionado.'
    )
  } else if (nome) {
    jogadores.push(nome)
    res.send(jogadores)
  }
}

module.exports = { vezDeJogar, removerJogador, adicionarJogador }
