const somarNumeros = (req, res) => {
  const { num1, num2 } = req.query
  const soma = parseFloat(num1) + parseFloat(num2)
  res.send(soma.toString())
}
const subtrairNumeros = (req, res) => {
  const { num1, num2 } = req.query
  const subtração = parseFloat(num1) - parseFloat(num2)
  res.send(subtração.toString())
}
const multiplicarNumeros = (req, res) => {
  const { num1, num2 } = req.query
  const multiplicacao = parseFloat(num1) * parseFloat(num2)
  res.send(multiplicacao.toString())
}
const dividirNumeros = (req, res) => {
  const { num1, num2 } = req.query
  const dividir = parseFloat(num1) / parseFloat(num2)
  res.send(dividir.toString())
}
module.exports = {
  somarNumeros,
  subtrairNumeros,
  multiplicarNumeros,
  dividirNumeros
}
