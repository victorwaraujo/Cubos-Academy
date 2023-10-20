const express = require('express')
const {
  listarProdutos,
  obterProduto,
  calcularFrete
} = require('./controladores/listarProdutos')

const roteadores = express()

roteadores.get('/produtos', listarProdutos)
roteadores.get('/produtos/:idProduto', obterProduto)
roteadores.get('/produtos/:idProduto/frete/:cep', calcularFrete)

module.exports = roteadores
