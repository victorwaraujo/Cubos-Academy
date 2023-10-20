// clientes
const patricia = { nome: 'Patricia', carrinho: [] }
const carlos = { nome: 'Carlos', carrinho: [] }
const renato = { nome: 'Renato', carrinho: [] }
const jose = { nome: 'José', carrinho: [] }
const roberto = { nome: 'Roberto', carrinho: [] }

// produtos
const tv = { nome: 'TV Samsung 4K', valorEmCentavos: 129900 }
const notebook = { nome: 'Notebook Dell', valorEmCentavos: 399990 }
const mouse = { nome: 'Mouse MX Master 3', valorEmCentavos: 23000 }
const teclado = { nome: 'Teclado Keychron K8', valorEmCentavos: 50000 }
const caboUsb = { nome: 'Cabo USB 2 Metros', valorEmCentavos: 1990 }
const carregador = { nome: 'Carregador portátil', valorEmCentavos: 4590 }
const webcam = { nome: 'Webcam C920s', valorEmCentavos: 80000 }
const monitor = { nome: 'Monitor LG 29 FHD', valorEmCentavos: 129900 }

function adicionarAoCarrinho(cliente, produto, quant) {
  let { nome, valorEmCentavos } = produto
  cliente.carrinho.push({
    item: {
      nome,
      valorEmCentavos
    },
    quantidade: quant
  })
}

//Adicione uma tv, dois cabos usb e uma webcam para o José

adicionarAoCarrinho(jose, tv, 1)
adicionarAoCarrinho(jose, caboUsb, 2)
adicionarAoCarrinho(jose, webcam, 1)

//Adicione dois notebooks para o Carlos

adicionarAoCarrinho(carlos, notebook, 2)

//Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia

adicionarAoCarrinho(patricia, caboUsb, 2)
adicionarAoCarrinho(patricia, carregador, 1)
adicionarAoCarrinho(patricia, mouse, 1)
adicionarAoCarrinho(patricia, monitor, 1)

//Adicione cinco webcams para o Renato

adicionarAoCarrinho(renato, webcam, 5)

//Adicione uma webcam, dois cabos usb e um monitor para o Roberto

adicionarAoCarrinho(roberto, caboUsb, 2)
adicionarAoCarrinho(roberto, monitor, 1)

console.log(patricia.carrinho)
