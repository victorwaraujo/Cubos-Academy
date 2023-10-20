const pool = require('../conexao')

const cadastrarUmLivro = async (req, res) => {
  const { id } = req.params
  const { nome, genero, editora, data_publicacao } = req.body

  if (!nome) {
    return res.status(400).json({ mensagem: 'o Campo nome é obrigatório' })
  }
  try {
    const query =
      'insert into livros (nome, genero, editora, data_de_publicacao, id_do_autor) values ($1, $2, $3, $4, $5) returning id_do_autor, nome, genero, editora, data_de_publicacao'
    const params = [nome, genero, editora, data_publicacao, id]

    const novoCadastroLivro = await pool.query(query, params)
    return res.status(201).json(novoCadastroLivro.rows[0])
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

module.exports = cadastrarUmLivro
