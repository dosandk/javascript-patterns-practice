��    	      d      �       �      �   �   �   x   �  u   C     �  p   �  p   =  f   �  =       S  �   n  x   <  u   �     +     >     S  f   h                         	                         return this;
  }
}
```   addFilter (filter, filterLte, filterGte) {
    this.url.searchParams.set('filter', filter);
    this.url.searchParams.set('filter_lte', filterLte);
    this.url.searchParams.set('filter_gte', filterGte);   addPagination (start, end) {
    this.url.searchParams.set('start', start);
    this.url.searchParams.set('end', end);   addSort (sort, order) {
    this.url.searchParams.set('sort', sort);
    this.url.searchParams.set('order', order); # Builder solution /Users/Shared/javascript-patterns-practice/tracks/patterns/02-builder/solution/readme.md:15    return this;
  } /Users/Shared/javascript-patterns-practice/tracks/patterns/02-builder/solution/readme.md:22    return this;
  } ```js
export default class RequestBuilder {
  constructor(url = '') {
    this.url = new URL(url);
  } Project-Id-Version: 
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2023-02-22 16:38+0200
Last-Translator: Automatically generated
Language-Team: none
Language: en
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=2; plural=(n != 1);
X-Generator: Poedit 3.2.2
     return this;
  }
}
```   addFilter (filter, filterLte, filterGte) {
    this.url.searchParams.set('filter', filter);
    this.url.searchParams.set('filter_lte', filterLte);
    this.url.searchParams.set('filter_gte', filterGte);   addPagination (start, end) {
    this.url.searchParams.set('start', start);
    this.url.searchParams.set('end', end);   addSort (sort, order) {
    this.url.searchParams.set('sort', sort);
    this.url.searchParams.set('order', order); # Builder solution     return this;
  }     return this;
  } ```js
export default class RequestBuilder {
  constructor(url = '') {
    this.url = new URL(url);
  } 