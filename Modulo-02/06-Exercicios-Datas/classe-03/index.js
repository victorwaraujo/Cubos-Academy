function taAberto(horaDaChegada) {
  const abertura = new Date(horaDaChegada)
  abertura.setHours(8, 0, 0, 0)

  const fechamento = new Date(horaDaChegada)
  fechamento.setHours(18, 0, 0, 0)

  return horaDaChegada >= abertura && horaDaChegada <= fechamento
}
console.log(taAberto(new Date(2015, 1, 1, 19)))
