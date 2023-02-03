export class Child {
  constructor(value) {
    this.value = value;
  }

  getSum () {
    return this.value;
  }
}

export class Parent {
  constructor(values = []) {
    this.values = values;
  }

  getSum () {
    let sum = 0;

    for (const item of this.values) {
      sum += item.getSum();
    }

    return sum;
  }
}

