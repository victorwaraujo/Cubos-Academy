function taAbertoAteSabado(horaDaChegada) {
  const abertura = new Date(horaDaChegada)
  abertura.setHours(8, 0, 0, 0)

  const fechamento = new Date(horaDaChegada)
  fechamento.setHours(18, 0, 0, 0)

  const aberturaDiaDeSabado = new Date(horaDaChegada)
  aberturaDiaDeSabado.setHours(8, 0, 0, 0)

  const fechamentoDiaDeSabado = new Date(horaDaChegada)
  fechamentoDiaDeSabado.setHours(12, 0, 0, 0)

  const diaDaSemana = horaDaChegada.getDay()

  return (
    horaDaChegada >= abertura &&
    horaDaChegada <= fechamento &&
    horaDaChegada >= aberturaDiaDeSabado &&
    horaDaChegada <= fechamentoDiaDeSabado &&
    diaDaSemana >= 1 &&
    diaDaSemana <= 6
  )
}
console.log(taAbertoAteSabado(new Date(2023, 6, 29, 19, 28)))
