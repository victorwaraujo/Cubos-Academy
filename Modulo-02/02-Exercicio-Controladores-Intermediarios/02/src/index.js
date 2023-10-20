const express = require('express')
const {
  vezDeJogar,
  adicionarJogador,
  removerJogador
} = require('./controladores/jogador')
const app = express()

app.get('/', vezDeJogar)
app.get('/remover', removerJogador)
app.get('/adicionar', adicionarJogador)

app.listen(8000)
//
