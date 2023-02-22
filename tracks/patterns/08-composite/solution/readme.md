# Composite solution

```js
export class Child {
  constructor(value) {
    this.value = value;
  }

  getSum () {
    return this.value;
  }
}

export class Parent {
  constructor(children = []) {
    this.children = children;
  }

  getSum () {
    let sum = 0;

    for (const child of this.children) {
      sum += child.getSum();
    }

    return sum;
  }
}
```
