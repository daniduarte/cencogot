import { Component, OnInit } from '@angular/core';
import { HOUSES } from '../houses-mock';
import { House} from '../house'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from "../rest.service";


@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.sass']
})
export class HouseListComponent implements OnInit {

  houses : House[] = [];
  houseSelected: House;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses () : void {
     this.restService.getHouses()
      .subscribe(
        (data) => {
          data.forEach( (dataItem) => {
            let house = new House('1', dataItem.name, dataItem.region, dataItem.words, dataItem.currentLord);
            this.houses.push(house);
          });
        },
        (error) => {
          console.error(error);
        }
      );
  }

  selectHouse (house: House): void  {
    this.houseSelected = house;
  }

  unselectHouse () : void {
    this.houseSelected = null;
  }

}
