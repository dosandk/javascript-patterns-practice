# Abstract Factory solution

```js
export class SuccessButton {}
export class ErrorButton {}
export class SuccessNotification {}
export class ErrorNotification {}

export class SuccessControl {
  create (type = '') {
    switch (type) {
    case 'button':
      return new SuccessButton();
    case 'notification':
      return new SuccessNotification();
    default:
      throw new Error('Unknown type of control');
    }
  }
}

export class ErrorControl {
  create (type = '') {
    switch (type) {
    case 'button':
      return new ErrorButton();
    case 'notification':
      return new ErrorNotification();
    default:
      throw new Error('Unknown type of control');
    }
  }
}

export default class ControlsFactory {
  getFactory (factoryType = '') {
    switch (factoryType) {
    case 'success':
      return new SuccessControl();
    case 'error':
      return new ErrorControl();
    default:
      throw new Error('Unknown type of factory');
    }
  }
}
```
