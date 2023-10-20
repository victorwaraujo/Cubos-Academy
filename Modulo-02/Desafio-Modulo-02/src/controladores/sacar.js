const dados = require('../bancodedados')

const sacar = (req, res) => {
  const { numero_conta, valor, senha } = req.body

  if (!numero_conta || !valor || !senha) {
    return res.status(400).json({
      mensagem: 'Os campos numero_conta, valor e senha são obrigatórios'
    })
  }

  const contaExistente = dados.contas.find(conta => {
    return conta.numero === Number(numero_conta)
  })

  if (!contaExistente) {
    return res.status(404).json({
      mensagem:
        'Não foi possível encontrar conta para o numero de conta informado'
    })
  }

  if (senha !== contaExistente.usuario.senha) {
    return res
      .status(401)
      .json({ mensagem: 'A senha informada está incorreta' })
  }

  if (valor > contaExistente.saldo) {
    return res.status(400).json({
      mensagem: 'O valor do saque não pode ser superior ao saldo'
    })
  }

  const dataAtual = new Date()
  const dataFormatada = dataAtual.toISOString()
  const saque = {
    data: dataFormatada,
    numero_conta: numero_conta,
    valor: valor
  }
  dados.saques.push(saque)

  let saldoAtual = contaExistente.saldo - valor
  contaExistente.saldo = saldoAtual
  return res
    .status(200)
    .json({ mensagem: 'Seu saque foi realizado com sucesso' })
}

module.exports = sacar
