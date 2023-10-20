const contaBancaria = {
  nome: 'Maria',
  saldo: 0,
  historicos: [],
  depositar: function (valorDepositar) {
    this.saldo += valorDepositar
    this.historicos.push({
      tipo: 'Depósito',
      valor: valorDepositar
    })
    return `Deposito de R$${(valorDepositar / 100).toFixed(
      2
    )} realizado para o cliente: ${this.nome}`
  },
  sacar: function (valorSacado) {
    if (valorSacado > this.saldo) {
      return `Saldo insuficiente para o saque de: ${this.nome}`
    } else {
      this.saldo -= valorSacado
      this.historicos.push({
        tipo: 'Saque',
        valor: valorSacado
      })
      return `Saque de R$${(valorSacado / 100).toFixed(
        2
      )} realizado para o cliente: ${this.nome}.`
    }
  },
  extrato: function () {
    let historicosTransacoes = ''
    for (let objeto of this.historicos) {
      historicosTransacoes += `\n${objeto.tipo} de: R$ ${(
        objeto.valor / 100
      ).toFixed(2)}`
    }
    return `Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(
      2
    )}\nHistórico:\n${historicosTransacoes}`
  }
}

console.log(contaBancaria.depositar(10000))
console.log(contaBancaria.sacar(50000))
console.log(contaBancaria.sacar(5000))
console.log(contaBancaria.extrato())
