function taAbertoFimDeSemana(horaDaChegada) {
  const abertura = new Date(horaDaChegada)
  abertura.setHours(8, 0, 0, 0)

  const fechamento = new Date(horaDaChegada)
  fechamento.setHours(18, 0, 0, 0)

  const diaDaSemana = horaDaChegada.getDay()

  return (
    horaDaChegada >= abertura &&
    horaDaChegada <= fechamento &&
    diaDaSemana >= 1 &&
    diaDaSemana <= 5
  )
}
console.log(taAbertoFimDeSemana(new Date(2021, 3, 26, 7, 59)))
