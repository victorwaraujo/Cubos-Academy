const prova = {
  aluno: 'João',
  materia: 'Português',
  valor: 10,
  questoes: [
    {
      resposta: 'a',
      correta: 'b'
    },
    {
      resposta: 'c',
      correta: 'c'
    },
    {
      resposta: 'e',
      correta: 'b'
    },
    {
      resposta: 'b',
      correta: 'b'
    },
    {
      resposta: 'c',
      correta: 'c'
    }
  ]
}
let respostasCertas = 0
function corrigirProva(prova) {
  for (let item of prova.questoes) {
    if (item.resposta === item.correta) {
      respostasCertas += 1
    }
  }
  let nota = respostasCertas * 2
  console.log(
    `O aluno(a) ${prova.aluno} acertou ${respostasCertas} questões e obteve nota ${nota}`
  )
}
corrigirProva(prova)
