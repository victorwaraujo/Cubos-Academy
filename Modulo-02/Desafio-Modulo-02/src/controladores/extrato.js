const dados = require('../bancodedados')

const gerarExtrato = (req, res) => {
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
  const saquesDaConta = dados.saques.filter(
    saques => saques.numero_conta === numero_conta
  )

  const depositosDaConta = dados.depositos.filter(
    depositos => depositos.numero_conta === numero_conta
  )

  const transferenciasEnviadas = dados.transferencias.filter(
    transferencia => transferencia.numero_conta_origem === numero_conta
  )

  const transferenciasRecebidas = dados.transferencias.filter(
    transferencia => transferencia.numero_conta_destino === numero_conta
  )

  return res.status(200).json({
    depositos: depositosDaConta,
    saques: saquesDaConta,
    transferenciasEnviadas,
    transferenciasRecebidas
  })
}

module.exports = gerarExtrato
