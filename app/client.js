'use strict';

var angular = require('angular');
var ngModule = angular.module('euro', ['ngRoute']);


require('angular-route');
require('./common/js/app.config.js')(ngModule);
require('./common/js/services')(ngModule);
// require('./common/js/directives')(ngModule);


require('./components')(ngModule);


require('./common/styles/app.styl');
require('./vendor/foundation.min.css');
