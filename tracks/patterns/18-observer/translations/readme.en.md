# Observer

> Allows you to create a subscription mechanism that allows some
> entities to monitor and react to events that occur in other
> Entities, as a consequence of providing weak connectivity.

- Type: Behavioral
- Complexity: ⭐⭐

Please implement methods `subscribe` of class `NewsChannel`
which will allow all users to subscribe to the news
and the `notify` method which will send those messages to all
subscribers.

Also implement the `receiveMessage` method of the `User` class to get messages and
write them into the `messageHistory` field.