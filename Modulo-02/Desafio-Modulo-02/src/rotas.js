const express = require('express')

const validarSenha = require('./intermediarios/validarsenha')
const listarContas = require('./controladores/listarcontas')
const criarContas = require('./controladores/criarconta')
const atualizarDados = require('./controladores/atualizardados')
const deletarConta = require('./controladores/deletarconta')
const depositar = require('./controladores/depositar')
const sacar = require('./controladores/sacar')
const transferir = require('./controladores/transferir')
const consultarSaldo = require('./controladores/consultarsaldo')
const gerarExtrato = require('./controladores/extrato')

const roteador = express()

roteador.get('/contas', validarSenha, listarContas)
roteador.post('/contas', criarContas)
roteador.put('/contas/:numeroConta/usuario', atualizarDados)
roteador.delete('/contas/:numeroConta', deletarConta)
roteador.post('/transacoes/depositar', depositar)
roteador.post('/transacoes/sacar', sacar)
roteador.post('/transacoes/transferir', transferir)
roteador.get('/contas/saldo', consultarSaldo)
roteador.get('/contas/extrato', gerarExtrato)

module.exports = roteador
