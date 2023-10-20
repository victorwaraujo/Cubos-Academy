const express = require('express')
const roteador = require('./rotas')

const app = express()

app.use(roteador)

app.use(express.json())

app.listen(3000)
