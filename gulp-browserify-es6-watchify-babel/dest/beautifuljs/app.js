(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _test = require('./test1.js');

var p2 = new _test.Point(10, 10);
var p1 = new _test.Point(10, 3);
console.log(_test.Point.distance(p1, p2));

},{"./test1.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = exports.Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, null, [{
        key: "distance",
        value: function distance(a, b) {
            var dx = a.x - b.x;
            var dy = a.y - b.y;

            return Math.sqrt(dx * dx + dy * dy);
        }
    }]);

    return Point;
}();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL3Rlc3QxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7QUFDQSxJQUFNLEtBQUssZ0JBQVUsRUFBVixFQUFjLEVBQWQsQ0FBWDtBQUNBLElBQU0sS0FBSyxnQkFBVSxFQUFWLEVBQWMsQ0FBZCxDQUFYO0FBQ0EsUUFBUSxHQUFSLENBQVksWUFBTSxRQUFOLENBQWUsRUFBZixFQUFtQixFQUFuQixDQUFaOzs7Ozs7Ozs7Ozs7O0lDSmEsSyxXQUFBLEs7QUFDVCxtQkFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQjtBQUFBOztBQUNkLGFBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0g7Ozs7aUNBRWUsQyxFQUFHLEMsRUFBRztBQUNsQixnQkFBTSxLQUFLLEVBQUUsQ0FBRixHQUFNLEVBQUUsQ0FBbkI7QUFDQSxnQkFBTSxLQUFLLEVBQUUsQ0FBRixHQUFNLEVBQUUsQ0FBbkI7O0FBRUEsbUJBQU8sS0FBSyxJQUFMLENBQVUsS0FBRyxFQUFILEdBQVEsS0FBRyxFQUFyQixDQUFQO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5pbXBvcnQge1BvaW50fSBmcm9tICcuL3Rlc3QxLmpzJztcbmNvbnN0IHAyID0gbmV3IFBvaW50KDEwLCAxMCk7XG5jb25zdCBwMSA9IG5ldyBQb2ludCgxMCwgMyk7XG5jb25zb2xlLmxvZyhQb2ludC5kaXN0YW5jZShwMSwgcDIpKTtcblxuXG4iLCJleHBvcnQgY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzdGFuY2UoYSwgYikge1xuICAgICAgICBjb25zdCBkeCA9IGEueCAtIGIueDtcbiAgICAgICAgY29uc3QgZHkgPSBhLnkgLSBiLnk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcbiAgICB9XG59XG4iXX0=
