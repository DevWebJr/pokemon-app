import {Component, OnInit} from '@angular/core';
import {POKEMONS} from "./mock-pokemons";
import {Pokemon} from "./pokemon";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  })

export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectOnePokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == + pokemonId)

    if(pokemon) {
      console.log(`Vous avez sélectionné le Pokémon ${pokemon?.name}`);
      this.pokemonSelected = pokemon;
    }
    else {
      console.log("Ce nombre ne correspond à aucun Pokémon.");
      this.pokemonSelected = pokemon;
    }
  }

}
