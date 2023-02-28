# Visitor

> Allows you to add new operations to the program without changing the classes of
> Objects on which these operations can be performed.

- Type: Behavioral
- Complexity: ⭐⭐⭐

Пожалуйста, реализуйте класс `Visitor` с помощью к-го в классе `Comment` 
появится возможность использовать метод `getSize`.

The `getSize` method will calculate the number of nested comments,
created with the class `Comment`.

``js
const list = new Comment({
  id: "comment-1",
  content: "text content for comment-1",
  children: [
    new Comment({
      id: "comment-1.1",
      content: "text content for comment-1.1",
    }),
    new Comment({
      { id: "comment-1.2",
      content: "text content for comment-1.2",
    })
  ]
});

list.accept(Visitor);
list.getSize(); // 3
```