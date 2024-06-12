import {Component, OnInit} from '@angular/core';
import {CharactersService} from "../services/characters.service";
import {Character} from "../models/character.model";
import { Router } from '@angular/router';
import {CharacterDataService} from "../services/character-data-service.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: []
})

export class CharactersComponent implements OnInit {
  id!: string;
  characters! : Character[];
  character!: Character;
  loading = false;

  constructor(private characterService: CharactersService, private router: Router, private characterDataService: CharacterDataService) {}

  onCardClick(character: Character) {
    this.characterDataService.changeCharacter(character);
    this.router.navigate(['/character-details']);
  }

  ngOnInit() {
    this.characterDataService.currentCharacters.subscribe(characters => {
      this.characters = characters;
      this.loading = false;
    });

    if (this.characters.length === 0) {
      this.loading = true;
      this.characterDataService.loadCharacters();
    }
  }

  onReloadClick() {
    this.loading = true; // start loading
    this.characterDataService.loadCharacters();
  }

}
