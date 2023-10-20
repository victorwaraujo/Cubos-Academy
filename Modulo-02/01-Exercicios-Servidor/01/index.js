const express = require('express')

const jogadores = ['Jose', 'Maria', 'João', 'Marcos', 'Fernanda']
let posicao = 0

const app = express()

app.get('/', (req, res) => {
  const jogadorDaVez = jogadores[posicao]
  posicao += 1
  if (posicao >= jogadores.length) {
    posicao = 0
  }
  res.send(`É a vez de ${jogadorDaVez} jogar`)
})

app.listen(3000)
