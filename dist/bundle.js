var MyLib;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: 20px;\n}\nbody{\n    height: 100vh;\n    background-color: rgb(46, 45, 45);\n    overflow: hidden;\n}\n#main{\n    display: flex;\n    flex-direction: column;\n}\n\n#header{\n    height: 10%;\n    width: 100%;\n    border: solid black 1px;\n\n}\n\n#content{\n    display: flex;\n    height: 1000px;\n    padding: 100px;\n    justify-content: center;\n    \n}\n\n#mid{\n    width: 70%;\n    position: relative;\n    justify-content: center;\n\n}\n\n#imageContainer{\n    position: relative;\n    display: flex;\n    height: 90%;\n    border: solid black 1px;\n    align-items: center;\n    overflow: hidden;\n}\n.img{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    opacity: 0;\n    transition: opacity 800ms ease-in-out;\n}\n.active{\n    opacity: 1;\n}\n.arrow{\n    position: absolute;\n    transform: scale(2);\n    opacity: 0.3;\n    outline: 1px solid black;\n    border: none;\n    border-radius: 2px;\n    z-index: 2;\n    background-color: transparent;\n\n}\n.arrow:hover{\n    background-color: aliceblue;\n}\n#arrowLeft{\n    left: 30px;\n    top: 50%;\n}\n#arrowRight{\n    right: 30px;\n    top: 50%;\n}\n\n#markers{\n    position: absolute;\n    display: flex;\n    height: 10%;\n    justify-content: center;\n    align-items: center;\n}\n\n#markerContent{\n    z-index: 2;\nposition: absolute;\ndisplay: flex;\nborder: solid black 1px;\njustify-content: center;\nborder-radius: 20px;\nbottom: 12%;\nleft: 40%;\nwidth: 20%;\nheight: 4%;\nopacity: 0.5;\nbackground-color: white;\n\n\n}\n.navDot:hover{\n    transform: scale(1.4);\n    cursor: pointer;\n}\n[data-status]{\n    opacity: 1 !important;\n}\n[data-highlight]{\n    transform: scale(1.8);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,eAAe;AACnB;AACA;IACI,aAAa;IACb,iCAAiC;IACjC,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;;AAE3B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,cAAc;IACd,uBAAuB;;AAE3B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,uBAAuB;;AAE3B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,qCAAqC;AACzC;AACA;IACI,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,6BAA6B;;AAEjC;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,UAAU;IACV,QAAQ;AACZ;AACA;IACI,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd,kBAAkB;AAClB,aAAa;AACb,uBAAuB;AACvB,uBAAuB;AACvB,mBAAmB;AACnB,WAAW;AACX,SAAS;AACT,UAAU;AACV,UAAU;AACV,YAAY;AACZ,uBAAuB;;;AAGvB;AACA;IACI,qBAAqB;IACrB,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB","sourcesContent":["*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: 20px;\n}\nbody{\n    height: 100vh;\n    background-color: rgb(46, 45, 45);\n    overflow: hidden;\n}\n#main{\n    display: flex;\n    flex-direction: column;\n}\n\n#header{\n    height: 10%;\n    width: 100%;\n    border: solid black 1px;\n\n}\n\n#content{\n    display: flex;\n    height: 1000px;\n    padding: 100px;\n    justify-content: center;\n    \n}\n\n#mid{\n    width: 70%;\n    position: relative;\n    justify-content: center;\n\n}\n\n#imageContainer{\n    position: relative;\n    display: flex;\n    height: 90%;\n    border: solid black 1px;\n    align-items: center;\n    overflow: hidden;\n}\n.img{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    opacity: 0;\n    transition: opacity 800ms ease-in-out;\n}\n.active{\n    opacity: 1;\n}\n.arrow{\n    position: absolute;\n    transform: scale(2);\n    opacity: 0.3;\n    outline: 1px solid black;\n    border: none;\n    border-radius: 2px;\n    z-index: 2;\n    background-color: transparent;\n\n}\n.arrow:hover{\n    background-color: aliceblue;\n}\n#arrowLeft{\n    left: 30px;\n    top: 50%;\n}\n#arrowRight{\n    right: 30px;\n    top: 50%;\n}\n\n#markers{\n    position: absolute;\n    display: flex;\n    height: 10%;\n    justify-content: center;\n    align-items: center;\n}\n\n#markerContent{\n    z-index: 2;\nposition: absolute;\ndisplay: flex;\nborder: solid black 1px;\njustify-content: center;\nborder-radius: 20px;\nbottom: 12%;\nleft: 40%;\nwidth: 20%;\nheight: 4%;\nopacity: 0.5;\nbackground-color: white;\n\n\n}\n.navDot:hover{\n    transform: scale(1.4);\n    cursor: pointer;\n}\n[data-status]{\n    opacity: 1 !important;\n}\n[data-highlight]{\n    transform: scale(1.8);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/defineImages.js":
/*!*****************************!*\
  !*** ./src/defineImages.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_chris_bair_A10y2Eq7OHY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/chris-bair-A10y2Eq7OHY-unsplash.jpg */ "./src/img/chris-bair-A10y2Eq7OHY-unsplash.jpg");
/* harmony import */ var _img_dolo_iglesias_FjElUqGfbAw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/dolo-iglesias-FjElUqGfbAw-unsplash.jpg */ "./src/img/dolo-iglesias-FjElUqGfbAw-unsplash.jpg");
/* harmony import */ var _img_dolo_iglesias_z9z6u1rn7sY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/dolo-iglesias-z9z6u1rn7sY-unsplash.jpg */ "./src/img/dolo-iglesias-z9z6u1rn7sY-unsplash.jpg");
/* harmony import */ var _img_donald_giannatti_7lbzwVoEh9c_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/donald-giannatti-7lbzwVoEh9c-unsplash.jpg */ "./src/img/donald-giannatti-7lbzwVoEh9c-unsplash.jpg");
/* harmony import */ var _img_john_matychuk_gUK3lA3K7Yo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/john-matychuk-gUK3lA3K7Yo-unsplash.jpg */ "./src/img/john-matychuk-gUK3lA3K7Yo-unsplash.jpg");






function defineImages() {
  const allImages = [];
  const file1 = new Image();
  file1.src = _img_chris_bair_A10y2Eq7OHY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;
  file1.classList.add('img');
  file1.setAttribute('data-index', 0);

  const file2 = new Image();
  file2.src = _img_dolo_iglesias_FjElUqGfbAw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__;
  file2.classList.add('img');
  file2.setAttribute('data-index', 1);

  const file3 = new Image();
  file3.src = _img_dolo_iglesias_z9z6u1rn7sY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__;
  file3.classList.add('img');
  file3.setAttribute('data-index', 2);

  const file4 = new Image();
  file4.src = _img_donald_giannatti_7lbzwVoEh9c_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__;
  file4.classList.add('img');
  file4.setAttribute('data-index', 3);

  const file5 = new Image();
  file5.src = _img_john_matychuk_gUK3lA3K7Yo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__;
  file5.classList.add('img');
  file5.setAttribute('data-index', 4);

  file1.setAttribute('data-status', 'active');
  allImages.push(file1, file2, file3, file4, file5);

  return allImages;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineImages);


/***/ }),

/***/ "./src/imageLoop.js":
/*!**************************!*\
  !*** ./src/imageLoop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function imageLoop() {
  // Create array with all my images
  const imageContainer = document.querySelector('#imageContainer');
  const arrayOfImages = [...imageContainer.children];
  // Check current index
  const activeImage = document.querySelector('[data-status]');
  let currentIndex = arrayOfImages.findIndex((ele) => ele === activeImage);
  // Remove display image
  activeImage.removeAttribute('data-status');
  // Remove navDotHighlight
  const currentDataIndex = arrayOfImages[currentIndex].getAttribute('data-index');
  console.log(currentDataIndex);
  const navDots = [...document.querySelector('#markerContent').children];
  navDots[currentDataIndex].removeAttribute('data-highlight');
  // update currentIndex
  currentIndex += 1;
  if (currentIndex > arrayOfImages.length - 1) { currentIndex = 0; }
  // Display Next image
  arrayOfImages[currentIndex].setAttribute('data-status', 'active');
  // highlight next navDot
  navDots[currentIndex].setAttribute('data-highlight', 'on');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageLoop);


/***/ }),

/***/ "./src/initPage.js":
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_icon_circle_small_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/icon/circle-small.png */ "./src/img/icon/circle-small.png");


function initPage(myImages) {
  const imageContainer = document.querySelector('#imageContainer');
  myImages.forEach((element) => {
    // Append all images from array
    imageContainer.appendChild(element);
    // Create navigation dots
    const navigationBar = document.querySelector('#markerContent');
    const navDot = new Image();
    navDot.src = _img_icon_circle_small_png__WEBPACK_IMPORTED_MODULE_0__;
    const imageIndex = element.getAttribute('data-index');
    if (element.hasAttribute('data-status')) {
      navDot.setAttribute('data-highlight', 'on');
    }
    navDot.setAttribute('data-index', imageIndex);
    navDot.classList.add('navDot');
    navigationBar.appendChild(navDot.cloneNode(true));
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPage);


/***/ }),

/***/ "./src/loadEvents.js":
/*!***************************!*\
  !*** ./src/loadEvents.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadEvents() {
  // Events for my arrows
  const buttons = document.querySelectorAll('.arrow');
  buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
      // Clear Interval from the Loop Image Carousel
      // Create array with all my images
      const imageContainer = document.querySelector('#imageContainer');
      const arrayOfImages = [...imageContainer.children];
      console.log(arrayOfImages);

      // Check current index
      const activeImage = document.querySelector('[data-status]');
      let currentIndex = arrayOfImages.findIndex((ele) => ele === activeImage);
      console.log(currentIndex);
      // Remove display image
      activeImage.removeAttribute('data-status');
      // Remove current navDot highlighted
      const navDots = [...document.querySelector('#markerContent').children];
      navDots[currentIndex].removeAttribute('data-highlight');
      //
      // Check what button action is press
      const btnAction = e.target.getAttribute('data-state');
      // Move Index depending on button

      if (btnAction === 'next') {
        currentIndex += 1;
      }
      if (btnAction === 'prev') {
        currentIndex -= 1;
      }
      // Reset Index if it gets bigger than array length
      console.log(arrayOfImages.length);
      if (currentIndex > arrayOfImages.length - 1) { currentIndex = 0; }
      // Return to last if index is lower than 0
      if (currentIndex < 0) {
        currentIndex = arrayOfImages.length - 1;
      }
      // Display Next image
      arrayOfImages[currentIndex].setAttribute('data-status', 'active');
      // Highlight next navDot
      navDots[currentIndex].setAttribute('data-highlight', 'on');
    });
  });

  // Load events for navigation dots
  const navDots = document.querySelectorAll('.navDot');
  navDots.forEach((element) => {
    element.addEventListener('click', () => {
      const referenceIndex = element.getAttribute('data-index');
      // Remove visible image
      const visibleImage = document.querySelector('[data-status]');
      const arrayOfImages = [...document.querySelector('#imageContainer').children];
      const indexOfVisibleImage = arrayOfImages.findIndex((img) => img === visibleImage);
      arrayOfImages[indexOfVisibleImage].removeAttribute('data-status');
      // Remove navDot highlight
      const navDotsArray = [...navDots];
      navDotsArray[indexOfVisibleImage].removeAttribute('data-highlight');
      // Display new visible image
      arrayOfImages[referenceIndex].setAttribute('data-status', 'active');
      navDotsArray[referenceIndex].setAttribute('data-highlight', 'on');
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadEvents);


/***/ }),

/***/ "./src/img/chris-bair-A10y2Eq7OHY-unsplash.jpg":
/*!*****************************************************!*\
  !*** ./src/img/chris-bair-A10y2Eq7OHY-unsplash.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d99a338564d1641e6d0f.jpg";

/***/ }),

/***/ "./src/img/dolo-iglesias-FjElUqGfbAw-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/img/dolo-iglesias-FjElUqGfbAw-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ceffb36aba2c4cbf49fc.jpg";

/***/ }),

/***/ "./src/img/dolo-iglesias-z9z6u1rn7sY-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/img/dolo-iglesias-z9z6u1rn7sY-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2112391b2edb6222da06.jpg";

/***/ }),

/***/ "./src/img/donald-giannatti-7lbzwVoEh9c-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/img/donald-giannatti-7lbzwVoEh9c-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e0d1c71889538f4cd5d.jpg";

/***/ }),

/***/ "./src/img/icon/circle-small.png":
/*!***************************************!*\
  !*** ./src/img/icon/circle-small.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dbd14a0df1fb3c466a4.png";

/***/ }),

/***/ "./src/img/john-matychuk-gUK3lA3K7Yo-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/img/john-matychuk-gUK3lA3K7Yo-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f420c27d72d1424ec8a1.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defineImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineImages */ "./src/defineImages.js");
/* harmony import */ var _imageLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageLoop */ "./src/imageLoop.js");
/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initPage */ "./src/initPage.js");
/* harmony import */ var _loadEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadEvents */ "./src/loadEvents.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const myImages = (0,_defineImages__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_initPage__WEBPACK_IMPORTED_MODULE_2__["default"])(myImages);
const myInterval = setInterval(_imageLoop__WEBPACK_IMPORTED_MODULE_1__["default"], [5000]);
(0,_loadEvents__WEBPACK_IMPORTED_MODULE_3__["default"])(myInterval);

})();

MyLib = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjBDO0FBQ047QUFDRjtBQUNJO0FBQ2pCOztBQUVyQixpQkFBaUIseURBQVk7QUFDN0IscURBQVE7QUFDUiwrQkFBK0Isa0RBQVM7QUFDeEMsdURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9kZWZpbmVJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvaW1hZ2VMb29wLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2luaXRQYWdlLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2xvYWRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL015TGliLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNDUsIDQ1KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI21haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuXFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMDBweDtcXG4gICAgcGFkZGluZzogMTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuI21pZHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuI2ltYWdlQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLWluLW91dDtcXG59XFxuLmFjdGl2ZXtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLmFycm93e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxufVxcbi5hcnJvdzpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG4jYXJyb3dMZWZ0e1xcbiAgICBsZWZ0OiAzMHB4O1xcbiAgICB0b3A6IDUwJTtcXG59XFxuI2Fycm93UmlnaHR7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICB0b3A6IDUwJTtcXG59XFxuXFxuI21hcmtlcnN7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFya2VyQ29udGVudHtcXG4gICAgei1pbmRleDogMjtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuZGlzcGxheTogZmxleDtcXG5ib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5ib3JkZXItcmFkaXVzOiAyMHB4O1xcbmJvdHRvbTogMTIlO1xcbmxlZnQ6IDQwJTtcXG53aWR0aDogMjAlO1xcbmhlaWdodDogNCU7XFxub3BhY2l0eTogMC41O1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcblxcbn1cXG4ubmF2RG90OmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuW2RhdGEtc3RhdHVzXXtcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbn1cXG5bZGF0YS1oaWdobGlnaHRde1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztJQUNkLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDZCQUE2Qjs7QUFFakM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7QUFDWjtBQUNBO0lBQ0ksV0FBVztJQUNYLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Qsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsU0FBUztBQUNULFVBQVU7QUFDVixVQUFVO0FBQ1YsWUFBWTtBQUNaLHVCQUF1Qjs7O0FBR3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNDUsIDQ1KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI21haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuXFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMDBweDtcXG4gICAgcGFkZGluZzogMTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuI21pZHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuI2ltYWdlQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLWluLW91dDtcXG59XFxuLmFjdGl2ZXtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLmFycm93e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxufVxcbi5hcnJvdzpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG4jYXJyb3dMZWZ0e1xcbiAgICBsZWZ0OiAzMHB4O1xcbiAgICB0b3A6IDUwJTtcXG59XFxuI2Fycm93UmlnaHR7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICB0b3A6IDUwJTtcXG59XFxuXFxuI21hcmtlcnN7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFya2VyQ29udGVudHtcXG4gICAgei1pbmRleDogMjtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuZGlzcGxheTogZmxleDtcXG5ib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5ib3JkZXItcmFkaXVzOiAyMHB4O1xcbmJvdHRvbTogMTIlO1xcbmxlZnQ6IDQwJTtcXG53aWR0aDogMjAlO1xcbmhlaWdodDogNCU7XFxub3BhY2l0eTogMC41O1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcblxcbn1cXG4ubmF2RG90OmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuW2RhdGEtc3RhdHVzXXtcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbn1cXG5bZGF0YS1oaWdobGlnaHRde1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGltZzEgZnJvbSAnLi9pbWcvY2hyaXMtYmFpci1BMTB5MkVxN09IWS11bnNwbGFzaC5qcGcnO1xuaW1wb3J0IGltZzIgZnJvbSAnLi9pbWcvZG9sby1pZ2xlc2lhcy1GakVsVXFHZmJBdy11bnNwbGFzaC5qcGcnO1xuaW1wb3J0IGltZzMgZnJvbSAnLi9pbWcvZG9sby1pZ2xlc2lhcy16OXo2dTFybjdzWS11bnNwbGFzaC5qcGcnO1xuaW1wb3J0IGltZzQgZnJvbSAnLi9pbWcvZG9uYWxkLWdpYW5uYXR0aS03bGJ6d1ZvRWg5Yy11bnNwbGFzaC5qcGcnO1xuaW1wb3J0IGltZzUgZnJvbSAnLi9pbWcvam9obi1tYXR5Y2h1ay1nVUszbEEzSzdZby11bnNwbGFzaC5qcGcnO1xuXG5mdW5jdGlvbiBkZWZpbmVJbWFnZXMoKSB7XG4gIGNvbnN0IGFsbEltYWdlcyA9IFtdO1xuICBjb25zdCBmaWxlMSA9IG5ldyBJbWFnZSgpO1xuICBmaWxlMS5zcmMgPSBpbWcxO1xuICBmaWxlMS5jbGFzc0xpc3QuYWRkKCdpbWcnKTtcbiAgZmlsZTEuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgMCk7XG5cbiAgY29uc3QgZmlsZTIgPSBuZXcgSW1hZ2UoKTtcbiAgZmlsZTIuc3JjID0gaW1nMjtcbiAgZmlsZTIuY2xhc3NMaXN0LmFkZCgnaW1nJyk7XG4gIGZpbGUyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIDEpO1xuXG4gIGNvbnN0IGZpbGUzID0gbmV3IEltYWdlKCk7XG4gIGZpbGUzLnNyYyA9IGltZzM7XG4gIGZpbGUzLmNsYXNzTGlzdC5hZGQoJ2ltZycpO1xuICBmaWxlMy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCAyKTtcblxuICBjb25zdCBmaWxlNCA9IG5ldyBJbWFnZSgpO1xuICBmaWxlNC5zcmMgPSBpbWc0O1xuICBmaWxlNC5jbGFzc0xpc3QuYWRkKCdpbWcnKTtcbiAgZmlsZTQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgMyk7XG5cbiAgY29uc3QgZmlsZTUgPSBuZXcgSW1hZ2UoKTtcbiAgZmlsZTUuc3JjID0gaW1nNTtcbiAgZmlsZTUuY2xhc3NMaXN0LmFkZCgnaW1nJyk7XG4gIGZpbGU1LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIDQpO1xuXG4gIGZpbGUxLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnYWN0aXZlJyk7XG4gIGFsbEltYWdlcy5wdXNoKGZpbGUxLCBmaWxlMiwgZmlsZTMsIGZpbGU0LCBmaWxlNSk7XG5cbiAgcmV0dXJuIGFsbEltYWdlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUltYWdlcztcbiIsImZ1bmN0aW9uIGltYWdlTG9vcCgpIHtcbiAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIG15IGltYWdlc1xuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZUNvbnRhaW5lcicpO1xuICBjb25zdCBhcnJheU9mSW1hZ2VzID0gWy4uLmltYWdlQ29udGFpbmVyLmNoaWxkcmVuXTtcbiAgLy8gQ2hlY2sgY3VycmVudCBpbmRleFxuICBjb25zdCBhY3RpdmVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN0YXR1c10nKTtcbiAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5T2ZJbWFnZXMuZmluZEluZGV4KChlbGUpID0+IGVsZSA9PT0gYWN0aXZlSW1hZ2UpO1xuICAvLyBSZW1vdmUgZGlzcGxheSBpbWFnZVxuICBhY3RpdmVJbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJyk7XG4gIC8vIFJlbW92ZSBuYXZEb3RIaWdobGlnaHRcbiAgY29uc3QgY3VycmVudERhdGFJbmRleCA9IGFycmF5T2ZJbWFnZXNbY3VycmVudEluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgY29uc29sZS5sb2coY3VycmVudERhdGFJbmRleCk7XG4gIGNvbnN0IG5hdkRvdHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcmtlckNvbnRlbnQnKS5jaGlsZHJlbl07XG4gIG5hdkRvdHNbY3VycmVudERhdGFJbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWhpZ2hsaWdodCcpO1xuICAvLyB1cGRhdGUgY3VycmVudEluZGV4XG4gIGN1cnJlbnRJbmRleCArPSAxO1xuICBpZiAoY3VycmVudEluZGV4ID4gYXJyYXlPZkltYWdlcy5sZW5ndGggLSAxKSB7IGN1cnJlbnRJbmRleCA9IDA7IH1cbiAgLy8gRGlzcGxheSBOZXh0IGltYWdlXG4gIGFycmF5T2ZJbWFnZXNbY3VycmVudEluZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJ2FjdGl2ZScpO1xuICAvLyBoaWdobGlnaHQgbmV4dCBuYXZEb3RcbiAgbmF2RG90c1tjdXJyZW50SW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1oaWdobGlnaHQnLCAnb24nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VMb29wO1xuIiwiaW1wb3J0IG5hdkljb24gZnJvbSAnLi9pbWcvaWNvbi9jaXJjbGUtc21hbGwucG5nJztcblxuZnVuY3Rpb24gaW5pdFBhZ2UobXlJbWFnZXMpIHtcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VDb250YWluZXInKTtcbiAgbXlJbWFnZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIEFwcGVuZCBhbGwgaW1hZ2VzIGZyb20gYXJyYXlcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAvLyBDcmVhdGUgbmF2aWdhdGlvbiBkb3RzXG4gICAgY29uc3QgbmF2aWdhdGlvbkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXJrZXJDb250ZW50Jyk7XG4gICAgY29uc3QgbmF2RG90ID0gbmV3IEltYWdlKCk7XG4gICAgbmF2RG90LnNyYyA9IG5hdkljb247XG4gICAgY29uc3QgaW1hZ2VJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLXN0YXR1cycpKSB7XG4gICAgICBuYXZEb3Quc2V0QXR0cmlidXRlKCdkYXRhLWhpZ2hsaWdodCcsICdvbicpO1xuICAgIH1cbiAgICBuYXZEb3Quc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW1hZ2VJbmRleCk7XG4gICAgbmF2RG90LmNsYXNzTGlzdC5hZGQoJ25hdkRvdCcpO1xuICAgIG5hdmlnYXRpb25CYXIuYXBwZW5kQ2hpbGQobmF2RG90LmNsb25lTm9kZSh0cnVlKSk7XG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgaW5pdFBhZ2U7XG4iLCJmdW5jdGlvbiBsb2FkRXZlbnRzKCkge1xuICAvLyBFdmVudHMgZm9yIG15IGFycm93c1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93Jyk7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgLy8gQ2xlYXIgSW50ZXJ2YWwgZnJvbSB0aGUgTG9vcCBJbWFnZSBDYXJvdXNlbFxuICAgICAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIG15IGltYWdlc1xuICAgICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VDb250YWluZXInKTtcbiAgICAgIGNvbnN0IGFycmF5T2ZJbWFnZXMgPSBbLi4uaW1hZ2VDb250YWluZXIuY2hpbGRyZW5dO1xuICAgICAgY29uc29sZS5sb2coYXJyYXlPZkltYWdlcyk7XG5cbiAgICAgIC8vIENoZWNrIGN1cnJlbnQgaW5kZXhcbiAgICAgIGNvbnN0IGFjdGl2ZUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3RhdHVzXScpO1xuICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5T2ZJbWFnZXMuZmluZEluZGV4KChlbGUpID0+IGVsZSA9PT0gYWN0aXZlSW1hZ2UpO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudEluZGV4KTtcbiAgICAgIC8vIFJlbW92ZSBkaXNwbGF5IGltYWdlXG4gICAgICBhY3RpdmVJbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJyk7XG4gICAgICAvLyBSZW1vdmUgY3VycmVudCBuYXZEb3QgaGlnaGxpZ2h0ZWRcbiAgICAgIGNvbnN0IG5hdkRvdHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcmtlckNvbnRlbnQnKS5jaGlsZHJlbl07XG4gICAgICBuYXZEb3RzW2N1cnJlbnRJbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWhpZ2hsaWdodCcpO1xuICAgICAgLy9cbiAgICAgIC8vIENoZWNrIHdoYXQgYnV0dG9uIGFjdGlvbiBpcyBwcmVzc1xuICAgICAgY29uc3QgYnRuQWN0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJyk7XG4gICAgICAvLyBNb3ZlIEluZGV4IGRlcGVuZGluZyBvbiBidXR0b25cblxuICAgICAgaWYgKGJ0bkFjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGJ0bkFjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgfVxuICAgICAgLy8gUmVzZXQgSW5kZXggaWYgaXQgZ2V0cyBiaWdnZXIgdGhhbiBhcnJheSBsZW5ndGhcbiAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZJbWFnZXMubGVuZ3RoKTtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPiBhcnJheU9mSW1hZ2VzLmxlbmd0aCAtIDEpIHsgY3VycmVudEluZGV4ID0gMDsgfVxuICAgICAgLy8gUmV0dXJuIHRvIGxhc3QgaWYgaW5kZXggaXMgbG93ZXIgdGhhbiAwXG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSBhcnJheU9mSW1hZ2VzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICAvLyBEaXNwbGF5IE5leHQgaW1hZ2VcbiAgICAgIGFycmF5T2ZJbWFnZXNbY3VycmVudEluZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJ2FjdGl2ZScpO1xuICAgICAgLy8gSGlnaGxpZ2h0IG5leHQgbmF2RG90XG4gICAgICBuYXZEb3RzW2N1cnJlbnRJbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWhpZ2hsaWdodCcsICdvbicpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBMb2FkIGV2ZW50cyBmb3IgbmF2aWdhdGlvbiBkb3RzXG4gIGNvbnN0IG5hdkRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2RG90Jyk7XG4gIG5hdkRvdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAvLyBSZW1vdmUgdmlzaWJsZSBpbWFnZVxuICAgICAgY29uc3QgdmlzaWJsZUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3RhdHVzXScpO1xuICAgICAgY29uc3QgYXJyYXlPZkltYWdlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VDb250YWluZXInKS5jaGlsZHJlbl07XG4gICAgICBjb25zdCBpbmRleE9mVmlzaWJsZUltYWdlID0gYXJyYXlPZkltYWdlcy5maW5kSW5kZXgoKGltZykgPT4gaW1nID09PSB2aXNpYmxlSW1hZ2UpO1xuICAgICAgYXJyYXlPZkltYWdlc1tpbmRleE9mVmlzaWJsZUltYWdlXS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJyk7XG4gICAgICAvLyBSZW1vdmUgbmF2RG90IGhpZ2hsaWdodFxuICAgICAgY29uc3QgbmF2RG90c0FycmF5ID0gWy4uLm5hdkRvdHNdO1xuICAgICAgbmF2RG90c0FycmF5W2luZGV4T2ZWaXNpYmxlSW1hZ2VdLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1oaWdobGlnaHQnKTtcbiAgICAgIC8vIERpc3BsYXkgbmV3IHZpc2libGUgaW1hZ2VcbiAgICAgIGFycmF5T2ZJbWFnZXNbcmVmZXJlbmNlSW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnYWN0aXZlJyk7XG4gICAgICBuYXZEb3RzQXJyYXlbcmVmZXJlbmNlSW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1oaWdobGlnaHQnLCAnb24nKTtcbiAgICB9KTtcbiAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkRXZlbnRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZGVmaW5lSW1hZ2VzIGZyb20gJy4vZGVmaW5lSW1hZ2VzJztcbmltcG9ydCBpbWFnZUxvb3AgZnJvbSAnLi9pbWFnZUxvb3AnO1xuaW1wb3J0IGluaXRQYWdlIGZyb20gJy4vaW5pdFBhZ2UnO1xuaW1wb3J0IGxvYWRFdmVudHMgZnJvbSAnLi9sb2FkRXZlbnRzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBteUltYWdlcyA9IGRlZmluZUltYWdlcygpO1xuaW5pdFBhZ2UobXlJbWFnZXMpO1xuY29uc3QgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKGltYWdlTG9vcCwgWzUwMDBdKTtcbmxvYWRFdmVudHMobXlJbnRlcnZhbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=