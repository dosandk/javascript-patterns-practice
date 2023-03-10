# State

> Дозволяє об'єктам змінювати поведінку залежно від свого
> стану

- Type: Behavioral
- Complexity: ⭐⭐

Представьте что Вам предстоит произвести рефакторинг очень непростого класса
`OldDigitalLock`.

Цей клас працює за аналогією з кодовим замком, к-й часто можна зустріти
на дверцятах шафок у гардеробах або на ланцюжках для паркінгу велосипедів.

![](/assets/lock.png)

Введення вірної комбінації відкриває замок і переводить його в стан "unlock",
повторне введення комбінації в стані "unlock", дає змогу задати нову
комбінацію для відкриття замка.

Складність класу полягає в методі `toggle` к-й наповнений вкладеними умовними
конструкціями `if`.

На щастя Ви знайомі з патерном `State`, к-й дозволить розплутати клубок вкладених
`if`.

Будь ласка, реалізуйте класи `Locked` і `Unlocked`, в яких буде зберігатися інформація
і логіка поведінки для кожного зі станів "locked" і "unlocked".

Створіть зв'язок класів `Locked` і `Unlocked` з класом `DigitalLock`