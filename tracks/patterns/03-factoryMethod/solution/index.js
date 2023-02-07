class Input {
  element = {};
  create () {
    // Abstract method
  }
}

export class TextInput extends Input {
  create () {
    super.create();
    this.element.type = 'text';
  }
}

export class NumberInput extends Input {
  create () {
    super.create();
    this.element.type = 'number';
  }
}

export class EmailInput extends Input {
  create () {
    super.create();
    this.element.type = 'email';
  }
}

export const inputFactory = (type = '') => {
  switch (type) {
  case 'text':
    return new TextInput();
  case 'number':
    return new NumberInput();
  case 'email':
    return new EmailInput();
  default:
    throw new Error('Unknown type');
  }
};
