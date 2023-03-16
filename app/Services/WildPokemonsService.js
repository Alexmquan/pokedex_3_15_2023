import { appState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js"
import { WildPokemon } from "../Models/WildPokemon.js"


// @ts-ignore
const poke = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000
})

class WildPokemonsService {
  async getAllPokemon() {
    const res = await poke.get('pokemon?limit=151&offset=0')
    console.log('[151 Pokemon]', res.data)
    appState.wildPokemons = res.data.results.map(d => new WildPokemon(d))
    console.log(appState.wildPokemons)
  }

  async setActivePokemon(url) {
    console.log(url);
    const res = await poke.get(`${url}`)
    console.log('[Single Pokemon]', res.data);
    appState.activePokemon = new CaughtPokemon(res.data)
  }


}


export const wildPokemonsService = new WildPokemonsService()