const axios = require('axios')

const instanciaAxios = axios.create({
  baseURL: 'https://companyenrichment.abstractapi.com/v1',
  params: {
    api_key: '230f63c8737e45b295bc5d38212f8a17'
  }
})

module.exports = instanciaAxios
