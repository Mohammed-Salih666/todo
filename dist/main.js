/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=PT+Sans&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: 'PT Sans', sans-serif;\n    margin: 0;\n}\n#content { \n    display: grid; \n    grid-template-columns: minmax(120px, 12%) 1fr;\n    grid-template-rows: minmax(100px,15%) 1fr;\n    width: 100vw;\n    height: 100vh;\n    gap: 1px;\n}\n\n#header { \n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: #4682A9;\n    box-shadow: 5px 2px 10px 1px silver;\n    display: flex;\n    align-items: center;\n}\n\n#logo-image {\n    margin-left: 1%;\n}\n#header > h1 {\n    margin-left: 2%;\n    color: white;\n}\n\n#sidebar { \n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color: #F6F4EB;\n    box-shadow: 2px 2px 6px 0px silver;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 5%;\n    z-index: 1;\n}\n\n#nav-div {\n    display: flex; \n    flex-direction: column;\n    gap:20px;\n    margin-top: 15%;\n}\n#nav-div > span { \n    font-size: 1.5rem;\n    margin-left: 15%;\n    \n}\n#nav-div > span:hover { \n    font-size: 1.7rem;\n    font-weight: bold;\n    cursor: pointer;\n\n}\n\n#add-btn { \n    margin-bottom: 10%;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    /* border: solid #85d6ff 4px; */\n    background-color: #5ba7d8;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 4rem;\n    color: white;\n    margin-left: 10%;\n    box-shadow: 2px 2px 5px 0px silver;\n}\n#add-btn:hover {\n    cursor: pointer;\n}\n\n#main { \n    grid-row: 2/3; \n    grid-column: 2/3;\n    padding: 1%;\n}\n\n#project-input { \n    background-color: white;\n    height: 30%;\n    width: 40%;\n    border: solid silver 1px;\n    box-shadow: 5px 5px 10px 1px silver;\n    position: absolute;\n    top: 25vh;\n    left: 25vw;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 3%;\n    justify-content: flex-start;\n    gap: 10%;\n}\n#project-input > div:not([id=\"priority-radio-btns\"]) { \n    display: flex;\n    /* flex-direction: column; */\n    /* height: 50%; */\n    gap: 3%;\n    width: 100%;\n    align-items: center;\n    flex-wrap: wrap;\n}\n#project-input > * { \n    width: 100%;\n}\n#project-input input { \n    border: 1px solid silver; \n    padding: 3% 0 3% 0;;\n    border-radius: 5px;\n    outline: none;\n    font-family: inherit;\n    font-size: 1.1rem;\n}\n\n#project-input input[type=\"text\"]:focus {\n\n}\nbutton[type=\"submit\"] {\n    align-self: center;\n    width: 100%;\n    padding: 3%;\n    border: 1px solid silver;\n    background-color: white;\n    border-radius: 5px;\n    font-family: 'PT Sans', sans-serif;\n    font-size: 1.1em;\n}\nbutton[type=\"submit\"]:hover, #add-todo-btn:hover, .project-details:hover { \n    background-color: #5ba7d8;\n    color: white; \n    cursor: pointer;\n\n}\n\nlabel{\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.project, .todo {\n    width: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: solid 1px #dddddd;\n    /* box-shadow: 2px 2px 5px 1px silver; */\n    padding: 0% 1% 0% 1%;\n    margin-bottom: 5px;\n    background-color: #f3f3f3;\n    gap: 5%;\n}\n\n.project:hover { \n    box-shadow: 2px 2px 5px 1px silver;\n}\n.project > div, .todo > div { \n    display: flex; \n    gap: 5%;\n    width: 40%;\n}\n\n.high-priority { \n    border-left: 4px solid red; \n}\n\n.medium-priority { \n    border-left: 4px solid rgb(255, 179, 39); \n}\n\n.low-priority { \n    border-left: 4px solid lightgreen; \n}\n\n#project-todos { \n    background-color: white; \n    height: 50%;\n    width: 40%;\n    border: solid silver 1px;\n    box-shadow: 5px 5px 10px 1px silver;\n    position: absolute;\n    top: 25vh;\n    left: 25vw;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    overflow: auto;\n    padding: 3%;\n}\n#close-btn { \n    position: absolute;\n    top: 3%;\n    left: 3%;\n    font-size: 2.5rem;\n    color:#ff4848;\n}\n#close-btn:hover {\n    cursor: pointer;\n}\n\n#todo-input  {\n    background-color: #f1f1f1;\n    position: absolute;\n    top: 30vh;\n    left: 35vw;\n    width: 25%;\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    padding: 2%;\n    gap: 10%;\n    align-items: flex-start;\n}\n\n#todo-input > div  {\n    width: 100%;\n}\n#todo-input input { \n    font-family: inherit;\n    font-size: 1rem;\n    outline: none; \n}\n\n#todo-input #title{ \n    width: 100%;\n    height: 30%;\n    border: none;\n    border-bottom: solid 1px silver;\n    border-radius: 5px 5px 0 0px;\n    font-size: 1rem;\n}\n\n#todo-input #description {\n    width: 100%;\n    height: 70%;\n    border: none;\n    outline: none;\n    resize: none;\n    border-radius: 0 0 5px 5px;\n    font-family: inherit;\n    font-size: 0.9rem;\n}\n\nform {\n    background-color: #F6F4EB;\n}\n#add-todo-btn { \n    border: 1px solid silver;\n    padding: 2%;\n    text-align: center;\n    position: absolute;\n    top: 10%;\n    right: 3%;\n}\n\n.project-details {\n    border: 1px solid silver;\n    border-radius: 5px;\n    padding: 1%;\n}\n\ninput[type=\"date\"] {\n    padding: 3%;\n    border: silver 1px solid;\n    border-radius: 5px;\n}\n\ninput[type=\"checkbox\"] {\n    width: 1.2rem;\n    flex:none;\n}\n\n.project-title, .todo-title { \n    font-size: 1.1rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(title, date, priority) {\n        this.title = title; \n        this.date = date; \n        this.priority = priority; \n        this.isCompleted = false; \n        this.todos = []; \n    }\n\n    changeCompletion() {\n        this.isCompleted = !this.isCompleted; \n    }\n\n    addNewTodo(todo){\n        this.todos.push(todo)\n    }\n}\n\n\n//# sourceURL=webpack://webpack/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n\n    constructor(title, description, date, priority){\n        this.title = title; \n        this.description = description; \n        this.date = date; \n        this.priority = priority; \n        this.isCompleted = false; \n    }\n\n    changeCompletion() {\n        this.isCompleted = !this.isCompleted; \n    }\n\n}\n\n//# sourceURL=webpack://webpack/./src/todo.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _to_do_list_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do-list.png */ \"./src/to-do-list.png\");\n\n\n \n\nconst logoImage = document.querySelector('#logo-image'); \nlogoImage.src = _to_do_list_png__WEBPACK_IMPORTED_MODULE_2__;\nconst projects = [];\nconst main = document.querySelector('#main');\nconst addBtn = document.querySelector('#add-btn'); \n\nconst projectInput = document.createElement('form'); \nprojectInput.id = \"project-input\"; \n\n\nconst projectInputHtml = `\n    <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Title: \">\n\n    <div>\n        <label for=\"date\"> Due Date: </label>\n        <input type=\"date\" name=\"date\" id=\"date\">\n    </div>\n\n    <div id=\"priority-radio-btns\">\n    <label for=\"priority-radio-btns\">Priority: </label>\n    <input type=\"radio\" id=\"high-radio\" name=\"priority-select\" value=\"High\" checked>\n    <label for=\"project-radio\" style=\"color:red;\">High</label>\n    <input type=\"radio\" id=\"medium-radio\" name=\"priority-select\" value=\"Medium\">\n    <label for=\"todo-radio\" style=\"color:orange;\">Medium</label>\n    <input type=\"radio\" id=\"low-radio\" name=\"priority-select\" value=\"Low\">\n    <label for=\"todo-radio\" style=\"color:lightgreen;\">Low</label>\n</div>\n\n    <button type=\"submit\" id=\"submit-button\">Add Project</button>\n`;\n\n\nprojectInput.insertAdjacentHTML('afterbegin', projectInputHtml); \n\n\naddBtn.addEventListener('click', () => {\n    document.body.appendChild(projectInput);\n});\n\nprojectInput.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n        const title = projectInput.elements['title'].value; \n        const date = projectInput.elements['date'].value; \n        const priority = projectInput.elements['high-radio'].checked? \"high\" : projectInput.elements['medium-radio'].checked ? \"medium\" : \"low\"; \n    \n        const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, date, priority); \n        projects.push(project); \n\n        const projectDiv = document.createElement('div'); \n        projectDiv.classList.add(\"project\", `${project.priority}-priority`);\n\n        projectDiv.insertAdjacentHTML('afterbegin', `\n                <div>\n                    <input type=\"checkbox\" id=\"is-completed\" name=\"is-completed\" >\n                    <p class=\"project-title\"><b>${project.title}</b></p>\n                </div>\n                <p class=\"project-date\">${project.date}</p>\n        `);\n        \n        const detailsSpan = document.createElement('span'); \n        detailsSpan.classList.add(\"project-details\");\n        detailsSpan.textContent = \"Details\"; \n        const projectIndex = projects.length-1; \n        detailsSpan.addEventListener('click', ()=> openProject(projectIndex)); \n        projectDiv.appendChild(detailsSpan);\n        main.appendChild(projectDiv);\n        document.body.removeChild(projectInput);\n        projectInput.reset();\n\n\n});\n\n\nconst openProject = (index) => {\n    console.log(projects.length);\n\n    const projectTodos = document.createElement('div'); \n    projectTodos.id = \"project-todos\"; \n\n    const openedProjectHtml = `\n    \n        <h3>${projects[index].title}</h3>\n    \n`; \n\n    for(let i = 0; i<projects[index].todos.length; i++) {\n        let todo = projects[index].todos[i];\n\n        let todoDiv = document.createElement('div'); \n        todoDiv.classList.add(\"todo\", `${todo.priority}-priority`);\n\n        todoDiv.insertAdjacentHTML('afterbegin', `\n            <div>\n            <input type=\"checkbox\" id=\"is-completed\" name=\"is-completed\" >\n            <p class=\"todo-title\"><b>${todo.title}</b></p>\n            </div>\n            <p class=\"todo-description\">${todo.description}</p>\n            <p class=\"todo-date\">${todo.date}</p>\n        `);\n     projectTodos.appendChild(todoDiv);    \n}\n\n    const closeBtn = document.createElement('span'); \n    closeBtn.textContent = \"x\"; \n    closeBtn.id = \"close-btn\";\n    projectTodos.appendChild(closeBtn);\n\n    const addTodoBtn = document.createElement('span'); \n    addTodoBtn.id = \"add-todo-btn\"; \n    addTodoBtn.textContent = \"Add a Todo\";\n\n\n\n\n    const todoInput = document.createElement('form');\n    todoInput.id = \"todo-input\"; \n\n    const todoInputHtml = `\n    <div>\n        <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Title: \">\n        <textarea id=\"description\" name=\"description\" placeholder=\"Description: \" rows=\"10\"></textarea>\n    </div>\n    <div>\n            <label for=\"date\"> Due Date: </label>\n            <input type=\"date\" name=\"date\" id=\"date\">\n        </div>\n    \n        <div id=\"priority-radio-btns\">\n            <label for=\"priority-radio-btns\">Priority: </label>\n            <input type=\"radio\" id=\"high-radio\" name=\"priority-select\" value=\"High\" checked>\n            <label for=\"project-radio\" style=\"color:red;\">High</label>\n            <input type=\"radio\" id=\"medium-radio\" name=\"priority-select\" value=\"Medium\">\n            <label for=\"todo-radio\" style=\"color:orange;\">Medium</label>\n            <input type=\"radio\" id=\"low-radio\" name=\"priority-select\" value=\"Low\">\n            <label for=\"todo-radio\" style=\"color:lightgreen;\">Low</label>\n        </div>\n    <button type=\"submit\" id=\"submit-button\">Add Todo</button>\n    \n    `;\n    todoInput.insertAdjacentHTML('afterbegin', todoInputHtml);\n\n\n\n    addTodoBtn.addEventListener(\"click\", () => {\n        document.body.appendChild(todoInput);\n    });\n    \n    projectTodos.appendChild(addTodoBtn);\n    \n    projectTodos.insertAdjacentHTML('afterbegin', openedProjectHtml); \n    document.body.appendChild(projectTodos);\n    \n    closeBtn.addEventListener(\"click\", () => {\n        document.body.removeChild(projectTodos)\n    }); \n\n    todoInput.addEventListener(\"submit\", (event) => {\n        event.preventDefault(); \n        \n\n\n        const title = todoInput.elements['title'].value; \n        const description = todoInput.elements['description'].value; \n        const date = todoInput.elements['date'].value; \n        const priority = todoInput.elements['high-radio'].checked? \"high\" : todoInput.elements['medium-radio'].checked ? \"medium\" : \"low\";\n        const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, date, priority); \n        \n        const todoDiv = document.createElement('div'); \n        todoDiv.classList.add(\"todo\", `${todo.priority}-priority`);\n\n        todoDiv.insertAdjacentHTML('afterbegin', `\n                <div>\n                    <input type=\"checkbox\" id=\"is-completed\" name=\"is-completed\" >\n                    <p class=\"todo-title\"><b>${todo.title}</b></p>\n                </div>\n                <p class=\"todo-description\">${todo.description}</p>\n                <p class=\"todo-date\">${todo.date}</p>\n        `);\n\n        projectTodos.appendChild(todoDiv); \n\n\n\n        projects[index].addNewTodo(todo);        \n        document.body.removeChild(todoInput);\n        todoInput.reset();\n    }) ;\n    \n\n}\n\n\n//# sourceURL=webpack://webpack/./src/ui.js?");

/***/ }),

/***/ "./src/to-do-list.png":
/*!****************************!*\
  !*** ./src/to-do-list.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9684d465776ac501dee.png\";\n\n//# sourceURL=webpack://webpack/./src/to-do-list.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;