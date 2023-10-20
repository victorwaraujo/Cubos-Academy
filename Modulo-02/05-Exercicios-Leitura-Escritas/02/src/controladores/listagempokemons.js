const { listarPokemons, detalharPokemon } = require('utils-playground')

const listagemPokemons = async (req, res) => {
  const { page } = req.query
  try {
    if (page) {
      const pokemons = await listarPokemons(Number(page))
      return res.status(201).json(pokemons)
    } else {
      numeroDaPagina = 1
      const pokemons = await listarPokemons(Number(numeroDaPagina))
      return res.status(201).json(pokemons)
    }
  } catch (error) {
    console.error('Erro interno do servidor', error)
    res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}
let pokemon
const detalhesDosPokemons = async (req, res) => {
  try {
    const { idOuNome } = req.params
    if (!isNaN(idOuNome)) {
      pokemon = await detalharPokemon(Number(idOuNome))
    } else {
      pokemon = await detalharPokemon(idOuNome)
    }

    const informacoesPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      forms: pokemon.forms,
      abilities: pokemon.abilities,
      species: pokemon.species
    }

    return res.status(200).json(informacoesPokemon)
  } catch (error) {
    console.error('Erro interno do servidor ao encontrar o pokemon ', error)
    res.status(404).json({ mensagem: 'pokemon não encontrado' })
  }
}
module.exports = { listagemPokemons, detalhesDosPokemons }
