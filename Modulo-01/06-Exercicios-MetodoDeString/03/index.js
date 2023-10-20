const texto = 'Aprenda programar do zero na Cubos Academy'

let novoTexto = texto.toLowerCase('Aprenda programar do zero na Cubos Academy')

while (novoTexto !== novoTexto.replace(' ', '-')) {
  novoTexto = novoTexto.replace(' ', '-')
}
console.log(novoTexto)
