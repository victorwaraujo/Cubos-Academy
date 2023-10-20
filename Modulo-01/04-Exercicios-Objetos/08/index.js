const usuarios = [
  {
    nome: 'João',
    pets: []
  },
  {
    nome: 'Ana',
    pets: ['Pingo', 'Lulu']
  },
  {
    nome: 'Beatriz',
    pets: ['Lessie']
  },
  {
    nome: 'Carlos',
    pets: ['Farofa', 'Salsicha', 'Batata']
  },
  {
    nome: 'Antonio',
    pets: ['Naninha']
  }
]
const { nome, pets } = usuarios
for (let pessoa of usuarios) {
  if (pessoa.pets.length < 1) {
    console.log(`Sou ${pessoa.nome} e não tenho pets`)
  } else if (pessoa.pets.length === 1) {
    console.log(`Sou ${pessoa.nome} e tenho ${pessoa.pets.length} pet`)
  } else {
    console.log(`Sou ${pessoa.nome} e tenho ${pessoa.pets.length} pets`)
  }
}
