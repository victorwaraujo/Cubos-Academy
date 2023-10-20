const imoveis = require('../bancosdedados')

const listaDeImoveis = (req, res) => {
  res.send(imoveis)
}
const idDoImovel = (req, res) => {
  const { id } = req.params
  const imovelEncontrado = imoveis.find(imovel => {
    return imovel.id === Number(id)
  })
  res.send(imovelEncontrado)
}

module.exports = { listaDeImoveis, idDoImovel }
