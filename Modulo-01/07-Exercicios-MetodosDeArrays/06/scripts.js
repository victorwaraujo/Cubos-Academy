const usuarios = [
  {
    nome: 'João',
    pets: ['Max']
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
let encontrado = false
function encontrarODono(pet) {
  for (let animal of usuarios) {
    if (animal.pets.includes(pet)) {
      console.log(`O dono(a) do(a) ${pet} é o(a) ${animal.nome}`)
      encontrado = true
      break
    }
  }
  if (!encontrado) {
    console.log(`Que pena ${pet}, não encontramos seu dono(a).`)
  }
}
encontrarODono('Salsicha')
