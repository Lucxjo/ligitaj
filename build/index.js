/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/shortId.ts":
/*!************************!*\
  !*** ./lib/shortId.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** @format */ var shortId = function() {\n    var length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;\n    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';\n    var str = '';\n    for(var i = 0; i < length; i++){\n        str += chars.charAt(Math.floor(Math.random() * chars.length));\n    }\n    return str;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortId);\n\n\n//# sourceURL=webpack://ligitaj/./lib/shortId.ts?");

/***/ }),

/***/ "./models/link.ts":
/*!************************!*\
  !*** ./models/link.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_shortId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/shortId */ \"./lib/shortId.ts\");\n\n\nvar linkSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    full: {\n        type: String,\n        required: true\n    },\n    short: {\n        type: String,\n        required: true,\n        default: (0,_lib_shortId__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    },\n    clicks: {\n        type: Number,\n        required: true,\n        default: 0\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('links', linkSchema));\n\n\n//# sourceURL=webpack://ligitaj/./models/link.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"regenerator-runtime\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vars */ \"./src/vars.ts\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/link */ \"./models/link.ts\");\n\n/** @format */ \n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction startServer() {\n    return _startServer.apply(this, arguments);\n}\nfunction _startServer() {\n    _startServer = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n        var app;\n        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n            while(1)switch(_ctx1.prev = _ctx1.next){\n                case 0:\n                    app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n                    _ctx1.next = 3;\n                    return mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect('mongodb://localhost:27017/links');\n                case 3:\n                    app.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()());\n                    app.use(express__WEBPACK_IMPORTED_MODULE_1__.urlencoded({\n                        extended: false\n                    }));\n                    app.get('/', function(req, res) {\n                        res.status(302).redirect(\"\".concat(_vars__WEBPACK_IMPORTED_MODULE_3__.HOME_URL));\n                    });\n                    app.get('/:short', _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {\n                        var url;\n                        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.next = 2;\n                                    return _models_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                                        short: req.params.short\n                                    });\n                                case 2:\n                                    url = _ctx.sent;\n                                    res.status(302).redirect(url.full);\n                                case 4:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    })));\n                    app.post('/create-short', _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {\n                        var url, url1;\n                        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    if (!(req.headers['x-api-key'] !== _vars__WEBPACK_IMPORTED_MODULE_3__.KEY)) {\n                                        _ctx.next = 5;\n                                        break;\n                                    }\n                                    res.status(401).send('Invalid API key');\n                                    return _ctx.abrupt(\"return\");\n                                case 5:\n                                    if (!req.body.short) {\n                                        _ctx.next = 12;\n                                        break;\n                                    }\n                                    _ctx.next = 8;\n                                    return _models_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create({\n                                        full: req.body.full,\n                                        short: req.body.short\n                                    });\n                                case 8:\n                                    url = _ctx.sent;\n                                    res.status(200).send('Created: ' + url);\n                                    _ctx.next = 16;\n                                    break;\n                                case 12:\n                                    _ctx.next = 14;\n                                    return _models_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create({\n                                        full: req.body.full\n                                    });\n                                case 14:\n                                    url1 = _ctx.sent;\n                                    res.status(200).send('Created: ' + url1);\n                                case 16:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    })));\n                    app.post('/:short', _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {\n                        var url;\n                        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    if (!(req.headers['x-api-key'] !== _vars__WEBPACK_IMPORTED_MODULE_3__.KEY)) {\n                                        _ctx.next = 5;\n                                        break;\n                                    }\n                                    res.status(401).send('Invalid API key');\n                                    return _ctx.abrupt(\"return\");\n                                case 5:\n                                    _ctx.next = 7;\n                                    return _models_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                                        short: req.params.short\n                                    });\n                                case 7:\n                                    url = _ctx.sent;\n                                    res.status(200).send({\n                                        full: url.full,\n                                        short: \"\".concat(_vars__WEBPACK_IMPORTED_MODULE_3__.BASE_URL, \"/\").concat(url.short),\n                                        clicks: url.clicks\n                                    });\n                                case 9:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    })));\n                    app.post('/', _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {\n                        var short;\n                        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    if (!(req.headers['x-api-key'] !== _vars__WEBPACK_IMPORTED_MODULE_3__.KEY)) {\n                                        _ctx.next = 5;\n                                        break;\n                                    }\n                                    res.status(401).send('Invalid API key');\n                                    return _ctx.abrupt(\"return\");\n                                case 5:\n                                    _ctx.next = 7;\n                                    return _models_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"].find();\n                                case 7:\n                                    short = _ctx.sent;\n                                    res.status(200).send(\"\".concat(short));\n                                case 9:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    })));\n                    console.log('Connected to MongoDB');\n                    app.listen({\n                        port: _vars__WEBPACK_IMPORTED_MODULE_3__.PORT\n                    }, function() {\n                        console.log(\"🚀 Server ready at http://localhost:\".concat(_vars__WEBPACK_IMPORTED_MODULE_3__.PORT));\n                        console.info(\"NODE_ENV: \".concat(_vars__WEBPACK_IMPORTED_MODULE_3__.NODE_ENV, \", KEY: \").concat(_vars__WEBPACK_IMPORTED_MODULE_3__.KEY));\n                    });\n                case 12:\n                case \"end\":\n                    return _ctx1.stop();\n            }\n        }, _callee1);\n    }));\n    return _startServer.apply(this, arguments);\n}\nif (_vars__WEBPACK_IMPORTED_MODULE_3__.KEY === '0' && _vars__WEBPACK_IMPORTED_MODULE_3__.NODE_ENV !== 'development') {\n    console.error('Running in production mode with KEY set to 0. Please set KEY to a valid value then start again.');\n} else {\n    startServer();\n}\n\n\n//# sourceURL=webpack://ligitaj/./src/index.ts?");

/***/ }),

/***/ "./src/vars.ts":
/*!*********************!*\
  !*** ./src/vars.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_PORT\": () => (/* binding */ _PORT),\n/* harmony export */   \"PORT\": () => (/* binding */ PORT),\n/* harmony export */   \"_KEY\": () => (/* binding */ _KEY),\n/* harmony export */   \"KEY\": () => (/* binding */ KEY),\n/* harmony export */   \"NODE_ENV\": () => (/* binding */ NODE_ENV),\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"HOME_URL\": () => (/* binding */ HOME_URL)\n/* harmony export */ });\nvar _env = process.env;\n/** @format */ var _PORT = _env.PORT, PORT = _PORT === void 0 ? 3000 : _PORT, _KEY = _env.KEY, KEY = _KEY === void 0 ? '0' : _KEY, NODE_ENV = \"development\", BASE_URL = _env.BASE_URL, HOME_URL = _env.HOME_URL;\n\n\n//# sourceURL=webpack://ligitaj/./src/vars.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("regenerator-runtime");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;