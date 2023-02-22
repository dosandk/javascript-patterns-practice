# Facade

> Provides a simple interface to a complex entity: a set of methods
> class, library, framework, etc.

- Type: Structural
- Complexity: ⭐

Imagine that you are designing a computer game where the hero, going on
on an adventure must fight monsters in different game
locations.

Your work is in its final stages, the classes `Location` are ready,
`Hero` and `Monster`.

All that's left is to create objects of the corresponding classes:

``js
this.hero = new Hero('Barbarian');
this.location = new Location('darkForest');

this.location.addMonster(new Monster('demon'));
this.location.addMonster(new Monster('demon'));
this.location.addMonster(new Monster('undead'));
```

In order to simplify the initialization of the game, you decide to create
another class `Game` to put all the logic responsible for
game initialization.

Please implement the `start` method of the `Game` class to start the game.