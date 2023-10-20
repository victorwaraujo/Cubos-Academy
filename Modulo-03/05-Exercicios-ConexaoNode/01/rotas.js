const express = require('express')
const cadastrarAutor = require('./controladores/cadastrarautor')
const buscarUmAutor = require('./controladores/buscarautor')
const cadastrarUmLivro = require('./controladores/cadastrarumlivro')
const listarLivro = require('./controladores/listarlivro')

const roteador = express()

roteador.post('/autor', cadastrarAutor)
roteador.get('/autor/:id', buscarUmAutor)
roteador.post('/autor/:id/livro', cadastrarUmLivro)
roteador.get('/livro', listarLivro)

module.exports = roteador
