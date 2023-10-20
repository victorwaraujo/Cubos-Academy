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
    idade: 32
  }
]
const adultos = []
const jovens = []

for (let pessoas of usuarios) {
  if (pessoas.idade > 17) {
    adultos.push(pessoas)
  } else {
    jovens.push(pessoas)
  }
}
console.log(adultos, jovens)
