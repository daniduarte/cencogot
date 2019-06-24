export class House {
  id: string;
  name: string;
  region: string;
  words: string;
  currentLord: string;

  constructor (id, name, region, words, currentLord) {
    this.id = id;
    this.name = name;
    this.region = region;
    this.words = words;
    this.currentLord = currentLord;
  }
}
