export class Warrior {
  constructor(name) {
    this.name = name;
  }
}

class WeaponDecorator {
  name = '';

  constructor(warrior) {
    this.warrior = warrior;
  }

  attack () {
    return `${this.warrior.name} attacks with ${this.name}`;
  }
}

export class Axe extends WeaponDecorator {
  name = 'axe';

  constructor(warrior) {
    super(warrior);
  }
}

export class Sword extends WeaponDecorator {
  name = 'sword';

  constructor(warrior) {
    super(warrior);
  }
}

export class Bow extends WeaponDecorator {
  name = 'bow';

  constructor(warrior) {
    super(warrior);
  }
}


