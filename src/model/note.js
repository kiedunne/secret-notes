'use strict';

 function Note() {
   this.text = ''
   this.title = ''
 };

 Note.prototype.create = function(title, text) {
   this.title = title;
   this.text = text;
 };
