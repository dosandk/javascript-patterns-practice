# Composite

Пожалуйста, реализуйте метод `getSum` для классов `Child` и `Parent` 
таким образом, чтобы можно было рассчитать общую сумму `value` для
всех эл-тов вложенной структуры.

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
