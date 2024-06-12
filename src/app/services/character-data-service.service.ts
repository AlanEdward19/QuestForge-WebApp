import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/character.model';
import { CharactersService } from './characters.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private characterSource = new BehaviorSubject<Character | null>(null);
  currentCharacter = this.characterSource.asObservable();

  private charactersSource = new BehaviorSubject<Character[]>([]);
  currentCharacters = this.charactersSource.asObservable();

  constructor(private charactersService: CharactersService) { }

  changeCharacter(character: Character) {
    this.characterSource.next(character);
  }

  loadCharacters() {
    this.charactersService.getCharacters().subscribe(characters => {
      this.charactersSource.next(characters);
    });
  }
}
