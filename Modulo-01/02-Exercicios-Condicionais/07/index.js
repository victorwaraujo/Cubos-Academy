const aposentada = false
const portadoraDeDoenca = true
const totalDeRendimentos = 2400000 //emCentavos

if (aposentada || portadoraDeDoenca) {
  console.log('ISENTA')
} else if (totalDeRendimentos <= 2855970) {
  console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE')
} else {
  console.log('PEGA LEAO')
}
