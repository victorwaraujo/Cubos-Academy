const filaDeDentro = ['Jose', 'Maria', 'Joao']
const filaDeFora = ['Joana', 'Roberta', 'Marcos', 'Felipe']

while (filaDeDentro.length < 5) {
  if (filaDeFora != []) {
    filaDeDentro.push(filaDeFora.shift())
  }
}
console.log(filaDeDentro)
console.log(filaDeFora)
