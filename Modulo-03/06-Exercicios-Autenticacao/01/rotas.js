const express = require('express')
const { cadastrarUsuario, login } = require('./controladores/usuario')
const {
  cadastroPokemons,
  atualizarApelido,
  listarPokemons,
  listarPokemonsPeloId,
  excluirPokemon
} = require('./controladores/pokemon')
const verificarUsuarioLogado = require('./intermediarios/token')

const roteador = express()

roteador.post('/usuario', cadastrarUsuario)
roteador.post('/login', login)

roteador.use(verificarUsuarioLogado)

roteador.post('/pokemons', cadastroPokemons)
roteador.patch('/pokemons/:id', atualizarApelido)
roteador.get('/pokemons', listarPokemons)
roteador.get('/pokemons/:id', listarPokemonsPeloId)
roteador.delete('/pokemons/:id', excluirPokemon)

module.exports = roteador
