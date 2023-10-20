const jwt = require('jsonwebtoken')
const senhaJWT = require('../senhaJWT')
const pool = require('../conexao')

const verificarUsuarioLogado = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ mensagem: 'Não autorizado' })
  }

  const token = authorization.split(' ')[1]

  try {
    const { id } = jwt.verify(token, senhaJWT)

    const usuarioResultado = await pool.query(
      'select * from usuarios where id =$1',
      [id]
    )
    const usuario = usuarioResultado.rows[0]

    if (!usuario) {
      return res.status(401).json({ mensagem: 'Não autorizado' })
    }

    req.usuario = usuario

    next()
  } catch (error) {
    return res.status(401).json({ mensagem: 'Não autorizado' })
  }
}

module.exports = verificarUsuarioLogado
