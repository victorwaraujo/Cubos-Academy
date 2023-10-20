const pool = require('../conexao')

const buscarUmAutor = async (req, res) => {
  const { id } = req.params

  if (!id) {
    return res.status(401).json({ mensagem: 'O id não foi informado' })
  }

  try {
    const query = `
    SELECT a.id as id_do_autor, a.nome as autor_nome, a.idade,
           l.id as livro_id, l.nome as livro_nome, l.genero, l.editora, l.data_de_publicacao
    FROM autores a
    LEFT JOIN livros l ON a.id = l.id_do_autor
    WHERE a.id = $1`
    const params = [id]

    const buscarAutor = await pool.query(query, params)

    if (buscarAutor.rowCount < 1) {
      return res.status(404).json({ mensagem: 'Autor não encontrado' })
    } else {
      const autor = {
        id: buscarAutor.rows[0].id_do_autor,
        nome: buscarAutor.rows[0].autor_nome,
        idade: buscarAutor.rows[0].idade,
        livros: []
      }

      buscarAutor.rows.forEach(row => {
        if (row.livro_id) {
          autor.livros.push({
            id: row.livro_id,
            nome: row.livro_nome,
            genero: row.genero,
            editora: row.editora,
            data_publicacao: row.data_de_publicacao
          })
        }
      })
      res.json(autor)
    }
  } catch (error) {
    return res.status(500).json('Erro interno do servidor')
  }
}

module.exports = buscarUmAutor
