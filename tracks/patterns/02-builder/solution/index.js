export default class FormBuilder {
  constructor() {
    this.createElement();
  }

  createElement () {
    this.element = document.createElement('form');
  }

  addInput ({ name = '', type = '' } = {}) {
    const inputElement = document.createElement('input');

    inputElement.type = type;
    inputElement.name = name;

    this.element.append(inputElement);

    return this;
  }

  addTextArea ({ name = '' } = {}) {
    const textareaElement = document.createElement('textarea');

    textareaElement.name = name;
    textareaElement.rows = 4;
    textareaElement.cols = 50;

    this.element.append(textareaElement);

    return this;
  }
}
