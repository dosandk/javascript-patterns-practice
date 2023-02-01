import FormBuilder from './solution/index.js';

describe('patterns/builder', () => {
  it('should be able to add input element', () => {
    const form = new FormBuilder();

    form
      .addInput({ name: 'userLogin', type: 'text' });

    expect(form.element.querySelector('input[name="userLogin"]')).toBeDefined();
  });

  it('should be able to add a few input elements', () => {
    const form = new FormBuilder();

    form
      .addInput({ name: 'userLogin', type: 'text' })
      .addInput({ name: 'userPass', type: 'pass' });

    expect(form.element.querySelectorAll('input')).toHaveSize(2);
  });

  it('should be able to add a mix of inputs and textarea elements', () => {
    const form = new FormBuilder();

    form
      .addInput({ name: 'userLogin', type: 'text' })
      .addTextArea({ name: 'userBio' });

    expect(form.element.querySelector('input[name="userLogin"]')).toBeDefined();
    expect(form.element.querySelector('textarea[name="userBio"]')).toBeDefined();
  });
});
