let { identificadorAluno, alunos } = require('../dados/bancodedados')

const listaDeAlunos = (req, res) => {
  res.status(200).json(alunos)
}

const idDoAluno = (req, res) => {
  const { id } = req.params
  const aluno = alunos.find(aluno => {
    return aluno.id === Number(id)
  })
  if (!aluno) {
    return res.status(404).json({ mensagem: 'Aluno não encontrado' })
  }
  return res.status(200).json(aluno)
}

const cadastrarAluno = (req, res) => {
  const { nome, sobrenome, idade, curso } = req.body
  if (!nome || !sobrenome || !idade || !curso) {
    return res.status(400).json({
      mensagem: 'É obrigatório o objeto possuir nome, sobrenome, idade e curso'
    })
  }
  if (!nome.trim() || !sobrenome.trim() || !curso.trim()) {
    return res.status(400).json({
      mensagem:
        'as propriedades nome, sobrenome e curso não podem ser vazias ou ser formadas apenas por espaços'
    })
  }
  if (idade < 18) {
    return res.status(400).json({
      mensagem: 'É preciso ter 18 anos'
    })
  }
  const novoaluno = {
    id: identificadorAluno++,
    nome,
    sobrenome,
    idade,
    curso
  }
  alunos.push(novoaluno)
  return res.status(201).json()
}

const excluirAluno = (req, res) => {
  const { id } = req.params
  const aluno = alunos.find(aluno => {
    return aluno.id === Number(id)
  })
  if (!aluno) {
    return res.status(404).json({ mensagem: 'Aluno não encontrado' })
  }
  alunos = alunos.filter(aluno => {
    return aluno.id !== Number(id)
  })
  return res.status(204).json()
}
module.exports = { listaDeAlunos, idDoAluno, cadastrarAluno, excluirAluno }
