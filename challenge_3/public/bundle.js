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

/***/ "./client/components/KeyPad.jsx":
/*!**************************************!*\
  !*** ./client/components/KeyPad.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _KeyPadRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyPadRow */ \"./client/components/KeyPadRow.jsx\");\n\n\n\nvar KeyPad = function KeyPad(_ref) {\n  var onKeyPadPress = _ref.onKeyPadPress;\n  var inputOptions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [\"Spare\", 0, \"Strike\"]];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"keypad\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    border: \"1\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, inputOptions.map(function (row, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KeyPadRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      row: row,\n      key: \"row\".concat(index),\n      onKeyPadPress: onKeyPadPress\n    });\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyPad);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9LZXlQYWQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvS2V5UGFkLmpzeD81ZTU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBLZXlQYWRSb3cgZnJvbSBcIi4vS2V5UGFkUm93XCI7XG5cbmNvbnN0IEtleVBhZCA9IGZ1bmN0aW9uKHsgb25LZXlQYWRQcmVzcyB9KSB7XG4gIGNvbnN0IGlucHV0T3B0aW9ucyA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldLCBbXCJTcGFyZVwiLCAwLCBcIlN0cmlrZVwiXV07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwia2V5cGFkXCI+XG4gICAgICA8dGFibGUgYm9yZGVyPVwiMVwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2lucHV0T3B0aW9ucy5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxLZXlQYWRSb3dcbiAgICAgICAgICAgICAgcm93PXtyb3d9XG4gICAgICAgICAgICAgIGtleT17YHJvdyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgb25LZXlQYWRQcmVzcz17b25LZXlQYWRQcmVzc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5UGFkO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFXQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/KeyPad.jsx\n");

/***/ }),

/***/ "./client/components/KeyPadItem.jsx":
/*!******************************************!*\
  !*** ./client/components/KeyPadItem.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar KeyPadItem = function KeyPadItem(_ref) {\n  var item = _ref.item,\n      onKeyPadPress = _ref.onKeyPadPress;\n\n  var _onClick = function onClick(event) {\n    onKeyPadPress(event.target.innerHTML);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"keypad-btn\",\n    style: {\n      width: \"100px\",\n      height: \"100px\",\n      textAlign: \"center\",\n      verticalAlign: \"center\"\n    },\n    onClick: function onClick(event) {\n      return _onClick(event);\n    }\n  }, item);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyPadItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9LZXlQYWRJdGVtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0tleVBhZEl0ZW0uanN4PzQwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBLZXlQYWRJdGVtID0gZnVuY3Rpb24oeyBpdGVtLCBvbktleVBhZFByZXNzIH0pIHtcbiAgY29uc3Qgb25DbGljayA9IChldmVudCkgPT4ge1xuICAgIG9uS2V5UGFkUHJlc3MoZXZlbnQudGFyZ2V0LmlubmVySFRNTCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8dGRcbiAgICAgIGNsYXNzTmFtZT1cImtleXBhZC1idG5cIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgdmVydGljYWxBbGlnbjogXCJjZW50ZXJcIlxuICAgICAgfX1cbiAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IG9uQ2xpY2soZXZlbnQpfVxuICAgID5cbiAgICAgIHtpdGVtfVxuICAgIDwvdGQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXlQYWRJdGVtO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFSQTtBQWFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/KeyPadItem.jsx\n");

/***/ }),

/***/ "./client/components/KeyPadRow.jsx":
/*!*****************************************!*\
  !*** ./client/components/KeyPadRow.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _KeyPadItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyPadItem */ \"./client/components/KeyPadItem.jsx\");\n\n\n\nvar KeyPadRow = function KeyPadRow(_ref) {\n  var row = _ref.row,\n      onKeyPadPress = _ref.onKeyPadPress;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, row.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KeyPadItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: item,\n      onKeyPadPress: onKeyPadPress,\n      key: \"item\".concat(item)\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyPadRow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9LZXlQYWRSb3cuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvS2V5UGFkUm93LmpzeD82MTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBLZXlQYWRJdGVtIGZyb20gXCIuL0tleVBhZEl0ZW1cIjtcblxuY29uc3QgS2V5UGFkUm93ID0gZnVuY3Rpb24oeyByb3csIG9uS2V5UGFkUHJlc3MgfSkge1xuICByZXR1cm4gKFxuICAgIDx0cj5cbiAgICAgIHtyb3cubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8S2V5UGFkSXRlbVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgb25LZXlQYWRQcmVzcz17b25LZXlQYWRQcmVzc31cbiAgICAgICAgICBrZXk9e2BpdGVtJHtpdGVtfWB9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3RyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5UGFkUm93O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBU0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/KeyPadRow.jsx\n");

/***/ }),

/***/ "./client/components/ScoreCard.jsx":
/*!*****************************************!*\
  !*** ./client/components/ScoreCard.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ScoreCard = function ScoreCard(_ref) {\n  var scores = _ref.scores;\n  var frameHeaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n  var total = scores.reduce(function (total, item) {\n    return item ? total + Number(item) : total;\n  }, 0);\n  var subtotal = [];\n\n  for (var i = 0; i < scores.length; i++) {\n    var sum = void 0;\n\n    if (i % 2 === 1) {\n      if (scores[i] === null) {\n        sum = null;\n      } else {\n        sum = Number(scores[i]) + Number(scores[i - 1]);\n\n        if (i / 2 > 1) {\n          sum = sum + subtotal[subtotal.length - 1];\n        }\n      }\n\n      subtotal.push(sum);\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    border: \"1\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, frameHeaders.map(function (header, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n      colSpan: \"2\",\n      key: \"header\".concat(index)\n    }, header);\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Score\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, scores.map(function (score, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      key: \"score-\".concat(index),\n      style: {\n        width: \"48px\",\n        height: \"48px\",\n        textAlign: \"center\",\n        verticalAlign: \"center\"\n      }\n    }, score === 30 ? \"X\" : score === 10 ? \"/\" : score);\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    style: {\n      width: \"48px\",\n      height: \"48px\",\n      textAlign: \"center\",\n      verticalAlign: \"center\"\n    }\n  }, total)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, subtotal.map(function (score, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      key: \"subtotal-\".concat(index),\n      colSpan: \"2\",\n      style: {\n        height: \"48px\",\n        textAlign: \"center\",\n        verticalAlign: \"center\"\n      }\n    }, score);\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9TY29yZUNhcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvU2NvcmVDYXJkLmpzeD9hMWU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2NvcmVDYXJkID0gZnVuY3Rpb24oeyBzY29yZXMgfSkge1xuICBjb25zdCBmcmFtZUhlYWRlcnMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xuICBsZXQgdG90YWwgPSBzY29yZXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtID8gdG90YWwgKyBOdW1iZXIoaXRlbSkgOiB0b3RhbDtcbiAgfSwgMCk7XG4gIGxldCBzdWJ0b3RhbCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjb3Jlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzdW07XG4gICAgaWYgKGkgJSAyID09PSAxKSB7XG4gICAgICBpZiAoc2NvcmVzW2ldID09PSBudWxsKSB7XG4gICAgICAgIHN1bSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gPSBOdW1iZXIoc2NvcmVzW2ldKSArIE51bWJlcihzY29yZXNbaSAtIDFdKTtcbiAgICAgICAgaWYgKGkgLyAyID4gMSkge1xuICAgICAgICAgIHN1bSA9IHN1bSArIHN1YnRvdGFsW3N1YnRvdGFsLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdWJ0b3RhbC5wdXNoKHN1bSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHRhYmxlIGJvcmRlcj1cIjFcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtmcmFtZUhlYWRlcnMubWFwKChoZWFkZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiIGtleT17YGhlYWRlciR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPHRoPlNjb3JlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge3Njb3Jlcy5tYXAoKHNjb3JlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICBrZXk9e2BzY29yZS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQ4cHhcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0OHB4XCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzY29yZSA9PT0gMzAgPyBcIlhcIiA6IHNjb3JlID09PSAxMCA/IFwiL1wiIDogc2NvcmV9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQ4cHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDhweFwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0b3RhbH1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7c3VidG90YWwubWFwKChzY29yZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAga2V5PXtgc3VidG90YWwtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGNvbFNwYW49XCIyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQ4cHhcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Njb3JlfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY29yZUNhcmQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQURBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFEQTtBQWtCQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/ScoreCard.jsx\n");

/***/ }),

/***/ "./client/components/ScoreCardArea.jsx":
/*!*********************************************!*\
  !*** ./client/components/ScoreCardArea.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ScoreCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreCard */ \"./client/components/ScoreCard.jsx\");\n/* harmony import */ var _KeyPad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyPad */ \"./client/components/KeyPad.jsx\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar ScoreCardArea = function ScoreCardArea(props) {\n  // let [players, setPlayers] = useState(0);\n  // let [scoreCard, setScoreCard] = useState(0);\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      currIndex = _useState2[0],\n      setCurrIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"Click the key that corresponds to the number of pins knocked down last bowl. If your second bowl was a spare, hit 'Spare'.\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      message = _useState4[0],\n      setMessage = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      scores = _useState6[0],\n      setScores = _useState6[1];\n\n  var insertIntoScore = function insertIntoScore(number, num2) {\n    if (currIndex >= 20) {\n      setMessage(\"Error: Game is over\");\n      return;\n    }\n\n    var isNum2 = num2 !== undefined;\n    var index = isNum2 && currIndex ? currIndex + 1 : currIndex;\n    var insert = isNum2 ? [num2, number] : [number];\n    var slice1 = scores.slice(0, currIndex);\n    var slice2 = currIndex && isNum2 || !isNum2 ? scores.slice(index + 1) : scores.slice(index + 2);\n    var newScores = [].concat(_toConsumableArray(slice1), insert, _toConsumableArray(slice2));\n    setScores(newScores);\n    setCurrIndex(isNum2 ? currIndex + 2 : currIndex + 1);\n  };\n\n  var onKeyPadPress = function onKeyPadPress(selection) {\n    if (selection === \"Strike\") {\n      currIndex % 2 === 0 ? insertIntoScore(30, 0) : setMessage(\"Invalid Score: Cannot have a Strike as the Second Bowl\");\n    } else if (selection === \"Spare\") {\n      currIndex % 2 === 1 ? insertIntoScore(10) : setMessage(\"Invalid Score: Cannot have a Spare as the First Bowl\");\n    } else {\n      currIndex % 2 === 1 && Number(selection) + Number(scores[currIndex - 1]) > 9 ? setMessage(\"Invalid Score: Cannot have a score above 9 for the Second Bowl without a Spare\") : insertIntoScore(selection);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setMessage(\"\");\n  }, [scores]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScoreCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    scores: scores\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KeyPad__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onKeyPadPress: onKeyPadPress\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"message\"\n  }, \" \", message, \" \")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreCardArea);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9TY29yZUNhcmRBcmVhLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1Njb3JlQ2FyZEFyZWEuanN4PzhmMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTY29yZUNhcmQgZnJvbSBcIi4vU2NvcmVDYXJkXCI7XG5pbXBvcnQgS2V5UGFkIGZyb20gXCIuL0tleVBhZFwiO1xuXG5jb25zdCBTY29yZUNhcmRBcmVhID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgLy8gbGV0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKDApO1xuICAvLyBsZXQgW3Njb3JlQ2FyZCwgc2V0U2NvcmVDYXJkXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2N1cnJJbmRleCwgc2V0Q3VyckluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXG4gICAgXCJDbGljayB0aGUga2V5IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIG51bWJlciBvZiBwaW5zIGtub2NrZWQgZG93biBsYXN0IGJvd2wuIElmIHlvdXIgc2Vjb25kIGJvd2wgd2FzIGEgc3BhcmUsIGhpdCAnU3BhcmUnLlwiXG4gICk7XG4gIGxldCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoW1xuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbFxuICBdKTtcblxuICBjb25zdCBpbnNlcnRJbnRvU2NvcmUgPSAobnVtYmVyLCBudW0yKSA9PiB7XG4gICAgaWYgKGN1cnJJbmRleCA+PSAyMCkge1xuICAgICAgc2V0TWVzc2FnZShcIkVycm9yOiBHYW1lIGlzIG92ZXJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpc051bTIgPSBudW0yICE9PSB1bmRlZmluZWQ7XG4gICAgbGV0IGluZGV4ID0gaXNOdW0yICYmIGN1cnJJbmRleCA/IGN1cnJJbmRleCArIDEgOiBjdXJySW5kZXg7XG4gICAgbGV0IGluc2VydCA9IGlzTnVtMiA/IFtudW0yLCBudW1iZXJdIDogW251bWJlcl07XG4gICAgbGV0IHNsaWNlMSA9IHNjb3Jlcy5zbGljZSgwLCBjdXJySW5kZXgpO1xuICAgIGxldCBzbGljZTIgPVxuICAgICAgKGN1cnJJbmRleCAmJiBpc051bTIpIHx8ICFpc051bTJcbiAgICAgICAgPyBzY29yZXMuc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICA6IHNjb3Jlcy5zbGljZShpbmRleCArIDIpO1xuICAgIGxldCBuZXdTY29yZXMgPSBbLi4uc2xpY2UxLCAuLi5pbnNlcnQsIC4uLnNsaWNlMl07XG4gICAgc2V0U2NvcmVzKG5ld1Njb3Jlcyk7XG4gICAgc2V0Q3VyckluZGV4KGlzTnVtMiA/IGN1cnJJbmRleCArIDIgOiBjdXJySW5kZXggKyAxKTtcbiAgfTtcblxuICBjb25zdCBvbktleVBhZFByZXNzID0gc2VsZWN0aW9uID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uID09PSBcIlN0cmlrZVwiKSB7XG4gICAgICBjdXJySW5kZXggJSAyID09PSAwXG4gICAgICAgID8gaW5zZXJ0SW50b1Njb3JlKDMwLCAwKVxuICAgICAgICA6IHNldE1lc3NhZ2UoXCJJbnZhbGlkIFNjb3JlOiBDYW5ub3QgaGF2ZSBhIFN0cmlrZSBhcyB0aGUgU2Vjb25kIEJvd2xcIik7XG4gICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPT09IFwiU3BhcmVcIikge1xuICAgICAgY3VyckluZGV4ICUgMiA9PT0gMVxuICAgICAgICA/IGluc2VydEludG9TY29yZSgxMClcbiAgICAgICAgOiBzZXRNZXNzYWdlKFwiSW52YWxpZCBTY29yZTogQ2Fubm90IGhhdmUgYSBTcGFyZSBhcyB0aGUgRmlyc3QgQm93bFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VyckluZGV4ICUgMiA9PT0gMSAmJlxuICAgICAgTnVtYmVyKHNlbGVjdGlvbikgKyBOdW1iZXIoc2NvcmVzW2N1cnJJbmRleCAtIDFdKSA+IDlcbiAgICAgICAgPyBzZXRNZXNzYWdlKFxuICAgICAgICAgICAgXCJJbnZhbGlkIFNjb3JlOiBDYW5ub3QgaGF2ZSBhIHNjb3JlIGFib3ZlIDkgZm9yIHRoZSBTZWNvbmQgQm93bCB3aXRob3V0IGEgU3BhcmVcIlxuICAgICAgICAgIClcbiAgICAgICAgOiBpbnNlcnRJbnRvU2NvcmUoc2VsZWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICB9LCBbc2NvcmVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNjb3JlQ2FyZCBzY29yZXM9e3Njb3Jlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxLZXlQYWQgb25LZXlQYWRQcmVzcz17b25LZXlQYWRQcmVzc30gLz5cbiAgICAgICAgPGRpdiBpZD1cIm1lc3NhZ2VcIj4ge21lc3NhZ2V9IDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY29yZUNhcmRBcmVhO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/ScoreCardArea.jsx\n");

/***/ }),

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ScoreCardArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ScoreCardArea */ \"./client/components/ScoreCardArea.jsx\");\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Welcome to the Bowling Score Card App\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ScoreCardArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\"app\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzeD8xYzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgU2NvcmVDYXJkQXJlYSBmcm9tIFwiLi9jb21wb25lbnRzL1Njb3JlQ2FyZEFyZWFcIjtcblxuY29uc3QgQXBwID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFdlbGNvbWUgdG8gdGhlIEJvd2xpbmcgU2NvcmUgQ2FyZCBBcHBcbiAgICAgIDxTY29yZUNhcmRBcmVhIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/index.jsx\n");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/MyFolder/HRSF/hrsf113-mini-apps-2/challenge_3/node_modules/axios/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/axios/index.js\n");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/MyFolder/HRSF/hrsf113-mini-apps-2/challenge_3/node_modules/react-dom/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-dom/index.js\n");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/MyFolder/HRSF/hrsf113-mini-apps-2/challenge_3/node_modules/react/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react/index.js\n");

/***/ })

/******/ });