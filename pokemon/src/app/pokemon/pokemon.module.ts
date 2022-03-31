import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { PokemonComponent } from './pokemon.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    PokemonComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    PokemonComponent,
    PokemonCardComponent
  ]
})
export class PokemonModule { }
