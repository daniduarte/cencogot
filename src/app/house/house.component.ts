import { Component, OnInit } from '@angular/core';
import { House } from '../house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit {

  house : House = new House('qwbdjhb32j', 'Dummy house', 'Valdivia', 'Lorem ipsum dolor sit amet', 'Vico');

  constructor() { }

  ngOnInit() {
  }

  

}
