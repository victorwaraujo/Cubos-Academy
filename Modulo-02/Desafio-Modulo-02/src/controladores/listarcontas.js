const dados = require('../bancodedados')

const listarContas = (req, res) => {
  if (!dados.contas) {
    return res
      .send(400)
      .json({ mensagem: 'O servidor não entendeu a requisição' })
  }
  return res.status(200).json(dados.contas)
}

module.exports = listarContas
