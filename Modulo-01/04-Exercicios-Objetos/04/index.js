let maior_idade = false

const usuarios = [
  {
    nome: 'João',
    idade: 25
  },
  {
    nome: 'Ana',
    idade: 18
  },
  {
    nome: 'Beatriz',
    idade: 15
  },
  {
    nome: 'Carlos',
    idade: 16
  },
  {
    nome: 'Antonio',
    idade: 39
  }
]

for (let elemento of usuarios) {
  if (elemento.idade > 17) {
    elemento.maior_idade = true
  }
}

console.log(usuarios)
