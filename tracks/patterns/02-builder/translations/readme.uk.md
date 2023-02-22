# Builder

> Дає змогу створювати складні об'єкти покроково.

- Type: Creational
- Complexity: ⭐⭐

Будь ласка, реалізуйте методи `addPagination`, `addSort` і `addFilter`
класу `RequestBuilder`, які дозволять створювати об'єкти запитів на сервер
різної конфігурації.

```js
const request = new RequestBuilder()
  .addPagination(10, 20)
  .addSort(‘name’, ‘asc’)
  .addFilter(‘age’, 18, 36);
```