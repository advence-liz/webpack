/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _map_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.delete */ "./src/map.delete.js");
    /* harmony import */ var _map_delete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_map_delete__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
    /* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_1__);

    
    console.log('引入了 polyfill Map又有了', Map);
    
    /***/ }),
    
    /***/ "./src/map.delete.js":
    /*!***************************!*\
      !*** ./src/map.delete.js ***!
      \***************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    console.log('此时Map还存在', Map);
    Map = undefined;
    console.log('此时Map为undefined', Map);
    
    /***/ })