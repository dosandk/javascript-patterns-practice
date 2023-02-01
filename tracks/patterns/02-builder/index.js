export default class FormBuilder {
  constructor() {
    this.createElement();
  }

  createElement () {
    this.element = document.createElement('form');
  }

  addInput ({ name = '', type = '' } = {}) {
    // todo: implement logic
  }

  addTextArea ({ name = '' } = {}) {
    // todo: implement logic
  }
}
