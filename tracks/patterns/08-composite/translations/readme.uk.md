# Composite

> Дозволяє згрупувати безліч об'єктів у деревоподібну структуру,
> а потім працювати з нею так, ніби це одиничний об'єкт.

- Type: Structural
- Complexity: ⭐⭐⭐

Будь ласка, реалізуйте метод `getSum` для класів `Child` і `Parent`
таким чином, щоб можна було розрахувати загальну суму `value` для
усіх ел-тів вкладеної структури.

```js
const list = new Parent([
  new Child(1),
  new Child(1),
  new Parent([
    new Child(2),
    new Child(3),
  ])
]);

list.getSum(); // 7
```