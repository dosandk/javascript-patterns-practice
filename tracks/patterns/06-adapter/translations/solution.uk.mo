��          L      |       �      �   O   �   r     o     G   �  �  7     �  O   �  r   "  o   �  G                                            # Adapter solution ```js
export const getArea = shape => {
  return shape.width * shape.height;
}; export class Adapter {
  constructor(shape) {
    this.width = shape.size;
    this.height = shape.size;
  }
}
``` export class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
} export class Square {
  constructor(size) {
    this.size = size;
  }
} Project-Id-Version: 
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2023-02-22 16:24+0200
Last-Translator: Automatically generated
Language-Team: none
Language: uk
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
X-Generator: Poedit 3.2.2
 # Adapter solution ```js
export const getArea = shape => {
  return shape.width * shape.height;
}; export class Adapter {
  constructor(shape) {
    this.width = shape.size;
    this.height = shape.size;
  }
}
``` export class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
} export class Square {
  constructor(size) {
    this.size = size;
  }
} 