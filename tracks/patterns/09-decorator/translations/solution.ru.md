# Decorator solution

```js
export class Milk {
  price = 2;

  constructor(drink) {
    this.drink = drink;
  }

  getPrice () {
    return this.drink.getPrice() + this.price;
  }
}

export class Sugar {
  price = 1;

  constructor(drink) {
    this.drink = drink;
  }

  getPrice () {
    return this.drink.getPrice() + this.price;
  }
}

export class Coffee {
  price = 5;

  getPrice () {
    return this.price;
  }
}
```