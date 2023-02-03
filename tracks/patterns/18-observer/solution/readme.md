# Observer solution

```js
export class NewsChannel {
  users = [];

  subscribe (user) {
    this.users.push(user);
  }

  notify (message = '') {
    for (const user of this.users) {
      user.receiveMessage(message);
    }
  }
}

export class User {
  messagesHistory = [];
  constructor(name) {
    this.name = name;
  }

  receiveMessage (message = '') {
    this.messagesHistory.push(message);
  }
}
```
