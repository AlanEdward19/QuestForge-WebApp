import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../services/characters.service';
import { CharacterDataService } from '../services/character-data-service.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character | null;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private characterDataService: CharacterDataService
  ) {}

  ngOnInit() {
    this.characterDataService.currentCharacter.subscribe(character => this.character = character);
  }
}
