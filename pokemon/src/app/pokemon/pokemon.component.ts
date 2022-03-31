import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

const starterPokemon = [ "bulbasaur", "squirtle", "charmander" ];

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons: any = [];
  pokemonList!: any;
  show: boolean = true;
  chosenPokemon = '';

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {

    for (let i=0; i<starterPokemon.length; i++) {
      this.pokemons.push(this.pokemonservice.getPokemon(starterPokemon[i]));
    }

    forkJoin(this.pokemons).subscribe((data:any) => {
      this.pokemonList = data;
      console.log(this.pokemonList);
    })
    
    this.pokemonservice.chosen$.subscribe((data: any) => {
      if (data) {
        this.show = false;
        this.chosenPokemon = data;
        // console.log(this.chosenPokemon);
      }
      else {
        this.show = true;
      }
    })

  }

  onGoBack() {
    this.pokemonservice.chosen$.next('');
  }

}
