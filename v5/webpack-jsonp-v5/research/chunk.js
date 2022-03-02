{
    _source: {
      children: [
        {
          children: [
            "webpackJsonp([0],",
            {
              children: [
                "Array(118).concat(",
                "[\n",
                "/* 118 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "/*global Promise*/\nvar hbnb = require('/hbnb');\nvar version = require('../common/version');\nvar uncommenApis = require('./uncommon-apis');\n\nif (typeof window !== 'undefined' && typeof window.Promise === 'undefined') {\n  window.Promise = require('pinkie');\n}\n\nvar debug = false;\nvar bizname = null;\n\nvar shareChannelMap = {\n  'WECHAT_FRIENDS': 'weixinfriends',\n  'WECHAT_TIMELINE': 'weixin',\n  'QQ': 'qqclient',\n  'SMS': 'sms',\n  'WEIBO': 'sinaweibo',\n  'QZONE': 'qzone',\n  'EMAIL': 'email',\n  // 'COPY': ''  // todo: not supported by hbnb\n};\n\nvar currentButtons = {};\n\nvar availableApis = {\n  'config': true,\n  'isApiSupported': true,\n  'use': true,\n  'getUA': true,\n  'getUserInfo': true,\n  'getFingerprint': true,\n  'getNetworkType': false,\n  'login': true,\n  'logout': false,\n  'getLocation': true,\n  'getCity': true,\n  'getLocationCity': true,\n  'openWebview': true,\n  'jumpWebview': false,\n  'closeWebview': true,\n  'share': true,\n  'configShare': true,\n  'setTitle': true,\n  'setNavButtons': true,\n  'store': true,\n  'retrieve': true,\n\n  'checkVersion': false,\n  'chooseImage': false,\n  'uploadImage': false,\n  'previewImage': false,\n  'downloadImage': false,\n  'publish': false,\n  'subscribe': false,\n  'unsubscribe': false,\n  'setNavigationBarHidden': false,\n  'setBackgroundColor': false,\n  'setStatusBarStyle': false,\n  'setBouncesEnabled': false,\n  'alert': true,\n  'confirm': true,\n  'prompt': false,\n  'sendSMS': false,\n  'getContactList': false,\n  'setPullDown': false,\n  'stopPullDown': false\n\n};\n\nfunction noop() {\n}\n\nfunction isFunction(fn) {\n  return typeof fn === 'function';\n}\n\nfunction escapeRegExp(str) {\n  return str.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, \"\\\\$&\");\n}\n\nfunction qs(key) {\n  key = encodeURIComponent(key);\n\n  var res = null;\n  var search = location.search;\n\n  var reg = new RegExp('(?:\\\\?|&)' + escapeRegExp(key) + '=([^&]*)(?:&|$)');\n  var match = search.match(reg);\n\n  if (match && match.length > 1) {\n    res = decodeURIComponent(match[1]);\n  }\n\n  return res;\n}\n\n\nfunction xhr(url, success) {\n  try {\n    var _xhr = new XMLHttpRequest();\n    _xhr.open(\"GET\", url, true);\n    _xhr.onreadystatechange = function() {\n      if (_xhr.readyState == 4) {\n        _xhr.onreadystatechange = null;\n        var data = JSON.parse(_xhr.responseText);\n        if (data.status == 0) {\n          success(data.data);\n        }\n      }\n    };\n    _xhr.send();\n  } catch (e) {\n    console.error(e);\n  }\n}\n\n\nvar KNB = {\n  __version__: version,\n\n  ready: function(cb) {\n    cb && cb();\n  },\n\n  config: function(opts) {\n    debug = Boolean(opts.debug);\n    bizname = opts.bizname;\n  },\n\n  isApiSupported: function(opts) {\n    opts.success(availableApis[opts.apiName] === true);\n  },\n\n  use: function(apiName, opts) {\n    apiName = apiName.replace(/^hb\\./, '');\n    try {\n      var apiInfo = uncommenApis[apiName];\n      var args = apiInfo.params.map(function(paramName) {\n        return opts[paramName];\n      });\n\n      if (apiInfo.params.length === 1 && apiInfo.params[0] === 'opts') {\n        args = [opts];\n      }\n\n      var res = hbnb[apiInfo.memberof][apiInfo.name].apply(null, args);\n\n      if (apiInfo.return === 'Promise') {\n        res.then(opts.success || noop, opts.fail || noop);\n      } else {\n        return res;\n      }\n    } catch (ex) {\n      opts.fail && opts.fail();\n    }\n  },\n\n  getUserInfo: function(opts) {\n    Promise.all([\n      hbnb.account.getUser(),\n      // todo: there is no valid way to get uuid via hbnb\n      null\n    ]).then(function(values) {\n      var user = values[0];\n      var uuid = values[1];\n\n      opts.success({\n        type: 'mt',\n        userId: user.userId,\n        token: user.userToken,\n        uuid: uuid\n      });\n    }).catch(opts.fail || noop);\n  },\n\n  getFingerprint: function(opts) {\n    hbnb.pay.getFingerprint()\n      .then(function(fingerprint) {\n        opts.success({fingerprint: fingerprint});\n      }).catch(opts.fail || noop);\n  },\n\n  getNetworkType: function() {\n    if (debug) {\n      console.warn('KNB: API `getNetworkType` is not supported currently.');\n    }\n  },\n\n  login: function(opts) {\n    hbnb.account.login()\n      .then(function(user) {\n        opts.success({\n          type: 'mt',\n          userId: user.userId,\n          token: user.userToken\n        });\n      }).catch(opts.fail || noop);\n  },\n\n  logout: function() {\n    if (debug) {\n      console.warn('KNB: API `logout` is not supported currently.');\n    }\n  },\n\n  getLocation: function(opts) {\n    var lat = qs('lat');\n    var lng = qs('lng');\n\n    if (lat && lng) {\n      setTimeout(function() {\n        opts.success({\n          lat: lat,\n          lng: lng\n        });\n      }, 0);\n    } else {\n      setTimeout(opts.fail || noop, 0);\n    }\n  },\n\n  getCity: function(opts) {\n    if (!isFunction(opts.success)) {\n      return;\n    }\n\n    hbnb.position.getCity()\n      .then(function(city) {\n        opts.success({\n          type: 'mt',\n          cityId: city.cityId\n        });\n      }).catch(opts.fail || noop);\n  },\n\n  getLocationCity: function(opts) {\n    if (!isFunction(opts.success)) {\n      return;\n    }\n\n    KNB.getLocation({\n      success: function(loc) {\n        xhr(\"https://i..com/locate/latlng/\" + loc.lat + \",\" + loc.lng + \".json?ndr\", function(res) {\n          opts.success({\n            cityId: res.id,\n            type: 'mt'\n          });\n        });\n      },\n      fail: opts.fail\n    });\n  },\n\n  openWebview: function(opts) {\n    hbnb.webview.open(opts.url);\n  },\n\n  jumpWebview: function() {\n    if (debug) {\n      console.warn('KNB: API `jumpWebview` is not supported currently.');\n    }\n  },\n\n  closeWebview: function() {\n    hbnb.webview.close();\n  },\n\n  share: function(opts) {\n    // todo: `opts.success` is not supported by hbnb\n    if (!opts.channel || opts.channel.length === 0) {\n      opts.channel = ['all'];\n    }\n\n    hbnb.share.callLocal(opts.channel, {\n      title: opts.title,\n      content: opts.desc,\n      detailURL: opts.url,\n      imageURL: opts.image\n    });\n  },\n\n  configShare: function(opts) {\n    // todo: `opts.handle` and `opts.success` are not supported by hbnb\n    if (!opts.channel || opts.channel.length === 0) {\n      opts.channel = ['all'];\n    }\n\n    hbnb.share.activeNavButton(opts.channel, {\n      title: opts.title,\n      content: opts.desc,\n      detailURL: opts.url,\n      imageURL: opts.image\n    });\n  },\n\n  setTitle: function(opts) {\n    // todo: `opts.handle` is not supported by hbnb\n    hbnb.webview.setTitle(opts.title);\n  },\n\n  setNavButtons: function(buttons) {\n\n    var hbnbButtons = [];\n    buttons = [].concat(buttons);\n\n    // todo: `button.position` in ['LL', 'LR'] is not supported by hbnb\n    ['RR', 'RL'].forEach(function(position) {\n      var button = buttons.filter(function(btn) {\n        return position === btn.position;\n      });\n\n      if (button.length) {\n        currentButtons[position] = button[button.length - 1];\n      }\n      button = currentButtons[position];\n\n      if (!button || button.disable) return;\n\n      var res = {\n        callback: button.handle\n      };\n      switch (button.type) {\n        case 'base64':\n          res.type = 'icon';\n          res.icon = button.icon;\n          break;\n        case 'text':\n          res.type = 'text';\n          res.text = button.text;\n          res.color = button.color;\n          break;\n        default:\n        // do nothing\n      }\n      hbnbButtons.push(res);\n    });\n\n    hbnb.webview.setMenus(hbnbButtons);\n  },\n\n  setLLButton: function (ref) {\n    var handle = ref.handle; if ( handle === void 0 ) handle = noop;\n\n    hbnb.webview.setBackAction(handle);\n  },\n\n  store: function(opts) {\n    // todo: `opts.success` is not supported by hbnb\n    var key = bizname ? bizname + ':' + opts.key : opts.key;\n    hbnb.storage.setItem(key, JSON.stringify(opts.value));\n  },\n\n  retrieve: function(opts) {\n    var keys = opts.key.split(/:(.*)$/);\n    var biz = keys.length > 1 ? keys[0] : bizname;\n    var key = keys.length > 1 ? keys[1] : keys[0];\n    key = biz ? biz + ':' + key : key;\n    hbnb.storage.getItem(key)\n      .then(function(value) {\n        opts.success(JSON.parse(value));\n      }).catch(opts.fail || noop);\n  },\n\n  alert: function (ref) {\n    var message = ref.message;\n    var title = ref.title;\n    var handle = ref.handle; if ( handle === void 0 ) handle = noop;\n    var button = ref.button;\n\n    hbnb.ui.alert(message, title, [{\n      label: button,\n      callback: function () {\n        handle();\n      }\n    }]);\n  },\n\n  confirm: function (ref) {\n    var message = ref.message;\n    var title = ref.title;\n    var okButton = ref.okButton;\n    var cancelButton = ref.cancelButton;\n    var handle = ref.handle; if ( handle === void 0 ) handle = noop;\n\n    hbnb.ui.confirm(message, title, {\n      label: okButton,\n      callback: function () {handle({ret: true});}\n    },{\n      label: cancelButton,\n      callback: function () {handle({ret: false});}\n    });\n  }\n};\n\nfor (var key in shareChannelMap) {\n  if (shareChannelMap.hasOwnProperty(key)) {\n    KNB.share[key] = shareChannelMap[key];\n  }\n}\nKNB.getUA = require('../common/get-ua');\n\nvar logEvent = require('../common/log');\n// 统计hbnb调用次数\nlogEvent(\"hbnb\", version);\n\nmodule.exports = KNB;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/hbnb/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            9088,
                            9102,
                            "126",
                            10,
                          ],
                          [
                            9080,
                            9086,
                            "__webpack_require__",
                            11,
                          ],
                          [
                            9043,
                            9060,
                            "44",
                            8,
                          ],
                          [
                            9035,
                            9041,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            249,
                            256,
                            "46",
                            6,
                          ],
                          [
                            241,
                            247,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            123,
                            139,
                            "184",
                            4,
                          ],
                          [
                            115,
                            121,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            74,
                            92,
                            "45",
                            2,
                          ],
                          [
                            66,
                            72,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            38,
                            48,
                            "209",
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
                      _cachedSource: "/*global Promise*/\nvar hbnb = __webpack_require__(209);\nvar version = __webpack_require__(45);\nvar uncommenApis = __webpack_require__(184);\n\nif (typeof window !== 'undefined' && typeof window.Promise === 'undefined') {\n  window.Promise = __webpack_require__(46);\n}\n\nvar debug = false;\nvar bizname = null;\n\nvar shareChannelMap = {\n  'WECHAT_FRIENDS': 'weixinfriends',\n  'WECHAT_TIMELINE': 'weixin',\n  'QQ': 'qqclient',\n  'SMS': 'sms',\n  'WEIBO': 'sinaweibo',\n  'QZONE': 'qzone',\n  'EMAIL': 'email',\n  // 'COPY': ''  // todo: not supported by hbnb\n};\n\nvar currentButtons = {};\n\nvar availableApis = {\n  'config': true,\n  'isApiSupported': true,\n  'use': true,\n  'getUA': true,\n  'getUserInfo': true,\n  'getFingerprint': true,\n  'getNetworkType': false,\n  'login': true,\n  'logout': false,\n  'getLocation': true,\n  'getCity': true,\n  'getLocationCity': true,\n  'openWebview': true,\n  'jumpWebview': false,\n  'closeWebview': true,\n  'share': true,\n  'configShare': true,\n  'setTitle': true,\n  'setNavButtons': true,\n  'store': true,\n  'retrieve': true,\n\n  'checkVersion': false,\n  'chooseImage': false,\n  'uploadImage': false,\n  'previewImage': false,\n  'downloadImage': false,\n  'publish': false,\n  'subscribe': false,\n  'unsubscribe': false,\n  'setNavigationBarHidden': false,\n  'setBackgroundColor': false,\n  'setStatusBarStyle': false,\n  'setBouncesEnabled': false,\n  'alert': true,\n  'confirm': true,\n  'prompt': false,\n  'sendSMS': false,\n  'getContactList': false,\n  'setPullDown': false,\n  'stopPullDown': false\n\n};\n\nfunction noop() {\n}\n\nfunction isFunction(fn) {\n  return typeof fn === 'function';\n}\n\nfunction escapeRegExp(str) {\n  return str.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, \"\\\\$&\");\n}\n\nfunction qs(key) {\n  key = encodeURIComponent(key);\n\n  var res = null;\n  var search = location.search;\n\n  var reg = new RegExp('(?:\\\\?|&)' + escapeRegExp(key) + '=([^&]*)(?:&|$)');\n  var match = search.match(reg);\n\n  if (match && match.length > 1) {\n    res = decodeURIComponent(match[1]);\n  }\n\n  return res;\n}\n\n\nfunction xhr(url, success) {\n  try {\n    var _xhr = new XMLHttpRequest();\n    _xhr.open(\"GET\", url, true);\n    _xhr.onreadystatechange = function() {\n      if (_xhr.readyState == 4) {\n        _xhr.onreadystatechange = null;\n        var data = JSON.parse(_xhr.responseText);\n        if (data.status == 0) {\n          success(data.data);\n        }\n      }\n    };\n    _xhr.send();\n  } catch (e) {\n    console.error(e);\n  }\n}\n\n\nvar KNB = {\n  __version__: version,\n\n  ready: function(cb) {\n    cb && cb();\n  },\n\n  config: function(opts) {\n    debug = Boolean(opts.debug);\n    bizname = opts.bizname;\n  },\n\n  isApiSupported: function(opts) {\n    opts.success(availableApis[opts.apiName] === true);\n  },\n\n  use: function(apiName, opts) {\n    apiName = apiName.replace(/^hb\\./, '');\n    try {\n      var apiInfo = uncommenApis[apiName];\n      var args = apiInfo.params.map(function(paramName) {\n        return opts[paramName];\n      });\n\n      if (apiInfo.params.length === 1 && apiInfo.params[0] === 'opts') {\n        args = [opts];\n      }\n\n      var res = hbnb[apiInfo.memberof][apiInfo.name].apply(null, args);\n\n      if (apiInfo.return === 'Promise') {\n        res.then(opts.success || noop, opts.fail || noop);\n      } else {\n        return res;\n      }\n    } catch (ex) {\n      opts.fail && opts.fail();\n    }\n  },\n\n  getUserInfo: function(opts) {\n    Promise.all([\n      hbnb.account.getUser(),\n      // todo: there is no valid way to get uuid via hbnb\n      null\n    ]).then(function(values) {\n      var user = values[0];\n      var uuid = values[1];\n\n      opts.success({\n        type: 'mt',\n        userId: user.userId,\n        token: user.userToken,\n        uuid: uuid\n      });\n    }).catch(opts.fail || noop);\n  },\n\n  getFingerprint: function(opts) {\n    hbnb.pay.getFingerprint()\n      .then(function(fingerprint) {\n        opts.success({fingerprint: fingerprint});\n      }).catch(opts.fail || noop);\n  },\n\n  getNetworkType: function() {\n    if (debug) {\n      console.warn('KNB: API `getNetworkType` is not supported currently.');\n    }\n  },\n\n  login: function(opts) {\n    hbnb.account.login()\n      .then(function(user) {\n        opts.success({\n          type: 'mt',\n          userId: user.userId,\n          token: user.userToken\n        });\n      }).catch(opts.fail || noop);\n  },\n\n  logout: function() {\n    if (debug) {\n      console.warn('KNB: API `logout` is not supported currently.');\n    }\n  },\n\n  getLocation: function(opts) {\n    var lat = qs('lat');\n    var lng = qs('lng');\n\n    if (lat && lng) {\n      setTimeout(function() {\n        opts.success({\n          lat: lat,\n          lng: lng\n        });\n      }, 0);\n    } else {\n      setTimeout(opts.fail || noop, 0);\n    }\n  },\n\n  getCity: function(opts) {\n    if (!isFunction(opts.success)) {\n      return;\n    }\n\n    hbnb.position.getCity()\n      .then(function(city) {\n        opts.success({\n          type: 'mt',\n          cityId: city.cityId\n        });\n      }).catch(opts.fail || noop);\n  },\n\n  getLocationCity: function(opts) {\n    if (!isFunction(opts.success)) {\n      return;\n    }\n\n    KNB.getLocation({\n      success: function(loc) {\n        xhr(\"https://i..com/locate/latlng/\" + loc.lat + \",\" + loc.lng + \".json?ndr\", function(res) {\n          opts.success({\n            cityId: res.id,\n            type: 'mt'\n          });\n        });\n      },\n      fail: opts.fail\n    });\n  },\n\n  openWebview: function(opts) {\n    hbnb.webview.open(opts.url);\n  },\n\n  jumpWebview: function() {\n    if (debug) {\n      console.warn('KNB: API `jumpWebview` is not supported currently.');\n    }\n  },\n\n  closeWebview: function() {\n    hbnb.webview.close();\n  },\n\n  share: function(opts) {\n    // todo: `opts.success` is not supported by hbnb\n    if (!opts.channel || opts.channel.length === 0) {\n      opts.channel = ['all'];\n    }\n\n    hbnb.share.callLocal(opts.channel, {\n      title: opts.title,\n      content: opts.desc,\n      detailURL: opts.url,\n      imageURL: opts.image\n    });\n  },\n\n  configShare: function(opts) {\n    // todo: `opts.handle` and `opts.success` are not supported by hbnb\n    if (!opts.channel || opts.channel.length === 0) {\n      opts.channel = ['all'];\n    }\n\n    hbnb.share.activeNavButton(opts.channel, {\n      title: opts.title,\n      content: opts.desc,\n      detailURL: opts.url,\n      imageURL: opts.image\n    });\n  },\n\n  setTitle: function(opts) {\n    // todo: `opts.handle` is not supported by hbnb\n    hbnb.webview.setTitle(opts.title);\n  },\n\n  setNavButtons: function(buttons) {\n\n    var hbnbButtons = [];\n    buttons = [].concat(buttons);\n\n    // todo: `button.position` in ['LL', 'LR'] is not supported by hbnb\n    ['RR', 'RL'].forEach(function(position) {\n      var button = buttons.filter(function(btn) {\n        return position === btn.position;\n      });\n\n      if (button.length) {\n        currentButtons[position] = button[button.length - 1];\n      }\n      button = currentButtons[position];\n\n      if (!button || button.disable) return;\n\n      var res = {\n        callback: button.handle\n      };\n      switch (button.type) {\n        case 'base64':\n          res.type = 'icon';\n          res.icon = button.icon;\n          break;\n        case 'text':\n          res.type = 'text';\n          res.text = button.text;\n          res.color = button.color;\n          break;\n        default:\n        // do nothing\n      }\n      hbnbButtons.push(res);\n    });\n\n    hbnb.webview.setMenus(hbnbButtons);\n  },\n\n  setLLButton: function (ref) {\n    var handle = ref.handle; if ( handle === void 0 ) handle = noop;\n\n    hbnb.webview.setBackAction(handle);\n  },\n\n  store: function(opts) {\n    // todo: `opts.success` is not supported by hbnb\n    var key = bizname ? bizname + ':' + opts.key : opts.key;\n    hbnb.storage.setItem(key, JSON.stringify(opts.value));\n  },\n\n  retrieve: function(opts) {\n    var keys = opts.key.split(/:(.*)$/);\n    var biz = keys.length > 1 ? keys[0] : bizname;\n    var key = keys.length > 1 ? keys[1] : keys[0];\n    key = biz ? biz + ':' + key : key;\n    hbnb.storage.getItem(key)\n      .then(function(value) {\n        opts.success(JSON.parse(value));\n      }).catch(opts.fail || noop);\n  },\n\n  alert: function (ref) {\n    var message = ref.message;\n    var title = ref.title;\n    var handle = ref.handle; if ( handle === void 0 ) handle = noop;\n    var button = ref.button;\n\n    hbnb.ui.alert(message, title, [{\n      label: button,\n      callback: function () {\n        handle();\n      }\n    }]);\n  },\n\n  confirm: function (ref) {\n    var message = ref.message;\n    var title = ref.title;\n    var okButton = ref.okButton;\n    var cancelButton = ref.cancelButton;\n    var handle = ref.handle; if ( handle === void 0 ) handle = noop;\n\n    hbnb.ui.confirm(message, title, {\n      label: okButton,\n      callback: function () {handle({ret: true});}\n    },{\n      label: cancelButton,\n      callback: function () {handle({ret: false});}\n    });\n  }\n};\n\nfor (var key in shareChannelMap) {\n  if (shareChannelMap.hasOwnProperty(key)) {\n    KNB.share[key] = shareChannelMap[key];\n  }\n}\nKNB.getUA = __webpack_require__(44);\n\nvar logEvent = __webpack_require__(126);\n// 统计hbnb调用次数\nlogEvent(\"hbnb\", version);\n\nmodule.exports = KNB;\n",
                      _cachedSize: 9169,
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
                "/* 119 */",
                ",\n",
                "/* 120 */",
                ",\n",
                "/* 121 */",
                ",\n",
                "/* 122 */",
                ",\n",
                "/* 123 */",
                ",\n",
                "/* 124 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nmodule.exports = require('./invoke.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/invoke/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            40,
                            52,
                            "219",
                            1,
                          ],
                          [
                            32,
                            38,
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
                      _cachedSource: "\n\nmodule.exports = __webpack_require__(219);\n",
                      _cachedSize: 45,
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
                "/* 125 */",
                ",\n",
                "/* 126 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var request = require('./request');\n\nmodule.exports = function logEvent (type, version) {\n  if (Math.random() >= 0.1) return;\n  var host;\n  var hosts = [\n    'dianping.com',  \n    '.com', \n    '', \n    '.net', \n    'maoyan.com',\n    'm-zl-st.cfcmu.cn',\n    'm-zl.mucfc.com'\n  ];\n  var hostsBeta = [\n    'localhost',\n    '51ping.com',\n    'alpha.dp'\n  ];\n  for (var i = 0; i < hosts.length; i++) {\n    if (location.href.indexOf(hosts[i]) !== -1) {\n      host = 'm.dianping.com';\n      break;\n    }\n  }\n  if (!host) {\n    for (var j = 0; j < hostsBeta.length; j++) {\n      if (location.href.indexOf(hostsBeta[j])!==-1) {\n        host = 'm.51ping.com';\n      }\n    }\n  }\n  if (host) {\n    request({\n        url: '//' + host + '/mtnb/api/statistics',\n        data: {\n            version: version,\n            type: type\n        }\n    });    \n  }\n};",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/common/log.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            22,
                            32,
                            "127",
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
                      _cachedSource: "var request = __webpack_require__(127);\n\nmodule.exports = function logEvent (type, version) {\n  if (Math.random() >= 0.1) return;\n  var host;\n  var hosts = [\n    'dianping.com',  \n    '.com', \n    '', \n    '.net', \n    'maoyan.com',\n    'm-zl-st.cfcmu.cn',\n    'm-zl.mucfc.com'\n  ];\n  var hostsBeta = [\n    'localhost',\n    '51ping.com',\n    'alpha.dp'\n  ];\n  for (var i = 0; i < hosts.length; i++) {\n    if (location.href.indexOf(hosts[i]) !== -1) {\n      host = 'm.dianping.com';\n      break;\n    }\n  }\n  if (!host) {\n    for (var j = 0; j < hostsBeta.length; j++) {\n      if (location.href.indexOf(hostsBeta[j])!==-1) {\n        host = 'm.51ping.com';\n      }\n    }\n  }\n  if (host) {\n    request({\n        url: '//' + host + '/mtnb/api/statistics',\n        data: {\n            version: version,\n            type: type\n        }\n    });    \n  }\n};",
                      _cachedSize: 873,
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
                "/* 127 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "var globalCount = 0;\n\nvar urlStringify = function (url, data) {\n    if (!data) {\n        return url;\n    }\n    var param = [];\n    for (var o in data) {\n        if (data.hasOwnProperty(o)) {\n            param.push(o + '=' + data[o]);\n        }\n    }\n    return ~url.indexOf('?') ? url + param.join('&') : url + '?' + param.join('&');\n};\n\n/**\n * jsonp\n * */\nmodule.exports = function (options) {\n\n    if (!options.url) {\n        throw new Error('url request!');\n    }\n    var data = options.data || {};\n    var cb = options.onSuc || function () {\n    };\n    var cbName = data.callback = 'KNB' + (++globalCount) + (+new Date());\n\n    var script = document.createElement('script');\n    script.src = urlStringify(options.url, data);\n\n    window[cbName] = function (res) {\n        delete window[cbName];\n        script.parentNode.removeChild(script);\n        cb(res);\n    };\n\n    document.getElementsByTagName('head')[0].appendChild(script);\n};",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/common/request.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "var globalCount = 0;\n\nvar urlStringify = function (url, data) {\n    if (!data) {\n        return url;\n    }\n    var param = [];\n    for (var o in data) {\n        if (data.hasOwnProperty(o)) {\n            param.push(o + '=' + data[o]);\n        }\n    }\n    return ~url.indexOf('?') ? url + param.join('&') : url + '?' + param.join('&');\n};\n\n/**\n * jsonp\n * */\nmodule.exports = function (options) {\n\n    if (!options.url) {\n        throw new Error('url request!');\n    }\n    var data = options.data || {};\n    var cb = options.onSuc || function () {\n    };\n    var cbName = data.callback = 'KNB' + (++globalCount) + (+new Date());\n\n    var script = document.createElement('script');\n    script.src = urlStringify(options.url, data);\n\n    window[cbName] = function (res) {\n        delete window[cbName];\n        script.parentNode.removeChild(script);\n        cb(res);\n    };\n\n    document.getElementsByTagName('head')[0].appendChild(script);\n};",
                      _cachedSize: 939,
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
                "/* 128 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:invoke:env');\n}\n\n\n// default value\nexports.isHBNBWebview = false;\nexports.platform = 'h5';\nexports.appVersion = undefined;\nexports.supportPrompt = undefined; // android group 5.x not support alert\nexports.HBNBReady = false;\n\nvar versionCompare = require('./version-compare.js');\nvar initEvent = require('./event.js');\n\nvar initVersion = function() {\n    // user agent regexp\n    var RE_ANDROID = (/android/i);\n    var RE_IOS = (/iPhone|iPad/i);\n    var RE_HBNB = (/\\biHotel\\/(\\d+(?:\\.\\d+)*)\\b/i);\n    var TRIP_BIZ = (/mt_trip_biz/i);\n\n    // check user agent\n    var ua = navigator.userAgent || '';\n    var match = ua.match(RE_HBNB);\n    if (match) {\n        if (RE_IOS.test(ua)) {\n            exports.platform = 'ios';\n            exports.appVersion = match[1];\n            exports.isHBNBWebview = true;\n        } else if (RE_ANDROID.test(ua)) {\n            exports.platform = 'android';\n            exports.appVersion = match[1];\n            exports.isHBNBWebview = true;\n            exports.supportPrompt = TRIP_BIZ.test(ua) || Boolean(versionCompare(exports.appVersion, '6.0') >= 0);\n        }\n    }\n};\n\nvar init = function() {\n    initVersion();\n    initEvent();\n};\n\ninit();\n\nif (process.env.NODE_ENV !== 'production') {\n    debug('env = %j', exports);\n}\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/invoke/env.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1291,
                            1327,
                            "false",
                            6,
                          ],
                          [
                            409,
                            420,
                            "218",
                            4,
                          ],
                          [
                            401,
                            407,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            360,
                            381,
                            "141",
                            2,
                          ],
                          [
                            352,
                            358,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:env');\n}\n\n\n// default value\nexports.isHBNBWebview = false;\nexports.platform = 'h5';\nexports.appVersion = undefined;\nexports.supportPrompt = undefined; // android group 5.x not support alert\nexports.HBNBReady = false;\n\nvar versionCompare = __webpack_require__(141);\nvar initEvent = __webpack_require__(218);\n\nvar initVersion = function() {\n    // user agent regexp\n    var RE_ANDROID = (/android/i);\n    var RE_IOS = (/iPhone|iPad/i);\n    var RE_HBNB = (/\\biHotel\\/(\\d+(?:\\.\\d+)*)\\b/i);\n    var TRIP_BIZ = (/mt_trip_biz/i);\n\n    // check user agent\n    var ua = navigator.userAgent || '';\n    var match = ua.match(RE_HBNB);\n    if (match) {\n        if (RE_IOS.test(ua)) {\n            exports.platform = 'ios';\n            exports.appVersion = match[1];\n            exports.isHBNBWebview = true;\n        } else if (RE_ANDROID.test(ua)) {\n            exports.platform = 'android';\n            exports.appVersion = match[1];\n            exports.isHBNBWebview = true;\n            exports.supportPrompt = TRIP_BIZ.test(ua) || Boolean(versionCompare(exports.appVersion, '6.0') >= 0);\n        }\n    }\n};\n\nvar init = function() {\n    initVersion();\n    initEvent();\n};\n\ninit();\n\nif (false) {\n    debug('env = %j', exports);\n}\n",
                      _cachedSize: 1285,
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
                "/* 129 */",
                ",\n",
                "/* 130 */",
                ",\n",
                "/* 131 */",
                ",\n",
                "/* 132 */",
                ",\n",
                "/* 133 */",
                ",\n",
                "/* 134 */",
                ",\n",
                "/* 135 */",
                ",\n",
                "/* 136 */",
                ",\n",
                "/* 137 */",
                ",\n",
                "/* 138 */",
                ",\n",
                "/* 139 */",
                ",\n",
                "/* 140 */",
                ",\n",
                "/* 141 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:invoke:version-compare');\n}\n\n/**\n * compare version number\n *\n * @private\n * @param {String} a\n * @param {String} b\n * @return {Number} -1 is <, 0 is =, 1 is >\n *\n * @example\n *  compare('6.0', '6.0.1'); // -1\n *  compare('6.0', '5.9'); // 1\n *  compare('5.9.2', '5.9.2'); // 0\n */\nvar compare = function(a, b) {\n    var pa = String(a).split('.');\n    var pb = String(b).split('.');\n    var len = Math.min(pa.length, pb.length) + 1;\n\n    if (process.env.NODE_ENV !== 'production') {\n        debug('a is %j', pa);\n        debug('b is %j', pb);\n    }\n\n    for (var i = 0; i < len; ++i) {\n        var na = Number(pa[i]);\n        var nb = Number(pb[i]);\n        if (na > nb) {\n            return 1;\n        } else if (nb > na) {\n            return -1;\n        } else if (!isNaN(na) && isNaN(nb)) {\n            return 1;\n        } else if (isNaN(na) && !isNaN(nb)) {\n            return -1;\n        }\n    }\n    return 0;\n};\n\nmodule.exports = compare;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/invoke/version-compare.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            548,
                            584,
                            "false",
                            2,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:version-compare');\n}\n\n/**\n * compare version number\n *\n * @private\n * @param {String} a\n * @param {String} b\n * @return {Number} -1 is <, 0 is =, 1 is >\n *\n * @example\n *  compare('6.0', '6.0.1'); // -1\n *  compare('6.0', '5.9'); // 1\n *  compare('5.9.2', '5.9.2'); // 0\n */\nvar compare = function(a, b) {\n    var pa = String(a).split('.');\n    var pb = String(b).split('.');\n    var len = Math.min(pa.length, pb.length) + 1;\n\n    if (false) {\n        debug('a is %j', pa);\n        debug('b is %j', pb);\n    }\n\n    for (var i = 0; i < len; ++i) {\n        var na = Number(pa[i]);\n        var nb = Number(pb[i]);\n        if (na > nb) {\n            return 1;\n        } else if (nb > na) {\n            return -1;\n        } else if (!isNaN(na) && isNaN(nb)) {\n            return 1;\n        } else if (isNaN(na) && !isNaN(nb)) {\n            return -1;\n        }\n    }\n    return 0;\n};\n\nmodule.exports = compare;\n",
                      _cachedSize: 974,
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
                "/* 142 */",
                ",\n",
                "/* 143 */",
                ",\n",
                "/* 144 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:invoke:build-uri');\n}\n\nvar _id = 0;\nvar _buildCallback = function(fn) {\n    var fnID = (new Date().getTime() + '_' + (++_id));\n    var callbackName = 'HBNB_CALLBACK_' + fnID;\n    window[callbackName] = (function(fn, callbackName) {\n        var innerFN = function() {\n            var r = fn.apply(null, arguments);\n            if (r !== false) {\n                delete window[callbackName];\n            }\n        };\n        return innerFN;\n    })(fn, callbackName);\n\n    if (process.env.NODE_ENV !== 'production') {\n        //debug('window[\"%s\"] call \"%s\"', callbackName, fn);\n    }\n\n    return callbackName;\n};\n\nvar _processParameters = function(key, value) {\n    if (typeof value === 'function') {\n        return _buildCallback(value);\n    } else {\n        return value;\n    }\n};\n\nvar buildURI = function(protocol, moduleName, methodName, parameters) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('protocol = %s', protocol);\n        debug('module = %s', moduleName);\n        debug('method = %s', methodName);\n        debug('before process, parameters is %j', parameters);\n    }\n\n    var params = encodeURIComponent(JSON.stringify(parameters, _processParameters));\n    if (process.env.NODE_ENV !== 'production') {\n        debug('after encode, parameters is %s', params);\n    }\n\n    var uri = protocol + '//' + moduleName + '/' + methodName + '?params=' + params;\n\n    if (process.env.NODE_ENV !== 'production') {\n        debug('uri = %s', uri);\n    }\n\n    return uri;\n};\n\nmodule.exports = buildURI;\nmodule.exports.processParams = _processParameters; // for legency-lvyou\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/invoke/build-uri.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1497,
                            1533,
                            "false",
                            5,
                          ],
                          [
                            1298,
                            1334,
                            "false",
                            4,
                          ],
                          [
                            968,
                            1004,
                            "false",
                            3,
                          ],
                          [
                            580,
                            616,
                            "false",
                            2,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:build-uri');\n}\n\nvar _id = 0;\nvar _buildCallback = function(fn) {\n    var fnID = (new Date().getTime() + '_' + (++_id));\n    var callbackName = 'HBNB_CALLBACK_' + fnID;\n    window[callbackName] = (function(fn, callbackName) {\n        var innerFN = function() {\n            var r = fn.apply(null, arguments);\n            if (r !== false) {\n                delete window[callbackName];\n            }\n        };\n        return innerFN;\n    })(fn, callbackName);\n\n    if (false) {\n        //debug('window[\"%s\"] call \"%s\"', callbackName, fn);\n    }\n\n    return callbackName;\n};\n\nvar _processParameters = function(key, value) {\n    if (typeof value === 'function') {\n        return _buildCallback(value);\n    } else {\n        return value;\n    }\n};\n\nvar buildURI = function(protocol, moduleName, methodName, parameters) {\n    if (false) {\n        debug('protocol = %s', protocol);\n        debug('module = %s', moduleName);\n        debug('method = %s', methodName);\n        debug('before process, parameters is %j', parameters);\n    }\n\n    var params = encodeURIComponent(JSON.stringify(parameters, _processParameters));\n    if (false) {\n        debug('after encode, parameters is %s', params);\n    }\n\n    var uri = protocol + '//' + moduleName + '/' + methodName + '?params=' + params;\n\n    if (false) {\n        debug('uri = %s', uri);\n    }\n\n    return uri;\n};\n\nmodule.exports = buildURI;\nmodule.exports.processParams = _processParameters; // for legency-lvyou\n",
                      _cachedSize: 1523,
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
                "/* 145 */",
                ",\n",
                "/* 146 */",
                ",\n",
                "/* 147 */",
                ",\n",
                "/* 148 */",
                ",\n",
                "/* 149 */",
                ",\n",
                "/* 150 */",
                ",\n",
                "/* 151 */",
                ",\n",
                "/* 152 */",
                ",\n",
                "/* 153 */",
                ",\n",
                "/* 154 */",
                ",\n",
                "/* 155 */",
                ",\n",
                "/* 156 */",
                ",\n",
                "/* 157 */",
                ",\n",
                "/* 158 */",
                ",\n",
                "/* 159 */",
                ",\n",
                "/* 160 */",
                ",\n",
                "/* 161 */",
                ",\n",
                "/* 162 */",
                ",\n",
                "/* 163 */",
                ",\n",
                "/* 164 */",
                ",\n",
                "/* 165 */",
                ",\n",
                "/* 166 */",
                ",\n",
                "/* 167 */",
                ",\n",
                "/* 168 */",
                ",\n",
                "/* 169 */",
                ",\n",
                "/* 170 */",
                ",\n",
                "/* 171 */",
                ",\n",
                "/* 172 */",
                ",\n",
                "/* 173 */",
                ",\n",
                "/* 174 */",
                ",\n",
                "/* 175 */",
                ",\n",
                "/* 176 */",
                ",\n",
                "/* 177 */",
                ",\n",
                "/* 178 */",
                ",\n",
                "/* 179 */",
                ",\n",
                "/* 180 */",
                ",\n",
                "/* 181 */",
                ",\n",
                "/* 182 */",
                ",\n",
                "/* 183 */",
                ",\n",
                "/* 184 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports) {\n\n",
                    {
                      _source: {
                        _source: {
                          _value: "module.exports = {\n  \"core.HBNBVersion\": {\n    \"params\": [],\n    \"memberof\": \"core\",\n    \"name\": \"HBNBVersion\",\n    \"return\": \"Promise\"\n  },\n  \"core.OS\": {\n    \"params\": [],\n    \"memberof\": \"core\",\n    \"name\": \"OS\",\n    \"return\": \"Promise\"\n  },\n  \"core.supportApis\": {\n    \"params\": [],\n    \"memberof\": \"core\",\n    \"name\": \"supportApis\",\n    \"return\": \"Promise\"\n  },\n  \"account.getUser\": {\n    \"params\": [],\n    \"memberof\": \"account\",\n    \"name\": \"getUser\",\n    \"return\": \"Promise\"\n  },\n  \"account.login\": {\n    \"params\": [],\n    \"memberof\": \"account\",\n    \"name\": \"login\",\n    \"return\": \"Promise\"\n  },\n  \"account.mobileLogin\": {\n    \"params\": [\n      \"mobile\",\n      \"code\"\n    ],\n    \"memberof\": \"account\",\n    \"name\": \"mobileLogin\",\n    \"return\": \"Promise\"\n  },\n  \"account.sendMobileLoginCode\": {\n    \"params\": [\n      \"mobile\"\n    ],\n    \"memberof\": \"account\",\n    \"name\": \"sendMobileLoginCode\",\n    \"return\": \"Promise\"\n  },\n  \"log.mge\": {\n    \"params\": [\n      \"cid\",\n      \"act\",\n      \"val\",\n      \"lab\"\n    ],\n    \"memberof\": \"log\",\n    \"name\": \"mge\",\n    \"return\": \"Undefined\"\n  },\n  \"network.request\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"network\",\n    \"name\": \"request\",\n    \"return\": \"Promise\"\n  },\n  \"network.sendSms\": {\n    \"params\": [],\n    \"memberof\": \"network\",\n    \"name\": \"sendSms\"\n  },\n  \"pay.getFingerprint\": {\n    \"params\": [],\n    \"memberof\": \"pay\",\n    \"name\": \"getFingerprint\",\n    \"return\": \"Promise\"\n  },\n  \"pay.payment\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"pay\",\n    \"name\": \"payment\",\n    \"return\": \"Promise\"\n  },\n  \"position.getCity\": {\n    \"params\": [],\n    \"memberof\": \"position\",\n    \"name\": \"getCity\",\n    \"return\": \"Promise\"\n  },\n  \"storage.getItem\": {\n    \"params\": [],\n    \"memberof\": \"storage\",\n    \"name\": \"getItem\",\n    \"return\": \"Promise\"\n  },\n  \"storage.removeItem\": {\n    \"params\": [],\n    \"memberof\": \"storage\",\n    \"name\": \"removeItem\",\n    \"return\": \"Undefined\"\n  },\n  \"storage.setItem\": {\n    \"params\": [],\n    \"memberof\": \"storage\",\n    \"name\": \"setItem\",\n    \"return\": \"Undefined\"\n  },\n  \"storage.setResult\": {\n    \"params\": [\n      \"obj\"\n    ],\n    \"memberof\": \"storage\",\n    \"name\": \"setResult\",\n    \"return\": \"Undefined\"\n  },\n  \"thirdApps.installed\": {\n    \"params\": [\n      \"appName\"\n    ],\n    \"memberof\": \"thirdApps\",\n    \"name\": \"installed\",\n    \"return\": \"Promise\"\n  },\n  \"ui.alert\": {\n    \"params\": [\n      \"message\",\n      \"title\",\n      \"button\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"alert\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.autoLock\": {\n    \"params\": [\n      \"enable\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"autoLock\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.confirm\": {\n    \"params\": [\n      \"message\",\n      \"title\",\n      \"leftButton\",\n      \"rightButton\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"confirm\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.loadingStart\": {\n    \"params\": [],\n    \"memberof\": \"ui\",\n    \"name\": \"loadingStart\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.loadingStop\": {\n    \"params\": [],\n    \"memberof\": \"ui\",\n    \"name\": \"loadingStop\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.options\": {\n    \"params\": [\n      \"menus\",\n      \"cancel\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"options\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.selectDate\": {\n    \"params\": [\n      \"current\",\n      \"maxDate\",\n      \"minDate\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"selectDate\",\n    \"return\": \"Promise\"\n  },\n  \"ui.singleSelect\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"singleSelect\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.toast\": {\n    \"params\": [\n      \"message\",\n      \"time\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"toast\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.back\": {\n    \"params\": [],\n    \"memberof\": \"webview\",\n    \"name\": \"back\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.closeAll\": {\n    \"params\": [\n      \"urls\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"closeAll\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.close\": {\n    \"params\": [],\n    \"memberof\": \"webview\",\n    \"name\": \"close\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.dismiss\": {\n    \"params\": [],\n    \"memberof\": \"webview\",\n    \"name\": \"dismiss\"\n  },\n  \"webview.modal\": {\n    \"params\": [\n      \"url\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"modal\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.open\": {\n    \"params\": [\n      \"url\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"open\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setBackAction\": {\n    \"params\": [\n      \"cb\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setBackAction\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setComplexTitle\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setComplexTitle\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setMenus\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setMenus\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setTitle\": {\n    \"params\": [\n      \"title\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setTitle\",\n    \"return\": \"Undefined\"\n  },\n  \"tower.sendTopicCommentSuccess\": {\n    \"params\": [],\n    \"memberof\": \"tower\",\n    \"name\": \"sendTopicCommentSuccess\",\n    \"return\": \"Promise\"\n  },\n  \"tower.comment\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"tower\",\n    \"name\": \"comment\",\n    \"return\": \"Promise\"\n  },\n  \"tower.getUuid\": {\n    \"params\": [],\n    \"memberof\": \"tower\",\n    \"name\": \"getUuid\",\n    \"return\": \"Promise\"\n  },\n  \"tower.shareConfig\": {\n    \"params\": [\n      \"name\",\n      \"opts\"\n    ],\n    \"memberof\": \"tower\",\n    \"name\": \"shareConfig\",\n    \"return\": \"Promise\"\n  },\n  \"tower.checkNickname\": {\n    \"params\": [],\n    \"memberof\": \"tower\",\n    \"name\": \"checkNickname\",\n    \"return\": \"Promise\"\n  },\n  \"flight.alipay\": {\n    \"params\": [\n      \"orderId\",\n      \"payURL\",\n      \"returnURL\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"alipay\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getExpress\": {\n    \"params\": [\n      \"siteId\",\n      \"id\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"getExpress\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getFilter\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"getFilter\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getLinkman\": {\n    \"params\": [\n      \"id\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"getLinkman\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getUser\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"getUser\",\n    \"return\": \"Promise\"\n  },\n  \"flight.gotoAppHomepage\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"gotoAppHomepage\",\n    \"return\": \"Undefined\"\n  },\n  \"flight.gotoOrderDetail\": {\n    \"params\": [\n      \"url\",\n      \"orderListUrl\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"gotoOrderDetail\",\n    \"return\": \"Undefined\"\n  },\n  \"flight.login\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"login\",\n    \"return\": \"Promise\"\n  },\n  \"flight.selectCity\": {\n    \"params\": [\n      \"city\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"selectCity\",\n    \"return\": \"Promise\"\n  },\n  \"flight.selectDate\": {\n    \"params\": [\n      \"fromCity\",\n      \"toCity\",\n      \"months\",\n      \"original\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"selectDate\",\n    \"return\": \"Promise\"\n  },\n  \"flight.selectRoundDate\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"selectRoundDate\",\n    \"return\": \"Promise\"\n  },\n  \"train.gotoOrderDetail\": {\n    \"params\": [\n      \"url\",\n      \"orderListUrl\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"gotoOrderDetail\",\n    \"return\": \"Undefined\"\n  },\n  \"train.gotoOrderList\": {\n    \"params\": [\n      \"url\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"gotoOrderList\",\n    \"return\": \"Undefined\"\n  },\n  \"train.multiSelect\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"multiSelect\",\n    \"return\": \"Promise\"\n  },\n  \"train.ringtone\": {\n    \"params\": [\n      \"loop\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"ringtone\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectDateRush\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectDateRush\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectDateStudent\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectDateStudent\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectDate\": {\n    \"params\": [\n      \"date\",\n      \"days\",\n      \"tips\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectDate\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectStation\": {\n    \"params\": [\n      \"stationCode\",\n      \"stationType\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectStation\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectTrains\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectTrains\",\n    \"return\": \"Promise\"\n  },\n  \"train.timeRange\": {\n    \"params\": [\n      \"start\",\n      \"end\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"timeRange\",\n    \"return\": \"Promise\"\n  },\n  \"train.timeTable\": {\n    \"params\": [\n      \"stations\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"timeTable\",\n    \"return\": \"Undefined\"\n  },\n  \"train.vibrate\": {\n    \"params\": [\n      \"duration\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"vibrate\",\n    \"return\": \"Promise\"\n  },\n  \"inject.addStopUrl\": {\n    \"params\": [\n      \"name\",\n      \"pattern\",\n      \"script\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"addStopUrl\",\n    \"return\": \"Promise\"\n  },\n  \"inject.callback\": {\n    \"params\": [\n      \"fnName\",\n      \"data\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"callback\",\n    \"return\": \"Undefined\"\n  },\n  \"inject.close\": {\n    \"params\": [\n      \"name\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"close\",\n    \"return\": \"Promise\"\n  },\n  \"inject.loadHTML\": {\n    \"params\": [\n      \"name\",\n      \"url\",\n      \"html\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"loadHTML\",\n    \"return\": \"Promise\"\n  },\n  \"inject.load\": {\n    \"params\": [\n      \"name\",\n      \"url\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"load\",\n    \"return\": \"Promise\"\n  },\n  \"inject.runScript\": {\n    \"params\": [\n      \"name\",\n      \"script\",\n      \"param\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"runScript\",\n    \"return\": \"Promise\"\n  },\n  \"inject.show\": {\n    \"params\": [\n      \"name\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"show\",\n    \"return\": \"Promise\"\n  },\n  \"travel.getPosDeviceId\": {\n    \"params\": [],\n    \"memberof\": \"travel\",\n    \"name\": \"getPosDeviceId\",\n    \"return\": \"Promise\"\n  },\n  \"travel.print\": {\n    \"params\": [\n      \"content\"\n    ],\n    \"memberof\": \"travel\",\n    \"name\": \"print\",\n    \"return\": \"Promise\"\n  },\n  \"travel.check_printer_state\": {\n    \"params\": [],\n    \"memberof\": \"travel\",\n    \"name\": \"check_printer_state\",\n    \"return\": \"Promise\"\n  },\n  \"travel.selectCity\": {\n    \"params\": [\n      \"city\"\n    ],\n    \"memberof\": \"travel\",\n    \"name\": \"selectCity\",\n    \"return\": \"Promise\"\n  },\n  \"travel.setGdata\": {\n    \"params\": [\n      \"bigG\"\n    ],\n    \"memberof\": \"travel\",\n    \"name\": \"setGdata\",\n    \"return\": \"Promise\"\n  },\n  \"env.getPageEnv\": {\n    \"params\": [],\n    \"memberof\": \"env\",\n    \"name\": \"getPageEnv\",\n    \"return\": \"Promise\"\n  },\n  \"share.activeNavButton\": {\n    \"params\": [\n      \"channel\",\n      \"conf\"\n    ],\n    \"memberof\": \"share\",\n    \"name\": \"activeNavButton\",\n    \"return\": \"Undefined\"\n  },\n  \"share.callLocal\": {\n    \"params\": [\n      \"channel\",\n      \"conf\"\n    ],\n    \"memberof\": \"share\",\n    \"name\": \"callLocal\",\n    \"return\": \"Undefined\"\n  },\n  \"share.disableNavButton\": {\n    \"params\": [],\n    \"memberof\": \"share\",\n    \"name\": \"disableNavButton\",\n    \"return\": \"Undefined\"\n  }\n};",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules/@dp/knb/compiled/hbnb/uncommon-apis.js",
                        },
                        _name: undefined,
                        replacements: [
                        ],
                      },
                      _cachedSource: "module.exports = {\n  \"core.HBNBVersion\": {\n    \"params\": [],\n    \"memberof\": \"core\",\n    \"name\": \"HBNBVersion\",\n    \"return\": \"Promise\"\n  },\n  \"core.OS\": {\n    \"params\": [],\n    \"memberof\": \"core\",\n    \"name\": \"OS\",\n    \"return\": \"Promise\"\n  },\n  \"core.supportApis\": {\n    \"params\": [],\n    \"memberof\": \"core\",\n    \"name\": \"supportApis\",\n    \"return\": \"Promise\"\n  },\n  \"account.getUser\": {\n    \"params\": [],\n    \"memberof\": \"account\",\n    \"name\": \"getUser\",\n    \"return\": \"Promise\"\n  },\n  \"account.login\": {\n    \"params\": [],\n    \"memberof\": \"account\",\n    \"name\": \"login\",\n    \"return\": \"Promise\"\n  },\n  \"account.mobileLogin\": {\n    \"params\": [\n      \"mobile\",\n      \"code\"\n    ],\n    \"memberof\": \"account\",\n    \"name\": \"mobileLogin\",\n    \"return\": \"Promise\"\n  },\n  \"account.sendMobileLoginCode\": {\n    \"params\": [\n      \"mobile\"\n    ],\n    \"memberof\": \"account\",\n    \"name\": \"sendMobileLoginCode\",\n    \"return\": \"Promise\"\n  },\n  \"log.mge\": {\n    \"params\": [\n      \"cid\",\n      \"act\",\n      \"val\",\n      \"lab\"\n    ],\n    \"memberof\": \"log\",\n    \"name\": \"mge\",\n    \"return\": \"Undefined\"\n  },\n  \"network.request\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"network\",\n    \"name\": \"request\",\n    \"return\": \"Promise\"\n  },\n  \"network.sendSms\": {\n    \"params\": [],\n    \"memberof\": \"network\",\n    \"name\": \"sendSms\"\n  },\n  \"pay.getFingerprint\": {\n    \"params\": [],\n    \"memberof\": \"pay\",\n    \"name\": \"getFingerprint\",\n    \"return\": \"Promise\"\n  },\n  \"pay.payment\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"pay\",\n    \"name\": \"payment\",\n    \"return\": \"Promise\"\n  },\n  \"position.getCity\": {\n    \"params\": [],\n    \"memberof\": \"position\",\n    \"name\": \"getCity\",\n    \"return\": \"Promise\"\n  },\n  \"storage.getItem\": {\n    \"params\": [],\n    \"memberof\": \"storage\",\n    \"name\": \"getItem\",\n    \"return\": \"Promise\"\n  },\n  \"storage.removeItem\": {\n    \"params\": [],\n    \"memberof\": \"storage\",\n    \"name\": \"removeItem\",\n    \"return\": \"Undefined\"\n  },\n  \"storage.setItem\": {\n    \"params\": [],\n    \"memberof\": \"storage\",\n    \"name\": \"setItem\",\n    \"return\": \"Undefined\"\n  },\n  \"storage.setResult\": {\n    \"params\": [\n      \"obj\"\n    ],\n    \"memberof\": \"storage\",\n    \"name\": \"setResult\",\n    \"return\": \"Undefined\"\n  },\n  \"thirdApps.installed\": {\n    \"params\": [\n      \"appName\"\n    ],\n    \"memberof\": \"thirdApps\",\n    \"name\": \"installed\",\n    \"return\": \"Promise\"\n  },\n  \"ui.alert\": {\n    \"params\": [\n      \"message\",\n      \"title\",\n      \"button\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"alert\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.autoLock\": {\n    \"params\": [\n      \"enable\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"autoLock\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.confirm\": {\n    \"params\": [\n      \"message\",\n      \"title\",\n      \"leftButton\",\n      \"rightButton\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"confirm\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.loadingStart\": {\n    \"params\": [],\n    \"memberof\": \"ui\",\n    \"name\": \"loadingStart\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.loadingStop\": {\n    \"params\": [],\n    \"memberof\": \"ui\",\n    \"name\": \"loadingStop\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.options\": {\n    \"params\": [\n      \"menus\",\n      \"cancel\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"options\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.selectDate\": {\n    \"params\": [\n      \"current\",\n      \"maxDate\",\n      \"minDate\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"selectDate\",\n    \"return\": \"Promise\"\n  },\n  \"ui.singleSelect\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"singleSelect\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.toast\": {\n    \"params\": [\n      \"message\",\n      \"time\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"toast\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.back\": {\n    \"params\": [],\n    \"memberof\": \"webview\",\n    \"name\": \"back\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.closeAll\": {\n    \"params\": [\n      \"urls\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"closeAll\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.close\": {\n    \"params\": [],\n    \"memberof\": \"webview\",\n    \"name\": \"close\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.dismiss\": {\n    \"params\": [],\n    \"memberof\": \"webview\",\n    \"name\": \"dismiss\"\n  },\n  \"webview.modal\": {\n    \"params\": [\n      \"url\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"modal\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.open\": {\n    \"params\": [\n      \"url\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"open\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setBackAction\": {\n    \"params\": [\n      \"cb\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setBackAction\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setComplexTitle\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setComplexTitle\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setMenus\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setMenus\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setTitle\": {\n    \"params\": [\n      \"title\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setTitle\",\n    \"return\": \"Undefined\"\n  },\n  \"tower.sendTopicCommentSuccess\": {\n    \"params\": [],\n    \"memberof\": \"tower\",\n    \"name\": \"sendTopicCommentSuccess\",\n    \"return\": \"Promise\"\n  },\n  \"tower.comment\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"tower\",\n    \"name\": \"comment\",\n    \"return\": \"Promise\"\n  },\n  \"tower.getUuid\": {\n    \"params\": [],\n    \"memberof\": \"tower\",\n    \"name\": \"getUuid\",\n    \"return\": \"Promise\"\n  },\n  \"tower.shareConfig\": {\n    \"params\": [\n      \"name\",\n      \"opts\"\n    ],\n    \"memberof\": \"tower\",\n    \"name\": \"shareConfig\",\n    \"return\": \"Promise\"\n  },\n  \"tower.checkNickname\": {\n    \"params\": [],\n    \"memberof\": \"tower\",\n    \"name\": \"checkNickname\",\n    \"return\": \"Promise\"\n  },\n  \"flight.alipay\": {\n    \"params\": [\n      \"orderId\",\n      \"payURL\",\n      \"returnURL\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"alipay\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getExpress\": {\n    \"params\": [\n      \"siteId\",\n      \"id\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"getExpress\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getFilter\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"getFilter\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getLinkman\": {\n    \"params\": [\n      \"id\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"getLinkman\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getUser\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"getUser\",\n    \"return\": \"Promise\"\n  },\n  \"flight.gotoAppHomepage\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"gotoAppHomepage\",\n    \"return\": \"Undefined\"\n  },\n  \"flight.gotoOrderDetail\": {\n    \"params\": [\n      \"url\",\n      \"orderListUrl\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"gotoOrderDetail\",\n    \"return\": \"Undefined\"\n  },\n  \"flight.login\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"login\",\n    \"return\": \"Promise\"\n  },\n  \"flight.selectCity\": {\n    \"params\": [\n      \"city\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"selectCity\",\n    \"return\": \"Promise\"\n  },\n  \"flight.selectDate\": {\n    \"params\": [\n      \"fromCity\",\n      \"toCity\",\n      \"months\",\n      \"original\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"selectDate\",\n    \"return\": \"Promise\"\n  },\n  \"flight.selectRoundDate\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"selectRoundDate\",\n    \"return\": \"Promise\"\n  },\n  \"train.gotoOrderDetail\": {\n    \"params\": [\n      \"url\",\n      \"orderListUrl\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"gotoOrderDetail\",\n    \"return\": \"Undefined\"\n  },\n  \"train.gotoOrderList\": {\n    \"params\": [\n      \"url\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"gotoOrderList\",\n    \"return\": \"Undefined\"\n  },\n  \"train.multiSelect\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"multiSelect\",\n    \"return\": \"Promise\"\n  },\n  \"train.ringtone\": {\n    \"params\": [\n      \"loop\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"ringtone\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectDateRush\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectDateRush\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectDateStudent\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectDateStudent\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectDate\": {\n    \"params\": [\n      \"date\",\n      \"days\",\n      \"tips\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectDate\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectStation\": {\n    \"params\": [\n      \"stationCode\",\n      \"stationType\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectStation\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectTrains\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectTrains\",\n    \"return\": \"Promise\"\n  },\n  \"train.timeRange\": {\n    \"params\": [\n      \"start\",\n      \"end\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"timeRange\",\n    \"return\": \"Promise\"\n  },\n  \"train.timeTable\": {\n    \"params\": [\n      \"stations\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"timeTable\",\n    \"return\": \"Undefined\"\n  },\n  \"train.vibrate\": {\n    \"params\": [\n      \"duration\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"vibrate\",\n    \"return\": \"Promise\"\n  },\n  \"inject.addStopUrl\": {\n    \"params\": [\n      \"name\",\n      \"pattern\",\n      \"script\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"addStopUrl\",\n    \"return\": \"Promise\"\n  },\n  \"inject.callback\": {\n    \"params\": [\n      \"fnName\",\n      \"data\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"callback\",\n    \"return\": \"Undefined\"\n  },\n  \"inject.close\": {\n    \"params\": [\n      \"name\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"close\",\n    \"return\": \"Promise\"\n  },\n  \"inject.loadHTML\": {\n    \"params\": [\n      \"name\",\n      \"url\",\n      \"html\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"loadHTML\",\n    \"return\": \"Promise\"\n  },\n  \"inject.load\": {\n    \"params\": [\n      \"name\",\n      \"url\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"load\",\n    \"return\": \"Promise\"\n  },\n  \"inject.runScript\": {\n    \"params\": [\n      \"name\",\n      \"script\",\n      \"param\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"runScript\",\n    \"return\": \"Promise\"\n  },\n  \"inject.show\": {\n    \"params\": [\n      \"name\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"show\",\n    \"return\": \"Promise\"\n  },\n  \"travel.getPosDeviceId\": {\n    \"params\": [],\n    \"memberof\": \"travel\",\n    \"name\": \"getPosDeviceId\",\n    \"return\": \"Promise\"\n  },\n  \"travel.print\": {\n    \"params\": [\n      \"content\"\n    ],\n    \"memberof\": \"travel\",\n    \"name\": \"print\",\n    \"return\": \"Promise\"\n  },\n  \"travel.check_printer_state\": {\n    \"params\": [],\n    \"memberof\": \"travel\",\n    \"name\": \"check_printer_state\",\n    \"return\": \"Promise\"\n  },\n  \"travel.selectCity\": {\n    \"params\": [\n      \"city\"\n    ],\n    \"memberof\": \"travel\",\n    \"name\": \"selectCity\",\n    \"return\": \"Promise\"\n  },\n  \"travel.setGdata\": {\n    \"params\": [\n      \"bigG\"\n    ],\n    \"memberof\": \"travel\",\n    \"name\": \"setGdata\",\n    \"return\": \"Promise\"\n  },\n  \"env.getPageEnv\": {\n    \"params\": [],\n    \"memberof\": \"env\",\n    \"name\": \"getPageEnv\",\n    \"return\": \"Promise\"\n  },\n  \"share.activeNavButton\": {\n    \"params\": [\n      \"channel\",\n      \"conf\"\n    ],\n    \"memberof\": \"share\",\n    \"name\": \"activeNavButton\",\n    \"return\": \"Undefined\"\n  },\n  \"share.callLocal\": {\n    \"params\": [\n      \"channel\",\n      \"conf\"\n    ],\n    \"memberof\": \"share\",\n    \"name\": \"callLocal\",\n    \"return\": \"Undefined\"\n  },\n  \"share.disableNavButton\": {\n    \"params\": [],\n    \"memberof\": \"share\",\n    \"name\": \"disableNavButton\",\n    \"return\": \"Undefined\"\n  }\n};",
                      _cachedSize: 11491,
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
                "/* 185 */",
                ",\n",
                "/* 186 */",
                ",\n",
                "/* 187 */",
                ",\n",
                "/* 188 */",
                ",\n",
                "/* 189 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:account:getUser');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取用户登录信息\n *\n * 用户已登录时 resolve，用户未登录 reject\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof account\n * @static\n * @name getUser\n * @return {Promise<user | err>}\n * @example\n *  hbnb.account.getUser()\n *      .then(function(user) {\n *          user = {\n *              userId: 1234567,\n *              userName: 'name is string',\n *              userToken: 'token is string'\n *          }\n *      })\n *      .catch(function(err) {\n *          err = {\n *              message: \"用户未登录美团\",\n *              status: -1\n *          }\n *      });\n */\n\nmodule.exports = function(cb, eb) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'get_user', {\n            callback: function(user) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('user is %j', user, user);\n                }\n                resolve(user);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/account/get-user.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            903,
                            939,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:account:getUser');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取用户登录信息\n *\n * 用户已登录时 resolve，用户未登录 reject\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof account\n * @static\n * @name getUser\n * @return {Promise<user | err>}\n * @example\n *  hbnb.account.getUser()\n *      .then(function(user) {\n *          user = {\n *              userId: 1234567,\n *              userName: 'name is string',\n *              userToken: 'token is string'\n *          }\n *      })\n *      .catch(function(err) {\n *          err = {\n *              message: \"用户未登录美团\",\n *              status: -1\n *          }\n *      });\n */\n\nmodule.exports = function(cb, eb) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'get_user', {\n            callback: function(user) {\n                if (false) {\n                    debug('user is %j', user, user);\n                }\n                resolve(user);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1053,
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
                "/* 190 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name account\n */\n\nexports.login = require('./login.js');\nexports.getUser = require('./get-user.js');\nexports.mobileLogin = require('./mobile-login.js');\nexports.sendMobileLoginCode = require('./send-mobile-login-code.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/account/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            214,
                            242,
                            "193",
                            7,
                          ],
                          [
                            206,
                            212,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            154,
                            172,
                            "192",
                            5,
                          ],
                          [
                            146,
                            152,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            106,
                            120,
                            "189",
                            3,
                          ],
                          [
                            98,
                            104,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            65,
                            76,
                            "191",
                            1,
                          ],
                          [
                            57,
                            63,
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
                      _cachedSource: "\n\n/**\n * @name account\n */\n\nexports.login = __webpack_require__(191);\nexports.getUser = __webpack_require__(189);\nexports.mobileLogin = __webpack_require__(192);\nexports.sendMobileLoginCode = __webpack_require__(193);\n",
                      _cachedSize: 218,
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
                "/* 191 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:account:login');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 打开客户端登录界面\n *\n * 1. 客户端不会判断是否已经登录。\n * 需要业务方自己调用 `hbnb.account.getUser` 判断是否已经登录。\n * 2. 用户没有登录直接返回时，客户端不会给出通知。\n * 需要业务方自己监听 `HBNB:pageshow` 事件。\n *\n * 支持版本\n * + iHotel/5.8\n *\n * @memberof account\n * @static\n * @name login\n * @returns {Promise<user>} resolve if login success\n * @example\n *  hbnb.account.login()\n *      .then(function(user) {\n *          user = {\n *              userId: 1234567,\n *              userName: 'name is string',\n *              userToken: 'token is string'\n *          }\n *      })\n */\n\nmodule.exports = function() {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'login', {\n            callback: function(user) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('success, user is %j', user, user);\n                }\n                resolve(user);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/account/login.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            866,
                            902,
                            "false",
                            4,
                          ],
                          [
                            155,
                            165,
                            "124",
                            2,
                          ],
                          [
                            147,
                            153,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:account:login');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开客户端登录界面\n *\n * 1. 客户端不会判断是否已经登录。\n * 需要业务方自己调用 `hbnb.account.getUser` 判断是否已经登录。\n * 2. 用户没有登录直接返回时，客户端不会给出通知。\n * 需要业务方自己监听 `HBNB:pageshow` 事件。\n *\n * 支持版本\n * + iHotel/5.8\n *\n * @memberof account\n * @static\n * @name login\n * @returns {Promise<user>} resolve if login success\n * @example\n *  hbnb.account.login()\n *      .then(function(user) {\n *          user = {\n *              userId: 1234567,\n *              userName: 'name is string',\n *              userToken: 'token is string'\n *          }\n *      })\n */\n\nmodule.exports = function() {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'login', {\n            callback: function(user) {\n                if (false) {\n                    debug('success, user is %j', user, user);\n                }\n                resolve(user);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1025,
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
                "/* 192 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:account:mobileLogin');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 打开客户端登录界面\n *\n * 客户端不会判断是否已经登录。\n * 需要业务方自己调用 `hbnb.account.getUser` 判断是否已经登录。\n *\n * 支持版本\n * + iHotel/6.2\n *\n * @memberof account\n * @static\n * @name mobileLogin\n * @param mobile\n * @param code\n * @returns {Promise<user>} resolve if login success\n * @example\n *  hbnb.account.mobileLogin(19988887777, 123456)\n *      .then(function(user) {\n *          user = {\n *              userId: 1234567,\n *              userName: 'name is string',\n *              userToken: 'token is string'\n *          }\n *      })\n *      .catch(function(err) {\n *      })\n */\n\nmodule.exports = function(mobile, code) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'mobile_login', {\n            mobile: mobile,\n            code: code,\n            callback: function(user) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('success, user is %j', user, user);\n                }\n                resolve(user);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/account/mobile-login.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            983,
                            1019,
                            "false",
                            4,
                          ],
                          [
                            161,
                            171,
                            "124",
                            2,
                          ],
                          [
                            153,
                            159,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:account:mobileLogin');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开客户端登录界面\n *\n * 客户端不会判断是否已经登录。\n * 需要业务方自己调用 `hbnb.account.getUser` 判断是否已经登录。\n *\n * 支持版本\n * + iHotel/6.2\n *\n * @memberof account\n * @static\n * @name mobileLogin\n * @param mobile\n * @param code\n * @returns {Promise<user>} resolve if login success\n * @example\n *  hbnb.account.mobileLogin(19988887777, 123456)\n *      .then(function(user) {\n *          user = {\n *              userId: 1234567,\n *              userName: 'name is string',\n *              userToken: 'token is string'\n *          }\n *      })\n *      .catch(function(err) {\n *      })\n */\n\nmodule.exports = function(mobile, code) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'mobile_login', {\n            mobile: mobile,\n            code: code,\n            callback: function(user) {\n                if (false) {\n                    debug('success, user is %j', user, user);\n                }\n                resolve(user);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1142,
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
                "/* 193 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:account:sendMobileLoginCode');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n\n *\n * 支持版本\n * + iHotel/6.2\n *\n * @memberof account\n * @static\n * @name sendMobileLoginCode\n * @param {String} mobile 手机号\n * @returns {Promise<user>} resolve if login success\n * @example\n *  hbnb.account.sendMobileLoginCode('19988887777')\n *      .then(function() {\n *      })\n *      .catch(function() {\n *      })\n */\n\nmodule.exports = function(mobile) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'send_mobile_login_code', {\n            mobile: mobile,\n            callback: function() {\n                resolve();\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/account/send-mobile-login-code.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            169,
                            179,
                            "124",
                            2,
                          ],
                          [
                            161,
                            167,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:account:sendMobileLoginCode');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n\n *\n * 支持版本\n * + iHotel/6.2\n *\n * @memberof account\n * @static\n * @name sendMobileLoginCode\n * @param {String} mobile 手机号\n * @returns {Promise<user>} resolve if login success\n * @example\n *  hbnb.account.sendMobileLoginCode('19988887777')\n *      .then(function() {\n *      })\n *      .catch(function() {\n *      })\n */\n\nmodule.exports = function(mobile) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'send_mobile_login_code', {\n            mobile: mobile,\n            callback: function() {\n                resolve();\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 778,
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
                "/* 194 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:core:HBNBVersion');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取桥协议版本\n *\n * 支持版本\n * + iHotel/6.1+\n * + HBNB/?\n *\n * @memberof core\n * @static\n * @name HBNBVersion\n * @return {Promise<version>}\n * @example\n *  hbnb.core.HBNBVersion()\n *      .then(function(version) {\n *      });\n */\n\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('called');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('core', 'hbnb_version', {\n            callback: function(version) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('version is %j', version);\n                }\n                if (version && version.version) {\n                    resolve(version.version);\n                } else {\n                    reject();\n                }\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/core/hbnb_version.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            669,
                            705,
                            "false",
                            5,
                          ],
                          [
                            440,
                            476,
                            "false",
                            4,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:core:HBNBVersion');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取桥协议版本\n *\n * 支持版本\n * + iHotel/6.1+\n * + HBNB/?\n *\n * @memberof core\n * @static\n * @name HBNBVersion\n * @return {Promise<version>}\n * @example\n *  hbnb.core.HBNBVersion()\n *      .then(function(version) {\n *      });\n */\n\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('core', 'hbnb_version', {\n            callback: function(version) {\n                if (false) {\n                    debug('version is %j', version);\n                }\n                if (version && version.version) {\n                    resolve(version.version);\n                } else {\n                    reject();\n                }\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 896,
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
                "/* 195 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name core\n */\n\nexports.HBNBVersion = require('./hbnb_version.js');\nexports.supportApis = require('./support_apis.js');\nexports.OSVersion = require('./os_version.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/core/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            170,
                            186,
                            "196",
                            5,
                          ],
                          [
                            162,
                            168,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            120,
                            138,
                            "197",
                            3,
                          ],
                          [
                            112,
                            118,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            68,
                            86,
                            "194",
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
                      _cachedSource: "\n\n/**\n * @name core\n */\n\nexports.HBNBVersion = __webpack_require__(194);\nexports.supportApis = __webpack_require__(197);\nexports.OSVersion = __webpack_require__(196);\n",
                      _cachedSize: 167,
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
                "/* 196 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:core:OSVersion');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取桥协议版本\n *\n * 支持版本\n * + iHotel/6.1+\n * + HBNB/?\n *\n * @memberof core\n * @static\n * @name OS\n * @return {Promise<version>}\n * @example\n *  hbnb.core.OSVersion()\n *      .then(function(version) {\n *          version = {\n *              os: 'ios',\n *              version: '9.0'\n *          }\n *      });\n */\n\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('called');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('core', 'os_version', {\n            callback: function(version) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('version is %j', version);\n                }\n                resolve(version);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/core/os_version.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            750,
                            786,
                            "false",
                            5,
                          ],
                          [
                            523,
                            559,
                            "false",
                            4,
                          ],
                          [
                            156,
                            166,
                            "124",
                            2,
                          ],
                          [
                            148,
                            154,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:core:OSVersion');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取桥协议版本\n *\n * 支持版本\n * + iHotel/6.1+\n * + HBNB/?\n *\n * @memberof core\n * @static\n * @name OS\n * @return {Promise<version>}\n * @example\n *  hbnb.core.OSVersion()\n *      .then(function(version) {\n *          version = {\n *              os: 'ios',\n *              version: '9.0'\n *          }\n *      });\n */\n\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('core', 'os_version', {\n            callback: function(version) {\n                if (false) {\n                    debug('version is %j', version);\n                }\n                resolve(version);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 842,
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
                "/* 197 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:core:supportApis');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取桥协议版本\n *\n * 支持版本\n * + iHotel/6.1+\n * + HBNB/?\n *\n * @memberof core\n * @static\n * @name supportApis\n * @return {Promise<Array>}\n * @example\n *  hbnb.core.supportApis([\n *      'magpie://ui/alert',\n *      'magpie://what/the_f**k'\n *  ])\n *      .then(function(status) {\n *          status = [\n *              true,\n *              false\n *          ]\n *      });\n */\n\nmodule.exports = function(apis) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('apis is %j', apis);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('core', 'support_apis', {\n            callback: function(status) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('status is %j', status);\n                }\n                resolve(status);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/core/support_apis.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            829,
                            865,
                            "false",
                            5,
                          ],
                          [
                            591,
                            627,
                            "false",
                            4,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:core:supportApis');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取桥协议版本\n *\n * 支持版本\n * + iHotel/6.1+\n * + HBNB/?\n *\n * @memberof core\n * @static\n * @name supportApis\n * @return {Promise<Array>}\n * @example\n *  hbnb.core.supportApis([\n *      'magpie://ui/alert',\n *      'magpie://what/the_f**k'\n *  ])\n *      .then(function(status) {\n *          status = [\n *              true,\n *              false\n *          ]\n *      });\n */\n\nmodule.exports = function(apis) {\n    if (false) {\n        debug('apis is %j', apis);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('core', 'support_apis', {\n            callback: function(status) {\n                if (false) {\n                    debug('status is %j', status);\n                }\n                resolve(status);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 918,
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
                "/* 198 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:env:getPageEnv');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取当前页面变量\n *\n * 支持版本\n * + iHotel/6.3\n *\n * @memberof env\n * @static\n * @name getPageEnv\n * @return {Promise<version>}\n * @example\n *  hbnb.env.getPageEnv()\n *      .then(function(env) {\n *      });\n */\n\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('called');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('env', 'get_page_env', {\n            callback: function(env) {\n                resolve(env);\n            },\n            errback: function(err) {\n                reject(err);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/env/get-page-env.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            418,
                            454,
                            "false",
                            4,
                          ],
                          [
                            156,
                            166,
                            "124",
                            2,
                          ],
                          [
                            148,
                            154,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:env:getPageEnv');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取当前页面变量\n *\n * 支持版本\n * + iHotel/6.3\n *\n * @memberof env\n * @static\n * @name getPageEnv\n * @return {Promise<version>}\n * @example\n *  hbnb.env.getPageEnv()\n *      .then(function(env) {\n *      });\n */\n\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('env', 'get_page_env', {\n            callback: function(env) {\n                resolve(env);\n            },\n            errback: function(err) {\n                reject(err);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 711,
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
                "/* 199 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name env\n */\n\nexports.getPageEnv = require('./get-page-env.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/env/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            66,
                            84,
                            "198",
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
                      _cachedSource: "\n\n/**\n * @name env\n */\n\nexports.getPageEnv = __webpack_require__(198);\n",
                      _cachedSize: 71,
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
                "/* 200 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:flight:getExpress');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取邮寄地址\n *\n * @memberof flight\n * @static\n * @name getExpress\n * @param {siteId} siteId,\n * @param {int} id 默认为 '',\n * @return {Promise}\n * @example\n hbnb.flight.getExpress(1, '').then(function(data) {\n     data = {\n         id: 'id is number',\n         name: 'name is string',\n         mobile: 'mobile is string',\n         province: 'province is string',\n         city: 'city is string',\n         district: 'district is string',\n         address: 'address is string',\n         postCode: 'postCode is string',\n         expressAmount: 'expressAmount is string'\n     }\n });\n */\nmodule.exports = function(siteId, id) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'get_express', {\n            siteId: siteId,\n            id: id,\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/flight/get-express.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            159,
                            169,
                            "124",
                            2,
                          ],
                          [
                            151,
                            157,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:getExpress');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取邮寄地址\n *\n * @memberof flight\n * @static\n * @name getExpress\n * @param {siteId} siteId,\n * @param {int} id 默认为 '',\n * @return {Promise}\n * @example\n hbnb.flight.getExpress(1, '').then(function(data) {\n     data = {\n         id: 'id is number',\n         name: 'name is string',\n         mobile: 'mobile is string',\n         province: 'province is string',\n         city: 'city is string',\n         district: 'district is string',\n         address: 'address is string',\n         postCode: 'postCode is string',\n         expressAmount: 'expressAmount is string'\n     }\n });\n */\nmodule.exports = function(siteId, id) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'get_express', {\n            siteId: siteId,\n            id: id,\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1019,
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
                "/* 201 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:flight:getFilter');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 机票筛选\n *\n * TODO：补全参数\n *\n * @memberof flight\n * @static\n * @name getFilter\n * @param {Object} opts\n * @return {Promise}\n * @example\n *  hbnb.flight.getFilters([\n *  ]).then(function(data) {\n *  });\n */\nmodule.exports = function(opts) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('opts is %j', opts);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'get_filter', {\n            options: opts,\n            callback: function(data) {\n                resolve(data);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/flight/get-filter.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            423,
                            459,
                            "false",
                            4,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:getFilter');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 机票筛选\n *\n * TODO：补全参数\n *\n * @memberof flight\n * @static\n * @name getFilter\n * @param {Object} opts\n * @return {Promise}\n * @example\n *  hbnb.flight.getFilters([\n *  ]).then(function(data) {\n *  });\n */\nmodule.exports = function(opts) {\n    if (false) {\n        debug('opts is %j', opts);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'get_filter', {\n            options: opts,\n            callback: function(data) {\n                resolve(data);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 675,
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
                "/* 202 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:flight:getLinkman');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取联系人\n *\n * @memberof flight\n * @static\n * @name getLinkman\n * @param {int} id 默认为 '', \n * @return {Promise}\n * @example\n * hbnb.flight.getLinkman('').then(function(data) {\n *     data = {\n           id: 'id is number',\n *         name: 'name is string',\n *         mobile: 'mobile is string',\n *         email: 'mobile is string',\n *     }\n * });\n */\nmodule.exports = function(id) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'get_linkman', {\n            id: id,\n            is_international: is_international,\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/flight/get-linkman.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            159,
                            169,
                            "124",
                            2,
                          ],
                          [
                            151,
                            157,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:getLinkman');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取联系人\n *\n * @memberof flight\n * @static\n * @name getLinkman\n * @param {int} id 默认为 '', \n * @return {Promise}\n * @example\n * hbnb.flight.getLinkman('').then(function(data) {\n *     data = {\n           id: 'id is number',\n *         name: 'name is string',\n *         mobile: 'mobile is string',\n *         email: 'mobile is string',\n *     }\n * });\n */\nmodule.exports = function(id) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'get_linkman', {\n            id: id,\n            is_international: is_international,\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n\n",
                      _cachedSize: 809,
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
                "/* 203 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:flight:gotoAppHomepage');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 返回 app 首页\n *\n * @memberof flight\n * @static\n * @name gotoAppHomepage\n * @return {Undefined}\n * @example\n *  hbnb.flight.gotoAppHomepage();\n */\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('called');\n    }\n\n    _invoke('flight', 'goto_app_homepage');\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/flight/goto-app-homepage.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            367,
                            403,
                            "false",
                            4,
                          ],
                          [
                            164,
                            174,
                            "124",
                            2,
                          ],
                          [
                            156,
                            162,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:gotoAppHomepage');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 返回 app 首页\n *\n * @memberof flight\n * @static\n * @name gotoAppHomepage\n * @return {Undefined}\n * @example\n *  hbnb.flight.gotoAppHomepage();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    _invoke('flight', 'goto_app_homepage');\n};\n",
                      _cachedSize: 414,
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
                "/* 204 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:flight:gotoOrderDetail');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 进入机票订单详情页面\n *\n * 点击后退时会返回订单列表页面，再后退会返回我的页面\n *\n * @memberof flight\n * @static\n * @name gotoOrderDetail\n * @param {String} url 订单页面地址\n * @param {String} orderListUrl 订单列表页面地址\n * @return {Undefined}\n * @example\n *  hbnb.flight.gotoOrderDetail(\n *      'url'\n *      'orderListUrl'\n *  );\n */\nmodule.exports = function(url, orderListUrl) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('url is %s', url);\n        debug('orderListUrl is %s', orderListUrl);\n    }\n\n    _invoke('flight', 'goto_order_detail', {\n        url: url,\n        orderListUrl: orderListUrl\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/flight/goto-order-detail.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            530,
                            566,
                            "false",
                            4,
                          ],
                          [
                            164,
                            174,
                            "124",
                            2,
                          ],
                          [
                            156,
                            162,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:gotoOrderDetail');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 进入机票订单详情页面\n *\n * 点击后退时会返回订单列表页面，再后退会返回我的页面\n *\n * @memberof flight\n * @static\n * @name gotoOrderDetail\n * @param {String} url 订单页面地址\n * @param {String} orderListUrl 订单列表页面地址\n * @return {Undefined}\n * @example\n *  hbnb.flight.gotoOrderDetail(\n *      'url'\n *      'orderListUrl'\n *  );\n */\nmodule.exports = function(url, orderListUrl) {\n    if (false) {\n        debug('url is %s', url);\n        debug('orderListUrl is %s', orderListUrl);\n    }\n\n    _invoke('flight', 'goto_order_detail', {\n        url: url,\n        orderListUrl: orderListUrl\n    });\n};\n",
                      _cachedSize: 698,
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
                "/* 205 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name flight\n */\n\nexports.gotoAppHomepage = require('./goto-app-homepage.js');\n\n//exports.getUser = require('./get-user.js');\n//exports.login = require('./login.js');\n\nexports.getFilter = require('./get-filter.js');\nexports.getLinkman = require('./get-linkman.js');\nexports.getExpress = require('./get-express.js');\nexports.selectCity = require('./select-city.js');\nexports.selectDate = require('./select-date.js');\nexports.selectRoundDate = require('./select-round-date.js');\n\n//exports.alipay = require('./alipay.js');\n\nexports.gotoOrderDetail = require('./goto-order-detail.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/flight/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            578,
                            601,
                            "204",
                            15,
                          ],
                          [
                            570,
                            576,
                            "__webpack_require__",
                            16,
                          ],
                          [
                            472,
                            495,
                            "208",
                            13,
                          ],
                          [
                            464,
                            470,
                            "__webpack_require__",
                            14,
                          ],
                          [
                            417,
                            434,
                            "207",
                            11,
                          ],
                          [
                            409,
                            415,
                            "__webpack_require__",
                            12,
                          ],
                          [
                            367,
                            384,
                            "206",
                            9,
                          ],
                          [
                            359,
                            365,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            317,
                            334,
                            "200",
                            7,
                          ],
                          [
                            309,
                            315,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            267,
                            284,
                            "202",
                            5,
                          ],
                          [
                            259,
                            265,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            218,
                            234,
                            "201",
                            3,
                          ],
                          [
                            210,
                            216,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            74,
                            97,
                            "203",
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
                      _cachedSource: "\n\n/**\n * @name flight\n */\n\nexports.gotoAppHomepage = __webpack_require__(203);\n\n//exports.getUser = require('./get-user.js');\n//exports.login = require('./login.js');\n\nexports.getFilter = __webpack_require__(201);\nexports.getLinkman = __webpack_require__(202);\nexports.getExpress = __webpack_require__(200);\nexports.selectCity = __webpack_require__(206);\nexports.selectDate = __webpack_require__(207);\nexports.selectRoundDate = __webpack_require__(208);\n\n//exports.alipay = require('./alipay.js');\n\nexports.gotoOrderDetail = __webpack_require__(204);\n",
                      _cachedSize: 551,
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
                "/* 206 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:flight:selectCity');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选择城市\n *\n * @memberof flight\n * @static\n * @name selectCity\n * @param {String} city\n * @return {Promise}\n * @example\n *  hbnb.flight.selectCity('city')\n *      .then(function(city) {\n *          city = {\n *              cityName: '',\n *              cityPinyin: ''\n *          }\n *      });\n */\nmodule.exports = function(city) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('city is %s', city);\n    }\n    city = city || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'select_city', {\n            original: city,\n            callback: function(city) {\n                resolve(city);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/flight/select-city.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            517,
                            553,
                            "false",
                            4,
                          ],
                          [
                            159,
                            169,
                            "124",
                            2,
                          ],
                          [
                            151,
                            157,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:selectCity');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择城市\n *\n * @memberof flight\n * @static\n * @name selectCity\n * @param {String} city\n * @return {Promise}\n * @example\n *  hbnb.flight.selectCity('city')\n *      .then(function(city) {\n *          city = {\n *              cityName: '',\n *              cityPinyin: ''\n *          }\n *      });\n */\nmodule.exports = function(city) {\n    if (false) {\n        debug('city is %s', city);\n    }\n    city = city || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'select_city', {\n            original: city,\n            callback: function(city) {\n                resolve(city);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 794,
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
                "/* 207 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:flight:selectDate');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选择日期\n *\n * @memberof flight\n * @static\n * @name selectDate\n * @param {String} fromCity\n * @param {String} toCity\n * @param {String} months\n * @param {String} original\n * @return {Promise}\n * @example\n *  hbnb.flight.selectDate(\n *      fromCity,\n *      toCity,\n *      months,\n *      original\n *  ).then(function(data) {\n *      console.log(data);\n *  });\n */\nmodule.exports = function(fromCity, toCity, months, original) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('original is %s', original);\n        debug('from city %s', fromCity);\n        debug('to city %s', toCity);\n        debug('mounths is %s', months);\n    }\n    original = original || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'select_date', {\n            original: original,\n            months: months,\n            fromCity: fromCity,\n            toCity: toCity,\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/flight/select-date.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            615,
                            651,
                            "false",
                            4,
                          ],
                          [
                            159,
                            169,
                            "124",
                            2,
                          ],
                          [
                            151,
                            157,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:selectDate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择日期\n *\n * @memberof flight\n * @static\n * @name selectDate\n * @param {String} fromCity\n * @param {String} toCity\n * @param {String} months\n * @param {String} original\n * @return {Promise}\n * @example\n *  hbnb.flight.selectDate(\n *      fromCity,\n *      toCity,\n *      months,\n *      original\n *  ).then(function(data) {\n *      console.log(data);\n *  });\n */\nmodule.exports = function(fromCity, toCity, months, original) {\n    if (false) {\n        debug('original is %s', original);\n        debug('from city %s', fromCity);\n        debug('to city %s', toCity);\n        debug('mounths is %s', months);\n    }\n    original = original || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'select_date', {\n            original: original,\n            months: months,\n            fromCity: fromCity,\n            toCity: toCity,\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1118,
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
                "/* 208 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:flight:selectRoundDate');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选择日期\n *\n * @memberof flight\n * @static\n * @name selectRoundDate\n * @return {Promise}\n * @example\n *  hbnb.flight.selectRoundDate().then(function(data) {\n *      console.log(data);\n *  });\n */\nmodule.exports = function() {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'select_roundDate', {\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/flight/select-round-date.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            164,
                            174,
                            "124",
                            2,
                          ],
                          [
                            156,
                            162,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:selectRoundDate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择日期\n *\n * @memberof flight\n * @static\n * @name selectRoundDate\n * @return {Promise}\n * @example\n *  hbnb.flight.selectRoundDate().then(function(data) {\n *      console.log(data);\n *  });\n */\nmodule.exports = function() {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'select_roundDate', {\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n",
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
                "/* 209 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nexports = module.exports = function() {\n    return exports;\n};\n\nif (process.env.NODE_ENV !== 'production') {\n    exports._debug = require('debug');\n    // _debug.enable('hbnb:invoke:*');\n}\n\n// invoke\nexports._invoke = require('./invoke/index.js');\n\n// hbnb\nexports.core = require('./core/index.js');\n\n// basic\nexports.account = require('./account/index.js');\nexports.log = require('./log/index.js');\nexports.network = require('./network/index.js');\nexports.pay = require('./pay/index.js');\nexports.position = require('./position/index.js');\nexports.storage = require('./storage/index.js');\nexports.thirdApps = require('./thirdApps/index.js');\nexports.ui = require('./ui/index.js');\nexports.webview = require('./webview/index.js');\n\n// tower\nexports.tower = require('./tower/index.js');\n\n//flight\nexports.flight = require('./flight/index.js');\n\n//train\nexports.train = require('./train/index.js');\nexports.inject = require('./inject/index.js');\n\n//lvyou\nwindow.Bridge = require('./legency-lvyou/index.js');\nexports.travel = require('./travel/index.js');\n\n//env\nexports.env = require('./env/index.js');\n\n//share\nexports.share = require('./share/index.js');\n\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1149,
                            1166,
                            "237",
                            38,
                          ],
                          [
                            1141,
                            1147,
                            "__webpack_require__",
                            39,
                          ],
                          [
                            1097,
                            1112,
                            "199",
                            36,
                          ],
                          [
                            1089,
                            1095,
                            "__webpack_require__",
                            37,
                          ],
                          [
                            1046,
                            1064,
                            "267",
                            34,
                          ],
                          [
                            1038,
                            1044,
                            "__webpack_require__",
                            35,
                          ],
                          [
                            992,
                            1017,
                            "222",
                            32,
                          ],
                          [
                            984,
                            990,
                            "__webpack_require__",
                            33,
                          ],
                          [
                            937,
                            955,
                            "213",
                            30,
                          ],
                          [
                            929,
                            935,
                            "__webpack_require__",
                            31,
                          ],
                          [
                            891,
                            908,
                            "253",
                            28,
                          ],
                          [
                            883,
                            889,
                            "__webpack_require__",
                            29,
                          ],
                          [
                            836,
                            854,
                            "205",
                            26,
                          ],
                          [
                            828,
                            834,
                            "__webpack_require__",
                            27,
                          ],
                          [
                            780,
                            797,
                            "248",
                            24,
                          ],
                          [
                            772,
                            778,
                            "__webpack_require__",
                            25,
                          ],
                          [
                            723,
                            742,
                            "284",
                            22,
                          ],
                          [
                            715,
                            721,
                            "__webpack_require__",
                            23,
                          ],
                          [
                            679,
                            693,
                            "273",
                            20,
                          ],
                          [
                            671,
                            677,
                            "__webpack_require__",
                            21,
                          ],
                          [
                            633,
                            654,
                            "243",
                            18,
                          ],
                          [
                            625,
                            631,
                            "__webpack_require__",
                            19,
                          ],
                          [
                            582,
                            601,
                            "239",
                            16,
                          ],
                          [
                            574,
                            580,
                            "__webpack_require__",
                            17,
                          ],
                          [
                            532,
                            552,
                            "233",
                            14,
                          ],
                          [
                            524,
                            530,
                            "__webpack_require__",
                            15,
                          ],
                          [
                            486,
                            501,
                            "230",
                            12,
                          ],
                          [
                            478,
                            484,
                            "__webpack_require__",
                            13,
                          ],
                          [
                            441,
                            460,
                            "226",
                            10,
                          ],
                          [
                            433,
                            439,
                            "__webpack_require__",
                            11,
                          ],
                          [
                            396,
                            411,
                            "224",
                            8,
                          ],
                          [
                            388,
                            394,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            351,
                            370,
                            "190",
                            6,
                          ],
                          [
                            343,
                            349,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            295,
                            311,
                            "195",
                            4,
                          ],
                          [
                            287,
                            293,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            241,
                            259,
                            "124",
                            2,
                          ],
                          [
                            233,
                            239,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            83,
                            119,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nexports = module.exports = function() {\n    return exports;\n};\n\nif (false) {\n    exports._debug = require('debug');\n    // _debug.enable('hbnb:invoke:*');\n}\n\n// invoke\nexports._invoke = __webpack_require__(124);\n\n// hbnb\nexports.core = __webpack_require__(195);\n\n// basic\nexports.account = __webpack_require__(190);\nexports.log = __webpack_require__(224);\nexports.network = __webpack_require__(226);\nexports.pay = __webpack_require__(230);\nexports.position = __webpack_require__(233);\nexports.storage = __webpack_require__(239);\nexports.thirdApps = __webpack_require__(243);\nexports.ui = __webpack_require__(273);\nexports.webview = __webpack_require__(284);\n\n// tower\nexports.tower = __webpack_require__(248);\n\n//flight\nexports.flight = __webpack_require__(205);\n\n//train\nexports.train = __webpack_require__(253);\nexports.inject = __webpack_require__(213);\n\n//lvyou\nwindow.Bridge = __webpack_require__(222);\nexports.travel = __webpack_require__(267);\n\n//env\nexports.env = __webpack_require__(199);\n\n//share\nexports.share = __webpack_require__(237);\n\n",
                      _cachedSize: 1052,
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
                "/* 210 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:inject:addStopUrl');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 匹配隐藏 webview 页面的 url\n *\n * 符合时，停止页面加载并执行脚本\n * 只匹配一次？\n *\n * TODO: 支持版本\n *\n * 支持版本\n * + iHotel/5.9?\n *\n * @memberof inject\n * @static\n * @name addStopUrl\n * @param {String} name 隐藏 webview 名\n * @param {String} pattern 用于匹配 url 的正则\n * @param {String} script 匹配后执行的命令\n * @return {Promise}\n * @example\n *  hbnb.inject.addStopUrl('name', 'pattern', 'script')\n *      .then(function() {\n *          console.log('loaded');\n *      });\n */\nmodule.exports = function(name, pattern, script) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('name is %s', name);\n        debug('pattern is %s', pattern);\n        debug('script is %s', script);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'add_stop_url', {\n            name: name,\n            pattern: pattern,\n            script: script,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/inject/add-stop-url.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            671,
                            707,
                            "false",
                            4,
                          ],
                          [
                            159,
                            169,
                            "124",
                            2,
                          ],
                          [
                            151,
                            157,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:addStopUrl');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 匹配隐藏 webview 页面的 url\n *\n * 符合时，停止页面加载并执行脚本\n * 只匹配一次？\n *\n * TODO: 支持版本\n *\n * 支持版本\n * + iHotel/5.9?\n *\n * @memberof inject\n * @static\n * @name addStopUrl\n * @param {String} name 隐藏 webview 名\n * @param {String} pattern 用于匹配 url 的正则\n * @param {String} script 匹配后执行的命令\n * @return {Promise}\n * @example\n *  hbnb.inject.addStopUrl('name', 'pattern', 'script')\n *      .then(function() {\n *          console.log('loaded');\n *      });\n */\nmodule.exports = function(name, pattern, script) {\n    if (false) {\n        debug('name is %s', name);\n        debug('pattern is %s', pattern);\n        debug('script is %s', script);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'add_stop_url', {\n            name: name,\n            pattern: pattern,\n            script: script,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1052,
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
                "/* 211 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:inject:callback');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 隐藏 webview 中使用该方法返回数据\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name callback\n * @param {String} fnName 回调函数名\n * @param {String} data 返回的数据\n * @return {Undefined}\n * @example\n *  hbnb.inject.callback('funcName', 'data')\n */\nmodule.exports = function(fnName, data) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('fnName is %s', fnName);\n        debug('data is %s', data);\n    }\n\n    _invoke('inject', 'callback', {\n        callback: fnName,\n        param: data\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/inject/callback.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            477,
                            513,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:callback');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 隐藏 webview 中使用该方法返回数据\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name callback\n * @param {String} fnName 回调函数名\n * @param {String} data 返回的数据\n * @return {Undefined}\n * @example\n *  hbnb.inject.callback('funcName', 'data')\n */\nmodule.exports = function(fnName, data) {\n    if (false) {\n        debug('fnName is %s', fnName);\n        debug('data is %s', data);\n    }\n\n    _invoke('inject', 'callback', {\n        callback: fnName,\n        param: data\n    });\n};\n",
                      _cachedSize: 619,
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
                "/* 212 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:inject:close');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 关闭隐藏 webview\n *\n * 主要为了减小内存占用\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name close\n * @param {String} name 隐藏 webview 名\n * @return {Promise}\n * @example\n *  hbnb.inject.close('name')\n */\nmodule.exports = function(name) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('name is %s', name);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'close', {\n            name: name,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/inject/close.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            429,
                            465,
                            "false",
                            4,
                          ],
                          [
                            154,
                            164,
                            "124",
                            2,
                          ],
                          [
                            146,
                            152,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:close');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 关闭隐藏 webview\n *\n * 主要为了减小内存占用\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name close\n * @param {String} name 隐藏 webview 名\n * @return {Promise}\n * @example\n *  hbnb.inject.close('name')\n */\nmodule.exports = function(name) {\n    if (false) {\n        debug('name is %s', name);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'close', {\n            name: name,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 665,
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
                "/* 213 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name inject\n */\n\nexports.load = require('./load.js');\nexports.loadHTML = require('./load-html.js');\nexports.close = require('./close.js');\nexports.show = require('./show.js');\nexports.runScript = require('./run-script.js');\n\n\nexports.addStopUrl = require('./add-stop-url.js');\n\nexports.callback = require('./callback.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/inject/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            328,
                            342,
                            "211",
                            13,
                          ],
                          [
                            320,
                            326,
                            "__webpack_require__",
                            14,
                          ],
                          [
                            278,
                            296,
                            "210",
                            11,
                          ],
                          [
                            270,
                            276,
                            "__webpack_require__",
                            12,
                          ],
                          [
                            227,
                            243,
                            "216",
                            9,
                          ],
                          [
                            219,
                            225,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            185,
                            195,
                            "217",
                            7,
                          ],
                          [
                            177,
                            183,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            147,
                            158,
                            "212",
                            5,
                          ],
                          [
                            139,
                            145,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            104,
                            119,
                            "214",
                            3,
                          ],
                          [
                            96,
                            102,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            63,
                            73,
                            "215",
                            1,
                          ],
                          [
                            55,
                            61,
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
                      _cachedSource: "\n\n/**\n * @name inject\n */\n\nexports.load = __webpack_require__(215);\nexports.loadHTML = __webpack_require__(214);\nexports.close = __webpack_require__(212);\nexports.show = __webpack_require__(217);\nexports.runScript = __webpack_require__(216);\n\n\nexports.addStopUrl = __webpack_require__(210);\n\nexports.callback = __webpack_require__(211);\n",
                      _cachedSize: 337,
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
                "/* 214 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:inject:loadHTML');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 打开一个隐藏 webview\n *\n * 如果指定的 `name` 还不存在，会创建一个新的 webview。\n * 在指定的 webview 中加载给定的 `html` 片段\n * 在加载页面所有静态资源请求都完成时，Promise resolve。\n * 但是不保证页面已经可用，业务方可自己进行 domready 等检测。\n *\n * 支持版本\n * + iHotel/6.1+\n *\n * @memberof inject\n * @static\n * @name loadHTML\n * @param {String} name 隐藏 webview 名\n * @param {String} url 需要加载的页面地址\n * @param {String} html 需要加载的 html 片段\n * @return {Promise}\n * @example\n *  hbnb.inject.loadHTML(\n *      'name',\n *      'https://kyfw.12306.cn/otn/',\n *      '<!DOCTYPE html><html><head><meta charset=\"utf-8\" /></head><body></body></html>'\n *  ).then(function() {\n *      console.log('loaded');\n *  });\n */\nmodule.exports = function(name, url, html) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('name is %s', name);\n        debug('url is %s', url);\n        debug('html is %s', html);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'load_html', {\n            name: name,\n            baseUrl: url,\n            html: html,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/inject/load-html.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            854,
                            890,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:loadHTML');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开一个隐藏 webview\n *\n * 如果指定的 `name` 还不存在，会创建一个新的 webview。\n * 在指定的 webview 中加载给定的 `html` 片段\n * 在加载页面所有静态资源请求都完成时，Promise resolve。\n * 但是不保证页面已经可用，业务方可自己进行 domready 等检测。\n *\n * 支持版本\n * + iHotel/6.1+\n *\n * @memberof inject\n * @static\n * @name loadHTML\n * @param {String} name 隐藏 webview 名\n * @param {String} url 需要加载的页面地址\n * @param {String} html 需要加载的 html 片段\n * @return {Promise}\n * @example\n *  hbnb.inject.loadHTML(\n *      'name',\n *      'https://kyfw.12306.cn/otn/',\n *      '<!DOCTYPE html><html><head><meta charset=\"utf-8\" /></head><body></body></html>'\n *  ).then(function() {\n *      console.log('loaded');\n *  });\n */\nmodule.exports = function(name, url, html) {\n    if (false) {\n        debug('name is %s', name);\n        debug('url is %s', url);\n        debug('html is %s', html);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'load_html', {\n            name: name,\n            baseUrl: url,\n            html: html,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1212,
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
                "/* 215 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:inject:load');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 打开一个隐藏 webview\n *\n * 如果指定的 `name` 还不存在，会创建一个新的 webview。\n * 如果指定的 `name` 存在，会在该 webview 上加载新的 url。\n * 在加载页面所有静态资源请求都完成时，Promise resolve。\n * 但是不保证页面已经可用，业务方可自己进行 domready 等检测。\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name load\n * @param {String} name 隐藏 webview 名\n * @param {String} url 需要加载的页面地址\n * @return {Promise}\n * @example\n *  hbnb.inject.load(\n *      'name',\n *      'https://kyfw.12306.cn/otn/leftTicket/init'\n *  ).then(function() {\n *      console.log('loaded');\n *  });\n */\nmodule.exports = function(name, url) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('name is %s', name);\n        debug('url is %s', url);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'load', {\n            name: name,\n            url: url,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/inject/load.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            732,
                            768,
                            "false",
                            4,
                          ],
                          [
                            153,
                            163,
                            "124",
                            2,
                          ],
                          [
                            145,
                            151,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:load');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开一个隐藏 webview\n *\n * 如果指定的 `name` 还不存在，会创建一个新的 webview。\n * 如果指定的 `name` 存在，会在该 webview 上加载新的 url。\n * 在加载页面所有静态资源请求都完成时，Promise resolve。\n * 但是不保证页面已经可用，业务方可自己进行 domready 等检测。\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name load\n * @param {String} name 隐藏 webview 名\n * @param {String} url 需要加载的页面地址\n * @return {Promise}\n * @example\n *  hbnb.inject.load(\n *      'name',\n *      'https://kyfw.12306.cn/otn/leftTicket/init'\n *  ).then(function() {\n *      console.log('loaded');\n *  });\n */\nmodule.exports = function(name, url) {\n    if (false) {\n        debug('name is %s', name);\n        debug('url is %s', url);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'load', {\n            name: name,\n            url: url,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1022,
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
                "/* 216 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:inject:runScript');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 向隐藏 webview 注入脚本\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name runScript\n * @param {String} name 隐藏 webview 名\n * @param {String} script 注入的脚本，必须为可执行函数\n * @param {String} param script 的参数，即 `hbnb.inject.callback` 的 `funcName`\n * @return {Promise}\n * @example\n *  hbnb.inject.runScript(\n *      'name',\n *      'script',\n *      'param'\n *  ).then(function() {\n *      console.log('loaded');\n *  });\n */\nmodule.exports = function(name, script, param) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('name is %s', name);\n        debug('script is %s', script);\n        debug('param is %s', param);\n    }\n\n    script = script.toString();\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'run_script', {\n            name: name,\n            script: script,\n            param: param,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/inject/run-script.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            664,
                            700,
                            "false",
                            4,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:runScript');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 向隐藏 webview 注入脚本\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name runScript\n * @param {String} name 隐藏 webview 名\n * @param {String} script 注入的脚本，必须为可执行函数\n * @param {String} param script 的参数，即 `hbnb.inject.callback` 的 `funcName`\n * @return {Promise}\n * @example\n *  hbnb.inject.runScript(\n *      'name',\n *      'script',\n *      'param'\n *  ).then(function() {\n *      console.log('loaded');\n *  });\n */\nmodule.exports = function(name, script, param) {\n    if (false) {\n        debug('name is %s', name);\n        debug('script is %s', script);\n        debug('param is %s', param);\n    }\n\n    script = script.toString();\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'run_script', {\n            name: name,\n            script: script,\n            param: param,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n\n    return p;\n};\n",
                      _cachedSize: 1068,
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
                "/* 217 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:inject:show');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 将隐藏 webview 放到前台\n *\n * TODO: 验证下返回值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name show\n * @param {String} name 隐藏 webview 名\n * @return {Promise}\n * @example\n *  hbnb.inject.show('name');\n */\nmodule.exports = function(name) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('name is %s', name);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'show', {\n            name: name\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/inject/show.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            433,
                            469,
                            "false",
                            4,
                          ],
                          [
                            153,
                            163,
                            "124",
                            2,
                          ],
                          [
                            145,
                            151,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:show');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 将隐藏 webview 放到前台\n *\n * TODO: 验证下返回值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name show\n * @param {String} name 隐藏 webview 名\n * @return {Promise}\n * @example\n *  hbnb.inject.show('name');\n */\nmodule.exports = function(name) {\n    if (false) {\n        debug('name is %s', name);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'show', {\n            name: name\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 591,
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
                "/* 218 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * 1. 页面开启\n * 2. 页面隐藏\n * 3. 桥协议可用\n */\n\nvar debug;\nvar assert;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:invoke:event');\n    assert = require('assert');\n}\n\nvar env = require('./env.js');\n\n\nvar win = window;\nvar doc = document;\n\nvar dispatch = function(eventName) {\n    if (process.env.NODE_ENV !== 'production') {\n        assert(eventName);\n        debug('dispatch event \"%s\"', eventName);\n    }\n\n    var ev = doc.createEvent('Events');\n    ev.initEvent(eventName);\n    doc.dispatchEvent(ev);\n};\n\nvar addLifecycleEvent = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('add lifecycle event');\n        assert(win.HBNB);\n    }\n\n    dispatch('HBNB:ready');\n    env.HBNBReady = true;\n\n    win.HBNB.onPageShow = function() {\n        dispatch('HBNB:pageshow');\n    };\n\n    win.HBNB.onPageHide = function() {\n        dispatch('HBNB:pagehide');\n    };\n};\n\nvar checkHBNB = function() {\n    setTimeout(function check() {\n        if (win.HBNB) {\n            addLifecycleEvent();\n        } else {\n            setTimeout(check, 500);\n        }\n    });\n};\n\nvar initEvent = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        if (env.platform === 'h5') {\n            win.HBNB = {};\n            addLifecycleEvent();\n        }\n    }\n\n    if (!env.isHBNBWebview) {\n        if (process.env.NODE_ENV !== 'production') {\n            debug('not HBNB webview');\n        }\n        return;\n    }\n\n    if (env.platform === 'ios') {\n        if (win.HBNB) {\n            // ios 会添加 HBNB 对象，如果有该对象，说明桥协议可用\n            addLifecycleEvent();\n        } else if (env.HBNBVersion) {\n            // 带 HBNB 的版本，在可用时会触发 _HBNBReady 事件，表示桥协议可用了\n            doc.addEventListener('_HBNBReady', addLifecycleEvent);\n        } else {\n            // 旧版本只能定时检查\n            checkHBNB();\n        }\n    } else if (env.platform === 'android') {\n        if (env.supportPrompt) {\n            // 支持 prompt 的版本，是在页面加载前就可用了\n            win.HBNB = {};\n            addLifecycleEvent();\n        } else if (win.HBNB) {\n            // 旧版本使用 HBNB 传递数据，存在 HBNB 时可用\n            addLifecycleEvent();\n        } else {\n            // 就版本只能定时检查\n            checkHBNB();\n        }\n    }\n};\n\nmodule.exports = initEvent;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/invoke/event.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1361,
                            1397,
                            "false",
                            7,
                          ],
                          [
                            1164,
                            1200,
                            "false",
                            6,
                          ],
                          [
                            598,
                            634,
                            "false",
                            5,
                          ],
                          [
                            329,
                            365,
                            "false",
                            4,
                          ],
                          [
                            230,
                            239,
                            "128",
                            2,
                          ],
                          [
                            222,
                            228,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            85,
                            121,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\n/**\n * 1. 页面开启\n * 2. 页面隐藏\n * 3. 桥协议可用\n */\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:invoke:event');\n    assert = require('assert');\n}\n\nvar env = __webpack_require__(128);\n\n\nvar win = window;\nvar doc = document;\n\nvar dispatch = function(eventName) {\n    if (false) {\n        assert(eventName);\n        debug('dispatch event \"%s\"', eventName);\n    }\n\n    var ev = doc.createEvent('Events');\n    ev.initEvent(eventName);\n    doc.dispatchEvent(ev);\n};\n\nvar addLifecycleEvent = function() {\n    if (false) {\n        debug('add lifecycle event');\n        assert(win.HBNB);\n    }\n\n    dispatch('HBNB:ready');\n    env.HBNBReady = true;\n\n    win.HBNB.onPageShow = function() {\n        dispatch('HBNB:pageshow');\n    };\n\n    win.HBNB.onPageHide = function() {\n        dispatch('HBNB:pagehide');\n    };\n};\n\nvar checkHBNB = function() {\n    setTimeout(function check() {\n        if (win.HBNB) {\n            addLifecycleEvent();\n        } else {\n            setTimeout(check, 500);\n        }\n    });\n};\n\nvar initEvent = function() {\n    if (false) {\n        if (env.platform === 'h5') {\n            win.HBNB = {};\n            addLifecycleEvent();\n        }\n    }\n\n    if (!env.isHBNBWebview) {\n        if (false) {\n            debug('not HBNB webview');\n        }\n        return;\n    }\n\n    if (env.platform === 'ios') {\n        if (win.HBNB) {\n            // ios 会添加 HBNB 对象，如果有该对象，说明桥协议可用\n            addLifecycleEvent();\n        } else if (env.HBNBVersion) {\n            // 带 HBNB 的版本，在可用时会触发 _HBNBReady 事件，表示桥协议可用了\n            doc.addEventListener('_HBNBReady', addLifecycleEvent);\n        } else {\n            // 旧版本只能定时检查\n            checkHBNB();\n        }\n    } else if (env.platform === 'android') {\n        if (env.supportPrompt) {\n            // 支持 prompt 的版本，是在页面加载前就可用了\n            win.HBNB = {};\n            addLifecycleEvent();\n        } else if (win.HBNB) {\n            // 旧版本使用 HBNB 传递数据，存在 HBNB 时可用\n            addLifecycleEvent();\n        } else {\n            // 就版本只能定时检查\n            checkHBNB();\n        }\n    }\n};\n\nmodule.exports = initEvent;\n",
                      _cachedSize: 2083,
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
                "/* 219 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nvar assert;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:invoke:invoke');\n    assert = require('assert');\n}\n\nvar env = require('./env.js');\nvar ready = require('./ready.js');\nvar buildURI = require('./build-uri.js');\nvar sendURI = require('./send-uri.js');\n\nvar invoke = function(moduleName, methodName, parameters, protocol) {\n    if (process.env.NODE_ENV !== 'production') {\n        //assert(env.HBNBReady);\n        debug('module = %s', moduleName);\n        debug('method = %s', methodName);\n        debug('parameters = %j', parameters);\n        debug('protocol = %s', protocol);\n    }\n\n    // return if not in  app\n    if (process.env.NODE_ENV === 'production') {\n        if (!env.isHBNBWebview) {\n            if (parameters && parameters.complete) {\n                var complete = parameters.complete;\n                if (typeof complete === 'function') {\n                    setTimeout(function() {\n                        complete({\n                            status: 200,\n                            message: 'not HBNB webview'\n                        });\n                    });\n                }\n                return;\n            }\n        }\n    }\n\n    // throw Error on development\n    if (process.env.NODE_ENV !== 'production') {\n        assert(typeof moduleName === 'string' && moduleName);\n        assert(typeof methodName === 'string' && methodName);\n    }\n\n    parameters = parameters || {};\n    protocol = protocol || 'magpie:';\n    var uri = buildURI(protocol, moduleName, methodName, parameters);\n\n    if (process.env.NODE_ENV !== 'production') {\n        debug('uri = %s', uri);\n    }\n\n    ready(function() {\n        sendURI(uri);\n    });\n};\n\nmodule.exports = invoke;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/invoke/invoke.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1595,
                            1631,
                            "false",
                            13,
                          ],
                          [
                            1271,
                            1307,
                            "false",
                            12,
                          ],
                          [
                            694,
                            730,
                            "true",
                            11,
                          ],
                          [
                            397,
                            433,
                            "false",
                            10,
                          ],
                          [
                            300,
                            314,
                            "221",
                            8,
                          ],
                          [
                            292,
                            298,
                            "__webpack_require__",
                            9,
                          ],
                          [
                            259,
                            274,
                            "144",
                            6,
                          ],
                          [
                            251,
                            257,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            221,
                            232,
                            "220",
                            4,
                          ],
                          [
                            213,
                            219,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            188,
                            197,
                            "128",
                            2,
                          ],
                          [
                            180,
                            186,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            42,
                            78,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:invoke:invoke');\n    assert = require('assert');\n}\n\nvar env = __webpack_require__(128);\nvar ready = __webpack_require__(220);\nvar buildURI = __webpack_require__(144);\nvar sendURI = __webpack_require__(221);\n\nvar invoke = function(moduleName, methodName, parameters, protocol) {\n    if (false) {\n        //assert(env.HBNBReady);\n        debug('module = %s', moduleName);\n        debug('method = %s', methodName);\n        debug('parameters = %j', parameters);\n        debug('protocol = %s', protocol);\n    }\n\n    // return if not in  app\n    if (true) {\n        if (!env.isHBNBWebview) {\n            if (parameters && parameters.complete) {\n                var complete = parameters.complete;\n                if (typeof complete === 'function') {\n                    setTimeout(function() {\n                        complete({\n                            status: 200,\n                            message: 'not HBNB webview'\n                        });\n                    });\n                }\n                return;\n            }\n        }\n    }\n\n    // throw Error on development\n    if (false) {\n        assert(typeof moduleName === 'string' && moduleName);\n        assert(typeof methodName === 'string' && methodName);\n    }\n\n    parameters = parameters || {};\n    protocol = protocol || 'magpie:';\n    var uri = buildURI(protocol, moduleName, methodName, parameters);\n\n    if (false) {\n        debug('uri = %s', uri);\n    }\n\n    ready(function() {\n        sendURI(uri);\n    });\n};\n\nmodule.exports = invoke;\n",
                      _cachedSize: 1590,
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
                "/* 220 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:invoke:ready');\n}\n\nvar env = require('./env.js');\n\nvar fnQueue = [];\n\ndocument.addEventListener('HBNB:ready', function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('fnQueue length = %s', fnQueue.length);\n    }\n\n    for (var i = 0, ii = fnQueue.length; i < ii; ++i) {\n        fnQueue[i]();\n    }\n});\n\nvar ready = function(fn) {\n    if (typeof fn !== 'function') {\n        return;\n    }\n\n    if (env.HBNBReady) {\n        fn();\n    } else {\n        if (process.env.NODE_ENV !== 'production') {\n            debug('push fn to fnQueue');\n        }\n\n        fnQueue.push(fn);\n    }\n};\n\nmodule.exports = ready;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/invoke/ready.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            578,
                            614,
                            "false",
                            5,
                          ],
                          [
                            237,
                            273,
                            "false",
                            4,
                          ],
                          [
                            143,
                            152,
                            "128",
                            2,
                          ],
                          [
                            135,
                            141,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:ready');\n}\n\nvar env = __webpack_require__(128);\n\nvar fnQueue = [];\n\ndocument.addEventListener('HBNB:ready', function() {\n    if (false) {\n        debug('fnQueue length = %s', fnQueue.length);\n    }\n\n    for (var i = 0, ii = fnQueue.length; i < ii; ++i) {\n        fnQueue[i]();\n    }\n});\n\nvar ready = function(fn) {\n    if (typeof fn !== 'function') {\n        return;\n    }\n\n    if (env.HBNBReady) {\n        fn();\n    } else {\n        if (false) {\n            debug('push fn to fnQueue');\n        }\n\n        fnQueue.push(fn);\n    }\n};\n\nmodule.exports = ready;\n",
                      _cachedSize: 627,
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
                "/* 221 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:invoke:send-uri');\n}\n\nvar env = require('./env.js');\n\n/*eslint-disable no-undef, block-scoped-var, no-alert */\nvar strategy = {\n    'alert': function(uri) { window.alert(uri); },\n    'prompt': function(uri) { window.prompt(uri); },\n    'HBNB': {\n        'android': function(uri) { HBNB.sendBridgeMessage(uri); },\n        'ios': function(uri) { HBNB.postMessage(uri); }\n    }\n};\n/*eslint-enable no-undef, block-scoped-var, no-alert */\n\nvar sendURI;\nif (env.platform === 'ios') {\n    sendURI = strategy['HBNB']['ios'];\n} else if (env.platform === 'android') {\n    if (env.supportPrompt) {\n        // android app >= 6.0 support window.prompt\n        sendURI = strategy['prompt'];\n    } else {\n        sendURI = strategy['HBNB']['android'];\n    }\n} else {\n    sendURI = strategy['alert'];\n}\n\nif (process.env.NODE_ENV !== 'production') {\n    debug('sendURI = %s', sendURI);\n}\n\nmodule.exports = sendURI;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/invoke/send-uri.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            898,
                            934,
                            "false",
                            4,
                          ],
                          [
                            146,
                            155,
                            "128",
                            2,
                          ],
                          [
                            138,
                            144,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:send-uri');\n}\n\nvar env = __webpack_require__(128);\n\n/*eslint-disable no-undef, block-scoped-var, no-alert */\nvar strategy = {\n    'alert': function(uri) { window.alert(uri); },\n    'prompt': function(uri) { window.prompt(uri); },\n    'HBNB': {\n        'android': function(uri) { HBNB.sendBridgeMessage(uri); },\n        'ios': function(uri) { HBNB.postMessage(uri); }\n    }\n};\n/*eslint-enable no-undef, block-scoped-var, no-alert */\n\nvar sendURI;\nif (env.platform === 'ios') {\n    sendURI = strategy['HBNB']['ios'];\n} else if (env.platform === 'android') {\n    if (env.supportPrompt) {\n        // android app >= 6.0 support window.prompt\n        sendURI = strategy['prompt'];\n    } else {\n        sendURI = strategy['HBNB']['android'];\n    }\n} else {\n    sendURI = strategy['alert'];\n}\n\nif (false) {\n    debug('sendURI = %s', sendURI);\n}\n\nmodule.exports = sendURI;\n",
                      _cachedSize: 932,
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
                "/* 222 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nfunction Bridge() {}\n\nvar pushBack = require('./push-back.js');\nBridge.prototype.pushBack = Bridge.pushBack = pushBack;\nBridge.prototype.setTitle = Bridge.setTitle = function(title, subtitle) {\n    pushBack('bridge:', 'set_webview_title', {\n        title: title,\n        subtitle: subtitle\n    });\n};\n\nmodule.exports = Bridge;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/legency-lvyou/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            60,
                            75,
                            "223",
                            1,
                          ],
                          [
                            52,
                            58,
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
                      _cachedSource: "\n\nfunction Bridge() {}\n\nvar pushBack = __webpack_require__(223);\nBridge.prototype.pushBack = Bridge.pushBack = pushBack;\nBridge.prototype.setTitle = Bridge.setTitle = function(title, subtitle) {\n    pushBack('bridge:', 'set_webview_title', {\n        title: title,\n        subtitle: subtitle\n    });\n};\n\nmodule.exports = Bridge;\n",
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
                "/* 223 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar env = require('../invoke/env.js');\nvar buildURI = require('../invoke/build-uri.js');\n\nvar messageQueue = [];\nvar messageQueueFetch = function() {\n    var response = messageQueue.length ? JSON.stringify(messageQueue) : '';\n    messageQueue = [];\n    if (response) return response;\n};\nwindow.messageQueueFetch = messageQueueFetch;\n\nvar pushBack = function(protocol, name, params) {\n    params = params || {};\n    var uri = protocol + '//' + name + '?params=' + encodeURIComponent(JSON.stringify(params, buildURI.processParams));\n    if (env.platform === 'android') {\n        if (env.supportPrompt) {\n            window.prompt(uri); // eslint-disable-line no-alert\n        } else {\n            try {\n                window['HotelWebviewBridge']['sendBridgeMessage'](uri);\n            } catch (e) {}\n        }\n    } else if (env.platform === 'ios') {\n        messageQueue.push(uri);\n    } else {\n        // for debug\n        alert(uri); // eslint-disable-line no-alert\n    }\n};\n\nmodule.exports = pushBack;\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/legency-lvyou/push-back.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            77,
                            100,
                            "144",
                            3,
                          ],
                          [
                            69,
                            75,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            33,
                            50,
                            "128",
                            1,
                          ],
                          [
                            25,
                            31,
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
                      _cachedSource: "\n\nvar env = __webpack_require__(128);\nvar buildURI = __webpack_require__(144);\n\nvar messageQueue = [];\nvar messageQueueFetch = function() {\n    var response = messageQueue.length ? JSON.stringify(messageQueue) : '';\n    messageQueue = [];\n    if (response) return response;\n};\nwindow.messageQueueFetch = messageQueueFetch;\n\nvar pushBack = function(protocol, name, params) {\n    params = params || {};\n    var uri = protocol + '//' + name + '?params=' + encodeURIComponent(JSON.stringify(params, buildURI.processParams));\n    if (env.platform === 'android') {\n        if (env.supportPrompt) {\n            window.prompt(uri); // eslint-disable-line no-alert\n        } else {\n            try {\n                window['HotelWebviewBridge']['sendBridgeMessage'](uri);\n            } catch (e) {}\n        }\n    } else if (env.platform === 'ios') {\n        messageQueue.push(uri);\n    } else {\n        // for debug\n        alert(uri); // eslint-disable-line no-alert\n    }\n};\n\nmodule.exports = pushBack;\n",
                      _cachedSize: 1003,
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
                "/* 224 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name log\n */\nexports.mge = require('./mge.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/log/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            58,
                            67,
                            "225",
                            1,
                          ],
                          [
                            50,
                            56,
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
                      _cachedSource: "\n\n/**\n * @name log\n */\nexports.mge = __webpack_require__(225);\n",
                      _cachedSize: 63,
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
                "/* 225 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:log:mge');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 发送 mge 统计参数\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof log\n * @static\n * @name mge\n * @param {String | Undefined} cid 页面名\n * @param {String | Undefined} act 事件名\n * @param {String | Undefined} val 页面属性\n * @param {String | Undefined} lab 事件属性\n * @return {Undefined}\n * @example\n *  hbnb.log.mge('页面A', '点击事件B');\n *  hbnb.log.mge({\n *      cid: '页面A‘，\n *      act: '点击事件B'\n *  });\n */\n\nmodule.exports = function(cid, act, val, lab) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('cid = %s', cid);\n        debug('act = %s', act);\n        debug('val = %s', val);\n        debug('lab = %s', lab);\n    }\n\n    if (typeof cid === 'object') {\n        var opt = cid;\n        cid = String(opt.cid || '');\n        act = String(opt.act || opt.action);\n        val = String(opt.val || opt.value);\n        lab = String(opt.lab || opt.label);\n    }\n\n    _invoke('log', 'mge', {\n        cid: cid || '',\n        action: act || '',\n        value: val || '',\n        label: lab || ''\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/log/mge.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            611,
                            647,
                            "false",
                            4,
                          ],
                          [
                            149,
                            159,
                            "124",
                            2,
                          ],
                          [
                            141,
                            147,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:log:mge');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 发送 mge 统计参数\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof log\n * @static\n * @name mge\n * @param {String | Undefined} cid 页面名\n * @param {String | Undefined} act 事件名\n * @param {String | Undefined} val 页面属性\n * @param {String | Undefined} lab 事件属性\n * @return {Undefined}\n * @example\n *  hbnb.log.mge('页面A', '点击事件B');\n *  hbnb.log.mge({\n *      cid: '页面A‘，\n *      act: '点击事件B'\n *  });\n */\n\nmodule.exports = function(cid, act, val, lab) {\n    if (false) {\n        debug('cid = %s', cid);\n        debug('act = %s', act);\n        debug('val = %s', val);\n        debug('lab = %s', lab);\n    }\n\n    if (typeof cid === 'object') {\n        var opt = cid;\n        cid = String(opt.cid || '');\n        act = String(opt.act || opt.action);\n        val = String(opt.val || opt.value);\n        lab = String(opt.lab || opt.label);\n    }\n\n    _invoke('log', 'mge', {\n        cid: cid || '',\n        action: act || '',\n        value: val || '',\n        label: lab || ''\n    });\n};\n",
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
                "/* 226 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name network\n */\n\nexports.request = require('./request.js');\nexports.sendSms = require('./send-sms.js');\n\n//exports.httpRequest = require('./http-request.js'); // not support POST, disabled\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/network/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            110,
                            124,
                            "228",
                            3,
                          ],
                          [
                            102,
                            108,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            67,
                            80,
                            "227",
                            1,
                          ],
                          [
                            59,
                            65,
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
                      _cachedSource: "\n\n/**\n * @name network\n */\n\nexports.request = __webpack_require__(227);\nexports.sendSms = __webpack_require__(228);\n\n//exports.httpRequest = require('./http-request.js'); // not support POST, disabled\n",
                      _cachedSize: 201,
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
                "/* 227 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nvar assert;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:network:request');\n    assert = require('assert');\n}\n\nvar _invoke = require('../invoke');\n\n\n/**\n * 发起网络请求\n *\n * @memberof network\n * @static\n * @name request\n * @param {Object} opts 请求参数，参考 [request](https://github.com/request/request#requestoptions-callback)\n * @return {Promise<resp|err>}\n * @example\n *  hbnb.network.request({\n *      url: 'https://www.google.com/',\n *      method: 'GET',\n *      headers: {\n *          'X-Requested-With': 'XMLHttpRequest'\n *      },\n *      body: '',\n *      followRedirect: true,\n *      maxRedirects: 10,\n *      timeout: 5000\n *  }).then(function(resp) {\n *      resp = {\n *          statusCode: 404,\n *          body: '',\n *          headers: {\n *              'content-encoding': ['gzip']\n *          }\n *      }\n *  }).catch(function(err) {\n *      err = {\n *          message: \"用户未登录美团\",\n *          status: -1\n *      }\n *  });\n *\n */\n\nmodule.exports = function(opts) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('request opts is %j', opts);\n        assert(opts.url);\n        assert(typeof opts.method === 'undefined' || ['GET', 'POST', 'PUT', 'DELETE'].indexOf(opts.method.toUpperCase()) !== -1);\n        assert(typeof opts.headers === 'undefined' || typeof opts.headers === 'object');\n        assert(typeof opts.body === 'undefined' || typeof opts.body === 'string');\n        assert(typeof opts.followRedirect === 'undefined' || typeof opts.followRedirect === 'boolean');\n        assert(typeof opts.maxRedirects === 'undefined' || typeof opts.maxRedirects === 'number');\n        assert(typeof opts.timeout === 'undefined' || typeof opts.timeout === 'number');\n    }\n    if (opts.headers) {\n        var newHeaders = {};\n        var headers = opts.headers;\n        for (var key in headers) {\n            if (headers.hasOwnProperty(key)) {\n                newHeaders[key.toLowerCase()] = headers[key];\n            }\n        }\n        opts.headers = newHeaders;\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('network', 'request', {\n            url: opts.url,\n            method: opts.method ? opts.method.toUpperCase() : 'GET',\n            headers: opts.headers ? opts.headers : {},\n            body: opts.body ? opts.body : '',\n            followRedirect: !(opts.followRedirect === false),\n            maxRedirects: opts.maxRedirects ? opts.maxRedirects : 10,\n            timeout: opts.timeout ? opts.timeout : 5000,\n            insecure: opts.insecure ? opts.insecure : false,\n            responseEncoding: opts.responseEncoding ? opts.responseEncoding : '',\n            callback: function(response) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('request success, %j', response, response);\n                }\n                var newHeaders = {};\n                var headers = response.headers;\n                for (var i = 0, ii = headers.length; i < ii; i++) {\n                    var header = headers[i];\n                    var index = header.indexOf(';');\n                    if (index === -1) continue;\n                    var key = header.substr(0, key).trim().toLowerCase();\n                    var val = header.substr(index + 1).trim();\n                    newHeaders[key] = val;\n                }\n                response.headers = newHeaders;\n                resolve(response);\n            },\n            errback: function(msg) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('request fail, %j', msg);\n                }\n                reject(msg);\n            }\n        });\n    });\n\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/network/request.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            3523,
                            3559,
                            "false",
                            6,
                          ],
                          [
                            2743,
                            2779,
                            "false",
                            5,
                          ],
                          [
                            1050,
                            1086,
                            "false",
                            4,
                          ],
                          [
                            201,
                            211,
                            "124",
                            2,
                          ],
                          [
                            193,
                            199,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            42,
                            78,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:module:network:request');\n    assert = require('assert');\n}\n\nvar _invoke = __webpack_require__(124);\n\n\n/**\n * 发起网络请求\n *\n * @memberof network\n * @static\n * @name request\n * @param {Object} opts 请求参数，参考 [request](https://github.com/request/request#requestoptions-callback)\n * @return {Promise<resp|err>}\n * @example\n *  hbnb.network.request({\n *      url: 'https://www.google.com/',\n *      method: 'GET',\n *      headers: {\n *          'X-Requested-With': 'XMLHttpRequest'\n *      },\n *      body: '',\n *      followRedirect: true,\n *      maxRedirects: 10,\n *      timeout: 5000\n *  }).then(function(resp) {\n *      resp = {\n *          statusCode: 404,\n *          body: '',\n *          headers: {\n *              'content-encoding': ['gzip']\n *          }\n *      }\n *  }).catch(function(err) {\n *      err = {\n *          message: \"用户未登录美团\",\n *          status: -1\n *      }\n *  });\n *\n */\n\nmodule.exports = function(opts) {\n    if (false) {\n        debug('request opts is %j', opts);\n        assert(opts.url);\n        assert(typeof opts.method === 'undefined' || ['GET', 'POST', 'PUT', 'DELETE'].indexOf(opts.method.toUpperCase()) !== -1);\n        assert(typeof opts.headers === 'undefined' || typeof opts.headers === 'object');\n        assert(typeof opts.body === 'undefined' || typeof opts.body === 'string');\n        assert(typeof opts.followRedirect === 'undefined' || typeof opts.followRedirect === 'boolean');\n        assert(typeof opts.maxRedirects === 'undefined' || typeof opts.maxRedirects === 'number');\n        assert(typeof opts.timeout === 'undefined' || typeof opts.timeout === 'number');\n    }\n    if (opts.headers) {\n        var newHeaders = {};\n        var headers = opts.headers;\n        for (var key in headers) {\n            if (headers.hasOwnProperty(key)) {\n                newHeaders[key.toLowerCase()] = headers[key];\n            }\n        }\n        opts.headers = newHeaders;\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('network', 'request', {\n            url: opts.url,\n            method: opts.method ? opts.method.toUpperCase() : 'GET',\n            headers: opts.headers ? opts.headers : {},\n            body: opts.body ? opts.body : '',\n            followRedirect: !(opts.followRedirect === false),\n            maxRedirects: opts.maxRedirects ? opts.maxRedirects : 10,\n            timeout: opts.timeout ? opts.timeout : 5000,\n            insecure: opts.insecure ? opts.insecure : false,\n            responseEncoding: opts.responseEncoding ? opts.responseEncoding : '',\n            callback: function(response) {\n                if (false) {\n                    debug('request success, %j', response, response);\n                }\n                var newHeaders = {};\n                var headers = response.headers;\n                for (var i = 0, ii = headers.length; i < ii; i++) {\n                    var header = headers[i];\n                    var index = header.indexOf(';');\n                    if (index === -1) continue;\n                    var key = header.substr(0, key).trim().toLowerCase();\n                    var val = header.substr(index + 1).trim();\n                    newHeaders[key] = val;\n                }\n                response.headers = newHeaders;\n                resolve(response);\n            },\n            errback: function(msg) {\n                if (false) {\n                    debug('request fail, %j', msg);\n                }\n                reject(msg);\n            }\n        });\n    });\n\n    return p;\n};\n",
                      _cachedSize: 3578,
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
                "/* 228 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:network:sendSms');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 发送预填充内容了的短信\n *\n * 支持版本\n * + iHotel/6.6\n *\n * @memberof network\n * @static\n * @name sendSms\n * @example\n *  hbnb.network.sendSms({\n *      \"recipients\": 110, // 电话号码，支持多个\n *      \"text\": \"help\" // 发送到的文字内容\n *  })\n */\n\nmodule.exports = function(mobile, content) {\n    _invoke('device', 'send_sms', {\n        \"recipients\": mobile, // 电话号码，支持多个\n        \"text\": content // 发送到的文字内容\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/network/send-sms.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:network:sendSms');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 发送预填充内容了的短信\n *\n * 支持版本\n * + iHotel/6.6\n *\n * @memberof network\n * @static\n * @name sendSms\n * @example\n *  hbnb.network.sendSms({\n *      \"recipients\": 110, // 电话号码，支持多个\n *      \"text\": \"help\" // 发送到的文字内容\n *  })\n */\n\nmodule.exports = function(mobile, content) {\n    _invoke('device', 'send_sms', {\n        \"recipients\": mobile, // 电话号码，支持多个\n        \"text\": content // 发送到的文字内容\n    });\n};\n",
                      _cachedSize: 526,
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
                "/* 229 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:pay:getFingerprint');\n}\n\nvar _invoke = require('../invoke');\nvar env = require('../invoke/env');\nvar versionCompare = require('../invoke/version-compare');\n\n/**\n * 调用客户端收银台\n *\n * 支持版本\n * + iHotel/6.1+\n *\n * @memberof pay\n * @static\n * @name getFingerprint\n * @returns {Promise<String>}\n * @example\n *  hbnb.pay.getFingerprint()\n *      .then(function(fp) {\n *          fp = 'xxxxxxx'\n *      });\n */\n\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('called');\n    }\n    var p = new Promise(function(resolve, reject) {\n        if (versionCompare(env.appVersion, '6.1') >= 0) {\n            _invoke('pay', 'get_fingerprint', {\n                callback: function(fingerprint) {\n                    if (process.env.NODE_ENV !== 'production') {\n                        debug('fingerprint return %j', fingerprint);\n                    }\n                    if (fingerprint && fingerprint.fingerprint) {\n                        resolve(fingerprint.fingerprint);\n                    } else {\n                        reject();\n                    }\n                }\n            });\n        } else {\n            reject();\n        }\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/pay/get-fingerprint.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            856,
                            892,
                            "false",
                            9,
                          ],
                          [
                            552,
                            588,
                            "false",
                            8,
                          ],
                          [
                            239,
                            265,
                            "141",
                            6,
                          ],
                          [
                            231,
                            237,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            192,
                            206,
                            "128",
                            4,
                          ],
                          [
                            184,
                            190,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            160,
                            170,
                            "124",
                            2,
                          ],
                          [
                            152,
                            158,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:pay:getFingerprint');\n}\n\nvar _invoke = __webpack_require__(124);\nvar env = __webpack_require__(128);\nvar versionCompare = __webpack_require__(141);\n\n/**\n * 调用客户端收银台\n *\n * 支持版本\n * + iHotel/6.1+\n *\n * @memberof pay\n * @static\n * @name getFingerprint\n * @returns {Promise<String>}\n * @example\n *  hbnb.pay.getFingerprint()\n *      .then(function(fp) {\n *          fp = 'xxxxxxx'\n *      });\n */\n\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n    var p = new Promise(function(resolve, reject) {\n        if (versionCompare(env.appVersion, '6.1') >= 0) {\n            _invoke('pay', 'get_fingerprint', {\n                callback: function(fingerprint) {\n                    if (false) {\n                        debug('fingerprint return %j', fingerprint);\n                    }\n                    if (fingerprint && fingerprint.fingerprint) {\n                        resolve(fingerprint.fingerprint);\n                    } else {\n                        reject();\n                    }\n                }\n            });\n        } else {\n            reject();\n        }\n    });\n    return p;\n};\n",
                      _cachedSize: 1188,
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
                "/* 230 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name pay\n */\n\nexports.payment = require('./payment.js');\nexports.getFingerprint = require('./get-fingerprint.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/pay/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            113,
                            134,
                            "229",
                            3,
                          ],
                          [
                            105,
                            111,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            63,
                            76,
                            "231",
                            1,
                          ],
                          [
                            55,
                            61,
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
                      _cachedSource: "\n\n/**\n * @name pay\n */\n\nexports.payment = __webpack_require__(231);\nexports.getFingerprint = __webpack_require__(229);\n",
                      _cachedSize: 119,
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
                "/* 231 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:pay:payment');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 调用客户端收银台\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof pay\n * @static\n * @name payment\n * @param {Object} opts 收银台参数\n * @returns {Promise<orderId | Undefined>}\n * @example\n *  hbnb.pay.payment({\n *      tradeNo: '123',\n *      payToken: '456',\n *      orderId: '789',\n *      returnURL: 'i://...'\n *  }).then(function(data) {\n *      data = {\n *          isPayed: true,\n *          orderId: '789'\n *      }\n *  }).catch(function() {\n *      ...\n *  });\n */\n\nmodule.exports = function(opts) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('payment opts is %j', opts);\n    }\n    var p = new Promise(function(resolve, reject) {\n        var cb = opts.callback;\n        opts.callback = function(data) {\n            if (process.env.NODE_ENV !== 'production') {\n                debug('payment return %j', data);\n            }\n\n            resolve(data);\n            if (typeof cb === 'function') {\n                cb(data);\n            }\n        };\n        opts.errback = function() {\n            reject();\n        };\n        _invoke('pay', 'cashier', opts);\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/pay/payment.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            911,
                            947,
                            "false",
                            5,
                          ],
                          [
                            680,
                            716,
                            "false",
                            4,
                          ],
                          [
                            153,
                            163,
                            "124",
                            2,
                          ],
                          [
                            145,
                            151,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:pay:payment');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 调用客户端收银台\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof pay\n * @static\n * @name payment\n * @param {Object} opts 收银台参数\n * @returns {Promise<orderId | Undefined>}\n * @example\n *  hbnb.pay.payment({\n *      tradeNo: '123',\n *      payToken: '456',\n *      orderId: '789',\n *      returnURL: 'i://...'\n *  }).then(function(data) {\n *      data = {\n *          isPayed: true,\n *          orderId: '789'\n *      }\n *  }).catch(function() {\n *      ...\n *  });\n */\n\nmodule.exports = function(opts) {\n    if (false) {\n        debug('payment opts is %j', opts);\n    }\n    var p = new Promise(function(resolve, reject) {\n        var cb = opts.callback;\n        opts.callback = function(data) {\n            if (false) {\n                debug('payment return %j', data);\n            }\n\n            resolve(data);\n            if (typeof cb === 'function') {\n                cb(data);\n            }\n        };\n        opts.errback = function() {\n            reject();\n        };\n        _invoke('pay', 'cashier', opts);\n    });\n    return p;\n};\n",
                      _cachedSize: 1169,
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
                "/* 232 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:position:getCity');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取当前选择的城市\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof position\n * @static\n * @name getCity\n * @return {Promise<city>}\n * @example\n *  hbnb.position.getCity()\n *      .then(function(city) {\n *          city = {\n *              cityId: 1,\n *              cityName: '北京'\n *              cityPinyin: 'beijing'\n *          }\n *      });\n */\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('call get city');\n    }\n    var p = new Promise(function(resolve, reject) {\n        _invoke('position', 'get_city', {\n            callback: function(city) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('return city %j', city);\n                }\n                resolve(city);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/position/get-city.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            786,
                            822,
                            "false",
                            5,
                          ],
                          [
                            554,
                            590,
                            "false",
                            4,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:position:getCity');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取当前选择的城市\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof position\n * @static\n * @name getCity\n * @return {Promise<city>}\n * @example\n *  hbnb.position.getCity()\n *      .then(function(city) {\n *          city = {\n *              cityId: 1,\n *              cityName: '北京'\n *              cityPinyin: 'beijing'\n *          }\n *      });\n */\nmodule.exports = function() {\n    if (false) {\n        debug('call get city');\n    }\n    var p = new Promise(function(resolve, reject) {\n        _invoke('position', 'get_city', {\n            callback: function(city) {\n                if (false) {\n                    debug('return city %j', city);\n                }\n                resolve(city);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 873,
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
                "/* 233 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name position\n */\n\nexports.getCity = require('./get-city.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/position/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            68,
                            82,
                            "232",
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
                      _cachedSource: "\n\n/**\n * @name position\n */\n\nexports.getCity = __webpack_require__(232);\n",
                      _cachedSize: 73,
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
                "/* 234 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:share:activeNavButton');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * share.activeNavButton 激活导航栏分享按钮\n *\n * 支持版本\n * + iHotel/7.0+\n  * 此版本不支持successCallback,failCallback 客户端说排期比较紧张，7.1版本实现, ios失败没有回调通知\n * @memberof share\n * @static\n * @name activeNavButton\n * @param {Array} channel 渠道\n * @param {Object} conf 配置信息\n * @return {Undefined}\n * @example\n *  hbnb.share.activeNavButton(['weixin','weibo','sinaWeibo'], {\n        content: '分享内容',\n        detailURL: 'http://i..com/',\n        imageURL: 'http://p1..net/codeman/799087624091d1d43768b7da396d4a122532.png',\n        title: '分享标题'\n    });\n */\n\nmodule.exports = function(channelParam, configParam, successCallback, failCallback) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('param channelParam is %j', channelParam);\n        debug('param configParam is %j', configParam);\n    }\n    var p = new Promise(function(resolve, reject) {\n        var data = {\n            'sinaweibo': 1,\n            'qzone': 2,\n            'qqweibo': 4,\n            'renren': 8,\n            'kaixin': 16,\n            'sms': 32,\n            'email': 64,\n            'weixin': 128,\n            'weixinfriends': 256,\n            'qqclient': 512,\n            'all':-1\n        };\n        var params = {};\n        var channel = channelParam || [];\n        var config = configParam || {};\n        var channelNumber = 0;\n        var i;\n        var num;\n        var d;\n        if(channel && Object.prototype.toString.call(channel) == \"[object Array]\"){\n            for (var i = 0, len = channel.length; i < len; i++){\n                d = channel[i];\n                num = data[d.toLowerCase()];\n                channelNumber += num;\n                if(config['content_' + d]){\n                    params['content_' + num] = config['content_' + d];\n                }\n            }\n            if (config.cid) {\n                params.cid = config.cid;\n            }\n            params.channel = channelNumber;\n            params.content =  config.content;\n            params.detailURL = config.detailURL;\n            params.imageURL =  config.imageURL;\n            params.title = config.title;\n            params.callback = function (returnData) {\n                if (returnData && returnData.status === 'COMPLETE') {\n                    if (typeof successCallback === 'function') {\n                        successCallback(returnData)\n                    }\n                } else {\n                    if (typeof failCallback === 'function') {\n                        failCallback(returnData)\n                    }\n                }\n                resolve(returnData);\n                return false;\n            };\n            _invoke('share', 'enable_nav_share_button', params);\n        }\n\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/share/active-nav-button.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            819,
                            855,
                            "false",
                            4,
                          ],
                          [
                            163,
                            173,
                            "124",
                            2,
                          ],
                          [
                            155,
                            161,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:share:activeNavButton');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * share.activeNavButton 激活导航栏分享按钮\n *\n * 支持版本\n * + iHotel/7.0+\n  * 此版本不支持successCallback,failCallback 客户端说排期比较紧张，7.1版本实现, ios失败没有回调通知\n * @memberof share\n * @static\n * @name activeNavButton\n * @param {Array} channel 渠道\n * @param {Object} conf 配置信息\n * @return {Undefined}\n * @example\n *  hbnb.share.activeNavButton(['weixin','weibo','sinaWeibo'], {\n        content: '分享内容',\n        detailURL: 'http://i..com/',\n        imageURL: 'http://p1..net/codeman/799087624091d1d43768b7da396d4a122532.png',\n        title: '分享标题'\n    });\n */\n\nmodule.exports = function(channelParam, configParam, successCallback, failCallback) {\n    if (false) {\n        debug('param channelParam is %j', channelParam);\n        debug('param configParam is %j', configParam);\n    }\n    var p = new Promise(function(resolve, reject) {\n        var data = {\n            'sinaweibo': 1,\n            'qzone': 2,\n            'qqweibo': 4,\n            'renren': 8,\n            'kaixin': 16,\n            'sms': 32,\n            'email': 64,\n            'weixin': 128,\n            'weixinfriends': 256,\n            'qqclient': 512,\n            'all':-1\n        };\n        var params = {};\n        var channel = channelParam || [];\n        var config = configParam || {};\n        var channelNumber = 0;\n        var i;\n        var num;\n        var d;\n        if(channel && Object.prototype.toString.call(channel) == \"[object Array]\"){\n            for (var i = 0, len = channel.length; i < len; i++){\n                d = channel[i];\n                num = data[d.toLowerCase()];\n                channelNumber += num;\n                if(config['content_' + d]){\n                    params['content_' + num] = config['content_' + d];\n                }\n            }\n            if (config.cid) {\n                params.cid = config.cid;\n            }\n            params.channel = channelNumber;\n            params.content =  config.content;\n            params.detailURL = config.detailURL;\n            params.imageURL =  config.imageURL;\n            params.title = config.title;\n            params.callback = function (returnData) {\n                if (returnData && returnData.status === 'COMPLETE') {\n                    if (typeof successCallback === 'function') {\n                        successCallback(returnData)\n                    }\n                } else {\n                    if (typeof failCallback === 'function') {\n                        failCallback(returnData)\n                    }\n                }\n                resolve(returnData);\n                return false;\n            };\n            _invoke('share', 'enable_nav_share_button', params);\n        }\n\n    });\n    return p;\n};\n",
                      _cachedSize: 2808,
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
                "/* 235 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:share:callLocal');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * share.callLocal 激活导航栏分享按钮\n *\n * 支持版本\n * + iHotel/7.0+\n  * 此版本不支持successCallback,failCallback 客户端说排期比较紧张，7.1版本实现\n * @memberof share\n * @static\n * @name callLocal\n * @param {Array} channel 渠道\n * @param {Object} conf 配置信息\n * @return {Undefined}\n * @example\n *  hbnb.share.callLocal(['weixin','weibo','sinaWeibo'], {\n        content: '分享内容',\n        detailURL: 'http://i..com/',\n        imageURL: 'http://p1..net/codeman/799087624091d1d43768b7da396d4a122532.png',\n        title: '分享标题'\n    });\n */\n\nmodule.exports = function(channelParam, configParam, successCallback, failCallback) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('param channelParam is %j', channelParam);\n        debug('param configParam is %j', configParam);\n    }\n    var p = new Promise(function(resolve, reject) {\n        var data = {\n            'sinaweibo': 1,\n            'qzone': 2,\n            'qqweibo': 4,\n            'renren': 8,\n            'kaixin': 16,\n            'sms': 32,\n            'email': 64,\n            'weixin': 128,\n            'weixinfriends': 256,\n            'qqclient': 512,\n            'all':-1\n        };\n        var params = {};\n        var channel = channelParam || [];\n        var config = configParam || {};\n        var channelNumber = 0;\n        var i;\n        var num;\n        var d;\n\n        if(channel && Object.prototype.toString.call(channel) == \"[object Array]\"){\n            for (var i = 0, len = channel.length; i < len; i++){\n                d = channel[i];\n                num = data[d.toLowerCase()];\n                channelNumber += num;\n                if(config['content_' + d]){\n                    params['content_' + num] = config['content_' + d];\n                }\n            }\n            if (config.cid) {\n                params.cid = config.cid;\n            }\n            params.channel = channelNumber;\n            params.content =  config.content;\n            params.detailURL = config.detailURL;\n            params.imageURL =  config.imageURL;\n            params.title = config.title;\n            params.callback = function (returnData) {\n                if (returnData && returnData.status === 'COMPLETE') {\n                    if (typeof successCallback === 'function') {\n                        successCallback(returnData)\n                    }\n                } else {\n                    if (typeof failCallback === 'function') {\n                        failCallback(returnData)\n                    }\n                }\n                resolve(returnData);\n                return false;\n            };\n            _invoke('share', 'common_share', params);\n        }\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/share/call-local.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            782,
                            818,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:share:callLocal');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * share.callLocal 激活导航栏分享按钮\n *\n * 支持版本\n * + iHotel/7.0+\n  * 此版本不支持successCallback,failCallback 客户端说排期比较紧张，7.1版本实现\n * @memberof share\n * @static\n * @name callLocal\n * @param {Array} channel 渠道\n * @param {Object} conf 配置信息\n * @return {Undefined}\n * @example\n *  hbnb.share.callLocal(['weixin','weibo','sinaWeibo'], {\n        content: '分享内容',\n        detailURL: 'http://i..com/',\n        imageURL: 'http://p1..net/codeman/799087624091d1d43768b7da396d4a122532.png',\n        title: '分享标题'\n    });\n */\n\nmodule.exports = function(channelParam, configParam, successCallback, failCallback) {\n    if (false) {\n        debug('param channelParam is %j', channelParam);\n        debug('param configParam is %j', configParam);\n    }\n    var p = new Promise(function(resolve, reject) {\n        var data = {\n            'sinaweibo': 1,\n            'qzone': 2,\n            'qqweibo': 4,\n            'renren': 8,\n            'kaixin': 16,\n            'sms': 32,\n            'email': 64,\n            'weixin': 128,\n            'weixinfriends': 256,\n            'qqclient': 512,\n            'all':-1\n        };\n        var params = {};\n        var channel = channelParam || [];\n        var config = configParam || {};\n        var channelNumber = 0;\n        var i;\n        var num;\n        var d;\n\n        if(channel && Object.prototype.toString.call(channel) == \"[object Array]\"){\n            for (var i = 0, len = channel.length; i < len; i++){\n                d = channel[i];\n                num = data[d.toLowerCase()];\n                channelNumber += num;\n                if(config['content_' + d]){\n                    params['content_' + num] = config['content_' + d];\n                }\n            }\n            if (config.cid) {\n                params.cid = config.cid;\n            }\n            params.channel = channelNumber;\n            params.content =  config.content;\n            params.detailURL = config.detailURL;\n            params.imageURL =  config.imageURL;\n            params.title = config.title;\n            params.callback = function (returnData) {\n                if (returnData && returnData.status === 'COMPLETE') {\n                    if (typeof successCallback === 'function') {\n                        successCallback(returnData)\n                    }\n                } else {\n                    if (typeof failCallback === 'function') {\n                        failCallback(returnData)\n                    }\n                }\n                resolve(returnData);\n                return false;\n            };\n            _invoke('share', 'common_share', params);\n        }\n    });\n    return p;\n};\n",
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
                "/* 236 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:share:disableNavButton');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * share.disableNavButton 禁用导航栏分享按钮\n *\n * 支持版本\n * + iHotel/7.0+\n *\n * @memberof share\n * @static\n * @name disableNavButton\n * @return {Undefined}\n * @example\n *  hbnb.share.disableNavButton();\n */\n\nmodule.exports = function() {\n\tif (process.env.NODE_ENV !== 'production') {\n        debug('called');\n    }\n    var p = new Promise(function(resolve, reject) {\n    \t_invoke('share', 'disable_nav_share_button', {});\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/share/disable-nav-button.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            416,
                            452,
                            "false",
                            4,
                          ],
                          [
                            164,
                            174,
                            "124",
                            2,
                          ],
                          [
                            156,
                            162,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:share:disableNavButton');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * share.disableNavButton 禁用导航栏分享按钮\n *\n * 支持版本\n * + iHotel/7.0+\n *\n * @memberof share\n * @static\n * @name disableNavButton\n * @return {Undefined}\n * @example\n *  hbnb.share.disableNavButton();\n */\n\nmodule.exports = function() {\n\tif (false) {\n        debug('called');\n    }\n    var p = new Promise(function(resolve, reject) {\n    \t_invoke('share', 'disable_nav_share_button', {});\n    });\n    return p;\n};\n",
                      _cachedSize: 547,
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
                "/* 237 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name share\n */\n\n// 激活导航栏分享按钮\nexports.activeNavButton = require('./active-nav-button.js');\n\n// 禁用导航栏分享按钮\nexports.disableNavButton = require('./disable-nav-button.js');\n\n// 调用本地分享\nexports.callLocal = require('./call-local.js');\n\n\n\n\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/share/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            229,
                            245,
                            "235",
                            5,
                          ],
                          [
                            221,
                            227,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            162,
                            186,
                            "236",
                            3,
                          ],
                          [
                            154,
                            160,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            86,
                            109,
                            "234",
                            1,
                          ],
                          [
                            78,
                            84,
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
                      _cachedSource: "\n\n/**\n * @name share\n */\n\n// 激活导航栏分享按钮\nexports.activeNavButton = __webpack_require__(234);\n\n// 禁用导航栏分享按钮\nexports.disableNavButton = __webpack_require__(236);\n\n// 调用本地分享\nexports.callLocal = __webpack_require__(235);\n\n\n\n\n",
                      _cachedSize: 219,
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
                "/* 238 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:storage:getItem');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 客户端存储／查\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof storage\n * @static\n * @name getItem\n * @return {Promise<val>}\n * @example\n *  hbnb.storage.getItem('key')\n *      .then(function(value) {\n *          value = '' || null;\n *      });\n */\nmodule.exports = function(key) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('key is %s', key);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('storage', 'get_item', {\n            key: key,\n            callback: function(val) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('value is %j', val);\n                }\n\n                if (val && val.value) {\n                    resolve(val.value);\n                } else {\n                    resolve(null);\n                }\n            }\n        });\n    });\n\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/storage/get-item.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            712,
                            748,
                            "false",
                            5,
                          ],
                          [
                            458,
                            494,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:storage:getItem');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 客户端存储／查\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof storage\n * @static\n * @name getItem\n * @return {Promise<val>}\n * @example\n *  hbnb.storage.getItem('key')\n *      .then(function(value) {\n *          value = '' || null;\n *      });\n */\nmodule.exports = function(key) {\n    if (false) {\n        debug('key is %s', key);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('storage', 'get_item', {\n            key: key,\n            callback: function(val) {\n                if (false) {\n                    debug('value is %j', val);\n                }\n\n                if (val && val.value) {\n                    resolve(val.value);\n                } else {\n                    resolve(null);\n                }\n            }\n        });\n    });\n\n    return p;\n};\n",
                      _cachedSize: 924,
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
                "/* 239 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name storage\n */\n\nexports.getItem = require('./get-item.js');\nexports.setItem = require('./set-item.js');\nexports.removeItem = require('./remove-item.js');\nexports.setResult = require('./set-result.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/storage/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            207,
                            223,
                            "242",
                            7,
                          ],
                          [
                            199,
                            205,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            158,
                            175,
                            "240",
                            5,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            111,
                            125,
                            "241",
                            3,
                          ],
                          [
                            103,
                            109,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            67,
                            81,
                            "238",
                            1,
                          ],
                          [
                            59,
                            65,
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
                      _cachedSource: "\n\n/**\n * @name storage\n */\n\nexports.getItem = __webpack_require__(238);\nexports.setItem = __webpack_require__(241);\nexports.removeItem = __webpack_require__(240);\nexports.setResult = __webpack_require__(242);\n",
                      _cachedSize: 209,
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
                "/* 240 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:storage:removeItem');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 客户端存储／删\n *\n * 客户端调用是异步的，不保证接下去调用 `hbnb.storage.getItem` 能立刻获取最新值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof storage\n * @static\n * @name removeItem\n * @return {Undefined}\n * @example\n *  hbnb.storage.removeItem('key');\n */\nmodule.exports = function(key) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('key is %s', key);\n    }\n\n    _invoke('storage', 'remove_item', {\n        key: key\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/storage/remove-item.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            446,
                            482,
                            "false",
                            4,
                          ],
                          [
                            160,
                            170,
                            "124",
                            2,
                          ],
                          [
                            152,
                            158,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:storage:removeItem');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 客户端存储／删\n *\n * 客户端调用是异步的，不保证接下去调用 `hbnb.storage.getItem` 能立刻获取最新值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof storage\n * @static\n * @name removeItem\n * @return {Undefined}\n * @example\n *  hbnb.storage.removeItem('key');\n */\nmodule.exports = function(key) {\n    if (false) {\n        debug('key is %s', key);\n    }\n\n    _invoke('storage', 'remove_item', {\n        key: key\n    });\n};\n",
                      _cachedSize: 522,
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
                "/* 241 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:storage:setItem');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 客户端存储／增、改\n *\n * 客户端调用是异步的，不保证接下去调用 `hbnb.storage.getItem` 能立刻获取最新值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof storage\n * @static\n * @name setItem\n * @return {Undefined}\n * @example\n *  hbnb.storage.setItem('key', 'value');\n */\nmodule.exports = function(key, val) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('key is %s, value is %s', key, val.toString(), val);\n    }\n\n    _invoke('storage', 'set_item', {\n        key: key,\n        value: val.toString()\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/storage/set-item.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            453,
                            489,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:storage:setItem');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 客户端存储／增、改\n *\n * 客户端调用是异步的，不保证接下去调用 `hbnb.storage.getItem` 能立刻获取最新值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof storage\n * @static\n * @name setItem\n * @return {Undefined}\n * @example\n *  hbnb.storage.setItem('key', 'value');\n */\nmodule.exports = function(key, val) {\n    if (false) {\n        debug('key is %s, value is %s', key, val.toString(), val);\n    }\n\n    _invoke('storage', 'set_item', {\n        key: key,\n        value: val.toString()\n    });\n};\n",
                      _cachedSize: 591,
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
                "/* 242 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:closeAll');\n}\n\nvar _invoke = require('../invoke');\nvar env = require('../invoke/env');\nvar versionCompare = require('../invoke/version-compare');\n\n/**\n * 适用的场景是native打开H5的页面选择学校、城市\n *\n * 支持版本\n * + Android\n * + iHotel/6.9+\n *\n * @memberof storage\n * @static\n * @name setResult\n * @param {Object} obj\n * @return {Undefined}\n * @example\n *  hbnb.storage.setResult({id: \"45\", name: \"广西\"});\n */\nmodule.exports = function(params) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('url list %s', params);\n    }\n\n    if (env.platform === 'android' && versionCompare(env.appVersion, '6.9') >= 0) {\n        _invoke('inject', 'set_result', params);\n    } else {\n        // no op\n    }\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/storage/set-result.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            555,
                            591,
                            "false",
                            8,
                          ],
                          [
                            237,
                            263,
                            "141",
                            6,
                          ],
                          [
                            229,
                            235,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            190,
                            204,
                            "128",
                            4,
                          ],
                          [
                            182,
                            188,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:closeAll');\n}\n\nvar _invoke = __webpack_require__(124);\nvar env = __webpack_require__(128);\nvar versionCompare = __webpack_require__(141);\n\n/**\n * 适用的场景是native打开H5的页面选择学校、城市\n *\n * 支持版本\n * + Android\n * + iHotel/6.9+\n *\n * @memberof storage\n * @static\n * @name setResult\n * @param {Object} obj\n * @return {Undefined}\n * @example\n *  hbnb.storage.setResult({id: \"45\", name: \"广西\"});\n */\nmodule.exports = function(params) {\n    if (false) {\n        debug('url list %s', params);\n    }\n\n    if (env.platform === 'android' && versionCompare(env.appVersion, '6.9') >= 0) {\n        _invoke('inject', 'set_result', params);\n    } else {\n        // no op\n    }\n};\n",
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
                "/* 243 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name thirdApps\n */\n\nexports.installed = require('./installed.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/thirdApps/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            71,
                            86,
                            "244",
                            1,
                          ],
                          [
                            63,
                            69,
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
                      _cachedSource: "\n\n/**\n * @name thirdApps\n */\n\nexports.installed = __webpack_require__(244);\n",
                      _cachedSize: 76,
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
                "/* 244 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nvar assert;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:thirdApps:installed');\n    assert = require('assert');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 检查第三方软件安装情况\n *\n * 目前支持支付宝（`alipay`）\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof thirdApps\n * @static\n * @name installed\n * @param {String} appName 软件名\n * @return {Promise<status>}\n * @example\n *  var hbnb = request('/hbnb');\n *  hbnb.thirdApps.installed('alipay')\n *      .then(function(status) {\n *          status = true || false\n *      });\n */\nmodule.exports = function(appName) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('app is %s', appName);\n        assert(['alipay'].indexOf(appName) >= 0);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('third_apps', 'installed', {\n            appName: appName,\n            callback: function(status) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('status is %j', status);\n                }\n\n                if (status && status.installed) {\n                    resolve(true);\n                } else {\n                    resolve(false);\n                }\n            }\n        });\n    });\n\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/thirdApps/installed.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            947,
                            983,
                            "false",
                            5,
                          ],
                          [
                            624,
                            660,
                            "false",
                            4,
                          ],
                          [
                            205,
                            215,
                            "124",
                            2,
                          ],
                          [
                            197,
                            203,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            42,
                            78,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:module:thirdApps:installed');\n    assert = require('assert');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 检查第三方软件安装情况\n *\n * 目前支持支付宝（`alipay`）\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof thirdApps\n * @static\n * @name installed\n * @param {String} appName 软件名\n * @return {Promise<status>}\n * @example\n *  var hbnb = request('/hbnb');\n *  hbnb.thirdApps.installed('alipay')\n *      .then(function(status) {\n *          status = true || false\n *      });\n */\nmodule.exports = function(appName) {\n    if (false) {\n        debug('app is %s', appName);\n        assert(['alipay'].indexOf(appName) >= 0);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('third_apps', 'installed', {\n            appName: appName,\n            callback: function(status) {\n                if (false) {\n                    debug('status is %j', status);\n                }\n\n                if (status && status.installed) {\n                    resolve(true);\n                } else {\n                    resolve(false);\n                }\n            }\n        });\n    });\n\n    return p;\n};\n",
                      _cachedSize: 1169,
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
                "/* 245 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:tower:commentCallback');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 专题评论成功通知\n *\n * 专题评论成功后，通知客户端，无返回数据\n *\n * 支持版本\n * + iTower/0.4+\n *\n * @memberof tower\n * @static\n * @name sendTopicCommentSuccess\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.commentCallback();\n */\n\nmodule.exports = function(cb, eb) {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'sendTopicCommentSuccess', {\n            callback: function(result) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('comment callback result is %j', result, result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/tower/comment-callback.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            602,
                            638,
                            "false",
                            4,
                          ],
                          [
                            163,
                            173,
                            "124",
                            2,
                          ],
                          [
                            155,
                            161,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:commentCallback');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 专题评论成功通知\n *\n * 专题评论成功后，通知客户端，无返回数据\n *\n * 支持版本\n * + iTower/0.4+\n *\n * @memberof tower\n * @static\n * @name sendTopicCommentSuccess\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.commentCallback();\n */\n\nmodule.exports = function(cb, eb) {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'sendTopicCommentSuccess', {\n            callback: function(result) {\n                if (false) {\n                    debug('comment callback result is %j', result, result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n};\n",
                      _cachedSize: 763,
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
                "/* 246 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:tower:comment');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 打开native评论输入界面\n *\n * 支持版本\n * + MtLvxing/1.3+\n *\n * @memberof tower\n * @static\n * @name comment\n * @param {Object} opts\n * @return {Promise<object | err>}\n * @example\n *  hbnb.tower.comment({\n *          type: 'simple',\n *          placeholder: '请在此输入',\n *          content: '评论内容',\n *          limit: 350,\n *          buttonText: '发送',\n *      })\n *      .then(function(result) {\n *          result = {\n *              status: 0,\n *              content: '用户输入的内容',\n *          }\n *      })\n *      .catch(function(err) {\n *          err = {\n *              message: \"fail\",\n *              status: -1\n *          }\n *      });\n */\n\nmodule.exports = function(data) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('tower', 'comment', {\n            type: data.type || 'simple',\n            placeholder: data.placeholder || '',\n            content: data.content || '',\n            limit: data.limit || null,\n            buttonText: data.buttonText,\n\n            callback: function(result) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('comment result is %j', result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/tower/comment.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            1207,
                            1243,
                            "false",
                            4,
                          ],
                          [
                            155,
                            165,
                            "124",
                            2,
                          ],
                          [
                            147,
                            153,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:comment');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开native评论输入界面\n *\n * 支持版本\n * + MtLvxing/1.3+\n *\n * @memberof tower\n * @static\n * @name comment\n * @param {Object} opts\n * @return {Promise<object | err>}\n * @example\n *  hbnb.tower.comment({\n *          type: 'simple',\n *          placeholder: '请在此输入',\n *          content: '评论内容',\n *          limit: 350,\n *          buttonText: '发送',\n *      })\n *      .then(function(result) {\n *          result = {\n *              status: 0,\n *              content: '用户输入的内容',\n *          }\n *      })\n *      .catch(function(err) {\n *          err = {\n *              message: \"fail\",\n *              status: -1\n *          }\n *      });\n */\n\nmodule.exports = function(data) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('tower', 'comment', {\n            type: data.type || 'simple',\n            placeholder: data.placeholder || '',\n            content: data.content || '',\n            limit: data.limit || null,\n            buttonText: data.buttonText,\n\n            callback: function(result) {\n                if (false) {\n                    debug('comment result is %j', result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1365,
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
                "/* 247 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:tower:getUuid');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取用户设备信息\n *\n * 目前主要用来获得UUID\n *\n * 支持版本\n * + iTower/0.4+\n *\n * @memberof tower\n * @static\n * @name getUuid\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.getUuid()\n *      .then(function(uuid) {\n *          uuid = {\n *              UUID: \"xxxxxxxxx\"\n *          };\n *      })\n *      .catch(function(err) {\n *          err = {\n *              status: -1\n *          };\n *      });\n */\n\nmodule.exports = function(cb, eb) {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'get_uuid', {\n            callback: function(result) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('uuid is %j', result, result);\n                }\n                resolve(result.UUID);\n            },\n            errback: reject\n        });\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/tower/get-uuid.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            764,
                            800,
                            "false",
                            4,
                          ],
                          [
                            155,
                            165,
                            "124",
                            2,
                          ],
                          [
                            147,
                            153,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:getUuid');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取用户设备信息\n *\n * 目前主要用来获得UUID\n *\n * 支持版本\n * + iTower/0.4+\n *\n * @memberof tower\n * @static\n * @name getUuid\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.getUuid()\n *      .then(function(uuid) {\n *          uuid = {\n *              UUID: \"xxxxxxxxx\"\n *          };\n *      })\n *      .catch(function(err) {\n *          err = {\n *              status: -1\n *          };\n *      });\n */\n\nmodule.exports = function(cb, eb) {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'get_uuid', {\n            callback: function(result) {\n                if (false) {\n                    debug('uuid is %j', result, result);\n                }\n                resolve(result.UUID);\n            },\n            errback: reject\n        });\n    });\n};\n",
                      _cachedSize: 911,
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
                "/* 248 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name Tower\n */\n\nexports.getUuid = require('./get-uuid.js');\nexports.commentCallback= require('./comment-callback.js');\nexports.comment = require('./comment.js');\nexports.shareConfig = require('./share-config.js');\nexports.checkNickname = require('./user-check-nickname.js');\n\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/tower/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            269,
                            294,
                            "250",
                            9,
                          ],
                          [
                            261,
                            267,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            215,
                            233,
                            "249",
                            7,
                          ],
                          [
                            207,
                            213,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            168,
                            181,
                            "246",
                            5,
                          ],
                          [
                            160,
                            166,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            116,
                            138,
                            "245",
                            3,
                          ],
                          [
                            108,
                            114,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            65,
                            79,
                            "247",
                            1,
                          ],
                          [
                            57,
                            63,
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
                      _cachedSource: "\n\n/**\n * @name Tower\n */\n\nexports.getUuid = __webpack_require__(247);\nexports.commentCallback= __webpack_require__(245);\nexports.comment = __webpack_require__(246);\nexports.shareConfig = __webpack_require__(249);\nexports.checkNickname = __webpack_require__(250);\n\n",
                      _cachedSize: 264,
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
                "/* 249 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:tower:shareConfig');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * Webview 页面分享功能\n *\n * 在App中将页面分享到微信、朋友圈、微博\n *\n * 支持版本\n * + iTower/1.3+\n *\n * @memberof tower\n * @static\n * @name shareConfig\n * @param {String} name\n * @param {Object} opts\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.shareConfig('weixin', {\n *      title: '页面名称',\n *      desc: '内容',\n *      imgUrl: 'http://xxx.jpg',\n *      link: 'http://www.com',\n *  }).then().catch();\n */\n\nmodule.exports = function(name, data) {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'share_config_' + name, {\n            title: data.title,\n            desc: data.desc,\n            imgUrl: data.imgUrl,\n            link: data.link,\n            callback: function(result) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('share_config result is %j', result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n};\n\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/tower/share-config.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            901,
                            937,
                            "false",
                            4,
                          ],
                          [
                            159,
                            169,
                            "124",
                            2,
                          ],
                          [
                            151,
                            157,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:shareConfig');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * Webview 页面分享功能\n *\n * 在App中将页面分享到微信、朋友圈、微博\n *\n * 支持版本\n * + iTower/1.3+\n *\n * @memberof tower\n * @static\n * @name shareConfig\n * @param {String} name\n * @param {Object} opts\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.shareConfig('weixin', {\n *      title: '页面名称',\n *      desc: '内容',\n *      imgUrl: 'http://xxx.jpg',\n *      link: 'http://www.com',\n *  }).then().catch();\n */\n\nmodule.exports = function(name, data) {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'share_config_' + name, {\n            title: data.title,\n            desc: data.desc,\n            imgUrl: data.imgUrl,\n            link: data.link,\n            callback: function(result) {\n                if (false) {\n                    debug('share_config result is %j', result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n};\n\n",
                      _cachedSize: 1051,
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
                "/* 250 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:tower:userCheckNickname');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n *\n * 检查设置用户昵称\n *\n * http://wiki./pages/viewpage.action?pageId=500753388\n *\n * 支持版本\n * + iTower/1.3+\n *\n * @memberof tower\n * @static\n * @name checkNickname\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.checkNickname();\n */\n\nmodule.exports = function() {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'user_check_nickname', {\n            callback: function(result) {\n                if (process.env.NODE_ENV !== 'production') {\n                    debug('check nickname callback result is %j', result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/tower/user-check-nickname.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            628,
                            664,
                            "false",
                            4,
                          ],
                          [
                            165,
                            175,
                            "124",
                            2,
                          ],
                          [
                            157,
                            163,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:userCheckNickname');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * 检查设置用户昵称\n *\n * http://wiki./pages/viewpage.action?pageId=500753388\n *\n * 支持版本\n * + iTower/1.3+\n *\n * @memberof tower\n * @static\n * @name checkNickname\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.checkNickname();\n */\n\nmodule.exports = function() {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'user_check_nickname', {\n            callback: function(result) {\n                if (false) {\n                    debug('check nickname callback result is %j', result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n};\n",
                      _cachedSize: 788,
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
                "/* 251 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:gotoOrderDetail');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 进入火车票订单详情页面\n *\n * 点击后退时会返回订单列表页面，再后退会返回我的页面\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name gotoOrderDetail\n * @param {String} url 订单页面地址\n * @param {String} orderListUrl 订单列表页面地址\n * @return {Undefined}\n * @example\n *  hbnb.train.gotoOrderDetail(\n *      'url'\n *      'orderListUrl'\n *  );\n */\nmodule.exports = function(url, orderListUrl) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('url is %s', url);\n        debug('orderListUrl is %s', orderListUrl);\n    }\n\n    _invoke('train', 'goto_order_detail', {\n        url: url,\n        orderListUrl: orderListUrl\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/goto-order-detail.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            556,
                            592,
                            "false",
                            4,
                          ],
                          [
                            163,
                            173,
                            "124",
                            2,
                          ],
                          [
                            155,
                            161,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:gotoOrderDetail');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 进入火车票订单详情页面\n *\n * 点击后退时会返回订单列表页面，再后退会返回我的页面\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name gotoOrderDetail\n * @param {String} url 订单页面地址\n * @param {String} orderListUrl 订单列表页面地址\n * @return {Undefined}\n * @example\n *  hbnb.train.gotoOrderDetail(\n *      'url'\n *      'orderListUrl'\n *  );\n */\nmodule.exports = function(url, orderListUrl) {\n    if (false) {\n        debug('url is %s', url);\n        debug('orderListUrl is %s', orderListUrl);\n    }\n\n    _invoke('train', 'goto_order_detail', {\n        url: url,\n        orderListUrl: orderListUrl\n    });\n};\n",
                      _cachedSize: 723,
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
                "/* 252 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:gotoOrderList');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n *\n * @memberof train\n * @static\n * @name gotoOrderList\n * @param {String} url 订单列表地址\n * @return {Undefined}\n * @example\n *  hbnb.train.gotoOrderList('url');\n */\nmodule.exports = function(url) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('url is %s', url);\n    }\n\n    _invoke('train', 'goto_order_list', {\n        url: url\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/goto-order-list.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            383,
                            419,
                            "false",
                            4,
                          ],
                          [
                            161,
                            171,
                            "124",
                            2,
                          ],
                          [
                            153,
                            159,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:gotoOrderList');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name gotoOrderList\n * @param {String} url 订单列表地址\n * @return {Undefined}\n * @example\n *  hbnb.train.gotoOrderList('url');\n */\nmodule.exports = function(url) {\n    if (false) {\n        debug('url is %s', url);\n    }\n\n    _invoke('train', 'goto_order_list', {\n        url: url\n    });\n};\n",
                      _cachedSize: 461,
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
                "/* 253 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name train\n */\n\nexports.gotoOrderDetail = require('./goto-order-detail.js');\nexports.selectDate = require('./select-date.js');\nexports.selectStation = require('./select-station.js');\nexports.timeTable = require('./time-table.js');\n\nexports.selectDateStudent = require('./select-date-student.js');\nexports.selectDateRush = require('./select-date-rush.js');\nexports.timeRange = require('./time-range.js');\nexports.gotoOrderList = require('./goto-order-list.js');\nexports.multiSelect = require('./multi-select.js');\nexports.selectTrains = require('./select-trains.js');\nexports.ringtone = require('./ringtone.js');\nexports.vibrate = require('./vibrate.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            661,
                            674,
                            "263",
                            23,
                          ],
                          [
                            653,
                            659,
                            "__webpack_require__",
                            24,
                          ],
                          [
                            617,
                            631,
                            "255",
                            21,
                          ],
                          [
                            609,
                            615,
                            "__webpack_require__",
                            22,
                          ],
                          [
                            567,
                            586,
                            "260",
                            19,
                          ],
                          [
                            559,
                            565,
                            "__webpack_require__",
                            20,
                          ],
                          [
                            514,
                            532,
                            "254",
                            17,
                          ],
                          [
                            506,
                            512,
                            "__webpack_require__",
                            18,
                          ],
                          [
                            459,
                            480,
                            "252",
                            15,
                          ],
                          [
                            451,
                            457,
                            "__webpack_require__",
                            16,
                          ],
                          [
                            407,
                            423,
                            "261",
                            13,
                          ],
                          [
                            399,
                            405,
                            "__webpack_require__",
                            14,
                          ],
                          [
                            353,
                            375,
                            "256",
                            11,
                          ],
                          [
                            345,
                            351,
                            "__webpack_require__",
                            12,
                          ],
                          [
                            291,
                            316,
                            "257",
                            9,
                          ],
                          [
                            283,
                            289,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            234,
                            250,
                            "262",
                            7,
                          ],
                          [
                            226,
                            232,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            182,
                            202,
                            "259",
                            5,
                          ],
                          [
                            174,
                            180,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            129,
                            146,
                            "258",
                            3,
                          ],
                          [
                            121,
                            127,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            73,
                            96,
                            "251",
                            1,
                          ],
                          [
                            65,
                            71,
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
                      _cachedSource: "\n\n/**\n * @name train\n */\n\nexports.gotoOrderDetail = __webpack_require__(251);\nexports.selectDate = __webpack_require__(258);\nexports.selectStation = __webpack_require__(259);\nexports.timeTable = __webpack_require__(262);\n\nexports.selectDateStudent = __webpack_require__(257);\nexports.selectDateRush = __webpack_require__(256);\nexports.timeRange = __webpack_require__(261);\nexports.gotoOrderList = __webpack_require__(252);\nexports.multiSelect = __webpack_require__(254);\nexports.selectTrains = __webpack_require__(260);\nexports.ringtone = __webpack_require__(255);\nexports.vibrate = __webpack_require__(263);\n",
                      _cachedSize: 609,
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
                "/* 254 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:multiSelect');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n *\n * @memberof train\n * @static\n * @name multiSelect\n * @param {Array} menus 菜单\n * @return {Promise}\n * @example\n *  hbnb.train.multiSelect([{\n *      label: '',\n *      value: '',\n *      active: false\n *  }])\n *      .then(function(menus) {\n *          menus = [{\n *              label: '',\n *              value: '',\n *              active: false\n *          }]\n *      });\n */\nmodule.exports = function(menus) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('menus is %j', menus);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'multi_select', {\n            menus: menus,\n            callback: function(menus) {\n                resolve(menus);\n            }\n        });\n    });\n\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/multi-select.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            603,
                            639,
                            "false",
                            4,
                          ],
                          [
                            159,
                            169,
                            "124",
                            2,
                          ],
                          [
                            151,
                            157,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:multiSelect');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name multiSelect\n * @param {Array} menus 菜单\n * @return {Promise}\n * @example\n *  hbnb.train.multiSelect([{\n *      label: '',\n *      value: '',\n *      active: false\n *  }])\n *      .then(function(menus) {\n *          menus = [{\n *              label: '',\n *              value: '',\n *              active: false\n *          }]\n *      });\n */\nmodule.exports = function(menus) {\n    if (false) {\n        debug('menus is %j', menus);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'multi_select', {\n            menus: menus,\n            callback: function(menus) {\n                resolve(menus);\n            }\n        });\n    });\n\n    return p;\n};\n",
                      _cachedSize: 860,
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
                "/* 255 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:ringtone');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n *\n * @memberof train\n * @static\n * @name ringtone\n * @param {Number} loop 时长\n * @return {Promise}\n * @example\n *  hbnb.train.ringtone()\n *      .then(function() {});\n */\nmodule.exports = function(duration) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('duration is %s', duration);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'ringtone', {\n            duration: duration,\n            callback: function() {\n                resolve();\n            },\n            errback: function() {\n                reject();\n            }\n        });\n    });\n\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/ringtone.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            392,
                            428,
                            "false",
                            4,
                          ],
                          [
                            156,
                            166,
                            "124",
                            2,
                          ],
                          [
                            148,
                            154,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:ringtone');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name ringtone\n * @param {Number} loop 时长\n * @return {Promise}\n * @example\n *  hbnb.train.ringtone()\n *      .then(function() {});\n */\nmodule.exports = function(duration) {\n    if (false) {\n        debug('duration is %s', duration);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'ringtone', {\n            duration: duration,\n            callback: function() {\n                resolve();\n            },\n            errback: function() {\n                reject();\n            }\n        });\n    });\n\n    return p;\n};\n",
                      _cachedSize: 722,
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
                "/* 256 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:selectDateRush');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选择出行日期\n *\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectDateRush\n * @param {Object} opts 选项\n * @return {Promise<date>}\n * @example\n *  hbnb.train.selectDateRush({\n *      date: '2015-10-19',\n *      days: 60,\n *      buyRange: [{\n *          start: '2015-11-11',\n *          finish: '2015-12-11'\n *      }],\n *      reserveRange: [{\n *          start: '2015-12-12',\n *          finish: '2015-12-31'\n *      }]\n *  })\n *      .then(function(date) {\n *          date = '2015-12-13'\n *      });\n */\nmodule.exports = function(opts) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('opts is %j', opts);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        opts.callback = function(date) {\n            resolve(date.date);\n        };\n        _invoke('train', 'select_date_rush', opts);\n    });\n    return p;\n};\n\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/select-date-rush.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            752,
                            788,
                            "false",
                            4,
                          ],
                          [
                            162,
                            172,
                            "124",
                            2,
                          ],
                          [
                            154,
                            160,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectDateRush');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择出行日期\n *\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectDateRush\n * @param {Object} opts 选项\n * @return {Promise<date>}\n * @example\n *  hbnb.train.selectDateRush({\n *      date: '2015-10-19',\n *      days: 60,\n *      buyRange: [{\n *          start: '2015-11-11',\n *          finish: '2015-12-11'\n *      }],\n *      reserveRange: [{\n *          start: '2015-12-12',\n *          finish: '2015-12-31'\n *      }]\n *  })\n *      .then(function(date) {\n *          date = '2015-12-13'\n *      });\n */\nmodule.exports = function(opts) {\n    if (false) {\n        debug('opts is %j', opts);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        opts.callback = function(date) {\n            resolve(date.date);\n        };\n        _invoke('train', 'select_date_rush', opts);\n    });\n    return p;\n};\n\n",
                      _cachedSize: 976,
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
                "/* 257 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:selectDateStudent');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选择出行日期\n *\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectDateStudent\n * @param {Object} opts 选项\n * @return {Promise<date>}\n * @example\n *  hbnb.train.selectDateStudent({\n *      date: '2015-10-19',\n *      days: 60,\n *      range: [{\n *          start: '2015-10-20',\n *          finish: '2015-12-30'\n *      }],\n *      tips: '预售期为60天，60天外不可购买'\n *  })\n *      .then(function(date) {\n *          date = '2015-12-13'\n *      });\n */\nmodule.exports = function(opts) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('opts is %j', opts);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        opts.callback = function(date) {\n            resolve(date.date);\n        };\n        _invoke('train', 'select_date_student', opts);\n    });\n    return p;\n};\n\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/select-date-student.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            689,
                            725,
                            "false",
                            4,
                          ],
                          [
                            165,
                            175,
                            "124",
                            2,
                          ],
                          [
                            157,
                            163,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectDateStudent');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择出行日期\n *\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectDateStudent\n * @param {Object} opts 选项\n * @return {Promise<date>}\n * @example\n *  hbnb.train.selectDateStudent({\n *      date: '2015-10-19',\n *      days: 60,\n *      range: [{\n *          start: '2015-10-20',\n *          finish: '2015-12-30'\n *      }],\n *      tips: '预售期为60天，60天外不可购买'\n *  })\n *      .then(function(date) {\n *          date = '2015-12-13'\n *      });\n */\nmodule.exports = function(opts) {\n    if (false) {\n        debug('opts is %j', opts);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        opts.callback = function(date) {\n            resolve(date.date);\n        };\n        _invoke('train', 'select_date_student', opts);\n    });\n    return p;\n};\n\n",
                      _cachedSize: 916,
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
                "/* 258 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:selectDate');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选择出行日期\n *\n * TODO: 补全参数和返回值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectDate\n * @param {String} date 当前日期\n * @param {Number} days 日期 6.2\n * @param {String} tips 底部提示 6.2\n * @return {Promise<date>}\n * @example\n *  hbnb.train.selectDate('date', '60', '预售期为60天，60天外不可购买')\n *      .then(function(date) {\n *          date = '2015-02-02'\n *      });\n */\nmodule.exports = function(date, days, tips) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('date is %s', date);\n        debug('days is %s', days);\n        debug('tips is %s', tips);\n    }\n\n    if (days === undefined) days = 60;\n    if (tips === undefined) tips = '预售期为60天，60天外不可购买';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'select_date', {\n            date: date,\n            days: days,\n            tips: tips,\n            callback: function(date) {\n                resolve(date.date);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/select-date.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            614,
                            650,
                            "false",
                            4,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectDate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择出行日期\n *\n * TODO: 补全参数和返回值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectDate\n * @param {String} date 当前日期\n * @param {Number} days 日期 6.2\n * @param {String} tips 底部提示 6.2\n * @return {Promise<date>}\n * @example\n *  hbnb.train.selectDate('date', '60', '预售期为60天，60天外不可购买')\n *      .then(function(date) {\n *          date = '2015-02-02'\n *      });\n */\nmodule.exports = function(date, days, tips) {\n    if (false) {\n        debug('date is %s', date);\n        debug('days is %s', days);\n        debug('tips is %s', tips);\n    }\n\n    if (days === undefined) days = 60;\n    if (tips === undefined) tips = '预售期为60天，60天外不可购买';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'select_date', {\n            date: date,\n            days: days,\n            tips: tips,\n            callback: function(date) {\n                resolve(date.date);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1081,
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
                "/* 259 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:selectStation');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选择火车站\n *\n * TODO: 补全参数和返回值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectStation\n * @param {String} stationCode 当前火车站\n * @param {String} stationType 类型\n * @return {Promise<station>}\n * @example\n *  hbnb.train.selectStation('code', 'type')\n *      .then(function(station) {\n *      });\n */\nmodule.exports = function(stationCode, stationType) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('station code is %s', stationCode);\n        debug('station type is %s', stationType);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'select_station', {\n            stationCode: stationCode,\n            stationType: stationType,\n            callback: function(station) {\n                resolve(station);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/select-station.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            564,
                            600,
                            "false",
                            4,
                          ],
                          [
                            161,
                            171,
                            "124",
                            2,
                          ],
                          [
                            153,
                            159,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectStation');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择火车站\n *\n * TODO: 补全参数和返回值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectStation\n * @param {String} stationCode 当前火车站\n * @param {String} stationType 类型\n * @return {Promise<station>}\n * @example\n *  hbnb.train.selectStation('code', 'type')\n *      .then(function(station) {\n *      });\n */\nmodule.exports = function(stationCode, stationType) {\n    if (false) {\n        debug('station code is %s', stationCode);\n        debug('station type is %s', stationType);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'select_station', {\n            stationCode: stationCode,\n            stationType: stationType,\n            callback: function(station) {\n                resolve(station);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 939,
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
                "/* 260 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:selectTrains');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n *\n * @memberof train\n * @static\n * @name selectTrains\n * @param {Array} menus 菜单\n * @return {Promise}\n * @example\n *  hbnb.train.selectTrains([{\n *      label: '',\n *      subLabel: '',\n *      description: ''\n *      value: '',\n *      active: false\n *  }])\n *      .then(function(menus) {\n *          menus = [{\n *              label: '',\n *              value: '',\n *              active: false\n *          }]\n *      });\n */\nmodule.exports = function(menus) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('menus is %j', menus);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'select_trains', {\n            menus: menus,\n            callback: function(menus) {\n                resolve(menus);\n            }\n        });\n    });\n\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/select-trains.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            652,
                            688,
                            "false",
                            4,
                          ],
                          [
                            160,
                            170,
                            "124",
                            2,
                          ],
                          [
                            152,
                            158,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectTrains');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name selectTrains\n * @param {Array} menus 菜单\n * @return {Promise}\n * @example\n *  hbnb.train.selectTrains([{\n *      label: '',\n *      subLabel: '',\n *      description: ''\n *      value: '',\n *      active: false\n *  }])\n *      .then(function(menus) {\n *          menus = [{\n *              label: '',\n *              value: '',\n *              active: false\n *          }]\n *      });\n */\nmodule.exports = function(menus) {\n    if (false) {\n        debug('menus is %j', menus);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'select_trains', {\n            menus: menus,\n            callback: function(menus) {\n                resolve(menus);\n            }\n        });\n    });\n\n    return p;\n};\n",
                      _cachedSize: 910,
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
                "/* 261 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:timeRange');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选择出行日期\n *\n *\n * @memberof train\n * @static\n * @name timeRange\n * @param {Number} start 开始时间\n * @param {Number} end 结束时间\n * @return {Promise<date>}\n * @example\n *  hbnb.train.timeRange(12, 15)\n *      .then(function(range) {\n *          range = {\n *              start: 0,\n *              end: 24\n *          }\n *      });\n */\nmodule.exports = function(start, end) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('start is %s', start);\n        debug('end is %s', end);\n    }\n\n    if (start === undefined) {\n        start = 0;\n        end = 24;\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'time_range', {\n            start: start,\n            end: end,\n            callback: function(range) {\n                resolve(range);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/time-range.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            553,
                            589,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:timeRange');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择出行日期\n *\n *\n * @memberof train\n * @static\n * @name timeRange\n * @param {Number} start 开始时间\n * @param {Number} end 结束时间\n * @return {Promise<date>}\n * @example\n *  hbnb.train.timeRange(12, 15)\n *      .then(function(range) {\n *          range = {\n *              start: 0,\n *              end: 24\n *          }\n *      });\n */\nmodule.exports = function(start, end) {\n    if (false) {\n        debug('start is %s', start);\n        debug('end is %s', end);\n    }\n\n    if (start === undefined) {\n        start = 0;\n        end = 24;\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'time_range', {\n            start: start,\n            end: end,\n            callback: function(range) {\n                resolve(range);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 937,
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
                "/* 262 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:timeTable');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 展示列车时刻表\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name timeTable\n * @param {Object} stations\n * @return {Undefined}\n * @example\n *  hbnb.train.timeTable([{\n *      type: 'inside/outside/from/to',\n *      value: [\n *          'station_no',\n *          'station_name',\n *          'arrive_time',\n *          'start_time'\n *          'stopover_time'\n *      ]\n *  }]);\n */\nmodule.exports = function(stations) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('stations is %j', stations);\n    }\n\n    _invoke('train', 'time_table', {\n        title: '列车时刻表',\n        header: ['', '车站', '到达', '发车', '停留'],\n        rows: stations\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/time-table.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            618,
                            654,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:timeTable');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 展示列车时刻表\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name timeTable\n * @param {Object} stations\n * @return {Undefined}\n * @example\n *  hbnb.train.timeTable([{\n *      type: 'inside/outside/from/to',\n *      value: [\n *          'station_no',\n *          'station_name',\n *          'arrive_time',\n *          'start_time'\n *          'stopover_time'\n *      ]\n *  }]);\n */\nmodule.exports = function(stations) {\n    if (false) {\n        debug('stations is %j', stations);\n    }\n\n    _invoke('train', 'time_table', {\n        title: '列车时刻表',\n        header: ['', '车站', '到达', '发车', '停留'],\n        rows: stations\n    });\n};\n",
                      _cachedSize: 777,
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
                "/* 263 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:train:vibrate');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n *\n * @memberof train\n * @static\n * @name vibrate\n * @param {Number} duration 震动时长\n * @return {Promise}\n * @example\n *  hbnb.train.vibrate(1000)\n *      .then(function() {});\n */\nmodule.exports = function(duration) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('duration is %s', duration);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'vibrate', {\n            duration: duration,\n            callback: function() {\n                resolve();\n            },\n            errback: function() {\n                reject();\n            }\n        });\n    });\n\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/train/vibrate.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            399,
                            435,
                            "false",
                            4,
                          ],
                          [
                            155,
                            165,
                            "124",
                            2,
                          ],
                          [
                            147,
                            153,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:vibrate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name vibrate\n * @param {Number} duration 震动时长\n * @return {Promise}\n * @example\n *  hbnb.train.vibrate(1000)\n *      .then(function() {});\n */\nmodule.exports = function(duration) {\n    if (false) {\n        debug('duration is %s', duration);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'vibrate', {\n            duration: duration,\n            callback: function() {\n                resolve();\n            },\n            errback: function() {\n                reject();\n            }\n        });\n    });\n\n    return p;\n};\n",
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
                "/* 264 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:travelmerchant:get_pos_deviceid');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取pos 设备id\n *\n * @memberof travel\n * @static\n * @name getPosDeviceId\n * @return {Promise}\n * @example\n *  hbnb.travel.getPosDeviceId()\n *      .then(function(resp) {\n *          resp = {\n *              deviceid: \"xxxxx\"//如果返回deviceid为空，则表示不是pos机\n *          }\n *      });\n */\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('getDeviceId  %s');\n    }\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travelmerchant', 'get_pos_deviceid', {\n            callback: function(resp) {\n                resolve(resp);\n            },\n            complete: function (resp) {\n                reject(resp);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/travel/biz-pos-device-id.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            510,
                            546,
                            "false",
                            4,
                          ],
                          [
                            173,
                            183,
                            "124",
                            2,
                          ],
                          [
                            165,
                            171,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travelmerchant:get_pos_deviceid');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取pos 设备id\n *\n * @memberof travel\n * @static\n * @name getPosDeviceId\n * @return {Promise}\n * @example\n *  hbnb.travel.getPosDeviceId()\n *      .then(function(resp) {\n *          resp = {\n *              deviceid: \"xxxxx\"//如果返回deviceid为空，则表示不是pos机\n *          }\n *      });\n */\nmodule.exports = function() {\n    if (false) {\n        debug('getDeviceId  %s');\n    }\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travelmerchant', 'get_pos_deviceid', {\n            callback: function(resp) {\n                resolve(resp);\n            },\n            complete: function (resp) {\n                reject(resp);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 832,
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
                "/* 265 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:travelmerchant:print');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 获取pos 设备id\n *\n * @memberof travel\n * @static\n * @name print\n * @param {Array} content\n * @return {Promise}\n * @example\n *  hbnb.travel.print([\n *    {\n        \"content\":\"xxx\",\n        \"gravity\":\"left\", //对齐 left/right/center\n        \"textsize\":\"small\" //字体大小  small/medium/large\n      }\n *  ])\n *      .then(function(resp) {\n *          resp = {\n *              status: 0,\n *              message: '成功'\n *          }\n *      });\n */\nmodule.exports = function(content) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('content is %s', content);\n    }\n    content = content || [];\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travelmerchant', 'print', {\n            content: content,\n            callback: function(resp) {\n                resolve(resp);\n            },\n            complete: function (resp) {\n                reject(resp);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/travel/biz-pos-print.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            662,
                            698,
                            "false",
                            4,
                          ],
                          [
                            162,
                            172,
                            "124",
                            2,
                          ],
                          [
                            154,
                            160,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travelmerchant:print');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取pos 设备id\n *\n * @memberof travel\n * @static\n * @name print\n * @param {Array} content\n * @return {Promise}\n * @example\n *  hbnb.travel.print([\n *    {\n        \"content\":\"xxx\",\n        \"gravity\":\"left\", //对齐 left/right/center\n        \"textsize\":\"small\" //字体大小  small/medium/large\n      }\n *  ])\n *      .then(function(resp) {\n *          resp = {\n *              status: 0,\n *              message: '成功'\n *          }\n *      });\n */\nmodule.exports = function(content) {\n    if (false) {\n        debug('content is %s', content);\n    }\n    content = content || [];\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travelmerchant', 'print', {\n            content: content,\n            callback: function(resp) {\n                resolve(resp);\n            },\n            complete: function (resp) {\n                reject(resp);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 1039,
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
                "/* 266 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:travelmerchant:check_printer_state');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 打印状态\n *\n * @memberof travel\n * @static\n * @name check_printer_state\n * @return {Promise}\n * @example\n *  hbnb.travel.printerState()\n *      .then(function(resp) {\n *          resp = {\n *              status:\"\"//一共五种状态：OK,NO_PAPER（缺纸）,HIGH_TEMP（过热）,ERROR(过热且缺纸),UNKNOW(未知)\n *          }\n *      });\n */\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        //debug('city is %s');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travelmerchant', 'check_printer_state', {\n            callback: function(resp) {\n                resolve(resp);\n            },\n            complete: function (resp) {\n                reject(resp);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/travel/biz-pos-printer.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            538,
                            574,
                            "false",
                            4,
                          ],
                          [
                            176,
                            186,
                            "124",
                            2,
                          ],
                          [
                            168,
                            174,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travelmerchant:check_printer_state');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打印状态\n *\n * @memberof travel\n * @static\n * @name check_printer_state\n * @return {Promise}\n * @example\n *  hbnb.travel.printerState()\n *      .then(function(resp) {\n *          resp = {\n *              status:\"\"//一共五种状态：OK,NO_PAPER（缺纸）,HIGH_TEMP（过热）,ERROR(过热且缺纸),UNKNOW(未知)\n *          }\n *      });\n */\nmodule.exports = function() {\n    if (false) {\n        //debug('city is %s');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travelmerchant', 'check_printer_state', {\n            callback: function(resp) {\n                resolve(resp);\n            },\n            complete: function (resp) {\n                reject(resp);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 861,
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
                "/* 267 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name travel\n */\n\n// 选择城市\nexports.selectCity = require('./select-city.js');\n\n// 设置客户端大G埋点\nexports.setGdata = require('./set-g-data.js');\n\n// 获取pos机id\nexports.getPosDeviceId = require('./biz-pos-device-id.js');\n\n// 获取pos机打印状态\nexports.printerState = require('./biz-pos-printer.js');\n\n// 打印\nexports.print = require('./biz-pos-print.js');",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/travel/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            334,
                            353,
                            "265",
                            9,
                          ],
                          [
                            326,
                            332,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            278,
                            299,
                            "266",
                            7,
                          ],
                          [
                            270,
                            276,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            205,
                            228,
                            "264",
                            5,
                          ],
                          [
                            197,
                            203,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            139,
                            155,
                            "269",
                            3,
                          ],
                          [
                            131,
                            137,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            77,
                            94,
                            "268",
                            1,
                          ],
                          [
                            69,
                            75,
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
                      _cachedSource: "\n\n/**\n * @name travel\n */\n\n// 选择城市\nexports.selectCity = __webpack_require__(268);\n\n// 设置客户端大G埋点\nexports.setGdata = __webpack_require__(269);\n\n// 获取pos机id\nexports.getPosDeviceId = __webpack_require__(264);\n\n// 获取pos机打印状态\nexports.printerState = __webpack_require__(266);\n\n// 打印\nexports.print = __webpack_require__(265);",
                      _cachedSize: 317,
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
                "/* 268 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:travel:selectCity');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选择城市\n *\n *\n * 支持版本\n * + iTrip/6.9+\n *\n *\n * @memberof travel\n * @static\n * @name selectCity\n * @param {String} city\n * @return {Promise}\n * @example\n *  hbnb.travel.selectCity('city')\n *      .then(function(city) {\n *          city = {\n *              cityName: '',\n *              cityID: ''\n *          }\n *      });\n */\nmodule.exports = function(city) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('city is %s', city);\n    }\n    city = city || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travel', 'select_city', {\n            original: city,\n            callback: function(city) {\n                resolve(city);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/travel/select-city.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            546,
                            582,
                            "false",
                            4,
                          ],
                          [
                            159,
                            169,
                            "124",
                            2,
                          ],
                          [
                            151,
                            157,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travel:selectCity');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择城市\n *\n *\n * 支持版本\n * + iTrip/6.9+\n *\n *\n * @memberof travel\n * @static\n * @name selectCity\n * @param {String} city\n * @return {Promise}\n * @example\n *  hbnb.travel.selectCity('city')\n *      .then(function(city) {\n *          city = {\n *              cityName: '',\n *              cityID: ''\n *          }\n *      });\n */\nmodule.exports = function(city) {\n    if (false) {\n        debug('city is %s', city);\n    }\n    city = city || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travel', 'select_city', {\n            original: city,\n            callback: function(city) {\n                resolve(city);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 823,
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
                "/* 269 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:travel:setGdata');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 设置客户端大G埋点\n *\n *\n * 支持版本\n * + iTrip/6.9+\n *\n *\n * @memberof travel\n * @static\n * @name setGdata\n * @param {String} bigG\n * @return {Promise}\n * @example\n *  hbnb.travel.setGdata('bigG')\n *      .then(function(bigG) {\n *          bigG = {\n *              status: 1          //0: 失败；1:成功\n *          }\n *      });\n */\nmodule.exports = function(bigG) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('bigG is %s', bigG);\n    }\n    bigG = bigG || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travel', 'set_g_data', {\n            gdata: bigG,\n            callback: function(bigG) {\n                resolve(bigG);\n            }\n        });\n    });\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/travel/set-g-data.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            536,
                            572,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travel:setGdata');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 设置客户端大G埋点\n *\n *\n * 支持版本\n * + iTrip/6.9+\n *\n *\n * @memberof travel\n * @static\n * @name setGdata\n * @param {String} bigG\n * @return {Promise}\n * @example\n *  hbnb.travel.setGdata('bigG')\n *      .then(function(bigG) {\n *          bigG = {\n *              status: 1          //0: 失败；1:成功\n *          }\n *      });\n */\nmodule.exports = function(bigG) {\n    if (false) {\n        debug('bigG is %s', bigG);\n    }\n    bigG = bigG || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travel', 'set_g_data', {\n            gdata: bigG,\n            callback: function(bigG) {\n                resolve(bigG);\n            }\n        });\n    });\n    return p;\n};\n",
                      _cachedSize: 809,
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
                "/* 270 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:ui:alert');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 单按钮弹窗，类似 alert\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name alert\n * @param {String} message 弹窗信息\n * @param {String} [title] 弹窗标题，可选\n * @param {Array} button 按钮\n * @return {Undefined}\n * @example\n *  hbnb.ui.alert('message', ['title'], [{\n *      label: '确定',\n *      callback: function() {\n *          console.log('clicked');\n *      }\n *  }]);\n */\nmodule.exports = function(message, title, button) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('message is %j', message);\n        debug('title is %j', title);\n        debug('button is %j', button);\n    }\n\n    if (!button) {\n        button = title;\n        title = '';\n    }\n\n    // fix: button should be an array\n    if (Object.prototype.toString.call(button) === \"[object Object]\") {\n        button = [button];\n    }\n\n    _invoke('ui', 'alert', {\n        message: message,\n        title: title,\n        buttons: button\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/alert.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            604,
                            640,
                            "false",
                            4,
                          ],
                          [
                            150,
                            160,
                            "124",
                            2,
                          ],
                          [
                            142,
                            148,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:alert');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 单按钮弹窗，类似 alert\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name alert\n * @param {String} message 弹窗信息\n * @param {String} [title] 弹窗标题，可选\n * @param {Array} button 按钮\n * @return {Undefined}\n * @example\n *  hbnb.ui.alert('message', ['title'], [{\n *      label: '确定',\n *      callback: function() {\n *          console.log('clicked');\n *      }\n *  }]);\n */\nmodule.exports = function(message, title, button) {\n    if (false) {\n        debug('message is %j', message);\n        debug('title is %j', title);\n        debug('button is %j', button);\n    }\n\n    if (!button) {\n        button = title;\n        title = '';\n    }\n\n    // fix: button should be an array\n    if (Object.prototype.toString.call(button) === \"[object Object]\") {\n        button = [button];\n    }\n\n    _invoke('ui', 'alert', {\n        message: message,\n        title: title,\n        buttons: button\n    });\n};\n",
                      _cachedSize: 1022,
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
                "/* 271 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:ui:autoLock');\n}\n\nvar _invoke = require('../invoke');\nvar env = require('../invoke/env');\nvar versionCompare = require('../invoke/version-compare');\n\n/**\n * 不允许自动锁屏\n *\n * 支持版本\n * + iHotel/6.5+\n *\n * @memberof ui\n * @static\n * @name autoLock\n * @param {Boolean} enable true表示禁止自动锁屏\n * @return {Undefined}\n * @example\n *  hbnb.ui.autoLock();\n */\nmodule.exports = function(enable) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('enable', enable);\n    }\n\n    if (versionCompare(env.appVersion, '6.5') >= 0) {\n        _invoke('ui', 'auto_lock', {\n            enable: enable\n        });\n    }\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/auto-lock.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            501,
                            537,
                            "false",
                            8,
                          ],
                          [
                            232,
                            258,
                            "141",
                            6,
                          ],
                          [
                            224,
                            230,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            185,
                            199,
                            "128",
                            4,
                          ],
                          [
                            177,
                            183,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            153,
                            163,
                            "124",
                            2,
                          ],
                          [
                            145,
                            151,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:autoLock');\n}\n\nvar _invoke = __webpack_require__(124);\nvar env = __webpack_require__(128);\nvar versionCompare = __webpack_require__(141);\n\n/**\n * 不允许自动锁屏\n *\n * 支持版本\n * + iHotel/6.5+\n *\n * @memberof ui\n * @static\n * @name autoLock\n * @param {Boolean} enable true表示禁止自动锁屏\n * @return {Undefined}\n * @example\n *  hbnb.ui.autoLock();\n */\nmodule.exports = function(enable) {\n    if (false) {\n        debug('enable', enable);\n    }\n\n    if (versionCompare(env.appVersion, '6.5') >= 0) {\n        _invoke('ui', 'auto_lock', {\n            enable: enable\n        });\n    }\n};\n",
                      _cachedSize: 636,
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
                "/* 272 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:ui:confirm');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 双按钮弹窗，类似 confirm\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name confirm\n * @param {String} message 弹窗信息\n * @param {String} [title] 弹窗标题，可选\n * @param {Object} leftButton 左按钮\n * @param {Object} rightButton 右按钮\n * @return {Undefined}\n * @example\n *  hbnb.ui.confirm('message', 'title', {\n *      label: '确定',\n *      callback: function() {}\n *  }, {\n *      label: '取消',\n *      callback: function() {}\n *  });\n */\nmodule.exports = function(message, title, leftButton, rightButton) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('message is %j', message);\n        debug('title is %j', title);\n        debug('left button is %j', leftButton);\n        debug('right button is %j', rightButton);\n    }\n\n    if (!rightButton) {\n        rightButton = leftButton;\n        leftButton = title;\n        title = '';\n    }\n\n    _invoke('ui', 'alert', {\n        message: message,\n        title: title,\n        buttons: [leftButton, rightButton]\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/confirm.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            683,
                            719,
                            "false",
                            4,
                          ],
                          [
                            152,
                            162,
                            "124",
                            2,
                          ],
                          [
                            144,
                            150,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:confirm');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 双按钮弹窗，类似 confirm\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name confirm\n * @param {String} message 弹窗信息\n * @param {String} [title] 弹窗标题，可选\n * @param {Object} leftButton 左按钮\n * @param {Object} rightButton 右按钮\n * @return {Undefined}\n * @example\n *  hbnb.ui.confirm('message', 'title', {\n *      label: '确定',\n *      callback: function() {}\n *  }, {\n *      label: '取消',\n *      callback: function() {}\n *  });\n */\nmodule.exports = function(message, title, leftButton, rightButton) {\n    if (false) {\n        debug('message is %j', message);\n        debug('title is %j', title);\n        debug('left button is %j', leftButton);\n        debug('right button is %j', rightButton);\n    }\n\n    if (!rightButton) {\n        rightButton = leftButton;\n        leftButton = title;\n        title = '';\n    }\n\n    _invoke('ui', 'alert', {\n        message: message,\n        title: title,\n        buttons: [leftButton, rightButton]\n    });\n};\n",
                      _cachedSize: 1078,
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
                "/* 273 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name ui\n */\n\nexports.loadingStart = require('./loading-start.js');\nexports.loadingStop = require('./loading-stop.js');\n\nexports.toast = require('./toast.js');\nexports.alert = require('./alert.js');\nexports.confirm = require('./confirm.js');\n\nexports.options = require('./options.js');\nexports.singleSelect = require('./single-select.js');\n\nexports.selectDate = require('./select-date.js');\nexports.autoLock = require('./auto-lock.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            440,
                            455,
                            "271",
                            17,
                          ],
                          [
                            432,
                            438,
                            "__webpack_require__",
                            18,
                          ],
                          [
                            392,
                            409,
                            "277",
                            15,
                          ],
                          [
                            384,
                            390,
                            "__webpack_require__",
                            16,
                          ],
                          [
                            339,
                            358,
                            "278",
                            13,
                          ],
                          [
                            331,
                            337,
                            "__webpack_require__",
                            14,
                          ],
                          [
                            291,
                            304,
                            "276",
                            11,
                          ],
                          [
                            283,
                            289,
                            "__webpack_require__",
                            12,
                          ],
                          [
                            247,
                            260,
                            "272",
                            9,
                          ],
                          [
                            239,
                            245,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            206,
                            217,
                            "270",
                            7,
                          ],
                          [
                            198,
                            204,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            167,
                            178,
                            "279",
                            5,
                          ],
                          [
                            159,
                            165,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            120,
                            138,
                            "275",
                            3,
                          ],
                          [
                            112,
                            118,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            67,
                            86,
                            "274",
                            1,
                          ],
                          [
                            59,
                            65,
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
                      _cachedSource: "\n\n/**\n * @name ui\n */\n\nexports.loadingStart = __webpack_require__(274);\nexports.loadingStop = __webpack_require__(275);\n\nexports.toast = __webpack_require__(279);\nexports.alert = __webpack_require__(270);\nexports.confirm = __webpack_require__(272);\n\nexports.options = __webpack_require__(276);\nexports.singleSelect = __webpack_require__(278);\n\nexports.selectDate = __webpack_require__(277);\nexports.autoLock = __webpack_require__(271);\n",
                      _cachedSize: 436,
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
                "/* 274 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:ui:loadingStart');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 开启加载动画\n *\n * 在关闭前多次调用存在 bug，需要业务方自己把握开启／关闭的配对关系\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name loadingStart\n * @return {Undefined}\n * @example\n *  hbnb.ui.loadingStart();\n */\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('start');\n    }\n\n    _invoke('ui', 'loading_start');\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/loading-start.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            412,
                            448,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:loadingStart');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 开启加载动画\n *\n * 在关闭前多次调用存在 bug，需要业务方自己把握开启／关闭的配对关系\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name loadingStart\n * @return {Undefined}\n * @example\n *  hbnb.ui.loadingStart();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('start');\n    }\n\n    _invoke('ui', 'loading_start');\n};\n",
                      _cachedSize: 450,
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
                "/* 275 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:ui:loadingStop');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 关闭加载动画\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name loadingStop\n * @return {Undefined}\n * @example\n *  hbnb.ui.loadingStop();\n */\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('stop');\n    }\n\n    _invoke('ui', 'loading_stop');\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/loading-stop.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            368,
                            404,
                            "false",
                            4,
                          ],
                          [
                            156,
                            166,
                            "124",
                            2,
                          ],
                          [
                            148,
                            154,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:loadingStop');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 关闭加载动画\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name loadingStop\n * @return {Undefined}\n * @example\n *  hbnb.ui.loadingStop();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('stop');\n    }\n\n    _invoke('ui', 'loading_stop');\n};\n",
                      _cachedSize: 404,
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
                "/* 276 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:ui:options');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 选项弹窗\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name options\n * @param {Array} menus 选项数组\n * @param {Object} cancel 取消按钮\n * @return {Undefined}\n * @example\n *  hbnb.ui.options([{\n *      label: 'option1',\n *      callback: function() {}\n *  }, {\n *      label: 'option2',\n *      callback: function() {}\n *  }], {\n *      label: 'cancel',\n *      callback: function() {}\n *  });\n */\nmodule.exports = function(menus, cancel) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('menus is %j', menus);\n        debug('cancel is %j', cancel);\n    }\n\n    _invoke('ui', 'options', {\n        menus: menus,\n        cancel: cancel\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/options.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            627,
                            663,
                            "false",
                            4,
                          ],
                          [
                            152,
                            162,
                            "124",
                            2,
                          ],
                          [
                            144,
                            150,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:options');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选项弹窗\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name options\n * @param {Array} menus 选项数组\n * @param {Object} cancel 取消按钮\n * @return {Undefined}\n * @example\n *  hbnb.ui.options([{\n *      label: 'option1',\n *      callback: function() {}\n *  }, {\n *      label: 'option2',\n *      callback: function() {}\n *  }], {\n *      label: 'cancel',\n *      callback: function() {}\n *  });\n */\nmodule.exports = function(menus, cancel) {\n    if (false) {\n        debug('menus is %j', menus);\n        debug('cancel is %j', cancel);\n    }\n\n    _invoke('ui', 'options', {\n        menus: menus,\n        cancel: cancel\n    });\n};\n",
                      _cachedSize: 765,
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
                "/* 277 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:ui:singleDate');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 日期选择\n *\n * TODO: 补全示例\n *\n * 支持版本\n * + iHotel/5.9.2+\n *\n * @memberof ui\n * @static\n * @name selectDate\n * @param {String} current 当前日期\n * @param {String} maxDate 最大可选日期\n * @param {String} minDate 最小可选日期\n * @return {Promise<date | err>}\n * @example\n *  hbnb.ui.selectDate('');\n */\nmodule.exports = function(current, maxDate, minDate) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('current is %s', current);\n        debug('maxDate is %s', maxDate);\n        debug('minDate is %s', minDate);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('ui', 'select_date', {\n            original: current || '',\n            maxDate: maxDate,\n            minDate: minDate,\n            callback: function(data) {\n                resolve(data);\n            },\n            errback: function(err) {\n                reject(err);\n            }\n        });\n    });\n\n    return p;\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/select-date.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            519,
                            555,
                            "false",
                            4,
                          ],
                          [
                            155,
                            165,
                            "124",
                            2,
                          ],
                          [
                            147,
                            153,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:singleDate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 日期选择\n *\n * TODO: 补全示例\n *\n * 支持版本\n * + iHotel/5.9.2+\n *\n * @memberof ui\n * @static\n * @name selectDate\n * @param {String} current 当前日期\n * @param {String} maxDate 最大可选日期\n * @param {String} minDate 最小可选日期\n * @return {Promise<date | err>}\n * @example\n *  hbnb.ui.selectDate('');\n */\nmodule.exports = function(current, maxDate, minDate) {\n    if (false) {\n        debug('current is %s', current);\n        debug('maxDate is %s', maxDate);\n        debug('minDate is %s', minDate);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('ui', 'select_date', {\n            original: current || '',\n            maxDate: maxDate,\n            minDate: minDate,\n            callback: function(data) {\n                resolve(data);\n            },\n            errback: function(err) {\n                reject(err);\n            }\n        });\n    });\n\n    return p;\n};\n",
                      _cachedSize: 1008,
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
                "/* 278 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:ui:singleSelect');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 单选框\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name singleSelect\n * @param {Array} menus 选项数组\n * @return {Undefined}\n * @example\n *  hbnb.ui.singleSelect([{\n *      label: 'all',\n *      active: true,\n *      callback: function() {},\n *  }, {\n *      label: 'option 1',\n *      active: false,\n *      callback: function() {},\n *  }, {\n *      label: 'option 2',\n *      active: false,\n *      callback: function() {},\n *  }]);\n */\nmodule.exports = function(menus) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('menus is %j', menus);\n    }\n\n    _invoke('ui', 'single_select', {\n        menus: menus\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/single-select.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            672,
                            708,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:singleSelect');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 单选框\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name singleSelect\n * @param {Array} menus 选项数组\n * @return {Undefined}\n * @example\n *  hbnb.ui.singleSelect([{\n *      label: 'all',\n *      active: true,\n *      callback: function() {},\n *  }, {\n *      label: 'option 1',\n *      active: false,\n *      callback: function() {},\n *  }, {\n *      label: 'option 2',\n *      active: false,\n *      callback: function() {},\n *  }]);\n */\nmodule.exports = function(menus) {\n    if (false) {\n        debug('menus is %j', menus);\n    }\n\n    _invoke('ui', 'single_select', {\n        menus: menus\n    });\n};\n",
                      _cachedSize: 753,
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
                "/* 279 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:ui:toast');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * toast 弹窗\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name toast\n * @param {String} message 弹窗信息\n * @param {Number} [time] toast 持续时间，单位 `ms`，可选，默认 3000\n * @return {Undefined}\n * @example\n *  hbnb.ui.toast('message', 1000);\n */\n\nmodule.exports = function(message, time) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('message is %s', message);\n        debug('time is %s', time);\n    }\n\n    time = time || 3000;\n\n    _invoke('ui', 'toast', {\n        message: message,\n        time: time\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/ui/toast.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            469,
                            505,
                            "false",
                            4,
                          ],
                          [
                            150,
                            160,
                            "124",
                            2,
                          ],
                          [
                            142,
                            148,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:toast');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * toast 弹窗\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name toast\n * @param {String} message 弹窗信息\n * @param {Number} [time] toast 持续时间，单位 `ms`，可选，默认 3000\n * @return {Undefined}\n * @example\n *  hbnb.ui.toast('message', 1000);\n */\n\nmodule.exports = function(message, time) {\n    if (false) {\n        debug('message is %s', message);\n        debug('time is %s', time);\n    }\n\n    time = time || 3000;\n\n    _invoke('ui', 'toast', {\n        message: message,\n        time: time\n    });\n};\n",
                      _cachedSize: 631,
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
                "/* 280 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:back');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 后退\n *\n * TODO: ANDROID 旧版实现有问题\n *\n * 支持版本\n * + iHotel/?\n *\n * @memberof webview\n * @static\n * @name back\n * @return {Undefined}\n * @example\n *  hbnb.webview.back();\n */\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('called');\n    }\n\n    _invoke('webview', 'back');\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/back.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            383,
                            419,
                            "false",
                            4,
                          ],
                          [
                            154,
                            164,
                            "124",
                            2,
                          ],
                          [
                            146,
                            152,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:back');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 后退\n *\n * TODO: ANDROID 旧版实现有问题\n *\n * 支持版本\n * + iHotel/?\n *\n * @memberof webview\n * @static\n * @name back\n * @return {Undefined}\n * @example\n *  hbnb.webview.back();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    _invoke('webview', 'back');\n};\n",
                      _cachedSize: 418,
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
                "/* 281 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:closeAll');\n}\n\nvar _invoke = require('../invoke');\nvar env = require('../invoke/env');\nvar versionCompare = require('../invoke/version-compare');\n\n/**\n * 适用的场景是抢票任务编辑，从任务列表不想回表单.\n * ABCBC，在C页面closeAll([B, C])就退到页面A\n *\n * 与 `hbnb.webview.open` 配合使用\n *\n * 支持版本\n * + Android\n * + iHotel/6.5+\n *\n * @memberof webview\n * @static\n * @name closeAll\n * @param {Array} urls 连续关闭的URL\n * @return {Undefined}\n * @example\n *  hbnb.webview.closeAll([\n *      '/qiangpiao/add/',\n *      '/qiangpiao/list/'\n *  ]);\n */\nmodule.exports = function(urls) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('url list %s', urls);\n    }\n\n    if (env.platform === 'android' && versionCompare(env.appVersion, '6.5') >= 0) {\n        _invoke('webview', 'close_all', {\n            urls: urls\n        });\n    } else {\n        _invoke('webview', 'close');\n    }\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/close-all.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            666,
                            702,
                            "false",
                            8,
                          ],
                          [
                            237,
                            263,
                            "141",
                            6,
                          ],
                          [
                            229,
                            235,
                            "__webpack_require__",
                            7,
                          ],
                          [
                            190,
                            204,
                            "128",
                            4,
                          ],
                          [
                            182,
                            188,
                            "__webpack_require__",
                            5,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:closeAll');\n}\n\nvar _invoke = __webpack_require__(124);\nvar env = __webpack_require__(128);\nvar versionCompare = __webpack_require__(141);\n\n/**\n * 适用的场景是抢票任务编辑，从任务列表不想回表单.\n * ABCBC，在C页面closeAll([B, C])就退到页面A\n *\n * 与 `hbnb.webview.open` 配合使用\n *\n * 支持版本\n * + Android\n * + iHotel/6.5+\n *\n * @memberof webview\n * @static\n * @name closeAll\n * @param {Array} urls 连续关闭的URL\n * @return {Undefined}\n * @example\n *  hbnb.webview.closeAll([\n *      '/qiangpiao/add/',\n *      '/qiangpiao/list/'\n *  ]);\n */\nmodule.exports = function(urls) {\n    if (false) {\n        debug('url list %s', urls);\n    }\n\n    if (env.platform === 'android' && versionCompare(env.appVersion, '6.5') >= 0) {\n        _invoke('webview', 'close_all', {\n            urls: urls\n        });\n    } else {\n        _invoke('webview', 'close');\n    }\n};\n",
                      _cachedSize: 885,
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
                "/* 282 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:close');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 关闭当前 webview\n *\n * 与 `hbnb.webivew.open` 配合使用\n *\n * TODO: ANDROID 旧版实现有问题\n *\n * 支持版本\n * + iHotel/?\n *\n * @memberof webview\n * @static\n * @name close\n * @return {Undefined}\n * @example\n *  hbnb.webview.close();\n */\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('called');\n    }\n\n    _invoke('webview', 'close');\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/close.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            429,
                            465,
                            "false",
                            4,
                          ],
                          [
                            155,
                            165,
                            "124",
                            2,
                          ],
                          [
                            147,
                            153,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:close');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 关闭当前 webview\n *\n * 与 `hbnb.webivew.open` 配合使用\n *\n * TODO: ANDROID 旧版实现有问题\n *\n * 支持版本\n * + iHotel/?\n *\n * @memberof webview\n * @static\n * @name close\n * @return {Undefined}\n * @example\n *  hbnb.webview.close();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    _invoke('webview', 'close');\n};\n",
                      _cachedSize: 465,
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
                "/* 283 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:dismiss');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 关闭当前 modal\n *\n * 与 `hbnb.webivew.modal` 配合使用\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name dismiss\n * @example\n *  hbnb.webview.dismiss();\n */\nmodule.exports = function() {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('called');\n    }\n\n    _invoke('webview', 'dismiss');\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/dismiss.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            386,
                            422,
                            "false",
                            4,
                          ],
                          [
                            157,
                            167,
                            "124",
                            2,
                          ],
                          [
                            149,
                            155,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:dismiss');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 关闭当前 modal\n *\n * 与 `hbnb.webivew.modal` 配合使用\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name dismiss\n * @example\n *  hbnb.webview.dismiss();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    _invoke('webview', 'dismiss');\n};\n",
                      _cachedSize: 424,
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
                "/* 284 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\n/**\n * @name webview\n */\n\nexports.open = require('./open.js');\nexports.back = require('./back.js');\nexports.close = require('./close.js');\nexports.closeAll = require('./close-all.js');\n\nexports.modal = require('./modal.js');\nexports.dismiss = require('./dismiss.js');\n\nexports.setTitle = require('./set-title.js');\nexports.setMenus = require('./set-menus.js');\nexports.setComplexTitle = require('./set-complex-title.js');\n\nexports.setBackAction = require('./set-back-action.js');\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/index.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            470,
                            491,
                            "287",
                            19,
                          ],
                          [
                            462,
                            468,
                            "__webpack_require__",
                            20,
                          ],
                          [
                            410,
                            433,
                            "288",
                            17,
                          ],
                          [
                            402,
                            408,
                            "__webpack_require__",
                            18,
                          ],
                          [
                            357,
                            372,
                            "289",
                            15,
                          ],
                          [
                            349,
                            355,
                            "__webpack_require__",
                            16,
                          ],
                          [
                            311,
                            326,
                            "290",
                            13,
                          ],
                          [
                            303,
                            309,
                            "__webpack_require__",
                            14,
                          ],
                          [
                            266,
                            279,
                            "283",
                            11,
                          ],
                          [
                            258,
                            264,
                            "__webpack_require__",
                            12,
                          ],
                          [
                            225,
                            236,
                            "285",
                            9,
                          ],
                          [
                            217,
                            223,
                            "__webpack_require__",
                            10,
                          ],
                          [
                            181,
                            196,
                            "281",
                            7,
                          ],
                          [
                            173,
                            179,
                            "__webpack_require__",
                            8,
                          ],
                          [
                            139,
                            150,
                            "282",
                            5,
                          ],
                          [
                            131,
                            137,
                            "__webpack_require__",
                            6,
                          ],
                          [
                            101,
                            111,
                            "280",
                            3,
                          ],
                          [
                            93,
                            99,
                            "__webpack_require__",
                            4,
                          ],
                          [
                            64,
                            74,
                            "286",
                            1,
                          ],
                          [
                            56,
                            62,
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
                      _cachedSource: "\n\n/**\n * @name webview\n */\n\nexports.open = __webpack_require__(286);\nexports.back = __webpack_require__(280);\nexports.close = __webpack_require__(282);\nexports.closeAll = __webpack_require__(281);\n\nexports.modal = __webpack_require__(285);\nexports.dismiss = __webpack_require__(283);\n\nexports.setTitle = __webpack_require__(290);\nexports.setMenus = __webpack_require__(289);\nexports.setComplexTitle = __webpack_require__(288);\n\nexports.setBackAction = __webpack_require__(287);\n",
                      _cachedSize: 478,
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
                "/* 285 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:modal');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 打开 modal 弹窗\n *\n * 1. 与 `hbnb.webivew.dismiss` 配合使用\n * 2. `modal` 弹窗内部不能继续调用 `modal` 弹窗，可以调用 `open`\n * 3. `dimiss` 时会关闭弹窗，且 modal 的操作不会纪录到后退路径中\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name modal\n * @param {String} url 页面地址\n * @return {Undefined}\n * @example\n *  hbnb.webview.modal('http://i..com');\n */\nmodule.exports = function(url) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('url is %s', url);\n    }\n\n    _invoke('webview', 'modal', {\n        url: url\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/modal.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            554,
                            590,
                            "false",
                            4,
                          ],
                          [
                            155,
                            165,
                            "124",
                            2,
                          ],
                          [
                            147,
                            153,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:modal');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开 modal 弹窗\n *\n * 1. 与 `hbnb.webivew.dismiss` 配合使用\n * 2. `modal` 弹窗内部不能继续调用 `modal` 弹窗，可以调用 `open`\n * 3. `dimiss` 时会关闭弹窗，且 modal 的操作不会纪录到后退路径中\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name modal\n * @param {String} url 页面地址\n * @return {Undefined}\n * @example\n *  hbnb.webview.modal('http://i..com');\n */\nmodule.exports = function(url) {\n    if (false) {\n        debug('url is %s', url);\n    }\n\n    _invoke('webview', 'modal', {\n        url: url\n    });\n};\n",
                      _cachedSize: 624,
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
                "/* 286 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:open');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 打开新页面\n *\n * 与 `hbnb.webivew.close` 配合使用\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name open\n * @param {String} url 页面地址\n * @return {Undefined}\n * @example\n *  hbnb.webview.open('http://i..com');\n */\nmodule.exports = function(url) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('url is %s', url);\n    }\n\n    _invoke('webview', 'open', {\n        url: url\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/open.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            448,
                            484,
                            "false",
                            4,
                          ],
                          [
                            154,
                            164,
                            "124",
                            2,
                          ],
                          [
                            146,
                            152,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:open');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开新页面\n *\n * 与 `hbnb.webivew.close` 配合使用\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name open\n * @param {String} url 页面地址\n * @return {Undefined}\n * @example\n *  hbnb.webview.open('http://i..com');\n */\nmodule.exports = function(url) {\n    if (false) {\n        debug('url is %s', url);\n    }\n\n    _invoke('webview', 'open', {\n        url: url\n    });\n};\n",
                      _cachedSize: 517,
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
                "/* 287 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:setBackAction');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 修改后退操作\n *\n * 一旦设置该函数，用户点击后退时只会调用该函数而不会直接后退。\n * 可在函数内调用 `hbnb.webview.back` 方法进行后退\n *\n * TODO: 支持版本\n *\n * 支持版本\n * + iHotel/??\n *\n * @memberof webview\n * @static\n * @name setBackAction\n * @param {Function} cb 点击后退按钮时执行的函数\n * @return {Undefined}\n * @example\n *  hbnb.webview.setBackAction(function() {\n *      // do something\n *  });\n */\nmodule.exports = function(cb) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('callback is %s', cb);\n    }\n\n    _invoke('webview', 'set_navbar_back', {\n        callback: function() {\n            cb();\n            return false;\n        }\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/set-back-action.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            560,
                            596,
                            "false",
                            4,
                          ],
                          [
                            163,
                            173,
                            "124",
                            2,
                          ],
                          [
                            155,
                            161,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:setBackAction');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 修改后退操作\n *\n * 一旦设置该函数，用户点击后退时只会调用该函数而不会直接后退。\n * 可在函数内调用 `hbnb.webview.back` 方法进行后退\n *\n * TODO: 支持版本\n *\n * 支持版本\n * + iHotel/??\n *\n * @memberof webview\n * @static\n * @name setBackAction\n * @param {Function} cb 点击后退按钮时执行的函数\n * @return {Undefined}\n * @example\n *  hbnb.webview.setBackAction(function() {\n *      // do something\n *  });\n */\nmodule.exports = function(cb) {\n    if (false) {\n        debug('callback is %s', cb);\n    }\n\n    _invoke('webview', 'set_navbar_back', {\n        callback: function() {\n            cb();\n            return false;\n        }\n    });\n};\n",
                      _cachedSize: 712,
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
                "/* 288 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nvar assert;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:setComplexTitle');\n    assert = require('assert');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 设置复杂标题\n *\n * 根据传入的 `type` 判断使用那种展示形式。\n * 如果当前版本不支持 `type`，会回退到普通形式，只展示 `title`。\n *\n * 目前只支持上下双栏的主副标题 `type='two-row'`\n *\n * 支持版本\n * + iHotel/5.9.2+\n *\n * @memberof webview\n * @static\n * @name setComplexTitle\n * @param {Object} opts 标题设置\n * @return {Undefined}\n * @example\n *  hbnb.webview.setComplexTitle({\n *      type: 'two-row',\n *      title: 'title',\n *      subTitle: 'subTitle'\n *  });\n */\nmodule.exports = function(opts) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('opts is %j', opts);\n        assert(opts.title);\n    }\n\n    _invoke('webview', 'set_complex_title', opts);\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/set-complex-title.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            670,
                            706,
                            "false",
                            4,
                          ],
                          [
                            209,
                            219,
                            "124",
                            2,
                          ],
                          [
                            201,
                            207,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            42,
                            78,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:setComplexTitle');\n    assert = require('assert');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 设置复杂标题\n *\n * 根据传入的 `type` 判断使用那种展示形式。\n * 如果当前版本不支持 `type`，会回退到普通形式，只展示 `title`。\n *\n * 目前只支持上下双栏的主副标题 `type='two-row'`\n *\n * 支持版本\n * + iHotel/5.9.2+\n *\n * @memberof webview\n * @static\n * @name setComplexTitle\n * @param {Object} opts 标题设置\n * @return {Undefined}\n * @example\n *  hbnb.webview.setComplexTitle({\n *      type: 'two-row',\n *      title: 'title',\n *      subTitle: 'subTitle'\n *  });\n */\nmodule.exports = function(opts) {\n    if (false) {\n        debug('opts is %j', opts);\n        assert(opts.title);\n    }\n\n    _invoke('webview', 'set_complex_title', opts);\n};\n",
                      _cachedSize: 762,
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
                "/* 289 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:setMenus');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 设置导航栏右侧按钮\n *\n * 目前支持 `icon`/`text` 两种类型的按钮\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name setMenus\n * @param {Array} menus 按钮设置\n * @return {Undefined}\n * @example\n *  hbnb.webview.setMenus([{\n *      type: 'text',\n *      text: '确定',\n *      color: '#cccccc',\n *      callback: function() {console.log('clicked'); return false;}\n *  }, {\n *      type: 'icon',\n *      icon: 'url',\n *      callback: function() {console.log('clicked'); return false;}\n *  ]);\n */\nmodule.exports = function(menus) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('menus is %j', menus);\n    }\n\n    _invoke('webview', 'set_navbar_menus', {\n        menus: menus\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/set-menus.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            710,
                            746,
                            "false",
                            4,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:setMenus');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 设置导航栏右侧按钮\n *\n * 目前支持 `icon`/`text` 两种类型的按钮\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name setMenus\n * @param {Array} menus 按钮设置\n * @return {Undefined}\n * @example\n *  hbnb.webview.setMenus([{\n *      type: 'text',\n *      text: '确定',\n *      color: '#cccccc',\n *      callback: function() {console.log('clicked'); return false;}\n *  }, {\n *      type: 'icon',\n *      icon: 'url',\n *      callback: function() {console.log('clicked'); return false;}\n *  ]);\n */\nmodule.exports = function(menus) {\n    if (false) {\n        debug('menus is %j', menus);\n    }\n\n    _invoke('webview', 'set_navbar_menus', {\n        menus: menus\n    });\n};\n",
                      _cachedSize: 799,
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
                "/* 290 */",
                "\n",
                {
                  children: [
                    "/***/ (function(module, exports, __webpack_require__) {\n\n",
                    "\"use strict\";\n",
                    {
                      _source: {
                        _source: {
                          _value: "'use strict';\n\nvar debug;\nif (process.env.NODE_ENV !== 'production') {\n    debug = require('debug')('hbnb:module:webview:setTitle');\n}\n\nvar _invoke = require('../invoke');\n\n/**\n * 修改标题\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name setTitle\n * @param {String} title 标题\n * @return {Undefined}\n * @example\n *  hbnb.webview.setTitle('new title');\n */\nmodule.exports = function(title) {\n    if (process.env.NODE_ENV !== 'production') {\n        debug('title is %s', title);\n    }\n\n    _invoke('webview', 'set_title', {\n        title: title\n    });\n};\n",
                          _name: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/node_modules//hbnb/webview/set-title.js",
                        },
                        _name: undefined,
                        replacements: [
                          [
                            416,
                            452,
                            "false",
                            4,
                          ],
                          [
                            158,
                            168,
                            "124",
                            2,
                          ],
                          [
                            150,
                            156,
                            "__webpack_require__",
                            3,
                          ],
                          [
                            30,
                            66,
                            "false",
                            1,
                          ],
                          [
                            0,
                            12,
                            "",
                            0,
                          ],
                        ],
                      },
                      _cachedSource: "\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:setTitle');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 修改标题\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name setTitle\n * @param {String} title 标题\n * @return {Undefined}\n * @example\n *  hbnb.webview.setTitle('new title');\n */\nmodule.exports = function(title) {\n    if (false) {\n        debug('title is %s', title);\n    }\n\n    _invoke('webview', 'set_title', {\n        title: title\n    });\n};\n",
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
                "\n]",
                ")",
              ],
            },
            ")",
          ],
        },
        ";",
      ],
    },
    _cachedSource: "webpackJsonp([0],Array(118).concat([\n/* 118 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/*global Promise*/\nvar hbnb = __webpack_require__(209);\nvar version = __webpack_require__(45);\nvar uncommenApis = __webpack_require__(184);\n\nif (typeof window !== 'undefined' && typeof window.Promise === 'undefined') {\n  window.Promise = __webpack_require__(46);\n}\n\nvar debug = false;\nvar bizname = null;\n\nvar shareChannelMap = {\n  'WECHAT_FRIENDS': 'weixinfriends',\n  'WECHAT_TIMELINE': 'weixin',\n  'QQ': 'qqclient',\n  'SMS': 'sms',\n  'WEIBO': 'sinaweibo',\n  'QZONE': 'qzone',\n  'EMAIL': 'email',\n  // 'COPY': ''  // todo: not supported by hbnb\n};\n\nvar currentButtons = {};\n\nvar availableApis = {\n  'config': true,\n  'isApiSupported': true,\n  'use': true,\n  'getUA': true,\n  'getUserInfo': true,\n  'getFingerprint': true,\n  'getNetworkType': false,\n  'login': true,\n  'logout': false,\n  'getLocation': true,\n  'getCity': true,\n  'getLocationCity': true,\n  'openWebview': true,\n  'jumpWebview': false,\n  'closeWebview': true,\n  'share': true,\n  'configShare': true,\n  'setTitle': true,\n  'setNavButtons': true,\n  'store': true,\n  'retrieve': true,\n\n  'checkVersion': false,\n  'chooseImage': false,\n  'uploadImage': false,\n  'previewImage': false,\n  'downloadImage': false,\n  'publish': false,\n  'subscribe': false,\n  'unsubscribe': false,\n  'setNavigationBarHidden': false,\n  'setBackgroundColor': false,\n  'setStatusBarStyle': false,\n  'setBouncesEnabled': false,\n  'alert': true,\n  'confirm': true,\n  'prompt': false,\n  'sendSMS': false,\n  'getContactList': false,\n  'setPullDown': false,\n  'stopPullDown': false\n\n};\n\nfunction noop() {\n}\n\nfunction isFunction(fn) {\n  return typeof fn === 'function';\n}\n\nfunction escapeRegExp(str) {\n  return str.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, \"\\\\$&\");\n}\n\nfunction qs(key) {\n  key = encodeURIComponent(key);\n\n  var res = null;\n  var search = location.search;\n\n  var reg = new RegExp('(?:\\\\?|&)' + escapeRegExp(key) + '=([^&]*)(?:&|$)');\n  var match = search.match(reg);\n\n  if (match && match.length > 1) {\n    res = decodeURIComponent(match[1]);\n  }\n\n  return res;\n}\n\n\nfunction xhr(url, success) {\n  try {\n    var _xhr = new XMLHttpRequest();\n    _xhr.open(\"GET\", url, true);\n    _xhr.onreadystatechange = function() {\n      if (_xhr.readyState == 4) {\n        _xhr.onreadystatechange = null;\n        var data = JSON.parse(_xhr.responseText);\n        if (data.status == 0) {\n          success(data.data);\n        }\n      }\n    };\n    _xhr.send();\n  } catch (e) {\n    console.error(e);\n  }\n}\n\n\nvar KNB = {\n  __version__: version,\n\n  ready: function(cb) {\n    cb && cb();\n  },\n\n  config: function(opts) {\n    debug = Boolean(opts.debug);\n    bizname = opts.bizname;\n  },\n\n  isApiSupported: function(opts) {\n    opts.success(availableApis[opts.apiName] === true);\n  },\n\n  use: function(apiName, opts) {\n    apiName = apiName.replace(/^hb\\./, '');\n    try {\n      var apiInfo = uncommenApis[apiName];\n      var args = apiInfo.params.map(function(paramName) {\n        return opts[paramName];\n      });\n\n      if (apiInfo.params.length === 1 && apiInfo.params[0] === 'opts') {\n        args = [opts];\n      }\n\n      var res = hbnb[apiInfo.memberof][apiInfo.name].apply(null, args);\n\n      if (apiInfo.return === 'Promise') {\n        res.then(opts.success || noop, opts.fail || noop);\n      } else {\n        return res;\n      }\n    } catch (ex) {\n      opts.fail && opts.fail();\n    }\n  },\n\n  getUserInfo: function(opts) {\n    Promise.all([\n      hbnb.account.getUser(),\n      // todo: there is no valid way to get uuid via hbnb\n      null\n    ]).then(function(values) {\n      var user = values[0];\n      var uuid = values[1];\n\n      opts.success({\n        type: 'mt',\n        userId: user.userId,\n        token: user.userToken,\n        uuid: uuid\n      });\n    }).catch(opts.fail || noop);\n  },\n\n  getFingerprint: function(opts) {\n    hbnb.pay.getFingerprint()\n      .then(function(fingerprint) {\n        opts.success({fingerprint: fingerprint});\n      }).catch(opts.fail || noop);\n  },\n\n  getNetworkType: function() {\n    if (debug) {\n      console.warn('KNB: API `getNetworkType` is not supported currently.');\n    }\n  },\n\n  login: function(opts) {\n    hbnb.account.login()\n      .then(function(user) {\n        opts.success({\n          type: 'mt',\n          userId: user.userId,\n          token: user.userToken\n        });\n      }).catch(opts.fail || noop);\n  },\n\n  logout: function() {\n    if (debug) {\n      console.warn('KNB: API `logout` is not supported currently.');\n    }\n  },\n\n  getLocation: function(opts) {\n    var lat = qs('lat');\n    var lng = qs('lng');\n\n    if (lat && lng) {\n      setTimeout(function() {\n        opts.success({\n          lat: lat,\n          lng: lng\n        });\n      }, 0);\n    } else {\n      setTimeout(opts.fail || noop, 0);\n    }\n  },\n\n  getCity: function(opts) {\n    if (!isFunction(opts.success)) {\n      return;\n    }\n\n    hbnb.position.getCity()\n      .then(function(city) {\n        opts.success({\n          type: 'mt',\n          cityId: city.cityId\n        });\n      }).catch(opts.fail || noop);\n  },\n\n  getLocationCity: function(opts) {\n    if (!isFunction(opts.success)) {\n      return;\n    }\n\n    KNB.getLocation({\n      success: function(loc) {\n        xhr(\"https://i..com/locate/latlng/\" + loc.lat + \",\" + loc.lng + \".json?ndr\", function(res) {\n          opts.success({\n            cityId: res.id,\n            type: 'mt'\n          });\n        });\n      },\n      fail: opts.fail\n    });\n  },\n\n  openWebview: function(opts) {\n    hbnb.webview.open(opts.url);\n  },\n\n  jumpWebview: function() {\n    if (debug) {\n      console.warn('KNB: API `jumpWebview` is not supported currently.');\n    }\n  },\n\n  closeWebview: function() {\n    hbnb.webview.close();\n  },\n\n  share: function(opts) {\n    // todo: `opts.success` is not supported by hbnb\n    if (!opts.channel || opts.channel.length === 0) {\n      opts.channel = ['all'];\n    }\n\n    hbnb.share.callLocal(opts.channel, {\n      title: opts.title,\n      content: opts.desc,\n      detailURL: opts.url,\n      imageURL: opts.image\n    });\n  },\n\n  configShare: function(opts) {\n    // todo: `opts.handle` and `opts.success` are not supported by hbnb\n    if (!opts.channel || opts.channel.length === 0) {\n      opts.channel = ['all'];\n    }\n\n    hbnb.share.activeNavButton(opts.channel, {\n      title: opts.title,\n      content: opts.desc,\n      detailURL: opts.url,\n      imageURL: opts.image\n    });\n  },\n\n  setTitle: function(opts) {\n    // todo: `opts.handle` is not supported by hbnb\n    hbnb.webview.setTitle(opts.title);\n  },\n\n  setNavButtons: function(buttons) {\n\n    var hbnbButtons = [];\n    buttons = [].concat(buttons);\n\n    // todo: `button.position` in ['LL', 'LR'] is not supported by hbnb\n    ['RR', 'RL'].forEach(function(position) {\n      var button = buttons.filter(function(btn) {\n        return position === btn.position;\n      });\n\n      if (button.length) {\n        currentButtons[position] = button[button.length - 1];\n      }\n      button = currentButtons[position];\n\n      if (!button || button.disable) return;\n\n      var res = {\n        callback: button.handle\n      };\n      switch (button.type) {\n        case 'base64':\n          res.type = 'icon';\n          res.icon = button.icon;\n          break;\n        case 'text':\n          res.type = 'text';\n          res.text = button.text;\n          res.color = button.color;\n          break;\n        default:\n        // do nothing\n      }\n      hbnbButtons.push(res);\n    });\n\n    hbnb.webview.setMenus(hbnbButtons);\n  },\n\n  setLLButton: function (ref) {\n    var handle = ref.handle; if ( handle === void 0 ) handle = noop;\n\n    hbnb.webview.setBackAction(handle);\n  },\n\n  store: function(opts) {\n    // todo: `opts.success` is not supported by hbnb\n    var key = bizname ? bizname + ':' + opts.key : opts.key;\n    hbnb.storage.setItem(key, JSON.stringify(opts.value));\n  },\n\n  retrieve: function(opts) {\n    var keys = opts.key.split(/:(.*)$/);\n    var biz = keys.length > 1 ? keys[0] : bizname;\n    var key = keys.length > 1 ? keys[1] : keys[0];\n    key = biz ? biz + ':' + key : key;\n    hbnb.storage.getItem(key)\n      .then(function(value) {\n        opts.success(JSON.parse(value));\n      }).catch(opts.fail || noop);\n  },\n\n  alert: function (ref) {\n    var message = ref.message;\n    var title = ref.title;\n    var handle = ref.handle; if ( handle === void 0 ) handle = noop;\n    var button = ref.button;\n\n    hbnb.ui.alert(message, title, [{\n      label: button,\n      callback: function () {\n        handle();\n      }\n    }]);\n  },\n\n  confirm: function (ref) {\n    var message = ref.message;\n    var title = ref.title;\n    var okButton = ref.okButton;\n    var cancelButton = ref.cancelButton;\n    var handle = ref.handle; if ( handle === void 0 ) handle = noop;\n\n    hbnb.ui.confirm(message, title, {\n      label: okButton,\n      callback: function () {handle({ret: true});}\n    },{\n      label: cancelButton,\n      callback: function () {handle({ret: false});}\n    });\n  }\n};\n\nfor (var key in shareChannelMap) {\n  if (shareChannelMap.hasOwnProperty(key)) {\n    KNB.share[key] = shareChannelMap[key];\n  }\n}\nKNB.getUA = __webpack_require__(44);\n\nvar logEvent = __webpack_require__(126);\n// 统计hbnb调用次数\nlogEvent(\"hbnb\", version);\n\nmodule.exports = KNB;\n\n\n/***/ }),\n/* 119 */,\n/* 120 */,\n/* 121 */,\n/* 122 */,\n/* 123 */,\n/* 124 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nmodule.exports = __webpack_require__(219);\n\n\n/***/ }),\n/* 125 */,\n/* 126 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar request = __webpack_require__(127);\n\nmodule.exports = function logEvent (type, version) {\n  if (Math.random() >= 0.1) return;\n  var host;\n  var hosts = [\n    'dianping.com',  \n    '.com', \n    '', \n    '.net', \n    'maoyan.com',\n    'm-zl-st.cfcmu.cn',\n    'm-zl.mucfc.com'\n  ];\n  var hostsBeta = [\n    'localhost',\n    '51ping.com',\n    'alpha.dp'\n  ];\n  for (var i = 0; i < hosts.length; i++) {\n    if (location.href.indexOf(hosts[i]) !== -1) {\n      host = 'm.dianping.com';\n      break;\n    }\n  }\n  if (!host) {\n    for (var j = 0; j < hostsBeta.length; j++) {\n      if (location.href.indexOf(hostsBeta[j])!==-1) {\n        host = 'm.51ping.com';\n      }\n    }\n  }\n  if (host) {\n    request({\n        url: '//' + host + '/mtnb/api/statistics',\n        data: {\n            version: version,\n            type: type\n        }\n    });    \n  }\n};\n\n/***/ }),\n/* 127 */\n/***/ (function(module, exports) {\n\nvar globalCount = 0;\n\nvar urlStringify = function (url, data) {\n    if (!data) {\n        return url;\n    }\n    var param = [];\n    for (var o in data) {\n        if (data.hasOwnProperty(o)) {\n            param.push(o + '=' + data[o]);\n        }\n    }\n    return ~url.indexOf('?') ? url + param.join('&') : url + '?' + param.join('&');\n};\n\n/**\n * jsonp\n * */\nmodule.exports = function (options) {\n\n    if (!options.url) {\n        throw new Error('url request!');\n    }\n    var data = options.data || {};\n    var cb = options.onSuc || function () {\n    };\n    var cbName = data.callback = 'KNB' + (++globalCount) + (+new Date());\n\n    var script = document.createElement('script');\n    script.src = urlStringify(options.url, data);\n\n    window[cbName] = function (res) {\n        delete window[cbName];\n        script.parentNode.removeChild(script);\n        cb(res);\n    };\n\n    document.getElementsByTagName('head')[0].appendChild(script);\n};\n\n/***/ }),\n/* 128 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:env');\n}\n\n\n// default value\nexports.isHBNBWebview = false;\nexports.platform = 'h5';\nexports.appVersion = undefined;\nexports.supportPrompt = undefined; // android group 5.x not support alert\nexports.HBNBReady = false;\n\nvar versionCompare = __webpack_require__(141);\nvar initEvent = __webpack_require__(218);\n\nvar initVersion = function() {\n    // user agent regexp\n    var RE_ANDROID = (/android/i);\n    var RE_IOS = (/iPhone|iPad/i);\n    var RE_HBNB = (/\\biHotel\\/(\\d+(?:\\.\\d+)*)\\b/i);\n    var TRIP_BIZ = (/mt_trip_biz/i);\n\n    // check user agent\n    var ua = navigator.userAgent || '';\n    var match = ua.match(RE_HBNB);\n    if (match) {\n        if (RE_IOS.test(ua)) {\n            exports.platform = 'ios';\n            exports.appVersion = match[1];\n            exports.isHBNBWebview = true;\n        } else if (RE_ANDROID.test(ua)) {\n            exports.platform = 'android';\n            exports.appVersion = match[1];\n            exports.isHBNBWebview = true;\n            exports.supportPrompt = TRIP_BIZ.test(ua) || Boolean(versionCompare(exports.appVersion, '6.0') >= 0);\n        }\n    }\n};\n\nvar init = function() {\n    initVersion();\n    initEvent();\n};\n\ninit();\n\nif (false) {\n    debug('env = %j', exports);\n}\n\n\n/***/ }),\n/* 129 */,\n/* 130 */,\n/* 131 */,\n/* 132 */,\n/* 133 */,\n/* 134 */,\n/* 135 */,\n/* 136 */,\n/* 137 */,\n/* 138 */,\n/* 139 */,\n/* 140 */,\n/* 141 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:version-compare');\n}\n\n/**\n * compare version number\n *\n * @private\n * @param {String} a\n * @param {String} b\n * @return {Number} -1 is <, 0 is =, 1 is >\n *\n * @example\n *  compare('6.0', '6.0.1'); // -1\n *  compare('6.0', '5.9'); // 1\n *  compare('5.9.2', '5.9.2'); // 0\n */\nvar compare = function(a, b) {\n    var pa = String(a).split('.');\n    var pb = String(b).split('.');\n    var len = Math.min(pa.length, pb.length) + 1;\n\n    if (false) {\n        debug('a is %j', pa);\n        debug('b is %j', pb);\n    }\n\n    for (var i = 0; i < len; ++i) {\n        var na = Number(pa[i]);\n        var nb = Number(pb[i]);\n        if (na > nb) {\n            return 1;\n        } else if (nb > na) {\n            return -1;\n        } else if (!isNaN(na) && isNaN(nb)) {\n            return 1;\n        } else if (isNaN(na) && !isNaN(nb)) {\n            return -1;\n        }\n    }\n    return 0;\n};\n\nmodule.exports = compare;\n\n\n/***/ }),\n/* 142 */,\n/* 143 */,\n/* 144 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:build-uri');\n}\n\nvar _id = 0;\nvar _buildCallback = function(fn) {\n    var fnID = (new Date().getTime() + '_' + (++_id));\n    var callbackName = 'HBNB_CALLBACK_' + fnID;\n    window[callbackName] = (function(fn, callbackName) {\n        var innerFN = function() {\n            var r = fn.apply(null, arguments);\n            if (r !== false) {\n                delete window[callbackName];\n            }\n        };\n        return innerFN;\n    })(fn, callbackName);\n\n    if (false) {\n        //debug('window[\"%s\"] call \"%s\"', callbackName, fn);\n    }\n\n    return callbackName;\n};\n\nvar _processParameters = function(key, value) {\n    if (typeof value === 'function') {\n        return _buildCallback(value);\n    } else {\n        return value;\n    }\n};\n\nvar buildURI = function(protocol, moduleName, methodName, parameters) {\n    if (false) {\n        debug('protocol = %s', protocol);\n        debug('module = %s', moduleName);\n        debug('method = %s', methodName);\n        debug('before process, parameters is %j', parameters);\n    }\n\n    var params = encodeURIComponent(JSON.stringify(parameters, _processParameters));\n    if (false) {\n        debug('after encode, parameters is %s', params);\n    }\n\n    var uri = protocol + '//' + moduleName + '/' + methodName + '?params=' + params;\n\n    if (false) {\n        debug('uri = %s', uri);\n    }\n\n    return uri;\n};\n\nmodule.exports = buildURI;\nmodule.exports.processParams = _processParameters; // for legency-lvyou\n\n\n/***/ }),\n/* 145 */,\n/* 146 */,\n/* 147 */,\n/* 148 */,\n/* 149 */,\n/* 150 */,\n/* 151 */,\n/* 152 */,\n/* 153 */,\n/* 154 */,\n/* 155 */,\n/* 156 */,\n/* 157 */,\n/* 158 */,\n/* 159 */,\n/* 160 */,\n/* 161 */,\n/* 162 */,\n/* 163 */,\n/* 164 */,\n/* 165 */,\n/* 166 */,\n/* 167 */,\n/* 168 */,\n/* 169 */,\n/* 170 */,\n/* 171 */,\n/* 172 */,\n/* 173 */,\n/* 174 */,\n/* 175 */,\n/* 176 */,\n/* 177 */,\n/* 178 */,\n/* 179 */,\n/* 180 */,\n/* 181 */,\n/* 182 */,\n/* 183 */,\n/* 184 */\n/***/ (function(module, exports) {\n\nmodule.exports = {\n  \"core.HBNBVersion\": {\n    \"params\": [],\n    \"memberof\": \"core\",\n    \"name\": \"HBNBVersion\",\n    \"return\": \"Promise\"\n  },\n  \"core.OS\": {\n    \"params\": [],\n    \"memberof\": \"core\",\n    \"name\": \"OS\",\n    \"return\": \"Promise\"\n  },\n  \"core.supportApis\": {\n    \"params\": [],\n    \"memberof\": \"core\",\n    \"name\": \"supportApis\",\n    \"return\": \"Promise\"\n  },\n  \"account.getUser\": {\n    \"params\": [],\n    \"memberof\": \"account\",\n    \"name\": \"getUser\",\n    \"return\": \"Promise\"\n  },\n  \"account.login\": {\n    \"params\": [],\n    \"memberof\": \"account\",\n    \"name\": \"login\",\n    \"return\": \"Promise\"\n  },\n  \"account.mobileLogin\": {\n    \"params\": [\n      \"mobile\",\n      \"code\"\n    ],\n    \"memberof\": \"account\",\n    \"name\": \"mobileLogin\",\n    \"return\": \"Promise\"\n  },\n  \"account.sendMobileLoginCode\": {\n    \"params\": [\n      \"mobile\"\n    ],\n    \"memberof\": \"account\",\n    \"name\": \"sendMobileLoginCode\",\n    \"return\": \"Promise\"\n  },\n  \"log.mge\": {\n    \"params\": [\n      \"cid\",\n      \"act\",\n      \"val\",\n      \"lab\"\n    ],\n    \"memberof\": \"log\",\n    \"name\": \"mge\",\n    \"return\": \"Undefined\"\n  },\n  \"network.request\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"network\",\n    \"name\": \"request\",\n    \"return\": \"Promise\"\n  },\n  \"network.sendSms\": {\n    \"params\": [],\n    \"memberof\": \"network\",\n    \"name\": \"sendSms\"\n  },\n  \"pay.getFingerprint\": {\n    \"params\": [],\n    \"memberof\": \"pay\",\n    \"name\": \"getFingerprint\",\n    \"return\": \"Promise\"\n  },\n  \"pay.payment\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"pay\",\n    \"name\": \"payment\",\n    \"return\": \"Promise\"\n  },\n  \"position.getCity\": {\n    \"params\": [],\n    \"memberof\": \"position\",\n    \"name\": \"getCity\",\n    \"return\": \"Promise\"\n  },\n  \"storage.getItem\": {\n    \"params\": [],\n    \"memberof\": \"storage\",\n    \"name\": \"getItem\",\n    \"return\": \"Promise\"\n  },\n  \"storage.removeItem\": {\n    \"params\": [],\n    \"memberof\": \"storage\",\n    \"name\": \"removeItem\",\n    \"return\": \"Undefined\"\n  },\n  \"storage.setItem\": {\n    \"params\": [],\n    \"memberof\": \"storage\",\n    \"name\": \"setItem\",\n    \"return\": \"Undefined\"\n  },\n  \"storage.setResult\": {\n    \"params\": [\n      \"obj\"\n    ],\n    \"memberof\": \"storage\",\n    \"name\": \"setResult\",\n    \"return\": \"Undefined\"\n  },\n  \"thirdApps.installed\": {\n    \"params\": [\n      \"appName\"\n    ],\n    \"memberof\": \"thirdApps\",\n    \"name\": \"installed\",\n    \"return\": \"Promise\"\n  },\n  \"ui.alert\": {\n    \"params\": [\n      \"message\",\n      \"title\",\n      \"button\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"alert\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.autoLock\": {\n    \"params\": [\n      \"enable\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"autoLock\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.confirm\": {\n    \"params\": [\n      \"message\",\n      \"title\",\n      \"leftButton\",\n      \"rightButton\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"confirm\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.loadingStart\": {\n    \"params\": [],\n    \"memberof\": \"ui\",\n    \"name\": \"loadingStart\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.loadingStop\": {\n    \"params\": [],\n    \"memberof\": \"ui\",\n    \"name\": \"loadingStop\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.options\": {\n    \"params\": [\n      \"menus\",\n      \"cancel\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"options\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.selectDate\": {\n    \"params\": [\n      \"current\",\n      \"maxDate\",\n      \"minDate\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"selectDate\",\n    \"return\": \"Promise\"\n  },\n  \"ui.singleSelect\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"singleSelect\",\n    \"return\": \"Undefined\"\n  },\n  \"ui.toast\": {\n    \"params\": [\n      \"message\",\n      \"time\"\n    ],\n    \"memberof\": \"ui\",\n    \"name\": \"toast\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.back\": {\n    \"params\": [],\n    \"memberof\": \"webview\",\n    \"name\": \"back\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.closeAll\": {\n    \"params\": [\n      \"urls\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"closeAll\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.close\": {\n    \"params\": [],\n    \"memberof\": \"webview\",\n    \"name\": \"close\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.dismiss\": {\n    \"params\": [],\n    \"memberof\": \"webview\",\n    \"name\": \"dismiss\"\n  },\n  \"webview.modal\": {\n    \"params\": [\n      \"url\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"modal\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.open\": {\n    \"params\": [\n      \"url\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"open\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setBackAction\": {\n    \"params\": [\n      \"cb\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setBackAction\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setComplexTitle\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setComplexTitle\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setMenus\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setMenus\",\n    \"return\": \"Undefined\"\n  },\n  \"webview.setTitle\": {\n    \"params\": [\n      \"title\"\n    ],\n    \"memberof\": \"webview\",\n    \"name\": \"setTitle\",\n    \"return\": \"Undefined\"\n  },\n  \"tower.sendTopicCommentSuccess\": {\n    \"params\": [],\n    \"memberof\": \"tower\",\n    \"name\": \"sendTopicCommentSuccess\",\n    \"return\": \"Promise\"\n  },\n  \"tower.comment\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"tower\",\n    \"name\": \"comment\",\n    \"return\": \"Promise\"\n  },\n  \"tower.getUuid\": {\n    \"params\": [],\n    \"memberof\": \"tower\",\n    \"name\": \"getUuid\",\n    \"return\": \"Promise\"\n  },\n  \"tower.shareConfig\": {\n    \"params\": [\n      \"name\",\n      \"opts\"\n    ],\n    \"memberof\": \"tower\",\n    \"name\": \"shareConfig\",\n    \"return\": \"Promise\"\n  },\n  \"tower.checkNickname\": {\n    \"params\": [],\n    \"memberof\": \"tower\",\n    \"name\": \"checkNickname\",\n    \"return\": \"Promise\"\n  },\n  \"flight.alipay\": {\n    \"params\": [\n      \"orderId\",\n      \"payURL\",\n      \"returnURL\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"alipay\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getExpress\": {\n    \"params\": [\n      \"siteId\",\n      \"id\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"getExpress\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getFilter\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"getFilter\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getLinkman\": {\n    \"params\": [\n      \"id\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"getLinkman\",\n    \"return\": \"Promise\"\n  },\n  \"flight.getUser\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"getUser\",\n    \"return\": \"Promise\"\n  },\n  \"flight.gotoAppHomepage\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"gotoAppHomepage\",\n    \"return\": \"Undefined\"\n  },\n  \"flight.gotoOrderDetail\": {\n    \"params\": [\n      \"url\",\n      \"orderListUrl\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"gotoOrderDetail\",\n    \"return\": \"Undefined\"\n  },\n  \"flight.login\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"login\",\n    \"return\": \"Promise\"\n  },\n  \"flight.selectCity\": {\n    \"params\": [\n      \"city\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"selectCity\",\n    \"return\": \"Promise\"\n  },\n  \"flight.selectDate\": {\n    \"params\": [\n      \"fromCity\",\n      \"toCity\",\n      \"months\",\n      \"original\"\n    ],\n    \"memberof\": \"flight\",\n    \"name\": \"selectDate\",\n    \"return\": \"Promise\"\n  },\n  \"flight.selectRoundDate\": {\n    \"params\": [],\n    \"memberof\": \"flight\",\n    \"name\": \"selectRoundDate\",\n    \"return\": \"Promise\"\n  },\n  \"train.gotoOrderDetail\": {\n    \"params\": [\n      \"url\",\n      \"orderListUrl\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"gotoOrderDetail\",\n    \"return\": \"Undefined\"\n  },\n  \"train.gotoOrderList\": {\n    \"params\": [\n      \"url\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"gotoOrderList\",\n    \"return\": \"Undefined\"\n  },\n  \"train.multiSelect\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"multiSelect\",\n    \"return\": \"Promise\"\n  },\n  \"train.ringtone\": {\n    \"params\": [\n      \"loop\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"ringtone\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectDateRush\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectDateRush\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectDateStudent\": {\n    \"params\": [\n      \"opts\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectDateStudent\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectDate\": {\n    \"params\": [\n      \"date\",\n      \"days\",\n      \"tips\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectDate\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectStation\": {\n    \"params\": [\n      \"stationCode\",\n      \"stationType\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectStation\",\n    \"return\": \"Promise\"\n  },\n  \"train.selectTrains\": {\n    \"params\": [\n      \"menus\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"selectTrains\",\n    \"return\": \"Promise\"\n  },\n  \"train.timeRange\": {\n    \"params\": [\n      \"start\",\n      \"end\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"timeRange\",\n    \"return\": \"Promise\"\n  },\n  \"train.timeTable\": {\n    \"params\": [\n      \"stations\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"timeTable\",\n    \"return\": \"Undefined\"\n  },\n  \"train.vibrate\": {\n    \"params\": [\n      \"duration\"\n    ],\n    \"memberof\": \"train\",\n    \"name\": \"vibrate\",\n    \"return\": \"Promise\"\n  },\n  \"inject.addStopUrl\": {\n    \"params\": [\n      \"name\",\n      \"pattern\",\n      \"script\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"addStopUrl\",\n    \"return\": \"Promise\"\n  },\n  \"inject.callback\": {\n    \"params\": [\n      \"fnName\",\n      \"data\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"callback\",\n    \"return\": \"Undefined\"\n  },\n  \"inject.close\": {\n    \"params\": [\n      \"name\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"close\",\n    \"return\": \"Promise\"\n  },\n  \"inject.loadHTML\": {\n    \"params\": [\n      \"name\",\n      \"url\",\n      \"html\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"loadHTML\",\n    \"return\": \"Promise\"\n  },\n  \"inject.load\": {\n    \"params\": [\n      \"name\",\n      \"url\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"load\",\n    \"return\": \"Promise\"\n  },\n  \"inject.runScript\": {\n    \"params\": [\n      \"name\",\n      \"script\",\n      \"param\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"runScript\",\n    \"return\": \"Promise\"\n  },\n  \"inject.show\": {\n    \"params\": [\n      \"name\"\n    ],\n    \"memberof\": \"inject\",\n    \"name\": \"show\",\n    \"return\": \"Promise\"\n  },\n  \"travel.getPosDeviceId\": {\n    \"params\": [],\n    \"memberof\": \"travel\",\n    \"name\": \"getPosDeviceId\",\n    \"return\": \"Promise\"\n  },\n  \"travel.print\": {\n    \"params\": [\n      \"content\"\n    ],\n    \"memberof\": \"travel\",\n    \"name\": \"print\",\n    \"return\": \"Promise\"\n  },\n  \"travel.check_printer_state\": {\n    \"params\": [],\n    \"memberof\": \"travel\",\n    \"name\": \"check_printer_state\",\n    \"return\": \"Promise\"\n  },\n  \"travel.selectCity\": {\n    \"params\": [\n      \"city\"\n    ],\n    \"memberof\": \"travel\",\n    \"name\": \"selectCity\",\n    \"return\": \"Promise\"\n  },\n  \"travel.setGdata\": {\n    \"params\": [\n      \"bigG\"\n    ],\n    \"memberof\": \"travel\",\n    \"name\": \"setGdata\",\n    \"return\": \"Promise\"\n  },\n  \"env.getPageEnv\": {\n    \"params\": [],\n    \"memberof\": \"env\",\n    \"name\": \"getPageEnv\",\n    \"return\": \"Promise\"\n  },\n  \"share.activeNavButton\": {\n    \"params\": [\n      \"channel\",\n      \"conf\"\n    ],\n    \"memberof\": \"share\",\n    \"name\": \"activeNavButton\",\n    \"return\": \"Undefined\"\n  },\n  \"share.callLocal\": {\n    \"params\": [\n      \"channel\",\n      \"conf\"\n    ],\n    \"memberof\": \"share\",\n    \"name\": \"callLocal\",\n    \"return\": \"Undefined\"\n  },\n  \"share.disableNavButton\": {\n    \"params\": [],\n    \"memberof\": \"share\",\n    \"name\": \"disableNavButton\",\n    \"return\": \"Undefined\"\n  }\n};\n\n/***/ }),\n/* 185 */,\n/* 186 */,\n/* 187 */,\n/* 188 */,\n/* 189 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:account:getUser');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取用户登录信息\n *\n * 用户已登录时 resolve，用户未登录 reject\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof account\n * @static\n * @name getUser\n * @return {Promise<user | err>}\n * @example\n *  hbnb.account.getUser()\n *      .then(function(user) {\n *          user = {\n *              userId: 1234567,\n *              userName: 'name is string',\n *              userToken: 'token is string'\n *          }\n *      })\n *      .catch(function(err) {\n *          err = {\n *              message: \"用户未登录美团\",\n *              status: -1\n *          }\n *      });\n */\n\nmodule.exports = function(cb, eb) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'get_user', {\n            callback: function(user) {\n                if (false) {\n                    debug('user is %j', user, user);\n                }\n                resolve(user);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 190 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name account\n */\n\nexports.login = __webpack_require__(191);\nexports.getUser = __webpack_require__(189);\nexports.mobileLogin = __webpack_require__(192);\nexports.sendMobileLoginCode = __webpack_require__(193);\n\n\n/***/ }),\n/* 191 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:account:login');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开客户端登录界面\n *\n * 1. 客户端不会判断是否已经登录。\n * 需要业务方自己调用 `hbnb.account.getUser` 判断是否已经登录。\n * 2. 用户没有登录直接返回时，客户端不会给出通知。\n * 需要业务方自己监听 `HBNB:pageshow` 事件。\n *\n * 支持版本\n * + iHotel/5.8\n *\n * @memberof account\n * @static\n * @name login\n * @returns {Promise<user>} resolve if login success\n * @example\n *  hbnb.account.login()\n *      .then(function(user) {\n *          user = {\n *              userId: 1234567,\n *              userName: 'name is string',\n *              userToken: 'token is string'\n *          }\n *      })\n */\n\nmodule.exports = function() {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'login', {\n            callback: function(user) {\n                if (false) {\n                    debug('success, user is %j', user, user);\n                }\n                resolve(user);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 192 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:account:mobileLogin');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开客户端登录界面\n *\n * 客户端不会判断是否已经登录。\n * 需要业务方自己调用 `hbnb.account.getUser` 判断是否已经登录。\n *\n * 支持版本\n * + iHotel/6.2\n *\n * @memberof account\n * @static\n * @name mobileLogin\n * @param mobile\n * @param code\n * @returns {Promise<user>} resolve if login success\n * @example\n *  hbnb.account.mobileLogin(19988887777, 123456)\n *      .then(function(user) {\n *          user = {\n *              userId: 1234567,\n *              userName: 'name is string',\n *              userToken: 'token is string'\n *          }\n *      })\n *      .catch(function(err) {\n *      })\n */\n\nmodule.exports = function(mobile, code) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'mobile_login', {\n            mobile: mobile,\n            code: code,\n            callback: function(user) {\n                if (false) {\n                    debug('success, user is %j', user, user);\n                }\n                resolve(user);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 193 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:account:sendMobileLoginCode');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n\n *\n * 支持版本\n * + iHotel/6.2\n *\n * @memberof account\n * @static\n * @name sendMobileLoginCode\n * @param {String} mobile 手机号\n * @returns {Promise<user>} resolve if login success\n * @example\n *  hbnb.account.sendMobileLoginCode('19988887777')\n *      .then(function() {\n *      })\n *      .catch(function() {\n *      })\n */\n\nmodule.exports = function(mobile) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('user', 'send_mobile_login_code', {\n            mobile: mobile,\n            callback: function() {\n                resolve();\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 194 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:core:HBNBVersion');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取桥协议版本\n *\n * 支持版本\n * + iHotel/6.1+\n * + HBNB/?\n *\n * @memberof core\n * @static\n * @name HBNBVersion\n * @return {Promise<version>}\n * @example\n *  hbnb.core.HBNBVersion()\n *      .then(function(version) {\n *      });\n */\n\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('core', 'hbnb_version', {\n            callback: function(version) {\n                if (false) {\n                    debug('version is %j', version);\n                }\n                if (version && version.version) {\n                    resolve(version.version);\n                } else {\n                    reject();\n                }\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 195 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name core\n */\n\nexports.HBNBVersion = __webpack_require__(194);\nexports.supportApis = __webpack_require__(197);\nexports.OSVersion = __webpack_require__(196);\n\n\n/***/ }),\n/* 196 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:core:OSVersion');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取桥协议版本\n *\n * 支持版本\n * + iHotel/6.1+\n * + HBNB/?\n *\n * @memberof core\n * @static\n * @name OS\n * @return {Promise<version>}\n * @example\n *  hbnb.core.OSVersion()\n *      .then(function(version) {\n *          version = {\n *              os: 'ios',\n *              version: '9.0'\n *          }\n *      });\n */\n\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('core', 'os_version', {\n            callback: function(version) {\n                if (false) {\n                    debug('version is %j', version);\n                }\n                resolve(version);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 197 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:core:supportApis');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取桥协议版本\n *\n * 支持版本\n * + iHotel/6.1+\n * + HBNB/?\n *\n * @memberof core\n * @static\n * @name supportApis\n * @return {Promise<Array>}\n * @example\n *  hbnb.core.supportApis([\n *      'magpie://ui/alert',\n *      'magpie://what/the_f**k'\n *  ])\n *      .then(function(status) {\n *          status = [\n *              true,\n *              false\n *          ]\n *      });\n */\n\nmodule.exports = function(apis) {\n    if (false) {\n        debug('apis is %j', apis);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('core', 'support_apis', {\n            callback: function(status) {\n                if (false) {\n                    debug('status is %j', status);\n                }\n                resolve(status);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 198 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:env:getPageEnv');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取当前页面变量\n *\n * 支持版本\n * + iHotel/6.3\n *\n * @memberof env\n * @static\n * @name getPageEnv\n * @return {Promise<version>}\n * @example\n *  hbnb.env.getPageEnv()\n *      .then(function(env) {\n *      });\n */\n\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('env', 'get_page_env', {\n            callback: function(env) {\n                resolve(env);\n            },\n            errback: function(err) {\n                reject(err);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 199 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name env\n */\n\nexports.getPageEnv = __webpack_require__(198);\n\n\n/***/ }),\n/* 200 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:getExpress');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取邮寄地址\n *\n * @memberof flight\n * @static\n * @name getExpress\n * @param {siteId} siteId,\n * @param {int} id 默认为 '',\n * @return {Promise}\n * @example\n hbnb.flight.getExpress(1, '').then(function(data) {\n     data = {\n         id: 'id is number',\n         name: 'name is string',\n         mobile: 'mobile is string',\n         province: 'province is string',\n         city: 'city is string',\n         district: 'district is string',\n         address: 'address is string',\n         postCode: 'postCode is string',\n         expressAmount: 'expressAmount is string'\n     }\n });\n */\nmodule.exports = function(siteId, id) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'get_express', {\n            siteId: siteId,\n            id: id,\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 201 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:getFilter');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 机票筛选\n *\n * TODO：补全参数\n *\n * @memberof flight\n * @static\n * @name getFilter\n * @param {Object} opts\n * @return {Promise}\n * @example\n *  hbnb.flight.getFilters([\n *  ]).then(function(data) {\n *  });\n */\nmodule.exports = function(opts) {\n    if (false) {\n        debug('opts is %j', opts);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'get_filter', {\n            options: opts,\n            callback: function(data) {\n                resolve(data);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 202 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:getLinkman');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取联系人\n *\n * @memberof flight\n * @static\n * @name getLinkman\n * @param {int} id 默认为 '', \n * @return {Promise}\n * @example\n * hbnb.flight.getLinkman('').then(function(data) {\n *     data = {\n           id: 'id is number',\n *         name: 'name is string',\n *         mobile: 'mobile is string',\n *         email: 'mobile is string',\n *     }\n * });\n */\nmodule.exports = function(id) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'get_linkman', {\n            id: id,\n            is_international: is_international,\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n\n\n\n/***/ }),\n/* 203 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:gotoAppHomepage');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 返回 app 首页\n *\n * @memberof flight\n * @static\n * @name gotoAppHomepage\n * @return {Undefined}\n * @example\n *  hbnb.flight.gotoAppHomepage();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    _invoke('flight', 'goto_app_homepage');\n};\n\n\n/***/ }),\n/* 204 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:gotoOrderDetail');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 进入机票订单详情页面\n *\n * 点击后退时会返回订单列表页面，再后退会返回我的页面\n *\n * @memberof flight\n * @static\n * @name gotoOrderDetail\n * @param {String} url 订单页面地址\n * @param {String} orderListUrl 订单列表页面地址\n * @return {Undefined}\n * @example\n *  hbnb.flight.gotoOrderDetail(\n *      'url'\n *      'orderListUrl'\n *  );\n */\nmodule.exports = function(url, orderListUrl) {\n    if (false) {\n        debug('url is %s', url);\n        debug('orderListUrl is %s', orderListUrl);\n    }\n\n    _invoke('flight', 'goto_order_detail', {\n        url: url,\n        orderListUrl: orderListUrl\n    });\n};\n\n\n/***/ }),\n/* 205 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name flight\n */\n\nexports.gotoAppHomepage = __webpack_require__(203);\n\n//exports.getUser = require('./get-user.js');\n//exports.login = require('./login.js');\n\nexports.getFilter = __webpack_require__(201);\nexports.getLinkman = __webpack_require__(202);\nexports.getExpress = __webpack_require__(200);\nexports.selectCity = __webpack_require__(206);\nexports.selectDate = __webpack_require__(207);\nexports.selectRoundDate = __webpack_require__(208);\n\n//exports.alipay = require('./alipay.js');\n\nexports.gotoOrderDetail = __webpack_require__(204);\n\n\n/***/ }),\n/* 206 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:selectCity');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择城市\n *\n * @memberof flight\n * @static\n * @name selectCity\n * @param {String} city\n * @return {Promise}\n * @example\n *  hbnb.flight.selectCity('city')\n *      .then(function(city) {\n *          city = {\n *              cityName: '',\n *              cityPinyin: ''\n *          }\n *      });\n */\nmodule.exports = function(city) {\n    if (false) {\n        debug('city is %s', city);\n    }\n    city = city || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'select_city', {\n            original: city,\n            callback: function(city) {\n                resolve(city);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 207 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:selectDate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择日期\n *\n * @memberof flight\n * @static\n * @name selectDate\n * @param {String} fromCity\n * @param {String} toCity\n * @param {String} months\n * @param {String} original\n * @return {Promise}\n * @example\n *  hbnb.flight.selectDate(\n *      fromCity,\n *      toCity,\n *      months,\n *      original\n *  ).then(function(data) {\n *      console.log(data);\n *  });\n */\nmodule.exports = function(fromCity, toCity, months, original) {\n    if (false) {\n        debug('original is %s', original);\n        debug('from city %s', fromCity);\n        debug('to city %s', toCity);\n        debug('mounths is %s', months);\n    }\n    original = original || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'select_date', {\n            original: original,\n            months: months,\n            fromCity: fromCity,\n            toCity: toCity,\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 208 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:flight:selectRoundDate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择日期\n *\n * @memberof flight\n * @static\n * @name selectRoundDate\n * @return {Promise}\n * @example\n *  hbnb.flight.selectRoundDate().then(function(data) {\n *      console.log(data);\n *  });\n */\nmodule.exports = function() {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('flight', 'select_roundDate', {\n            callback: function(date) {\n                resolve(date);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 209 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nexports = module.exports = function() {\n    return exports;\n};\n\nif (false) {\n    exports._debug = require('debug');\n    // _debug.enable('hbnb:invoke:*');\n}\n\n// invoke\nexports._invoke = __webpack_require__(124);\n\n// hbnb\nexports.core = __webpack_require__(195);\n\n// basic\nexports.account = __webpack_require__(190);\nexports.log = __webpack_require__(224);\nexports.network = __webpack_require__(226);\nexports.pay = __webpack_require__(230);\nexports.position = __webpack_require__(233);\nexports.storage = __webpack_require__(239);\nexports.thirdApps = __webpack_require__(243);\nexports.ui = __webpack_require__(273);\nexports.webview = __webpack_require__(284);\n\n// tower\nexports.tower = __webpack_require__(248);\n\n//flight\nexports.flight = __webpack_require__(205);\n\n//train\nexports.train = __webpack_require__(253);\nexports.inject = __webpack_require__(213);\n\n//lvyou\nwindow.Bridge = __webpack_require__(222);\nexports.travel = __webpack_require__(267);\n\n//env\nexports.env = __webpack_require__(199);\n\n//share\nexports.share = __webpack_require__(237);\n\n\n\n/***/ }),\n/* 210 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:addStopUrl');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 匹配隐藏 webview 页面的 url\n *\n * 符合时，停止页面加载并执行脚本\n * 只匹配一次？\n *\n * TODO: 支持版本\n *\n * 支持版本\n * + iHotel/5.9?\n *\n * @memberof inject\n * @static\n * @name addStopUrl\n * @param {String} name 隐藏 webview 名\n * @param {String} pattern 用于匹配 url 的正则\n * @param {String} script 匹配后执行的命令\n * @return {Promise}\n * @example\n *  hbnb.inject.addStopUrl('name', 'pattern', 'script')\n *      .then(function() {\n *          console.log('loaded');\n *      });\n */\nmodule.exports = function(name, pattern, script) {\n    if (false) {\n        debug('name is %s', name);\n        debug('pattern is %s', pattern);\n        debug('script is %s', script);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'add_stop_url', {\n            name: name,\n            pattern: pattern,\n            script: script,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 211 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:callback');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 隐藏 webview 中使用该方法返回数据\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name callback\n * @param {String} fnName 回调函数名\n * @param {String} data 返回的数据\n * @return {Undefined}\n * @example\n *  hbnb.inject.callback('funcName', 'data')\n */\nmodule.exports = function(fnName, data) {\n    if (false) {\n        debug('fnName is %s', fnName);\n        debug('data is %s', data);\n    }\n\n    _invoke('inject', 'callback', {\n        callback: fnName,\n        param: data\n    });\n};\n\n\n/***/ }),\n/* 212 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:close');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 关闭隐藏 webview\n *\n * 主要为了减小内存占用\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name close\n * @param {String} name 隐藏 webview 名\n * @return {Promise}\n * @example\n *  hbnb.inject.close('name')\n */\nmodule.exports = function(name) {\n    if (false) {\n        debug('name is %s', name);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'close', {\n            name: name,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 213 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name inject\n */\n\nexports.load = __webpack_require__(215);\nexports.loadHTML = __webpack_require__(214);\nexports.close = __webpack_require__(212);\nexports.show = __webpack_require__(217);\nexports.runScript = __webpack_require__(216);\n\n\nexports.addStopUrl = __webpack_require__(210);\n\nexports.callback = __webpack_require__(211);\n\n\n/***/ }),\n/* 214 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:loadHTML');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开一个隐藏 webview\n *\n * 如果指定的 `name` 还不存在，会创建一个新的 webview。\n * 在指定的 webview 中加载给定的 `html` 片段\n * 在加载页面所有静态资源请求都完成时，Promise resolve。\n * 但是不保证页面已经可用，业务方可自己进行 domready 等检测。\n *\n * 支持版本\n * + iHotel/6.1+\n *\n * @memberof inject\n * @static\n * @name loadHTML\n * @param {String} name 隐藏 webview 名\n * @param {String} url 需要加载的页面地址\n * @param {String} html 需要加载的 html 片段\n * @return {Promise}\n * @example\n *  hbnb.inject.loadHTML(\n *      'name',\n *      'https://kyfw.12306.cn/otn/',\n *      '<!DOCTYPE html><html><head><meta charset=\"utf-8\" /></head><body></body></html>'\n *  ).then(function() {\n *      console.log('loaded');\n *  });\n */\nmodule.exports = function(name, url, html) {\n    if (false) {\n        debug('name is %s', name);\n        debug('url is %s', url);\n        debug('html is %s', html);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'load_html', {\n            name: name,\n            baseUrl: url,\n            html: html,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 215 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:load');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开一个隐藏 webview\n *\n * 如果指定的 `name` 还不存在，会创建一个新的 webview。\n * 如果指定的 `name` 存在，会在该 webview 上加载新的 url。\n * 在加载页面所有静态资源请求都完成时，Promise resolve。\n * 但是不保证页面已经可用，业务方可自己进行 domready 等检测。\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name load\n * @param {String} name 隐藏 webview 名\n * @param {String} url 需要加载的页面地址\n * @return {Promise}\n * @example\n *  hbnb.inject.load(\n *      'name',\n *      'https://kyfw.12306.cn/otn/leftTicket/init'\n *  ).then(function() {\n *      console.log('loaded');\n *  });\n */\nmodule.exports = function(name, url) {\n    if (false) {\n        debug('name is %s', name);\n        debug('url is %s', url);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'load', {\n            name: name,\n            url: url,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 216 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:runScript');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 向隐藏 webview 注入脚本\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name runScript\n * @param {String} name 隐藏 webview 名\n * @param {String} script 注入的脚本，必须为可执行函数\n * @param {String} param script 的参数，即 `hbnb.inject.callback` 的 `funcName`\n * @return {Promise}\n * @example\n *  hbnb.inject.runScript(\n *      'name',\n *      'script',\n *      'param'\n *  ).then(function() {\n *      console.log('loaded');\n *  });\n */\nmodule.exports = function(name, script, param) {\n    if (false) {\n        debug('name is %s', name);\n        debug('script is %s', script);\n        debug('param is %s', param);\n    }\n\n    script = script.toString();\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'run_script', {\n            name: name,\n            script: script,\n            param: param,\n            callback: function() {\n                resolve();\n            }\n        });\n    });\n\n    return p;\n};\n\n\n/***/ }),\n/* 217 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:inject:show');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 将隐藏 webview 放到前台\n *\n * TODO: 验证下返回值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof inject\n * @static\n * @name show\n * @param {String} name 隐藏 webview 名\n * @return {Promise}\n * @example\n *  hbnb.inject.show('name');\n */\nmodule.exports = function(name) {\n    if (false) {\n        debug('name is %s', name);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('inject', 'show', {\n            name: name\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 218 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * 1. 页面开启\n * 2. 页面隐藏\n * 3. 桥协议可用\n */\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:invoke:event');\n    assert = require('assert');\n}\n\nvar env = __webpack_require__(128);\n\n\nvar win = window;\nvar doc = document;\n\nvar dispatch = function(eventName) {\n    if (false) {\n        assert(eventName);\n        debug('dispatch event \"%s\"', eventName);\n    }\n\n    var ev = doc.createEvent('Events');\n    ev.initEvent(eventName);\n    doc.dispatchEvent(ev);\n};\n\nvar addLifecycleEvent = function() {\n    if (false) {\n        debug('add lifecycle event');\n        assert(win.HBNB);\n    }\n\n    dispatch('HBNB:ready');\n    env.HBNBReady = true;\n\n    win.HBNB.onPageShow = function() {\n        dispatch('HBNB:pageshow');\n    };\n\n    win.HBNB.onPageHide = function() {\n        dispatch('HBNB:pagehide');\n    };\n};\n\nvar checkHBNB = function() {\n    setTimeout(function check() {\n        if (win.HBNB) {\n            addLifecycleEvent();\n        } else {\n            setTimeout(check, 500);\n        }\n    });\n};\n\nvar initEvent = function() {\n    if (false) {\n        if (env.platform === 'h5') {\n            win.HBNB = {};\n            addLifecycleEvent();\n        }\n    }\n\n    if (!env.isHBNBWebview) {\n        if (false) {\n            debug('not HBNB webview');\n        }\n        return;\n    }\n\n    if (env.platform === 'ios') {\n        if (win.HBNB) {\n            // ios 会添加 HBNB 对象，如果有该对象，说明桥协议可用\n            addLifecycleEvent();\n        } else if (env.HBNBVersion) {\n            // 带 HBNB 的版本，在可用时会触发 _HBNBReady 事件，表示桥协议可用了\n            doc.addEventListener('_HBNBReady', addLifecycleEvent);\n        } else {\n            // 旧版本只能定时检查\n            checkHBNB();\n        }\n    } else if (env.platform === 'android') {\n        if (env.supportPrompt) {\n            // 支持 prompt 的版本，是在页面加载前就可用了\n            win.HBNB = {};\n            addLifecycleEvent();\n        } else if (win.HBNB) {\n            // 旧版本使用 HBNB 传递数据，存在 HBNB 时可用\n            addLifecycleEvent();\n        } else {\n            // 就版本只能定时检查\n            checkHBNB();\n        }\n    }\n};\n\nmodule.exports = initEvent;\n\n\n/***/ }),\n/* 219 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:invoke:invoke');\n    assert = require('assert');\n}\n\nvar env = __webpack_require__(128);\nvar ready = __webpack_require__(220);\nvar buildURI = __webpack_require__(144);\nvar sendURI = __webpack_require__(221);\n\nvar invoke = function(moduleName, methodName, parameters, protocol) {\n    if (false) {\n        //assert(env.HBNBReady);\n        debug('module = %s', moduleName);\n        debug('method = %s', methodName);\n        debug('parameters = %j', parameters);\n        debug('protocol = %s', protocol);\n    }\n\n    // return if not in  app\n    if (true) {\n        if (!env.isHBNBWebview) {\n            if (parameters && parameters.complete) {\n                var complete = parameters.complete;\n                if (typeof complete === 'function') {\n                    setTimeout(function() {\n                        complete({\n                            status: 200,\n                            message: 'not HBNB webview'\n                        });\n                    });\n                }\n                return;\n            }\n        }\n    }\n\n    // throw Error on development\n    if (false) {\n        assert(typeof moduleName === 'string' && moduleName);\n        assert(typeof methodName === 'string' && methodName);\n    }\n\n    parameters = parameters || {};\n    protocol = protocol || 'magpie:';\n    var uri = buildURI(protocol, moduleName, methodName, parameters);\n\n    if (false) {\n        debug('uri = %s', uri);\n    }\n\n    ready(function() {\n        sendURI(uri);\n    });\n};\n\nmodule.exports = invoke;\n\n\n/***/ }),\n/* 220 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:ready');\n}\n\nvar env = __webpack_require__(128);\n\nvar fnQueue = [];\n\ndocument.addEventListener('HBNB:ready', function() {\n    if (false) {\n        debug('fnQueue length = %s', fnQueue.length);\n    }\n\n    for (var i = 0, ii = fnQueue.length; i < ii; ++i) {\n        fnQueue[i]();\n    }\n});\n\nvar ready = function(fn) {\n    if (typeof fn !== 'function') {\n        return;\n    }\n\n    if (env.HBNBReady) {\n        fn();\n    } else {\n        if (false) {\n            debug('push fn to fnQueue');\n        }\n\n        fnQueue.push(fn);\n    }\n};\n\nmodule.exports = ready;\n\n\n/***/ }),\n/* 221 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:invoke:send-uri');\n}\n\nvar env = __webpack_require__(128);\n\n/*eslint-disable no-undef, block-scoped-var, no-alert */\nvar strategy = {\n    'alert': function(uri) { window.alert(uri); },\n    'prompt': function(uri) { window.prompt(uri); },\n    'HBNB': {\n        'android': function(uri) { HBNB.sendBridgeMessage(uri); },\n        'ios': function(uri) { HBNB.postMessage(uri); }\n    }\n};\n/*eslint-enable no-undef, block-scoped-var, no-alert */\n\nvar sendURI;\nif (env.platform === 'ios') {\n    sendURI = strategy['HBNB']['ios'];\n} else if (env.platform === 'android') {\n    if (env.supportPrompt) {\n        // android app >= 6.0 support window.prompt\n        sendURI = strategy['prompt'];\n    } else {\n        sendURI = strategy['HBNB']['android'];\n    }\n} else {\n    sendURI = strategy['alert'];\n}\n\nif (false) {\n    debug('sendURI = %s', sendURI);\n}\n\nmodule.exports = sendURI;\n\n\n/***/ }),\n/* 222 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nfunction Bridge() {}\n\nvar pushBack = __webpack_require__(223);\nBridge.prototype.pushBack = Bridge.pushBack = pushBack;\nBridge.prototype.setTitle = Bridge.setTitle = function(title, subtitle) {\n    pushBack('bridge:', 'set_webview_title', {\n        title: title,\n        subtitle: subtitle\n    });\n};\n\nmodule.exports = Bridge;\n\n\n/***/ }),\n/* 223 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar env = __webpack_require__(128);\nvar buildURI = __webpack_require__(144);\n\nvar messageQueue = [];\nvar messageQueueFetch = function() {\n    var response = messageQueue.length ? JSON.stringify(messageQueue) : '';\n    messageQueue = [];\n    if (response) return response;\n};\nwindow.messageQueueFetch = messageQueueFetch;\n\nvar pushBack = function(protocol, name, params) {\n    params = params || {};\n    var uri = protocol + '//' + name + '?params=' + encodeURIComponent(JSON.stringify(params, buildURI.processParams));\n    if (env.platform === 'android') {\n        if (env.supportPrompt) {\n            window.prompt(uri); // eslint-disable-line no-alert\n        } else {\n            try {\n                window['HotelWebviewBridge']['sendBridgeMessage'](uri);\n            } catch (e) {}\n        }\n    } else if (env.platform === 'ios') {\n        messageQueue.push(uri);\n    } else {\n        // for debug\n        alert(uri); // eslint-disable-line no-alert\n    }\n};\n\nmodule.exports = pushBack;\n\n\n/***/ }),\n/* 224 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name log\n */\nexports.mge = __webpack_require__(225);\n\n\n/***/ }),\n/* 225 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:log:mge');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 发送 mge 统计参数\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof log\n * @static\n * @name mge\n * @param {String | Undefined} cid 页面名\n * @param {String | Undefined} act 事件名\n * @param {String | Undefined} val 页面属性\n * @param {String | Undefined} lab 事件属性\n * @return {Undefined}\n * @example\n *  hbnb.log.mge('页面A', '点击事件B');\n *  hbnb.log.mge({\n *      cid: '页面A‘，\n *      act: '点击事件B'\n *  });\n */\n\nmodule.exports = function(cid, act, val, lab) {\n    if (false) {\n        debug('cid = %s', cid);\n        debug('act = %s', act);\n        debug('val = %s', val);\n        debug('lab = %s', lab);\n    }\n\n    if (typeof cid === 'object') {\n        var opt = cid;\n        cid = String(opt.cid || '');\n        act = String(opt.act || opt.action);\n        val = String(opt.val || opt.value);\n        lab = String(opt.lab || opt.label);\n    }\n\n    _invoke('log', 'mge', {\n        cid: cid || '',\n        action: act || '',\n        value: val || '',\n        label: lab || ''\n    });\n};\n\n\n/***/ }),\n/* 226 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name network\n */\n\nexports.request = __webpack_require__(227);\nexports.sendSms = __webpack_require__(228);\n\n//exports.httpRequest = require('./http-request.js'); // not support POST, disabled\n\n\n/***/ }),\n/* 227 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:module:network:request');\n    assert = require('assert');\n}\n\nvar _invoke = __webpack_require__(124);\n\n\n/**\n * 发起网络请求\n *\n * @memberof network\n * @static\n * @name request\n * @param {Object} opts 请求参数，参考 [request](https://github.com/request/request#requestoptions-callback)\n * @return {Promise<resp|err>}\n * @example\n *  hbnb.network.request({\n *      url: 'https://www.google.com/',\n *      method: 'GET',\n *      headers: {\n *          'X-Requested-With': 'XMLHttpRequest'\n *      },\n *      body: '',\n *      followRedirect: true,\n *      maxRedirects: 10,\n *      timeout: 5000\n *  }).then(function(resp) {\n *      resp = {\n *          statusCode: 404,\n *          body: '',\n *          headers: {\n *              'content-encoding': ['gzip']\n *          }\n *      }\n *  }).catch(function(err) {\n *      err = {\n *          message: \"用户未登录美团\",\n *          status: -1\n *      }\n *  });\n *\n */\n\nmodule.exports = function(opts) {\n    if (false) {\n        debug('request opts is %j', opts);\n        assert(opts.url);\n        assert(typeof opts.method === 'undefined' || ['GET', 'POST', 'PUT', 'DELETE'].indexOf(opts.method.toUpperCase()) !== -1);\n        assert(typeof opts.headers === 'undefined' || typeof opts.headers === 'object');\n        assert(typeof opts.body === 'undefined' || typeof opts.body === 'string');\n        assert(typeof opts.followRedirect === 'undefined' || typeof opts.followRedirect === 'boolean');\n        assert(typeof opts.maxRedirects === 'undefined' || typeof opts.maxRedirects === 'number');\n        assert(typeof opts.timeout === 'undefined' || typeof opts.timeout === 'number');\n    }\n    if (opts.headers) {\n        var newHeaders = {};\n        var headers = opts.headers;\n        for (var key in headers) {\n            if (headers.hasOwnProperty(key)) {\n                newHeaders[key.toLowerCase()] = headers[key];\n            }\n        }\n        opts.headers = newHeaders;\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('network', 'request', {\n            url: opts.url,\n            method: opts.method ? opts.method.toUpperCase() : 'GET',\n            headers: opts.headers ? opts.headers : {},\n            body: opts.body ? opts.body : '',\n            followRedirect: !(opts.followRedirect === false),\n            maxRedirects: opts.maxRedirects ? opts.maxRedirects : 10,\n            timeout: opts.timeout ? opts.timeout : 5000,\n            insecure: opts.insecure ? opts.insecure : false,\n            responseEncoding: opts.responseEncoding ? opts.responseEncoding : '',\n            callback: function(response) {\n                if (false) {\n                    debug('request success, %j', response, response);\n                }\n                var newHeaders = {};\n                var headers = response.headers;\n                for (var i = 0, ii = headers.length; i < ii; i++) {\n                    var header = headers[i];\n                    var index = header.indexOf(';');\n                    if (index === -1) continue;\n                    var key = header.substr(0, key).trim().toLowerCase();\n                    var val = header.substr(index + 1).trim();\n                    newHeaders[key] = val;\n                }\n                response.headers = newHeaders;\n                resolve(response);\n            },\n            errback: function(msg) {\n                if (false) {\n                    debug('request fail, %j', msg);\n                }\n                reject(msg);\n            }\n        });\n    });\n\n    return p;\n};\n\n\n/***/ }),\n/* 228 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:network:sendSms');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 发送预填充内容了的短信\n *\n * 支持版本\n * + iHotel/6.6\n *\n * @memberof network\n * @static\n * @name sendSms\n * @example\n *  hbnb.network.sendSms({\n *      \"recipients\": 110, // 电话号码，支持多个\n *      \"text\": \"help\" // 发送到的文字内容\n *  })\n */\n\nmodule.exports = function(mobile, content) {\n    _invoke('device', 'send_sms', {\n        \"recipients\": mobile, // 电话号码，支持多个\n        \"text\": content // 发送到的文字内容\n    });\n};\n\n\n/***/ }),\n/* 229 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:pay:getFingerprint');\n}\n\nvar _invoke = __webpack_require__(124);\nvar env = __webpack_require__(128);\nvar versionCompare = __webpack_require__(141);\n\n/**\n * 调用客户端收银台\n *\n * 支持版本\n * + iHotel/6.1+\n *\n * @memberof pay\n * @static\n * @name getFingerprint\n * @returns {Promise<String>}\n * @example\n *  hbnb.pay.getFingerprint()\n *      .then(function(fp) {\n *          fp = 'xxxxxxx'\n *      });\n */\n\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n    var p = new Promise(function(resolve, reject) {\n        if (versionCompare(env.appVersion, '6.1') >= 0) {\n            _invoke('pay', 'get_fingerprint', {\n                callback: function(fingerprint) {\n                    if (false) {\n                        debug('fingerprint return %j', fingerprint);\n                    }\n                    if (fingerprint && fingerprint.fingerprint) {\n                        resolve(fingerprint.fingerprint);\n                    } else {\n                        reject();\n                    }\n                }\n            });\n        } else {\n            reject();\n        }\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 230 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name pay\n */\n\nexports.payment = __webpack_require__(231);\nexports.getFingerprint = __webpack_require__(229);\n\n\n/***/ }),\n/* 231 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:pay:payment');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 调用客户端收银台\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof pay\n * @static\n * @name payment\n * @param {Object} opts 收银台参数\n * @returns {Promise<orderId | Undefined>}\n * @example\n *  hbnb.pay.payment({\n *      tradeNo: '123',\n *      payToken: '456',\n *      orderId: '789',\n *      returnURL: 'i://...'\n *  }).then(function(data) {\n *      data = {\n *          isPayed: true,\n *          orderId: '789'\n *      }\n *  }).catch(function() {\n *      ...\n *  });\n */\n\nmodule.exports = function(opts) {\n    if (false) {\n        debug('payment opts is %j', opts);\n    }\n    var p = new Promise(function(resolve, reject) {\n        var cb = opts.callback;\n        opts.callback = function(data) {\n            if (false) {\n                debug('payment return %j', data);\n            }\n\n            resolve(data);\n            if (typeof cb === 'function') {\n                cb(data);\n            }\n        };\n        opts.errback = function() {\n            reject();\n        };\n        _invoke('pay', 'cashier', opts);\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 232 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:position:getCity');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取当前选择的城市\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof position\n * @static\n * @name getCity\n * @return {Promise<city>}\n * @example\n *  hbnb.position.getCity()\n *      .then(function(city) {\n *          city = {\n *              cityId: 1,\n *              cityName: '北京'\n *              cityPinyin: 'beijing'\n *          }\n *      });\n */\nmodule.exports = function() {\n    if (false) {\n        debug('call get city');\n    }\n    var p = new Promise(function(resolve, reject) {\n        _invoke('position', 'get_city', {\n            callback: function(city) {\n                if (false) {\n                    debug('return city %j', city);\n                }\n                resolve(city);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 233 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name position\n */\n\nexports.getCity = __webpack_require__(232);\n\n\n/***/ }),\n/* 234 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:share:activeNavButton');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * share.activeNavButton 激活导航栏分享按钮\n *\n * 支持版本\n * + iHotel/7.0+\n  * 此版本不支持successCallback,failCallback 客户端说排期比较紧张，7.1版本实现, ios失败没有回调通知\n * @memberof share\n * @static\n * @name activeNavButton\n * @param {Array} channel 渠道\n * @param {Object} conf 配置信息\n * @return {Undefined}\n * @example\n *  hbnb.share.activeNavButton(['weixin','weibo','sinaWeibo'], {\n        content: '分享内容',\n        detailURL: 'http://i..com/',\n        imageURL: 'http://p1..net/codeman/799087624091d1d43768b7da396d4a122532.png',\n        title: '分享标题'\n    });\n */\n\nmodule.exports = function(channelParam, configParam, successCallback, failCallback) {\n    if (false) {\n        debug('param channelParam is %j', channelParam);\n        debug('param configParam is %j', configParam);\n    }\n    var p = new Promise(function(resolve, reject) {\n        var data = {\n            'sinaweibo': 1,\n            'qzone': 2,\n            'qqweibo': 4,\n            'renren': 8,\n            'kaixin': 16,\n            'sms': 32,\n            'email': 64,\n            'weixin': 128,\n            'weixinfriends': 256,\n            'qqclient': 512,\n            'all':-1\n        };\n        var params = {};\n        var channel = channelParam || [];\n        var config = configParam || {};\n        var channelNumber = 0;\n        var i;\n        var num;\n        var d;\n        if(channel && Object.prototype.toString.call(channel) == \"[object Array]\"){\n            for (var i = 0, len = channel.length; i < len; i++){\n                d = channel[i];\n                num = data[d.toLowerCase()];\n                channelNumber += num;\n                if(config['content_' + d]){\n                    params['content_' + num] = config['content_' + d];\n                }\n            }\n            if (config.cid) {\n                params.cid = config.cid;\n            }\n            params.channel = channelNumber;\n            params.content =  config.content;\n            params.detailURL = config.detailURL;\n            params.imageURL =  config.imageURL;\n            params.title = config.title;\n            params.callback = function (returnData) {\n                if (returnData && returnData.status === 'COMPLETE') {\n                    if (typeof successCallback === 'function') {\n                        successCallback(returnData)\n                    }\n                } else {\n                    if (typeof failCallback === 'function') {\n                        failCallback(returnData)\n                    }\n                }\n                resolve(returnData);\n                return false;\n            };\n            _invoke('share', 'enable_nav_share_button', params);\n        }\n\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 235 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:share:callLocal');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * share.callLocal 激活导航栏分享按钮\n *\n * 支持版本\n * + iHotel/7.0+\n  * 此版本不支持successCallback,failCallback 客户端说排期比较紧张，7.1版本实现\n * @memberof share\n * @static\n * @name callLocal\n * @param {Array} channel 渠道\n * @param {Object} conf 配置信息\n * @return {Undefined}\n * @example\n *  hbnb.share.callLocal(['weixin','weibo','sinaWeibo'], {\n        content: '分享内容',\n        detailURL: 'http://i..com/',\n        imageURL: 'http://p1..net/codeman/799087624091d1d43768b7da396d4a122532.png',\n        title: '分享标题'\n    });\n */\n\nmodule.exports = function(channelParam, configParam, successCallback, failCallback) {\n    if (false) {\n        debug('param channelParam is %j', channelParam);\n        debug('param configParam is %j', configParam);\n    }\n    var p = new Promise(function(resolve, reject) {\n        var data = {\n            'sinaweibo': 1,\n            'qzone': 2,\n            'qqweibo': 4,\n            'renren': 8,\n            'kaixin': 16,\n            'sms': 32,\n            'email': 64,\n            'weixin': 128,\n            'weixinfriends': 256,\n            'qqclient': 512,\n            'all':-1\n        };\n        var params = {};\n        var channel = channelParam || [];\n        var config = configParam || {};\n        var channelNumber = 0;\n        var i;\n        var num;\n        var d;\n\n        if(channel && Object.prototype.toString.call(channel) == \"[object Array]\"){\n            for (var i = 0, len = channel.length; i < len; i++){\n                d = channel[i];\n                num = data[d.toLowerCase()];\n                channelNumber += num;\n                if(config['content_' + d]){\n                    params['content_' + num] = config['content_' + d];\n                }\n            }\n            if (config.cid) {\n                params.cid = config.cid;\n            }\n            params.channel = channelNumber;\n            params.content =  config.content;\n            params.detailURL = config.detailURL;\n            params.imageURL =  config.imageURL;\n            params.title = config.title;\n            params.callback = function (returnData) {\n                if (returnData && returnData.status === 'COMPLETE') {\n                    if (typeof successCallback === 'function') {\n                        successCallback(returnData)\n                    }\n                } else {\n                    if (typeof failCallback === 'function') {\n                        failCallback(returnData)\n                    }\n                }\n                resolve(returnData);\n                return false;\n            };\n            _invoke('share', 'common_share', params);\n        }\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 236 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:share:disableNavButton');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * share.disableNavButton 禁用导航栏分享按钮\n *\n * 支持版本\n * + iHotel/7.0+\n *\n * @memberof share\n * @static\n * @name disableNavButton\n * @return {Undefined}\n * @example\n *  hbnb.share.disableNavButton();\n */\n\nmodule.exports = function() {\n\tif (false) {\n        debug('called');\n    }\n    var p = new Promise(function(resolve, reject) {\n    \t_invoke('share', 'disable_nav_share_button', {});\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 237 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name share\n */\n\n// 激活导航栏分享按钮\nexports.activeNavButton = __webpack_require__(234);\n\n// 禁用导航栏分享按钮\nexports.disableNavButton = __webpack_require__(236);\n\n// 调用本地分享\nexports.callLocal = __webpack_require__(235);\n\n\n\n\n\n\n/***/ }),\n/* 238 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:storage:getItem');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 客户端存储／查\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof storage\n * @static\n * @name getItem\n * @return {Promise<val>}\n * @example\n *  hbnb.storage.getItem('key')\n *      .then(function(value) {\n *          value = '' || null;\n *      });\n */\nmodule.exports = function(key) {\n    if (false) {\n        debug('key is %s', key);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('storage', 'get_item', {\n            key: key,\n            callback: function(val) {\n                if (false) {\n                    debug('value is %j', val);\n                }\n\n                if (val && val.value) {\n                    resolve(val.value);\n                } else {\n                    resolve(null);\n                }\n            }\n        });\n    });\n\n    return p;\n};\n\n\n/***/ }),\n/* 239 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name storage\n */\n\nexports.getItem = __webpack_require__(238);\nexports.setItem = __webpack_require__(241);\nexports.removeItem = __webpack_require__(240);\nexports.setResult = __webpack_require__(242);\n\n\n/***/ }),\n/* 240 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:storage:removeItem');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 客户端存储／删\n *\n * 客户端调用是异步的，不保证接下去调用 `hbnb.storage.getItem` 能立刻获取最新值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof storage\n * @static\n * @name removeItem\n * @return {Undefined}\n * @example\n *  hbnb.storage.removeItem('key');\n */\nmodule.exports = function(key) {\n    if (false) {\n        debug('key is %s', key);\n    }\n\n    _invoke('storage', 'remove_item', {\n        key: key\n    });\n};\n\n\n/***/ }),\n/* 241 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:storage:setItem');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 客户端存储／增、改\n *\n * 客户端调用是异步的，不保证接下去调用 `hbnb.storage.getItem` 能立刻获取最新值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof storage\n * @static\n * @name setItem\n * @return {Undefined}\n * @example\n *  hbnb.storage.setItem('key', 'value');\n */\nmodule.exports = function(key, val) {\n    if (false) {\n        debug('key is %s, value is %s', key, val.toString(), val);\n    }\n\n    _invoke('storage', 'set_item', {\n        key: key,\n        value: val.toString()\n    });\n};\n\n\n/***/ }),\n/* 242 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:closeAll');\n}\n\nvar _invoke = __webpack_require__(124);\nvar env = __webpack_require__(128);\nvar versionCompare = __webpack_require__(141);\n\n/**\n * 适用的场景是native打开H5的页面选择学校、城市\n *\n * 支持版本\n * + Android\n * + iHotel/6.9+\n *\n * @memberof storage\n * @static\n * @name setResult\n * @param {Object} obj\n * @return {Undefined}\n * @example\n *  hbnb.storage.setResult({id: \"45\", name: \"广西\"});\n */\nmodule.exports = function(params) {\n    if (false) {\n        debug('url list %s', params);\n    }\n\n    if (env.platform === 'android' && versionCompare(env.appVersion, '6.9') >= 0) {\n        _invoke('inject', 'set_result', params);\n    } else {\n        // no op\n    }\n};\n\n\n/***/ }),\n/* 243 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name thirdApps\n */\n\nexports.installed = __webpack_require__(244);\n\n\n/***/ }),\n/* 244 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:module:thirdApps:installed');\n    assert = require('assert');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 检查第三方软件安装情况\n *\n * 目前支持支付宝（`alipay`）\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof thirdApps\n * @static\n * @name installed\n * @param {String} appName 软件名\n * @return {Promise<status>}\n * @example\n *  var hbnb = request('/hbnb');\n *  hbnb.thirdApps.installed('alipay')\n *      .then(function(status) {\n *          status = true || false\n *      });\n */\nmodule.exports = function(appName) {\n    if (false) {\n        debug('app is %s', appName);\n        assert(['alipay'].indexOf(appName) >= 0);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('third_apps', 'installed', {\n            appName: appName,\n            callback: function(status) {\n                if (false) {\n                    debug('status is %j', status);\n                }\n\n                if (status && status.installed) {\n                    resolve(true);\n                } else {\n                    resolve(false);\n                }\n            }\n        });\n    });\n\n    return p;\n};\n\n\n/***/ }),\n/* 245 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:commentCallback');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 专题评论成功通知\n *\n * 专题评论成功后，通知客户端，无返回数据\n *\n * 支持版本\n * + iTower/0.4+\n *\n * @memberof tower\n * @static\n * @name sendTopicCommentSuccess\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.commentCallback();\n */\n\nmodule.exports = function(cb, eb) {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'sendTopicCommentSuccess', {\n            callback: function(result) {\n                if (false) {\n                    debug('comment callback result is %j', result, result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n};\n\n\n/***/ }),\n/* 246 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:comment');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开native评论输入界面\n *\n * 支持版本\n * + MtLvxing/1.3+\n *\n * @memberof tower\n * @static\n * @name comment\n * @param {Object} opts\n * @return {Promise<object | err>}\n * @example\n *  hbnb.tower.comment({\n *          type: 'simple',\n *          placeholder: '请在此输入',\n *          content: '评论内容',\n *          limit: 350,\n *          buttonText: '发送',\n *      })\n *      .then(function(result) {\n *          result = {\n *              status: 0,\n *              content: '用户输入的内容',\n *          }\n *      })\n *      .catch(function(err) {\n *          err = {\n *              message: \"fail\",\n *              status: -1\n *          }\n *      });\n */\n\nmodule.exports = function(data) {\n    var p = new Promise(function(resolve, reject) {\n        _invoke('tower', 'comment', {\n            type: data.type || 'simple',\n            placeholder: data.placeholder || '',\n            content: data.content || '',\n            limit: data.limit || null,\n            buttonText: data.buttonText,\n\n            callback: function(result) {\n                if (false) {\n                    debug('comment result is %j', result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 247 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:getUuid');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取用户设备信息\n *\n * 目前主要用来获得UUID\n *\n * 支持版本\n * + iTower/0.4+\n *\n * @memberof tower\n * @static\n * @name getUuid\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.getUuid()\n *      .then(function(uuid) {\n *          uuid = {\n *              UUID: \"xxxxxxxxx\"\n *          };\n *      })\n *      .catch(function(err) {\n *          err = {\n *              status: -1\n *          };\n *      });\n */\n\nmodule.exports = function(cb, eb) {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'get_uuid', {\n            callback: function(result) {\n                if (false) {\n                    debug('uuid is %j', result, result);\n                }\n                resolve(result.UUID);\n            },\n            errback: reject\n        });\n    });\n};\n\n\n/***/ }),\n/* 248 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name Tower\n */\n\nexports.getUuid = __webpack_require__(247);\nexports.commentCallback= __webpack_require__(245);\nexports.comment = __webpack_require__(246);\nexports.shareConfig = __webpack_require__(249);\nexports.checkNickname = __webpack_require__(250);\n\n\n\n/***/ }),\n/* 249 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:shareConfig');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * Webview 页面分享功能\n *\n * 在App中将页面分享到微信、朋友圈、微博\n *\n * 支持版本\n * + iTower/1.3+\n *\n * @memberof tower\n * @static\n * @name shareConfig\n * @param {String} name\n * @param {Object} opts\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.shareConfig('weixin', {\n *      title: '页面名称',\n *      desc: '内容',\n *      imgUrl: 'http://xxx.jpg',\n *      link: 'http://www.com',\n *  }).then().catch();\n */\n\nmodule.exports = function(name, data) {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'share_config_' + name, {\n            title: data.title,\n            desc: data.desc,\n            imgUrl: data.imgUrl,\n            link: data.link,\n            callback: function(result) {\n                if (false) {\n                    debug('share_config result is %j', result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n};\n\n\n\n/***/ }),\n/* 250 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:tower:userCheckNickname');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * 检查设置用户昵称\n *\n * http://wiki./pages/viewpage.action?pageId=500753388\n *\n * 支持版本\n * + iTower/1.3+\n *\n * @memberof tower\n * @static\n * @name checkNickname\n * @return {Promise<string | err>}\n * @example\n *  hbnb.tower.checkNickname();\n */\n\nmodule.exports = function() {\n    return new Promise(function(resolve, reject) {\n        _invoke('tower', 'user_check_nickname', {\n            callback: function(result) {\n                if (false) {\n                    debug('check nickname callback result is %j', result);\n                }\n                resolve(result);\n            },\n            errback: reject\n        });\n    });\n};\n\n\n/***/ }),\n/* 251 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:gotoOrderDetail');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 进入火车票订单详情页面\n *\n * 点击后退时会返回订单列表页面，再后退会返回我的页面\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name gotoOrderDetail\n * @param {String} url 订单页面地址\n * @param {String} orderListUrl 订单列表页面地址\n * @return {Undefined}\n * @example\n *  hbnb.train.gotoOrderDetail(\n *      'url'\n *      'orderListUrl'\n *  );\n */\nmodule.exports = function(url, orderListUrl) {\n    if (false) {\n        debug('url is %s', url);\n        debug('orderListUrl is %s', orderListUrl);\n    }\n\n    _invoke('train', 'goto_order_detail', {\n        url: url,\n        orderListUrl: orderListUrl\n    });\n};\n\n\n/***/ }),\n/* 252 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:gotoOrderList');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name gotoOrderList\n * @param {String} url 订单列表地址\n * @return {Undefined}\n * @example\n *  hbnb.train.gotoOrderList('url');\n */\nmodule.exports = function(url) {\n    if (false) {\n        debug('url is %s', url);\n    }\n\n    _invoke('train', 'goto_order_list', {\n        url: url\n    });\n};\n\n\n/***/ }),\n/* 253 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name train\n */\n\nexports.gotoOrderDetail = __webpack_require__(251);\nexports.selectDate = __webpack_require__(258);\nexports.selectStation = __webpack_require__(259);\nexports.timeTable = __webpack_require__(262);\n\nexports.selectDateStudent = __webpack_require__(257);\nexports.selectDateRush = __webpack_require__(256);\nexports.timeRange = __webpack_require__(261);\nexports.gotoOrderList = __webpack_require__(252);\nexports.multiSelect = __webpack_require__(254);\nexports.selectTrains = __webpack_require__(260);\nexports.ringtone = __webpack_require__(255);\nexports.vibrate = __webpack_require__(263);\n\n\n/***/ }),\n/* 254 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:multiSelect');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name multiSelect\n * @param {Array} menus 菜单\n * @return {Promise}\n * @example\n *  hbnb.train.multiSelect([{\n *      label: '',\n *      value: '',\n *      active: false\n *  }])\n *      .then(function(menus) {\n *          menus = [{\n *              label: '',\n *              value: '',\n *              active: false\n *          }]\n *      });\n */\nmodule.exports = function(menus) {\n    if (false) {\n        debug('menus is %j', menus);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'multi_select', {\n            menus: menus,\n            callback: function(menus) {\n                resolve(menus);\n            }\n        });\n    });\n\n    return p;\n};\n\n\n/***/ }),\n/* 255 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:ringtone');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name ringtone\n * @param {Number} loop 时长\n * @return {Promise}\n * @example\n *  hbnb.train.ringtone()\n *      .then(function() {});\n */\nmodule.exports = function(duration) {\n    if (false) {\n        debug('duration is %s', duration);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'ringtone', {\n            duration: duration,\n            callback: function() {\n                resolve();\n            },\n            errback: function() {\n                reject();\n            }\n        });\n    });\n\n    return p;\n};\n\n\n/***/ }),\n/* 256 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectDateRush');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择出行日期\n *\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectDateRush\n * @param {Object} opts 选项\n * @return {Promise<date>}\n * @example\n *  hbnb.train.selectDateRush({\n *      date: '2015-10-19',\n *      days: 60,\n *      buyRange: [{\n *          start: '2015-11-11',\n *          finish: '2015-12-11'\n *      }],\n *      reserveRange: [{\n *          start: '2015-12-12',\n *          finish: '2015-12-31'\n *      }]\n *  })\n *      .then(function(date) {\n *          date = '2015-12-13'\n *      });\n */\nmodule.exports = function(opts) {\n    if (false) {\n        debug('opts is %j', opts);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        opts.callback = function(date) {\n            resolve(date.date);\n        };\n        _invoke('train', 'select_date_rush', opts);\n    });\n    return p;\n};\n\n\n\n/***/ }),\n/* 257 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectDateStudent');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择出行日期\n *\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectDateStudent\n * @param {Object} opts 选项\n * @return {Promise<date>}\n * @example\n *  hbnb.train.selectDateStudent({\n *      date: '2015-10-19',\n *      days: 60,\n *      range: [{\n *          start: '2015-10-20',\n *          finish: '2015-12-30'\n *      }],\n *      tips: '预售期为60天，60天外不可购买'\n *  })\n *      .then(function(date) {\n *          date = '2015-12-13'\n *      });\n */\nmodule.exports = function(opts) {\n    if (false) {\n        debug('opts is %j', opts);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        opts.callback = function(date) {\n            resolve(date.date);\n        };\n        _invoke('train', 'select_date_student', opts);\n    });\n    return p;\n};\n\n\n\n/***/ }),\n/* 258 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectDate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择出行日期\n *\n * TODO: 补全参数和返回值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectDate\n * @param {String} date 当前日期\n * @param {Number} days 日期 6.2\n * @param {String} tips 底部提示 6.2\n * @return {Promise<date>}\n * @example\n *  hbnb.train.selectDate('date', '60', '预售期为60天，60天外不可购买')\n *      .then(function(date) {\n *          date = '2015-02-02'\n *      });\n */\nmodule.exports = function(date, days, tips) {\n    if (false) {\n        debug('date is %s', date);\n        debug('days is %s', days);\n        debug('tips is %s', tips);\n    }\n\n    if (days === undefined) days = 60;\n    if (tips === undefined) tips = '预售期为60天，60天外不可购买';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'select_date', {\n            date: date,\n            days: days,\n            tips: tips,\n            callback: function(date) {\n                resolve(date.date);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 259 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectStation');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择火车站\n *\n * TODO: 补全参数和返回值\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name selectStation\n * @param {String} stationCode 当前火车站\n * @param {String} stationType 类型\n * @return {Promise<station>}\n * @example\n *  hbnb.train.selectStation('code', 'type')\n *      .then(function(station) {\n *      });\n */\nmodule.exports = function(stationCode, stationType) {\n    if (false) {\n        debug('station code is %s', stationCode);\n        debug('station type is %s', stationType);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'select_station', {\n            stationCode: stationCode,\n            stationType: stationType,\n            callback: function(station) {\n                resolve(station);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 260 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:selectTrains');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name selectTrains\n * @param {Array} menus 菜单\n * @return {Promise}\n * @example\n *  hbnb.train.selectTrains([{\n *      label: '',\n *      subLabel: '',\n *      description: ''\n *      value: '',\n *      active: false\n *  }])\n *      .then(function(menus) {\n *          menus = [{\n *              label: '',\n *              value: '',\n *              active: false\n *          }]\n *      });\n */\nmodule.exports = function(menus) {\n    if (false) {\n        debug('menus is %j', menus);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'select_trains', {\n            menus: menus,\n            callback: function(menus) {\n                resolve(menus);\n            }\n        });\n    });\n\n    return p;\n};\n\n\n/***/ }),\n/* 261 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:timeRange');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择出行日期\n *\n *\n * @memberof train\n * @static\n * @name timeRange\n * @param {Number} start 开始时间\n * @param {Number} end 结束时间\n * @return {Promise<date>}\n * @example\n *  hbnb.train.timeRange(12, 15)\n *      .then(function(range) {\n *          range = {\n *              start: 0,\n *              end: 24\n *          }\n *      });\n */\nmodule.exports = function(start, end) {\n    if (false) {\n        debug('start is %s', start);\n        debug('end is %s', end);\n    }\n\n    if (start === undefined) {\n        start = 0;\n        end = 24;\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'time_range', {\n            start: start,\n            end: end,\n            callback: function(range) {\n                resolve(range);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 262 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:timeTable');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 展示列车时刻表\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof train\n * @static\n * @name timeTable\n * @param {Object} stations\n * @return {Undefined}\n * @example\n *  hbnb.train.timeTable([{\n *      type: 'inside/outside/from/to',\n *      value: [\n *          'station_no',\n *          'station_name',\n *          'arrive_time',\n *          'start_time'\n *          'stopover_time'\n *      ]\n *  }]);\n */\nmodule.exports = function(stations) {\n    if (false) {\n        debug('stations is %j', stations);\n    }\n\n    _invoke('train', 'time_table', {\n        title: '列车时刻表',\n        header: ['', '车站', '到达', '发车', '停留'],\n        rows: stations\n    });\n};\n\n\n/***/ }),\n/* 263 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:train:vibrate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n *\n * @memberof train\n * @static\n * @name vibrate\n * @param {Number} duration 震动时长\n * @return {Promise}\n * @example\n *  hbnb.train.vibrate(1000)\n *      .then(function() {});\n */\nmodule.exports = function(duration) {\n    if (false) {\n        debug('duration is %s', duration);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('train', 'vibrate', {\n            duration: duration,\n            callback: function() {\n                resolve();\n            },\n            errback: function() {\n                reject();\n            }\n        });\n    });\n\n    return p;\n};\n\n\n/***/ }),\n/* 264 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travelmerchant:get_pos_deviceid');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取pos 设备id\n *\n * @memberof travel\n * @static\n * @name getPosDeviceId\n * @return {Promise}\n * @example\n *  hbnb.travel.getPosDeviceId()\n *      .then(function(resp) {\n *          resp = {\n *              deviceid: \"xxxxx\"//如果返回deviceid为空，则表示不是pos机\n *          }\n *      });\n */\nmodule.exports = function() {\n    if (false) {\n        debug('getDeviceId  %s');\n    }\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travelmerchant', 'get_pos_deviceid', {\n            callback: function(resp) {\n                resolve(resp);\n            },\n            complete: function (resp) {\n                reject(resp);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 265 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travelmerchant:print');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 获取pos 设备id\n *\n * @memberof travel\n * @static\n * @name print\n * @param {Array} content\n * @return {Promise}\n * @example\n *  hbnb.travel.print([\n *    {\n        \"content\":\"xxx\",\n        \"gravity\":\"left\", //对齐 left/right/center\n        \"textsize\":\"small\" //字体大小  small/medium/large\n      }\n *  ])\n *      .then(function(resp) {\n *          resp = {\n *              status: 0,\n *              message: '成功'\n *          }\n *      });\n */\nmodule.exports = function(content) {\n    if (false) {\n        debug('content is %s', content);\n    }\n    content = content || [];\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travelmerchant', 'print', {\n            content: content,\n            callback: function(resp) {\n                resolve(resp);\n            },\n            complete: function (resp) {\n                reject(resp);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 266 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travelmerchant:check_printer_state');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打印状态\n *\n * @memberof travel\n * @static\n * @name check_printer_state\n * @return {Promise}\n * @example\n *  hbnb.travel.printerState()\n *      .then(function(resp) {\n *          resp = {\n *              status:\"\"//一共五种状态：OK,NO_PAPER（缺纸）,HIGH_TEMP（过热）,ERROR(过热且缺纸),UNKNOW(未知)\n *          }\n *      });\n */\nmodule.exports = function() {\n    if (false) {\n        //debug('city is %s');\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travelmerchant', 'check_printer_state', {\n            callback: function(resp) {\n                resolve(resp);\n            },\n            complete: function (resp) {\n                reject(resp);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 267 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name travel\n */\n\n// 选择城市\nexports.selectCity = __webpack_require__(268);\n\n// 设置客户端大G埋点\nexports.setGdata = __webpack_require__(269);\n\n// 获取pos机id\nexports.getPosDeviceId = __webpack_require__(264);\n\n// 获取pos机打印状态\nexports.printerState = __webpack_require__(266);\n\n// 打印\nexports.print = __webpack_require__(265);\n\n/***/ }),\n/* 268 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travel:selectCity');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选择城市\n *\n *\n * 支持版本\n * + iTrip/6.9+\n *\n *\n * @memberof travel\n * @static\n * @name selectCity\n * @param {String} city\n * @return {Promise}\n * @example\n *  hbnb.travel.selectCity('city')\n *      .then(function(city) {\n *          city = {\n *              cityName: '',\n *              cityID: ''\n *          }\n *      });\n */\nmodule.exports = function(city) {\n    if (false) {\n        debug('city is %s', city);\n    }\n    city = city || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travel', 'select_city', {\n            original: city,\n            callback: function(city) {\n                resolve(city);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 269 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:travel:setGdata');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 设置客户端大G埋点\n *\n *\n * 支持版本\n * + iTrip/6.9+\n *\n *\n * @memberof travel\n * @static\n * @name setGdata\n * @param {String} bigG\n * @return {Promise}\n * @example\n *  hbnb.travel.setGdata('bigG')\n *      .then(function(bigG) {\n *          bigG = {\n *              status: 1          //0: 失败；1:成功\n *          }\n *      });\n */\nmodule.exports = function(bigG) {\n    if (false) {\n        debug('bigG is %s', bigG);\n    }\n    bigG = bigG || '';\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('travel', 'set_g_data', {\n            gdata: bigG,\n            callback: function(bigG) {\n                resolve(bigG);\n            }\n        });\n    });\n    return p;\n};\n\n\n/***/ }),\n/* 270 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:alert');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 单按钮弹窗，类似 alert\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name alert\n * @param {String} message 弹窗信息\n * @param {String} [title] 弹窗标题，可选\n * @param {Array} button 按钮\n * @return {Undefined}\n * @example\n *  hbnb.ui.alert('message', ['title'], [{\n *      label: '确定',\n *      callback: function() {\n *          console.log('clicked');\n *      }\n *  }]);\n */\nmodule.exports = function(message, title, button) {\n    if (false) {\n        debug('message is %j', message);\n        debug('title is %j', title);\n        debug('button is %j', button);\n    }\n\n    if (!button) {\n        button = title;\n        title = '';\n    }\n\n    // fix: button should be an array\n    if (Object.prototype.toString.call(button) === \"[object Object]\") {\n        button = [button];\n    }\n\n    _invoke('ui', 'alert', {\n        message: message,\n        title: title,\n        buttons: button\n    });\n};\n\n\n/***/ }),\n/* 271 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:autoLock');\n}\n\nvar _invoke = __webpack_require__(124);\nvar env = __webpack_require__(128);\nvar versionCompare = __webpack_require__(141);\n\n/**\n * 不允许自动锁屏\n *\n * 支持版本\n * + iHotel/6.5+\n *\n * @memberof ui\n * @static\n * @name autoLock\n * @param {Boolean} enable true表示禁止自动锁屏\n * @return {Undefined}\n * @example\n *  hbnb.ui.autoLock();\n */\nmodule.exports = function(enable) {\n    if (false) {\n        debug('enable', enable);\n    }\n\n    if (versionCompare(env.appVersion, '6.5') >= 0) {\n        _invoke('ui', 'auto_lock', {\n            enable: enable\n        });\n    }\n};\n\n\n/***/ }),\n/* 272 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:confirm');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 双按钮弹窗，类似 confirm\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name confirm\n * @param {String} message 弹窗信息\n * @param {String} [title] 弹窗标题，可选\n * @param {Object} leftButton 左按钮\n * @param {Object} rightButton 右按钮\n * @return {Undefined}\n * @example\n *  hbnb.ui.confirm('message', 'title', {\n *      label: '确定',\n *      callback: function() {}\n *  }, {\n *      label: '取消',\n *      callback: function() {}\n *  });\n */\nmodule.exports = function(message, title, leftButton, rightButton) {\n    if (false) {\n        debug('message is %j', message);\n        debug('title is %j', title);\n        debug('left button is %j', leftButton);\n        debug('right button is %j', rightButton);\n    }\n\n    if (!rightButton) {\n        rightButton = leftButton;\n        leftButton = title;\n        title = '';\n    }\n\n    _invoke('ui', 'alert', {\n        message: message,\n        title: title,\n        buttons: [leftButton, rightButton]\n    });\n};\n\n\n/***/ }),\n/* 273 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name ui\n */\n\nexports.loadingStart = __webpack_require__(274);\nexports.loadingStop = __webpack_require__(275);\n\nexports.toast = __webpack_require__(279);\nexports.alert = __webpack_require__(270);\nexports.confirm = __webpack_require__(272);\n\nexports.options = __webpack_require__(276);\nexports.singleSelect = __webpack_require__(278);\n\nexports.selectDate = __webpack_require__(277);\nexports.autoLock = __webpack_require__(271);\n\n\n/***/ }),\n/* 274 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:loadingStart');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 开启加载动画\n *\n * 在关闭前多次调用存在 bug，需要业务方自己把握开启／关闭的配对关系\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name loadingStart\n * @return {Undefined}\n * @example\n *  hbnb.ui.loadingStart();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('start');\n    }\n\n    _invoke('ui', 'loading_start');\n};\n\n\n/***/ }),\n/* 275 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:loadingStop');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 关闭加载动画\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name loadingStop\n * @return {Undefined}\n * @example\n *  hbnb.ui.loadingStop();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('stop');\n    }\n\n    _invoke('ui', 'loading_stop');\n};\n\n\n/***/ }),\n/* 276 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:options');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 选项弹窗\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name options\n * @param {Array} menus 选项数组\n * @param {Object} cancel 取消按钮\n * @return {Undefined}\n * @example\n *  hbnb.ui.options([{\n *      label: 'option1',\n *      callback: function() {}\n *  }, {\n *      label: 'option2',\n *      callback: function() {}\n *  }], {\n *      label: 'cancel',\n *      callback: function() {}\n *  });\n */\nmodule.exports = function(menus, cancel) {\n    if (false) {\n        debug('menus is %j', menus);\n        debug('cancel is %j', cancel);\n    }\n\n    _invoke('ui', 'options', {\n        menus: menus,\n        cancel: cancel\n    });\n};\n\n\n/***/ }),\n/* 277 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:singleDate');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 日期选择\n *\n * TODO: 补全示例\n *\n * 支持版本\n * + iHotel/5.9.2+\n *\n * @memberof ui\n * @static\n * @name selectDate\n * @param {String} current 当前日期\n * @param {String} maxDate 最大可选日期\n * @param {String} minDate 最小可选日期\n * @return {Promise<date | err>}\n * @example\n *  hbnb.ui.selectDate('');\n */\nmodule.exports = function(current, maxDate, minDate) {\n    if (false) {\n        debug('current is %s', current);\n        debug('maxDate is %s', maxDate);\n        debug('minDate is %s', minDate);\n    }\n\n    var p = new Promise(function(resolve, reject) {\n        _invoke('ui', 'select_date', {\n            original: current || '',\n            maxDate: maxDate,\n            minDate: minDate,\n            callback: function(data) {\n                resolve(data);\n            },\n            errback: function(err) {\n                reject(err);\n            }\n        });\n    });\n\n    return p;\n};\n\n\n/***/ }),\n/* 278 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:singleSelect');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 单选框\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name singleSelect\n * @param {Array} menus 选项数组\n * @return {Undefined}\n * @example\n *  hbnb.ui.singleSelect([{\n *      label: 'all',\n *      active: true,\n *      callback: function() {},\n *  }, {\n *      label: 'option 1',\n *      active: false,\n *      callback: function() {},\n *  }, {\n *      label: 'option 2',\n *      active: false,\n *      callback: function() {},\n *  }]);\n */\nmodule.exports = function(menus) {\n    if (false) {\n        debug('menus is %j', menus);\n    }\n\n    _invoke('ui', 'single_select', {\n        menus: menus\n    });\n};\n\n\n/***/ }),\n/* 279 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:ui:toast');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * toast 弹窗\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof ui\n * @static\n * @name toast\n * @param {String} message 弹窗信息\n * @param {Number} [time] toast 持续时间，单位 `ms`，可选，默认 3000\n * @return {Undefined}\n * @example\n *  hbnb.ui.toast('message', 1000);\n */\n\nmodule.exports = function(message, time) {\n    if (false) {\n        debug('message is %s', message);\n        debug('time is %s', time);\n    }\n\n    time = time || 3000;\n\n    _invoke('ui', 'toast', {\n        message: message,\n        time: time\n    });\n};\n\n\n/***/ }),\n/* 280 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:back');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 后退\n *\n * TODO: ANDROID 旧版实现有问题\n *\n * 支持版本\n * + iHotel/?\n *\n * @memberof webview\n * @static\n * @name back\n * @return {Undefined}\n * @example\n *  hbnb.webview.back();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    _invoke('webview', 'back');\n};\n\n\n/***/ }),\n/* 281 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:closeAll');\n}\n\nvar _invoke = __webpack_require__(124);\nvar env = __webpack_require__(128);\nvar versionCompare = __webpack_require__(141);\n\n/**\n * 适用的场景是抢票任务编辑，从任务列表不想回表单.\n * ABCBC，在C页面closeAll([B, C])就退到页面A\n *\n * 与 `hbnb.webview.open` 配合使用\n *\n * 支持版本\n * + Android\n * + iHotel/6.5+\n *\n * @memberof webview\n * @static\n * @name closeAll\n * @param {Array} urls 连续关闭的URL\n * @return {Undefined}\n * @example\n *  hbnb.webview.closeAll([\n *      '/qiangpiao/add/',\n *      '/qiangpiao/list/'\n *  ]);\n */\nmodule.exports = function(urls) {\n    if (false) {\n        debug('url list %s', urls);\n    }\n\n    if (env.platform === 'android' && versionCompare(env.appVersion, '6.5') >= 0) {\n        _invoke('webview', 'close_all', {\n            urls: urls\n        });\n    } else {\n        _invoke('webview', 'close');\n    }\n};\n\n\n/***/ }),\n/* 282 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:close');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 关闭当前 webview\n *\n * 与 `hbnb.webivew.open` 配合使用\n *\n * TODO: ANDROID 旧版实现有问题\n *\n * 支持版本\n * + iHotel/?\n *\n * @memberof webview\n * @static\n * @name close\n * @return {Undefined}\n * @example\n *  hbnb.webview.close();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    _invoke('webview', 'close');\n};\n\n\n/***/ }),\n/* 283 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:dismiss');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 关闭当前 modal\n *\n * 与 `hbnb.webivew.modal` 配合使用\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name dismiss\n * @example\n *  hbnb.webview.dismiss();\n */\nmodule.exports = function() {\n    if (false) {\n        debug('called');\n    }\n\n    _invoke('webview', 'dismiss');\n};\n\n\n/***/ }),\n/* 284 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n/**\n * @name webview\n */\n\nexports.open = __webpack_require__(286);\nexports.back = __webpack_require__(280);\nexports.close = __webpack_require__(282);\nexports.closeAll = __webpack_require__(281);\n\nexports.modal = __webpack_require__(285);\nexports.dismiss = __webpack_require__(283);\n\nexports.setTitle = __webpack_require__(290);\nexports.setMenus = __webpack_require__(289);\nexports.setComplexTitle = __webpack_require__(288);\n\nexports.setBackAction = __webpack_require__(287);\n\n\n/***/ }),\n/* 285 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:modal');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开 modal 弹窗\n *\n * 1. 与 `hbnb.webivew.dismiss` 配合使用\n * 2. `modal` 弹窗内部不能继续调用 `modal` 弹窗，可以调用 `open`\n * 3. `dimiss` 时会关闭弹窗，且 modal 的操作不会纪录到后退路径中\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name modal\n * @param {String} url 页面地址\n * @return {Undefined}\n * @example\n *  hbnb.webview.modal('http://i..com');\n */\nmodule.exports = function(url) {\n    if (false) {\n        debug('url is %s', url);\n    }\n\n    _invoke('webview', 'modal', {\n        url: url\n    });\n};\n\n\n/***/ }),\n/* 286 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:open');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 打开新页面\n *\n * 与 `hbnb.webivew.close` 配合使用\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name open\n * @param {String} url 页面地址\n * @return {Undefined}\n * @example\n *  hbnb.webview.open('http://i..com');\n */\nmodule.exports = function(url) {\n    if (false) {\n        debug('url is %s', url);\n    }\n\n    _invoke('webview', 'open', {\n        url: url\n    });\n};\n\n\n/***/ }),\n/* 287 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:setBackAction');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 修改后退操作\n *\n * 一旦设置该函数，用户点击后退时只会调用该函数而不会直接后退。\n * 可在函数内调用 `hbnb.webview.back` 方法进行后退\n *\n * TODO: 支持版本\n *\n * 支持版本\n * + iHotel/??\n *\n * @memberof webview\n * @static\n * @name setBackAction\n * @param {Function} cb 点击后退按钮时执行的函数\n * @return {Undefined}\n * @example\n *  hbnb.webview.setBackAction(function() {\n *      // do something\n *  });\n */\nmodule.exports = function(cb) {\n    if (false) {\n        debug('callback is %s', cb);\n    }\n\n    _invoke('webview', 'set_navbar_back', {\n        callback: function() {\n            cb();\n            return false;\n        }\n    });\n};\n\n\n/***/ }),\n/* 288 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nvar assert;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:setComplexTitle');\n    assert = require('assert');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 设置复杂标题\n *\n * 根据传入的 `type` 判断使用那种展示形式。\n * 如果当前版本不支持 `type`，会回退到普通形式，只展示 `title`。\n *\n * 目前只支持上下双栏的主副标题 `type='two-row'`\n *\n * 支持版本\n * + iHotel/5.9.2+\n *\n * @memberof webview\n * @static\n * @name setComplexTitle\n * @param {Object} opts 标题设置\n * @return {Undefined}\n * @example\n *  hbnb.webview.setComplexTitle({\n *      type: 'two-row',\n *      title: 'title',\n *      subTitle: 'subTitle'\n *  });\n */\nmodule.exports = function(opts) {\n    if (false) {\n        debug('opts is %j', opts);\n        assert(opts.title);\n    }\n\n    _invoke('webview', 'set_complex_title', opts);\n};\n\n\n/***/ }),\n/* 289 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:setMenus');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 设置导航栏右侧按钮\n *\n * 目前支持 `icon`/`text` 两种类型的按钮\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name setMenus\n * @param {Array} menus 按钮设置\n * @return {Undefined}\n * @example\n *  hbnb.webview.setMenus([{\n *      type: 'text',\n *      text: '确定',\n *      color: '#cccccc',\n *      callback: function() {console.log('clicked'); return false;}\n *  }, {\n *      type: 'icon',\n *      icon: 'url',\n *      callback: function() {console.log('clicked'); return false;}\n *  ]);\n */\nmodule.exports = function(menus) {\n    if (false) {\n        debug('menus is %j', menus);\n    }\n\n    _invoke('webview', 'set_navbar_menus', {\n        menus: menus\n    });\n};\n\n\n/***/ }),\n/* 290 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar debug;\nif (false) {\n    debug = require('debug')('hbnb:module:webview:setTitle');\n}\n\nvar _invoke = __webpack_require__(124);\n\n/**\n * 修改标题\n *\n * 支持版本\n * + iHotel/5.8+\n *\n * @memberof webview\n * @static\n * @name setTitle\n * @param {String} title 标题\n * @return {Undefined}\n * @example\n *  hbnb.webview.setTitle('new title');\n */\nmodule.exports = function(title) {\n    if (false) {\n        debug('title is %s', title);\n    }\n\n    _invoke('webview', 'set_title', {\n        title: title\n    });\n};\n\n\n/***/ })\n]));",
    _cachedSize: 119492,
    _cachedMaps: {
    },
    node: function(options) {
      return this._source.node(options);
    },
    listMap: function(options) {
      return this._source.listMap(options);
    },
    existsAt: "/Users/lizhuo/mt/mtweb/cube-cli/packages/block-component-cube-cli/build/static/js/0.0dadc1dddc09f05c1c50.js",
    emitted: true,
  }