const idade = 17
const possuiPatologia = false
const altura = 150
const ehEstudante = false

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
  console.log('ACESSO NEGADO')
} else if (ehEstudante || idade < 18) {
  console.log('10 reais')
} else {
  console.log('20 reais')
}
