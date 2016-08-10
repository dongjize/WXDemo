(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.2 Build 20160802');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	__webpack_require__(1);
	
	var _runtime = __webpack_require__(74);
	
	var _runtime2 = _interopRequireDefault(_runtime);
	
	var _package = __webpack_require__(99);
	
	var _methods = __webpack_require__(100);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var native = _package.subversion.native;
	var transformer = _package.subversion.transformer;
	
	// register instance management APIs
	
	var _loop = function _loop(methodName) {
	  global[methodName] = function () {
	    var ret = _runtime2.default[methodName].apply(_runtime2.default, arguments);
	    if (ret instanceof Error) {
	      console.error(ret.toString());
	    }
	    return ret;
	  };
	};
	
	for (var methodName in _runtime2.default) {
	  _loop(methodName);
	}
	
	// register framework meta info
	global.frameworkVersion = native;
	global.transformerVersion = transformer;
	
	// register special methods for Weex framework
	global.registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.extend = extend;
	exports.def = def;
	exports.remove = remove;
	exports.hasOwn = hasOwn;
	exports.bind = bind;
	exports.toArray = toArray;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(67);
	
	__webpack_require__(68);
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(target) {
	  for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    src[_key - 1] = arguments[_key];
	  }
	
	  if (typeof Object.assign === 'function') {
	    Object.assign.apply(Object, [target].concat(src));
	  } else {
	    var first = src.shift();
	    for (var key in first) {
	      target[key] = first[key];
	    }
	    if (src.length) {
	      extend.apply(undefined, [target].concat(src));
	    }
	  }
	  return target;
	}
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Remove an item from an array
	 *
	 * @param {Array} arr
	 * @param {*} item
	 */
	
	function remove(arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1);
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _global = global;
	var setTimeout = _global.setTimeout;
	var setTimeoutNative = _global.setTimeoutNative;
	
	// fix no setTimeout on Android V8
	/* istanbul ignore if */
	
	if (typeof setTimeout === 'undefined' && typeof setTimeoutNative === 'function') {
	  (function () {
	    var timeoutMap = {};
	    var timeoutId = 0;
	
	    global.setTimeout = function (cb, time) {
	      timeoutMap[++timeoutId] = cb;
	      setTimeoutNative(timeoutId.toString(), time);
	    };
	
	    global.setTimeoutCallback = function (id) {
	      if (typeof timeoutMap[id] === 'function') {
	        timeoutMap[id]();
	        delete timeoutMap[id];
	      }
	    };
	  })();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	// global.Promise = null
	__webpack_require__(4);
	__webpack_require__(24);
	__webpack_require__(50);
	__webpack_require__(54);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(5),
	    test = {};
	test[__webpack_require__(7)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(11)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(6),
	    TAG = __webpack_require__(7)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(8)('wks'),
	    uid = __webpack_require__(10),
	    _Symbol = __webpack_require__(9).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    hide = __webpack_require__(12),
	    has = __webpack_require__(22),
	    SRC = __webpack_require__(10)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(23).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(13),
	    createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(14),
	    IE8_DOM_DEFINE = __webpack_require__(16),
	    toPrimitive = __webpack_require__(20),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(15);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function () {
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(15),
	    document = __webpack_require__(9).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(25)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(28)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(26),
	    defined = __webpack_require__(27);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(29),
	    $export = __webpack_require__(30),
	    redefine = __webpack_require__(11),
	    hide = __webpack_require__(12),
	    has = __webpack_require__(22),
	    Iterators = __webpack_require__(33),
	    $iterCreate = __webpack_require__(34),
	    setToStringTag = __webpack_require__(47),
	    getPrototypeOf = __webpack_require__(48),
	    ITERATOR = __webpack_require__(7)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    core = __webpack_require__(23),
	    hide = __webpack_require__(12),
	    redefine = __webpack_require__(11),
	    ctx = __webpack_require__(31),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(35),
	    descriptor = __webpack_require__(21),
	    setToStringTag = __webpack_require__(47),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(7)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(14),
	    dPs = __webpack_require__(36),
	    enumBugKeys = __webpack_require__(45),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(13),
	    anObject = __webpack_require__(14),
	    getKeys = __webpack_require__(37);
	
	module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(38),
	    enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(22),
	    toIObject = __webpack_require__(39),
	    arrayIndexOf = __webpack_require__(41)(false),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(40),
	    defined = __webpack_require__(27);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(6);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(39),
	    toLength = __webpack_require__(42),
	    toIndex = __webpack_require__(43);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(26),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(26),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(8)('keys'),
	    uid = __webpack_require__(10);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(13).f,
	    has = __webpack_require__(22),
	    TAG = __webpack_require__(7)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(22),
	    toObject = __webpack_require__(49),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(51),
	    redefine = __webpack_require__(11),
	    global = __webpack_require__(9),
	    hide = __webpack_require__(12),
	    Iterators = __webpack_require__(33),
	    wks = __webpack_require__(7),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(52),
	    step = __webpack_require__(53),
	    Iterators = __webpack_require__(33),
	    toIObject = __webpack_require__(39);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(28)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(7)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(12)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(29),
	    global = __webpack_require__(9),
	    ctx = __webpack_require__(31),
	    classof = __webpack_require__(5),
	    $export = __webpack_require__(30),
	    isObject = __webpack_require__(15),
	    aFunction = __webpack_require__(32),
	    anInstance = __webpack_require__(55),
	    forOf = __webpack_require__(56),
	    speciesConstructor = __webpack_require__(60),
	    task = __webpack_require__(61).set,
	    microtask = __webpack_require__(63)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(7)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(64)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(47)($Promise, PROMISE);
	__webpack_require__(65)(PROMISE);
	Wrapper = __webpack_require__(23)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(66)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(31),
	    call = __webpack_require__(57),
	    isArrayIter = __webpack_require__(58),
	    anObject = __webpack_require__(14),
	    toLength = __webpack_require__(42),
	    getIterFn = __webpack_require__(59),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(33),
	    ITERATOR = __webpack_require__(7)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(5),
	    ITERATOR = __webpack_require__(7)('iterator'),
	    Iterators = __webpack_require__(33);
	module.exports = __webpack_require__(23).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(14),
	    aFunction = __webpack_require__(32),
	    SPECIES = __webpack_require__(7)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(31),
	    invoke = __webpack_require__(62),
	    html = __webpack_require__(46),
	    cel = __webpack_require__(19),
	    global = __webpack_require__(9),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(6)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    macrotask = __webpack_require__(61).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(6)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(11);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    dP = __webpack_require__(13),
	    DESCRIPTORS = __webpack_require__(17),
	    SPECIES = __webpack_require__(7)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(7)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var _global = global;
	var console = _global.console;
	var nativeLog = _global.nativeLog;
	
	var LEVELS = ['error', 'warn', 'info', 'log', 'debug'];
	var levelMap = {};
	
	generateLevelMap();
	
	/* istanbul ignore if */
	if (typeof console === 'undefined' || // Android
	global.WXEnvironment && global.WXEnvironment.platform === 'iOS' // iOS
	) {
	    global.console = {
	      debug: function debug() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        if (checkLevel('debug')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__DEBUG']));
	        }
	      },
	      log: function log() {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }
	
	        if (checkLevel('log')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__LOG']));
	        }
	      },
	      info: function info() {
	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }
	
	        if (checkLevel('info')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__INFO']));
	        }
	      },
	      warn: function warn() {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }
	
	        if (checkLevel('warn')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__WARN']));
	        }
	      },
	      error: function error() {
	        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	          args[_key5] = arguments[_key5];
	        }
	
	        if (checkLevel('error')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__ERROR']));
	        }
	      }
	    };
	  } else {
	  // HTML5
	  var debug = console.debug;
	  var log = console.log;
	  var info = console.info;
	  var warn = console.warn;
	  var error = console.error;
	
	  console.__ori__ = { debug: debug, log: log, info: info, warn: warn, error: error };
	  console.debug = function () {
	    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	      args[_key6] = arguments[_key6];
	    }
	
	    if (checkLevel('debug')) {
	      console.__ori__.debug.apply(console, args);
	    }
	  };
	  console.log = function () {
	    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	      args[_key7] = arguments[_key7];
	    }
	
	    if (checkLevel('log')) {
	      console.__ori__.log.apply(console, args);
	    }
	  };
	  console.info = function () {
	    for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	      args[_key8] = arguments[_key8];
	    }
	
	    if (checkLevel('info')) {
	      console.__ori__.info.apply(console, args);
	    }
	  };
	  console.warn = function () {
	    for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	      args[_key9] = arguments[_key9];
	    }
	
	    if (checkLevel('warn')) {
	      console.__ori__.warn.apply(console, args);
	    }
	  };
	  console.error = function () {
	    for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	      args[_key10] = arguments[_key10];
	    }
	
	    if (checkLevel('error')) {
	      console.__ori__.error.apply(console, args);
	    }
	  };
	}
	
	function generateLevelMap() {
	  LEVELS.forEach(function (level) {
	    var levelIndex = LEVELS.indexOf(level);
	    levelMap[level] = {};
	    LEVELS.forEach(function (type) {
	      var typeIndex = LEVELS.indexOf(type);
	      if (typeIndex <= levelIndex) {
	        levelMap[level][type] = true;
	      }
	    });
	  });
	}
	
	function checkLevel(type) {
	  var logLevel = global.WXEnvironment && global.WXEnvironment.logLevel || 'log';
	  return levelMap[logLevel] && levelMap[logLevel][type];
	}
	
	function format(args) {
	  return args.map(function (v) {
	    var type = Object.prototype.toString.call(v);
	    if (type.toLowerCase() === '[object object]') {
	      v = JSON.stringify(v);
	    } else {
	      v = String(v);
	    }
	    return v;
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(69);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(70);
	module.exports = __webpack_require__(23).Object.assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(30);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(71) });

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(37),
	    gOPS = __webpack_require__(72),
	    pIE = __webpack_require__(73),
	    toObject = __webpack_require__(49),
	    IObject = __webpack_require__(40),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(18)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;
	
	var _config = __webpack_require__(75);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _vdom = __webpack_require__(97);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var config = {
	  Document: _vdom.Document, Element: _vdom.Element, Comment: _vdom.Comment,
	  sendTasks: function sendTasks() {
	    var _global;
	
	    return (_global = global).callNative.apply(_global, arguments);
	  }
	};
	
	for (var name in _config2.default) {
	  var framework = _config2.default[name];
	  framework.init(config);
	}
	
	var versionRegExp = /^\/\/ *(\{[^\}]*\}) *\r?\n/;
	
	function checkVersion(code) {
	  var info = void 0;
	  var result = versionRegExp.exec(code);
	  if (result) {
	    try {
	      info = JSON.parse(result[1]);
	    } catch (e) {}
	  }
	  return info;
	}
	
	var instanceMap = {};
	
	function createInstance(id, code, config, data) {
	  var info = instanceMap[id];
	  if (!info) {
	    info = checkVersion(code) || {};
	    if (!_config2.default[info.framework]) {
	      info.framework = 'Weex';
	    }
	    instanceMap[id] = info;
	    config = config || {};
	    config.bundleVersion = info.version;
	    console.debug('[JS Framework] create an ' + info.framework + '@' + config.bundleVersion + ' instance from ' + config.bundleVersion);
	    return _config2.default[info.framework].createInstance(id, code, config, data);
	  }
	  return new Error('invalid instance id "' + id + '"');
	}
	
	var methods = {
	  createInstance: createInstance
	};
	
	function genInit(methodName) {
	  methods[methodName] = function () {
	    for (var _name in _config2.default) {
	      var _framework = _config2.default[_name];
	      if (_framework && _framework[methodName]) {
	        _framework[methodName].apply(_framework, arguments);
	      }
	    }
	  };
	}
	
	['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);
	
	function genInstance(methodName) {
	  methods[methodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && _config2.default[info.framework]) {
	      var _frameworks$info$fram;
	
	      return (_frameworks$info$fram = _config2.default[info.framework])[methodName].apply(_frameworks$info$fram, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);
	
	function adaptInstance(methodName, nativeMethodName) {
	  methods[nativeMethodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && _config2.default[info.framework]) {
	      var _frameworks$info$fram2;
	
	      return (_frameworks$info$fram2 = _config2.default[info.framework])[methodName].apply(_frameworks$info$fram2, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	adaptInstance('receiveTasks', 'callJS');
	
	exports.default = methods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _default = __webpack_require__(76);
	
	var Weex = _interopRequireWildcard(_default);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	  Weex: Weex
	}; // built by npm run build:config

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview Main entry, instance manager
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * - createInstance(instanceId, code, options, data)
	                                                                                                                                                                                                                                                   * - refreshInstance(instanceId, data)
	                                                                                                                                                                                                                                                   * - destroyInstance(instanceId)
	                                                                                                                                                                                                                                                   * - registerComponents(components)
	                                                                                                                                                                                                                                                   * - registerModules(modules)
	                                                                                                                                                                                                                                                   * - getRoot(instanceId)
	                                                                                                                                                                                                                                                   * - instanceMap
	                                                                                                                                                                                                                                                   * - callJS(instanceId, tasks)
	                                                                                                                                                                                                                                                   *   - fireEvent(ref, type, data)
	                                                                                                                                                                                                                                                   *   - callback(funcId, data)
	                                                                                                                                                                                                                                                   */
	
	exports.init = init;
	exports.createInstance = createInstance;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.getRoot = getRoot;
	exports.receiveTasks = receiveTasks;
	
	var _config = __webpack_require__(77);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _app = __webpack_require__(78);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _vm = __webpack_require__(84);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	var instanceMap = {};
	
	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	}
	
	/**
	 * create a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(instanceId, code, options, data) {
	  var instance = instanceMap[instanceId];
	  options = options || {};
	
	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(instanceId, options);
	    instanceMap[instanceId] = instance;
	    result = instance.init(code, data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  return result;
	}
	
	/**
	 * refresh a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {object} data
	 */
	function refreshInstance(instanceId, data) {
	  var instance = instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.refreshData(data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}
	
	/**
	 * destroy a Weex instance
	 * @param  {string} instanceId
	 */
	function destroyInstance(instanceId) {
	  var instance = instanceMap[instanceId];
	  if (!instance) {
	    return new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  instance.destroy();
	  delete instanceMap[instanceId];
	  return instanceMap;
	}
	
	/**
	 * register the name of each native component
	 * @param  {array} components array of name
	 */
	function registerComponents(components) {
	  if (Array.isArray(components)) {
	    components.forEach(function register(name) {
	      /* istanbul ignore if */
	      if (!name) {
	        return;
	      }
	      if (typeof name === 'string') {
	        nativeComponentMap[name] = true;
	      } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && typeof name.type === 'string') {
	        nativeComponentMap[name.type] = name;
	      }
	    });
	  }
	}
	
	/**
	 * register the name and methods of each module
	 * @param  {object} modules a object of modules
	 */
	function registerModules(modules) {
	  if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
	    _vm2.default.registerModules(modules);
	  }
	}
	
	/**
	 * register the name and methods of each api
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(apis) {
	  if ((typeof apis === 'undefined' ? 'undefined' : _typeof(apis)) === 'object') {
	    _vm2.default.registerMethods(apis);
	  }
	}
	global.registerMethods = registerMethods;
	
	/**
	 * get a whole element tree of an instance
	 * for debugging
	 * @param  {string} instanceId
	 * @return {object} a virtual dom tree
	 */
	function getRoot(instanceId) {
	  var instance = instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.getRootElement();
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}
	
	var jsHandlers = {
	  fireEvent: function fireEvent(instanceId, ref, type, data, domChanges) {
	    var instance = instanceMap[instanceId];
	    return instance.fireEvent(ref, type, data, domChanges);
	  },
	
	  callback: function callback(instanceId, funcId, data, ifLast) {
	    var instance = instanceMap[instanceId];
	    return instance.callback(funcId, data, ifLast);
	  }
	};
	
	/**
	 * accept calls from native (event or callback)
	 *
	 * @param  {string} instanceId
	 * @param  {array} tasks list with `method` and `args`
	 */
	function receiveTasks(instanceId, tasks) {
	  var instance = instanceMap[instanceId];
	  if (instance && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(instanceId);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return new Error('invalid instance id "' + instanceId + '" or tasks');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  nativeComponentMap: {
	    text: true,
	    image: true,
	    container: true,
	    slider: {
	      type: 'slider',
	      append: 'tree'
	    },
	    cell: {
	      type: 'cell',
	      append: 'tree'
	    }
	  }
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AppInstance;
	
	var _util = __webpack_require__(79);
	
	var _ctrl = __webpack_require__(80);
	
	var ctrl = _interopRequireWildcard(_ctrl);
	
	var _differ = __webpack_require__(96);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(77);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(94);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function AppInstance(instanceId, options) {
	  this.id = instanceId;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(instanceId, this.options.bundleUrl);
	  this.differ = new _differ2.default(instanceId);
	  this.uid = 0;
	} /**
	   * @fileOverview
	   * Weex instance constructor & definition
	   */
	
	function normalize(app, v) {
	  var type = (0, _util.typof)(v);
	
	  switch (type) {
	    case 'undefined':
	    case 'null':
	      return '';
	    case 'regexp':
	      return v.toString();
	    case 'date':
	      return v.toISOString();
	    case 'number':
	    case 'string':
	    case 'boolean':
	    case 'array':
	    case 'object':
	      if (v instanceof _config2.default.Element) {
	        return v.ref;
	      }
	      return v;
	    case 'function':
	      app.callbacks[++app.uid] = v;
	      return app.uid.toString();
	    default:
	      return JSON.stringify(v);
	  }
	}
	
	AppInstance.prototype.callTasks = function (tasks) {
	  var _this = this;
	
	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }
	
	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(_this, arg);
	    });
	  });
	
	  return _config2.default.sendTasks(this.id, tasks, '-1');
	};
	
	(0, _util.extend)(AppInstance.prototype, ctrl, {
	  registerComponent: _register.registerComponent,
	  requireComponent: _register.requireComponent,
	  requireModule: _register.requireModule
	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shared = __webpack_require__(1);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _shared.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _shared.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _shared.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _shared.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _shared.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _shared.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _shared.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _shared.isPlainObject;
	  }
	});
	exports.isReserved = isReserved;
	exports.cached = cached;
	exports.typof = typof;
	
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	// can we use __proto__?
	var hasProto = exports.hasProto = '__proto__' in {};
	
	var _Set = void 0;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  exports._Set = _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  exports._Set = _Set = function _Set() {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	exports._Set = _Set;
	
	/**
	 * Create a cached version of a pure function.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	var camelize = exports.camelize = cached(function (str) {
	  return str.replace(camelizeRE, toUpper);
	});
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	var hyphenate = exports.hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	});
	
	function typof(v) {
	  var s = Object.prototype.toString.call(v);
	  return s.substring(8, s.length - 1).toLowerCase();
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateActions = updateActions;
	exports.init = init;
	exports.destroy = destroy;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.refreshData = refreshData;
	
	var _util = __webpack_require__(79);
	
	var _bundle = __webpack_require__(81);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - init bundle
	                                                                                                                                                                                                     * - fire event
	                                                                                                                                                                                                     * - callback
	                                                                                                                                                                                                     * - destroy
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	function updateActions() {
	  this.differ.flush();
	  var tasks = [];
	  if (this.doc && this.doc.listener && this.doc.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(this.doc.listener.updates));
	    this.doc.listener.updates = [];
	  }
	  if (tasks.length) {
	    return this.callTasks(tasks);
	  }
	}
	
	function init(code, data) {
	  var _this = this;
	
	  console.debug('[JS Framework] Intialize an instance with:\n', data);
	
	  var result = void 0;
	  // @see: lib/app/bundle.js
	  var bundleDefine = (0, _util.bind)(_bundle.define, this);
	  var bundleBootstrap = function bundleBootstrap(name, config, _data) {
	    result = (0, _bundle.bootstrap)(_this, name, config, _data || data);
	    _this.updateActions();
	    _this.doc.listener.createFinish();
	    console.debug('[JS Framework] After intialized an instance(' + _this.id + ')');
	  };
	
	  // backward(register/render)
	  var bundleRegister = (0, _util.bind)(_bundle.register, this);
	  var bundleRender = function bundleRender(name, _data) {
	    result = (0, _bundle.bootstrap)(_this, name, {}, _data);
	  };
	
	  var bundleRequire = function bundleRequire(name) {
	    return function (_data) {
	      result = (0, _bundle.bootstrap)(_this, name, {}, _data);
	    };
	  };
	
	  var bundleDocument = this.doc;
	
	  var functionBody = void 0;
	  /* istanbul ignore if */
	  if (typeof code === 'function') {
	    // `function () {...}` -> `{...}`
	    // not very strict
	    functionBody = code.toString().substr(12);
	  } else if (code) {
	    functionBody = code.toString();
	  }
	
	  var _global = global;
	  var WXEnvironment = _global.WXEnvironment;
	
	  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	    (function () {
	      var timer = _this.requireModule('timer');
	      var timerAPIs = {
	        setTimeout: function setTimeout() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setTimeout(handler, args[1]);
	          return _this.uid.toString();
	        },
	        setInterval: function setInterval() {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setInterval(handler, args[1]);
	          return _this.uid.toString();
	        },
	        clearTimeout: function clearTimeout(n) {
	          timer.clearTimeout(n);
	        },
	        clearInterval: function clearInterval(n) {
	          timer.clearInterval(n);
	        }
	      };
	
	      var fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	      '__weex_bootstrap__', // alias for bootstrap
	      'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);
	
	      fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    })();
	  } else {
	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    functionBody);
	
	    _fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap);
	  }
	
	  return result;
	}
	
	function destroy() {
	  console.debug('[JS Framework] Destory an instance(' + this.id + ')');
	
	  this.id = '';
	  this.options = null;
	  this.blocks = null;
	  this.vm = null;
	  this.doc = null;
	  this.customComponentMap = null;
	  this.callbacks = null;
	}
	
	function getRootElement() {
	  var doc = this.doc || {};
	  var body = doc.body || {};
	  return body.toJSON ? body.toJSON() : {};
	}
	
	function fireEvent(ref, type, e, domChanges) {
	  var _this2 = this;
	
	  console.debug('[JS Framework] Fire a "' + type + '" event on an element(' + ref + ') in instance(' + this.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return _this2.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }
	
	  var el = this.doc.getRef(ref);
	
	  if (el) {
	    this.doc.close();
	    var result = this.doc.fireEvent(el, type, e, domChanges);
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return result;
	  }
	
	  return new Error('invalid element reference "' + ref + '"');
	}
	
	function callback(callbackId, data, ifKeepAlive) {
	  console.debug('[JS Framework] Invoke a callback(' + callbackId + ') with', data, 'in instance(' + this.id + ')');
	
	  var callback = this.callbacks[callbackId];
	
	  if (typeof callback === 'function') {
	    this.doc.close();
	    callback(data); // data is already a object, @see: lib/runtime/index.js
	
	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      this.callbacks[callbackId] = undefined;
	    }
	
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return;
	  }
	
	  return new Error('invalid callback id "' + callbackId + '"');
	}
	
	function refreshData(data) {
	  console.debug('[JS Framework] Refresh with', data, 'in instance[' + this.id + ']');
	
	  var vm = this.vm;
	
	  if (vm && data) {
	    this.doc.close();
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      (0, _util.extend)(vm, data);
	    }
	    this.updateActions();
	    this.doc.listener.refreshFinish();
	    this.doc.open();
	    return;
	  }
	
	  return new Error('invalid data "' + data + '"');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	exports.clearCommonModules = clearCommonModules;
	exports.bootstrap = bootstrap;
	exports.register = register;
	
	var _semver = __webpack_require__(82);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(79);
	
	var _vm = __webpack_require__(84);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(95);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                   * api that invoked by js bundle code
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * - define(name, factory): define a new composed component type
	                                                                                                                                                                                                                   * - bootstrap(type, config, data): require a certain type &
	                                                                                                                                                                                                                   *         render with (optional) data
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * deprecated:
	                                                                                                                                                                                                                   * - register(type, options): register a new composed component type
	                                                                                                                                                                                                                   * - render(type, data): render by a certain type with (optional) data
	                                                                                                                                                                                                                   * - require(type)(data): require a type then render with data
	                                                                                                                                                                                                                   */
	
	var WEEX_COMPONENT_REG = /^@weex-component\//;
	var WEEX_MODULE_REG = /^@weex-module\//;
	var NORMAL_MODULE_REG = /^\.{1,2}\//;
	var JS_SURFIX_REG = /\.js$/;
	
	var isWeexComponent = function isWeexComponent(name) {
	  return !!name.match(WEEX_COMPONENT_REG);
	};
	var isWeexModule = function isWeexModule(name) {
	  return !!name.match(WEEX_MODULE_REG);
	};
	var isNormalModule = function isNormalModule(name) {
	  return !!name.match(NORMAL_MODULE_REG);
	};
	var isNpmModule = function isNpmModule(name) {
	  return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name);
	};
	
	function removeWeexPrefix(str) {
	  return str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	}
	
	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}
	
	var commonModules = {};
	
	function clearCommonModules() {
	  commonModules = {};
	}
	
	// define(name, factory) for primary usage
	// or
	// define(name, deps, factory) for compatibility
	// Notice: DO NOT use function define() {},
	// it will cause error after builded by webpack
	var define = exports.define = function define(name, deps, factory) {
	  var _this = this;
	
	  console.debug('[JS Framework] define a component ' + name);
	
	  if ((0, _util.typof)(deps) === 'function') {
	    factory = deps;
	    deps = [];
	  }
	
	  var _require = function _require(name) {
	    var cleanName = void 0;
	
	    if (isWeexComponent(name)) {
	      cleanName = removeWeexPrefix(name);
	      return _this.requireComponent(cleanName);
	    }
	    if (isWeexModule(name)) {
	      cleanName = removeWeexPrefix(name);
	      return _this.requireModule(cleanName);
	    }
	    if (isNormalModule(name)) {
	      cleanName = removeJSSurfix(name);
	      return commonModules[name];
	    }
	    if (isNpmModule(name)) {
	      cleanName = removeJSSurfix(name);
	      return commonModules[name];
	    }
	  };
	  var _module = { exports: {} };
	
	  var cleanName = void 0;
	  if (isWeexComponent(name)) {
	    cleanName = removeWeexPrefix(name);
	
	    factory(_require, _module.exports, _module);
	
	    this.registerComponent(cleanName, _module.exports);
	  } else if (isWeexModule(name)) {
	    cleanName = removeWeexPrefix(name);
	
	    factory(_require, _module.exports, _module);
	
	    _vm2.default.registerModules(_defineProperty({}, cleanName, _module.exports));
	  } else if (isNormalModule(name)) {
	    cleanName = removeJSSurfix(name);
	
	    factory(_require, _module.exports, _module);
	
	    commonModules[cleanName] = _module.exports;
	  } else if (isNpmModule(name)) {
	    cleanName = removeJSSurfix(name);
	
	    factory(_require, _module.exports, _module);
	
	    var exports = _module.exports;
	    if (exports.template || exports.style || exports.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      this.registerComponent(cleanName, exports);
	    } else {
	      commonModules[cleanName] = _module.exports;
	    }
	  }
	};
	
	function bootstrap(app, name, config, data) {
	  console.debug('[JS Framework] bootstrap for ' + name);
	
	  var cleanName = void 0;
	
	  if (isWeexComponent(name)) {
	    cleanName = removeWeexPrefix(name);
	  } else if (isNpmModule(name)) {
	    cleanName = removeJSSurfix(name);
	    // check if define by old 'define' method
	    /* istanbul ignore if */
	    if (!app.customComponentMap[cleanName]) {
	      return new Error('It\'s not a component: ' + name);
	    }
	  } else {
	    return new Error('Wrong component name: ' + name);
	  }
	
	  config = (0, _util.isPlainObject)(config) ? config : {};
	
	  if (typeof config.transformerVersion === 'string' && typeof global.transformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.transformerVersion)) {
	    return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.transformerVersion));
	  }
	
	  var _checkDowngrade = downgrade.check(config.downgrade);
	  /* istanbul ignore if */
	  if (_checkDowngrade.isDowngrade) {
	    app.callTasks([{
	      module: 'instanceWrap',
	      method: 'error',
	      args: [_checkDowngrade.errorType, _checkDowngrade.code, _checkDowngrade.errorMessage]
	    }]);
	    return new Error('Downgrade[' + _checkDowngrade.code + ']: ' + _checkDowngrade.errorMessage);
	  }
	
	  app.vm = new _vm2.default(cleanName, null, { _app: app }, null, data);
	}
	
	/**
	 * @deprecated
	 */
	function register(type, options) {
	  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
	  this.registerComponent(type, options);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports = module.exports = SemVer;
	
	// The debug function is excluded entirely from the minified version.
	/* nomin */var debug;
	/* nomin */if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' &&
	/* nomin */process.env &&
	/* nomin */process.env.NODE_DEBUG &&
	/* nomin *//\bsemver\b/i.test(process.env.NODE_DEBUG))
	  /* nomin */debug = function debug() {
	    /* nomin */var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */args.unshift('SEMVER');
	    /* nomin */console.log.apply(console, args);
	    /* nomin */
	  };
	  /* nomin */else
	  /* nomin */debug = function debug() {};
	
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';
	
	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	
	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;
	
	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.
	
	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.
	
	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
	
	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.
	
	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	
	// ## Main Version
	// Three dot-separated numeric identifiers.
	
	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
	
	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
	
	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.
	
	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.
	
	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
	
	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
	
	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.
	
	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
	
	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.
	
	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
	
	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.
	
	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.
	
	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
	
	src[FULL] = '^' + FULLPLAIN + '$';
	
	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
	
	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';
	
	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';
	
	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
	
	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
	
	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';
	
	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';
	
	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
	
	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';
	
	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';
	
	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
	
	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
	
	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
	
	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';
	
	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
	
	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';
	
	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';
	
	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i]) re[i] = new RegExp(src[i]);
	}
	
	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer) return version;
	
	  if (typeof version !== 'string') return null;
	
	  if (version.length > MAX_LENGTH) return null;
	
	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version)) return null;
	
	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}
	
	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}
	
	exports.SemVer = SemVer;
	
	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose) return version;else version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }
	
	  if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
	
	  if (!(this instanceof SemVer)) return new SemVer(version, loose);
	
	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
	
	  if (!m) throw new TypeError('Invalid Version: ' + version);
	
	  this.raw = version;
	
	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];
	
	  if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');
	
	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');
	
	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');
	
	  // numberify any prerelease numeric ids
	  if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
	    if (/^[0-9]+$/.test(id)) {
	      var num = +id;
	      if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
	    }
	    return id;
	  });
	
	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}
	
	SemVer.prototype.format = function () {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};
	
	SemVer.prototype.toString = function () {
	  return this.version;
	};
	
	SemVer.prototype.compare = function (other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return this.compareMain(other) || this.comparePre(other);
	};
	
	SemVer.prototype.compareMain = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
	};
	
	SemVer.prototype.comparePre = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;
	
	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
	  } while (++i);
	};
	
	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function (release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0) this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	
	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0) this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0) this.prerelease = [0];else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
	        } else this.prerelease = [identifier, 0];
	      }
	      break;
	
	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};
	
	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof loose === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }
	
	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre' + key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}
	
	exports.compareIdentifiers = compareIdentifiers;
	
	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	
	  return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
	}
	
	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}
	
	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}
	
	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}
	
	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}
	
	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}
	
	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}
	
	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}
	
	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.compare(a, b, loose);
	  });
	}
	
	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}
	
	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}
	
	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}
	
	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}
	
	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}
	
	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}
	
	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}
	
	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '':case '=':case '==':
	      ret = eq(a, b, loose);break;
	    case '!=':
	      ret = neq(a, b, loose);break;
	    case '>':
	      ret = gt(a, b, loose);break;
	    case '>=':
	      ret = gte(a, b, loose);break;
	    case '<':
	      ret = lt(a, b, loose);break;
	    case '<=':
	      ret = lte(a, b, loose);break;
	    default:
	      throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}
	
	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose) return comp;else comp = comp.value;
	  }
	
	  if (!(this instanceof Comparator)) return new Comparator(comp, loose);
	
	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);
	
	  if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;
	
	  debug('comp', this);
	}
	
	var ANY = {};
	Comparator.prototype.parse = function (comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);
	
	  if (!m) throw new TypeError('Invalid comparator: ' + comp);
	
	  this.operator = m[1];
	  if (this.operator === '=') this.operator = '';
	
	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
	};
	
	Comparator.prototype.toString = function () {
	  return this.value;
	};
	
	Comparator.prototype.test = function (version) {
	  debug('Comparator.test', version, this.loose);
	
	  if (this.semver === ANY) return true;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  return cmp(version, this.operator, this.semver, this.loose);
	};
	
	exports.Range = Range;
	function Range(range, loose) {
	  if (range instanceof Range && range.loose === loose) return range;
	
	  if (!(this instanceof Range)) return new Range(range, loose);
	
	  this.loose = loose;
	
	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function (c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });
	
	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }
	
	  this.format();
	}
	
	Range.prototype.format = function () {
	  this.range = this.set.map(function (comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};
	
	Range.prototype.toString = function () {
	  return this.range;
	};
	
	Range.prototype.parseRange = function (range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);
	
	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);
	
	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);
	
	  // normalize spaces
	  range = range.split(/\s+/).join(' ');
	
	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	
	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function (comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function (comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function (comp) {
	    return new Comparator(comp, loose);
	  });
	
	  return set;
	};
	
	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function (comp) {
	    return comp.map(function (c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}
	
	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}
	
	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}
	
	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}
	
	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	
	    debug('tilde return', ret);
	    return ret;
	  });
	}
	
	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}
	
	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
	      if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
	    }
	
	    debug('caret return', ret);
	    return ret;
	  });
	}
	
	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function (comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}
	
	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;
	
	    if (gtlt === '=' && anyX) gtlt = '';
	
	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm) m = 0;
	      if (xp) p = 0;
	
	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) M = +M + 1;else m = +m + 1;
	      }
	
	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }
	
	    debug('xRange return', ret);
	
	    return ret;
	  });
	}
	
	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}
	
	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
	
	  if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;
	
	  if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;
	
	  return (from + ' ' + to).trim();
	}
	
	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function (version) {
	  if (!version) return false;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version)) return true;
	  }
	  return false;
	};
	
	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) return false;
	  }
	
	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY) continue;
	
	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
	      }
	    }
	
	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }
	
	  return true;
	}
	
	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}
	
	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}
	
	exports.minSatisfying = minSatisfying;
	function minSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return compare(a, b, loose);
	  })[0] || null;
	}
	
	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}
	
	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}
	
	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}
	
	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);
	
	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }
	
	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }
	
	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.
	
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];
	
	    var high = null;
	    var low = null;
	
	    comparators.forEach(function (comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0');
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });
	
	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }
	
	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	exports.prerelease = prerelease;
	function prerelease(version, loose) {
	  var parsed = parse(version, loose);
	  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)))

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout.call(null, timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout.call(null, drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(79);
	
	var _state = __webpack_require__(85);
	
	var _compiler = __webpack_require__(90);
	
	var _events = __webpack_require__(93);
	
	var _register = __webpack_require__(94);
	
	/**
	 * ViewModel constructor
	 *
	 * @param {string} type
	 * @param {object} options    component options
	 * @param {object} parentVm   which contains _app
	 * @param {object} parentEl   root element or frag block
	 * @param {object} mergedData external data
	 * @param {object} externalEvents external events
	 */
	function Vm(type, options, parentVm, parentEl, mergedData, externalEvents) {
	  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
	  this._app = parentVm._app;
	  parentVm._childrenVms && parentVm._childrenVms.push(this);
	
	  if (!options) {
	    options = this._app.customComponentMap[type] || {};
	  }
	  var data = options.data || {};
	
	  this._options = options;
	  this._methods = options.methods || {};
	  this._computed = options.computed || {};
	  this._css = options.style || {};
	  this._ids = {};
	  this._vmEvents = {};
	  this._childrenVms = [];
	  this._type = type;
	
	  // bind events and lifecycles
	  (0, _events.initEvents)(this, externalEvents);
	
	  console.debug('[JS Framework] "init" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:init');
	  this._inited = true;
	
	  // proxy data and methods
	  // observe data and add this to vms
	  this._data = typeof data === 'function' ? data() : data;
	  if (mergedData) {
	    (0, _util.extend)(this._data, mergedData);
	  }
	  (0, _state.initState)(this);
	
	  console.debug('[JS Framework] "created" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:created');
	  this._created = true;
	
	  // backward old ready entry
	  if (options.methods && options.methods.ready) {
	    console.warn('"exports.methods.ready" is deprecated, ' + 'please use "exports.created" instead');
	    options.methods.ready.call(this);
	  }
	
	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  (0, _compiler.build)(this);
	} /**
	   * @fileOverview
	   * ViewModel Constructor & definition
	   */
	
	(0, _events.mixinEvents)(Vm.prototype);
	
	(0, _util.extend)(Vm, {
	  registerModules: _register.registerModules,
	  registerMethods: _register.registerMethods
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.initData = initData;
	exports.initComputed = initComputed;
	exports.initMethods = initMethods;
	
	var _watcher = __webpack_require__(86);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(87);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(88);
	
	var _util = __webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	function initState(vm) {
	  vm._watchers = [];
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	}
	
	function initData(vm) {
	  var data = vm._data;
	
	  if (!(0, _util.isPlainObject)(data)) {
	    data = {};
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    (0, _observer.proxy)(vm, keys[i]);
	  }
	  // observe data
	  (0, _observer.observe)(data, vm);
	}
	
	function noop() {}
	
	function initComputed(vm) {
	  var computed = vm._computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      var def = {
	        enumerable: true,
	        configurable: true
	      };
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, vm);
	        def.set = noop;
	      } else {
	        def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : (0, _util.bind)(userDef.get, vm) : noop;
	        def.set = userDef.set ? (0, _util.bind)(userDef.set, vm) : noop;
	      }
	      Object.defineProperty(vm, key, def);
	    }
	  }
	}
	
	function makeComputedGetter(getter, owner) {
	  var watcher = new _watcher2.default(owner, getter, null, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (_dep2.default.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}
	
	function initMethods(vm) {
	  var methods = vm._methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key];
	    }
	  }
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(87);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	var uid = 0;
	// import { pushWatcher } from './batcher'
	
	var prevTarget = void 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    (0, _util.extend)(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _util._Set();
	  this.newDepIds = new _util._Set();
	  // parse expression for getter
	  if (isFn) {
	    this.getter = expOrFn;
	  } else {
	    this.getter = (0, _util.parsePath)(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && (0, _util.warn)('Failed watching path: ' + expOrFn + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
	    }
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  prevTarget = _dep2.default.target;
	  _dep2.default.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  _dep2.default.target = prevTarget;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else {
	    this.run();
	  }
	  // } else if (this.sync) {
	  //   this.run()
	  // } else {
	  //   // if queued, only overwrite shallow with non-shallow,
	  //   // but not the other way around.
	  //   this.shallow = this.queued
	  //     ? shallow
	  //       ? this.shallow
	  //       : false
	  //     : !!shallow
	  //   this.queued = true
	  //   pushWatcher(this)
	  // }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    ((0, _util.isObject)(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      this.cb.call(this.vm, value, oldValue);
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = _dep2.default.target;
	  this.value = this.get();
	  this.dirty = false;
	  _dep2.default.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      (0, _util.remove)(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 * @param {Set} seen
	 */
	
	var seenObjects = new _util._Set();
	function traverse(val, seen) {
	  var i = void 0,
	      keys = void 0,
	      isA = void 0,
	      isO = void 0;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  isA = Array.isArray(val);
	  isO = (0, _util.isObject)(val);
	  if (isA || isO) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) {
	        traverse(val[i], seen);
	      }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) {
	        traverse(val[keys[i]], seen);
	      }
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	
	var _util = __webpack_require__(79);
	
	var uid = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  (0, _util.remove)(this.subs, sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Observer = Observer;
	exports.observe = observe;
	exports.defineReactive = defineReactive;
	exports.set = set;
	exports.del = del;
	exports.proxy = proxy;
	exports.unproxy = unproxy;
	
	var _dep = __webpack_require__(87);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(89);
	
	var _util = __webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arrayKeys = Object.getOwnPropertyNames(_array.arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new _dep2.default();
	  (0, _util.def)(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = _util.hasProto ? protoAugment : copyAugment;
	    augment(value, _array.arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  for (var key in obj) {
	    this.convert(key, obj[key]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  (0, _util.remove)(this.vms, vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    (0, _util.def)(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!(0, _util.isObject)(value)) {
	    return;
	  }
	  var ob = void 0;
	  if ((0, _util.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((Array.isArray(value) || (0, _util.isPlainObject)(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new _dep2.default();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (_dep2.default.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	function set(obj, key, val) {
	  if (Array.isArray(obj)) {
	    return obj.splice(key, 1, val);
	  }
	  if ((0, _util.hasOwn)(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      proxy(vm, key);
	      vm.$forceUpdate();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!(0, _util.hasOwn)(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj.$forceUpdate();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      unproxy(vm, key);
	      vm.$forceUpdate();
	    }
	  }
	}
	
	var KEY_WORDS = ['$index', '$value', '$event'];
	function proxy(vm, key) {
	  if (KEY_WORDS.indexOf(key) > -1 || !(0, _util.isReserved)(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter() {
	        return vm._data[key];
	      },
	      set: function proxySetter(val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	function unproxy(vm, key) {
	  if (!(0, _util.isReserved)(key)) {
	    delete vm[key];
	  }
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(79);
	
	var arrayProto = Array.prototype; /* eslint-disable */
	
	var arrayMethods = exports.arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  (0, _util.def)(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted = void 0;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	(0, _util.def)(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	(0, _util.def)(arrayProto, '$remove', function $remove(index) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  if (typeof index !== 'number') {
	    index = this.indexOf(index);
	  }
	  if (index > -1) {
	    this.splice(index, 1);
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                                                   * ViewModel template parser & data-binding process
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * required:
	                                                                                                                                                                                                                                                   * index.js: Vm
	                                                                                                                                                                                                                                                   * dom-helper.js: createElement, createBlock
	                                                                                                                                                                                                                                                   * dom-helper.js: attachTarget, moveTarget, removeTarget
	                                                                                                                                                                                                                                                   * directive.js: bindElement, bindSubVm, setId, watch
	                                                                                                                                                                                                                                                   * events.js: $on
	                                                                                                                                                                                                                                                   */
	
	exports.build = build;
	
	var _util = __webpack_require__(79);
	
	var _state = __webpack_require__(85);
	
	var _directive = __webpack_require__(91);
	
	var _domHelper = __webpack_require__(92);
	
	/**
	 * build(externalDirs)
	 *   createVm()
	 *   merge(externalDirs, dirs)
	 *   compile(template, parentNode)
	 *     if (type is content) create contentNode
	 *     else if (dirs have v-for) foreach -> create context
	 *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
	 *     else if (dirs have v-if) assert
	 *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
	 *     else if (type is dynamic)
	 *       -> compile(templateWithoutDynamicType, parentNode): watch(type) onchange
	 *     else if (type is custom)
	 *       addChildVm(vm, parentVm)
	 *       build(externalDirs)
	 *       foreach childNodes -> compile(childNode, template)
	 *     else if (type is native)
	 *       set(dirs): update(id/attr/style/class) onchange
	 *       append(template, parentNode)
	 *       foreach childNodes -> compile(childNode, template)
	 */
	function build(vm) {
	  var opt = vm._options || {};
	  var template = opt.template || {};
	
	  if (opt.replace) {
	    if (template.children && template.children.length === 1) {
	      compile(vm, template.children[0], vm._parentEl);
	    } else {
	      compile(vm, template.children, vm._parentEl);
	    }
	  } else {
	    compile(vm, template, vm._parentEl);
	  }
	
	  console.debug('[JS Framework] "ready" lifecycle in Vm(' + vm._type + ')');
	  vm.$emit('hook:ready');
	  vm._ready = true;
	}
	
	/**
	 * Generate elements by child or children and append to parent elements.
	 * Root element info would be merged if has. The first argument may be an array
	 * if the root element with options.replace has not only one child.
	 *
	 * @param {object|array} target
	 * @param {object}       dest
	 * @param {object}       meta
	 */
	function compile(vm, target, dest, meta) {
	  var app = vm._app || {};
	
	  if (app.lastSignal === -1) {
	    return;
	  }
	
	  if (targetIsFragment(target)) {
	    compileFragment(vm, target, dest, meta);
	    return;
	  }
	  meta = meta || {};
	  if (targetIsContent(target)) {
	    console.debug('[JS Framework] compile "content" block by', target);
	    vm._content = (0, _domHelper.createBlock)(vm, dest);
	    return;
	  }
	
	  if (targetNeedCheckRepeat(target, meta)) {
	    console.debug('[JS Framework] compile "repeat" logic by', target);
	    compileRepeat(vm, target, dest);
	    return;
	  }
	  if (targetNeedCheckShown(target, meta)) {
	    console.debug('[JS Framework] compile "if" logic by', target);
	    compileShown(vm, target, dest, meta);
	    return;
	  }
	  var typeGetter = meta.type || target.type;
	  if (targetNeedCheckType(typeGetter, meta)) {
	    compileType(vm, target, dest, typeGetter, meta);
	    return;
	  }
	  var type = typeGetter;
	  var component = targetIsComposed(vm, target, type);
	  if (component) {
	    console.debug('[JS Framework] compile composed component by', target);
	    compileCustomComponent(vm, component, target, dest, type, meta);
	    return;
	  }
	  console.debug('[JS Framework] compile native component by', target);
	  compileNativeComponent(vm, target, dest, type);
	}
	
	/**
	 * Check if target is a fragment (an array).
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsFragment(target) {
	  return Array.isArray(target);
	}
	
	/**
	 * Check if target type is content/slot.
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsContent(target) {
	  return target.type === 'content' || target.type === 'slot';
	}
	
	/**
	 * Check if target need to compile by a list.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckRepeat(target, meta) {
	  return !meta.hasOwnProperty('repeat') && target.repeat;
	}
	
	/**
	 * Check if target need to compile by a boolean value.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckShown(target, meta) {
	  return !meta.hasOwnProperty('shown') && target.shown;
	}
	
	/**
	 * Check if target need to compile by a dynamic type.
	 *
	 * @param  {string|function} typeGetter
	 * @param  {object}          meta
	 * @return {boolean}
	 */
	function targetNeedCheckType(typeGetter, meta) {
	  return typeof typeGetter === 'function' && !meta.hasOwnProperty('type');
	}
	
	/**
	 * Check if this kind of component is composed.
	 *
	 * @param  {string}  type
	 * @return {boolean}
	 */
	function targetIsComposed(vm, target, type) {
	  var component = void 0;
	  if (vm._app && vm._app.customComponentMap) {
	    component = vm._app.customComponentMap[type];
	  }
	  if (vm._options && vm._options.components) {
	    component = vm._options.components[type];
	  }
	  if (target.component) {
	    component = component || {};
	  }
	  return component;
	}
	
	/**
	 * Compile a list of targets.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileFragment(vm, target, dest, meta) {
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  target.forEach(function (child) {
	    compile(vm, child, fragBlock, meta);
	  });
	}
	
	/**
	 * Compile a target with repeat directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 */
	function compileRepeat(vm, target, dest) {
	  var repeat = target.repeat;
	  var oldStyle = typeof repeat === 'function';
	  var getter = repeat.getter || repeat.expression || repeat;
	  if (typeof getter !== 'function') {
	    getter = function getter() {
	      return [];
	    };
	  }
	  var key = repeat.key || '$index';
	  var value = repeat.value || '$value';
	  var trackBy = repeat.trackBy || target.trackBy || target.attr && target.attr.trackBy;
	
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  fragBlock.children = [];
	  fragBlock.data = [];
	  fragBlock.vms = [];
	
	  bindRepeat(vm, target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
	}
	
	/**
	 * Compile a target with if directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileShown(vm, target, dest, meta) {
	  var newMeta = { shown: true };
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  if (meta.repeat) {
	    newMeta.repeat = meta.repeat;
	  }
	
	  bindShown(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a target with dynamic component type.
	 *
	 * @param {object}   target
	 * @param {object}   dest
	 * @param {function} typeGetter
	 */
	function compileType(vm, target, dest, typeGetter, meta) {
	  var type = typeGetter.call(vm);
	  var newMeta = (0, _util.extend)({ type: type }, meta);
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  (0, _directive.watch)(vm, typeGetter, function (value) {
	    var newMeta = (0, _util.extend)({ type: value }, meta);
	    (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    compile(vm, target, fragBlock, newMeta);
	  });
	
	  compile(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a composed component.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileCustomComponent(vm, component, target, dest, type, meta) {
	  var Ctor = vm.constructor;
	  var subVm = new Ctor(type, component, vm, dest, undefined, {
	    'hook:init': function hookInit() {
	      (0, _directive.setId)(vm, null, target.id, this);
	      // bind template earlier because of lifecycle issues
	      this._externalBinding = {
	        parent: vm,
	        template: target
	      };
	    },
	    'hook:created': function hookCreated() {
	      (0, _directive.bindSubVm)(vm, this, target, meta.repeat);
	    },
	    'hook:ready': function hookReady() {
	      if (this._content) {
	        compileChildren(vm, target, this._content);
	      }
	    }
	  });
	  (0, _directive.bindSubVmAfterInitialized)(vm, subVm, target);
	}
	
	/**
	 * Generate element from template and attach to the dest if needed.
	 * The time to attach depends on whether the mode status is node or tree.
	 *
	 * @param {object} template
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileNativeComponent(vm, template, dest, type) {
	  (0, _directive.applyNaitveComponentOptions)(template);
	
	  var element = void 0;
	  if (dest.ref === '_documentElement') {
	    // if its parent is documentElement then it's a body
	    console.debug('[JS Framework] compile to create body for ' + type);
	    element = (0, _domHelper.createBody)(vm, type);
	  } else {
	    console.debug('[JS Framework] compile to create element for ' + type);
	    element = (0, _domHelper.createElement)(vm, type);
	  }
	
	  if (!vm._rootEl) {
	    vm._rootEl = element;
	    // bind event earlier because of lifecycle issues
	    var binding = vm._externalBinding || {};
	    var target = binding.template;
	    var parentVm = binding.parent;
	    if (target && target.events && parentVm && element) {
	      for (var _type in target.events) {
	        var handler = parentVm[target.events[_type]];
	        if (handler) {
	          element.addEvent(_type, (0, _util.bind)(handler, parentVm));
	        }
	      }
	    }
	  }
	
	  (0, _directive.bindElement)(vm, element, template);
	
	  if (template.attr && template.attr.append) {
	    // backward, append prop in attr
	    template.append = template.attr.append;
	  }
	
	  if (template.append) {
	    // give the append attribute for ios adaptation
	    element.attr = element.attr || {};
	    element.attr.append = template.append;
	  }
	
	  var treeMode = template.append === 'tree';
	  var app = vm._app || {};
	  if (app.lastSignal !== -1 && !treeMode) {
	    console.debug('[JS Framework] compile to append single node for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	  if (app.lastSignal !== -1) {
	    compileChildren(vm, template, element);
	  }
	  if (app.lastSignal !== -1 && treeMode) {
	    console.debug('[JS Framework] compile to append whole tree for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	}
	
	/**
	 * Set all children to a certain parent element.
	 *
	 * @param {object} template
	 * @param {object} dest
	 */
	function compileChildren(vm, template, dest) {
	  var app = vm._app || {};
	  var children = template.children;
	  if (children && children.length) {
	    children.every(function (child) {
	      compile(vm, child, dest);
	      return app.lastSignal !== -1;
	    });
	  }
	}
	
	/**
	 * Watch the list update and refresh the changes.
	 *
	 * @param {object} target
	 * @param {object} fragBlock {vms, data, children}
	 * @param {object} info      {getter, key, value, trackBy, oldStyle}
	 */
	function bindRepeat(vm, target, fragBlock, info) {
	  var vms = fragBlock.vms;
	  var children = fragBlock.children;
	  var getter = info.getter;
	  var trackBy = info.trackBy;
	  var oldStyle = info.oldStyle;
	
	  var keyName = info.key;
	  var valueName = info.value;
	
	  function compileItem(item, index, context) {
	    var mergedData = void 0;
	    if (oldStyle) {
	      mergedData = item;
	      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
	        mergedData[keyName] = index;
	        if (!mergedData.hasOwnProperty('INDEX')) {
	          Object.defineProperty(mergedData, 'INDEX', {
	            value: function value() {
	              console.warn('[JS Framework] "INDEX" in repeat is deprecated, ' + 'please use "$index" instead');
	            }
	          });
	        }
	      }
	    } else {
	      mergedData = {};
	      mergedData[keyName] = index;
	      mergedData[valueName] = item;
	    }
	    var newContext = mergeContext(context, mergedData);
	    vms.push(newContext);
	    compile(newContext, target, fragBlock, { repeat: item });
	  }
	
	  var list = watchBlock(vm, fragBlock, getter, 'repeat', function (data) {
	    console.debug('[JS Framework] the "repeat" item has changed', data);
	    if (!fragBlock) {
	      return;
	    }
	
	    var oldChildren = children.slice();
	    var oldVms = vms.slice();
	    var oldData = fragBlock.data.slice();
	    // 1. collect all new refs track by
	    var trackMap = {};
	    var reusedMap = {};
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      /* istanbul ignore if */
	      if (key == null || key === '') {
	        return;
	      }
	      trackMap[key] = item;
	    });
	
	    // 2. remove unused element foreach old item
	    var reusedList = [];
	    oldData.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      if (trackMap.hasOwnProperty(key)) {
	        reusedMap[key] = {
	          item: item, index: index, key: key,
	          target: oldChildren[index],
	          vm: oldVms[index]
	        };
	        reusedList.push(item);
	      } else {
	        (0, _domHelper.removeTarget)(vm, oldChildren[index]);
	      }
	    });
	
	    // 3. create new element foreach new item
	    children.length = 0;
	    vms.length = 0;
	    fragBlock.data = data.slice();
	    fragBlock.updateMark = fragBlock.start;
	
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      var reused = reusedMap[key];
	      if (reused) {
	        if (reused.item === reusedList[0]) {
	          reusedList.shift();
	        } else {
	          reusedList.$remove(reused.item);
	          (0, _domHelper.moveTarget)(vm, reused.target, fragBlock.updateMark, true);
	        }
	        children.push(reused.target);
	        vms.push(reused.vm);
	        if (oldStyle) {
	          reused.vm = item;
	        } else {
	          reused.vm[valueName] = item;
	        }
	        reused.vm[keyName] = index;
	        fragBlock.updateMark = reused.target;
	      } else {
	        compileItem(item, index, vm);
	      }
	    });
	
	    delete fragBlock.updateMark;
	  });
	
	  fragBlock.data = list.slice(0);
	  list.forEach(function (item, index) {
	    compileItem(item, index, vm);
	  });
	}
	
	/**
	 * Watch the display update and add/remove the element.
	 *
	 * @param  {object} target
	 * @param  {object} fragBlock
	 * @param  {object} context
	 */
	function bindShown(vm, target, fragBlock, meta) {
	  var display = watchBlock(vm, fragBlock, target.shown, 'shown', function (display) {
	    console.debug('[JS Framework] the "if" item was changed', display);
	
	    if (!fragBlock || !!fragBlock.display === !!display) {
	      return;
	    }
	    fragBlock.display = !!display;
	    if (display) {
	      compile(vm, target, fragBlock, meta);
	    } else {
	      (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    }
	  });
	
	  fragBlock.display = !!display;
	  if (display) {
	    compile(vm, target, fragBlock, meta);
	  }
	}
	
	/**
	 * Watch calc value changes and append certain type action to differ.
	 * It is used for if or repeat data-binding generator.
	 *
	 * @param  {object}   fragBlock
	 * @param  {function} calc
	 * @param  {string}   type
	 * @param  {function} handler
	 * @return {any}      init value of calc
	 */
	function watchBlock(vm, fragBlock, calc, type, handler) {
	  var differ = vm && vm._app && vm._app.differ;
	  var config = {};
	  var depth = (fragBlock.element.depth || 0) + 1;
	
	  return (0, _directive.watch)(vm, calc, function (value) {
	    config.latestValue = value;
	    if (differ && !config.recorded) {
	      differ.append(type, depth, fragBlock.blockId, function () {
	        var latestValue = config.latestValue;
	        handler(latestValue);
	        config.recorded = false;
	        config.latestValue = undefined;
	      });
	    }
	    config.recorded = true;
	  });
	}
	
	/**
	 * Clone a context and merge certain data.
	 *
	 * @param  {object} mergedData
	 * @return {object}
	 */
	function mergeContext(context, mergedData) {
	  var newContext = Object.create(context);
	  newContext._data = mergedData;
	  (0, _state.initData)(newContext);
	  (0, _state.initComputed)(newContext);
	  newContext._realParent = context;
	  return newContext;
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                                                   * Directive Parser
	                                                                                                                                                                                                                                                   */
	
	exports.applyNaitveComponentOptions = applyNaitveComponentOptions;
	exports.bindElement = bindElement;
	exports.bindSubVm = bindSubVm;
	exports.bindSubVmAfterInitialized = bindSubVmAfterInitialized;
	exports.setId = setId;
	exports.watch = watch;
	
	var _util = __webpack_require__(79);
	
	var _watcher = __webpack_require__(86);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(77);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	
	var SETTERS = {
	  attr: 'setAttr',
	  style: 'setStyle',
	  event: 'addEvent'
	};
	
	/**
	 * apply the native component's options(specified by template.type)
	 * to the template
	 */
	function applyNaitveComponentOptions(template) {
	  var type = template.type;
	
	  var options = nativeComponentMap[type];
	
	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    for (var key in options) {
	      if (template[key] == null) {
	        template[key] = options[key];
	      } else if ((0, _util.typof)(template[key]) === 'object' && (0, _util.typof)(options[key]) === 'object') {
	        for (var subkey in options[key]) {
	          if (template[key][subkey] == null) {
	            template[key][subkey] = options[key][subkey];
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * bind all id, attr, classnames, style, events to an element
	 */
	function bindElement(vm, el, template) {
	  setId(vm, el, template.id, vm);
	  setAttr(vm, el, template.attr);
	  setClass(vm, el, template.classList);
	  setStyle(vm, el, template.style);
	  bindEvents(vm, el, template.events);
	}
	
	/**
	 * bind all props to sub vm and bind all style, events to the root element
	 * of the sub vm if it doesn't have a replaced multi-node fragment
	 */
	function bindSubVm(vm, subVm, template, repeatItem) {
	  subVm = subVm || {};
	  template = template || {};
	
	  var options = subVm._options || {};
	
	  // bind props
	  var props = options.props;
	
	  if (Array.isArray(props)) {
	    props = props.reduce(function (result, value) {
	      result[value] = true;
	      return result;
	    }, {});
	  }
	
	  mergeProps(repeatItem, props, vm, subVm);
	  mergeProps(template.attr, props, vm, subVm);
	}
	
	function bindSubVmAfterInitialized(vm, subVm, template) {
	  mergeClassStyle(template.classList, vm, subVm);
	  mergeStyle(template.style, vm, subVm);
	}
	
	function mergeProps(target, props, vm, subVm) {
	  if (!target) {
	    return;
	  }
	
	  var _loop = function _loop(key) {
	    if (!props || props[key]) {
	      var value = target[key];
	      if (typeof value === 'function') {
	        var returnValue = watch(vm, value, function (v) {
	          subVm[key] = v;
	        });
	        subVm[key] = returnValue;
	      } else {
	        subVm[key] = value;
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop(key);
	  }
	}
	
	function mergeStyle(target, vm, subVm) {
	  var _loop2 = function _loop2(key) {
	    var value = target[key];
	    if (typeof value === 'function') {
	      var returnValue = watch(vm, value, function (v) {
	        if (subVm._rootEl) {
	          subVm._rootEl.setStyle(key, v);
	        }
	      });
	      subVm._rootEl.setStyle(key, returnValue);
	    } else {
	      if (subVm._rootEl) {
	        subVm._rootEl.setStyle(key, value);
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop2(key);
	  }
	}
	
	function mergeClassStyle(target, vm, subVm) {
	  var css = vm._options && vm._options.style || {};
	
	  /* istanbul ignore if */
	  if (!subVm._rootEl) {
	    return;
	  }
	
	  if (typeof target === 'function') {
	    var _value = watch(vm, target, function (v) {
	      setClassStyle(subVm._rootEl, css, v);
	    });
	    setClassStyle(subVm._rootEl, css, _value);
	  } else if (target != null) {
	    setClassStyle(subVm._rootEl, css, target);
	  }
	}
	
	/**
	 * bind id to an element
	 * each id is unique in a whole vm
	 */
	function setId(vm, el, id, target) {
	  var map = Object.create(null);
	
	  Object.defineProperties(map, {
	    vm: {
	      value: target,
	      writable: false,
	      configurable: false
	    },
	    el: {
	      get: function get() {
	        return el || target._rootEl;
	      },
	      configurable: false
	    }
	  });
	
	  if (typeof id === 'function') {
	    var handler = id;
	    id = handler.call(vm);
	    if (id) {
	      vm._ids[id] = map;
	    }
	    watch(vm, handler, function (newId) {
	      if (newId) {
	        vm._ids[newId] = map;
	      }
	    });
	  } else if (id && typeof id === 'string') {
	    vm._ids[id] = map;
	  }
	}
	
	/**
	 * bind attr to an element
	 */
	function setAttr(vm, el, attr) {
	  bindDir(vm, el, 'attr', attr);
	}
	
	function setClassStyle(el, css, classList) {
	  var classStyle = {};
	  var length = classList.length;
	
	  for (var i = 0; i < length; i++) {
	    var style = css[classList[i]];
	    if (style) {
	      for (var key in style) {
	        classStyle[key] = style[key];
	      }
	    }
	  }
	  el.setClassStyle(classStyle);
	}
	
	/**
	 * bind classnames to an element
	 */
	function setClass(vm, el, classList) {
	  if (typeof classList !== 'function' && !Array.isArray(classList)) {
	    return;
	  }
	  if (Array.isArray(classList) && !classList.length) {
	    el.setClassStyle({});
	    return;
	  }
	
	  var style = vm._options && vm._options.style || {};
	  if (typeof classList === 'function') {
	    var _value2 = watch(vm, classList, function (v) {
	      setClassStyle(el, style, v);
	    });
	    setClassStyle(el, style, _value2);
	  } else {
	    setClassStyle(el, style, classList);
	  }
	}
	
	/**
	 * bind style to an element
	 */
	function setStyle(vm, el, style) {
	  bindDir(vm, el, 'style', style);
	}
	
	/**
	 * add an event type and handler to an element and generate a dom update
	 */
	function setEvent(vm, el, type, handler) {
	  el.addEvent(type, (0, _util.bind)(handler, vm));
	}
	
	/**
	 * add all events of an element
	 */
	function bindEvents(vm, el, events) {
	  if (!events) {
	    return;
	  }
	  var keys = Object.keys(events);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var handler = events[key];
	    if (typeof handler === 'string') {
	      handler = vm[handler];
	      /* istanbul ignore if */
	      if (!handler) {
	        console.debug('[JS Framework] The method "' + handler + '" is not defined.');
	      }
	    }
	    setEvent(vm, el, key, handler);
	  }
	}
	
	/**
	 * set a series of members as a kind of an element
	 * for example: style, attr, ...
	 * if the value is a function then bind the data changes
	 */
	function bindDir(vm, el, name, data) {
	  if (!data) {
	    return;
	  }
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var _value3 = data[key];
	    if (typeof _value3 === 'function') {
	      bindKey(vm, el, name, key, _value3);
	    } else {
	      el[SETTERS[name]](key, _value3);
	    }
	  }
	}
	
	/**
	 * bind data changes to a certain key to a name series in an element
	 */
	function bindKey(vm, el, name, key, calc) {
	  var methodName = SETTERS[name];
	  // watch the calc, and returns a value by calc.call()
	  var value = watch(vm, calc, function (value) {
	    function handler() {
	      el[methodName](key, value);
	    }
	    var differ = vm && vm._app && vm._app.differ;
	    if (differ) {
	      differ.append('element', el.depth, el.ref, handler);
	    } else {
	      handler();
	    }
	  });
	
	  el[methodName](key, value);
	}
	
	/**
	 * watch a calc function and callback if the calc value changes
	 */
	function watch(vm, calc, callback) {
	  var watcher = new _watcher2.default(vm, calc, function (value, oldValue) {
	    /* istanbul ignore if */
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && value === oldValue) {
	      return;
	    }
	    callback(value);
	  });
	
	  return watcher.value;
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.createBody = createBody;
	exports.createElement = createElement;
	exports.createBlock = createBlock;
	exports.attachTarget = attachTarget;
	exports.moveTarget = moveTarget;
	exports.removeTarget = removeTarget;
	/**
	 * @fileOverview Document & Element Helpers.
	 *
	 * required:
	 * Document#: createElement, createComment, getRef
	 * Element#: appendChild, insertBefore, removeChild, nextSibling
	 */
	
	/**
	 * Create a body by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createBody(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createBody(type);
	}
	
	/**
	 * Create an element by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createElement(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createElement(type);
	}
	
	/**
	 * Create and return a frag block for an element.
	 * The frag block has a starter, ender and the element itself.
	 *
	 * @param  {object} element
	 */
	function createBlock(vm, element) {
	  var start = createBlockStart(vm);
	  var end = createBlockEnd(vm);
	  var blockId = lastestBlockId++;
	  if (element.element) {
	    var updateMark = element.updateMark;
	    if (updateMark) {
	      if (updateMark.element) {
	        updateMark = updateMark.end;
	      }
	      element.element.insertAfter(end, updateMark);
	      element.element.insertAfter(start, updateMark);
	      element.updateMark = end;
	    } else {
	      element.element.insertBefore(start, element.end);
	      element.element.insertBefore(end, element.end);
	    }
	    element = element.element;
	  } else {
	    element.appendChild(start);
	    element.appendChild(end);
	  }
	  return { start: start, end: end, element: element, blockId: blockId };
	}
	
	var lastestBlockId = 1;
	
	/**
	 * Create and return a block starter.
	 * Using this._app.doc
	 */
	function createBlockStart(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('start');
	  return anchor;
	}
	
	/**
	 * Create and return a block ender.
	 * Using this._app.doc
	 */
	function createBlockEnd(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('end');
	  return anchor;
	}
	
	/**
	 * Attach target to a certain dest using appendChild by default.
	 * If the dest is a frag block then insert before the ender.
	 * If the target is a frag block then attach the starter and ender in order.
	 *
	 * @param  {object} target
	 * @param  {object} dest
	 */
	function attachTarget(vm, target, dest) {
	  if (dest.element) {
	    var before = dest.end;
	    var after = dest.updateMark;
	    // push new target for watch list update later
	    if (dest.children) {
	      dest.children.push(target);
	    }
	    // for check repeat case
	    if (after) {
	      var signal = moveTarget(vm, target, after);
	      dest.updateMark = target.element ? target.end : target;
	      return signal;
	    } else if (target.element) {
	      dest.element.insertBefore(target.start, before);
	      dest.element.insertBefore(target.end, before);
	    } else {
	      return dest.element.insertBefore(target, before);
	    }
	  } else {
	    if (target.element) {
	      dest.appendChild(target.start);
	      dest.appendChild(target.end);
	    } else {
	      return dest.appendChild(target);
	    }
	  }
	}
	
	/**
	 * Move target before a certain element. The target maybe block or element.
	 *
	 * @param  {object} target
	 * @param  {object} before
	 */
	function moveTarget(vm, target, after) {
	  if (target.element) {
	    return moveBlock(target, after);
	  }
	  return moveElement(target, after);
	}
	
	/**
	 * Move element before a certain element.
	 *
	 * @param  {object} element
	 * @param  {object} before
	 */
	function moveElement(element, after) {
	  var parent = after.parentNode;
	  if (parent) {
	    return parent.insertAfter(element, after);
	  }
	}
	
	/**
	 * Move all elements of the block before a certain element.
	 *
	 * @param  {object} fragBlock
	 * @param  {object} before
	 */
	function moveBlock(fragBlock, after) {
	  var parent = after.parentNode;
	
	  if (parent) {
	    var _ret = function () {
	      var el = fragBlock.start;
	      var signal = void 0;
	      var group = [el];
	
	      while (el && el !== fragBlock.end) {
	        el = el.nextSibling;
	        group.push(el);
	      }
	
	      var temp = after;
	      group.every(function (el) {
	        signal = parent.insertAfter(el, temp);
	        temp = el;
	        return signal !== -1;
	      });
	
	      return {
	        v: signal
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	
	/**
	 * Remove target from DOM tree.
	 * If the target is a frag block then call _removeBlock
	 *
	 * @param  {object} target
	 */
	function removeTarget(vm, target) {
	  var preserveBlock = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	  if (target.element) {
	    removeBlock(target, preserveBlock);
	  } else {
	    removeElement(target);
	  }
	}
	
	/**
	 * Remove a certain element.
	 * Using this._app.doc
	 *
	 * @param  {object} target
	 */
	function removeElement(target) {
	  var parent = target.parentNode;
	
	  if (parent) {
	    parent.removeChild(target);
	  }
	}
	
	/**
	 * Remove a frag block.
	 * The second param decides whether the block self should be removed too.
	 *
	 * @param  {object}  fragBlock
	 * @param  {Boolean} preserveBlock=false
	 */
	function removeBlock(fragBlock) {
	  var preserveBlock = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	  var result = [];
	  var el = fragBlock.start.nextSibling;
	
	  while (el && el !== fragBlock.end) {
	    result.push(el);
	    el = el.nextSibling;
	  }
	
	  if (!preserveBlock) {
	    removeElement(fragBlock.start);
	  }
	  result.forEach(function (el) {
	    removeElement(el);
	  });
	  if (!preserveBlock) {
	    removeElement(fragBlock.end);
	  }
	}

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$emit = $emit;
	exports.$dispatch = $dispatch;
	exports.$broadcast = $broadcast;
	exports.$on = $on;
	exports.$off = $off;
	exports.initEvents = initEvents;
	exports.mixinEvents = mixinEvents;
	function Evt(type, detail) {
	  if (detail instanceof Evt) {
	    return detail;
	  }
	
	  this.timestamp = Date.now();
	  this.detail = detail;
	  this.type = type;
	
	  var shouldStop = false;
	  this.stop = function () {
	    shouldStop = true;
	  };
	  this.hasStopped = function () {
	    return shouldStop;
	  };
	}
	
	function $emit(type, detail) {
	  var _this = this;
	
	  var events = this._vmEvents;
	  var handlerList = events[type];
	  if (handlerList) {
	    (function () {
	      var evt = new Evt(type, detail);
	      handlerList.forEach(function (handler) {
	        handler.call(_this, evt);
	      });
	    })();
	  }
	}
	
	function $dispatch(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
	    this._parent.$dispatch(type, evt);
	  }
	}
	
	function $broadcast(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._childrenVms) {
	    this._childrenVms.forEach(function (subVm) {
	      subVm.$broadcast(type, evt);
	    });
	  }
	}
	
	function $on(type, handler) {
	  if (!type || typeof handler !== 'function') {
	    return;
	  }
	  var events = this._vmEvents;
	  var handlerList = events[type] || [];
	  handlerList.push(handler);
	  events[type] = handlerList;
	
	  // fixed old version lifecycle design
	  if (type === 'hook:ready' && this._ready) {
	    this.$emit('hook:ready');
	  }
	}
	
	function $off(type, handler) {
	  if (!type) {
	    return;
	  }
	  var events = this._vmEvents;
	  if (!handler) {
	    delete events[type];
	    return;
	  }
	  var handlerList = events[type];
	  if (!handlerList) {
	    return;
	  }
	  handlerList.$remove(handler);
	}
	
	var LIFE_CYCLE_TYPES = ['init', 'created', 'ready'];
	
	function initEvents(vm, externalEvents) {
	  var options = vm._options || {};
	  var events = options.events || {};
	  for (var type1 in events) {
	    vm.$on(type1, events[type1]);
	  }
	  for (var type2 in externalEvents) {
	    vm.$on(type2, externalEvents[type2]);
	  }
	  LIFE_CYCLE_TYPES.forEach(function (type) {
	    vm.$on('hook:' + type, options[type]);
	  });
	}
	
	function mixinEvents(vm) {
	  vm.$emit = $emit;
	  vm.$dispatch = $dispatch;
	  vm.$broadcast = $broadcast;
	  vm.$on = $on;
	  vm.$off = $off;
	}

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearModules = clearModules;
	exports.getModule = getModule;
	exports.requireModule = requireModule;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.requireComponent = requireComponent;
	exports.registerComponent = registerComponent;
	var nativeModules = {};
	
	function assignModules(modules, ifReplace) {
	  var _loop = function _loop(moduleName) {
	    // init `modules[moduleName][]`
	    var methods = nativeModules[moduleName];
	    if (!methods) {
	      methods = {};
	      nativeModules[moduleName] = methods;
	    }
	
	    // push each non-existed new method
	    modules[moduleName].forEach(function (method) {
	      if (typeof method === 'string') {
	        method = {
	          name: method
	        };
	      }
	
	      if (!methods[method.name] || ifReplace) {
	        methods[method.name] = method;
	      }
	    });
	  };
	
	  for (var moduleName in modules) {
	    _loop(moduleName);
	  }
	}
	
	function assignApis(Ctor, apis) {
	  var p = Ctor.prototype;
	
	  for (var apiName in apis) {
	    if (!p.hasOwnProperty(apiName)) {
	      p[apiName] = apis[apiName];
	    }
	  }
	}
	
	function clearModules() {
	  nativeModules = {};
	}
	
	function getModule(moduleName) {
	  return nativeModules[moduleName];
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function requireModule(moduleName) {
	  var _this = this;
	
	  var methods = nativeModules[moduleName];
	  var target = {};
	
	  var _loop2 = function _loop2(methodName) {
	    target[methodName] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _this.callTasks({
	        module: moduleName,
	        method: methodName,
	        args: args
	      });
	    };
	  };
	
	  for (var methodName in methods) {
	    _loop2(methodName);
	  }
	
	  return target;
	}
	
	/**
	 * @context Vm
	 */
	function registerModules(modules, ifReplace) {
	  assignModules(modules, ifReplace);
	}
	
	/**
	 * @context Vm
	 */
	function registerMethods(apis) {
	  assignApis(this, apis);
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function requireComponent(name) {
	  var customComponentMap = this.customComponentMap;
	
	  return customComponentMap[name];
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function registerComponent(name, def) {
	  var customComponentMap = this.customComponentMap;
	
	
	  if (customComponentMap[name]) {
	    console.error('[JS Framework] define a component(' + name + ') that already exists');
	    return;
	  }
	
	  customComponentMap[name] = def;
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(82);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * [normalizeVersion description]
	 * @param  {String} Version. ie: 1, 1.0, 1.0.0
	 * @return {String} Version
	 */
	function normalizeVersion(v) {
	  var isValid = _semver2.default.valid(v);
	  if (isValid) {
	    return v;
	  }
	
	  v = typeof v === 'string' ? v : '';
	  var split = v.split('.');
	  var i = 0;
	  var result = [];
	
	  while (i < 3) {
	    var s = typeof split[i] === 'string' && split[i] ? split[i] : '0';
	    result.push(s);
	    i++;
	  }
	
	  return result.join('.');
	}
	
	function getError(key, val, criteria) {
	  var result = {
	    isDowngrade: true,
	    errorType: 1,
	    code: 1000
	  };
	  var getMsg = function getMsg(key, val, criteria) {
	    return 'Downgrade[' + key + '] :: deviceInfo ' + val + ' matched criteria ' + criteria;
	  };
	  var _key = key.toLowerCase();
	
	  result.errorMessage = getMsg(key, val, criteria);
	
	  if (_key.indexOf('osversion') >= 0) {
	    result.code = 1001;
	  } else if (_key.indexOf('appversion') >= 0) {
	    result.code = 1002;
	  } else if (_key.indexOf('weexversion') >= 0) {
	    result.code = 1003;
	  } else if (_key.indexOf('devicemodel') >= 0) {
	    result.code = 1004;
	  }
	
	  return result;
	}
	
	/**
	 * WEEX framework input(deviceInfo)
	 * {
	 *   platform: 'iOS' or 'android'
	 *   osVersion: '1.0.0' or '1.0' or '1'
	 *   appVersion: '1.0.0' or '1.0' or '1'
	 *   weexVersion: '1.0.0' or '1.0' or '1'
	 *   dDeviceModel: 'MODEL_NAME'
	 * }
	 *
	 * downgrade config(config)
	 * {
	 *   ios: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   },
	 *   android: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   }
	 * }
	 *
	 *
	 * @param  {object} deviceInfo Weex SDK framework input
	 * @param  {object} config     user input
	 * @return {Object}            { isDowngrade: true/false, errorMessage... }
	 */
	function check(config, deviceInfo) {
	  deviceInfo = deviceInfo || global.WXEnvironment;
	  deviceInfo = (0, _util.isPlainObject)(deviceInfo) ? deviceInfo : {};
	
	  var result = {
	    isDowngrade: false // defautl is pass
	  };
	
	  if ((0, _util.typof)(config) === 'function') {
	    var customDowngrade = config.call(this, deviceInfo, {
	      semver: _semver2.default,
	      normalizeVersion: this.normalizeVersion
	    });
	
	    customDowngrade = !!customDowngrade;
	
	    result = customDowngrade ? this.getError('custom', '', 'custom params') : result;
	  } else {
	    config = (0, _util.isPlainObject)(config) ? config : {};
	
	    var platform = deviceInfo.platform || 'unknow';
	    var dPlatform = platform.toLowerCase();
	    var cObj = config[dPlatform] || {};
	
	    for (var i in deviceInfo) {
	      var key = i;
	      var keyLower = key.toLowerCase();
	      var val = deviceInfo[i];
	      var isVersion = keyLower.indexOf('version') >= 0;
	      var isDeviceModel = keyLower.indexOf('devicemodel') >= 0;
	      var criteria = cObj[i];
	
	      if (criteria && isVersion) {
	        var c = this.normalizeVersion(criteria);
	        var d = this.normalizeVersion(deviceInfo[i]);
	
	        if (_semver2.default.satisfies(d, c)) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      } else if (isDeviceModel) {
	        var _criteria = (0, _util.typof)(criteria) === 'array' ? criteria : [criteria];
	        if (_criteria.indexOf(val) >= 0) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      }
	    }
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Differ = function () {
	  function Differ(id) {
	    _classCallCheck(this, Differ);
	
	    this.id = id;
	    this.map = [];
	    this.hooks = [];
	  }
	
	  _createClass(Differ, [{
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.map.length === 0;
	    }
	  }, {
	    key: 'append',
	    value: function append(type, depth, ref, handler) {
	      var _this = this;
	
	      if (!this.hasTimer) {
	        this.hasTimer = true;
	        setTimeout(function () {
	          _this.hasTimer = false;
	          _this.flush(true);
	        }, 0);
	      }
	      var map = this.map;
	      if (!map[depth]) {
	        map[depth] = {};
	      }
	      var group = map[depth];
	      if (!group[type]) {
	        group[type] = {};
	      }
	      if (type === 'element') {
	        if (!group[type][ref]) {
	          group[type][ref] = [];
	        }
	        group[type][ref].push(handler);
	      } else {
	        group[type][ref] = handler;
	      }
	    }
	  }, {
	    key: 'flush',
	    value: function flush(isTimeout) {
	      var map = this.map.slice();
	      this.map.length = 0;
	      map.forEach(function (group) {
	        callTypeMap(group, 'repeat');
	        callTypeMap(group, 'shown');
	        callTypeList(group, 'element');
	      });
	
	      var hooks = this.hooks.slice();
	      this.hooks.length = 0;
	      hooks.forEach(function (fn) {
	        fn();
	      });
	
	      if (!this.isEmpty()) {
	        this.flush();
	      }
	    }
	  }, {
	    key: 'then',
	    value: function then(fn) {
	      this.hooks.push(fn);
	    }
	  }]);
	
	  return Differ;
	}();
	
	exports.default = Differ;
	
	
	function callTypeMap(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    map[ref]();
	  }
	}
	
	function callTypeList(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    var list = map[ref];
	    list.forEach(function (handler) {
	      handler();
	    });
	  }
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.instanceMap = undefined;
	exports.Document = Document;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;
	
	var _listener4 = __webpack_require__(98);
	
	var _listener5 = _interopRequireDefault(_listener4);
	
	var _shared = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @fileOverview
	 * A simple virtual dom implementation
	 */
	
	var DEFAULT_TAG_NAME = 'div';
	
	var instanceMap = exports.instanceMap = {};
	var nextNodeRef = 1;
	
	function Document(id, url, handler) {
	  id = id ? id.toString() : '';
	  this.id = id;
	  this.URL = url;
	
	  instanceMap[id] = this;
	  this.nodeMap = {};
	  this.listener = new _listener5.default(id, handler || genCallTasks(id));
	  this.createDocumentElement();
	}
	
	function genCallTasks(id) {
	  return function (tasks) {
	    if (!Array.isArray(tasks)) {
	      tasks = [tasks];
	    }
	    return callNative(id, tasks, '-1');
	  };
	}
	
	Document.prototype.destroy = function () {
	  delete this.listener;
	  delete this.nodeMap;
	  delete instanceMap[this.id];
	};
	
	Document.prototype.open = function () {
	  this.listener.batched = false;
	};
	
	Document.prototype.close = function () {
	  this.listener.batched = true;
	};
	
	Document.prototype.createDocumentElement = function () {
	  var _this = this;
	
	  if (!this.documentElement) {
	    var el = new Element('document');
	    el.docId = this.id;
	    el.ownerDocument = this;
	    el.role = 'documentElement';
	    el.depth = 0;
	    el.ref = '_documentElement';
	    this.nodeMap._documentElement = el;
	    this.documentElement = el;
	    el.appendChild = function (node) {
	      appendBody(_this, node);
	    };
	    el.insertBefore = function (node, before) {
	      appendBody(_this, node, before);
	    };
	  }
	
	  return this.documentElement;
	};
	
	function appendBody(doc, node, before) {
	  var documentElement = doc.documentElement;
	
	
	  if (documentElement.pureChildren.length > 0 || node.parentNode) {
	    return;
	  }
	  var children = documentElement.children;
	  var beforeIndex = children.indexOf(before);
	  if (beforeIndex < 0) {
	    children.push(node);
	  } else {
	    children.splice(beforeIndex, 0, node);
	  }
	
	  if (node.nodeType === 1) {
	    if (node.role === 'body') {
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      node.parentNode = documentElement;
	    } else {
	      node.children.forEach(function (child) {
	        child.parentNode = node;
	      });
	      setBody(doc, node);
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      linkParent(node, documentElement);
	      delete doc.nodeMap[node.nodeId];
	    }
	    documentElement.pureChildren.push(node);
	    doc.listener.createBody(node);
	  } else {
	    node.parentNode = documentElement;
	    doc.nodeMap[node.ref] = node;
	  }
	}
	
	function setBody(doc, el) {
	  el.role = 'body';
	  el.depth = 1;
	  delete doc.nodeMap[el.nodeId];
	  el.ref = '_root';
	  doc.nodeMap._root = el;
	  doc.body = el;
	}
	
	Document.prototype.createBody = function (type, props) {
	  if (!this.body) {
	    var el = new Element(type, props);
	    setBody(this, el);
	  }
	
	  return this.body;
	};
	
	Document.prototype.createElement = function (tagName, props) {
	  return new Element(tagName, props);
	};
	
	Document.prototype.createComment = function (text) {
	  return new Comment(text);
	};
	
	Document.prototype.fireEvent = function (el, type, e, domChanges) {
	  if (!el) {
	    return;
	  }
	  e = e || {};
	  e.type = type;
	  e.target = el;
	  e.timestamp = Date.now();
	  if (domChanges) {
	    updateElement(el, domChanges);
	  }
	  return el.fireEvent(type, e);
	};
	
	Document.prototype.getRef = function (ref) {
	  return this.nodeMap[ref];
	};
	
	function updateElement(el, changes) {
	  var attrs = changes.attrs || {};
	  for (var name in attrs) {
	    el.setAttr(name, attrs[name], true);
	  }
	  var style = changes.style || {};
	  for (var _name in style) {
	    el.setStyle(_name, style[_name], true);
	  }
	}
	
	function Node() {
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.children = [];
	  this.pureChildren = [];
	  this.parentNode = null;
	  this.nextSibling = null;
	  this.previousSibling = null;
	}
	
	Node.prototype.destroy = function () {
	  var doc = instanceMap[this.docId];
	  if (doc) {
	    delete this.docId;
	    delete doc.nodeMap[this.nodeId];
	  }
	  this.children.forEach(function (child) {
	    child.destroy();
	  });
	};
	
	function Element() {
	  var type = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_TAG_NAME : arguments[0];
	  var props = arguments[1];
	
	  props = props || {};
	  this.nodeType = 1;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = type;
	  this.attr = props.attr || {};
	  this.classStyle = props.classStyle || {};
	  this.style = props.style || {};
	  this.event = {};
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Element.prototype = new Node();
	
	Element.prototype.appendChild = function (node) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.length, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      insertIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, -1);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.length, true);
	    if (node.nodeType === 1) {
	      var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId && index >= 0) {
	        var _listener = instanceMap[this.docId].listener;
	        return _listener.moveElement(node.ref, this.ref, index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertBefore = function (node, before) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === before || node.nextSibling === before) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(before), true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var pureBefore = nextElement(before);
	      var index = insertIndex(node, this.pureChildren, pureBefore ? this.pureChildren.indexOf(pureBefore) : this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(before), true);
	    if (node.nodeType === 1) {
	      var _pureBefore = nextElement(before);
	      var _index = moveIndex(node, this.pureChildren, _pureBefore ? this.pureChildren.indexOf(_pureBefore) : this.pureChildren.length);
	      if (this.docId && _index >= 0) {
	        var _listener2 = instanceMap[this.docId].listener;
	        return _listener2.moveElement(node.ref, this.ref, _index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertAfter = function (node, after) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === after || node.previousSibling === after) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var index = insertIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (node.nodeType === 1) {
	      var _index2 = moveIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId && _index2 >= 0) {
	        var _listener3 = instanceMap[this.docId].listener;
	        return _listener3.moveElement(node.ref, this.ref, _index2);
	      }
	    }
	  }
	};
	
	Element.prototype.removeChild = function (node, preserved) {
	  if (node.parentNode) {
	    removeIndex(node, this.children, true);
	    if (node.nodeType === 1) {
	      removeIndex(node, this.pureChildren);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        listener.removeElement(node.ref);
	      }
	    }
	  }
	  if (!preserved) {
	    node.destroy();
	  }
	};
	
	Element.prototype.clear = function () {
	  var _this2 = this;
	
	  if (this.docId) {
	    (function () {
	      var listener = instanceMap[_this2.docId].listener;
	      _this2.pureChildren.forEach(function (node) {
	        listener.removeElement(node.ref);
	      });
	    })();
	  }
	  this.children.forEach(function (node) {
	    node.destroy();
	  });
	  this.children.length = 0;
	  this.pureChildren.length = 0;
	};
	
	function nextElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.nextSibling;
	  }
	}
	
	function previousElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.previousSibling;
	  }
	}
	
	function linkParent(node, parent) {
	  node.parentNode = parent;
	  if (parent.docId) {
	    node.docId = parent.docId;
	    node.ownerDocument = parent.ownerDocument;
	    node.ownerDocument.nodeMap[node.nodeId] = node;
	    node.depth = parent.depth + 1;
	  }
	  node.children.forEach(function (child) {
	    linkParent(child, node);
	  });
	}
	
	function registerNode(docId, node) {
	  var doc = instanceMap[docId];
	  doc.nodeMap[node.nodeId] = node;
	}
	
	function insertIndex(target, list, newIndex, changeSibling) {
	  if (newIndex < 0) {
	    newIndex = 0;
	  }
	  var before = list[newIndex - 1];
	  var after = list[newIndex];
	  list.splice(newIndex, 0, target);
	  if (changeSibling) {
	    before && (before.nextSibling = target);
	    target.previousSibling = before;
	    target.nextSibling = after;
	    after && (after.previousSibling = target);
	  }
	  return newIndex;
	}
	
	function moveIndex(target, list, newIndex, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return -1;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	  var newIndexAfter = newIndex;
	  if (index <= newIndex) {
	    newIndexAfter = newIndex - 1;
	  }
	  var beforeNew = list[newIndexAfter - 1];
	  var afterNew = list[newIndexAfter];
	  list.splice(newIndexAfter, 0, target);
	  if (changeSibling) {
	    beforeNew && (beforeNew.nextSibling = target);
	    target.previousSibling = beforeNew;
	    target.nextSibling = afterNew;
	    afterNew && (afterNew.previousSibling = target);
	  }
	  if (index === newIndexAfter) {
	    return -1;
	  }
	  return newIndex;
	}
	
	function removeIndex(target, list, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	}
	
	Element.prototype.setAttr = function (key, value, silent) {
	  if (this.attr[key] === value) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setAttr(this.ref, key, value);
	  }
	};
	
	Element.prototype.setStyle = function (key, value, silent) {
	  if (this.style[key] === value) {
	    return;
	  }
	  this.style[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyle(this.ref, key, value);
	  }
	};
	
	Element.prototype.setClassStyle = function (classStyle) {
	  this.classStyle = classStyle;
	  if (this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyles(this.ref, this.toStyle());
	  }
	};
	
	Element.prototype.addEvent = function (type, handler) {
	  if (!this.event[type]) {
	    this.event[type] = handler;
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.addEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.removeEvent = function (type) {
	  if (this.event[type]) {
	    delete this.event[type];
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.removeEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.fireEvent = function (type, e) {
	  var handler = this.event[type];
	  if (handler) {
	    return handler.call(this, e);
	  }
	};
	
	Element.prototype.toStyle = function () {
	  return (0, _shared.extend)({}, this.classStyle, this.style);
	};
	
	Element.prototype.toJSON = function () {
	  var result = {
	    ref: this.ref.toString(),
	    type: this.type,
	    attr: this.attr,
	    style: this.toStyle()
	  };
	  var event = Object.keys(this.event);
	  if (event.length) {
	    result.event = event;
	  }
	  if (this.pureChildren.length) {
	    result.children = this.pureChildren.map(function (child) {
	      return child.toJSON();
	    });
	  }
	  return result;
	};
	
	Element.prototype.toString = function () {
	  return '<' + this.type + ' attr=' + JSON.stringify(this.attr) + ' style=' + JSON.stringify(this.toStyle()) + '>' + this.pureChildren.map(function (child) {
	    return child.toString();
	  }).join('') + '</' + this.type + '>';
	};
	
	function Comment(value) {
	  this.nodeType = 8;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = 'comment';
	  this.value = value;
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Comment.prototype = new Node();
	
	Comment.prototype.toString = function () {
	  return '<!-- ' + this.value + ' -->';
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Listener;
	exports.createAction = createAction;
	function Listener(id, handler) {
	  this.id = id;
	  this.batched = false;
	  this.updates = [];
	  if (typeof handler === 'function') {
	    this.handler = handler;
	  }
	}
	
	Listener.prototype.createFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('createFinish', [])], callback);
	};
	
	Listener.prototype.updateFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('updateFinish', [])], callback);
	};
	
	Listener.prototype.refreshFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('refreshFinish', [])], callback);
	};
	
	Listener.prototype.createBody = function (element) {
	  var body = element.toJSON();
	  var children = body.children;
	  delete body.children;
	  var actions = [createAction('createBody', [body])];
	  if (children) {
	    actions.push.apply(actions, children.map(function (child) {
	      return createAction('addElement', [body.ref, child, -1]);
	    }));
	  }
	  return this.addActions(actions);
	};
	
	Listener.prototype.addElement = function (element, ref, index) {
	  if (!(index >= 0)) {
	    index = -1;
	  }
	  return this.addActions(createAction('addElement', [ref, element.toJSON(), index]));
	};
	
	Listener.prototype.removeElement = function (ref) {
	  if (Array.isArray(ref)) {
	    var actions = ref.map(function (r) {
	      return createAction('removeElement', [r]);
	    });
	    return this.addActions(actions);
	  }
	  return this.addActions(createAction('removeElement', [ref]));
	};
	
	Listener.prototype.moveElement = function (targetRef, parentRef, index) {
	  return this.addActions(createAction('moveElement', [targetRef, parentRef, index]));
	};
	
	Listener.prototype.setAttr = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateAttrs', [ref, result]));
	};
	
	Listener.prototype.setStyle = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateStyle', [ref, result]));
	};
	
	Listener.prototype.setStyles = function (ref, style) {
	  return this.addActions(createAction('updateStyle', [ref, style]));
	};
	
	Listener.prototype.addEvent = function (ref, type) {
	  return this.addActions(createAction('addEvent', [ref, type]));
	};
	
	Listener.prototype.removeEvent = function (ref, type) {
	  return this.addActions(createAction('removeEvent', [ref, type]));
	};
	
	Listener.prototype.handler = function (actions, cb) {
	  return cb && cb();
	};
	
	Listener.prototype.addActions = function (actions) {
	  var updates = this.updates;
	  var handler = this.handler;
	
	  if (!Array.isArray(actions)) {
	    actions = [actions];
	  }
	
	  if (this.batched) {
	    updates.push.apply(updates, actions);
	  } else {
	    return handler(actions);
	  }
	};
	
	function createAction(name, args) {
	  return { module: 'dom', method: name, args: args };
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {
		"name": "weex",
		"version": "0.4.0",
		"description": "A framework for building Mobile cross-platform UI",
		"license": "Apache-2.0",
		"repository": {
			"type": "git",
			"url": "git@github.com:alibaba/weex.git"
		},
		"homepage": "http://alibaba.github.io/weex/",
		"bugs": {
			"url": "https://github.com/alibaba/weex/issues"
		},
		"private": "true",
		"keywords": [
			"weex",
			"hybrid",
			"webcomponent",
			"appframework",
			"mvvm",
			"javascript",
			"webkit",
			"v8",
			"jscore",
			"html5",
			"android",
			"ios",
			"yunos"
		],
		"engines": {
			"node": ">=4"
		},
		"scripts": {
			"postinstall": "bash ./bin/install-hooks.sh",
			"build:config": "node build/config.frameworks.js",
			"build:browser": "webpack --config build/webpack.browser.config.js",
			"build:native": "webpack --config build/webpack.native.config.js",
			"build:examples": "webpack --config build/webpack.examples.config.js",
			"build:test": "webpack --config build/webpack.test.config.js",
			"dist:browser": "npm run build:browser && bash ./bin/dist-browser.sh",
			"dist": "npm run dist:browser",
			"dev:browser": "webpack --watch --config build/webpack.browser.config.js",
			"dev:native": "webpack --watch --config build/webpack.native.config.js",
			"dev:examples": "webpack --watch --config build/webpack.examples.config.js",
			"dev:test": "webpack --watch --config build/webpack.test.config.js",
			"build": "npm run build:native && npm run build:browser && npm run build:examples && npm run build:test",
			"lint": "eslint html5",
			"test:unit": "mocha --compilers js:babel-core/register html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:cover": "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha -- --reporter dot html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:e2e": "npm run build:browser && node html5/test/e2e/runner.js",
			"test": "npm run build:config && npm run lint && npm run test:cover && npm run test:e2e",
			"serve": "serve ./ -p 12580",
			"clean:examples": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mexamples\\033[0m\" && rm -vrf examples/build/*",
			"clean:test": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mtest\\033[0m\" && rm -vrf test/build/*",
			"clean": "npm run clean:examples && npm run clean:test",
			"copy:js": "cp -vf ./dist/native.js ./android/sdk/assets/main.js",
			"copy:examples": "rm -rf ./android/playground/app/src/main/assets/* && cp -vrf ./examples/build/* ./android/playground/app/src/main/assets/",
			"copy": "npm run copy:js && npm run copy:examples"
		},
		"subversion": {
			"browser": "0.2.23",
			"framework": "0.15.2",
			"transformer": ">=0.1.5 <0.4"
		},
		"dependencies": {
			"animationjs": "^0.1.5",
			"carrousel": "^0.1.11",
			"core-js": "^2.4.0",
			"cubicbezier": "^0.1.1",
			"envd": "^0.1.1",
			"fixedsticky": "^0.1.0",
			"httpurl": "^0.1.1",
			"kountdown": "^0.1.2",
			"lazyimg": "^0.1.2",
			"lie": "^3.0.4",
			"modals": "^0.1.5",
			"scroll-to": "0.0.2",
			"semver": "^5.1.0",
			"transitionize": "0.0.3",
			"weex-components": "^0.1.3"
		},
		"devDependencies": {
			"babel-cli": "~6.4.5",
			"babel-loader": "^6.2.4",
			"babel-preset-es2015": "^6.9.0",
			"chai": "^3.5.0",
			"chromedriver": "^2.21.2",
			"cross-spawn": "^4.0.0",
			"css-loader": "^0.23.1",
			"eslint": "^2.11.1",
			"http-server": "^0.9.0",
			"isparta": "^4.0.0",
			"istanbul": "^0.4.3",
			"json-loader": "^0.5.4",
			"mocha": "^2.5.3",
			"nightwatch": "^0.9.4",
			"phantomjs-prebuilt": "^2.1.7",
			"selenium-server": "2.53.1",
			"serve": "^1.4.0",
			"sinon": "^1.17.4",
			"sinon-chai": "^2.8.0",
			"style-loader": "^0.13.1",
			"uglify-js": "^2.6.4",
			"webpack": "^1.13.1",
			"weex-loader": "^0.2.0"
		}
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$ = $;
	exports.$el = $el;
	exports.$vm = $vm;
	exports.$renderThen = $renderThen;
	exports.$scrollTo = $scrollTo;
	exports.$transition = $transition;
	exports.$getConfig = $getConfig;
	exports.$sendHttp = $sendHttp;
	exports.$openURL = $openURL;
	exports.$setTitle = $setTitle;
	exports.$call = $call;
	
	var _util = __webpack_require__(79);
	
	/**
	 * ==========================================================
	 * common
	 * ==========================================================
	 */
	
	/**
	 * @deprecated use $vm instead
	 * find the vm by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $(id) {
	  console.warn('[JS Framework] Vm#$ is deprecated, please use Vm#$vm instead');
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	/**
	 * find the element by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Element}
	 */
	/**
	 * @fileOverview The api for invoking with "$" prefix
	 */
	function $el(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.el;
	  }
	}
	
	/**
	 * find the vm of the custom component by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $vm(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	/**
	 * Fire when differ rendering finished
	 *
	 * @param  {Function} fn
	 */
	function $renderThen(fn) {
	  var app = this._app;
	  var differ = app.differ;
	  return differ.then(function () {
	    fn();
	  });
	}
	
	/**
	 * scroll an element specified by id into view,
	 * moreover specify a number of offset optionally
	 * @param  {string} id
	 * @param  {number} offset
	 */
	function $scrollTo(id, offset) {
	  console.warn('[JS Framework] Vm#$scrollTo is deprecated, ' + 'please use "require(\'@weex-module/dom\')' + '.scrollTo(el, options)" instead');
	  var el = this.$el(id);
	  if (el) {
	    var dom = this._app.requireModule('dom');
	    dom.scrollToElement(el.ref, { offset: offset });
	  }
	}
	
	/**
	 * perform transition animation on an element specified by id
	 * @param  {string}   id
	 * @param  {object}   options
	 * @param  {object}   options.styles
	 * @param  {object}   options.duration(ms)
	 * @param  {object}   [options.timingFunction]
	 * @param  {object}   [options.delay=0(ms)]
	 * @param  {Function} callback
	 */
	function $transition(id, options, callback) {
	  var _this = this;
	
	  var el = this.$el(id);
	  if (el && options && options.styles) {
	    var animation = this._app.requireModule('animation');
	    animation.transition(el.ref, options, function () {
	      _this._setStyle(el, options.styles);
	      callback && callback.apply(undefined, arguments);
	    });
	  }
	}
	
	/**
	 * get some config
	 * @return {object} some config for app instance
	 * @property {string} bundleUrl
	 * @property {boolean} debug
	 * @property {object} env
	 * @property {string} env.weexVersion(ex. 1.0.0)
	 * @property {string} env.appName(ex. TB/TM)
	 * @property {string} env.appVersion(ex. 5.0.0)
	 * @property {string} env.platform(ex. iOS/Android)
	 * @property {string} env.osVersion(ex. 7.0.0)
	 * @property {string} env.deviceModel **native only**
	 * @property {number} env.[deviceWidth=750]
	 * @property {number} env.deviceHeight
	 */
	function $getConfig(callback) {
	  var config = (0, _util.extend)({
	    env: global.WXEnvironment || {}
	  }, this._app.options);
	  if ((0, _util.typof)(callback) === 'function') {
	    console.warn('[JS Framework] the callback of Vm#$getConfig(callback) is deprecated, ' + 'this api now can directly RETURN config info.');
	    callback(config);
	  }
	  return config;
	}
	
	/**
	 * @deprecated
	 * request network via http protocol
	 * @param  {object}   params
	 * @param  {Function} callback
	 */
	function $sendHttp(params, callback) {
	  console.warn('[JS Framework] Vm#$sendHttp is deprecated, ' + 'please use "require(\'@weex-module/stream\')' + '.sendHttp(params, callback)" instead');
	  var stream = this._app.requireModule('stream');
	  stream.sendHttp(params, callback);
	}
	
	/**
	 * @deprecated
	 * open a url
	 * @param  {string} url
	 */
	function $openURL(url) {
	  console.warn('[JS Framework] Vm#$openURL is deprecated, ' + 'please use "require(\'@weex-module/event\')' + '.openURL(url)" instead');
	  var event = this._app.requireModule('event');
	  event.openURL(url);
	}
	
	/**
	 * @deprecated
	 * set a title for page
	 * @param  {string} title
	 */
	function $setTitle(title) {
	  console.warn('[JS Framework] Vm#$setTitle is deprecated, ' + 'please use "require(\'@weex-module/pageInfo\')' + '.setTitle(title)" instead');
	  var pageInfo = this._app.requireModule('pageInfo');
	  pageInfo.setTitle(title);
	}
	
	/**
	 * @deprecated use "require('@weex-module/moduleName') instead"
	 * invoke a native method by specifing the name of module and method
	 * @param  {string} moduleName
	 * @param  {string} methodName
	 * @param  {...*} the rest arguments
	 */
	function $call(moduleName, methodName) {
	  console.warn('[JS Framework] Vm#$call is deprecated, ' + 'please use "require(\'@weex-module/moduleName\')" instead');
	  var module = this._app.requireModule(moduleName);
	  if (module && module[methodName]) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    module[methodName].apply(module, args);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDU2YzMxYzJiNDYzNzJhY2VjYmIiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvc2V0VGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvb2JqZWN0QXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL34vc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3Zkb20vbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBpL21ldGhvZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7S0FBWSxPOzs7Ozs7S0FFSixNLHVCQUFBLE07S0FBUSxXLHVCQUFBLFc7O0FBRWhCOzs0QkFDVyxVO0FBQ1QsVUFBTyxVQUFQLElBQXFCLFlBQWE7QUFDaEMsU0FBTSxNQUFNLGtCQUFRLFVBQVIscUNBQVo7QUFDQSxTQUFJLGVBQWUsS0FBbkIsRUFBMEI7QUFDeEIsZUFBUSxLQUFSLENBQWMsSUFBSSxRQUFKLEVBQWQ7QUFDRDtBQUNELFlBQU8sR0FBUDtBQUNELElBTkQ7OztBQURGLE1BQUssSUFBTSxVQUFYLHVCQUFrQztBQUFBLFNBQXZCLFVBQXVCO0FBUWpDOztBQUVEO0FBQ0EsUUFBTyxnQkFBUCxHQUEwQixNQUExQjtBQUNBLFFBQU8sa0JBQVAsR0FBNEIsV0FBNUI7O0FBRUE7QUFDQSxRQUFPLGVBQVAsQ0FBdUIsT0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7O1NDWGdCLE0sR0FBQSxNO1NBeUJBLEcsR0FBQSxHO1NBZ0JBLE0sR0FBQSxNO1NBaUJBLE0sR0FBQSxNO1NBWUEsSSxHQUFBLEk7U0FtQkEsTyxHQUFBLE87U0FtQkEsUSxHQUFBLFE7U0FjQSxhLEdBQUEsYTs7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T08sVUFBUyxLQUFULENBQWdCLFVBQWhCLEVBQTRCLFVBQTVCLEVBQWlEO0FBQ3RELFdBQVEsSUFBUixDQUFhLDRDQUNYLDJEQURGO0FBRUEsT0FBTSxTQUFTLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLE9BQUksVUFBVSxPQUFPLFVBQVAsQ0FBZCxFQUFrQztBQUFBLHVDQUpjLElBSWQ7QUFKYyxXQUlkO0FBQUE7O0FBQ2hDLFlBQU8sVUFBUCxnQkFBc0IsSUFBdEI7QUFDRDtBQUNGLEUiLCJmaWxlIjoibmF0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkNTZjMzFjMmI0NjM3MmFjZWNiYlxuICoqLyIsImltcG9ydCAnLi4vc2hhcmVkJ1xuaW1wb3J0IHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSdcbmltcG9ydCB7IHN1YnZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2RlZmF1bHQvYXBpL21ldGhvZHMnXG5cbmNvbnN0IHsgbmF0aXZlLCB0cmFuc2Zvcm1lciB9ID0gc3VidmVyc2lvblxuXG4vLyByZWdpc3RlciBpbnN0YW5jZSBtYW5hZ2VtZW50IEFQSXNcbmZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBydW50aW1lKSB7XG4gIGdsb2JhbFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gcnVudGltZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIGlmIChyZXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihyZXQudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbi8vIHJlZ2lzdGVyIGZyYW1ld29yayBtZXRhIGluZm9cbmdsb2JhbC5mcmFtZXdvcmtWZXJzaW9uID0gbmF0aXZlXG5nbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID0gdHJhbnNmb3JtZXJcblxuLy8gcmVnaXN0ZXIgc3BlY2lhbCBtZXRob2RzIGZvciBXZWV4IGZyYW1ld29ya1xuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9uYXRpdmUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc2V0VGltZW91dCdcbmltcG9ydCAnLi9wcm9taXNlJ1xuaW1wb3J0ICcuL2NvbnNvbGUnXG5pbXBvcnQgJy4vb2JqZWN0QXNzaWduJ1xuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCAodGFyZ2V0LCAuLi5zcmMpIHtcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduID09PSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNyYylcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBmaXJzdCA9IHNyYy5zaGlmdCgpXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmlyc3QpIHtcbiAgICAgIHRhcmdldFtrZXldID0gZmlyc3Rba2V5XVxuICAgIH1cbiAgICBpZiAoc3JjLmxlbmd0aCkge1xuICAgICAgZXh0ZW5kKHRhcmdldCwgLi4uc3JjKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VudW1lcmFibGVdXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IGl0ZW1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuZXhwb3J0IGZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogU2ltcGxlIGJpbmQsIGZhc3RlciB0aGFuIG5hdGl2ZVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICBjb25zdCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheS1saWtlfSBsaXN0XG4gKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0XSAtIHN0YXJ0IGluZGV4XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheSAobGlzdCwgc3RhcnQpIHtcbiAgc3RhcnQgPSBzdGFydCB8fCAwXG4gIGxldCBpID0gbGlzdC5sZW5ndGggLSBzdGFydFxuICBjb25zdCByZXQgPSBuZXcgQXJyYXkoaSlcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbmNvbnN0IE9CSkVDVF9TVFJJTkcgPSAnW29iamVjdCBPYmplY3RdJ1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBPQkpFQ1RfU1RSSU5HXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL2luZGV4LmpzXG4gKiovIiwiY29uc3Qge1xuICBzZXRUaW1lb3V0LFxuICBzZXRUaW1lb3V0TmF0aXZlXG59ID0gZ2xvYmFsXG5cbi8vIGZpeCBubyBzZXRUaW1lb3V0IG9uIEFuZHJvaWQgVjhcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2Ygc2V0VGltZW91dE5hdGl2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zdCB0aW1lb3V0TWFwID0ge31cbiAgbGV0IHRpbWVvdXRJZCA9IDBcblxuICBnbG9iYWwuc2V0VGltZW91dCA9IChjYiwgdGltZSkgPT4ge1xuICAgIHRpbWVvdXRNYXBbKyt0aW1lb3V0SWRdID0gY2JcbiAgICBzZXRUaW1lb3V0TmF0aXZlKHRpbWVvdXRJZC50b1N0cmluZygpLCB0aW1lKVxuICB9XG5cbiAgZ2xvYmFsLnNldFRpbWVvdXRDYWxsYmFjayA9IChpZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZW91dE1hcFtpZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRpbWVvdXRNYXBbaWRdKClcbiAgICAgIGRlbGV0ZSB0aW1lb3V0TWFwW2lkXVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvc2V0VGltZW91dC5qc1xuICoqLyIsIi8vIGZpeCBQcm9taXNlIFByb2JsZW0gb24gSlNDb250ZXh0IG9mIGlPUzd+OFxuLy8gQHNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM1ODY2XG4vLyBnbG9iYWwuUHJvbWlzZSA9IG51bGxcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UnKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvcHJvbWlzZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCB0ZXN0ICAgID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbiAqKi8iLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL193a3MuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKXtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcbiAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4gKiovIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qc1xuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4gKiovIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuICoqLyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuICoqLyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiovIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKi8iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKi8iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanNcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiovIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4gKiovIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbiAqKi8iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanNcbiAqKi8iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqLyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuICoqLyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4gKiovIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuICoqLyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuICoqLyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbiAqKi8iLCJjb25zdCB7IGNvbnNvbGUsIG5hdGl2ZUxvZyB9ID0gZ2xvYmFsXG5jb25zdCBMRVZFTFMgPSBbJ2Vycm9yJywgJ3dhcm4nLCAnaW5mbycsICdsb2cnLCAnZGVidWcnXVxuY29uc3QgbGV2ZWxNYXAgPSB7fVxuXG5nZW5lcmF0ZUxldmVsTWFwKClcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoXG4gIHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCAvLyBBbmRyb2lkXG4gIChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSA9PT0gJ2lPUycpIC8vIGlPU1xuKSB7XG4gIGdsb2JhbC5jb25zb2xlID0ge1xuICAgIGRlYnVnOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2RlYnVnJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fREVCVUcnKSB9XG4gICAgfSxcbiAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fTE9HJykgfVxuICAgIH0sXG4gICAgaW5mbzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fSU5GTycpIH1cbiAgICB9LFxuICAgIHdhcm46ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnd2FybicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX1dBUk4nKSB9XG4gICAgfSxcbiAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0VSUk9SJykgfVxuICAgIH1cbiAgfVxufVxuZWxzZSB7IC8vIEhUTUw1XG4gIGNvbnN0IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfSA9IGNvbnNvbGVcbiAgY29uc29sZS5fX29yaV9fID0geyBkZWJ1ZywgbG9nLCBpbmZvLCB3YXJuLCBlcnJvciB9XG4gIGNvbnNvbGUuZGVidWcgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IGNvbnNvbGUuX19vcmlfXy5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdsb2cnKSkgeyBjb25zb2xlLl9fb3JpX18ubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLmluZm8gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgY29uc29sZS5fX29yaV9fLmluZm8uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUud2FybiA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBjb25zb2xlLl9fb3JpX18ud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5lcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2Vycm9yJykpIHsgY29uc29sZS5fX29yaV9fLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxldmVsTWFwICgpIHtcbiAgTEVWRUxTLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBMRVZFTFMuaW5kZXhPZihsZXZlbClcbiAgICBsZXZlbE1hcFtsZXZlbF0gPSB7fVxuICAgIExFVkVMUy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgY29uc3QgdHlwZUluZGV4ID0gTEVWRUxTLmluZGV4T2YodHlwZSlcbiAgICAgIGlmICh0eXBlSW5kZXggPD0gbGV2ZWxJbmRleCkge1xuICAgICAgICBsZXZlbE1hcFtsZXZlbF1bdHlwZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tMZXZlbCAodHlwZSkge1xuICBjb25zdCBsb2dMZXZlbCA9IChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5sb2dMZXZlbCkgfHwgJ2xvZydcbiAgcmV0dXJuIGxldmVsTWFwW2xvZ0xldmVsXSAmJiBsZXZlbE1hcFtsb2dMZXZlbF1bdHlwZV1cbn1cblxuZnVuY3Rpb24gZm9ybWF0IChhcmdzKSB7XG4gIHJldHVybiBhcmdzLm1hcCgodikgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xuICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdiA9IFN0cmluZyh2KVxuICAgIH1cbiAgICByZXR1cm4gdlxuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvY29uc29sZS5qc1xuICoqLyIsImltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvb2JqZWN0QXNzaWduLmpzXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuICoqLyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4gKiovIiwiaW1wb3J0IGZyYW1ld29ya3MgZnJvbSAnLi9jb25maWcnXG5cbmltcG9ydCB7IERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50IH0gZnJvbSAnLi4vdmRvbSdcblxuY29uc3QgY29uZmlnID0ge1xuICBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCxcbiAgc2VuZFRhc2tzICguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5jYWxsTmF0aXZlKC4uLmFyZ3MpXG4gIH1cbn1cblxuZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgY29uc3QgZnJhbWV3b3JrID0gZnJhbWV3b3Jrc1tuYW1lXVxuICBmcmFtZXdvcmsuaW5pdChjb25maWcpXG59XG5cbmNvbnN0IHZlcnNpb25SZWdFeHAgPSAvXlxcL1xcLyAqKFxce1teXFx9XSpcXH0pICpcXHI/XFxuL1xuXG5mdW5jdGlvbiBjaGVja1ZlcnNpb24gKGNvZGUpIHtcbiAgbGV0IGluZm9cbiAgY29uc3QgcmVzdWx0ID0gdmVyc2lvblJlZ0V4cC5leGVjKGNvZGUpXG4gIGlmIChyZXN1bHQpIHtcbiAgICB0cnkge1xuICAgICAgaW5mbyA9IEpTT04ucGFyc2UocmVzdWx0WzFdKVxuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gaW5mb1xufVxuXG5jb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaWQsIGNvZGUsIGNvbmZpZywgZGF0YSkge1xuICBsZXQgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICBpZiAoIWluZm8pIHtcbiAgICBpbmZvID0gY2hlY2tWZXJzaW9uKGNvZGUpIHx8IHt9XG4gICAgaWYgKCFmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgaW5mby5mcmFtZXdvcmsgPSAnV2VleCdcbiAgICB9XG4gICAgaW5zdGFuY2VNYXBbaWRdID0gaW5mb1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fVxuICAgIGNvbmZpZy5idW5kbGVWZXJzaW9uID0gaW5mby52ZXJzaW9uXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gY3JlYXRlIGFuICR7aW5mby5mcmFtZXdvcmt9QCR7Y29uZmlnLmJ1bmRsZVZlcnNpb259IGluc3RhbmNlIGZyb20gJHtjb25maWcuYnVuZGxlVmVyc2lvbn1gKVxuICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXS5jcmVhdGVJbnN0YW5jZShpZCwgY29kZSwgY29uZmlnLCBkYXRhKVxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbn1cblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgY3JlYXRlSW5zdGFuY2Vcbn1cblxuZnVuY3Rpb24gZ2VuSW5pdCAobWV0aG9kTmFtZSkge1xuICBtZXRob2RzW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZnJhbWV3b3Jrcykge1xuICAgICAgY29uc3QgZnJhbWV3b3JrID0gZnJhbWV3b3Jrc1tuYW1lXVxuICAgICAgaWYgKGZyYW1ld29yayAmJiBmcmFtZXdvcmtbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgZnJhbWV3b3JrW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblsncmVnaXN0ZXJDb21wb25lbnRzJywgJ3JlZ2lzdGVyTW9kdWxlcycsICdyZWdpc3Rlck1ldGhvZHMnXS5mb3JFYWNoKGdlbkluaXQpXG5cbmZ1bmN0aW9uIGdlbkluc3RhbmNlIChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5bJ2Rlc3Ryb3lJbnN0YW5jZScsICdyZWZyZXNoSW5zdGFuY2UnLCAncmVjZWl2ZVRhc2tzJywgJ2dldFJvb3QnXS5mb3JFYWNoKGdlbkluc3RhbmNlKVxuXG5mdW5jdGlvbiBhZGFwdEluc3RhbmNlIChtZXRob2ROYW1lLCBuYXRpdmVNZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbmF0aXZlTWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5hZGFwdEluc3RhbmNlKCdyZWNlaXZlVGFza3MnLCAnY2FsbEpTJylcblxuZXhwb3J0IGRlZmF1bHQgbWV0aG9kc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9ydW50aW1lL2luZGV4LmpzXG4gKiovIiwiLy8gYnVpbHQgYnkgbnBtIHJ1biBidWlsZDpjb25maWdcblxuaW1wb3J0ICogYXMgV2VleCBmcm9tICcuLi9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFdlZXhcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvcnVudGltZS9jb25maWcuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgTWFpbiBlbnRyeSwgaW5zdGFuY2UgbWFuYWdlclxuICpcbiAqIC0gY3JlYXRlSW5zdGFuY2UoaW5zdGFuY2VJZCwgY29kZSwgb3B0aW9ucywgZGF0YSlcbiAqIC0gcmVmcmVzaEluc3RhbmNlKGluc3RhbmNlSWQsIGRhdGEpXG4gKiAtIGRlc3Ryb3lJbnN0YW5jZShpbnN0YW5jZUlkKVxuICogLSByZWdpc3RlckNvbXBvbmVudHMoY29tcG9uZW50cylcbiAqIC0gcmVnaXN0ZXJNb2R1bGVzKG1vZHVsZXMpXG4gKiAtIGdldFJvb3QoaW5zdGFuY2VJZClcbiAqIC0gaW5zdGFuY2VNYXBcbiAqIC0gY2FsbEpTKGluc3RhbmNlSWQsIHRhc2tzKVxuICogICAtIGZpcmVFdmVudChyZWYsIHR5cGUsIGRhdGEpXG4gKiAgIC0gY2FsbGJhY2soZnVuY0lkLCBkYXRhKVxuICovXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgQXBwSW5zdGFuY2UgZnJvbSAnLi9hcHAnXG5pbXBvcnQgVm0gZnJvbSAnLi92bSdcblxuY29uc3Qge1xuICBuYXRpdmVDb21wb25lbnRNYXBcbn0gPSBjb25maWdcbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQgKGNmZykge1xuICBjb25maWcuRG9jdW1lbnQgPSBjZmcuRG9jdW1lbnRcbiAgY29uZmlnLkVsZW1lbnQgPSBjZmcuRWxlbWVudFxuICBjb25maWcuQ29tbWVudCA9IGNmZy5Db21tZW50XG4gIGNvbmZpZy5zZW5kVGFza3MgPSBjZmcuc2VuZFRhc2tzXG59XG5cbi8qKlxuICogY3JlYXRlIGEgV2VleCBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtvcHRpb25zXSBvcHRpb24gYEhBU19MT0dgIGVuYWJsZSBwcmludCBsb2dcbiAqIEBwYXJhbSAge29iamVjdH0gW2RhdGFdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaW5zdGFuY2VJZCwgY29kZSwgb3B0aW9ucywgZGF0YSkge1xuICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGxldCByZXN1bHRcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlID0gbmV3IEFwcEluc3RhbmNlKGluc3RhbmNlSWQsIG9wdGlvbnMpXG4gICAgaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF0gPSBpbnN0YW5jZVxuICAgIHJlc3VsdCA9IGluc3RhbmNlLmluaXQoY29kZSwgZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIHJlZnJlc2ggYSBXZWV4IGluc3RhbmNlXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hJbnN0YW5jZSAoaW5zdGFuY2VJZCwgZGF0YSkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIGxldCByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gaW5zdGFuY2UucmVmcmVzaERhdGEoZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBkZXN0cm95IGEgV2VleCBpbnN0YW5jZVxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95SW5zdGFuY2UgKGluc3RhbmNlSWQpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cImApXG4gIH1cblxuICBpbnN0YW5jZS5kZXN0cm95KClcbiAgZGVsZXRlIGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIHJldHVybiBpbnN0YW5jZU1hcFxufVxuXG4vKipcbiAqIHJlZ2lzdGVyIHRoZSBuYW1lIG9mIGVhY2ggbmF0aXZlIGNvbXBvbmVudFxuICogQHBhcmFtICB7YXJyYXl9IGNvbXBvbmVudHMgYXJyYXkgb2YgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzIChjb21wb25lbnRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudHMpKSB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIHJlZ2lzdGVyIChuYW1lKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmF0aXZlQ29tcG9uZW50TWFwW25hbWVdID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBuYW1lLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lLnR5cGVdID0gbmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiByZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIG1vZHVsZVxuICogQHBhcmFtICB7b2JqZWN0fSBtb2R1bGVzIGEgb2JqZWN0IG9mIG1vZHVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlcyAobW9kdWxlcykge1xuICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdvYmplY3QnKSB7XG4gICAgVm0ucmVnaXN0ZXJNb2R1bGVzKG1vZHVsZXMpXG4gIH1cbn1cblxuLyoqXG4gKiByZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIGFwaVxuICogQHBhcmFtICB7b2JqZWN0fSBhcGlzIGEgb2JqZWN0IG9mIGFwaXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyAoYXBpcykge1xuICBpZiAodHlwZW9mIGFwaXMgPT09ICdvYmplY3QnKSB7XG4gICAgVm0ucmVnaXN0ZXJNZXRob2RzKGFwaXMpXG4gIH1cbn1cbmdsb2JhbC5yZWdpc3Rlck1ldGhvZHMgPSByZWdpc3Rlck1ldGhvZHNcblxuLyoqXG4gKiBnZXQgYSB3aG9sZSBlbGVtZW50IHRyZWUgb2YgYW4gaW5zdGFuY2VcbiAqIGZvciBkZWJ1Z2dpbmdcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHJldHVybiB7b2JqZWN0fSBhIHZpcnR1YWwgZG9tIHRyZWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3QgKGluc3RhbmNlSWQpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IGluc3RhbmNlLmdldFJvb3RFbGVtZW50KClcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QganNIYW5kbGVycyA9IHtcbiAgZmlyZUV2ZW50OiBmdW5jdGlvbiBmaXJlRXZlbnQgKGluc3RhbmNlSWQsIHJlZiwgdHlwZSwgZGF0YSwgZG9tQ2hhbmdlcykge1xuICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgICByZXR1cm4gaW5zdGFuY2UuZmlyZUV2ZW50KHJlZiwgdHlwZSwgZGF0YSwgZG9tQ2hhbmdlcylcbiAgfSxcblxuICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sgKGluc3RhbmNlSWQsIGZ1bmNJZCwgZGF0YSwgaWZMYXN0KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICAgIHJldHVybiBpbnN0YW5jZS5jYWxsYmFjayhmdW5jSWQsIGRhdGEsIGlmTGFzdClcbiAgfVxufVxuXG4vKipcbiAqIGFjY2VwdCBjYWxscyBmcm9tIG5hdGl2ZSAoZXZlbnQgb3IgY2FsbGJhY2spXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKiBAcGFyYW0gIHthcnJheX0gdGFza3MgbGlzdCB3aXRoIGBtZXRob2RgIGFuZCBgYXJnc2BcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUYXNrcyAoaW5zdGFuY2VJZCwgdGFza3MpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBpZiAoaW5zdGFuY2UgJiYgQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW11cbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0ganNIYW5kbGVyc1t0YXNrLm1ldGhvZF1cbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4udGFzay5hcmdzXVxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChpbnN0YW5jZUlkKVxuICAgICAgICByZXN1bHRzLnB1c2goaGFuZGxlciguLi5hcmdzKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cIiBvciB0YXNrc2ApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hdGl2ZUNvbXBvbmVudE1hcDoge1xuICAgIHRleHQ6IHRydWUsXG4gICAgaW1hZ2U6IHRydWUsXG4gICAgY29udGFpbmVyOiB0cnVlLFxuICAgIHNsaWRlcjoge1xuICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICBhcHBlbmQ6ICd0cmVlJ1xuICAgIH0sXG4gICAgY2VsbDoge1xuICAgICAgdHlwZTogJ2NlbGwnLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb25maWcuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFdlZXggaW5zdGFuY2UgY29uc3RydWN0b3IgJiBkZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IHsgZXh0ZW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgKiBhcyBjdHJsIGZyb20gJy4vY3RybCdcbmltcG9ydCBEaWZmZXIgZnJvbSAnLi9kaWZmZXInXG5cbmltcG9ydCByZW5kZXJlciBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudCwgcmVxdWlyZUNvbXBvbmVudCwgcmVxdWlyZU1vZHVsZSB9IGZyb20gJy4vcmVnaXN0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcEluc3RhbmNlIChpbnN0YW5jZUlkLCBvcHRpb25zKSB7XG4gIHRoaXMuaWQgPSBpbnN0YW5jZUlkXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdGhpcy52bSA9IG51bGxcbiAgdGhpcy5jdXN0b21Db21wb25lbnRNYXAgPSB7fVxuICB0aGlzLmNhbGxiYWNrcyA9IHt9XG4gIHRoaXMuZG9jID0gbmV3IHJlbmRlcmVyLkRvY3VtZW50KFxuICAgIGluc3RhbmNlSWQsXG4gICAgdGhpcy5vcHRpb25zLmJ1bmRsZVVybFxuICApXG4gIHRoaXMuZGlmZmVyID0gbmV3IERpZmZlcihpbnN0YW5jZUlkKVxuICB0aGlzLnVpZCA9IDBcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplIChhcHAsIHYpIHtcbiAgY29uc3QgdHlwZSA9IHR5cG9mKHYpXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICBjYXNlICdudWxsJzpcbiAgICAgIHJldHVybiAnJ1xuICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICByZXR1cm4gdi50b1N0cmluZygpXG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gdi50b0lTT1N0cmluZygpXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHYgaW5zdGFuY2VvZiByZW5kZXJlci5FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2LnJlZlxuICAgICAgfVxuICAgICAgcmV0dXJuIHZcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICBhcHAuY2FsbGJhY2tzWysrYXBwLnVpZF0gPSB2XG4gICAgICByZXR1cm4gYXBwLnVpZC50b1N0cmluZygpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KVxuICB9XG59XG5cbkFwcEluc3RhbmNlLnByb3RvdHlwZS5jYWxsVGFza3MgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgaWYgKHR5cG9mKHRhc2tzKSAhPT0gJ2FycmF5Jykge1xuICAgIHRhc2tzID0gW3Rhc2tzXVxuICB9XG5cbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suYXJncyA9IHRhc2suYXJncy5tYXAoYXJnID0+IG5vcm1hbGl6ZSh0aGlzLCBhcmcpKVxuICB9KVxuXG4gIHJldHVybiByZW5kZXJlci5zZW5kVGFza3ModGhpcy5pZCwgdGFza3MsICctMScpXG59XG5cbmV4dGVuZChBcHBJbnN0YW5jZS5wcm90b3R5cGUsIGN0cmwsIHtcbiAgcmVnaXN0ZXJDb21wb25lbnQsXG4gIHJlcXVpcmVDb21wb25lbnQsXG4gIHJlcXVpcmVNb2R1bGVcbn0pXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanNcbiAqKi8iLCJleHBvcnQge1xuICBleHRlbmQsXG4gIGRlZixcbiAgcmVtb3ZlLFxuICBoYXNPd24sXG4gIGJpbmQsXG4gIHRvQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0XG59IGZyb20gJy4uLy4uL3NoYXJlZCdcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc2VydmVkIChzdHIpIHtcbiAgY29uc3QgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKVxuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xuZXhwb3J0IGNvbnN0IGhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge31cblxubGV0IF9TZXRcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIFNldC50b1N0cmluZygpLm1hdGNoKC9uYXRpdmUgY29kZS8pKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0XG59XG5lbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRba2V5XSAhPT0gdW5kZWZpbmVkXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHRoaXMuc2V0W2tleV0gPSAxXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIH1cbn1cblxuZXhwb3J0IHsgX1NldCB9XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxtaXRlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2dcbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgdG9VcHBlcilcbn0pXG5cbmZ1bmN0aW9uIHRvVXBwZXIgKF8sIGMpIHtcbiAgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJ1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbYS16XFxkXSkoW0EtWl0pL2dcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgY29uc3QgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKS50b0xvd2VyQ2FzZSgpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdXRpbC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5cbmltcG9ydCB7IGV4dGVuZCwgYmluZCB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge1xuICBkZWZpbmUsXG4gIGJvb3RzdHJhcCxcbiAgcmVnaXN0ZXJcbn0gZnJvbSAnLi9idW5kbGUnXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBY3Rpb25zICgpIHtcbiAgdGhpcy5kaWZmZXIuZmx1c2goKVxuICBjb25zdCB0YXNrcyA9IFtdXG4gIGlmICh0aGlzLmRvYyAmJiB0aGlzLmRvYy5saXN0ZW5lciAmJiB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVzLmxlbmd0aCkge1xuICAgIHRhc2tzLnB1c2goLi4udGhpcy5kb2MubGlzdGVuZXIudXBkYXRlcylcbiAgICB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVzID0gW11cbiAgfVxuICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFRhc2tzKHRhc2tzKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChjb2RlLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIEludGlhbGl6ZSBhbiBpbnN0YW5jZSB3aXRoOlxcbicsIGRhdGEpXG5cbiAgbGV0IHJlc3VsdFxuICAvLyBAc2VlOiBsaWIvYXBwL2J1bmRsZS5qc1xuICBjb25zdCBidW5kbGVEZWZpbmUgPSBiaW5kKGRlZmluZSwgdGhpcylcbiAgY29uc3QgYnVuZGxlQm9vdHN0cmFwID0gKG5hbWUsIGNvbmZpZywgX2RhdGEpID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAodGhpcywgbmFtZSwgY29uZmlnLCBfZGF0YSB8fCBkYXRhKVxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIuY3JlYXRlRmluaXNoKClcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBBZnRlciBpbnRpYWxpemVkIGFuIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcbiAgfVxuXG4gIC8vIGJhY2t3YXJkKHJlZ2lzdGVyL3JlbmRlcilcbiAgY29uc3QgYnVuZGxlUmVnaXN0ZXIgPSBiaW5kKHJlZ2lzdGVyLCB0aGlzKVxuICBjb25zdCBidW5kbGVSZW5kZXIgPSAobmFtZSwgX2RhdGEpID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAodGhpcywgbmFtZSwge30sIF9kYXRhKVxuICB9XG5cbiAgY29uc3QgYnVuZGxlUmVxdWlyZSA9IG5hbWUgPT4gX2RhdGEgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcCh0aGlzLCBuYW1lLCB7fSwgX2RhdGEpXG4gIH1cblxuICBjb25zdCBidW5kbGVEb2N1bWVudCA9IHRoaXMuZG9jXG5cbiAgbGV0IGZ1bmN0aW9uQm9keVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBjb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gYGZ1bmN0aW9uICgpIHsuLi59YCAtPiBgey4uLn1gXG4gICAgLy8gbm90IHZlcnkgc3RyaWN0XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpLnN1YnN0cigxMilcbiAgfVxuICBlbHNlIGlmIChjb2RlKSB7XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpXG4gIH1cblxuICBjb25zdCB7IFdYRW52aXJvbm1lbnQgfSA9IGdsb2JhbFxuICBpZiAoV1hFbnZpcm9ubWVudCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtICE9PSAnV2ViJykge1xuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5yZXF1aXJlTW9kdWxlKCd0aW1lcicpXG4gICAgY29uc3QgdGltZXJBUElzID0ge1xuICAgICAgc2V0VGltZW91dDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0VGltZW91dChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gdGhpcy51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIHNldEludGVydmFsOiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFyZ3NbMF0oLi4uYXJncy5zbGljZSgyKSlcbiAgICAgICAgfVxuICAgICAgICB0aW1lci5zZXRJbnRlcnZhbChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gdGhpcy51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIGNsZWFyVGltZW91dDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KG4pXG4gICAgICB9LFxuICAgICAgY2xlYXJJbnRlcnZhbDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJJbnRlcnZhbChuKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ2RlZmluZScsXG4gICAgICAncmVxdWlyZScsXG4gICAgICAnZG9jdW1lbnQnLFxuICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAncmVnaXN0ZXInLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICAgJ19fd2VleF9ib290c3RyYXBfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdzZXRUaW1lb3V0JyxcbiAgICAgICdzZXRJbnRlcnZhbCcsXG4gICAgICAnY2xlYXJUaW1lb3V0JyxcbiAgICAgICdjbGVhckludGVydmFsJyxcbiAgICAgIGZ1bmN0aW9uQm9keVxuICAgIClcblxuICAgIGZuKFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlUmVxdWlyZSxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlUmVnaXN0ZXIsXG4gICAgICBidW5kbGVSZW5kZXIsXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICB0aW1lckFQSXMuc2V0VGltZW91dCxcbiAgICAgIHRpbWVyQVBJcy5zZXRJbnRlcnZhbCxcbiAgICAgIHRpbWVyQVBJcy5jbGVhclRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuY2xlYXJJbnRlcnZhbClcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdkZWZpbmUnLFxuICAgICAgJ3JlcXVpcmUnLFxuICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICdib290c3RyYXAnLFxuICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ19fd2VleF9kZWZpbmVfXycsIC8vIGFsaWFzIGZvciBkZWZpbmVcbiAgICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIERlc3RvcnkgYW4gaW5zdGFuY2UoJHt0aGlzLmlkfSlgKVxuXG4gIHRoaXMuaWQgPSAnJ1xuICB0aGlzLm9wdGlvbnMgPSBudWxsXG4gIHRoaXMuYmxvY2tzID0gbnVsbFxuICB0aGlzLnZtID0gbnVsbFxuICB0aGlzLmRvYyA9IG51bGxcbiAgdGhpcy5jdXN0b21Db21wb25lbnRNYXAgPSBudWxsXG4gIHRoaXMuY2FsbGJhY2tzID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdEVsZW1lbnQgKCkge1xuICBjb25zdCBkb2MgPSB0aGlzLmRvYyB8fCB7fVxuICBjb25zdCBib2R5ID0gZG9jLmJvZHkgfHwge31cbiAgcmV0dXJuIGJvZHkudG9KU09OID8gYm9keS50b0pTT04oKSA6IHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJlRXZlbnQgKHJlZiwgdHlwZSwgZSwgZG9tQ2hhbmdlcykge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBGaXJlIGEgXCIke3R5cGV9XCIgZXZlbnQgb24gYW4gZWxlbWVudCgke3JlZn0pIGluIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVmKSkge1xuICAgIHJlZi5zb21lKChyZWYpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmZpcmVFdmVudChyZWYsIHR5cGUsIGUpICE9PSBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBlbCA9IHRoaXMuZG9jLmdldFJlZihyZWYpXG5cbiAgaWYgKGVsKSB7XG4gICAgdGhpcy5kb2MuY2xvc2UoKVxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZG9jLmZpcmVFdmVudChlbCwgdHlwZSwgZSwgZG9tQ2hhbmdlcylcbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgdGhpcy5kb2Mub3BlbigpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBlbGVtZW50IHJlZmVyZW5jZSBcIiR7cmVmfVwiYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrIChjYWxsYmFja0lkLCBkYXRhLCBpZktlZXBBbGl2ZSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBJbnZva2UgYSBjYWxsYmFjaygke2NhbGxiYWNrSWR9KSB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG5cbiAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrc1tjYWxsYmFja0lkXVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmRvYy5jbG9zZSgpXG4gICAgY2FsbGJhY2soZGF0YSkgLy8gZGF0YSBpcyBhbHJlYWR5IGEgb2JqZWN0LCBAc2VlOiBsaWIvcnVudGltZS9pbmRleC5qc1xuXG4gICAgaWYgKHR5cGVvZiBpZktlZXBBbGl2ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWZLZWVwQWxpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrc1tjYWxsYmFja0lkXSA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICB0aGlzLmRvYy5vcGVuKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgY2FsbGJhY2sgaWQgXCIke2NhbGxiYWNrSWR9XCJgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaERhdGEgKGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gUmVmcmVzaCB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZVske3RoaXMuaWR9XWApXG5cbiAgY29uc3Qgdm0gPSB0aGlzLnZtXG5cbiAgaWYgKHZtICYmIGRhdGEpIHtcbiAgICB0aGlzLmRvYy5jbG9zZSgpXG4gICAgaWYgKHR5cGVvZiB2bS5yZWZyZXNoRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdm0ucmVmcmVzaERhdGEoZGF0YSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHRlbmQodm0sIGRhdGEpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIucmVmcmVzaEZpbmlzaCgpXG4gICAgdGhpcy5kb2Mub3BlbigpXG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGRhdGEgXCIke2RhdGF9XCJgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBhcGkgdGhhdCBpbnZva2VkIGJ5IGpzIGJ1bmRsZSBjb2RlXG4gKlxuICogLSBkZWZpbmUobmFtZSwgZmFjdG9yeSk6IGRlZmluZSBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSBib290c3RyYXAodHlwZSwgY29uZmlnLCBkYXRhKTogcmVxdWlyZSBhIGNlcnRhaW4gdHlwZSAmXG4gKiAgICAgICAgIHJlbmRlciB3aXRoIChvcHRpb25hbCkgZGF0YVxuICpcbiAqIGRlcHJlY2F0ZWQ6XG4gKiAtIHJlZ2lzdGVyKHR5cGUsIG9wdGlvbnMpOiByZWdpc3RlciBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSByZW5kZXIodHlwZSwgZGF0YSk6IHJlbmRlciBieSBhIGNlcnRhaW4gdHlwZSB3aXRoIChvcHRpb25hbCkgZGF0YVxuICogLSByZXF1aXJlKHR5cGUpKGRhdGEpOiByZXF1aXJlIGEgdHlwZSB0aGVuIHJlbmRlciB3aXRoIGRhdGFcbiAqL1xuXG5pbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCB7IHR5cG9mLCBpc1BsYWluT2JqZWN0IH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBWbSBmcm9tICcuLi92bSdcbmltcG9ydCAqIGFzIGRvd25ncmFkZSBmcm9tICcuL2Rvd25ncmFkZSdcblxuY29uc3QgV0VFWF9DT01QT05FTlRfUkVHID0gL15Ad2VleC1jb21wb25lbnRcXC8vXG5jb25zdCBXRUVYX01PRFVMRV9SRUcgPSAvXkB3ZWV4LW1vZHVsZVxcLy9cbmNvbnN0IE5PUk1BTF9NT0RVTEVfUkVHID0gL15cXC57MSwyfVxcLy9cbmNvbnN0IEpTX1NVUkZJWF9SRUcgPSAvXFwuanMkL1xuXG5jb25zdCBpc1dlZXhDb21wb25lbnQgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChXRUVYX0NPTVBPTkVOVF9SRUcpXG5jb25zdCBpc1dlZXhNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChXRUVYX01PRFVMRV9SRUcpXG5jb25zdCBpc05vcm1hbE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKE5PUk1BTF9NT0RVTEVfUkVHKVxuY29uc3QgaXNOcG1Nb2R1bGUgPSBuYW1lID0+ICFpc1dlZXhDb21wb25lbnQobmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1dlZXhNb2R1bGUobmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc05vcm1hbE1vZHVsZShuYW1lKVxuXG5mdW5jdGlvbiByZW1vdmVXZWV4UHJlZml4IChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFdFRVhfQ09NUE9ORU5UX1JFRywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoV0VFWF9NT0RVTEVfUkVHLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSlNTdXJmaXggKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoSlNfU1VSRklYX1JFRywgJycpXG59XG5cbmxldCBjb21tb25Nb2R1bGVzID0ge31cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tbW9uTW9kdWxlcyAoKSB7XG4gIGNvbW1vbk1vZHVsZXMgPSB7fVxufVxuXG4vLyBkZWZpbmUobmFtZSwgZmFjdG9yeSkgZm9yIHByaW1hcnkgdXNhZ2Vcbi8vIG9yXG4vLyBkZWZpbmUobmFtZSwgZGVwcywgZmFjdG9yeSkgZm9yIGNvbXBhdGliaWxpdHlcbi8vIE5vdGljZTogRE8gTk9UIHVzZSBmdW5jdGlvbiBkZWZpbmUoKSB7fSxcbi8vIGl0IHdpbGwgY2F1c2UgZXJyb3IgYWZ0ZXIgYnVpbGRlZCBieSB3ZWJwYWNrXG5leHBvcnQgY29uc3QgZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGZhY3RvcnkpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gZGVmaW5lIGEgY29tcG9uZW50ICR7bmFtZX1gKVxuXG4gIGlmICh0eXBvZihkZXBzKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZhY3RvcnkgPSBkZXBzXG4gICAgZGVwcyA9IFtdXG4gIH1cblxuICBjb25zdCBfcmVxdWlyZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGNsZWFuTmFtZVxuXG4gICAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZUNvbXBvbmVudChjbGVhbk5hbWUpXG4gICAgfVxuICAgIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVNb2R1bGUoY2xlYW5OYW1lKVxuICAgIH1cbiAgICBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICByZXR1cm4gY29tbW9uTW9kdWxlc1tuYW1lXVxuICAgIH1cbiAgICBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICByZXR1cm4gY29tbW9uTW9kdWxlc1tuYW1lXVxuICAgIH1cbiAgfVxuICBjb25zdCBfbW9kdWxlID0geyBleHBvcnRzOiB7fX1cblxuICBsZXQgY2xlYW5OYW1lXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KGNsZWFuTmFtZSwgX21vZHVsZS5leHBvcnRzKVxuICB9XG4gIGVsc2UgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcblxuICAgIGZhY3RvcnkoX3JlcXVpcmUsIF9tb2R1bGUuZXhwb3J0cywgX21vZHVsZSlcblxuICAgIFZtLnJlZ2lzdGVyTW9kdWxlcyh7XG4gICAgICBbY2xlYW5OYW1lXTogX21vZHVsZS5leHBvcnRzXG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpc05vcm1hbE1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBjb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBfbW9kdWxlLmV4cG9ydHNcbiAgfVxuICBlbHNlIGlmIChpc05wbU1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBjb25zdCBleHBvcnRzID0gX21vZHVsZS5leHBvcnRzXG4gICAgaWYgKGV4cG9ydHMudGVtcGxhdGUgfHxcbiAgICAgICAgZXhwb3J0cy5zdHlsZSB8fFxuICAgICAgICBleHBvcnRzLm1ldGhvZHMpIHtcbiAgICAgIC8vIGRvd25ncmFkZSB0byBvbGQgZGVmaW5lIG1ldGhvZCAoZGVmaW5lKCdjb21wb25lbnROYW1lJywgZmFjdG9yeSkpXG4gICAgICAvLyB0aGUgZXhwb3J0cyBjb250YWluIG9uZSBrZXkgb2YgdGVtcGxhdGUsIHN0eWxlIG9yIG1ldGhvZHNcbiAgICAgIC8vIGJ1dCBpdCBoYXMgcmlzayEhIVxuICAgICAgdGhpcy5yZWdpc3RlckNvbXBvbmVudChjbGVhbk5hbWUsIGV4cG9ydHMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gX21vZHVsZS5leHBvcnRzXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAgKGFwcCwgbmFtZSwgY29uZmlnLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGJvb3RzdHJhcCBmb3IgJHtuYW1lfWApXG5cbiAgbGV0IGNsZWFuTmFtZVxuXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gIH1cbiAgZWxzZSBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgIC8vIGNoZWNrIGlmIGRlZmluZSBieSBvbGQgJ2RlZmluZScgbWV0aG9kXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFhcHAuY3VzdG9tQ29tcG9uZW50TWFwW2NsZWFuTmFtZV0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYEl0J3Mgbm90IGEgY29tcG9uZW50OiAke25hbWV9YClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgV3JvbmcgY29tcG9uZW50IG5hbWU6ICR7bmFtZX1gKVxuICB9XG5cbiAgY29uZmlnID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cblxuICBpZiAodHlwZW9mIGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgdHlwZW9mIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgIXNlbXZlci5zYXRpc2ZpZXMoY29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbixcbiAgICAgIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSlMgQnVuZGxlIHZlcnNpb246ICR7Y29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbn0gYCArXG4gICAgICBgbm90IGNvbXBhdGlibGUgd2l0aCAke2dsb2JhbC50cmFuc2Zvcm1lclZlcnNpb259YClcbiAgfVxuXG4gIGNvbnN0IF9jaGVja0Rvd25ncmFkZSA9IGRvd25ncmFkZS5jaGVjayhjb25maWcuZG93bmdyYWRlKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKF9jaGVja0Rvd25ncmFkZS5pc0Rvd25ncmFkZSkge1xuICAgIGFwcC5jYWxsVGFza3MoW3tcbiAgICAgIG1vZHVsZTogJ2luc3RhbmNlV3JhcCcsXG4gICAgICBtZXRob2Q6ICdlcnJvcicsXG4gICAgICBhcmdzOiBbXG4gICAgICAgIF9jaGVja0Rvd25ncmFkZS5lcnJvclR5cGUsXG4gICAgICAgIF9jaGVja0Rvd25ncmFkZS5jb2RlLFxuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuZXJyb3JNZXNzYWdlXG4gICAgICBdXG4gICAgfV0pXG4gICAgcmV0dXJuIG5ldyBFcnJvcihgRG93bmdyYWRlWyR7X2NoZWNrRG93bmdyYWRlLmNvZGV9XTogJHtfY2hlY2tEb3duZ3JhZGUuZXJyb3JNZXNzYWdlfWApXG4gIH1cblxuICBhcHAudm0gPSBuZXcgVm0oY2xlYW5OYW1lLCBudWxsLCB7IF9hcHA6IGFwcCB9LCBudWxsLCBkYXRhKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlciAodHlwZSwgb3B0aW9ucykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFJlZ2lzdGVyIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSBpbnN0YWxsIGxhc3Rlc3QgdHJhbnNmb3JtZXIuJylcbiAgdGhpcy5yZWdpc3RlckNvbXBvbmVudCh0eXBlLCBvcHRpb25zKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUuanNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTZW1WZXI7XG5cbi8vIFRoZSBkZWJ1ZyBmdW5jdGlvbiBpcyBleGNsdWRlZCBlbnRpcmVseSBmcm9tIHRoZSBtaW5pZmllZCB2ZXJzaW9uLlxuLyogbm9taW4gKi8gdmFyIGRlYnVnO1xuLyogbm9taW4gKi8gaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52ICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAgIC8qIG5vbWluICovIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpKVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgIC8qIG5vbWluICovIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAvKiBub21pbiAqLyBhcmdzLnVuc2hpZnQoJ1NFTVZFUicpO1xuICAgIC8qIG5vbWluICovIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIC8qIG5vbWluICovIH07XG4vKiBub21pbiAqLyBlbHNlXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuZXhwb3J0cy5TRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJztcblxudmFyIE1BWF9MRU5HVEggPSAyNTY7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG52YXIgcmUgPSBleHBvcnRzLnJlID0gW107XG52YXIgc3JjID0gZXhwb3J0cy5zcmMgPSBbXTtcbnZhciBSID0gMDtcblxuLy8gVGhlIGZvbGxvd2luZyBSZWd1bGFyIEV4cHJlc3Npb25zIGNhbiBiZSB1c2VkIGZvciB0b2tlbml6aW5nLFxuLy8gdmFsaWRhdGluZywgYW5kIHBhcnNpbmcgU2VtVmVyIHZlcnNpb24gc3RyaW5ncy5cblxuLy8gIyMgTnVtZXJpYyBJZGVudGlmaWVyXG4vLyBBIHNpbmdsZSBgMGAsIG9yIGEgbm9uLXplcm8gZGlnaXQgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIGRpZ2l0cy5cblxudmFyIE5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSXSA9ICcwfFsxLTldXFxcXGQqJztcbnZhciBOVU1FUklDSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdID0gJ1swLTldKyc7XG5cblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxudmFyIE5PTk5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSA9ICdcXFxcZCpbYS16QS1aLV1bYS16QS1aMC05LV0qJztcblxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxudmFyIE1BSU5WRVJTSU9OID0gUisrO1xuc3JjW01BSU5WRVJTSU9OXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgTUFJTlZFUlNJT05MT09TRSA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTkxPT1NFXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpJztcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvbiBJZGVudGlmaWVyXG4vLyBBIG51bWVyaWMgaWRlbnRpZmllciwgb3IgYSBub24tbnVtZXJpYyBpZGVudGlmaWVyLlxuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVIgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvblxuLy8gSHlwaGVuLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIHZlcnNpb25cbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgUFJFUkVMRUFTRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFXSA9ICcoPzotKCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICsgJykqKSknO1xuXG52YXIgUFJFUkVMRUFTRUxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VMT09TRV0gPSAnKD86LT8oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gKyAnKSopKSc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbnZhciBCVUlMRElERU5USUZJRVIgPSBSKys7XG5zcmNbQlVJTERJREVOVElGSUVSXSA9ICdbMC05QS1aYS16LV0rJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGFcbi8vIFBsdXMgc2lnbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgcGVyaW9kLXNlcGFyYXRlZCBidWlsZCBtZXRhZGF0YVxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBCVUlMRCA9IFIrKztcbnNyY1tCVUlMRF0gPSAnKD86XFxcXCsoJyArIHNyY1tCVUlMRElERU5USUZJRVJdICtcbiAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW0JVSUxESURFTlRJRklFUl0gKyAnKSopKSc7XG5cblxuLy8gIyMgRnVsbCBWZXJzaW9uIFN0cmluZ1xuLy8gQSBtYWluIHZlcnNpb24sIGZvbGxvd2VkIG9wdGlvbmFsbHkgYnkgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uIGFuZFxuLy8gYnVpbGQgbWV0YWRhdGEuXG5cbi8vIE5vdGUgdGhhdCB0aGUgb25seSBtYWpvciwgbWlub3IsIHBhdGNoLCBhbmQgcHJlLXJlbGVhc2Ugc2VjdGlvbnMgb2Zcbi8vIHRoZSB2ZXJzaW9uIHN0cmluZyBhcmUgY2FwdHVyaW5nIGdyb3Vwcy4gIFRoZSBidWlsZCBtZXRhZGF0YSBpcyBub3QgYVxuLy8gY2FwdHVyaW5nIGdyb3VwLCBiZWNhdXNlIGl0IHNob3VsZCBub3QgZXZlciBiZSB1c2VkIGluIHZlcnNpb25cbi8vIGNvbXBhcmlzb24uXG5cbnZhciBGVUxMID0gUisrO1xudmFyIEZVTExQTEFJTiA9ICd2PycgKyBzcmNbTUFJTlZFUlNJT05dICtcbiAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnNyY1tGVUxMXSA9ICdeJyArIEZVTExQTEFJTiArICckJztcblxuLy8gbGlrZSBmdWxsLCBidXQgYWxsb3dzIHYxLjIuMyBhbmQgPTEuMi4zLCB3aGljaCBwZW9wbGUgZG8gc29tZXRpbWVzLlxuLy8gYWxzbywgMS4wLjBhbHBoYTEgKHByZXJlbGVhc2Ugd2l0aG91dCB0aGUgaHlwaGVuKSB3aGljaCBpcyBwcmV0dHlcbi8vIGNvbW1vbiBpbiB0aGUgbnBtIHJlZ2lzdHJ5LlxudmFyIExPT1NFUExBSU4gPSAnW3Y9XFxcXHNdKicgKyBzcmNbTUFJTlZFUlNJT05MT09TRV0gK1xuICAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICc/JyArXG4gICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnZhciBMT09TRSA9IFIrKztcbnNyY1tMT09TRV0gPSAnXicgKyBMT09TRVBMQUlOICsgJyQnO1xuXG52YXIgR1RMVCA9IFIrKztcbnNyY1tHVExUXSA9ICcoKD86PHw+KT89PyknO1xuXG4vLyBTb21ldGhpbmcgbGlrZSBcIjIuKlwiIG9yIFwiMS4yLnhcIi5cbi8vIE5vdGUgdGhhdCBcIngueFwiIGlzIGEgdmFsaWQgeFJhbmdlIGlkZW50aWZlciwgbWVhbmluZyBcImFueSB2ZXJzaW9uXCJcbi8vIE9ubHkgdGhlIGZpcnN0IGl0ZW0gaXMgc3RyaWN0bHkgcmVxdWlyZWQuXG52YXIgWFJBTkdFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnfHh8WHxcXFxcKic7XG52YXIgWFJBTkdFSURFTlRJRklFUiA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnfHh8WHxcXFxcKic7XG5cbnZhciBYUkFOR0VQTEFJTiA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTl0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFUExBSU5MT09TRSA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTkxPT1NFXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0UgPSBSKys7XG5zcmNbWFJBTkdFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBYUkFOR0VMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbnZhciBMT05FVElMREUgPSBSKys7XG5zcmNbTE9ORVRJTERFXSA9ICcoPzp+Pj8pJztcblxudmFyIFRJTERFVFJJTSA9IFIrKztcbnNyY1tUSUxERVRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FVElMREVdICsgJ1xcXFxzKyc7XG5yZVtUSUxERVRSSU1dID0gbmV3IFJlZ0V4cChzcmNbVElMREVUUklNXSwgJ2cnKTtcbnZhciB0aWxkZVRyaW1SZXBsYWNlID0gJyQxfic7XG5cbnZhciBUSUxERSA9IFIrKztcbnNyY1tUSUxERV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgVElMREVMT09TRSA9IFIrKztcbnNyY1tUSUxERUxPT1NFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBDYXJldCByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwiYXQgbGVhc3QgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGhcIlxudmFyIExPTkVDQVJFVCA9IFIrKztcbnNyY1tMT05FQ0FSRVRdID0gJyg/OlxcXFxeKSc7XG5cbnZhciBDQVJFVFRSSU0gPSBSKys7XG5zcmNbQ0FSRVRUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORUNBUkVUXSArICdcXFxccysnO1xucmVbQ0FSRVRUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NBUkVUVFJJTV0sICdnJyk7XG52YXIgY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nO1xuXG52YXIgQ0FSRVQgPSBSKys7XG5zcmNbQ0FSRVRdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIENBUkVUTE9PU0UgPSBSKys7XG5zcmNbQ0FSRVRMT09TRV0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbnZhciBDT01QQVJBVE9STE9PU0UgPSBSKys7XG5zcmNbQ09NUEFSQVRPUkxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnKSR8XiQnO1xudmFyIENPTVBBUkFUT1IgPSBSKys7XG5zcmNbQ09NUEFSQVRPUl0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBGVUxMUExBSU4gKyAnKSR8XiQnO1xuXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG52YXIgQ09NUEFSQVRPUlRSSU0gPSBSKys7XG5zcmNbQ09NUEFSQVRPUlRSSU1dID0gJyhcXFxccyopJyArIHNyY1tHVExUXSArXG4gICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICd8JyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKSc7XG5cbi8vIHRoaXMgb25lIGhhcyB0byB1c2UgdGhlIC9nIGZsYWdcbnJlW0NPTVBBUkFUT1JUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NPTVBBUkFUT1JUUklNXSwgJ2cnKTtcbnZhciBjb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJztcblxuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxudmFyIEhZUEhFTlJBTkdFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxudmFyIEhZUEhFTlJBTkdFTE9PU0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VMT09TRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG52YXIgU1RBUiA9IFIrKztcbnNyY1tTVEFSXSA9ICcoPHw+KT89P1xcXFxzKlxcXFwqJztcblxuLy8gQ29tcGlsZSB0byBhY3R1YWwgcmVnZXhwIG9iamVjdHMuXG4vLyBBbGwgYXJlIGZsYWctZnJlZSwgdW5sZXNzIHRoZXkgd2VyZSBjcmVhdGVkIGFib3ZlIHdpdGggYSBmbGFnLlxuZm9yICh2YXIgaSA9IDA7IGkgPCBSOyBpKyspIHtcbiAgZGVidWcoaSwgc3JjW2ldKTtcbiAgaWYgKCFyZVtpXSlcbiAgICByZVtpXSA9IG5ldyBSZWdFeHAoc3JjW2ldKTtcbn1cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpXG4gICAgcmV0dXJuIHZlcnNpb247XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJylcbiAgICByZXR1cm4gbnVsbDtcblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciByID0gbG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXTtcbiAgaWYgKCFyLnRlc3QodmVyc2lvbikpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy52YWxpZCA9IHZhbGlkO1xuZnVuY3Rpb24gdmFsaWQodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHYgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbDtcbn1cblxuXG5leHBvcnRzLmNsZWFuID0gY2xlYW47XG5mdW5jdGlvbiBjbGVhbih2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcyA9IHBhcnNlKHZlcnNpb24udHJpbSgpLnJlcGxhY2UoL15bPXZdKy8sICcnKSwgbG9vc2UpO1xuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGw7XG59XG5cbmV4cG9ydHMuU2VtVmVyID0gU2VtVmVyO1xuXG5mdW5jdGlvbiBTZW1WZXIodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICBpZiAodmVyc2lvbi5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICBlbHNlXG4gICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2ZXJzaW9uIGlzIGxvbmdlciB0aGFuICcgKyBNQVhfTEVOR1RIICsgJyBjaGFyYWN0ZXJzJylcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG5cbiAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB2YXIgbSA9IHZlcnNpb24udHJpbSgpLm1hdGNoKGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF0pO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcblxuICB0aGlzLnJhdyA9IHZlcnNpb247XG5cbiAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgdGhpcy5tYWpvciA9ICttWzFdO1xuICB0aGlzLm1pbm9yID0gK21bMl07XG4gIHRoaXMucGF0Y2ggPSArbVszXTtcblxuICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtaW5vciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5wYXRjaCA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5wYXRjaCA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcblxuICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgaWYgKCFtWzRdKVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICBlbHNlXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcChmdW5jdGlvbihpZCkge1xuICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgdmFyIG51bSA9ICtpZDtcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZDtcbiAgICB9KTtcblxuICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdO1xuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5TZW1WZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnZlcnNpb24gPSB0aGlzLm1ham9yICsgJy4nICsgdGhpcy5taW5vciArICcuJyArIHRoaXMucGF0Y2g7XG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHRoaXMudmVyc2lvbiArPSAnLScgKyB0aGlzLnByZXJlbGVhc2Uuam9pbignLicpO1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvb3NlLCBvdGhlcik7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlTWFpbiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlUHJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gLTE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAxO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDA7XG5cbiAgdmFyIGkgPSAwO1xuICBkbyB7XG4gICAgdmFyIGEgPSB0aGlzLnByZXJlbGVhc2VbaV07XG4gICAgdmFyIGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldO1xuICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKTtcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAwO1xuICAgIGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAtMTtcbiAgICBlbHNlIGlmIChhID09PSBiKVxuICAgICAgY29udGludWU7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKTtcbiAgfSB3aGlsZSAoKytpKTtcbn07XG5cbi8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbi8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cblNlbVZlci5wcm90b3R5cGUuaW5jID0gZnVuY3Rpb24ocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IGEgcHJlcmVsZWFzZSwgaXQgd2lsbCBidW1wIHRvIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgIC8vIHByZXBhdGNoLlxuICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtYWpvcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgaWYgKHRoaXMubWlub3IgIT09IDAgfHwgdGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgLy8gSWYgaXQgaXMgYSBwcmUtcmVsZWFzZSBpdCB3aWxsIGJ1bXAgdXAgdG8gdGhlIHNhbWUgcGF0Y2ggdmVyc2lvbi5cbiAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucGF0Y2grKztcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAvLyAxLjAuMCBcInByZVwiIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbMF07XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrO1xuICAgICAgICAgICAgaSA9IC0yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gLTEpIC8vIGRpZG4ndCBpbmNyZW1lbnQgYW55dGhpbmdcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaCgwKTtcbiAgICAgIH1cbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2VbMF0gPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSlcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJyArIHJlbGVhc2UpO1xuICB9XG4gIHRoaXMuZm9ybWF0KCk7XG4gIHRoaXMucmF3ID0gdGhpcy52ZXJzaW9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmV4cG9ydHMuaW5jID0gaW5jO1xuZnVuY3Rpb24gaW5jKHZlcnNpb24sIHJlbGVhc2UsIGxvb3NlLCBpZGVudGlmaWVyKSB7XG4gIGlmICh0eXBlb2YobG9vc2UpID09PSAnc3RyaW5nJykge1xuICAgIGlkZW50aWZpZXIgPSBsb29zZTtcbiAgICBsb29zZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuZGlmZiA9IGRpZmY7XG5mdW5jdGlvbiBkaWZmKHZlcnNpb24xLCB2ZXJzaW9uMikge1xuICBpZiAoZXEodmVyc2lvbjEsIHZlcnNpb24yKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHZhciB2MSA9IHBhcnNlKHZlcnNpb24xKTtcbiAgICB2YXIgdjIgPSBwYXJzZSh2ZXJzaW9uMik7XG4gICAgaWYgKHYxLnByZXJlbGVhc2UubGVuZ3RoIHx8IHYyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAncHJlJytrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3ByZXJlbGVhc2UnO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jb21wYXJlSWRlbnRpZmllcnMgPSBjb21wYXJlSWRlbnRpZmllcnM7XG5cbnZhciBudW1lcmljID0gL15bMC05XSskLztcbmZ1bmN0aW9uIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHZhciBhbnVtID0gbnVtZXJpYy50ZXN0KGEpO1xuICB2YXIgYm51bSA9IG51bWVyaWMudGVzdChiKTtcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthO1xuICAgIGIgPSArYjtcbiAgfVxuXG4gIHJldHVybiAoYW51bSAmJiAhYm51bSkgPyAtMSA6XG4gICAgICAgICAoYm51bSAmJiAhYW51bSkgPyAxIDpcbiAgICAgICAgIGEgPCBiID8gLTEgOlxuICAgICAgICAgYSA+IGIgPyAxIDpcbiAgICAgICAgIDA7XG59XG5cbmV4cG9ydHMucmNvbXBhcmVJZGVudGlmaWVycyA9IHJjb21wYXJlSWRlbnRpZmllcnM7XG5mdW5jdGlvbiByY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhiLCBhKTtcbn1cblxuZXhwb3J0cy5tYWpvciA9IG1ham9yO1xuZnVuY3Rpb24gbWFqb3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yO1xufVxuXG5leHBvcnRzLm1pbm9yID0gbWlub3I7XG5mdW5jdGlvbiBtaW5vcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3I7XG59XG5cbmV4cG9ydHMucGF0Y2ggPSBwYXRjaDtcbmZ1bmN0aW9uIHBhdGNoKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5wYXRjaDtcbn1cblxuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUoYik7XG59XG5cbmV4cG9ydHMuY29tcGFyZUxvb3NlID0gY29tcGFyZUxvb3NlO1xuZnVuY3Rpb24gY29tcGFyZUxvb3NlKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgdHJ1ZSk7XG59XG5cbmV4cG9ydHMucmNvbXBhcmUgPSByY29tcGFyZTtcbmZ1bmN0aW9uIHJjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGIsIGEsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5zb3J0ID0gc29ydDtcbmZ1bmN0aW9uIHNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLnJzb3J0ID0gcnNvcnQ7XG5mdW5jdGlvbiByc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5yY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLmd0ID0gZ3Q7XG5mdW5jdGlvbiBndChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwO1xufVxuXG5leHBvcnRzLmx0ID0gbHQ7XG5mdW5jdGlvbiBsdChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwO1xufVxuXG5leHBvcnRzLmVxID0gZXE7XG5mdW5jdGlvbiBlcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDA7XG59XG5cbmV4cG9ydHMubmVxID0gbmVxO1xuZnVuY3Rpb24gbmVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMDtcbn1cblxuZXhwb3J0cy5ndGUgPSBndGU7XG5mdW5jdGlvbiBndGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDA7XG59XG5cbmV4cG9ydHMubHRlID0gbHRlO1xuZnVuY3Rpb24gbHRlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwO1xufVxuXG5leHBvcnRzLmNtcCA9IGNtcDtcbmZ1bmN0aW9uIGNtcChhLCBvcCwgYiwgbG9vc2UpIHtcbiAgdmFyIHJldDtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgPT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICchPT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhICE9PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnJzogY2FzZSAnPSc6IGNhc2UgJz09JzogcmV0ID0gZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICchPSc6IHJldCA9IG5lcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz4nOiByZXQgPSBndChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz49JzogcmV0ID0gZ3RlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPCc6IHJldCA9IGx0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPD0nOiByZXQgPSBsdGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9wZXJhdG9yOiAnICsgb3ApO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydHMuQ29tcGFyYXRvciA9IENvbXBhcmF0b3I7XG5mdW5jdGlvbiBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGlmIChjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgIGlmIChjb21wLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiBjb21wO1xuICAgIGVsc2VcbiAgICAgIGNvbXAgPSBjb21wLnZhbHVlO1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKVxuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG5cbiAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdGhpcy5wYXJzZShjb21wKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIGVsc2VcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb247XG5cbiAgZGVidWcoJ2NvbXAnLCB0aGlzKTtcbn1cblxudmFyIEFOWSA9IHt9O1xuQ29tcGFyYXRvci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihjb21wKSB7XG4gIHZhciByID0gdGhpcy5sb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIG0gPSBjb21wLm1hdGNoKHIpO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNvbXBhcmF0b3I6ICcgKyBjb21wKTtcblxuICB0aGlzLm9wZXJhdG9yID0gbVsxXTtcbiAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9JylcbiAgICB0aGlzLm9wZXJhdG9yID0gJyc7XG5cbiAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gIGlmICghbVsyXSlcbiAgICB0aGlzLnNlbXZlciA9IEFOWTtcbiAgZWxzZVxuICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLmxvb3NlKTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgZGVidWcoJ0NvbXBhcmF0b3IudGVzdCcsIHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5sb29zZSk7XG59O1xuXG5cbmV4cG9ydHMuUmFuZ2UgPSBSYW5nZTtcbmZ1bmN0aW9uIFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICBpZiAoKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpICYmIHJhbmdlLmxvb3NlID09PSBsb29zZSlcbiAgICByZXR1cm4gcmFuZ2U7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuXG4gIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gIHRoaXMucmF3ID0gcmFuZ2U7XG4gIHRoaXMuc2V0ID0gcmFuZ2Uuc3BsaXQoL1xccypcXHxcXHxcXHMqLykubWFwKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSYW5nZShyYW5nZS50cmltKCkpO1xuICB9LCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24oYykge1xuICAgIC8vIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHJlbGV2YW50IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICByZXR1cm4gYy5sZW5ndGg7XG4gIH0pO1xuXG4gIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICcgKyByYW5nZSk7XG4gIH1cblxuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5SYW5nZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmFuZ2UgPSB0aGlzLnNldC5tYXAoZnVuY3Rpb24oY29tcHMpIHtcbiAgICByZXR1cm4gY29tcHMuam9pbignICcpLnRyaW0oKTtcbiAgfSkuam9pbignfHwnKS50cmltKCk7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnBhcnNlUmFuZ2UgPSBmdW5jdGlvbihyYW5nZSkge1xuICB2YXIgbG9vc2UgPSB0aGlzLmxvb3NlO1xuICByYW5nZSA9IHJhbmdlLnRyaW0oKTtcbiAgZGVidWcoJ3JhbmdlJywgcmFuZ2UsIGxvb3NlKTtcbiAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gIHZhciBociA9IGxvb3NlID8gcmVbSFlQSEVOUkFOR0VMT09TRV0gOiByZVtIWVBIRU5SQU5HRV07XG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSk7XG4gIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKTtcbiAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSk7XG4gIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSwgcmVbQ09NUEFSQVRPUlRSSU1dKTtcblxuICAvLyBgfiAxLjIuM2AgPT4gYH4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW1RJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpO1xuXG4gIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSk7XG5cbiAgLy8gbm9ybWFsaXplIHNwYWNlc1xuICByYW5nZSA9IHJhbmdlLnNwbGl0KC9cXHMrLykuam9pbignICcpO1xuXG4gIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gIC8vIHJlYWR5IHRvIGJlIHNwbGl0IGludG8gY29tcGFyYXRvcnMuXG5cbiAgdmFyIGNvbXBSZSA9IGxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgc2V0ID0gcmFuZ2Uuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJykuc3BsaXQoL1xccysvKTtcbiAgaWYgKHRoaXMubG9vc2UpIHtcbiAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24oY29tcCkge1xuICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChjb21wUmUpO1xuICAgIH0pO1xuICB9XG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXQ7XG59O1xuXG4vLyBNb3N0bHkganVzdCBmb3IgdGVzdGluZyBhbmQgbGVnYWN5IEFQSSByZWFzb25zXG5leHBvcnRzLnRvQ29tcGFyYXRvcnMgPSB0b0NvbXBhcmF0b3JzO1xuZnVuY3Rpb24gdG9Db21wYXJhdG9ycyhyYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBjb21wLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9KS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gIH0pO1xufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NvbXAnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygndGlsZGVzJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdzdGFycycsIGNvbXApO1xuICByZXR1cm4gY29tcDtcbn1cblxuZnVuY3Rpb24gaXNYKGlkKSB7XG4gIHJldHVybiAhaWQgfHwgaWQudG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IGlkID09PSAnKic7XG59XG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjBcbi8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wXG5mdW5jdGlvbiByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKSB7XG4gIHZhciByID0gbG9vc2UgPyByZVtUSUxERUxPT1NFXSA6IHJlW1RJTERFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpXG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH0gZWxzZVxuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBsb29zZSk7XG4gIHZhciByID0gbG9vc2UgPyByZVtDQVJFVExPT1NFXSA6IHJlW0NBUkVUXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKTtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIGxvb3NlKTtcbiAgcmV0dXJuIGNvbXAuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKSB7XG4gIGNvbXAgPSBjb21wLnRyaW0oKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1hSQU5HRUxPT1NFXSA6IHJlW1hSQU5HRV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24ocmV0LCBndGx0LCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgeE0gPSBpc1goTSk7XG4gICAgdmFyIHhtID0geE0gfHwgaXNYKG0pO1xuICAgIHZhciB4cCA9IHhtIHx8IGlzWChwKTtcbiAgICB2YXIgYW55WCA9IHhwO1xuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKVxuICAgICAgZ3RsdCA9ICcnO1xuXG4gICAgaWYgKHhNKSB7XG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nIHx8IGd0bHQgPT09ICc8Jykge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGFsbG93ZWRcbiAgICAgICAgcmV0ID0gJzwwLjAuMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndGx0ICYmIGFueVgpIHtcbiAgICAgIC8vIHJlcGxhY2UgWCB3aXRoIDBcbiAgICAgIGlmICh4bSlcbiAgICAgICAgbSA9IDA7XG4gICAgICBpZiAoeHApXG4gICAgICAgIHAgPSAwO1xuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIC8vID4xLjIuMyA9PiA+PSAxLjIuNFxuICAgICAgICBndGx0ID0gJz49JztcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgICBtID0gMDtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8JztcbiAgICAgICAgaWYgKHhtKVxuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgfVxuXG4gICAgICByZXQgPSBndGx0ICsgTSArICcuJyArIG0gKyAnLicgKyBwO1xuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCd4UmFuZ2UgcmV0dXJuJywgcmV0KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBCZWNhdXNlICogaXMgQU5ELWVkIHdpdGggZXZlcnl0aGluZyBlbHNlIGluIHRoZSBjb21wYXJhdG9yLFxuLy8gYW5kICcnIG1lYW5zIFwiYW55IHZlcnNpb25cIiwganVzdCByZW1vdmUgdGhlICpzIGVudGlyZWx5LlxuZnVuY3Rpb24gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBsb29zZSk7XG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVtTVEFSXSwgJycpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVtIWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAgQW55IDMuNC54IHdpbGwgZG9cbi8vIDEuMiAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMFxuZnVuY3Rpb24gaHlwaGVuUmVwbGFjZSgkMCxcbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgICAgICAgICAgICAgICAgICAgICAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpIHtcblxuICBpZiAoaXNYKGZNKSlcbiAgICBmcm9tID0gJyc7XG4gIGVsc2UgaWYgKGlzWChmbSkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKGZwKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4nICsgZm0gKyAnLjAnO1xuICBlbHNlXG4gICAgZnJvbSA9ICc+PScgKyBmcm9tO1xuXG4gIGlmIChpc1godE0pKVxuICAgIHRvID0gJyc7XG4gIGVsc2UgaWYgKGlzWCh0bSkpXG4gICAgdG8gPSAnPCcgKyAoK3RNICsgMSkgKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWCh0cCkpXG4gICAgdG8gPSAnPCcgKyB0TSArICcuJyArICgrdG0gKyAxKSArICcuMCc7XG4gIGVsc2UgaWYgKHRwcilcbiAgICB0byA9ICc8PScgKyB0TSArICcuJyArIHRtICsgJy4nICsgdHAgKyAnLScgKyB0cHI7XG4gIGVsc2VcbiAgICB0byA9ICc8PScgKyB0bztcblxuICByZXR1cm4gKGZyb20gKyAnICcgKyB0bykudHJpbSgpO1xufVxuXG5cbi8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcblJhbmdlLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZXN0U2V0KHRoaXMuc2V0W2ldLCB2ZXJzaW9uKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIHRlc3RTZXQoc2V0LCB2ZXJzaW9uKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpO1xuICAgICAgaWYgKHNldFtpXS5zZW12ZXIgPT09IEFOWSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXI7XG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnNhdGlzZmllcyA9IHNhdGlzZmllcztcbmZ1bmN0aW9uIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKTtcbn1cblxuZXhwb3J0cy5tYXhTYXRpc2Z5aW5nID0gbWF4U2F0aXNmeWluZztcbmZ1bmN0aW9uIG1heFNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiByY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMubWluU2F0aXNmeWluZyA9IG1pblNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtaW5TYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMudmFsaWRSYW5nZSA9IHZhbGlkUmFuZ2U7XG5mdW5jdGlvbiB2YWxpZFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkucmFuZ2UgfHwgJyonO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuZXhwb3J0cy5sdHIgPSBsdHI7XG5mdW5jdGlvbiBsdHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIGxvb3NlKTtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuZXhwb3J0cy5ndHIgPSBndHI7XG5mdW5jdGlvbiBndHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5vdXRzaWRlID0gb3V0c2lkZTtcbmZ1bmN0aW9uIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIGxvb3NlKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB2YXIgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wO1xuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndDtcbiAgICAgIGx0ZWZuID0gbHRlO1xuICAgICAgbHRmbiA9IGx0O1xuICAgICAgY29tcCA9ICc+JztcbiAgICAgIGVjb21wID0gJz49JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0O1xuICAgICAgbHRlZm4gPSBndGU7XG4gICAgICBsdGZuID0gZ3Q7XG4gICAgICBjb21wID0gJzwnO1xuICAgICAgZWNvbXAgPSAnPD0nO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJyk7XG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV07XG5cbiAgICB2YXIgaGlnaCA9IG51bGw7XG4gICAgdmFyIGxvdyA9IG51bGw7XG5cbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yO1xuICAgICAgbG93ID0gbG93IHx8IGNvbXBhcmF0b3I7XG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvcjtcbiAgICAgIH0gZWxzZSBpZiAobHRmbihjb21wYXJhdG9yLnNlbXZlciwgbG93LnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgZWRnZSB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGEgb3BlcmF0b3IgdGhlbiBvdXIgdmVyc2lvblxuICAgIC8vIGlzbid0IG91dHNpZGUgaXRcbiAgICBpZiAoaGlnaC5vcGVyYXRvciA9PT0gY29tcCB8fCBoaWdoLm9wZXJhdG9yID09PSBlY29tcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuZnVuY3Rpb24gcHJlcmVsZWFzZSh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3NlbXZlci9zZW12ZXIuanNcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG59ICgpKVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCB0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCBDb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdFN0YXRlXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBidWlsZFxufSBmcm9tICcuL2NvbXBpbGVyJ1xuaW1wb3J0IHtcbiAgaW5pdEV2ZW50cyxcbiAgbWl4aW5FdmVudHNcbn0gZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQge1xuICByZWdpc3Rlck1vZHVsZXMsXG4gIHJlZ2lzdGVyTWV0aG9kc1xufSBmcm9tICcuLi9hcHAvcmVnaXN0ZXInXG5cbi8qKlxuICogVmlld01vZGVsIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICAgIGNvbXBvbmVudCBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50Vm0gICB3aGljaCBjb250YWlucyBfYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RWwgICByb290IGVsZW1lbnQgb3IgZnJhZyBibG9ja1xuICogQHBhcmFtIHtvYmplY3R9IG1lcmdlZERhdGEgZXh0ZXJuYWwgZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzIGV4dGVybmFsIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWbSAoXG4gIHR5cGUsXG4gIG9wdGlvbnMsXG4gIHBhcmVudFZtLFxuICBwYXJlbnRFbCxcbiAgbWVyZ2VkRGF0YSxcbiAgZXh0ZXJuYWxFdmVudHNcbikge1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRWbS5fcmVhbFBhcmVudCA/IHBhcmVudFZtLl9yZWFsUGFyZW50IDogcGFyZW50Vm1cbiAgdGhpcy5fYXBwID0gcGFyZW50Vm0uX2FwcFxuICBwYXJlbnRWbS5fY2hpbGRyZW5WbXMgJiYgcGFyZW50Vm0uX2NoaWxkcmVuVm1zLnB1c2godGhpcylcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXSB8fCB7fVxuICB9XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge31cblxuICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLl9tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9XG4gIHRoaXMuX2NvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCB7fVxuICB0aGlzLl9jc3MgPSBvcHRpb25zLnN0eWxlIHx8IHt9XG4gIHRoaXMuX2lkcyA9IHt9XG4gIHRoaXMuX3ZtRXZlbnRzID0ge31cbiAgdGhpcy5fY2hpbGRyZW5WbXMgPSBbXVxuICB0aGlzLl90eXBlID0gdHlwZVxuXG4gIC8vIGJpbmQgZXZlbnRzIGFuZCBsaWZlY3ljbGVzXG4gIGluaXRFdmVudHModGhpcywgZXh0ZXJuYWxFdmVudHMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJpbml0XCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazppbml0JylcbiAgdGhpcy5faW5pdGVkID0gdHJ1ZVxuXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIGV4dGVuZCh0aGlzLl9kYXRhLCBtZXJnZWREYXRhKVxuICB9XG4gIGluaXRTdGF0ZSh0aGlzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiY3JlYXRlZFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6Y3JlYXRlZCcpXG4gIHRoaXMuX2NyZWF0ZWQgPSB0cnVlXG5cbiAgLy8gYmFja3dhcmQgb2xkIHJlYWR5IGVudHJ5XG4gIGlmIChvcHRpb25zLm1ldGhvZHMgJiYgb3B0aW9ucy5tZXRob2RzLnJlYWR5KSB7XG4gICAgY29uc29sZS53YXJuKCdcImV4cG9ydHMubWV0aG9kcy5yZWFkeVwiIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3BsZWFzZSB1c2UgXCJleHBvcnRzLmNyZWF0ZWRcIiBpbnN0ZWFkJylcbiAgICBvcHRpb25zLm1ldGhvZHMucmVhZHkuY2FsbCh0aGlzKVxuICB9XG5cbiAgLy8gaWYgbm8gcGFyZW50RWxlbWVudCB0aGVuIHNwZWNpZnkgdGhlIGRvY3VtZW50RWxlbWVudFxuICB0aGlzLl9wYXJlbnRFbCA9IHBhcmVudEVsIHx8IHRoaXMuX2FwcC5kb2MuZG9jdW1lbnRFbGVtZW50XG4gIGJ1aWxkKHRoaXMpXG59XG5cbm1peGluRXZlbnRzKFZtLnByb3RvdHlwZSlcblxuZXh0ZW5kKFZtLCB7XG4gIHJlZ2lzdGVyTW9kdWxlcyxcbiAgcmVnaXN0ZXJNZXRob2RzXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJ1xuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7XG4gIG9ic2VydmUsXG4gIHByb3h5LFxuICB1bnByb3h5XG59IGZyb20gJy4vb2JzZXJ2ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdXG4gIGluaXREYXRhKHZtKVxuICBpbml0Q29tcHV0ZWQodm0pXG4gIGluaXRNZXRob2RzKHZtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIGxldCBkYXRhID0gdm0uX2RhdGFcblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge31cbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBwcm94eSh2bSwga2V5c1tpXSlcbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB2bSlcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtKSB7XG4gIGNvbnN0IGNvbXB1dGVkID0gdm0uX2NvbXB1dGVkXG4gIGlmIChjb21wdXRlZCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgY29uc3QgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGVmLmdldCA9IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLCB2bSlcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgICAgID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICAgIDogYmluZCh1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICAgIGRlZi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgICAgID8gYmluZCh1c2VyRGVmLnNldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwgZGVmKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIgKGdldHRlciwgb3duZXIpIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICBsYXp5OiB0cnVlXG4gIH0pXG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKVxuICAgIH1cbiAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgd2F0Y2hlci5kZXBlbmQoKVxuICAgIH1cbiAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWV0aG9kcyAodm0pIHtcbiAgY29uc3QgbWV0aG9kcyA9IHZtLl9tZXRob2RzXG4gIGlmIChtZXRob2RzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHZtW2tleV0gPSBtZXRob2RzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL3N0YXRlLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbi8vIGltcG9ydCB7IHB1c2hXYXRjaGVyIH0gZnJvbSAnLi9iYXRjaGVyJ1xuaW1wb3J0IHtcbiAgd2FybixcbiAgcmVtb3ZlLFxuICBleHRlbmQsXG4gIGlzT2JqZWN0LFxuICBwYXJzZVBhdGgsXG4gIF9TZXQgYXMgU2V0XG59IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5sZXQgcHJldlRhcmdldFxuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGV4cE9yRm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAgICAgICAgICAgICAgIC0ge0FycmF5fSBmaWx0ZXJzXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdHdvV2F5XG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZGVlcFxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHVzZXJcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBzeW5jXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gbGF6eVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcHJlUHJvY2Vzc11cbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3Bvc3RQcm9jZXNzXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2F0Y2hlciAodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKSB7XG4gIC8vIG1peCBpbiBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgZXh0ZW5kKHRoaXMsIG9wdGlvbnMpXG4gIH1cbiAgY29uc3QgaXNGbiA9IHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nXG4gIHRoaXMudm0gPSB2bVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKVxuICB0aGlzLmV4cHJlc3Npb24gPSBleHBPckZuXG4gIHRoaXMuY2IgPSBjYlxuICB0aGlzLmlkID0gKyt1aWQgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWVcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eSAvLyBmb3IgbGF6eSB3YXRjaGVyc1xuICB0aGlzLmRlcHMgPSBbXVxuICB0aGlzLm5ld0RlcHMgPSBbXVxuICB0aGlzLmRlcElkcyA9IG5ldyBTZXQoKVxuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBTZXQoKVxuICAvLyBwYXJzZSBleHByZXNzaW9uIGZvciBnZXR0ZXJcbiAgaWYgKGlzRm4pIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm5cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKVxuICAgIGlmICghdGhpcy5nZXR0ZXIpIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gZnVuY3Rpb24gKCkge31cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ0ZhaWxlZCB3YXRjaGluZyBwYXRoOiAnICsgZXhwT3JGbiArXG4gICAgICAgICdXYXRjaGVyIG9ubHkgYWNjZXB0cyBzaW1wbGUgZG90LWRlbGltaXRlZCBwYXRocy4gJyArXG4gICAgICAgICdGb3IgZnVsbCBjb250cm9sLCB1c2UgYSBmdW5jdGlvbiBpbnN0ZWFkLicsXG4gICAgICAgIHZtXG4gICAgICApXG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKVxuICAvLyBzdGF0ZSBmb3IgYXZvaWRpbmcgZmFsc2UgdHJpZ2dlcnMgZm9yIGRlZXAgYW5kIEFycmF5XG4gIC8vIHdhdGNoZXJzIGR1cmluZyB2bS5fZGlnZXN0KClcbiAgdGhpcy5xdWV1ZWQgPSB0aGlzLnNoYWxsb3cgPSBmYWxzZVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYmVmb3JlR2V0KClcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHRoaXMudm0sIHRoaXMudm0pXG4gIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgaWYgKHRoaXMuZGVlcCkge1xuICAgIHRyYXZlcnNlKHZhbHVlKVxuICB9XG4gIHRoaXMuYWZ0ZXJHZXQoKVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBQcmVwYXJlIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYmVmb3JlR2V0ID0gZnVuY3Rpb24gKCkge1xuICBwcmV2VGFyZ2V0ID0gRGVwLnRhcmdldFxuICBEZXAudGFyZ2V0ID0gdGhpc1xufVxuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtEZXB9IGRlcFxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIChkZXApIHtcbiAgY29uc3QgaWQgPSBkZXAuaWRcbiAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKVxuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcClcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFmdGVyR2V0ID0gZnVuY3Rpb24gKCkge1xuICBEZXAudGFyZ2V0ID0gcHJldlRhcmdldFxuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGRlcCA9IHRoaXMuZGVwc1tpXVxuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcylcbiAgICB9XG4gIH1cbiAgbGV0IHRtcCA9IHRoaXMuZGVwSWRzXG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHNcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKVxuICB0bXAgPSB0aGlzLmRlcHNcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzXG4gIHRoaXMubmV3RGVwcyA9IHRtcFxuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMFxufVxuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNoYWxsb3dcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoc2hhbGxvdykge1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJ1bigpXG4gIH1cbiAgLy8gfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgLy8gICB0aGlzLnJ1bigpXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gIC8vICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgLy8gICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZFxuICAvLyAgICAgPyBzaGFsbG93XG4gIC8vICAgICAgID8gdGhpcy5zaGFsbG93XG4gIC8vICAgICAgIDogZmFsc2VcbiAgLy8gICAgIDogISFzaGFsbG93XG4gIC8vICAgdGhpcy5xdWV1ZWQgPSB0cnVlXG4gIC8vICAgcHVzaFdhdGNoZXIodGhpcylcbiAgLy8gfVxufVxuXG4vKipcbiAqIEJhdGNoZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBiYXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldCgpXG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkOyBidXQgb25seSBkbyBzbyBpZiB0aGlzIGlzIGFcbiAgICAgIC8vIG5vbi1zaGFsbG93IHVwZGF0ZSAoY2F1c2VkIGJ5IGEgdm0gZGlnZXN0KS5cbiAgICAgICgoaXNPYmplY3QodmFsdWUpIHx8IHRoaXMuZGVlcCkgJiYgIXRoaXMuc2hhbGxvdylcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgIH1cbiAgICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGF2b2lkIG92ZXJ3cml0aW5nIGFub3RoZXIgd2F0Y2hlciB0aGF0IGlzIGJlaW5nXG4gIC8vIGNvbGxlY3RlZC5cbiAgY29uc3QgY3VycmVudCA9IERlcC50YXJnZXRcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KClcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlXG4gIERlcC50YXJnZXQgPSBjdXJyZW50XG59XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJjcmliZXIgbGlzdC5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkIG9yIGlzIHBlcmZvcm1pbmcgYSB2LWZvclxuICAgIC8vIHJlLXJlbmRlciAodGhlIHdhdGNoZXIgbGlzdCBpcyB0aGVuIGZpbHRlcmVkIGJ5IHYtZm9yKS5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXRoaXMudm0uX3ZGb3JSZW1vdmluZykge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKVxuICAgIH1cbiAgICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLnZtID0gdGhpcy5jYiA9IHRoaXMudmFsdWUgPSBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWNydXNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7U2V0fSBzZWVuXG4gKi9cblxuY29uc3Qgc2Vlbk9iamVjdHMgPSBuZXcgU2V0KClcbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgbGV0IGksIGtleXMsIGlzQSwgaXNPXG4gIGlmICghc2Vlbikge1xuICAgIHNlZW4gPSBzZWVuT2JqZWN0c1xuICAgIHNlZW4uY2xlYXIoKVxuICB9XG4gIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKVxuICBpc08gPSBpc09iamVjdCh2YWwpXG4gIGlmIChpc0EgfHwgaXNPKSB7XG4gICAgaWYgKHZhbC5fX29iX18pIHtcbiAgICAgIGNvbnN0IGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWRcbiAgICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLmFkZChkZXBJZClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQSkge1xuICAgICAgaSA9IHZhbC5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtpXSwgc2VlbilcbiAgICB9IGVsc2UgaWYgKGlzTykge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbClcbiAgICAgIGkgPSBrZXlzLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrK1xuICB0aGlzLnN1YnMgPSBbXVxufVxuXG4vLyB0aGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXG4vLyB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZCBhdCBhbnkgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsXG5cbi8qKlxuICogQWRkIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbkRlcC5wcm90b3R5cGUuYWRkU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpXG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbkRlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpXG59XG5cbi8qKlxuICogQWRkIHNlbGYgYXMgYSBkZXBlbmRlbmN5IHRvIHRoZSB0YXJnZXQgd2F0Y2hlci5cbiAqL1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldC5hZGREZXAodGhpcylcbn1cblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIGNvbnN0IHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKVxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9kZXAuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuaW1wb3J0IHsgYXJyYXlNZXRob2RzIH0gZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7XG4gIGRlZixcbiAgcmVtb3ZlLFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaGFzUHJvdG8sXG4gIGhhc093bixcbiAgaXNSZXNlcnZlZFxufSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpXG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBhcmUgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoZXMgdXBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gdmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuZGVwID0gbmV3IERlcCgpXG4gIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IGF1Z21lbnQgPSBoYXNQcm90b1xuICAgICAgPyBwcm90b0F1Z21lbnRcbiAgICAgIDogY29weUF1Z21lbnRcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cylcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpXG4gIH1cbn1cblxuLy8gSW5zdGFuY2UgbWV0aG9kc1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICB0aGlzLmNvbnZlcnQoa2V5LCBvYmpba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcHJvcGVydHkgaW50byBnZXR0ZXIvc2V0dGVyIHNvIHdlIGNhbiBlbWl0XG4gKiB0aGUgZXZlbnRzIHdoZW4gdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkL2NoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICBkZWZpbmVSZWFjdGl2ZSh0aGlzLnZhbHVlLCBrZXksIHZhbClcbn1cblxuLyoqXG4gKiBBZGQgYW4gb3duZXIgdm0sIHNvIHRoYXQgd2hlbiAkc2V0LyRkZWxldGUgbXV0YXRpb25zXG4gKiBoYXBwZW4gd2UgY2FuIG5vdGlmeSBvd25lciB2bXMgdG8gcHJveHkgdGhlIGtleXMgYW5kXG4gKiBkaWdlc3QgdGhlIHdhdGNoZXJzLiBUaGlzIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIG9iamVjdFxuICogaXMgb2JzZXJ2ZWQgYXMgYW4gaW5zdGFuY2UncyByb290ICRkYXRhLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5hZGRWbSA9IGZ1bmN0aW9uICh2bSkge1xuICAodGhpcy52bXMgfHwgKHRoaXMudm1zID0gW10pKS5wdXNoKHZtKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBvd25lciB2bS4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0IGlzXG4gKiBzd2FwcGVkIG91dCBhcyBhbiBpbnN0YW5jZSdzICRkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUucmVtb3ZlVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgcmVtb3ZlKHRoaXMudm1zLCB2bSlcbn1cblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHNyY1xuICovXG5cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyY1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqL1xuXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKVxuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEByZXR1cm4ge09ic2VydmVyfHVuZGVmaW5lZH1cbiAqIEBzdGF0aWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIHZtKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IG9iXG4gIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgIG9iID0gdmFsdWUuX19vYl9fXG4gIH0gZWxzZSBpZiAoXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSlcbiAgfVxuICBpZiAob2IgJiYgdm0pIHtcbiAgICBvYi5hZGRWbSh2bSlcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUgKG9iaiwga2V5LCB2YWwpIHtcbiAgY29uc3QgZGVwID0gbmV3IERlcCgpXG5cbiAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KVxuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldFxuICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXRcblxuICBsZXQgY2hpbGRPYiA9IG9ic2VydmUodmFsKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyICgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpXG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKClcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBlLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZSA9IHZhbHVlW2ldXG4gICAgICAgICAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsXG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gb2JzZXJ2ZShuZXdWYWwpXG4gICAgICBkZXAubm90aWZ5KClcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCAob2JqLCBrZXksIHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5zcGxpY2Uoa2V5LCAxLCB2YWwpXG4gIH1cbiAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIGlmIChvYmouX2lzVnVlKSB7XG4gICAgc2V0KG9iai5fZGF0YSwga2V5LCB2YWwpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIG9iLmNvbnZlcnQoa2V5LCB2YWwpXG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHByb3h5KHZtLCBrZXkpXG4gICAgICB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbCAob2JqLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIG9ialtrZXldXG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuXG4gIGlmICghb2IpIHtcbiAgICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgICAgZGVsZXRlIG9iai5fZGF0YVtrZXldXG4gICAgICBvYmouJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgdW5wcm94eSh2bSwga2V5KVxuICAgICAgdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgS0VZX1dPUkRTID0gWyckaW5kZXgnLCAnJHZhbHVlJywgJyRldmVudCddXG5leHBvcnQgZnVuY3Rpb24gcHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKEtFWV9XT1JEUy5pbmRleE9mKGtleSkgPiAtMSB8fCAhaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICAgICAgcmV0dXJuIHZtLl9kYXRhW2tleV1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICAgICAgdm0uX2RhdGFba2V5XSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBkZWxldGUgdm1ba2V5XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9vYnNlcnZlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IGRlZiB9IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGVcbmV4cG9ydCBjb25zdCBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pXG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cblxuO1tcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl1cbi5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gIGNvbnN0IG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgLy8gYXZvaWQgbGVha2luZyBhcmd1bWVudHM6XG4gICAgLy8gaHR0cDovL2pzcGVyZi5jb20vY2xvc3VyZS13aXRoLWFyZ3VtZW50c1xuICAgIGxldCBpID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGNvbnN0IGFyZ3MgPSBuZXcgQXJyYXkoaSlcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgY29uc3Qgb2IgPSB0aGlzLl9fb2JfX1xuICAgIGxldCBpbnNlcnRlZFxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMilcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpXG4gICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgIG9iLmRlcC5ub3RpZnkoKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSlcbn0pXG5cbi8qKlxuICogU3dhcCB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXggd2l0aCBhIG5ldyB2YWx1ZVxuICogYW5kIGVtaXRzIGNvcnJlc3BvbmRpbmcgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7Kn0gLSByZXBsYWNlZCBlbGVtZW50XG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHNldCcsXG4gIGZ1bmN0aW9uICRzZXQgKGluZGV4LCB2YWwpIHtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gaW5kZXggKyAxXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgdmFsKVswXVxuICB9XG4pXG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJlbW92ZSB0aGUgZWxlbWVudCBhdCBnaXZlbiBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHJlbW92ZScsXG4gIGZ1bmN0aW9uICRyZW1vdmUgKGluZGV4KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuXG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mKGluZGV4KVxuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9hcnJheS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIHRlbXBsYXRlIHBhcnNlciAmIGRhdGEtYmluZGluZyBwcm9jZXNzXG4gKlxuICogcmVxdWlyZWQ6XG4gKiBpbmRleC5qczogVm1cbiAqIGRvbS1oZWxwZXIuanM6IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUJsb2NrXG4gKiBkb20taGVscGVyLmpzOiBhdHRhY2hUYXJnZXQsIG1vdmVUYXJnZXQsIHJlbW92ZVRhcmdldFxuICogZGlyZWN0aXZlLmpzOiBiaW5kRWxlbWVudCwgYmluZFN1YlZtLCBzZXRJZCwgd2F0Y2hcbiAqIGV2ZW50cy5qczogJG9uXG4gKi9cblxuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge1xuICBpbml0RGF0YSxcbiAgaW5pdENvbXB1dGVkXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBiaW5kRWxlbWVudCxcbiAgc2V0SWQsXG4gIGJpbmRTdWJWbSxcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCxcbiAgYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zLFxuICB3YXRjaFxufSBmcm9tICcuL2RpcmVjdGl2ZSdcbmltcG9ydCB7XG4gIGNyZWF0ZUJsb2NrLFxuICBjcmVhdGVCb2R5LFxuICBjcmVhdGVFbGVtZW50LFxuICBhdHRhY2hUYXJnZXQsXG4gIG1vdmVUYXJnZXQsXG4gIHJlbW92ZVRhcmdldFxufSBmcm9tICcuL2RvbS1oZWxwZXInXG5cbi8qKlxuICogYnVpbGQoZXh0ZXJuYWxEaXJzKVxuICogICBjcmVhdGVWbSgpXG4gKiAgIG1lcmdlKGV4dGVybmFsRGlycywgZGlycylcbiAqICAgY29tcGlsZSh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICBpZiAodHlwZSBpcyBjb250ZW50KSBjcmVhdGUgY29udGVudE5vZGVcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1mb3IpIGZvcmVhY2ggLT4gY3JlYXRlIGNvbnRleHRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0Rm9yLCBwYXJlbnROb2RlKTogZGlmZihsaXN0KSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWlmKSBhc3NlcnRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0SWYsIHBhcmVudE5vZGUpOiB0b2dnbGUoc2hvd24pIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBkeW5hbWljKVxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXREeW5hbWljVHlwZSwgcGFyZW50Tm9kZSk6IHdhdGNoKHR5cGUpIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBjdXN0b20pXG4gKiAgICAgICBhZGRDaGlsZFZtKHZtLCBwYXJlbnRWbSlcbiAqICAgICAgIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBuYXRpdmUpXG4gKiAgICAgICBzZXQoZGlycyk6IHVwZGF0ZShpZC9hdHRyL3N0eWxlL2NsYXNzKSBvbmNoYW5nZVxuICogICAgICAgYXBwZW5kKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkICh2bSkge1xuICBjb25zdCBvcHQgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCB0ZW1wbGF0ZSA9IG9wdC50ZW1wbGF0ZSB8fCB7fVxuXG4gIGlmIChvcHQucmVwbGFjZSkge1xuICAgIGlmICh0ZW1wbGF0ZS5jaGlsZHJlbiAmJiB0ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuWzBdLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZSh2bSwgdGVtcGxhdGUuY2hpbGRyZW4sIHZtLl9wYXJlbnRFbClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY29tcGlsZSh2bSwgdGVtcGxhdGUsIHZtLl9wYXJlbnRFbClcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwicmVhZHlcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB2bS5fcmVhZHkgPSB0cnVlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudHMgYnkgY2hpbGQgb3IgY2hpbGRyZW4gYW5kIGFwcGVuZCB0byBwYXJlbnQgZWxlbWVudHMuXG4gKiBSb290IGVsZW1lbnQgaW5mbyB3b3VsZCBiZSBtZXJnZWQgaWYgaGFzLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlIGFuIGFycmF5XG4gKiBpZiB0aGUgcm9vdCBlbGVtZW50IHdpdGggb3B0aW9ucy5yZXBsYWNlIGhhcyBub3Qgb25seSBvbmUgY2hpbGQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuXG4gIGlmIChhcHAubGFzdFNpZ25hbCA9PT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0YXJnZXRJc0ZyYWdtZW50KHRhcmdldCkpIHtcbiAgICBjb21waWxlRnJhZ21lbnQodm0sIHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBtZXRhID0gbWV0YSB8fCB7fVxuICBpZiAodGFyZ2V0SXNDb250ZW50KHRhcmdldCkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwiY29udGVudFwiIGJsb2NrIGJ5JywgdGFyZ2V0KVxuICAgIHZtLl9jb250ZW50ID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0TmVlZENoZWNrUmVwZWF0KHRhcmdldCwgbWV0YSkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwicmVwZWF0XCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgY29tcGlsZVJlcGVhdCh2bSwgdGFyZ2V0LCBkZXN0KVxuICAgIHJldHVyblxuICB9XG4gIGlmICh0YXJnZXROZWVkQ2hlY2tTaG93bih0YXJnZXQsIG1ldGEpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcImlmXCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgY29tcGlsZVNob3duKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgdHlwZUdldHRlciA9IG1ldGEudHlwZSB8fCB0YXJnZXQudHlwZVxuICBpZiAodGFyZ2V0TmVlZENoZWNrVHlwZSh0eXBlR2V0dGVyLCBtZXRhKSkge1xuICAgIGNvbXBpbGVUeXBlKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXJcbiAgY29uc3QgY29tcG9uZW50ID0gdGFyZ2V0SXNDb21wb3NlZCh2bSwgdGFyZ2V0LCB0eXBlKVxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBjb21wb3NlZCBjb21wb25lbnQgYnknLCB0YXJnZXQpXG4gICAgY29tcGlsZUN1c3RvbUNvbXBvbmVudCh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBuYXRpdmUgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICBjb21waWxlTmF0aXZlQ29tcG9uZW50KHZtLCB0YXJnZXQsIGRlc3QsIHR5cGUpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IGlzIGEgZnJhZ21lbnQgKGFuIGFycmF5KS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzRnJhZ21lbnQgKHRhcmdldCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IHR5cGUgaXMgY29udGVudC9zbG90LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0SXNDb250ZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC50eXBlID09PSAnY29udGVudCcgfHwgdGFyZ2V0LnR5cGUgPT09ICdzbG90J1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBsaXN0LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrUmVwZWF0ICh0YXJnZXQsIG1ldGEpIHtcbiAgcmV0dXJuICFtZXRhLmhhc093blByb3BlcnR5KCdyZXBlYXQnKSAmJiB0YXJnZXQucmVwZWF0XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGJvb2xlYW4gdmFsdWUuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXROZWVkQ2hlY2tTaG93biAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgnc2hvd24nKSAmJiB0YXJnZXQuc2hvd25cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgZHluYW1pYyB0eXBlLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ3xmdW5jdGlvbn0gdHlwZUdldHRlclxuICogQHBhcmFtICB7b2JqZWN0fSAgICAgICAgICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXROZWVkQ2hlY2tUeXBlICh0eXBlR2V0dGVyLCBtZXRhKSB7XG4gIHJldHVybiAodHlwZW9mIHR5cGVHZXR0ZXIgPT09ICdmdW5jdGlvbicpICYmICFtZXRhLmhhc093blByb3BlcnR5KCd0eXBlJylcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGtpbmQgb2YgY29tcG9uZW50IGlzIGNvbXBvc2VkLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29tcG9zZWQgKHZtLCB0YXJnZXQsIHR5cGUpIHtcbiAgbGV0IGNvbXBvbmVudFxuICBpZiAodm0uX2FwcCAmJiB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcCkge1xuICAgIGNvbXBvbmVudCA9IHZtLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwW3R5cGVdXG4gIH1cbiAgaWYgKHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnQgPSB2bS5fb3B0aW9ucy5jb21wb25lbnRzW3R5cGVdXG4gIH1cbiAgaWYgKHRhcmdldC5jb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQgPSBjb21wb25lbnQgfHwge31cbiAgfVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cbi8qKlxuICogQ29tcGlsZSBhIGxpc3Qgb2YgdGFyZ2V0cy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUZyYWdtZW50ICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICB0YXJnZXQuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjb21waWxlKHZtLCBjaGlsZCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICB9KVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCByZXBlYXQgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVSZXBlYXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgY29uc3QgcmVwZWF0ID0gdGFyZ2V0LnJlcGVhdFxuICBjb25zdCBvbGRTdHlsZSA9IHR5cGVvZiByZXBlYXQgPT09ICdmdW5jdGlvbidcbiAgbGV0IGdldHRlciA9IHJlcGVhdC5nZXR0ZXIgfHwgcmVwZWF0LmV4cHJlc3Npb24gfHwgcmVwZWF0XG4gIGlmICh0eXBlb2YgZ2V0dGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgZ2V0dGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfVxuICB9XG4gIGNvbnN0IGtleSA9IHJlcGVhdC5rZXkgfHwgJyRpbmRleCdcbiAgY29uc3QgdmFsdWUgPSByZXBlYXQudmFsdWUgfHwgJyR2YWx1ZSdcbiAgY29uc3QgdHJhY2tCeSA9IHJlcGVhdC50cmFja0J5IHx8IHRhcmdldC50cmFja0J5IHx8XG4gICAgKHRhcmdldC5hdHRyICYmIHRhcmdldC5hdHRyLnRyYWNrQnkpXG5cbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gIGZyYWdCbG9jay5jaGlsZHJlbiA9IFtdXG4gIGZyYWdCbG9jay5kYXRhID0gW11cbiAgZnJhZ0Jsb2NrLnZtcyA9IFtdXG5cbiAgYmluZFJlcGVhdCh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIHsgZ2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZSB9KVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCBpZiBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVTaG93biAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBuZXdNZXRhID0geyBzaG93bjogdHJ1ZSB9XG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuXG4gIGlmIChkZXN0LmVsZW1lbnQgJiYgZGVzdC5jaGlsZHJlbikge1xuICAgIGRlc3QuY2hpbGRyZW4ucHVzaChmcmFnQmxvY2spXG4gIH1cblxuICBpZiAobWV0YS5yZXBlYXQpIHtcbiAgICBuZXdNZXRhLnJlcGVhdCA9IG1ldGEucmVwZWF0XG4gIH1cblxuICBiaW5kU2hvd24odm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCBkeW5hbWljIGNvbXBvbmVudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgZGVzdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gdHlwZUdldHRlclxuICovXG5mdW5jdGlvbiBjb21waWxlVHlwZSAodm0sIHRhcmdldCwgZGVzdCwgdHlwZUdldHRlciwgbWV0YSkge1xuICBjb25zdCB0eXBlID0gdHlwZUdldHRlci5jYWxsKHZtKVxuICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZSB9LCBtZXRhKVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgd2F0Y2godm0sIHR5cGVHZXR0ZXIsICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld01ldGEgPSBleHRlbmQoeyB0eXBlOiB2YWx1ZSB9LCBtZXRhKVxuICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxuICB9KVxuXG4gIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBjb21wb3NlZCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVDdXN0b21Db21wb25lbnQgKHZtLCBjb21wb25lbnQsIHRhcmdldCwgZGVzdCwgdHlwZSwgbWV0YSkge1xuICBjb25zdCBDdG9yID0gdm0uY29uc3RydWN0b3JcbiAgY29uc3Qgc3ViVm0gPSBuZXcgQ3Rvcih0eXBlLCBjb21wb25lbnQsIHZtLCBkZXN0LCB1bmRlZmluZWQsIHtcbiAgICAnaG9vazppbml0JzogZnVuY3Rpb24gKCkge1xuICAgICAgc2V0SWQodm0sIG51bGwsIHRhcmdldC5pZCwgdGhpcylcbiAgICAgIC8vIGJpbmQgdGVtcGxhdGUgZWFybGllciBiZWNhdXNlIG9mIGxpZmVjeWNsZSBpc3N1ZXNcbiAgICAgIHRoaXMuX2V4dGVybmFsQmluZGluZyA9IHtcbiAgICAgICAgcGFyZW50OiB2bSxcbiAgICAgICAgdGVtcGxhdGU6IHRhcmdldFxuICAgICAgfVxuICAgIH0sXG4gICAgJ2hvb2s6Y3JlYXRlZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGJpbmRTdWJWbSh2bSwgdGhpcywgdGFyZ2V0LCBtZXRhLnJlcGVhdClcbiAgICB9LFxuICAgICdob29rOnJlYWR5JzogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpIHtcbiAgICAgICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0YXJnZXQsIHRoaXMuX2NvbnRlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkKHZtLCBzdWJWbSwgdGFyZ2V0KVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGVsZW1lbnQgZnJvbSB0ZW1wbGF0ZSBhbmQgYXR0YWNoIHRvIHRoZSBkZXN0IGlmIG5lZWRlZC5cbiAqIFRoZSB0aW1lIHRvIGF0dGFjaCBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIG1vZGUgc3RhdHVzIGlzIG5vZGUgb3IgdHJlZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlTmF0aXZlQ29tcG9uZW50ICh2bSwgdGVtcGxhdGUsIGRlc3QsIHR5cGUpIHtcbiAgYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zKHRlbXBsYXRlKVxuXG4gIGxldCBlbGVtZW50XG4gIGlmIChkZXN0LnJlZiA9PT0gJ19kb2N1bWVudEVsZW1lbnQnKSB7XG4gICAgLy8gaWYgaXRzIHBhcmVudCBpcyBkb2N1bWVudEVsZW1lbnQgdGhlbiBpdCdzIGEgYm9keVxuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gY3JlYXRlIGJvZHkgZm9yICR7dHlwZX1gKVxuICAgIGVsZW1lbnQgPSBjcmVhdGVCb2R5KHZtLCB0eXBlKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gY3JlYXRlIGVsZW1lbnQgZm9yICR7dHlwZX1gKVxuICAgIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHZtLCB0eXBlKVxuICB9XG5cbiAgaWYgKCF2bS5fcm9vdEVsKSB7XG4gICAgdm0uX3Jvb3RFbCA9IGVsZW1lbnRcbiAgICAvLyBiaW5kIGV2ZW50IGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgY29uc3QgYmluZGluZyA9IHZtLl9leHRlcm5hbEJpbmRpbmcgfHwge31cbiAgICBjb25zdCB0YXJnZXQgPSBiaW5kaW5nLnRlbXBsYXRlXG4gICAgY29uc3QgcGFyZW50Vm0gPSBiaW5kaW5nLnBhcmVudFxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmV2ZW50cyAmJiBwYXJlbnRWbSAmJiBlbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IHR5cGUgaW4gdGFyZ2V0LmV2ZW50cykge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gcGFyZW50Vm1bdGFyZ2V0LmV2ZW50c1t0eXBlXV1cbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50KHR5cGUsIGJpbmQoaGFuZGxlciwgcGFyZW50Vm0pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmluZEVsZW1lbnQodm0sIGVsZW1lbnQsIHRlbXBsYXRlKVxuXG4gIGlmICh0ZW1wbGF0ZS5hdHRyICYmIHRlbXBsYXRlLmF0dHIuYXBwZW5kKSB7IC8vIGJhY2t3YXJkLCBhcHBlbmQgcHJvcCBpbiBhdHRyXG4gICAgdGVtcGxhdGUuYXBwZW5kID0gdGVtcGxhdGUuYXR0ci5hcHBlbmRcbiAgfVxuXG4gIGlmICh0ZW1wbGF0ZS5hcHBlbmQpIHsgLy8gZ2l2ZSB0aGUgYXBwZW5kIGF0dHJpYnV0ZSBmb3IgaW9zIGFkYXB0YXRpb25cbiAgICBlbGVtZW50LmF0dHIgPSBlbGVtZW50LmF0dHIgfHwge31cbiAgICBlbGVtZW50LmF0dHIuYXBwZW5kID0gdGVtcGxhdGUuYXBwZW5kXG4gIH1cblxuICBjb25zdCB0cmVlTW9kZSA9IHRlbXBsYXRlLmFwcGVuZCA9PT0gJ3RyZWUnXG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cbiAgaWYgKGFwcC5sYXN0U2lnbmFsICE9PSAtMSAmJiAhdHJlZU1vZGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGFwcGVuZCBzaW5nbGUgbm9kZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEpIHtcbiAgICBjb21waWxlQ2hpbGRyZW4odm0sIHRlbXBsYXRlLCBlbGVtZW50KVxuICB9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgdHJlZU1vZGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGFwcGVuZCB3aG9sZSB0cmVlIGZvcicsIGVsZW1lbnQpXG4gICAgYXBwLmxhc3RTaWduYWwgPSBhdHRhY2hUYXJnZXQodm0sIGVsZW1lbnQsIGRlc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgYWxsIGNoaWxkcmVuIHRvIGEgY2VydGFpbiBwYXJlbnQgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVDaGlsZHJlbiAodm0sIHRlbXBsYXRlLCBkZXN0KSB7XG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cbiAgY29uc3QgY2hpbGRyZW4gPSB0ZW1wbGF0ZS5jaGlsZHJlblxuICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgY2hpbGRyZW4uZXZlcnkoKGNoaWxkKSA9PiB7XG4gICAgICBjb21waWxlKHZtLCBjaGlsZCwgZGVzdClcbiAgICAgIHJldHVybiBhcHAubGFzdFNpZ25hbCAhPT0gLTFcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGxpc3QgdXBkYXRlIGFuZCByZWZyZXNoIHRoZSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcmFnQmxvY2sge3ZtcywgZGF0YSwgY2hpbGRyZW59XG4gKiBAcGFyYW0ge29iamVjdH0gaW5mbyAgICAgIHtnZXR0ZXIsIGtleSwgdmFsdWUsIHRyYWNrQnksIG9sZFN0eWxlfVxuICovXG5mdW5jdGlvbiBiaW5kUmVwZWF0ICh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIGluZm8pIHtcbiAgY29uc3Qgdm1zID0gZnJhZ0Jsb2NrLnZtc1xuICBjb25zdCBjaGlsZHJlbiA9IGZyYWdCbG9jay5jaGlsZHJlblxuICBjb25zdCB7IGdldHRlciwgdHJhY2tCeSwgb2xkU3R5bGUgfSA9IGluZm9cbiAgY29uc3Qga2V5TmFtZSA9IGluZm8ua2V5XG4gIGNvbnN0IHZhbHVlTmFtZSA9IGluZm8udmFsdWVcblxuICBmdW5jdGlvbiBjb21waWxlSXRlbSAoaXRlbSwgaW5kZXgsIGNvbnRleHQpIHtcbiAgICBsZXQgbWVyZ2VkRGF0YVxuICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgbWVyZ2VkRGF0YSA9IGl0ZW1cbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIGlmICghbWVyZ2VkRGF0YS5oYXNPd25Qcm9wZXJ0eSgnSU5ERVgnKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXJnZWREYXRhLCAnSU5ERVgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFwiSU5ERVhcIiBpbiByZXBlYXQgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgICAgICAgJ3BsZWFzZSB1c2UgXCIkaW5kZXhcIiBpbnN0ZWFkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICB9XG4gICAgY29uc3QgbmV3Q29udGV4dCA9IG1lcmdlQ29udGV4dChjb250ZXh0LCBtZXJnZWREYXRhKVxuICAgIHZtcy5wdXNoKG5ld0NvbnRleHQpXG4gICAgY29tcGlsZShuZXdDb250ZXh0LCB0YXJnZXQsIGZyYWdCbG9jaywgeyByZXBlYXQ6IGl0ZW0gfSlcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIGdldHRlciwgJ3JlcGVhdCcsXG4gICAgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcInJlcGVhdFwiIGl0ZW0gaGFzIGNoYW5nZWQnLCBkYXRhKVxuICAgICAgaWYgKCFmcmFnQmxvY2spIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZENoaWxkcmVuID0gY2hpbGRyZW4uc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkVm1zID0gdm1zLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBmcmFnQmxvY2suZGF0YS5zbGljZSgpXG4gICAgICAvLyAxLiBjb2xsZWN0IGFsbCBuZXcgcmVmcyB0cmFjayBieVxuICAgICAgY29uc3QgdHJhY2tNYXAgPSB7fVxuICAgICAgY29uc3QgcmV1c2VkTWFwID0ge31cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoa2V5ID09IG51bGwgfHwga2V5ID09PSAnJykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyYWNrTWFwW2tleV0gPSBpdGVtXG4gICAgICB9KVxuXG4gICAgICAvLyAyLiByZW1vdmUgdW51c2VkIGVsZW1lbnQgZm9yZWFjaCBvbGQgaXRlbVxuICAgICAgY29uc3QgcmV1c2VkTGlzdCA9IFtdXG4gICAgICBvbGREYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBpZiAodHJhY2tNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldXNlZE1hcFtrZXldID0ge1xuICAgICAgICAgICAgaXRlbSwgaW5kZXgsIGtleSxcbiAgICAgICAgICAgIHRhcmdldDogb2xkQ2hpbGRyZW5baW5kZXhdLFxuICAgICAgICAgICAgdm06IG9sZFZtc1tpbmRleF1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVGFyZ2V0KHZtLCBvbGRDaGlsZHJlbltpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDMuIGNyZWF0ZSBuZXcgZWxlbWVudCBmb3JlYWNoIG5ldyBpdGVtXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgICB2bXMubGVuZ3RoID0gMFxuICAgICAgZnJhZ0Jsb2NrLmRhdGEgPSBkYXRhLnNsaWNlKClcbiAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gZnJhZ0Jsb2NrLnN0YXJ0XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGNvbnN0IHJldXNlZCA9IHJldXNlZE1hcFtrZXldXG4gICAgICAgIGlmIChyZXVzZWQpIHtcbiAgICAgICAgICBpZiAocmV1c2VkLml0ZW0gPT09IHJldXNlZExpc3RbMF0pIHtcbiAgICAgICAgICAgIHJldXNlZExpc3Quc2hpZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZExpc3QuJHJlbW92ZShyZXVzZWQuaXRlbSlcbiAgICAgICAgICAgIG1vdmVUYXJnZXQodm0sIHJldXNlZC50YXJnZXQsIGZyYWdCbG9jay51cGRhdGVNYXJrLCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHJldXNlZC50YXJnZXQpXG4gICAgICAgICAgdm1zLnB1c2gocmV1c2VkLnZtKVxuICAgICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV1c2VkLnZtID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZC52bVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXVzZWQudm1ba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gcmV1c2VkLnRhcmdldFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB2bSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZGVsZXRlIGZyYWdCbG9jay51cGRhdGVNYXJrXG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBsaXN0LnNsaWNlKDApXG4gIGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gIH0pXG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGRpc3BsYXkgdXBkYXRlIGFuZCBhZGQvcmVtb3ZlIHRoZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGJpbmRTaG93biAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIHRhcmdldC5zaG93biwgJ3Nob3duJyxcbiAgICAoZGlzcGxheSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gdGhlIFwiaWZcIiBpdGVtIHdhcyBjaGFuZ2VkJywgZGlzcGxheSlcblxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgISFmcmFnQmxvY2suZGlzcGxheSA9PT0gISFkaXNwbGF5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gIGlmIChkaXNwbGF5KSB7XG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCBjYWxjIHZhbHVlIGNoYW5nZXMgYW5kIGFwcGVuZCBjZXJ0YWluIHR5cGUgYWN0aW9uIHRvIGRpZmZlci5cbiAqIEl0IGlzIHVzZWQgZm9yIGlmIG9yIHJlcGVhdCBkYXRhLWJpbmRpbmcgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxjXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqIEByZXR1cm4ge2FueX0gICAgICBpbml0IHZhbHVlIG9mIGNhbGNcbiAqL1xuZnVuY3Rpb24gd2F0Y2hCbG9jayAodm0sIGZyYWdCbG9jaywgY2FsYywgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gIGNvbnN0IGNvbmZpZyA9IHt9XG4gIGNvbnN0IGRlcHRoID0gKGZyYWdCbG9jay5lbGVtZW50LmRlcHRoIHx8IDApICsgMVxuXG4gIHJldHVybiB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgY29uZmlnLmxhdGVzdFZhbHVlID0gdmFsdWVcbiAgICBpZiAoZGlmZmVyICYmICFjb25maWcucmVjb3JkZWQpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQodHlwZSwgZGVwdGgsIGZyYWdCbG9jay5ibG9ja0lkLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhdGVzdFZhbHVlID0gY29uZmlnLmxhdGVzdFZhbHVlXG4gICAgICAgIGhhbmRsZXIobGF0ZXN0VmFsdWUpXG4gICAgICAgIGNvbmZpZy5yZWNvcmRlZCA9IGZhbHNlXG4gICAgICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICB9XG4gICAgY29uZmlnLnJlY29yZGVkID0gdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIENsb25lIGEgY29udGV4dCBhbmQgbWVyZ2UgY2VydGFpbiBkYXRhLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gbWVyZ2VkRGF0YVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBtZXJnZUNvbnRleHQgKGNvbnRleHQsIG1lcmdlZERhdGEpIHtcbiAgY29uc3QgbmV3Q29udGV4dCA9IE9iamVjdC5jcmVhdGUoY29udGV4dClcbiAgbmV3Q29udGV4dC5fZGF0YSA9IG1lcmdlZERhdGFcbiAgaW5pdERhdGEobmV3Q29udGV4dClcbiAgaW5pdENvbXB1dGVkKG5ld0NvbnRleHQpXG4gIG5ld0NvbnRleHQuX3JlYWxQYXJlbnQgPSBjb250ZXh0XG4gIHJldHVybiBuZXdDb250ZXh0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vY29tcGlsZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIERpcmVjdGl2ZSBQYXJzZXJcbiAqL1xuXG5pbXBvcnQgeyBiaW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbmltcG9ydCBXYXRjaGVyIGZyb20gJy4uL2NvcmUvd2F0Y2hlcidcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCB7IG5hdGl2ZUNvbXBvbmVudE1hcCB9ID0gY29uZmlnXG5cbmNvbnN0IFNFVFRFUlMgPSB7XG4gIGF0dHI6ICdzZXRBdHRyJyxcbiAgc3R5bGU6ICdzZXRTdHlsZScsXG4gIGV2ZW50OiAnYWRkRXZlbnQnXG59XG5cbi8qKlxuICogYXBwbHkgdGhlIG5hdGl2ZSBjb21wb25lbnQncyBvcHRpb25zKHNwZWNpZmllZCBieSB0ZW1wbGF0ZS50eXBlKVxuICogdG8gdGhlIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMgKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gdGVtcGxhdGVcbiAgY29uc3Qgb3B0aW9ucyA9IG5hdGl2ZUNvbXBvbmVudE1hcFt0eXBlXVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAodGVtcGxhdGVba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIHRlbXBsYXRlW2tleV0gPSBvcHRpb25zW2tleV1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cG9mKHRlbXBsYXRlW2tleV0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBvZihvcHRpb25zW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YmtleSBpbiBvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICBpZiAodGVtcGxhdGVba2V5XVtzdWJrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlW2tleV1bc3Via2V5XSA9IG9wdGlvbnNba2V5XVtzdWJrZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBhbGwgaWQsIGF0dHIsIGNsYXNzbmFtZXMsIHN0eWxlLCBldmVudHMgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEVsZW1lbnQgKHZtLCBlbCwgdGVtcGxhdGUpIHtcbiAgc2V0SWQodm0sIGVsLCB0ZW1wbGF0ZS5pZCwgdm0pXG4gIHNldEF0dHIodm0sIGVsLCB0ZW1wbGF0ZS5hdHRyKVxuICBzZXRDbGFzcyh2bSwgZWwsIHRlbXBsYXRlLmNsYXNzTGlzdClcbiAgc2V0U3R5bGUodm0sIGVsLCB0ZW1wbGF0ZS5zdHlsZSlcbiAgYmluZEV2ZW50cyh2bSwgZWwsIHRlbXBsYXRlLmV2ZW50cylcbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBwcm9wcyB0byBzdWIgdm0gYW5kIGJpbmQgYWxsIHN0eWxlLCBldmVudHMgdG8gdGhlIHJvb3QgZWxlbWVudFxuICogb2YgdGhlIHN1YiB2bSBpZiBpdCBkb2Vzbid0IGhhdmUgYSByZXBsYWNlZCBtdWx0aS1ub2RlIGZyYWdtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm0gKHZtLCBzdWJWbSwgdGVtcGxhdGUsIHJlcGVhdEl0ZW0pIHtcbiAgc3ViVm0gPSBzdWJWbSB8fCB7fVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IHt9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHN1YlZtLl9vcHRpb25zIHx8IHt9XG5cbiAgLy8gYmluZCBwcm9wc1xuICBsZXQgcHJvcHMgPSBvcHRpb25zLnByb3BzXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgcHJvcHMgPSBwcm9wcy5yZWR1Y2UoKHJlc3VsdCwgdmFsdWUpID0+IHtcbiAgICAgIHJlc3VsdFt2YWx1ZV0gPSB0cnVlXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwge30pXG4gIH1cblxuICBtZXJnZVByb3BzKHJlcGVhdEl0ZW0sIHByb3BzLCB2bSwgc3ViVm0pXG4gIG1lcmdlUHJvcHModGVtcGxhdGUuYXR0ciwgcHJvcHMsIHZtLCBzdWJWbSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQgKHZtLCBzdWJWbSwgdGVtcGxhdGUpIHtcbiAgbWVyZ2VDbGFzc1N0eWxlKHRlbXBsYXRlLmNsYXNzTGlzdCwgdm0sIHN1YlZtKVxuICBtZXJnZVN0eWxlKHRlbXBsYXRlLnN0eWxlLCB2bSwgc3ViVm0pXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRhcmdldCwgcHJvcHMsIHZtLCBzdWJWbSkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVyblxuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghcHJvcHMgfHwgcHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBzdWJWbVtrZXldID0gdlxuICAgICAgICB9KVxuICAgICAgICBzdWJWbVtrZXldID0gcmV0dXJuVmFsdWVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdWJWbVtrZXldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VTdHlsZSAodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gd2F0Y2godm0sIHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAoc3ViVm0uX3Jvb3RFbCkge1xuICAgICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHJldHVyblZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VDbGFzc1N0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBjb25zdCBjc3MgPSB2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIXN1YlZtLl9yb290RWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgdGFyZ2V0LCB2ID0+IHtcbiAgICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB2KVxuICAgIH0pXG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHZhbHVlKVxuICB9XG4gIGVsc2UgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgaWQgdG8gYW4gZWxlbWVudFxuICogZWFjaCBpZCBpcyB1bmlxdWUgaW4gYSB3aG9sZSB2bVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SWQgKHZtLCBlbCwgaWQsIHRhcmdldCkge1xuICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWFwLCB7XG4gICAgdm06IHtcbiAgICAgIHZhbHVlOiB0YXJnZXQsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSxcbiAgICBlbDoge1xuICAgICAgZ2V0OiAoKSA9PiBlbCB8fCB0YXJnZXQuX3Jvb3RFbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBpZFxuICAgIGlkID0gaGFuZGxlci5jYWxsKHZtKVxuICAgIGlmIChpZCkge1xuICAgICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgICB9XG4gICAgd2F0Y2godm0sIGhhbmRsZXIsIChuZXdJZCkgPT4ge1xuICAgICAgaWYgKG5ld0lkKSB7XG4gICAgICAgIHZtLl9pZHNbbmV3SWRdID0gbWFwXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpZCAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYXR0ciB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHIgKHZtLCBlbCwgYXR0cikge1xuICBiaW5kRGlyKHZtLCBlbCwgJ2F0dHInLCBhdHRyKVxufVxuXG5mdW5jdGlvbiBzZXRDbGFzc1N0eWxlIChlbCwgY3NzLCBjbGFzc0xpc3QpIHtcbiAgY29uc3QgY2xhc3NTdHlsZSA9IHt9XG4gIGNvbnN0IGxlbmd0aCA9IGNsYXNzTGlzdC5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NbY2xhc3NMaXN0W2ldXVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgY2xhc3NTdHlsZVtrZXldID0gc3R5bGVba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbC5zZXRDbGFzc1N0eWxlKGNsYXNzU3R5bGUpXG59XG5cbi8qKlxuICogYmluZCBjbGFzc25hbWVzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q2xhc3MgKHZtLCBlbCwgY2xhc3NMaXN0KSB7XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ICE9PSAnZnVuY3Rpb24nICYmICFBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpICYmICFjbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgZWwuc2V0Q2xhc3NTdHlsZSh7fSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHN0eWxlID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCBjbGFzc0xpc3QsIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdmFsdWUpXG4gIH1cbiAgZWxzZSB7XG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIGNsYXNzTGlzdClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgc3R5bGUgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZSAodm0sIGVsLCBzdHlsZSkge1xuICBiaW5kRGlyKHZtLCBlbCwgJ3N0eWxlJywgc3R5bGUpXG59XG5cbi8qKlxuICogYWRkIGFuIGV2ZW50IHR5cGUgYW5kIGhhbmRsZXIgdG8gYW4gZWxlbWVudCBhbmQgZ2VuZXJhdGUgYSBkb20gdXBkYXRlXG4gKi9cbmZ1bmN0aW9uIHNldEV2ZW50ICh2bSwgZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZWwuYWRkRXZlbnQodHlwZSwgYmluZChoYW5kbGVyLCB2bSkpXG59XG5cbi8qKlxuICogYWRkIGFsbCBldmVudHMgb2YgYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBiaW5kRXZlbnRzICh2bSwgZWwsIGV2ZW50cykge1xuICBpZiAoIWV2ZW50cykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBsZXQgaGFuZGxlciA9IGV2ZW50c1trZXldXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBUaGUgbWV0aG9kIFwiJHtoYW5kbGVyfVwiIGlzIG5vdCBkZWZpbmVkLmApXG4gICAgICB9XG4gICAgfVxuICAgIHNldEV2ZW50KHZtLCBlbCwga2V5LCBoYW5kbGVyKVxuICB9XG59XG5cbi8qKlxuICogc2V0IGEgc2VyaWVzIG9mIG1lbWJlcnMgYXMgYSBraW5kIG9mIGFuIGVsZW1lbnRcbiAqIGZvciBleGFtcGxlOiBzdHlsZSwgYXR0ciwgLi4uXG4gKiBpZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbiB0aGVuIGJpbmQgdGhlIGRhdGEgY2hhbmdlc1xuICovXG5mdW5jdGlvbiBiaW5kRGlyICh2bSwgZWwsIG5hbWUsIGRhdGEpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJpbmRLZXkodm0sIGVsLCBuYW1lLCBrZXksIHZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsW1NFVFRFUlNbbmFtZV1dKGtleSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBkYXRhIGNoYW5nZXMgdG8gYSBjZXJ0YWluIGtleSB0byBhIG5hbWUgc2VyaWVzIGluIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEtleSAodm0sIGVsLCBuYW1lLCBrZXksIGNhbGMpIHtcbiAgY29uc3QgbWV0aG9kTmFtZSA9IFNFVFRFUlNbbmFtZV1cbiAgLy8gd2F0Y2ggdGhlIGNhbGMsIGFuZCByZXR1cm5zIGEgdmFsdWUgYnkgY2FsYy5jYWxsKClcbiAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gICAgaWYgKGRpZmZlcikge1xuICAgICAgZGlmZmVyLmFwcGVuZCgnZWxlbWVudCcsIGVsLmRlcHRoLCBlbC5yZWYsIGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9KVxuXG4gIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG59XG5cbi8qKlxuICogd2F0Y2ggYSBjYWxjIGZ1bmN0aW9uIGFuZCBjYWxsYmFjayBpZiB0aGUgY2FsYyB2YWx1ZSBjaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaCAodm0sIGNhbGMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgY2FsYywgZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnICYmIHZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxiYWNrKHZhbHVlKVxuICB9KVxuXG4gIHJldHVybiB3YXRjaGVyLnZhbHVlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vZGlyZWN0aXZlLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IERvY3VtZW50ICYgRWxlbWVudCBIZWxwZXJzLlxuICpcbiAqIHJlcXVpcmVkOlxuICogRG9jdW1lbnQjOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb21tZW50LCBnZXRSZWZcbiAqIEVsZW1lbnQjOiBhcHBlbmRDaGlsZCwgaW5zZXJ0QmVmb3JlLCByZW1vdmVDaGlsZCwgbmV4dFNpYmxpbmdcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvZHkgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keSAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVCb2R5KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBmcmFnIGJsb2NrIGZvciBhbiBlbGVtZW50LlxuICogVGhlIGZyYWcgYmxvY2sgaGFzIGEgc3RhcnRlciwgZW5kZXIgYW5kIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2NrICh2bSwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJsb2NrU3RhcnQodm0pXG4gIGNvbnN0IGVuZCA9IGNyZWF0ZUJsb2NrRW5kKHZtKVxuICBjb25zdCBibG9ja0lkID0gbGFzdGVzdEJsb2NrSWQrK1xuICBpZiAoZWxlbWVudC5lbGVtZW50KSB7XG4gICAgbGV0IHVwZGF0ZU1hcmsgPSBlbGVtZW50LnVwZGF0ZU1hcmtcbiAgICBpZiAodXBkYXRlTWFyaykge1xuICAgICAgaWYgKHVwZGF0ZU1hcmsuZWxlbWVudCkge1xuICAgICAgICB1cGRhdGVNYXJrID0gdXBkYXRlTWFyay5lbmRcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihlbmQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoc3RhcnQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LnVwZGF0ZU1hcmsgPSBlbmRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBlbGVtZW50LmVuZClcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoZW5kLCBlbGVtZW50LmVuZClcbiAgICB9XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlbWVudFxuICB9XG4gIGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhcnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbmQpXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCwgZWxlbWVudCwgYmxvY2tJZCB9XG59XG5cbmxldCBsYXN0ZXN0QmxvY2tJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIHN0YXJ0ZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrU3RhcnQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0VuZCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ2VuZCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGFyZ2V0IHRvIGEgY2VydGFpbiBkZXN0IHVzaW5nIGFwcGVuZENoaWxkIGJ5IGRlZmF1bHQuXG4gKiBJZiB0aGUgZGVzdCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBpbnNlcnQgYmVmb3JlIHRoZSBlbmRlci5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gYXR0YWNoIHRoZSBzdGFydGVyIGFuZCBlbmRlciBpbiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBkZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUYXJnZXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgaWYgKGRlc3QuZWxlbWVudCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IGRlc3QuZW5kXG4gICAgY29uc3QgYWZ0ZXIgPSBkZXN0LnVwZGF0ZU1hcmtcbiAgICAvLyBwdXNoIG5ldyB0YXJnZXQgZm9yIHdhdGNoIGxpc3QgdXBkYXRlIGxhdGVyXG4gICAgaWYgKGRlc3QuY2hpbGRyZW4pIHtcbiAgICAgIGRlc3QuY2hpbGRyZW4ucHVzaCh0YXJnZXQpXG4gICAgfVxuICAgIC8vIGZvciBjaGVjayByZXBlYXQgY2FzZVxuICAgIGlmIChhZnRlcikge1xuICAgICAgY29uc3Qgc2lnbmFsID0gbW92ZVRhcmdldCh2bSwgdGFyZ2V0LCBhZnRlcilcbiAgICAgIGRlc3QudXBkYXRlTWFyayA9IHRhcmdldC5lbGVtZW50ID8gdGFyZ2V0LmVuZCA6IHRhcmdldFxuICAgICAgcmV0dXJuIHNpZ25hbFxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuc3RhcnQsIGJlZm9yZSlcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LmVuZCwgYmVmb3JlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgYmVmb3JlKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LnN0YXJ0KVxuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuZW5kKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmFwcGVuZENoaWxkKHRhcmdldClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRhcmdldCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuIFRoZSB0YXJnZXQgbWF5YmUgYmxvY2sgb3IgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIGFmdGVyKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJldHVybiBtb3ZlQmxvY2sodGFyZ2V0LCBhZnRlcilcbiAgfVxuICByZXR1cm4gbW92ZUVsZW1lbnQodGFyZ2V0LCBhZnRlcilcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnQgKGVsZW1lbnQsIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGFsbCBlbGVtZW50cyBvZiB0aGUgYmxvY2sgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlQmxvY2sgKGZyYWdCbG9jaywgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnRcbiAgICBsZXQgc2lnbmFsXG4gICAgY29uc3QgZ3JvdXAgPSBbZWxdXG5cbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgICAgIGdyb3VwLnB1c2goZWwpXG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBhZnRlclxuICAgIGdyb3VwLmV2ZXJ5KChlbCkgPT4ge1xuICAgICAgc2lnbmFsID0gcGFyZW50Lmluc2VydEFmdGVyKGVsLCB0ZW1wKVxuICAgICAgdGVtcCA9IGVsXG4gICAgICByZXR1cm4gc2lnbmFsICE9PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2lnbmFsXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGFyZ2V0IGZyb20gRE9NIHRyZWUuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGNhbGwgX3JlbW92ZUJsb2NrXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCAodm0sIHRhcmdldCwgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJlbW92ZUJsb2NrKHRhcmdldCwgcHJlc2VydmVCbG9jaylcbiAgfVxuICBlbHNlIHtcbiAgICByZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50ICh0YXJnZXQpIHtcbiAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZyYWcgYmxvY2suXG4gKiBUaGUgc2Vjb25kIHBhcmFtIGRlY2lkZXMgd2hldGhlciB0aGUgYmxvY2sgc2VsZiBzaG91bGQgYmUgcmVtb3ZlZCB0b28uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtCb29sZWFufSBwcmVzZXJ2ZUJsb2NrPWZhbHNlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJsb2NrIChmcmFnQmxvY2ssIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnQubmV4dFNpYmxpbmdcblxuICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICByZXN1bHQucHVzaChlbClcbiAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gIH1cblxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5zdGFydClcbiAgfVxuICByZXN1bHQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICByZW1vdmVFbGVtZW50KGVsKVxuICB9KVxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5lbmQpXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanNcbiAqKi8iLCJmdW5jdGlvbiBFdnQgKHR5cGUsIGRldGFpbCkge1xuICBpZiAoZGV0YWlsIGluc3RhbmNlb2YgRXZ0KSB7XG4gICAgcmV0dXJuIGRldGFpbFxuICB9XG5cbiAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIHRoaXMuZGV0YWlsID0gZGV0YWlsXG4gIHRoaXMudHlwZSA9IHR5cGVcblxuICBsZXQgc2hvdWxkU3RvcCA9IGZhbHNlXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG91bGRTdG9wID0gdHJ1ZVxuICB9XG4gIHRoaXMuaGFzU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hvdWxkU3RvcFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkZW1pdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdXG4gIGlmIChoYW5kbGVyTGlzdCkge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGRpc3BhdGNoICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50LiRkaXNwYXRjaCkge1xuICAgIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2godHlwZSwgZXZ0KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkYnJvYWRjYXN0ICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9jaGlsZHJlblZtcykge1xuICAgIHRoaXMuX2NoaWxkcmVuVm1zLmZvckVhY2goKHN1YlZtKSA9PiB7XG4gICAgICBzdWJWbS4kYnJvYWRjYXN0KHR5cGUsIGV2dClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV0gfHwgW11cbiAgaGFuZGxlckxpc3QucHVzaChoYW5kbGVyKVxuICBldmVudHNbdHlwZV0gPSBoYW5kbGVyTGlzdFxuXG4gIC8vIGZpeGVkIG9sZCB2ZXJzaW9uIGxpZmVjeWNsZSBkZXNpZ25cbiAgaWYgKHR5cGUgPT09ICdob29rOnJlYWR5JyAmJiB0aGlzLl9yZWFkeSkge1xuICAgIHRoaXMuJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkb2ZmICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGlmICghaGFuZGxlcikge1xuICAgIGRlbGV0ZSBldmVudHNbdHlwZV1cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoIWhhbmRsZXJMaXN0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaGFuZGxlckxpc3QuJHJlbW92ZShoYW5kbGVyKVxufVxuXG5jb25zdCBMSUZFX0NZQ0xFX1RZUEVTID0gWydpbml0JywgJ2NyZWF0ZWQnLCAncmVhZHknXVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0sIGV4dGVybmFsRXZlbnRzKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCBldmVudHMgPSBvcHRpb25zLmV2ZW50cyB8fCB7fVxuICBmb3IgKGNvbnN0IHR5cGUxIGluIGV2ZW50cykge1xuICAgIHZtLiRvbih0eXBlMSwgZXZlbnRzW3R5cGUxXSlcbiAgfVxuICBmb3IgKGNvbnN0IHR5cGUyIGluIGV4dGVybmFsRXZlbnRzKSB7XG4gICAgdm0uJG9uKHR5cGUyLCBleHRlcm5hbEV2ZW50c1t0eXBlMl0pXG4gIH1cbiAgTElGRV9DWUNMRV9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgdm0uJG9uKGBob29rOiR7dHlwZX1gLCBvcHRpb25zW3R5cGVdKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5FdmVudHMgKHZtKSB7XG4gIHZtLiRlbWl0ID0gJGVtaXRcbiAgdm0uJGRpc3BhdGNoID0gJGRpc3BhdGNoXG4gIHZtLiRicm9hZGNhc3QgPSAkYnJvYWRjYXN0XG4gIHZtLiRvbiA9ICRvblxuICB2bS4kb2ZmID0gJG9mZlxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2V2ZW50cy5qc1xuICoqLyIsImxldCBuYXRpdmVNb2R1bGVzID0ge31cblxuZnVuY3Rpb24gYXNzaWduTW9kdWxlcyAobW9kdWxlcywgaWZSZXBsYWNlKSB7XG4gIGZvciAoY29uc3QgbW9kdWxlTmFtZSBpbiBtb2R1bGVzKSB7XG4gICAgLy8gaW5pdCBgbW9kdWxlc1ttb2R1bGVOYW1lXVtdYFxuICAgIGxldCBtZXRob2RzID0gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxuICAgIGlmICghbWV0aG9kcykge1xuICAgICAgbWV0aG9kcyA9IHt9XG4gICAgICBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdID0gbWV0aG9kc1xuICAgIH1cblxuICAgIC8vIHB1c2ggZWFjaCBub24tZXhpc3RlZCBuZXcgbWV0aG9kXG4gICAgbW9kdWxlc1ttb2R1bGVOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZXRob2QgPSB7XG4gICAgICAgICAgbmFtZTogbWV0aG9kXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFtZXRob2RzW21ldGhvZC5uYW1lXSB8fCBpZlJlcGxhY2UpIHtcbiAgICAgICAgbWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2RcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkFwaXMgKEN0b3IsIGFwaXMpIHtcbiAgY29uc3QgcCA9IEN0b3IucHJvdG90eXBlXG5cbiAgZm9yIChjb25zdCBhcGlOYW1lIGluIGFwaXMpIHtcbiAgICBpZiAoIXAuaGFzT3duUHJvcGVydHkoYXBpTmFtZSkpIHtcbiAgICAgIHBbYXBpTmFtZV0gPSBhcGlzW2FwaU5hbWVdXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZHVsZXMgKCkge1xuICBuYXRpdmVNb2R1bGVzID0ge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZSAobW9kdWxlTmFtZSkge1xuICByZXR1cm4gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxufVxuXG4vKipcbiAqIEBjb250ZXh0IGEgaW5zdGFuY2Ugb2YgQXBwSW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgY29uc3QgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgY29uc3QgdGFyZ2V0ID0ge31cblxuICBmb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gbWV0aG9kcykge1xuICAgIHRhcmdldFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB0aGlzLmNhbGxUYXNrcyh7XG4gICAgICBtb2R1bGU6IG1vZHVsZU5hbWUsXG4gICAgICBtZXRob2Q6IG1ldGhvZE5hbWUsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBAY29udGV4dCBWbVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVzIChtb2R1bGVzLCBpZlJlcGxhY2UpIHtcbiAgYXNzaWduTW9kdWxlcyhtb2R1bGVzLCBpZlJlcGxhY2UpXG59XG5cbi8qKlxuICogQGNvbnRleHQgVm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyAoYXBpcykge1xuICBhc3NpZ25BcGlzKHRoaXMsIGFwaXMpXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZUNvbXBvbmVudCAobmFtZSkge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gdGhpc1xuICByZXR1cm4gY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQgKG5hbWUsIGRlZikge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gdGhpc1xuXG4gIGlmIChjdXN0b21Db21wb25lbnRNYXBbbmFtZV0pIHtcbiAgICBjb25zb2xlLmVycm9yKGBbSlMgRnJhbWV3b3JrXSBkZWZpbmUgYSBjb21wb25lbnQoJHtuYW1lfSkgdGhhdCBhbHJlYWR5IGV4aXN0c2ApXG4gICAgcmV0dXJuXG4gIH1cblxuICBjdXN0b21Db21wb25lbnRNYXBbbmFtZV0gPSBkZWZcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuLyoqXG4gKiBbbm9ybWFsaXplVmVyc2lvbiBkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1N0cmluZ30gVmVyc2lvbi4gaWU6IDEsIDEuMCwgMS4wLjBcbiAqIEByZXR1cm4ge1N0cmluZ30gVmVyc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVmVyc2lvbiAodikge1xuICBjb25zdCBpc1ZhbGlkID0gc2VtdmVyLnZhbGlkKHYpXG4gIGlmIChpc1ZhbGlkKSB7XG4gICAgcmV0dXJuIHZcbiAgfVxuXG4gIHYgPSB0eXBlb2YgKHYpID09PSAnc3RyaW5nJyA/IHYgOiAnJ1xuICBjb25zdCBzcGxpdCA9IHYuc3BsaXQoJy4nKVxuICBsZXQgaSA9IDBcbiAgY29uc3QgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoaSA8IDMpIHtcbiAgICBjb25zdCBzID0gdHlwZW9mIChzcGxpdFtpXSkgPT09ICdzdHJpbmcnICYmIHNwbGl0W2ldID8gc3BsaXRbaV0gOiAnMCdcbiAgICByZXN1bHQucHVzaChzKVxuICAgIGkrK1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcuJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiB0cnVlLFxuICAgIGVycm9yVHlwZTogMSxcbiAgICBjb2RlOiAxMDAwXG4gIH1cbiAgY29uc3QgZ2V0TXNnID0gZnVuY3Rpb24gKGtleSwgdmFsLCBjcml0ZXJpYSkge1xuICAgIHJldHVybiAnRG93bmdyYWRlWycgKyBrZXkgKyAnXSA6OiBkZXZpY2VJbmZvICdcbiAgICAgICsgdmFsICsgJyBtYXRjaGVkIGNyaXRlcmlhICcgKyBjcml0ZXJpYVxuICB9XG4gIGNvbnN0IF9rZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuXG4gIHJlc3VsdC5lcnJvck1lc3NhZ2UgPSBnZXRNc2coa2V5LCB2YWwsIGNyaXRlcmlhKVxuXG4gIGlmIChfa2V5LmluZGV4T2YoJ29zdmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDFcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ2FwcHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAyXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCd3ZWV4dmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDNcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ2RldmljZW1vZGVsJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwNFxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFdFRVggZnJhbWV3b3JrIGlucHV0KGRldmljZUluZm8pXG4gKiB7XG4gKiAgIHBsYXRmb3JtOiAnaU9TJyBvciAnYW5kcm9pZCdcbiAqICAgb3NWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICBhcHBWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICB3ZWV4VmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgZERldmljZU1vZGVsOiAnTU9ERUxfTkFNRSdcbiAqIH1cbiAqXG4gKiBkb3duZ3JhZGUgY29uZmlnKGNvbmZpZylcbiAqIHtcbiAqICAgaW9zOiB7XG4gKiAgICAgb3NWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBhcHBWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICB3ZWV4VmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgZGV2aWNlTW9kZWw6IFsnbW9kZWxBJywgJ21vZGVsQicsIC4uLl1cbiAqICAgfSxcbiAqICAgYW5kcm9pZDoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH1cbiAqIH1cbiAqXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBkZXZpY2VJbmZvIFdlZXggU0RLIGZyYW1ld29yayBpbnB1dFxuICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgICAgIHVzZXIgaW5wdXRcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICB7IGlzRG93bmdyYWRlOiB0cnVlL2ZhbHNlLCBlcnJvck1lc3NhZ2UuLi4gfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2sgKGNvbmZpZywgZGV2aWNlSW5mbykge1xuICBkZXZpY2VJbmZvID0gZGV2aWNlSW5mbyB8fCBnbG9iYWwuV1hFbnZpcm9ubWVudFxuICBkZXZpY2VJbmZvID0gaXNQbGFpbk9iamVjdChkZXZpY2VJbmZvKSA/IGRldmljZUluZm8gOiB7fVxuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgaXNEb3duZ3JhZGU6IGZhbHNlIC8vIGRlZmF1dGwgaXMgcGFzc1xuICB9XG5cbiAgaWYgKHR5cG9mKGNvbmZpZykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsZXQgY3VzdG9tRG93bmdyYWRlID0gY29uZmlnLmNhbGwodGhpcywgZGV2aWNlSW5mbywge1xuICAgICAgc2VtdmVyOiBzZW12ZXIsXG4gICAgICBub3JtYWxpemVWZXJzaW9uOiB0aGlzLm5vcm1hbGl6ZVZlcnNpb25cbiAgICB9KVxuXG4gICAgY3VzdG9tRG93bmdyYWRlID0gISFjdXN0b21Eb3duZ3JhZGVcblxuICAgIHJlc3VsdCA9IGN1c3RvbURvd25ncmFkZSA/IHRoaXMuZ2V0RXJyb3IoJ2N1c3RvbScsICcnLCAnY3VzdG9tIHBhcmFtcycpIDogcmVzdWx0XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uZmlnID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cblxuICAgIGNvbnN0IHBsYXRmb3JtID0gZGV2aWNlSW5mby5wbGF0Zm9ybSB8fCAndW5rbm93J1xuICAgIGNvbnN0IGRQbGF0Zm9ybSA9IHBsYXRmb3JtLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBjT2JqID0gY29uZmlnW2RQbGF0Zm9ybV0gfHwge31cblxuICAgIGZvciAoY29uc3QgaSBpbiBkZXZpY2VJbmZvKSB7XG4gICAgICBjb25zdCBrZXkgPSBpXG4gICAgICBjb25zdCBrZXlMb3dlciA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBjb25zdCB2YWwgPSBkZXZpY2VJbmZvW2ldXG4gICAgICBjb25zdCBpc1ZlcnNpb24gPSBrZXlMb3dlci5pbmRleE9mKCd2ZXJzaW9uJykgPj0gMFxuICAgICAgY29uc3QgaXNEZXZpY2VNb2RlbCA9IGtleUxvd2VyLmluZGV4T2YoJ2RldmljZW1vZGVsJykgPj0gMFxuICAgICAgY29uc3QgY3JpdGVyaWEgPSBjT2JqW2ldXG5cbiAgICAgIGlmIChjcml0ZXJpYSAmJiBpc1ZlcnNpb24pIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMubm9ybWFsaXplVmVyc2lvbihjcml0ZXJpYSlcbiAgICAgICAgY29uc3QgZCA9IHRoaXMubm9ybWFsaXplVmVyc2lvbihkZXZpY2VJbmZvW2ldKVxuXG4gICAgICAgIGlmIChzZW12ZXIuc2F0aXNmaWVzKGQsIGMpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRFcnJvcihrZXksIHZhbCwgY3JpdGVyaWEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNEZXZpY2VNb2RlbCkge1xuICAgICAgICBjb25zdCBfY3JpdGVyaWEgPSB0eXBvZihjcml0ZXJpYSkgPT09ICdhcnJheScgPyBjcml0ZXJpYSA6IFtjcml0ZXJpYV1cbiAgICAgICAgaWYgKF9jcml0ZXJpYS5pbmRleE9mKHZhbCkgPj0gMCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2Rvd25ncmFkZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZlciB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubWFwID0gW11cbiAgICB0aGlzLmhvb2tzID0gW11cbiAgfVxuICBpc0VtcHR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAubGVuZ3RoID09PSAwXG4gIH1cbiAgYXBwZW5kICh0eXBlLCBkZXB0aCwgcmVmLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVyKSB7XG4gICAgICB0aGlzLmhhc1RpbWVyID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzVGltZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmZsdXNoKHRydWUpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFxuICAgIGlmICghbWFwW2RlcHRoXSkge1xuICAgICAgbWFwW2RlcHRoXSA9IHt9XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwID0gbWFwW2RlcHRoXVxuICAgIGlmICghZ3JvdXBbdHlwZV0pIHtcbiAgICAgIGdyb3VwW3R5cGVdID0ge31cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgaWYgKCFncm91cFt0eXBlXVtyZWZdKSB7XG4gICAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBbXVxuICAgICAgfVxuICAgICAgZ3JvdXBbdHlwZV1bcmVmXS5wdXNoKGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IGhhbmRsZXJcbiAgICB9XG4gIH1cbiAgZmx1c2ggKGlzVGltZW91dCkge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwLnNsaWNlKClcbiAgICB0aGlzLm1hcC5sZW5ndGggPSAwXG4gICAgbWFwLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3JlcGVhdCcpXG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3Nob3duJylcbiAgICAgIGNhbGxUeXBlTGlzdChncm91cCwgJ2VsZW1lbnQnKVxuICAgIH0pXG5cbiAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3Muc2xpY2UoKVxuICAgIHRoaXMuaG9va3MubGVuZ3RoID0gMFxuICAgIGhvb2tzLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICBmbigpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuZmx1c2goKVxuICAgIH1cbiAgfVxuICB0aGVuIChmbikge1xuICAgIHRoaXMuaG9va3MucHVzaChmbilcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZU1hcCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgbWFwW3JlZl0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTGlzdCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgY29uc3QgbGlzdCA9IG1hcFtyZWZdXG4gICAgbGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7IGhhbmRsZXIoKSB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogQSBzaW1wbGUgdmlydHVhbCBkb20gaW1wbGVtZW50YXRpb25cbiAqL1xuXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSAnLi9saXN0ZW5lcidcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgREVGQVVMVF9UQUdfTkFNRSA9ICdkaXYnXG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5sZXQgbmV4dE5vZGVSZWYgPSAxXG5cbmV4cG9ydCBmdW5jdGlvbiBEb2N1bWVudCAoaWQsIHVybCwgaGFuZGxlcikge1xuICBpZCA9IGlkID8gaWQudG9TdHJpbmcoKSA6ICcnXG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLlVSTCA9IHVybFxuXG4gIGluc3RhbmNlTWFwW2lkXSA9IHRoaXNcbiAgdGhpcy5ub2RlTWFwID0ge31cbiAgdGhpcy5saXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihpZCwgaGFuZGxlciB8fCBnZW5DYWxsVGFza3MoaWQpKVxuICB0aGlzLmNyZWF0ZURvY3VtZW50RWxlbWVudCgpXG59XG5cbmZ1bmN0aW9uIGdlbkNhbGxUYXNrcyAoaWQpIHtcbiAgcmV0dXJuICh0YXNrcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICAgIHRhc2tzID0gW3Rhc2tzXVxuICAgIH1cbiAgICByZXR1cm4gY2FsbE5hdGl2ZShpZCwgdGFza3MsICctMScpXG4gIH1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGRlbGV0ZSB0aGlzLmxpc3RlbmVyXG4gIGRlbGV0ZSB0aGlzLm5vZGVNYXBcbiAgZGVsZXRlIGluc3RhbmNlTWFwW3RoaXMuaWRdXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSBmYWxzZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IHRydWVcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmRvY3VtZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQoJ2RvY3VtZW50JylcbiAgICBlbC5kb2NJZCA9IHRoaXMuaWRcbiAgICBlbC5vd25lckRvY3VtZW50ID0gdGhpc1xuICAgIGVsLnJvbGUgPSAnZG9jdW1lbnRFbGVtZW50J1xuICAgIGVsLmRlcHRoID0gMFxuICAgIGVsLnJlZiA9ICdfZG9jdW1lbnRFbGVtZW50J1xuICAgIHRoaXMubm9kZU1hcC5fZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgZWwuYXBwZW5kQ2hpbGQgPSAobm9kZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlKVxuICAgIH1cbiAgICBlbC5pbnNlcnRCZWZvcmUgPSAobm9kZSwgYmVmb3JlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUsIGJlZm9yZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYXBwZW5kQm9keSAoZG9jLCBub2RlLCBiZWZvcmUpIHtcbiAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IGRvY1xuXG4gIGlmIChkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudEVsZW1lbnQuY2hpbGRyZW5cbiAgY29uc3QgYmVmb3JlSW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGJlZm9yZSlcbiAgaWYgKGJlZm9yZUluZGV4IDwgMCkge1xuICAgIGNoaWxkcmVuLnB1c2gobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjaGlsZHJlbi5zcGxpY2UoYmVmb3JlSW5kZXgsIDAsIG5vZGUpXG4gIH1cblxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChub2RlLnJvbGUgPT09ICdib2R5Jykge1xuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gbm9kZVxuICAgICAgfSlcbiAgICAgIHNldEJvZHkoZG9jLCBub2RlKVxuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBsaW5rUGFyZW50KG5vZGUsIGRvY3VtZW50RWxlbWVudClcbiAgICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF1cbiAgICB9XG4gICAgZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgZG9jLmxpc3RlbmVyLmNyZWF0ZUJvZHkobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICBkb2Mubm9kZU1hcFtub2RlLnJlZl0gPSBub2RlXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9keSAoZG9jLCBlbCkge1xuICBlbC5yb2xlID0gJ2JvZHknXG4gIGVsLmRlcHRoID0gMVxuICBkZWxldGUgZG9jLm5vZGVNYXBbZWwubm9kZUlkXVxuICBlbC5yZWYgPSAnX3Jvb3QnXG4gIGRvYy5ub2RlTWFwLl9yb290ID0gZWxcbiAgZG9jLmJvZHkgPSBlbFxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQm9keSA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICBpZiAoIXRoaXMuYm9keSkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQodHlwZSwgcHJvcHMpXG4gICAgc2V0Qm9keSh0aGlzLCBlbClcbiAgfVxuXG4gIHJldHVybiB0aGlzLmJvZHlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KHRhZ05hbWUsIHByb3BzKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHJldHVybiBuZXcgQ29tbWVudCh0ZXh0KVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZmlyZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIGlmICghZWwpIHtcbiAgICByZXR1cm5cbiAgfVxuICBlID0gZSB8fCB7fVxuICBlLnR5cGUgPSB0eXBlXG4gIGUudGFyZ2V0ID0gZWxcbiAgZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIGlmIChkb21DaGFuZ2VzKSB7XG4gICAgdXBkYXRlRWxlbWVudChlbCwgZG9tQ2hhbmdlcylcbiAgfVxuICByZXR1cm4gZWwuZmlyZUV2ZW50KHR5cGUsIGUpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5nZXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHJldHVybiB0aGlzLm5vZGVNYXBbcmVmXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50IChlbCwgY2hhbmdlcykge1xuICBjb25zdCBhdHRycyA9IGNoYW5nZXMuYXR0cnMgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIGF0dHJzKSB7XG4gICAgZWwuc2V0QXR0cihuYW1lLCBhdHRyc1tuYW1lXSwgdHJ1ZSlcbiAgfVxuICBjb25zdCBzdHlsZSA9IGNoYW5nZXMuc3R5bGUgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlKSB7XG4gICAgZWwuc2V0U3R5bGUobmFtZSwgc3R5bGVbbmFtZV0sIHRydWUpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vZGUgKCkge1xuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbiAgdGhpcy5wYXJlbnROb2RlID0gbnVsbFxuICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbFxuICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGxcbn1cblxuTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF1cbiAgaWYgKGRvYykge1xuICAgIGRlbGV0ZSB0aGlzLmRvY0lkXG4gICAgZGVsZXRlIGRvYy5ub2RlTWFwW3RoaXMubm9kZUlkXVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY2hpbGQuZGVzdHJveSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbGVtZW50ICh0eXBlID0gREVGQVVMVF9UQUdfTkFNRSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcyB8fCB7fVxuICB0aGlzLm5vZGVUeXBlID0gMVxuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLmF0dHIgPSBwcm9wcy5hdHRyIHx8IHt9XG4gIHRoaXMuY2xhc3NTdHlsZSA9IHByb3BzLmNsYXNzU3R5bGUgfHwge31cbiAgdGhpcy5zdHlsZSA9IHByb3BzLnN0eWxlIHx8IHt9XG4gIHRoaXMuZXZlbnQgPSB7fVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5FbGVtZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCAtMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAobm9kZSwgYmVmb3JlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGJlZm9yZSB8fCBub2RlLm5leHRTaWJsaW5nID09PSBiZWZvcmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKG5vZGUsIGFmdGVyKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGFmdGVyIHx8IG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBhZnRlcikge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChub2RlLCBwcmVzZXJ2ZWQpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXByZXNlcnZlZCkge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIHRoaXMucHVyZUNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgIH0pXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH0pXG4gIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMFxuICB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGggPSAwXG59XG5cbmZ1bmN0aW9uIG5leHRFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJldmlvdXNFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpbmtQYXJlbnQgKG5vZGUsIHBhcmVudCkge1xuICBub2RlLnBhcmVudE5vZGUgPSBwYXJlbnRcbiAgaWYgKHBhcmVudC5kb2NJZCkge1xuICAgIG5vZGUuZG9jSWQgPSBwYXJlbnQuZG9jSWRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudFxuICAgIG5vZGUub3duZXJEb2N1bWVudC5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbiAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMVxuICB9XG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgbGlua1BhcmVudChjaGlsZCwgbm9kZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOb2RlIChkb2NJZCwgbm9kZSkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtkb2NJZF1cbiAgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxufVxuXG5mdW5jdGlvbiBpbnNlcnRJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgbmV3SW5kZXggPSAwXG4gIH1cbiAgY29uc3QgYmVmb3JlID0gbGlzdFtuZXdJbmRleCAtIDFdXG4gIGNvbnN0IGFmdGVyID0gbGlzdFtuZXdJbmRleF1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXgsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlXG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiBtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbiAgbGV0IG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleFxuICBpZiAoaW5kZXggPD0gbmV3SW5kZXgpIHtcbiAgICBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXggLSAxXG4gIH1cbiAgY29uc3QgYmVmb3JlTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyIC0gMV1cbiAgY29uc3QgYWZ0ZXJOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXJdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4QWZ0ZXIsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmVOZXcgJiYgKGJlZm9yZU5ldy5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlTmV3XG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJOZXdcbiAgICBhZnRlck5ldyAmJiAoYWZ0ZXJOZXcucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIGlmIChpbmRleCA9PT0gbmV3SW5kZXhBZnRlcikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiByZW1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLmF0dHJba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmF0dHJba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0QXR0cih0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuc3R5bGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLnN0eWxlW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoY2xhc3NTdHlsZSkge1xuICB0aGlzLmNsYXNzU3R5bGUgPSBjbGFzc1N0eWxlXG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlcyh0aGlzLnJlZiwgdGhpcy50b1N0eWxlKCkpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICB0aGlzLmV2ZW50W3R5cGVdID0gaGFuZGxlclxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5hZGRFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodGhpcy5ldmVudFt0eXBlXSkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50W3R5cGVdXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZSkge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudFt0eXBlXVxuICBpZiAoaGFuZGxlcikge1xuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLmNsYXNzU3R5bGUsIHRoaXMuc3R5bGUpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJlZjogdGhpcy5yZWYudG9TdHJpbmcoKSxcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgYXR0cjogdGhpcy5hdHRyLFxuICAgIHN0eWxlOiB0aGlzLnRvU3R5bGUoKVxuICB9XG4gIGNvbnN0IGV2ZW50ID0gT2JqZWN0LmtleXModGhpcy5ldmVudClcbiAgaWYgKGV2ZW50Lmxlbmd0aCkge1xuICAgIHJlc3VsdC5ldmVudCA9IGV2ZW50XG4gIH1cbiAgaWYgKHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdC5jaGlsZHJlbiA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvSlNPTigpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCcgKyB0aGlzLnR5cGUgK1xuICAgICcgYXR0cj0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRyKSArXG4gICAgJyBzdHlsZT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy50b1N0eWxlKCkpICsgJz4nICtcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b1N0cmluZygpKS5qb2luKCcnKSArXG4gICAgJzwvJyArIHRoaXMudHlwZSArICc+J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVudCAodmFsdWUpIHtcbiAgdGhpcy5ub2RlVHlwZSA9IDhcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9ICdjb21tZW50J1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuQ29tbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkNvbW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwhLS0gJyArIHRoaXMudmFsdWUgKyAnIC0tPidcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RlbmVyIChpZCwgaGFuZGxlcikge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5iYXRjaGVkID0gZmFsc2VcbiAgdGhpcy51cGRhdGVzID0gW11cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICB9XG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdjcmVhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnVwZGF0ZUZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3VwZGF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVmcmVzaEZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3JlZnJlc2hGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBjb25zdCBib2R5ID0gZWxlbWVudC50b0pTT04oKVxuICBjb25zdCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW5cbiAgZGVsZXRlIGJvZHkuY2hpbGRyZW5cbiAgY29uc3QgYWN0aW9ucyA9IFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUJvZHknLCBbYm9keV0pXVxuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBhY3Rpb25zLnB1c2guYXBwbHkoYWN0aW9ucywgY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oJ2FkZEVsZW1lbnQnLCBbYm9keS5yZWYsIGNoaWxkLCAtMV0pXG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCByZWYsIGluZGV4KSB7XG4gIGlmICghKGluZGV4ID49IDApKSB7XG4gICAgaW5kZXggPSAtMVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW3JlZiwgZWxlbWVudC50b0pTT04oKSwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gcmVmLm1hcCgocikgPT4gY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JdKSlcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcmVmXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5tb3ZlRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXgpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ21vdmVFbGVtZW50JywgW3RhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlQXR0cnMnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKHJlZiwga2V5LCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICByZXN1bHRba2V5XSA9IHZhbHVlXG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKHJlZiwgc3R5bGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgc3R5bGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIChhY3Rpb25zLCBjYikge1xuICByZXR1cm4gY2IgJiYgY2IoKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSB0aGlzLnVwZGF0ZXNcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuXG4gIGlmICghQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgIGFjdGlvbnMgPSBbYWN0aW9uc11cbiAgfVxuXG4gIGlmICh0aGlzLmJhdGNoZWQpIHtcbiAgICB1cGRhdGVzLnB1c2guYXBwbHkodXBkYXRlcywgYWN0aW9ucylcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gaGFuZGxlcihhY3Rpb25zKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgcmV0dXJuIHsgbW9kdWxlOiAnZG9tJywgbWV0aG9kOiBuYW1lLCBhcmdzOiBhcmdzIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9saXN0ZW5lci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hbWVcIjogXCJ3ZWV4XCIsXG5cdFwidmVyc2lvblwiOiBcIjAuNC4wXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJBIGZyYW1ld29yayBmb3IgYnVpbGRpbmcgTW9iaWxlIGNyb3NzLXBsYXRmb3JtIFVJXCIsXG5cdFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcblx0XCJyZXBvc2l0b3J5XCI6IHtcblx0XHRcInR5cGVcIjogXCJnaXRcIixcblx0XHRcInVybFwiOiBcImdpdEBnaXRodWIuY29tOmFsaWJhYmEvd2VleC5naXRcIlxuXHR9LFxuXHRcImhvbWVwYWdlXCI6IFwiaHR0cDovL2FsaWJhYmEuZ2l0aHViLmlvL3dlZXgvXCIsXG5cdFwiYnVnc1wiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS93ZWV4L2lzc3Vlc1wiXG5cdH0sXG5cdFwicHJpdmF0ZVwiOiBcInRydWVcIixcblx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XCJ3ZWV4XCIsXG5cdFx0XCJoeWJyaWRcIixcblx0XHRcIndlYmNvbXBvbmVudFwiLFxuXHRcdFwiYXBwZnJhbWV3b3JrXCIsXG5cdFx0XCJtdnZtXCIsXG5cdFx0XCJqYXZhc2NyaXB0XCIsXG5cdFx0XCJ3ZWJraXRcIixcblx0XHRcInY4XCIsXG5cdFx0XCJqc2NvcmVcIixcblx0XHRcImh0bWw1XCIsXG5cdFx0XCJhbmRyb2lkXCIsXG5cdFx0XCJpb3NcIixcblx0XHRcInl1bm9zXCJcblx0XSxcblx0XCJlbmdpbmVzXCI6IHtcblx0XHRcIm5vZGVcIjogXCI+PTRcIlxuXHR9LFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwicG9zdGluc3RhbGxcIjogXCJiYXNoIC4vYmluL2luc3RhbGwtaG9va3Muc2hcIixcblx0XHRcImJ1aWxkOmNvbmZpZ1wiOiBcIm5vZGUgYnVpbGQvY29uZmlnLmZyYW1ld29ya3MuanNcIixcblx0XHRcImJ1aWxkOmJyb3dzZXJcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suYnJvd3Nlci5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOm5hdGl2ZVwiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5uYXRpdmUuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpleGFtcGxlc1wiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5leGFtcGxlcy5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOnRlc3RcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2sudGVzdC5jb25maWcuanNcIixcblx0XHRcImRpc3Q6YnJvd3NlclwiOiBcIm5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBiYXNoIC4vYmluL2Rpc3QtYnJvd3Nlci5zaFwiLFxuXHRcdFwiZGlzdFwiOiBcIm5wbSBydW4gZGlzdDpicm93c2VyXCIsXG5cdFx0XCJkZXY6YnJvd3NlclwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmJyb3dzZXIuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6bmF0aXZlXCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2submF0aXZlLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2OmV4YW1wbGVzXCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suZXhhbXBsZXMuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6dGVzdFwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLnRlc3QuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZFwiOiBcIm5wbSBydW4gYnVpbGQ6bmF0aXZlICYmIG5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBucG0gcnVuIGJ1aWxkOmV4YW1wbGVzICYmIG5wbSBydW4gYnVpbGQ6dGVzdFwiLFxuXHRcdFwibGludFwiOiBcImVzbGludCBodG1sNVwiLFxuXHRcdFwidGVzdDp1bml0XCI6IFwibW9jaGEgLS1jb21waWxlcnMganM6YmFiZWwtY29yZS9yZWdpc3RlciBodG1sNS90ZXN0L3VuaXQvKi8qLmpzIGh0bWw1L3Rlc3QvdW5pdC8qLyovKi5qc1wiLFxuXHRcdFwidGVzdDpjb3ZlclwiOiBcImJhYmVsLW5vZGUgbm9kZV9tb2R1bGVzL2lzcGFydGEvYmluL2lzcGFydGEgY292ZXIgLS1yZXBvcnQgdGV4dCBub2RlX21vZHVsZXMvbW9jaGEvYmluL19tb2NoYSAtLSAtLXJlcG9ydGVyIGRvdCBodG1sNS90ZXN0L3VuaXQvKi8qLmpzIGh0bWw1L3Rlc3QvdW5pdC8qLyovKi5qc1wiLFxuXHRcdFwidGVzdDplMmVcIjogXCJucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbm9kZSBodG1sNS90ZXN0L2UyZS9ydW5uZXIuanNcIixcblx0XHRcInRlc3RcIjogXCJucG0gcnVuIGJ1aWxkOmNvbmZpZyAmJiBucG0gcnVuIGxpbnQgJiYgbnBtIHJ1biB0ZXN0OmNvdmVyICYmIG5wbSBydW4gdGVzdDplMmVcIixcblx0XHRcInNlcnZlXCI6IFwic2VydmUgLi8gLXAgMTI1ODBcIixcblx0XHRcImNsZWFuOmV4YW1wbGVzXCI6IFwiZWNobyBcXFwiXFxcXDAzM1szNjsxbVtDbGVhbl1cXFxcMDMzWzBtIFxcXFwwMzNbMzNtZXhhbXBsZXNcXFxcMDMzWzBtXFxcIiAmJiBybSAtdnJmIGV4YW1wbGVzL2J1aWxkLypcIixcblx0XHRcImNsZWFuOnRlc3RcIjogXCJlY2hvIFxcXCJcXFxcMDMzWzM2OzFtW0NsZWFuXVxcXFwwMzNbMG0gXFxcXDAzM1szM210ZXN0XFxcXDAzM1swbVxcXCIgJiYgcm0gLXZyZiB0ZXN0L2J1aWxkLypcIixcblx0XHRcImNsZWFuXCI6IFwibnBtIHJ1biBjbGVhbjpleGFtcGxlcyAmJiBucG0gcnVuIGNsZWFuOnRlc3RcIixcblx0XHRcImNvcHk6anNcIjogXCJjcCAtdmYgLi9kaXN0L25hdGl2ZS5qcyAuL2FuZHJvaWQvc2RrL2Fzc2V0cy9tYWluLmpzXCIsXG5cdFx0XCJjb3B5OmV4YW1wbGVzXCI6IFwicm0gLXJmIC4vYW5kcm9pZC9wbGF5Z3JvdW5kL2FwcC9zcmMvbWFpbi9hc3NldHMvKiAmJiBjcCAtdnJmIC4vZXhhbXBsZXMvYnVpbGQvKiAuL2FuZHJvaWQvcGxheWdyb3VuZC9hcHAvc3JjL21haW4vYXNzZXRzL1wiLFxuXHRcdFwiY29weVwiOiBcIm5wbSBydW4gY29weTpqcyAmJiBucG0gcnVuIGNvcHk6ZXhhbXBsZXNcIlxuXHR9LFxuXHRcInN1YnZlcnNpb25cIjoge1xuXHRcdFwiYnJvd3NlclwiOiBcIjAuMi4yM1wiLFxuXHRcdFwiZnJhbWV3b3JrXCI6IFwiMC4xNS4yXCIsXG5cdFx0XCJ0cmFuc2Zvcm1lclwiOiBcIj49MC4xLjUgPDAuNFwiXG5cdH0sXG5cdFwiZGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImFuaW1hdGlvbmpzXCI6IFwiXjAuMS41XCIsXG5cdFx0XCJjYXJyb3VzZWxcIjogXCJeMC4xLjExXCIsXG5cdFx0XCJjb3JlLWpzXCI6IFwiXjIuNC4wXCIsXG5cdFx0XCJjdWJpY2JlemllclwiOiBcIl4wLjEuMVwiLFxuXHRcdFwiZW52ZFwiOiBcIl4wLjEuMVwiLFxuXHRcdFwiZml4ZWRzdGlja3lcIjogXCJeMC4xLjBcIixcblx0XHRcImh0dHB1cmxcIjogXCJeMC4xLjFcIixcblx0XHRcImtvdW50ZG93blwiOiBcIl4wLjEuMlwiLFxuXHRcdFwibGF6eWltZ1wiOiBcIl4wLjEuMlwiLFxuXHRcdFwibGllXCI6IFwiXjMuMC40XCIsXG5cdFx0XCJtb2RhbHNcIjogXCJeMC4xLjVcIixcblx0XHRcInNjcm9sbC10b1wiOiBcIjAuMC4yXCIsXG5cdFx0XCJzZW12ZXJcIjogXCJeNS4xLjBcIixcblx0XHRcInRyYW5zaXRpb25pemVcIjogXCIwLjAuM1wiLFxuXHRcdFwid2VleC1jb21wb25lbnRzXCI6IFwiXjAuMS4zXCJcblx0fSxcblx0XCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYmFiZWwtY2xpXCI6IFwifjYuNC41XCIsXG5cdFx0XCJiYWJlbC1sb2FkZXJcIjogXCJeNi4yLjRcIixcblx0XHRcImJhYmVsLXByZXNldC1lczIwMTVcIjogXCJeNi45LjBcIixcblx0XHRcImNoYWlcIjogXCJeMy41LjBcIixcblx0XHRcImNocm9tZWRyaXZlclwiOiBcIl4yLjIxLjJcIixcblx0XHRcImNyb3NzLXNwYXduXCI6IFwiXjQuMC4wXCIsXG5cdFx0XCJjc3MtbG9hZGVyXCI6IFwiXjAuMjMuMVwiLFxuXHRcdFwiZXNsaW50XCI6IFwiXjIuMTEuMVwiLFxuXHRcdFwiaHR0cC1zZXJ2ZXJcIjogXCJeMC45LjBcIixcblx0XHRcImlzcGFydGFcIjogXCJeNC4wLjBcIixcblx0XHRcImlzdGFuYnVsXCI6IFwiXjAuNC4zXCIsXG5cdFx0XCJqc29uLWxvYWRlclwiOiBcIl4wLjUuNFwiLFxuXHRcdFwibW9jaGFcIjogXCJeMi41LjNcIixcblx0XHRcIm5pZ2h0d2F0Y2hcIjogXCJeMC45LjRcIixcblx0XHRcInBoYW50b21qcy1wcmVidWlsdFwiOiBcIl4yLjEuN1wiLFxuXHRcdFwic2VsZW5pdW0tc2VydmVyXCI6IFwiMi41My4xXCIsXG5cdFx0XCJzZXJ2ZVwiOiBcIl4xLjQuMFwiLFxuXHRcdFwic2lub25cIjogXCJeMS4xNy40XCIsXG5cdFx0XCJzaW5vbi1jaGFpXCI6IFwiXjIuOC4wXCIsXG5cdFx0XCJzdHlsZS1sb2FkZXJcIjogXCJeMC4xMy4xXCIsXG5cdFx0XCJ1Z2xpZnktanNcIjogXCJeMi42LjRcIixcblx0XHRcIndlYnBhY2tcIjogXCJeMS4xMy4xXCIsXG5cdFx0XCJ3ZWV4LWxvYWRlclwiOiBcIl4wLjIuMFwiXG5cdH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3BhY2thZ2UuanNvblxuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhlIGFwaSBmb3IgaW52b2tpbmcgd2l0aCBcIiRcIiBwcmVmaXhcbiAqL1xuaW1wb3J0IHsgZXh0ZW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogY29tbW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgJHZtIGluc3RlYWRcbiAqIGZpbmQgdGhlIHZtIGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1ZtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gJCAoaWQpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgVm0jJHZtIGluc3RlYWQnKVxuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSBlbGVtZW50IGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZWwgKGlkKSB7XG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8uZWxcbiAgfVxufVxuXG4vKipcbiAqIGZpbmQgdGhlIHZtIG9mIHRoZSBjdXN0b20gY29tcG9uZW50IGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1ZtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHZtIChpZCkge1xuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuLyoqXG4gKiBGaXJlIHdoZW4gZGlmZmVyIHJlbmRlcmluZyBmaW5pc2hlZFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gJHJlbmRlclRoZW4gKGZuKSB7XG4gIGNvbnN0IGFwcCA9IHRoaXMuX2FwcFxuICBjb25zdCBkaWZmZXIgPSBhcHAuZGlmZmVyXG4gIHJldHVybiBkaWZmZXIudGhlbigoKSA9PiB7XG4gICAgZm4oKVxuICB9KVxufVxuXG4vKipcbiAqIHNjcm9sbCBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZCBpbnRvIHZpZXcsXG4gKiBtb3Jlb3ZlciBzcGVjaWZ5IGEgbnVtYmVyIG9mIG9mZnNldCBvcHRpb25hbGx5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG9mZnNldFxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNjcm9sbFRvIChpZCwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNjcm9sbFRvIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZG9tXFwnKScgK1xuICAgICAgICAgICcuc2Nyb2xsVG8oZWwsIG9wdGlvbnMpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGVsID0gdGhpcy4kZWwoaWQpXG4gIGlmIChlbCkge1xuICAgIGNvbnN0IGRvbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdkb20nKVxuICAgIGRvbS5zY3JvbGxUb0VsZW1lbnQoZWwucmVmLCB7IG9mZnNldDogb2Zmc2V0IH0pXG4gIH1cbn1cblxuLyoqXG4gKiBwZXJmb3JtIHRyYW5zaXRpb24gYW5pbWF0aW9uIG9uIGFuIGVsZW1lbnQgc3BlY2lmaWVkIGJ5IGlkXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaWRcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5zdHlsZXNcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zLmR1cmF0aW9uKG1zKVxuICogQHBhcmFtICB7b2JqZWN0fSAgIFtvcHRpb25zLnRpbWluZ0Z1bmN0aW9uXVxuICogQHBhcmFtICB7b2JqZWN0fSAgIFtvcHRpb25zLmRlbGF5PTAobXMpXVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdHJhbnNpdGlvbiAoaWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsID0gdGhpcy4kZWwoaWQpXG4gIGlmIChlbCAmJiBvcHRpb25zICYmIG9wdGlvbnMuc3R5bGVzKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpXG4gICAgYW5pbWF0aW9uLnRyYW5zaXRpb24oZWwucmVmLCBvcHRpb25zLCAoLi4uYXJncykgPT4ge1xuICAgICAgdGhpcy5fc2V0U3R5bGUoZWwsIG9wdGlvbnMuc3R5bGVzKVxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soLi4uYXJncylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogZ2V0IHNvbWUgY29uZmlnXG4gKiBAcmV0dXJuIHtvYmplY3R9IHNvbWUgY29uZmlnIGZvciBhcHAgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBidW5kbGVVcmxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGVidWdcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBlbnZcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYud2VleFZlcnNpb24oZXguIDEuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5hcHBOYW1lKGV4LiBUQi9UTSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwVmVyc2lvbihleC4gNS4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LnBsYXRmb3JtKGV4LiBpT1MvQW5kcm9pZClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYub3NWZXJzaW9uKGV4LiA3LjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuZGV2aWNlTW9kZWwgKipuYXRpdmUgb25seSoqXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW52LltkZXZpY2VXaWR0aD03NTBdXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW52LmRldmljZUhlaWdodFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGdldENvbmZpZyAoY2FsbGJhY2spIHtcbiAgY29uc3QgY29uZmlnID0gZXh0ZW5kKHtcbiAgICBlbnY6IGdsb2JhbC5XWEVudmlyb25tZW50IHx8IHt9XG4gIH0sIHRoaXMuX2FwcC5vcHRpb25zKVxuICBpZiAodHlwb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSB0aGUgY2FsbGJhY2sgb2YgVm0jJGdldENvbmZpZyhjYWxsYmFjaykgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAndGhpcyBhcGkgbm93IGNhbiBkaXJlY3RseSBSRVRVUk4gY29uZmlnIGluZm8uJylcbiAgICBjYWxsYmFjayhjb25maWcpXG4gIH1cbiAgcmV0dXJuIGNvbmZpZ1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiByZXF1ZXN0IG5ldHdvcmsgdmlhIGh0dHAgcHJvdG9jb2xcbiAqIEBwYXJhbSAge29iamVjdH0gICBwYXJhbXNcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHNlbmRIdHRwIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNlbmRIdHRwIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvc3RyZWFtXFwnKScgK1xuICAgICAgICAgICcuc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3Qgc3RyZWFtID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpXG4gIHN0cmVhbS5zZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBvcGVuIGEgdXJsXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9wZW5VUkwgKHVybCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRvcGVuVVJMIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZXZlbnRcXCcpJyArXG4gICAgICAgICAgJy5vcGVuVVJMKHVybClcIiBpbnN0ZWFkJylcbiAgY29uc3QgZXZlbnQgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZXZlbnQnKVxuICBldmVudC5vcGVuVVJMKHVybClcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogc2V0IGEgdGl0bGUgZm9yIHBhZ2VcbiAqIEBwYXJhbSAge3N0cmluZ30gdGl0bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZXRUaXRsZSAodGl0bGUpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2V0VGl0bGUgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9wYWdlSW5mb1xcJyknICtcbiAgICAgICAgICAnLnNldFRpdGxlKHRpdGxlKVwiIGluc3RlYWQnKVxuICBjb25zdCBwYWdlSW5mbyA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdwYWdlSW5mbycpXG4gIHBhZ2VJbmZvLnNldFRpdGxlKHRpdGxlKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBcInJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2R1bGVOYW1lJykgaW5zdGVhZFwiXG4gKiBpbnZva2UgYSBuYXRpdmUgbWV0aG9kIGJ5IHNwZWNpZmluZyB0aGUgbmFtZSBvZiBtb2R1bGUgYW5kIG1ldGhvZFxuICogQHBhcmFtICB7c3RyaW5nfSBtb2R1bGVOYW1lXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqIEBwYXJhbSAgey4uLip9IHRoZSByZXN0IGFyZ3VtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGNhbGwgKG1vZHVsZU5hbWUsIG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkY2FsbCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWVcXCcpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IG1vZHVsZSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKG1vZHVsZU5hbWUpXG4gIGlmIChtb2R1bGUgJiYgbW9kdWxlW21ldGhvZE5hbWVdKSB7XG4gICAgbW9kdWxlW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcGkvbWV0aG9kcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=