'use strict';

require('./common/js/app1');
require('./common/styles/app.styl');

var home = require("./common/templates/home.jade")();

var x = document.getElementById("myDiv");
x.innerHTML = home;

console.log('main app!!!');
