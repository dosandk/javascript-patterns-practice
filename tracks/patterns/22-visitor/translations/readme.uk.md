# Visitor

> Дозволяє додавати в програму нові операції, не змінюючи класи
> об'єктів, над якими ці операції можуть виконуватися.

- Type: Creational
- Complexity: ⭐⭐

Пожалуйста, реализуйте класс `Visitor` с помощью к-го в классе `Comment` 
появится возможность использовать метод `getSize`.

Метод `getSize` дозволить розрахувати кількість вкладених коментарів,
створених за допомогою класу `Comment`.

```js
const list = new Comment({
  id: "comment-1",
  content: "текстовий вміст для коментаря-1",
  children: [
    new Comment({
      id: "comment-1.1",
      content: "текстовий контент для коментаря-1.1",
    }),
    new Comment({
      id: "comment-1.2",
      content: "text content for comment-1.2",
    })
  ]
});

list.accept(Visitor);
list.getSize(); // 3
```