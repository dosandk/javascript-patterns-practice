# Composite

> Allows you to group many objects into a tree structure,
> and then work with it as if it were a single object.

- Type: Structural
- Complexity: ⭐⭐⭐

Please implement the `getSum` method for classes `Child` and `Parent`
so that it is possible to calculate the total sum of `value` for
for all nested structure items.

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