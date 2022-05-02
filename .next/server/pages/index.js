module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/Footer */ "./src/styles/components/Footer.ts");


var _jsxFileName = "C:\\Users\\Junior\\Documents\\cavalca\\cavalca\\src\\components\\Footer\\index.tsx";



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_components_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterStyle"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_components_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterCard"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Mato Grosso"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Rua Sandro L\xFAcio Guimar\xE3es, n\xBA 2320, Loteamento Pampulha, Bairro: Jardim 23 de Setembro, V\xE1rzea Grande - Mato Grosso - CEP 78110-724, Telefone (65) 3614-9400"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_components_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterCard"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Paran\xE1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Rua Maranh\xE3o, n\xBA 1700, sala 1, Centro, Cascavel, PR, CEP: 85801-050, Telefone (45) 3219-9000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_components_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterText"], {
      children: ["Copyright 2022 \xA9  - Cavalca Constru\xE7\xF5es. Todos os direitos reservados. ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://www.flaticon.com/br/icones-gratis/construcao",
        title: "constru\xE7\xE3o \xEDcones",
        children: "Constru\xE7\xE3o \xEDcones criados por ultimatearm - Flaticon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 96
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/RentingGrid/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/RentingGrid/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_RentingGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/RentingGrid */ "./src/styles/components/RentingGrid.ts");
/* harmony import */ var _images_em_construcao_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/em-construcao.png */ "./src/images/em-construcao.png");

var _jsxFileName = "C:\\Users\\Junior\\Documents\\cavalca\\cavalca\\src\\components\\RentingGrid\\index.tsx";




const RentingGrid = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_components_RentingGrid__WEBPACK_IMPORTED_MODULE_2__["RentingGridStyle"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: _images_em_construcao_png__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RentingGrid);

/***/ }),

/***/ "./src/images/em-construcao.png":
/*!**************************************!*\
  !*** ./src/images/em-construcao.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/images/em-construcao-a846d89c0f38d39cbad74b3b1cf8d3b9.png");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RentingGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RentingGrid */ "./src/components/RentingGrid/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.tsx");


var _jsxFileName = "C:\\Users\\Junior\\Documents\\cavalca\\cavalca\\src\\pages\\index.tsx";




const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Site em constru\xE7\xE3o..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RentingGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/components/Footer.ts":
/*!*****************************************!*\
  !*** ./src/styles/components/Footer.ts ***!
  \*****************************************/
/*! exports provided: FooterStyle, FooterCard, FooterText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterStyle", function() { return FooterStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterCard", function() { return FooterCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterText", function() { return FooterText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footer__FooterStyle",
  componentId: "sc-2d16cg-0"
})(["display:flex;flex:row;background:rgb(0,0,0);background:linear-gradient(90deg,rgba(0,0,0,1) 0%,rgba(71,71,73,0.994817910074186) 100%,rgba(175,179,180,1) 100%);padding:50px;margin-top:50px;"]);
const FooterCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footer__FooterCard",
  componentId: "sc-2d16cg-1"
})(["h1{font-size:14px;}p{font-size:14px;}"]);
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footer__FooterText",
  componentId: "sc-2d16cg-2"
})(["text-align:center;background:rgb(0,0,0);background:linear-gradient(90deg,rgba(0,0,0,1) 0%,rgba(71,71,73,0.994817910074186) 100%,rgba(175,179,180,1) 100%);p{bottom:0;position:fixed;}"]);

/***/ }),

/***/ "./src/styles/components/RentingGrid.ts":
/*!**********************************************!*\
  !*** ./src/styles/components/RentingGrid.ts ***!
  \**********************************************/
/*! exports provided: RentingGridStyle, RentingGridCard, RentingGridImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentingGridStyle", function() { return RentingGridStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentingGridCard", function() { return RentingGridCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentingGridImg", function() { return RentingGridImg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const RentingGridStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "RentingGrid__RentingGridStyle",
  componentId: "u5iaw6-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;align-content:center;"]);
const RentingGridCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "RentingGrid__RentingGridCard",
  componentId: "u5iaw6-1"
})(["display:flex;flex-direction:column;justify-content:center;text-align:center;align-items:center;padding:10px;margin:10px;border:1px solid none;background-color:#616161;border-radius:4px;box-shadow:0 2px 2px 2px rgba(216,213,213,0.062);height:350px;width:400px;h1{margin-top:5px;color:#FFBF00;font-size:22px;}p{margin-top:5px;font-size:16px;}img{max-width:280px;max-height:250px;width:auto;height:auto;}"]);
const RentingGridImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "RentingGrid__RentingGridImg",
  componentId: "u5iaw6-2"
})(["align-items:center;margin:0;"]);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZW50aW5nR3JpZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9lbS1jb25zdHJ1Y2FvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Gb290ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL1JlbnRpbmdHcmlkLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJSZW50aW5nR3JpZCIsImNvbnN0cnVpbWciLCJIb21lIiwiRm9vdGVyU3R5bGUiLCJzdHlsZWQiLCJkaXYiLCJGb290ZXJDYXJkIiwiRm9vdGVyVGV4dCIsIlJlbnRpbmdHcmlkU3R5bGUiLCJSZW50aW5nR3JpZENhcmQiLCJSZW50aW5nR3JpZEltZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQs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Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb290ZXJDYXJkLCBGb290ZXJTdHlsZSwgRm9vdGVyVGV4dCB9IGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEZvb3RlclN0eWxlPlxuICAgICAgICAgICAgICAgIDxGb290ZXJDYXJkPlxuICAgICAgICAgICAgICAgICAgICA8aDE+TWF0byBHcm9zc288L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD5SdWEgU2FuZHJvIEzDumNpbyBHdWltYXLDo2VzLCBuwrogMjMyMCwgTG90ZWFtZW50byBQYW1wdWxoYSwgQmFpcnJvOiBKYXJkaW0gMjMgZGUgU2V0ZW1icm8sIFbDoXJ6ZWEgR3JhbmRlIC0gTWF0byBHcm9zc28gLSBDRVAgNzgxMTAtNzI0LCBUZWxlZm9uZSAoNjUpIDM2MTQtOTQwMFxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9Gb290ZXJDYXJkPlxuICAgICAgICAgICAgICAgIDxGb290ZXJDYXJkPlxuICAgICAgICAgICAgICAgICAgICA8aDE+UGFyYW7DoTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwPlJ1YSBNYXJhbmjDo28sIG7CuiAxNzAwLCBzYWxhIDEsIENlbnRybywgQ2FzY2F2ZWwsIFBSLCBDRVA6IDg1ODAxLTA1MCwgVGVsZWZvbmUgKDQ1KSAzMjE5LTkwMDA8L3A+XG4gICAgICAgICAgICAgICAgPC9Gb290ZXJDYXJkPlxuICAgICAgICAgICAgPC9Gb290ZXJTdHlsZT5cbiAgICAgICAgICAgIDxGb290ZXJUZXh0PkNvcHlyaWdodCAyMDIyIMKpICAtIENhdmFsY2EgQ29uc3RydcOnw7Vlcy4gVG9kb3Mgb3MgZGlyZWl0b3MgcmVzZXJ2YWRvcy4gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9ici9pY29uZXMtZ3JhdGlzL2NvbnN0cnVjYW9cIiB0aXRsZT1cImNvbnN0cnXDp8OjbyDDrWNvbmVzXCI+Q29uc3RydcOnw6NvIMOtY29uZXMgY3JpYWRvcyBwb3IgdWx0aW1hdGVhcm0gLSBGbGF0aWNvbjwvYT48L0Zvb3RlclRleHQ+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlbnRpbmdHcmlkU3R5bGUsIFJlbnRpbmdHcmlkQ2FyZCwgUmVudGluZ0dyaWRJbWcgfSBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9SZW50aW5nR3JpZCc7XG5pbXBvcnQgaW1nMSBmcm9tICcuLi8uLi9pbWFnZXMvMDEuanBnJztcbmltcG9ydCBpbWcyIGZyb20gJy4uLy4uL2ltYWdlcy8wMi5qcGcnO1xuaW1wb3J0IGltZzMgZnJvbSAnLi4vLi4vaW1hZ2VzLzAzLmpwZyc7XG5pbXBvcnQgaW1nNCBmcm9tICcuLi8uLi9pbWFnZXMvMDQuanBnJztcbmltcG9ydCBpbWc1IGZyb20gJy4uLy4uL2ltYWdlcy8wNS5qcGcnO1xuaW1wb3J0IGltZzYgZnJvbSAnLi4vLi4vaW1hZ2VzLzA2LmpwZWcnO1xuaW1wb3J0IGNvbnN0cnVpbWcgZnJvbSAnLi4vLi4vaW1hZ2VzL2VtLWNvbnN0cnVjYW8ucG5nJztcblxuY29uc3QgUmVudGluZ0dyaWQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPFJlbnRpbmdHcmlkU3R5bGU+XG4gICAgICAgICAgICA8aW1nIHNyYz17Y29uc3RydWltZ30gLz5cbiAgICAgICAgPC9SZW50aW5nR3JpZFN0eWxlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVudGluZ0dyaWQiLCJleHBvcnQgZGVmYXVsdCBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2VtLWNvbnN0cnVjYW8tYTg0NmQ4OWMwZjM4ZDM5Y2JhZDc0YjNiMWNmOGQzYjkucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFJlbnRpbmdHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvUmVudGluZ0dyaWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxoMT5TaXRlIGVtIGNvbnN0cnXDp8Ojby4uLjwvaDE+XG4gICAgIDxSZW50aW5nR3JpZCAvPlxuICAgICA8Rm9vdGVyIC8+XG4gICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBGb290ZXJTdHlsZSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiByb3c7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMSkgMCUsIHJnYmEoNzEsNzEsNzMsMC45OTQ4MTc5MTAwNzQxODYpIDEwMCUsIHJnYmEoMTc1LDE3OSwxODAsMSkgMTAwJSk7IFxuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb290ZXJDYXJkID0gc3R5bGVkLmRpdmBcbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlclRleHQgPSBzdHlsZWQuZGl2YFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSg3MSw3MSw3MywwLjk5NDgxNzkxMDA3NDE4NikgMTAwJSwgcmdiYSgxNzUsMTc5LDE4MCwxKSAxMDAlKTtcblxuICAgIHB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgfVxuYDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgUmVudGluZ0dyaWRTdHlsZSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgUmVudGluZ0dyaWRDYXJkID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHJnYmEoMjE2LCAyMTMsIDIxMywgMC4wNjIpO1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuXG4gICAgaDF7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgY29sb3I6ICNGRkJGMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cbiAgICBwe1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6MjgwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6MjUwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfSAgIFxuYDtcblxuZXhwb3J0IGNvbnN0IFJlbnRpbmdHcmlkSW1nID0gc3R5bGVkLmRpdmBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbmA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=