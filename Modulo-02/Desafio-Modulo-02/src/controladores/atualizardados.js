const dados = require('../bancodedados')

const atualizarDados = (req, res) => {
  const { numeroConta } = req.params
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

  if (!numeroConta) {
    return res
      .status(401)
      .json({ mensagem: 'O  numero da conta não foi informado' })
  }
  if (!nome && !cpf && !data_nascimento && !telefone && !email && !senha) {
    return res.status(400).json({
      mensagem: 'É preciso informar ao menos um campo para atualização da conta'
    })
  }

  const contaExistente = dados.contas.find(conta => {
    return conta.numero === Number(numeroConta)
  })
  if (!contaExistente) {
    return res.status(404).json({
      mensagem:
        'Não foi possível encontrar conta para o numero de conta informado'
    })
  }

  if (cpf) {
    const cpfExistente = dados.contas.find(conta => {
      return conta.usuario.cpf === cpf
    })
    if (cpfExistente) {
      return res.status(400).json({ mensagem: 'O cpf já está em uso' })
    }
  }

  if (email) {
    const emailExistente = dados.contas.find(conta => {
      return conta.usuario.email === email
    })
    if (emailExistente) {
      return res.status(400).json({ mensagem: 'O email já está em uso' })
    }
  }

  const camposAtualizados = [
    'nome',
    'cpf',
    'data_nascimento',
    'telefone',
    'email',
    'senha'
  ]
  let atualizou = false

  camposAtualizados.forEach(campo => {
    if (req.body[campo]) {
      contaExistente.usuario[campo] = req.body[campo]
      atualizou = true
    }
  })

  if (!atualizou) {
    return res.status(400).json({ mensagem: 'Erro ao atualizar os dados' })
  }

  return res.status(200).json({ mensagem: 'Conta atualizada com sucesso' })
}
module.exports = atualizarDados
