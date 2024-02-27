/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Character = /*#__PURE__*/function () {\n  function Character(name, type) {\n    var health = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;\n    var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n    var attack = arguments.length > 4 ? arguments[4] : undefined;\n    var defence = arguments.length > 5 ? arguments[5] : undefined;\n    _classCallCheck(this, Character);\n    this.name = name;\n    this.type = type;\n    this.health = health;\n    this.level = level;\n    this.attack = attack;\n    this.defence = defence;\n  }\n  _createClass(Character, [{\n    key: \"levelUp\",\n    value: function levelUp() {\n      if (this.health === 0) {\n        throw new Error(\"Cannot level up a dead character\");\n      }\n      this.level += 1;\n      this.attack *= 1.2;\n      this.defence *= 1.2;\n      this.health = 100;\n    }\n  }, {\n    key: \"damage\",\n    value: function damage(points) {\n      if (this.health === 0) {\n        return;\n      }\n      this.health -= points * (1 - this.defence / 100);\n      if (this.health < 0) {\n        this.health = 0;\n      }\n    }\n  }]);\n  return Character;\n}();\n\n//# sourceURL=webpack://ajs-05.1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;