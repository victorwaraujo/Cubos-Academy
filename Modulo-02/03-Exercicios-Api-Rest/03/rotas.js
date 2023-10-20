const express = require('express')
const {
  consultarLivros,
  obterUmLivro,
  cadastrarUmLivro,
  alterarUmLivro,
  alterarParteDoLivro,
  excluirUmLivro
} = require('./controladores/bibliotecaonline')

const roteador = express()

roteador.get('/livros', consultarLivros)

roteador.get('/livros/:id', obterUmLivro)

roteador.post('/livros', cadastrarUmLivro)

roteador.put('/livros/:id', alterarUmLivro)

roteador.patch('/livros/:id', alterarParteDoLivro)

roteador.delete('/livros/:id', excluirUmLivro)

module.exports = roteador
