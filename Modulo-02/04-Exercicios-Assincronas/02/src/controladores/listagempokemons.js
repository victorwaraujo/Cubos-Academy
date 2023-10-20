const { listarPokemons, detalharPokemon } = require('utils-playground')

const listagemPokemons = async (req, res) => {
  const { page } = req.query

  if (page) {
    const pokemons = await listarPokemons(Number(page))
    return res.status(201).json(pokemons)
  } else {
    numeroDaPagina = 1
    const pokemons = await listarPokemons(Number(numeroDaPagina))
    return res.status(201).json(pokemons)
  }
}
let pokemon
const detalhesDosPokemons = async (req, res) => {
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
}
module.exports = { listagemPokemons, detalhesDosPokemons }
