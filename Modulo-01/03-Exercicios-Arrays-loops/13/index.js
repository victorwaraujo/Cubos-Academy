const disjuntores = [false, false, true, false, false, true, false, false]

let disjuntoresLigados = 0
for (let ligados of disjuntores) {
  if (ligados) {
    console.log(disjuntoresLigados)
  }
  disjuntoresLigados += 1
}
