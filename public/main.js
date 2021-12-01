/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/classes/Enemy.js":
/*!*********************************!*\
  !*** ./src/js/classes/Enemy.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Enemy": () => (/* binding */ Enemy)
/* harmony export */ });
/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect */ "./src/js/classes/Rect.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Enemy = /*#__PURE__*/function (_Rect) {
  _inherits(Enemy, _Rect);

  var _super = _createSuper(Enemy);

  function Enemy(_ref) {
    var rect = _ref.rect;

    _classCallCheck(this, Enemy);

    return _super.call(this, rect);
  }

  _createClass(Enemy, [{
    key: "handleBorderCollision",
    value: function handleBorderCollision(canvas) {
      var collisions = _get(_getPrototypeOf(Enemy.prototype), "detectBorderCollision", this).call(this, canvas);

      if (collisions.includes('left')) {
        this.reverseSpeed('x');
        this.x = 0;
      }

      if (collisions.includes('right')) {
        this.reverseSpeed('x');
        this.x = canvas.width - this.size;
      }

      if (collisions.includes('top')) {
        this.reverseSpeed('y');
        this.y = 0;
      }

      if (collisions.includes('bottom')) {
        this.reverseSpeed('y');
        this.y = canvas.height - this.size;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      ctx.fillStyle = 'red';

      _get(_getPrototypeOf(Enemy.prototype), "draw", this).call(this, ctx);

      ctx.restore();
    }
  }]);

  return Enemy;
}(_Rect__WEBPACK_IMPORTED_MODULE_0__.Rect);

/***/ }),

/***/ "./src/js/classes/Player.js":
/*!**********************************!*\
  !*** ./src/js/classes/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect */ "./src/js/classes/Rect.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Player = /*#__PURE__*/function (_Rect) {
  _inherits(Player, _Rect);

  var _super = _createSuper(Player);

  function Player(_ref) {
    var _this;

    var window = _ref.window,
        rect = _ref.rect;

    _classCallCheck(this, Player);

    _this = _super.call(this, rect);
    _this.window = window;
    _this.inputStates = {
      ArrowUp: false,
      ArrowRight: false,
      ArrowDown: false,
      ArrowLeft: false,
      Space: false
    };

    _this.window.onkeydown = function (event) {
      return _this.onKeyDown(event);
    };

    _this.window.onkeyup = function (event) {
      return _this.onKeyUp(event);
    };

    return _this;
  }

  _createClass(Player, [{
    key: "handleBorderCollision",
    value: function handleBorderCollision(canvas) {
      var playerCollisions = _get(_getPrototypeOf(Player.prototype), "detectBorderCollision", this).call(this, canvas);

      if (playerCollisions.includes('left')) {
        this.speedX = 0;
        this.x = 0;
      }

      if (playerCollisions.includes('right')) {
        this.speedX = 0;
        this.x = canvas.width - this.size;
      }

      if (playerCollisions.includes('top')) {
        this.speedY = 0;
        this.y = 0;
      }

      if (playerCollisions.includes('bottom')) {
        this.speedY = 0;
        this.y = canvas.height - this.size;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      ctx.fillStyle = 'black';

      _get(_getPrototypeOf(Player.prototype), "draw", this).call(this, ctx);

      ctx.strokeStyle = 'white';
      ctx.strokeRect(this.x, this.y, this.size, this.size);
      ctx.restore();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (this.inputStates[event.code] !== undefined) {
        this.inputStates[event.code] = true;
      }
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      if (this.inputStates[event.code] !== undefined) {
        this.inputStates[event.code] = false;
      }
    }
  }, {
    key: "setSpeed",
    value: function setSpeed() {
      this.speedX = this.speedY = 0;

      if (this.inputStates.ArrowLeft) {
        this.speedX = -0.125;
      }

      if (this.inputStates.ArrowUp) {
        this.speedY = -0.125;
      }

      if (this.inputStates.ArrowRight) {
        this.speedX = 0.125;
      }

      if (this.inputStates.ArrowDown) {
        this.speedY = 0.125;
      }

      if (this.inputStates.Space) {
        this.speedX *= 2;
        this.speedY *= 2;
      }
    }
  }]);

  return Player;
}(_Rect__WEBPACK_IMPORTED_MODULE_0__.Rect);

/***/ }),

/***/ "./src/js/classes/Rect.js":
/*!********************************!*\
  !*** ./src/js/classes/Rect.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rect": () => (/* binding */ Rect)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rect = /*#__PURE__*/function () {
  function Rect() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? 0 : _ref$size,
        _ref$speedX = _ref.speedX,
        speedX = _ref$speedX === void 0 ? 0 : _ref$speedX,
        _ref$speedY = _ref.speedY,
        speedY = _ref$speedY === void 0 ? 0 : _ref$speedY;

    _classCallCheck(this, Rect);

    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  _createClass(Rect, [{
    key: "move",
    value: function move(timeDelta) {
      this.x += this.speedX * timeDelta;
      this.y += this.speedY * timeDelta;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  }, {
    key: "detectBorderCollision",
    value: function detectBorderCollision(canvas) {
      var collision = [];

      if (this.x < 0) {
        collision.push('left');
      }

      if (this.x > canvas.width - this.size) {
        collision.push('right');
      }

      if (this.y < 0) {
        collision.push('top');
      }

      if (this.y > canvas.height - this.size) {
        collision.push('bottom');
      }

      return collision;
    }
  }, {
    key: "hasCollidedWithRect",
    value: function hasCollidedWithRect(rect) {
      var rectPoints = [{
        x: rect.x,
        y: rect.y
      }, {
        x: rect.x + rect.size,
        y: rect.y
      }, {
        x: rect.x,
        y: rect.y + rect.size
      }, {
        x: rect.x + rect.size,
        y: rect.y + rect.size
      }];
      this.points = [{
        x: this.x,
        y: this.y
      }, {
        x: this.x + this.size,
        y: this.y
      }, {
        x: this.x,
        y: this.y + this.size
      }, {
        x: this.x + this.size,
        y: this.y + this.size
      }];

      for (var _i = 0, _rectPoints = rectPoints; _i < _rectPoints.length; _i++) {
        var point = _rectPoints[_i];
        var betweenXPoints = point.x > this.x && point.x < this.x + this.size;
        var betweenYPoints = point.y > this.y && point.y < this.y + this.size;

        if (betweenXPoints && betweenYPoints) {
          return true;
        }
      }

      var _iterator = _createForOfIteratorHelper(this.points),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _point = _step.value;

          var _betweenXPoints = _point.x > rect.x && _point.x < rect.x + rect.size;

          var _betweenYPoints = _point.y > rect.y && _point.y < rect.y + rect.size;

          if (_betweenXPoints && _betweenYPoints) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }, {
    key: "reverseSpeed",
    value: function reverseSpeed(axis) {
      if (axis === 'x') {
        this.speedX *= -1;

        if (this.speedX === 0) {
          this.speedX = 0;
        }
      } else {
        this.speedY *= -1;

        if (this.speedY === 0) {
          this.speedY = 0;
        }
      }
    }
  }]);

  return Rect;
}();

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "difficulties": () => (/* binding */ difficulties)
/* harmony export */ });
var difficulties = {
  easy: {
    minSpeed: 0.05,
    maxSpeed: 0.3,
    numOfEnemies: 15
  },
  medium: {
    minSpeed: 0.1,
    maxSpeed: 0.35,
    numOfEnemies: 15
  },
  hard: {
    minSpeed: 0.15,
    maxSpeed: 0.4,
    numOfEnemies: 15
  },
  impossible: {
    minSpeed: 0.15,
    maxSpeed: 0.45,
    numOfEnemies: 30
  }
};

/***/ }),

/***/ "./src/js/functions/calcFps.js":
/*!*************************************!*\
  !*** ./src/js/functions/calcFps.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcFps": () => (/* binding */ calcFps)
/* harmony export */ });
var calcFps = function calcFps(delta, frameCount) {
  return 1000 * frameCount / delta;
};

/***/ }),

/***/ "./src/js/functions/createEnemies.js":
/*!*******************************************!*\
  !*** ./src/js/functions/createEnemies.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEnemies": () => (/* binding */ createEnemies)
/* harmony export */ });
/* harmony import */ var _classes_Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Enemy */ "./src/js/classes/Enemy.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");


function createEnemies(game) {
  var enemies = [];

  var getRandomNumber = function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  };

  var _difficulties$game$di = _constants__WEBPACK_IMPORTED_MODULE_1__.difficulties[game.difficulty],
      minSpeed = _difficulties$game$di.minSpeed,
      maxSpeed = _difficulties$game$di.maxSpeed,
      numOfEnemies = _difficulties$game$di.numOfEnemies;

  for (var i = 0; i < numOfEnemies; i++) {
    enemies.push(new _classes_Enemy__WEBPACK_IMPORTED_MODULE_0__.Enemy({
      rect: {
        x: getRandomNumber(game.canvas.width / 10, game.canvas.width - 50),
        y: getRandomNumber(0, game.canvas.height - 50),
        size: getRandomNumber(10, 50),
        speedX: getRandomNumber(minSpeed, maxSpeed) * (Math.random() > 0.5 ? 1 : -1),
        speedY: getRandomNumber(minSpeed, maxSpeed) * (Math.random() > 0.5 ? 1 : -1)
      }
    }));
  }

  return enemies;
}

/***/ }),

/***/ "./src/js/functions/drawFrame.js":
/*!***************************************!*\
  !*** ./src/js/functions/drawFrame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawFrame": () => (/* binding */ drawFrame)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var drawFrame = function drawFrame(game, ctx) {
  ctx.save();
  ctx.fillStyle = '#333333';
  ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
  ctx.fillStyle = 'white';
  ctx.font = '16px sans-serif';
  ctx.fillText('Time: ' + (game.times.game / 1000).toFixed(2) + ' s', game.canvas.width * 11 / 12, game.canvas.height / 20);
  ctx.restore();
  game.player.draw(ctx);

  var _iterator = _createForOfIteratorHelper(game.enemies),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var enemy = _step.value;
      enemy.draw(ctx);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/***/ }),

/***/ "./src/js/functions/handleFrames.js":
/*!******************************************!*\
  !*** ./src/js/functions/handleFrames.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleFrames": () => (/* binding */ handleFrames)
/* harmony export */ });
/* harmony import */ var _calcFps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcFps */ "./src/js/functions/calcFps.js");

var handleFrames = function handleFrames(game, delta) {
  game.frames.count++;
  game.frames.delta += delta;

  if (game.frames.delta > 500) {
    game.frames.fps = (0,_calcFps__WEBPACK_IMPORTED_MODULE_0__.calcFps)(game.frames.delta, game.frames.count);
    game.frames.count = 0;
    game.frames.delta = 0;
  }
};

/***/ }),

/***/ "./src/js/functions/handleTimes.js":
/*!*****************************************!*\
  !*** ./src/js/functions/handleTimes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleTimes": () => (/* binding */ handleTimes)
/* harmony export */ });
var handleTimes = function handleTimes(game, currentTime) {
  if (game.times.start === null) {
    game.times.start = currentTime;
  }

  if (game.times.last === null) {
    game.times.last = currentTime;
  }

  game.times.game = currentTime - game.times.start;
};

/***/ }),

/***/ "./src/js/functions/isGameOver.js":
/*!****************************************!*\
  !*** ./src/js/functions/isGameOver.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isGameOver": () => (/* binding */ isGameOver)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isGameOver = function isGameOver(game) {
  var _iterator = _createForOfIteratorHelper(game.enemies),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var enemy = _step.value;

      if (game.player.hasCollidedWithRect(enemy)) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
};

/***/ }),

/***/ "./src/js/functions/moveRects.js":
/*!***************************************!*\
  !*** ./src/js/functions/moveRects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveRects": () => (/* binding */ moveRects)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var moveRects = function moveRects(game, delta) {
  game.player.setSpeed();
  game.player.move(delta, game.canvas);

  var _iterator = _createForOfIteratorHelper(game.enemies),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var enemy = _step.value;
      enemy.move(delta, game.canvas);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  game.player.handleBorderCollision(game.canvas);

  var _iterator2 = _createForOfIteratorHelper(game.enemies),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _enemy = _step2.value;

      _enemy.handleBorderCollision(game.canvas);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

/***/ }),

/***/ "./src/js/functions/resetFrames.js":
/*!*****************************************!*\
  !*** ./src/js/functions/resetFrames.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetFrames": () => (/* binding */ resetFrames)
/* harmony export */ });
var resetFrames = function resetFrames() {
  var frames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  frames.count = 0;
  frames.delta = 0;
  frames.fps = 0;
  return frames;
};

/***/ }),

/***/ "./src/js/functions/resetGame.js":
/*!***************************************!*\
  !*** ./src/js/functions/resetGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetGame": () => (/* binding */ resetGame)
/* harmony export */ });
/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Player */ "./src/js/classes/Player.js");
/* harmony import */ var _createEnemies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEnemies */ "./src/js/functions/createEnemies.js");
/* harmony import */ var _resetTimes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetTimes */ "./src/js/functions/resetTimes.js");
/* harmony import */ var _resetFrames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetFrames */ "./src/js/functions/resetFrames.js");




var resetGame = function resetGame(game) {
  (0,_resetTimes__WEBPACK_IMPORTED_MODULE_2__.resetTimes)(game.times);
  (0,_resetFrames__WEBPACK_IMPORTED_MODULE_3__.resetFrames)(game.frames);
  game.player = new _classes_Player__WEBPACK_IMPORTED_MODULE_0__.Player({
    window: window,
    rect: {
      x: 10,
      y: 10,
      size: 20
    }
  });
  game.enemies = (0,_createEnemies__WEBPACK_IMPORTED_MODULE_1__.createEnemies)(game);
};

/***/ }),

/***/ "./src/js/functions/resetTimes.js":
/*!****************************************!*\
  !*** ./src/js/functions/resetTimes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetTimes": () => (/* binding */ resetTimes)
/* harmony export */ });
var resetTimes = function resetTimes() {
  var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  times.start = null;
  times.last = null;
  times.game = 0;
  return times;
};

/***/ }),

/***/ "./src/js/functions/saveScoreToDb.js":
/*!*******************************************!*\
  !*** ./src/js/functions/saveScoreToDb.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveScoreToDb": () => (/* binding */ saveScoreToDb)
/* harmony export */ });
var saveScoreToDb = function saveScoreToDb(name, score, difficulty) {
  fetch('/db/insert?' + new URLSearchParams({
    name: name,
    score: Number(score),
    difficulty: difficulty
  }), {
    method: 'POST'
  }).then(function () {
    return console.log('Inserted db entry!');
  })["catch"](function (err) {
    return console.error(err);
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\nmain {\n  display: inline-block;\n  height: 90vh;\n  width: 100vw;\n}\n\ncanvas, .menu {\n  border: 2px solid black;\n}\n\n.menu, form {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.menu {\n  height: 100%;\n  color: white;\n  background-color: #333333;\n}\n\nh1 {\n  font-family: Georgia, serif;\n}\n\np, label {\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  margin: 0.5rem;\n}\n\ninput[type=submit], button {\n  background-color: #e0454f;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 1rem;\n  padding: 0.5rem 1rem;\n  font-size: 1.5rem;\n}\ninput[type=submit]:hover, button:hover {\n  background-color: #e0459d;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss"],"names":[],"mappings":"AAAA;EACC,SAAA;AACD;;AAEA;EACC,qBAAA;EACA,YAAA;EACA,YAAA;AACD;;AAEA;EACC,uBAAA;AACD;;AAEA;EACC,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,uBAAA;AACD;;AAEA;EACC,YAAA;EACA,YAAA;EACA,yBAAA;AACD;;AAEA;EACC,2BAAA;AACD;;AAEA;EACC,8BAAA;EACA,eAAA;EACA,cAAA;AACD;;AAEA;EACC,yBAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,oBAAA;EACA,iBAAA;AACD;AACC;EACC,yBAAA;AACF","sourcesContent":["body {\n\tmargin: 0;\n}\n\nmain {\n\tdisplay: inline-block;\n\theight: 90vh;\n\twidth: 100vw;\n}\n\ncanvas, .menu {\n\tborder: 2px solid black;\n}\n\n.menu, form {\n\tdisplay: flex;\n\tflex-flow: column nowrap;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.menu {\n\theight: 100%;\n\tcolor: white;\n\tbackground-color: #333333;\n}\n\nh1 {\n\tfont-family: Georgia, serif;\n}\n\np, label {\n\tfont-family: Arial, sans-serif;\n\tfont-size: 1rem;\n\tmargin: 0.5rem;\n}\n\ninput[type=\"submit\"], button {\n\tbackground-color: #e0454f;\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n\tcursor: pointer;\n\tmargin: 1rem;\n\tpadding: 0.5rem 1rem;\n\tfont-size: 1.5rem;\n\n\t&:hover {\n\t\tbackground-color: #e0459d;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Player */ "./src/js/classes/Player.js");
/* harmony import */ var _functions_createEnemies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/createEnemies */ "./src/js/functions/createEnemies.js");
/* harmony import */ var _functions_drawFrame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/drawFrame */ "./src/js/functions/drawFrame.js");
/* harmony import */ var _functions_handleFrames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/handleFrames */ "./src/js/functions/handleFrames.js");
/* harmony import */ var _functions_isGameOver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/isGameOver */ "./src/js/functions/isGameOver.js");
/* harmony import */ var _functions_handleTimes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/handleTimes */ "./src/js/functions/handleTimes.js");
/* harmony import */ var _functions_saveScoreToDb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/saveScoreToDb */ "./src/js/functions/saveScoreToDb.js");
/* harmony import */ var _functions_moveRects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions/moveRects */ "./src/js/functions/moveRects.js");
/* harmony import */ var _functions_resetGame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions/resetGame */ "./src/js/functions/resetGame.js");
/* harmony import */ var _functions_resetTimes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions/resetTimes */ "./src/js/functions/resetTimes.js");
/* harmony import */ var _functions_resetFrames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functions/resetFrames */ "./src/js/functions/resetFrames.js");














var canvas = document.querySelector('canvas');
var root = document.querySelector('main');
var borderWidth = 2;
canvas.width = root.clientWidth - borderWidth * 2;
canvas.height = root.clientHeight;
var mainMenu = document.querySelector('#main-menu');
var gameOverMenu = document.querySelector('#game-over-menu');
var form = mainMenu.querySelector('form');
var nameInput = form.querySelector('#name');

if (localStorage.getItem('name')) {
  nameInput.value = localStorage.getItem('name');
}

form.onsubmit = function (event) {
  event.preventDefault();
  localStorage.setItem('name', nameInput.value);
  game.difficulty = form.querySelector('#difficulty').value;
  game.enemies = (0,_functions_createEnemies__WEBPACK_IMPORTED_MODULE_4__.createEnemies)(game);
  mainMenu.style.setProperty('display', 'none');
  canvas.style.setProperty('display', 'flex');
  game.id = window.requestAnimationFrame(game.mainLoop);
};

var game = {
  canvas: canvas,
  times: (0,_functions_resetTimes__WEBPACK_IMPORTED_MODULE_12__.resetTimes)(),
  frames: (0,_functions_resetFrames__WEBPACK_IMPORTED_MODULE_13__.resetFrames)(),
  player: new _classes_Player__WEBPACK_IMPORTED_MODULE_3__.Player({
    window: window,
    rect: {
      x: 10,
      y: 10,
      size: 20
    }
  }),
  mainLoop: function mainLoop(currentTime) {
    if ((0,_functions_isGameOver__WEBPACK_IMPORTED_MODULE_7__.isGameOver)(game)) {
      window.cancelAnimationFrame(game.id);
      return game.end();
    }

    (0,_functions_handleTimes__WEBPACK_IMPORTED_MODULE_8__.handleTimes)(game, currentTime);
    var delta = currentTime - game.times.last;
    (0,_functions_handleFrames__WEBPACK_IMPORTED_MODULE_6__.handleFrames)(game, delta);
    (0,_functions_moveRects__WEBPACK_IMPORTED_MODULE_10__.moveRects)(game, delta);
    var ctx = game.canvas.getContext('2d');
    ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    (0,_functions_drawFrame__WEBPACK_IMPORTED_MODULE_5__.drawFrame)(game, ctx);
    game.times.last = currentTime;
    game.id = window.requestAnimationFrame(game.mainLoop);
  },
  end: function end() {
    canvas.style.setProperty('display', 'none');
    var score = game.times.game;
    gameOverMenu.querySelector('#score').textContent = Math.round(score) / 1000;
    (0,_functions_saveScoreToDb__WEBPACK_IMPORTED_MODULE_9__.saveScoreToDb)(localStorage.name, score, game.difficulty);

    gameOverMenu.querySelector('button').onclick = function () {
      gameOverMenu.style.setProperty('display', 'none');
      canvas.style.setProperty('display', 'flex');
      (0,_functions_resetGame__WEBPACK_IMPORTED_MODULE_11__.resetGame)(game);
      game.id = window.requestAnimationFrame(game.mainLoop);
    };

    gameOverMenu.style.setProperty('display', 'flex');
  }
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFB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Li9zcmMvanMvY2xhc3Nlcy9FbmVteS5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvY2xhc3Nlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9mdW5jdGlvbnMvY2FsY0Zwcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL2NyZWF0ZUVuZW1pZXMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9kcmF3RnJhbWUuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9oYW5kbGVGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9oYW5kbGVUaW1lcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL2lzR2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9tb3ZlUmVjdHMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9yZXNldEZyYW1lcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL3Jlc2V0R2FtZS5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL3Jlc2V0VGltZXMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9zYXZlU2NvcmVUb0RiLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4vUmVjdCdcblxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgUmVjdCB7XG4gIGNvbnN0cnVjdG9yICh7IHJlY3QgfSkge1xuICAgIHN1cGVyKHJlY3QpXG4gIH1cblxuICBoYW5kbGVCb3JkZXJDb2xsaXNpb24gKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbGxpc2lvbnMgPSBzdXBlci5kZXRlY3RCb3JkZXJDb2xsaXNpb24oY2FudmFzKVxuXG4gICAgaWYgKGNvbGxpc2lvbnMuaW5jbHVkZXMoJ2xlZnQnKSkge1xuICAgICAgdGhpcy5yZXZlcnNlU3BlZWQoJ3gnKVxuICAgICAgdGhpcy54ID0gMFxuICAgIH1cblxuICAgIGlmIChjb2xsaXNpb25zLmluY2x1ZGVzKCdyaWdodCcpKSB7XG4gICAgICB0aGlzLnJldmVyc2VTcGVlZCgneCcpXG4gICAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLSB0aGlzLnNpemVcbiAgICB9XG5cbiAgICBpZiAoY29sbGlzaW9ucy5pbmNsdWRlcygndG9wJykpIHtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkKCd5JylcbiAgICAgIHRoaXMueSA9IDBcbiAgICB9XG5cbiAgICBpZiAoY29sbGlzaW9ucy5pbmNsdWRlcygnYm90dG9tJykpIHtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkKCd5JylcbiAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnNpemVcbiAgICB9XG4gIH1cblxuICBkcmF3IChjdHgpIHtcbiAgICBjdHguc2F2ZSgpXG5cbiAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCdcblxuICAgIHN1cGVyLmRyYXcoY3R4KVxuXG4gICAgY3R4LnJlc3RvcmUoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9SZWN0J1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVjdCB7XG4gIGNvbnN0cnVjdG9yICh7IHdpbmRvdywgcmVjdCB9KSB7XG4gICAgc3VwZXIocmVjdClcblxuICAgIHRoaXMud2luZG93ID0gd2luZG93XG5cbiAgICB0aGlzLmlucHV0U3RhdGVzID0ge1xuICAgICAgQXJyb3dVcDogZmFsc2UsXG4gICAgICBBcnJvd1JpZ2h0OiBmYWxzZSxcbiAgICAgIEFycm93RG93bjogZmFsc2UsXG4gICAgICBBcnJvd0xlZnQ6IGZhbHNlLFxuICAgICAgU3BhY2U6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cub25rZXlkb3duID0gKGV2ZW50KSA9PiB0aGlzLm9uS2V5RG93bihldmVudClcbiAgICB0aGlzLndpbmRvdy5vbmtleXVwID0gKGV2ZW50KSA9PiB0aGlzLm9uS2V5VXAoZXZlbnQpXG4gIH1cblxuICBoYW5kbGVCb3JkZXJDb2xsaXNpb24gKGNhbnZhcykge1xuICAgIGNvbnN0IHBsYXllckNvbGxpc2lvbnMgPSBzdXBlci5kZXRlY3RCb3JkZXJDb2xsaXNpb24oY2FudmFzKVxuXG4gICAgaWYgKHBsYXllckNvbGxpc2lvbnMuaW5jbHVkZXMoJ2xlZnQnKSkge1xuICAgICAgdGhpcy5zcGVlZFggPSAwXG4gICAgICB0aGlzLnggPSAwXG4gICAgfVxuXG4gICAgaWYgKHBsYXllckNvbGxpc2lvbnMuaW5jbHVkZXMoJ3JpZ2h0JykpIHtcbiAgICAgIHRoaXMuc3BlZWRYID0gMFxuICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC0gdGhpcy5zaXplXG4gICAgfVxuXG4gICAgaWYgKHBsYXllckNvbGxpc2lvbnMuaW5jbHVkZXMoJ3RvcCcpKSB7XG4gICAgICB0aGlzLnNwZWVkWSA9IDBcbiAgICAgIHRoaXMueSA9IDBcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQ29sbGlzaW9ucy5pbmNsdWRlcygnYm90dG9tJykpIHtcbiAgICAgIHRoaXMuc3BlZWRZID0gMFxuICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMuc2l6ZVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKGN0eCkge1xuICAgIGN0eC5zYXZlKClcblxuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snXG5cbiAgICBzdXBlci5kcmF3KGN0eClcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSdcblxuICAgIGN0eC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSlcblxuICAgIGN0eC5yZXN0b3JlKClcbiAgfVxuXG4gIG9uS2V5RG93biAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5pbnB1dFN0YXRlc1tldmVudC5jb2RlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlucHV0U3RhdGVzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAgKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaW5wdXRTdGF0ZXNbZXZlbnQuY29kZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnB1dFN0YXRlc1tldmVudC5jb2RlXSA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgc2V0U3BlZWQgKCkge1xuICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFkgPSAwXG5cbiAgICBpZiAodGhpcy5pbnB1dFN0YXRlcy5BcnJvd0xlZnQpIHtcbiAgICAgIHRoaXMuc3BlZWRYID0gLTAuMTI1XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0U3RhdGVzLkFycm93VXApIHtcbiAgICAgIHRoaXMuc3BlZWRZID0gLTAuMTI1XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0U3RhdGVzLkFycm93UmlnaHQpIHtcbiAgICAgIHRoaXMuc3BlZWRYID0gMC4xMjVcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXRTdGF0ZXMuQXJyb3dEb3duKSB7XG4gICAgICB0aGlzLnNwZWVkWSA9IDAuMTI1XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0U3RhdGVzLlNwYWNlKSB7XG4gICAgICB0aGlzLnNwZWVkWCAqPSAyXG4gICAgICB0aGlzLnNwZWVkWSAqPSAyXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUmVjdCB7XG4gIGNvbnN0cnVjdG9yICh7IHggPSAwLCB5ID0gMCwgc2l6ZSA9IDAsIHNwZWVkWCA9IDAsIHNwZWVkWSA9IDAgfSA9IHt9KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5zcGVlZFggPSBzcGVlZFhcbiAgICB0aGlzLnNwZWVkWSA9IHNwZWVkWVxuICB9XG5cbiAgbW92ZSAodGltZURlbHRhKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYICogdGltZURlbHRhXG4gICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZICogdGltZURlbHRhXG4gIH1cblxuICBkcmF3IChjdHgpIHtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKVxuICB9XG5cbiAgZGV0ZWN0Qm9yZGVyQ29sbGlzaW9uIChjYW52YXMpIHtcbiAgICBjb25zdCBjb2xsaXNpb24gPSBbXVxuXG4gICAgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgIGNvbGxpc2lvbi5wdXNoKCdsZWZ0JylcbiAgICB9XG5cbiAgICBpZiAodGhpcy54ID4gY2FudmFzLndpZHRoIC0gdGhpcy5zaXplKSB7XG4gICAgICBjb2xsaXNpb24ucHVzaCgncmlnaHQnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPCAwKSB7XG4gICAgICBjb2xsaXNpb24ucHVzaCgndG9wJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gY2FudmFzLmhlaWdodCAtIHRoaXMuc2l6ZSkge1xuICAgICAgY29sbGlzaW9uLnB1c2goJ2JvdHRvbScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxpc2lvblxuICB9XG5cbiAgaGFzQ29sbGlkZWRXaXRoUmVjdCAocmVjdCkge1xuICAgIGNvbnN0IHJlY3RQb2ludHMgPSBbXG4gICAgICB7IHg6IHJlY3QueCwgeTogcmVjdC55IH0sXG4gICAgICB7IHg6IHJlY3QueCArIHJlY3Quc2l6ZSwgeTogcmVjdC55IH0sXG4gICAgICB7IHg6IHJlY3QueCwgeTogcmVjdC55ICsgcmVjdC5zaXplIH0sXG4gICAgICB7IHg6IHJlY3QueCArIHJlY3Quc2l6ZSwgeTogcmVjdC55ICsgcmVjdC5zaXplIH1cbiAgICBdXG5cbiAgICB0aGlzLnBvaW50cyA9IFtcbiAgICAgIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSxcbiAgICAgIHsgeDogdGhpcy54ICsgdGhpcy5zaXplLCB5OiB0aGlzLnkgfSxcbiAgICAgIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgKyB0aGlzLnNpemUgfSxcbiAgICAgIHsgeDogdGhpcy54ICsgdGhpcy5zaXplLCB5OiB0aGlzLnkgKyB0aGlzLnNpemUgfVxuICAgIF1cblxuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgcmVjdFBvaW50cykge1xuICAgICAgY29uc3QgYmV0d2VlblhQb2ludHMgPSBwb2ludC54ID4gdGhpcy54ICYmIHBvaW50LnggPCB0aGlzLnggKyB0aGlzLnNpemVcblxuICAgICAgY29uc3QgYmV0d2VlbllQb2ludHMgPSBwb2ludC55ID4gdGhpcy55ICYmIHBvaW50LnkgPCB0aGlzLnkgKyB0aGlzLnNpemVcblxuICAgICAgaWYgKGJldHdlZW5YUG9pbnRzICYmIGJldHdlZW5ZUG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgY29uc3QgYmV0d2VlblhQb2ludHMgPSBwb2ludC54ID4gcmVjdC54ICYmIHBvaW50LnggPCByZWN0LnggKyByZWN0LnNpemVcblxuICAgICAgY29uc3QgYmV0d2VlbllQb2ludHMgPSBwb2ludC55ID4gcmVjdC55ICYmIHBvaW50LnkgPCByZWN0LnkgKyByZWN0LnNpemVcblxuICAgICAgaWYgKGJldHdlZW5YUG9pbnRzICYmIGJldHdlZW5ZUG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXZlcnNlU3BlZWQgKGF4aXMpIHtcbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICB0aGlzLnNwZWVkWCAqPSAtMVxuICAgICAgaWYgKHRoaXMuc3BlZWRYID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwZWVkWSAqPSAtMVxuICAgICAgaWYgKHRoaXMuc3BlZWRZID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGRpZmZpY3VsdGllcyA9IHtcbiAgZWFzeToge1xuICAgIG1pblNwZWVkOiAwLjA1LFxuICAgIG1heFNwZWVkOiAwLjMsXG4gICAgbnVtT2ZFbmVtaWVzOiAxNVxuICB9LFxuICBtZWRpdW06IHtcbiAgICBtaW5TcGVlZDogMC4xLFxuICAgIG1heFNwZWVkOiAwLjM1LFxuICAgIG51bU9mRW5lbWllczogMTVcbiAgfSxcbiAgaGFyZDoge1xuICAgIG1pblNwZWVkOiAwLjE1LFxuICAgIG1heFNwZWVkOiAwLjQsXG4gICAgbnVtT2ZFbmVtaWVzOiAxNVxuICB9LFxuICBpbXBvc3NpYmxlOiB7XG4gICAgbWluU3BlZWQ6IDAuMTUsXG4gICAgbWF4U3BlZWQ6IDAuNDUsXG4gICAgbnVtT2ZFbmVtaWVzOiAzMFxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY2FsY0ZwcyA9IChkZWx0YSwgZnJhbWVDb3VudCkgPT4ge1xuICByZXR1cm4gMTAwMCAqIGZyYW1lQ291bnQgLyBkZWx0YVxufVxuIiwiaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuLi9jbGFzc2VzL0VuZW15J1xuaW1wb3J0IHsgZGlmZmljdWx0aWVzIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW5lbWllcyAoZ2FtZSkge1xuICBjb25zdCBlbmVtaWVzID0gW11cblxuICBjb25zdCBnZXRSYW5kb21OdW1iZXIgPSAobWluLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXG4gIH1cblxuICBjb25zdCB7IG1pblNwZWVkLCBtYXhTcGVlZCwgbnVtT2ZFbmVtaWVzIH0gPSBkaWZmaWN1bHRpZXNbZ2FtZS5kaWZmaWN1bHR5XVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZFbmVtaWVzOyBpKyspIHtcbiAgICBlbmVtaWVzLnB1c2goXG4gICAgICBuZXcgRW5lbXkoe1xuICAgICAgICByZWN0OiB7XG4gICAgICAgICAgeDogZ2V0UmFuZG9tTnVtYmVyKGdhbWUuY2FudmFzLndpZHRoIC8gMTAsIGdhbWUuY2FudmFzLndpZHRoIC0gNTApLFxuICAgICAgICAgIHk6IGdldFJhbmRvbU51bWJlcigwLCBnYW1lLmNhbnZhcy5oZWlnaHQgLSA1MCksXG4gICAgICAgICAgc2l6ZTogZ2V0UmFuZG9tTnVtYmVyKDEwLCA1MCksXG4gICAgICAgICAgc3BlZWRYOiBnZXRSYW5kb21OdW1iZXIobWluU3BlZWQsIG1heFNwZWVkKSAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICBzcGVlZFk6IGdldFJhbmRvbU51bWJlcihtaW5TcGVlZCwgbWF4U3BlZWQpICogKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGVuZW1pZXNcbn1cbiIsImV4cG9ydCBjb25zdCBkcmF3RnJhbWUgPSAoZ2FtZSwgY3R4KSA9PiB7XG4gIGN0eC5zYXZlKClcbiAgY3R4LmZpbGxTdHlsZSA9ICcjMzMzMzMzJ1xuXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBnYW1lLmNhbnZhcy53aWR0aCwgZ2FtZS5jYW52YXMuaGVpZ2h0KVxuXG4gIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnXG5cbiAgY3R4LmZvbnQgPSAnMTZweCBzYW5zLXNlcmlmJ1xuXG4gIGN0eC5maWxsVGV4dCgnVGltZTogJyArXG4gICAgKGdhbWUudGltZXMuZ2FtZSAvIDEwMDApLnRvRml4ZWQoMikgK1xuICAgICcgcycsIGdhbWUuY2FudmFzLndpZHRoICogMTEgLyAxMiwgZ2FtZS5jYW52YXMuaGVpZ2h0IC8gMjApXG5cbiAgY3R4LnJlc3RvcmUoKVxuXG4gIGdhbWUucGxheWVyLmRyYXcoY3R4KVxuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZ2FtZS5lbmVtaWVzKSB7XG4gICAgZW5lbXkuZHJhdyhjdHgpXG4gIH1cbn1cbiIsImltcG9ydCB7IGNhbGNGcHMgfSBmcm9tICcuL2NhbGNGcHMnXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVGcmFtZXMgPSAoZ2FtZSwgZGVsdGEpID0+IHtcbiAgZ2FtZS5mcmFtZXMuY291bnQrK1xuICBnYW1lLmZyYW1lcy5kZWx0YSArPSBkZWx0YVxuXG4gIGlmIChnYW1lLmZyYW1lcy5kZWx0YSA+IDUwMCkge1xuICAgIGdhbWUuZnJhbWVzLmZwcyA9IGNhbGNGcHMoZ2FtZS5mcmFtZXMuZGVsdGEsIGdhbWUuZnJhbWVzLmNvdW50KVxuICAgIGdhbWUuZnJhbWVzLmNvdW50ID0gMFxuICAgIGdhbWUuZnJhbWVzLmRlbHRhID0gMFxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgaGFuZGxlVGltZXMgPSAoZ2FtZSwgY3VycmVudFRpbWUpID0+IHtcbiAgaWYgKGdhbWUudGltZXMuc3RhcnQgPT09IG51bGwpIHtcbiAgICBnYW1lLnRpbWVzLnN0YXJ0ID0gY3VycmVudFRpbWVcbiAgfVxuXG4gIGlmIChnYW1lLnRpbWVzLmxhc3QgPT09IG51bGwpIHtcbiAgICBnYW1lLnRpbWVzLmxhc3QgPSBjdXJyZW50VGltZVxuICB9XG5cbiAgZ2FtZS50aW1lcy5nYW1lID0gY3VycmVudFRpbWUgLSBnYW1lLnRpbWVzLnN0YXJ0XG59XG4iLCJleHBvcnQgY29uc3QgaXNHYW1lT3ZlciA9IChnYW1lKSA9PiB7XG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZ2FtZS5lbmVtaWVzKSB7XG4gICAgaWYgKGdhbWUucGxheWVyLmhhc0NvbGxpZGVkV2l0aFJlY3QoZW5lbXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cbiIsImV4cG9ydCBjb25zdCBtb3ZlUmVjdHMgPSAoZ2FtZSwgZGVsdGEpID0+IHtcbiAgZ2FtZS5wbGF5ZXIuc2V0U3BlZWQoKVxuXG4gIGdhbWUucGxheWVyLm1vdmUoZGVsdGEsIGdhbWUuY2FudmFzKVxuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZ2FtZS5lbmVtaWVzKSB7XG4gICAgZW5lbXkubW92ZShkZWx0YSwgZ2FtZS5jYW52YXMpXG4gIH1cblxuICBnYW1lLnBsYXllci5oYW5kbGVCb3JkZXJDb2xsaXNpb24oZ2FtZS5jYW52YXMpXG5cbiAgZm9yIChjb25zdCBlbmVteSBvZiBnYW1lLmVuZW1pZXMpIHtcbiAgICBlbmVteS5oYW5kbGVCb3JkZXJDb2xsaXNpb24oZ2FtZS5jYW52YXMpXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCByZXNldEZyYW1lcyA9IChmcmFtZXMgPSB7fSkgPT4ge1xuICBmcmFtZXMuY291bnQgPSAwXG4gIGZyYW1lcy5kZWx0YSA9IDBcbiAgZnJhbWVzLmZwcyA9IDBcblxuICByZXR1cm4gZnJhbWVzXG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9jbGFzc2VzL1BsYXllcidcbmltcG9ydCB7IGNyZWF0ZUVuZW1pZXMgfSBmcm9tICcuL2NyZWF0ZUVuZW1pZXMnXG5pbXBvcnQgeyByZXNldFRpbWVzIH0gZnJvbSAnLi9yZXNldFRpbWVzJ1xuaW1wb3J0IHsgcmVzZXRGcmFtZXMgfSBmcm9tICcuL3Jlc2V0RnJhbWVzJ1xuXG5leHBvcnQgY29uc3QgcmVzZXRHYW1lID0gKGdhbWUpID0+IHtcbiAgcmVzZXRUaW1lcyhnYW1lLnRpbWVzKVxuICByZXNldEZyYW1lcyhnYW1lLmZyYW1lcylcblxuICBnYW1lLnBsYXllciA9IG5ldyBQbGF5ZXIoeyB3aW5kb3c6IHdpbmRvdywgcmVjdDogeyB4OiAxMCwgeTogMTAsIHNpemU6IDIwIH0gfSlcblxuICBnYW1lLmVuZW1pZXMgPSBjcmVhdGVFbmVtaWVzKGdhbWUpXG59XG4iLCJleHBvcnQgY29uc3QgcmVzZXRUaW1lcyA9ICh0aW1lcyA9IHt9KSA9PiB7XG4gIHRpbWVzLnN0YXJ0ID0gbnVsbFxuICB0aW1lcy5sYXN0ID0gbnVsbFxuICB0aW1lcy5nYW1lID0gMFxuXG4gIHJldHVybiB0aW1lc1xufVxuIiwiZXhwb3J0IGNvbnN0IHNhdmVTY29yZVRvRGIgPSAobmFtZSwgc2NvcmUsIGRpZmZpY3VsdHkpID0+IHtcbiAgZmV0Y2goJy9kYi9pbnNlcnQ/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIG5hbWUsXG4gICAgc2NvcmU6IE51bWJlcihzY29yZSksXG4gICAgZGlmZmljdWx0eVxuICB9KSwge1xuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0luc2VydGVkIGRiIGVudHJ5IScpKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmNhbnZhcywgLm1lbnUge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tZW51LCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG59XFxuXFxucCwgbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSwgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQ1NGY7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQ1OWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDQyxTQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyx1QkFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNEOztBQUVBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNEOztBQUVBO0VBQ0MsMkJBQUE7QUFDRDs7QUFFQTtFQUNDLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNEO0FBQ0M7RUFDQyx5QkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxubWFpbiB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGhlaWdodDogOTB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxufVxcblxcbmNhbnZhcywgLm1lbnUge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubWVudSwgZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG59XFxuXFxucCwgbGFiZWwge1xcblxcdGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLCBidXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlMDQ1NGY7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRtYXJnaW46IDFyZW07XFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW07XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2UwNDU5ZDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSdcbmltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQge2RpZmZpY3VsdGllc30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL2NsYXNzZXMvUGxheWVyJ1xuaW1wb3J0IHsgY3JlYXRlRW5lbWllcyB9IGZyb20gJy4vZnVuY3Rpb25zL2NyZWF0ZUVuZW1pZXMnXG5pbXBvcnQgeyBkcmF3RnJhbWUgfSBmcm9tICcuL2Z1bmN0aW9ucy9kcmF3RnJhbWUnXG5pbXBvcnQgeyBoYW5kbGVGcmFtZXMgfSBmcm9tICcuL2Z1bmN0aW9ucy9oYW5kbGVGcmFtZXMnXG5pbXBvcnQgeyBpc0dhbWVPdmVyIH0gZnJvbSAnLi9mdW5jdGlvbnMvaXNHYW1lT3ZlcidcbmltcG9ydCB7IGhhbmRsZVRpbWVzIH0gZnJvbSAnLi9mdW5jdGlvbnMvaGFuZGxlVGltZXMnXG5pbXBvcnQgeyBzYXZlU2NvcmVUb0RiIH0gZnJvbSAnLi9mdW5jdGlvbnMvc2F2ZVNjb3JlVG9EYidcbmltcG9ydCB7IG1vdmVSZWN0cyB9IGZyb20gJy4vZnVuY3Rpb25zL21vdmVSZWN0cydcbmltcG9ydCB7IHJlc2V0R2FtZSB9IGZyb20gJy4vZnVuY3Rpb25zL3Jlc2V0R2FtZSdcbmltcG9ydCB7IHJlc2V0VGltZXMgfSBmcm9tICcuL2Z1bmN0aW9ucy9yZXNldFRpbWVzJ1xuaW1wb3J0IHsgcmVzZXRGcmFtZXMgfSBmcm9tICcuL2Z1bmN0aW9ucy9yZXNldEZyYW1lcydcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJylcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuXG5jb25zdCBib3JkZXJXaWR0aCA9IDJcblxuY2FudmFzLndpZHRoID0gcm9vdC5jbGllbnRXaWR0aCAtIGJvcmRlcldpZHRoICogMlxuY2FudmFzLmhlaWdodCA9IHJvb3QuY2xpZW50SGVpZ2h0XG5cbmNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tbWVudScpXG5jb25zdCBnYW1lT3Zlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1vdmVyLW1lbnUnKVxuXG5jb25zdCBmb3JtID0gbWFpbk1lbnUucXVlcnlTZWxlY3RvcignZm9ybScpXG5cbmNvbnN0IG5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI25hbWUnKVxuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKSkge1xuICBuYW1lSW5wdXQudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpXG59XG5cbmZvcm0ub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgbmFtZUlucHV0LnZhbHVlKVxuICBnYW1lLmRpZmZpY3VsdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkaWZmaWN1bHR5JykudmFsdWVcblxuICBnYW1lLmVuZW1pZXMgPSBjcmVhdGVFbmVtaWVzKGdhbWUpXG5cbiAgbWFpbk1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpXG4gIGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdmbGV4JylcbiAgZ2FtZS5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5tYWluTG9vcClcbn1cblxuY29uc3QgZ2FtZSA9IHtcbiAgY2FudmFzLFxuICB0aW1lczogcmVzZXRUaW1lcygpLFxuICBmcmFtZXM6IHJlc2V0RnJhbWVzKCksXG4gIHBsYXllcjogbmV3IFBsYXllcih7IHdpbmRvdzogd2luZG93LCByZWN0OiB7IHg6IDEwLCB5OiAxMCwgc2l6ZTogMjAgfSB9KSxcbiAgbWFpbkxvb3A6IChjdXJyZW50VGltZSkgPT4ge1xuICAgIGlmIChpc0dhbWVPdmVyKGdhbWUpKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2FtZS5pZClcbiAgICAgIHJldHVybiBnYW1lLmVuZCgpXG4gICAgfVxuXG4gICAgaGFuZGxlVGltZXMoZ2FtZSwgY3VycmVudFRpbWUpXG5cbiAgICBjb25zdCBkZWx0YSA9IGN1cnJlbnRUaW1lIC0gZ2FtZS50aW1lcy5sYXN0XG5cbiAgICBoYW5kbGVGcmFtZXMoZ2FtZSwgZGVsdGEpXG5cbiAgICBtb3ZlUmVjdHMoZ2FtZSwgZGVsdGEpXG5cbiAgICBjb25zdCBjdHggPSBnYW1lLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGdhbWUuY2FudmFzLndpZHRoLCBnYW1lLmNhbnZhcy5oZWlnaHQpXG5cbiAgICBkcmF3RnJhbWUoZ2FtZSwgY3R4KVxuXG4gICAgZ2FtZS50aW1lcy5sYXN0ID0gY3VycmVudFRpbWVcblxuICAgIGdhbWUuaWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWUubWFpbkxvb3ApXG4gIH0sXG4gIGVuZDogKCkgPT4ge1xuICAgIGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJylcblxuICAgIGNvbnN0IHNjb3JlID0gZ2FtZS50aW1lcy5nYW1lXG5cbiAgICBnYW1lT3Zlck1lbnUucXVlcnlTZWxlY3RvcignI3Njb3JlJykudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHNjb3JlKSAvIDEwMDBcblxuICAgIHNhdmVTY29yZVRvRGIobG9jYWxTdG9yYWdlLm5hbWUsIHNjb3JlLCBnYW1lLmRpZmZpY3VsdHkpXG5cbiAgICBnYW1lT3Zlck1lbnUucXVlcnlTZWxlY3RvcignYnV0dG9uJykub25jbGljayA9ICgpID0+IHtcbiAgICAgIGdhbWVPdmVyTWVudS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJylcbiAgICAgIGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdmbGV4JylcblxuICAgICAgcmVzZXRHYW1lKGdhbWUpXG4gICAgICBnYW1lLmlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lLm1haW5Mb29wKVxuICAgIH1cblxuICAgIGdhbWVPdmVyTWVudS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdmbGV4JylcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlY3QiLCJFbmVteSIsInJlY3QiLCJjYW52YXMiLCJjb2xsaXNpb25zIiwiaW5jbHVkZXMiLCJyZXZlcnNlU3BlZWQiLCJ4Iiwid2lkdGgiLCJzaXplIiwieSIsImhlaWdodCIsImN0eCIsInNhdmUiLCJmaWxsU3R5bGUiLCJyZXN0b3JlIiwiUGxheWVyIiwid2luZG93IiwiaW5wdXRTdGF0ZXMiLCJBcnJvd1VwIiwiQXJyb3dSaWdodCIsIkFycm93RG93biIsIkFycm93TGVmdCIsIlNwYWNlIiwib25rZXlkb3duIiwiZXZlbnQiLCJvbktleURvd24iLCJvbmtleXVwIiwib25LZXlVcCIsInBsYXllckNvbGxpc2lvbnMiLCJzcGVlZFgiLCJzcGVlZFkiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJjb2RlIiwidW5kZWZpbmVkIiwidGltZURlbHRhIiwiZmlsbFJlY3QiLCJjb2xsaXNpb24iLCJwdXNoIiwicmVjdFBvaW50cyIsInBvaW50cyIsInBvaW50IiwiYmV0d2VlblhQb2ludHMiLCJiZXR3ZWVuWVBvaW50cyIsImF4aXMiLCJkaWZmaWN1bHRpZXMiLCJlYXN5IiwibWluU3BlZWQiLCJtYXhTcGVlZCIsIm51bU9mRW5lbWllcyIsIm1lZGl1bSIsImhhcmQiLCJpbXBvc3NpYmxlIiwiY2FsY0ZwcyIsImRlbHRhIiwiZnJhbWVDb3VudCIsImNyZWF0ZUVuZW1pZXMiLCJnYW1lIiwiZW5lbWllcyIsImdldFJhbmRvbU51bWJlciIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJkaWZmaWN1bHR5IiwiaSIsImRyYXdGcmFtZSIsImZvbnQiLCJmaWxsVGV4dCIsInRpbWVzIiwidG9GaXhlZCIsInBsYXllciIsImRyYXciLCJlbmVteSIsImhhbmRsZUZyYW1lcyIsImZyYW1lcyIsImNvdW50IiwiZnBzIiwiaGFuZGxlVGltZXMiLCJjdXJyZW50VGltZSIsInN0YXJ0IiwibGFzdCIsImlzR2FtZU92ZXIiLCJoYXNDb2xsaWRlZFdpdGhSZWN0IiwibW92ZVJlY3RzIiwic2V0U3BlZWQiLCJtb3ZlIiwiaGFuZGxlQm9yZGVyQ29sbGlzaW9uIiwicmVzZXRGcmFtZXMiLCJyZXNldFRpbWVzIiwicmVzZXRHYW1lIiwic2F2ZVNjb3JlVG9EYiIsIm5hbWUiLCJzY29yZSIsImZldGNoIiwiVVJMU2VhcmNoUGFyYW1zIiwiTnVtYmVyIiwibWV0aG9kIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJvb3QiLCJib3JkZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwibWFpbk1lbnUiLCJnYW1lT3Zlck1lbnUiLCJmb3JtIiwibmFtZUlucHV0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInZhbHVlIiwib25zdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJzdHlsZSIsInNldFByb3BlcnR5IiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtYWluTG9vcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZW5kIiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsInRleHRDb250ZW50Iiwicm91bmQiLCJvbmNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==