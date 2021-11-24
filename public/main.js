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

function createEnemies(game) {
  var enemies = [];

  var getRandomNumber = function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  };

  for (var i = 0; i < 10; i++) {
    enemies.push(new _classes_Enemy__WEBPACK_IMPORTED_MODULE_0__.Enemy({
      rect: {
        x: getRandomNumber(game.canvas.width / 2, game.canvas.width - 50),
        y: getRandomNumber(0, game.canvas.height - 50),
        size: getRandomNumber(10, 50),
        speedX: getRandomNumber(-5, 5),
        speedY: getRandomNumber(-5, 5)
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\nmain {\n  display: inline-block;\n  height: 90vh;\n  width: 100vw;\n}\n\ncanvas, .menu {\n  border: 2px solid black;\n}\n\n.menu {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\nh1 {\n  font-family: Georgia, serif;\n}\n\np {\n  font-family: sans-serif;\n}\n\nbutton {\n  background-color: #e0454f;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 1rem;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n}\nbutton:hover {\n  background-color: #e0459d;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss"],"names":[],"mappings":"AAAA;EACC,SAAA;AACD;;AAEA;EACC,qBAAA;EACA,YAAA;EACA,YAAA;AACD;;AAEA;EACC,uBAAA;AACD;;AAEA;EACC,YAAA;EACA,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,uBAAA;AACD;;AAEA;EACC,2BAAA;AACD;;AAEA;EACC,uBAAA;AACD;;AAEA;EACC,yBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AACD;AACC;EACC,yBAAA;AACF","sourcesContent":["body {\n\tmargin: 0;\n}\n\nmain {\n\tdisplay: inline-block;\n\theight: 90vh;\n\twidth: 100vw;\n}\n\ncanvas, .menu {\n\tborder: 2px solid black;\n}\n\n.menu {\n\theight: 100%;\n\tdisplay: flex;\n\tflex-flow: column nowrap;\n\talign-items: center;\n\tjustify-content: center;\n}\n\nh1 {\n\tfont-family: Georgia, serif;\n}\n\np {\n\tfont-family: sans-serif;\n}\n\nbutton {\n\tbackground-color: #e0454f;\n\tborder: 1px solid black;\n\tcursor: pointer;\n\tmargin: 1rem;\n\tpadding: 0.5rem;\n\tfont-size: 1.5rem;\n\n\t&:hover {\n\t\tbackground-color: #e0459d;\n\t}\n}\n"],"sourceRoot":""}]);
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

mainMenu.querySelector('button').onclick = function (event) {
  localStorage.setItem('name', mainMenu.querySelector('input').value);
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
game.enemies = (0,_functions_createEnemies__WEBPACK_IMPORTED_MODULE_3__.createEnemies)(game);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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bkIsQ0FBK0IsU0FBL0IsRUFBMEMsTUFBMUM7QUFDRDtBQS9DVSxDQUFiO0FBa0RBekQsSUFBSSxDQUFDQyxPQUFMLEdBQWVGLHVFQUFhLENBQUNDLElBQUQsQ0FBNUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9jbGFzc2VzL0VuZW15LmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9jbGFzc2VzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9qcy9mdW5jdGlvbnMvY2FsY0Zwcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL2NyZWF0ZUVuZW1pZXMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9kcmF3RnJhbWUuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9oYW5kbGVGcmFtZXMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9oYW5kbGVUaW1lcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL2lzR2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9tb3ZlUmVjdHMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9yZXNldEZyYW1lcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL3Jlc2V0R2FtZS5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvZnVuY3Rpb25zL3Jlc2V0VGltZXMuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vc3JjL2pzL2Z1bmN0aW9ucy9zYXZlU2NvcmVUb0RiLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2N1YmUtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY3ViZS1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jdWJlLWdhbWUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4vUmVjdCdcblxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgUmVjdCB7XG4gIGNvbnN0cnVjdG9yICh7IHJlY3QgfSkge1xuICAgIHN1cGVyKHJlY3QpXG4gIH1cblxuICBoYW5kbGVCb3JkZXJDb2xsaXNpb24gKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbGxpc2lvbnMgPSBzdXBlci5kZXRlY3RCb3JkZXJDb2xsaXNpb24oY2FudmFzKVxuXG4gICAgaWYgKGNvbGxpc2lvbnMuaW5jbHVkZXMoJ2xlZnQnKSkge1xuICAgICAgdGhpcy5yZXZlcnNlU3BlZWQoJ3gnKVxuICAgICAgdGhpcy54ID0gMFxuICAgIH1cblxuICAgIGlmIChjb2xsaXNpb25zLmluY2x1ZGVzKCdyaWdodCcpKSB7XG4gICAgICB0aGlzLnJldmVyc2VTcGVlZCgneCcpXG4gICAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLSB0aGlzLnNpemVcbiAgICB9XG5cbiAgICBpZiAoY29sbGlzaW9ucy5pbmNsdWRlcygndG9wJykpIHtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkKCd5JylcbiAgICAgIHRoaXMueSA9IDBcbiAgICB9XG5cbiAgICBpZiAoY29sbGlzaW9ucy5pbmNsdWRlcygnYm90dG9tJykpIHtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkKCd5JylcbiAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnNpemVcbiAgICB9XG4gIH1cblxuICBkcmF3IChjdHgpIHtcbiAgICBjdHguc2F2ZSgpXG5cbiAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCdcblxuICAgIHN1cGVyLmRyYXcoY3R4KVxuXG4gICAgY3R4LnJlc3RvcmUoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9SZWN0J1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVjdCB7XG4gIGNvbnN0cnVjdG9yICh7IHdpbmRvdywgcmVjdCB9KSB7XG4gICAgc3VwZXIocmVjdClcblxuICAgIHRoaXMud2luZG93ID0gd2luZG93XG5cbiAgICB0aGlzLmlucHV0U3RhdGVzID0ge1xuICAgICAgQXJyb3dVcDogZmFsc2UsXG4gICAgICBBcnJvd1JpZ2h0OiBmYWxzZSxcbiAgICAgIEFycm93RG93bjogZmFsc2UsXG4gICAgICBBcnJvd0xlZnQ6IGZhbHNlLFxuICAgICAgU3BhY2U6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cub25rZXlkb3duID0gKGV2ZW50KSA9PiB0aGlzLm9uS2V5RG93bihldmVudClcbiAgICB0aGlzLndpbmRvdy5vbmtleXVwID0gKGV2ZW50KSA9PiB0aGlzLm9uS2V5VXAoZXZlbnQpXG4gIH1cblxuICBoYW5kbGVCb3JkZXJDb2xsaXNpb24gKGNhbnZhcykge1xuICAgIGNvbnN0IHBsYXllckNvbGxpc2lvbnMgPSBzdXBlci5kZXRlY3RCb3JkZXJDb2xsaXNpb24oY2FudmFzKVxuXG4gICAgaWYgKHBsYXllckNvbGxpc2lvbnMuaW5jbHVkZXMoJ2xlZnQnKSkge1xuICAgICAgdGhpcy5zcGVlZFggPSAwXG4gICAgICB0aGlzLnggPSAwXG4gICAgfVxuXG4gICAgaWYgKHBsYXllckNvbGxpc2lvbnMuaW5jbHVkZXMoJ3JpZ2h0JykpIHtcbiAgICAgIHRoaXMuc3BlZWRYID0gMFxuICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC0gdGhpcy5zaXplXG4gICAgfVxuXG4gICAgaWYgKHBsYXllckNvbGxpc2lvbnMuaW5jbHVkZXMoJ3RvcCcpKSB7XG4gICAgICB0aGlzLnNwZWVkWSA9IDBcbiAgICAgIHRoaXMueSA9IDBcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQ29sbGlzaW9ucy5pbmNsdWRlcygnYm90dG9tJykpIHtcbiAgICAgIHRoaXMuc3BlZWRZID0gMFxuICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMuc2l6ZVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKGN0eCkge1xuICAgIGN0eC5zYXZlKClcblxuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snXG5cbiAgICBzdXBlci5kcmF3KGN0eClcblxuICAgIGN0eC5yZXN0b3JlKClcbiAgfVxuXG4gIG9uS2V5RG93biAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5pbnB1dFN0YXRlc1tldmVudC5jb2RlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlucHV0U3RhdGVzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAgKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaW5wdXRTdGF0ZXNbZXZlbnQuY29kZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnB1dFN0YXRlc1tldmVudC5jb2RlXSA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgc2V0U3BlZWQgKCkge1xuICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFkgPSAwXG5cbiAgICBpZiAodGhpcy5pbnB1dFN0YXRlcy5BcnJvd0xlZnQpIHtcbiAgICAgIHRoaXMuc3BlZWRYID0gLTFcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXRTdGF0ZXMuQXJyb3dVcCkge1xuICAgICAgdGhpcy5zcGVlZFkgPSAtMVxuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dFN0YXRlcy5BcnJvd1JpZ2h0KSB7XG4gICAgICB0aGlzLnNwZWVkWCA9IDFcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXRTdGF0ZXMuQXJyb3dEb3duKSB7XG4gICAgICB0aGlzLnNwZWVkWSA9IDFcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXRTdGF0ZXMuU3BhY2UpIHtcbiAgICAgIHRoaXMuc3BlZWRYICo9IDJcbiAgICAgIHRoaXMuc3BlZWRZICo9IDJcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBSZWN0IHtcbiAgY29uc3RydWN0b3IgKHsgeCA9IDAsIHkgPSAwLCBzaXplID0gMCwgc3BlZWRYID0gMCwgc3BlZWRZID0gMCB9ID0ge30pIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLnNwZWVkWCA9IHNwZWVkWFxuICAgIHRoaXMuc3BlZWRZID0gc3BlZWRZXG4gIH1cblxuICBtb3ZlICh0aW1lRGVsdGEpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFggLyAoMTAgLyB0aW1lRGVsdGEpXG4gICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZIC8gKDEwIC8gdGltZURlbHRhKVxuICB9XG5cbiAgZHJhdyAoY3R4KSB7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGRldGVjdEJvcmRlckNvbGxpc2lvbiAoY2FudmFzKSB7XG4gICAgY29uc3QgY29sbGlzaW9uID0gW11cblxuICAgIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICBjb2xsaXNpb24ucHVzaCgnbGVmdCcpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMueCA+IGNhbnZhcy53aWR0aCAtIHRoaXMuc2l6ZSkge1xuICAgICAgY29sbGlzaW9uLnB1c2goJ3JpZ2h0JylcbiAgICB9XG5cbiAgICBpZiAodGhpcy55IDwgMCkge1xuICAgICAgY29sbGlzaW9uLnB1c2goJ3RvcCcpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnNpemUpIHtcbiAgICAgIGNvbGxpc2lvbi5wdXNoKCdib3R0b20nKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xsaXNpb25cbiAgfVxuXG4gIGhhc0NvbGxpZGVkV2l0aFJlY3QgKHJlY3QpIHtcbiAgICBjb25zdCByZWN0UG9pbnRzID0gW1xuICAgICAgeyB4OiByZWN0LngsIHk6IHJlY3QueSB9LFxuICAgICAgeyB4OiByZWN0LnggKyByZWN0LnNpemUsIHk6IHJlY3QueSB9LFxuICAgICAgeyB4OiByZWN0LngsIHk6IHJlY3QueSArIHJlY3Quc2l6ZSB9LFxuICAgICAgeyB4OiByZWN0LnggKyByZWN0LnNpemUsIHk6IHJlY3QueSArIHJlY3Quc2l6ZSB9XG4gICAgXVxuXG4gICAgdGhpcy5wb2ludHMgPSBbXG4gICAgICB7IHg6IHRoaXMueCwgeTogdGhpcy55IH0sXG4gICAgICB7IHg6IHRoaXMueCArIHRoaXMuc2l6ZSwgeTogdGhpcy55IH0sXG4gICAgICB7IHg6IHRoaXMueCwgeTogdGhpcy55ICsgdGhpcy5zaXplIH0sXG4gICAgICB7IHg6IHRoaXMueCArIHRoaXMuc2l6ZSwgeTogdGhpcy55ICsgdGhpcy5zaXplIH1cbiAgICBdXG5cbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHJlY3RQb2ludHMpIHtcbiAgICAgIGNvbnN0IGJldHdlZW5YUG9pbnRzID0gcG9pbnQueCA+IHRoaXMueCAmJiBwb2ludC54IDwgdGhpcy54ICsgdGhpcy5zaXplXG5cbiAgICAgIGNvbnN0IGJldHdlZW5ZUG9pbnRzID0gcG9pbnQueSA+IHRoaXMueSAmJiBwb2ludC55IDwgdGhpcy55ICsgdGhpcy5zaXplXG5cbiAgICAgIGlmIChiZXR3ZWVuWFBvaW50cyAmJiBiZXR3ZWVuWVBvaW50cykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgIGNvbnN0IGJldHdlZW5YUG9pbnRzID0gcG9pbnQueCA+IHJlY3QueCAmJiBwb2ludC54IDwgcmVjdC54ICsgcmVjdC5zaXplXG5cbiAgICAgIGNvbnN0IGJldHdlZW5ZUG9pbnRzID0gcG9pbnQueSA+IHJlY3QueSAmJiBwb2ludC55IDwgcmVjdC55ICsgcmVjdC5zaXplXG5cbiAgICAgIGlmIChiZXR3ZWVuWFBvaW50cyAmJiBiZXR3ZWVuWVBvaW50cykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV2ZXJzZVNwZWVkIChheGlzKSB7XG4gICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgdGhpcy5zcGVlZFggKj0gLTFcbiAgICAgIGlmICh0aGlzLnNwZWVkWCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcGVlZFkgKj0gLTFcbiAgICAgIGlmICh0aGlzLnNwZWVkWSA9PT0gMCkge1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjYWxjRnBzID0gKGRlbHRhLCBmcmFtZUNvdW50KSA9PiB7XG4gIHJldHVybiAxMDAwICogZnJhbWVDb3VudCAvIGRlbHRhXG59XG4iLCJpbXBvcnQgeyBFbmVteSB9IGZyb20gJy4uL2NsYXNzZXMvRW5lbXknXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVtaWVzIChnYW1lKSB7XG4gIGNvbnN0IGVuZW1pZXMgPSBbXVxuXG4gIGNvbnN0IGdldFJhbmRvbU51bWJlciA9IChtaW4sIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGVuZW1pZXMucHVzaChcbiAgICAgIG5ldyBFbmVteSh7XG4gICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICB4OiBnZXRSYW5kb21OdW1iZXIoZ2FtZS5jYW52YXMud2lkdGggLyAyLCBnYW1lLmNhbnZhcy53aWR0aCAtIDUwKSxcbiAgICAgICAgICB5OiBnZXRSYW5kb21OdW1iZXIoMCwgZ2FtZS5jYW52YXMuaGVpZ2h0IC0gNTApLFxuICAgICAgICAgIHNpemU6IGdldFJhbmRvbU51bWJlcigxMCwgNTApLFxuICAgICAgICAgIHNwZWVkWDogZ2V0UmFuZG9tTnVtYmVyKC01LCA1KSxcbiAgICAgICAgICBzcGVlZFk6IGdldFJhbmRvbU51bWJlcigtNSwgNSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gZW5lbWllc1xufVxuIiwiZXhwb3J0IGNvbnN0IGRyYXdGcmFtZSA9IChnYW1lLCBjdHgpID0+IHtcbiAgY3R4LnNhdmUoKVxuXG4gIGN0eC5mb250ID0gJzE2cHggc2Fucy1zZXJpZidcblxuICBjdHguZmlsbFRleHQoJ1RpbWU6ICcgKyAoZ2FtZS50aW1lcy5nYW1lIC8gMTAwMCkudG9GaXhlZCgyKSArICcgcycsXG4gICAgZ2FtZS5jYW52YXMud2lkdGggKiAxMSAvIDEyLCBnYW1lLmNhbnZhcy5oZWlnaHQgLyAyMClcblxuICBjdHgucmVzdG9yZSgpXG5cbiAgZ2FtZS5wbGF5ZXIuZHJhdyhjdHgpXG5cbiAgZm9yIChjb25zdCBlbmVteSBvZiBnYW1lLmVuZW1pZXMpIHtcbiAgICBlbmVteS5kcmF3KGN0eClcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FsY0ZwcyB9IGZyb20gJy4vY2FsY0ZwcydcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUZyYW1lcyA9IChnYW1lLCBkZWx0YSkgPT4ge1xuICBnYW1lLmZyYW1lcy5jb3VudCsrXG4gIGdhbWUuZnJhbWVzLmRlbHRhICs9IGRlbHRhXG5cbiAgaWYgKGdhbWUuZnJhbWVzLmRlbHRhID4gNTAwKSB7XG4gICAgZ2FtZS5mcmFtZXMuZnBzID0gY2FsY0ZwcyhnYW1lLmZyYW1lcy5kZWx0YSwgZ2FtZS5mcmFtZXMuY291bnQpXG4gICAgZ2FtZS5mcmFtZXMuY291bnQgPSAwXG4gICAgZ2FtZS5mcmFtZXMuZGVsdGEgPSAwXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBoYW5kbGVUaW1lcyA9IChnYW1lLCBjdXJyZW50VGltZSkgPT4ge1xuICBpZiAoZ2FtZS50aW1lcy5zdGFydCA9PT0gbnVsbCkge1xuICAgIGdhbWUudGltZXMuc3RhcnQgPSBjdXJyZW50VGltZVxuICB9XG5cbiAgaWYgKGdhbWUudGltZXMubGFzdCA9PT0gbnVsbCkge1xuICAgIGdhbWUudGltZXMubGFzdCA9IGN1cnJlbnRUaW1lXG4gIH1cblxuICBnYW1lLnRpbWVzLmdhbWUgPSBjdXJyZW50VGltZSAtIGdhbWUudGltZXMuc3RhcnRcbn1cbiIsImV4cG9ydCBjb25zdCBpc0dhbWVPdmVyID0gKGdhbWUpID0+IHtcbiAgZm9yIChjb25zdCBlbmVteSBvZiBnYW1lLmVuZW1pZXMpIHtcbiAgICBpZiAoZ2FtZS5wbGF5ZXIuaGFzQ29sbGlkZWRXaXRoUmVjdChlbmVteSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuIiwiZXhwb3J0IGNvbnN0IG1vdmVSZWN0cyA9IChnYW1lLCBkZWx0YSkgPT4ge1xuICBnYW1lLnBsYXllci5zZXRTcGVlZCgpXG5cbiAgZ2FtZS5wbGF5ZXIubW92ZShkZWx0YSwgZ2FtZS5jYW52YXMpXG5cbiAgZm9yIChjb25zdCBlbmVteSBvZiBnYW1lLmVuZW1pZXMpIHtcbiAgICBlbmVteS5tb3ZlKGRlbHRhLCBnYW1lLmNhbnZhcylcbiAgfVxuXG4gIGdhbWUucGxheWVyLmhhbmRsZUJvcmRlckNvbGxpc2lvbihnYW1lLmNhbnZhcylcblxuICBmb3IgKGNvbnN0IGVuZW15IG9mIGdhbWUuZW5lbWllcykge1xuICAgIGVuZW15LmhhbmRsZUJvcmRlckNvbGxpc2lvbihnYW1lLmNhbnZhcylcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHJlc2V0RnJhbWVzID0gKGZyYW1lcykgPT4ge1xuICBmcmFtZXMuY291bnQgPSAwXG4gIGZyYW1lcy5kZWx0YSA9IDBcbiAgZnJhbWVzLmZwcyA9IDBcblxuICByZXR1cm4gZnJhbWVzXG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9jbGFzc2VzL1BsYXllcidcbmltcG9ydCB7IGNyZWF0ZUVuZW1pZXMgfSBmcm9tICcuL2NyZWF0ZUVuZW1pZXMnXG5pbXBvcnQgeyByZXNldFRpbWVzIH0gZnJvbSAnLi9yZXNldFRpbWVzJ1xuaW1wb3J0IHsgcmVzZXRGcmFtZXMgfSBmcm9tICcuL3Jlc2V0RnJhbWVzJ1xuXG5leHBvcnQgY29uc3QgcmVzZXRHYW1lID0gKGdhbWUpID0+IHtcbiAgcmVzZXRUaW1lcyhnYW1lLnRpbWVzKVxuICByZXNldEZyYW1lcyhnYW1lLmZyYW1lcylcblxuICBnYW1lLnBsYXllciA9IG5ldyBQbGF5ZXIoeyB3aW5kb3c6IHdpbmRvdywgcmVjdDogeyB4OiAxMCwgeTogMTAsIHNpemU6IDIwIH0gfSlcblxuICBnYW1lLmVuZW1pZXMgPSBjcmVhdGVFbmVtaWVzKGdhbWUpXG59XG4iLCJleHBvcnQgY29uc3QgcmVzZXRUaW1lcyA9ICh0aW1lcykgPT4ge1xuICB0aW1lcy5zdGFydCA9IG51bGxcbiAgdGltZXMubGFzdCA9IG51bGxcbiAgdGltZXMuZ2FtZSA9IDBcblxuICByZXR1cm4gdGltZXNcbn1cbiIsImV4cG9ydCBjb25zdCBzYXZlU2NvcmVUb0RiID0gKHNjb3JlKSA9PiB7XG4gIGZldGNoKCcvZGIvaW5zZXJ0PycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBuYW1lOiBsb2NhbFN0b3JhZ2UubmFtZSxcbiAgICBzY29yZVxuICB9KSwge1xuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0luc2VydGVkIGRiIGVudHJ5IScpKVxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5jYW52YXMsIC5tZW51IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubWVudSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XFxufVxcblxcbnAge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0NTRmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQ1OWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDQyxTQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyx1QkFBQTtBQUNEOztBQUVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRDs7QUFFQTtFQUNDLDJCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx1QkFBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Q7QUFDQztFQUNDLHlCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5tYWluIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0aGVpZ2h0OiA5MHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG59XFxuXFxuY2FudmFzLCAubWVudSB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tZW51IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG59XFxuXFxucCB7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2UwNDU0ZjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0bWFyZ2luOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0NTlkO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJ1xuXG5pbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2NzcydcblxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9jbGFzc2VzL1BsYXllcidcbmltcG9ydCB7IGNyZWF0ZUVuZW1pZXMgfSBmcm9tICcuL2Z1bmN0aW9ucy9jcmVhdGVFbmVtaWVzJ1xuaW1wb3J0IHsgZHJhd0ZyYW1lIH0gZnJvbSAnLi9mdW5jdGlvbnMvZHJhd0ZyYW1lJ1xuaW1wb3J0IHsgaGFuZGxlRnJhbWVzIH0gZnJvbSAnLi9mdW5jdGlvbnMvaGFuZGxlRnJhbWVzJ1xuaW1wb3J0IHsgaXNHYW1lT3ZlciB9IGZyb20gJy4vZnVuY3Rpb25zL2lzR2FtZU92ZXInXG5pbXBvcnQgeyBoYW5kbGVUaW1lcyB9IGZyb20gJy4vZnVuY3Rpb25zL2hhbmRsZVRpbWVzJ1xuaW1wb3J0IHsgc2F2ZVNjb3JlVG9EYiB9IGZyb20gJy4vZnVuY3Rpb25zL3NhdmVTY29yZVRvRGInXG5pbXBvcnQgeyBtb3ZlUmVjdHMgfSBmcm9tICcuL2Z1bmN0aW9ucy9tb3ZlUmVjdHMnXG5pbXBvcnQgeyByZXNldEdhbWUgfSBmcm9tICcuL2Z1bmN0aW9ucy9yZXNldEdhbWUnXG5pbXBvcnQge3Jlc2V0VGltZXN9IGZyb20gJy4vZnVuY3Rpb25zL3Jlc2V0VGltZXMnXG5pbXBvcnQge3Jlc2V0RnJhbWVzfSBmcm9tICcuL2Z1bmN0aW9ucy9yZXNldEZyYW1lcydcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJylcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuXG5jb25zdCBib3JkZXJXaWR0aCA9IDJcblxuY2FudmFzLndpZHRoID0gcm9vdC5jbGllbnRXaWR0aCAtIGJvcmRlcldpZHRoICogMlxuY2FudmFzLmhlaWdodCA9IHJvb3QuY2xpZW50SGVpZ2h0XG5cbmNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tbWVudScpXG5jb25zdCBnYW1lT3Zlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1vdmVyLW1lbnUnKVxuXG5tYWluTWVudS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgbWFpbk1lbnUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSlcbiAgbWFpbk1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpXG4gIGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdmbGV4JylcbiAgZ2FtZS5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5tYWluTG9vcClcbn1cblxuY29uc3QgZ2FtZSA9IHtcbiAgY2FudmFzLFxuICB0aW1lczogcmVzZXRUaW1lcyh7fSksXG4gIGZyYW1lczogcmVzZXRGcmFtZXMoe30pLFxuICBwbGF5ZXI6IG5ldyBQbGF5ZXIoeyB3aW5kb3c6IHdpbmRvdywgcmVjdDogeyB4OiAxMCwgeTogMTAsIHNpemU6IDIwIH0gfSksXG4gIG1haW5Mb29wOiAoY3VycmVudFRpbWUpID0+IHtcbiAgICBpZiAoaXNHYW1lT3ZlcihnYW1lKSkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWUuaWQpXG4gICAgICByZXR1cm4gZ2FtZS5lbmQoKVxuICAgIH1cblxuICAgIGhhbmRsZVRpbWVzKGdhbWUsIGN1cnJlbnRUaW1lKVxuXG4gICAgY29uc3QgZGVsdGEgPSBjdXJyZW50VGltZSAtIGdhbWUudGltZXMubGFzdFxuXG4gICAgaGFuZGxlRnJhbWVzKGdhbWUsIGRlbHRhKVxuXG4gICAgbW92ZVJlY3RzKGdhbWUsIGRlbHRhKVxuXG4gICAgY29uc3QgY3R4ID0gZ2FtZS5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBnYW1lLmNhbnZhcy53aWR0aCwgZ2FtZS5jYW52YXMuaGVpZ2h0KVxuXG4gICAgZHJhd0ZyYW1lKGdhbWUsIGN0eClcblxuICAgIGdhbWUudGltZXMubGFzdCA9IGN1cnJlbnRUaW1lXG5cbiAgICBnYW1lLmlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lLm1haW5Mb29wKVxuICB9LFxuICBlbmQ6ICgpID0+IHtcbiAgICBjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpXG5cbiAgICBjb25zdCBzY29yZSA9IGdhbWUudGltZXMuZ2FtZVxuXG4gICAgZ2FtZU92ZXJNZW51LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChzY29yZSkgLyAxMDAwXG5cbiAgICBzYXZlU2NvcmVUb0RiKHNjb3JlKVxuXG4gICAgZ2FtZU92ZXJNZW51LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBnYW1lT3Zlck1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICBjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnZmxleCcpXG5cbiAgICAgIHJlc2V0R2FtZShnYW1lKVxuICAgICAgZ2FtZS5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5tYWluTG9vcClcbiAgICB9XG5cbiAgICBnYW1lT3Zlck1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnZmxleCcpXG4gIH1cbn1cblxuZ2FtZS5lbmVtaWVzID0gY3JlYXRlRW5lbWllcyhnYW1lKVxuIl0sIm5hbWVzIjpbIlJlY3QiLCJFbmVteSIsInJlY3QiLCJjYW52YXMiLCJjb2xsaXNpb25zIiwiaW5jbHVkZXMiLCJyZXZlcnNlU3BlZWQiLCJ4Iiwid2lkdGgiLCJzaXplIiwieSIsImhlaWdodCIsImN0eCIsInNhdmUiLCJmaWxsU3R5bGUiLCJyZXN0b3JlIiwiUGxheWVyIiwid2luZG93IiwiaW5wdXRTdGF0ZXMiLCJBcnJvd1VwIiwiQXJyb3dSaWdodCIsIkFycm93RG93biIsIkFycm93TGVmdCIsIlNwYWNlIiwib25rZXlkb3duIiwiZXZlbnQiLCJvbktleURvd24iLCJvbmtleXVwIiwib25LZXlVcCIsInBsYXllckNvbGxpc2lvbnMiLCJzcGVlZFgiLCJzcGVlZFkiLCJjb2RlIiwidW5kZWZpbmVkIiwidGltZURlbHRhIiwiZmlsbFJlY3QiLCJjb2xsaXNpb24iLCJwdXNoIiwicmVjdFBvaW50cyIsInBvaW50cyIsInBvaW50IiwiYmV0d2VlblhQb2ludHMiLCJiZXR3ZWVuWVBvaW50cyIsImF4aXMiLCJjYWxjRnBzIiwiZGVsdGEiLCJmcmFtZUNvdW50IiwiY3JlYXRlRW5lbWllcyIsImdhbWUiLCJlbmVtaWVzIiwiZ2V0UmFuZG9tTnVtYmVyIiwibWluIiwibWF4IiwiTWF0aCIsInJhbmRvbSIsImkiLCJkcmF3RnJhbWUiLCJmb250IiwiZmlsbFRleHQiLCJ0aW1lcyIsInRvRml4ZWQiLCJwbGF5ZXIiLCJkcmF3IiwiZW5lbXkiLCJoYW5kbGVGcmFtZXMiLCJmcmFtZXMiLCJjb3VudCIsImZwcyIsImhhbmRsZVRpbWVzIiwiY3VycmVudFRpbWUiLCJzdGFydCIsImxhc3QiLCJpc0dhbWVPdmVyIiwiaGFzQ29sbGlkZWRXaXRoUmVjdCIsIm1vdmVSZWN0cyIsInNldFNwZWVkIiwibW92ZSIsImhhbmRsZUJvcmRlckNvbGxpc2lvbiIsInJlc2V0RnJhbWVzIiwicmVzZXRUaW1lcyIsInJlc2V0R2FtZSIsInNhdmVTY29yZVRvRGIiLCJzY29yZSIsImZldGNoIiwiVVJMU2VhcmNoUGFyYW1zIiwibmFtZSIsImxvY2FsU3RvcmFnZSIsIm1ldGhvZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyb290IiwiYm9yZGVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIm1haW5NZW51IiwiZ2FtZU92ZXJNZW51Iiwib25jbGljayIsInNldEl0ZW0iLCJ2YWx1ZSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJpZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1haW5Mb29wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJlbmQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwidGV4dENvbnRlbnQiLCJyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=