/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/MyFolder/HRSF/hrsf113-mini-apps-2/challenge_1/client/index.jsx: Unexpected token (5:16)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mApp\u001b[39m from \u001b[32m'./components/App.jsx'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m\u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mApp\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'app'\u001b[39m))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Parser.raise (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:3831:17)\n    at Parser.unexpected (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5143:16)\n    at Parser.parseExprAtom (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:6283:20)\n    at Parser.parseExprSubscripts (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5862:23)\n    at Parser.parseMaybeUnary (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5842:21)\n    at Parser.parseExprOps (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5729:23)\n    at Parser.parseMaybeConditional (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5702:23)\n    at Parser.parseMaybeAssign (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5647:21)\n    at Parser.parseExprListItem (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:6940:18)\n    at Parser.parseCallExpressionArguments (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:6070:22)\n    at Parser.parseSubscript (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5965:29)\n    at Parser.parseSubscripts (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5882:19)\n    at Parser.parseExprSubscripts (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5872:17)\n    at Parser.parseMaybeUnary (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5842:21)\n    at Parser.parseExprOps (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5729:23)\n    at Parser.parseMaybeConditional (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5702:23)\n    at Parser.parseMaybeAssign (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5647:21)\n    at Parser.parseExpression (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:5595:23)\n    at Parser.parseStatementContent (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:7378:23)\n    at Parser.parseStatement (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:7810:25)\n    at Parser.parseBlockBody (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:7797:10)\n    at Parser.parseTopLevel (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:7181:10)\n    at Parser.parse (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:8660:17)\n    at parse (/Users/MyFolder/node_modules/@babel/parser/lib/index.js:10660:38)\n    at parser (/Users/MyFolder/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/Users/MyFolder/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/Users/MyFolder/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/MyFolder/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/MyFolder/node_modules/@babel/core/lib/transform.js:34:34)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map