Þ                ì       0  &   1  '   X       1     ,   É  ]   ö  Y   T  L   ®     û  )     '   6  Z   ^    ¹  &   A  '   h       5   §  ,   Ý  ]   
  Y   h  P   Â       -   $  '   R  ^   z               
         	                                      return new Locked(this.key);
  }
}     return this.state.status;
  }
}
```     return this;
  }
}   constructor(key = '') {
    this.key = key;
  }   constructor(key) {
    this.key = key;
  }   next (combination) {
    if (combination === this.key) {
      return new Unlocked();
    }   next (combination) {
    if (combination) {
      return new Locked(combination);
    }   toggle (combination = '') {
    this.state = this.state.next(combination); # State solution ```js
class Locked {
  status = "locked"; class Unlocked {
  status = "unlocked"; export class DigitalLock {
  constructor(key = "") {
    this.state = new Locked(key);
  } Project-Id-Version: 
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2023-02-22 14:24+0200
Last-Translator: Automatically generated
Language-Team: none
Language: uk
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
X-Generator: Poedit 3.2.2
     return new Locked(this.key);
  }
}     return this.state.status;
  }
}
```     return this;
  }
}   constructor(key = ââ) {
    this.key = key;
  }   constructor(key) {
    this.key = key;
  }   next (combination) {
    if (combination === this.key) {
      return new Unlocked();
    }   next (combination) {
    if (combination) {
      return new Locked(combination);
    }   toggle (combination = ââ) {
    this.state = this.state.next(combination); # State solution ```js
class Locked {
  status = âlockedâ; class Unlocked {
  status = "unlocked"; export class DigitalLock {
  constructor(key = ââ) {
    this.state = new Locked(key);
  } 