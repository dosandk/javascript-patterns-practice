# Adapter

> Allows objects with incompatible interfaces to work together.
> Turns an interface of one class into the interface expected by the client.

- Type: Structural
- Complexity: ⭐

The `getArea` function calculates the area by multiplying the `width` and `height` properties of an object created by
rectangle` class.

Please construct a class `Adapter` that allows you to use the `getArea` function to
calculate the area of the object created by the class `Square`.

```js
getArea(new Adapter(new Square(10))); // 100
```