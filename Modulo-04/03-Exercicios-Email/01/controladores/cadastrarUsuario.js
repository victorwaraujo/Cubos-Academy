const cadastrados = []
const cadastrarUsuario = (req, res) => {
  const { nome, email } = req.body

  if (!nome) {
    return res.status(404).json('O campo nome é obrigatório')
  }

  if (!email) {
    return res.status(404).json('O campo email é obrigatório')
  }

  cadastrados.push({ nome, email })
  res.status(201).json({ mensagem: 'Usuario cadastrado com sucesso' })
}

module.exports = { cadastrarUsuario, cadastrados }
