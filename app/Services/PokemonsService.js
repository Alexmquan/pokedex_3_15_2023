import { appState } from "../AppState.js"




const poke = axios.create({
  baseURL: '',
  timeout: 5000
})

class PokemonsService {

}


export const pokemonsService = new PokemonsService()