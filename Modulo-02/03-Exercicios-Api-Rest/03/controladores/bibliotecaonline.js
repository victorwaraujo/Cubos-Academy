const livros = require('../dados/dados')
let proximoId = 3

const consultarLivros = (req, res) => {
  return res.json(livros)
}

const obterUmLivro = (req, res) => {
  const livroid = Number(req.params.id)
  if (isNaN(livroid)) {
    return res
      .status(400)
      .json({ mensagem: 'O id da URL não é um numero válido' })
  }

  const livro = livros.find(livro => {
    return livro.id === livroid
  })

  if (!livro) {
    return res
      .status(404)
      .json({ mensagem: 'Não existe livro para o ID informado' })
  }
  return res.json(livro)
}

const cadastrarUmLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body

  if (!titulo) {
    return res.status(400).json({ mensagem: 'O Campo titulo é obrigatório.' })
  }
  if (!autor) {
    return res.status(400).json({ mensagem: 'O Campo autor é obrigatório.' })
  }
  if (!ano) {
    return res.status(400).json({ mensagem: 'O Campo ano é obrigatório.' })
  }
  if (!numPaginas) {
    return res
      .status(400)
      .json({ mensagem: 'O Campo numPaginas é obrigatório.' })
  }

  const novoLivro = {
    id: proximoId,
    titulo,
    autor,
    ano,
    numPaginas
  }
  proximoId++

  livros.push(novoLivro)

  return res.status(201).json(novoLivro)
}

const alterarUmLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body

  if (!titulo) {
    return res.status(400).json({ mensagem: 'O Campo titulo é obrigatório.' })
  }
  if (!autor) {
    return res.status(400).json({ mensagem: 'O Campo autor é obrigatório.' })
  }
  if (!ano) {
    return res.status(400).json({ mensagem: 'O Campo ano é obrigatório.' })
  }
  if (!numPaginas) {
    return res
      .status(400)
      .json({ mensagem: 'O Campo numPaginas é obrigatório.' })
  }

  const livroExistente = livros.find(livro => {
    return livro.id === Number(req.params.id)
  })

  if (!livroExistente) {
    return res
      .status(404)
      .json({ mensagem: 'Não foi possível encontrar o livro' })
  }
  livroExistente.titulo = titulo
  livroExistente.autor = autor
  livroExistente.ano = ano
  livroExistente.numPaginas = numPaginas

  return res.json({ mensagem: 'O livro foi substituido' })
}

const alterarParteDoLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body
  const livroExistente = livros.find(livro => {
    return livro.id === Number(req.params.id)
  })

  if (!livroExistente) {
    return res
      .status(404)
      .json({ mensagem: 'Não foi possível encontrar o livro' })
  }
  if (titulo) {
    livroExistente.titulo = titulo
  }
  if (autor) {
    livroExistente.autor = autor
  }
  if (ano) {
    livroExistente.ano = ano
  }
  if (numPaginas) {
    livroExistente.numPaginas = numPaginas
  }
  return res.json({ mensagem: 'O livro foi alterado' })
}

const excluirUmLivro = (req, res) => {
  const indiceLivro = livros.findIndex(livro => {
    return livro.id === Number(req.params.id)
  })

  if (indiceLivro < 0) {
    return res.status(404).json({
      mensagem: 'Não foi possível encontrar o livro para ser excluido'
    })
  }
  livros.splice(indiceLivro, 1)
  return res.json({ mensagem: 'O livro foi excluido' })
}
module.exports = {
  consultarLivros,
  obterUmLivro,
  cadastrarUmLivro,
  alterarUmLivro,
  alterarParteDoLivro,
  excluirUmLivro
}
