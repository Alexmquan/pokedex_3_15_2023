import { appState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js";
import { Pop } from "../Utils/Pop.js";

// @ts-ignore
const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quanquan/',
  timeout: 5000
})

class CaughtPokemonsService {
  async catchPokemon() {
    const pokemon = appState.activePokemon
    const res = await sandbox.post('pokemon', pokemon)
    console.log('[added pokemon to sandbox]', res.data);
    appState.caughtPokemons.push(new CaughtPokemon(res.data))
    appState.emit('caughtPokemons')
  }

  async getMyPokemon() {
    const res = await sandbox.get('pokemon')
    console.log('[Pokemon from the sandbox]', res.data);
  }
}





export const caughtPokemonsService = new CaughtPokemonsService()