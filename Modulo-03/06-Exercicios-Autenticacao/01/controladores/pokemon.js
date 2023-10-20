const pool = require('../conexao')
const jwt = require('jsonwebtoken')

const cadastroPokemons = async (req, res) => {
  const { nome, habilidades, imagem, apelido } = req.body
  const usuario_id = req.usuario.id
  console.log(usuario_id) //oi

  try {
    const query =
      'insert into pokemons (usuario_id, nome, habilidades, imagem, apelido) values ($1, $2, $3, $4, $5) returning id'

    const params = [usuario_id, nome, habilidades, imagem, apelido]

    const resultado = await pool.query(query, params)

    const pokemonID = resultado.rows[0].id
    res.json({ id: pokemonID })
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar pokemon' })
  }
}

const atualizarApelido = async (req, res) => {
  const { id } = req.params
  const { apelido } = req.body
  const usuario_id = req.usuario.id

  try {
    const query =
      'update pokemons set apelido =$1 where id=$2 and usuario_id = $3 returning *'

    const params = [apelido, id, usuario_id]

    const resultado = await pool.query(query, params)

    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: 'Pokemon não encontrado' })
    }
    res.json(resultado.rows[0])
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar apelido' })
  }
}

const listarPokemons = async (req, res) => {
  const usuario_id = req.usuario.id

  try {
    const query = 'select *from pokemons where usuario_id = $1'

    const params = [usuario_id]

    const resultado = await pool.query(query, params)

    res.json(resultado.rows)
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar pokemon' })
  }
}

const listarPokemonsPeloId = async (req, res) => {
  const { id } = req.params
  const usuario_id = req.usuario.id

  try {
    const query = 'select *from pokemons where id= $1 and usuario_id = $2'

    const params = [id, usuario_id]

    const resultado = await pool.query(query, params)

    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: 'Pokemon não encontrado' })
    }

    res.json(resultado.rows[0])
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar pokemon' })
  }
}

const excluirPokemon = async (req, res) => {
  const { id } = req.params
  const usuario_id = req.usuario.id

  try {
    const query =
      'delete from pokemons where id = $1 and usuario_id = $2 returning *'

    const params = [id, usuario_id]

    const resultado = await pool.query(query, params)

    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: 'Pokemon não encontrado' })
    }

    res.json({ mensagem: 'Pokemon excluído com sucesso' })
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir pokemon' })
  }
}

module.exports = {
  cadastroPokemons,
  atualizarApelido,
  listarPokemons,
  listarPokemonsPeloId,
  excluirPokemon
}
