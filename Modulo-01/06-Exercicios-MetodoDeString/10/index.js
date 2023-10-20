const nomeArquivo = 'Foto da Familia.gif'
let extensoesPermitidas = ['jpg', 'jpeg', 'gif', 'png']
let temExtensao = false
function validandoArquivos(arquivos) {
  for (let extensao of extensoesPermitidas) {
    if (nomeArquivo.includes(extensao)) {
      temExtensao = true
      console.log('Arquivo  Válido')
    }
  }
  if (!temExtensao) {
    console.log('Arquivo inválido')
  }
}
validandoArquivos(nomeArquivo)
