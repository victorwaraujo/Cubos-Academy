const produtos = require('../bancodedados/produtos')
const { getStateFromZipcode } = require('utils-playground')

const listarProdutos = async (req, res) => {
  try {
    res.status(201).json(produtos)
  } catch (error) {
    console.error('erro ao listar os produtos', error)
    res.status(500).json({ mensagem: 'erro interno do servidor' })
  }
}
const obterProduto = async (req, res) => {
  try {
    const { idProduto } = req.params
    const produto = produtos.find(produto => {
      return produto.id === Number(idProduto)
    })
    if (!produto) {
      return res.status(404).json({ mensagem: 'produto não  encontrado' })
    }
    return res.status(201).json(produto)
  } catch (error) {
    console.error('Erro ao obter o produto', error)
    res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

const calcularFrete = async (req, res) => {
  try {
    const { idProduto, cep } = req.params
    const produto = produtos.find(produto => {
      return produto.id === Number(idProduto)
    })
    if (!produto) {
      return res.status(404).json({ mensagem: 'produto não  encontrado' })
    }

    const estado = await getStateFromZipcode(cep)
    let frete
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
  } catch (error) {
    console.error('erro ao calcular o frete', error)
    res.status(500).json({ mensagem: 'Erro ao obter o cep ou o produto' })
  }
}
module.exports = { listarProdutos, obterProduto, calcularFrete }
