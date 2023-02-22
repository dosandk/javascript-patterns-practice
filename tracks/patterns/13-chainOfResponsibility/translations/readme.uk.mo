��          |      �             !  *   ;  �  f  _  "    �    �  �   �  �   D  �   �    �	  �   �
  �  <     �  *   �  �  	  A  �  �   �    �  �   �  �   �  �   M    �  �   �                              	            
                 # Chain Of Responsibility - Type: Behavioral
- Complexity: ⭐⭐⭐ - `MinLengthHandler` - проверяет что длина строки минимум 5 символов
- `NumbersHandler` - проверяет что строка содержит как минимум один числовой символ
- `LettersHandler` - проверяет что строка содержит как минимум один буквенный символ
- `CapitalLettersHandler` - проверяет что строка содержит как минимум одну заглавный буквенный символ
- `SpecialCharsHandler` - проверяет что строка содержит как минимум один специальный символ > Позволяет передавать запросы последовательно по цепочке обработчиков.
> Каждый последующий обработчик решает, может ли он обработать запрос сам и
> стоит ли передавать запрос дальше по цепи. В данный момент в системе существуют следующие классы, описывающие правила валидации:
`MinLengthHandler`, `NumbersHandler`, `LettersHander`, `CapitalLettersHandler`
и `SpecialCharsHandler`. Для полей формы с вводом пароля пользователя, правила могут быть строже, по сравнению
с валидацией поля для ввода пользовательского никнейма. Их работа построена на основе применения регулярного выражения к строке
пользовательского ввода: Пожалуйста, реализуйте методы `setNext`, `next` и `validate` класса `Handler`,
к-й наследуют вышеуказанные классы. Представьте что Вам необходимо разработать инструмент для валидации полей ввода формы
Web-приложения. Так как с подобной задачей на практике Вы сталкиваетесь не первый раз, 
то понимаете что набор правил валидации может быть расширен в будущем. Также что для разных полей формы может быть применим разный набор правил. Project-Id-Version: 
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2023-02-22 15:27+0200
Last-Translator: Automatically generated
Language-Team: none
Language: uk
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
X-Generator: Poedit 3.2.2
 # Chain Of Responsibility - Type: Behavioral
- Complexity: ⭐⭐⭐ - `MinLengthHandler` - перевіряє що довжина рядка мінімум 5 символів
- `NumbersHandler` - перевіряє що рядок містить як мінімум один числовий символ
- `LettersHandler` - перевіряє що рядок містить щонайменше один буквений символ
- `CapitalLettersHandler` - перевіряє, що рядок містить щонайменше один заголовний буквений символ
- `SpecialCharsHandler` - перевіряє що рядок містить щонайменше один спеціальний символ > Дозволяє передавати запити послідовно по ланцюжку обробників.
> Кожен наступний обробник вирішує, чи може він обробити запит сам і
> чи варто передавати запит далі по ланцюгу. Наразі в системі існують такі класи, що описують правила валідації:
`MinLengthHandler`, `NumbersHandler`, `LettersHander`, `CapitalLettersHandler`
і `SpecialCharsHandler`. Для полів форми з введенням пароля користувача, правила можуть бути суворішими, порівняно з
з валідацією поля для введення користувацького нікнейма. Їхня робота побудована на основі застосування регулярного виразу до рядка
користувацького введення: Будь ласка, реалізуйте методи `setNext`, `next` і `validate` класу `Handler`,
до-й успадковують вищевказані класи. Уявіть що Вам необхідно розробити інструмент для валідації полів введення форми
Web-додатку. Оскільки з подібним завданням на практиці Ви стикаєтеся не вперше,
то розумієте, що набір правил валідації може бути розширено в майбутньому. Також що для різних полів форми може бути застосовний різний набір правил. 