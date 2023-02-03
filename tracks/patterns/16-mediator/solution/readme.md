# Mediator solution

```js
export class BillSharing {
  participants = [];
  balance = 0;

  constructor(price = 0) {
    this.price = price;
  }

  addParticipant (participant) {
    this.participants.push(participant);
  }

  getPaymentAmount() {
    return this.price / this.participants.length;
  }

  pay (amount = 0) {
    this.balance += amount;
  }

  share () {
    for (const participant of this.participants) {
      participant.pay();
    }
  }

  borrow (amount = 0) {
    const participants = this.participants.filter(participant => participant.cash);

    for (const participant of participants) {
      participant.borrow(amount / participants.length);
    }
  }
}

export class User {
  constructor(name = '', cash = 0, billSharing) {
    this.name = name;
    this.cash = cash;
    this.billSharing = billSharing;
  }

  pay () {
    const billPart = this.billSharing.getPaymentAmount();

    if (this.cash >= billPart) {
      this.cash -= billPart;
      this.billSharing.pay(billPart);
    } else {
      this.billSharing.pay(this.cash);
      const amount = billPart - this.cash;
      this.cash = 0;
      this.billSharing.borrow(amount);
    }
  }

  borrow (amount = 0) {
    if (this.cash >= amount) {
      this.billSharing.pay(amount);
      this.cash -= amount;
    }
  }
}
```
