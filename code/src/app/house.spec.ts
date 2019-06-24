import { House } from './house';

const house = new House('hbsdjhbasd1sbadjb', 'Dummy house', 'R1', 'Lorem ipsum', 'Vico');

describe('House', () => {
  it('should create an instance', () => {
    expect(house).toBeTruthy();
  });

  it('should have name attribute', () => {
    expect(house.name).toBeDefined();
  });

  it('should have region attribute', () => {
    expect(house.region).toBeDefined();
  });

  it('should have words attribute', () => {
    expect(house.words).toBeDefined();
  });

  it('should have currentLord attribute', () => {
    expect(house.currentLord).toBeDefined();
  });
});
