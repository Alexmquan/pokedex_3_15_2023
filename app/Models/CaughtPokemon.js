export class CaughtPokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.sprites.other.home.front_default
    this.weight = data.weight
    this.height = data.height
  }

  get pokemonTemplate() {
    return `
      <div class="card text-center">
        <h2>${this.name}</h2>
        <img src="${this.img}" alt="" height="400">
        <h3>Height: ${this.weight} | Weight: ${this.height}</h3>
        <button class="btn btn-success" onclick="app.caughtPokemonsController.catchPokemon()">Catch!</button>
      </div>`
  }
}