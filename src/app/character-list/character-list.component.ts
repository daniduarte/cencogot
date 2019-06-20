import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../characters-mock';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
  }

}
