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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/student/hrsf125-mini-apps-1/challenge_4/client/src/index.jsx: Unexpected token (6:2)\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m  document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'app'\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:7013:17)\\n    at Parser.unexpected (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:8384:16)\\n    at Parser.parseExprAtom (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9639:20)\\n    at Parser.parseExprSubscripts (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9219:23)\\n    at Parser.parseMaybeUnary (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9199:21)\\n    at Parser.parseExprOps (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9067:23)\\n    at Parser.parseMaybeConditional (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9040:23)\\n    at Parser.parseMaybeAssign (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9000:21)\\n    at Parser.parseExprListItem (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:10295:18)\\n    at Parser.parseCallExpressionArguments (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9404:22)\\n    at Parser.parseSubscript (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9310:31)\\n    at Parser.parseSubscripts (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9240:19)\\n    at Parser.parseExprSubscripts (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9229:17)\\n    at Parser.parseMaybeUnary (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9199:21)\\n    at Parser.parseExprOps (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9067:23)\\n    at Parser.parseMaybeConditional (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9040:23)\\n    at Parser.parseMaybeAssign (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9000:21)\\n    at Parser.parseExpression (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:8950:23)\\n    at Parser.parseStatementContent (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:10787:23)\\n    at Parser.parseStatement (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:10658:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11234:25)\\n    at Parser.parseBlockBody (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11221:10)\\n    at Parser.parseTopLevel (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:10589:10)\\n    at Parser.parse (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:12192:10)\\n    at parse (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:12243:38)\\n    at parser (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/student/hrsf125-mini-apps-1/challenge_4/node_modules/@babel/core/lib/transformation/index.js:31:50)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });