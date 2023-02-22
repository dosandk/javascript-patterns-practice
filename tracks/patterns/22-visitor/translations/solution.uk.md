# Visitor solution

```js
export class Visitor {
  constructor(compositeItem) {
    this.compositeItem = compositeItem;
    this.init();
  }

  init () {
    this.addGetSize();

    for (const child of this.compositeItem.children) {
      child.accept(Visitor);
    }
  }

  addGetSize () {
    let count = 0;

    this.compositeItem.getSize = () => {
      count += 1;

      for (const child of this.compositeItem.children) {
        count += child.getSize();
      }

      return count;
    };
  }
}

export class Comment {
  constructor({
    id = '',
    content = '',
    children = []
  } = {}) {
    this.id = id;
    this.content = content;
    this.children = children;
  }

  accept (Visitor) {
    new Visitor(this);
  }
}
```