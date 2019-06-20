import { Component, OnInit } from '@angular/core';
import { HOUSES } from '../houses-mock';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.sass']
})
export class HouseListComponent implements OnInit {

  houses = HOUSES;

  constructor() { }

  ngOnInit() {
  }

}
