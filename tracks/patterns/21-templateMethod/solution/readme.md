# Template Method solution

```js
class HotDrinksPot {
  algorithmSteps = [];

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
    this.algorithmSteps.push('Boiling water');
  }

  brew () {
    this.algorithmSteps.push('Brewing');
  }

  pourInCup () {
    this.algorithmSteps.push('Pouring into cup');
  }

  addCondiments () {
    this.algorithmSteps.push('Adding condiment');
  }
}

export class TeaPot extends HotDrinksPot {
  brew () {
    this.algorithmSteps.push('Steeping the tea');
  }

  addCondiments () {
    this.algorithmSteps.push('Adding Lemon');
  }
}

export class CoffeePot extends HotDrinksPot {
  brew () {
    this.algorithmSteps.push('Dripping Coffee through filter');
  }

  addCondiments () {
    this.algorithmSteps.push('Adding Sugar and Milk');
  }
}
```
