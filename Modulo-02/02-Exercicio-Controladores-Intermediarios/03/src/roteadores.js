const express = require('express')
const { listaDeImoveis, idDoImovel } = require('./controladores/imoveis.js')

const roteador = express()
roteador.get('/imoveis', listaDeImoveis)
roteador.get('/imoveis/:id', idDoImovel)

module.exports = roteador
