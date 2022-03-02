{
    _source: {
      children: [
        {
          children: [
            "/******/ (function(modules) { // webpackBootstrap\n",
            {
              _source: {
                _value: " \t// install a JSONP callback for chunk loading\n \tvar parentJsonpFunction = window[\"webpackJsonp\"];\n \twindow[\"webpackJsonp\"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {\n \t\t// add \"moreModules\" to the modules object,\n \t\t// then flag all \"chunkIds\" as loaded and fire callback\n \t\tvar moduleId, chunkId, i = 0, resolves = [], result;\n \t\tfor(;i < chunkIds.length; i++) {\n \t\t\tchunkId = chunkIds[i];\n \t\t\tif(installedChunks[chunkId])\n \t\t\t\tresolves.push(installedChunks[chunkId][0]);\n \t\t\tinstalledChunks[chunkId] = 0;\n \t\t}\n \t\tfor(moduleId in moreModules) {\n \t\t\tif(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {\n \t\t\t\tmodules[moduleId] = moreModules[moduleId];\n \t\t\t}\n \t\t}\n \t\tif(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);\n \t\twhile(resolves.length)\n \t\t\tresolves.shift()();\n\n \t};\n\n \t// The module cache\n \tvar installedModules = {};\n\n \t// objects to store loaded and loading chunks\n \tvar installedChunks = {\n \t\t8: 0\n \t};\n\n \t// The require function\n \tfunction __webpack_require__(moduleId) {\n\n \t\t// Check if module is in cache\n \t\tif(installedModules[moduleId])\n \t\t\treturn installedModules[moduleId].exports;\n\n \t\t// Create a new module (and put it into the cache)\n \t\tvar module = installedModules[moduleId] = {\n \t\t\ti: moduleId,\n \t\t\tl: false,\n \t\t\texports: {}\n \t\t};\n\n \t\t// Execute the module function\n \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n \t\t// Flag the module as loaded\n \t\tmodule.l = true;\n\n \t\t// Return the exports of the module\n \t\treturn module.exports;\n \t}\n\n \t// This file contains only the entry chunk.\n \t// The chunk loading function for additional chunks\n \t__webpack_require__.e = function requireEnsure(chunkId) {\n \t\tif(installedChunks[chunkId] === 0)\n \t\t\treturn Promise.resolve();\n\n \t\t// an Promise means \"currently loading\".\n \t\tif(installedChunks[chunkId]) {\n \t\t\treturn installedChunks[chunkId][2];\n \t\t}\n \t\t// start chunk loading\n \t\tvar head = document.getElementsByTagName('head')[0];\n \t\tvar script = document.createElement('script');\n \t\tscript.type = 'text/javascript';\n \t\tscript.charset = 'utf-8';\n \t\tscript.async = true;\n \t\tscript.timeout = 120000;\n\n \t\tif (__webpack_require__.nc) {\n \t\t\tscript.setAttribute(\"nonce\", __webpack_require__.nc);\n \t\t}\n \t\tscript.src = __webpack_require__.p + \"static/js/\" + chunkId + \".\" + {\"0\":\"0dadc1dddc09f05c1c50\",\"1\":\"7fd7d6a777303a9a02da\",\"2\":\"766582bbef3d5c878c87\",\"3\":\"f79490b6dae118184a2e\",\"4\":\"ceba5bcead9902832ffe\",\"5\":\"498ba56337977b670100\",\"6\":\"bf43826d80588b92057a\",\"7\":\"feadbee6ec57adfe89dd\"}[chunkId] + \".js\";\n \t\tvar timeout = setTimeout(onScriptComplete, 120000);\n \t\tscript.onerror = script.onload = onScriptComplete;\n \t\tfunction onScriptComplete() {\n \t\t\t// avoid mem leaks in IE.\n \t\t\tscript.onerror = script.onload = null;\n \t\t\tclearTimeout(timeout);\n \t\t\tvar chunk = installedChunks[chunkId];\n \t\t\tif(chunk !== 0) {\n \t\t\t\tif(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));\n \t\t\t\tinstalledChunks[chunkId] = undefined;\n \t\t\t}\n \t\t};\n\n \t\tvar promise = new Promise(function(resolve, reject) {\n \t\t\tinstalledChunks[chunkId] = [resolve, reject];\n \t\t});\n \t\tinstalledChunks[chunkId][2] = promise;\n\n \t\thead.appendChild(script);\n \t\treturn promise;\n \t};\n\n \t// expose the modules object (__webpack_modules__)\n \t__webpack_require__.m = modules;\n\n \t// expose the module cache\n \t__webpack_require__.c = installedModules;\n\n \t// identity function for calling harmony imports with the correct context\n \t__webpack_require__.i = function(value) { return value; };\n\n \t// define getter function for harmony exports\n \t__webpack_require__.d = function(exports, name, getter) {\n \t\tif(!__webpack_require__.o(exports, name)) {\n \t\t\tObject.defineProperty(exports, name, {\n \t\t\t\tconfigurable: false,\n \t\t\t\tenumerable: true,\n \t\t\t\tget: getter\n \t\t\t});\n \t\t}\n \t};\n\n \t// getDefaultExport function for compatibility with non-harmony modules\n \t__webpack_require__.n = function(module) {\n \t\tvar getter = module && module.__esModule ?\n \t\t\tfunction getDefault() { return module['default']; } :\n \t\t\tfunction getModuleExports() { return module; };\n \t\t__webpack_require__.d(getter, 'a', getter);\n \t\treturn getter;\n \t};\n\n \t// Object.prototype.hasOwnProperty.call\n \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n\n \t// __webpack_public_path__\n \t__webpack_require__.p = \"/hfe/block/\";\n\n \t// on error function for async loading\n \t__webpack_require__.oe = function(err) { console.error(err); throw err; };\n\n \t// Load entry module and return exports\n \treturn __webpack_require__(__webpack_require__.s = 115);\n",
                _name: "webpack/bootstrap 471842e31a1a27c2eedf",
              },
              _prefix: "/******/",
            },
            "/******/ })\n",
            "/************************************************************************/\n",
            "/******/ (",
            {
              children: [
                "[\n",
                "/* 0 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_global.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n",
                      _cachedSize: 369,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 1 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var store = require('./_shared')('wks');\nvar uid = require('./_uid');\nvar Symbol = require('./_global').Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_wks.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            91,
                            101,
                            "0",
                            4,
                          ],
                          [
                            83,
                            89,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            59,
                            66,
                            "40",
                            2,
                          ],
                          [
                            51,
                            57,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            20,
                            30,
                            "36",
                            0,
                          ],
                          [
                            12,
                            18,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var store = __webpack_require__(36)('wks');\nvar uid = __webpack_require__(40);\nvar Symbol = __webpack_require__(0).Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n",
                      _cachedSize: 369,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 2 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var isObject = require('./_is-object');\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_an-object.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            23,
                            36,
                            "6",
                            0,
                          ],
                          [
                            15,
                            21,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var isObject = __webpack_require__(6);\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n",
                      _cachedSize: 153,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 3 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_core.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n",
                      _cachedSize: 123,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 4 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var dP = require('./_object-dp');\nvar createDesc = require('./_property-desc');\nmodule.exports = require('./_descriptors') ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_hide.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            105,
                            120,
                            "5",
                            4,
                          ],
                          [
                            97,
                            103,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            59,
                            76,
                            "35",
                            2,
                          ],
                          [
                            51,
                            57,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            17,
                            30,
                            "13",
                            0,
                          ],
                          [
                            9,
                            15,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var dP = __webpack_require__(13);\nvar createDesc = __webpack_require__(35);\nmodule.exports = __webpack_require__(5) ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n",
                      _cachedSize: 279,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 5 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// Thank's IE8 for his funny defineProperty\nmodule.exports = !require('./_fails')(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_descriptors.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            70,
                            79,
                            "30",
                            0,
                          ],
                          [
                            62,
                            68,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(30)(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n",
                      _cachedSize: 188,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 6 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_is-object.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n",
                      _cachedSize: 110,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 7 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = {};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_iterators.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = {};\n",
                      _cachedSize: 21,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 8 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_a-function.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n",
                      _cachedSize: 125,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 9 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_cof.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n",
                      _cachedSize: 106,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 10 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// optional / simple context binding\nvar aFunction = require('./_a-function');\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_ctx.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            61,
                            75,
                            "8",
                            0,
                          ],
                          [
                            53,
                            59,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// optional / simple context binding\nvar aFunction = __webpack_require__(8);\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n",
                      _cachedSize: 518,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 11 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var global = require('./_global');\nvar core = require('./_core');\nvar ctx = require('./_ctx');\nvar hide = require('./_hide');\nvar has = require('./_has');\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_export.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            144,
                            151,
                            "12",
                            8,
                          ],
                          [
                            136,
                            142,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            114,
                            122,
                            "4",
                            6,
                          ],
                          [
                            106,
                            112,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            84,
                            91,
                            "10",
                            4,
                          ],
                          [
                            76,
                            82,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            54,
                            62,
                            "3",
                            2,
                          ],
                          [
                            46,
                            52,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            21,
                            31,
                            "0",
                            0,
                          ],
                          [
                            13,
                            19,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var global = __webpack_require__(0);\nvar core = __webpack_require__(3);\nvar ctx = __webpack_require__(10);\nvar hide = __webpack_require__(4);\nvar has = __webpack_require__(12);\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n",
                      _cachedSize: 2371,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 12 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_has.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n",
                      _cachedSize: 120,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 13 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var anObject = require('./_an-object');\nvar IE8_DOM_DEFINE = require('./_ie8-dom-define');\nvar toPrimitive = require('./_to-primitive');\nvar dP = Object.defineProperty;\n\nexports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_object-dp.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            190,
                            205,
                            "5",
                            6,
                          ],
                          [
                            182,
                            188,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            117,
                            133,
                            "90",
                            4,
                          ],
                          [
                            109,
                            115,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            69,
                            87,
                            "70",
                            2,
                          ],
                          [
                            61,
                            67,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            23,
                            36,
                            "2",
                            0,
                          ],
                          [
                            15,
                            21,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var anObject = __webpack_require__(2);\nvar IE8_DOM_DEFINE = __webpack_require__(70);\nvar toPrimitive = __webpack_require__(90);\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n",
                      _cachedSize: 588,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 14 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-template/node_modules/webpack/buildin/global.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n",
                      _cachedSize: 509,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 15 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_defined.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n",
                      _cachedSize: 162,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 16 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var isObject = require('./_is-object');\nvar document = require('./_global').document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_dom-create.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            63,
                            73,
                            "0",
                            2,
                          ],
                          [
                            55,
                            61,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            23,
                            36,
                            "6",
                            0,
                          ],
                          [
                            15,
                            21,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var isObject = __webpack_require__(6);\nvar document = __webpack_require__(0).document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n",
                      _cachedSize: 290,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 17 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = true;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_library.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = true;\n",
                      _cachedSize: 23,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 18 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = require('./_a-function');\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_new-promise-capability.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            74,
                            88,
                            "8",
                            1,
                          ],
                          [
                            66,
                            72,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(8);\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n",
                      _cachedSize: 489,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 19 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var def = require('./_object-dp').f;\nvar has = require('./_has');\nvar TAG = require('./_wks')('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_set-to-string-tag.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            84,
                            91,
                            "1",
                            4,
                          ],
                          [
                            76,
                            82,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            55,
                            62,
                            "12",
                            2,
                          ],
                          [
                            47,
                            53,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            18,
                            31,
                            "13",
                            0,
                          ],
                          [
                            10,
                            16,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var def = __webpack_require__(13).f;\nvar has = __webpack_require__(12);\nvar TAG = __webpack_require__(1)('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n",
                      _cachedSize: 273,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 20 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var shared = require('./_shared')('keys');\nvar uid = require('./_uid');\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_shared-key.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            61,
                            68,
                            "40",
                            2,
                          ],
                          [
                            53,
                            59,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            21,
                            31,
                            "36",
                            0,
                          ],
                          [
                            13,
                            19,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var shared = __webpack_require__(36)('keys');\nvar uid = __webpack_require__(40);\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n",
                      _cachedSize: 168,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 21 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_to-integer.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n",
                      _cachedSize: 161,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 22 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = require('./_iobject');\nvar defined = require('./_defined');\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_to-iobject.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            135,
                            146,
                            "15",
                            2,
                          ],
                          [
                            127,
                            133,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            98,
                            109,
                            "72",
                            0,
                          ],
                          [
                            90,
                            96,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(72);\nvar defined = __webpack_require__(15);\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n",
                      _cachedSize: 221,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 23 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "//extend simple implementation\n\nmodule.exports = function (a, b, c, d, e, f) {\n  var objs = [b, c, d, e, f].filter(Boolean);\n  var target = a || {};\n  objs.forEach(function (source) {\n    for (var key in source) {\n      if (source.hasOwnProperty(key)) {\n        target[key] = source[key];\n      }\n    }\n  });\n  return target;\n};",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/common/mixin.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "//extend simple implementation\n\nmodule.exports = function (a, b, c, d, e, f) {\n  var objs = [b, c, d, e, f].filter(Boolean);\n  var target = a || {};\n  objs.forEach(function (source) {\n    for (var key in source) {\n      if (source.hasOwnProperty(key)) {\n        target[key] = source[key];\n      }\n    }\n  });\n  return target;\n};",
                      _cachedSize: 328,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 24 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "//版本比较方法\nmodule.exports = {\n  eq: function(a, b) {\n    return a === b;\n  },\n  gt: function(a, b) {\n    var splitedA = a ? a.split('.') : [];\n    var splitedB = b ? b.split('.') : [];\n    [0,1,2].forEach(function(i){\n      splitedA[i] = splitedA[i] || 0;\n      splitedB[i] = splitedB[i] || 0;\n    });\n    if (+splitedA[0] !== +splitedB[0]) {\n      return +splitedA[0] > +splitedB[0];\n    } else {\n      if (+splitedA[1] !== +splitedB[1]) {\n        return +splitedA[1] > +splitedB[1];\n      } else {\n        return +splitedA[2] > +(splitedB[2] || 0);\n      }\n    }\n  },\n  lt: function(a, b) {\n    return !this.gte(a, b);\n  },\n  gte: function(a, b) {\n    return this.eq(a, b) || this.gt(a, b);\n  },\n  lte: function(a, b) {\n    return this.eq(a, b) || this.lt(a, b);\n  }\n};",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/common/semver.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "//版本比较方法\nmodule.exports = {\n  eq: function(a, b) {\n    return a === b;\n  },\n  gt: function(a, b) {\n    var splitedA = a ? a.split('.') : [];\n    var splitedB = b ? b.split('.') : [];\n    [0,1,2].forEach(function(i){\n      splitedA[i] = splitedA[i] || 0;\n      splitedB[i] = splitedB[i] || 0;\n    });\n    if (+splitedA[0] !== +splitedB[0]) {\n      return +splitedA[0] > +splitedB[0];\n    } else {\n      if (+splitedA[1] !== +splitedB[1]) {\n        return +splitedA[1] > +splitedB[1];\n      } else {\n        return +splitedA[2] > +(splitedB[2] || 0);\n      }\n    }\n  },\n  lt: function(a, b) {\n    return !this.gte(a, b);\n  },\n  gte: function(a, b) {\n    return this.eq(a, b) || this.gt(a, b);\n  },\n  lte: function(a, b) {\n    return this.eq(a, b) || this.lt(a, b);\n  }\n};",
                      _cachedSize: 769,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 25 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// API set to implement\nmodule.exports = [\n    'config',\n\n    'isApiSupported',\n    'getApisVersion',\n    'getUA',\n    'Semver',\n    'checkAuthorization',\n\n    'getFingerprint',\n    'getUserInfo',\n    'getDeviceInfo',\n    'login',\n    'logout',\n    'sendSMS',\n    'getContactList',\n    'pickContact',\n\n    'getCity',\n    'getLocationCity',\n    'getLocation',\n    'getNetworkType',\n    'pickCity',\n\n    'share',\n    'configShare',\n\n    'openWebview',\n    'closeWebview',\n    'jumpWebview',\n\n    'setTitle',\n    'setImageTitle',\n    'setNavButtons',\n    'setNavigationBarHidden',\n    'setBackgroundColor',\n    'setBouncesEnabled',\n    'setStatusBarStyle',\n    'setPullDown',\n    'stopPullDown',\n    'setLLButton',\n    'setLRButton',\n    'setRRButton',\n    'setRLButton',\n    'setSearchBar',\n    'scanQRCode',\n    'showKeyboard',\n\n    'store',\n    'retrieve',\n\n    'alert',\n    'confirm',\n    'prompt',\n    'sendLog',\n\n    'chooseImage',\n    'previewImage',\n    'uploadImage',\n    'downloadImage',\n\n    'publish',\n    'subscribe',\n    'unsubscribe',\n\n    'setResult',\n    'getResult',\n\n    'shareImage',\n    'sendLog',\n    \n    'shareMiniProgram',\n    'addRequestSignature',\n    'stopLocating',\n    \n    'setStorage',\n    'getStorage',\n    'clearStorage',\n\n    'getAppInfo',\n    'getWifiInfo',\n    'getImageInfo',\n\n    'setupEvent',\n\n    'setTitleBar',\n    'resetTitleBar',\n    'setTitleBarAction',\n    'addTitleBarElement',\n    'removeTitleBarElement',\n    'replaceTitleBarElement',\n\n    'requestPermission',\n    'openPage',\n    'jumpPage',\n    'closePage',\n\n    'getServiceInfo',\n    'getPageState',\n    'setBrightness',\n    'getBrightness',\n    'encryptData',\n    'decryptData',\n    'uploadFile',\n    'setAppCookie',\n\n    'compressImage',\n    'downloadFile',\n    'syncLog',\n    'getVideoFrame',\n    'chooseVideo',\n    'playVideo',\n    'getNetworkTime',\n  ];\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/api.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// API set to implement\nmodule.exports = [\n    'config',\n\n    'isApiSupported',\n    'getApisVersion',\n    'getUA',\n    'Semver',\n    'checkAuthorization',\n\n    'getFingerprint',\n    'getUserInfo',\n    'getDeviceInfo',\n    'login',\n    'logout',\n    'sendSMS',\n    'getContactList',\n    'pickContact',\n\n    'getCity',\n    'getLocationCity',\n    'getLocation',\n    'getNetworkType',\n    'pickCity',\n\n    'share',\n    'configShare',\n\n    'openWebview',\n    'closeWebview',\n    'jumpWebview',\n\n    'setTitle',\n    'setImageTitle',\n    'setNavButtons',\n    'setNavigationBarHidden',\n    'setBackgroundColor',\n    'setBouncesEnabled',\n    'setStatusBarStyle',\n    'setPullDown',\n    'stopPullDown',\n    'setLLButton',\n    'setLRButton',\n    'setRRButton',\n    'setRLButton',\n    'setSearchBar',\n    'scanQRCode',\n    'showKeyboard',\n\n    'store',\n    'retrieve',\n\n    'alert',\n    'confirm',\n    'prompt',\n    'sendLog',\n\n    'chooseImage',\n    'previewImage',\n    'uploadImage',\n    'downloadImage',\n\n    'publish',\n    'subscribe',\n    'unsubscribe',\n\n    'setResult',\n    'getResult',\n\n    'shareImage',\n    'sendLog',\n    \n    'shareMiniProgram',\n    'addRequestSignature',\n    'stopLocating',\n    \n    'setStorage',\n    'getStorage',\n    'clearStorage',\n\n    'getAppInfo',\n    'getWifiInfo',\n    'getImageInfo',\n\n    'setupEvent',\n\n    'setTitleBar',\n    'resetTitleBar',\n    'setTitleBarAction',\n    'addTitleBarElement',\n    'removeTitleBarElement',\n    'replaceTitleBarElement',\n\n    'requestPermission',\n    'openPage',\n    'jumpPage',\n    'closePage',\n\n    'getServiceInfo',\n    'getPageState',\n    'setBrightness',\n    'getBrightness',\n    'encryptData',\n    'decryptData',\n    'uploadFile',\n    'setAppCookie',\n\n    'compressImage',\n    'downloadFile',\n    'syncLog',\n    'getVideoFrame',\n    'chooseVideo',\n    'playVideo',\n    'getNetworkTime',\n  ];\n",
                      _cachedSize: 1858,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 26 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "/*\n * @Author: sunhui04\n * @Date: 2021-09-23 14:11:01\n */\nvar KNB = require('./compiled/interface');\n\nvar env = require('./env');\nif (env.isDPApp) {\n  require.ensure([],function(require) {\n    KNB.load(require('./compiled/dpapp'));\n    KNB._ready();\n  },'dpapp');\n} else if (env.isMTNB) {\n  require.ensure([],function(require) {\n    KNB.load(require('./compiled/mtnb'));\n    KNB._ready();\n  },'mtnb');\n} else if (env.isHBNB) {\n  require.ensure([],function(require) {\n    KNB.load(require('./compiled/hbnb'));\n    KNB._ready();\n  },'hbnb');\n} else if ((env.isWX || env.isMiniProgramWebview) && typeof _KNB_IGNORE_WECHAT === 'undefined') {\n  require.ensure([],function(require) {\n    KNB.load(require('./compiled/wx'));\n    KNB._ready();\n  },'wx');\n} else if (env.isTitans) {\n  require.ensure([],function(require) {\n    KNB.load(require('./compiled/titans'));\n    KNB._ready();\n  },'titans');\n} else if (env.isDPZeus) {\n  require.ensure([],function(require) {\n    KNB.load(require('./compiled/dpzeus'));\n    KNB._ready();\n  },'dpzeus');\n} else {\n  KNB._ready();\n}\n\nmodule.exports = KNB;\n\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/bundle.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1023,
                            1032,
                            ").bind(null, __webpack_require__)).catch(__webpack_require__.oe)",
                            25,
                          ],
                          [
                            979,
                            997,
                            "117",
                            26,
                          ],
                          [
                            971,
                            977,
                            "__webpack_require__",
                            27,
                          ],
                          [
                            920,
                            937,
                            "__webpack_require__.e/* require.ensure */(2).then((",
                            24,
                          ],
                          [
                            879,
                            888,
                            ").bind(null, __webpack_require__)).catch(__webpack_require__.oe)",
                            21,
                          ],
                          [
                            835,
                            853,
                            "120",
                            22,
                          ],
                          [
                            827,
                            833,
                            "__webpack_require__",
                            23,
                          ],
                          [
                            776,
                            793,
                            "__webpack_require__.e/* require.ensure */(3).then((",
                            20,
                          ],
                          [
                            739,
                            744,
                            ").bind(null, __webpack_require__)).catch(__webpack_require__.oe)",
                            17,
                          ],
                          [
                            699,
                            713,
                            "121",
                            18,
                          ],
                          [
                            691,
                            697,
                            "__webpack_require__",
                            19,
                          ],
                          [
                            640,
                            657,
                            "__webpack_require__.e/* require.ensure */(4).then((",
                            16,
                          ],
                          [
                            530,
                            537,
                            ").bind(null, __webpack_require__)).catch(__webpack_require__.oe)",
                            13,
                          ],
                          [
                            488,
                            504,
                            "118",
                            14,
                          ],
                          [
                            480,
                            486,
                            "__webpack_require__",
                            15,
                          ],
                          [
                            429,
                            446,
                            "__webpack_require__.e/* require.ensure */(0).then((",
                            12,
                          ],
                          [
                            392,
                            399,
                            ").bind(null, __webpack_require__)).catch(__webpack_require__.oe)",
                            9,
                          ],
                          [
                            350,
                            366,
                            "119",
                            10,
                          ],
                          [
                            342,
                            348,
                            "__webpack_require__",
                            11,
                          ],
                          [
                            291,
                            308,
                            "__webpack_require__.e/* require.ensure */(5).then((",
                            8,
                          ],
                          [
                            253,
                            261,
                            ").bind(null, __webpack_require__)).catch(__webpack_require__.oe)",
                            5,
                          ],
                          [
                            210,
                            227,
                            "116",
                            6,
                          ],
                          [
                            202,
                            208,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            151,
                            168,
                            "__webpack_require__.e/* require.ensure */(1).then((",
                            4,
                          ],
                          [
                            120,
                            126,
                            "27",
                            2,
                          ],
                          [
                            112,
                            118,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            76,
                            97,
                            "50",
                            0,
                          ],
                          [
                            68,
                            74,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "/*\n * @Author: sunhui04\n * @Date: 2021-09-23 14:11:01\n */\nvar KNB = __webpack_require__(50);\n\nvar env = __webpack_require__(27);\nif (env.isDPApp) {\n  __webpack_require__.e/* require.ensure */(1).then((function(require) {\n    KNB.load(__webpack_require__(116));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if (env.isMTNB) {\n  __webpack_require__.e/* require.ensure */(5).then((function(require) {\n    KNB.load(__webpack_require__(119));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if (env.isHBNB) {\n  __webpack_require__.e/* require.ensure */(0).then((function(require) {\n    KNB.load(__webpack_require__(118));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if ((env.isWX || env.isMiniProgramWebview) && typeof _KNB_IGNORE_WECHAT === 'undefined') {\n  __webpack_require__.e/* require.ensure */(4).then((function(require) {\n    KNB.load(__webpack_require__(121));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if (env.isTitans) {\n  __webpack_require__.e/* require.ensure */(3).then((function(require) {\n    KNB.load(__webpack_require__(120));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if (env.isDPZeus) {\n  __webpack_require__.e/* require.ensure */(2).then((function(require) {\n    KNB.load(__webpack_require__(117));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else {\n  KNB._ready();\n}\n\nmodule.exports = KNB;\n\n",
                      _cachedSize: 1601,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 27 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "function getENV() {\n  var semver = require('./compiled/common/semver'); \n  // make sure the script not throwing error under nodejs.\n  var win  = typeof window !== 'undefined'    ? window              : {};\n  var href = typeof location !== 'undefined'  ? location.href       : '';\n  var ua   = typeof navigator !== 'undefined' ? navigator.userAgent : '';\n  var is_stupid_ios = /ios|iphone|ipad|ipod/i.test(ua); // iOS下UA非常不可靠\n  var titansXVersionParse = ua.match(/titans(no)?x\\/([\\w.]+)/i);\n  var titansXVersion = titansXVersionParse ? titansXVersionParse[2] : '0';\n\n  //优先加载自定义环境\n  if (!!win._KNB_CUSTOM_ENV) {\n    return {\n      isWX: !!win._KNB_WX,\n      isMTNB: !!win._KNB_MTNB,\n      isTitans: !!win._KNB_TITANS,\n      isHBNB: !!win._KNB_HBNB,\n      isDPApp: !!win._KNB_DPAPP\n    }\n  }\n\n  var regDP = win._KNB_REGDP || /dp\\/com\\.dianping\\.[\\w\\.]+\\/([\\d\\.]+)/i;\n  var regMT = win._KNB_REGMT || /moviepro|MTNB||MOMA/i;\n  var regHB = win._KNB_REGHB || /iHotel|HBNB/i;\n  var regWX = win._KNB_REGWX || /micromessenger/i;\n  var regTitans = win._KNB_REGTITANS || /TitansX/i;\n  var regDPZeus = win._KNB_DPZEUS || /merchant\\.mobile|dpcrm|mp\\.mobile/i;\n\n  var isWX     = regWX.test(ua);\n  var isDPApp  = regDP.test(ua);\n  var isMTNB   = regMT.test(ua) || /f=(iphone|ipad|ipod|android)/.test(href);\n  var isHBNB   = regHB.test(ua) && !win._MTNB;\n  var isDPZeus = regDPZeus.test(ua);\n  var isTitans = function() {\n    if (href.indexOf('knb_force_use_titans') > -1) return true;\n    // 限制 7.5 版本 HBNB 加载至 Titans\n    if (is_stupid_ios && semver.gt('11.0', titansXVersion)) return !!win._TitansX;\n    return regTitans.test(ua);\n  }();\n  var isMiniProgramWebview = win.__wxjs_environment === 'miniprogram';\n\n  var isNative = isDPApp || isHBNB || isTitans || regMT.test(ua);\n  // KNB.isNative 去掉小程序判断不知影响是否较大 ???\n  //TitansNoX和点评包名的优先级高于其他，修复点评下引入美团实现的bug，为了兼容点评小程序，所以 WX 优先级按理最高\n  if (/titansnox/i.test(ua) && isDPApp) {\n    isTitans = isHBNB = isWX = isMTNB = isDPZeus = false;\n  }\n  // order matters\n  if (isWX)     { isTitans = isHBNB = isDPApp = isMTNB = isDPZeus = false; }\n  if (isDPZeus) { isTitans = isWX   = isMTNB  = isHBNB = isDPApp  = false; }\n  if (isTitans) { isDPApp  = isWX   = isMTNB  = isHBNB = isDPZeus = false; }\n  if (isHBNB)   { isTitans = isWX   = isDPApp = isMTNB = isDPZeus = false; }\n  if (isMTNB)   { isTitans = isWX   = isDPApp = isHBNB = isDPZeus = false; }\n  if (isDPApp)  { isDPApp = isWX   = isMTNB  = isHBNB = isDPZeus = false; isTitans = true;}\n\n  return {\n    isWX: isWX,\n    isTitans: isTitans,\n    isHBNB: isHBNB,\n    isDPApp: isDPApp,\n    isMTNB: isMTNB,\n    isNative: isNative,\n    isDPZeus: isDPZeus,\n    isMiniProgramWebview: isMiniProgramWebview,\n  };\n}\n\nmodule.exports = getENV();\nmodule.exports.getENV = getENV;  // make it testable\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/env.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            43,
                            68,
                            "24",
                            0,
                          ],
                          [
                            35,
                            41,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "function getENV() {\n  var semver = __webpack_require__(24); \n  // make sure the script not throwing error under nodejs.\n  var win  = typeof window !== 'undefined'    ? window              : {};\n  var href = typeof location !== 'undefined'  ? location.href       : '';\n  var ua   = typeof navigator !== 'undefined' ? navigator.userAgent : '';\n  var is_stupid_ios = /ios|iphone|ipad|ipod/i.test(ua); // iOS下UA非常不可靠\n  var titansXVersionParse = ua.match(/titans(no)?x\\/([\\w.]+)/i);\n  var titansXVersion = titansXVersionParse ? titansXVersionParse[2] : '0';\n\n  //优先加载自定义环境\n  if (!!win._KNB_CUSTOM_ENV) {\n    return {\n      isWX: !!win._KNB_WX,\n      isMTNB: !!win._KNB_MTNB,\n      isTitans: !!win._KNB_TITANS,\n      isHBNB: !!win._KNB_HBNB,\n      isDPApp: !!win._KNB_DPAPP\n    }\n  }\n\n  var regDP = win._KNB_REGDP || /dp\\/com\\.dianping\\.[\\w\\.]+\\/([\\d\\.]+)/i;\n  var regMT = win._KNB_REGMT || /moviepro|MTNB||MOMA/i;\n  var regHB = win._KNB_REGHB || /iHotel|HBNB/i;\n  var regWX = win._KNB_REGWX || /micromessenger/i;\n  var regTitans = win._KNB_REGTITANS || /TitansX/i;\n  var regDPZeus = win._KNB_DPZEUS || /merchant\\.mobile|dpcrm|mp\\.mobile/i;\n\n  var isWX     = regWX.test(ua);\n  var isDPApp  = regDP.test(ua);\n  var isMTNB   = regMT.test(ua) || /f=(iphone|ipad|ipod|android)/.test(href);\n  var isHBNB   = regHB.test(ua) && !win._MTNB;\n  var isDPZeus = regDPZeus.test(ua);\n  var isTitans = function() {\n    if (href.indexOf('knb_force_use_titans') > -1) return true;\n    // 限制 7.5 版本 HBNB 加载至 Titans\n    if (is_stupid_ios && semver.gt('11.0', titansXVersion)) return !!win._TitansX;\n    return regTitans.test(ua);\n  }();\n  var isMiniProgramWebview = win.__wxjs_environment === 'miniprogram';\n\n  var isNative = isDPApp || isHBNB || isTitans || regMT.test(ua);\n  // KNB.isNative 去掉小程序判断不知影响是否较大 ???\n  //TitansNoX和点评包名的优先级高于其他，修复点评下引入美团实现的bug，为了兼容点评小程序，所以 WX 优先级按理最高\n  if (/titansnox/i.test(ua) && isDPApp) {\n    isTitans = isHBNB = isWX = isMTNB = isDPZeus = false;\n  }\n  // order matters\n  if (isWX)     { isTitans = isHBNB = isDPApp = isMTNB = isDPZeus = false; }\n  if (isDPZeus) { isTitans = isWX   = isMTNB  = isHBNB = isDPApp  = false; }\n  if (isTitans) { isDPApp  = isWX   = isMTNB  = isHBNB = isDPZeus = false; }\n  if (isHBNB)   { isTitans = isWX   = isDPApp = isMTNB = isDPZeus = false; }\n  if (isMTNB)   { isTitans = isWX   = isDPApp = isHBNB = isDPZeus = false; }\n  if (isDPApp)  { isDPApp = isWX   = isMTNB  = isHBNB = isDPZeus = false; isTitans = true;}\n\n  return {\n    isWX: isWX,\n    isTitans: isTitans,\n    isHBNB: isHBNB,\n    isDPApp: isDPApp,\n    isMTNB: isMTNB,\n    isNative: isNative,\n    isDPZeus: isDPZeus,\n    isMiniProgramWebview: isMiniProgramWebview,\n  };\n}\n\nmodule.exports = getENV();\nmodule.exports.getENV = getENV;  // make it testable\n",
                      _cachedSize: 2760,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 28 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = require('./_cof');\nvar TAG = require('./_wks')('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_classof.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            104,
                            111,
                            "1",
                            2,
                          ],
                          [
                            96,
                            102,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            75,
                            82,
                            "9",
                            0,
                          ],
                          [
                            67,
                            73,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(9);\nvar TAG = __webpack_require__(1)('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n",
                      _cachedSize: 728,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 29 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_enum-bug-keys.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n",
                      _cachedSize: 160,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 30 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_fails.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n",
                      _cachedSize: 104,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 31 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var document = require('./_global').document;\nmodule.exports = document && document.documentElement;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_html.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            23,
                            33,
                            "0",
                            0,
                          ],
                          [
                            15,
                            21,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var document = __webpack_require__(0).document;\nmodule.exports = document && document.documentElement;\n",
                      _cachedSize: 103,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 32 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\nvar LIBRARY = require('./_library');\nvar $export = require('./_export');\nvar redefine = require('./_redefine');\nvar hide = require('./_hide');\nvar Iterators = require('./_iterators');\nvar $iterCreate = require('./_iter-create');\nvar setToStringTag = require('./_set-to-string-tag');\nvar getPrototypeOf = require('./_object-gpo');\nvar ITERATOR = require('./_wks')('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_iter-define.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            367,
                            374,
                            "1",
                            17,
                          ],
                          [
                            359,
                            365,
                            "__webpack_require__",
                            18,
                          ],
                          [
                            326,
                            340,
                            "81",
                            15,
                          ],
                          [
                            318,
                            324,
                            "__webpack_require__",
                            16,
                          ],
                          [
                            272,
                            293,
                            "19",
                            13,
                          ],
                          [
                            264,
                            270,
                            "__webpack_require__",
                            14,
                          ],
                          [
                            224,
                            239,
                            "75",
                            11,
                          ],
                          [
                            216,
                            222,
                            "__webpack_require__",
                            12,
                          ],
                          [
                            181,
                            194,
                            "7",
                            9,
                          ],
                          [
                            173,
                            179,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            145,
                            153,
                            "4",
                            7,
                          ],
                          [
                            137,
                            143,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            110,
                            122,
                            "85",
                            5,
                          ],
                          [
                            102,
                            108,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            73,
                            83,
                            "11",
                            3,
                          ],
                          [
                            65,
                            71,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            36,
                            47,
                            "17",
                            1,
                          ],
                          [
                            28,
                            34,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\nvar LIBRARY = __webpack_require__(17);\nvar $export = __webpack_require__(11);\nvar redefine = __webpack_require__(85);\nvar hide = __webpack_require__(4);\nvar Iterators = __webpack_require__(7);\nvar $iterCreate = __webpack_require__(75);\nvar setToStringTag = __webpack_require__(19);\nvar getPrototypeOf = __webpack_require__(81);\nvar ITERATOR = __webpack_require__(1)('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n",
                      _cachedSize: 2769,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 33 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_perform.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n",
                      _cachedSize: 132,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 34 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var anObject = require('./_an-object');\nvar isObject = require('./_is-object');\nvar newPromiseCapability = require('./_new-promise-capability');\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_promise-resolve.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            115,
                            141,
                            "18",
                            4,
                          ],
                          [
                            107,
                            113,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            63,
                            76,
                            "6",
                            2,
                          ],
                          [
                            55,
                            61,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            23,
                            36,
                            "2",
                            0,
                          ],
                          [
                            15,
                            21,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var anObject = __webpack_require__(2);\nvar isObject = __webpack_require__(6);\nvar newPromiseCapability = __webpack_require__(18);\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n",
                      _cachedSize: 382,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 35 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_property-desc.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n",
                      _cachedSize: 173,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 36 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var core = require('./_core');\nvar global = require('./_global');\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: require('./_library') ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_shared.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            336,
                            347,
                            "17",
                            4,
                          ],
                          [
                            328,
                            334,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            52,
                            62,
                            "0",
                            2,
                          ],
                          [
                            44,
                            50,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            19,
                            27,
                            "3",
                            0,
                          ],
                          [
                            11,
                            17,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var core = __webpack_require__(3);\nvar global = __webpack_require__(0);\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(17) ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n",
                      _cachedSize: 435,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 37 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = require('./_an-object');\nvar aFunction = require('./_a-function');\nvar SPECIES = require('./_wks')('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_species-constructor.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            156,
                            163,
                            "1",
                            4,
                          ],
                          [
                            148,
                            154,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            116,
                            130,
                            "8",
                            2,
                          ],
                          [
                            108,
                            114,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            75,
                            88,
                            "2",
                            0,
                          ],
                          [
                            67,
                            73,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(2);\nvar aFunction = __webpack_require__(8);\nvar SPECIES = __webpack_require__(1)('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n",
                      _cachedSize: 350,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 38 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var ctx = require('./_ctx');\nvar invoke = require('./_invoke');\nvar html = require('./_html');\nvar cel = require('./_dom-create');\nvar global = require('./_global');\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (require('./_cof')(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_task.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1224,
                            1231,
                            "9",
                            10,
                          ],
                          [
                            1216,
                            1222,
                            "__webpack_require__",
                            11,
                          ],
                          [
                            152,
                            162,
                            "0",
                            8,
                          ],
                          [
                            144,
                            150,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            113,
                            127,
                            "16",
                            6,
                          ],
                          [
                            105,
                            111,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            83,
                            91,
                            "31",
                            4,
                          ],
                          [
                            75,
                            81,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            50,
                            60,
                            "71",
                            2,
                          ],
                          [
                            42,
                            48,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            18,
                            25,
                            "10",
                            0,
                          ],
                          [
                            10,
                            16,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var ctx = __webpack_require__(10);\nvar invoke = __webpack_require__(71);\nvar html = __webpack_require__(31);\nvar cel = __webpack_require__(16);\nvar global = __webpack_require__(0);\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(9)(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n",
                      _cachedSize: 2504,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 39 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 7.1.15 ToLength\nvar toInteger = require('./_to-integer');\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_to-length.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            43,
                            57,
                            "21",
                            0,
                          ],
                          [
                            35,
                            41,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// 7.1.15 ToLength\nvar toInteger = __webpack_require__(21);\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n",
                      _cachedSize: 214,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 40 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_uid.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n",
                      _cachedSize: 162,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 41 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * Check if `obj` is an object.\n *\n * @param {Object} obj\n * @return {Boolean}\n * @api private\n */\n\nfunction isObject(obj) {\n  return null !== obj && 'object' === typeof obj;\n}\n\nmodule.exports = isObject;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/superagent/lib/is-object.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\n/**\n * Check if `obj` is an object.\n *\n * @param {Object} obj\n * @return {Boolean}\n * @api private\n */\n\nfunction isObject(obj) {\n  return null !== obj && 'object' === typeof obj;\n}\n\nmodule.exports = isObject;\n",
                      _cachedSize: 211,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 42 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-template/node_modules/process/browser.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n",
                      _cachedSize: 5418,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 43 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "\n/* styles */\nrequire(\"!!../../block-template/node_modules/extract-text-webpack-plugin/loader.js?{\\\"omit\\\":1,\\\"remove\\\":true}!vue-style-loader!css-loader?{\\\"minimize\\\":true,\\\"sourceMap\\\":true}!../node_modules/vue-loader/lib/style-compiler/index?{\\\"id\\\":\\\"data-v-6ab69d3e\\\",\\\"scoped\\\":true,\\\"hasInlineConfig\\\":false}!sass-loader?{\\\"sourceMap\\\":true}!../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue\")\n\nvar Component = require(\"!../node_modules/vue-loader/lib/component-normalizer\")(\n  /* script */\n  require(\"!!babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue\"),\n  /* template */\n  require(\"!!../node_modules/vue-loader/lib/template-compiler/index?{\\\"id\\\":\\\"data-v-6ab69d3e\\\"}!../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue\"),\n  /* scopeId */\n  \"data-v-6ab69d3e\",\n  /* cssModules */\n  null\n)\nComponent.options.__file = \"/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key !== \"__esModule\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (module.hot) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-6ab69d3e\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-6ab69d3e\", Component.options)\n  }\n})()}\n\nmodule.exports = Component.exports\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/vue-loader/index.js??ref--0!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/index.vue",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1373,
                            1382,
                            "false",
                            8,
                          ],
                          [
                            648,
                            808,
                            "108",
                            6,
                          ],
                          [
                            640,
                            646,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            530,
                            617,
                            "55",
                            4,
                          ],
                          [
                            522,
                            528,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            448,
                            501,
                            "107",
                            2,
                          ],
                          [
                            440,
                            446,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            22,
                            420,
                            "109",
                            0,
                          ],
                          [
                            14,
                            20,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "\n/* styles */\n__webpack_require__(109)\n\nvar Component = __webpack_require__(107)(\n  /* script */\n  __webpack_require__(55),\n  /* template */\n  __webpack_require__(108),\n  /* scopeId */\n  \"data-v-6ab69d3e\",\n  /* cssModules */\n  null\n)\nComponent.options.__file = \"/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key !== \"__esModule\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-6ab69d3e\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-6ab69d3e\", Component.options)\n  }\n})()}\n\nmodule.exports = Component.exports\n",
                      _cachedSize: 1094,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 44 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var QS = require('querystring');\nfunction getUAInfo() {\n  var lua = (navigator.userAgent + '').toLowerCase();\n  var VER_REG_STR = \"([0-9][0-9.a-zA-Z_]*)\";\n  var regexp = function (str) { return new RegExp(str, 'i'); };\n  var isstr  = function (str) { return typeof str === 'string'; };\n  var href = location.href;\n  var qs = QS.parse((location.search || '').slice(1));\n\n  var apps = {\n    dianping: [/com\\.dianping\\.ba.\\w+/, /com\\.dianping\\.\\w+/],\n    : ['group', /com..i-?\\w+/],\n    maoyanpro: ['moviepro', 'moviepro/android'],\n    maoyan: ['movie'],\n    moma: ['moma'],\n    daxiang: ['xm'],\n\n    wechat: ['micromessenger'],\n    qq: ['qq'],\n\n    unknown: ['never_match_anything'],\n  };\n  var appName = function () {\n     var names = Object.keys(apps);\n     for (var i = 0; i < names.length; i++) {\n       var matchers = apps[names[i]];\n       for (var j = 0; j < matchers.length; j++) {\n         if (isstr(matchers[j]) ? regexp('\\\\W' + matchers[j] + '\\\\W').test(lua) : matchers[j].test(lua)) return names[i]; \n       }\n     }\n     return \"unknown\";\n  }();\n  var appId = function() {\n    var matches = lua.match(/app\\/([0-9a-z]{5})/i);\n    return matches ? matches[1] : '';\n  }();\n  var appVersion = function () {\n    var matchers = apps[appName];\n    for (var i = 0; i < matchers.length; i++) {\n      var mstring = isstr(matchers[i]) ? matchers[i] : matchers[i].source;\n      var m = lua.match(regexp(mstring + ' ' + VER_REG_STR)) || lua.match(regexp(mstring + '/' + VER_REG_STR));\n      if (m) return m[1];\n    }\n    return \"0\";\n  }();\n  var osName = function () {\n    if (/android/.test(lua)) return 'android';\n    if (/ios|iphone|ipod|ipad/.test(lua)) return 'ios';\n    if (/macintosh/.test(lua)) return 'mac';\n    if (/windows/.test(lua)) return 'windows';\n    return \"unknown\";\n  }();\n  var osVersion = function () {\n    var m;\n    // https://developer.chrome.com/multidevice/user-agent\n    // order matters!\n    if (osName === 'android') m  =  lua.match(regexp('android '+ VER_REG_STR)) || lua.match(regexp('android/'+ VER_REG_STR));\n    if (osName === 'ios') m = lua.match(regexp(VER_REG_STR +' like Mac OS X')) || lua.match(regexp('iOS/' + VER_REG_STR));\n\n    // 通常而言mac/window的版本不重要，无视之\n    return (m ? m[1] : '0').replace(/_/g, '.');\n  }();\n\n  // internal version info\n  // MATCHED INDEX:     1  2              3      4             5       6\n  // EXAMPLE:         KNB/1.1.0         Android/5.1     Group/7.3.1\n  var reg1 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" App/[0-9]+/[0-9][0-9.a-zA-Z_]* (\\\\w+)/\" + VER_REG_STR));\n  var reg2 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" App/[0-9]+/[0-9][0-9.a-zA-Z_]* ([a-z1-9A-Z_.-]+/[a-z1-9A-Z_.-]+)/\" + VER_REG_STR));\n  var reg3 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR));\n  var reg4 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" ([a-z1-9A-Z_.-]+/[a-z1-9A-Z_.-]+)/\" + VER_REG_STR));\n  var m   = lua.match(reg1) || lua.match(reg2) || lua.match(reg3) || lua.match(reg4);\n  var _knbVersion = m && m[2];\n\n  // Try KNB Generic Mode\n  if (appName === 'unknown' && m) {\n    appName    = m[5];\n    appVersion = m[6];\n  }\n\n  // God knowns who you are\n  if (appName === 'unknown') {\n    // waimai app\n    if (href.indexOf('wm_ctype=') > -1) appName = \"waimai\";\n    //  like app < 7.0\n    if (/iphone|ipod|ipad|android/.test(href)) {\n      if ((qs.utm_campaign || '').indexOf('Agroup') > -1) appName = '';\n      appVersion = qs.version_name;\n    }\n  }\n\n  var matchTitansVerison = lua.match(regexp((\"(TitansX|TitansNoX)/\" + VER_REG_STR)));\n  var titansxVersion = matchTitansVerison && matchTitansVerison[2];\n\n  return {\n    appName: appName,\n    appVersion: appVersion,\n    osName: osName,\n    osVersion: osVersion,\n\n    titansxVersion: titansxVersion,\n    _knbVersion: _knbVersion,\n    appId: appId,\n    lowerUseragent: lua\n  };\n}\n\nfunction getUA(ref) {\n  var success = ref.success;\n\n  console.warn('getUA 接口已停止维护，详情请联系 rencheng');\n  success && success(getUAInfo());\n}\n\n// The actual method\ngetUA.internal = getUAInfo;\n\nmodule.exports = getUA;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/common/get-ua.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            17,
                            29,
                            "48",
                            0,
                          ],
                          [
                            9,
                            15,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var QS = __webpack_require__(48);\nfunction getUAInfo() {\n  var lua = (navigator.userAgent + '').toLowerCase();\n  var VER_REG_STR = \"([0-9][0-9.a-zA-Z_]*)\";\n  var regexp = function (str) { return new RegExp(str, 'i'); };\n  var isstr  = function (str) { return typeof str === 'string'; };\n  var href = location.href;\n  var qs = QS.parse((location.search || '').slice(1));\n\n  var apps = {\n    dianping: [/com\\.dianping\\.ba.\\w+/, /com\\.dianping\\.\\w+/],\n    : ['group', /com..i-?\\w+/],\n    maoyanpro: ['moviepro', 'moviepro/android'],\n    maoyan: ['movie'],\n    moma: ['moma'],\n    daxiang: ['xm'],\n\n    wechat: ['micromessenger'],\n    qq: ['qq'],\n\n    unknown: ['never_match_anything'],\n  };\n  var appName = function () {\n     var names = Object.keys(apps);\n     for (var i = 0; i < names.length; i++) {\n       var matchers = apps[names[i]];\n       for (var j = 0; j < matchers.length; j++) {\n         if (isstr(matchers[j]) ? regexp('\\\\W' + matchers[j] + '\\\\W').test(lua) : matchers[j].test(lua)) return names[i]; \n       }\n     }\n     return \"unknown\";\n  }();\n  var appId = function() {\n    var matches = lua.match(/app\\/([0-9a-z]{5})/i);\n    return matches ? matches[1] : '';\n  }();\n  var appVersion = function () {\n    var matchers = apps[appName];\n    for (var i = 0; i < matchers.length; i++) {\n      var mstring = isstr(matchers[i]) ? matchers[i] : matchers[i].source;\n      var m = lua.match(regexp(mstring + ' ' + VER_REG_STR)) || lua.match(regexp(mstring + '/' + VER_REG_STR));\n      if (m) return m[1];\n    }\n    return \"0\";\n  }();\n  var osName = function () {\n    if (/android/.test(lua)) return 'android';\n    if (/ios|iphone|ipod|ipad/.test(lua)) return 'ios';\n    if (/macintosh/.test(lua)) return 'mac';\n    if (/windows/.test(lua)) return 'windows';\n    return \"unknown\";\n  }();\n  var osVersion = function () {\n    var m;\n    // https://developer.chrome.com/multidevice/user-agent\n    // order matters!\n    if (osName === 'android') m  =  lua.match(regexp('android '+ VER_REG_STR)) || lua.match(regexp('android/'+ VER_REG_STR));\n    if (osName === 'ios') m = lua.match(regexp(VER_REG_STR +' like Mac OS X')) || lua.match(regexp('iOS/' + VER_REG_STR));\n\n    // 通常而言mac/window的版本不重要，无视之\n    return (m ? m[1] : '0').replace(/_/g, '.');\n  }();\n\n  // internal version info\n  // MATCHED INDEX:     1  2              3      4             5       6\n  // EXAMPLE:         KNB/1.1.0         Android/5.1     Group/7.3.1\n  var reg1 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" App/[0-9]+/[0-9][0-9.a-zA-Z_]* (\\\\w+)/\" + VER_REG_STR));\n  var reg2 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" App/[0-9]+/[0-9][0-9.a-zA-Z_]* ([a-z1-9A-Z_.-]+/[a-z1-9A-Z_.-]+)/\" + VER_REG_STR));\n  var reg3 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR));\n  var reg4 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" ([a-z1-9A-Z_.-]+/[a-z1-9A-Z_.-]+)/\" + VER_REG_STR));\n  var m   = lua.match(reg1) || lua.match(reg2) || lua.match(reg3) || lua.match(reg4);\n  var _knbVersion = m && m[2];\n\n  // Try KNB Generic Mode\n  if (appName === 'unknown' && m) {\n    appName    = m[5];\n    appVersion = m[6];\n  }\n\n  // God knowns who you are\n  if (appName === 'unknown') {\n    // waimai app\n    if (href.indexOf('wm_ctype=') > -1) appName = \"waimai\";\n    //  like app < 7.0\n    if (/iphone|ipod|ipad|android/.test(href)) {\n      if ((qs.utm_campaign || '').indexOf('Agroup') > -1) appName = '';\n      appVersion = qs.version_name;\n    }\n  }\n\n  var matchTitansVerison = lua.match(regexp((\"(TitansX|TitansNoX)/\" + VER_REG_STR)));\n  var titansxVersion = matchTitansVerison && matchTitansVerison[2];\n\n  return {\n    appName: appName,\n    appVersion: appVersion,\n    osName: osName,\n    osVersion: osVersion,\n\n    titansxVersion: titansxVersion,\n    _knbVersion: _knbVersion,\n    appId: appId,\n    lowerUseragent: lua\n  };\n}\n\nfunction getUA(ref) {\n  var success = ref.success;\n\n  console.warn('getUA 接口已停止维护，详情请联系 rencheng');\n  success && success(getUAInfo());\n}\n\n// The actual method\ngetUA.internal = getUAInfo;\n\nmodule.exports = getUA;\n",
                      _cachedSize: 4141,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 45 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = (\"1.9.4\");",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/common/version.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = (\"1.9.4\");",
                      _cachedSize: 27,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 46 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar PENDING = 'pending';\nvar SETTLED = 'settled';\nvar FULFILLED = 'fulfilled';\nvar REJECTED = 'rejected';\nvar NOOP = function () {};\nvar isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';\n\nvar asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;\nvar asyncQueue = [];\nvar asyncTimer;\n\nfunction asyncFlush() {\n\t// run promise callbacks\n\tfor (var i = 0; i < asyncQueue.length; i++) {\n\t\tasyncQueue[i][0](asyncQueue[i][1]);\n\t}\n\n\t// reset async asyncQueue\n\tasyncQueue = [];\n\tasyncTimer = false;\n}\n\nfunction asyncCall(callback, arg) {\n\tasyncQueue.push([callback, arg]);\n\n\tif (!asyncTimer) {\n\t\tasyncTimer = true;\n\t\tasyncSetTimer(asyncFlush, 0);\n\t}\n}\n\nfunction invokeResolver(resolver, promise) {\n\tfunction resolvePromise(value) {\n\t\tresolve(promise, value);\n\t}\n\n\tfunction rejectPromise(reason) {\n\t\treject(promise, reason);\n\t}\n\n\ttry {\n\t\tresolver(resolvePromise, rejectPromise);\n\t} catch (e) {\n\t\trejectPromise(e);\n\t}\n}\n\nfunction invokeCallback(subscriber) {\n\tvar owner = subscriber.owner;\n\tvar settled = owner._state;\n\tvar value = owner._data;\n\tvar callback = subscriber[settled];\n\tvar promise = subscriber.then;\n\n\tif (typeof callback === 'function') {\n\t\tsettled = FULFILLED;\n\t\ttry {\n\t\t\tvalue = callback(value);\n\t\t} catch (e) {\n\t\t\treject(promise, e);\n\t\t}\n\t}\n\n\tif (!handleThenable(promise, value)) {\n\t\tif (settled === FULFILLED) {\n\t\t\tresolve(promise, value);\n\t\t}\n\n\t\tif (settled === REJECTED) {\n\t\t\treject(promise, value);\n\t\t}\n\t}\n}\n\nfunction handleThenable(promise, value) {\n\tvar resolved;\n\n\ttry {\n\t\tif (promise === value) {\n\t\t\tthrow new TypeError('A promises callback cannot return that same promise.');\n\t\t}\n\n\t\tif (value && (typeof value === 'function' || typeof value === 'object')) {\n\t\t\t// then should be retrieved only once\n\t\t\tvar then = value.then;\n\n\t\t\tif (typeof then === 'function') {\n\t\t\t\tthen.call(value, function (val) {\n\t\t\t\t\tif (!resolved) {\n\t\t\t\t\t\tresolved = true;\n\n\t\t\t\t\t\tif (value === val) {\n\t\t\t\t\t\t\tfulfill(promise, val);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tresolve(promise, val);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, function (reason) {\n\t\t\t\t\tif (!resolved) {\n\t\t\t\t\t\tresolved = true;\n\n\t\t\t\t\t\treject(promise, reason);\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t} catch (e) {\n\t\tif (!resolved) {\n\t\t\treject(promise, e);\n\t\t}\n\n\t\treturn true;\n\t}\n\n\treturn false;\n}\n\nfunction resolve(promise, value) {\n\tif (promise === value || !handleThenable(promise, value)) {\n\t\tfulfill(promise, value);\n\t}\n}\n\nfunction fulfill(promise, value) {\n\tif (promise._state === PENDING) {\n\t\tpromise._state = SETTLED;\n\t\tpromise._data = value;\n\n\t\tasyncCall(publishFulfillment, promise);\n\t}\n}\n\nfunction reject(promise, reason) {\n\tif (promise._state === PENDING) {\n\t\tpromise._state = SETTLED;\n\t\tpromise._data = reason;\n\n\t\tasyncCall(publishRejection, promise);\n\t}\n}\n\nfunction publish(promise) {\n\tpromise._then = promise._then.forEach(invokeCallback);\n}\n\nfunction publishFulfillment(promise) {\n\tpromise._state = FULFILLED;\n\tpublish(promise);\n}\n\nfunction publishRejection(promise) {\n\tpromise._state = REJECTED;\n\tpublish(promise);\n\tif (!promise._handled && isNode) {\n\t\tglobal.process.emit('unhandledRejection', promise._data, promise);\n\t}\n}\n\nfunction notifyRejectionHandled(promise) {\n\tglobal.process.emit('rejectionHandled', promise);\n}\n\n/**\n * @class\n */\nfunction Promise(resolver) {\n\tif (typeof resolver !== 'function') {\n\t\tthrow new TypeError('Promise resolver ' + resolver + ' is not a function');\n\t}\n\n\tif (this instanceof Promise === false) {\n\t\tthrow new TypeError('Failed to construct \\'Promise\\': Please use the \\'new\\' operator, this object constructor cannot be called as a function.');\n\t}\n\n\tthis._then = [];\n\n\tinvokeResolver(resolver, this);\n}\n\nPromise.prototype = {\n\tconstructor: Promise,\n\n\t_state: PENDING,\n\t_then: null,\n\t_data: undefined,\n\t_handled: false,\n\n\tthen: function (onFulfillment, onRejection) {\n\t\tvar subscriber = {\n\t\t\towner: this,\n\t\t\tthen: new this.constructor(NOOP),\n\t\t\tfulfilled: onFulfillment,\n\t\t\trejected: onRejection\n\t\t};\n\n\t\tif ((onRejection || onFulfillment) && !this._handled) {\n\t\t\tthis._handled = true;\n\t\t\tif (this._state === REJECTED && isNode) {\n\t\t\t\tasyncCall(notifyRejectionHandled, this);\n\t\t\t}\n\t\t}\n\n\t\tif (this._state === FULFILLED || this._state === REJECTED) {\n\t\t\t// already resolved, call callback async\n\t\t\tasyncCall(invokeCallback, subscriber);\n\t\t} else {\n\t\t\t// subscribe\n\t\t\tthis._then.push(subscriber);\n\t\t}\n\n\t\treturn subscriber.then;\n\t},\n\n\tcatch: function (onRejection) {\n\t\treturn this.then(null, onRejection);\n\t}\n};\n\nPromise.all = function (promises) {\n\tif (!Array.isArray(promises)) {\n\t\tthrow new TypeError('You must pass an array to Promise.all().');\n\t}\n\n\treturn new Promise(function (resolve, reject) {\n\t\tvar results = [];\n\t\tvar remaining = 0;\n\n\t\tfunction resolver(index) {\n\t\t\tremaining++;\n\t\t\treturn function (value) {\n\t\t\t\tresults[index] = value;\n\t\t\t\tif (!--remaining) {\n\t\t\t\t\tresolve(results);\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\n\t\tfor (var i = 0, promise; i < promises.length; i++) {\n\t\t\tpromise = promises[i];\n\n\t\t\tif (promise && typeof promise.then === 'function') {\n\t\t\t\tpromise.then(resolver(i), reject);\n\t\t\t} else {\n\t\t\t\tresults[i] = promise;\n\t\t\t}\n\t\t}\n\n\t\tif (!remaining) {\n\t\t\tresolve(results);\n\t\t}\n\t});\n};\n\nPromise.race = function (promises) {\n\tif (!Array.isArray(promises)) {\n\t\tthrow new TypeError('You must pass an array to Promise.race().');\n\t}\n\n\treturn new Promise(function (resolve, reject) {\n\t\tfor (var i = 0, promise; i < promises.length; i++) {\n\t\t\tpromise = promises[i];\n\n\t\t\tif (promise && typeof promise.then === 'function') {\n\t\t\t\tpromise.then(resolve, reject);\n\t\t\t} else {\n\t\t\t\tresolve(promise);\n\t\t\t}\n\t\t}\n\t});\n};\n\nPromise.resolve = function (value) {\n\tif (value && typeof value === 'object' && value.constructor === Promise) {\n\t\treturn value;\n\t}\n\n\treturn new Promise(function (resolve) {\n\t\tresolve(value);\n\t});\n};\n\nPromise.reject = function (reason) {\n\treturn new Promise(function (resolve, reject) {\n\t\treject(reason);\n\t});\n};\n\nmodule.exports = Promise;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/pinkie/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            5936.5,
                            5935.5,
                            "\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(114).setImmediate))",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                          [
                            -9.5,
                            -10.5,
                            "/* WEBPACK VAR INJECTION */(function(global, setImmediate) {",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "/* WEBPACK VAR INJECTION */(function(global, setImmediate) {\n\nvar PENDING = 'pending';\nvar SETTLED = 'settled';\nvar FULFILLED = 'fulfilled';\nvar REJECTED = 'rejected';\nvar NOOP = function () {};\nvar isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';\n\nvar asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;\nvar asyncQueue = [];\nvar asyncTimer;\n\nfunction asyncFlush() {\n\t// run promise callbacks\n\tfor (var i = 0; i < asyncQueue.length; i++) {\n\t\tasyncQueue[i][0](asyncQueue[i][1]);\n\t}\n\n\t// reset async asyncQueue\n\tasyncQueue = [];\n\tasyncTimer = false;\n}\n\nfunction asyncCall(callback, arg) {\n\tasyncQueue.push([callback, arg]);\n\n\tif (!asyncTimer) {\n\t\tasyncTimer = true;\n\t\tasyncSetTimer(asyncFlush, 0);\n\t}\n}\n\nfunction invokeResolver(resolver, promise) {\n\tfunction resolvePromise(value) {\n\t\tresolve(promise, value);\n\t}\n\n\tfunction rejectPromise(reason) {\n\t\treject(promise, reason);\n\t}\n\n\ttry {\n\t\tresolver(resolvePromise, rejectPromise);\n\t} catch (e) {\n\t\trejectPromise(e);\n\t}\n}\n\nfunction invokeCallback(subscriber) {\n\tvar owner = subscriber.owner;\n\tvar settled = owner._state;\n\tvar value = owner._data;\n\tvar callback = subscriber[settled];\n\tvar promise = subscriber.then;\n\n\tif (typeof callback === 'function') {\n\t\tsettled = FULFILLED;\n\t\ttry {\n\t\t\tvalue = callback(value);\n\t\t} catch (e) {\n\t\t\treject(promise, e);\n\t\t}\n\t}\n\n\tif (!handleThenable(promise, value)) {\n\t\tif (settled === FULFILLED) {\n\t\t\tresolve(promise, value);\n\t\t}\n\n\t\tif (settled === REJECTED) {\n\t\t\treject(promise, value);\n\t\t}\n\t}\n}\n\nfunction handleThenable(promise, value) {\n\tvar resolved;\n\n\ttry {\n\t\tif (promise === value) {\n\t\t\tthrow new TypeError('A promises callback cannot return that same promise.');\n\t\t}\n\n\t\tif (value && (typeof value === 'function' || typeof value === 'object')) {\n\t\t\t// then should be retrieved only once\n\t\t\tvar then = value.then;\n\n\t\t\tif (typeof then === 'function') {\n\t\t\t\tthen.call(value, function (val) {\n\t\t\t\t\tif (!resolved) {\n\t\t\t\t\t\tresolved = true;\n\n\t\t\t\t\t\tif (value === val) {\n\t\t\t\t\t\t\tfulfill(promise, val);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tresolve(promise, val);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, function (reason) {\n\t\t\t\t\tif (!resolved) {\n\t\t\t\t\t\tresolved = true;\n\n\t\t\t\t\t\treject(promise, reason);\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t} catch (e) {\n\t\tif (!resolved) {\n\t\t\treject(promise, e);\n\t\t}\n\n\t\treturn true;\n\t}\n\n\treturn false;\n}\n\nfunction resolve(promise, value) {\n\tif (promise === value || !handleThenable(promise, value)) {\n\t\tfulfill(promise, value);\n\t}\n}\n\nfunction fulfill(promise, value) {\n\tif (promise._state === PENDING) {\n\t\tpromise._state = SETTLED;\n\t\tpromise._data = value;\n\n\t\tasyncCall(publishFulfillment, promise);\n\t}\n}\n\nfunction reject(promise, reason) {\n\tif (promise._state === PENDING) {\n\t\tpromise._state = SETTLED;\n\t\tpromise._data = reason;\n\n\t\tasyncCall(publishRejection, promise);\n\t}\n}\n\nfunction publish(promise) {\n\tpromise._then = promise._then.forEach(invokeCallback);\n}\n\nfunction publishFulfillment(promise) {\n\tpromise._state = FULFILLED;\n\tpublish(promise);\n}\n\nfunction publishRejection(promise) {\n\tpromise._state = REJECTED;\n\tpublish(promise);\n\tif (!promise._handled && isNode) {\n\t\tglobal.process.emit('unhandledRejection', promise._data, promise);\n\t}\n}\n\nfunction notifyRejectionHandled(promise) {\n\tglobal.process.emit('rejectionHandled', promise);\n}\n\n/**\n * @class\n */\nfunction Promise(resolver) {\n\tif (typeof resolver !== 'function') {\n\t\tthrow new TypeError('Promise resolver ' + resolver + ' is not a function');\n\t}\n\n\tif (this instanceof Promise === false) {\n\t\tthrow new TypeError('Failed to construct \\'Promise\\': Please use the \\'new\\' operator, this object constructor cannot be called as a function.');\n\t}\n\n\tthis._then = [];\n\n\tinvokeResolver(resolver, this);\n}\n\nPromise.prototype = {\n\tconstructor: Promise,\n\n\t_state: PENDING,\n\t_then: null,\n\t_data: undefined,\n\t_handled: false,\n\n\tthen: function (onFulfillment, onRejection) {\n\t\tvar subscriber = {\n\t\t\towner: this,\n\t\t\tthen: new this.constructor(NOOP),\n\t\t\tfulfilled: onFulfillment,\n\t\t\trejected: onRejection\n\t\t};\n\n\t\tif ((onRejection || onFulfillment) && !this._handled) {\n\t\t\tthis._handled = true;\n\t\t\tif (this._state === REJECTED && isNode) {\n\t\t\t\tasyncCall(notifyRejectionHandled, this);\n\t\t\t}\n\t\t}\n\n\t\tif (this._state === FULFILLED || this._state === REJECTED) {\n\t\t\t// already resolved, call callback async\n\t\t\tasyncCall(invokeCallback, subscriber);\n\t\t} else {\n\t\t\t// subscribe\n\t\t\tthis._then.push(subscriber);\n\t\t}\n\n\t\treturn subscriber.then;\n\t},\n\n\tcatch: function (onRejection) {\n\t\treturn this.then(null, onRejection);\n\t}\n};\n\nPromise.all = function (promises) {\n\tif (!Array.isArray(promises)) {\n\t\tthrow new TypeError('You must pass an array to Promise.all().');\n\t}\n\n\treturn new Promise(function (resolve, reject) {\n\t\tvar results = [];\n\t\tvar remaining = 0;\n\n\t\tfunction resolver(index) {\n\t\t\tremaining++;\n\t\t\treturn function (value) {\n\t\t\t\tresults[index] = value;\n\t\t\t\tif (!--remaining) {\n\t\t\t\t\tresolve(results);\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\n\t\tfor (var i = 0, promise; i < promises.length; i++) {\n\t\t\tpromise = promises[i];\n\n\t\t\tif (promise && typeof promise.then === 'function') {\n\t\t\t\tpromise.then(resolver(i), reject);\n\t\t\t} else {\n\t\t\t\tresults[i] = promise;\n\t\t\t}\n\t\t}\n\n\t\tif (!remaining) {\n\t\t\tresolve(results);\n\t\t}\n\t});\n};\n\nPromise.race = function (promises) {\n\tif (!Array.isArray(promises)) {\n\t\tthrow new TypeError('You must pass an array to Promise.race().');\n\t}\n\n\treturn new Promise(function (resolve, reject) {\n\t\tfor (var i = 0, promise; i < promises.length; i++) {\n\t\t\tpromise = promises[i];\n\n\t\t\tif (promise && typeof promise.then === 'function') {\n\t\t\t\tpromise.then(resolve, reject);\n\t\t\t} else {\n\t\t\t\tresolve(promise);\n\t\t\t}\n\t\t}\n\t});\n};\n\nPromise.resolve = function (value) {\n\tif (value && typeof value === 'object' && value.constructor === Promise) {\n\t\treturn value;\n\t}\n\n\treturn new Promise(function (resolve) {\n\t\tresolve(value);\n\t});\n};\n\nPromise.reject = function (reason) {\n\treturn new Promise(function (resolve, reject) {\n\t\treject(reason);\n\t});\n};\n\nmodule.exports = Promise;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(114).setImmediate))",
                      _cachedSize: 6090,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 47 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var win = typeof window !== 'undefined' ? window : {};\nvar mixin = require('./common/mixin');\nvar Promise = win.Promise || require('pinkie');\nvar apis = require('./api');\n\n// get an empty object from obj's type\nfunction empty(obj) {\n  return Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};\n}\n\nmodule.exports = function (KNB) {\n  if (KNB.getPromiseInstance) return;\n  KNB.getPromiseInstance = function () {\n    var KNBP = {};\n    apis.forEach(function (name) {\n      if (name === 'config') return;\n      KNBP[name] = function (config) {\n        return new Promise(function (resolve, reject) {\n          KNB[name](mixin(empty(config), config, { success: resolve, fail: reject }));\n        });\n      };\n    });\n    KNBP.use = function (name, config) {\n      return new Promise(function (resolve, reject) {\n        KNB.use(name, mixin(empty(config), config, { success: resolve, fail: reject }));\n      });\n    };\n    KNBP.all = function (args) { return Promise.all(args); };\n    return KNBP;\n  };\n}\n\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/promisify.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            161,
                            167,
                            "25",
                            4,
                          ],
                          [
                            153,
                            159,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            131,
                            138,
                            "46",
                            2,
                          ],
                          [
                            123,
                            129,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            75,
                            90,
                            "23",
                            0,
                          ],
                          [
                            67,
                            73,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var win = typeof window !== 'undefined' ? window : {};\nvar mixin = __webpack_require__(23);\nvar Promise = win.Promise || __webpack_require__(46);\nvar apis = __webpack_require__(25);\n\n// get an empty object from obj's type\nfunction empty(obj) {\n  return Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};\n}\n\nmodule.exports = function (KNB) {\n  if (KNB.getPromiseInstance) return;\n  KNB.getPromiseInstance = function () {\n    var KNBP = {};\n    apis.forEach(function (name) {\n      if (name === 'config') return;\n      KNBP[name] = function (config) {\n        return new Promise(function (resolve, reject) {\n          KNB[name](mixin(empty(config), config, { success: resolve, fail: reject }));\n        });\n      };\n    });\n    KNBP.use = function (name, config) {\n      return new Promise(function (resolve, reject) {\n        KNB.use(name, mixin(empty(config), config, { success: resolve, fail: reject }));\n      });\n    };\n    KNBP.all = function (args) { return Promise.all(args); };\n    return KNBP;\n  };\n}\n\n",
                      _cachedSize: 1027,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 48 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nexports.decode = exports.parse = require('./decode');\nexports.encode = exports.stringify = require('./encode');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-template/node_modules/querystring-es3/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            114,
                            123,
                            "112",
                            3,
                          ],
                          [
                            106,
                            112,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            56,
                            65,
                            "111",
                            1,
                          ],
                          [
                            48,
                            54,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nexports.decode = exports.parse = __webpack_require__(111);\nexports.encode = exports.stringify = __webpack_require__(112);\n",
                      _cachedSize: 124,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 49 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "/*\n * @Author: sunhui04\n * @Date: 2021-07-21 17:19:06\n */\nfunction canIUse(apiName) {\n    // APP（极简版等）支持的api由window.__MT_supportAPIS注入\n    // 不直接使用baseApis，避免大数组的循环\n    var webMatchNativeNames = [\n        {\n        name: 'closeWebview',\n        message: 'closeWindow'\n        },\n        {\n        name: 'getCity',\n        message: 'getCityInfo',\n        },\n        {\n        name: 'openPage',\n        message: 'openScheme',\n        },\n        {\n        name: 'jumpPage',\n        message: 'jumpToScheme',\n        },\n        {\n        name: 'closePage',\n        message: 'closeWindow',\n        },\n        {\n        name: 'uploadImage',\n        message: 'uploadPhoto',\n        }\n    ]\n\n    webMatchNativeNames.forEach(function(item) {\n        if(item.name === apiName){\n            apiName = item.message;\n            return;\n        }\n    })\n    if(window.__MT_supportAPIS \n        && Array.isArray(window.__MT_supportAPIS)\n        && (window.__MT_supportAPIS.indexOf(apiName) === -1)) {\n        return false;\n    } else {\n        return true;\n    }\n}\n\nmodule.exports = canIUse;",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/common/canIUse.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "/*\n * @Author: sunhui04\n * @Date: 2021-07-21 17:19:06\n */\nfunction canIUse(apiName) {\n    // APP（极简版等）支持的api由window.__MT_supportAPIS注入\n    // 不直接使用baseApis，避免大数组的循环\n    var webMatchNativeNames = [\n        {\n        name: 'closeWebview',\n        message: 'closeWindow'\n        },\n        {\n        name: 'getCity',\n        message: 'getCityInfo',\n        },\n        {\n        name: 'openPage',\n        message: 'openScheme',\n        },\n        {\n        name: 'jumpPage',\n        message: 'jumpToScheme',\n        },\n        {\n        name: 'closePage',\n        message: 'closeWindow',\n        },\n        {\n        name: 'uploadImage',\n        message: 'uploadPhoto',\n        }\n    ]\n\n    webMatchNativeNames.forEach(function(item) {\n        if(item.name === apiName){\n            apiName = item.message;\n            return;\n        }\n    })\n    if(window.__MT_supportAPIS \n        && Array.isArray(window.__MT_supportAPIS)\n        && (window.__MT_supportAPIS.indexOf(apiName) === -1)) {\n        return false;\n    } else {\n        return true;\n    }\n}\n\nmodule.exports = canIUse;",
                      _cachedSize: 1076,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 50 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "/*\n * @Author: sunhui04\n * @Date: 2021-01-21 14:43:09\n */\nvar apis = require('./api');\nvar mixin = require('./common/mixin');\nvar version = require('./common/version');\nvar getUA = require('./common/get-ua');\nvar promisify = require('./promisify');\nvar semver = require('./common/semver');\nvar canIUse = require('./common/canIUse');\n\nvar noop = function () {};\nvar cacheFns = [];\n\nvar KNB = {\n  __version__: version,\n\n  NOTIMPLEMENTED: function(apiName, opts) {\n    var this$1 = this;\n\n    var fail = opts.fail || noop;\n    if (this._isReady) return fail({error: -1, msg: 'API [' + apiName + '] is not implemented'});\n    this.cache = this.cache || [];\n    this.cache.push(function () { return this$1[apiName](opts); });\n  },\n  load: function(child) {\n    var this$1 = this;\n\n    mixin(this, child);\n\n    // assign an _add method for child\n    // so child can dynamically add methods\n    child._add = function (name, fn) {\n      this$1[name] = fn;\n    };\n  },\n  _ready:function() {\n    this._isReady = true;\n    var tasks = this.cache || [];\n    function afterReady() {\n      (function doTasks(arr) {\n        if (!arr.length) return;\n        var task = arr.shift();\n        if (typeof task === 'function') task();\n        doTasks(arr);\n      })(tasks);\n\n      cacheFns.forEach(function (fn) { return fn(); });\n    }\n    // 说明具体环境脚本已经重写了ready方法\n    // 此时，需要等待具体环境ready\n    if (this.ready && !this.ready.isFromLoader) return this.ready(afterReady);\n    afterReady();\n  },\n  ready: function(cb) {\n    if (this._isReady) return cb();\n    if (typeof cb === 'function') cacheFns.push(cb);\n  },\n  use: function(api, opts) {\n    var this$1 = this;\n\n    this.cache = this.cache || [];\n    this.cache.push(function () { return this$1.use(api, opts); });\n  }\n};\nKNB.ready.isFromLoader = true;\napis.forEach(function(api) {\n  KNB[api] = function(opts) {\n    if ( opts === void 0 ) opts={};\n\n    KNB.NOTIMPLEMENTED(api, opts);\n  };\n});\nKNB.getUA = getUA; // override getUA\nKNB.env = require('../env');\nKNB.uaInfo = getUA.internal;\nKNB.Semver = semver;\nKNB.canIUse = canIUse;\npromisify(KNB);\n\nmodule.exports = KNB;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/interface.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1977,
                            1984,
                            "27",
                            14,
                          ],
                          [
                            1969,
                            1975,
                            "__webpack_require__",
                            15,
                          ],
                          [
                            312,
                            329,
                            "49",
                            12,
                          ],
                          [
                            304,
                            310,
                            "__webpack_require__",
                            13,
                          ],
                          [
                            270,
                            286,
                            "24",
                            10,
                          ],
                          [
                            262,
                            268,
                            "__webpack_require__",
                            11,
                          ],
                          [
                            233,
                            245,
                            "47",
                            8,
                          ],
                          [
                            225,
                            231,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            189,
                            205,
                            "44",
                            6,
                          ],
                          [
                            181,
                            187,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            148,
                            165,
                            "45",
                            4,
                          ],
                          [
                            140,
                            146,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            107,
                            122,
                            "23",
                            2,
                          ],
                          [
                            99,
                            105,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            77,
                            83,
                            "25",
                            0,
                          ],
                          [
                            69,
                            75,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "/*\n * @Author: sunhui04\n * @Date: 2021-01-21 14:43:09\n */\nvar apis = __webpack_require__(25);\nvar mixin = __webpack_require__(23);\nvar version = __webpack_require__(45);\nvar getUA = __webpack_require__(44);\nvar promisify = __webpack_require__(47);\nvar semver = __webpack_require__(24);\nvar canIUse = __webpack_require__(49);\n\nvar noop = function () {};\nvar cacheFns = [];\n\nvar KNB = {\n  __version__: version,\n\n  NOTIMPLEMENTED: function(apiName, opts) {\n    var this$1 = this;\n\n    var fail = opts.fail || noop;\n    if (this._isReady) return fail({error: -1, msg: 'API [' + apiName + '] is not implemented'});\n    this.cache = this.cache || [];\n    this.cache.push(function () { return this$1[apiName](opts); });\n  },\n  load: function(child) {\n    var this$1 = this;\n\n    mixin(this, child);\n\n    // assign an _add method for child\n    // so child can dynamically add methods\n    child._add = function (name, fn) {\n      this$1[name] = fn;\n    };\n  },\n  _ready:function() {\n    this._isReady = true;\n    var tasks = this.cache || [];\n    function afterReady() {\n      (function doTasks(arr) {\n        if (!arr.length) return;\n        var task = arr.shift();\n        if (typeof task === 'function') task();\n        doTasks(arr);\n      })(tasks);\n\n      cacheFns.forEach(function (fn) { return fn(); });\n    }\n    // 说明具体环境脚本已经重写了ready方法\n    // 此时，需要等待具体环境ready\n    if (this.ready && !this.ready.isFromLoader) return this.ready(afterReady);\n    afterReady();\n  },\n  ready: function(cb) {\n    if (this._isReady) return cb();\n    if (typeof cb === 'function') cacheFns.push(cb);\n  },\n  use: function(api, opts) {\n    var this$1 = this;\n\n    this.cache = this.cache || [];\n    this.cache.push(function () { return this$1.use(api, opts); });\n  }\n};\nKNB.ready.isFromLoader = true;\napis.forEach(function(api) {\n  KNB[api] = function(opts) {\n    if ( opts === void 0 ) opts={};\n\n    KNB.NOTIMPLEMENTED(api, opts);\n  };\n});\nKNB.getUA = getUA; // override getUA\nKNB.env = __webpack_require__(27);\nKNB.uaInfo = getUA.internal;\nKNB.Semver = semver;\nKNB.canIUse = canIUse;\npromisify(KNB);\n\nmodule.exports = KNB;\n",
                      _cachedSize: 2098,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 51 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 容器 UA 行为文档: https://km./page/53371192\n\nmodule.exports = (function () {\n    var ua = navigator.userAgent.toLowerCase();\n    var host = location.host.toLowerCase();\n    var ret = {\n        pc: !/Android|Windows Phone|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent),\n        baiduMini: Boolean(window.swan && window.swan.webView),\n        iphone: ua.indexOf('iphone') !== -1,\n        android: ua.indexOf('android') !== -1,\n        weibo: ua.indexOf('weibo') !== -1,\n        qq: ua.indexOf('qq') !== -1,\n        qzone: ua.indexOf('qzone') !== -1,\n        lvxing: ua.indexOf('mttower') !== -1,\n        weixin: ua.indexOf('micromessenger') !== -1,\n        mmp: ua.indexOf('mmp') !== -1,\n        native: ua.indexOf('titans') !== -1,\n        dpMerchant: ua.indexOf('com.dianping.merchant.mobile') !== -1,\n        klMallNative: ua.indexOf('klmall') !== -1,\n        mhotel: ua.indexOf('mhotel') !== -1,\n        platform: (function () {\n            var platform = ''; // 默认美团\n            if (host.indexOf('ping') !== -1 || ua.indexOf('com.dianping') !== -1) {\n                platform = 'dianping';\n            }\n            if (host.indexOf('ecube') !== -1) { // 商家\n                platform = 'business';\n            }\n            if (host.indexOf('icube') !== -1) { // 内部员工\n                platform = 'staff';\n            }\n            if (host.indexOf('klmall') !== -1 || host.indexOf('mall.bb') !== -1) { // 快驴\n                platform = 'klMall';\n            }\n            return platform;\n        })()\n    };\n    ret. = ret.platform === '';\n    ret.dianping = ret.platform === 'dianping';\n    ret.business = ret.platform === 'business';\n    ret.maoyan = ua.indexOf('imovie') !== -1 || ua.indexOf('com.sankuai.movie') !== -1;\n    ret.staff = ret.platform === 'staff';\n    ret.klMall = ret.platform === 'klMall';\n    return ret;\n})();\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//block-core/agent.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// 容器 UA 行为文档: https://km./page/53371192\n\nmodule.exports = (function () {\n    var ua = navigator.userAgent.toLowerCase();\n    var host = location.host.toLowerCase();\n    var ret = {\n        pc: !/Android|Windows Phone|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent),\n        baiduMini: Boolean(window.swan && window.swan.webView),\n        iphone: ua.indexOf('iphone') !== -1,\n        android: ua.indexOf('android') !== -1,\n        weibo: ua.indexOf('weibo') !== -1,\n        qq: ua.indexOf('qq') !== -1,\n        qzone: ua.indexOf('qzone') !== -1,\n        lvxing: ua.indexOf('mttower') !== -1,\n        weixin: ua.indexOf('micromessenger') !== -1,\n        mmp: ua.indexOf('mmp') !== -1,\n        native: ua.indexOf('titans') !== -1,\n        dpMerchant: ua.indexOf('com.dianping.merchant.mobile') !== -1,\n        klMallNative: ua.indexOf('klmall') !== -1,\n        mhotel: ua.indexOf('mhotel') !== -1,\n        platform: (function () {\n            var platform = ''; // 默认美团\n            if (host.indexOf('ping') !== -1 || ua.indexOf('com.dianping') !== -1) {\n                platform = 'dianping';\n            }\n            if (host.indexOf('ecube') !== -1) { // 商家\n                platform = 'business';\n            }\n            if (host.indexOf('icube') !== -1) { // 内部员工\n                platform = 'staff';\n            }\n            if (host.indexOf('klmall') !== -1 || host.indexOf('mall.bb') !== -1) { // 快驴\n                platform = 'klMall';\n            }\n            return platform;\n        })()\n    };\n    ret. = ret.platform === '';\n    ret.dianping = ret.platform === 'dianping';\n    ret.business = ret.platform === 'business';\n    ret.maoyan = ua.indexOf('imovie') !== -1 || ua.indexOf('com.sankuai.movie') !== -1;\n    ret.staff = ret.platform === 'staff';\n    ret.klMall = ret.platform === 'klMall';\n    return ret;\n})();\n",
                      _cachedSize: 1871,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 52 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "/**\n * Created by liruihao02 on 2019/06/18.\n * 兼容首页 Webview 场景下 KNB closeWebview 和 jumpWebview 行为\n */\nvar KNB = require('@dp/knb/bundle');\nvar closeTime = null;\n\n/** boot id\n * 91 首页弹窗资源位\n * 92 首页飘啊飘\n * 10000 搜索结果页 by@hubaodong\n */\n\nmodule.exports = {\n    closeWebview: function(options) {\n        var href = location.href;\n        if ( href === void 0 ) href = '';\n        if (!options) options = {};\n        if ((href.indexOf('boot_id=91') > -1) || (href.indexOf('boot_id=92') > -1) || (href.indexOf('boot_id=10000') > -1)) {\n            if (!options.isCloseViewOnly) {\n              options.isCloseViewOnly = 1;\n            }\n        }\n        KNB.ready(function () {\n            KNB.closeWebview(options);\n        });\n    },\n    jumpWebview: function(options) {\n        var href = location.href;\n        if ( href === void 0 ) href = '';\n        if (!options) return;\n        if ((href.indexOf('boot_id=91') > -1) || (href.indexOf('boot_id=92') > -1) || (href.indexOf('boot_id=10000') > -1)) {\n            KNB.ready(function () {\n                KNB.openWebview(options);\n                if (closeTime) { clearTimeout(closeTime); }\n                closeTime = setTimeout(function() {\n                    KNB.publish({\n                        type: 'native',\n                        action: 'cubeCloseHomeWebview'\n                    });\n                }, 500);\n            });\n        } else {\n            KNB.ready(function () {\n                KNB.jumpWebview(options);\n            });\n        }\n    }\n}",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//block-core/closejump.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            120,
                            135,
                            "26",
                            0,
                          ],
                          [
                            112,
                            118,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "/**\n * Created by liruihao02 on 2019/06/18.\n * 兼容首页 Webview 场景下 KNB closeWebview 和 jumpWebview 行为\n */\nvar KNB = __webpack_require__(26);\nvar closeTime = null;\n\n/** boot id\n * 91 首页弹窗资源位\n * 92 首页飘啊飘\n * 10000 搜索结果页 by@hubaodong\n */\n\nmodule.exports = {\n    closeWebview: function(options) {\n        var href = location.href;\n        if ( href === void 0 ) href = '';\n        if (!options) options = {};\n        if ((href.indexOf('boot_id=91') > -1) || (href.indexOf('boot_id=92') > -1) || (href.indexOf('boot_id=10000') > -1)) {\n            if (!options.isCloseViewOnly) {\n              options.isCloseViewOnly = 1;\n            }\n        }\n        KNB.ready(function () {\n            KNB.closeWebview(options);\n        });\n    },\n    jumpWebview: function(options) {\n        var href = location.href;\n        if ( href === void 0 ) href = '';\n        if (!options) return;\n        if ((href.indexOf('boot_id=91') > -1) || (href.indexOf('boot_id=92') > -1) || (href.indexOf('boot_id=10000') > -1)) {\n            KNB.ready(function () {\n                KNB.openWebview(options);\n                if (closeTime) { clearTimeout(closeTime); }\n                closeTime = setTimeout(function() {\n                    KNB.publish({\n                        type: 'native',\n                        action: 'cubeCloseHomeWebview'\n                    });\n                }, 500);\n            });\n        } else {\n            KNB.ready(function () {\n                KNB.jumpWebview(options);\n            });\n        }\n    }\n}",
                      _cachedSize: 1508,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 53 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var ttJump = require('./tt/jump');\nvar helper = {};\n\n// 保存跳转 URL 地址\nhelper.link = [];\n\nvar Agent = require('./agent');\nvar CloseJump = require('./closejump');\nvar KNB = require('@dp/knb/bundle');\n\nhelper.getCookie = function (name) {\n    var c = '; ' + document.cookie;\n    var p = c.split('; ' + name + '=');\n    var r = '';\n\n    if (p.length === 2) r = p.pop().split(';').shift();\n    return r;\n};\n\nhelper.setCookie = function (name, value, second, pathStr) {\n    var seconds = second || 0;\n    var path = !pathStr ? '/' : pathStr;\n    var expires = '';\n    if (seconds !== 0) {\n        var date = new Date();\n        date.setTime(date.getTime() + (seconds * 1000));\n        expires = '; expires=' + date.toGMTString();\n    }\n    document.cookie = name + '=' + escape(value) + expires + '; path=' + path;\n};\n\nhelper.getQuery = function (name) {\n    var url = window.location.href.split('?');\n    var rl = url.length;\n    var a;\n    var h;\n    var l;\n    var e;\n    var r = '';\n    if (rl > 1) {\n        for (var m = 1; m < rl; m++) {\n            h = url[m].split('#');\n            a = h[0].split('&');\n            l = a.length;\n            for (var i = 0; i < l; i++) {\n                e = a[i].split('=');\n                if (e[0] === name && e.length > 1)r = e[1];\n            }\n        }\n    }\n    return r;\n};\n\nhelper.guid = function () {\n    var s = function () {\n        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);\n    };\n    return s() + s() + '-' + s() + '-' + s() + '-' + s() + '-' + s() + s() + s();\n};\n\nhelper.getTimestamp = function () {\n    return new Date().getTime();\n};\n\nhelper.report = function (dom, e) {\n    var path = e.path || (e.composedPath && e.composedPath());\n    if (path) {\n        var child = null;\n        var current = false;\n        for (var i = 0; i < path.length; i++) {\n            var node = path[i];\n            if (dom === node) {\n                current = true;\n            }\n            if (node.attributes && node.attributes.hasOwnProperty('data-bid-click')) {\n                var bid = node.getAttribute('data-bid-click');\n                var uuid = node.getAttribute('data-uuid');\n\n                // 阻止父元素由于冒泡导致的事件上报，但如果本组件并未设置v-touch，则无法上报\n                if (!current) {\n                    return;\n                }\n\n                if (child) {\n                    window.Block.report.base(bid, { uuid: uuid });\n                } else {\n                    // 初始组件点击，需上报tag\n                    window.Block.report.click(bid, { uuid: uuid });\n                    child = true;\n                }\n            }\n        }\n    } else {\n        console.log('this browser not support path');\n    }\n};\n\nhelper._transQuery = function (url) {\n    if (!url) return url;\n    // 前后 $\n    var paramArr = url.match(/\\$\\{[a-zA-Z0-9_-]+\\}/g);\n    if (!paramArr || paramArr.length === 0) return url;\n\n    for (var i = 0; i < paramArr.length; i++) {\n        var param = paramArr[i];\n        var str = param.match(/\\$\\{([a-zA-Z0-9_-]+)\\}/);\n        if (str && str[1]) {\n            var val = helper.getQuery(str[1]);\n            url = url.replace(param, val);\n        }\n    }\n    return url;\n};\n\nhelper.getQueryObj = function (link) {\n    var url = link.split('?');\n    var rl = url.length;\n    var a;\n    var h;\n    var l;\n    var e;\n    var f = {};\n    if (rl > 1) {\n        for (var m = 1; m < rl; m++) {\n            h = url[m].split('#');\n            a = h[0].split('&');\n            l = a.length;\n            for (var i = 0; i < l; i++) {\n                e = a[i].split('=');\n                f[e[0]] = e.length > 1 ? e[1] : '';\n            }\n        }\n    }\n    return f;\n};\n\nhelper.transCubeLink = function (link) {\n    if (link.indexOf('https://i..com/awp/hfe/block/index.html') === 0) {\n        var params = helper.getQueryObj(link);\n\n        if (params.cube_i && params.cube_h) {\n            var path = link.split('?')[0];\n            path = path.replace('fe/block/index.html', 'fe/block/' + params.cube_h + '/' + params.cube_i + '/index.html');\n            var query = [];\n            for (var key in params) {\n                if (key !== 'cube_i' && key !== 'cube_h') {\n                    query.push(key + '=' + params[key]);\n                }\n            }\n            if (query.length > 0) {\n                path += '?' + query.join('&');\n            }\n            return path;\n        }\n    }\n    return link;\n};\n\n/*eslint complexity: 0 */\nhelper.linkJump = function (href, offset) {\n    // 为空阻止跳转\n    if (!href) {\n        return false;\n    }\n    // 相同地址不跳转\n    if (href === location.href) return false;\n\n    var real = String(href);\n    var h = (real).split('#');\n    var anchor = false;\n    var before = null;\n    var hash = h.length > 1;\n    // 调起事件\n    if (h.length > 2 && h[1] === '') {\n        var event = h[2].split(':');\n        var name = null;\n        var params = '';\n        var param = {};\n        var def = '';\n        var plen = 0;\n        if (event[0] !== '') {\n            name = event[0];\n            if (event.length > 1) {\n                params = event[1].split('&');\n                plen = params.length;\n                for (var i = 0; i < plen; i++) {\n                    var cur = params[i].split('=');\n                    if (cur.length <= 1) continue;\n                    if (cur[0] === 'default') {\n                        def = cur[1];\n                        break;\n                    }\n                    param[cur[0]] = cur[1];\n                }\n            }\n            return window.Block.trigger(name, def !== '' ? def : param);\n        }\n    }\n    // 调起事件新版\n    if (real !== '' && real[0] === '{') {\n        var obj = null;\n        try {\n            obj = JSON.parse(real);\n        } catch (e) {\n            //\n        }\n        if (obj !== null && obj.hasOwnProperty('event') && obj.hasOwnProperty('props') && typeof obj.event === 'string' && typeof obj.props === 'object') {\n            if (obj.hasOwnProperty('uuid')) obj.props.$uuid = obj.uuid;\n            return window.Block.trigger(obj.event, obj.props);\n        }\n    }\n\n    // 平台配置阶段 打印链接到屏幕\n    if (window.Block && window.Block.EDIT) {\n        if (hash) {\n            if (h[0] === location.href.split('#')[0] || href[0] === '#') {\n                anchor = true;\n            }\n        }\n        if (href.indexOf('//') === -1) {\n            return window.Block.trigger('infopop', href);\n        }\n        if (!href || !anchor) {\n            return window.Block.trigger('infopop', '跳转到 : ' + href);\n        }\n    }\n\n    // 冒泡情况，缓存跳转链接（子容器组件跳转中判断子组件是否有配置）\n    helper.link.push(href);\n\n    // 电话及邮件\n    if (real.substr(0, 3) === 'tel' || real.substr(0, 6) === 'mailto') {\n        location.href = real;\n        return true;\n    }\n\n    // 锚点跳转模式\n    var offsetMode = hash && real[0] === '#';\n    if (offsetMode) {\n        before = window.pageYOffset;\n        location.replace(real);\n        var after = window.pageYOffset;\n        if (after !== before && offset) {\n            window.scrollTo(0, after - offset);\n        }\n        return true;\n    }\n    // toast 提示经过上面的过滤非链接类型就认为 toast\n    if (href.indexOf('//') === -1) {\n        window.Block.trigger('infopop', href);\n        return true;\n    }\n    // 拼接 lch\n    var suffix = [];\n    var split = real.split('#')[0];\n    if (split.indexOf('lch') === -1) {\n        var source = helper.getQuery('traffic_source') || helper.getQuery('lch');\n        if (source) {\n            suffix.push('lch=' + encodeURIComponent(source));\n        }\n    }\n\n    // 拼接 cube_id\n    if (window.Block && window.Block.ID) {\n        suffix.push('cube_id=' + window.Block.ID);\n    }\n\n    // 透传 cube_extends\n    var cube_extends = helper.getQuery('cube_extends');\n    if (cube_extends) {\n        suffix.push('cube_extends=' + cube_extends);\n    }\n\n    // 透传 requestId，向日葵系统对接\n    var requestId = helper.getQuery('requestId');\n    if (requestId) {\n        suffix.push('requestId=' + requestId);\n    }\n\n    // Native 内 透传 cityId，若本身携带了 cityId 则不再透传\n    if (Agent.native && href.indexOf('cityId=') === -1) {\n        var cityId = helper.getQuery('cityId');\n        if (typeof cityId === 'string' && cityId !== '') {\n            suffix.push('cityId=' + cityId + '&city_id=' + cityId);\n        }\n    }\n\n    // 拼接最终参数 and 转换携带参数\n    // 拼接最终参数 and 转换携带参数\n    if (suffix.length > 0) {\n        suffix = suffix.join('&');\n        if (real.indexOf('?') === -1) {\n            suffix = '?' + suffix;\n        } else {\n            // 转换参数\n            real = helper._transQuery(real);\n            suffix = '&' + suffix;\n        }\n    }\n\n    // 锚点分割\n    var realHashPos = real.indexOf('#');\n    var realQueryPos = real.indexOf('?');\n    if (realHashPos !== -1) {\n        if (realHashPos > realQueryPos) real = real.replace('#', suffix + '#');\n    } else {\n        real += suffix;\n    }\n\n    var isReplace = typeof offset === 'boolean' && offset;\n\n    // 微信中转换跳转链接格式\n    if (Agent.weixin) {\n        real = helper.transCubeLink(real);\n    }\n    // 字节小程序\n    if (href.indexOf('tt://') === 0) {\n        ttJump(href);\n        return true;\n    }\n    // Native\n    if ((Agent.native && !Agent.dpMerchant) || (Agent.weixin && real.substr(0, 12) === 'knbwxmini://')) {\n        if (isReplace) {\n            CloseJump.jumpWebview({ url: real });\n        } else {\n            KNB.ready(function () {\n                // 小程序下没有 openPage https://sky./docs/knb/knb-doc/list/miniprogram.html#%E6%8E%A5%E5%85%A5%E6%96%B9%E5%BC%8F\n                if(KNB.isMiniProgramWebview){\n                    KNB.openWebview({url: real});\n                }else{\n                    KNB.openPage({ url: real });\n                }\n               \n            });\n        }\n    } else {\n        if (isReplace) {\n            location.replace(real);\n        } else {\n            location.href = real;\n        }\n    }\n\n    // 保存魔方扩展参数至 session storage\n    if (cube_extends && sessionStorage) {\n        try {\n            sessionStorage.setItem('cube_extends', cube_extends);\n        } catch (e) {\n            console.log(e);\n        }\n    }\n\n    return true;\n};\n\nmodule.exports = helper;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//block-core/helper.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            177,
                            192,
                            "26",
                            6,
                          ],
                          [
                            169,
                            175,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            143,
                            155,
                            "52",
                            4,
                          ],
                          [
                            135,
                            141,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            107,
                            115,
                            "51",
                            2,
                          ],
                          [
                            99,
                            105,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            21,
                            31,
                            "54",
                            0,
                          ],
                          [
                            13,
                            19,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var ttJump = __webpack_require__(54);\nvar helper = {};\n\n// 保存跳转 URL 地址\nhelper.link = [];\n\nvar Agent = __webpack_require__(51);\nvar CloseJump = __webpack_require__(52);\nvar KNB = __webpack_require__(26);\n\nhelper.getCookie = function (name) {\n    var c = '; ' + document.cookie;\n    var p = c.split('; ' + name + '=');\n    var r = '';\n\n    if (p.length === 2) r = p.pop().split(';').shift();\n    return r;\n};\n\nhelper.setCookie = function (name, value, second, pathStr) {\n    var seconds = second || 0;\n    var path = !pathStr ? '/' : pathStr;\n    var expires = '';\n    if (seconds !== 0) {\n        var date = new Date();\n        date.setTime(date.getTime() + (seconds * 1000));\n        expires = '; expires=' + date.toGMTString();\n    }\n    document.cookie = name + '=' + escape(value) + expires + '; path=' + path;\n};\n\nhelper.getQuery = function (name) {\n    var url = window.location.href.split('?');\n    var rl = url.length;\n    var a;\n    var h;\n    var l;\n    var e;\n    var r = '';\n    if (rl > 1) {\n        for (var m = 1; m < rl; m++) {\n            h = url[m].split('#');\n            a = h[0].split('&');\n            l = a.length;\n            for (var i = 0; i < l; i++) {\n                e = a[i].split('=');\n                if (e[0] === name && e.length > 1)r = e[1];\n            }\n        }\n    }\n    return r;\n};\n\nhelper.guid = function () {\n    var s = function () {\n        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);\n    };\n    return s() + s() + '-' + s() + '-' + s() + '-' + s() + '-' + s() + s() + s();\n};\n\nhelper.getTimestamp = function () {\n    return new Date().getTime();\n};\n\nhelper.report = function (dom, e) {\n    var path = e.path || (e.composedPath && e.composedPath());\n    if (path) {\n        var child = null;\n        var current = false;\n        for (var i = 0; i < path.length; i++) {\n            var node = path[i];\n            if (dom === node) {\n                current = true;\n            }\n            if (node.attributes && node.attributes.hasOwnProperty('data-bid-click')) {\n                var bid = node.getAttribute('data-bid-click');\n                var uuid = node.getAttribute('data-uuid');\n\n                // 阻止父元素由于冒泡导致的事件上报，但如果本组件并未设置v-touch，则无法上报\n                if (!current) {\n                    return;\n                }\n\n                if (child) {\n                    window.Block.report.base(bid, { uuid: uuid });\n                } else {\n                    // 初始组件点击，需上报tag\n                    window.Block.report.click(bid, { uuid: uuid });\n                    child = true;\n                }\n            }\n        }\n    } else {\n        console.log('this browser not support path');\n    }\n};\n\nhelper._transQuery = function (url) {\n    if (!url) return url;\n    // 前后 $\n    var paramArr = url.match(/\\$\\{[a-zA-Z0-9_-]+\\}/g);\n    if (!paramArr || paramArr.length === 0) return url;\n\n    for (var i = 0; i < paramArr.length; i++) {\n        var param = paramArr[i];\n        var str = param.match(/\\$\\{([a-zA-Z0-9_-]+)\\}/);\n        if (str && str[1]) {\n            var val = helper.getQuery(str[1]);\n            url = url.replace(param, val);\n        }\n    }\n    return url;\n};\n\nhelper.getQueryObj = function (link) {\n    var url = link.split('?');\n    var rl = url.length;\n    var a;\n    var h;\n    var l;\n    var e;\n    var f = {};\n    if (rl > 1) {\n        for (var m = 1; m < rl; m++) {\n            h = url[m].split('#');\n            a = h[0].split('&');\n            l = a.length;\n            for (var i = 0; i < l; i++) {\n                e = a[i].split('=');\n                f[e[0]] = e.length > 1 ? e[1] : '';\n            }\n        }\n    }\n    return f;\n};\n\nhelper.transCubeLink = function (link) {\n    if (link.indexOf('https://i..com/awp/hfe/block/index.html') === 0) {\n        var params = helper.getQueryObj(link);\n\n        if (params.cube_i && params.cube_h) {\n            var path = link.split('?')[0];\n            path = path.replace('fe/block/index.html', 'fe/block/' + params.cube_h + '/' + params.cube_i + '/index.html');\n            var query = [];\n            for (var key in params) {\n                if (key !== 'cube_i' && key !== 'cube_h') {\n                    query.push(key + '=' + params[key]);\n                }\n            }\n            if (query.length > 0) {\n                path += '?' + query.join('&');\n            }\n            return path;\n        }\n    }\n    return link;\n};\n\n/*eslint complexity: 0 */\nhelper.linkJump = function (href, offset) {\n    // 为空阻止跳转\n    if (!href) {\n        return false;\n    }\n    // 相同地址不跳转\n    if (href === location.href) return false;\n\n    var real = String(href);\n    var h = (real).split('#');\n    var anchor = false;\n    var before = null;\n    var hash = h.length > 1;\n    // 调起事件\n    if (h.length > 2 && h[1] === '') {\n        var event = h[2].split(':');\n        var name = null;\n        var params = '';\n        var param = {};\n        var def = '';\n        var plen = 0;\n        if (event[0] !== '') {\n            name = event[0];\n            if (event.length > 1) {\n                params = event[1].split('&');\n                plen = params.length;\n                for (var i = 0; i < plen; i++) {\n                    var cur = params[i].split('=');\n                    if (cur.length <= 1) continue;\n                    if (cur[0] === 'default') {\n                        def = cur[1];\n                        break;\n                    }\n                    param[cur[0]] = cur[1];\n                }\n            }\n            return window.Block.trigger(name, def !== '' ? def : param);\n        }\n    }\n    // 调起事件新版\n    if (real !== '' && real[0] === '{') {\n        var obj = null;\n        try {\n            obj = JSON.parse(real);\n        } catch (e) {\n            //\n        }\n        if (obj !== null && obj.hasOwnProperty('event') && obj.hasOwnProperty('props') && typeof obj.event === 'string' && typeof obj.props === 'object') {\n            if (obj.hasOwnProperty('uuid')) obj.props.$uuid = obj.uuid;\n            return window.Block.trigger(obj.event, obj.props);\n        }\n    }\n\n    // 平台配置阶段 打印链接到屏幕\n    if (window.Block && window.Block.EDIT) {\n        if (hash) {\n            if (h[0] === location.href.split('#')[0] || href[0] === '#') {\n                anchor = true;\n            }\n        }\n        if (href.indexOf('//') === -1) {\n            return window.Block.trigger('infopop', href);\n        }\n        if (!href || !anchor) {\n            return window.Block.trigger('infopop', '跳转到 : ' + href);\n        }\n    }\n\n    // 冒泡情况，缓存跳转链接（子容器组件跳转中判断子组件是否有配置）\n    helper.link.push(href);\n\n    // 电话及邮件\n    if (real.substr(0, 3) === 'tel' || real.substr(0, 6) === 'mailto') {\n        location.href = real;\n        return true;\n    }\n\n    // 锚点跳转模式\n    var offsetMode = hash && real[0] === '#';\n    if (offsetMode) {\n        before = window.pageYOffset;\n        location.replace(real);\n        var after = window.pageYOffset;\n        if (after !== before && offset) {\n            window.scrollTo(0, after - offset);\n        }\n        return true;\n    }\n    // toast 提示经过上面的过滤非链接类型就认为 toast\n    if (href.indexOf('//') === -1) {\n        window.Block.trigger('infopop', href);\n        return true;\n    }\n    // 拼接 lch\n    var suffix = [];\n    var split = real.split('#')[0];\n    if (split.indexOf('lch') === -1) {\n        var source = helper.getQuery('traffic_source') || helper.getQuery('lch');\n        if (source) {\n            suffix.push('lch=' + encodeURIComponent(source));\n        }\n    }\n\n    // 拼接 cube_id\n    if (window.Block && window.Block.ID) {\n        suffix.push('cube_id=' + window.Block.ID);\n    }\n\n    // 透传 cube_extends\n    var cube_extends = helper.getQuery('cube_extends');\n    if (cube_extends) {\n        suffix.push('cube_extends=' + cube_extends);\n    }\n\n    // 透传 requestId，向日葵系统对接\n    var requestId = helper.getQuery('requestId');\n    if (requestId) {\n        suffix.push('requestId=' + requestId);\n    }\n\n    // Native 内 透传 cityId，若本身携带了 cityId 则不再透传\n    if (Agent.native && href.indexOf('cityId=') === -1) {\n        var cityId = helper.getQuery('cityId');\n        if (typeof cityId === 'string' && cityId !== '') {\n            suffix.push('cityId=' + cityId + '&city_id=' + cityId);\n        }\n    }\n\n    // 拼接最终参数 and 转换携带参数\n    // 拼接最终参数 and 转换携带参数\n    if (suffix.length > 0) {\n        suffix = suffix.join('&');\n        if (real.indexOf('?') === -1) {\n            suffix = '?' + suffix;\n        } else {\n            // 转换参数\n            real = helper._transQuery(real);\n            suffix = '&' + suffix;\n        }\n    }\n\n    // 锚点分割\n    var realHashPos = real.indexOf('#');\n    var realQueryPos = real.indexOf('?');\n    if (realHashPos !== -1) {\n        if (realHashPos > realQueryPos) real = real.replace('#', suffix + '#');\n    } else {\n        real += suffix;\n    }\n\n    var isReplace = typeof offset === 'boolean' && offset;\n\n    // 微信中转换跳转链接格式\n    if (Agent.weixin) {\n        real = helper.transCubeLink(real);\n    }\n    // 字节小程序\n    if (href.indexOf('tt://') === 0) {\n        ttJump(href);\n        return true;\n    }\n    // Native\n    if ((Agent.native && !Agent.dpMerchant) || (Agent.weixin && real.substr(0, 12) === 'knbwxmini://')) {\n        if (isReplace) {\n            CloseJump.jumpWebview({ url: real });\n        } else {\n            KNB.ready(function () {\n                // 小程序下没有 openPage https://sky./docs/knb/knb-doc/list/miniprogram.html#%E6%8E%A5%E5%85%A5%E6%96%B9%E5%BC%8F\n                if(KNB.isMiniProgramWebview){\n                    KNB.openWebview({url: real});\n                }else{\n                    KNB.openPage({ url: real });\n                }\n               \n            });\n        }\n    } else {\n        if (isReplace) {\n            location.replace(real);\n        } else {\n            location.href = real;\n        }\n    }\n\n    // 保存魔方扩展参数至 session storage\n    if (cube_extends && sessionStorage) {\n        try {\n            sessionStorage.setItem('cube_extends', cube_extends);\n        } catch (e) {\n            console.log(e);\n        }\n    }\n\n    return true;\n};\n\nmodule.exports = helper;\n",
                      _cachedSize: 10051,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 54 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nfunction insertScript() {\n    var scriptId = 'TT-JSSDK';\n    var source = 'https://s3.pstatp.com/toutiao/tmajssdk/jssdk-1.0.1.js';\n    return new Promise(function (resolve) {\n        var dom = document.getElementById(scriptId);\n        if (dom) {\n            resolve(true);\n        } else {\n            var body = document.getElementsByTagName('head')[0];\n            var script = document.createElement('script');\n            script.src = source;\n            script.type = 'text/javascript';\n            script.id = scriptId;\n            body.appendChild(script);\n            script.onload = function () {\n                resolve(true);\n            };\n        }\n    });\n}\nmodule.exports = function (href) {\n    var url = href.substr(5);\n    insertScript().then(function (done) {\n        if (done && navigator.userAgent.toLowerCase().includes('toutiaomicroapp')) {\n            window.tt.miniProgram.switchTab({\n                url: url,\n                success: function success(res) {\n                    console.log(res);\n                },\n                fail: function fail(res) {\n                    console.log('switchTab failed');\n                }\n            });\n            window.tt.miniProgram.navigateTo({\n                url: url,\n                success: function success(res) {\n                    console.log(res);\n                },\n                fail: function fail(res) {\n                    console.log('navigateTo failed');\n                }\n            });\n        } else {\n            window.Block.trigger('infopop', '请在头条系App中打开');\n        }\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//block-core/tt/jump.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nfunction insertScript() {\n    var scriptId = 'TT-JSSDK';\n    var source = 'https://s3.pstatp.com/toutiao/tmajssdk/jssdk-1.0.1.js';\n    return new Promise(function (resolve) {\n        var dom = document.getElementById(scriptId);\n        if (dom) {\n            resolve(true);\n        } else {\n            var body = document.getElementsByTagName('head')[0];\n            var script = document.createElement('script');\n            script.src = source;\n            script.type = 'text/javascript';\n            script.id = scriptId;\n            body.appendChild(script);\n            script.onload = function () {\n                resolve(true);\n            };\n        }\n    });\n}\nmodule.exports = function (href) {\n    var url = href.substr(5);\n    insertScript().then(function (done) {\n        if (done && navigator.userAgent.toLowerCase().includes('toutiaomicroapp')) {\n            window.tt.miniProgram.switchTab({\n                url: url,\n                success: function success(res) {\n                    console.log(res);\n                },\n                fail: function fail(res) {\n                    console.log('switchTab failed');\n                }\n            });\n            window.tt.miniProgram.navigateTo({\n                url: url,\n                success: function success(res) {\n                    console.log(res);\n                },\n                fail: function fail(res) {\n                    console.log('navigateTo failed');\n                }\n            });\n        } else {\n            window.Block.trigger('infopop', '请在头条系App中打开');\n        }\n    });\n};\n",
                      _cachedSize: 1583,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 55 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regenerator = require('babel-runtime/regenerator');\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _helper = require('/block-core/helper');\n\nvar _helper2 = _interopRequireDefault(_helper);\n\nvar _mixins = require('./mixins');\n\nvar _mixins2 = _interopRequireDefault(_mixins);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n    components: {},\n    mixins: _mixins2.default,\n    props: {\n        input: {\n            type: String,\n            default: ''\n        },\n        link: {\n            type: String,\n            default: ''\n        },\n        textarea: {\n            type: String,\n            default: ''\n        },\n        color: {\n            type: String,\n            default: ''\n        },\n        datetime: {\n            type: String,\n            default: ''\n        },\n        datetimerange: {\n            type: Array,\n            default: function _default() {\n                return [];\n            }\n        },\n        image: {\n            type: String,\n            default: ''\n        },\n        number: {\n            type: Number,\n            default: 0\n        },\n        _switch: {\n            type: Boolean,\n            default: false\n        },\n        singleselection: {\n            type: String,\n            default: ''\n        },\n        multipleselection: {\n            type: Array,\n            default: function _default() {\n                return [];\n            }\n        },\n        array: {\n            type: Array,\n            default: function _default() {\n                return [{\n                    title: '',\n                    image: ''\n                }];\n            }\n        },\n        object: {\n            type: Object,\n            default: function _default() {\n                return {\n                    title: '',\n                    image: ''\n                };\n            }\n        },\n        // 数据来源支持接口获取，接口定义文档：https://km./page/214603763\n        treeselect: {\n            type: Array,\n            default: function _default() {\n                return [];\n            }\n        }\n    },\n    created: function created() {\n        var _this = this;\n\n        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n            return _regenerator2.default.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            import(\n                            /* webpackChunkName: \"chunk-1\" */\n\n                            './chunk/chunk-1.js').then(function (c) {\n                                c.default();\n                            });\n\n                            import(\n                            /* webpackChunkName: \"chunk-2\" */\n\n                            './chunk/chunk-2.js').then(function (c) {\n                                c.default();\n                            });\n                            // let info = await GetWXUserInfo(); 获取微信用户信息\n                            // 获取cookie\n                            // Helper.getCookie(name);\n                            // 设置 Cookie\n                            // Helper.setCookie(name, value, time, path)\n                            // 获取 Url 参数\n                            // Helper.getQuery(name);\n                            // 生成随机唯一 ID\n                            // Helper.guid();\n\n                        case 2:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, _this);\n        }))();\n    },\n    mounted: function mounted() {\n        // 绑定观察者，监测目标dom的露出，可用于曝光埋点\n        // parma1 监测目标dom\n        // parma2 要传入的回调函数\n        // this.getPostAPI()\n    },\n\n    methods: {\n        jump: function jump() {\n            var url = '';\n            // 链接跳转, 第二个参数为是否为replace方式跳转，默认为false\n            _helper2.default.linkJump(url, false);\n            // 另一种链接跳转形式\n            this.$call(url, false);\n            // 点击埋点上报\n            this.clickEventTracking();\n        },\n\n        // post 请求\n        getPostAPI: function getPostAPI() {\n            var url = '/books/update';\n            var params = {};\n            var options = { type: 'form' // 表单请求 添加option 参数，type类型为定值\n            };this.post(url, params, options).then(function (res) {\n                console.log(res);\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    },\n    computed: {\n        // 埋点上报的参数1 val 信息，可根据埋点需要添加修改\n        tracking: function tracking() {\n            return {\n                demo_title: '埋点信息',\n                demo_index: '埋点信息'\n            };\n        }\n    }\n};\n// 两种方式，另一种方式是引入'/block-core/location', 传入回调函数",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/babel-loader/lib/index.js!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/vue-loader/lib/selector.js?type=script&index=0!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/index.vue",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            3272,
                            3391,
                            "__webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 123))",
                            10,
                          ],
                          [
                            3025,
                            3144,
                            "__webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 122))",
                            9,
                          ],
                          [
                            468,
                            477,
                            "59",
                            7,
                          ],
                          [
                            460,
                            466,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            369,
                            392,
                            "53",
                            5,
                          ],
                          [
                            361,
                            367,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            233,
                            272,
                            "62",
                            3,
                          ],
                          [
                            225,
                            231,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            110,
                            136,
                            "63",
                            1,
                          ],
                          [
                            102,
                            108,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regenerator = __webpack_require__(63);\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(62);\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _helper = __webpack_require__(53);\n\nvar _helper2 = _interopRequireDefault(_helper);\n\nvar _mixins = __webpack_require__(59);\n\nvar _mixins2 = _interopRequireDefault(_mixins);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n    components: {},\n    mixins: _mixins2.default,\n    props: {\n        input: {\n            type: String,\n            default: ''\n        },\n        link: {\n            type: String,\n            default: ''\n        },\n        textarea: {\n            type: String,\n            default: ''\n        },\n        color: {\n            type: String,\n            default: ''\n        },\n        datetime: {\n            type: String,\n            default: ''\n        },\n        datetimerange: {\n            type: Array,\n            default: function _default() {\n                return [];\n            }\n        },\n        image: {\n            type: String,\n            default: ''\n        },\n        number: {\n            type: Number,\n            default: 0\n        },\n        _switch: {\n            type: Boolean,\n            default: false\n        },\n        singleselection: {\n            type: String,\n            default: ''\n        },\n        multipleselection: {\n            type: Array,\n            default: function _default() {\n                return [];\n            }\n        },\n        array: {\n            type: Array,\n            default: function _default() {\n                return [{\n                    title: '',\n                    image: ''\n                }];\n            }\n        },\n        object: {\n            type: Object,\n            default: function _default() {\n                return {\n                    title: '',\n                    image: ''\n                };\n            }\n        },\n        // 数据来源支持接口获取，接口定义文档：https://km./page/214603763\n        treeselect: {\n            type: Array,\n            default: function _default() {\n                return [];\n            }\n        }\n    },\n    created: function created() {\n        var _this = this;\n\n        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n            return _regenerator2.default.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 122)).then(function (c) {\n                                c.default();\n                            });\n\n                            __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 123)).then(function (c) {\n                                c.default();\n                            });\n                            // let info = await GetWXUserInfo(); 获取微信用户信息\n                            // 获取cookie\n                            // Helper.getCookie(name);\n                            // 设置 Cookie\n                            // Helper.setCookie(name, value, time, path)\n                            // 获取 Url 参数\n                            // Helper.getQuery(name);\n                            // 生成随机唯一 ID\n                            // Helper.guid();\n\n                        case 2:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, _this);\n        }))();\n    },\n    mounted: function mounted() {\n        // 绑定观察者，监测目标dom的露出，可用于曝光埋点\n        // parma1 监测目标dom\n        // parma2 要传入的回调函数\n        // this.getPostAPI()\n    },\n\n    methods: {\n        jump: function jump() {\n            var url = '';\n            // 链接跳转, 第二个参数为是否为replace方式跳转，默认为false\n            _helper2.default.linkJump(url, false);\n            // 另一种链接跳转形式\n            this.$call(url, false);\n            // 点击埋点上报\n            this.clickEventTracking();\n        },\n\n        // post 请求\n        getPostAPI: function getPostAPI() {\n            var url = '/books/update';\n            var params = {};\n            var options = { type: 'form' // 表单请求 添加option 参数，type类型为定值\n            };this.post(url, params, options).then(function (res) {\n                console.log(res);\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    },\n    computed: {\n        // 埋点上报的参数1 val 信息，可根据埋点需要添加修改\n        tracking: function tracking() {\n            return {\n                demo_title: '埋点信息',\n                demo_index: '埋点信息'\n            };\n        }\n    }\n};\n// 两种方式，另一种方式是引入'/block-core/location', 传入回调函数",
                      _cachedSize: 5181,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 56 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * 考虑到不同业务的差异性，获取 host 作为一个函数执行以满足差异性\n */\nmodule.exports = function () {\n    var baseURL = {\n        dev: '//test.i..com',\n        st: '//test.i..com',\n        test: '//mf.travel.test..com',\n        pro: '//cube..com',\n        mock: '//localhost:3000'\n    };\n    var env = window.Block && window.Block.ENV !== '' ? window.Block.ENV : 'pro';\n    return baseURL[env];\n};",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/babel-loader/lib/index.js!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/config/host.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\n/**\n * 考虑到不同业务的差异性，获取 host 作为一个函数执行以满足差异性\n */\nmodule.exports = function () {\n    var baseURL = {\n        dev: '//test.i..com',\n        st: '//test.i..com',\n        test: '//mf.travel.test..com',\n        pro: '//cube..com',\n        mock: '//localhost:3000'\n    };\n    var env = window.Block && window.Block.ENV !== '' ? window.Block.ENV : 'pro';\n    return baseURL[env];\n};",
                      _cachedSize: 402,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 57 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar host = require('./host');\nvar path = require('path');\nmodule.exports = {\n    host: host,\n    babel: ['@ss/mtd-vue-mobile'],\n    guard: {\n        include: [path.resolve('src', 'lib'), path.resolve('src', 'mixins')],\n        // 代码混淆详细配置详见 https://github.com/javascript-obfuscator/javascript-obfuscator\n        options: {\n            rotateStringArray: true\n        }\n    }\n};",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/babel-loader/lib/index.js!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/config/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            64,
                            69,
                            "110",
                            3,
                          ],
                          [
                            56,
                            62,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            34,
                            41,
                            "56",
                            1,
                          ],
                          [
                            26,
                            32,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar host = __webpack_require__(56);\nvar path = __webpack_require__(110);\nmodule.exports = {\n    host: host,\n    babel: ['@ss/mtd-vue-mobile'],\n    guard: {\n        include: [path.resolve('src', 'lib'), path.resolve('src', 'mixins')],\n        // 代码混淆详细配置详见 https://github.com/javascript-obfuscator/javascript-obfuscator\n        options: {\n            rotateStringArray: true\n        }\n    }\n};",
                      _cachedSize: 394,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 58 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.get = exports.post = undefined;\n\nvar _superagent = require('superagent');\n\nvar _superagent2 = _interopRequireDefault(_superagent);\n\nvar _config = require('@/config');\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// ref https://visionmedia.github.io/superagent\nvar header = _config2.default.header,\n    host = _config2.default.host;\n\nvar currentHost = host();\n/**\n *\n * @param {string} url\n * @param {object} params\n */\nvar post = function post(url) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  return _superagent2.default.post('' + currentHost + url).withCredentials().send(params).then(function (res) {\n    return res.body;\n  });\n};\n// 混淆\n// javascript-obfuscator:disable\n/**\n *\n * @param {string} url\n * @param {object} params\n */\nvar get = function get(url) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  return _superagent2.default.get('' + currentHost + url).withCredentials().query(params).then(function (res) {\n    return res.body;\n  });\n};\n\nexports.post = post;\nexports.get = get;\n// javascript-obfuscator:disable",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/babel-loader/lib/index.js!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/lib/request.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            242,
                            251,
                            "57",
                            3,
                          ],
                          [
                            234,
                            240,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            147,
                            158,
                            "103",
                            1,
                          ],
                          [
                            139,
                            145,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.get = exports.post = undefined;\n\nvar _superagent = __webpack_require__(103);\n\nvar _superagent2 = _interopRequireDefault(_superagent);\n\nvar _config = __webpack_require__(57);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// ref https://visionmedia.github.io/superagent\nvar header = _config2.default.header,\n    host = _config2.default.host;\n\nvar currentHost = host();\n/**\n *\n * @param {string} url\n * @param {object} params\n */\nvar post = function post(url) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  return _superagent2.default.post('' + currentHost + url).withCredentials().send(params).then(function (res) {\n    return res.body;\n  });\n};\n// 混淆\n// javascript-obfuscator:disable\n/**\n *\n * @param {string} url\n * @param {object} params\n */\nvar get = function get(url) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  return _superagent2.default.get('' + currentHost + url).withCredentials().query(params).then(function (res) {\n    return res.body;\n  });\n};\n\nexports.post = post;\nexports.get = get;\n// javascript-obfuscator:disable",
                      _cachedSize: 1297,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 59 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = require('./request');\n\nvar _request2 = _interopRequireDefault(_request);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar base = {\n    methods: {\n        toast: function toast(msg) {\n            window.Block.trigger('infopop', msg);\n        }\n    }\n};\n\nexports.default = [base, _request2.default];",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/babel-loader/lib/index.js!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/mixins/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            106,
                            116,
                            "60",
                            1,
                          ],
                          [
                            98,
                            104,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = __webpack_require__(60);\n\nvar _request2 = _interopRequireDefault(_request);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar base = {\n    methods: {\n        toast: function toast(msg) {\n            window.Block.trigger('infopop', msg);\n        }\n    }\n};\n\nexports.default = [base, _request2.default];",
                      _cachedSize: 438,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 60 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = require('@/lib/request');\n\nexports.default = {\n    created: function created() {\n        this.post = _request.post;\n        this.get = _request.get;\n    }\n};",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/babel-loader/lib/index.js!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/mixins/request.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            106,
                            120,
                            "58",
                            1,
                          ],
                          [
                            98,
                            104,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = __webpack_require__(58);\n\nexports.default = {\n    created: function created() {\n        this.post = _request.post;\n        this.get = _request.get;\n    }\n};",
                      _cachedSize: 241,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 61 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = { \"default\": require(\"core-js/library/fn/promise\"), __esModule: true };",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/babel-runtime/core-js/promise.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            38,
                            65,
                            "65",
                            0,
                          ],
                          [
                            30,
                            36,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "module.exports = { \"default\": __webpack_require__(65), __esModule: true };",
                      _cachedSize: 74,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 62 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "\"use strict\";\n\nexports.__esModule = true;\n\nvar _promise = require(\"../core-js/promise\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (fn) {\n  return function () {\n    var gen = fn.apply(this, arguments);\n    return new _promise2.default(function (resolve, reject) {\n      function step(key, arg) {\n        try {\n          var info = gen[key](arg);\n          var value = info.value;\n        } catch (error) {\n          reject(error);\n          return;\n        }\n\n        if (info.done) {\n          resolve(value);\n        } else {\n          return _promise2.default.resolve(value).then(function (value) {\n            step(\"next\", value);\n          }, function (err) {\n            step(\"throw\", err);\n          });\n        }\n      }\n\n      return step(\"next\");\n    });\n  };\n};",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/babel-runtime/helpers/asyncToGenerator.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            66,
                            85,
                            "61",
                            1,
                          ],
                          [
                            58,
                            64,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nexports.__esModule = true;\n\nvar _promise = __webpack_require__(61);\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (fn) {\n  return function () {\n    var gen = fn.apply(this, arguments);\n    return new _promise2.default(function (resolve, reject) {\n      function step(key, arg) {\n        try {\n          var info = gen[key](arg);\n          var value = info.value;\n        } catch (error) {\n          reject(error);\n          return;\n        }\n\n        if (info.done) {\n          resolve(value);\n        } else {\n          return _promise2.default.resolve(value).then(function (value) {\n            step(\"next\", value);\n          }, function (err) {\n            step(\"throw\", err);\n          });\n        }\n      }\n\n      return step(\"next\");\n    });\n  };\n};",
                      _cachedSize: 887,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 63 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = require(\"regenerator-runtime\");\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/babel-runtime/regenerator/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            25,
                            45,
                            "100",
                            0,
                          ],
                          [
                            17,
                            23,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "module.exports = __webpack_require__(100);\n",
                      _cachedSize: 43,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 64 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "\r\n/**\r\n * Expose `Emitter`.\r\n */\r\n\r\nif (typeof module !== 'undefined') {\r\n  module.exports = Emitter;\r\n}\r\n\r\n/**\r\n * Initialize a new `Emitter`.\r\n *\r\n * @api public\r\n */\r\n\r\nfunction Emitter(obj) {\r\n  if (obj) return mixin(obj);\r\n};\r\n\r\n/**\r\n * Mixin the emitter properties.\r\n *\r\n * @param {Object} obj\r\n * @return {Object}\r\n * @api private\r\n */\r\n\r\nfunction mixin(obj) {\r\n  for (var key in Emitter.prototype) {\r\n    obj[key] = Emitter.prototype[key];\r\n  }\r\n  return obj;\r\n}\r\n\r\n/**\r\n * Listen on the given `event` with `fn`.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.on =\r\nEmitter.prototype.addEventListener = function(event, fn){\r\n  this._callbacks = this._callbacks || {};\r\n  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])\r\n    .push(fn);\r\n  return this;\r\n};\r\n\r\n/**\r\n * Adds an `event` listener that will be invoked a single\r\n * time then automatically removed.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.once = function(event, fn){\r\n  function on() {\r\n    this.off(event, on);\r\n    fn.apply(this, arguments);\r\n  }\r\n\r\n  on.fn = fn;\r\n  this.on(event, on);\r\n  return this;\r\n};\r\n\r\n/**\r\n * Remove the given callback for `event` or all\r\n * registered callbacks.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.off =\r\nEmitter.prototype.removeListener =\r\nEmitter.prototype.removeAllListeners =\r\nEmitter.prototype.removeEventListener = function(event, fn){\r\n  this._callbacks = this._callbacks || {};\r\n\r\n  // all\r\n  if (0 == arguments.length) {\r\n    this._callbacks = {};\r\n    return this;\r\n  }\r\n\r\n  // specific event\r\n  var callbacks = this._callbacks['$' + event];\r\n  if (!callbacks) return this;\r\n\r\n  // remove all handlers\r\n  if (1 == arguments.length) {\r\n    delete this._callbacks['$' + event];\r\n    return this;\r\n  }\r\n\r\n  // remove specific handler\r\n  var cb;\r\n  for (var i = 0; i < callbacks.length; i++) {\r\n    cb = callbacks[i];\r\n    if (cb === fn || cb.fn === fn) {\r\n      callbacks.splice(i, 1);\r\n      break;\r\n    }\r\n  }\r\n\r\n  // Remove event specific arrays for event types that no\r\n  // one is subscribed for to avoid memory leak.\r\n  if (callbacks.length === 0) {\r\n    delete this._callbacks['$' + event];\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\n/**\r\n * Emit `event` with the given args.\r\n *\r\n * @param {String} event\r\n * @param {Mixed} ...\r\n * @return {Emitter}\r\n */\r\n\r\nEmitter.prototype.emit = function(event){\r\n  this._callbacks = this._callbacks || {};\r\n\r\n  var args = new Array(arguments.length - 1)\r\n    , callbacks = this._callbacks['$' + event];\r\n\r\n  for (var i = 1; i < arguments.length; i++) {\r\n    args[i - 1] = arguments[i];\r\n  }\r\n\r\n  if (callbacks) {\r\n    callbacks = callbacks.slice(0);\r\n    for (var i = 0, len = callbacks.length; i < len; ++i) {\r\n      callbacks[i].apply(this, args);\r\n    }\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\n/**\r\n * Return array of callbacks for `event`.\r\n *\r\n * @param {String} event\r\n * @return {Array}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.listeners = function(event){\r\n  this._callbacks = this._callbacks || {};\r\n  return this._callbacks['$' + event] || [];\r\n};\r\n\r\n/**\r\n * Check if this emitter has `event` handlers.\r\n *\r\n * @param {String} event\r\n * @return {Boolean}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.hasListeners = function(event){\r\n  return !! this.listeners(event).length;\r\n};\r\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/component-emitter/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            40,
                            68,
                            "true",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\r\n/**\r\n * Expose `Emitter`.\r\n */\r\n\r\nif (true) {\r\n  module.exports = Emitter;\r\n}\r\n\r\n/**\r\n * Initialize a new `Emitter`.\r\n *\r\n * @api public\r\n */\r\n\r\nfunction Emitter(obj) {\r\n  if (obj) return mixin(obj);\r\n};\r\n\r\n/**\r\n * Mixin the emitter properties.\r\n *\r\n * @param {Object} obj\r\n * @return {Object}\r\n * @api private\r\n */\r\n\r\nfunction mixin(obj) {\r\n  for (var key in Emitter.prototype) {\r\n    obj[key] = Emitter.prototype[key];\r\n  }\r\n  return obj;\r\n}\r\n\r\n/**\r\n * Listen on the given `event` with `fn`.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.on =\r\nEmitter.prototype.addEventListener = function(event, fn){\r\n  this._callbacks = this._callbacks || {};\r\n  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])\r\n    .push(fn);\r\n  return this;\r\n};\r\n\r\n/**\r\n * Adds an `event` listener that will be invoked a single\r\n * time then automatically removed.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.once = function(event, fn){\r\n  function on() {\r\n    this.off(event, on);\r\n    fn.apply(this, arguments);\r\n  }\r\n\r\n  on.fn = fn;\r\n  this.on(event, on);\r\n  return this;\r\n};\r\n\r\n/**\r\n * Remove the given callback for `event` or all\r\n * registered callbacks.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.off =\r\nEmitter.prototype.removeListener =\r\nEmitter.prototype.removeAllListeners =\r\nEmitter.prototype.removeEventListener = function(event, fn){\r\n  this._callbacks = this._callbacks || {};\r\n\r\n  // all\r\n  if (0 == arguments.length) {\r\n    this._callbacks = {};\r\n    return this;\r\n  }\r\n\r\n  // specific event\r\n  var callbacks = this._callbacks['$' + event];\r\n  if (!callbacks) return this;\r\n\r\n  // remove all handlers\r\n  if (1 == arguments.length) {\r\n    delete this._callbacks['$' + event];\r\n    return this;\r\n  }\r\n\r\n  // remove specific handler\r\n  var cb;\r\n  for (var i = 0; i < callbacks.length; i++) {\r\n    cb = callbacks[i];\r\n    if (cb === fn || cb.fn === fn) {\r\n      callbacks.splice(i, 1);\r\n      break;\r\n    }\r\n  }\r\n\r\n  // Remove event specific arrays for event types that no\r\n  // one is subscribed for to avoid memory leak.\r\n  if (callbacks.length === 0) {\r\n    delete this._callbacks['$' + event];\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\n/**\r\n * Emit `event` with the given args.\r\n *\r\n * @param {String} event\r\n * @param {Mixed} ...\r\n * @return {Emitter}\r\n */\r\n\r\nEmitter.prototype.emit = function(event){\r\n  this._callbacks = this._callbacks || {};\r\n\r\n  var args = new Array(arguments.length - 1)\r\n    , callbacks = this._callbacks['$' + event];\r\n\r\n  for (var i = 1; i < arguments.length; i++) {\r\n    args[i - 1] = arguments[i];\r\n  }\r\n\r\n  if (callbacks) {\r\n    callbacks = callbacks.slice(0);\r\n    for (var i = 0, len = callbacks.length; i < len; ++i) {\r\n      callbacks[i].apply(this, args);\r\n    }\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\n/**\r\n * Return array of callbacks for `event`.\r\n *\r\n * @param {String} event\r\n * @return {Array}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.listeners = function(event){\r\n  this._callbacks = this._callbacks || {};\r\n  return this._callbacks['$' + event] || [];\r\n};\r\n\r\n/**\r\n * Check if this emitter has `event` handlers.\r\n *\r\n * @param {String} event\r\n * @return {Boolean}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.hasListeners = function(event){\r\n  return !! this.listeners(event).length;\r\n};\r\n",
                      _cachedSize: 3443,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 65 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "require('../modules/es6.object.to-string');\nrequire('../modules/es6.string.iterator');\nrequire('../modules/web.dom.iterable');\nrequire('../modules/es6.promise');\nrequire('../modules/es7.promise.finally');\nrequire('../modules/es7.promise.try');\nmodule.exports = require('../modules/_core').Promise;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/fn/promise.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            269,
                            286,
                            "3",
                            12,
                          ],
                          [
                            261,
                            267,
                            "__webpack_require__",
                            13,
                          ],
                          [
                            213,
                            240,
                            "98",
                            10,
                          ],
                          [
                            205,
                            211,
                            "__webpack_require__",
                            11,
                          ],
                          [
                            170,
                            201,
                            "97",
                            8,
                          ],
                          [
                            162,
                            168,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            135,
                            158,
                            "95",
                            6,
                          ],
                          [
                            127,
                            133,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            95,
                            123,
                            "99",
                            4,
                          ],
                          [
                            87,
                            93,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            52,
                            83,
                            "96",
                            2,
                          ],
                          [
                            44,
                            50,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            8,
                            40,
                            "94",
                            0,
                          ],
                          [
                            0,
                            6,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "__webpack_require__(94);\n__webpack_require__(96);\n__webpack_require__(99);\n__webpack_require__(95);\n__webpack_require__(97);\n__webpack_require__(98);\nmodule.exports = __webpack_require__(3).Promise;\n",
                      _cachedSize: 199,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 66 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = function () { /* empty */ };\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_add-to-unscopables.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = function () { /* empty */ };\n",
                      _cachedSize: 46,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 67 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_an-instance.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n",
                      _cachedSize: 237,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 68 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = require('./_to-iobject');\nvar toLength = require('./_to-length');\nvar toAbsoluteIndex = require('./_to-absolute-index');\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_array-includes.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            165,
                            186,
                            "88",
                            4,
                          ],
                          [
                            157,
                            163,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            118,
                            131,
                            "39",
                            2,
                          ],
                          [
                            110,
                            116,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            77,
                            91,
                            "22",
                            0,
                          ],
                          [
                            69,
                            75,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(22);\nvar toLength = __webpack_require__(39);\nvar toAbsoluteIndex = __webpack_require__(88);\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n",
                      _cachedSize: 915,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 69 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var ctx = require('./_ctx');\nvar call = require('./_iter-call');\nvar isArrayIter = require('./_is-array-iter');\nvar anObject = require('./_an-object');\nvar toLength = require('./_to-length');\nvar getIterFn = require('./core.get-iterator-method');\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_for-of.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            216,
                            243,
                            "92",
                            10,
                          ],
                          [
                            208,
                            214,
                            "__webpack_require__",
                            11,
                          ],
                          [
                            175,
                            188,
                            "39",
                            8,
                          ],
                          [
                            167,
                            173,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            135,
                            148,
                            "2",
                            6,
                          ],
                          [
                            127,
                            133,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            91,
                            108,
                            "73",
                            4,
                          ],
                          [
                            83,
                            89,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            48,
                            61,
                            "74",
                            2,
                          ],
                          [
                            40,
                            46,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            18,
                            25,
                            "10",
                            0,
                          ],
                          [
                            10,
                            16,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var ctx = __webpack_require__(10);\nvar call = __webpack_require__(74);\nvar isArrayIter = __webpack_require__(73);\nvar anObject = __webpack_require__(2);\nvar toLength = __webpack_require__(39);\nvar getIterFn = __webpack_require__(92);\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n",
                      _cachedSize: 1163,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 70 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = !require('./_descriptors') && !require('./_fails')(function () {\n  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_ie8-dom-define.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            121,
                            135,
                            "16",
                            4,
                          ],
                          [
                            113,
                            119,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            56,
                            65,
                            "30",
                            2,
                          ],
                          [
                            48,
                            54,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            26,
                            41,
                            "5",
                            0,
                          ],
                          [
                            18,
                            24,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "module.exports = !__webpack_require__(5) && !__webpack_require__(30)(function () {\n  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n",
                      _cachedSize: 199,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 71 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_invoke.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n",
                      _cachedSize: 701,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 72 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = require('./_cof');\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_iobject.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            87,
                            94,
                            "9",
                            0,
                          ],
                          [
                            79,
                            85,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(9);\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n",
                      _cachedSize: 294,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 73 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// check on default Array iterator\nvar Iterators = require('./_iterators');\nvar ITERATOR = require('./_wks')('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_is-array-iter.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            99,
                            106,
                            "1",
                            2,
                          ],
                          [
                            91,
                            97,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            59,
                            72,
                            "7",
                            0,
                          ],
                          [
                            51,
                            57,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// check on default Array iterator\nvar Iterators = __webpack_require__(7);\nvar ITERATOR = __webpack_require__(1)('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n",
                      _cachedSize: 283,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 74 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// call something on iterator step with safe closing on error\nvar anObject = require('./_an-object');\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_iter-call.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            85,
                            98,
                            "2",
                            0,
                          ],
                          [
                            77,
                            83,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(2);\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n",
                      _cachedSize: 409,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 75 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\nvar create = require('./_object-create');\nvar descriptor = require('./_property-desc');\nvar setToStringTag = require('./_set-to-string-tag');\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nrequire('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_iter-create.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            279,
                            286,
                            "1",
                            9,
                          ],
                          [
                            271,
                            277,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            241,
                            249,
                            "4",
                            7,
                          ],
                          [
                            233,
                            239,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            131,
                            152,
                            "19",
                            5,
                          ],
                          [
                            123,
                            129,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            81,
                            98,
                            "35",
                            3,
                          ],
                          [
                            73,
                            79,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            35,
                            52,
                            "79",
                            1,
                          ],
                          [
                            27,
                            33,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\nvar create = __webpack_require__(79);\nvar descriptor = __webpack_require__(35);\nvar setToStringTag = __webpack_require__(19);\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(4)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n",
                      _cachedSize: 506,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 76 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var ITERATOR = require('./_wks')('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_iter-detect.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            23,
                            30,
                            "1",
                            0,
                          ],
                          [
                            15,
                            21,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var ITERATOR = __webpack_require__(1)('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n",
                      _cachedSize: 650,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 77 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_iter-step.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n",
                      _cachedSize: 86,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 78 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var global = require('./_global');\nvar macrotask = require('./_task').set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = require('./_cof')(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_microtask.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            229,
                            236,
                            "9",
                            4,
                          ],
                          [
                            221,
                            227,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            59,
                            67,
                            "38",
                            2,
                          ],
                          [
                            51,
                            57,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            21,
                            31,
                            "0",
                            0,
                          ],
                          [
                            13,
                            19,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var global = __webpack_require__(0);\nvar macrotask = __webpack_require__(38).set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(9)(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n",
                      _cachedSize: 1994,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 79 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = require('./_an-object');\nvar dPs = require('./_object-dps');\nvar enumBugKeys = require('./_enum-bug-keys');\nvar IE_PROTO = require('./_shared-key')('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = require('./_dom-create')('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  require('./_html').appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_object-create.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            638,
                            646,
                            "31",
                            10,
                          ],
                          [
                            630,
                            636,
                            "__webpack_require__",
                            11,
                          ],
                          [
                            483,
                            497,
                            "16",
                            8,
                          ],
                          [
                            475,
                            481,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            201,
                            215,
                            "20",
                            6,
                          ],
                          [
                            193,
                            199,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            157,
                            174,
                            "29",
                            4,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            113,
                            127,
                            "80",
                            2,
                          ],
                          [
                            105,
                            111,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            78,
                            91,
                            "2",
                            0,
                          ],
                          [
                            70,
                            76,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(2);\nvar dPs = __webpack_require__(80);\nvar enumBugKeys = __webpack_require__(29);\nvar IE_PROTO = __webpack_require__(20)('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(16)('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(31).appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n",
                      _cachedSize: 1502,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 80 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var dP = require('./_object-dp');\nvar anObject = require('./_an-object');\nvar getKeys = require('./_object-keys');\n\nmodule.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_object-dps.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            141,
                            156,
                            "5",
                            6,
                          ],
                          [
                            133,
                            139,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            96,
                            111,
                            "83",
                            4,
                          ],
                          [
                            88,
                            94,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            57,
                            70,
                            "2",
                            2,
                          ],
                          [
                            49,
                            55,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            17,
                            30,
                            "13",
                            0,
                          ],
                          [
                            9,
                            15,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var dP = __webpack_require__(13);\nvar anObject = __webpack_require__(2);\nvar getKeys = __webpack_require__(83);\n\nmodule.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n",
                      _cachedSize: 398,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 81 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = require('./_has');\nvar toObject = require('./_to-object');\nvar IE_PROTO = require('./_shared-key')('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_object-gpo.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            140,
                            154,
                            "20",
                            4,
                          ],
                          [
                            132,
                            138,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            100,
                            113,
                            "89",
                            2,
                          ],
                          [
                            92,
                            98,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            66,
                            73,
                            "12",
                            0,
                          ],
                          [
                            58,
                            64,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(12);\nvar toObject = __webpack_require__(89);\nvar IE_PROTO = __webpack_require__(20)('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n",
                      _cachedSize: 498,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 82 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var has = require('./_has');\nvar toIObject = require('./_to-iobject');\nvar arrayIndexOf = require('./_array-includes')(false);\nvar IE_PROTO = require('./_shared-key')('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_object-keys-internal.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            150,
                            164,
                            "20",
                            6,
                          ],
                          [
                            142,
                            148,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            98,
                            116,
                            "68",
                            4,
                          ],
                          [
                            90,
                            96,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            53,
                            67,
                            "22",
                            2,
                          ],
                          [
                            45,
                            51,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            18,
                            25,
                            "12",
                            0,
                          ],
                          [
                            10,
                            16,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var has = __webpack_require__(12);\nvar toIObject = __webpack_require__(22);\nvar arrayIndexOf = __webpack_require__(68)(false);\nvar IE_PROTO = __webpack_require__(20)('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n",
                      _cachedSize: 536,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 83 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = require('./_object-keys-internal');\nvar enumBugKeys = require('./_enum-bug-keys');\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_object-keys.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            114,
                            131,
                            "29",
                            2,
                          ],
                          [
                            106,
                            112,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            60,
                            84,
                            "82",
                            0,
                          ],
                          [
                            52,
                            58,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(82);\nvar enumBugKeys = __webpack_require__(29);\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n",
                      _cachedSize: 207,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 84 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var hide = require('./_hide');\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_redefine-all.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            19,
                            27,
                            "4",
                            0,
                          ],
                          [
                            11,
                            17,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var hide = __webpack_require__(4);\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n",
                      _cachedSize: 221,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 85 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = require('./_hide');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_redefine.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            25,
                            33,
                            "4",
                            0,
                          ],
                          [
                            17,
                            23,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "module.exports = __webpack_require__(4);\n",
                      _cachedSize: 41,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 86 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\nvar global = require('./_global');\nvar core = require('./_core');\nvar dP = require('./_object-dp');\nvar DESCRIPTORS = require('./_descriptors');\nvar SPECIES = require('./_wks')('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_set-species.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            181,
                            188,
                            "1",
                            9,
                          ],
                          [
                            173,
                            179,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            140,
                            155,
                            "5",
                            7,
                          ],
                          [
                            132,
                            138,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            97,
                            110,
                            "13",
                            5,
                          ],
                          [
                            89,
                            95,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            68,
                            76,
                            "3",
                            3,
                          ],
                          [
                            60,
                            66,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            35,
                            45,
                            "0",
                            1,
                          ],
                          [
                            27,
                            33,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\nvar global = __webpack_require__(0);\nvar core = __webpack_require__(3);\nvar dP = __webpack_require__(13);\nvar DESCRIPTORS = __webpack_require__(5);\nvar SPECIES = __webpack_require__(1)('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n",
                      _cachedSize: 430,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 87 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var toInteger = require('./_to-integer');\nvar defined = require('./_defined');\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_string-at.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            64,
                            75,
                            "15",
                            2,
                          ],
                          [
                            56,
                            62,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            24,
                            38,
                            "21",
                            0,
                          ],
                          [
                            16,
                            22,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var toInteger = __webpack_require__(21);\nvar defined = __webpack_require__(15);\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n",
                      _cachedSize: 621,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 88 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var toInteger = require('./_to-integer');\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_to-absolute-index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            24,
                            38,
                            "21",
                            0,
                          ],
                          [
                            16,
                            22,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var toInteger = __webpack_require__(21);\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n",
                      _cachedSize: 222,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 89 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 7.1.13 ToObject(argument)\nvar defined = require('./_defined');\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_to-object.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            51,
                            62,
                            "15",
                            0,
                          ],
                          [
                            43,
                            49,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(15);\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n",
                      _cachedSize: 134,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 90 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = require('./_is-object');\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_to-primitive.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            69,
                            82,
                            "6",
                            0,
                          ],
                          [
                            61,
                            67,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(6);\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n",
                      _cachedSize: 654,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 91 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var global = require('./_global');\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/_user-agent.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            21,
                            31,
                            "0",
                            0,
                          ],
                          [
                            13,
                            19,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var global = __webpack_require__(0);\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n",
                      _cachedSize: 129,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 92 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var classof = require('./_classof');\nvar ITERATOR = require('./_wks')('iterator');\nvar Iterators = require('./_iterators');\nmodule.exports = require('./_core').getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/core.get-iterator-method.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            149,
                            157,
                            "3",
                            6,
                          ],
                          [
                            141,
                            147,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            107,
                            120,
                            "7",
                            4,
                          ],
                          [
                            99,
                            105,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            60,
                            67,
                            "1",
                            2,
                          ],
                          [
                            52,
                            58,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            22,
                            33,
                            "28",
                            0,
                          ],
                          [
                            14,
                            20,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "var classof = __webpack_require__(28);\nvar ITERATOR = __webpack_require__(1)('iterator');\nvar Iterators = __webpack_require__(7);\nmodule.exports = __webpack_require__(3).getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n",
                      _cachedSize: 307,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 93 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\nvar addToUnscopables = require('./_add-to-unscopables');\nvar step = require('./_iter-step');\nvar Iterators = require('./_iterators');\nvar toIObject = require('./_to-iobject');\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/es6.array.iterator.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            371,
                            386,
                            "32",
                            9,
                          ],
                          [
                            363,
                            369,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            172,
                            186,
                            "22",
                            7,
                          ],
                          [
                            164,
                            170,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            131,
                            144,
                            "7",
                            5,
                          ],
                          [
                            123,
                            129,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            90,
                            103,
                            "77",
                            3,
                          ],
                          [
                            82,
                            88,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            45,
                            67,
                            "66",
                            1,
                          ],
                          [
                            37,
                            43,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\nvar addToUnscopables = __webpack_require__(66);\nvar step = __webpack_require__(77);\nvar Iterators = __webpack_require__(7);\nvar toIObject = __webpack_require__(22);\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(32)(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n",
                      _cachedSize: 1090,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 94 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/es6.object.to-string.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "",
                      _cachedSize: 0,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 95 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\nvar LIBRARY = require('./_library');\nvar global = require('./_global');\nvar ctx = require('./_ctx');\nvar classof = require('./_classof');\nvar $export = require('./_export');\nvar isObject = require('./_is-object');\nvar aFunction = require('./_a-function');\nvar anInstance = require('./_an-instance');\nvar forOf = require('./_for-of');\nvar speciesConstructor = require('./_species-constructor');\nvar task = require('./_task').set;\nvar microtask = require('./_microtask')();\nvar newPromiseCapabilityModule = require('./_new-promise-capability');\nvar perform = require('./_perform');\nvar userAgent = require('./_user-agent');\nvar promiseResolve = require('./_promise-resolve');\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = require('./_redefine-all')($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\nrequire('./_set-to-string-tag')($Promise, PROMISE);\nrequire('./_set-species')(PROMISE);\nWrapper = require('./_core')[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/es6.promise.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            8482,
                            8497,
                            "76",
                            43,
                          ],
                          [
                            8474,
                            8480,
                            "__webpack_require__",
                            44,
                          ],
                          [
                            7911,
                            7919,
                            "3",
                            41,
                          ],
                          [
                            7903,
                            7909,
                            "__webpack_require__",
                            42,
                          ],
                          [
                            7865,
                            7880,
                            "86",
                            39,
                          ],
                          [
                            7857,
                            7863,
                            "__webpack_require__",
                            40,
                          ],
                          [
                            7813,
                            7834,
                            "19",
                            37,
                          ],
                          [
                            7805,
                            7811,
                            "__webpack_require__",
                            38,
                          ],
                          [
                            6591,
                            6607,
                            "84",
                            35,
                          ],
                          [
                            6583,
                            6589,
                            "__webpack_require__",
                            36,
                          ],
                          [
                            1327,
                            1334,
                            "1",
                            33,
                          ],
                          [
                            1319,
                            1325,
                            "__webpack_require__",
                            34,
                          ],
                          [
                            665,
                            684,
                            "34",
                            31,
                          ],
                          [
                            657,
                            663,
                            "__webpack_require__",
                            32,
                          ],
                          [
                            618,
                            632,
                            "91",
                            29,
                          ],
                          [
                            610,
                            616,
                            "__webpack_require__",
                            30,
                          ],
                          [
                            579,
                            590,
                            "33",
                            27,
                          ],
                          [
                            571,
                            577,
                            "__webpack_require__",
                            28,
                          ],
                          [
                            527,
                            553,
                            "18",
                            25,
                          ],
                          [
                            519,
                            525,
                            "__webpack_require__",
                            26,
                          ],
                          [
                            467,
                            480,
                            "78",
                            23,
                          ],
                          [
                            459,
                            465,
                            "__webpack_require__",
                            24,
                          ],
                          [
                            427,
                            435,
                            "38",
                            21,
                          ],
                          [
                            419,
                            425,
                            "__webpack_require__",
                            22,
                          ],
                          [
                            381,
                            404,
                            "37",
                            19,
                          ],
                          [
                            373,
                            379,
                            "__webpack_require__",
                            20,
                          ],
                          [
                            334,
                            344,
                            "69",
                            17,
                          ],
                          [
                            326,
                            332,
                            "__webpack_require__",
                            18,
                          ],
                          [
                            295,
                            310,
                            "67",
                            15,
                          ],
                          [
                            287,
                            293,
                            "__webpack_require__",
                            16,
                          ],
                          [
                            252,
                            266,
                            "8",
                            13,
                          ],
                          [
                            244,
                            250,
                            "__webpack_require__",
                            14,
                          ],
                          [
                            211,
                            224,
                            "6",
                            11,
                          ],
                          [
                            203,
                            209,
                            "__webpack_require__",
                            12,
                          ],
                          [
                            174,
                            184,
                            "11",
                            9,
                          ],
                          [
                            166,
                            172,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            137,
                            148,
                            "28",
                            7,
                          ],
                          [
                            129,
                            135,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            104,
                            111,
                            "10",
                            5,
                          ],
                          [
                            96,
                            102,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            72,
                            82,
                            "0",
                            3,
                          ],
                          [
                            64,
                            70,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            36,
                            47,
                            "17",
                            1,
                          ],
                          [
                            28,
                            34,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\nvar LIBRARY = __webpack_require__(17);\nvar global = __webpack_require__(0);\nvar ctx = __webpack_require__(10);\nvar classof = __webpack_require__(28);\nvar $export = __webpack_require__(11);\nvar isObject = __webpack_require__(6);\nvar aFunction = __webpack_require__(8);\nvar anInstance = __webpack_require__(67);\nvar forOf = __webpack_require__(69);\nvar speciesConstructor = __webpack_require__(37);\nvar task = __webpack_require__(38).set;\nvar microtask = __webpack_require__(78)();\nvar newPromiseCapabilityModule = __webpack_require__(18);\nvar perform = __webpack_require__(33);\nvar userAgent = __webpack_require__(91);\nvar promiseResolve = __webpack_require__(34);\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(84)($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(19)($Promise, PROMISE);\n__webpack_require__(86)(PROMISE);\nWrapper = __webpack_require__(3)[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(76)(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n",
                      _cachedSize: 9783,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 96 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\nvar $at = require('./_string-at')(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\nrequire('./_iter-define')(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/es6.string.iterator.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            108,
                            123,
                            "32",
                            3,
                          ],
                          [
                            100,
                            106,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            32,
                            45,
                            "87",
                            1,
                          ],
                          [
                            24,
                            30,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\nvar $at = __webpack_require__(87)(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(32)(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n",
                      _cachedSize: 516,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 97 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "// https://github.com/tc39/proposal-promise-finally\n'use strict';\nvar $export = require('./_export');\nvar core = require('./_core');\nvar global = require('./_global');\nvar speciesConstructor = require('./_species-constructor');\nvar promiseResolve = require('./_promise-resolve');\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/es7.promise.finally.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            257,
                            276,
                            "34",
                            9,
                          ],
                          [
                            249,
                            255,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            201,
                            224,
                            "37",
                            7,
                          ],
                          [
                            193,
                            199,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            154,
                            164,
                            "0",
                            5,
                          ],
                          [
                            146,
                            152,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            121,
                            129,
                            "3",
                            3,
                          ],
                          [
                            113,
                            119,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            88,
                            98,
                            "11",
                            1,
                          ],
                          [
                            80,
                            86,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            52,
                            64,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(11);\nvar core = __webpack_require__(3);\nvar global = __webpack_require__(0);\nvar speciesConstructor = __webpack_require__(37);\nvar promiseResolve = __webpack_require__(34);\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n",
                      _cachedSize: 743,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 98 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n// https://github.com/tc39/proposal-promise-try\nvar $export = require('./_export');\nvar newPromiseCapability = require('./_new-promise-capability');\nvar perform = require('./_perform');\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/es7.promise.try.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            185,
                            196,
                            "33",
                            5,
                          ],
                          [
                            177,
                            183,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            133,
                            159,
                            "18",
                            3,
                          ],
                          [
                            125,
                            131,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            84,
                            94,
                            "11",
                            1,
                          ],
                          [
                            76,
                            82,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(11);\nvar newPromiseCapability = __webpack_require__(18);\nvar perform = __webpack_require__(33);\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n",
                      _cachedSize: 456,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 99 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "require('./es6.array.iterator');\nvar global = require('./_global');\nvar hide = require('./_hide');\nvar Iterators = require('./_iterators');\nvar TO_STRING_TAG = require('./_wks')('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/core-js/library/modules/web.dom.iterable.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            168,
                            175,
                            "1",
                            8,
                          ],
                          [
                            160,
                            166,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            123,
                            136,
                            "7",
                            6,
                          ],
                          [
                            115,
                            121,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            87,
                            95,
                            "4",
                            4,
                          ],
                          [
                            79,
                            85,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            54,
                            64,
                            "0",
                            2,
                          ],
                          [
                            46,
                            52,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            8,
                            29,
                            "93",
                            0,
                          ],
                          [
                            0,
                            6,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "__webpack_require__(93);\nvar global = __webpack_require__(0);\nvar hide = __webpack_require__(4);\nvar Iterators = __webpack_require__(7);\nvar TO_STRING_TAG = __webpack_require__(1)('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n",
                      _cachedSize: 971,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 100 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() { return this })() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = require(\"./runtime\");\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/regenerator-runtime/runtime-module.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            862,
                            872,
                            "101",
                            0,
                          ],
                          [
                            854,
                            860,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() { return this })() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(101);\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n",
                      _cachedSize: 1133,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 101 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() { return this })() || Function(\"return this\")()\n);\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/regenerator-runtime/runtime.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() { return this })() || Function(\"return this\")()\n);\n",
                      _cachedSize: 24124,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 102 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "function Agent() {\n  this._defaults = [];\n}\n\n[\"use\", \"on\", \"once\", \"set\", \"query\", \"type\", \"accept\", \"auth\", \"withCredentials\", \"sortQuery\", \"retry\", \"ok\", \"redirects\",\n \"timeout\", \"buffer\", \"serialize\", \"parse\", \"ca\", \"key\", \"pfx\", \"cert\"].forEach(function(fn) {\n  /** Default setting for all requests from this agent */\n  Agent.prototype[fn] = function(/*varargs*/) {\n    this._defaults.push({fn:fn, arguments:arguments});\n    return this;\n  }\n});\n\nAgent.prototype._setDefaults = function(req) {\n    this._defaults.forEach(function(def) {\n      req[def.fn].apply(req, def.arguments);\n    });\n};\n\nmodule.exports = Agent;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/superagent/lib/agent-base.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "function Agent() {\n  this._defaults = [];\n}\n\n[\"use\", \"on\", \"once\", \"set\", \"query\", \"type\", \"accept\", \"auth\", \"withCredentials\", \"sortQuery\", \"retry\", \"ok\", \"redirects\",\n \"timeout\", \"buffer\", \"serialize\", \"parse\", \"ca\", \"key\", \"pfx\", \"cert\"].forEach(function(fn) {\n  /** Default setting for all requests from this agent */\n  Agent.prototype[fn] = function(/*varargs*/) {\n    this._defaults.push({fn:fn, arguments:arguments});\n    return this;\n  }\n});\n\nAgent.prototype._setDefaults = function(req) {\n    this._defaults.forEach(function(def) {\n      req[def.fn].apply(req, def.arguments);\n    });\n};\n\nmodule.exports = Agent;\n",
                      _cachedSize: 622,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 103 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "/**\n * Root reference for iframes.\n */\n\nvar root;\nif (typeof window !== 'undefined') { // Browser window\n  root = window;\n} else if (typeof self !== 'undefined') { // Web Worker\n  root = self;\n} else { // Other environments\n  console.warn(\"Using browser-only version of superagent in non-browser environment\");\n  root = this;\n}\n\nvar Emitter = require('component-emitter');\nvar RequestBase = require('./request-base');\nvar isObject = require('./is-object');\nvar ResponseBase = require('./response-base');\nvar Agent = require('./agent-base');\n\n/**\n * Noop.\n */\n\nfunction noop(){};\n\n/**\n * Expose `request`.\n */\n\nvar request = exports = module.exports = function(method, url) {\n  // callback\n  if ('function' == typeof url) {\n    return new exports.Request('GET', method).end(url);\n  }\n\n  // url first\n  if (1 == arguments.length) {\n    return new exports.Request('GET', method);\n  }\n\n  return new exports.Request(method, url);\n}\n\nexports.Request = Request;\n\n/**\n * Determine XHR.\n */\n\nrequest.getXHR = function () {\n  if (root.XMLHttpRequest\n      && (!root.location || 'file:' != root.location.protocol\n          || !root.ActiveXObject)) {\n    return new XMLHttpRequest;\n  } else {\n    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}\n    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}\n    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}\n    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}\n  }\n  throw Error(\"Browser-only version of superagent could not find XHR\");\n};\n\n/**\n * Removes leading and trailing whitespace, added to support IE.\n *\n * @param {String} s\n * @return {String}\n * @api private\n */\n\nvar trim = ''.trim\n  ? function(s) { return s.trim(); }\n  : function(s) { return s.replace(/(^\\s*|\\s*$)/g, ''); };\n\n/**\n * Serialize the given `obj`.\n *\n * @param {Object} obj\n * @return {String}\n * @api private\n */\n\nfunction serialize(obj) {\n  if (!isObject(obj)) return obj;\n  var pairs = [];\n  for (var key in obj) {\n    pushEncodedKeyValuePair(pairs, key, obj[key]);\n  }\n  return pairs.join('&');\n}\n\n/**\n * Helps 'serialize' with serializing arrays.\n * Mutates the pairs array.\n *\n * @param {Array} pairs\n * @param {String} key\n * @param {Mixed} val\n */\n\nfunction pushEncodedKeyValuePair(pairs, key, val) {\n  if (val != null) {\n    if (Array.isArray(val)) {\n      val.forEach(function(v) {\n        pushEncodedKeyValuePair(pairs, key, v);\n      });\n    } else if (isObject(val)) {\n      for(var subkey in val) {\n        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);\n      }\n    } else {\n      pairs.push(encodeURIComponent(key)\n        + '=' + encodeURIComponent(val));\n    }\n  } else if (val === null) {\n    pairs.push(encodeURIComponent(key));\n  }\n}\n\n/**\n * Expose serialization method.\n */\n\nrequest.serializeObject = serialize;\n\n/**\n  * Parse the given x-www-form-urlencoded `str`.\n  *\n  * @param {String} str\n  * @return {Object}\n  * @api private\n  */\n\nfunction parseString(str) {\n  var obj = {};\n  var pairs = str.split('&');\n  var pair;\n  var pos;\n\n  for (var i = 0, len = pairs.length; i < len; ++i) {\n    pair = pairs[i];\n    pos = pair.indexOf('=');\n    if (pos == -1) {\n      obj[decodeURIComponent(pair)] = '';\n    } else {\n      obj[decodeURIComponent(pair.slice(0, pos))] =\n        decodeURIComponent(pair.slice(pos + 1));\n    }\n  }\n\n  return obj;\n}\n\n/**\n * Expose parser.\n */\n\nrequest.parseString = parseString;\n\n/**\n * Default MIME type map.\n *\n *     superagent.types.xml = 'application/xml';\n *\n */\n\nrequest.types = {\n  html: 'text/html',\n  json: 'application/json',\n  xml: 'text/xml',\n  urlencoded: 'application/x-www-form-urlencoded',\n  'form': 'application/x-www-form-urlencoded',\n  'form-data': 'application/x-www-form-urlencoded'\n};\n\n/**\n * Default serialization map.\n *\n *     superagent.serialize['application/xml'] = function(obj){\n *       return 'generated xml here';\n *     };\n *\n */\n\nrequest.serialize = {\n  'application/x-www-form-urlencoded': serialize,\n  'application/json': JSON.stringify\n};\n\n/**\n  * Default parsers.\n  *\n  *     superagent.parse['application/xml'] = function(str){\n  *       return { object parsed from str };\n  *     };\n  *\n  */\n\nrequest.parse = {\n  'application/x-www-form-urlencoded': parseString,\n  'application/json': JSON.parse\n};\n\n/**\n * Parse the given header `str` into\n * an object containing the mapped fields.\n *\n * @param {String} str\n * @return {Object}\n * @api private\n */\n\nfunction parseHeader(str) {\n  var lines = str.split(/\\r?\\n/);\n  var fields = {};\n  var index;\n  var line;\n  var field;\n  var val;\n\n  for (var i = 0, len = lines.length; i < len; ++i) {\n    line = lines[i];\n    index = line.indexOf(':');\n    if (index === -1) { // could be empty line, just skip it\n      continue;\n    }\n    field = line.slice(0, index).toLowerCase();\n    val = trim(line.slice(index + 1));\n    fields[field] = val;\n  }\n\n  return fields;\n}\n\n/**\n * Check if `mime` is json or has +json structured syntax suffix.\n *\n * @param {String} mime\n * @return {Boolean}\n * @api private\n */\n\nfunction isJSON(mime) {\n  // should match /json or +json\n  // but not /json-seq\n  return /[\\/+]json($|[^-\\w])/.test(mime);\n}\n\n/**\n * Initialize a new `Response` with the given `xhr`.\n *\n *  - set flags (.ok, .error, etc)\n *  - parse header\n *\n * Examples:\n *\n *  Aliasing `superagent` as `request` is nice:\n *\n *      request = superagent;\n *\n *  We can use the promise-like API, or pass callbacks:\n *\n *      request.get('/').end(function(res){});\n *      request.get('/', function(res){});\n *\n *  Sending data can be chained:\n *\n *      request\n *        .post('/user')\n *        .send({ name: 'tj' })\n *        .end(function(res){});\n *\n *  Or passed to `.send()`:\n *\n *      request\n *        .post('/user')\n *        .send({ name: 'tj' }, function(res){});\n *\n *  Or passed to `.post()`:\n *\n *      request\n *        .post('/user', { name: 'tj' })\n *        .end(function(res){});\n *\n * Or further reduced to a single call for simple cases:\n *\n *      request\n *        .post('/user', { name: 'tj' }, function(res){});\n *\n * @param {XMLHTTPRequest} xhr\n * @param {Object} options\n * @api private\n */\n\nfunction Response(req) {\n  this.req = req;\n  this.xhr = this.req.xhr;\n  // responseText is accessible only if responseType is '' or 'text' and on older browsers\n  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')\n     ? this.xhr.responseText\n     : null;\n  this.statusText = this.req.xhr.statusText;\n  var status = this.xhr.status;\n  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request\n  if (status === 1223) {\n    status = 204;\n  }\n  this._setStatusProperties(status);\n  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());\n  // getAllResponseHeaders sometimes falsely returns \"\" for CORS requests, but\n  // getResponseHeader still works. so we get content-type even if getting\n  // other headers fails.\n  this.header['content-type'] = this.xhr.getResponseHeader('content-type');\n  this._setHeaderProperties(this.header);\n\n  if (null === this.text && req._responseType) {\n    this.body = this.xhr.response;\n  } else {\n    this.body = this.req.method != 'HEAD'\n      ? this._parseBody(this.text ? this.text : this.xhr.response)\n      : null;\n  }\n}\n\nResponseBase(Response.prototype);\n\n/**\n * Parse the given body `str`.\n *\n * Used for auto-parsing of bodies. Parsers\n * are defined on the `superagent.parse` object.\n *\n * @param {String} str\n * @return {Mixed}\n * @api private\n */\n\nResponse.prototype._parseBody = function(str) {\n  var parse = request.parse[this.type];\n  if (this.req._parser) {\n    return this.req._parser(this, str);\n  }\n  if (!parse && isJSON(this.type)) {\n    parse = request.parse['application/json'];\n  }\n  return parse && str && (str.length || str instanceof Object)\n    ? parse(str)\n    : null;\n};\n\n/**\n * Return an `Error` representative of this response.\n *\n * @return {Error}\n * @api public\n */\n\nResponse.prototype.toError = function(){\n  var req = this.req;\n  var method = req.method;\n  var url = req.url;\n\n  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';\n  var err = new Error(msg);\n  err.status = this.status;\n  err.method = method;\n  err.url = url;\n\n  return err;\n};\n\n/**\n * Expose `Response`.\n */\n\nrequest.Response = Response;\n\n/**\n * Initialize a new `Request` with the given `method` and `url`.\n *\n * @param {String} method\n * @param {String} url\n * @api public\n */\n\nfunction Request(method, url) {\n  var self = this;\n  this._query = this._query || [];\n  this.method = method;\n  this.url = url;\n  this.header = {}; // preserves header name case\n  this._header = {}; // coerces header names to lowercase\n  this.on('end', function(){\n    var err = null;\n    var res = null;\n\n    try {\n      res = new Response(self);\n    } catch(e) {\n      err = new Error('Parser is unable to parse the response');\n      err.parse = true;\n      err.original = e;\n      // issue #675: return the raw response if the response parsing fails\n      if (self.xhr) {\n        // ie9 doesn't have 'response' property\n        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;\n        // issue #876: return the http status code if the response parsing fails\n        err.status = self.xhr.status ? self.xhr.status : null;\n        err.statusCode = err.status; // backwards-compat only\n      } else {\n        err.rawResponse = null;\n        err.status = null;\n      }\n\n      return self.callback(err);\n    }\n\n    self.emit('response', res);\n\n    var new_err;\n    try {\n      if (!self._isResponseOK(res)) {\n        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');\n      }\n    } catch(custom_err) {\n      new_err = custom_err; // ok() callback can throw\n    }\n\n    // #1000 don't catch errors from the callback to avoid double calling it\n    if (new_err) {\n      new_err.original = err;\n      new_err.response = res;\n      new_err.status = res.status;\n      self.callback(new_err, res);\n    } else {\n      self.callback(null, res);\n    }\n  });\n}\n\n/**\n * Mixin `Emitter` and `RequestBase`.\n */\n\nEmitter(Request.prototype);\nRequestBase(Request.prototype);\n\n/**\n * Set Content-Type to `type`, mapping values from `request.types`.\n *\n * Examples:\n *\n *      superagent.types.xml = 'application/xml';\n *\n *      request.post('/')\n *        .type('xml')\n *        .send(xmlstring)\n *        .end(callback);\n *\n *      request.post('/')\n *        .type('application/xml')\n *        .send(xmlstring)\n *        .end(callback);\n *\n * @param {String} type\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.type = function(type){\n  this.set('Content-Type', request.types[type] || type);\n  return this;\n};\n\n/**\n * Set Accept to `type`, mapping values from `request.types`.\n *\n * Examples:\n *\n *      superagent.types.json = 'application/json';\n *\n *      request.get('/agent')\n *        .accept('json')\n *        .end(callback);\n *\n *      request.get('/agent')\n *        .accept('application/json')\n *        .end(callback);\n *\n * @param {String} accept\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.accept = function(type){\n  this.set('Accept', request.types[type] || type);\n  return this;\n};\n\n/**\n * Set Authorization field value with `user` and `pass`.\n *\n * @param {String} user\n * @param {String} [pass] optional in case of using 'bearer' as type\n * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.auth = function(user, pass, options){\n  if (1 === arguments.length) pass = '';\n  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options\n    options = pass;\n    pass = '';\n  }\n  if (!options) {\n    options = {\n      type: 'function' === typeof btoa ? 'basic' : 'auto',\n    };\n  }\n\n  var encoder = function(string) {\n    if ('function' === typeof btoa) {\n      return btoa(string);\n    }\n    throw new Error('Cannot use basic auth, btoa is not a function');\n  };\n\n  return this._auth(user, pass, options, encoder);\n};\n\n/**\n * Add query-string `val`.\n *\n * Examples:\n *\n *   request.get('/shoes')\n *     .query('size=10')\n *     .query({ color: 'blue' })\n *\n * @param {Object|String} val\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.query = function(val){\n  if ('string' != typeof val) val = serialize(val);\n  if (val) this._query.push(val);\n  return this;\n};\n\n/**\n * Queue the given `file` as an attachment to the specified `field`,\n * with optional `options` (or filename).\n *\n * ``` js\n * request.post('/upload')\n *   .attach('content', new Blob(['<a id=\"a\"><b id=\"b\">hey!</b></a>'], { type: \"text/html\"}))\n *   .end(callback);\n * ```\n *\n * @param {String} field\n * @param {Blob|File} file\n * @param {String|Object} options\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.attach = function(field, file, options){\n  if (file) {\n    if (this._data) {\n      throw Error(\"superagent can't mix .send() and .attach()\");\n    }\n\n    this._getFormData().append(field, file, options || file.name);\n  }\n  return this;\n};\n\nRequest.prototype._getFormData = function(){\n  if (!this._formData) {\n    this._formData = new root.FormData();\n  }\n  return this._formData;\n};\n\n/**\n * Invoke the callback with `err` and `res`\n * and handle arity check.\n *\n * @param {Error} err\n * @param {Response} res\n * @api private\n */\n\nRequest.prototype.callback = function(err, res){\n  if (this._shouldRetry(err, res)) {\n    return this._retry();\n  }\n\n  var fn = this._callback;\n  this.clearTimeout();\n\n  if (err) {\n    if (this._maxRetries) err.retries = this._retries - 1;\n    this.emit('error', err);\n  }\n\n  fn(err, res);\n};\n\n/**\n * Invoke callback with x-domain error.\n *\n * @api private\n */\n\nRequest.prototype.crossDomainError = function(){\n  var err = new Error('Request has been terminated\\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');\n  err.crossDomain = true;\n\n  err.status = this.status;\n  err.method = this.method;\n  err.url = this.url;\n\n  this.callback(err);\n};\n\n// This only warns, because the request is still likely to work\nRequest.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){\n  console.warn(\"This is not supported in browser version of superagent\");\n  return this;\n};\n\n// This throws, because it can't send/receive data as expected\nRequest.prototype.pipe = Request.prototype.write = function(){\n  throw Error(\"Streaming is not supported in browser version of superagent\");\n};\n\n/**\n * Check if `obj` is a host object,\n * we don't want to serialize these :)\n *\n * @param {Object} obj\n * @return {Boolean}\n * @api private\n */\nRequest.prototype._isHost = function _isHost(obj) {\n  // Native objects stringify to [object File], [object Blob], [object FormData], etc.\n  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';\n}\n\n/**\n * Initiate request, invoking callback `fn(res)`\n * with an instanceof `Response`.\n *\n * @param {Function} fn\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.end = function(fn){\n  if (this._endCalled) {\n    console.warn(\"Warning: .end() was called twice. This is not supported in superagent\");\n  }\n  this._endCalled = true;\n\n  // store callback\n  this._callback = fn || noop;\n\n  // querystring\n  this._finalizeQueryString();\n\n  return this._end();\n};\n\nRequest.prototype._end = function() {\n  var self = this;\n  var xhr = (this.xhr = request.getXHR());\n  var data = this._formData || this._data;\n\n  this._setTimeouts();\n\n  // state change\n  xhr.onreadystatechange = function(){\n    var readyState = xhr.readyState;\n    if (readyState >= 2 && self._responseTimeoutTimer) {\n      clearTimeout(self._responseTimeoutTimer);\n    }\n    if (4 != readyState) {\n      return;\n    }\n\n    // In IE9, reads to any property (e.g. status) off of an aborted XHR will\n    // result in the error \"Could not complete the operation due to error c00c023f\"\n    var status;\n    try { status = xhr.status } catch(e) { status = 0; }\n\n    if (!status) {\n      if (self.timedout || self._aborted) return;\n      return self.crossDomainError();\n    }\n    self.emit('end');\n  };\n\n  // progress\n  var handleProgress = function(direction, e) {\n    if (e.total > 0) {\n      e.percent = e.loaded / e.total * 100;\n    }\n    e.direction = direction;\n    self.emit('progress', e);\n  };\n  if (this.hasListeners('progress')) {\n    try {\n      xhr.onprogress = handleProgress.bind(null, 'download');\n      if (xhr.upload) {\n        xhr.upload.onprogress = handleProgress.bind(null, 'upload');\n      }\n    } catch(e) {\n      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.\n      // Reported here:\n      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context\n    }\n  }\n\n  // initiate request\n  try {\n    if (this.username && this.password) {\n      xhr.open(this.method, this.url, true, this.username, this.password);\n    } else {\n      xhr.open(this.method, this.url, true);\n    }\n  } catch (err) {\n    // see #1149\n    return this.callback(err);\n  }\n\n  // CORS\n  if (this._withCredentials) xhr.withCredentials = true;\n\n  // body\n  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {\n    // serialize stuff\n    var contentType = this._header['content-type'];\n    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];\n    if (!serialize && isJSON(contentType)) {\n      serialize = request.serialize['application/json'];\n    }\n    if (serialize) data = serialize(data);\n  }\n\n  // set header fields\n  for (var field in this.header) {\n    if (null == this.header[field]) continue;\n\n    if (this.header.hasOwnProperty(field))\n      xhr.setRequestHeader(field, this.header[field]);\n  }\n\n  if (this._responseType) {\n    xhr.responseType = this._responseType;\n  }\n\n  // send stuff\n  this.emit('request', this);\n\n  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)\n  // We need null here if data is undefined\n  xhr.send(typeof data !== 'undefined' ? data : null);\n  return this;\n};\n\nrequest.agent = function() {\n  return new Agent();\n};\n\n[\"GET\", \"POST\", \"OPTIONS\", \"PATCH\", \"PUT\", \"DELETE\"].forEach(function(method) {\n  Agent.prototype[method.toLowerCase()] = function(url, fn) {\n    var req = new request.Request(method, url);\n    this._setDefaults(req);\n    if (fn) {\n      req.end(fn);\n    }\n    return req;\n  };\n});\n\nAgent.prototype.del = Agent.prototype['delete'];\n\n/**\n * GET `url` with optional callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.get = function(url, data, fn) {\n  var req = request('GET', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.query(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * HEAD `url` with optional callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.head = function(url, data, fn) {\n  var req = request('HEAD', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.query(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * OPTIONS query to `url` with optional callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.options = function(url, data, fn) {\n  var req = request('OPTIONS', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * DELETE `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed} [data]\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nfunction del(url, data, fn) {\n  var req = request('DELETE', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n}\n\nrequest['del'] = del;\nrequest['delete'] = del;\n\n/**\n * PATCH `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed} [data]\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.patch = function(url, data, fn) {\n  var req = request('PATCH', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * POST `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed} [data]\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.post = function(url, data, fn) {\n  var req = request('POST', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * PUT `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.put = function(url, data, fn) {\n  var req = request('PUT', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/superagent/lib/client.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            524,
                            537,
                            "102",
                            8,
                          ],
                          [
                            516,
                            522,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            484,
                            500,
                            "105",
                            6,
                          ],
                          [
                            476,
                            482,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            441,
                            453,
                            "41",
                            4,
                          ],
                          [
                            433,
                            439,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            399,
                            414,
                            "104",
                            2,
                          ],
                          [
                            391,
                            397,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            351,
                            369,
                            "64",
                            0,
                          ],
                          [
                            343,
                            349,
                            "__webpack_require__",
                            1,
                          ],
                        ],
                      },
                      _cachedSource: "/**\n * Root reference for iframes.\n */\n\nvar root;\nif (typeof window !== 'undefined') { // Browser window\n  root = window;\n} else if (typeof self !== 'undefined') { // Web Worker\n  root = self;\n} else { // Other environments\n  console.warn(\"Using browser-only version of superagent in non-browser environment\");\n  root = this;\n}\n\nvar Emitter = __webpack_require__(64);\nvar RequestBase = __webpack_require__(104);\nvar isObject = __webpack_require__(41);\nvar ResponseBase = __webpack_require__(105);\nvar Agent = __webpack_require__(102);\n\n/**\n * Noop.\n */\n\nfunction noop(){};\n\n/**\n * Expose `request`.\n */\n\nvar request = exports = module.exports = function(method, url) {\n  // callback\n  if ('function' == typeof url) {\n    return new exports.Request('GET', method).end(url);\n  }\n\n  // url first\n  if (1 == arguments.length) {\n    return new exports.Request('GET', method);\n  }\n\n  return new exports.Request(method, url);\n}\n\nexports.Request = Request;\n\n/**\n * Determine XHR.\n */\n\nrequest.getXHR = function () {\n  if (root.XMLHttpRequest\n      && (!root.location || 'file:' != root.location.protocol\n          || !root.ActiveXObject)) {\n    return new XMLHttpRequest;\n  } else {\n    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}\n    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}\n    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}\n    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}\n  }\n  throw Error(\"Browser-only version of superagent could not find XHR\");\n};\n\n/**\n * Removes leading and trailing whitespace, added to support IE.\n *\n * @param {String} s\n * @return {String}\n * @api private\n */\n\nvar trim = ''.trim\n  ? function(s) { return s.trim(); }\n  : function(s) { return s.replace(/(^\\s*|\\s*$)/g, ''); };\n\n/**\n * Serialize the given `obj`.\n *\n * @param {Object} obj\n * @return {String}\n * @api private\n */\n\nfunction serialize(obj) {\n  if (!isObject(obj)) return obj;\n  var pairs = [];\n  for (var key in obj) {\n    pushEncodedKeyValuePair(pairs, key, obj[key]);\n  }\n  return pairs.join('&');\n}\n\n/**\n * Helps 'serialize' with serializing arrays.\n * Mutates the pairs array.\n *\n * @param {Array} pairs\n * @param {String} key\n * @param {Mixed} val\n */\n\nfunction pushEncodedKeyValuePair(pairs, key, val) {\n  if (val != null) {\n    if (Array.isArray(val)) {\n      val.forEach(function(v) {\n        pushEncodedKeyValuePair(pairs, key, v);\n      });\n    } else if (isObject(val)) {\n      for(var subkey in val) {\n        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);\n      }\n    } else {\n      pairs.push(encodeURIComponent(key)\n        + '=' + encodeURIComponent(val));\n    }\n  } else if (val === null) {\n    pairs.push(encodeURIComponent(key));\n  }\n}\n\n/**\n * Expose serialization method.\n */\n\nrequest.serializeObject = serialize;\n\n/**\n  * Parse the given x-www-form-urlencoded `str`.\n  *\n  * @param {String} str\n  * @return {Object}\n  * @api private\n  */\n\nfunction parseString(str) {\n  var obj = {};\n  var pairs = str.split('&');\n  var pair;\n  var pos;\n\n  for (var i = 0, len = pairs.length; i < len; ++i) {\n    pair = pairs[i];\n    pos = pair.indexOf('=');\n    if (pos == -1) {\n      obj[decodeURIComponent(pair)] = '';\n    } else {\n      obj[decodeURIComponent(pair.slice(0, pos))] =\n        decodeURIComponent(pair.slice(pos + 1));\n    }\n  }\n\n  return obj;\n}\n\n/**\n * Expose parser.\n */\n\nrequest.parseString = parseString;\n\n/**\n * Default MIME type map.\n *\n *     superagent.types.xml = 'application/xml';\n *\n */\n\nrequest.types = {\n  html: 'text/html',\n  json: 'application/json',\n  xml: 'text/xml',\n  urlencoded: 'application/x-www-form-urlencoded',\n  'form': 'application/x-www-form-urlencoded',\n  'form-data': 'application/x-www-form-urlencoded'\n};\n\n/**\n * Default serialization map.\n *\n *     superagent.serialize['application/xml'] = function(obj){\n *       return 'generated xml here';\n *     };\n *\n */\n\nrequest.serialize = {\n  'application/x-www-form-urlencoded': serialize,\n  'application/json': JSON.stringify\n};\n\n/**\n  * Default parsers.\n  *\n  *     superagent.parse['application/xml'] = function(str){\n  *       return { object parsed from str };\n  *     };\n  *\n  */\n\nrequest.parse = {\n  'application/x-www-form-urlencoded': parseString,\n  'application/json': JSON.parse\n};\n\n/**\n * Parse the given header `str` into\n * an object containing the mapped fields.\n *\n * @param {String} str\n * @return {Object}\n * @api private\n */\n\nfunction parseHeader(str) {\n  var lines = str.split(/\\r?\\n/);\n  var fields = {};\n  var index;\n  var line;\n  var field;\n  var val;\n\n  for (var i = 0, len = lines.length; i < len; ++i) {\n    line = lines[i];\n    index = line.indexOf(':');\n    if (index === -1) { // could be empty line, just skip it\n      continue;\n    }\n    field = line.slice(0, index).toLowerCase();\n    val = trim(line.slice(index + 1));\n    fields[field] = val;\n  }\n\n  return fields;\n}\n\n/**\n * Check if `mime` is json or has +json structured syntax suffix.\n *\n * @param {String} mime\n * @return {Boolean}\n * @api private\n */\n\nfunction isJSON(mime) {\n  // should match /json or +json\n  // but not /json-seq\n  return /[\\/+]json($|[^-\\w])/.test(mime);\n}\n\n/**\n * Initialize a new `Response` with the given `xhr`.\n *\n *  - set flags (.ok, .error, etc)\n *  - parse header\n *\n * Examples:\n *\n *  Aliasing `superagent` as `request` is nice:\n *\n *      request = superagent;\n *\n *  We can use the promise-like API, or pass callbacks:\n *\n *      request.get('/').end(function(res){});\n *      request.get('/', function(res){});\n *\n *  Sending data can be chained:\n *\n *      request\n *        .post('/user')\n *        .send({ name: 'tj' })\n *        .end(function(res){});\n *\n *  Or passed to `.send()`:\n *\n *      request\n *        .post('/user')\n *        .send({ name: 'tj' }, function(res){});\n *\n *  Or passed to `.post()`:\n *\n *      request\n *        .post('/user', { name: 'tj' })\n *        .end(function(res){});\n *\n * Or further reduced to a single call for simple cases:\n *\n *      request\n *        .post('/user', { name: 'tj' }, function(res){});\n *\n * @param {XMLHTTPRequest} xhr\n * @param {Object} options\n * @api private\n */\n\nfunction Response(req) {\n  this.req = req;\n  this.xhr = this.req.xhr;\n  // responseText is accessible only if responseType is '' or 'text' and on older browsers\n  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')\n     ? this.xhr.responseText\n     : null;\n  this.statusText = this.req.xhr.statusText;\n  var status = this.xhr.status;\n  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request\n  if (status === 1223) {\n    status = 204;\n  }\n  this._setStatusProperties(status);\n  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());\n  // getAllResponseHeaders sometimes falsely returns \"\" for CORS requests, but\n  // getResponseHeader still works. so we get content-type even if getting\n  // other headers fails.\n  this.header['content-type'] = this.xhr.getResponseHeader('content-type');\n  this._setHeaderProperties(this.header);\n\n  if (null === this.text && req._responseType) {\n    this.body = this.xhr.response;\n  } else {\n    this.body = this.req.method != 'HEAD'\n      ? this._parseBody(this.text ? this.text : this.xhr.response)\n      : null;\n  }\n}\n\nResponseBase(Response.prototype);\n\n/**\n * Parse the given body `str`.\n *\n * Used for auto-parsing of bodies. Parsers\n * are defined on the `superagent.parse` object.\n *\n * @param {String} str\n * @return {Mixed}\n * @api private\n */\n\nResponse.prototype._parseBody = function(str) {\n  var parse = request.parse[this.type];\n  if (this.req._parser) {\n    return this.req._parser(this, str);\n  }\n  if (!parse && isJSON(this.type)) {\n    parse = request.parse['application/json'];\n  }\n  return parse && str && (str.length || str instanceof Object)\n    ? parse(str)\n    : null;\n};\n\n/**\n * Return an `Error` representative of this response.\n *\n * @return {Error}\n * @api public\n */\n\nResponse.prototype.toError = function(){\n  var req = this.req;\n  var method = req.method;\n  var url = req.url;\n\n  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';\n  var err = new Error(msg);\n  err.status = this.status;\n  err.method = method;\n  err.url = url;\n\n  return err;\n};\n\n/**\n * Expose `Response`.\n */\n\nrequest.Response = Response;\n\n/**\n * Initialize a new `Request` with the given `method` and `url`.\n *\n * @param {String} method\n * @param {String} url\n * @api public\n */\n\nfunction Request(method, url) {\n  var self = this;\n  this._query = this._query || [];\n  this.method = method;\n  this.url = url;\n  this.header = {}; // preserves header name case\n  this._header = {}; // coerces header names to lowercase\n  this.on('end', function(){\n    var err = null;\n    var res = null;\n\n    try {\n      res = new Response(self);\n    } catch(e) {\n      err = new Error('Parser is unable to parse the response');\n      err.parse = true;\n      err.original = e;\n      // issue #675: return the raw response if the response parsing fails\n      if (self.xhr) {\n        // ie9 doesn't have 'response' property\n        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;\n        // issue #876: return the http status code if the response parsing fails\n        err.status = self.xhr.status ? self.xhr.status : null;\n        err.statusCode = err.status; // backwards-compat only\n      } else {\n        err.rawResponse = null;\n        err.status = null;\n      }\n\n      return self.callback(err);\n    }\n\n    self.emit('response', res);\n\n    var new_err;\n    try {\n      if (!self._isResponseOK(res)) {\n        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');\n      }\n    } catch(custom_err) {\n      new_err = custom_err; // ok() callback can throw\n    }\n\n    // #1000 don't catch errors from the callback to avoid double calling it\n    if (new_err) {\n      new_err.original = err;\n      new_err.response = res;\n      new_err.status = res.status;\n      self.callback(new_err, res);\n    } else {\n      self.callback(null, res);\n    }\n  });\n}\n\n/**\n * Mixin `Emitter` and `RequestBase`.\n */\n\nEmitter(Request.prototype);\nRequestBase(Request.prototype);\n\n/**\n * Set Content-Type to `type`, mapping values from `request.types`.\n *\n * Examples:\n *\n *      superagent.types.xml = 'application/xml';\n *\n *      request.post('/')\n *        .type('xml')\n *        .send(xmlstring)\n *        .end(callback);\n *\n *      request.post('/')\n *        .type('application/xml')\n *        .send(xmlstring)\n *        .end(callback);\n *\n * @param {String} type\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.type = function(type){\n  this.set('Content-Type', request.types[type] || type);\n  return this;\n};\n\n/**\n * Set Accept to `type`, mapping values from `request.types`.\n *\n * Examples:\n *\n *      superagent.types.json = 'application/json';\n *\n *      request.get('/agent')\n *        .accept('json')\n *        .end(callback);\n *\n *      request.get('/agent')\n *        .accept('application/json')\n *        .end(callback);\n *\n * @param {String} accept\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.accept = function(type){\n  this.set('Accept', request.types[type] || type);\n  return this;\n};\n\n/**\n * Set Authorization field value with `user` and `pass`.\n *\n * @param {String} user\n * @param {String} [pass] optional in case of using 'bearer' as type\n * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.auth = function(user, pass, options){\n  if (1 === arguments.length) pass = '';\n  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options\n    options = pass;\n    pass = '';\n  }\n  if (!options) {\n    options = {\n      type: 'function' === typeof btoa ? 'basic' : 'auto',\n    };\n  }\n\n  var encoder = function(string) {\n    if ('function' === typeof btoa) {\n      return btoa(string);\n    }\n    throw new Error('Cannot use basic auth, btoa is not a function');\n  };\n\n  return this._auth(user, pass, options, encoder);\n};\n\n/**\n * Add query-string `val`.\n *\n * Examples:\n *\n *   request.get('/shoes')\n *     .query('size=10')\n *     .query({ color: 'blue' })\n *\n * @param {Object|String} val\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.query = function(val){\n  if ('string' != typeof val) val = serialize(val);\n  if (val) this._query.push(val);\n  return this;\n};\n\n/**\n * Queue the given `file` as an attachment to the specified `field`,\n * with optional `options` (or filename).\n *\n * ``` js\n * request.post('/upload')\n *   .attach('content', new Blob(['<a id=\"a\"><b id=\"b\">hey!</b></a>'], { type: \"text/html\"}))\n *   .end(callback);\n * ```\n *\n * @param {String} field\n * @param {Blob|File} file\n * @param {String|Object} options\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.attach = function(field, file, options){\n  if (file) {\n    if (this._data) {\n      throw Error(\"superagent can't mix .send() and .attach()\");\n    }\n\n    this._getFormData().append(field, file, options || file.name);\n  }\n  return this;\n};\n\nRequest.prototype._getFormData = function(){\n  if (!this._formData) {\n    this._formData = new root.FormData();\n  }\n  return this._formData;\n};\n\n/**\n * Invoke the callback with `err` and `res`\n * and handle arity check.\n *\n * @param {Error} err\n * @param {Response} res\n * @api private\n */\n\nRequest.prototype.callback = function(err, res){\n  if (this._shouldRetry(err, res)) {\n    return this._retry();\n  }\n\n  var fn = this._callback;\n  this.clearTimeout();\n\n  if (err) {\n    if (this._maxRetries) err.retries = this._retries - 1;\n    this.emit('error', err);\n  }\n\n  fn(err, res);\n};\n\n/**\n * Invoke callback with x-domain error.\n *\n * @api private\n */\n\nRequest.prototype.crossDomainError = function(){\n  var err = new Error('Request has been terminated\\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');\n  err.crossDomain = true;\n\n  err.status = this.status;\n  err.method = this.method;\n  err.url = this.url;\n\n  this.callback(err);\n};\n\n// This only warns, because the request is still likely to work\nRequest.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){\n  console.warn(\"This is not supported in browser version of superagent\");\n  return this;\n};\n\n// This throws, because it can't send/receive data as expected\nRequest.prototype.pipe = Request.prototype.write = function(){\n  throw Error(\"Streaming is not supported in browser version of superagent\");\n};\n\n/**\n * Check if `obj` is a host object,\n * we don't want to serialize these :)\n *\n * @param {Object} obj\n * @return {Boolean}\n * @api private\n */\nRequest.prototype._isHost = function _isHost(obj) {\n  // Native objects stringify to [object File], [object Blob], [object FormData], etc.\n  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';\n}\n\n/**\n * Initiate request, invoking callback `fn(res)`\n * with an instanceof `Response`.\n *\n * @param {Function} fn\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.end = function(fn){\n  if (this._endCalled) {\n    console.warn(\"Warning: .end() was called twice. This is not supported in superagent\");\n  }\n  this._endCalled = true;\n\n  // store callback\n  this._callback = fn || noop;\n\n  // querystring\n  this._finalizeQueryString();\n\n  return this._end();\n};\n\nRequest.prototype._end = function() {\n  var self = this;\n  var xhr = (this.xhr = request.getXHR());\n  var data = this._formData || this._data;\n\n  this._setTimeouts();\n\n  // state change\n  xhr.onreadystatechange = function(){\n    var readyState = xhr.readyState;\n    if (readyState >= 2 && self._responseTimeoutTimer) {\n      clearTimeout(self._responseTimeoutTimer);\n    }\n    if (4 != readyState) {\n      return;\n    }\n\n    // In IE9, reads to any property (e.g. status) off of an aborted XHR will\n    // result in the error \"Could not complete the operation due to error c00c023f\"\n    var status;\n    try { status = xhr.status } catch(e) { status = 0; }\n\n    if (!status) {\n      if (self.timedout || self._aborted) return;\n      return self.crossDomainError();\n    }\n    self.emit('end');\n  };\n\n  // progress\n  var handleProgress = function(direction, e) {\n    if (e.total > 0) {\n      e.percent = e.loaded / e.total * 100;\n    }\n    e.direction = direction;\n    self.emit('progress', e);\n  };\n  if (this.hasListeners('progress')) {\n    try {\n      xhr.onprogress = handleProgress.bind(null, 'download');\n      if (xhr.upload) {\n        xhr.upload.onprogress = handleProgress.bind(null, 'upload');\n      }\n    } catch(e) {\n      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.\n      // Reported here:\n      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context\n    }\n  }\n\n  // initiate request\n  try {\n    if (this.username && this.password) {\n      xhr.open(this.method, this.url, true, this.username, this.password);\n    } else {\n      xhr.open(this.method, this.url, true);\n    }\n  } catch (err) {\n    // see #1149\n    return this.callback(err);\n  }\n\n  // CORS\n  if (this._withCredentials) xhr.withCredentials = true;\n\n  // body\n  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {\n    // serialize stuff\n    var contentType = this._header['content-type'];\n    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];\n    if (!serialize && isJSON(contentType)) {\n      serialize = request.serialize['application/json'];\n    }\n    if (serialize) data = serialize(data);\n  }\n\n  // set header fields\n  for (var field in this.header) {\n    if (null == this.header[field]) continue;\n\n    if (this.header.hasOwnProperty(field))\n      xhr.setRequestHeader(field, this.header[field]);\n  }\n\n  if (this._responseType) {\n    xhr.responseType = this._responseType;\n  }\n\n  // send stuff\n  this.emit('request', this);\n\n  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)\n  // We need null here if data is undefined\n  xhr.send(typeof data !== 'undefined' ? data : null);\n  return this;\n};\n\nrequest.agent = function() {\n  return new Agent();\n};\n\n[\"GET\", \"POST\", \"OPTIONS\", \"PATCH\", \"PUT\", \"DELETE\"].forEach(function(method) {\n  Agent.prototype[method.toLowerCase()] = function(url, fn) {\n    var req = new request.Request(method, url);\n    this._setDefaults(req);\n    if (fn) {\n      req.end(fn);\n    }\n    return req;\n  };\n});\n\nAgent.prototype.del = Agent.prototype['delete'];\n\n/**\n * GET `url` with optional callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.get = function(url, data, fn) {\n  var req = request('GET', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.query(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * HEAD `url` with optional callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.head = function(url, data, fn) {\n  var req = request('HEAD', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.query(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * OPTIONS query to `url` with optional callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.options = function(url, data, fn) {\n  var req = request('OPTIONS', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * DELETE `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed} [data]\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nfunction del(url, data, fn) {\n  var req = request('DELETE', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n}\n\nrequest['del'] = del;\nrequest['delete'] = del;\n\n/**\n * PATCH `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed} [data]\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.patch = function(url, data, fn) {\n  var req = request('PATCH', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * POST `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed} [data]\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.post = function(url, data, fn) {\n  var req = request('POST', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * PUT `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.put = function(url, data, fn) {\n  var req = request('PUT', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n",
                      _cachedSize: 21697,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 104 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * Module of mixed-in functions shared between node and client code\n */\nvar isObject = require('./is-object');\n\n/**\n * Expose `RequestBase`.\n */\n\nmodule.exports = RequestBase;\n\n/**\n * Initialize a new `RequestBase`.\n *\n * @api public\n */\n\nfunction RequestBase(obj) {\n  if (obj) return mixin(obj);\n}\n\n/**\n * Mixin the prototype properties.\n *\n * @param {Object} obj\n * @return {Object}\n * @api private\n */\n\nfunction mixin(obj) {\n  for (var key in RequestBase.prototype) {\n    obj[key] = RequestBase.prototype[key];\n  }\n  return obj;\n}\n\n/**\n * Clear previous timeout.\n *\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.clearTimeout = function _clearTimeout(){\n  clearTimeout(this._timer);\n  clearTimeout(this._responseTimeoutTimer);\n  delete this._timer;\n  delete this._responseTimeoutTimer;\n  return this;\n};\n\n/**\n * Override default response body parser\n *\n * This function will be called to convert incoming data into request.body\n *\n * @param {Function}\n * @api public\n */\n\nRequestBase.prototype.parse = function parse(fn){\n  this._parser = fn;\n  return this;\n};\n\n/**\n * Set format of binary response body.\n * In browser valid formats are 'blob' and 'arraybuffer',\n * which return Blob and ArrayBuffer, respectively.\n *\n * In Node all values result in Buffer.\n *\n * Examples:\n *\n *      req.get('/')\n *        .responseType('blob')\n *        .end(callback);\n *\n * @param {String} val\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.responseType = function(val){\n  this._responseType = val;\n  return this;\n};\n\n/**\n * Override default request body serializer\n *\n * This function will be called to convert data set via .send or .attach into payload to send\n *\n * @param {Function}\n * @api public\n */\n\nRequestBase.prototype.serialize = function serialize(fn){\n  this._serializer = fn;\n  return this;\n};\n\n/**\n * Set timeouts.\n *\n * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.\n * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.\n *\n * Value of 0 or false means no timeout.\n *\n * @param {Number|Object} ms or {response, deadline}\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.timeout = function timeout(options){\n  if (!options || 'object' !== typeof options) {\n    this._timeout = options;\n    this._responseTimeout = 0;\n    return this;\n  }\n\n  for(var option in options) {\n    switch(option) {\n      case 'deadline':\n        this._timeout = options.deadline;\n        break;\n      case 'response':\n        this._responseTimeout = options.response;\n        break;\n      default:\n        console.warn(\"Unknown timeout option\", option);\n    }\n  }\n  return this;\n};\n\n/**\n * Set number of retry attempts on error.\n *\n * Failed requests will be retried 'count' times if timeout or err.code >= 500.\n *\n * @param {Number} count\n * @param {Function} [fn]\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.retry = function retry(count, fn){\n  // Default to 1 if no count passed or true\n  if (arguments.length === 0 || count === true) count = 1;\n  if (count <= 0) count = 0;\n  this._maxRetries = count;\n  this._retries = 0;\n  this._retryCallback = fn;\n  return this;\n};\n\nvar ERROR_CODES = [\n  'ECONNRESET',\n  'ETIMEDOUT',\n  'EADDRINFO',\n  'ESOCKETTIMEDOUT'\n];\n\n/**\n * Determine if a request should be retried.\n * (Borrowed from segmentio/superagent-retry)\n *\n * @param {Error} err\n * @param {Response} [res]\n * @returns {Boolean}\n */\nRequestBase.prototype._shouldRetry = function(err, res) {\n  if (!this._maxRetries || this._retries++ >= this._maxRetries) {\n    return false;\n  }\n  if (this._retryCallback) {\n    try {\n      var override = this._retryCallback(err, res);\n      if (override === true) return true;\n      if (override === false) return false;\n      // undefined falls back to defaults\n    } catch(e) {\n      console.error(e);\n    }\n  }\n  if (res && res.status && res.status >= 500 && res.status != 501) return true;\n  if (err) {\n    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;\n    // Superagent timeout\n    if (err.timeout && err.code == 'ECONNABORTED') return true;\n    if (err.crossDomain) return true;\n  }\n  return false;\n};\n\n/**\n * Retry request\n *\n * @return {Request} for chaining\n * @api private\n */\n\nRequestBase.prototype._retry = function() {\n\n  this.clearTimeout();\n\n  // node\n  if (this.req) {\n    this.req = null;\n    this.req = this.request();\n  }\n\n  this._aborted = false;\n  this.timedout = false;\n\n  return this._end();\n};\n\n/**\n * Promise support\n *\n * @param {Function} resolve\n * @param {Function} [reject]\n * @return {Request}\n */\n\nRequestBase.prototype.then = function then(resolve, reject) {\n  if (!this._fullfilledPromise) {\n    var self = this;\n    if (this._endCalled) {\n      console.warn(\"Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises\");\n    }\n    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {\n      self.end(function(err, res) {\n        if (err) innerReject(err);\n        else innerResolve(res);\n      });\n    });\n  }\n  return this._fullfilledPromise.then(resolve, reject);\n};\n\nRequestBase.prototype['catch'] = function(cb) {\n  return this.then(undefined, cb);\n};\n\n/**\n * Allow for extension\n */\n\nRequestBase.prototype.use = function use(fn) {\n  fn(this);\n  return this;\n};\n\nRequestBase.prototype.ok = function(cb) {\n  if ('function' !== typeof cb) throw Error(\"Callback required\");\n  this._okCallback = cb;\n  return this;\n};\n\nRequestBase.prototype._isResponseOK = function(res) {\n  if (!res) {\n    return false;\n  }\n\n  if (this._okCallback) {\n    return this._okCallback(res);\n  }\n\n  return res.status >= 200 && res.status < 300;\n};\n\n/**\n * Get request header `field`.\n * Case-insensitive.\n *\n * @param {String} field\n * @return {String}\n * @api public\n */\n\nRequestBase.prototype.get = function(field){\n  return this._header[field.toLowerCase()];\n};\n\n/**\n * Get case-insensitive header `field` value.\n * This is a deprecated internal API. Use `.get(field)` instead.\n *\n * (getHeader is no longer used internally by the superagent code base)\n *\n * @param {String} field\n * @return {String}\n * @api private\n * @deprecated\n */\n\nRequestBase.prototype.getHeader = RequestBase.prototype.get;\n\n/**\n * Set header `field` to `val`, or multiple fields with one object.\n * Case-insensitive.\n *\n * Examples:\n *\n *      req.get('/')\n *        .set('Accept', 'application/json')\n *        .set('X-API-Key', 'foobar')\n *        .end(callback);\n *\n *      req.get('/')\n *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })\n *        .end(callback);\n *\n * @param {String|Object} field\n * @param {String} val\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.set = function(field, val){\n  if (isObject(field)) {\n    for (var key in field) {\n      this.set(key, field[key]);\n    }\n    return this;\n  }\n  this._header[field.toLowerCase()] = val;\n  this.header[field] = val;\n  return this;\n};\n\n/**\n * Remove header `field`.\n * Case-insensitive.\n *\n * Example:\n *\n *      req.get('/')\n *        .unset('User-Agent')\n *        .end(callback);\n *\n * @param {String} field\n */\nRequestBase.prototype.unset = function(field){\n  delete this._header[field.toLowerCase()];\n  delete this.header[field];\n  return this;\n};\n\n/**\n * Write the field `name` and `val`, or multiple fields with one object\n * for \"multipart/form-data\" request bodies.\n *\n * ``` js\n * request.post('/upload')\n *   .field('foo', 'bar')\n *   .end(callback);\n *\n * request.post('/upload')\n *   .field({ foo: 'bar', baz: 'qux' })\n *   .end(callback);\n * ```\n *\n * @param {String|Object} name\n * @param {String|Blob|File|Buffer|fs.ReadStream} val\n * @return {Request} for chaining\n * @api public\n */\nRequestBase.prototype.field = function(name, val) {\n  // name should be either a string or an object.\n  if (null === name || undefined === name) {\n    throw new Error('.field(name, val) name can not be empty');\n  }\n\n  if (this._data) {\n    console.error(\".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()\");\n  }\n\n  if (isObject(name)) {\n    for (var key in name) {\n      this.field(key, name[key]);\n    }\n    return this;\n  }\n\n  if (Array.isArray(val)) {\n    for (var i in val) {\n      this.field(name, val[i]);\n    }\n    return this;\n  }\n\n  // val should be defined now\n  if (null === val || undefined === val) {\n    throw new Error('.field(name, val) val can not be empty');\n  }\n  if ('boolean' === typeof val) {\n    val = '' + val;\n  }\n  this._getFormData().append(name, val);\n  return this;\n};\n\n/**\n * Abort the request, and clear potential timeout.\n *\n * @return {Request}\n * @api public\n */\nRequestBase.prototype.abort = function(){\n  if (this._aborted) {\n    return this;\n  }\n  this._aborted = true;\n  this.xhr && this.xhr.abort(); // browser\n  this.req && this.req.abort(); // node\n  this.clearTimeout();\n  this.emit('abort');\n  return this;\n};\n\nRequestBase.prototype._auth = function(user, pass, options, base64Encoder) {\n  switch (options.type) {\n    case 'basic':\n      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));\n      break;\n\n    case 'auto':\n      this.username = user;\n      this.password = pass;\n      break;\n\n    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })\n      this.set('Authorization', 'Bearer ' + user);\n      break;\n  }\n  return this;\n};\n\n/**\n * Enable transmission of cookies with x-domain requests.\n *\n * Note that for this to work the origin must not be\n * using \"Access-Control-Allow-Origin\" with a wildcard,\n * and also must set \"Access-Control-Allow-Credentials\"\n * to \"true\".\n *\n * @api public\n */\n\nRequestBase.prototype.withCredentials = function(on) {\n  // This is browser-only functionality. Node side is no-op.\n  if (on == undefined) on = true;\n  this._withCredentials = on;\n  return this;\n};\n\n/**\n * Set the max redirects to `n`. Does noting in browser XHR implementation.\n *\n * @param {Number} n\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.redirects = function(n){\n  this._maxRedirects = n;\n  return this;\n};\n\n/**\n * Maximum size of buffered response body, in bytes. Counts uncompressed size.\n * Default 200MB.\n *\n * @param {Number} n\n * @return {Request} for chaining\n */\nRequestBase.prototype.maxResponseSize = function(n){\n  if ('number' !== typeof n) {\n    throw TypeError(\"Invalid argument\");\n  }\n  this._maxResponseSize = n;\n  return this;\n};\n\n/**\n * Convert to a plain javascript object (not JSON string) of scalar properties.\n * Note as this method is designed to return a useful non-this value,\n * it cannot be chained.\n *\n * @return {Object} describing method, url, and data of this request\n * @api public\n */\n\nRequestBase.prototype.toJSON = function() {\n  return {\n    method: this.method,\n    url: this.url,\n    data: this._data,\n    headers: this._header,\n  };\n};\n\n/**\n * Send `data` as the request body, defaulting the `.type()` to \"json\" when\n * an object is given.\n *\n * Examples:\n *\n *       // manual json\n *       request.post('/user')\n *         .type('json')\n *         .send('{\"name\":\"tj\"}')\n *         .end(callback)\n *\n *       // auto json\n *       request.post('/user')\n *         .send({ name: 'tj' })\n *         .end(callback)\n *\n *       // manual x-www-form-urlencoded\n *       request.post('/user')\n *         .type('form')\n *         .send('name=tj')\n *         .end(callback)\n *\n *       // auto x-www-form-urlencoded\n *       request.post('/user')\n *         .type('form')\n *         .send({ name: 'tj' })\n *         .end(callback)\n *\n *       // defaults to x-www-form-urlencoded\n *      request.post('/user')\n *        .send('name=tobi')\n *        .send('species=ferret')\n *        .end(callback)\n *\n * @param {String|Object} data\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.send = function(data){\n  var isObj = isObject(data);\n  var type = this._header['content-type'];\n\n  if (this._formData) {\n    console.error(\".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()\");\n  }\n\n  if (isObj && !this._data) {\n    if (Array.isArray(data)) {\n      this._data = [];\n    } else if (!this._isHost(data)) {\n      this._data = {};\n    }\n  } else if (data && this._data && this._isHost(this._data)) {\n    throw Error(\"Can't merge these send calls\");\n  }\n\n  // merge\n  if (isObj && isObject(this._data)) {\n    for (var key in data) {\n      this._data[key] = data[key];\n    }\n  } else if ('string' == typeof data) {\n    // default to x-www-form-urlencoded\n    if (!type) this.type('form');\n    type = this._header['content-type'];\n    if ('application/x-www-form-urlencoded' == type) {\n      this._data = this._data\n        ? this._data + '&' + data\n        : data;\n    } else {\n      this._data = (this._data || '') + data;\n    }\n  } else {\n    this._data = data;\n  }\n\n  if (!isObj || this._isHost(data)) {\n    return this;\n  }\n\n  // default to json\n  if (!type) this.type('json');\n  return this;\n};\n\n/**\n * Sort `querystring` by the sort function\n *\n *\n * Examples:\n *\n *       // default order\n *       request.get('/user')\n *         .query('name=Nick')\n *         .query('search=Manny')\n *         .sortQuery()\n *         .end(callback)\n *\n *       // customized sort function\n *       request.get('/user')\n *         .query('name=Nick')\n *         .query('search=Manny')\n *         .sortQuery(function(a, b){\n *           return a.length - b.length;\n *         })\n *         .end(callback)\n *\n *\n * @param {Function} sort\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.sortQuery = function(sort) {\n  // _sort default to true but otherwise can be a function or boolean\n  this._sort = typeof sort === 'undefined' ? true : sort;\n  return this;\n};\n\n/**\n * Compose querystring to append to req.url\n *\n * @api private\n */\nRequestBase.prototype._finalizeQueryString = function(){\n  var query = this._query.join('&');\n  if (query) {\n    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;\n  }\n  this._query.length = 0; // Makes the call idempotent\n\n  if (this._sort) {\n    var index = this.url.indexOf('?');\n    if (index >= 0) {\n      var queryArr = this.url.substring(index + 1).split('&');\n      if ('function' === typeof this._sort) {\n        queryArr.sort(this._sort);\n      } else {\n        queryArr.sort();\n      }\n      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');\n    }\n  }\n};\n\n// For backwards compat only\nRequestBase.prototype._appendQueryString = function() {console.trace(\"Unsupported\");}\n\n/**\n * Invoke callback with timeout error.\n *\n * @api private\n */\n\nRequestBase.prototype._timeoutError = function(reason, timeout, errno){\n  if (this._aborted) {\n    return;\n  }\n  var err = new Error(reason + timeout + 'ms exceeded');\n  err.timeout = timeout;\n  err.code = 'ECONNABORTED';\n  err.errno = errno;\n  this.timedout = true;\n  this.abort();\n  this.callback(err);\n};\n\nRequestBase.prototype._setTimeouts = function() {\n  var self = this;\n\n  // deadline\n  if (this._timeout && !this._timer) {\n    this._timer = setTimeout(function(){\n      self._timeoutError('Timeout of ', self._timeout, 'ETIME');\n    }, this._timeout);\n  }\n  // response timeout\n  if (this._responseTimeout && !this._responseTimeoutTimer) {\n    this._responseTimeoutTimer = setTimeout(function(){\n      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');\n    }, this._responseTimeout);\n  }\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/superagent/lib/request-base.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            114,
                            126,
                            "41",
                            1,
                          ],
                          [
                            106,
                            112,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\n/**\n * Module of mixed-in functions shared between node and client code\n */\nvar isObject = __webpack_require__(41);\n\n/**\n * Expose `RequestBase`.\n */\n\nmodule.exports = RequestBase;\n\n/**\n * Initialize a new `RequestBase`.\n *\n * @api public\n */\n\nfunction RequestBase(obj) {\n  if (obj) return mixin(obj);\n}\n\n/**\n * Mixin the prototype properties.\n *\n * @param {Object} obj\n * @return {Object}\n * @api private\n */\n\nfunction mixin(obj) {\n  for (var key in RequestBase.prototype) {\n    obj[key] = RequestBase.prototype[key];\n  }\n  return obj;\n}\n\n/**\n * Clear previous timeout.\n *\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.clearTimeout = function _clearTimeout(){\n  clearTimeout(this._timer);\n  clearTimeout(this._responseTimeoutTimer);\n  delete this._timer;\n  delete this._responseTimeoutTimer;\n  return this;\n};\n\n/**\n * Override default response body parser\n *\n * This function will be called to convert incoming data into request.body\n *\n * @param {Function}\n * @api public\n */\n\nRequestBase.prototype.parse = function parse(fn){\n  this._parser = fn;\n  return this;\n};\n\n/**\n * Set format of binary response body.\n * In browser valid formats are 'blob' and 'arraybuffer',\n * which return Blob and ArrayBuffer, respectively.\n *\n * In Node all values result in Buffer.\n *\n * Examples:\n *\n *      req.get('/')\n *        .responseType('blob')\n *        .end(callback);\n *\n * @param {String} val\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.responseType = function(val){\n  this._responseType = val;\n  return this;\n};\n\n/**\n * Override default request body serializer\n *\n * This function will be called to convert data set via .send or .attach into payload to send\n *\n * @param {Function}\n * @api public\n */\n\nRequestBase.prototype.serialize = function serialize(fn){\n  this._serializer = fn;\n  return this;\n};\n\n/**\n * Set timeouts.\n *\n * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.\n * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.\n *\n * Value of 0 or false means no timeout.\n *\n * @param {Number|Object} ms or {response, deadline}\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.timeout = function timeout(options){\n  if (!options || 'object' !== typeof options) {\n    this._timeout = options;\n    this._responseTimeout = 0;\n    return this;\n  }\n\n  for(var option in options) {\n    switch(option) {\n      case 'deadline':\n        this._timeout = options.deadline;\n        break;\n      case 'response':\n        this._responseTimeout = options.response;\n        break;\n      default:\n        console.warn(\"Unknown timeout option\", option);\n    }\n  }\n  return this;\n};\n\n/**\n * Set number of retry attempts on error.\n *\n * Failed requests will be retried 'count' times if timeout or err.code >= 500.\n *\n * @param {Number} count\n * @param {Function} [fn]\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.retry = function retry(count, fn){\n  // Default to 1 if no count passed or true\n  if (arguments.length === 0 || count === true) count = 1;\n  if (count <= 0) count = 0;\n  this._maxRetries = count;\n  this._retries = 0;\n  this._retryCallback = fn;\n  return this;\n};\n\nvar ERROR_CODES = [\n  'ECONNRESET',\n  'ETIMEDOUT',\n  'EADDRINFO',\n  'ESOCKETTIMEDOUT'\n];\n\n/**\n * Determine if a request should be retried.\n * (Borrowed from segmentio/superagent-retry)\n *\n * @param {Error} err\n * @param {Response} [res]\n * @returns {Boolean}\n */\nRequestBase.prototype._shouldRetry = function(err, res) {\n  if (!this._maxRetries || this._retries++ >= this._maxRetries) {\n    return false;\n  }\n  if (this._retryCallback) {\n    try {\n      var override = this._retryCallback(err, res);\n      if (override === true) return true;\n      if (override === false) return false;\n      // undefined falls back to defaults\n    } catch(e) {\n      console.error(e);\n    }\n  }\n  if (res && res.status && res.status >= 500 && res.status != 501) return true;\n  if (err) {\n    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;\n    // Superagent timeout\n    if (err.timeout && err.code == 'ECONNABORTED') return true;\n    if (err.crossDomain) return true;\n  }\n  return false;\n};\n\n/**\n * Retry request\n *\n * @return {Request} for chaining\n * @api private\n */\n\nRequestBase.prototype._retry = function() {\n\n  this.clearTimeout();\n\n  // node\n  if (this.req) {\n    this.req = null;\n    this.req = this.request();\n  }\n\n  this._aborted = false;\n  this.timedout = false;\n\n  return this._end();\n};\n\n/**\n * Promise support\n *\n * @param {Function} resolve\n * @param {Function} [reject]\n * @return {Request}\n */\n\nRequestBase.prototype.then = function then(resolve, reject) {\n  if (!this._fullfilledPromise) {\n    var self = this;\n    if (this._endCalled) {\n      console.warn(\"Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises\");\n    }\n    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {\n      self.end(function(err, res) {\n        if (err) innerReject(err);\n        else innerResolve(res);\n      });\n    });\n  }\n  return this._fullfilledPromise.then(resolve, reject);\n};\n\nRequestBase.prototype['catch'] = function(cb) {\n  return this.then(undefined, cb);\n};\n\n/**\n * Allow for extension\n */\n\nRequestBase.prototype.use = function use(fn) {\n  fn(this);\n  return this;\n};\n\nRequestBase.prototype.ok = function(cb) {\n  if ('function' !== typeof cb) throw Error(\"Callback required\");\n  this._okCallback = cb;\n  return this;\n};\n\nRequestBase.prototype._isResponseOK = function(res) {\n  if (!res) {\n    return false;\n  }\n\n  if (this._okCallback) {\n    return this._okCallback(res);\n  }\n\n  return res.status >= 200 && res.status < 300;\n};\n\n/**\n * Get request header `field`.\n * Case-insensitive.\n *\n * @param {String} field\n * @return {String}\n * @api public\n */\n\nRequestBase.prototype.get = function(field){\n  return this._header[field.toLowerCase()];\n};\n\n/**\n * Get case-insensitive header `field` value.\n * This is a deprecated internal API. Use `.get(field)` instead.\n *\n * (getHeader is no longer used internally by the superagent code base)\n *\n * @param {String} field\n * @return {String}\n * @api private\n * @deprecated\n */\n\nRequestBase.prototype.getHeader = RequestBase.prototype.get;\n\n/**\n * Set header `field` to `val`, or multiple fields with one object.\n * Case-insensitive.\n *\n * Examples:\n *\n *      req.get('/')\n *        .set('Accept', 'application/json')\n *        .set('X-API-Key', 'foobar')\n *        .end(callback);\n *\n *      req.get('/')\n *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })\n *        .end(callback);\n *\n * @param {String|Object} field\n * @param {String} val\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.set = function(field, val){\n  if (isObject(field)) {\n    for (var key in field) {\n      this.set(key, field[key]);\n    }\n    return this;\n  }\n  this._header[field.toLowerCase()] = val;\n  this.header[field] = val;\n  return this;\n};\n\n/**\n * Remove header `field`.\n * Case-insensitive.\n *\n * Example:\n *\n *      req.get('/')\n *        .unset('User-Agent')\n *        .end(callback);\n *\n * @param {String} field\n */\nRequestBase.prototype.unset = function(field){\n  delete this._header[field.toLowerCase()];\n  delete this.header[field];\n  return this;\n};\n\n/**\n * Write the field `name` and `val`, or multiple fields with one object\n * for \"multipart/form-data\" request bodies.\n *\n * ``` js\n * request.post('/upload')\n *   .field('foo', 'bar')\n *   .end(callback);\n *\n * request.post('/upload')\n *   .field({ foo: 'bar', baz: 'qux' })\n *   .end(callback);\n * ```\n *\n * @param {String|Object} name\n * @param {String|Blob|File|Buffer|fs.ReadStream} val\n * @return {Request} for chaining\n * @api public\n */\nRequestBase.prototype.field = function(name, val) {\n  // name should be either a string or an object.\n  if (null === name || undefined === name) {\n    throw new Error('.field(name, val) name can not be empty');\n  }\n\n  if (this._data) {\n    console.error(\".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()\");\n  }\n\n  if (isObject(name)) {\n    for (var key in name) {\n      this.field(key, name[key]);\n    }\n    return this;\n  }\n\n  if (Array.isArray(val)) {\n    for (var i in val) {\n      this.field(name, val[i]);\n    }\n    return this;\n  }\n\n  // val should be defined now\n  if (null === val || undefined === val) {\n    throw new Error('.field(name, val) val can not be empty');\n  }\n  if ('boolean' === typeof val) {\n    val = '' + val;\n  }\n  this._getFormData().append(name, val);\n  return this;\n};\n\n/**\n * Abort the request, and clear potential timeout.\n *\n * @return {Request}\n * @api public\n */\nRequestBase.prototype.abort = function(){\n  if (this._aborted) {\n    return this;\n  }\n  this._aborted = true;\n  this.xhr && this.xhr.abort(); // browser\n  this.req && this.req.abort(); // node\n  this.clearTimeout();\n  this.emit('abort');\n  return this;\n};\n\nRequestBase.prototype._auth = function(user, pass, options, base64Encoder) {\n  switch (options.type) {\n    case 'basic':\n      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));\n      break;\n\n    case 'auto':\n      this.username = user;\n      this.password = pass;\n      break;\n\n    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })\n      this.set('Authorization', 'Bearer ' + user);\n      break;\n  }\n  return this;\n};\n\n/**\n * Enable transmission of cookies with x-domain requests.\n *\n * Note that for this to work the origin must not be\n * using \"Access-Control-Allow-Origin\" with a wildcard,\n * and also must set \"Access-Control-Allow-Credentials\"\n * to \"true\".\n *\n * @api public\n */\n\nRequestBase.prototype.withCredentials = function(on) {\n  // This is browser-only functionality. Node side is no-op.\n  if (on == undefined) on = true;\n  this._withCredentials = on;\n  return this;\n};\n\n/**\n * Set the max redirects to `n`. Does noting in browser XHR implementation.\n *\n * @param {Number} n\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.redirects = function(n){\n  this._maxRedirects = n;\n  return this;\n};\n\n/**\n * Maximum size of buffered response body, in bytes. Counts uncompressed size.\n * Default 200MB.\n *\n * @param {Number} n\n * @return {Request} for chaining\n */\nRequestBase.prototype.maxResponseSize = function(n){\n  if ('number' !== typeof n) {\n    throw TypeError(\"Invalid argument\");\n  }\n  this._maxResponseSize = n;\n  return this;\n};\n\n/**\n * Convert to a plain javascript object (not JSON string) of scalar properties.\n * Note as this method is designed to return a useful non-this value,\n * it cannot be chained.\n *\n * @return {Object} describing method, url, and data of this request\n * @api public\n */\n\nRequestBase.prototype.toJSON = function() {\n  return {\n    method: this.method,\n    url: this.url,\n    data: this._data,\n    headers: this._header,\n  };\n};\n\n/**\n * Send `data` as the request body, defaulting the `.type()` to \"json\" when\n * an object is given.\n *\n * Examples:\n *\n *       // manual json\n *       request.post('/user')\n *         .type('json')\n *         .send('{\"name\":\"tj\"}')\n *         .end(callback)\n *\n *       // auto json\n *       request.post('/user')\n *         .send({ name: 'tj' })\n *         .end(callback)\n *\n *       // manual x-www-form-urlencoded\n *       request.post('/user')\n *         .type('form')\n *         .send('name=tj')\n *         .end(callback)\n *\n *       // auto x-www-form-urlencoded\n *       request.post('/user')\n *         .type('form')\n *         .send({ name: 'tj' })\n *         .end(callback)\n *\n *       // defaults to x-www-form-urlencoded\n *      request.post('/user')\n *        .send('name=tobi')\n *        .send('species=ferret')\n *        .end(callback)\n *\n * @param {String|Object} data\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.send = function(data){\n  var isObj = isObject(data);\n  var type = this._header['content-type'];\n\n  if (this._formData) {\n    console.error(\".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()\");\n  }\n\n  if (isObj && !this._data) {\n    if (Array.isArray(data)) {\n      this._data = [];\n    } else if (!this._isHost(data)) {\n      this._data = {};\n    }\n  } else if (data && this._data && this._isHost(this._data)) {\n    throw Error(\"Can't merge these send calls\");\n  }\n\n  // merge\n  if (isObj && isObject(this._data)) {\n    for (var key in data) {\n      this._data[key] = data[key];\n    }\n  } else if ('string' == typeof data) {\n    // default to x-www-form-urlencoded\n    if (!type) this.type('form');\n    type = this._header['content-type'];\n    if ('application/x-www-form-urlencoded' == type) {\n      this._data = this._data\n        ? this._data + '&' + data\n        : data;\n    } else {\n      this._data = (this._data || '') + data;\n    }\n  } else {\n    this._data = data;\n  }\n\n  if (!isObj || this._isHost(data)) {\n    return this;\n  }\n\n  // default to json\n  if (!type) this.type('json');\n  return this;\n};\n\n/**\n * Sort `querystring` by the sort function\n *\n *\n * Examples:\n *\n *       // default order\n *       request.get('/user')\n *         .query('name=Nick')\n *         .query('search=Manny')\n *         .sortQuery()\n *         .end(callback)\n *\n *       // customized sort function\n *       request.get('/user')\n *         .query('name=Nick')\n *         .query('search=Manny')\n *         .sortQuery(function(a, b){\n *           return a.length - b.length;\n *         })\n *         .end(callback)\n *\n *\n * @param {Function} sort\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.sortQuery = function(sort) {\n  // _sort default to true but otherwise can be a function or boolean\n  this._sort = typeof sort === 'undefined' ? true : sort;\n  return this;\n};\n\n/**\n * Compose querystring to append to req.url\n *\n * @api private\n */\nRequestBase.prototype._finalizeQueryString = function(){\n  var query = this._query.join('&');\n  if (query) {\n    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;\n  }\n  this._query.length = 0; // Makes the call idempotent\n\n  if (this._sort) {\n    var index = this.url.indexOf('?');\n    if (index >= 0) {\n      var queryArr = this.url.substring(index + 1).split('&');\n      if ('function' === typeof this._sort) {\n        queryArr.sort(this._sort);\n      } else {\n        queryArr.sort();\n      }\n      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');\n    }\n  }\n};\n\n// For backwards compat only\nRequestBase.prototype._appendQueryString = function() {console.trace(\"Unsupported\");}\n\n/**\n * Invoke callback with timeout error.\n *\n * @api private\n */\n\nRequestBase.prototype._timeoutError = function(reason, timeout, errno){\n  if (this._aborted) {\n    return;\n  }\n  var err = new Error(reason + timeout + 'ms exceeded');\n  err.timeout = timeout;\n  err.code = 'ECONNABORTED';\n  err.errno = errno;\n  this.timedout = true;\n  this.abort();\n  this.callback(err);\n};\n\nRequestBase.prototype._setTimeouts = function() {\n  var self = this;\n\n  // deadline\n  if (this._timeout && !this._timer) {\n    this._timer = setTimeout(function(){\n      self._timeoutError('Timeout of ', self._timeout, 'ETIME');\n    }, this._timeout);\n  }\n  // response timeout\n  if (this._responseTimeout && !this._responseTimeoutTimer) {\n    this._responseTimeoutTimer = setTimeout(function(){\n      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');\n    }, this._responseTimeout);\n  }\n};\n",
                      _cachedSize: 15697,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 105 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * Module dependencies.\n */\n\nvar utils = require('./utils');\n\n/**\n * Expose `ResponseBase`.\n */\n\nmodule.exports = ResponseBase;\n\n/**\n * Initialize a new `ResponseBase`.\n *\n * @api public\n */\n\nfunction ResponseBase(obj) {\n  if (obj) return mixin(obj);\n}\n\n/**\n * Mixin the prototype properties.\n *\n * @param {Object} obj\n * @return {Object}\n * @api private\n */\n\nfunction mixin(obj) {\n  for (var key in ResponseBase.prototype) {\n    obj[key] = ResponseBase.prototype[key];\n  }\n  return obj;\n}\n\n/**\n * Get case-insensitive `field` value.\n *\n * @param {String} field\n * @return {String}\n * @api public\n */\n\nResponseBase.prototype.get = function(field) {\n  return this.header[field.toLowerCase()];\n};\n\n/**\n * Set header related properties:\n *\n *   - `.type` the content type without params\n *\n * A response of \"Content-Type: text/plain; charset=utf-8\"\n * will provide you with a `.type` of \"text/plain\".\n *\n * @param {Object} header\n * @api private\n */\n\nResponseBase.prototype._setHeaderProperties = function(header){\n    // TODO: moar!\n    // TODO: make this a util\n\n    // content-type\n    var ct = header['content-type'] || '';\n    this.type = utils.type(ct);\n\n    // params\n    var params = utils.params(ct);\n    for (var key in params) this[key] = params[key];\n\n    this.links = {};\n\n    // links\n    try {\n        if (header.link) {\n            this.links = utils.parseLinks(header.link);\n        }\n    } catch (err) {\n        // ignore\n    }\n};\n\n/**\n * Set flags such as `.ok` based on `status`.\n *\n * For example a 2xx response will give you a `.ok` of __true__\n * whereas 5xx will be __false__ and `.error` will be __true__. The\n * `.clientError` and `.serverError` are also available to be more\n * specific, and `.statusType` is the class of error ranging from 1..5\n * sometimes useful for mapping respond colors etc.\n *\n * \"sugar\" properties are also defined for common cases. Currently providing:\n *\n *   - .noContent\n *   - .badRequest\n *   - .unauthorized\n *   - .notAcceptable\n *   - .notFound\n *\n * @param {Number} status\n * @api private\n */\n\nResponseBase.prototype._setStatusProperties = function(status){\n    var type = status / 100 | 0;\n\n    // status / class\n    this.status = this.statusCode = status;\n    this.statusType = type;\n\n    // basics\n    this.info = 1 == type;\n    this.ok = 2 == type;\n    this.redirect = 3 == type;\n    this.clientError = 4 == type;\n    this.serverError = 5 == type;\n    this.error = (4 == type || 5 == type)\n        ? this.toError()\n        : false;\n\n    // sugar\n    this.created = 201 == status;\n    this.accepted = 202 == status;\n    this.noContent = 204 == status;\n    this.badRequest = 400 == status;\n    this.unauthorized = 401 == status;\n    this.notAcceptable = 406 == status;\n    this.forbidden = 403 == status;\n    this.notFound = 404 == status;\n    this.unprocessableEntity = 422 == status;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/superagent/lib/response-base.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            68,
                            76,
                            "106",
                            1,
                          ],
                          [
                            60,
                            66,
                            "__webpack_require__",
                            2,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\n/**\n * Module dependencies.\n */\n\nvar utils = __webpack_require__(106);\n\n/**\n * Expose `ResponseBase`.\n */\n\nmodule.exports = ResponseBase;\n\n/**\n * Initialize a new `ResponseBase`.\n *\n * @api public\n */\n\nfunction ResponseBase(obj) {\n  if (obj) return mixin(obj);\n}\n\n/**\n * Mixin the prototype properties.\n *\n * @param {Object} obj\n * @return {Object}\n * @api private\n */\n\nfunction mixin(obj) {\n  for (var key in ResponseBase.prototype) {\n    obj[key] = ResponseBase.prototype[key];\n  }\n  return obj;\n}\n\n/**\n * Get case-insensitive `field` value.\n *\n * @param {String} field\n * @return {String}\n * @api public\n */\n\nResponseBase.prototype.get = function(field) {\n  return this.header[field.toLowerCase()];\n};\n\n/**\n * Set header related properties:\n *\n *   - `.type` the content type without params\n *\n * A response of \"Content-Type: text/plain; charset=utf-8\"\n * will provide you with a `.type` of \"text/plain\".\n *\n * @param {Object} header\n * @api private\n */\n\nResponseBase.prototype._setHeaderProperties = function(header){\n    // TODO: moar!\n    // TODO: make this a util\n\n    // content-type\n    var ct = header['content-type'] || '';\n    this.type = utils.type(ct);\n\n    // params\n    var params = utils.params(ct);\n    for (var key in params) this[key] = params[key];\n\n    this.links = {};\n\n    // links\n    try {\n        if (header.link) {\n            this.links = utils.parseLinks(header.link);\n        }\n    } catch (err) {\n        // ignore\n    }\n};\n\n/**\n * Set flags such as `.ok` based on `status`.\n *\n * For example a 2xx response will give you a `.ok` of __true__\n * whereas 5xx will be __false__ and `.error` will be __true__. The\n * `.clientError` and `.serverError` are also available to be more\n * specific, and `.statusType` is the class of error ranging from 1..5\n * sometimes useful for mapping respond colors etc.\n *\n * \"sugar\" properties are also defined for common cases. Currently providing:\n *\n *   - .noContent\n *   - .badRequest\n *   - .unauthorized\n *   - .notAcceptable\n *   - .notFound\n *\n * @param {Number} status\n * @api private\n */\n\nResponseBase.prototype._setStatusProperties = function(status){\n    var type = status / 100 | 0;\n\n    // status / class\n    this.status = this.statusCode = status;\n    this.statusType = type;\n\n    // basics\n    this.info = 1 == type;\n    this.ok = 2 == type;\n    this.redirect = 3 == type;\n    this.clientError = 4 == type;\n    this.serverError = 5 == type;\n    this.error = (4 == type || 5 == type)\n        ? this.toError()\n        : false;\n\n    // sugar\n    this.created = 201 == status;\n    this.accepted = 202 == status;\n    this.noContent = 204 == status;\n    this.badRequest = 400 == status;\n    this.unauthorized = 401 == status;\n    this.notAcceptable = 406 == status;\n    this.forbidden = 403 == status;\n    this.notFound = 404 == status;\n    this.unprocessableEntity = 422 == status;\n};\n",
                      _cachedSize: 2862,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 106 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * Return the mime type for the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nexports.type = function(str){\n  return str.split(/ *; */).shift();\n};\n\n/**\n * Return header field parameters.\n *\n * @param {String} str\n * @return {Object}\n * @api private\n */\n\nexports.params = function(str){\n  return str.split(/ *; */).reduce(function(obj, str){\n    var parts = str.split(/ *= */);\n    var key = parts.shift();\n    var val = parts.shift();\n\n    if (key && val) obj[key] = val;\n    return obj;\n  }, {});\n};\n\n/**\n * Parse Link header fields.\n *\n * @param {String} str\n * @return {Object}\n * @api private\n */\n\nexports.parseLinks = function(str){\n  return str.split(/ *, */).reduce(function(obj, str){\n    var parts = str.split(/ *; */);\n    var url = parts[0].slice(1, -1);\n    var rel = parts[1].split(/ *= */)[1].slice(1, -1);\n    obj[rel] = url;\n    return obj;\n  }, {});\n};\n\n/**\n * Strip content related fields from `header`.\n *\n * @param {Object} header\n * @return {Object} header\n * @api private\n */\n\nexports.cleanHeader = function(header, changesOrigin){\n  delete header['content-type'];\n  delete header['content-length'];\n  delete header['transfer-encoding'];\n  delete header['host'];\n  // secuirty\n  if (changesOrigin) {\n    delete header['authorization'];\n    delete header['cookie'];\n  }\n  return header;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/superagent/lib/utils.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\n/**\n * Return the mime type for the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nexports.type = function(str){\n  return str.split(/ *; */).shift();\n};\n\n/**\n * Return header field parameters.\n *\n * @param {String} str\n * @return {Object}\n * @api private\n */\n\nexports.params = function(str){\n  return str.split(/ *; */).reduce(function(obj, str){\n    var parts = str.split(/ *= */);\n    var key = parts.shift();\n    var val = parts.shift();\n\n    if (key && val) obj[key] = val;\n    return obj;\n  }, {});\n};\n\n/**\n * Parse Link header fields.\n *\n * @param {String} str\n * @return {Object}\n * @api private\n */\n\nexports.parseLinks = function(str){\n  return str.split(/ *, */).reduce(function(obj, str){\n    var parts = str.split(/ *; */);\n    var url = parts[0].slice(1, -1);\n    var rel = parts[1].split(/ *= */)[1].slice(1, -1);\n    obj[rel] = url;\n    return obj;\n  }, {});\n};\n\n/**\n * Strip content related fields from `header`.\n *\n * @param {Object} header\n * @return {Object} header\n * @api private\n */\n\nexports.cleanHeader = function(header, changesOrigin){\n  delete header['content-type'];\n  delete header['content-length'];\n  delete header['transfer-encoding'];\n  delete header['host'];\n  // secuirty\n  if (changesOrigin) {\n    delete header['authorization'];\n    delete header['cookie'];\n  }\n  return header;\n};\n",
                      _cachedSize: 1352,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 107 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// this module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle\n\nmodule.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  scopeId,\n  cssModules\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  // inject cssModules\n  if (cssModules) {\n    var computed = Object.create(options.computed || null)\n    Object.keys(cssModules).forEach(function (key) {\n      var module = cssModules[key]\n      computed[key] = function () { return module }\n    })\n    options.computed = computed\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/vue-loader/lib/component-normalizer.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// this module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle\n\nmodule.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  scopeId,\n  cssModules\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  // inject cssModules\n  if (cssModules) {\n    var computed = Object.create(options.computed || null)\n    Object.keys(cssModules).forEach(function (key) {\n      var module = cssModules[key]\n      computed[key] = function () { return module }\n    })\n    options.computed = computed\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n",
                      _cachedSize: 1275,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 108 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"component-wrap\"\n  }, [_c('div', {\n    staticClass: \"develop-from-here\"\n  }, [_c('h3', [_vm._v(\"好好学习:\")]), _vm._v(\" \"), _vm._m(0), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.input)\n    }\n  }), _vm._v(\" \"), _vm._m(1), _vm._v(\" \"), _c('span', [_c('a', {\n    attrs: {\n      \"href\": _vm.link\n    }\n  }, [_vm._v(\"点击跳转到：https://i..com/\")])]), _vm._v(\" \"), _vm._m(2), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.textarea)\n    }\n  }), _vm._v(\" \"), _vm._m(3), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.datetime)\n    }\n  }), _vm._v(\" \"), _vm._m(4), _vm._v(\" \"), _c('h5', _vm._l((_vm.datetimerange), function(i, k) {\n    return _c('span', {\n      key: i + '1'\n    }, [_c('span', {\n      domProps: {\n        \"textContent\": _vm._s(k == 1 ? ' 至 ' : '')\n      }\n    }), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i)\n      }\n    })])\n  })), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"颜色：\")]), _vm._v(\" \"), _c('span', {\n    style: ({\n      color: _vm.color\n    })\n  }, [_vm._v(\"颜色\")])]), _vm._v(\" \"), _vm._m(5), _vm._v(\" \"), _c('img', {\n    directives: [{\n      name: \"touch\",\n      rawName: \"v-touch:tap\",\n      value: (_vm.jump),\n      expression: \"jump\",\n      arg: \"tap\"\n    }],\n    attrs: {\n      \"src\": _vm.image\n    }\n  }), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"数字：\")]), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.number)\n    }\n  })]), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"开关：\")]), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm._switch ? '开' : '关')\n    }\n  })]), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"单选：\")]), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.singleselection)\n    }\n  })]), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"多选：\")]), _vm._v(\" \"), _vm._l((_vm.multipleselection), function(i) {\n    return _c('span', {\n      key: i + '2',\n      domProps: {\n        \"textContent\": _vm._s(i + ',')\n      }\n    })\n  })], 2), _vm._v(\" \"), _vm._m(6), _vm._v(\" \"), _vm._l((_vm.array), function(i) {\n    return _c('h5', {\n      key: i + '3'\n    }, [_c('span', {\n      staticClass: \"highlight\"\n    }, [_vm._v(\"null：\")]), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i.title + '-->')\n      }\n    }), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i.image)\n      }\n    })])\n  }), _vm._v(\" \"), _c('h5', {\n    ref: \"demo\"\n  }, [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"对象：\")])]), _vm._v(\" \"), _vm._l((_vm.object), function(i, k) {\n    return _c('h5', {\n      key: i + '4'\n    }, [_c('span', {\n      staticClass: \"highlight\"\n    }, [_vm._v(\"Key：\")]), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(k + ' ')\n      }\n    }), _vm._v(\" \"), _c('span', {\n      staticClass: \"highlight\"\n    }, [_vm._v(\"Value：\")]), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i)\n      }\n    })])\n  }), _vm._v(\" \"), _vm._m(7), _vm._v(\" \"), _vm._l((_vm.treeselect), function(i) {\n    return _c('h5', {\n      key: i + '5'\n    }, [_c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i)\n      }\n    })])\n  })], 2)])\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"文本：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"固定链接：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"文本框：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"日期时间：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"时间范围：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"图片：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"数组：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"树形结构：\")])])\n}]}\nmodule.exports.render._withStripped = true\nif (module.hot) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-6ab69d3e\", module.exports)\n  }\n}",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6ab69d3e\"}!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/vue-loader/lib/selector.js?type=template&index=0!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/index.vue",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            4937,
                            4946,
                            "false",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"component-wrap\"\n  }, [_c('div', {\n    staticClass: \"develop-from-here\"\n  }, [_c('h3', [_vm._v(\"好好学习:\")]), _vm._v(\" \"), _vm._m(0), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.input)\n    }\n  }), _vm._v(\" \"), _vm._m(1), _vm._v(\" \"), _c('span', [_c('a', {\n    attrs: {\n      \"href\": _vm.link\n    }\n  }, [_vm._v(\"点击跳转到：https://i..com/\")])]), _vm._v(\" \"), _vm._m(2), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.textarea)\n    }\n  }), _vm._v(\" \"), _vm._m(3), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.datetime)\n    }\n  }), _vm._v(\" \"), _vm._m(4), _vm._v(\" \"), _c('h5', _vm._l((_vm.datetimerange), function(i, k) {\n    return _c('span', {\n      key: i + '1'\n    }, [_c('span', {\n      domProps: {\n        \"textContent\": _vm._s(k == 1 ? ' 至 ' : '')\n      }\n    }), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i)\n      }\n    })])\n  })), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"颜色：\")]), _vm._v(\" \"), _c('span', {\n    style: ({\n      color: _vm.color\n    })\n  }, [_vm._v(\"颜色\")])]), _vm._v(\" \"), _vm._m(5), _vm._v(\" \"), _c('img', {\n    directives: [{\n      name: \"touch\",\n      rawName: \"v-touch:tap\",\n      value: (_vm.jump),\n      expression: \"jump\",\n      arg: \"tap\"\n    }],\n    attrs: {\n      \"src\": _vm.image\n    }\n  }), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"数字：\")]), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.number)\n    }\n  })]), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"开关：\")]), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm._switch ? '开' : '关')\n    }\n  })]), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"单选：\")]), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.singleselection)\n    }\n  })]), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"多选：\")]), _vm._v(\" \"), _vm._l((_vm.multipleselection), function(i) {\n    return _c('span', {\n      key: i + '2',\n      domProps: {\n        \"textContent\": _vm._s(i + ',')\n      }\n    })\n  })], 2), _vm._v(\" \"), _vm._m(6), _vm._v(\" \"), _vm._l((_vm.array), function(i) {\n    return _c('h5', {\n      key: i + '3'\n    }, [_c('span', {\n      staticClass: \"highlight\"\n    }, [_vm._v(\"null：\")]), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i.title + '-->')\n      }\n    }), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i.image)\n      }\n    })])\n  }), _vm._v(\" \"), _c('h5', {\n    ref: \"demo\"\n  }, [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"对象：\")])]), _vm._v(\" \"), _vm._l((_vm.object), function(i, k) {\n    return _c('h5', {\n      key: i + '4'\n    }, [_c('span', {\n      staticClass: \"highlight\"\n    }, [_vm._v(\"Key：\")]), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(k + ' ')\n      }\n    }), _vm._v(\" \"), _c('span', {\n      staticClass: \"highlight\"\n    }, [_vm._v(\"Value：\")]), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i)\n      }\n    })])\n  }), _vm._v(\" \"), _vm._m(7), _vm._v(\" \"), _vm._l((_vm.treeselect), function(i) {\n    return _c('h5', {\n      key: i + '5'\n    }, [_c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i)\n      }\n    })])\n  })], 2)])\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"文本：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"固定链接：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"文本框：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"日期时间：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"时间范围：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"图片：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"数组：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"树形结构：\")])])\n}]}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-6ab69d3e\", module.exports)\n  }\n}",
                      _cachedSize: 5077,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 109 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// removed by extract-text-webpack-plugin",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-template/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/vue-style-loader/index.js!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6ab69d3e\",\"scoped\":true,\"hasInlineConfig\":false}!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/vue-loader/lib/selector.js?type=styles&index=0!/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/index.vue",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "// removed by extract-text-webpack-plugin",
                      _cachedSize: 41,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 110 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,\n// backported and transplited with Babel, with backwards-compat fixes\n\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function() {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = (i >= 0) ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function(path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function(p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function(path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function() {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function(p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n\n// path.relative(from, to)\n// posix version\nexports.relative = function(from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  if (path.length === 0) return '.';\n  var code = path.charCodeAt(0);\n  var hasRoot = code === 47 /*/*/;\n  var end = -1;\n  var matchedSlash = true;\n  for (var i = path.length - 1; i >= 1; --i) {\n    code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        if (!matchedSlash) {\n          end = i;\n          break;\n        }\n      } else {\n      // We saw the first non-path separator\n      matchedSlash = false;\n    }\n  }\n\n  if (end === -1) return hasRoot ? '/' : '.';\n  if (hasRoot && end === 1) {\n    // return '//';\n    // Backwards-compat fix:\n    return '/';\n  }\n  return path.slice(0, end);\n};\n\nfunction basename(path) {\n  if (typeof path !== 'string') path = path + '';\n\n  var start = 0;\n  var end = -1;\n  var matchedSlash = true;\n  var i;\n\n  for (i = path.length - 1; i >= 0; --i) {\n    if (path.charCodeAt(i) === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          start = i + 1;\n          break;\n        }\n      } else if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // path component\n      matchedSlash = false;\n      end = i + 1;\n    }\n  }\n\n  if (end === -1) return '';\n  return path.slice(start, end);\n}\n\n// Uses a mixed approach for backwards-compatibility, as ext behavior changed\n// in new Node.js versions, so only basename() above is backported here\nexports.basename = function (path, ext) {\n  var f = basename(path);\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\nexports.extname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  var startDot = -1;\n  var startPart = 0;\n  var end = -1;\n  var matchedSlash = true;\n  // Track the state of characters (if any) we see before our first dot and\n  // after any path separator we find\n  var preDotState = 0;\n  for (var i = path.length - 1; i >= 0; --i) {\n    var code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          startPart = i + 1;\n          break;\n        }\n        continue;\n      }\n    if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // extension\n      matchedSlash = false;\n      end = i + 1;\n    }\n    if (code === 46 /*.*/) {\n        // If this is our first dot, mark it as the start of our extension\n        if (startDot === -1)\n          startDot = i;\n        else if (preDotState !== 1)\n          preDotState = 1;\n    } else if (startDot !== -1) {\n      // We saw a non-dot and non-path separator before our dot, so we should\n      // have a good chance at having a non-empty extension\n      preDotState = -1;\n    }\n  }\n\n  if (startDot === -1 || end === -1 ||\n      // We saw a non-dot character immediately before the dot\n      preDotState === 0 ||\n      // The (right-most) trimmed path component is exactly '..'\n      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n    return '';\n  }\n  return path.slice(startDot, end);\n};\n\nfunction filter (xs, f) {\n    if (xs.filter) return xs.filter(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        if (f(xs[i], i, xs)) res.push(xs[i]);\n    }\n    return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b'\n    ? function (str, start, len) { return str.substr(start, len) }\n    : function (str, start, len) {\n        if (start < 0) start = str.length + start;\n        return str.substr(start, len);\n    }\n;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-template/node_modules/path-browserify/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            8743.5,
                            8742.5,
                            "\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))",
                            1,
                          ],
                          [
                            -9.5,
                            -10.5,
                            "/* WEBPACK VAR INJECTION */(function(process) {",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,\n// backported and transplited with Babel, with backwards-compat fixes\n\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function() {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = (i >= 0) ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function(path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function(p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function(path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function() {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function(p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n\n// path.relative(from, to)\n// posix version\nexports.relative = function(from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  if (path.length === 0) return '.';\n  var code = path.charCodeAt(0);\n  var hasRoot = code === 47 /*/*/;\n  var end = -1;\n  var matchedSlash = true;\n  for (var i = path.length - 1; i >= 1; --i) {\n    code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        if (!matchedSlash) {\n          end = i;\n          break;\n        }\n      } else {\n      // We saw the first non-path separator\n      matchedSlash = false;\n    }\n  }\n\n  if (end === -1) return hasRoot ? '/' : '.';\n  if (hasRoot && end === 1) {\n    // return '//';\n    // Backwards-compat fix:\n    return '/';\n  }\n  return path.slice(0, end);\n};\n\nfunction basename(path) {\n  if (typeof path !== 'string') path = path + '';\n\n  var start = 0;\n  var end = -1;\n  var matchedSlash = true;\n  var i;\n\n  for (i = path.length - 1; i >= 0; --i) {\n    if (path.charCodeAt(i) === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          start = i + 1;\n          break;\n        }\n      } else if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // path component\n      matchedSlash = false;\n      end = i + 1;\n    }\n  }\n\n  if (end === -1) return '';\n  return path.slice(start, end);\n}\n\n// Uses a mixed approach for backwards-compatibility, as ext behavior changed\n// in new Node.js versions, so only basename() above is backported here\nexports.basename = function (path, ext) {\n  var f = basename(path);\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\nexports.extname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  var startDot = -1;\n  var startPart = 0;\n  var end = -1;\n  var matchedSlash = true;\n  // Track the state of characters (if any) we see before our first dot and\n  // after any path separator we find\n  var preDotState = 0;\n  for (var i = path.length - 1; i >= 0; --i) {\n    var code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          startPart = i + 1;\n          break;\n        }\n        continue;\n      }\n    if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // extension\n      matchedSlash = false;\n      end = i + 1;\n    }\n    if (code === 46 /*.*/) {\n        // If this is our first dot, mark it as the start of our extension\n        if (startDot === -1)\n          startDot = i;\n        else if (preDotState !== 1)\n          preDotState = 1;\n    } else if (startDot !== -1) {\n      // We saw a non-dot and non-path separator before our dot, so we should\n      // have a good chance at having a non-empty extension\n      preDotState = -1;\n    }\n  }\n\n  if (startDot === -1 || end === -1 ||\n      // We saw a non-dot character immediately before the dot\n      preDotState === 0 ||\n      // The (right-most) trimmed path component is exactly '..'\n      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n    return '';\n  }\n  return path.slice(startDot, end);\n};\n\nfunction filter (xs, f) {\n    if (xs.filter) return xs.filter(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        if (f(xs[i], i, xs)) res.push(xs[i]);\n    }\n    return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b'\n    ? function (str, start, len) { return str.substr(start, len) }\n    : function (str, start, len) {\n        if (start < 0) start = str.length + start;\n        return str.substr(start, len);\n    }\n;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))",
                      _cachedSize: 8858,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 111 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n'use strict';\n\n// If obj.hasOwnProperty has been overridden, then calling\n// obj.hasOwnProperty(prop) will break.\n// See: https://github.com/joyent/node/issues/1707\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nmodule.exports = function(qs, sep, eq, options) {\n  sep = sep || '&';\n  eq = eq || '=';\n  var obj = {};\n\n  if (typeof qs !== 'string' || qs.length === 0) {\n    return obj;\n  }\n\n  var regexp = /\\+/g;\n  qs = qs.split(sep);\n\n  var maxKeys = 1000;\n  if (options && typeof options.maxKeys === 'number') {\n    maxKeys = options.maxKeys;\n  }\n\n  var len = qs.length;\n  // maxKeys <= 0 means that we should not limit keys count\n  if (maxKeys > 0 && len > maxKeys) {\n    len = maxKeys;\n  }\n\n  for (var i = 0; i < len; ++i) {\n    var x = qs[i].replace(regexp, '%20'),\n        idx = x.indexOf(eq),\n        kstr, vstr, k, v;\n\n    if (idx >= 0) {\n      kstr = x.substr(0, idx);\n      vstr = x.substr(idx + 1);\n    } else {\n      kstr = x;\n      vstr = '';\n    }\n\n    k = decodeURIComponent(kstr);\n    v = decodeURIComponent(vstr);\n\n    if (!hasOwnProperty(obj, k)) {\n      obj[k] = v;\n    } else if (isArray(obj[k])) {\n      obj[k].push(v);\n    } else {\n      obj[k] = [obj[k], v];\n    }\n  }\n\n  return obj;\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-template/node_modules/querystring-es3/decode.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1134,
                            1146,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\n// If obj.hasOwnProperty has been overridden, then calling\n// obj.hasOwnProperty(prop) will break.\n// See: https://github.com/joyent/node/issues/1707\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nmodule.exports = function(qs, sep, eq, options) {\n  sep = sep || '&';\n  eq = eq || '=';\n  var obj = {};\n\n  if (typeof qs !== 'string' || qs.length === 0) {\n    return obj;\n  }\n\n  var regexp = /\\+/g;\n  qs = qs.split(sep);\n\n  var maxKeys = 1000;\n  if (options && typeof options.maxKeys === 'number') {\n    maxKeys = options.maxKeys;\n  }\n\n  var len = qs.length;\n  // maxKeys <= 0 means that we should not limit keys count\n  if (maxKeys > 0 && len > maxKeys) {\n    len = maxKeys;\n  }\n\n  for (var i = 0; i < len; ++i) {\n    var x = qs[i].replace(regexp, '%20'),\n        idx = x.indexOf(eq),\n        kstr, vstr, k, v;\n\n    if (idx >= 0) {\n      kstr = x.substr(0, idx);\n      vstr = x.substr(idx + 1);\n    } else {\n      kstr = x;\n      vstr = '';\n    }\n\n    k = decodeURIComponent(kstr);\n    v = decodeURIComponent(vstr);\n\n    if (!hasOwnProperty(obj, k)) {\n      obj[k] = v;\n    } else if (isArray(obj[k])) {\n      obj[k].push(v);\n    } else {\n      obj[k] = [obj[k], v];\n    }\n  }\n\n  return obj;\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n",
                      _cachedSize: 2497,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 112 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n'use strict';\n\nvar stringifyPrimitive = function(v) {\n  switch (typeof v) {\n    case 'string':\n      return v;\n\n    case 'boolean':\n      return v ? 'true' : 'false';\n\n    case 'number':\n      return isFinite(v) ? v : '';\n\n    default:\n      return '';\n  }\n};\n\nmodule.exports = function(obj, sep, eq, name) {\n  sep = sep || '&';\n  eq = eq || '=';\n  if (obj === null) {\n    obj = undefined;\n  }\n\n  if (typeof obj === 'object') {\n    return map(objectKeys(obj), function(k) {\n      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;\n      if (isArray(obj[k])) {\n        return map(obj[k], function(v) {\n          return ks + encodeURIComponent(stringifyPrimitive(v));\n        }).join(sep);\n      } else {\n        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));\n      }\n    }).join(sep);\n\n  }\n\n  if (!name) return '';\n  return encodeURIComponent(stringifyPrimitive(name)) + eq +\n         encodeURIComponent(stringifyPrimitive(obj));\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\nfunction map (xs, f) {\n  if (xs.map) return xs.map(f);\n  var res = [];\n  for (var i = 0; i < xs.length; i++) {\n    res.push(f(xs[i], i));\n  }\n  return res;\n}\n\nvar objectKeys = Object.keys || function (obj) {\n  var res = [];\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);\n  }\n  return res;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-template/node_modules/querystring-es3/encode.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1134,
                            1146,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar stringifyPrimitive = function(v) {\n  switch (typeof v) {\n    case 'string':\n      return v;\n\n    case 'boolean':\n      return v ? 'true' : 'false';\n\n    case 'number':\n      return isFinite(v) ? v : '';\n\n    default:\n      return '';\n  }\n};\n\nmodule.exports = function(obj, sep, eq, name) {\n  sep = sep || '&';\n  eq = eq || '=';\n  if (obj === null) {\n    obj = undefined;\n  }\n\n  if (typeof obj === 'object') {\n    return map(objectKeys(obj), function(k) {\n      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;\n      if (isArray(obj[k])) {\n        return map(obj[k], function(v) {\n          return ks + encodeURIComponent(stringifyPrimitive(v));\n        }).join(sep);\n      } else {\n        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));\n      }\n    }).join(sep);\n\n  }\n\n  if (!name) return '';\n  return encodeURIComponent(stringifyPrimitive(name)) + eq +\n         encodeURIComponent(stringifyPrimitive(obj));\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\nfunction map (xs, f) {\n  if (xs.map) return xs.map(f);\n  var res = [];\n  for (var i = 0; i < xs.length; i++) {\n    res.push(f(xs[i], i));\n  }\n  return res;\n}\n\nvar objectKeys = Object.keys || function (obj) {\n  var res = [];\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);\n  }\n  return res;\n};\n",
                      _cachedSize: 2531,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 113 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-template/node_modules/setimmediate/setImmediate.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            6474.5,
                            6473.5,
                            "\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(42)))",
                            1,
                          ],
                          [
                            -9.5,
                            -10.5,
                            "/* WEBPACK VAR INJECTION */(function(global, process) {",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(42)))",
                      _cachedSize: 6622,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 114 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var scope = (typeof global !== \"undefined\" && global) ||\n            (typeof self !== \"undefined\" && self) ||\n            window;\nvar apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(scope, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\nrequire(\"setimmediate\");\n// On some exotic environments, it's not clear which object `setimmediate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-template/node_modules/timers-browserify/main.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            2023.5,
                            2022.5,
                            "\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))",
                            3,
                          ],
                          [
                            1392,
                            1405,
                            "113",
                            0,
                          ],
                          [
                            1384,
                            1390,
                            "__webpack_require__",
                            1,
                          ],
                          [
                            -9.5,
                            -10.5,
                            "/* WEBPACK VAR INJECTION */(function(global) {",
                            2,
                          ],
                        ],
                      },
                      _cachedSource: "/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== \"undefined\" && global) ||\n            (typeof self !== \"undefined\" && self) ||\n            window;\nvar apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(scope, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(113);\n// On some exotic environments, it's not clear which object `setimmediate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))",
                      _cachedSize: 2138,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                ",\n",
                "/* 115 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "/**\n * Created by dubaoxing on 2017/3/29.\n * 发布组件所用打包入口文件\n */\nimport Component from '../../src/index.vue'\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/.cube/entry/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            62,
                            104,
                            "",
                            1,
                          ],
                          [
                            -1,
                            -2,
                            "/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue__ = __webpack_require__(43);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_vue__);\n",
                            2,
                          ],
                          [
                            -1,
                            -2,
                            "Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue__ = __webpack_require__(43);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_vue__);\n/**\n * Created by dubaoxing on 2017/3/29.\n * 发布组件所用打包入口文件\n */\n\n",
                      _cachedSize: 384,
                      _cachedMaps: {
                      },
                      node: function(options) {
                        return this._source.node(options);
                      },
                      listMap: function(options) {
                        return this._source.listMap(options);
                      },
                    },
                    "\n\n/***/ })",
                  ],
                },
                "\n/******/ ]",
              ],
            },
            ")",
          ],
        },
        ";",
      ],
    },
    _cachedSource: "/******/ (function(modules) { // webpackBootstrap\n/******/ \t// install a JSONP callback for chunk loading\n/******/ \tvar parentJsonpFunction = window[\"webpackJsonp\"];\n/******/ \twindow[\"webpackJsonp\"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {\n/******/ \t\t// add \"moreModules\" to the modules object,\n/******/ \t\t// then flag all \"chunkIds\" as loaded and fire callback\n/******/ \t\tvar moduleId, chunkId, i = 0, resolves = [], result;\n/******/ \t\tfor(;i < chunkIds.length; i++) {\n/******/ \t\t\tchunkId = chunkIds[i];\n/******/ \t\t\tif(installedChunks[chunkId])\n/******/ \t\t\t\tresolves.push(installedChunks[chunkId][0]);\n/******/ \t\t\tinstalledChunks[chunkId] = 0;\n/******/ \t\t}\n/******/ \t\tfor(moduleId in moreModules) {\n/******/ \t\t\tif(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {\n/******/ \t\t\t\tmodules[moduleId] = moreModules[moduleId];\n/******/ \t\t\t}\n/******/ \t\t}\n/******/ \t\tif(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);\n/******/ \t\twhile(resolves.length)\n/******/ \t\t\tresolves.shift()();\n/******/\n/******/ \t};\n/******/\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// objects to store loaded and loading chunks\n/******/ \tvar installedChunks = {\n/******/ \t\t8: 0\n/******/ \t};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId])\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/ \t// This file contains only the entry chunk.\n/******/ \t// The chunk loading function for additional chunks\n/******/ \t__webpack_require__.e = function requireEnsure(chunkId) {\n/******/ \t\tif(installedChunks[chunkId] === 0)\n/******/ \t\t\treturn Promise.resolve();\n/******/\n/******/ \t\t// an Promise means \"currently loading\".\n/******/ \t\tif(installedChunks[chunkId]) {\n/******/ \t\t\treturn installedChunks[chunkId][2];\n/******/ \t\t}\n/******/ \t\t// start chunk loading\n/******/ \t\tvar head = document.getElementsByTagName('head')[0];\n/******/ \t\tvar script = document.createElement('script');\n/******/ \t\tscript.type = 'text/javascript';\n/******/ \t\tscript.charset = 'utf-8';\n/******/ \t\tscript.async = true;\n/******/ \t\tscript.timeout = 120000;\n/******/\n/******/ \t\tif (__webpack_require__.nc) {\n/******/ \t\t\tscript.setAttribute(\"nonce\", __webpack_require__.nc);\n/******/ \t\t}\n/******/ \t\tscript.src = __webpack_require__.p + \"static/js/\" + chunkId + \".\" + {\"0\":\"0dadc1dddc09f05c1c50\",\"1\":\"7fd7d6a777303a9a02da\",\"2\":\"766582bbef3d5c878c87\",\"3\":\"f79490b6dae118184a2e\",\"4\":\"ceba5bcead9902832ffe\",\"5\":\"498ba56337977b670100\",\"6\":\"bf43826d80588b92057a\",\"7\":\"feadbee6ec57adfe89dd\"}[chunkId] + \".js\";\n/******/ \t\tvar timeout = setTimeout(onScriptComplete, 120000);\n/******/ \t\tscript.onerror = script.onload = onScriptComplete;\n/******/ \t\tfunction onScriptComplete() {\n/******/ \t\t\t// avoid mem leaks in IE.\n/******/ \t\t\tscript.onerror = script.onload = null;\n/******/ \t\t\tclearTimeout(timeout);\n/******/ \t\t\tvar chunk = installedChunks[chunkId];\n/******/ \t\t\tif(chunk !== 0) {\n/******/ \t\t\t\tif(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));\n/******/ \t\t\t\tinstalledChunks[chunkId] = undefined;\n/******/ \t\t\t}\n/******/ \t\t};\n/******/\n/******/ \t\tvar promise = new Promise(function(resolve, reject) {\n/******/ \t\t\tinstalledChunks[chunkId] = [resolve, reject];\n/******/ \t\t});\n/******/ \t\tinstalledChunks[chunkId][2] = promise;\n/******/\n/******/ \t\thead.appendChild(script);\n/******/ \t\treturn promise;\n/******/ \t};\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// identity function for calling harmony imports with the correct context\n/******/ \t__webpack_require__.i = function(value) { return value; };\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"/hfe/block/\";\n/******/\n/******/ \t// on error function for async loading\n/******/ \t__webpack_require__.oe = function(err) { console.error(err); throw err; };\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 115);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports) {\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar store = __webpack_require__(36)('wks');\nvar uid = __webpack_require__(40);\nvar Symbol = __webpack_require__(0).Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar isObject = __webpack_require__(6);\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n/***/ }),\n/* 3 */\n/***/ (function(module, exports) {\n\nvar core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n/***/ }),\n/* 4 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar dP = __webpack_require__(13);\nvar createDesc = __webpack_require__(35);\nmodule.exports = __webpack_require__(5) ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n/***/ }),\n/* 5 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(30)(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n/***/ }),\n/* 6 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n/***/ }),\n/* 7 */\n/***/ (function(module, exports) {\n\nmodule.exports = {};\n\n\n/***/ }),\n/* 8 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n/***/ }),\n/* 9 */\n/***/ (function(module, exports) {\n\nvar toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n/***/ }),\n/* 10 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// optional / simple context binding\nvar aFunction = __webpack_require__(8);\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n/***/ }),\n/* 11 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar global = __webpack_require__(0);\nvar core = __webpack_require__(3);\nvar ctx = __webpack_require__(10);\nvar hide = __webpack_require__(4);\nvar has = __webpack_require__(12);\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n/***/ }),\n/* 12 */\n/***/ (function(module, exports) {\n\nvar hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n/***/ }),\n/* 13 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar anObject = __webpack_require__(2);\nvar IE8_DOM_DEFINE = __webpack_require__(70);\nvar toPrimitive = __webpack_require__(90);\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n/***/ }),\n/* 14 */\n/***/ (function(module, exports) {\n\nvar g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n/***/ }),\n/* 15 */\n/***/ (function(module, exports) {\n\n// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n/***/ }),\n/* 16 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar isObject = __webpack_require__(6);\nvar document = __webpack_require__(0).document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n/***/ }),\n/* 17 */\n/***/ (function(module, exports) {\n\nmodule.exports = true;\n\n\n/***/ }),\n/* 18 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(8);\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n/***/ }),\n/* 19 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar def = __webpack_require__(13).f;\nvar has = __webpack_require__(12);\nvar TAG = __webpack_require__(1)('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n/***/ }),\n/* 20 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar shared = __webpack_require__(36)('keys');\nvar uid = __webpack_require__(40);\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n/***/ }),\n/* 21 */\n/***/ (function(module, exports) {\n\n// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n/***/ }),\n/* 22 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(72);\nvar defined = __webpack_require__(15);\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n/***/ }),\n/* 23 */\n/***/ (function(module, exports) {\n\n//extend simple implementation\n\nmodule.exports = function (a, b, c, d, e, f) {\n  var objs = [b, c, d, e, f].filter(Boolean);\n  var target = a || {};\n  objs.forEach(function (source) {\n    for (var key in source) {\n      if (source.hasOwnProperty(key)) {\n        target[key] = source[key];\n      }\n    }\n  });\n  return target;\n};\n\n/***/ }),\n/* 24 */\n/***/ (function(module, exports) {\n\n//版本比较方法\nmodule.exports = {\n  eq: function(a, b) {\n    return a === b;\n  },\n  gt: function(a, b) {\n    var splitedA = a ? a.split('.') : [];\n    var splitedB = b ? b.split('.') : [];\n    [0,1,2].forEach(function(i){\n      splitedA[i] = splitedA[i] || 0;\n      splitedB[i] = splitedB[i] || 0;\n    });\n    if (+splitedA[0] !== +splitedB[0]) {\n      return +splitedA[0] > +splitedB[0];\n    } else {\n      if (+splitedA[1] !== +splitedB[1]) {\n        return +splitedA[1] > +splitedB[1];\n      } else {\n        return +splitedA[2] > +(splitedB[2] || 0);\n      }\n    }\n  },\n  lt: function(a, b) {\n    return !this.gte(a, b);\n  },\n  gte: function(a, b) {\n    return this.eq(a, b) || this.gt(a, b);\n  },\n  lte: function(a, b) {\n    return this.eq(a, b) || this.lt(a, b);\n  }\n};\n\n/***/ }),\n/* 25 */\n/***/ (function(module, exports) {\n\n// API set to implement\nmodule.exports = [\n    'config',\n\n    'isApiSupported',\n    'getApisVersion',\n    'getUA',\n    'Semver',\n    'checkAuthorization',\n\n    'getFingerprint',\n    'getUserInfo',\n    'getDeviceInfo',\n    'login',\n    'logout',\n    'sendSMS',\n    'getContactList',\n    'pickContact',\n\n    'getCity',\n    'getLocationCity',\n    'getLocation',\n    'getNetworkType',\n    'pickCity',\n\n    'share',\n    'configShare',\n\n    'openWebview',\n    'closeWebview',\n    'jumpWebview',\n\n    'setTitle',\n    'setImageTitle',\n    'setNavButtons',\n    'setNavigationBarHidden',\n    'setBackgroundColor',\n    'setBouncesEnabled',\n    'setStatusBarStyle',\n    'setPullDown',\n    'stopPullDown',\n    'setLLButton',\n    'setLRButton',\n    'setRRButton',\n    'setRLButton',\n    'setSearchBar',\n    'scanQRCode',\n    'showKeyboard',\n\n    'store',\n    'retrieve',\n\n    'alert',\n    'confirm',\n    'prompt',\n    'sendLog',\n\n    'chooseImage',\n    'previewImage',\n    'uploadImage',\n    'downloadImage',\n\n    'publish',\n    'subscribe',\n    'unsubscribe',\n\n    'setResult',\n    'getResult',\n\n    'shareImage',\n    'sendLog',\n    \n    'shareMiniProgram',\n    'addRequestSignature',\n    'stopLocating',\n    \n    'setStorage',\n    'getStorage',\n    'clearStorage',\n\n    'getAppInfo',\n    'getWifiInfo',\n    'getImageInfo',\n\n    'setupEvent',\n\n    'setTitleBar',\n    'resetTitleBar',\n    'setTitleBarAction',\n    'addTitleBarElement',\n    'removeTitleBarElement',\n    'replaceTitleBarElement',\n\n    'requestPermission',\n    'openPage',\n    'jumpPage',\n    'closePage',\n\n    'getServiceInfo',\n    'getPageState',\n    'setBrightness',\n    'getBrightness',\n    'encryptData',\n    'decryptData',\n    'uploadFile',\n    'setAppCookie',\n\n    'compressImage',\n    'downloadFile',\n    'syncLog',\n    'getVideoFrame',\n    'chooseVideo',\n    'playVideo',\n    'getNetworkTime',\n  ];\n\n\n/***/ }),\n/* 26 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/*\n * @Author: sunhui04\n * @Date: 2021-09-23 14:11:01\n */\nvar KNB = __webpack_require__(50);\n\nvar env = __webpack_require__(27);\nif (env.isDPApp) {\n  __webpack_require__.e/* require.ensure */(1).then((function(require) {\n    KNB.load(__webpack_require__(116));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if (env.isMTNB) {\n  __webpack_require__.e/* require.ensure */(5).then((function(require) {\n    KNB.load(__webpack_require__(119));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if (env.isHBNB) {\n  __webpack_require__.e/* require.ensure */(0).then((function(require) {\n    KNB.load(__webpack_require__(118));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if ((env.isWX || env.isMiniProgramWebview) && typeof _KNB_IGNORE_WECHAT === 'undefined') {\n  __webpack_require__.e/* require.ensure */(4).then((function(require) {\n    KNB.load(__webpack_require__(121));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if (env.isTitans) {\n  __webpack_require__.e/* require.ensure */(3).then((function(require) {\n    KNB.load(__webpack_require__(120));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else if (env.isDPZeus) {\n  __webpack_require__.e/* require.ensure */(2).then((function(require) {\n    KNB.load(__webpack_require__(117));\n    KNB._ready();\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n} else {\n  KNB._ready();\n}\n\nmodule.exports = KNB;\n\n\n\n/***/ }),\n/* 27 */\n/***/ (function(module, exports, __webpack_require__) {\n\nfunction getENV() {\n  var semver = __webpack_require__(24); \n  // make sure the script not throwing error under nodejs.\n  var win  = typeof window !== 'undefined'    ? window              : {};\n  var href = typeof location !== 'undefined'  ? location.href       : '';\n  var ua   = typeof navigator !== 'undefined' ? navigator.userAgent : '';\n  var is_stupid_ios = /ios|iphone|ipad|ipod/i.test(ua); // iOS下UA非常不可靠\n  var titansXVersionParse = ua.match(/titans(no)?x\\/([\\w.]+)/i);\n  var titansXVersion = titansXVersionParse ? titansXVersionParse[2] : '0';\n\n  //优先加载自定义环境\n  if (!!win._KNB_CUSTOM_ENV) {\n    return {\n      isWX: !!win._KNB_WX,\n      isMTNB: !!win._KNB_MTNB,\n      isTitans: !!win._KNB_TITANS,\n      isHBNB: !!win._KNB_HBNB,\n      isDPApp: !!win._KNB_DPAPP\n    }\n  }\n\n  var regDP = win._KNB_REGDP || /dp\\/com\\.dianping\\.[\\w\\.]+\\/([\\d\\.]+)/i;\n  var regMT = win._KNB_REGMT || /moviepro|MTNB||MOMA/i;\n  var regHB = win._KNB_REGHB || /iHotel|HBNB/i;\n  var regWX = win._KNB_REGWX || /micromessenger/i;\n  var regTitans = win._KNB_REGTITANS || /TitansX/i;\n  var regDPZeus = win._KNB_DPZEUS || /merchant\\.mobile|dpcrm|mp\\.mobile/i;\n\n  var isWX     = regWX.test(ua);\n  var isDPApp  = regDP.test(ua);\n  var isMTNB   = regMT.test(ua) || /f=(iphone|ipad|ipod|android)/.test(href);\n  var isHBNB   = regHB.test(ua) && !win._MTNB;\n  var isDPZeus = regDPZeus.test(ua);\n  var isTitans = function() {\n    if (href.indexOf('knb_force_use_titans') > -1) return true;\n    // 限制 7.5 版本 HBNB 加载至 Titans\n    if (is_stupid_ios && semver.gt('11.0', titansXVersion)) return !!win._TitansX;\n    return regTitans.test(ua);\n  }();\n  var isMiniProgramWebview = win.__wxjs_environment === 'miniprogram';\n\n  var isNative = isDPApp || isHBNB || isTitans || regMT.test(ua);\n  // KNB.isNative 去掉小程序判断不知影响是否较大 ???\n  //TitansNoX和点评包名的优先级高于其他，修复点评下引入美团实现的bug，为了兼容点评小程序，所以 WX 优先级按理最高\n  if (/titansnox/i.test(ua) && isDPApp) {\n    isTitans = isHBNB = isWX = isMTNB = isDPZeus = false;\n  }\n  // order matters\n  if (isWX)     { isTitans = isHBNB = isDPApp = isMTNB = isDPZeus = false; }\n  if (isDPZeus) { isTitans = isWX   = isMTNB  = isHBNB = isDPApp  = false; }\n  if (isTitans) { isDPApp  = isWX   = isMTNB  = isHBNB = isDPZeus = false; }\n  if (isHBNB)   { isTitans = isWX   = isDPApp = isMTNB = isDPZeus = false; }\n  if (isMTNB)   { isTitans = isWX   = isDPApp = isHBNB = isDPZeus = false; }\n  if (isDPApp)  { isDPApp = isWX   = isMTNB  = isHBNB = isDPZeus = false; isTitans = true;}\n\n  return {\n    isWX: isWX,\n    isTitans: isTitans,\n    isHBNB: isHBNB,\n    isDPApp: isDPApp,\n    isMTNB: isMTNB,\n    isNative: isNative,\n    isDPZeus: isDPZeus,\n    isMiniProgramWebview: isMiniProgramWebview,\n  };\n}\n\nmodule.exports = getENV();\nmodule.exports.getENV = getENV;  // make it testable\n\n\n/***/ }),\n/* 28 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(9);\nvar TAG = __webpack_require__(1)('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n/***/ }),\n/* 29 */\n/***/ (function(module, exports) {\n\n// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n/***/ }),\n/* 30 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n/***/ }),\n/* 31 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar document = __webpack_require__(0).document;\nmodule.exports = document && document.documentElement;\n\n\n/***/ }),\n/* 32 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\nvar LIBRARY = __webpack_require__(17);\nvar $export = __webpack_require__(11);\nvar redefine = __webpack_require__(85);\nvar hide = __webpack_require__(4);\nvar Iterators = __webpack_require__(7);\nvar $iterCreate = __webpack_require__(75);\nvar setToStringTag = __webpack_require__(19);\nvar getPrototypeOf = __webpack_require__(81);\nvar ITERATOR = __webpack_require__(1)('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n/***/ }),\n/* 33 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n/***/ }),\n/* 34 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar anObject = __webpack_require__(2);\nvar isObject = __webpack_require__(6);\nvar newPromiseCapability = __webpack_require__(18);\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n/***/ }),\n/* 35 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n/***/ }),\n/* 36 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar core = __webpack_require__(3);\nvar global = __webpack_require__(0);\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(17) ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n/***/ }),\n/* 37 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(2);\nvar aFunction = __webpack_require__(8);\nvar SPECIES = __webpack_require__(1)('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n/***/ }),\n/* 38 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar ctx = __webpack_require__(10);\nvar invoke = __webpack_require__(71);\nvar html = __webpack_require__(31);\nvar cel = __webpack_require__(16);\nvar global = __webpack_require__(0);\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(9)(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n/***/ }),\n/* 39 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 7.1.15 ToLength\nvar toInteger = __webpack_require__(21);\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n/***/ }),\n/* 40 */\n/***/ (function(module, exports) {\n\nvar id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n/***/ }),\n/* 41 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * Check if `obj` is an object.\n *\n * @param {Object} obj\n * @return {Boolean}\n * @api private\n */\n\nfunction isObject(obj) {\n  return null !== obj && 'object' === typeof obj;\n}\n\nmodule.exports = isObject;\n\n\n/***/ }),\n/* 42 */\n/***/ (function(module, exports) {\n\n// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n/***/ }),\n/* 43 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\n/* styles */\n__webpack_require__(109)\n\nvar Component = __webpack_require__(107)(\n  /* script */\n  __webpack_require__(55),\n  /* template */\n  __webpack_require__(108),\n  /* scopeId */\n  \"data-v-6ab69d3e\",\n  /* cssModules */\n  null\n)\nComponent.options.__file = \"/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/src/index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key !== \"__esModule\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-6ab69d3e\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-6ab69d3e\", Component.options)\n  }\n})()}\n\nmodule.exports = Component.exports\n\n\n/***/ }),\n/* 44 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar QS = __webpack_require__(48);\nfunction getUAInfo() {\n  var lua = (navigator.userAgent + '').toLowerCase();\n  var VER_REG_STR = \"([0-9][0-9.a-zA-Z_]*)\";\n  var regexp = function (str) { return new RegExp(str, 'i'); };\n  var isstr  = function (str) { return typeof str === 'string'; };\n  var href = location.href;\n  var qs = QS.parse((location.search || '').slice(1));\n\n  var apps = {\n    dianping: [/com\\.dianping\\.ba.\\w+/, /com\\.dianping\\.\\w+/],\n    : ['group', /com..i-?\\w+/],\n    maoyanpro: ['moviepro', 'moviepro/android'],\n    maoyan: ['movie'],\n    moma: ['moma'],\n    daxiang: ['xm'],\n\n    wechat: ['micromessenger'],\n    qq: ['qq'],\n\n    unknown: ['never_match_anything'],\n  };\n  var appName = function () {\n     var names = Object.keys(apps);\n     for (var i = 0; i < names.length; i++) {\n       var matchers = apps[names[i]];\n       for (var j = 0; j < matchers.length; j++) {\n         if (isstr(matchers[j]) ? regexp('\\\\W' + matchers[j] + '\\\\W').test(lua) : matchers[j].test(lua)) return names[i]; \n       }\n     }\n     return \"unknown\";\n  }();\n  var appId = function() {\n    var matches = lua.match(/app\\/([0-9a-z]{5})/i);\n    return matches ? matches[1] : '';\n  }();\n  var appVersion = function () {\n    var matchers = apps[appName];\n    for (var i = 0; i < matchers.length; i++) {\n      var mstring = isstr(matchers[i]) ? matchers[i] : matchers[i].source;\n      var m = lua.match(regexp(mstring + ' ' + VER_REG_STR)) || lua.match(regexp(mstring + '/' + VER_REG_STR));\n      if (m) return m[1];\n    }\n    return \"0\";\n  }();\n  var osName = function () {\n    if (/android/.test(lua)) return 'android';\n    if (/ios|iphone|ipod|ipad/.test(lua)) return 'ios';\n    if (/macintosh/.test(lua)) return 'mac';\n    if (/windows/.test(lua)) return 'windows';\n    return \"unknown\";\n  }();\n  var osVersion = function () {\n    var m;\n    // https://developer.chrome.com/multidevice/user-agent\n    // order matters!\n    if (osName === 'android') m  =  lua.match(regexp('android '+ VER_REG_STR)) || lua.match(regexp('android/'+ VER_REG_STR));\n    if (osName === 'ios') m = lua.match(regexp(VER_REG_STR +' like Mac OS X')) || lua.match(regexp('iOS/' + VER_REG_STR));\n\n    // 通常而言mac/window的版本不重要，无视之\n    return (m ? m[1] : '0').replace(/_/g, '.');\n  }();\n\n  // internal version info\n  // MATCHED INDEX:     1  2              3      4             5       6\n  // EXAMPLE:         KNB/1.1.0         Android/5.1     Group/7.3.1\n  var reg1 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" App/[0-9]+/[0-9][0-9.a-zA-Z_]* (\\\\w+)/\" + VER_REG_STR));\n  var reg2 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" App/[0-9]+/[0-9][0-9.a-zA-Z_]* ([a-z1-9A-Z_.-]+/[a-z1-9A-Z_.-]+)/\" + VER_REG_STR));\n  var reg3 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR));\n  var reg4 = regexp((\"(KNB)/\" + VER_REG_STR + \" (\\\\w+)/\" + VER_REG_STR + \" ([a-z1-9A-Z_.-]+/[a-z1-9A-Z_.-]+)/\" + VER_REG_STR));\n  var m   = lua.match(reg1) || lua.match(reg2) || lua.match(reg3) || lua.match(reg4);\n  var _knbVersion = m && m[2];\n\n  // Try KNB Generic Mode\n  if (appName === 'unknown' && m) {\n    appName    = m[5];\n    appVersion = m[6];\n  }\n\n  // God knowns who you are\n  if (appName === 'unknown') {\n    // waimai app\n    if (href.indexOf('wm_ctype=') > -1) appName = \"waimai\";\n    //  like app < 7.0\n    if (/iphone|ipod|ipad|android/.test(href)) {\n      if ((qs.utm_campaign || '').indexOf('Agroup') > -1) appName = '';\n      appVersion = qs.version_name;\n    }\n  }\n\n  var matchTitansVerison = lua.match(regexp((\"(TitansX|TitansNoX)/\" + VER_REG_STR)));\n  var titansxVersion = matchTitansVerison && matchTitansVerison[2];\n\n  return {\n    appName: appName,\n    appVersion: appVersion,\n    osName: osName,\n    osVersion: osVersion,\n\n    titansxVersion: titansxVersion,\n    _knbVersion: _knbVersion,\n    appId: appId,\n    lowerUseragent: lua\n  };\n}\n\nfunction getUA(ref) {\n  var success = ref.success;\n\n  console.warn('getUA 接口已停止维护，详情请联系 rencheng');\n  success && success(getUAInfo());\n}\n\n// The actual method\ngetUA.internal = getUAInfo;\n\nmodule.exports = getUA;\n\n\n/***/ }),\n/* 45 */\n/***/ (function(module, exports) {\n\nmodule.exports = (\"1.9.4\");\n\n/***/ }),\n/* 46 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(global, setImmediate) {\n\nvar PENDING = 'pending';\nvar SETTLED = 'settled';\nvar FULFILLED = 'fulfilled';\nvar REJECTED = 'rejected';\nvar NOOP = function () {};\nvar isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';\n\nvar asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;\nvar asyncQueue = [];\nvar asyncTimer;\n\nfunction asyncFlush() {\n\t// run promise callbacks\n\tfor (var i = 0; i < asyncQueue.length; i++) {\n\t\tasyncQueue[i][0](asyncQueue[i][1]);\n\t}\n\n\t// reset async asyncQueue\n\tasyncQueue = [];\n\tasyncTimer = false;\n}\n\nfunction asyncCall(callback, arg) {\n\tasyncQueue.push([callback, arg]);\n\n\tif (!asyncTimer) {\n\t\tasyncTimer = true;\n\t\tasyncSetTimer(asyncFlush, 0);\n\t}\n}\n\nfunction invokeResolver(resolver, promise) {\n\tfunction resolvePromise(value) {\n\t\tresolve(promise, value);\n\t}\n\n\tfunction rejectPromise(reason) {\n\t\treject(promise, reason);\n\t}\n\n\ttry {\n\t\tresolver(resolvePromise, rejectPromise);\n\t} catch (e) {\n\t\trejectPromise(e);\n\t}\n}\n\nfunction invokeCallback(subscriber) {\n\tvar owner = subscriber.owner;\n\tvar settled = owner._state;\n\tvar value = owner._data;\n\tvar callback = subscriber[settled];\n\tvar promise = subscriber.then;\n\n\tif (typeof callback === 'function') {\n\t\tsettled = FULFILLED;\n\t\ttry {\n\t\t\tvalue = callback(value);\n\t\t} catch (e) {\n\t\t\treject(promise, e);\n\t\t}\n\t}\n\n\tif (!handleThenable(promise, value)) {\n\t\tif (settled === FULFILLED) {\n\t\t\tresolve(promise, value);\n\t\t}\n\n\t\tif (settled === REJECTED) {\n\t\t\treject(promise, value);\n\t\t}\n\t}\n}\n\nfunction handleThenable(promise, value) {\n\tvar resolved;\n\n\ttry {\n\t\tif (promise === value) {\n\t\t\tthrow new TypeError('A promises callback cannot return that same promise.');\n\t\t}\n\n\t\tif (value && (typeof value === 'function' || typeof value === 'object')) {\n\t\t\t// then should be retrieved only once\n\t\t\tvar then = value.then;\n\n\t\t\tif (typeof then === 'function') {\n\t\t\t\tthen.call(value, function (val) {\n\t\t\t\t\tif (!resolved) {\n\t\t\t\t\t\tresolved = true;\n\n\t\t\t\t\t\tif (value === val) {\n\t\t\t\t\t\t\tfulfill(promise, val);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tresolve(promise, val);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, function (reason) {\n\t\t\t\t\tif (!resolved) {\n\t\t\t\t\t\tresolved = true;\n\n\t\t\t\t\t\treject(promise, reason);\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t} catch (e) {\n\t\tif (!resolved) {\n\t\t\treject(promise, e);\n\t\t}\n\n\t\treturn true;\n\t}\n\n\treturn false;\n}\n\nfunction resolve(promise, value) {\n\tif (promise === value || !handleThenable(promise, value)) {\n\t\tfulfill(promise, value);\n\t}\n}\n\nfunction fulfill(promise, value) {\n\tif (promise._state === PENDING) {\n\t\tpromise._state = SETTLED;\n\t\tpromise._data = value;\n\n\t\tasyncCall(publishFulfillment, promise);\n\t}\n}\n\nfunction reject(promise, reason) {\n\tif (promise._state === PENDING) {\n\t\tpromise._state = SETTLED;\n\t\tpromise._data = reason;\n\n\t\tasyncCall(publishRejection, promise);\n\t}\n}\n\nfunction publish(promise) {\n\tpromise._then = promise._then.forEach(invokeCallback);\n}\n\nfunction publishFulfillment(promise) {\n\tpromise._state = FULFILLED;\n\tpublish(promise);\n}\n\nfunction publishRejection(promise) {\n\tpromise._state = REJECTED;\n\tpublish(promise);\n\tif (!promise._handled && isNode) {\n\t\tglobal.process.emit('unhandledRejection', promise._data, promise);\n\t}\n}\n\nfunction notifyRejectionHandled(promise) {\n\tglobal.process.emit('rejectionHandled', promise);\n}\n\n/**\n * @class\n */\nfunction Promise(resolver) {\n\tif (typeof resolver !== 'function') {\n\t\tthrow new TypeError('Promise resolver ' + resolver + ' is not a function');\n\t}\n\n\tif (this instanceof Promise === false) {\n\t\tthrow new TypeError('Failed to construct \\'Promise\\': Please use the \\'new\\' operator, this object constructor cannot be called as a function.');\n\t}\n\n\tthis._then = [];\n\n\tinvokeResolver(resolver, this);\n}\n\nPromise.prototype = {\n\tconstructor: Promise,\n\n\t_state: PENDING,\n\t_then: null,\n\t_data: undefined,\n\t_handled: false,\n\n\tthen: function (onFulfillment, onRejection) {\n\t\tvar subscriber = {\n\t\t\towner: this,\n\t\t\tthen: new this.constructor(NOOP),\n\t\t\tfulfilled: onFulfillment,\n\t\t\trejected: onRejection\n\t\t};\n\n\t\tif ((onRejection || onFulfillment) && !this._handled) {\n\t\t\tthis._handled = true;\n\t\t\tif (this._state === REJECTED && isNode) {\n\t\t\t\tasyncCall(notifyRejectionHandled, this);\n\t\t\t}\n\t\t}\n\n\t\tif (this._state === FULFILLED || this._state === REJECTED) {\n\t\t\t// already resolved, call callback async\n\t\t\tasyncCall(invokeCallback, subscriber);\n\t\t} else {\n\t\t\t// subscribe\n\t\t\tthis._then.push(subscriber);\n\t\t}\n\n\t\treturn subscriber.then;\n\t},\n\n\tcatch: function (onRejection) {\n\t\treturn this.then(null, onRejection);\n\t}\n};\n\nPromise.all = function (promises) {\n\tif (!Array.isArray(promises)) {\n\t\tthrow new TypeError('You must pass an array to Promise.all().');\n\t}\n\n\treturn new Promise(function (resolve, reject) {\n\t\tvar results = [];\n\t\tvar remaining = 0;\n\n\t\tfunction resolver(index) {\n\t\t\tremaining++;\n\t\t\treturn function (value) {\n\t\t\t\tresults[index] = value;\n\t\t\t\tif (!--remaining) {\n\t\t\t\t\tresolve(results);\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\n\t\tfor (var i = 0, promise; i < promises.length; i++) {\n\t\t\tpromise = promises[i];\n\n\t\t\tif (promise && typeof promise.then === 'function') {\n\t\t\t\tpromise.then(resolver(i), reject);\n\t\t\t} else {\n\t\t\t\tresults[i] = promise;\n\t\t\t}\n\t\t}\n\n\t\tif (!remaining) {\n\t\t\tresolve(results);\n\t\t}\n\t});\n};\n\nPromise.race = function (promises) {\n\tif (!Array.isArray(promises)) {\n\t\tthrow new TypeError('You must pass an array to Promise.race().');\n\t}\n\n\treturn new Promise(function (resolve, reject) {\n\t\tfor (var i = 0, promise; i < promises.length; i++) {\n\t\t\tpromise = promises[i];\n\n\t\t\tif (promise && typeof promise.then === 'function') {\n\t\t\t\tpromise.then(resolve, reject);\n\t\t\t} else {\n\t\t\t\tresolve(promise);\n\t\t\t}\n\t\t}\n\t});\n};\n\nPromise.resolve = function (value) {\n\tif (value && typeof value === 'object' && value.constructor === Promise) {\n\t\treturn value;\n\t}\n\n\treturn new Promise(function (resolve) {\n\t\tresolve(value);\n\t});\n};\n\nPromise.reject = function (reason) {\n\treturn new Promise(function (resolve, reject) {\n\t\treject(reason);\n\t});\n};\n\nmodule.exports = Promise;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(114).setImmediate))\n\n/***/ }),\n/* 47 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar win = typeof window !== 'undefined' ? window : {};\nvar mixin = __webpack_require__(23);\nvar Promise = win.Promise || __webpack_require__(46);\nvar apis = __webpack_require__(25);\n\n// get an empty object from obj's type\nfunction empty(obj) {\n  return Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};\n}\n\nmodule.exports = function (KNB) {\n  if (KNB.getPromiseInstance) return;\n  KNB.getPromiseInstance = function () {\n    var KNBP = {};\n    apis.forEach(function (name) {\n      if (name === 'config') return;\n      KNBP[name] = function (config) {\n        return new Promise(function (resolve, reject) {\n          KNB[name](mixin(empty(config), config, { success: resolve, fail: reject }));\n        });\n      };\n    });\n    KNBP.use = function (name, config) {\n      return new Promise(function (resolve, reject) {\n        KNB.use(name, mixin(empty(config), config, { success: resolve, fail: reject }));\n      });\n    };\n    KNBP.all = function (args) { return Promise.all(args); };\n    return KNBP;\n  };\n}\n\n\n\n/***/ }),\n/* 48 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nexports.decode = exports.parse = __webpack_require__(111);\nexports.encode = exports.stringify = __webpack_require__(112);\n\n\n/***/ }),\n/* 49 */\n/***/ (function(module, exports) {\n\n/*\n * @Author: sunhui04\n * @Date: 2021-07-21 17:19:06\n */\nfunction canIUse(apiName) {\n    // APP（极简版等）支持的api由window.__MT_supportAPIS注入\n    // 不直接使用baseApis，避免大数组的循环\n    var webMatchNativeNames = [\n        {\n        name: 'closeWebview',\n        message: 'closeWindow'\n        },\n        {\n        name: 'getCity',\n        message: 'getCityInfo',\n        },\n        {\n        name: 'openPage',\n        message: 'openScheme',\n        },\n        {\n        name: 'jumpPage',\n        message: 'jumpToScheme',\n        },\n        {\n        name: 'closePage',\n        message: 'closeWindow',\n        },\n        {\n        name: 'uploadImage',\n        message: 'uploadPhoto',\n        }\n    ]\n\n    webMatchNativeNames.forEach(function(item) {\n        if(item.name === apiName){\n            apiName = item.message;\n            return;\n        }\n    })\n    if(window.__MT_supportAPIS \n        && Array.isArray(window.__MT_supportAPIS)\n        && (window.__MT_supportAPIS.indexOf(apiName) === -1)) {\n        return false;\n    } else {\n        return true;\n    }\n}\n\nmodule.exports = canIUse;\n\n/***/ }),\n/* 50 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/*\n * @Author: sunhui04\n * @Date: 2021-01-21 14:43:09\n */\nvar apis = __webpack_require__(25);\nvar mixin = __webpack_require__(23);\nvar version = __webpack_require__(45);\nvar getUA = __webpack_require__(44);\nvar promisify = __webpack_require__(47);\nvar semver = __webpack_require__(24);\nvar canIUse = __webpack_require__(49);\n\nvar noop = function () {};\nvar cacheFns = [];\n\nvar KNB = {\n  __version__: version,\n\n  NOTIMPLEMENTED: function(apiName, opts) {\n    var this$1 = this;\n\n    var fail = opts.fail || noop;\n    if (this._isReady) return fail({error: -1, msg: 'API [' + apiName + '] is not implemented'});\n    this.cache = this.cache || [];\n    this.cache.push(function () { return this$1[apiName](opts); });\n  },\n  load: function(child) {\n    var this$1 = this;\n\n    mixin(this, child);\n\n    // assign an _add method for child\n    // so child can dynamically add methods\n    child._add = function (name, fn) {\n      this$1[name] = fn;\n    };\n  },\n  _ready:function() {\n    this._isReady = true;\n    var tasks = this.cache || [];\n    function afterReady() {\n      (function doTasks(arr) {\n        if (!arr.length) return;\n        var task = arr.shift();\n        if (typeof task === 'function') task();\n        doTasks(arr);\n      })(tasks);\n\n      cacheFns.forEach(function (fn) { return fn(); });\n    }\n    // 说明具体环境脚本已经重写了ready方法\n    // 此时，需要等待具体环境ready\n    if (this.ready && !this.ready.isFromLoader) return this.ready(afterReady);\n    afterReady();\n  },\n  ready: function(cb) {\n    if (this._isReady) return cb();\n    if (typeof cb === 'function') cacheFns.push(cb);\n  },\n  use: function(api, opts) {\n    var this$1 = this;\n\n    this.cache = this.cache || [];\n    this.cache.push(function () { return this$1.use(api, opts); });\n  }\n};\nKNB.ready.isFromLoader = true;\napis.forEach(function(api) {\n  KNB[api] = function(opts) {\n    if ( opts === void 0 ) opts={};\n\n    KNB.NOTIMPLEMENTED(api, opts);\n  };\n});\nKNB.getUA = getUA; // override getUA\nKNB.env = __webpack_require__(27);\nKNB.uaInfo = getUA.internal;\nKNB.Semver = semver;\nKNB.canIUse = canIUse;\npromisify(KNB);\n\nmodule.exports = KNB;\n\n\n/***/ }),\n/* 51 */\n/***/ (function(module, exports) {\n\n// 容器 UA 行为文档: https://km./page/53371192\n\nmodule.exports = (function () {\n    var ua = navigator.userAgent.toLowerCase();\n    var host = location.host.toLowerCase();\n    var ret = {\n        pc: !/Android|Windows Phone|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent),\n        baiduMini: Boolean(window.swan && window.swan.webView),\n        iphone: ua.indexOf('iphone') !== -1,\n        android: ua.indexOf('android') !== -1,\n        weibo: ua.indexOf('weibo') !== -1,\n        qq: ua.indexOf('qq') !== -1,\n        qzone: ua.indexOf('qzone') !== -1,\n        lvxing: ua.indexOf('mttower') !== -1,\n        weixin: ua.indexOf('micromessenger') !== -1,\n        mmp: ua.indexOf('mmp') !== -1,\n        native: ua.indexOf('titans') !== -1,\n        dpMerchant: ua.indexOf('com.dianping.merchant.mobile') !== -1,\n        klMallNative: ua.indexOf('klmall') !== -1,\n        mhotel: ua.indexOf('mhotel') !== -1,\n        platform: (function () {\n            var platform = ''; // 默认美团\n            if (host.indexOf('ping') !== -1 || ua.indexOf('com.dianping') !== -1) {\n                platform = 'dianping';\n            }\n            if (host.indexOf('ecube') !== -1) { // 商家\n                platform = 'business';\n            }\n            if (host.indexOf('icube') !== -1) { // 内部员工\n                platform = 'staff';\n            }\n            if (host.indexOf('klmall') !== -1 || host.indexOf('mall.bb') !== -1) { // 快驴\n                platform = 'klMall';\n            }\n            return platform;\n        })()\n    };\n    ret. = ret.platform === '';\n    ret.dianping = ret.platform === 'dianping';\n    ret.business = ret.platform === 'business';\n    ret.maoyan = ua.indexOf('imovie') !== -1 || ua.indexOf('com.sankuai.movie') !== -1;\n    ret.staff = ret.platform === 'staff';\n    ret.klMall = ret.platform === 'klMall';\n    return ret;\n})();\n\n\n/***/ }),\n/* 52 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/**\n * Created by liruihao02 on 2019/06/18.\n * 兼容首页 Webview 场景下 KNB closeWebview 和 jumpWebview 行为\n */\nvar KNB = __webpack_require__(26);\nvar closeTime = null;\n\n/** boot id\n * 91 首页弹窗资源位\n * 92 首页飘啊飘\n * 10000 搜索结果页 by@hubaodong\n */\n\nmodule.exports = {\n    closeWebview: function(options) {\n        var href = location.href;\n        if ( href === void 0 ) href = '';\n        if (!options) options = {};\n        if ((href.indexOf('boot_id=91') > -1) || (href.indexOf('boot_id=92') > -1) || (href.indexOf('boot_id=10000') > -1)) {\n            if (!options.isCloseViewOnly) {\n              options.isCloseViewOnly = 1;\n            }\n        }\n        KNB.ready(function () {\n            KNB.closeWebview(options);\n        });\n    },\n    jumpWebview: function(options) {\n        var href = location.href;\n        if ( href === void 0 ) href = '';\n        if (!options) return;\n        if ((href.indexOf('boot_id=91') > -1) || (href.indexOf('boot_id=92') > -1) || (href.indexOf('boot_id=10000') > -1)) {\n            KNB.ready(function () {\n                KNB.openWebview(options);\n                if (closeTime) { clearTimeout(closeTime); }\n                closeTime = setTimeout(function() {\n                    KNB.publish({\n                        type: 'native',\n                        action: 'cubeCloseHomeWebview'\n                    });\n                }, 500);\n            });\n        } else {\n            KNB.ready(function () {\n                KNB.jumpWebview(options);\n            });\n        }\n    }\n}\n\n/***/ }),\n/* 53 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar ttJump = __webpack_require__(54);\nvar helper = {};\n\n// 保存跳转 URL 地址\nhelper.link = [];\n\nvar Agent = __webpack_require__(51);\nvar CloseJump = __webpack_require__(52);\nvar KNB = __webpack_require__(26);\n\nhelper.getCookie = function (name) {\n    var c = '; ' + document.cookie;\n    var p = c.split('; ' + name + '=');\n    var r = '';\n\n    if (p.length === 2) r = p.pop().split(';').shift();\n    return r;\n};\n\nhelper.setCookie = function (name, value, second, pathStr) {\n    var seconds = second || 0;\n    var path = !pathStr ? '/' : pathStr;\n    var expires = '';\n    if (seconds !== 0) {\n        var date = new Date();\n        date.setTime(date.getTime() + (seconds * 1000));\n        expires = '; expires=' + date.toGMTString();\n    }\n    document.cookie = name + '=' + escape(value) + expires + '; path=' + path;\n};\n\nhelper.getQuery = function (name) {\n    var url = window.location.href.split('?');\n    var rl = url.length;\n    var a;\n    var h;\n    var l;\n    var e;\n    var r = '';\n    if (rl > 1) {\n        for (var m = 1; m < rl; m++) {\n            h = url[m].split('#');\n            a = h[0].split('&');\n            l = a.length;\n            for (var i = 0; i < l; i++) {\n                e = a[i].split('=');\n                if (e[0] === name && e.length > 1)r = e[1];\n            }\n        }\n    }\n    return r;\n};\n\nhelper.guid = function () {\n    var s = function () {\n        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);\n    };\n    return s() + s() + '-' + s() + '-' + s() + '-' + s() + '-' + s() + s() + s();\n};\n\nhelper.getTimestamp = function () {\n    return new Date().getTime();\n};\n\nhelper.report = function (dom, e) {\n    var path = e.path || (e.composedPath && e.composedPath());\n    if (path) {\n        var child = null;\n        var current = false;\n        for (var i = 0; i < path.length; i++) {\n            var node = path[i];\n            if (dom === node) {\n                current = true;\n            }\n            if (node.attributes && node.attributes.hasOwnProperty('data-bid-click')) {\n                var bid = node.getAttribute('data-bid-click');\n                var uuid = node.getAttribute('data-uuid');\n\n                // 阻止父元素由于冒泡导致的事件上报，但如果本组件并未设置v-touch，则无法上报\n                if (!current) {\n                    return;\n                }\n\n                if (child) {\n                    window.Block.report.base(bid, { uuid: uuid });\n                } else {\n                    // 初始组件点击，需上报tag\n                    window.Block.report.click(bid, { uuid: uuid });\n                    child = true;\n                }\n            }\n        }\n    } else {\n        console.log('this browser not support path');\n    }\n};\n\nhelper._transQuery = function (url) {\n    if (!url) return url;\n    // 前后 $\n    var paramArr = url.match(/\\$\\{[a-zA-Z0-9_-]+\\}/g);\n    if (!paramArr || paramArr.length === 0) return url;\n\n    for (var i = 0; i < paramArr.length; i++) {\n        var param = paramArr[i];\n        var str = param.match(/\\$\\{([a-zA-Z0-9_-]+)\\}/);\n        if (str && str[1]) {\n            var val = helper.getQuery(str[1]);\n            url = url.replace(param, val);\n        }\n    }\n    return url;\n};\n\nhelper.getQueryObj = function (link) {\n    var url = link.split('?');\n    var rl = url.length;\n    var a;\n    var h;\n    var l;\n    var e;\n    var f = {};\n    if (rl > 1) {\n        for (var m = 1; m < rl; m++) {\n            h = url[m].split('#');\n            a = h[0].split('&');\n            l = a.length;\n            for (var i = 0; i < l; i++) {\n                e = a[i].split('=');\n                f[e[0]] = e.length > 1 ? e[1] : '';\n            }\n        }\n    }\n    return f;\n};\n\nhelper.transCubeLink = function (link) {\n    if (link.indexOf('https://i..com/awp/hfe/block/index.html') === 0) {\n        var params = helper.getQueryObj(link);\n\n        if (params.cube_i && params.cube_h) {\n            var path = link.split('?')[0];\n            path = path.replace('fe/block/index.html', 'fe/block/' + params.cube_h + '/' + params.cube_i + '/index.html');\n            var query = [];\n            for (var key in params) {\n                if (key !== 'cube_i' && key !== 'cube_h') {\n                    query.push(key + '=' + params[key]);\n                }\n            }\n            if (query.length > 0) {\n                path += '?' + query.join('&');\n            }\n            return path;\n        }\n    }\n    return link;\n};\n\n/*eslint complexity: 0 */\nhelper.linkJump = function (href, offset) {\n    // 为空阻止跳转\n    if (!href) {\n        return false;\n    }\n    // 相同地址不跳转\n    if (href === location.href) return false;\n\n    var real = String(href);\n    var h = (real).split('#');\n    var anchor = false;\n    var before = null;\n    var hash = h.length > 1;\n    // 调起事件\n    if (h.length > 2 && h[1] === '') {\n        var event = h[2].split(':');\n        var name = null;\n        var params = '';\n        var param = {};\n        var def = '';\n        var plen = 0;\n        if (event[0] !== '') {\n            name = event[0];\n            if (event.length > 1) {\n                params = event[1].split('&');\n                plen = params.length;\n                for (var i = 0; i < plen; i++) {\n                    var cur = params[i].split('=');\n                    if (cur.length <= 1) continue;\n                    if (cur[0] === 'default') {\n                        def = cur[1];\n                        break;\n                    }\n                    param[cur[0]] = cur[1];\n                }\n            }\n            return window.Block.trigger(name, def !== '' ? def : param);\n        }\n    }\n    // 调起事件新版\n    if (real !== '' && real[0] === '{') {\n        var obj = null;\n        try {\n            obj = JSON.parse(real);\n        } catch (e) {\n            //\n        }\n        if (obj !== null && obj.hasOwnProperty('event') && obj.hasOwnProperty('props') && typeof obj.event === 'string' && typeof obj.props === 'object') {\n            if (obj.hasOwnProperty('uuid')) obj.props.$uuid = obj.uuid;\n            return window.Block.trigger(obj.event, obj.props);\n        }\n    }\n\n    // 平台配置阶段 打印链接到屏幕\n    if (window.Block && window.Block.EDIT) {\n        if (hash) {\n            if (h[0] === location.href.split('#')[0] || href[0] === '#') {\n                anchor = true;\n            }\n        }\n        if (href.indexOf('//') === -1) {\n            return window.Block.trigger('infopop', href);\n        }\n        if (!href || !anchor) {\n            return window.Block.trigger('infopop', '跳转到 : ' + href);\n        }\n    }\n\n    // 冒泡情况，缓存跳转链接（子容器组件跳转中判断子组件是否有配置）\n    helper.link.push(href);\n\n    // 电话及邮件\n    if (real.substr(0, 3) === 'tel' || real.substr(0, 6) === 'mailto') {\n        location.href = real;\n        return true;\n    }\n\n    // 锚点跳转模式\n    var offsetMode = hash && real[0] === '#';\n    if (offsetMode) {\n        before = window.pageYOffset;\n        location.replace(real);\n        var after = window.pageYOffset;\n        if (after !== before && offset) {\n            window.scrollTo(0, after - offset);\n        }\n        return true;\n    }\n    // toast 提示经过上面的过滤非链接类型就认为 toast\n    if (href.indexOf('//') === -1) {\n        window.Block.trigger('infopop', href);\n        return true;\n    }\n    // 拼接 lch\n    var suffix = [];\n    var split = real.split('#')[0];\n    if (split.indexOf('lch') === -1) {\n        var source = helper.getQuery('traffic_source') || helper.getQuery('lch');\n        if (source) {\n            suffix.push('lch=' + encodeURIComponent(source));\n        }\n    }\n\n    // 拼接 cube_id\n    if (window.Block && window.Block.ID) {\n        suffix.push('cube_id=' + window.Block.ID);\n    }\n\n    // 透传 cube_extends\n    var cube_extends = helper.getQuery('cube_extends');\n    if (cube_extends) {\n        suffix.push('cube_extends=' + cube_extends);\n    }\n\n    // 透传 requestId，向日葵系统对接\n    var requestId = helper.getQuery('requestId');\n    if (requestId) {\n        suffix.push('requestId=' + requestId);\n    }\n\n    // Native 内 透传 cityId，若本身携带了 cityId 则不再透传\n    if (Agent.native && href.indexOf('cityId=') === -1) {\n        var cityId = helper.getQuery('cityId');\n        if (typeof cityId === 'string' && cityId !== '') {\n            suffix.push('cityId=' + cityId + '&city_id=' + cityId);\n        }\n    }\n\n    // 拼接最终参数 and 转换携带参数\n    // 拼接最终参数 and 转换携带参数\n    if (suffix.length > 0) {\n        suffix = suffix.join('&');\n        if (real.indexOf('?') === -1) {\n            suffix = '?' + suffix;\n        } else {\n            // 转换参数\n            real = helper._transQuery(real);\n            suffix = '&' + suffix;\n        }\n    }\n\n    // 锚点分割\n    var realHashPos = real.indexOf('#');\n    var realQueryPos = real.indexOf('?');\n    if (realHashPos !== -1) {\n        if (realHashPos > realQueryPos) real = real.replace('#', suffix + '#');\n    } else {\n        real += suffix;\n    }\n\n    var isReplace = typeof offset === 'boolean' && offset;\n\n    // 微信中转换跳转链接格式\n    if (Agent.weixin) {\n        real = helper.transCubeLink(real);\n    }\n    // 字节小程序\n    if (href.indexOf('tt://') === 0) {\n        ttJump(href);\n        return true;\n    }\n    // Native\n    if ((Agent.native && !Agent.dpMerchant) || (Agent.weixin && real.substr(0, 12) === 'knbwxmini://')) {\n        if (isReplace) {\n            CloseJump.jumpWebview({ url: real });\n        } else {\n            KNB.ready(function () {\n                // 小程序下没有 openPage https://sky./docs/knb/knb-doc/list/miniprogram.html#%E6%8E%A5%E5%85%A5%E6%96%B9%E5%BC%8F\n                if(KNB.isMiniProgramWebview){\n                    KNB.openWebview({url: real});\n                }else{\n                    KNB.openPage({ url: real });\n                }\n               \n            });\n        }\n    } else {\n        if (isReplace) {\n            location.replace(real);\n        } else {\n            location.href = real;\n        }\n    }\n\n    // 保存魔方扩展参数至 session storage\n    if (cube_extends && sessionStorage) {\n        try {\n            sessionStorage.setItem('cube_extends', cube_extends);\n        } catch (e) {\n            console.log(e);\n        }\n    }\n\n    return true;\n};\n\nmodule.exports = helper;\n\n\n/***/ }),\n/* 54 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nfunction insertScript() {\n    var scriptId = 'TT-JSSDK';\n    var source = 'https://s3.pstatp.com/toutiao/tmajssdk/jssdk-1.0.1.js';\n    return new Promise(function (resolve) {\n        var dom = document.getElementById(scriptId);\n        if (dom) {\n            resolve(true);\n        } else {\n            var body = document.getElementsByTagName('head')[0];\n            var script = document.createElement('script');\n            script.src = source;\n            script.type = 'text/javascript';\n            script.id = scriptId;\n            body.appendChild(script);\n            script.onload = function () {\n                resolve(true);\n            };\n        }\n    });\n}\nmodule.exports = function (href) {\n    var url = href.substr(5);\n    insertScript().then(function (done) {\n        if (done && navigator.userAgent.toLowerCase().includes('toutiaomicroapp')) {\n            window.tt.miniProgram.switchTab({\n                url: url,\n                success: function success(res) {\n                    console.log(res);\n                },\n                fail: function fail(res) {\n                    console.log('switchTab failed');\n                }\n            });\n            window.tt.miniProgram.navigateTo({\n                url: url,\n                success: function success(res) {\n                    console.log(res);\n                },\n                fail: function fail(res) {\n                    console.log('navigateTo failed');\n                }\n            });\n        } else {\n            window.Block.trigger('infopop', '请在头条系App中打开');\n        }\n    });\n};\n\n\n/***/ }),\n/* 55 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regenerator = __webpack_require__(63);\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(62);\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _helper = __webpack_require__(53);\n\nvar _helper2 = _interopRequireDefault(_helper);\n\nvar _mixins = __webpack_require__(59);\n\nvar _mixins2 = _interopRequireDefault(_mixins);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n    components: {},\n    mixins: _mixins2.default,\n    props: {\n        input: {\n            type: String,\n            default: ''\n        },\n        link: {\n            type: String,\n            default: ''\n        },\n        textarea: {\n            type: String,\n            default: ''\n        },\n        color: {\n            type: String,\n            default: ''\n        },\n        datetime: {\n            type: String,\n            default: ''\n        },\n        datetimerange: {\n            type: Array,\n            default: function _default() {\n                return [];\n            }\n        },\n        image: {\n            type: String,\n            default: ''\n        },\n        number: {\n            type: Number,\n            default: 0\n        },\n        _switch: {\n            type: Boolean,\n            default: false\n        },\n        singleselection: {\n            type: String,\n            default: ''\n        },\n        multipleselection: {\n            type: Array,\n            default: function _default() {\n                return [];\n            }\n        },\n        array: {\n            type: Array,\n            default: function _default() {\n                return [{\n                    title: '',\n                    image: ''\n                }];\n            }\n        },\n        object: {\n            type: Object,\n            default: function _default() {\n                return {\n                    title: '',\n                    image: ''\n                };\n            }\n        },\n        // 数据来源支持接口获取，接口定义文档：https://km./page/214603763\n        treeselect: {\n            type: Array,\n            default: function _default() {\n                return [];\n            }\n        }\n    },\n    created: function created() {\n        var _this = this;\n\n        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n            return _regenerator2.default.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 122)).then(function (c) {\n                                c.default();\n                            });\n\n                            __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 123)).then(function (c) {\n                                c.default();\n                            });\n                            // let info = await GetWXUserInfo(); 获取微信用户信息\n                            // 获取cookie\n                            // Helper.getCookie(name);\n                            // 设置 Cookie\n                            // Helper.setCookie(name, value, time, path)\n                            // 获取 Url 参数\n                            // Helper.getQuery(name);\n                            // 生成随机唯一 ID\n                            // Helper.guid();\n\n                        case 2:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, _this);\n        }))();\n    },\n    mounted: function mounted() {\n        // 绑定观察者，监测目标dom的露出，可用于曝光埋点\n        // parma1 监测目标dom\n        // parma2 要传入的回调函数\n        // this.getPostAPI()\n    },\n\n    methods: {\n        jump: function jump() {\n            var url = '';\n            // 链接跳转, 第二个参数为是否为replace方式跳转，默认为false\n            _helper2.default.linkJump(url, false);\n            // 另一种链接跳转形式\n            this.$call(url, false);\n            // 点击埋点上报\n            this.clickEventTracking();\n        },\n\n        // post 请求\n        getPostAPI: function getPostAPI() {\n            var url = '/books/update';\n            var params = {};\n            var options = { type: 'form' // 表单请求 添加option 参数，type类型为定值\n            };this.post(url, params, options).then(function (res) {\n                console.log(res);\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    },\n    computed: {\n        // 埋点上报的参数1 val 信息，可根据埋点需要添加修改\n        tracking: function tracking() {\n            return {\n                demo_title: '埋点信息',\n                demo_index: '埋点信息'\n            };\n        }\n    }\n};\n// 两种方式，另一种方式是引入'/block-core/location', 传入回调函数\n\n/***/ }),\n/* 56 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * 考虑到不同业务的差异性，获取 host 作为一个函数执行以满足差异性\n */\nmodule.exports = function () {\n    var baseURL = {\n        dev: '//test.i..com',\n        st: '//test.i..com',\n        test: '//mf.travel.test..com',\n        pro: '//cube..com',\n        mock: '//localhost:3000'\n    };\n    var env = window.Block && window.Block.ENV !== '' ? window.Block.ENV : 'pro';\n    return baseURL[env];\n};\n\n/***/ }),\n/* 57 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar host = __webpack_require__(56);\nvar path = __webpack_require__(110);\nmodule.exports = {\n    host: host,\n    babel: ['@ss/mtd-vue-mobile'],\n    guard: {\n        include: [path.resolve('src', 'lib'), path.resolve('src', 'mixins')],\n        // 代码混淆详细配置详见 https://github.com/javascript-obfuscator/javascript-obfuscator\n        options: {\n            rotateStringArray: true\n        }\n    }\n};\n\n/***/ }),\n/* 58 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.get = exports.post = undefined;\n\nvar _superagent = __webpack_require__(103);\n\nvar _superagent2 = _interopRequireDefault(_superagent);\n\nvar _config = __webpack_require__(57);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// ref https://visionmedia.github.io/superagent\nvar header = _config2.default.header,\n    host = _config2.default.host;\n\nvar currentHost = host();\n/**\n *\n * @param {string} url\n * @param {object} params\n */\nvar post = function post(url) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  return _superagent2.default.post('' + currentHost + url).withCredentials().send(params).then(function (res) {\n    return res.body;\n  });\n};\n// 混淆\n// javascript-obfuscator:disable\n/**\n *\n * @param {string} url\n * @param {object} params\n */\nvar get = function get(url) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  return _superagent2.default.get('' + currentHost + url).withCredentials().query(params).then(function (res) {\n    return res.body;\n  });\n};\n\nexports.post = post;\nexports.get = get;\n// javascript-obfuscator:disable\n\n/***/ }),\n/* 59 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = __webpack_require__(60);\n\nvar _request2 = _interopRequireDefault(_request);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar base = {\n    methods: {\n        toast: function toast(msg) {\n            window.Block.trigger('infopop', msg);\n        }\n    }\n};\n\nexports.default = [base, _request2.default];\n\n/***/ }),\n/* 60 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = __webpack_require__(58);\n\nexports.default = {\n    created: function created() {\n        this.post = _request.post;\n        this.get = _request.get;\n    }\n};\n\n/***/ }),\n/* 61 */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = { \"default\": __webpack_require__(65), __esModule: true };\n\n/***/ }),\n/* 62 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nexports.__esModule = true;\n\nvar _promise = __webpack_require__(61);\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (fn) {\n  return function () {\n    var gen = fn.apply(this, arguments);\n    return new _promise2.default(function (resolve, reject) {\n      function step(key, arg) {\n        try {\n          var info = gen[key](arg);\n          var value = info.value;\n        } catch (error) {\n          reject(error);\n          return;\n        }\n\n        if (info.done) {\n          resolve(value);\n        } else {\n          return _promise2.default.resolve(value).then(function (value) {\n            step(\"next\", value);\n          }, function (err) {\n            step(\"throw\", err);\n          });\n        }\n      }\n\n      return step(\"next\");\n    });\n  };\n};\n\n/***/ }),\n/* 63 */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = __webpack_require__(100);\n\n\n/***/ }),\n/* 64 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\r\n/**\r\n * Expose `Emitter`.\r\n */\r\n\r\nif (true) {\r\n  module.exports = Emitter;\r\n}\r\n\r\n/**\r\n * Initialize a new `Emitter`.\r\n *\r\n * @api public\r\n */\r\n\r\nfunction Emitter(obj) {\r\n  if (obj) return mixin(obj);\r\n};\r\n\r\n/**\r\n * Mixin the emitter properties.\r\n *\r\n * @param {Object} obj\r\n * @return {Object}\r\n * @api private\r\n */\r\n\r\nfunction mixin(obj) {\r\n  for (var key in Emitter.prototype) {\r\n    obj[key] = Emitter.prototype[key];\r\n  }\r\n  return obj;\r\n}\r\n\r\n/**\r\n * Listen on the given `event` with `fn`.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.on =\r\nEmitter.prototype.addEventListener = function(event, fn){\r\n  this._callbacks = this._callbacks || {};\r\n  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])\r\n    .push(fn);\r\n  return this;\r\n};\r\n\r\n/**\r\n * Adds an `event` listener that will be invoked a single\r\n * time then automatically removed.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.once = function(event, fn){\r\n  function on() {\r\n    this.off(event, on);\r\n    fn.apply(this, arguments);\r\n  }\r\n\r\n  on.fn = fn;\r\n  this.on(event, on);\r\n  return this;\r\n};\r\n\r\n/**\r\n * Remove the given callback for `event` or all\r\n * registered callbacks.\r\n *\r\n * @param {String} event\r\n * @param {Function} fn\r\n * @return {Emitter}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.off =\r\nEmitter.prototype.removeListener =\r\nEmitter.prototype.removeAllListeners =\r\nEmitter.prototype.removeEventListener = function(event, fn){\r\n  this._callbacks = this._callbacks || {};\r\n\r\n  // all\r\n  if (0 == arguments.length) {\r\n    this._callbacks = {};\r\n    return this;\r\n  }\r\n\r\n  // specific event\r\n  var callbacks = this._callbacks['$' + event];\r\n  if (!callbacks) return this;\r\n\r\n  // remove all handlers\r\n  if (1 == arguments.length) {\r\n    delete this._callbacks['$' + event];\r\n    return this;\r\n  }\r\n\r\n  // remove specific handler\r\n  var cb;\r\n  for (var i = 0; i < callbacks.length; i++) {\r\n    cb = callbacks[i];\r\n    if (cb === fn || cb.fn === fn) {\r\n      callbacks.splice(i, 1);\r\n      break;\r\n    }\r\n  }\r\n\r\n  // Remove event specific arrays for event types that no\r\n  // one is subscribed for to avoid memory leak.\r\n  if (callbacks.length === 0) {\r\n    delete this._callbacks['$' + event];\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\n/**\r\n * Emit `event` with the given args.\r\n *\r\n * @param {String} event\r\n * @param {Mixed} ...\r\n * @return {Emitter}\r\n */\r\n\r\nEmitter.prototype.emit = function(event){\r\n  this._callbacks = this._callbacks || {};\r\n\r\n  var args = new Array(arguments.length - 1)\r\n    , callbacks = this._callbacks['$' + event];\r\n\r\n  for (var i = 1; i < arguments.length; i++) {\r\n    args[i - 1] = arguments[i];\r\n  }\r\n\r\n  if (callbacks) {\r\n    callbacks = callbacks.slice(0);\r\n    for (var i = 0, len = callbacks.length; i < len; ++i) {\r\n      callbacks[i].apply(this, args);\r\n    }\r\n  }\r\n\r\n  return this;\r\n};\r\n\r\n/**\r\n * Return array of callbacks for `event`.\r\n *\r\n * @param {String} event\r\n * @return {Array}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.listeners = function(event){\r\n  this._callbacks = this._callbacks || {};\r\n  return this._callbacks['$' + event] || [];\r\n};\r\n\r\n/**\r\n * Check if this emitter has `event` handlers.\r\n *\r\n * @param {String} event\r\n * @return {Boolean}\r\n * @api public\r\n */\r\n\r\nEmitter.prototype.hasListeners = function(event){\r\n  return !! this.listeners(event).length;\r\n};\r\n\n\n/***/ }),\n/* 65 */\n/***/ (function(module, exports, __webpack_require__) {\n\n__webpack_require__(94);\n__webpack_require__(96);\n__webpack_require__(99);\n__webpack_require__(95);\n__webpack_require__(97);\n__webpack_require__(98);\nmodule.exports = __webpack_require__(3).Promise;\n\n\n/***/ }),\n/* 66 */\n/***/ (function(module, exports) {\n\nmodule.exports = function () { /* empty */ };\n\n\n/***/ }),\n/* 67 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n/***/ }),\n/* 68 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(22);\nvar toLength = __webpack_require__(39);\nvar toAbsoluteIndex = __webpack_require__(88);\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n/***/ }),\n/* 69 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar ctx = __webpack_require__(10);\nvar call = __webpack_require__(74);\nvar isArrayIter = __webpack_require__(73);\nvar anObject = __webpack_require__(2);\nvar toLength = __webpack_require__(39);\nvar getIterFn = __webpack_require__(92);\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n/***/ }),\n/* 70 */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = !__webpack_require__(5) && !__webpack_require__(30)(function () {\n  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n/***/ }),\n/* 71 */\n/***/ (function(module, exports) {\n\n// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n/***/ }),\n/* 72 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(9);\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n/***/ }),\n/* 73 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// check on default Array iterator\nvar Iterators = __webpack_require__(7);\nvar ITERATOR = __webpack_require__(1)('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n/***/ }),\n/* 74 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(2);\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n/***/ }),\n/* 75 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\nvar create = __webpack_require__(79);\nvar descriptor = __webpack_require__(35);\nvar setToStringTag = __webpack_require__(19);\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(4)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n/***/ }),\n/* 76 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar ITERATOR = __webpack_require__(1)('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n/***/ }),\n/* 77 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n/***/ }),\n/* 78 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar global = __webpack_require__(0);\nvar macrotask = __webpack_require__(38).set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(9)(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n/***/ }),\n/* 79 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(2);\nvar dPs = __webpack_require__(80);\nvar enumBugKeys = __webpack_require__(29);\nvar IE_PROTO = __webpack_require__(20)('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(16)('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(31).appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n/***/ }),\n/* 80 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar dP = __webpack_require__(13);\nvar anObject = __webpack_require__(2);\nvar getKeys = __webpack_require__(83);\n\nmodule.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n/***/ }),\n/* 81 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(12);\nvar toObject = __webpack_require__(89);\nvar IE_PROTO = __webpack_require__(20)('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n/***/ }),\n/* 82 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar has = __webpack_require__(12);\nvar toIObject = __webpack_require__(22);\nvar arrayIndexOf = __webpack_require__(68)(false);\nvar IE_PROTO = __webpack_require__(20)('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n/***/ }),\n/* 83 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(82);\nvar enumBugKeys = __webpack_require__(29);\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n/***/ }),\n/* 84 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar hide = __webpack_require__(4);\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n\n\n/***/ }),\n/* 85 */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = __webpack_require__(4);\n\n\n/***/ }),\n/* 86 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\nvar global = __webpack_require__(0);\nvar core = __webpack_require__(3);\nvar dP = __webpack_require__(13);\nvar DESCRIPTORS = __webpack_require__(5);\nvar SPECIES = __webpack_require__(1)('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n/***/ }),\n/* 87 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar toInteger = __webpack_require__(21);\nvar defined = __webpack_require__(15);\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n/***/ }),\n/* 88 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar toInteger = __webpack_require__(21);\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n/***/ }),\n/* 89 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(15);\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n/***/ }),\n/* 90 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(6);\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n/***/ }),\n/* 91 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar global = __webpack_require__(0);\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n/***/ }),\n/* 92 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar classof = __webpack_require__(28);\nvar ITERATOR = __webpack_require__(1)('iterator');\nvar Iterators = __webpack_require__(7);\nmodule.exports = __webpack_require__(3).getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n/***/ }),\n/* 93 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\nvar addToUnscopables = __webpack_require__(66);\nvar step = __webpack_require__(77);\nvar Iterators = __webpack_require__(7);\nvar toIObject = __webpack_require__(22);\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(32)(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n/***/ }),\n/* 94 */\n/***/ (function(module, exports) {\n\n\n\n/***/ }),\n/* 95 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\nvar LIBRARY = __webpack_require__(17);\nvar global = __webpack_require__(0);\nvar ctx = __webpack_require__(10);\nvar classof = __webpack_require__(28);\nvar $export = __webpack_require__(11);\nvar isObject = __webpack_require__(6);\nvar aFunction = __webpack_require__(8);\nvar anInstance = __webpack_require__(67);\nvar forOf = __webpack_require__(69);\nvar speciesConstructor = __webpack_require__(37);\nvar task = __webpack_require__(38).set;\nvar microtask = __webpack_require__(78)();\nvar newPromiseCapabilityModule = __webpack_require__(18);\nvar perform = __webpack_require__(33);\nvar userAgent = __webpack_require__(91);\nvar promiseResolve = __webpack_require__(34);\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(84)($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(19)($Promise, PROMISE);\n__webpack_require__(86)(PROMISE);\nWrapper = __webpack_require__(3)[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(76)(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n/***/ }),\n/* 96 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\nvar $at = __webpack_require__(87)(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(32)(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n/***/ }),\n/* 97 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(11);\nvar core = __webpack_require__(3);\nvar global = __webpack_require__(0);\nvar speciesConstructor = __webpack_require__(37);\nvar promiseResolve = __webpack_require__(34);\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n/***/ }),\n/* 98 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(11);\nvar newPromiseCapability = __webpack_require__(18);\nvar perform = __webpack_require__(33);\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n/***/ }),\n/* 99 */\n/***/ (function(module, exports, __webpack_require__) {\n\n__webpack_require__(93);\nvar global = __webpack_require__(0);\nvar hide = __webpack_require__(4);\nvar Iterators = __webpack_require__(7);\nvar TO_STRING_TAG = __webpack_require__(1)('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n/***/ }),\n/* 100 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() { return this })() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(101);\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n/***/ }),\n/* 101 */\n/***/ (function(module, exports) {\n\n/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() { return this })() || Function(\"return this\")()\n);\n\n\n/***/ }),\n/* 102 */\n/***/ (function(module, exports) {\n\nfunction Agent() {\n  this._defaults = [];\n}\n\n[\"use\", \"on\", \"once\", \"set\", \"query\", \"type\", \"accept\", \"auth\", \"withCredentials\", \"sortQuery\", \"retry\", \"ok\", \"redirects\",\n \"timeout\", \"buffer\", \"serialize\", \"parse\", \"ca\", \"key\", \"pfx\", \"cert\"].forEach(function(fn) {\n  /** Default setting for all requests from this agent */\n  Agent.prototype[fn] = function(/*varargs*/) {\n    this._defaults.push({fn:fn, arguments:arguments});\n    return this;\n  }\n});\n\nAgent.prototype._setDefaults = function(req) {\n    this._defaults.forEach(function(def) {\n      req[def.fn].apply(req, def.arguments);\n    });\n};\n\nmodule.exports = Agent;\n\n\n/***/ }),\n/* 103 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/**\n * Root reference for iframes.\n */\n\nvar root;\nif (typeof window !== 'undefined') { // Browser window\n  root = window;\n} else if (typeof self !== 'undefined') { // Web Worker\n  root = self;\n} else { // Other environments\n  console.warn(\"Using browser-only version of superagent in non-browser environment\");\n  root = this;\n}\n\nvar Emitter = __webpack_require__(64);\nvar RequestBase = __webpack_require__(104);\nvar isObject = __webpack_require__(41);\nvar ResponseBase = __webpack_require__(105);\nvar Agent = __webpack_require__(102);\n\n/**\n * Noop.\n */\n\nfunction noop(){};\n\n/**\n * Expose `request`.\n */\n\nvar request = exports = module.exports = function(method, url) {\n  // callback\n  if ('function' == typeof url) {\n    return new exports.Request('GET', method).end(url);\n  }\n\n  // url first\n  if (1 == arguments.length) {\n    return new exports.Request('GET', method);\n  }\n\n  return new exports.Request(method, url);\n}\n\nexports.Request = Request;\n\n/**\n * Determine XHR.\n */\n\nrequest.getXHR = function () {\n  if (root.XMLHttpRequest\n      && (!root.location || 'file:' != root.location.protocol\n          || !root.ActiveXObject)) {\n    return new XMLHttpRequest;\n  } else {\n    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}\n    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}\n    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}\n    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}\n  }\n  throw Error(\"Browser-only version of superagent could not find XHR\");\n};\n\n/**\n * Removes leading and trailing whitespace, added to support IE.\n *\n * @param {String} s\n * @return {String}\n * @api private\n */\n\nvar trim = ''.trim\n  ? function(s) { return s.trim(); }\n  : function(s) { return s.replace(/(^\\s*|\\s*$)/g, ''); };\n\n/**\n * Serialize the given `obj`.\n *\n * @param {Object} obj\n * @return {String}\n * @api private\n */\n\nfunction serialize(obj) {\n  if (!isObject(obj)) return obj;\n  var pairs = [];\n  for (var key in obj) {\n    pushEncodedKeyValuePair(pairs, key, obj[key]);\n  }\n  return pairs.join('&');\n}\n\n/**\n * Helps 'serialize' with serializing arrays.\n * Mutates the pairs array.\n *\n * @param {Array} pairs\n * @param {String} key\n * @param {Mixed} val\n */\n\nfunction pushEncodedKeyValuePair(pairs, key, val) {\n  if (val != null) {\n    if (Array.isArray(val)) {\n      val.forEach(function(v) {\n        pushEncodedKeyValuePair(pairs, key, v);\n      });\n    } else if (isObject(val)) {\n      for(var subkey in val) {\n        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);\n      }\n    } else {\n      pairs.push(encodeURIComponent(key)\n        + '=' + encodeURIComponent(val));\n    }\n  } else if (val === null) {\n    pairs.push(encodeURIComponent(key));\n  }\n}\n\n/**\n * Expose serialization method.\n */\n\nrequest.serializeObject = serialize;\n\n/**\n  * Parse the given x-www-form-urlencoded `str`.\n  *\n  * @param {String} str\n  * @return {Object}\n  * @api private\n  */\n\nfunction parseString(str) {\n  var obj = {};\n  var pairs = str.split('&');\n  var pair;\n  var pos;\n\n  for (var i = 0, len = pairs.length; i < len; ++i) {\n    pair = pairs[i];\n    pos = pair.indexOf('=');\n    if (pos == -1) {\n      obj[decodeURIComponent(pair)] = '';\n    } else {\n      obj[decodeURIComponent(pair.slice(0, pos))] =\n        decodeURIComponent(pair.slice(pos + 1));\n    }\n  }\n\n  return obj;\n}\n\n/**\n * Expose parser.\n */\n\nrequest.parseString = parseString;\n\n/**\n * Default MIME type map.\n *\n *     superagent.types.xml = 'application/xml';\n *\n */\n\nrequest.types = {\n  html: 'text/html',\n  json: 'application/json',\n  xml: 'text/xml',\n  urlencoded: 'application/x-www-form-urlencoded',\n  'form': 'application/x-www-form-urlencoded',\n  'form-data': 'application/x-www-form-urlencoded'\n};\n\n/**\n * Default serialization map.\n *\n *     superagent.serialize['application/xml'] = function(obj){\n *       return 'generated xml here';\n *     };\n *\n */\n\nrequest.serialize = {\n  'application/x-www-form-urlencoded': serialize,\n  'application/json': JSON.stringify\n};\n\n/**\n  * Default parsers.\n  *\n  *     superagent.parse['application/xml'] = function(str){\n  *       return { object parsed from str };\n  *     };\n  *\n  */\n\nrequest.parse = {\n  'application/x-www-form-urlencoded': parseString,\n  'application/json': JSON.parse\n};\n\n/**\n * Parse the given header `str` into\n * an object containing the mapped fields.\n *\n * @param {String} str\n * @return {Object}\n * @api private\n */\n\nfunction parseHeader(str) {\n  var lines = str.split(/\\r?\\n/);\n  var fields = {};\n  var index;\n  var line;\n  var field;\n  var val;\n\n  for (var i = 0, len = lines.length; i < len; ++i) {\n    line = lines[i];\n    index = line.indexOf(':');\n    if (index === -1) { // could be empty line, just skip it\n      continue;\n    }\n    field = line.slice(0, index).toLowerCase();\n    val = trim(line.slice(index + 1));\n    fields[field] = val;\n  }\n\n  return fields;\n}\n\n/**\n * Check if `mime` is json or has +json structured syntax suffix.\n *\n * @param {String} mime\n * @return {Boolean}\n * @api private\n */\n\nfunction isJSON(mime) {\n  // should match /json or +json\n  // but not /json-seq\n  return /[\\/+]json($|[^-\\w])/.test(mime);\n}\n\n/**\n * Initialize a new `Response` with the given `xhr`.\n *\n *  - set flags (.ok, .error, etc)\n *  - parse header\n *\n * Examples:\n *\n *  Aliasing `superagent` as `request` is nice:\n *\n *      request = superagent;\n *\n *  We can use the promise-like API, or pass callbacks:\n *\n *      request.get('/').end(function(res){});\n *      request.get('/', function(res){});\n *\n *  Sending data can be chained:\n *\n *      request\n *        .post('/user')\n *        .send({ name: 'tj' })\n *        .end(function(res){});\n *\n *  Or passed to `.send()`:\n *\n *      request\n *        .post('/user')\n *        .send({ name: 'tj' }, function(res){});\n *\n *  Or passed to `.post()`:\n *\n *      request\n *        .post('/user', { name: 'tj' })\n *        .end(function(res){});\n *\n * Or further reduced to a single call for simple cases:\n *\n *      request\n *        .post('/user', { name: 'tj' }, function(res){});\n *\n * @param {XMLHTTPRequest} xhr\n * @param {Object} options\n * @api private\n */\n\nfunction Response(req) {\n  this.req = req;\n  this.xhr = this.req.xhr;\n  // responseText is accessible only if responseType is '' or 'text' and on older browsers\n  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')\n     ? this.xhr.responseText\n     : null;\n  this.statusText = this.req.xhr.statusText;\n  var status = this.xhr.status;\n  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request\n  if (status === 1223) {\n    status = 204;\n  }\n  this._setStatusProperties(status);\n  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());\n  // getAllResponseHeaders sometimes falsely returns \"\" for CORS requests, but\n  // getResponseHeader still works. so we get content-type even if getting\n  // other headers fails.\n  this.header['content-type'] = this.xhr.getResponseHeader('content-type');\n  this._setHeaderProperties(this.header);\n\n  if (null === this.text && req._responseType) {\n    this.body = this.xhr.response;\n  } else {\n    this.body = this.req.method != 'HEAD'\n      ? this._parseBody(this.text ? this.text : this.xhr.response)\n      : null;\n  }\n}\n\nResponseBase(Response.prototype);\n\n/**\n * Parse the given body `str`.\n *\n * Used for auto-parsing of bodies. Parsers\n * are defined on the `superagent.parse` object.\n *\n * @param {String} str\n * @return {Mixed}\n * @api private\n */\n\nResponse.prototype._parseBody = function(str) {\n  var parse = request.parse[this.type];\n  if (this.req._parser) {\n    return this.req._parser(this, str);\n  }\n  if (!parse && isJSON(this.type)) {\n    parse = request.parse['application/json'];\n  }\n  return parse && str && (str.length || str instanceof Object)\n    ? parse(str)\n    : null;\n};\n\n/**\n * Return an `Error` representative of this response.\n *\n * @return {Error}\n * @api public\n */\n\nResponse.prototype.toError = function(){\n  var req = this.req;\n  var method = req.method;\n  var url = req.url;\n\n  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';\n  var err = new Error(msg);\n  err.status = this.status;\n  err.method = method;\n  err.url = url;\n\n  return err;\n};\n\n/**\n * Expose `Response`.\n */\n\nrequest.Response = Response;\n\n/**\n * Initialize a new `Request` with the given `method` and `url`.\n *\n * @param {String} method\n * @param {String} url\n * @api public\n */\n\nfunction Request(method, url) {\n  var self = this;\n  this._query = this._query || [];\n  this.method = method;\n  this.url = url;\n  this.header = {}; // preserves header name case\n  this._header = {}; // coerces header names to lowercase\n  this.on('end', function(){\n    var err = null;\n    var res = null;\n\n    try {\n      res = new Response(self);\n    } catch(e) {\n      err = new Error('Parser is unable to parse the response');\n      err.parse = true;\n      err.original = e;\n      // issue #675: return the raw response if the response parsing fails\n      if (self.xhr) {\n        // ie9 doesn't have 'response' property\n        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;\n        // issue #876: return the http status code if the response parsing fails\n        err.status = self.xhr.status ? self.xhr.status : null;\n        err.statusCode = err.status; // backwards-compat only\n      } else {\n        err.rawResponse = null;\n        err.status = null;\n      }\n\n      return self.callback(err);\n    }\n\n    self.emit('response', res);\n\n    var new_err;\n    try {\n      if (!self._isResponseOK(res)) {\n        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');\n      }\n    } catch(custom_err) {\n      new_err = custom_err; // ok() callback can throw\n    }\n\n    // #1000 don't catch errors from the callback to avoid double calling it\n    if (new_err) {\n      new_err.original = err;\n      new_err.response = res;\n      new_err.status = res.status;\n      self.callback(new_err, res);\n    } else {\n      self.callback(null, res);\n    }\n  });\n}\n\n/**\n * Mixin `Emitter` and `RequestBase`.\n */\n\nEmitter(Request.prototype);\nRequestBase(Request.prototype);\n\n/**\n * Set Content-Type to `type`, mapping values from `request.types`.\n *\n * Examples:\n *\n *      superagent.types.xml = 'application/xml';\n *\n *      request.post('/')\n *        .type('xml')\n *        .send(xmlstring)\n *        .end(callback);\n *\n *      request.post('/')\n *        .type('application/xml')\n *        .send(xmlstring)\n *        .end(callback);\n *\n * @param {String} type\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.type = function(type){\n  this.set('Content-Type', request.types[type] || type);\n  return this;\n};\n\n/**\n * Set Accept to `type`, mapping values from `request.types`.\n *\n * Examples:\n *\n *      superagent.types.json = 'application/json';\n *\n *      request.get('/agent')\n *        .accept('json')\n *        .end(callback);\n *\n *      request.get('/agent')\n *        .accept('application/json')\n *        .end(callback);\n *\n * @param {String} accept\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.accept = function(type){\n  this.set('Accept', request.types[type] || type);\n  return this;\n};\n\n/**\n * Set Authorization field value with `user` and `pass`.\n *\n * @param {String} user\n * @param {String} [pass] optional in case of using 'bearer' as type\n * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.auth = function(user, pass, options){\n  if (1 === arguments.length) pass = '';\n  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options\n    options = pass;\n    pass = '';\n  }\n  if (!options) {\n    options = {\n      type: 'function' === typeof btoa ? 'basic' : 'auto',\n    };\n  }\n\n  var encoder = function(string) {\n    if ('function' === typeof btoa) {\n      return btoa(string);\n    }\n    throw new Error('Cannot use basic auth, btoa is not a function');\n  };\n\n  return this._auth(user, pass, options, encoder);\n};\n\n/**\n * Add query-string `val`.\n *\n * Examples:\n *\n *   request.get('/shoes')\n *     .query('size=10')\n *     .query({ color: 'blue' })\n *\n * @param {Object|String} val\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.query = function(val){\n  if ('string' != typeof val) val = serialize(val);\n  if (val) this._query.push(val);\n  return this;\n};\n\n/**\n * Queue the given `file` as an attachment to the specified `field`,\n * with optional `options` (or filename).\n *\n * ``` js\n * request.post('/upload')\n *   .attach('content', new Blob(['<a id=\"a\"><b id=\"b\">hey!</b></a>'], { type: \"text/html\"}))\n *   .end(callback);\n * ```\n *\n * @param {String} field\n * @param {Blob|File} file\n * @param {String|Object} options\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.attach = function(field, file, options){\n  if (file) {\n    if (this._data) {\n      throw Error(\"superagent can't mix .send() and .attach()\");\n    }\n\n    this._getFormData().append(field, file, options || file.name);\n  }\n  return this;\n};\n\nRequest.prototype._getFormData = function(){\n  if (!this._formData) {\n    this._formData = new root.FormData();\n  }\n  return this._formData;\n};\n\n/**\n * Invoke the callback with `err` and `res`\n * and handle arity check.\n *\n * @param {Error} err\n * @param {Response} res\n * @api private\n */\n\nRequest.prototype.callback = function(err, res){\n  if (this._shouldRetry(err, res)) {\n    return this._retry();\n  }\n\n  var fn = this._callback;\n  this.clearTimeout();\n\n  if (err) {\n    if (this._maxRetries) err.retries = this._retries - 1;\n    this.emit('error', err);\n  }\n\n  fn(err, res);\n};\n\n/**\n * Invoke callback with x-domain error.\n *\n * @api private\n */\n\nRequest.prototype.crossDomainError = function(){\n  var err = new Error('Request has been terminated\\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');\n  err.crossDomain = true;\n\n  err.status = this.status;\n  err.method = this.method;\n  err.url = this.url;\n\n  this.callback(err);\n};\n\n// This only warns, because the request is still likely to work\nRequest.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){\n  console.warn(\"This is not supported in browser version of superagent\");\n  return this;\n};\n\n// This throws, because it can't send/receive data as expected\nRequest.prototype.pipe = Request.prototype.write = function(){\n  throw Error(\"Streaming is not supported in browser version of superagent\");\n};\n\n/**\n * Check if `obj` is a host object,\n * we don't want to serialize these :)\n *\n * @param {Object} obj\n * @return {Boolean}\n * @api private\n */\nRequest.prototype._isHost = function _isHost(obj) {\n  // Native objects stringify to [object File], [object Blob], [object FormData], etc.\n  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';\n}\n\n/**\n * Initiate request, invoking callback `fn(res)`\n * with an instanceof `Response`.\n *\n * @param {Function} fn\n * @return {Request} for chaining\n * @api public\n */\n\nRequest.prototype.end = function(fn){\n  if (this._endCalled) {\n    console.warn(\"Warning: .end() was called twice. This is not supported in superagent\");\n  }\n  this._endCalled = true;\n\n  // store callback\n  this._callback = fn || noop;\n\n  // querystring\n  this._finalizeQueryString();\n\n  return this._end();\n};\n\nRequest.prototype._end = function() {\n  var self = this;\n  var xhr = (this.xhr = request.getXHR());\n  var data = this._formData || this._data;\n\n  this._setTimeouts();\n\n  // state change\n  xhr.onreadystatechange = function(){\n    var readyState = xhr.readyState;\n    if (readyState >= 2 && self._responseTimeoutTimer) {\n      clearTimeout(self._responseTimeoutTimer);\n    }\n    if (4 != readyState) {\n      return;\n    }\n\n    // In IE9, reads to any property (e.g. status) off of an aborted XHR will\n    // result in the error \"Could not complete the operation due to error c00c023f\"\n    var status;\n    try { status = xhr.status } catch(e) { status = 0; }\n\n    if (!status) {\n      if (self.timedout || self._aborted) return;\n      return self.crossDomainError();\n    }\n    self.emit('end');\n  };\n\n  // progress\n  var handleProgress = function(direction, e) {\n    if (e.total > 0) {\n      e.percent = e.loaded / e.total * 100;\n    }\n    e.direction = direction;\n    self.emit('progress', e);\n  };\n  if (this.hasListeners('progress')) {\n    try {\n      xhr.onprogress = handleProgress.bind(null, 'download');\n      if (xhr.upload) {\n        xhr.upload.onprogress = handleProgress.bind(null, 'upload');\n      }\n    } catch(e) {\n      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.\n      // Reported here:\n      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context\n    }\n  }\n\n  // initiate request\n  try {\n    if (this.username && this.password) {\n      xhr.open(this.method, this.url, true, this.username, this.password);\n    } else {\n      xhr.open(this.method, this.url, true);\n    }\n  } catch (err) {\n    // see #1149\n    return this.callback(err);\n  }\n\n  // CORS\n  if (this._withCredentials) xhr.withCredentials = true;\n\n  // body\n  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {\n    // serialize stuff\n    var contentType = this._header['content-type'];\n    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];\n    if (!serialize && isJSON(contentType)) {\n      serialize = request.serialize['application/json'];\n    }\n    if (serialize) data = serialize(data);\n  }\n\n  // set header fields\n  for (var field in this.header) {\n    if (null == this.header[field]) continue;\n\n    if (this.header.hasOwnProperty(field))\n      xhr.setRequestHeader(field, this.header[field]);\n  }\n\n  if (this._responseType) {\n    xhr.responseType = this._responseType;\n  }\n\n  // send stuff\n  this.emit('request', this);\n\n  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)\n  // We need null here if data is undefined\n  xhr.send(typeof data !== 'undefined' ? data : null);\n  return this;\n};\n\nrequest.agent = function() {\n  return new Agent();\n};\n\n[\"GET\", \"POST\", \"OPTIONS\", \"PATCH\", \"PUT\", \"DELETE\"].forEach(function(method) {\n  Agent.prototype[method.toLowerCase()] = function(url, fn) {\n    var req = new request.Request(method, url);\n    this._setDefaults(req);\n    if (fn) {\n      req.end(fn);\n    }\n    return req;\n  };\n});\n\nAgent.prototype.del = Agent.prototype['delete'];\n\n/**\n * GET `url` with optional callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.get = function(url, data, fn) {\n  var req = request('GET', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.query(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * HEAD `url` with optional callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.head = function(url, data, fn) {\n  var req = request('HEAD', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.query(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * OPTIONS query to `url` with optional callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.options = function(url, data, fn) {\n  var req = request('OPTIONS', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * DELETE `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed} [data]\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nfunction del(url, data, fn) {\n  var req = request('DELETE', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n}\n\nrequest['del'] = del;\nrequest['delete'] = del;\n\n/**\n * PATCH `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed} [data]\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.patch = function(url, data, fn) {\n  var req = request('PATCH', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * POST `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed} [data]\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.post = function(url, data, fn) {\n  var req = request('POST', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n/**\n * PUT `url` with optional `data` and callback `fn(res)`.\n *\n * @param {String} url\n * @param {Mixed|Function} [data] or fn\n * @param {Function} [fn]\n * @return {Request}\n * @api public\n */\n\nrequest.put = function(url, data, fn) {\n  var req = request('PUT', url);\n  if ('function' == typeof data) (fn = data), (data = null);\n  if (data) req.send(data);\n  if (fn) req.end(fn);\n  return req;\n};\n\n\n/***/ }),\n/* 104 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * Module of mixed-in functions shared between node and client code\n */\nvar isObject = __webpack_require__(41);\n\n/**\n * Expose `RequestBase`.\n */\n\nmodule.exports = RequestBase;\n\n/**\n * Initialize a new `RequestBase`.\n *\n * @api public\n */\n\nfunction RequestBase(obj) {\n  if (obj) return mixin(obj);\n}\n\n/**\n * Mixin the prototype properties.\n *\n * @param {Object} obj\n * @return {Object}\n * @api private\n */\n\nfunction mixin(obj) {\n  for (var key in RequestBase.prototype) {\n    obj[key] = RequestBase.prototype[key];\n  }\n  return obj;\n}\n\n/**\n * Clear previous timeout.\n *\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.clearTimeout = function _clearTimeout(){\n  clearTimeout(this._timer);\n  clearTimeout(this._responseTimeoutTimer);\n  delete this._timer;\n  delete this._responseTimeoutTimer;\n  return this;\n};\n\n/**\n * Override default response body parser\n *\n * This function will be called to convert incoming data into request.body\n *\n * @param {Function}\n * @api public\n */\n\nRequestBase.prototype.parse = function parse(fn){\n  this._parser = fn;\n  return this;\n};\n\n/**\n * Set format of binary response body.\n * In browser valid formats are 'blob' and 'arraybuffer',\n * which return Blob and ArrayBuffer, respectively.\n *\n * In Node all values result in Buffer.\n *\n * Examples:\n *\n *      req.get('/')\n *        .responseType('blob')\n *        .end(callback);\n *\n * @param {String} val\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.responseType = function(val){\n  this._responseType = val;\n  return this;\n};\n\n/**\n * Override default request body serializer\n *\n * This function will be called to convert data set via .send or .attach into payload to send\n *\n * @param {Function}\n * @api public\n */\n\nRequestBase.prototype.serialize = function serialize(fn){\n  this._serializer = fn;\n  return this;\n};\n\n/**\n * Set timeouts.\n *\n * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.\n * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.\n *\n * Value of 0 or false means no timeout.\n *\n * @param {Number|Object} ms or {response, deadline}\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.timeout = function timeout(options){\n  if (!options || 'object' !== typeof options) {\n    this._timeout = options;\n    this._responseTimeout = 0;\n    return this;\n  }\n\n  for(var option in options) {\n    switch(option) {\n      case 'deadline':\n        this._timeout = options.deadline;\n        break;\n      case 'response':\n        this._responseTimeout = options.response;\n        break;\n      default:\n        console.warn(\"Unknown timeout option\", option);\n    }\n  }\n  return this;\n};\n\n/**\n * Set number of retry attempts on error.\n *\n * Failed requests will be retried 'count' times if timeout or err.code >= 500.\n *\n * @param {Number} count\n * @param {Function} [fn]\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.retry = function retry(count, fn){\n  // Default to 1 if no count passed or true\n  if (arguments.length === 0 || count === true) count = 1;\n  if (count <= 0) count = 0;\n  this._maxRetries = count;\n  this._retries = 0;\n  this._retryCallback = fn;\n  return this;\n};\n\nvar ERROR_CODES = [\n  'ECONNRESET',\n  'ETIMEDOUT',\n  'EADDRINFO',\n  'ESOCKETTIMEDOUT'\n];\n\n/**\n * Determine if a request should be retried.\n * (Borrowed from segmentio/superagent-retry)\n *\n * @param {Error} err\n * @param {Response} [res]\n * @returns {Boolean}\n */\nRequestBase.prototype._shouldRetry = function(err, res) {\n  if (!this._maxRetries || this._retries++ >= this._maxRetries) {\n    return false;\n  }\n  if (this._retryCallback) {\n    try {\n      var override = this._retryCallback(err, res);\n      if (override === true) return true;\n      if (override === false) return false;\n      // undefined falls back to defaults\n    } catch(e) {\n      console.error(e);\n    }\n  }\n  if (res && res.status && res.status >= 500 && res.status != 501) return true;\n  if (err) {\n    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;\n    // Superagent timeout\n    if (err.timeout && err.code == 'ECONNABORTED') return true;\n    if (err.crossDomain) return true;\n  }\n  return false;\n};\n\n/**\n * Retry request\n *\n * @return {Request} for chaining\n * @api private\n */\n\nRequestBase.prototype._retry = function() {\n\n  this.clearTimeout();\n\n  // node\n  if (this.req) {\n    this.req = null;\n    this.req = this.request();\n  }\n\n  this._aborted = false;\n  this.timedout = false;\n\n  return this._end();\n};\n\n/**\n * Promise support\n *\n * @param {Function} resolve\n * @param {Function} [reject]\n * @return {Request}\n */\n\nRequestBase.prototype.then = function then(resolve, reject) {\n  if (!this._fullfilledPromise) {\n    var self = this;\n    if (this._endCalled) {\n      console.warn(\"Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises\");\n    }\n    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {\n      self.end(function(err, res) {\n        if (err) innerReject(err);\n        else innerResolve(res);\n      });\n    });\n  }\n  return this._fullfilledPromise.then(resolve, reject);\n};\n\nRequestBase.prototype['catch'] = function(cb) {\n  return this.then(undefined, cb);\n};\n\n/**\n * Allow for extension\n */\n\nRequestBase.prototype.use = function use(fn) {\n  fn(this);\n  return this;\n};\n\nRequestBase.prototype.ok = function(cb) {\n  if ('function' !== typeof cb) throw Error(\"Callback required\");\n  this._okCallback = cb;\n  return this;\n};\n\nRequestBase.prototype._isResponseOK = function(res) {\n  if (!res) {\n    return false;\n  }\n\n  if (this._okCallback) {\n    return this._okCallback(res);\n  }\n\n  return res.status >= 200 && res.status < 300;\n};\n\n/**\n * Get request header `field`.\n * Case-insensitive.\n *\n * @param {String} field\n * @return {String}\n * @api public\n */\n\nRequestBase.prototype.get = function(field){\n  return this._header[field.toLowerCase()];\n};\n\n/**\n * Get case-insensitive header `field` value.\n * This is a deprecated internal API. Use `.get(field)` instead.\n *\n * (getHeader is no longer used internally by the superagent code base)\n *\n * @param {String} field\n * @return {String}\n * @api private\n * @deprecated\n */\n\nRequestBase.prototype.getHeader = RequestBase.prototype.get;\n\n/**\n * Set header `field` to `val`, or multiple fields with one object.\n * Case-insensitive.\n *\n * Examples:\n *\n *      req.get('/')\n *        .set('Accept', 'application/json')\n *        .set('X-API-Key', 'foobar')\n *        .end(callback);\n *\n *      req.get('/')\n *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })\n *        .end(callback);\n *\n * @param {String|Object} field\n * @param {String} val\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.set = function(field, val){\n  if (isObject(field)) {\n    for (var key in field) {\n      this.set(key, field[key]);\n    }\n    return this;\n  }\n  this._header[field.toLowerCase()] = val;\n  this.header[field] = val;\n  return this;\n};\n\n/**\n * Remove header `field`.\n * Case-insensitive.\n *\n * Example:\n *\n *      req.get('/')\n *        .unset('User-Agent')\n *        .end(callback);\n *\n * @param {String} field\n */\nRequestBase.prototype.unset = function(field){\n  delete this._header[field.toLowerCase()];\n  delete this.header[field];\n  return this;\n};\n\n/**\n * Write the field `name` and `val`, or multiple fields with one object\n * for \"multipart/form-data\" request bodies.\n *\n * ``` js\n * request.post('/upload')\n *   .field('foo', 'bar')\n *   .end(callback);\n *\n * request.post('/upload')\n *   .field({ foo: 'bar', baz: 'qux' })\n *   .end(callback);\n * ```\n *\n * @param {String|Object} name\n * @param {String|Blob|File|Buffer|fs.ReadStream} val\n * @return {Request} for chaining\n * @api public\n */\nRequestBase.prototype.field = function(name, val) {\n  // name should be either a string or an object.\n  if (null === name || undefined === name) {\n    throw new Error('.field(name, val) name can not be empty');\n  }\n\n  if (this._data) {\n    console.error(\".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()\");\n  }\n\n  if (isObject(name)) {\n    for (var key in name) {\n      this.field(key, name[key]);\n    }\n    return this;\n  }\n\n  if (Array.isArray(val)) {\n    for (var i in val) {\n      this.field(name, val[i]);\n    }\n    return this;\n  }\n\n  // val should be defined now\n  if (null === val || undefined === val) {\n    throw new Error('.field(name, val) val can not be empty');\n  }\n  if ('boolean' === typeof val) {\n    val = '' + val;\n  }\n  this._getFormData().append(name, val);\n  return this;\n};\n\n/**\n * Abort the request, and clear potential timeout.\n *\n * @return {Request}\n * @api public\n */\nRequestBase.prototype.abort = function(){\n  if (this._aborted) {\n    return this;\n  }\n  this._aborted = true;\n  this.xhr && this.xhr.abort(); // browser\n  this.req && this.req.abort(); // node\n  this.clearTimeout();\n  this.emit('abort');\n  return this;\n};\n\nRequestBase.prototype._auth = function(user, pass, options, base64Encoder) {\n  switch (options.type) {\n    case 'basic':\n      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));\n      break;\n\n    case 'auto':\n      this.username = user;\n      this.password = pass;\n      break;\n\n    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })\n      this.set('Authorization', 'Bearer ' + user);\n      break;\n  }\n  return this;\n};\n\n/**\n * Enable transmission of cookies with x-domain requests.\n *\n * Note that for this to work the origin must not be\n * using \"Access-Control-Allow-Origin\" with a wildcard,\n * and also must set \"Access-Control-Allow-Credentials\"\n * to \"true\".\n *\n * @api public\n */\n\nRequestBase.prototype.withCredentials = function(on) {\n  // This is browser-only functionality. Node side is no-op.\n  if (on == undefined) on = true;\n  this._withCredentials = on;\n  return this;\n};\n\n/**\n * Set the max redirects to `n`. Does noting in browser XHR implementation.\n *\n * @param {Number} n\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.redirects = function(n){\n  this._maxRedirects = n;\n  return this;\n};\n\n/**\n * Maximum size of buffered response body, in bytes. Counts uncompressed size.\n * Default 200MB.\n *\n * @param {Number} n\n * @return {Request} for chaining\n */\nRequestBase.prototype.maxResponseSize = function(n){\n  if ('number' !== typeof n) {\n    throw TypeError(\"Invalid argument\");\n  }\n  this._maxResponseSize = n;\n  return this;\n};\n\n/**\n * Convert to a plain javascript object (not JSON string) of scalar properties.\n * Note as this method is designed to return a useful non-this value,\n * it cannot be chained.\n *\n * @return {Object} describing method, url, and data of this request\n * @api public\n */\n\nRequestBase.prototype.toJSON = function() {\n  return {\n    method: this.method,\n    url: this.url,\n    data: this._data,\n    headers: this._header,\n  };\n};\n\n/**\n * Send `data` as the request body, defaulting the `.type()` to \"json\" when\n * an object is given.\n *\n * Examples:\n *\n *       // manual json\n *       request.post('/user')\n *         .type('json')\n *         .send('{\"name\":\"tj\"}')\n *         .end(callback)\n *\n *       // auto json\n *       request.post('/user')\n *         .send({ name: 'tj' })\n *         .end(callback)\n *\n *       // manual x-www-form-urlencoded\n *       request.post('/user')\n *         .type('form')\n *         .send('name=tj')\n *         .end(callback)\n *\n *       // auto x-www-form-urlencoded\n *       request.post('/user')\n *         .type('form')\n *         .send({ name: 'tj' })\n *         .end(callback)\n *\n *       // defaults to x-www-form-urlencoded\n *      request.post('/user')\n *        .send('name=tobi')\n *        .send('species=ferret')\n *        .end(callback)\n *\n * @param {String|Object} data\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.send = function(data){\n  var isObj = isObject(data);\n  var type = this._header['content-type'];\n\n  if (this._formData) {\n    console.error(\".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()\");\n  }\n\n  if (isObj && !this._data) {\n    if (Array.isArray(data)) {\n      this._data = [];\n    } else if (!this._isHost(data)) {\n      this._data = {};\n    }\n  } else if (data && this._data && this._isHost(this._data)) {\n    throw Error(\"Can't merge these send calls\");\n  }\n\n  // merge\n  if (isObj && isObject(this._data)) {\n    for (var key in data) {\n      this._data[key] = data[key];\n    }\n  } else if ('string' == typeof data) {\n    // default to x-www-form-urlencoded\n    if (!type) this.type('form');\n    type = this._header['content-type'];\n    if ('application/x-www-form-urlencoded' == type) {\n      this._data = this._data\n        ? this._data + '&' + data\n        : data;\n    } else {\n      this._data = (this._data || '') + data;\n    }\n  } else {\n    this._data = data;\n  }\n\n  if (!isObj || this._isHost(data)) {\n    return this;\n  }\n\n  // default to json\n  if (!type) this.type('json');\n  return this;\n};\n\n/**\n * Sort `querystring` by the sort function\n *\n *\n * Examples:\n *\n *       // default order\n *       request.get('/user')\n *         .query('name=Nick')\n *         .query('search=Manny')\n *         .sortQuery()\n *         .end(callback)\n *\n *       // customized sort function\n *       request.get('/user')\n *         .query('name=Nick')\n *         .query('search=Manny')\n *         .sortQuery(function(a, b){\n *           return a.length - b.length;\n *         })\n *         .end(callback)\n *\n *\n * @param {Function} sort\n * @return {Request} for chaining\n * @api public\n */\n\nRequestBase.prototype.sortQuery = function(sort) {\n  // _sort default to true but otherwise can be a function or boolean\n  this._sort = typeof sort === 'undefined' ? true : sort;\n  return this;\n};\n\n/**\n * Compose querystring to append to req.url\n *\n * @api private\n */\nRequestBase.prototype._finalizeQueryString = function(){\n  var query = this._query.join('&');\n  if (query) {\n    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;\n  }\n  this._query.length = 0; // Makes the call idempotent\n\n  if (this._sort) {\n    var index = this.url.indexOf('?');\n    if (index >= 0) {\n      var queryArr = this.url.substring(index + 1).split('&');\n      if ('function' === typeof this._sort) {\n        queryArr.sort(this._sort);\n      } else {\n        queryArr.sort();\n      }\n      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');\n    }\n  }\n};\n\n// For backwards compat only\nRequestBase.prototype._appendQueryString = function() {console.trace(\"Unsupported\");}\n\n/**\n * Invoke callback with timeout error.\n *\n * @api private\n */\n\nRequestBase.prototype._timeoutError = function(reason, timeout, errno){\n  if (this._aborted) {\n    return;\n  }\n  var err = new Error(reason + timeout + 'ms exceeded');\n  err.timeout = timeout;\n  err.code = 'ECONNABORTED';\n  err.errno = errno;\n  this.timedout = true;\n  this.abort();\n  this.callback(err);\n};\n\nRequestBase.prototype._setTimeouts = function() {\n  var self = this;\n\n  // deadline\n  if (this._timeout && !this._timer) {\n    this._timer = setTimeout(function(){\n      self._timeoutError('Timeout of ', self._timeout, 'ETIME');\n    }, this._timeout);\n  }\n  // response timeout\n  if (this._responseTimeout && !this._responseTimeoutTimer) {\n    this._responseTimeoutTimer = setTimeout(function(){\n      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');\n    }, this._responseTimeout);\n  }\n};\n\n\n/***/ }),\n/* 105 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * Module dependencies.\n */\n\nvar utils = __webpack_require__(106);\n\n/**\n * Expose `ResponseBase`.\n */\n\nmodule.exports = ResponseBase;\n\n/**\n * Initialize a new `ResponseBase`.\n *\n * @api public\n */\n\nfunction ResponseBase(obj) {\n  if (obj) return mixin(obj);\n}\n\n/**\n * Mixin the prototype properties.\n *\n * @param {Object} obj\n * @return {Object}\n * @api private\n */\n\nfunction mixin(obj) {\n  for (var key in ResponseBase.prototype) {\n    obj[key] = ResponseBase.prototype[key];\n  }\n  return obj;\n}\n\n/**\n * Get case-insensitive `field` value.\n *\n * @param {String} field\n * @return {String}\n * @api public\n */\n\nResponseBase.prototype.get = function(field) {\n  return this.header[field.toLowerCase()];\n};\n\n/**\n * Set header related properties:\n *\n *   - `.type` the content type without params\n *\n * A response of \"Content-Type: text/plain; charset=utf-8\"\n * will provide you with a `.type` of \"text/plain\".\n *\n * @param {Object} header\n * @api private\n */\n\nResponseBase.prototype._setHeaderProperties = function(header){\n    // TODO: moar!\n    // TODO: make this a util\n\n    // content-type\n    var ct = header['content-type'] || '';\n    this.type = utils.type(ct);\n\n    // params\n    var params = utils.params(ct);\n    for (var key in params) this[key] = params[key];\n\n    this.links = {};\n\n    // links\n    try {\n        if (header.link) {\n            this.links = utils.parseLinks(header.link);\n        }\n    } catch (err) {\n        // ignore\n    }\n};\n\n/**\n * Set flags such as `.ok` based on `status`.\n *\n * For example a 2xx response will give you a `.ok` of __true__\n * whereas 5xx will be __false__ and `.error` will be __true__. The\n * `.clientError` and `.serverError` are also available to be more\n * specific, and `.statusType` is the class of error ranging from 1..5\n * sometimes useful for mapping respond colors etc.\n *\n * \"sugar\" properties are also defined for common cases. Currently providing:\n *\n *   - .noContent\n *   - .badRequest\n *   - .unauthorized\n *   - .notAcceptable\n *   - .notFound\n *\n * @param {Number} status\n * @api private\n */\n\nResponseBase.prototype._setStatusProperties = function(status){\n    var type = status / 100 | 0;\n\n    // status / class\n    this.status = this.statusCode = status;\n    this.statusType = type;\n\n    // basics\n    this.info = 1 == type;\n    this.ok = 2 == type;\n    this.redirect = 3 == type;\n    this.clientError = 4 == type;\n    this.serverError = 5 == type;\n    this.error = (4 == type || 5 == type)\n        ? this.toError()\n        : false;\n\n    // sugar\n    this.created = 201 == status;\n    this.accepted = 202 == status;\n    this.noContent = 204 == status;\n    this.badRequest = 400 == status;\n    this.unauthorized = 401 == status;\n    this.notAcceptable = 406 == status;\n    this.forbidden = 403 == status;\n    this.notFound = 404 == status;\n    this.unprocessableEntity = 422 == status;\n};\n\n\n/***/ }),\n/* 106 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * Return the mime type for the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nexports.type = function(str){\n  return str.split(/ *; */).shift();\n};\n\n/**\n * Return header field parameters.\n *\n * @param {String} str\n * @return {Object}\n * @api private\n */\n\nexports.params = function(str){\n  return str.split(/ *; */).reduce(function(obj, str){\n    var parts = str.split(/ *= */);\n    var key = parts.shift();\n    var val = parts.shift();\n\n    if (key && val) obj[key] = val;\n    return obj;\n  }, {});\n};\n\n/**\n * Parse Link header fields.\n *\n * @param {String} str\n * @return {Object}\n * @api private\n */\n\nexports.parseLinks = function(str){\n  return str.split(/ *, */).reduce(function(obj, str){\n    var parts = str.split(/ *; */);\n    var url = parts[0].slice(1, -1);\n    var rel = parts[1].split(/ *= */)[1].slice(1, -1);\n    obj[rel] = url;\n    return obj;\n  }, {});\n};\n\n/**\n * Strip content related fields from `header`.\n *\n * @param {Object} header\n * @return {Object} header\n * @api private\n */\n\nexports.cleanHeader = function(header, changesOrigin){\n  delete header['content-type'];\n  delete header['content-length'];\n  delete header['transfer-encoding'];\n  delete header['host'];\n  // secuirty\n  if (changesOrigin) {\n    delete header['authorization'];\n    delete header['cookie'];\n  }\n  return header;\n};\n\n\n/***/ }),\n/* 107 */\n/***/ (function(module, exports) {\n\n// this module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle\n\nmodule.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  scopeId,\n  cssModules\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  // inject cssModules\n  if (cssModules) {\n    var computed = Object.create(options.computed || null)\n    Object.keys(cssModules).forEach(function (key) {\n      var module = cssModules[key]\n      computed[key] = function () { return module }\n    })\n    options.computed = computed\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n/***/ }),\n/* 108 */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"component-wrap\"\n  }, [_c('div', {\n    staticClass: \"develop-from-here\"\n  }, [_c('h3', [_vm._v(\"好好学习:\")]), _vm._v(\" \"), _vm._m(0), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.input)\n    }\n  }), _vm._v(\" \"), _vm._m(1), _vm._v(\" \"), _c('span', [_c('a', {\n    attrs: {\n      \"href\": _vm.link\n    }\n  }, [_vm._v(\"点击跳转到：https://i..com/\")])]), _vm._v(\" \"), _vm._m(2), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.textarea)\n    }\n  }), _vm._v(\" \"), _vm._m(3), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.datetime)\n    }\n  }), _vm._v(\" \"), _vm._m(4), _vm._v(\" \"), _c('h5', _vm._l((_vm.datetimerange), function(i, k) {\n    return _c('span', {\n      key: i + '1'\n    }, [_c('span', {\n      domProps: {\n        \"textContent\": _vm._s(k == 1 ? ' 至 ' : '')\n      }\n    }), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i)\n      }\n    })])\n  })), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"颜色：\")]), _vm._v(\" \"), _c('span', {\n    style: ({\n      color: _vm.color\n    })\n  }, [_vm._v(\"颜色\")])]), _vm._v(\" \"), _vm._m(5), _vm._v(\" \"), _c('img', {\n    directives: [{\n      name: \"touch\",\n      rawName: \"v-touch:tap\",\n      value: (_vm.jump),\n      expression: \"jump\",\n      arg: \"tap\"\n    }],\n    attrs: {\n      \"src\": _vm.image\n    }\n  }), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"数字：\")]), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.number)\n    }\n  })]), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"开关：\")]), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm._switch ? '开' : '关')\n    }\n  })]), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"单选：\")]), _vm._v(\" \"), _c('span', {\n    domProps: {\n      \"textContent\": _vm._s(_vm.singleselection)\n    }\n  })]), _vm._v(\" \"), _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"多选：\")]), _vm._v(\" \"), _vm._l((_vm.multipleselection), function(i) {\n    return _c('span', {\n      key: i + '2',\n      domProps: {\n        \"textContent\": _vm._s(i + ',')\n      }\n    })\n  })], 2), _vm._v(\" \"), _vm._m(6), _vm._v(\" \"), _vm._l((_vm.array), function(i) {\n    return _c('h5', {\n      key: i + '3'\n    }, [_c('span', {\n      staticClass: \"highlight\"\n    }, [_vm._v(\"null：\")]), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i.title + '-->')\n      }\n    }), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i.image)\n      }\n    })])\n  }), _vm._v(\" \"), _c('h5', {\n    ref: \"demo\"\n  }, [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"对象：\")])]), _vm._v(\" \"), _vm._l((_vm.object), function(i, k) {\n    return _c('h5', {\n      key: i + '4'\n    }, [_c('span', {\n      staticClass: \"highlight\"\n    }, [_vm._v(\"Key：\")]), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(k + ' ')\n      }\n    }), _vm._v(\" \"), _c('span', {\n      staticClass: \"highlight\"\n    }, [_vm._v(\"Value：\")]), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i)\n      }\n    })])\n  }), _vm._v(\" \"), _vm._m(7), _vm._v(\" \"), _vm._l((_vm.treeselect), function(i) {\n    return _c('h5', {\n      key: i + '5'\n    }, [_c('span', {\n      domProps: {\n        \"textContent\": _vm._s(i)\n      }\n    })])\n  })], 2)])\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"文本：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"固定链接：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"文本框：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"日期时间：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"时间范围：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"图片：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"数组：\")])])\n},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('h5', [_c('span', {\n    staticClass: \"highlight\"\n  }, [_vm._v(\"树形结构：\")])])\n}]}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-6ab69d3e\", module.exports)\n  }\n}\n\n/***/ }),\n/* 109 */\n/***/ (function(module, exports) {\n\n// removed by extract-text-webpack-plugin\n\n/***/ }),\n/* 110 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,\n// backported and transplited with Babel, with backwards-compat fixes\n\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function() {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = (i >= 0) ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function(path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function(p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function(path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function() {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function(p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n\n// path.relative(from, to)\n// posix version\nexports.relative = function(from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  if (path.length === 0) return '.';\n  var code = path.charCodeAt(0);\n  var hasRoot = code === 47 /*/*/;\n  var end = -1;\n  var matchedSlash = true;\n  for (var i = path.length - 1; i >= 1; --i) {\n    code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        if (!matchedSlash) {\n          end = i;\n          break;\n        }\n      } else {\n      // We saw the first non-path separator\n      matchedSlash = false;\n    }\n  }\n\n  if (end === -1) return hasRoot ? '/' : '.';\n  if (hasRoot && end === 1) {\n    // return '//';\n    // Backwards-compat fix:\n    return '/';\n  }\n  return path.slice(0, end);\n};\n\nfunction basename(path) {\n  if (typeof path !== 'string') path = path + '';\n\n  var start = 0;\n  var end = -1;\n  var matchedSlash = true;\n  var i;\n\n  for (i = path.length - 1; i >= 0; --i) {\n    if (path.charCodeAt(i) === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          start = i + 1;\n          break;\n        }\n      } else if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // path component\n      matchedSlash = false;\n      end = i + 1;\n    }\n  }\n\n  if (end === -1) return '';\n  return path.slice(start, end);\n}\n\n// Uses a mixed approach for backwards-compatibility, as ext behavior changed\n// in new Node.js versions, so only basename() above is backported here\nexports.basename = function (path, ext) {\n  var f = basename(path);\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\nexports.extname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  var startDot = -1;\n  var startPart = 0;\n  var end = -1;\n  var matchedSlash = true;\n  // Track the state of characters (if any) we see before our first dot and\n  // after any path separator we find\n  var preDotState = 0;\n  for (var i = path.length - 1; i >= 0; --i) {\n    var code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          startPart = i + 1;\n          break;\n        }\n        continue;\n      }\n    if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // extension\n      matchedSlash = false;\n      end = i + 1;\n    }\n    if (code === 46 /*.*/) {\n        // If this is our first dot, mark it as the start of our extension\n        if (startDot === -1)\n          startDot = i;\n        else if (preDotState !== 1)\n          preDotState = 1;\n    } else if (startDot !== -1) {\n      // We saw a non-dot and non-path separator before our dot, so we should\n      // have a good chance at having a non-empty extension\n      preDotState = -1;\n    }\n  }\n\n  if (startDot === -1 || end === -1 ||\n      // We saw a non-dot character immediately before the dot\n      preDotState === 0 ||\n      // The (right-most) trimmed path component is exactly '..'\n      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n    return '';\n  }\n  return path.slice(startDot, end);\n};\n\nfunction filter (xs, f) {\n    if (xs.filter) return xs.filter(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        if (f(xs[i], i, xs)) res.push(xs[i]);\n    }\n    return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b'\n    ? function (str, start, len) { return str.substr(start, len) }\n    : function (str, start, len) {\n        if (start < 0) start = str.length + start;\n        return str.substr(start, len);\n    }\n;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))\n\n/***/ }),\n/* 111 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\n// If obj.hasOwnProperty has been overridden, then calling\n// obj.hasOwnProperty(prop) will break.\n// See: https://github.com/joyent/node/issues/1707\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nmodule.exports = function(qs, sep, eq, options) {\n  sep = sep || '&';\n  eq = eq || '=';\n  var obj = {};\n\n  if (typeof qs !== 'string' || qs.length === 0) {\n    return obj;\n  }\n\n  var regexp = /\\+/g;\n  qs = qs.split(sep);\n\n  var maxKeys = 1000;\n  if (options && typeof options.maxKeys === 'number') {\n    maxKeys = options.maxKeys;\n  }\n\n  var len = qs.length;\n  // maxKeys <= 0 means that we should not limit keys count\n  if (maxKeys > 0 && len > maxKeys) {\n    len = maxKeys;\n  }\n\n  for (var i = 0; i < len; ++i) {\n    var x = qs[i].replace(regexp, '%20'),\n        idx = x.indexOf(eq),\n        kstr, vstr, k, v;\n\n    if (idx >= 0) {\n      kstr = x.substr(0, idx);\n      vstr = x.substr(idx + 1);\n    } else {\n      kstr = x;\n      vstr = '';\n    }\n\n    k = decodeURIComponent(kstr);\n    v = decodeURIComponent(vstr);\n\n    if (!hasOwnProperty(obj, k)) {\n      obj[k] = v;\n    } else if (isArray(obj[k])) {\n      obj[k].push(v);\n    } else {\n      obj[k] = [obj[k], v];\n    }\n  }\n\n  return obj;\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\n\n/***/ }),\n/* 112 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar stringifyPrimitive = function(v) {\n  switch (typeof v) {\n    case 'string':\n      return v;\n\n    case 'boolean':\n      return v ? 'true' : 'false';\n\n    case 'number':\n      return isFinite(v) ? v : '';\n\n    default:\n      return '';\n  }\n};\n\nmodule.exports = function(obj, sep, eq, name) {\n  sep = sep || '&';\n  eq = eq || '=';\n  if (obj === null) {\n    obj = undefined;\n  }\n\n  if (typeof obj === 'object') {\n    return map(objectKeys(obj), function(k) {\n      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;\n      if (isArray(obj[k])) {\n        return map(obj[k], function(v) {\n          return ks + encodeURIComponent(stringifyPrimitive(v));\n        }).join(sep);\n      } else {\n        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));\n      }\n    }).join(sep);\n\n  }\n\n  if (!name) return '';\n  return encodeURIComponent(stringifyPrimitive(name)) + eq +\n         encodeURIComponent(stringifyPrimitive(obj));\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\nfunction map (xs, f) {\n  if (xs.map) return xs.map(f);\n  var res = [];\n  for (var i = 0; i < xs.length; i++) {\n    res.push(f(xs[i], i));\n  }\n  return res;\n}\n\nvar objectKeys = Object.keys || function (obj) {\n  var res = [];\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);\n  }\n  return res;\n};\n\n\n/***/ }),\n/* 113 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(42)))\n\n/***/ }),\n/* 114 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== \"undefined\" && global) ||\n            (typeof self !== \"undefined\" && self) ||\n            window;\nvar apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(scope, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(113);\n// On some exotic environments, it's not clear which object `setimmediate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))\n\n/***/ }),\n/* 115 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\nObject.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue__ = __webpack_require__(43);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_vue__);\n/**\n * Created by dubaoxing on 2017/3/29.\n * 发布组件所用打包入口文件\n */\n\n\n\n/***/ })\n/******/ ]);",
    _cachedSize: 210686,
    _cachedMaps: {
    },
    node: function(options) {
      return this._source.node(options);
    },
    listMap: function(options) {
      return this._source.listMap(options);
    },
    existsAt: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/build/static/js/app.a6ec0eda4e448136af68.js",
    emitted: true,
  }