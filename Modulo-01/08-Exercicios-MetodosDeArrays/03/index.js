const palavras = ['arroz', 'feijão', 'carne', 'macarrão', 'vodka']

const verificarLista = palavras.some(item => {
  return item === 'vodka' || item === 'cerveja'
})
if (verificarLista) {
  console.log(' revise sua lista, joão. Possui bebida com venda proibida!')
} else {
  console.log('tudo certo, vamos as compras!')
}
