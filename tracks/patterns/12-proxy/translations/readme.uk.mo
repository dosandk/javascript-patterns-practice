��          |      �             !  (   )  �   R     �  M   �  ?   @  ;  �  �   �  ?  G  �  �  3    �  A     �	  (   �	  �   �	     �
  U   �
  ?   �
    )  �   I  .  �  e  �  -  c                                      	              
       # Proxy - Type: Structural
- Complexity: ⭐⭐  > Позволяет подставлять вместо реальных объектов специальные 
> объекты-заменители. ```js const user = new User("John", ["member"]);
const proxy = new ProxyUser(user); proxy.write(); // "user does not have permissions to write"
``` В определенный момент Вам понадобилось ограничить права пользователей
на запись в репозиторий. Теперь только пользователи с правами администратора
имеют права на запись. Но вот проблема, архитектор системы запретил вносить изменения в класс
`User`. Пожалуйста, реализуйте логику конструктора и метод `write` класса
`ProxyUser`, таким образом, что бы только пользователи с правами администратора
имели права на запись в репозиторий. Представьте что Вы реализовываете систему пользовательского доступа к
ресурсам Web-приложения. В системе уже готов класс `User` с методом
`write`, позволяющим объектам данного класса осуществлять запись в 
репозиторий. Хорошо что Вы знакомы с паттерном "Proxy", к-й позволит обойти данное 
ограничение за счет того что обращение к объекту пользователя будет
происходить через объект-прокси. Project-Id-Version: 
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2023-02-22 16:08+0200
Last-Translator: Automatically generated
Language-Team: none
Language: uk
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
X-Generator: Poedit 3.2.2
 # Proxy - Type: Structural
- Complexity: ⭐⭐  > Дозволяє підставляти замість реальних об'єктів спеціальні
> об'єкти-замінники. ```js const user = new User(“John”, [“member”]);
const proxy = new ProxyUser(user); proxy.write(); // "user does not have permissions to write"
``` У певний момент Вам знадобилося обмежити права користувачів
на запис у репозиторій. Тепер тільки користувачі з правами адміністратора
мають права на запис. Але ось проблема, архітектор системи заборонив вносити зміни в клас
`User`. Будь ласка, реалізуйте логіку конструктора і метод `write` класу
`ProxyUser`, таким чином, що б тільки користувачі з правами адміністратора
мали права на запис у репозиторій. Уявіть, що Ви реалізовуєте систему користувацького доступу до
ресурсів Web-додатка. У системі вже готовий клас `User` з методом
`write`, що дозволяє об'єктам даного класу здійснювати запис у
репозиторій. Добре що Ви знайомі з патерном "Proxy", який дозволить обійти це
обмеження за рахунок того що звернення до об'єкта користувача буде
відбуватиметься через об'єкт-проксі. 