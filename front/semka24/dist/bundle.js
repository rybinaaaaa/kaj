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





/**
 * Class for rendering different pages based on the URL.
 */
class PageRenderer {
  /**
   * Renders the main page.
   * @type {MainPage}
   */
  static mainPageRenderer = new _pages_MainPage__WEBPACK_IMPORTED_MODULE_0__["default"]();

  /**
   * Renders the item page.
   * @type {ItemPage}
   */
  static itemPageRenderer = new _pages_ItemPage__WEBPACK_IMPORTED_MODULE_1__["default"]();

  /**
   * Renders the about us page.
   * @type {AboutUsPage}
   */
  static aboutUsPageRenderer = new _pages_AboutUsPage__WEBPACK_IMPORTED_MODULE_2__["default"]();

  /**
   * Renders the error page.
   * @type {ErrorPage}
   */
  static errorPageRenderer = new _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_3__["default"]();

  /**
   * Array of page objects containing regex and corresponding render functions.
   * @type {Array<{ regex: RegExp, render: Function }>}
   */
  static pages = [
    {
      regex: /^\/semka24\/$/,
      render: this.mainPageRenderer.render.bind(this.mainPageRenderer)
    },
    {
      regex: /^\/semka24\/item\/\d+$/,
      render: this.itemPageRenderer.render.bind(this.itemPageRenderer)
    },
    {
      regex: /^\/semka24\/aboutUs/,
      render: this.aboutUsPageRenderer.render.bind(this.aboutUsPageRenderer)
    }
  ];

  /**
   * Renders the page based on the URL.
   * @param {string} search - The URL to render.
   */
  static renderPage(search) {
    for (let p of this.pages) {
      if (p.regex.test(search)) {
        p.render(search);
        return;
      }
    }
    this.errorPageRenderer.render();
  }

  /**
   * Event handler for links.
   * @param {Event} e - The click event.
   */
  static handleEventOnLinks(e) {
    const a = e.currentTarget;
    e.preventDefault();
    const search = a.href;
    history.pushState({}, '', search);
    PageRenderer.renderPage(window.location.pathname);
  }

  /**
   * Handles all links on the page.
   */
  static handleLinks() {
    document.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', PageRenderer.handleEventOnLinks);
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



/**
 * Web component for audio playback with play/pause controls.
 */
class MyAudio extends HTMLElement {
  /**
   * Constructs the MyAudio element, attaching a shadow DOM and initializing the audio handler.
   */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    /**
     * AudioHandler instance to control the audio playback.
     * @type {AudioHandler}
     */
    this.audioHandler = new _handlers_AudioHandler__WEBPACK_IMPORTED_MODULE_0__["default"](this.getAttribute('mp3Src'));
  }

  /**
   * Called when the element is added to the document.
   * Sets up the audio controls and event listeners.
   */
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

  /**
   * Called when the element is removed from the document.
   * Pauses the audio playback.
   */
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


/**
 * Web component for displaying a connection alert.
 * Shows an alert when the device goes offline and hides it when back online.
 */
class MyConnectionAlert extends HTMLElement {
  /**
   * Constructs the MyConnectionAlert element, attaching a shadow DOM.
   * Initializes event handlers for online and offline events.
   */
  constructor() {
    super();
    /**
     * The content of the alert template.
     * @type {DocumentFragment}
     */
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });

    /**
     * Binds the offline event handler to the current instance.
     * @type {Function}
     */
    this.handleOffline = this.handleOffline.bind(this);

    /**
     * Binds the online event handler to the current instance.
     * @type {Function}
     */
    this.handleOnline = this.handleOnline.bind(this);
  }

  /**
   * Called when the element is added to the document.
   * Appends the template content to the shadow root and adds event listeners for online and offline events.
   */
  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('online', this.handleOnline);
  }

  /**
   * Called when the element is removed from the document.
   * Removes event listeners for online and offline events.
   */
  disconnectedCallback() {
    window.removeEventListener('offline', this.handleOffline);
    window.removeEventListener('online', this.handleOnline);
  }

  /**
   * Event handler for the offline event.
   * Adds the 'active' class to the component to show the alert.
   */
  handleOffline() {
    this.classList.add('active');
  }

  /**
   * Event handler for the online event.
   * Removes the 'active' class from the component to hide the alert.
   */
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



/**
 * Web component for the header of the page.
 * Includes functionality for navigating back in history and handling "About Us" link clicks.
 */
class MyHeader extends HTMLElement {
  /**
   * Constructs the MyHeader element, attaching a shadow DOM.
   * Clones the header template content.
   */
  constructor() {
    super();
    /**
     * The content of the header template.
     * @type {DocumentFragment}
     */
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Called when the element is added to the document.
   * Appends the template content to the shadow root and adds event listeners for the "Go Back" and "About Us" links.
   */
  connectedCallback() {
    this.shadowRoot.appendChild(this.content);

    // /**
    //  * Event listener for the "Go Back" button.
    //  * Navigates back in the browser history.
    //  * @param {Event} e - The click event.
    //  */
    // this.shadowRoot.querySelector('#go-back').addEventListener('click', e => {
    //   e.preventDefault();
    //   window.history.back();
    // });

    /**
     * Event listener for the "About Us" link.
     * Handles the link click using PageRenderer.
     * @param {Event} e - The click event.
     */
    this.shadowRoot.querySelector('.about_us').addEventListener('click', _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].handleEventOnLinks);

    /**
     * Event listener for the "Home" link.
     * Handles the link click using PageRenderer.
     * @param {Event} e - The click event.
     */
    this.shadowRoot.querySelector('#go-back').addEventListener('click', _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].handleEventOnLinks);
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
                        <a href="/semka24/" id="go-back">
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



/**
 * Web component representing an item card.
 * Handles rendering of item details and navigation on click.
 */
class MyItemCard extends HTMLElement {
  /**
   * Constructs the MyItemCard element, attaching a shadow DOM.
   * Clones the card template content.
   */
  constructor() {
    super();
    /**
     * The content of the card template.
     * @type {DocumentFragment}
     */
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Called when the element is added to the document.
   * Appends the template content to the shadow root and adds a show class to the item after a delay.
   */
  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
    setTimeout(() => {
      this.shadowRoot.querySelector('.item').classList.add('show');
    }, 100);
  }

  /**
   * Fetches the item card data and updates the card's content.
   * Removes the loading class from the item.
   */
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
      history.pushState({}, '', search);
      _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage(window.location.pathname);
    });
  }

  /**
   * Specifies the attributes to observe for changes.
   * @returns {string[]} The list of observed attributes.
   */
  static get observedAttributes() {
    return ['loading'];
  }

  /**
   * Called when an observed attribute changes.
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (!(name === 'loading' && newValue === 'true')) {
      this.fetchCard();
    }
  }

  /**
   * Sets the item data and updates the corresponding attributes.
   * @param {Object} item - The item data.
   * @param {string} item.id - The ID of the item.
   * @param {string} item.name - The name of the item.
   * @param {string} item.imgSrc - The image source URL of the item.
   * @param {string} item.author - The author of the item.
   */
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



/**
 * Web component representing a modal dialog.
 * Handles initialization and attribute changes for modal behavior.
 */
class MyModal extends HTMLElement {
  /**
   * Constructs the MyModal element, attaching a shadow DOM and initializing modal handler.
   */
  constructor() {
    super();
    /**
     * The content of the modal template.
     * @type {DocumentFragment}
     */
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });

    /**
     * The modal for buying items.
     * @type {HTMLElement}
     */
    this.modalToBuy = this.content.querySelector('my-modal-buy');
    /**
     * The alert modal.
     * @type {HTMLElement}
     */
    this.modalAlert = this.content.querySelector('my-modal-alert');
    /**
     * The handler for modal interactions.
     * @type {ModalHandler}
     */
    this.modalHandler = new _handlers_ModalHandler2__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  }

  /**
   * Called when the element is added to the document.
   * Initializes the modal with the item ID and sets up event listeners.
   */
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

  /**
   * Specifies the attributes to observe for changes.
   * @returns {string[]} The list of observed attributes.
   */
  static get observedAttributes() {
    return ['active'];
  }

  /**
   * Called when an observed attribute changes.
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */
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


/**
 * Web component representing a modal alert.
 * Displays a message to the user.
 */
class MyModalAlert extends HTMLElement {
  /**
   * Constructs the MyModalAlert element, attaching a shadow DOM and setting up content.
   */
  constructor() {
    super();
    /**
     * The content of the modal template.
     * @type {DocumentFragment}
     */
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Called when the element is added to the document.
   * Appends the modal content to the shadow DOM.
   */
  connectedCallback() {
    this.shadowRoot.appendChild(this.content);
  }

  /**
   * Specifies the attributes to observe for changes.
   * @returns {string[]} The list of observed attributes.
   */
  static get observedAttributes() {
    return ['active'];
  }

  /**
   * Called when an observed attribute changes.
   * Updates the modal's visibility based on the 'active' attribute.
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */
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


/**
 * Web component representing a modal to buy an item.
 * Allows users to purchase items.
 */
class MyModalToBuy extends HTMLElement {
  /**
   * Constructs the MyModalToBuy element, attaching a shadow DOM and setting up content.
   */
  constructor() {
    super();
    /**
     * The content of the modal template.
     * @type {DocumentFragment}
     */
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Called when the element is added to the document.
   * Sets the item ID in the modal and appends the modal content to the shadow DOM.
   */
  connectedCallback() {
    this.content.querySelector('#id').value = this.getAttribute('item-id');
    this.shadowRoot.appendChild(this.content);
  }

  /**
   * Specifies the attributes to observe for changes.
   * @returns {string[]} The list of observed attributes.
   */
  static get observedAttributes() {
    return ['active'];
  }

  /**
   * Called when an observed attribute changes.
   * Updates the modal's visibility based on the 'active' attribute.
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */
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


/**
 * Web component representing navigation links.
 * Allows users to navigate to the next and previous items.
 */
class MyNavigation extends HTMLElement {
  /**
   * Constructs the MyNavigation element, attaching a shadow DOM and setting up content.
   */
  constructor() {
    super();
    /**
     * The content of the navigation template.
     * @type {DocumentFragment}
     */
    this.content = _template__WEBPACK_IMPORTED_MODULE_0__["default"].content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Called when the element is added to the document.
   * Sets up the navigation links based on the 'next' and 'prev' attributes.
   */
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
/**
 * Class to handle audio playback.
 */
class AudioHandler {
  /**
   * Creates an instance of AudioHandler.
   * @param {string} mp3Src - The source URL of the MP3 file.
   */
  constructor(mp3Src) {
    /**
     * The audio player instance.
     * @type {HTMLAudioElement}
     */
    this.player = new Audio(mp3Src);
  }

  /**
   * Plays the audio.
   */
  play() {
    this.player.play();
  }

  /**
   * Pauses the audio.
   */
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



/**
 * Class to handle modal interactions and events.
 */
class ModalHandler {
  /**
   * @type {HTMLElement|null}
   * @private
   */
  _modalToBuy;

  /**
   * @type {HTMLElement|null}
   * @private
   */
  _modalAlert;

  /**
   * @type {HTMLElement|null}
   * @private
   */
  _modal;

  /**
   * Creates an instance of ModalHandler.
   * @param {HTMLElement} modal - The modal element.
   */
  constructor(modal) {
    /**
     * WeakMap to store event listeners.
     * @type {WeakMap}
     */
    this.events = new (lodash_WeakMap__WEBPACK_IMPORTED_MODULE_1___default())();
    this.modal = modal;
  }

  /**
   * Adds an event listener and stores it in the WeakMap.
   * @param {HTMLElement} element - The element to attach the event to.
   * @param {string} event - The event type.
   * @param {Function} handler - The event handler.
   */
  addEventListenerWithStorage(element, event, handler) {
    element.addEventListener(event, handler);
    this.events.set(element, { event, handler });
  }

  /**
   * Removes all stored event listeners.
   */
  removeAllEventListeners() {
    for (const [element, { event, handler }] of this.events) {
      element.removeEventListener(event, handler);
    }
    this.events = new (lodash_WeakMap__WEBPACK_IMPORTED_MODULE_1___default())(); // Clear the map
  }

  /**
   * Sets the modal to buy and updates event listeners.
   * @param {HTMLElement} modal - The modal element to buy.
   */
  set modalToBuy(modal) {
    if (this._modalToBuy) {
      this.events.delete(this._modalToBuy);
      this.events.delete(this._modalToBuy.shadowRoot.querySelector('#modal_buy_form'));
    }
    this._modalToBuy = modal;
  }

  /**
   * Sets the modal alert and updates event listeners.
   * @param {HTMLElement} modal - The modal alert element.
   */
  set modalAlert(modal) {
    if (this._modalToBuy) {
      this.events.delete(this._modalToBuy);
    }
    this._modalAlert = modal;
  }

  /**
   * Sets the main modal and updates associated modals.
   * @param {Object} modal - The modal elements container.
   * @param {HTMLElement} modal.modalToBuy - The modal to buy element.
   * @param {HTMLElement} modal.modalAlert - The modal alert element.
   */
  set modal(modal) {
    this._modal = modal;
    this.modalToBuy = modal.modalToBuy;
    this.modalAlert = modal.modalAlert;
  }

  /**
   * Initializes the modal handler by setting up event listeners.
   */
  init() {
    const form = this._modalToBuy.shadowRoot.querySelector('#modal_buy_form');
    this.addEventListenerWithStorage(form, 'submit', async (e) => {
      e.preventDefault();
      try {
        const extractedData = this.handleFormData(form);
        await _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__["default"].sendLead(extractedData);
        this._modal.setAttribute('active', 'false');
        if (this._modalAlert) {
          this._modalAlert.setAttribute('active', 'true');
          setTimeout(() => {
            this._modalAlert.setAttribute('active', 'false');
          }, 3000);
        }
      } catch (err) {
        console.log(err);
      }
    });
  }

  /**
   * Stops the modal handler by removing all event listeners.
   */
  stop() {
    this.removeAllEventListeners();
  }

  /**
   * Handles form data validation and extraction.
   * @param {HTMLFormElement} form - The form element.
   * @returns {Object} The extracted form data.
   * @throws {Error} If the form data is incorrect.
   */
  handleFormData(form) {
    let isCorrect = true;

    const nameField = form.elements.name;
    const surnameField = form.elements.surname;
    const emailField = form.elements.email;
    const numberField = form.elements.number;
    const idField = form.elements.id;

    const isEmailValid = this.modalValidator.validateEmail(emailField.value);
    const isNumberValid = this.modalValidator.validatePhoneNumber(numberField.value);
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
      artId: +idField.value
    };
  }

  /**
   * Validator object for form data.
   */
  modalValidator = {
    /**
     * Validates an email address.
     * @param {string} email - The email address.
     * @returns {boolean} True if the email is valid, false otherwise.
     */
    validateEmail: (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    /**
     * Validates a phone number.
     * @param {string} number - The phone number.
     * @returns {boolean} True if the phone number is valid, false otherwise.
     */
    validatePhoneNumber: (number) => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(number);
    },

    /**
     * Validates a name or surname.
     * @param {string} name - The name or surname.
     * @returns {boolean} True if the name is not empty, false otherwise.
     */
    validateName: (name) => {
      return name.trim() !== '';
    }
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


/**
 * Class to handle scroll-based pagination and item loading.
 */
class ScrollHandler {
  /**
   * The current page number.
   * @type {number}
   */
  currentPage = 0;

  /**
   * The number of items to load per page.
   * @type {number}
   */
  LIMIT_PER_PAGE = 8;

  /**
   * The total limit of items available.
   * @type {number}
   */
  LIMIT = null;

  /**
   * Creates an instance of ScrollHandler.
   * @param {Object} mainPageRenderer - An object responsible for rendering new items on the main page.
   */
  constructor(mainPageRenderer) {
    this.mainPageRenderer = mainPageRenderer;
  }

  /**
   * Fetches the total limit of items and disables the load more button if necessary.
   */
  async fetchLimit() {
    this.LIMIT = await _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__["default"].getArtsLimit();
  }

  /**
   * Handles the scroll event, incrementing the current page and loading more items.
   */
  handleScroll() {
    this.currentPage++;
    this.loadMoreItems();
  }

  /**
   * Loads more items by rendering them and then scrolling into view.
   */
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

  /**
   * Disables the load more button if there are no more items to load.
   */
  async disableLoadMoreIfNecessary() {
    await this.fetchLimit();
    if (this.LIMIT && (this.currentPage + 1) * this.LIMIT_PER_PAGE >= this.LIMIT) {
    console.log(`disabled page = ${this.currentPage}, limit = ${this.LIMIT}`);
      document.querySelector('#load_more').disabled = true;
    }
  }

  /**
   * Smoothly scrolls the page down by one viewport height over the specified duration.
   * @param {number} duration - The duration of the scroll animation in milliseconds.
   */
  smoothScrollTo(duration) {
    const initialY = window.scrollY;
    const targetY = initialY + document.documentElement.clientHeight;
    const diff = targetY - initialY;
    const start = performance.now();

    function scroll(timestamp) {
      const time = timestamp - start;
      let percent = Math.min(time / duration, 1);

      percent = percent < 0.5
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
/**
 * Represents the About Us page of the website.
 */
class AboutUsPage {
  /**
   * Renders the About Us page content.
   */
  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `
    <my-header></my-header>
    <div class="container">
      <section class="intro_video">
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

    const video = document.querySelector('video');

    video.addEventListener('wheel', e => {
      let volume = video.volume
      if (e.deltaY > 0) {
        volume -= 0.05;
      } else  {
        volume += 0.05;
      }

      if (volume < 0) {
        volume = 0;
      } else if (volume > 1) {
        volume = 1;
      }

      video.volume = volume;

    }, { passive: true });
  }

  /**
   * Observes sections of the About Us page and adds a 'show' class when they intersect the viewport.
   * @static
   */
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


/**
 * Represents the Error Page of the website.
 */
class ErrorPage {
  /**
   * Renders the Error Page content.
   * @function render
   * @memberof ErrorPage
   */
  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `<my-header></my-header>
                     <div class="error"></div>
                     <my-connection-alert></my-connection-alert>
    `;
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



/**
 * Class representing the item page.
 */
class ItemPage {
  /**
   * Renders the item page.
   * @param {string} search - The search string containing  path item/{id} about the requested item.
   */
  async render(search) {
    const root = document.querySelector('#root');

    root.innerHTML = `
    <div class="art loading">
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
                  </div>
    `;

    const parts = search.split('/');
    const itemId = parts[parts.length - 1];
    const item = await _utils_DBfasade__WEBPACK_IMPORTED_MODULE_0__["default"].getArt(itemId ?? 1);
    const next = await ItemPage.getNext(item);
    const prev = ItemPage.getPrev(item);

    root.innerHTML = `
                   <my-header></my-header>
                       <div class="art">
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
                       </div>
                   <my-navigation next="${next}" prev="${prev}"></my-navigation>
                   <my-modal active="false" item-id="${item.id}"></my-modal>
                   <my-connection-alert></my-connection-alert>
    `;

    document.querySelector('.art__info__buy').addEventListener('click', (e) => {
      root.querySelector('my-modal').setAttribute('active', 'true');
    });

    _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].handleLinks();
  }

  /**
   * Gets the previous item ID.
   * @param {Object} item - The current item object.
   * @returns {number|null} The previous item ID, or null if there is no previous item.
   */
  static getPrev(item) {
    return item.id <= 1 ? null : item.id - 1;
  }

  /**
   * Gets the next item ID.
   * @param {Object} item - The current item object.
   * @returns {Promise<number|null>} The next item ID, or null if there is no next item.
   */
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




/**
 * Class representing the main page.
 */
class MainPage {
  constructor() {
    /**
     * Stored items to be rendered on the page.
     * @type {Array}
     */
    this.storedItems = [];

    /**
     * Instance of ScrollHandler to handle scroll events.
     * @type {ScrollHandler}
     */
    this.scrollHandler = new _handlers_ScrollHandler__WEBPACK_IMPORTED_MODULE_0__["default"](this);
  }

  /**
   * Renders the main page.
   */
  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `<my-header></my-header>
                      <div class="catalog">
                        <div class="container" id="item_container">
                        </div>
                      </div>
                      <button class="pagination" id="load_more">Load more</button>
                   <my-connection-alert></my-connection-alert>
    `;
    const loadMore = document.querySelector('#load_more');

    this.scrollHandler.disableLoadMoreIfNecessary().then(() => {
      loadMore.addEventListener('click', () => {
        this.scrollHandler.handleScroll();
      });
    });

    if (this.storedItems.length) {
      this.renderStoredItems();
    } else {
      this.renderNewItems();
    }
    _PageRenderer__WEBPACK_IMPORTED_MODULE_2__["default"].handleLinks();
  }

  /**
   * Renders stored items on the page.
   */
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

  /**
   * Renders loading placeholders for items.
   */
  renderLoadingItems() {
    const container = document.querySelector('#item_container');

    for (let i = 0; i < 8; i++) {
      const loadingItemCard = document.createElement('my-item-card');
      loadingItemCard.setAttribute('loading', 'true');
      container.appendChild(loadingItemCard);
    }
  }

  /**
   * Renders new items on the page.
   * @param {number} [page=0] - The page number to fetch items from.
   * @param {number} [limit=8] - The number of items to fetch.
   */
  async renderNewItems(page = 0, limit = 8) {
    this.renderLoadingItems();
    const items = await _utils_DBfasade__WEBPACK_IMPORTED_MODULE_1__["default"].getArts(page, limit);

    this.storedItems = [...this.storedItems, ...items];

    this.renderStoredItems();
  }

  /**
   * Renders a single item on the page.
   * @param {Object} item - The item to render.
   */
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
/**
 * Class providing methods to interact with the backend server.
 */
class DBfasade {
  /**
   * Fetches a list of arts from the backend.
   * @param {number} [page=0] - The page number to fetch.
   * @param {number} [limitData=8] - The number of items to fetch per page.
   * @returns {Promise<Object[]>} A promise that resolves to an array of art objects.
   */
  static async getArts(page = 0, limitData = 8) {
    const arts = await fetch(
        `http://127.0.0.1:8080/arts?page=${page}&size=${limitData}`
    );
    return await arts.json();
  }

  /**
   * Fetches the total number of arts available.
   * @returns {Promise<number>} A promise that resolves to the total number of arts.
   */
  static async getArtsLimit() {
    const count = await fetch(`http://127.0.0.1:8080/arts/count`);
    return count.json();
  }

  /**
   * Fetches a specific art by its ID. If the fetch fails, it defaults to fetching the art with ID 1.
   * @param {number} [id=1] - The ID of the art to fetch.
   * @returns {Promise<Object>} A promise that resolves to an art object.
   */
  static async getArt(id = 1) {
    try {
      const art = await fetch(`http://127.0.0.1:8080/arts/${id}`);
      return await art.json();
    } catch (e) {
      const art = await fetch(`http://127.0.0.1:8080/arts/1`);
      return await art.json();
    }
  }

  /**
   * Sends lead data to the backend.
   * @param {Object} data - The lead data to send.
   * @param {string} data.name - The name of the lead.
   * @param {string} data.email - The email of the lead.
   * @returns {Promise<Object>} A promise that resolves to the response from the server.
   */
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

window.addEventListener('load', handleEvent);

window.addEventListener('popstate', handleEvent)

function handleEvent(e) {
  // e.preventDefault();
  const search = window.location.pathname;
  history.pushState({}, '', window.location.href);
  _PageRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage(search);
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map