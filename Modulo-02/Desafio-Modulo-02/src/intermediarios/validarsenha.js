const dados = require('../bancodedados')
const validarSenha = (req, res, next) => {
  const { senha_banco } = req.query

  if (!senha_banco) {
    return res.status(401).json({ mensagem: 'A senha não foi informada' })
  }

  if (senha_banco !== dados.banco.senha) {
    return res
      .status(401)
      .json({ mensagem: 'A senha informada está incorreta' })
  }
  next()
}

module.exports = validarSenha
