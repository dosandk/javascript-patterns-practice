import { Hero, Club, Sword, MagicWand, Monster } from './solution/index.js';

describe('patterns/strategy', () => {
  it('should be defined', () => {
    const club = new Club();
    const hero = new Hero('Barbarian', club);
    const monster1 = new Monster(4);
    const monster2 = new Monster(8);

    expect(hero.hit(monster1)).toBe(6);
    expect(hero.hit(monster2)).toBe(2);
  });

  it('should be defined', () => {
    const club = new Sword();
    const hero = new Hero('Barbarian', club);
    const monster1 = new Monster(4);
    const monster2 = new Monster(8);

    expect(hero.hit(monster1)).toBe(11);
    expect(hero.hit(monster2)).toBe(7);
  });

  it('should be defined', () => {
    const club = new MagicWand();
    const hero = new Hero('Barbarian', club);
    const monster1 = new Monster(4);
    const monster2 = new Monster(8);

    expect(hero.hit(monster1)).toBe(12);
    expect(hero.hit(monster2)).toBe(8);
  });
});
