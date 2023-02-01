import { inputFactory, TextInput, NumberInput, EmailInput } from './solution/index.js';

describe('patterns/factoryMethod', () => {
  it('should be abel to create text type input element', () => {
    expect(inputFactory('text') instanceof TextInput).toBeTrue();
  });

  it('should be abel to create number type input element', () => {
    expect(inputFactory('number') instanceof NumberInput).toBeTrue();
  });

  it('should be abel to create email type input element', () => {
    expect(inputFactory('email') instanceof EmailInput).toBeTrue();
  });
});
