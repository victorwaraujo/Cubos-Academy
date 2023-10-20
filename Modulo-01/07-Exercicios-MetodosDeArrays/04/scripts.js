const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana']
//let operacao = ['agendar', 'atender']
function agendarOuAtender(listaPacientes, operacao, nomeDoPaciente) {
  if (operacao === 'atender') {
    listaPacientes.shift()
  } else if (operacao === 'agendar') {
    listaPacientes.push(nomeDoPaciente)
  }
}
agendarOuAtender(pacientes, 'agendar', 'Ricardo')
agendarOuAtender(pacientes, 'atender')
agendarOuAtender(pacientes, 'atender')
console.log(`${pacientes.join(', ')}`)
