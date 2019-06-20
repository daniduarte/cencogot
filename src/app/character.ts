export class Character {
  id: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string;
  aliases: string;
  father: string;
  mother: string;
  spouse: string;
  allegiances: string;

  constructor (id, gender, culture, born, died, titles, aliases, father, mother, spouse, allegiances) {
    this.id = id;
    this.gender = gender;
    this.culture = culture;
    this.born = born;
    this.died = died;
    this.titles = titles;
    this.aliases = aliases;
    this.father = father;
    this.mother = mother;
    this.spouse = spouse;
    this.allegiances = allegiances;
  }
}
