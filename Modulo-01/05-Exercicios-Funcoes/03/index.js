const carrinho = {
  nomeDoCliente: 'Guido Bernal',
  produtos: [
    {
      id: 1,
      nome: 'Camisa',
      qtd: 3,
      precoUnit: 3000
    },
    {
      id: 2,
      nome: 'Bermuda',
      qtd: 2,
      precoUnit: 5000
    }
  ],
  ImprimirResumo: function () {
    console.log(`Cliente: ${this.nomeDoCliente}`)
    console.log(`Total de itens: ${this.calcularTotalDeItens()}`)
    console.log(
      `Total a pagar: R$${(
        (this.calcularTotalAPagar() - this.calcularDesconto()) /
        100
      ).toFixed(2)}`
    )
  },
  addProduto: function (produto) {
    let produtoExistente = false
    for (let item of carrinho.produtos) {
      if (item.nome === produto.nome) {
        item.qtd += produto.qtd
        produtoExistente = true
        break
      }
    }
    if (!produtoExistente) {
      carrinho.produtos.push(produto)
    }
  },
  imprimirDetalhes: function () {
    console.log(`Cliente: ${this.nomeDoCliente}`)
    for (let objeto of this.produtos)
      console.log(
        `Item ${objeto.id} - ${objeto.nome}- ${objeto.qtd} und - R$ ${(
          (objeto.qtd * objeto.precoUnit) /
          100
        ).toFixed(2)} `
      )
    console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
    console.log(
      `Total a pagar: R$ ${(
        (this.calcularTotalAPagar() - this.calcularDesconto()) /
        100
      ).toFixed(2)}`
    )
  },
  calcularTotalDeItens: function () {
    let qtdTotal = 0

    for (let item of carrinho.produtos) {
      qtdTotal += item.qtd
    }
    return qtdTotal
  },
  calcularTotalAPagar: function () {
    let precoTotal = 0
    let soma = 0

    for (let item of carrinho.produtos) {
      precoTotal = item.qtd * item.precoUnit
      soma += precoTotal
    }

    return soma
  },
  calcularDesconto: function () {
    let descontoUm = 0
    let descontoDois = 0
    let desconto = false
    let descontoFinal = 0
    let itemMaisBarato = Infinity

    if (this.calcularTotalDeItens() > 4) {
      for (item of this.produtos) {
        if (item.precoUnit < itemMaisBarato) {
          itemMaisBarato = item.precoUnit

          descontoUm += itemMaisBarato
        }
      }
    }
    if (this.calcularTotalAPagar() > 10000) {
      descontoDois = this.calcularTotalAPagar() * 0.1
    }
    if (descontoUm > descontoDois) {
      descontoFinal = descontoUm
    } else {
      descontoFinal = descontoDois
    }

    return descontoFinal
  }
}

const novaBermuda = {
  id: 2,
  nome: 'Bermuda',
  qtd: 3,
  precoUnit: 5000
}

const novoTenis = {
  id: 3,
  nome: 'Tenis',
  qtd: 1,
  precoUnit: 10000
}

carrinho.addProduto(novaBermuda)
carrinho.addProduto(novoTenis)
carrinho.ImprimirResumo()
carrinho.imprimirDetalhes()
console.log(`Desconto: R$${(carrinho.calcularDesconto() / 100).toFixed(2)}`)
