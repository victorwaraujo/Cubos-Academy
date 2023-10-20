const dados = require('../bancodedados')

const deletarConta = (req, res) => {
  const { numeroConta } = req.params
  const indiceConta = dados.contas.findIndex(conta => {
    return conta.numero === Number(numeroConta)
  })
  if (indiceConta < 0) {
    return res.status(404).json({
      mensagem: 'Não existe conta para ser excluida'
    })
  }

  if (dados.contas[indiceConta].saldo === 0) {
    dados.contas.splice(indiceConta, 1)
    return res.status(200).json({ mensagem: 'Conta excluída com sucesso' })
  } else {
    return res
      .status(403)
      .json({ mensagem: 'Você não pode excluir uma conta com saldo positivo' })
  }
}

module.exports = deletarConta
