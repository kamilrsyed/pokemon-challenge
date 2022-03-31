import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonCard!: any;

  selectedPokemon: string = '';

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
  }

  selectPokemon(name: string) {
    let message = ["Are you sure you want to select", this.pokemonCard.name].join(' ');
    if (confirm(message) == true) {
      console.log('yes');
      this.pokemonservice.getSinglePokemon(name);
    }
    else {
      console.log('no');
    }
  }
}
