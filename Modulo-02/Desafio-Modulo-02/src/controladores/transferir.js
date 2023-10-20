const dados = require('../bancodedados')

const transferir = (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body
  if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
    return res.status(400).json({
      mensagem:
        'Os campos numero_conta_origem, numero_conta_destino, valor e senha são obrigatórios'
    })
  }

  const contaOrigemExistente = dados.contas.find(conta => {
    return conta.numero === Number(numero_conta_origem)
  })

  if (!contaOrigemExistente) {
    return res.status(404).json({
      mensagem:
        'Não foi possível encontrar conta para o numero de conta informado'
    })
  }
  const contaDestinoExistente = dados.contas.find(conta => {
    return conta.numero === Number(numero_conta_destino)
  })

  if (!contaDestinoExistente) {
    return res.status(404).json({
      mensagem:
        'Não foi possível encontrar conta para o numero de conta informado'
    })
  }

  if (senha !== contaOrigemExistente.usuario.senha) {
    return res
      .status(401)
      .json({ mensagem: 'A senha informada está incorreta' })
  }
  if (valor <= 0) {
    return res.status(400).json({
      mensagem: 'O valor a ser transferido precisa ser maior que zero'
    })
  }

  if (valor > contaOrigemExistente.saldo) {
    return res.status(400).json({
      mensagem: 'O valor da transferência não pode ser superior ao saldo'
    })
  }
  const dataAtual = new Date()
  const dataFormatada = dataAtual.toISOString()
  const transferencia = {
    data: dataFormatada,
    numero_conta_origem,
    numero_conta_destino,
    valor: valor
  }
  dados.transferencias.push(transferencia)

  let saldoAtualOrigem = contaOrigemExistente.saldo - valor
  contaOrigemExistente.saldo = saldoAtualOrigem

  let saldoAtualDestino = contaDestinoExistente.saldo + valor
  contaDestinoExistente.saldo = saldoAtualDestino
  return res.status(200).json({
    mensagem: 'Sua transferência foi realizada com sucesso'
  })
}

module.exports = transferir
