��          L      |       �   w   �      !  U   3  S   �  �   �  =  c  w   �       U   +  S   �  �   �                                           toString () {
    return `This is ${this.name} notification with ${this.colorsPallet.color} colors pallet`;
  }
}
``` # Bridge solution ```js
export class RedColorsPallet {
  constructor () {
    this.color = 'red';
  }
} export class GreenColorsPallet {
  constructor () {
    this.color = 'green';
  }
} export class Notification {
  constructor (name = '', colorsPallet) {
    this.name = name;
    this.colorsPallet = colorsPallet;
  } Project-Id-Version: 
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2023-02-22 16:20+0200
Last-Translator: Automatically generated
Language-Team: none
Language: en
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=2; plural=(n != 1);
X-Generator: Poedit 3.2.2
   toString () {
    return `This is ${this.name} notification with ${this.colorsPallet.color} colors pallet`;
  }
}
``` # Bridge solution ```js
export class RedColorsPallet {
  constructor () {
    this.color = 'red';
  }
} export class GreenColorsPallet {
  constructor () {
    this.color = 'green';
  }
} export class Notification {
  constructor (name = '', colorsPallet) {
    this.name = name;
    this.colorsPallet = colorsPallet;
  } 