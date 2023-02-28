# Template Method solution

```js
class HotDrinksPot {
  algorithmSteps = {};

  constructor() {
    this.prepareRecipe();
  }

  prepareRecipe () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater () {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brew () {
    this.algorithmSteps.brew = 'Brewing';
  }

  pourInCup () {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addCondiments () {
    this.algorithmSteps.addCondiments = 'Adding condiment';
  }
}

export class TeaPot extends HotDrinksPot {
  brew () {
    this.algorithmSteps.brew = 'Steeping the tea';
  }

  addCondiments () {
    this.algorithmSteps.addCondiments = 'Adding Lemon';
  }
}

export class CoffeePot extends HotDrinksPot {
  brew () {
    this.algorithmSteps.brew = 'Dripping Coffee through filter';
  }

  addCondiments () {
    this.algorithmSteps.addCondiments = 'Adding Sugar and Milk';
  }
}
```