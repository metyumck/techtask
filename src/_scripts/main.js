// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.jQuery = require('jquery');
require('bootstrap');

var elements = document.getElementsByTagName('a');
for(var i = 0, len = elements.length; i < len; i++) {
  elements[i].onclick = function () {
    console.log(this);
  }
}
