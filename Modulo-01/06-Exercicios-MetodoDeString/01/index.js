const comentario = 'Esse covid é muito perigoso!'

const palavras_proibidas = [
  'COVID',
  'covid',
  'Covid',
  'PANDEMIA',
  'Pandemia',
  'pandemia'
]

let tem_palavra_proibida = false
for (let palavra of palavras_proibidas) {
  if (comentario.includes(palavra)) {
    tem_palavra_proibida = true

    break
  }
}

if (tem_palavra_proibida) {
  console.log('Comentário bloqueado por conter palavras proibidas')
} else {
  console.log(comentario)
}
