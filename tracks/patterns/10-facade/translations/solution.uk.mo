��    	      d      �       �   �   �   D   �  4   �     �  }     !   �  J   �  Q   �  �  M  �   �  D   �  8   �       �     !   �  N   �  U                                          	           this.location.addMonster(new Monster('demon'));
    this.location.addMonster(new Monster('demon'));
    this.location.addMonster(new Monster('undead'));
  }
}   addMonster (monster = {}) {
    this.monsters.push(monster);
  }
}   constructor(name = '') {
    this.name = name;
  } # Facade solution ```js
export class Game {
  start () {
    this.hero = new Hero('Barbarian');
    this.location = new Location('darkForest'); class Location {
  monsters = []; export class Hero {
  constructor(name = '') {
    this.name = name;
  }
} export class Monster {
  constructor(type = '') {
    this.type = type;
  }
}
``` Project-Id-Version: 
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2023-02-22 16:13+0200
Last-Translator: Automatically generated
Language-Team: none
Language: uk
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
X-Generator: Poedit 3.2.2
     this.location.addMonster(new Monster(‘demon’));
    this.location.addMonster(new Monster(‘demon’));
    this.location.addMonster(new Monster(‘undead’));
  }
}   addMonster (monster = {}) {
    this.monsters.push(monster);
  }
}   constructor(name = ‘’) {
    this.name = name;
  } # Facade solution ```js
export class Game {
  start () {
    this.hero = new Hero(‘Barbarian’);
    this.location = new Location(‘darkForest’); class Location {
  monsters = []; export class Hero {
  constructor(name = ‘’) {
    this.name = name;
  }
} export class Monster {
  constructor(type = ‘’) {
    this.type = type;
  }
}
``` 