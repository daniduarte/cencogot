import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../characters-mock';
import { Character} from '../character'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from "../rest.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  characterSelected: Character;
  
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters () : void {
     this.restService.getCharacters()
      .subscribe(
        (data) => {
          data.forEach( (dataItem) => {
            let character = new Character('1', dataItem.gender, dataItem.culture, dataItem.born, dataItem.died, dataItem.titles, dataItem.aliases, dataItem.father, dataItem.mother, dataItem.spouse, dataItem.allegiances);
            this.characters.push(character);
          });
        },
        (error) => {
          console.error(error);
        }
      );
  }

  selectCharacter (character: Character): void  {
    this.characterSelected = character;
  }

  unselectCharacter () : void {
    this.characterSelected = null;
  }
 }
