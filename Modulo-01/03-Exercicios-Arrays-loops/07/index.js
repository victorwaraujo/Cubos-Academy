const nomes = [
  'Ana',
  'Carlos',
  'amanda',
  'Julia',
  'alessandro',
  'Marcos',
  'Aldemir'
]

let novaArray = []

for (pessoas of nomes) {
  if (pessoas[0] === 'A' || pessoas[0] === 'a') novaArray.push(pessoas)
}
console.log(novaArray)
