// todo: make refactoring via template method pattern
export class TeaPot {
  algorithmSteps = [];

  constructor() {
    this.prepareRecipe();
  }

  prepareRecipe () {
    this.boilWater();
    this.brewTea();
    this.pourInCup();
    this.addLemon();
  }

  boilWater ()  {
    this.algorithmSteps.push('Boiling water');
  }

  brewTea () {
    this.algorithmSteps.push('Steeping the tea');
  }

  pourInCup () {
    this.algorithmSteps.push('Pouring into cup');
  }

  addLemon () {
    this.algorithmSteps.push('Adding Lemon');
  }
}

export class CoffeePot {
  algorithmSteps = [];

  constructor() {
    this.prepareRecipe();
  }

  prepareRecipe () {
    this.boilWater();
    this.brewCoffee();
    this.pourInCup();
    this.addSugarAndMilk();
  }

  boilWater ()  {
    this.algorithmSteps.push('Boiling water');
  }

  brewCoffee () {
    this.algorithmSteps.push('Dripping Coffee through filter');
  }

  pourInCup () {
    this.algorithmSteps.push('Pouring into cup');
  }

  addSugarAndMilk () {
    this.algorithmSteps.push('Adding Sugar and Milk');
  }
}
