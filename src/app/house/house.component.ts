import { Component, OnInit, Input } from '@angular/core';
import { House } from '../house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit {

  @Input() house: House;

  

  constructor() { }

  ngOnInit() {
  }


}
