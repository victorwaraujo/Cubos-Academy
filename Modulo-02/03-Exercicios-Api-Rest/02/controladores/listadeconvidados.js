let convidados = require('../dados/convidados')

const listarOsConvidados = async (req, res) => {
  try {
    res.status(200).json(convidados)
  } catch (error) {
    console.error('Erro interno do servidor', error)
    res.status(500).json({ mensagem: 'Erro interno do serividor' })
  }
}

const localizarUmConvidado = async (req, res) => {
  try {
    const { nome } = req.query
    const convidado = convidados.find(convidado => {
      return nome === convidado
    })
    if (!convidado) {
      res.status(404).json({ mensagem: 'Convidado não encontrado' })
    }

    res.status(200).json({ mensagem: 'Convidado presente' })
  } catch (error) {
    console.error('Erro interno do servidor', error)
    res
      .status(500)
      .json({ mensagem: 'Erro interno do serividor, convidado não encontrado' })
  }
}

const adicionarUmConvidado = async (req, res) => {
  try {
    const { nome } = req.body
    const convidado = convidados.find(convidado => {
      return nome === convidado
    })
    if (convidado) {
      res.status(200).json({
        mensagem:
          'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.'
      })
    }
    if (!convidado) {
      convidados.push(nome)
      res.status(200).json({ mensagem: 'Convidado adicionado.' })
    }
  } catch (error) {
    console.error('Erro interno do servidor', error)
    res.status(500).json({ mensagem: 'Erro interno do serividor,' })
  }
}

const removerUmConvidado = (req, res) => {
  const { nome } = req.params
  const indiceConvidado = convidados.findIndex(convidado => {
    return convidado === nome
  })
  if (indiceConvidado < 0) {
    res.status(404).json({
      mensagem:
        'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.'
    })
  }
  convidados.splice(indiceConvidado, 1)
  return res.status(200).json({ mensagem: 'Convidado removido.' })
}

module.exports = {
  listarOsConvidados,
  localizarUmConvidado,
  adicionarUmConvidado,
  removerUmConvidado
}
