//valor do produto comprado.
const valorDoProduto = 350000

//quantidade de parcelas
const quantidadeDoParcelamento = 12

//valor pago
const valorPago = 875.01

const valorDaParcela = (
  valorDoProduto /
  100 /
  quantidadeDoParcelamento
).toFixed(2)

const ParcelasRestantes = (
  (valorDoProduto / 100 - valorPago) /
  valorDaParcela
).toFixed()

console.log(`Restam ${ParcelasRestantes} parcelas de ${valorDaParcela}R$`)
