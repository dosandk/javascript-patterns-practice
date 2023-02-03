# Builder

Пожалуйтса реализуйте методы `addInput` и `addTextArea` класса `FormBuilder`,
к-е позволят создавать html-формы различной конфигурации:

```js
const loginForm = new FormBuilder();

loginForm
  .addInput({ name: 'userLogin', type: 'text' })
  .addInput({ name: 'userPass', type: 'password' });

const commentForm = new FormBuilder();

commentForm
  .addInput({ name: 'commentTitle', type: 'text' })
  .addTextArea({ name: 'commentBody', type: 'text' })
```
