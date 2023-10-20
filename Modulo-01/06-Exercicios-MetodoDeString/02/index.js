const cpf = '12345678900'
const cnpj = '12345678900003'

if (cpf.length === 11) {
  let primeiros_tres_digitos = cpf.slice(0, 3)
  let depois_tres_digitos = cpf.slice(3, 6)
  let ultimos_tres_digitos = cpf.slice(6, 9)
  let ultimos_dois_digitos = cpf.slice(9, 11)
  console.log(
    `${primeiros_tres_digitos}.${depois_tres_digitos}.${ultimos_tres_digitos}-${ultimos_dois_digitos}`
  )
} else {
  console.log('CPF inválido')
}
if (cnpj.length === 14) {
  let primeiros_dois_cnpj = cnpj.slice(0, 2)
  let primeiros_tres_cnpj = cnpj.slice(2, 5)
  let ultimos_tres_cnpj = cnpj.slice(5, 8)
  let primeiros_quatro_cnpj = cnpj.slice(8, 12)
  let ultimos_dois_cnpj = cnpj.slice(12, 14)
  console.log(
    `${primeiros_dois_cnpj}.${primeiros_tres_cnpj}.${ultimos_tres_cnpj}/${primeiros_quatro_cnpj}-${ultimos_dois_cnpj}`
  )
} else {
  console.log('CNPJ inválido')
}
