import { Component, OnInit } from '@angular/core';
import { HOUSES } from '../houses-mock';
import { House} from '../house'; 

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.sass']
})
export class HouseListComponent implements OnInit {

  houses = HOUSES;
  houseSelected: House;

  constructor() { }

  ngOnInit() {
  }

  selectHouse (house: House): void  {
    this.houseSelected = house;
    console.log('houseSelected', this.houseSelected);
  }

  unselectHouse () : void {
    this.houseSelected = null;
  }

}
