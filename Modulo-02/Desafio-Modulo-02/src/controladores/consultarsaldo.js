const dados = require('../bancodedados')

const consultarSaldo = (req, res) => {
  const { numero_conta, senha } = req.query
  if (!numero_conta || !senha) {
    return res
      .status(401)
      .json({ mensagem: 'O  numero da conta e a senha não foi informado' })
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

  return res.status(200).json({ saldo: contaExistente.saldo })
}

module.exports = consultarSaldo
