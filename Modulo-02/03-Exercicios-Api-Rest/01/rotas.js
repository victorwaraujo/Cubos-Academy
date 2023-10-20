const express = require('express')
const {
  listaDeAlunos,
  idDoAluno,
  cadastrarAluno,
  excluirAluno
} = require('./controladores/alunos')
const { validarSenha } = require('./intermediarios')

const roteador = express()
roteador.use(validarSenha)
roteador.get('/', listaDeAlunos)
roteador.get('/:id', idDoAluno)
roteador.post('/', cadastrarAluno)
roteador.delete('/:id', excluirAluno)

module.exports = roteador
