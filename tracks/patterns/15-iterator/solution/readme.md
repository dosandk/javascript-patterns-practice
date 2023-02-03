# Iterator solution

```js
export class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  forEach (callback) {
    for (let item = this.start; item <= this.end; item += 1) {
      callback(item);
    }
  }

  getRange () {
    const range = [];

    this.forEach(item => {
      range.push(item);
    });

    return range;
  }
}
```
