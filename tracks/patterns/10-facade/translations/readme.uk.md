# Facade

> Надає простий інтерфейс до складної сутності: набору методів
> класу, бібліотеці, фреймворку тощо.

- Type: Structural
- Complexity: ⭐

Уявіть що Ви розробляєте комп'ютерну гру, де герой, вирушаючи
назустріч пригодам повинен битися з монстрами в різних ігрових
локаціях.

Ваша робота перебуває на завершальній стадії, готові класи `Location`,
`Hero` і `Monster`.

Усе що залишилося - це створити об'єкти відповідних класів:

```js
this.hero = new Hero('Barbarian');
this.location = new Location('darkForest');

this.location.addMonster(new Monster('demon'));;
this.location.addMonster(new Monster('demon'));
this.location.addMonster(new Monster('undead'));
```

Для того щоб спростити роботу з ініціалізацією гри, Ви вирішуєте створити
ще один клас `Game`, щоб помістити в нього всю логіку, що відповідає за
старт гри.

Будь ласка, реалізуйте метод `start` класу `Game` для запуску гри.