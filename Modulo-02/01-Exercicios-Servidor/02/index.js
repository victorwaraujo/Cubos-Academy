const express = require('express')

const app = express()
let minutos = 0
let segundos = 0
let cronometroExecutando = false
app.get('/', (req, res) => {
  res.send(
    `Tempo atual do cronômetro: ${minutos
      .toString()
      .padStart(2, '0')} minutos e ${segundos
      .toString()
      .padStart(2, '0')} segundos`
  )
})
app.get('/iniciar', (req, res) => {
  if (!cronometroExecutando) {
    cronometroExecutando = true
    function rodarOCronometro() {
      segundos++
      if (segundos === 60) {
        segundos = 0
        minutos++
      }
    }
    cronometroExecutando = setInterval(rodarOCronometro, 1000)
    res.send('Cronômetro iniciado!')
  }
})

app.get('/pausar', (req, res) => {
  if (cronometroExecutando) {
    clearInterval(cronometroExecutando)
    cronometroExecutando = undefined
    res.send('Cronômetro pausado!')
  }
})
app.get('/continuar', (req, res) => {
  if (!cronometroExecutando) {
    cronometroExecutando = true
    function rodarOCronometro() {
      segundos++
      if (segundos === 60) {
        segundos = 0
        minutos++
      }
    }
    cronometroExecutando = setInterval(rodarOCronometro, 1000)
    res.send('Cronômetro continuando!')
  }
})
app.get('/zerar', (req, res) => {
  clearInterval(cronometroExecutando)
  cronometroExecutando = undefined
  segundos = 0
  minutos = 0
  res.send('Cronômetro zerado!')
})
app.listen(8000)
