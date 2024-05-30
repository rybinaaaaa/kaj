/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/PageRenderer.js":
/*!*****************************!*\
  !*** ./src/PageRenderer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageRenderer)
/* harmony export */ });
/* harmony import */ var _pages_MainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/MainPage */ "./src/pages/MainPage.js");
/* harmony import */ var _pages_ItemPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/ItemPage */ "./src/pages/ItemPage.js");
/* harmony import */ var _pages_AboutUsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/AboutUsPage */ "./src/pages/AboutUsPage.js");
/* harmony import */ var _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ErrorPage */ "./src/pages/ErrorPage.js");





class PageRenderer {
  static mainPageRenderer = new _pages_MainPage__WEBPACK_IMPORTED_MODULE_0__["default"]();
  static itemPageRenderer = new _pages_ItemPage__WEBPACK_IMPORTED_MODULE_1__["default"]();
  static aboutUsPageRenderer = new _pages_AboutUsPage__WEBPACK_IMPORTED_MODULE_2__["default"]();
  static errorPageRenderer = new _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_3__["default"]();

  constructor() {}

  static pages = [
    {
      regex: /^\/semka24\/$/,
      render: this.mainPageRenderer.render.bind(this.mainPageRenderer),
    },
    {
      regex: /^\/semka24\/item\/\d+$/,
      render: this.itemPageRenderer.render.bind(this.itemPageRenderer),
    },
    {
      regex: /^\/semka24\/aboutUs/,
      render: this.aboutUsPageRenderer.render.bind(this.aboutUsPageRenderer),
    },
  ];

  static renderPage(search) {
    for (let p of this.pages) {
      if (p.regex.test(search)) {
        p.render(search);
        return;
      }
    }
    this.errorPageRenderer.render();
  }

  static handleEventOnLinks(e, a) {
    e.preventDefault();
    const search = a.href;
    console.log(window.location.href);
    history.pushState({}, '', search);
    this.renderPage(window.location.pathname);
  }

  static handleLinks() {
    document.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', (e) => this.handleEventOnLinks(e, a));
    });
  }
}


/***/ }),

/***/ "./src/components/MyAudio/MyAudio.js":
/*!*******************************************!*\
  !*** ./src/components/MyAudio/MyAudio.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyAudio)
/* harmony export */ });
/* harmony import */ var _handlers_AudioHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handlers/AudioHandler */ "./src/handlers/AudioHandler.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./src/components/MyAudio/template.js");



class MyAudio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.audioHandler = new _handlers_AudioHandler__WEBPACK_IMPORTED_MODULE_0__["default"](this.getAttribute('mp3Src'));
    }

  connectedCallback() {
    const content = _template__WEBPACK_IMPORTED_MODULE_1__["default"].content.cloneNode(true);

    const soundOnEl = content.querySelector('#sound_on');
    const soundOffEl = content.querySelector('#sound_off');

    soundOnEl.addEventListener('click', (e) => {
      soundOnEl.classList.remove('active');
      soundOffEl.classList.add('active');
      this.audioHandler.pause();
    });

    soundOffEl.addEventListener('click', (e) => {
      soundOffEl.classList.remove('active');
      soundOnEl.classList.add('active');
      this.audioHandler.play();
    });

    this.shadowRoot.appendChild(content);
  }

  disconnectedCallback() {
    this.audioHandler.pause();
  }
}


/***/ }),

/***/ "./src/components/MyAudio/template.js":
/*!********************************************!*\
  !*** ./src/components/MyAudio/template.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultStyles */ "./src/components/defaultStyles.js");


const audioTemplate = document.createElement('template');

audioTemplate.innerHTML = `
                        <style>
                        ${_defaultStyles__WEBPACK_IMPORTED_MODULE_0__["default"]}
                        .sound {
                          border: 5px solid transparent;
                          width: 34px;
                          height: 34px;
                          display: none;
                          position: absolute;
                          right: 20px;
                          top: 20px;
                          transition: all .2s;
                        
                          path {
                            fill: white;
                          }
                        
                          &.active {
                            display: block;
                        
                            &:hover {
                              border-radius: 50px;
                              border: 5px solid rgb(97, 97, 98);
                              background-color: rgb(97, 97, 98);
                            }
                          }
                        }
                        </style>
                        <svg class="sound" id="sound_on" xmlns="http://www.w3.org/2000/svg" fill="none">
                          <path d="M15.7404 17.7827C15.4357 17.916 15.2357 18.2207 15.2357 18.5492C15.2357 18.8349 15.3786 19.0967 15.6166 19.2491C15.7547 19.3395 15.9118 19.3871 16.0737 19.3871C16.188 19.3871 16.3022 19.3633 16.4117 19.3157C19.3398 18.0207 21.2347 15.1212 21.2347 11.9266C21.2347 8.73189 19.3398 5.8324 16.4117 4.53739C16.1546 4.42312 15.8547 4.44693 15.6214 4.59928C15.3833 4.7564 15.2405 5.01826 15.2405 5.30392C15.2405 5.63243 15.4357 5.93238 15.7452 6.07045C18.0638 7.09884 19.5636 9.39844 19.5636 11.9266C19.5636 14.4547 18.0638 16.7543 15.7452 17.7827H15.7404Z" fill="black"/>
                          <path d="M17.8449 11.9361C17.8449 13.6405 16.7594 15.0879 15.2406 15.6259V8.24625C16.7594 8.78425 17.8449 10.2364 17.8449 11.9408V11.9361Z" fill="black"/>
                          <path d="M12.3267 3.10913L6.11356 7.86543H3.19027C2.53324 7.86543 2 8.39867 2 9.05569V14.9356C2 15.5926 2.53324 16.1259 3.19027 16.1259H6.11356L12.3267 20.8822C12.6981 21.1678 13.2361 20.9012 13.2361 20.4346V3.56619C13.2361 3.09485 12.6981 2.83299 12.3267 3.11865V3.10913Z" fill="black"/>
                        </svg>
                        <svg class="sound active" xmlns="http://www.w3.org/2000/svg" id="sound_off" fill="none">
                          <path d="M20.7651 12.1783C20.7651 13.4884 20.4222 14.7457 19.7979 15.8404L18.6505 14.6929C19.0198 13.9192 19.2176 13.0619 19.2176 12.1739C19.2176 9.8351 17.8372 7.71611 15.6919 6.76213C15.4105 6.63903 15.2303 6.35767 15.2303 6.05873C15.2303 5.79496 15.3577 5.55316 15.582 5.40809C15.8018 5.26741 16.0743 5.24103 16.3161 5.35094C19.0198 6.54671 20.7695 9.22402 20.7695 12.1739L20.7651 12.1783Z" fill="black"/>
                          <path d="M17.635 12.1871C17.635 12.6311 17.5559 13.0575 17.4064 13.4488L15.2303 11.2726V8.77557C16.6327 9.27235 17.635 10.6132 17.635 12.1871Z" fill="black"/>
                          <path d="M13.3794 4.44968V9.42182L9.96356 6.00595L12.5398 4.03203C12.8827 3.77266 13.3794 4.01445 13.3794 4.44968Z" fill="black"/>
                          <path d="M5.02667 8.42828L13.3795 16.7855V20.0256C13.3795 20.4608 12.8827 20.707 12.5398 20.4432L6.79835 16.0514H4.09906C3.49238 16.0514 3 15.559 3 14.9523V9.52734C3 8.92066 3.48798 8.42828 4.09906 8.42828H5.02227H5.02667Z" fill="black"/>
                          <path d="M20.7652 21.3576C20.5409 21.3576 20.3211 21.2741 20.1497 21.1026L3.5275 4.48043C3.18899 4.14192 3.18899 3.59239 3.5275 3.25388C3.86601 2.91537 4.41554 2.91537 4.75405 3.25388L21.3762 19.8761C21.7147 20.2146 21.7147 20.7641 21.3762 21.1026C21.2048 21.2741 20.985 21.3576 20.7608 21.3576H20.7652Z" fill="black"/>
                        </svg>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audioTemplate);

/***/ }),

/***/ "./src/components/MyConnectionAlert/MyConnectionAlert.js":
/*!***************************************************************!*\
  !*** ./src/components/MyConnectionAlert/MyConnectionAlert.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyConnectionAlert)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/components/MyConnectionAlert/template.js");


class MyConnectionAlert extends HTMLElement {
  constructor() {
    super();
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
    this.handleOffline = this.handleOffline.bind(this);
    this.handleOnline = this.handleOnline.bind(this);
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('online', this.handleOnline);
  }

  disconnectedCallback() {
    window.removeEventListener('offline', this.handleOffline);
    window.removeEventListener('online', this.handleOnline);
  }

  handleOffline() {
    this.classList.add('active');
  }

  handleOnline() {
    this.classList.remove('active');
  }
}


/***/ }),

/***/ "./src/components/MyConnectionAlert/styleProps.js":
/*!********************************************************!*\
  !*** ./src/components/MyConnectionAlert/styleProps.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const styleProps = `
.connection_alert {
  border-radius: 5px;
  text-transform: uppercase;
  color: white;
  display: inline-block;
  background-color: #ff4141;
  text-align: center;
  padding: 20px;
}
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleProps);


/***/ }),

/***/ "./src/components/MyConnectionAlert/template.js":
/*!******************************************************!*\
  !*** ./src/components/MyConnectionAlert/template.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styleProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleProps */ "./src/components/MyConnectionAlert/styleProps.js");
/* harmony import */ var _defaultStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultStyles */ "./src/components/defaultStyles.js");



const alertTemplate = document.createElement('template');
alertTemplate.innerHTML = `
<style>
${_defaultStyles__WEBPACK_IMPORTED_MODULE_1__["default"]}
${_styleProps__WEBPACK_IMPORTED_MODULE_0__["default"]}
</style>
 <div class="connection_alert">Bad connection</div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alertTemplate);


/***/ }),

/***/ "./src/components/MyHeader/MyHeader.js":
/*!*********************************************!*\
  !*** ./src/components/MyHeader/MyHeader.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyHeader)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/components/MyHeader/template.js");
/* harmony import */ var _PageRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PageRenderer */ "./src/PageRenderer.js");



class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    this.shadowRoot.querySelector('#go-back').addEventListener('click', e => {
      e.preventDefault();
      window.history.back();
    })
    this.shadowRoot.querySelector('.about_us').addEventListener('click', e => {
      _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].handleEventOnLinks(e, e.target)
    })

  }
}


/***/ }),

/***/ "./src/components/MyHeader/styleProps.js":
/*!***********************************************!*\
  !*** ./src/components/MyHeader/styleProps.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const styleProps = `
    .container {
      padding: 0 110px;
      flex-grow: 1;
    }
    
      @media (max-width: 768px) {
        .container {
          row-gap: 10px;
        }
      }
      
      
      @media (max-width: 900px) {
        .container {
          padding: 20px;
        }
      }
      
      @media (max-width: 576px) {
        .container {
          grid-template-columns: repeat(2, 1fr);
        }
      }

    .header {
      display: grid;
      background-color: #ffe35c;
      height: 57px;
      grid-template-columns: 64px 1fr repeat(2, auto);
      align-items: center;
      column-gap: 50px;
    }
    .header .about_us {
      grid-column-start: 4;
      color: #ffffff;
    }
    .header__arrow-back line {
      stroke: white;
    }
    
    @media (max-width: 900px) {
      .header {
        column-gap: 20px;
      }
  }
`
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleProps);

/***/ }),

/***/ "./src/components/MyHeader/template.js":
/*!*********************************************!*\
  !*** ./src/components/MyHeader/template.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styleProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleProps */ "./src/components/MyHeader/styleProps.js");
/* harmony import */ var _defaultStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultStyles */ "./src/components/defaultStyles.js");



const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
                      <style>
                        ${_defaultStyles__WEBPACK_IMPORTED_MODULE_1__["default"]}
                        ${_styleProps__WEBPACK_IMPORTED_MODULE_0__["default"]}
                      </style>
                     <header class="header container">
                        <a href="/semka24" id="go-back">
                          <svg width="65" height="21" viewBox="0 0 65 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                              class="header__arrow-back">
                            <line x1="1.26834" y1="11.5001" x2="64.9922" y2="10.5001" stroke="#9B9494" />
                            <line x1="1.11949" y1="11.5166" x2="37.6718" y2="20.5124" stroke="#9B9494" />
                            <line x1="1.13007" y1="11.5218" x2="37.1301" y2="0.521825" stroke="#9B9494" />
                          </svg>
                        </a>
                        <a href="/semka24/aboutUs" class="about_us">About us</a>
                  </header>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerTemplate);

/***/ }),

/***/ "./src/components/MyItemCard/MyItemCard.js":
/*!*************************************************!*\
  !*** ./src/components/MyItemCard/MyItemCard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyItemCard)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/components/MyItemCard/template.js");
/* harmony import */ var _PageRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PageRenderer */ "./src/PageRenderer.js");



class MyItemCard extends HTMLElement {
  constructor() {
    super();
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    setTimeout(() => {
      this.shadowRoot.querySelector('.item').classList.add('show');
    }, 100);
  }

  fetchCard() {
    this.shadowRoot.querySelector('.item').classList.remove('loading');

    const itemName = this.getAttribute('name');
    const itemImgSrc = this.getAttribute('imgSrc');
    const itemAuthor = this.getAttribute('author');
    const itemId = this.getAttribute('id');

    this.shadowRoot.querySelector('.item__img img').src = itemImgSrc;
    this.shadowRoot.querySelector('.title-text').textContent = itemName;
    this.shadowRoot.querySelector('.subtitle-text').textContent = itemAuthor;
    this.href = `/semka24/item/${itemId}`;
    this.addEventListener('click', (e) => {
      e.preventDefault();
      const search = this.href;
      console.log(window.location.href);
      history.pushState({}, '', search);
      _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage(window.location.pathname);
    })
  }

  static get observedAttributes() {
    return ['loading'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!(name === 'loading' && newValue === 'true')) {
      this.fetchCard();
    }
  }

  setItem(item) {
    this.setAttribute('id', item.id);
    this.setAttribute('name', item.name);
    this.setAttribute('imgSrc', item.imgSrc);
    this.setAttribute('author', item.author);
    this.setAttribute('loading', 'false');
  }
}


/***/ }),

/***/ "./src/components/MyItemCard/styleProps.js":
/*!*************************************************!*\
  !*** ./src/components/MyItemCard/styleProps.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultStyles */ "./src/components/defaultStyles.js");


const styleProps = `
    ${_defaultStyles__WEBPACK_IMPORTED_MODULE_0__["default"]}
    .loader {
      display:none;
      width: 50px;
      aspect-ratio: 1;
      border-radius: 50%;
      border: 8px solid #ffffff;
      border-right-color: #CCA033;
      animation: loading 1s infinite linear;
    }
    
    @keyframes loading {
      100% {
        transform: rotate(360deg);
      }
    }
    .title-text {
      font-size: 27px;
      font-weight: 400;
    }
    .subtitle-text {
      font-size: 13px;
      font-weight: 700;
    }
    .item {
      display: block;
      opacity: 0; /* Начальное состояние элемента */
      transition: all 0.3s;
    }
    .item.loading {
      opacity: 1;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
     .item.loading .loader{
      display: block;
    }
    .item.loading img {
      display: none;
    }
    .item.show {
      opacity: 1; /* Показываем элемент */
    }
    .item__img {
      display: flex;
      align-content: center;
      height: 180px;
    }
    .item__img img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      .title-text {
        font-size: 15px;
      }
      .subtitle-text {
        font-size: 8px;
      }
    }
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleProps);

/***/ }),

/***/ "./src/components/MyItemCard/template.js":
/*!***********************************************!*\
  !*** ./src/components/MyItemCard/template.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styleProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleProps */ "./src/components/MyItemCard/styleProps.js");


const cardTemplate = document.createElement('template');

cardTemplate.innerHTML = `
        <style>
        ${_styleProps__WEBPACK_IMPORTED_MODULE_0__["default"]}
       </style>
        <a href="#" class="item loading">
          <div class="loader"></div>
          <div class="item__img">
          <img
                  src="#" alt="picture">
          </div>
          <div class="title-text"></div>
          <div class="subtitle-text"></div>
        </a>
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardTemplate);

/***/ }),

/***/ "./src/components/MyModal/MyModal.js":
/*!*******************************************!*\
  !*** ./src/components/MyModal/MyModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyModal)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/components/MyModal/template.js");
/* harmony import */ var _handlers_ModalHandler2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../handlers/ModalHandler2 */ "./src/handlers/ModalHandler2.js");



class MyModal extends HTMLElement {
  constructor() {
    super();
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });

    this.modalToBuy = this.content.querySelector('my-modal-buy');
    this.modalAlert = this.content.querySelector('my-modal-alert');
    this.modalHandler = new _handlers_ModalHandler2__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  }

  connectedCallback() {
    this.modalToBuy.setAttribute('item-id', this.getAttribute('item-id'));

    this.addEventListener('click', (e) => {
      const modalContentBuy = this.shadowRoot
        .querySelector('my-modal-buy')
        .shadowRoot.querySelector('.modal__content');
      if (!e.composedPath().includes(modalContentBuy)) {
        this.setAttribute('active', 'false');
      }
    });

    this.shadowRoot.appendChild(this.content);
    this.modalHandler.init();
  }

  static get observedAttributes() {
    return ['active'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      this.modalToBuy.setAttribute('active', newValue);
    }
  }
}


/***/ }),

/***/ "./src/components/MyModal/MyModalAlert/MyModalAlert.js":
/*!*************************************************************!*\
  !*** ./src/components/MyModal/MyModalAlert/MyModalAlert.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyModalAlert)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/components/MyModal/MyModalAlert/template.js");


class MyModalAlert extends HTMLElement {
  constructor() {
    super();
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return ['active'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === null) return;
    if (name === 'active') {
      if (newValue === 'true') {
        this.shadowRoot.querySelector('.modal').classList.add('active');
      } else {
        this.shadowRoot.querySelector('.modal').classList.remove('active');
      }
    }
  }
}


/***/ }),

/***/ "./src/components/MyModal/MyModalAlert/template.js":
/*!*********************************************************!*\
  !*** ./src/components/MyModal/MyModalAlert/template.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styleProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styleProps */ "./src/components/MyModal/styleProps.js");


const modalTemplate = document.createElement('template');

modalTemplate.innerHTML = `
        <style>
                ${_styleProps__WEBPACK_IMPORTED_MODULE_0__["default"]}
        </style>
        <div class="modal" id="modal_alert">
          <div class="modal__content">
            Dear ${localStorage.getItem('user_name') ?? 'customer'},
            We have received your application
            Thank you, we wil contact you as soon as possible!
          </div>
        </div>
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalTemplate);


/***/ }),

/***/ "./src/components/MyModal/MyModalToBuy/MyModalToBuy.js":
/*!*************************************************************!*\
  !*** ./src/components/MyModal/MyModalToBuy/MyModalToBuy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyModalToBuy)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/components/MyModal/MyModalToBuy/template.js");


class MyModalToBuy extends HTMLElement {
  constructor() {
    super();
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.content.querySelector('#id').value = this.getAttribute('item-id');
    this.shadowRoot.appendChild(this.content);
  }

  static get observedAttributes() {
    return ['active'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === null) return;
    if (name === 'active') {
      if (newValue === 'true') {
        this.shadowRoot.querySelector('.modal').classList.add('active');
      } else {
        this.shadowRoot.querySelector('.modal').classList.remove('active');
      }
    }
  }
}


/***/ }),

/***/ "./src/components/MyModal/MyModalToBuy/template.js":
/*!*********************************************************!*\
  !*** ./src/components/MyModal/MyModalToBuy/template.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styleProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styleProps */ "./src/components/MyModal/styleProps.js");


const phoneNumberErrorMessage = 'Please enter a valid phone number.';
const emailErrorMessage = 'Please enter a valid email address.';
const nameErrorMessage = 'Please enter a valid name.';
const surnameErrorMessage = 'Please enter a valid surname.';

const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
        <style>
                ${_styleProps__WEBPACK_IMPORTED_MODULE_0__["default"]}
        </style>
        <div class="modal" id="modal_buy">
          <div class="modal__content">
            <form id="modal_buy_form" action="/" method="post">
              <fieldset>
                <legend>
                  Please fill in your contact information, and we will get in touch with you.
                </legend>
                <label for="email">Email</label>
                <input value="${localStorage.getItem('user_email') ?? ''}" name="email" id="email" type="email" placeholder="type your email" />
                <div class="error_message email">${emailErrorMessage}</div>
                <label for="number">Phone number</label>
                <input value="${localStorage.getItem('user_number') ?? ''}" name="number" id="number" type="number" placeholder="type your number" />
                <div class="error_message number">${phoneNumberErrorMessage}</div>
                <label for="name">Name</label>
                <input value="${localStorage.getItem('user_name') ?? ''}" name="name" id="name" type="text" placeholder="type your name" />
                <div class="error_message name">${nameErrorMessage}</div>
                <label for="surname">Surname</label>
                <input value="${localStorage.getItem('user_surname') ?? ''}" name="surname" id="surname" type="text" placeholder="type your surname" />
                <div class="error_message surname" >${surnameErrorMessage}</div>
        				<input name="id" id="id" type="hidden"/>
              </fieldset>
              <button id="submit_buy_request" type="submit">Contact me</button>
            </form>
          </div>
    </div>
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalTemplate);

/***/ }),

/***/ "./src/components/MyModal/styleProps.js":
/*!**********************************************!*\
  !*** ./src/components/MyModal/styleProps.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultStyles */ "./src/components/defaultStyles.js");


const styleProps = `
${_defaultStyles__WEBPACK_IMPORTED_MODULE_0__["default"]}
@keyframes closing {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes incorrect_input {
  0% {
    transform: translateX(-5px);
  }
  25% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.22);
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transition: opacity 0.4s;
  display: flex;
  height: 0;
  opacity: 0;
}
.modal.closing {
  animation: closing 0.3s 1 linear;
}
.modal.active {
  height: 100%;
  opacity: 1;
}
.modal.active .modal__content {
  transform: translateY(0);
}
.modal__content {
  transform: translateY(-100px);
  width: 300px;
  background: #ffffff;
  border: rgb(249, 191, 59) solid 2px;
  border-radius: 20px;
  padding: 20px;
  transition: transform 0.3s ease;
}
.modal__content .error_message {
  transform: translateY(-5px);
  margin-left: 3px;
  font-size: 12px;
  height: 0;
  overflow: hidden;
  transition: transform 0.4s ease, height 0.4s ease;
}
.modal__content button {
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border-radius: 50px;
  background: #ffffff;
  border: #ffe35c 2px solid;
  color: #ffe35c;
  font-weight: 700;
  transition: color 0.2s, background 0.8s;
}
.modal__content button:hover {
  background: #ffe35c;
  color: #ffffff;
}
.modal__content fieldset {
  position: relative;
  border: none;
}
.modal__content fieldset legend {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}
.modal__content fieldset label:has(+ input.incorrect) {
  color: red;
}
.modal__content fieldset input {
  display: block;
  border-radius: 7px;
  border: #ffe35c 2px solid;
  width: 100%;
  padding: 8px 0 5px 5px;
  margin-top: 12px;
}
.modal__content fieldset input.incorrect {
  border: red 2px solid;
  animation: incorrect_input 0.1s 4 linear;
}
.modal__content fieldset input.incorrect + .error_message {
  height: fit-content;
  color: red;
  transform: translateY(0);
}
.modal__content fieldset input:focus {
  outline: none;
  position: relative;
}
.modal__content fieldset input:focus::placeholder {
  visibility: hidden;
}
.modal__content fieldset input::placeholder {
  font-size: 12px;
  color: rgba(122, 122, 122, 0.77);
}
.modal__content fieldset label {
  transition: transform 0.3s, opacity 0.3s;
  transform: translate(10px, 20px);
  font-size: 14px;
  opacity: 0;
  color: #ffe35c;
  position: absolute;
  z-index: 999;
  display: block;
  height: 0;
  overflow: hidden;
  background: #ffffff;
}
.modal__content fieldset label:has(+ input:focus) {
  opacity: 1;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.8);
  transform: translate(10px, -1px);
  height: auto;
}
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleProps);

/***/ }),

/***/ "./src/components/MyModal/template.js":
/*!********************************************!*\
  !*** ./src/components/MyModal/template.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styleProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleProps */ "./src/components/MyModal/styleProps.js");


const modalTemplate = document.createElement('template');

modalTemplate.innerHTML = `
        <style>
                ${_styleProps__WEBPACK_IMPORTED_MODULE_0__["default"]}
        </style>
        <my-modal-buy active="false"></my-modal-buy>
        <my-modal-alert active="false"></my-modal-alert>
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalTemplate);

/***/ }),

/***/ "./src/components/MyNavigation/MyNavigation.js":
/*!*****************************************************!*\
  !*** ./src/components/MyNavigation/MyNavigation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyNavigation)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/components/MyNavigation/template.js");


class MyNavigation extends HTMLElement {
  constructor() {
    super();
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const next = this.getAttribute('next');
    const prev = this.getAttribute('prev');

    if (+next) {
      this.content.querySelector('#next').href = `/semka24/item/${next}`;
    } else {
      this.content.querySelector('#next').classList.add('hidden');
    }

    if (+prev) {
      this.content.querySelector('#prev').href = `/semka24/item/${prev}`;
    } else {
      this.content.querySelector('#prev').classList.add('hidden');
    }

    this.shadowRoot.appendChild(this.content);
  }
}


/***/ }),

/***/ "./src/components/MyNavigation/styleProps.js":
/*!***************************************************!*\
  !*** ./src/components/MyNavigation/styleProps.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const styleProps = `
  @keyframes arrow_move {
    0% {
      left: 0;
    }
    33% {
      left: 40px;
    }
    100% {
      left: 0;
    }
  }
  @keyframes arrow_move_stroke {
    0% {
      width: 0;
    }
    33% {
      width: 0;
    }
    100% {
      width: 40px;
    }
  }
  .nav_lower {
    position: relative;
    min-height: 50px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  
  .nav_lower .arrow {
    width: 40px;
    height: 20px;
    position: relative;
    margin: 20px;
    z-index: 1000;
    animation-play-state: paused;
  }
  .nav_lower .arrow.hidden {
    opacity: 0;
    pointer-events: none;
  }
  .nav_lower .arrow-right {
    transform: scale(-1, 1);
  }
  .nav_lower .arrow:hover {
    animation-play-state: running;
  }
  .nav_lower .arrow:hover::before {
    width: 40px;
    animation: arrow_move_stroke 0.3s 1;
  }
  .nav_lower .arrow:hover::after {
    animation: arrow_move 0.3s 1;
  }
  .nav_lower .arrow::before {
    right: 0;
    position: absolute;
    content: "";
    width: 0;
    display: block;
    height: 1px;
    background: black;
    top: 5px;
    transition: width 0.2s ease-in;
  }
  .nav_lower .arrow::after {
    position: absolute;
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    rotate: 45deg;
    left: 0;
    z-index: -1;
  }
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleProps);

/***/ }),

/***/ "./src/components/MyNavigation/template.js":
/*!*************************************************!*\
  !*** ./src/components/MyNavigation/template.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styleProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleProps */ "./src/components/MyNavigation/styleProps.js");


const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
      <style>
      ${_styleProps__WEBPACK_IMPORTED_MODULE_0__["default"]}
      </style>
      <nav class="nav_lower container">
        <a href="/" id="prev" class="arrow arrow-left"></a></a>
        <a href="/" id="next" class="arrow arrow-right"></a>
      </nav>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navTemplate);


/***/ }),

/***/ "./src/components/defaultStyles.js":
/*!*****************************************!*\
  !*** ./src/components/defaultStyles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  color: rgba(122, 122, 122, 0.77);
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultStyles);

/***/ }),

/***/ "./src/handlers/AudioHandler.js":
/*!**************************************!*\
  !*** ./src/handlers/AudioHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioHandler)
/* harmony export */ });
class AudioHandler {
  constructor(mp3Src) {
    this.player = new Audio(mp3Src);
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }
}


/***/ }),

/***/ "./src/handlers/ModalHandler2.js":
/*!***************************************!*\
  !*** ./src/handlers/ModalHandler2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalHandler)
/* harmony export */ });
/* harmony import */ var _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DBfasade */ "./src/utils/DBfasade.js");
/* harmony import */ var lodash_WeakMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/_WeakMap */ "./node_modules/lodash/_WeakMap.js");
/* harmony import */ var lodash_WeakMap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_WeakMap__WEBPACK_IMPORTED_MODULE_1__);



class ModalHandler {
  _modalToBuy;
  _modalAlert;
  _modal;

  constructor(modal) {
    this.events = new (lodash_WeakMap__WEBPACK_IMPORTED_MODULE_1___default())();
    this.modal = modal;
  }

  addEventListenerWithStorage(element, event, handler) {
    element.addEventListener(event, handler);
    this.events.set(element, { event, handler });
  }

  removeAllEventListeners() {
    for (const [element, { event, handler }] of this.events) {
      element.removeEventListener(event, handler);
    }
    this.events = new (lodash_WeakMap__WEBPACK_IMPORTED_MODULE_1___default())(); // Очистка карты
  }

  set modalToBuy(modal) {
    if (this._modalToBuy) {
      this.events.delete(this._modalToBuy);
      this.events.delete(
        this._modalToBuy.shadowRoot.querySelector('#modal_buy_form'),
      );
    }
    this._modalToBuy = modal;
  }

  set modalAlert(modal) {
    if (this._modalToBuy) {
      this.events.delete(this._modalToBuy);
    }
    this._modalAlert = modal;
  }

  set modal(modal) {
    this._modal = modal;
    this.modalToBuy = modal.modalToBuy;
    this.modalAlert = modal.modalAlert;
  }

  init() {
    // this._modal.addEventListener('click', (e) => {
    //   if (
    //     e.target !== this._modal.shadowRoot.querySelector('.modal__content')
    //   ) {
    //     this._modal.setAttribute('active', 'false');
    //   }
    // });

    const form = this._modalToBuy.shadowRoot.querySelector('#modal_buy_form');
    this.addEventListenerWithStorage(form, 'submit', async (e) => {
      e.preventDefault();
      try {
        const extractedData = this.handleFormData(form);
        const response = _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__["default"].sendLead(extractedData).then(() => {
          this._modal.setAttribute('active', 'false');
          if (this._modalAlert) {
            this._modalAlert.setAttribute('active', 'true');
            setTimeout(() => {
              this._modalAlert.setAttribute('active', 'false');
            }, 3000);
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  stop() {
    this.removeAllEventListeners();
  }

  handleFormData(form) {
    let isCorrect = true;

    const nameField = form.elements.name;
    const surnameField = form.elements.surname;
    const emailField = form.elements.email;
    const numberField = form.elements.number;
    const idField = form.elements.id;

    const isEmailValid = this.modalValidator.validateEmail(emailField.value);
    const isNumberValid = this.modalValidator.validatePhoneNumber(
      numberField.value,
    );
    const isNameValid = this.modalValidator.validateName(nameField.value);
    const isSurnameValid = this.modalValidator.validateName(surnameField.value);

    if (isEmailValid) {
      emailField.classList.remove('incorrect');
      localStorage.setItem('user_email', emailField.value);
    } else {
      emailField.classList.add('incorrect');
      emailField.dataset.errorMessage = this.emailErrorMessage;
      isCorrect = false;
    }

    if (isNumberValid) {
      numberField.classList.remove('incorrect');
      localStorage.setItem('user_number', numberField.value);
    } else {
      numberField.classList.add('incorrect');
      numberField.dataset.errorMessage = this.phoneNumberErrorMessage;
      isCorrect = false;
    }

    if (isNameValid) {
      nameField.classList.remove('incorrect');
      localStorage.setItem('user_name', nameField.value);
    } else {
      nameField.classList.add('incorrect');
      nameField.dataset.errorMessage = this.nameErrorMessage;
      isCorrect = false;
    }

    if (isSurnameValid) {
      surnameField.classList.remove('incorrect');
      localStorage.setItem('user_surname', surnameField.value);
    } else {
      surnameField.classList.add('incorrect');
      surnameField.dataset.errorMessage = this.surnameErrorMessage;
      isCorrect = false;
    }

    if (!isCorrect) {
      throw new Error('Incorrect input data');
    }

    return {
      name: nameField.value,
      surname: surnameField.value,
      email: emailField.value,
      number: numberField.value,
      artId: +idField.value,
    };
  }

  modalValidator = {
    validateEmail: (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    validatePhoneNumber: (number) => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(number);
    },

    validateName: (name) => {
      return name.trim() !== '';
    },
  };
}


/***/ }),

/***/ "./src/handlers/ScrollHandler.js":
/*!***************************************!*\
  !*** ./src/handlers/ScrollHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollHandler)
/* harmony export */ });
/* harmony import */ var _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DBfasade */ "./src/utils/DBfasade.js");


class ScrollHandler {
  currentPage = 0;
  LIMIT_PER_PAGE = 8;

  constructor(mainPageRenderer) {
    this.mainPageRenderer = mainPageRenderer;
    this.fetchLimit()
  }

  async fetchLimit() {
    this.LIMIT = await _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__["default"].getArtsLimit();
    this.disableLoadMoreIfNecessary();
  }

  handleScroll() {
    this.currentPage++;
    this.loadMoreItems();
  }

  loadMoreItems() {
    this.disableLoadMoreIfNecessary();
    this.mainPageRenderer.renderNewItems(
      this.currentPage,
      this.LIMIT_PER_PAGE
    );
    setTimeout(() => {
      document.querySelector('#load_more').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  disableLoadMoreIfNecessary() {
    if ((this.currentPage + 1) * this.LIMIT_PER_PAGE >= this.LIMIT) {
      document.querySelector('#load_more').disabled = true;
    }
  }

  smoothScrollTo(duration) {
    const initialY = window.scrollY;
    const targetY = initialY + document.documentElement.clientHeight;
    const diff = targetY - initialY;
    const start = performance.now();

    function scroll(timestamp) {
      const time = timestamp - start;
      let percent = Math.min(time / duration, 1);

      percent =
        percent < 0.5
          ? 2 * percent * percent
          : -1 + (4 - 2 * percent) * percent;

      window.scrollTo(0, initialY + diff * percent);

      if (time < duration && targetY > window.scrollY) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  }
}


/***/ }),

/***/ "./src/pages/AboutUsPage.js":
/*!**********************************!*\
  !*** ./src/pages/AboutUsPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutUsPage)
/* harmony export */ });
class AboutUsPage {
  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `
    <my-header></my-header>
    <div class="container">
      <section class="intro_video"">
        <h1>
          Who are we?
        </h1>
        <video controls>
          <source src="/semka24/static/video.mp4" type="video/mp4">
        </video>
    </section>
    <section class="about_us">
      <img src="/semka24/static/evening-tones-oscar-florianus-bluemner-7ee9e369.jpg" alt="art">
      <div class="about_us__info">
          <h2 class="title">
            The Best Arts
          </h2>
          <h3 class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error exercitationem maiores repellat suscipit? Accusantium amet culpa dolor, doloribus ducimus esse fuga ipsum libero magnam magni nostrum obcaecati quos repudiandae sapiente sunt, vel, voluptas! Aliquid aperiam autem consectetur consequatur dolorem maxime obcaecati porro quas suscipit velit. Aliquam dignissimos facilis maxime minima quo? Adipisci assumenda, blanditiis consequuntur deserunt est fugiat harum illo nam neque pariatur porro quo quos repellendus sed sit sunt totam vero vitae voluptatibus!
          </h3>
      </div>
    </section>
    <section class="about_us">
      <img src="/semka24/static/the-voyage-of-life-childhood-thomas-cole-1842-cdda4fb1.jpg" alt="art">
      <div class="about_us__info">
        <h2 class="title">
          The Best Prices
        </h2>
        <h3 class="sub-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error exercitationem maiores repellat suscipit? Accusantium amet culpa dolor, doloribus ducimus esse fuga ipsum libero magnam magni nostrum obcaecati quos repudiandae sapiente sunt, vel, voluptas! Aliquid aperiam autem consectetur consequatur dolorem maxime obcaecati porro quas suscipit velit. Aliquam dignissimos facilis maxime minima quo? Adipisci assumenda, blanditiis consequuntur deserunt est fugiat harum illo nam neque pariatur porro quo quos repellendus sed sit sunt totam vero vitae voluptatibus!
        </h3>
      </div>
    </section>
    <section class="about_us">
      <img src="/semka24/static/untitled-gustave-courbet-1841-fe5b7fe6.jpg" alt="art">
      <div class="about_us__info">
        <h2 class="title">
          The Best Quality
        </h2>
        <h3 class="sub-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error exercitationem maiores repellat suscipit? Accusantium amet culpa dolor, doloribus ducimus esse fuga ipsum libero magnam magni nostrum obcaecati quos repudiandae sapiente sunt, vel, voluptas! Aliquid aperiam autem consectetur consequatur dolorem maxime obcaecati porro quas suscipit velit. Aliquam dignissimos facilis maxime minima quo? Adipisci assumenda, blanditiis consequuntur deserunt est fugiat harum illo nam neque pariatur porro quo quos repellendus sed sit sunt totam vero vitae voluptatibus!
        </h3>
      </div>
    </section>
    <my-connection-alert></my-connection-alert>
    `;

    AboutUsPage.observe();
  }

  static observe() {
    const sections = document.querySelectorAll('.about_us');

    const options = {
      root: document,
      rootMargin: '10px',
      threshold: 0.02,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.add('show')
          : entry.target.classList.remove('show');
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
  }
}


/***/ }),

/***/ "./src/pages/ErrorPage.js":
/*!********************************!*\
  !*** ./src/pages/ErrorPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorPage)
/* harmony export */ });
/* harmony import */ var _PageRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PageRenderer */ "./src/PageRenderer.js");


class ErrorPage {

  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `<my-header></my-header>
                     <div class="error"></div>
    `

    // PageRenderer.handleLinks();
  }
}

/***/ }),

/***/ "./src/pages/ItemPage.js":
/*!*******************************!*\
  !*** ./src/pages/ItemPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemPage)
/* harmony export */ });
/* harmony import */ var _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DBfasade */ "./src/utils/DBfasade.js");
/* harmony import */ var _PageRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PageRenderer */ "./src/PageRenderer.js");



class ItemPage {
  async render(search) {
    const root = document.querySelector('#root');

    root.innerHTML = `
    <section class="art loading">
                    <div class="container">
                      <div class="art__img">
                      </div>
                      <div class="art__info">
                        <div class="title-text">
                        
                        </div>
                        <div class="subtitle-text">
                         
                        </div>
                        <div class="descr-text">
                        
                        </div>
                        <button type="button" disabled class="art__info__buy">Buy copy</button>
                      </div>
                    </div>
                  </section>
    `

    const parts = search.split('/');
    const itemId = parts[parts.length - 1];
    const item = await _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__["default"].getArt(itemId ?? 1);
    const next = await ItemPage.getNext(item);
    const prev = ItemPage.getPrev(item);

    root.innerHTML = `
                   <my-header></my-header>
                       <section class="art">
                        <div class="container">
                          <div class="art__img">
                            <img src= ${item.imgSrc} alt="demonstration of art">
                            <my-audio mp3Src="${item.mp3Src}"></my-audio>
                          </div>
                          <div class="art__info">
                            <div class="title-text">
                              ${item.name}
                            </div>
                            <div class="subtitle-text">
                              ${item.author}
                            </div>
                            <div class="descr-text">
                              ${item.description}
                            </div>
                            <button type="button" class="art__info__buy">Buy copy</button>
                          </div>
                        </div>
                       </section>
                   <my-navigation next="${next}" prev="${prev}"></my-navigation>
                   <my-modal active="false" item-id="${item.id}"></my-modal>
                   <my-connection-alert></my-connection-alert>
    `;

    document.querySelector('.art__info__buy').addEventListener('click', (e) => {
      console.log(root.querySelector('my-modal'));
      root.querySelector('my-modal').setAttribute('active', 'true');
    });

    _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].handleLinks();
  }

  static getPrev(item) {
    return item.id <= 1 ? null : item.id - 1;
  }

  static async getNext(item) {
    return item.id >= (await _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__["default"].getArtsLimit()) ? null : item.id + 1;
  }
}


/***/ }),

/***/ "./src/pages/MainPage.js":
/*!*******************************!*\
  !*** ./src/pages/MainPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var _handlers_ScrollHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/ScrollHandler */ "./src/handlers/ScrollHandler.js");
/* harmony import */ var _utils_DBfasade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DBfasade */ "./src/utils/DBfasade.js");
/* harmony import */ var _PageRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PageRenderer */ "./src/PageRenderer.js");




class MainPage {
  constructor() {
    this.storedItems = [];
    this.scrollHandler = null;
  }

  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `<my-header></my-header>
                      <section class="catalog">
                        <div class="container" id="item_container">
                        </div>
                      </section>
                      <button class="pagination" id="load_more">Load more</button>
                   <my-connection-alert></my-connection-alert>
    `;
    const loadMore = document.querySelector('#load_more');

    this.scrollHandler = new _handlers_ScrollHandler__WEBPACK_IMPORTED_MODULE_0__["default"](this);

    loadMore.addEventListener('click', () => {
      this.scrollHandler.handleScroll();
    });
    if (this.storedItems.length) {
      this.renderStoredItems();
    } else {
      this.renderNewItems();
    }
    _PageRenderer__WEBPACK_IMPORTED_MODULE_2__["default"].handleLinks();
  }

  async renderStoredItems() {
    const root = document.querySelector('#root');

    const container = root.querySelector('#item_container');

    if (!this.storedItems.length) {
      this.storedItems = await _utils_DBfasade__WEBPACK_IMPORTED_MODULE_1__["default"].getArts();
    }
    container.innerHTML = '';
    this.storedItems.forEach((item) => {
      this.renderItem(item);
    });
  }

  renderLoadingItems() {
    const container = document.querySelector('#item_container');

    for (let i = 0; i < 8; i++) {
      const loadingItemCard = document.createElement('my-item-card');
      loadingItemCard.setAttribute('loading', 'true');
      container.appendChild(loadingItemCard);
    }
  }

  async renderNewItems(page = 0, limit = 8) {
    this.renderLoadingItems();
    const items = await _utils_DBfasade__WEBPACK_IMPORTED_MODULE_1__["default"].getArts(page, limit);

    this.storedItems = [...this.storedItems, ...items];

    this.renderStoredItems();
  }

  renderItem(item) {
    const container = document.querySelector('#item_container');

    const itemCard = document.createElement('my-item-card');
    itemCard.classList.add('item');

    container.appendChild(itemCard);
    itemCard.setItem(item);
  }
}


/***/ }),

/***/ "./src/utils/DBfasade.js":
/*!*******************************!*\
  !*** ./src/utils/DBfasade.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class DBfasade {
  static async getArts(page = 0, limitData = 8) {
    const arts = await fetch(
      `http://127.0.0.1:8080/arts?page=${page}&size=${limitData}`,
    );
    return await arts.json();
  }

  static async getArtsLimit() {
    const count = await fetch(`http://127.0.0.1:8080/arts/count`);
    return count.json();
  }

  static async getArt(id = 1) {
    try {
      const art = await fetch(`http://127.0.0.1:8080/arts/${id}`);
      return await art.json();;
    } catch (e) {
      const art = await fetch(`http://127.0.0.1:8080/arts/1`);
      return await art.json();
    }
  }

  static async sendLead(data) {
    const response = await fetch('http://127.0.0.1:8080/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBfasade);


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _PageRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageRenderer */ "./src/PageRenderer.js");
/* harmony import */ var _components_MyAudio_MyAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MyAudio/MyAudio */ "./src/components/MyAudio/MyAudio.js");
/* harmony import */ var _components_MyModal_MyModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MyModal/MyModal */ "./src/components/MyModal/MyModal.js");
/* harmony import */ var _components_MyModal_MyModalAlert_MyModalAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MyModal/MyModalAlert/MyModalAlert */ "./src/components/MyModal/MyModalAlert/MyModalAlert.js");
/* harmony import */ var _components_MyModal_MyModalToBuy_MyModalToBuy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/MyModal/MyModalToBuy/MyModalToBuy */ "./src/components/MyModal/MyModalToBuy/MyModalToBuy.js");
/* harmony import */ var _components_MyHeader_MyHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MyHeader/MyHeader */ "./src/components/MyHeader/MyHeader.js");
/* harmony import */ var _components_MyNavigation_MyNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/MyNavigation/MyNavigation */ "./src/components/MyNavigation/MyNavigation.js");
/* harmony import */ var _components_MyItemCard_MyItemCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/MyItemCard/MyItemCard */ "./src/components/MyItemCard/MyItemCard.js");
/* harmony import */ var _components_MyConnectionAlert_MyConnectionAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/MyConnectionAlert/MyConnectionAlert */ "./src/components/MyConnectionAlert/MyConnectionAlert.js");











window.customElements.define('my-audio', _components_MyAudio_MyAudio__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.customElements.define('my-modal-alert', _components_MyModal_MyModalAlert_MyModalAlert__WEBPACK_IMPORTED_MODULE_4__["default"]);
window.customElements.define('my-modal-buy', _components_MyModal_MyModalToBuy_MyModalToBuy__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.customElements.define('my-modal', _components_MyModal_MyModal__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.customElements.define('my-header', _components_MyHeader_MyHeader__WEBPACK_IMPORTED_MODULE_6__["default"]);
window.customElements.define('my-navigation', _components_MyNavigation_MyNavigation__WEBPACK_IMPORTED_MODULE_7__["default"]);
window.customElements.define('my-item-card', _components_MyItemCard_MyItemCard__WEBPACK_IMPORTED_MODULE_8__["default"]);
window.customElements.define('my-connection-alert', _components_MyConnectionAlert_MyConnectionAlert__WEBPACK_IMPORTED_MODULE_9__["default"]);

window.addEventListener('load', (e) => {
  console.log("я должен работать один раз");
  handleEvent(e);
});

window.addEventListener('popstate', (e) => {
  const search = window.location.pathname;
  console.log("я должен работать не один раз");
  _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage(search);
})

function handleEvent(e) {
  e.preventDefault();
  const search = window.location.pathname;
  history.pushState({}, '', window.location.href);
  _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage(search);
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map