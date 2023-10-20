const express = require('express')
const { cadastrarUsuario } = require('./controladores/cadastrarUsuario')
const { enviarNewsletter } = require('./controladores/enviarNewsletter')

const rotas = express()

rotas.post('/usuarios', cadastrarUsuario)

rotas.post('/newsletter', enviarNewsletter)

module.exports = rotas
