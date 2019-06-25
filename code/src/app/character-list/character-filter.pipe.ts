import { PipeTransform, Pipe } from '@angular/core';
import { Character } from '../character';

@Pipe({
  name: 'characterFilter'
})

export class CharacterFilterPipe implements PipeTransform {
  transform(characters: Character[], searchTerm: string): Character[] {
    if (!characters || !searchTerm) {
      return characters;
    }

    return characters.filter(character => 
      character.aliases[0].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}