# Adapter

> Позволяет объектам с несовместимыми интерфейсами работать вместе.
> Превращает интерфейс одного класса в интерфейс, ожидаемый клиентом.

- Type: Structural
- Complexity: ⭐

Ф-ция `getArea` вычисляет площадь, перемножая св-ва `width` и `height` объекта, созданного
классом `Rectangle`.

Пожалуйста, сконструируйте класс `Adapter`, к-й позволит использовать ф-цию `getArea` для
вычисления площади объекта, созданного классом `Square`.

```js
getArea(new Adapter(new Square(10))); // 100
```
