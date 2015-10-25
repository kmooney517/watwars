(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var EmpireFighter = function EmpireFighter(obj) {

	this.health = 100;

	this.hit = function (num) {
		var hitPoints = num || 10;
		return this.health = this.health - hitPoints;
	};
};

exports["default"] = EmpireFighter;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
// Constructor Function for all Fighters
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var RepublicFighter = function RepublicFighter(obj) {

	this.health = 100;

	this.hit = function (num) {
		var hitPoints = num || 10;
		return this.health = this.health - hitPoints;
	};
};

exports["default"] = RepublicFighter;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _republicJs = require('./republic.js');

var _republicJs2 = _interopRequireDefault(_republicJs);

var _empireJs = require('./empire.js');

var _empireJs2 = _interopRequireDefault(_empireJs);

(function () {
	'use strict';

	describe('About my Republic Fighter', function () {
		beforeEach(function () {
			window.x = new _republicJs2['default']();
			window.captainPlanet = new _republicJs2['default']();
		});

		describe('creating a republic fighter', function () {
			it('create an instance of a republic fighter', function () {
				expect(x instanceof _republicJs2['default']).to.equal(true);
			});
		});

		describe('republic fighters health', function () {
			it('should have full health when the instance is created', function () {
				expect(x.health).to.equal(100);
			});
		});

		describe('player taking damage', function () {
			it('should lower the score, after getting hit', function () {
				x.hit();
				expect(x.health).to.be.below(100);
			});
		});
	});

	describe('About my Empire Fighter', function () {
		beforeEach(function () {
			window.y = new _empireJs2['default']();
		});

		describe('creating an empire fighter', function () {
			it('create an instance of an empire fighter', function () {
				expect(y instanceof _empireJs2['default']).to.equal(true);
			});
		});

		describe('empire fighters health', function () {
			it('should have full health when the instance is created', function () {
				expect(y.health).to.equal(100);
			});
		});

		describe('player taking damage', function () {
			it('should lower the score, after getting hit', function () {
				y.hit();
				expect(y.health).to.be.below(100);
			});
		});
	});
})();

},{"./empire.js":1,"./republic.js":2}]},{},[3])


//# sourceMappingURL=tests.js.map
