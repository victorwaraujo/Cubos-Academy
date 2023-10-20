const nomes = [
  'Juninho',
  'Vidal',
  'Guido',
  'Dani',
  'Ruli',
  'Diego',
  'fernanda',
  'alex',
  'gustavo',
  'Renan'
]
const tamanhoDoGrupo = 4
let grupoContador = 0

function dividirEmGrupos(nomes, quantidade) {
  for (i = 0; i < nomes.length; i += tamanhoDoGrupo) {
    let grupo = nomes.slice(i, i + tamanhoDoGrupo)
    grupoContador++
    console.log(`Grupo ${grupoContador}: ${grupo.join(', ')}.`)
  }
}
dividirEmGrupos(nomes, tamanhoDoGrupo)
