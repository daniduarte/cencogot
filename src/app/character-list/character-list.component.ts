import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../characters-mock';
import { Character} from '../character'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

  characters = CHARACTERS;

  characterSelected: Character;
  
  constructor() { }

  ngOnInit() {
  }

  selectCharacter (character: Character): void  {
    this.characterSelected = character;
  }

  unselectCharacter () : void {
    this.characterSelected = null;
  }
 }
