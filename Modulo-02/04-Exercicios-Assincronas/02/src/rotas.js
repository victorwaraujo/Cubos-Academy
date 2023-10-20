const express = require('express')
const {
  listagemPokemons,
  detalhesDosPokemons
} = require('./controladores/listagempokemons')

const roteador = express()

roteador.get('/pokemon', listagemPokemons)
roteador.get('/pokemon/:idOuNome', detalhesDosPokemons)

module.exports = roteador
