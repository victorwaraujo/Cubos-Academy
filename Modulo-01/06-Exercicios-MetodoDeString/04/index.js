let identificador = '123'
let nome = 'José silva costa'
let email = '      jose@email.com  '

let novo_identificador = identificador.padStart(6, '0')
console.log(novo_identificador)

let array_nome = nome.split(' ')

let nome_formatado = ''
for (let nome of array_nome) {
  primeira_letra = nome.slice(0, 1)
  resto_do_nome = nome.slice(1)
  nome_formatado += primeira_letra.toUpperCase() + resto_do_nome + ' '
}
console.log(nome_formatado.trim())

console.log(email.trim())
