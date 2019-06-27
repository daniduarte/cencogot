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
  currentPage: number = 1;
  lastPage: number = 1;
  searchTerm : string = null;
  loading : boolean = false;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getHouses(this.currentPage);
  }

  getNumberAsArray (n : number) : any[] {
    return Array(n);
  }

  getHouses (page : number) : void {
    this.loading = true;
    this.searchTerm = null;
    this.currentPage = page;
    this.houses = [];
     this.restService.getHouses(page)
      .subscribe(
        (data) => {

          let links : string[] = data.headers.get('link').split(',');
          links = links[links.length - 1].match(/page=([0-9]+)/g);
          links = links.toString().split('=');
          this.lastPage = parseInt(links[1]);

          data.body.forEach( (dataItem) => {
            let house = new House('1', dataItem.name, dataItem.region, dataItem.words, dataItem.currentLord);
            this.houses.push(house);
          });

          this.loading = false;
        },
        (error) => {
          console.error(error);
          this.loading = false;
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
