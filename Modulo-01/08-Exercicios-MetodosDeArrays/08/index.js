const frutas = ['Manga', 'UVA', 'abacaxi', 'banana', 'MAçã']
const novaArray = frutas.map((fruta, indice) => {
  return `${indice} - ${fruta.slice(0, 1).toUpperCase()}${fruta
    .slice(1)
    .toLowerCase()}`
})
console.log(novaArray)
