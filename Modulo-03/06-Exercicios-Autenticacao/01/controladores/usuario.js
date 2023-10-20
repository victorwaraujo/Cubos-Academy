const pool = require('../conexao')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJWT = require('../senhaJWT')

const cadastrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body

    const senhaCriptografada = await bcrypt.hash(senha, 10)

    const query =
      'insert into usuarios (nome, email, senha) values ($1, $2, $3) returning * '

    const params = [nome, email, senhaCriptografada]

    const novoUsuario = await pool.query(query, params)

    return res.status(201).json(novoUsuario.rows[0])
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

const login = async (req, res) => {
  const { email, senha } = req.body
  try {
    const query = 'select * from usuarios where email = $1'

    const params = [email]
    const usuario = await pool.query(query, params)

    if (usuario.rowCount < 1) {
      return res.status(404).json({ mensagem: 'Email ou senha inválidas' })
    }

    const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)

    if (!senhaValida) {
      return res.status(404).json({ mensagem: 'Email ou senha inválida' })
    }

    const token = jwt.sign({ id: usuario.rows[0].id }, senhaJWT, {
      expiresIn: '8h'
    })

    const { senha: _, ...usuarioLogado } = usuario.rows[0]

    return res.json({ usuario: usuarioLogado, token })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

module.exports = { cadastrarUsuario, login }
