��          T      �       �   n   �   S   (  3   |     �  .   �  [   �  =  O  n   �  S   �  3   P     �  .   �  [   �                                          notify (message = '') {
    for (const user of this.users) {
      user.receiveMessage(message);
    }
  }
}   receiveMessage (message = '') {
    this.messagesHistory.push(message);
  }
}
```   subscribe (user) {
    this.users.push(user);
  } # Observer solution ```js
export class NewsChannel {
  users = []; export class User {
  messagesHistory = [];
  constructor(name) {
    this.name = name;
  } Project-Id-Version: 
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2023-02-22 14:26+0200
Last-Translator: Automatically generated
Language-Team: none
Language: en
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=2; plural=(n != 1);
X-Generator: Poedit 3.2.2
   notify (message = '') {
    for (const user of this.users) {
      user.receiveMessage(message);
    }
  }
}   receiveMessage (message = '') {
    this.messagesHistory.push(message);
  }
}
```   subscribe (user) {
    this.users.push(user);
  } # Observer solution ```js
export class NewsChannel {
  users = []; export class User {
  messagesHistory = [];
  constructor(name) {
    this.name = name;
  } 