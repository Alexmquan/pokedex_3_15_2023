import { appState } from "../AppState.js";
import { caughtPokemonsService } from "../Services/CaughtPokemonsService.js";
import { Pop } from "../Utils/Pop.js";



export class CaughtPokemonsController {
  constructor() {

  }

  async catchPokemon() {
    try {
      caughtPokemonsService.catchPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getMyPokemon() {
    try {
      await caughtPokemonsService.getMyPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}