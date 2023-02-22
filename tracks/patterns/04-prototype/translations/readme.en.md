# Prototype

> Allows you to copy objects without going into the details of their implementation.

- Type: Creational
- Complexity: ⭐⭐

Imagine that you are designing a computer game where the hero, going
on his adventures, must visit different game locations and defeat
all the monsters on their way.

To generate game locations you have constructed a class `Location`, which
takes as its arguments the name of the location, the number of monsters and the object
with characteristics of monsters of the given location.

After analyzing the requirements for the game locations you come to the conclusion that they
will differ only in the characteristics of the monsters that inhabit this
location, namely, the type of monsters.

In order to simplify the task of creating and customizing locations, you have decided to
to use the "Prototype" pattern.

Please implement method `initMonsters` of class `Location`, whose task is to
create a certain number of monsters in the location (use class `Monster`).

Add the `clone` method to the `Location` class, which will allow you to make an exact
a copy of the current location and make changes later.

**Note:** the connection between the location and the monsters must be made
so that when you change the `monstersSetting` property of a location object,
it should affect the change of monsters' object's properties.

```js
const location = new Location("dryHills", 3, { type: "undead" });
const newLocation = location.clone();

newLocation.name = "laveCavern";
newLocation.monstersSettings.type = "demon";

console.log(newLocation.monsters.at(0).settings.type); // "demon
```