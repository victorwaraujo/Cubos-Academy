const min = 25

const km = 11.5

let minFixo = 50
let minMaisBarato
let minTotal
if (min > 20) {
  minMaisBarato = (min - 20) * 30
  minTotal = 20 * minFixo + minMaisBarato
} else {
  minTotal = min * minFixo
}

let kmFixo = 70
let kmMaisBarato
let kmTotal
if (km > 10) {
  kmMaisBarato = (km - 10) * 50
  kmTotal = 10 * kmFixo + kmMaisBarato
} else {
  kmTotal = km * 70
}
let precoFinal = kmTotal + minTotal
console.log(Math.floor(precoFinal))
