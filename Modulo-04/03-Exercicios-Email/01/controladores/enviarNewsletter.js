const transportador = require('../email')
const compiladorHtml = require('../utils/compilador')

const { cadastrados } = require('./cadastrarUsuario')

const enviarNewsletter = async (req, res) => {
  const { texto } = req.body
  try {
    for (const cadastro of cadastrados) {
      const html = await compiladorHtml('./templates/login.html', {
        nomeusuario: cadastro.nome,
        texto
      })

      await transportador.sendMail({
        from: `${process.env.EMAIL_NOME} <${process.env.EMAIL_FROM}>`,
        to: `${cadastro.nome} <${cadastro.email}>`,
        subject: 'Notícias Novas',
        html: html
      })
    }
    return res.json({ mensagem: 'Email enviado' })
  } catch (error) {
    return res.status(400).json({ mensagem: 'Erro interno do servidor' })
  }
}

module.exports = { enviarNewsletter }
