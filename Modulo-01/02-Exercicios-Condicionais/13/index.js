//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = 'dinheiro'

//valor da mercadoria (centavos)
const valorDoProduto = 24000

if (tipoDePagamento === 'credito') {
  descontoDoProduto = (valorDoProduto * 0.05) / 100
  novoValor = (valorDoProduto / 100 - descontoDoProduto).toFixed(2)
  console.log(
    `O valor final do produto será ${novoValor}R$ utilizando crédito como forma de pagamento`
  )
} else if (tipoDePagamento === 'cheque') {
  descontoDoProduto = (valorDoProduto * 0.03) / 100
  novoValor = (valorDoProduto / 100 - descontoDoProduto).toFixed(2)
  console.log(
    `O valor final do produto será ${novoValor}R$ utilizando cheque como forma de pagamento`
  )
} else if (tipoDePagamento === 'debito' || tipoDePagamento === 'dinheiro') {
  descontoDoProduto = (valorDoProduto * 0.1) / 100
  novoValor = (valorDoProduto / 100 - descontoDoProduto).toFixed(2)
  console.log(
    `O valor final do produto será ${novoValor}R$ utilizando débito ou dinheiro como forma de pagamento`
  )
}
