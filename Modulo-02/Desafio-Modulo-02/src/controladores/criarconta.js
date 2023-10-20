const dados = require('../bancodedados')
let saldoInicial = 0
let proximoNumero = 1

const criarContas = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

  const camposObrigatorios = [
    'nome',
    'cpf',
    'data_nascimento',
    'telefone',
    'email',
    'senha'
  ]
  for (const campo of camposObrigatorios) {
    if (!req.body[campo]) {
      return res
        .status(400)
        .json({ mensagem: `O campo ${campo} é obrigatório` })
    }
  }

  const cpfExistente = dados.contas.find(conta => {
    return conta.usuario.cpf === cpf
  })
  if (cpfExistente) {
    return res.status(400).json({ mensagem: 'O cpf já está em uso' })
  }

  const emailExistente = dados.contas.find(conta => {
    return conta.usuario.email === email
  })
  if (emailExistente) {
    return res.status(400).json({ mensagem: 'O email já está em uso' })
  }

  const contaNova = {
    numero: proximoNumero,
    saldo: saldoInicial,
    usuario: { nome, cpf, data_nascimento, telefone, email, senha }
  }

  dados.contas.push(contaNova)
  proximoNumero++
  return res.status(201).json(contaNova)
}

module.exports = criarContas
