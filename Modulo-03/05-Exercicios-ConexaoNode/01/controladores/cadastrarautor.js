const pool = require('../conexao')

const cadastrarAutor = async (req, res) => {
  const { nome, idade } = req.body

  if (!nome) {
    return res.status(400).json({ mensagem: 'o Campo nome é obrigatório' })
  }
  try {
    const query =
      'insert into autores (nome, idade) values ($1, $2) returning *'
    const params = [nome, idade]

    const novoCadastro = await pool.query(query, params)
    return res.status(201).json(novoCadastro.rows[0])
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

module.exports = cadastrarAutor
