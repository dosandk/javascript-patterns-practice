# Decorator

> За допомогою "обгорток" реалізує динамічне розширення функціоналу
> використовуючи механізм агрегації або композиції.

- Type: Structural
- Complexity: ⭐

Необхідно реалізувати декоратори `Milk` і `Sugar`, які будуть вносити
зміни в розрахунок вартості кави.

У кожному з класів `Milk` і `Sugar` необхідно оголосити метод `getPrice`,
к-й внесе корективи в підсумкову вартість напою.

```js
const coffee = new Coffee();

coffee.getPrice(); // 5

const coffeeWithSugar = new Sugar(coffee);

coffeeWithSugar.getPrice(); // 6

const coffeeWithMilk = new Milk(new Coffee());

coffeeWithMilk.getPrice(); // 7
```