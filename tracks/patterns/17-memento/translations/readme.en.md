# Memento

> Allows you to save and restore past states of objects,
> Without revealing the details of their implementation

- Type: Behavioral
- Complexity: ⭐⭐⭐

Imagine that in the computer game you are developing,
the game you are developing requires you to implement a mechanism for saving progress.

Your hero, implemented by the class `Hero`, has two methods `increaseLevel`
and `addSkill` methods, which respectively increase the current level of the hero and add
new skills for the hero.

Please implement classes `History` and `Memento`, which allow you to manage
saves and return to the previous states of your hero.

**Note** that the hero's level and skills are stored in the private property
`#state` of the `Hero` class.