# Singleton

> Ensures that the class has only one instance

- Type: Creational
- Complexity: ⭐⭐

Please implement the logic of the class constructor so that
when creating objects with this class, a reference
to the same object, or, in other words, that an object with this
class was created only once.

```js
console.log(new Singleton() === new Singleton()); // true
```