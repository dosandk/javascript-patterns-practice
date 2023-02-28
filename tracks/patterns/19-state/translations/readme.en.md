# State

> Allows objects to change behavior depending on their
> state

- Type: Behavioral
- Complexity: ⭐⭐

Представьте что Вам предстоит произвести рефакторинг очень непростого класса
`OldDigitalLock`.

This class works similarly to a code lock, which is often found
on locker doors in checkrooms or on bicycle parking chains.

![](/assets/lock.png)

Entering the correct combination opens the lock and puts it in the "unlock" state,
the second entry of the combination in the "unlock" state, allows you to set a new
combination to open the lock.

The complexity of the class lies in the `toggle` method, which is filled with nested conditional
`if` constructs.

Fortunately you are familiar with the `State` pattern, which will allow you to untangle the tangle of nested
`if`.

Please implement classes `Locked` and `Unlocked` which will store information
and logic for each of the `locked` and `unlocked` states.

Create a link between the `Locked` and `Unlocked` classes and the `DigitalLock` class