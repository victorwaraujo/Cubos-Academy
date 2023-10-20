const jogadores = [
  {
    nome: 'Herman',
    jogada: 1
  },
  {
    nome: 'Rhodes',
    jogada: 0
  },
  {
    nome: 'Beach',
    jogada: 0
  },
  {
    nome: 'Laurel',
    jogada: 0
  },
  {
    nome: 'Beatrice',
    jogada: 0
  },
  {
    nome: 'Alison',
    jogada: 0
  },
  {
    nome: 'Saundra',
    jogada: 0
  },
  {
    nome: 'Klein',
    jogada: 0
  }
]

let jogadoresDe1 = []
let jogadoresDe0 = []

for (let jogador of jogadores) {
  if (jogador.jogada === 0) {
    jogadoresDe0.push(jogador.nome)
  } else {
    jogadoresDe1.push(jogador.nome)
  }
}
if (jogadoresDe0.length === 1) {
  console.log(jogadoresDe0[0])
} else if (jogadoresDe1.length === 1) {
  console.log(jogadoresDe1[0])
} else {
  console.log('NINGUEM')
}
