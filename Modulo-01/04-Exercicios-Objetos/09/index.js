const participantes = [
  { nome: 'João' },
  { nome: 'Ana' },
  { nome: 'Beatriz' },
  { nome: 'Maria' },
  { nome: 'Ana Clara' },
  { nome: 'Joana' },
  { nome: 'Augusto' },
  { nome: 'Renan' },
  { nome: 'Patricia' },
  { nome: 'Carlos' },
  { nome: 'Renato' },
  { nome: 'José' },
  { nome: 'Roberto' },
  { nome: 'Sara' },
  { nome: 'Junior' },
  { nome: 'Pedro' },
  { nome: 'Vitor' },
  { nome: 'Antonio' }
]
let posicao = 0
for (let pessoa of participantes) {
  posicao += 1
  if (pessoa.nome === 'Carlos')
    console.log(`Galera... O Carlos está na posição ${posicao}, corre lá!`)
}
