import { PipeTransform, Pipe } from '@angular/core';
import { House } from '../house';

@Pipe({
  name: 'houseFilter'
})

export class HouseFilterPipe implements PipeTransform {
  transform(houses: House[], searchTerm: string): House[] {
    if (!houses || !searchTerm) {
      return houses;
    }

    return houses.filter(house => 
       house.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}