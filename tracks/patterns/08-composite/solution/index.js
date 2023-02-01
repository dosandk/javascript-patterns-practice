export class Child {
  constructor(value) {
    this.value = value;
  }

  getSum () {
    // todo: add your logic here
    return this.value;
  }
}

export class Parent {
  constructor(values = []) {
    this.values = values;
  }

  getSum () {
    // todo: add your logic here
    let sum = 0;

    for (const item of this.values) {
      sum += item.getSum();
    }

    return sum;
  }
}

