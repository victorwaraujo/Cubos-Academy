const dados = require('../bancodedados')

const depositar = (req, res) => {
  const { numero_conta, valor } = req.body
  const contaExistente = dados.contas.find(conta => {
    return conta.numero === Number(numero_conta)
  })
  if (!numero_conta || !valor) {
    return res
      .status(400)
      .json({ mensagem: 'Os campos numero_conta e valor são obrigatórios' })
  }
  if (!contaExistente) {
    return res.status(404).json({
      mensagem:
        'Não foi possível encontrar conta para o numero de conta informado'
    })
  }

  if (valor <= 0) {
    return res.status(400).json({
      mensagem: 'O valor a ser depositado precisa ser maior que zero'
    })
  }

  const dataAtual = new Date()
  const dataFormatada = dataAtual.toISOString()
  const deposito = {
    data: dataFormatada,
    numero_conta: numero_conta,
    valor: valor
  }
  dados.depositos.push(deposito)

  let saldoAtual = contaExistente.saldo + valor
  contaExistente.saldo = saldoAtual
  return res
    .status(200)
    .json({ mensagem: 'Seu depósito foi realizado com sucesso' })
}

module.exports = depositar
