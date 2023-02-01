import Singleton from './solution/index.js';

describe('patterns/singleton', () => {
  it('should return the same instance', () => {
    expect(new Singleton() === new Singleton()).toBeTrue();
  });
});
