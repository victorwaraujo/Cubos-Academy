const fs = require('fs/promises')
const { buscarEndereco } = require('utils-playground')

//função para cer se o cep esta no arquivo json

const encontrarEndereco = async (req, res) => {
  try {
    const cep = req.params.cep.replace(/\D/g, '')
    const endereco = await buscarEndereco(cep)

    const enderecoArquivoJson = await fs.readFile(
      './exercicios-backend-leitura-escrita-arquivos/03/src/enderecos.json'
    )

    const enderecoParse = JSON.parse(enderecoArquivoJson)
    //verificar se o endereço está contido no arquivo json

    const enderecoConfirmado = enderecoParse.find(elemento => {
      return elemento.cep === cep
    })

    if (!enderecoConfirmado) {
      enderecoParse.push(endereco)
      await fs.writeFile(
        './exercicios-backend-leitura-escrita-arquivos/03/src/enderecos.json',
        JSON.stringify(enderecoParse)
      )
    }
    res.json(endereco)
  } catch (error) {
    console.error('erro no servidor', error)
    res.status(400).json({ mensagem: 'cep inválido' })
  }
}

module.exports = encontrarEndereco
