import { ValuesController } from "./Controllers/ValuesController.js";
import { PokemonsController } from "./Controllers/PokemonsController.js";

class App {
  // valuesController = new ValuesController();
  pokemonsController = new PokemonsController();
}

window["app"] = new App();
