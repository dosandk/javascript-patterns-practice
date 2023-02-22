# Decorator

> With the help of "wrappers" it implements a dynamic expansion of functionality
> Using an aggregation or composition mechanism.

- Type: Structural
- Complexity: ⭐

It is necessary to implement the decorators `Milk` and `Sugar` which will
changes in the calculation of the cost of coffee.

In each of the `Milk` and `Sugar` classes you need to declare a `getPrice` method,
which will adjust the total cost of the drink.

```js
const coffee = new Coffee();

coffee.getPrice(); // 5

const coffeeWithSugar = new Sugar(coffee);

coffeeWithSugar.getPrice(); // 6

const coffeeWithMilk = new Milk(new Coffee());

coffeeWithMilk.getPrice(); // 7
```