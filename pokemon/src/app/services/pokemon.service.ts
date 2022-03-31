import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from '../interfaces/pokemon.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  chosen$ = new Subject();

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<PokemonResponse[]> {
    return this.http.get<PokemonResponse[]>([this.baseUrl, name].join('/'));
  }

  getSinglePokemon(name: string) {
    this.chosen$.next(name);
  }
}
