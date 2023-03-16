import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokemonsController } from "./Controllers/WildPokemonsController.js";
import { CaughtPokemonsController } from "./Controllers/CaughtPokemonsController.js";

class App {
  // valuesController = new ValuesController();
  wildPokemonsController = new WildPokemonsController();

  caughtPokemonsController = new CaughtPokemonsController();
}

window["app"] = new App();
