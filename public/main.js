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
        this.speedX = -1;
      }

      if (this.inputStates.ArrowUp) {
        this.speedY = -1;
      }

      if (this.inputStates.ArrowRight) {
        this.speedX = 1;
      }

      if (this.inputStates.ArrowDown) {
        this.speedY = 1;
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
      this.x += this.speedX / (10 / timeDelta);
      this.y += this.speedY / (10 / timeDelta);
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
  'easy': {
    minSpeed: 1,
    maxSpeed: 3
  },
  'medium': {
    minSpeed: 2,
    maxSpeed: 4
  },
  'hard': {
    minSpeed: 3,
    maxSpeed: 5
  },
  'impossible': {
    minSpeed: 8,
    maxSpeed: 10
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

  console.log(game.difficulty);
  var _difficulties$game$di = _constants__WEBPACK_IMPORTED_MODULE_1__.difficulties[game.difficulty],
      minSpeed = _difficulties$game$di.minSpeed,
      maxSpeed = _difficulties$game$di.maxSpeed;

  for (var i = 0; i < 10; i++) {
    enemies.push(new _classes_Enemy__WEBPACK_IMPORTED_MODULE_0__.Enemy({
      rect: {
        x: getRandomNumber(game.canvas.width / 2, game.canvas.width - 50),
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
var resetFrames = function resetFrames(frames) {
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
var resetTimes = function resetTimes(times) {
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
var saveScoreToDb = function saveScoreToDb(score) {
  fetch('/db/insert?' + new URLSearchParams({
    name: localStorage.name,
    score: score
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
/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Player */ "./src/js/classes/Player.js");
/* harmony import */ var _functions_createEnemies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/createEnemies */ "./src/js/functions/createEnemies.js");
/* harmony import */ var _functions_drawFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/drawFrame */ "./src/js/functions/drawFrame.js");
/* harmony import */ var _functions_handleFrames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/handleFrames */ "./src/js/functions/handleFrames.js");
/* harmony import */ var _functions_isGameOver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/isGameOver */ "./src/js/functions/isGameOver.js");
/* harmony import */ var _functions_handleTimes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/handleTimes */ "./src/js/functions/handleTimes.js");
/* harmony import */ var _functions_saveScoreToDb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/saveScoreToDb */ "./src/js/functions/saveScoreToDb.js");
/* harmony import */ var _functions_moveRects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/moveRects */ "./src/js/functions/moveRects.js");
/* harmony import */ var _functions_resetGame__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions/resetGame */ "./src/js/functions/resetGame.js");
/* harmony import */ var _functions_resetTimes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions/resetTimes */ "./src/js/functions/resetTimes.js");
/* harmony import */ var _functions_resetFrames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions/resetFrames */ "./src/js/functions/resetFrames.js");













var canvas = document.querySelector('canvas');
var root = document.querySelector('main');
var borderWidth = 2;
canvas.width = root.clientWidth - borderWidth * 2;
canvas.height = root.clientHeight;
var mainMenu = document.querySelector('#main-menu');
var gameOverMenu = document.querySelector('#game-over-menu');
var form = mainMenu.querySelector('form');

form.onsubmit = function (event) {
  event.preventDefault();
  localStorage.setItem('name', form.querySelector('#name'));
  game.difficulty = form.querySelector('#difficulty').value;
  game.enemies = (0,_functions_createEnemies__WEBPACK_IMPORTED_MODULE_3__.createEnemies)(game);
  mainMenu.style.setProperty('display', 'none');
  canvas.style.setProperty('display', 'flex');
  game.id = window.requestAnimationFrame(game.mainLoop);
};

var game = {
  canvas: canvas,
  times: (0,_functions_resetTimes__WEBPACK_IMPORTED_MODULE_11__.resetTimes)({}),
  frames: (0,_functions_resetFrames__WEBPACK_IMPORTED_MODULE_12__.resetFrames)({}),
  player: new _classes_Player__WEBPACK_IMPORTED_MODULE_2__.Player({
    window: window,
    rect: {
      x: 10,
      y: 10,
      size: 20
    }
  }),
  mainLoop: function mainLoop(currentTime) {
    if ((0,_functions_isGameOver__WEBPACK_IMPORTED_MODULE_6__.isGameOver)(game)) {
      window.cancelAnimationFrame(game.id);
      return game.end();
    }

    (0,_functions_handleTimes__WEBPACK_IMPORTED_MODULE_7__.handleTimes)(game, currentTime);
    var delta = currentTime - game.times.last;
    (0,_functions_handleFrames__WEBPACK_IMPORTED_MODULE_5__.handleFrames)(game, delta);
    (0,_functions_moveRects__WEBPACK_IMPORTED_MODULE_9__.moveRects)(game, delta);
    var ctx = game.canvas.getContext('2d');
    ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    (0,_functions_drawFrame__WEBPACK_IMPORTED_MODULE_4__.drawFrame)(game, ctx);
    game.times.last = currentTime;
    game.id = window.requestAnimationFrame(game.mainLoop);
  },
  end: function end() {
    canvas.style.setProperty('display', 'none');
    var score = game.times.game;
    gameOverMenu.querySelector('#score').textContent = Math.round(score) / 1000;
    (0,_functions_saveScoreToDb__WEBPACK_IMPORTED_MODULE_8__.saveScoreToDb)(score);

    gameOverMenu.querySelector('button').onclick = function () {
      gameOverMenu.style.setProperty('display', 'none');
      canvas.style.setProperty('display', 'flex');
      (0,_functions_resetGame__WEBPACK_IMPORTED_MODULE_10__.resetGame)(game);
      game.id = window.requestAnimationFrame(game.mainLoop);
    };

    gameOverMenu.style.setProperty('display', 'flex');
  }
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztB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QUFsQyxDQUFWO0FBQ0QsS0FORDs7QUFRQVYsSUFBQUEsWUFBWSxDQUFDTSxLQUFiLENBQW1CQyxXQUFuQixDQUErQixTQUEvQixFQUEwQyxNQUExQztBQUNEO0FBL0NVLENBQWIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9jbGFzc2VzL0VuZW15LmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9jbGFzc2VzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9jYWxjRnBzLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9mdW5jdGlvbnMvY3JlYXRlRW5lbWllcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL2RyYXdGcmFtZS5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL2hhbmRsZUZyYW1lcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL2hhbmRsZVRpbWVzLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9mdW5jdGlvbnMvaXNHYW1lT3Zlci5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL21vdmVSZWN0cy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL3Jlc2V0RnJhbWVzLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9mdW5jdGlvbnMvcmVzZXRHYW1lLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9mdW5jdGlvbnMvcmVzZXRUaW1lcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL3NhdmVTY29yZVRvRGIuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N1YmUtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2N1YmUtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2N1YmUtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9SZWN0J1xuXG5leHBvcnQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBSZWN0IHtcbiAgY29uc3RydWN0b3IgKHsgcmVjdCB9KSB7XG4gICAgc3VwZXIocmVjdClcbiAgfVxuXG4gIGhhbmRsZUJvcmRlckNvbGxpc2lvbiAoY2FudmFzKSB7XG4gICAgY29uc3QgY29sbGlzaW9ucyA9IHN1cGVyLmRldGVjdEJvcmRlckNvbGxpc2lvbihjYW52YXMpXG5cbiAgICBpZiAoY29sbGlzaW9ucy5pbmNsdWRlcygnbGVmdCcpKSB7XG4gICAgICB0aGlzLnJldmVyc2VTcGVlZCgneCcpXG4gICAgICB0aGlzLnggPSAwXG4gICAgfVxuXG4gICAgaWYgKGNvbGxpc2lvbnMuaW5jbHVkZXMoJ3JpZ2h0JykpIHtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkKCd4JylcbiAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAtIHRoaXMuc2l6ZVxuICAgIH1cblxuICAgIGlmIChjb2xsaXNpb25zLmluY2x1ZGVzKCd0b3AnKSkge1xuICAgICAgdGhpcy5yZXZlcnNlU3BlZWQoJ3knKVxuICAgICAgdGhpcy55ID0gMFxuICAgIH1cblxuICAgIGlmIChjb2xsaXNpb25zLmluY2x1ZGVzKCdib3R0b20nKSkge1xuICAgICAgdGhpcy5yZXZlcnNlU3BlZWQoJ3knKVxuICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMuc2l6ZVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKGN0eCkge1xuICAgIGN0eC5zYXZlKClcblxuICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJ1xuXG4gICAgc3VwZXIuZHJhdyhjdHgpXG5cbiAgICBjdHgucmVzdG9yZSgpXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlY3QgfSBmcm9tICcuL1JlY3QnXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWN0IHtcbiAgY29uc3RydWN0b3IgKHsgd2luZG93LCByZWN0IH0pIHtcbiAgICBzdXBlcihyZWN0KVxuXG4gICAgdGhpcy53aW5kb3cgPSB3aW5kb3dcblxuICAgIHRoaXMuaW5wdXRTdGF0ZXMgPSB7XG4gICAgICBBcnJvd1VwOiBmYWxzZSxcbiAgICAgIEFycm93UmlnaHQ6IGZhbHNlLFxuICAgICAgQXJyb3dEb3duOiBmYWxzZSxcbiAgICAgIEFycm93TGVmdDogZmFsc2UsXG4gICAgICBTcGFjZTogZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5vbmtleWRvd24gPSAoZXZlbnQpID0+IHRoaXMub25LZXlEb3duKGV2ZW50KVxuICAgIHRoaXMud2luZG93Lm9ua2V5dXAgPSAoZXZlbnQpID0+IHRoaXMub25LZXlVcChldmVudClcbiAgfVxuXG4gIGhhbmRsZUJvcmRlckNvbGxpc2lvbiAoY2FudmFzKSB7XG4gICAgY29uc3QgcGxheWVyQ29sbGlzaW9ucyA9IHN1cGVyLmRldGVjdEJvcmRlckNvbGxpc2lvbihjYW52YXMpXG5cbiAgICBpZiAocGxheWVyQ29sbGlzaW9ucy5pbmNsdWRlcygnbGVmdCcpKSB7XG4gICAgICB0aGlzLnNwZWVkWCA9IDBcbiAgICAgIHRoaXMueCA9IDBcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQ29sbGlzaW9ucy5pbmNsdWRlcygncmlnaHQnKSkge1xuICAgICAgdGhpcy5zcGVlZFggPSAwXG4gICAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLSB0aGlzLnNpemVcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQ29sbGlzaW9ucy5pbmNsdWRlcygndG9wJykpIHtcbiAgICAgIHRoaXMuc3BlZWRZID0gMFxuICAgICAgdGhpcy55ID0gMFxuICAgIH1cblxuICAgIGlmIChwbGF5ZXJDb2xsaXNpb25zLmluY2x1ZGVzKCdib3R0b20nKSkge1xuICAgICAgdGhpcy5zcGVlZFkgPSAwXG4gICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC0gdGhpcy5zaXplXG4gICAgfVxuICB9XG5cbiAgZHJhdyAoY3R4KSB7XG4gICAgY3R4LnNhdmUoKVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjaydcblxuICAgIHN1cGVyLmRyYXcoY3R4KVxuXG4gICAgY3R4LnJlc3RvcmUoKVxuICB9XG5cbiAgb25LZXlEb3duIChldmVudCkge1xuICAgIGlmICh0aGlzLmlucHV0U3RhdGVzW2V2ZW50LmNvZGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5wdXRTdGF0ZXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgb25LZXlVcCAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5pbnB1dFN0YXRlc1tldmVudC5jb2RlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlucHV0U3RhdGVzW2V2ZW50LmNvZGVdID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBzZXRTcGVlZCAoKSB7XG4gICAgdGhpcy5zcGVlZFggPSB0aGlzLnNwZWVkWSA9IDBcblxuICAgIGlmICh0aGlzLmlucHV0U3RhdGVzLkFycm93TGVmdCkge1xuICAgICAgdGhpcy5zcGVlZFggPSAtMVxuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dFN0YXRlcy5BcnJvd1VwKSB7XG4gICAgICB0aGlzLnNwZWVkWSA9IC0xXG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0U3RhdGVzLkFycm93UmlnaHQpIHtcbiAgICAgIHRoaXMuc3BlZWRYID0gMVxuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dFN0YXRlcy5BcnJvd0Rvd24pIHtcbiAgICAgIHRoaXMuc3BlZWRZID0gMVxuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dFN0YXRlcy5TcGFjZSkge1xuICAgICAgdGhpcy5zcGVlZFggKj0gMlxuICAgICAgdGhpcy5zcGVlZFkgKj0gMlxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFJlY3Qge1xuICBjb25zdHJ1Y3RvciAoeyB4ID0gMCwgeSA9IDAsIHNpemUgPSAwLCBzcGVlZFggPSAwLCBzcGVlZFkgPSAwIH0gPSB7fSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMuc3BlZWRYID0gc3BlZWRYXG4gICAgdGhpcy5zcGVlZFkgPSBzcGVlZFlcbiAgfVxuXG4gIG1vdmUgKHRpbWVEZWx0YSkge1xuICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWCAvICgxMCAvIHRpbWVEZWx0YSlcbiAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFkgLyAoMTAgLyB0aW1lRGVsdGEpXG4gIH1cblxuICBkcmF3IChjdHgpIHtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKVxuICB9XG5cbiAgZGV0ZWN0Qm9yZGVyQ29sbGlzaW9uIChjYW52YXMpIHtcbiAgICBjb25zdCBjb2xsaXNpb24gPSBbXVxuXG4gICAgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgIGNvbGxpc2lvbi5wdXNoKCdsZWZ0JylcbiAgICB9XG5cbiAgICBpZiAodGhpcy54ID4gY2FudmFzLndpZHRoIC0gdGhpcy5zaXplKSB7XG4gICAgICBjb2xsaXNpb24ucHVzaCgncmlnaHQnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPCAwKSB7XG4gICAgICBjb2xsaXNpb24ucHVzaCgndG9wJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gY2FudmFzLmhlaWdodCAtIHRoaXMuc2l6ZSkge1xuICAgICAgY29sbGlzaW9uLnB1c2goJ2JvdHRvbScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxpc2lvblxuICB9XG5cbiAgaGFzQ29sbGlkZWRXaXRoUmVjdCAocmVjdCkge1xuICAgIGNvbnN0IHJlY3RQb2ludHMgPSBbXG4gICAgICB7IHg6IHJlY3QueCwgeTogcmVjdC55IH0sXG4gICAgICB7IHg6IHJlY3QueCArIHJlY3Quc2l6ZSwgeTogcmVjdC55IH0sXG4gICAgICB7IHg6IHJlY3QueCwgeTogcmVjdC55ICsgcmVjdC5zaXplIH0sXG4gICAgICB7IHg6IHJlY3QueCArIHJlY3Quc2l6ZSwgeTogcmVjdC55ICsgcmVjdC5zaXplIH1cbiAgICBdXG5cbiAgICB0aGlzLnBvaW50cyA9IFtcbiAgICAgIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSxcbiAgICAgIHsgeDogdGhpcy54ICsgdGhpcy5zaXplLCB5OiB0aGlzLnkgfSxcbiAgICAgIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgKyB0aGlzLnNpemUgfSxcbiAgICAgIHsgeDogdGhpcy54ICsgdGhpcy5zaXplLCB5OiB0aGlzLnkgKyB0aGlzLnNpemUgfVxuICAgIF1cblxuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgcmVjdFBvaW50cykge1xuICAgICAgY29uc3QgYmV0d2VlblhQb2ludHMgPSBwb2ludC54ID4gdGhpcy54ICYmIHBvaW50LnggPCB0aGlzLnggKyB0aGlzLnNpemVcblxuICAgICAgY29uc3QgYmV0d2VlbllQb2ludHMgPSBwb2ludC55ID4gdGhpcy55ICYmIHBvaW50LnkgPCB0aGlzLnkgKyB0aGlzLnNpemVcblxuICAgICAgaWYgKGJldHdlZW5YUG9pbnRzICYmIGJldHdlZW5ZUG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgY29uc3QgYmV0d2VlblhQb2ludHMgPSBwb2ludC54ID4gcmVjdC54ICYmIHBvaW50LnggPCByZWN0LnggKyByZWN0LnNpemVcblxuICAgICAgY29uc3QgYmV0d2VlbllQb2ludHMgPSBwb2ludC55ID4gcmVjdC55ICYmIHBvaW50LnkgPCByZWN0LnkgKyByZWN0LnNpemVcblxuICAgICAgaWYgKGJldHdlZW5YUG9pbnRzICYmIGJldHdlZW5ZUG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXZlcnNlU3BlZWQgKGF4aXMpIHtcbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICB0aGlzLnNwZWVkWCAqPSAtMVxuICAgICAgaWYgKHRoaXMuc3BlZWRYID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwZWVkWSAqPSAtMVxuICAgICAgaWYgKHRoaXMuc3BlZWRZID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGRpZmZpY3VsdGllcyA9IHtcbiAgJ2Vhc3knOiB7XG4gICAgbWluU3BlZWQ6IDEsXG4gICAgbWF4U3BlZWQ6IDNcbiAgfSxcbiAgJ21lZGl1bSc6IHtcbiAgICBtaW5TcGVlZDogMixcbiAgICBtYXhTcGVlZDogNFxuICB9LFxuICAnaGFyZCc6IHtcbiAgICBtaW5TcGVlZDogMyxcbiAgICBtYXhTcGVlZDogNVxuICB9LFxuICAnaW1wb3NzaWJsZSc6IHtcbiAgICBtaW5TcGVlZDogOCxcbiAgICBtYXhTcGVlZDogMTBcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGNhbGNGcHMgPSAoZGVsdGEsIGZyYW1lQ291bnQpID0+IHtcbiAgcmV0dXJuIDEwMDAgKiBmcmFtZUNvdW50IC8gZGVsdGFcbn1cbiIsImltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi4vY2xhc3Nlcy9FbmVteSdcbmltcG9ydCB7IGRpZmZpY3VsdGllcyB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW1pZXMgKGdhbWUpIHtcbiAgY29uc3QgZW5lbWllcyA9IFtdXG5cbiAgY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxuICB9XG5cbiAgY29uc29sZS5sb2coZ2FtZS5kaWZmaWN1bHR5KVxuICBjb25zdCB7bWluU3BlZWQsIG1heFNwZWVkfSA9IGRpZmZpY3VsdGllc1tnYW1lLmRpZmZpY3VsdHldXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZW5lbWllcy5wdXNoKFxuICAgICAgbmV3IEVuZW15KHtcbiAgICAgICAgcmVjdDoge1xuICAgICAgICAgIHg6IGdldFJhbmRvbU51bWJlcihnYW1lLmNhbnZhcy53aWR0aCAvIDIsIGdhbWUuY2FudmFzLndpZHRoIC0gNTApLFxuICAgICAgICAgIHk6IGdldFJhbmRvbU51bWJlcigwLCBnYW1lLmNhbnZhcy5oZWlnaHQgLSA1MCksXG4gICAgICAgICAgc2l6ZTogZ2V0UmFuZG9tTnVtYmVyKDEwLCA1MCksXG4gICAgICAgICAgc3BlZWRYOiBnZXRSYW5kb21OdW1iZXIobWluU3BlZWQsIG1heFNwZWVkKSAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICBzcGVlZFk6IGdldFJhbmRvbU51bWJlcihtaW5TcGVlZCwgbWF4U3BlZWQpICogKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGVuZW1pZXNcbn1cbiIsImV4cG9ydCBjb25zdCBkcmF3RnJhbWUgPSAoZ2FtZSwgY3R4KSA9PiB7XG4gIGN0eC5zYXZlKClcblxuICBjdHguZm9udCA9ICcxNnB4IHNhbnMtc2VyaWYnXG5cbiAgY3R4LmZpbGxUZXh0KCdUaW1lOiAnICsgKGdhbWUudGltZXMuZ2FtZSAvIDEwMDApLnRvRml4ZWQoMikgKyAnIHMnLFxuICAgIGdhbWUuY2FudmFzLndpZHRoICogMTEgLyAxMiwgZ2FtZS5jYW52YXMuaGVpZ2h0IC8gMjApXG5cbiAgY3R4LnJlc3RvcmUoKVxuXG4gIGdhbWUucGxheWVyLmRyYXcoY3R4KVxuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZ2FtZS5lbmVtaWVzKSB7XG4gICAgZW5lbXkuZHJhdyhjdHgpXG4gIH1cbn1cbiIsImltcG9ydCB7IGNhbGNGcHMgfSBmcm9tICcuL2NhbGNGcHMnXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVGcmFtZXMgPSAoZ2FtZSwgZGVsdGEpID0+IHtcbiAgZ2FtZS5mcmFtZXMuY291bnQrK1xuICBnYW1lLmZyYW1lcy5kZWx0YSArPSBkZWx0YVxuXG4gIGlmIChnYW1lLmZyYW1lcy5kZWx0YSA+IDUwMCkge1xuICAgIGdhbWUuZnJhbWVzLmZwcyA9IGNhbGNGcHMoZ2FtZS5mcmFtZXMuZGVsdGEsIGdhbWUuZnJhbWVzLmNvdW50KVxuICAgIGdhbWUuZnJhbWVzLmNvdW50ID0gMFxuICAgIGdhbWUuZnJhbWVzLmRlbHRhID0gMFxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgaGFuZGxlVGltZXMgPSAoZ2FtZSwgY3VycmVudFRpbWUpID0+IHtcbiAgaWYgKGdhbWUudGltZXMuc3RhcnQgPT09IG51bGwpIHtcbiAgICBnYW1lLnRpbWVzLnN0YXJ0ID0gY3VycmVudFRpbWVcbiAgfVxuXG4gIGlmIChnYW1lLnRpbWVzLmxhc3QgPT09IG51bGwpIHtcbiAgICBnYW1lLnRpbWVzLmxhc3QgPSBjdXJyZW50VGltZVxuICB9XG5cbiAgZ2FtZS50aW1lcy5nYW1lID0gY3VycmVudFRpbWUgLSBnYW1lLnRpbWVzLnN0YXJ0XG59XG4iLCJleHBvcnQgY29uc3QgaXNHYW1lT3ZlciA9IChnYW1lKSA9PiB7XG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZ2FtZS5lbmVtaWVzKSB7XG4gICAgaWYgKGdhbWUucGxheWVyLmhhc0NvbGxpZGVkV2l0aFJlY3QoZW5lbXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cbiIsImV4cG9ydCBjb25zdCBtb3ZlUmVjdHMgPSAoZ2FtZSwgZGVsdGEpID0+IHtcbiAgZ2FtZS5wbGF5ZXIuc2V0U3BlZWQoKVxuXG4gIGdhbWUucGxheWVyLm1vdmUoZGVsdGEsIGdhbWUuY2FudmFzKVxuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZ2FtZS5lbmVtaWVzKSB7XG4gICAgZW5lbXkubW92ZShkZWx0YSwgZ2FtZS5jYW52YXMpXG4gIH1cblxuICBnYW1lLnBsYXllci5oYW5kbGVCb3JkZXJDb2xsaXNpb24oZ2FtZS5jYW52YXMpXG5cbiAgZm9yIChjb25zdCBlbmVteSBvZiBnYW1lLmVuZW1pZXMpIHtcbiAgICBlbmVteS5oYW5kbGVCb3JkZXJDb2xsaXNpb24oZ2FtZS5jYW52YXMpXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCByZXNldEZyYW1lcyA9IChmcmFtZXMpID0+IHtcbiAgZnJhbWVzLmNvdW50ID0gMFxuICBmcmFtZXMuZGVsdGEgPSAwXG4gIGZyYW1lcy5mcHMgPSAwXG5cbiAgcmV0dXJuIGZyYW1lc1xufVxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vY2xhc3Nlcy9QbGF5ZXInXG5pbXBvcnQgeyBjcmVhdGVFbmVtaWVzIH0gZnJvbSAnLi9jcmVhdGVFbmVtaWVzJ1xuaW1wb3J0IHsgcmVzZXRUaW1lcyB9IGZyb20gJy4vcmVzZXRUaW1lcydcbmltcG9ydCB7IHJlc2V0RnJhbWVzIH0gZnJvbSAnLi9yZXNldEZyYW1lcydcblxuZXhwb3J0IGNvbnN0IHJlc2V0R2FtZSA9IChnYW1lKSA9PiB7XG4gIHJlc2V0VGltZXMoZ2FtZS50aW1lcylcbiAgcmVzZXRGcmFtZXMoZ2FtZS5mcmFtZXMpXG5cbiAgZ2FtZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHsgd2luZG93OiB3aW5kb3csIHJlY3Q6IHsgeDogMTAsIHk6IDEwLCBzaXplOiAyMCB9IH0pXG5cbiAgZ2FtZS5lbmVtaWVzID0gY3JlYXRlRW5lbWllcyhnYW1lKVxufVxuIiwiZXhwb3J0IGNvbnN0IHJlc2V0VGltZXMgPSAodGltZXMpID0+IHtcbiAgdGltZXMuc3RhcnQgPSBudWxsXG4gIHRpbWVzLmxhc3QgPSBudWxsXG4gIHRpbWVzLmdhbWUgPSAwXG5cbiAgcmV0dXJuIHRpbWVzXG59XG4iLCJleHBvcnQgY29uc3Qgc2F2ZVNjb3JlVG9EYiA9IChzY29yZSkgPT4ge1xuICBmZXRjaCgnL2RiL2luc2VydD8nICsgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgbmFtZTogbG9jYWxTdG9yYWdlLm5hbWUsXG4gICAgc2NvcmVcbiAgfSksIHtcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdJbnNlcnRlZCBkYiBlbnRyeSEnKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5jYW52YXMsIC5tZW51IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubWVudSwgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XFxufVxcblxcbnAsIGxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF0sIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0NTRmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0NTlkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0MsU0FBQTtBQUNEOztBQUVBO0VBQ0MscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0MsdUJBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRDs7QUFFQTtFQUNDLDJCQUFBO0FBQ0Q7O0FBRUE7RUFDQyw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFDRDtBQUNDO0VBQ0MseUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbm1haW4ge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRoZWlnaHQ6IDkwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5jYW52YXMsIC5tZW51IHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1lbnUsIGZvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbmgxIHtcXG5cXHRmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XFxufVxcblxcbnAsIGxhYmVsIHtcXG5cXHRmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0NTRmO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0bWFyZ2luOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNlMDQ1OWQ7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnXG5cbmltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL2NsYXNzZXMvUGxheWVyJ1xuaW1wb3J0IHsgY3JlYXRlRW5lbWllcyB9IGZyb20gJy4vZnVuY3Rpb25zL2NyZWF0ZUVuZW1pZXMnXG5pbXBvcnQgeyBkcmF3RnJhbWUgfSBmcm9tICcuL2Z1bmN0aW9ucy9kcmF3RnJhbWUnXG5pbXBvcnQgeyBoYW5kbGVGcmFtZXMgfSBmcm9tICcuL2Z1bmN0aW9ucy9oYW5kbGVGcmFtZXMnXG5pbXBvcnQgeyBpc0dhbWVPdmVyIH0gZnJvbSAnLi9mdW5jdGlvbnMvaXNHYW1lT3ZlcidcbmltcG9ydCB7IGhhbmRsZVRpbWVzIH0gZnJvbSAnLi9mdW5jdGlvbnMvaGFuZGxlVGltZXMnXG5pbXBvcnQgeyBzYXZlU2NvcmVUb0RiIH0gZnJvbSAnLi9mdW5jdGlvbnMvc2F2ZVNjb3JlVG9EYidcbmltcG9ydCB7IG1vdmVSZWN0cyB9IGZyb20gJy4vZnVuY3Rpb25zL21vdmVSZWN0cydcbmltcG9ydCB7IHJlc2V0R2FtZSB9IGZyb20gJy4vZnVuY3Rpb25zL3Jlc2V0R2FtZSdcbmltcG9ydCB7IHJlc2V0VGltZXMgfSBmcm9tICcuL2Z1bmN0aW9ucy9yZXNldFRpbWVzJ1xuaW1wb3J0IHsgcmVzZXRGcmFtZXMgfSBmcm9tICcuL2Z1bmN0aW9ucy9yZXNldEZyYW1lcydcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJylcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuXG5jb25zdCBib3JkZXJXaWR0aCA9IDJcblxuY2FudmFzLndpZHRoID0gcm9vdC5jbGllbnRXaWR0aCAtIGJvcmRlcldpZHRoICogMlxuY2FudmFzLmhlaWdodCA9IHJvb3QuY2xpZW50SGVpZ2h0XG5cbmNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tbWVudScpXG5jb25zdCBnYW1lT3Zlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1vdmVyLW1lbnUnKVxuXG5jb25zdCBmb3JtID0gbWFpbk1lbnUucXVlcnlTZWxlY3RvcignZm9ybScpXG5cbmZvcm0ub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgZm9ybS5xdWVyeVNlbGVjdG9yKCcjbmFtZScpKVxuICBnYW1lLmRpZmZpY3VsdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkaWZmaWN1bHR5JykudmFsdWVcblxuICBnYW1lLmVuZW1pZXMgPSBjcmVhdGVFbmVtaWVzKGdhbWUpXG5cbiAgbWFpbk1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpXG4gIGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdmbGV4JylcbiAgZ2FtZS5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5tYWluTG9vcClcbn1cblxuY29uc3QgZ2FtZSA9IHtcbiAgY2FudmFzLFxuICB0aW1lczogcmVzZXRUaW1lcyh7fSksXG4gIGZyYW1lczogcmVzZXRGcmFtZXMoe30pLFxuICBwbGF5ZXI6IG5ldyBQbGF5ZXIoeyB3aW5kb3c6IHdpbmRvdywgcmVjdDogeyB4OiAxMCwgeTogMTAsIHNpemU6IDIwIH0gfSksXG4gIG1haW5Mb29wOiAoY3VycmVudFRpbWUpID0+IHtcbiAgICBpZiAoaXNHYW1lT3ZlcihnYW1lKSkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWUuaWQpXG4gICAgICByZXR1cm4gZ2FtZS5lbmQoKVxuICAgIH1cblxuICAgIGhhbmRsZVRpbWVzKGdhbWUsIGN1cnJlbnRUaW1lKVxuXG4gICAgY29uc3QgZGVsdGEgPSBjdXJyZW50VGltZSAtIGdhbWUudGltZXMubGFzdFxuXG4gICAgaGFuZGxlRnJhbWVzKGdhbWUsIGRlbHRhKVxuXG4gICAgbW92ZVJlY3RzKGdhbWUsIGRlbHRhKVxuXG4gICAgY29uc3QgY3R4ID0gZ2FtZS5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBnYW1lLmNhbnZhcy53aWR0aCwgZ2FtZS5jYW52YXMuaGVpZ2h0KVxuXG4gICAgZHJhd0ZyYW1lKGdhbWUsIGN0eClcblxuICAgIGdhbWUudGltZXMubGFzdCA9IGN1cnJlbnRUaW1lXG5cbiAgICBnYW1lLmlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lLm1haW5Mb29wKVxuICB9LFxuICBlbmQ6ICgpID0+IHtcbiAgICBjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpXG5cbiAgICBjb25zdCBzY29yZSA9IGdhbWUudGltZXMuZ2FtZVxuXG4gICAgZ2FtZU92ZXJNZW51LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChzY29yZSkgLyAxMDAwXG5cbiAgICBzYXZlU2NvcmVUb0RiKHNjb3JlKVxuXG4gICAgZ2FtZU92ZXJNZW51LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBnYW1lT3Zlck1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICBjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnZmxleCcpXG5cbiAgICAgIHJlc2V0R2FtZShnYW1lKVxuICAgICAgZ2FtZS5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5tYWluTG9vcClcbiAgICB9XG5cbiAgICBnYW1lT3Zlck1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnZmxleCcpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWN0IiwiRW5lbXkiLCJyZWN0IiwiY2FudmFzIiwiY29sbGlzaW9ucyIsImluY2x1ZGVzIiwicmV2ZXJzZVNwZWVkIiwieCIsIndpZHRoIiwic2l6ZSIsInkiLCJoZWlnaHQiLCJjdHgiLCJzYXZlIiwiZmlsbFN0eWxlIiwicmVzdG9yZSIsIlBsYXllciIsIndpbmRvdyIsImlucHV0U3RhdGVzIiwiQXJyb3dVcCIsIkFycm93UmlnaHQiLCJBcnJvd0Rvd24iLCJBcnJvd0xlZnQiLCJTcGFjZSIsIm9ua2V5ZG93biIsImV2ZW50Iiwib25LZXlEb3duIiwib25rZXl1cCIsIm9uS2V5VXAiLCJwbGF5ZXJDb2xsaXNpb25zIiwic3BlZWRYIiwic3BlZWRZIiwiY29kZSIsInVuZGVmaW5lZCIsInRpbWVEZWx0YSIsImZpbGxSZWN0IiwiY29sbGlzaW9uIiwicHVzaCIsInJlY3RQb2ludHMiLCJwb2ludHMiLCJwb2ludCIsImJldHdlZW5YUG9pbnRzIiwiYmV0d2VlbllQb2ludHMiLCJheGlzIiwiZGlmZmljdWx0aWVzIiwibWluU3BlZWQiLCJtYXhTcGVlZCIsImNhbGNGcHMiLCJkZWx0YSIsImZyYW1lQ291bnQiLCJjcmVhdGVFbmVtaWVzIiwiZ2FtZSIsImVuZW1pZXMiLCJnZXRSYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImRpZmZpY3VsdHkiLCJpIiwiZHJhd0ZyYW1lIiwiZm9udCIsImZpbGxUZXh0IiwidGltZXMiLCJ0b0ZpeGVkIiwicGxheWVyIiwiZHJhdyIsImVuZW15IiwiaGFuZGxlRnJhbWVzIiwiZnJhbWVzIiwiY291bnQiLCJmcHMiLCJoYW5kbGVUaW1lcyIsImN1cnJlbnRUaW1lIiwic3RhcnQiLCJsYXN0IiwiaXNHYW1lT3ZlciIsImhhc0NvbGxpZGVkV2l0aFJlY3QiLCJtb3ZlUmVjdHMiLCJzZXRTcGVlZCIsIm1vdmUiLCJoYW5kbGVCb3JkZXJDb2xsaXNpb24iLCJyZXNldEZyYW1lcyIsInJlc2V0VGltZXMiLCJyZXNldEdhbWUiLCJzYXZlU2NvcmVUb0RiIiwic2NvcmUiLCJmZXRjaCIsIlVSTFNlYXJjaFBhcmFtcyIsIm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJtZXRob2QiLCJ0aGVuIiwiZXJyIiwiZXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyb290IiwiYm9yZGVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIm1haW5NZW51IiwiZ2FtZU92ZXJNZW51IiwiZm9ybSIsIm9uc3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwidmFsdWUiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtYWluTG9vcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZW5kIiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsInRleHRDb250ZW50Iiwicm91bmQiLCJvbmNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==