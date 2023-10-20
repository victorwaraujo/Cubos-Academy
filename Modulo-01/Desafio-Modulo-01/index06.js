const lista = [12, 22, 28, 17, 19]

let menorIdade = Infinity
let temMaiorDeIdade = false
for (let idade of lista) {
  if (idade >= 18 && idade < menorIdade) {
    temMaiorDeIdade = true
    menorIdade = idade
  }
}
if (temMaiorDeIdade) {
  console.log(menorIdade)
} else {
  console.log('CRESCA E APARECA')
}
