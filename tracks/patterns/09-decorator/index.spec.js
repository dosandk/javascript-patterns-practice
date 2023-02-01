import { Axe, Bow, Sword, Warrior } from './solution/index.js';

describe('patterns/decorator', () => {
  it('should be able to extend warrior class via composition', () => {
    const barbarian = new Axe(new Warrior('Barbarian'));
    const paladin = new Sword(new Warrior('Paladin'));
    const amazon = new Bow(new Warrior('Amazon'));

    expect(barbarian.attack()).toBe('Barbarian attacks with axe');
    expect(paladin.attack()).toBe('Paladin attacks with sword');
    expect(amazon.attack()).toBe('Amazon attacks with bow');
  });
});
