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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".nav {\\n  margin: 20px;\\n  text-align: center;\\n}\\n.nav a {\\n  margin: 0 20px;\\n  border: 1px solid black;\\n  font-size: 25px;\\n  padding: 0 30px;\\n}\\n\\n.imgwrapper {\\n  display: inline-block;\\n  grid-area: avatar;\\n}\\n.imgwrapper .avatar {\\n  width: 200px;\\n  text-align: center;\\n  padding: 20px;\\n  border: 3px solid red;\\n}\\n\\n.bio {\\n  border: 3px solid red;\\n  height: 200px;\\n  grid-area: bio;\\n}\\n\\n.info {\\n  border: 3px solid red;\\n  grid-area: info;\\n}\\n\\n.sign {\\n  border: 3px solid red;\\n  width: 400px;\\n  height: 30px;\\n  grid-area: sign;\\n  display: inline-block;\\n  display: flex;\\n  justify-content: space-between;\\n  margin: 0 auto;\\n}\\n\\n.resume {\\n  margin: 0 auto;\\n  max-width: 600px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 2fr 1fr;\\n  grid-template-areas: \\\"avatar bio\\\" \\\"info info\\\" \\\"sign sign\\\";\\n  grid-gap: 10px;\\n}\\n.resume span {\\n  font-size: 20px;\\n}\\n\\n.data {\\n  max-width: 400px;\\n  margin: auto auto;\\n}\\n.data div {\\n  margin: 20px 0;\\n  border: 1px solid black;\\n}\\n\\n.orderPizza {\\n  border: 3px solid #0059ff;\\n  min-width: 100px;\\n  min-height: 100px;\\n  background-color: #F29D42;\\n}\\n.orderPizza span {\\n  font-size: 25px;\\n  color: gray;\\n}\\n\\n.img_pizza_part1,\\n.img_pizza_part2 {\\n  top: 10px;\\n  opacity: 0;\\n}\\n\\n.img_pizza_part3,\\n.img_pizza_part4 {\\n  opacity: 0;\\n}\\n\\ndialog {\\n  text-align: center;\\n  font-size: 40px;\\n  position: absolute;\\n  margin: 200px auto;\\n  width: 400px;\\n  height: 250px;\\n  border-radius: 20px;\\n  background: #c5afaf;\\n}\\ndialog .btn_close {\\n  margin-top: 40px;\\n  width: 150px;\\n  height: 50px;\\n  border-radius: 20px;\\n}\\ndialog p {\\n  margin-top: 50px;\\n}\\n\\n.image_pizza {\\n  background-color: #6d6666;\\n  text-align: center;\\n  display: grid;\\n  grid-template-columns: 170px 170px;\\n  grid-template-rows: 170px 170px;\\n}\\n.image_pizza img {\\n  left: 20px;\\n  width: 170px;\\n  position: relative;\\n}\\n\\nul {\\n  padding: 10px 70px;\\n}\\n\\n.applicationJs {\\n  position: relative;\\n  margin: 0 auto;\\n  max-width: 1100px;\\n  grid-gap: 10px;\\n  background-color: #6d6666;\\n  display: grid;\\n  grid-template-areas: \\\"order list\\\" \\\"order list\\\" \\\"button list\\\";\\n  grid-template-columns: 1fr 2fr;\\n  grid-template-rows: 4fr 3fr 1fr;\\n}\\n\\n.button-wrapper {\\n  grid-area: button;\\n  margin: auto auto;\\n}\\n.button-wrapper .btn {\\n  border-radius: 10px;\\n  padding: 20px 20px;\\n  font-size: 30px;\\n  width: 350px;\\n  height: 80px;\\n  color: gray;\\n  background-color: #F29D42;\\n  border: none;\\n}\\n.button-wrapper .btn:hover {\\n  cursor: pointer;\\n  background-color: #ff6a00;\\n}\\n\\n.order {\\n  grid-area: order;\\n}\\n\\nli {\\n  list-style-type: none;\\n}\\nli:hover {\\n  cursor: pointer;\\n  color: red;\\n}\\n\\n.img_pizza {\\n  width: 200px;\\n}\\n\\n.listOrderPizza {\\n  color: gray;\\n}\\n.listOrderPizza li {\\n  font-size: 25px;\\n  color: gray;\\n  width: 170px;\\n}\\n\\n.pizzaPart {\\n  text-align: center;\\n  grid-gap: 10px;\\n  grid-area: list;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n.pizzaPart h3 {\\n  margin-top: 15px;\\n  font-size: 25px;\\n  color: gray;\\n}\\n.pizzaPart li {\\n  font-size: 25px;\\n  color: gray;\\n  width: 170px;\\n  padding: 20px 20px;\\n  border: 1px solid gray;\\n}\\n.pizzaPart .activ {\\n  background-color: rgba(255, 106, 0, 0.44);\\n  color: white;\\n}\\n\\n.ing1_wrapper,\\n.ing2_wrapper,\\n.osnova_wrapper,\\n.sauce_wrapper {\\n  background-color: #F29D42;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  border: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://homework_app/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://homework_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://homework_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/application/image/image_part_001.png":
/*!*************************************************************!*\
  !*** ./src/components/application/image/image_part_001.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"26d593592a44fa08d1bdb8adc7118f95.png\");\n\n//# sourceURL=webpack://homework_app/./src/components/application/image/image_part_001.png?");

/***/ }),

/***/ "./src/components/application/image/image_part_002.png":
/*!*************************************************************!*\
  !*** ./src/components/application/image/image_part_002.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"613545240f9e03c9b31f1020ebe3940f.png\");\n\n//# sourceURL=webpack://homework_app/./src/components/application/image/image_part_002.png?");

/***/ }),

/***/ "./src/components/application/image/image_part_003.png":
/*!*************************************************************!*\
  !*** ./src/components/application/image/image_part_003.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dea54ab680b888ea2ee92860ad1e9fc9.png\");\n\n//# sourceURL=webpack://homework_app/./src/components/application/image/image_part_003.png?");

/***/ }),

/***/ "./src/components/application/image/image_part_004.png":
/*!*************************************************************!*\
  !*** ./src/components/application/image/image_part_004.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"263edfd9e6858857f37e4aa7d53d75a5.png\");\n\n//# sourceURL=webpack://homework_app/./src/components/application/image/image_part_004.png?");

/***/ }),

/***/ "./src/components/resume/avatar/avatar.png":
/*!*************************************************!*\
  !*** ./src/components/resume/avatar/avatar.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8415df19ac6d93d27908fa4fdaa799aa.png\");\n\n//# sourceURL=webpack://homework_app/./src/components/resume/avatar/avatar.png?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://homework_app/./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://homework_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://homework_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://homework_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://homework_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://homework_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://homework_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_application_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/application/application */ \"./src/components/application/application.js\");\n/* harmony import */ var _components_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/data/data */ \"./src/components/data/data.js\");\n/* harmony import */ var _components_navigation_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/nav */ \"./src/components/navigation/nav.js\");\n/* harmony import */ var _components_resume_resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/resume/resume */ \"./src/components/resume/resume.js\");\n\r\n\r\n \r\n\r\nconst main = document.getElementById('main');\r\nclass App{\r\n\tconstructor(){\r\n\t\treturn this.init();\r\n\t}\r\n\tinit() {\r\n\t\t window.onhashchange = () => {\r\n      this.render();\r\n\t\t};\r\n\t\treturn this.render();\r\n\t};\r\n\trender() {\r\n\t\tconsole.log('ghbdtn');\r\n\t\tmain.innerHTML = '';\r\n\t\tmain.appendChild(new _components_navigation_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\t\tswitch (window.location.hash.slice(1)) {\r\n\t\t\tcase _components_navigation_nav__WEBPACK_IMPORTED_MODULE_2__.APP_ROUTES.resume:\r\n\t\t\t\tthis.renderResume();\r\n\t\t\t\tbreak;\r\n\t\t\tcase _components_navigation_nav__WEBPACK_IMPORTED_MODULE_2__.APP_ROUTES.application:\r\n\t\t\t\tthis.renderApplication();\r\n\t\t\t\tbreak;\r\n\t\t\tcase _components_navigation_nav__WEBPACK_IMPORTED_MODULE_2__.APP_ROUTES.data:\r\n\t\t\t\tthis.renderData();\r\n\t\t\t\tbreak;\r\n\t\t}\r\n\t};\r\n\trenderResume() {\r\n\t\tconst resume = new _components_resume_resume__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n\t};\r\n\trenderApplication() {\r\n\t\tconst application = new _components_application_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\t};\r\n\trenderData() {\r\n\t\tconst data = new _components_data_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\t};\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://homework_app/./src/app.js?");

/***/ }),

/***/ "./src/components/application/application.js":
/*!***************************************************!*\
  !*** ./src/components/application/application.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ \"./src/app.js\");\n/* harmony import */ var _order_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order/order */ \"./src/components/application/order/order.js\");\n/* harmony import */ var _pizzaPart_pizzaPart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizzaPart/pizzaPart */ \"./src/components/application/pizzaPart/pizzaPart.js\");\n/* harmony import */ var _utils_clickTarget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/clickTarget.js */ \"./src/components/application/utils/clickTarget.js\");\n/* harmony import */ var _utils_clickOrder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/clickOrder.js */ \"./src/components/application/utils/clickOrder.js\");\n\r\n\r\n\r\n\r\n\r\nclass Application{\r\n\tconstructor() {\r\n\t\treturn this.init();\r\n\t}\r\n\tinit() {\r\n\t\tthis.render();\r\n\t\tconst listOrderPizza = document.getElementById('listOrderPizza');\r\n \t\tconst osnova = document.getElementById('osnova');\r\n\t\tconst ing1 = document.getElementById('ing1');\r\n \t\tconst ing2 = document.getElementById('ing2');\r\n \t\tconst sauce = document.getElementById('sauce');\r\n \t\tconst buttonToOrder = document.getElementById('to_order');\r\n\t\tbuttonToOrder.disabled = true;\r\n\t\tsauce.addEventListener('click', _utils_clickTarget_js__WEBPACK_IMPORTED_MODULE_3__.clickTarget);\r\n\t\ting2.addEventListener('click',_utils_clickTarget_js__WEBPACK_IMPORTED_MODULE_3__.clickTarget);\r\n\t\ting1.addEventListener('click', _utils_clickTarget_js__WEBPACK_IMPORTED_MODULE_3__.clickTarget);\r\n\t\tosnova.addEventListener('click',_utils_clickTarget_js__WEBPACK_IMPORTED_MODULE_3__.clickTarget);\r\n\t\tlistOrderPizza.addEventListener('click', _utils_clickOrder_js__WEBPACK_IMPORTED_MODULE_4__.clickOrder);\r\n\t\tlet dialog = document.querySelector('dialog');\r\n\t\tdocument.querySelector('#to_order').addEventListener('click',function() {\r\n  \t\tdialog.show();\r\n\t\t});\r\n\t\tdocument.querySelector('#close').addEventListener('click',function() {\r\n  \t\tdialog.close();\r\n\t\t});\r\n}\r\n\trender() {\r\n\t\tconst article = document.createElement('article');\r\n\t\tarticle.className = 'applicationJs';\r\n\t\tarticle.appendChild((0,_order_order__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\t\tconst buttonWrapper = document.createElement('div');\r\n\t\tbuttonWrapper.className = 'button-wrapper';\r\n\t\tconst buttonToOrder = document.createElement('button');\r\n\t\tbuttonToOrder.id = 'to_order';\r\n\t\tbuttonToOrder.className = 'btn';\r\n\t\tbuttonToOrder.innerText = 'Заказать';\r\n\t\tbuttonWrapper.appendChild(buttonToOrder);\r\n\t\tarticle.appendChild(buttonWrapper);\r\n\t\tarticle.appendChild((0,_pizzaPart_pizzaPart__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n\t\tconst dialog = document.createElement('dialog');\r\n\t\tconst p = document.createElement('p');\r\n\t\tp.innerText = 'Ваш заказ принят!!';\r\n\t\tdialog.appendChild(p);\r\n\t\tconst buttonToClose = document.createElement('button');\r\n\t\tbuttonToClose.id = 'close';\r\n\t\tbuttonToClose.className = 'btn_close';\r\n\t\tbuttonToClose.innerText = 'Закрыть';\r\n\t\tdialog.appendChild(buttonToClose);\r\n\t\tarticle.appendChild(dialog);\t\t\r\n\t\t_app__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(article);\r\n\t}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);\n\n//# sourceURL=webpack://homework_app/./src/components/application/application.js?");

/***/ }),

/***/ "./src/components/application/order/order.js":
/*!***************************************************!*\
  !*** ./src/components/application/order/order.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _image_image_part_001__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image/image_part_001 */ \"./src/components/application/image/image_part_001.png\");\n/* harmony import */ var _image_image_part_002__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/image_part_002 */ \"./src/components/application/image/image_part_002.png\");\n/* harmony import */ var _image_image_part_003__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/image_part_003 */ \"./src/components/application/image/image_part_003.png\");\n/* harmony import */ var _image_image_part_004__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/image_part_004 */ \"./src/components/application/image/image_part_004.png\");\n\r\n\r\n\r\n\r\nconst img = [_image_image_part_001__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _image_image_part_002__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _image_image_part_003__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _image_image_part_004__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\r\n\r\nfunction renderOrder() {\r\n\tconst order = document.createElement('section');\r\n\torder.className = 'order';\r\n\tconst imagePizza = document.createElement('div');\r\n\torder.appendChild(imagePizza);\r\n\timagePizza.id = 'image_pizza';\r\n\timagePizza.className = 'image_pizza';\r\n\tfor (let i = 1; i <= 4; i++) {\r\n\t\tconst image = document.createElement('img');\r\n\t\timage.className = `img_pizza_part${i}`;\r\n\t\timage.src = img[i-1];\r\n\t\timagePizza.appendChild(image);\r\n\t};\r\n\tconst orderPizza = document.createElement('div');\r\n\torder.appendChild(orderPizza);\r\n\torderPizza.className = 'orderPizza';\r\n\tconst listOrder = document.createElement('ul');\r\n\torderPizza.appendChild(listOrder);\r\n\tlistOrder.id = 'listOrderPizza';\r\n\tlistOrder.className = 'listOrderPizza';\r\n\tconst price = document.createElement('span');\r\n\tprice.innerHTML = 'Цена:';\r\n\torderPizza.appendChild(price);\r\n\tconst priceWrapper = document.createElement('span');\r\n\tpriceWrapper.id = 'priceWrapper';\r\n\tpriceWrapper.innerHTML = '0$';\r\n\torderPizza.appendChild(priceWrapper);\r\n\treturn order;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderOrder);\n\n//# sourceURL=webpack://homework_app/./src/components/application/order/order.js?");

/***/ }),

/***/ "./src/components/application/pizzaPart/ing1Ul/ing1Ul.js":
/*!***************************************************************!*\
  !*** ./src/components/application/pizzaPart/ing1Ul/ing1Ul.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ing1Ul = {\r\n\ting1_1: 'Ветчина',\r\n\ting1_2: 'Грудинка',\r\n\ting1_3: 'Лосось',\r\n\ting1_4: 'Креветки',\r\n};\r\n\r\nfunction renderIng1(){\r\n\tconst ing1Wrapper = document.createElement('div');\r\n\ting1Wrapper.className = 'ing1_wrapper';\r\n\tconst headIng1 = document.createElement('h3');\r\n\theadIng1.innerHTML = 'Ингридиент 1';\r\n\tconst ing1List = document.createElement('ul');\r\n\ting1List.id = 'ing1';\r\n\ting1List.className = 'ing1Ul';\r\n\ting1Wrapper.appendChild(headIng1);\r\n\ting1Wrapper.appendChild(ing1List);\r\n\tObject.keys(ing1Ul).forEach((item) => {\r\n\t\tconst ing1 = document.createElement('li');\r\n\t\ting1.innerText = ing1Ul[item];\r\n\t\ting1.className = 'ing1';\r\n\t\ting1.id = item;\r\n\t\ting1List.appendChild(ing1);\r\n\t})\r\n\treturn ing1Wrapper;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderIng1);\n\n//# sourceURL=webpack://homework_app/./src/components/application/pizzaPart/ing1Ul/ing1Ul.js?");

/***/ }),

/***/ "./src/components/application/pizzaPart/ing2Ul/ing2Ul.js":
/*!***************************************************************!*\
  !*** ./src/components/application/pizzaPart/ing2Ul/ing2Ul.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ing2Ul = {\r\n\ting2_1: 'Томат',\r\n\ting2_2: 'Сыр',\r\n\ting2_3: 'Оливки',\r\n\ting2_4: 'Перец',\r\n};\r\nfunction renderIng2(){\r\n\tconst ing2Wrapper = document.createElement('div');\r\n\ting2Wrapper.className = 'ing2_wrapper';\r\n\tconst headIng2 = document.createElement('h3');\r\n\theadIng2.innerHTML = 'Ингридиент 2';\r\n\tconst ing2List = document.createElement('ul');\r\n\ting2List.id = 'ing2';\r\n\ting2List.className = 'ing2Ul';\r\n\ting2Wrapper.appendChild(headIng2);\r\n\ting2Wrapper.appendChild(ing2List);\r\n\tObject.keys(ing2Ul).forEach((item) => {\r\n\t\tconst ing2 = document.createElement('li');\r\n\t\ting2.innerText = ing2Ul[item];\r\n\t\ting2.className = 'ing2';\r\n\t\ting2.id = item;\r\n\t\ting2List.appendChild(ing2);\r\n\t})\r\n\treturn ing2Wrapper;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderIng2);\n\n//# sourceURL=webpack://homework_app/./src/components/application/pizzaPart/ing2Ul/ing2Ul.js?");

/***/ }),

/***/ "./src/components/application/pizzaPart/osnovaUl/osnovaUl.js":
/*!*******************************************************************!*\
  !*** ./src/components/application/pizzaPart/osnovaUl/osnovaUl.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\tconst osnovaUl = {\r\n\tosnova_1: 'Тонкое тесто',\r\n\tosnova_2: 'Пышное тесто',\r\n\tosnova_3: 'Слоеное тесто',\r\n\tosnova_4: 'Тесто на пиве',\r\n};\r\nfunction renderOsnova(){\r\n\tconst osnovaWrapper = document.createElement('div');\r\n\tosnovaWrapper.className = 'osnova_wrapper';\r\n\tconst headOsnova = document.createElement('h3');\r\n\theadOsnova.innerHTML = 'Основа';\r\n\tconst osnovaList = document.createElement('ul');\r\n\tosnovaList.id = 'osnova';\r\n\tosnovaList.className = 'osnovaUl';\r\n\tosnovaWrapper.appendChild(headOsnova);\r\n\tosnovaWrapper.appendChild(osnovaList);\r\n\tObject.keys(osnovaUl).forEach((item) => {\r\n\t\tconst osnova = document.createElement('li');\r\n\t\tosnova.innerText = osnovaUl[item];\r\n\t\tosnova.className = 'osnova';\r\n\t\tosnova.id = item;\r\n\t\tosnovaList.appendChild(osnova);\r\n\t})\r\n\treturn osnovaWrapper;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderOsnova);\n\n//# sourceURL=webpack://homework_app/./src/components/application/pizzaPart/osnovaUl/osnovaUl.js?");

/***/ }),

/***/ "./src/components/application/pizzaPart/pizzaPart.js":
/*!***********************************************************!*\
  !*** ./src/components/application/pizzaPart/pizzaPart.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ing1Ul_ing1Ul__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ing1Ul/ing1Ul */ \"./src/components/application/pizzaPart/ing1Ul/ing1Ul.js\");\n/* harmony import */ var _ing2Ul_ing2Ul__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ing2Ul/ing2Ul */ \"./src/components/application/pizzaPart/ing2Ul/ing2Ul.js\");\n/* harmony import */ var _osnovaUl_osnovaUl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./osnovaUl/osnovaUl */ \"./src/components/application/pizzaPart/osnovaUl/osnovaUl.js\");\n/* harmony import */ var _sauceUl_sauceUl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sauceUl/sauceUl */ \"./src/components/application/pizzaPart/sauceUl/sauceUl.js\");\n\r\n\r\n\r\n\r\nfunction renderPizzaPart() {\r\n\tconst pizzaPart = document.createElement('div');\r\n\tpizzaPart.className = 'pizzaPart';\r\n\tpizzaPart.appendChild((0,_osnovaUl_osnovaUl__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n\tpizzaPart.appendChild((0,_ing1Ul_ing1Ul__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\tpizzaPart.appendChild((0,_ing2Ul_ing2Ul__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\tpizzaPart.appendChild((0,_sauceUl_sauceUl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n\treturn pizzaPart;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPizzaPart);\n\n//# sourceURL=webpack://homework_app/./src/components/application/pizzaPart/pizzaPart.js?");

/***/ }),

/***/ "./src/components/application/pizzaPart/sauceUl/sauceUl.js":
/*!*****************************************************************!*\
  !*** ./src/components/application/pizzaPart/sauceUl/sauceUl.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sauceUl = {\r\n\tsauce_1: 'Томатный',\r\n\tsauce_2: 'Чесночный',\r\n\tsauce_3: 'Карри',\r\n\tsauce_4: 'Терияки',\r\n};\r\nfunction renderSauce(){\r\n\tconst sauceWrapper = document.createElement('div');\r\n\tsauceWrapper.className = 'sauce_wrapper';\r\n\tconst headSauce = document.createElement('h3');\r\n\theadSauce.innerHTML = 'Соус';\r\n\tconst sauceList = document.createElement('ul');\r\n\tsauceList.id = 'sauce';\r\n\tsauceList.className = 'sauceUl';\r\n\tsauceWrapper.appendChild(headSauce);\r\n\tsauceWrapper.appendChild(sauceList);\r\n\tObject.keys(sauceUl).forEach((item) => {\r\n\t\tconst sauce = document.createElement('li');\r\n\t\tsauce.innerText = sauceUl[item];\r\n\t\tsauce.className = 'sous';\r\n\t\tsauce.id = item;\r\n\t\tsauceList.appendChild(sauce);\r\n\t})\r\n\treturn sauceWrapper;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSauce);\n\n//# sourceURL=webpack://homework_app/./src/components/application/pizzaPart/sauceUl/sauceUl.js?");

/***/ }),

/***/ "./src/components/application/utils/button.js":
/*!****************************************************!*\
  !*** ./src/components/application/utils/button.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeButton\": () => (/* binding */ changeButton)\n/* harmony export */ });\n/* harmony import */ var _changeImg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeImg.js */ \"./src/components/application/utils/changeImg.js\");\n\r\nfunction changeButton() {\r\n\tconst buttonToOrder = document.getElementById('to_order');\r\n\tbuttonToOrder.disabled = _changeImg_js__WEBPACK_IMPORTED_MODULE_0__.arrClassNameListOrder.filter((item, index) => _changeImg_js__WEBPACK_IMPORTED_MODULE_0__.arrClassNameListOrder.indexOf(item) === index).length !== 4;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://homework_app/./src/components/application/utils/button.js?");

/***/ }),

/***/ "./src/components/application/utils/changeImg.js":
/*!*******************************************************!*\
  !*** ./src/components/application/utils/changeImg.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrClassNameListOrder\": () => (/* binding */ arrClassNameListOrder),\n/* harmony export */   \"arrOnlyFindClass\": () => (/* binding */ arrOnlyFindClass),\n/* harmony export */   \"changeImg\": () => (/* binding */ changeImg)\n/* harmony export */ });\nlet arrClassNameListOrder = [];\r\nlet listOrder = [];\r\nlet arrOnlyFindClass = [];\r\nfunction changeImg(shouldChange) {\r\n\tconst imgArray = [...document.getElementById('image_pizza').children];\r\n\tlistOrder = [...document.getElementById('listOrderPizza').children];\r\n\tarrClassNameListOrder = [];\r\n\tlistOrder.forEach(item => arrClassNameListOrder.push(item.className));\r\n\tarrOnlyFindClass = arrClassNameListOrder.filter((item, index) => arrClassNameListOrder.indexOf(item) === index);\r\n\tconsole.log(arrOnlyFindClass);\r\n\tconsole.log(arrOnlyFindClass.length);\r\n\tif (shouldChange) {\r\n\t\timgArray[arrOnlyFindClass.length - 1].style.opacity = 1;\r\n\t} else {\r\n\t\tif (arrOnlyFindClass.length <= 3) {\r\n\t\t\timgArray[arrOnlyFindClass.length].style.opacity = 0;\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack://homework_app/./src/components/application/utils/changeImg.js?");

/***/ }),

/***/ "./src/components/application/utils/changePrice.js":
/*!*********************************************************!*\
  !*** ./src/components/application/utils/changePrice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePrice\": () => (/* binding */ changePrice)\n/* harmony export */ });\n/* harmony import */ var _changeImg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeImg.js */ \"./src/components/application/utils/changeImg.js\");\n\r\nconst price = {\r\n    osnova_1:10,\r\n    osnova_2:12,\r\n    osnova_3:14,\r\n    osnova_4:16,\r\n    ing1_1:2,\r\n    ing1_2:4,\r\n    ing1_3:6,\r\n    ing1_4:8,\r\n    ing2_1:1,\r\n    ing2_2:3,\r\n    ing2_3:5,\r\n    ing2_4:7,\r\n    sauce_1:2,\r\n    sauce_2:4,\r\n    sauce_3:5,\r\n    sauce_4:3,\r\n}\r\nlet priceOrder = 0;\r\nfunction changePrice(e) {\r\n\tconst target_id = e.target.id;\r\n    if(e.target.parentNode.id === 'listOrderPizza'){\r\n        priceOrder = priceOrder - price[target_id];\r\n    } else {\r\n        priceOrder = priceOrder + price[target_id];\r\n        (0,_changeImg_js__WEBPACK_IMPORTED_MODULE_0__.changeImg)(true);\r\n    }\r\n\tpriceWrapper.textContent = `${priceOrder}$`;\r\n}\r\n\n\n//# sourceURL=webpack://homework_app/./src/components/application/utils/changePrice.js?");

/***/ }),

/***/ "./src/components/application/utils/clickOrder.js":
/*!********************************************************!*\
  !*** ./src/components/application/utils/clickOrder.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickOrder\": () => (/* binding */ clickOrder)\n/* harmony export */ });\n/* harmony import */ var _clickTarget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickTarget.js */ \"./src/components/application/utils/clickTarget.js\");\n/* harmony import */ var _changePrice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changePrice.js */ \"./src/components/application/utils/changePrice.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.js */ \"./src/components/application/utils/button.js\");\n/* harmony import */ var _changeImg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeImg.js */ \"./src/components/application/utils/changeImg.js\");\n\r\n\r\n\r\n\r\nfunction clickOrder(e) {\r\n\tconst targetOrder = e.target.id;\r\n\t(0,_changePrice_js__WEBPACK_IMPORTED_MODULE_1__.changePrice)(e);\r\n\te.target.remove();\r\n\t(0,_changeImg_js__WEBPACK_IMPORTED_MODULE_3__.changeImg)(false);\r\n\t(0,_button_js__WEBPACK_IMPORTED_MODULE_2__.changeButton)();\r\n\tconst liActiv = document.getElementById(`${targetOrder}`);\r\n\tconst parent = document.getElementById(`${liActiv.parentNode.id}`);\r\n\tliActiv.classList.remove('activ');\r\n\tparent.addEventListener('click', _clickTarget_js__WEBPACK_IMPORTED_MODULE_0__.clickTarget);\r\n}\n\n//# sourceURL=webpack://homework_app/./src/components/application/utils/clickOrder.js?");

/***/ }),

/***/ "./src/components/application/utils/clickTarget.js":
/*!*********************************************************!*\
  !*** ./src/components/application/utils/clickTarget.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"orderPizzaChild\": () => (/* binding */ orderPizzaChild),\n/* harmony export */   \"clickTarget\": () => (/* binding */ clickTarget)\n/* harmony export */ });\n/* harmony import */ var _getCloneNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCloneNode.js */ \"./src/components/application/utils/getCloneNode.js\");\n/* harmony import */ var _changePrice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changePrice.js */ \"./src/components/application/utils/changePrice.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.js */ \"./src/components/application/utils/button.js\");\n\r\n\r\n\r\nlet orderPizzaChild = [];\r\nfunction clickTarget(e) {\r\n\tconst listOrderPizza = document.getElementById('listOrderPizza');\r\n\torderPizzaChild = [...document.getElementById('listOrderPizza').children];\r\n\tif(orderPizzaChild.length && orderPizzaChild.find((item)=>item.id===e.target.id)){\r\n\t\tconsole.log('You try second click');\r\n\t\treturn;\r\n\t}\r\n\tlet parentTargetId = e.target.parentNode.id;\r\n\tlistOrderPizza.append((0,_getCloneNode_js__WEBPACK_IMPORTED_MODULE_0__.getCloneLi)(e));\r\n\te.target.classList.add('activ');\r\n\t(0,_changePrice_js__WEBPACK_IMPORTED_MODULE_1__.changePrice)(e);\r\n\t(0,_button_js__WEBPACK_IMPORTED_MODULE_2__.changeButton)();\r\n\tlet parent = document.getElementById(e.target.parentNode.id);\r\n\tlet parentTargetIdChild = [...document.getElementById(`${parentTargetId}`).children];\r\n\tif (parentTargetId === 'osnova' || parentTargetId === 'sauce') {\r\n\t\tif (parentTargetIdChild.find(item => item.classList.contains('activ'))) {\r\n\t\t\tparent.removeEventListener('click', clickTarget);\r\n\t\t}\r\n\t} else {\r\n\t\tif (parentTargetIdChild.filter(item => item.classList.contains('activ')).length>=2) {\r\n\t\t\tparent.removeEventListener('click', clickTarget);\r\n\t\t}\r\n\t}\t\r\n}\n\n//# sourceURL=webpack://homework_app/./src/components/application/utils/clickTarget.js?");

/***/ }),

/***/ "./src/components/application/utils/getCloneNode.js":
/*!**********************************************************!*\
  !*** ./src/components/application/utils/getCloneNode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCloneLi\": () => (/* binding */ getCloneLi)\n/* harmony export */ });\nfunction getCloneLi(item) {\r\n    const li = item.target.cloneNode(true);\r\n    // li.innerHTML = item.target.innerHTML;\r\n    return li;\r\n   }\n\n//# sourceURL=webpack://homework_app/./src/components/application/utils/getCloneNode.js?");

/***/ }),

/***/ "./src/components/data/data.js":
/*!*************************************!*\
  !*** ./src/components/data/data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ \"./src/app.js\");\n\r\nclass Data{\r\n\tconstructor() {\r\n\t\treturn this.init();\r\n\t}\r\n\tinit() {\r\n\t\treturn this.render();\r\n\t}\r\n\tasync render() {\r\n\t\tlet dataInfo = await fetch('https://jsonplaceholder.typicode.com/posts');\r\n\t\tlet data = await dataInfo.json();\r\n\t\tconst article = document.createElement('article');\r\n\t\tarticle.className = 'data';\r\n\t\tObject.keys(data).forEach((item) => {\r\n\t\t\tconst div = document.createElement('div');\r\n\t\t\tObject.keys(data[item]).forEach((key) => {\r\n\t\t\t\tconst p = document.createElement('p');\r\n\t\t\t\tp.innerText = `${key}: ${data[item][key]}`\r\n\t\t\t\tdiv.appendChild(p);\r\n\t\t\t})\r\n\t\t\tarticle.appendChild(div);\r\n\t\t})\r\n\t\t_app__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(article);\r\n\t}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://homework_app/./src/components/data/data.js?");

/***/ }),

/***/ "./src/components/navigation/nav.js":
/*!******************************************!*\
  !*** ./src/components/navigation/nav.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_ROUTES\": () => (/* binding */ APP_ROUTES),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst APP_ROUTES = {\r\n\tresume: 'resume',\r\n\tapplication: 'application',\r\n\tdata: 'data',\r\n};\r\nclass Nav{\r\n\tconstructor() {\r\n\t\treturn this.init();\r\n\t}\r\n\tinit() {\r\n\t\treturn this.render();\r\n\t}\r\n\trender(){\r\n\t\tconst nav = document.createElement('nav');\r\n\t\tnav.className = 'nav';\r\n\t\tObject.keys(APP_ROUTES).forEach((route) => {\r\n\t\t\tconst a = document.createElement('a');\r\n\t\t\ta.innerHTML = route.toUpperCase();\r\n\t\t\ta.href = '#';\r\n\t\t\ta.id = APP_ROUTES[route];\r\n\t\t\tnav.appendChild(a);\r\n\t\t});\r\n\t\tnav.addEventListener('click', (e) => {\r\n\t\t\tif (e.target.tagName === 'A') {\r\n\t\t\t\te.preventDefault();\r\n\t\t\t\twindow.location.hash = e.target.id;\r\n\t\t\t}\r\n\t\t})\r\n\t\treturn nav;\r\n\t}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n//# sourceURL=webpack://homework_app/./src/components/navigation/nav.js?");

/***/ }),

/***/ "./src/components/resume/avatar/avatar.js":
/*!************************************************!*\
  !*** ./src/components/resume/avatar/avatar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAvatar\": () => (/* binding */ createAvatar)\n/* harmony export */ });\n/* harmony import */ var _avatar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.png */ \"./src/components/resume/avatar/avatar.png\");\n\r\nconst createAvatar = () => {\r\n\tconst imgWrapper = document.createElement('div');\r\n\timgWrapper.className = 'imgwrapper';\r\n  const avatar = document.createElement('img');\r\n  avatar.className = 'avatar';\r\n\tavatar.src = _avatar_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\timgWrapper.appendChild(avatar);\r\n\treturn imgWrapper;\r\n}\n\n//# sourceURL=webpack://homework_app/./src/components/resume/avatar/avatar.js?");

/***/ }),

/***/ "./src/components/resume/bio/bio.js":
/*!******************************************!*\
  !*** ./src/components/resume/bio/bio.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBio\": () => (/* binding */ createBio)\n/* harmony export */ });\nconst createBio = () => {\r\n  const bio = document.createElement('span');\r\n  bio.className = 'bio';\r\n  const name = document.createElement('p');\r\n  const age = document.createElement('p');\r\n  const profession = document.createElement('p');\r\n  profession.innerHTML = 'Profession: Programmer'\r\n  name.innerHTML =     'Name: Ivanov Ivan Ivanovich';\r\n  age.innerHTML = 'Age: 23';\r\n  bio.appendChild(name);\r\n  bio.appendChild(age);\r\n\tbio.appendChild(profession);\r\n\treturn bio;\r\n}\n\n//# sourceURL=webpack://homework_app/./src/components/resume/bio/bio.js?");

/***/ }),

/***/ "./src/components/resume/info/info.js":
/*!********************************************!*\
  !*** ./src/components/resume/info/info.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createInfo\": () => (/* binding */ createInfo)\n/* harmony export */ });\nconst createInfo = () => {\r\n  const info = document.createElement('span');\r\n  info.className='info';\r\n\tinfo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque repellat accusamus distinctio soluta provident atque autem molestias nulla quae consequuntur alias aut, sapiente ullam necessitatibus assumenda dolores magnam sit dicta, inventore est expedita qui. Culpa, quo aperiam in corporis ullam fugit rerum exercitationem assumenda ratione amet? Quibusdam facere inventore laudantium, quod eius cumque alias laboriosam praesentium quae repellat repellendus maiores est at modi temporibus velit soluta maxime tempore nesciunt nostrum quis dolor asperiores blanditiis rem? Corrupti, mollitia dicta molestias cupiditate nemo aperiam rem delectus eligendi natus similique impedit hic repellat necessitatibus reprehenderit nihil dignissimos dolor deleniti assumenda eos doloremque qui modi? Velit consequatur iste iusto sed similique nesciunt quod, distinctio veniam hic earum rem nihil possimus accusantium? Exercitationem unde libero!';\r\n\treturn info;\r\n}\n\n//# sourceURL=webpack://homework_app/./src/components/resume/info/info.js?");

/***/ }),

/***/ "./src/components/resume/resume.js":
/*!*****************************************!*\
  !*** ./src/components/resume/resume.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _avatar_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar/avatar */ \"./src/components/resume/avatar/avatar.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./src/app.js\");\n/* harmony import */ var _bio_bio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bio/bio */ \"./src/components/resume/bio/bio.js\");\n/* harmony import */ var _info_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info */ \"./src/components/resume/info/info.js\");\n/* harmony import */ var _sign_sign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign/sign */ \"./src/components/resume/sign/sign.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Resume{\r\n\tconstructor() {\r\n\t\tthis.init();\r\n\t}\r\n\tinit() {\r\n\t\tthis.render();\r\n\t};\r\n\trender() {\r\n\t\tconst el = document.createElement('article');\r\n\t\tel.className = 'resume';\r\n\t\t\r\n\t\tel.appendChild((0,_avatar_avatar__WEBPACK_IMPORTED_MODULE_0__.createAvatar)());\r\n\t\tel.appendChild((0,_bio_bio__WEBPACK_IMPORTED_MODULE_2__.createBio)());\r\n\t\tel.appendChild((0,_info_info__WEBPACK_IMPORTED_MODULE_3__.createInfo)());\r\n\t\tel.appendChild((0,_sign_sign__WEBPACK_IMPORTED_MODULE_4__.createSign)());\r\n\t\t_app__WEBPACK_IMPORTED_MODULE_1__.main.appendChild(el);\r\n\t};\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Resume);\r\n\r\n\r\n\n\n//# sourceURL=webpack://homework_app/./src/components/resume/resume.js?");

/***/ }),

/***/ "./src/components/resume/sign/sign.js":
/*!********************************************!*\
  !*** ./src/components/resume/sign/sign.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSign\": () => (/* binding */ createSign)\n/* harmony export */ });\nconst createSign = () => {\r\n  const sign = document.createElement('div');\r\n  sign.className = 'sign';\r\n  const date = document.createElement('span');\r\n  date.className = 'date';\r\n  const autograph = document.createElement('span');\r\n  autograph.className ='autograph';\r\n  date.textContent = 'Дата';\r\n  autograph.textContent = 'Подпись';\r\n  sign.appendChild(date);\r\n\tsign.appendChild(autograph);\r\n\treturn sign;\r\n}\n\n//# sourceURL=webpack://homework_app/./src/components/resume/sign/sign.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles */ \"./src/styles/styles.scss\");\n\r\n\r\n\r\n\r\n\r\nconst app = new _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\n\n\n//# sourceURL=webpack://homework_app/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;