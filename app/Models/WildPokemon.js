



export class WildPokemon {
  constructor(data) {
    this.name = data.name
    this.url = data.url

    // this.img = data.other.home.front_default
    // this.weight = data.weight
    // this.height = data.height
  }



  static fullPokemonList(WildPokemon) {
    return `
    <div class=" bg-light my-3 p-2 rounded selectable" onclick="app.wildPokemonsController.selectActivePokemon('${WildPokemon.url}')">
    <h5>${WildPokemon.name}</h5>
  </div>
    `
  }
}