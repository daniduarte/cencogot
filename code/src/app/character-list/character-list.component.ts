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
  currentPage: number = 1;
  lastPage: number = 1;
  searchTerm : string = null;
  
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getCharacters(this.currentPage);
  }

  getNumberAsArray (n : number) : any[] {
    return Array(n);
  }

  getCharacters (page : number) : void {
    this.searchTerm = null;
    this.currentPage = page;
    this.characters = [];
    this.restService.getCharacters(page)
      .subscribe(
        (data) => {

          let links : string[] = data.headers.get('link').split(',');
          links = links[links.length - 1].match(/page=([0-9]+)/g);
          links = links.toString().split('=');
          this.lastPage = parseInt(links[1]);

          data.body.forEach( (dataItem) => {
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
