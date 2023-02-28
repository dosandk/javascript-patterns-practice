import ControlsFactory,
{
  SuccessControl,
  ErrorControl,
  SuccessButton,
  ErrorButton,
  SuccessNotification,
  ErrorNotification
} from './solution/index.js';

describe('patterns/abstractFactory', () => {
  it('should be able to create "success" and "error" factories', () => {
    const factory = new ControlsFactory();

    expect(factory.getFactory('success') instanceof SuccessControl).toBeTrue();
    expect(factory.getFactory('error') instanceof ErrorControl).toBeTrue();
  });

  it('should be able to create "success" notification and button', () => {
    const factory = new ControlsFactory();
    const successFactory = factory.getFactory('success');

    expect(successFactory.create('notification') instanceof SuccessNotification).toBeTrue();
    expect(successFactory.create('button') instanceof SuccessButton).toBeTrue();
  });

  it('should be able to create "error" notification and button', () => {
    const factory = new ControlsFactory();
    const errorFactory = factory.getFactory('error');

    expect(errorFactory.create('notification') instanceof ErrorNotification).toBeTrue();
    expect(errorFactory.create('button') instanceof ErrorButton).toBeTrue();
  });
});
