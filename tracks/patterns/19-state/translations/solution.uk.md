# State solution

```js
class Locked {
  status = “locked”;

  constructor(key) {
    this.key = key;
  }

  next (combination) {
    if (combination === this.key) {
      return new Unlocked();
    }

    return this;
  }
}

class Unlocked {
  status = "unlocked";

  constructor(key = ‘’) {
    this.key = key;
  }

  next (combination) {
    if (combination) {
      return new Locked(combination);
    }

    return new Locked(this.key);
  }
}

export class DigitalLock {
  constructor(key = “”) {
    this.state = new Locked(key);
  }

  toggle (combination = ‘’) {
    this.state = this.state.next(combination);

    return this.state.status;
  }
}
```