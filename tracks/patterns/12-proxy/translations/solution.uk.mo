��          T      �       �   ?   �   `   �   8   Z     �  p   �  H     �  ^  ?   �  d   &  <   �     �  p   �  H   J                                            return "user does not have permissions to write";
  }
}
```   write () {
    if (this.user.rights.includes('admin')) {
      return this.user.write();
    }   write () {
    return "write something to repo";
  }
} # Proxy solution ```js
export class User {
  constructor(name, rights = []) {
    this.name = name;
    this.rights = rights;
  } export class ProxyUser {
  constructor(user) {
    this.user = user;
  } Project-Id-Version: 
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2023-02-22 16:07+0200
Last-Translator: Automatically generated
Language-Team: none
Language: uk
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
X-Generator: Poedit 3.2.2
     return "user does not have permissions to write";
  }
}
```   write () {
    if (this.user.rights.includes(‘admin’)) {
      return this.user.write();
    }   write () {
    return “write something to repo”;
  }
} # Proxy solution ```js
export class User {
  constructor(name, rights = []) {
    this.name = name;
    this.rights = rights;
  } export class ProxyUser {
  constructor(user) {
    this.user = user;
  } 