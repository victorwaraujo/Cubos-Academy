const nome = 'Victor William'
let novoCaractere = '@'
function criarUmNickname(nome) {
  let nomeFormatado = nome.toLowerCase()
  nomeFormatado = novoCaractere + nomeFormatado
  nomeFormatado = nomeFormatado.replace(' ', '')
  return nomeFormatado
}

console.log(criarUmNickname(nome.slice(0, 13)))
