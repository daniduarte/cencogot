import { Character } from './character';

const character = new Character('asjdhbasjhdbjh1hjbj123_asd', 'male', 'c1', '1982/06/11', '2000/09/21', '2', 'Dummy alias', 'Dummy Father', 'Dummy mother', 'sp', 'all');

describe('Character', () => { 
  it('should create an instance', () => {
    expect(character).toBeTruthy();
  });

  it('should have gender attribute', () => {
    expect(character.gender).toBeDefined();
  });

  it('should have culture attribute', () => {
    expect(character.culture).toBeDefined(); 
  });

  it('should have born attribute', () => {
    expect(character.born).toBeDefined();
  });

  it('should have died attribute', () => {
    expect(character.died).toBeDefined();
  });

  it('should have titles attribute', () => {
    expect(character.titles).toBeDefined();
  });

  it('should have aliases attribute', () => {
    expect(character.aliases).toBeDefined();
  });

  it('should have father attribute', () => {
    expect(character.father).toBeDefined();
  });

  it('should have mother attribute', () => {
    expect(character.mother).toBeDefined();
  });

  it('should have spouse attribute', () => {
    expect(character.spouse).toBeDefined();
  });

  it('should have allegiances attribute', () => {
    expect(character.allegiances).toBeDefined();
  });

 
});
