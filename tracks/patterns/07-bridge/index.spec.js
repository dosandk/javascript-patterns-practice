import { GreenColorPallet, Notification, RedColorsPallet } from './solution/index.js';

describe('patterns/bridge', () => {
  it('should be able to create "success" notification', () => {
    const successNotification = new Notification('success', new GreenColorPallet());

    expect(successNotification.toString()).toBe("This is success notification with green colors pallet");
  });

  it('should be able to create "error" notification', () => {
    const errorNotification = new Notification('error', new RedColorsPallet());

    expect(errorNotification.toString()).toBe("This is error notification with red colors pallet");
  });
});
