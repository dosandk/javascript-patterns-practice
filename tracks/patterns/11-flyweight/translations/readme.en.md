# Flyweight

> Allows you to save memory by separating the overall state of objects
> between each other, instead of storing the same data in each object.

- Type: Structural
- Complexity: ⭐

Imagine you are working on a store, you have already developed a class
`ProductStore` class to store products in the system.

But analyzed the data on the products, you found that each of them
contains general information stored in the `info` property:

```js
{
  model: "m1",
  info: {
    name: "Apple",
    country: "USA",
    color: "silver"
  }
},
{
  model: "m2",
  info: {
    name: "Apple",
    country: "USA",
    color: "silver"
  }
},
...
```

To optimize the memory required for storing goods, you have decided to
to use the "Flyweight" pattern.

Please implement methods `addProduct` and `getOrCreateFlyweight` of class
`ProductStore` class, as well as a link to the class `Flyweight` which will
store the general state of the products, namely the data from the property `info`.