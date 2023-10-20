const caractere = 7

if (!isNaN(caractere)) {
  console.log('numero')
} else if (
  caractere === 'A' ||
  caractere === 'E' ||
  caractere === 'I' ||
  caractere === 'O' ||
  caractere === 'U'
) {
  console.log('vogal maiúscula')
} else if (
  caractere === 'a' ||
  caractere === 'e' ||
  caractere === 'i' ||
  caractere === 'o' ||
  caractere === 'u'
) {
  console.log('vogal minúscula')
} else {
  console.log('consoante')
}
//***OBS****
//Como a questão não informa se a entrada de um possível numero seria dada como string
//ou number foi utilizado o método acima, caso contrário, a lógica poderia ser realizada
//seguindo o mesmo conceito que foi aplicado para as condições das vogais.
