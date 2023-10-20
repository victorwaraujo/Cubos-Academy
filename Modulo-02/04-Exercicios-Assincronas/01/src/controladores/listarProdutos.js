const produtos = require('../bancodedados/produtos')
const { getStateFromZipcode } = require('utils-playground')
const listarProdutos = async (req, res) => {
  res.status(201).json(produtos)
}
const obterProduto = async (req, res) => {
  const { idProduto } = req.params
  const produto = produtos.find(produto => {
    return produto.id === Number(idProduto)
  })
  if (!produto) {
    return res.status(404).json({ mensagem: 'produto não  encontrado' })
  }
  return res.status(201).json(produto)
}

const calcularFrete = async (req, res) => {
  const { idProduto } = req.params
  const produto = produtos.find(produto => {
    return produto.id === Number(idProduto)
  })
  if (!produto) {
    return res.status(404).json({ mensagem: 'produto não  encontrado' })
  }
  const { cep } = req.params

  const estado = await getStateFromZipcode(cep)
  if (
    estado === 'BA' ||
    estado === 'SE' ||
    estado === 'AL' ||
    estado === 'PE' ||
    estado === 'PB'
  ) {
    frete = produto.valor * 0.1
  } else if (estado === 'SP' || estado === 'RJ') {
    frete = produto.valor * 0.15
  } else {
    frete = produto.valor * 0.12
  }

  return res.status(201).json({ produto, estado, frete })
}
module.exports = { listarProdutos, obterProduto, calcularFrete }
