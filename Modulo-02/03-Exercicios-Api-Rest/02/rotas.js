const express = require('express')
const {
  listarOsConvidados,
  localizarUmConvidado,
  adicionarUmConvidado,
  removerUmConvidado
} = require('./controladores/listadeconvidados')

const roteador = express()

roteador.get('/', listarOsConvidados)
roteador.get('/convidados', localizarUmConvidado)
roteador.post('/convidados', adicionarUmConvidado)
roteador.delete('/convidados/:nome', removerUmConvidado)

module.exports = roteador
