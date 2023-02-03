# Memento solution

```js
export class Memento {
  #state = {};

  constructor (state = {}) {
    this.#state = JSON.parse(state);
  }

  getState () {
    return this.#state;
  }
}

export class History {
  #snapshots = [];

  add (snapshot = {}) {
    this.#snapshots.unshift(snapshot);

    return this.#snapshots.at(0);
  }
}

export class Hero {
  #name = '';

  #state = {
    level: 1,
    skills: [],
  };

  constructor(name = '', history = {}) {
    this.#name = name;
    this.history = history;
  }

  get state () {
    return this.#state;
  }

  addSkill (skill) {
    this.#state.skills.push(skill);
  }

  increaseLevel () {
    this.#state.level += 1;
  }

  load (snapshot = {}) {
    this.#state = snapshot.getState();
  }

  save () {
    return this.history.add(new Memento(JSON.stringify(this.#state)));
  }
}
```
