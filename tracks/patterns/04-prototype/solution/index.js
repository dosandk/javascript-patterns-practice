class Monster {
  constructor(settings = {}) {
    this.settings = settings;
  }
}

export default class Location {
  monsters = [];

  constructor(name = '', monstersCount = 0, monstersSettings = {}) {
    this.name = name;
    this.monstersCount = monstersCount;
    this.monstersSettings = {...monstersSettings};
    this.initMonsters();
  }

  initMonsters () {
    this.monsters = new Array(this.monstersCount).fill(new Monster(this.monstersSettings));
  }

  clone () {
    return new Location(this.name, this.monstersCount, this.monstersSettings);
  }
}
