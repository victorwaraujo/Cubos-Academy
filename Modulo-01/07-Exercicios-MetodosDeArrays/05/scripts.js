const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana']

function agendarPacientes(listaDePaciente, paciente) {
  listaDePaciente.push(paciente)
  console.log(`${listaDePaciente.join(', ')}`)
}

function atenderPacientes(listaDePaciente) {
  listaDePaciente.shift()
  console.log(`${listaDePaciente.join(', ')}`)
}

function cancelarAtendimento(listaDePaciente, paciente) {
  for (i = 0; i < listaDePaciente.length; i++) {
    if (listaDePaciente[i] === paciente) {
      listaDePaciente.splice(i, 1)
      console.log(`${listaDePaciente.join(', ')}`)
    }
  }
}
cancelarAtendimento(pacientes, 'Maria')
atenderPacientes(pacientes)

agendarPacientes(pacientes, 'Romeu')
