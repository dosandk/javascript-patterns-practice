# Builder

> Allows you to create complex objects step by step.

- Type: Creational
- Complexity: ⭐⭐

Please implement methods `addPagination`, `addSort` and `addFilter`
of the `RequestBuilder` class to allow us to create query objects for the server
different configurations.

```js
const request = new RequestBuilder()
  .addPagination(10, 20)
  .addSort('name', 'asc')
  .addFilter('age', 18, 36);
```