const cpf = '011.022.033-44'
let cpfFormatado = cpf.replace('.', ' ')
while (cpfFormatado !== cpfFormatado.replace('.', ' ')) {
  cpfFormatado = cpfFormatado.replace('.', ' ')
}

cpfFormatado = cpfFormatado.replace('-', ' ')
cpfTresPrimeiros = cpfFormatado.slice(0, 3)
cpfTresPenultimos = cpfFormatado.slice(4, 7)
cpfTresUltimos = cpfFormatado.slice(8, 11)
cpfDoisUltimos = cpfFormatado.slice(12, 14)
console.log(
  `${cpfTresPrimeiros}${cpfTresPenultimos}${cpfTresUltimos}${cpfDoisUltimos}`
)
