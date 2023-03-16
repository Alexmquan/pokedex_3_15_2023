import { appState } from "../AppState.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";
import { WildPokemon } from "../Models/WildPokemon.js";
import { wildPokemonsService } from "../Services/WildPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemonList() {
  let pokemon = appState.wildPokemons
  let template = ''
  pokemon.forEach(p => template += WildPokemon.fullPokemonList(p))
  setHTML('pokeList', template)
  console.log('testing from draw')

}

function _drawActivePokemon() {
  let pokemon = appState.activePokemon
  // @ts-ignore
  setHTML('pokeCard', pokemon.pokemonTemplate)
}
export class WildPokemonsController {
  constructor() {
    appState.on('wildPokemons', _drawPokemonList)
    appState.on('activePokemon', _drawActivePokemon)
    this.getAllPokemon()

  }

  async getAllPokemon() {
    try {
      await wildPokemonsService.getAllPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async selectActivePokemon(url) {
    try {
      console.log("testing active pokemon");
      await wildPokemonsService.setActivePokemon(url)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}