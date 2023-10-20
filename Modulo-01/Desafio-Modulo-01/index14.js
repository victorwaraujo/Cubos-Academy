const input = 'cubos\ncuggbyos'
const arrayDeLinhas = input.split('\n')

let senha = arrayDeLinhas[0]
let senhaInserida = arrayDeLinhas[1]
let indiceSenha = 0

for (let letra of senhaInserida) {
  if (letra === senha[indiceSenha]) {
    indiceSenha++
  }
}
if (indiceSenha === senha.length) {
  console.log('SIM')
} else {
  console.log('NAO')
}
