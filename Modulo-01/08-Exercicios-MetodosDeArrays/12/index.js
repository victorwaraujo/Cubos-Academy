const pessoas = [
  {
    nome: 'Antonio',
    idade: 30,
    profissao: 'Jornalista'
  },
  {
    nome: 'Maria',
    idade: 30,
    profissao: 'Jornalista'
  },
  {
    nome: 'Ana',
    idade: 21,
    profissao: 'Programadora'
  },
  {
    nome: 'Beatriz',
    idade: 20,
    profissao: 'Programador'
  },
  {
    nome: 'José',
    idade: 32,
    profissao: 'Jornalista'
  },
  {
    nome: 'Marcos',
    idade: 30,
    profissao: 'Programador'
  }
]
const novaArray = pessoas.filter(usuario => {
  return (
    usuario.idade > 20 &&
    (usuario.profissao === 'Programador' ||
      usuario.profissao === 'Programadora')
  )
})
console.log(novaArray)

const arrayJornalista = pessoas.filter(usuario => {
  return usuario.idade > 30 && usuario.profissao === 'Jornalista'
})
console.log(arrayJornalista)

const jornalistaEProgramador = pessoas.filter(usuario => {
  return (
    usuario.idade <= 29 &&
    (usuario.profissao === 'Jornalista' ||
      usuario.profissao === 'Programador' ||
      usuario.profissao === 'Programadora')
  )
})
console.log(jornalistaEProgramador)
