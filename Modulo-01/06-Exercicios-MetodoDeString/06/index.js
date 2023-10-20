const celular = 999188888

let numeroFormatado = celular.toString()
if (numeroFormatado.length === 11) {
  console.log(
    `(${numeroFormatado.slice(0, 2)}) ${numeroFormatado.slice(
      2,
      3
    )} ${numeroFormatado.slice(3, 7)}-${numeroFormatado.slice(7, 11)}`
  )
}
if (numeroFormatado.length === 10) {
  let numeroComNove = numeroFormatado.slice(2, 6)
  numeroComNove = numeroComNove.padStart(6, '9 ')
  console.log(
    `(${numeroFormatado.slice(0, 2)}) ${numeroComNove}-${numeroFormatado.slice(
      6,
      10
    )}`
  )
}
if (numeroFormatado.length === 8) {
  let numeroComNove = numeroFormatado.slice(0, 4)
  numeroComNove = numeroComNove.padStart(6, '9 ')
  console.log(` ${numeroComNove}-${numeroFormatado.slice(4, 8)}`)
}
if (numeroFormatado.length === 9) {
  let numeroNove = numeroFormatado.slice(0, 1)

  console.log(
    `${numeroNove} ${numeroFormatado.slice(1, 5)}-${numeroFormatado.slice(
      5,
      9
    )}`
  )
}
