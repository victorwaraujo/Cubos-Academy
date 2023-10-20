const express = require('express')

const encontrarEndereco = require('./controladores/encontrarEndereco')

const roteador = express()

roteador.get('/enderecos/:cep', encontrarEndereco)

module.exports = roteador
