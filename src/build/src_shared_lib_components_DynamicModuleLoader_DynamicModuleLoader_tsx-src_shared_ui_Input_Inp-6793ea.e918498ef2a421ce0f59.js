"use strict";
(self["webpackChunkproduct"] = self["webpackChunkproduct"] || []).push([["src_shared_lib_components_DynamicModuleLoader_DynamicModuleLoader_tsx-src_shared_ui_Input_Inp-6793ea"],{

/***/ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicModuleLoader: () => (/* binding */ DynamicModuleLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var DynamicModuleLoader = function DynamicModuleLoader(props) {
  var children = props.children,
    reducers = props.reducers,
    removeAfterUnmount = props.removeAfterUnmount;
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    Object.entries(reducers).forEach(function (_a) {
      var name = _a[0],
        reducer = _a[1];
      store.reducerManager.add(name, reducer);
      dispatch({
        type: "@INIT ".concat(name, " reducer")
      });
    });
    return function () {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(function (_a) {
          var name = _a[0],
            reducer = _a[1];
          store.reducerManager.remove(name);
          dispatch({
            type: "@DESTROY ".concat(name, " reducer")
          });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: children
    }, void 0)
  );
};

/***/ }),

/***/ "./src/shared/ui/Input/Input.tsx":
/*!***************************************!*\
  !*** ./src/shared/ui/Input/Input.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.module.scss */ "./src/shared/ui/Input/Input.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function (_a) {
  var className = _a.className,
    value = _a.value,
    onChange = _a.onChange,
    _b = _a.type,
    type = _b === void 0 ? "text" : _b,
    placeholder = _a.placeholder,
    autoFocus = _a.autoFocus,
    props = __rest(_a, ["className", "value", "onChange", "type", "placeholder", "autoFocus"]);
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    isFocused = _c[0],
    setIsFocused = _c[1];
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
    caretPosition = _d[0],
    setCaretPosition = _d[1];
  var onChangeHandler = function onChangeHandler(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    setCaretPosition(e.target.value.length);
  };
  var onBlur = function onBlur() {
    setIsFocused(false);
  };
  var onFocus = function onFocus() {
    setIsFocused(true);
  };
  var onSelect = function onSelect(e) {
    var _a;
    setCaretPosition(((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (autoFocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [autoFocus]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].InputWrapper, {}, [className])
  }, {
    children: [placeholder && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].placeholder
    }, {
      children: "".concat(placeholder, ">")
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].caretWrapper
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        ref: ref,
        type: type,
        value: value,
        onChange: onChangeHandler,
        className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
        onBlur: onBlur,
        onFocus: onFocus,
        onSelect: onSelect
      }, void 0), isFocused && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({
        className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].caret,
        style: {
          left: "".concat(caretPosition * 7.5, "px")
        }
      }, {
        children: " "
      }), void 0)]
    }), void 0)]
  }), void 0);
});

/***/ }),

/***/ "./src/shared/ui/Text/Text.tsx":
/*!*************************************!*\
  !*** ./src/shared/ui/Text/Text.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   TextTheme: () => (/* binding */ TextTheme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var _Text_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.module.scss */ "./src/shared/ui/Text/Text.module.scss");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};



var TextTheme;
(function (TextTheme) {
  TextTheme["PRIMARY"] = "primary";
  TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
var Text = function Text(_a) {
  var className = _a.className,
    title = _a.title,
    text = _a.text,
    _b = _a.theme,
    theme = _b === void 0 ? TextTheme.PRIMARY : _b;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Text_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {}, [className, _Text_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][theme]])
  }, {
    children: [title && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({
      className: _Text_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title
    }, {
      children: title
    }), void 0), text && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({
      className: _Text_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].text
    }, {
      children: text
    }), void 0)]
  }), void 0);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss ***!
  \********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-Input-Input-module__InputWrapper--LuFDU {
  display: flex;
}

.src-shared-ui-Input-Input-module__placeholder--emAQQ {
  margin-right: 5px;
}

.src-shared-ui-Input-Input-module__input--LVdIP {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  color: transparent;
  text-shadow: 0 0 0 var(--primary-color);
}
.src-shared-ui-Input-Input-module__input--LVdIP:focus {
  outline: none;
}

.src-shared-ui-Input-Input-module__caretWrapper--y1GiF {
  flex-grow: 1;
  position: relative;
}

.src-shared-ui-Input-Input-module__caret--lqMFG {
  height: 3px;
  width: 9px;
  background: var(--primary-color);
  bottom: 0;
  left: 0;
  position: absolute;
  animation: src-shared-ui-Input-Input-module__blink--M7n8f 0.7s forwards infinite;
}

@keyframes src-shared-ui-Input-Input-module__blink--M7n8f {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.01;
  }
  100% {
    opacity: 1;
  }
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Input/Input.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,uBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,uCAAA;AACF;AACE;EACI,aAAA;AACN;;AAGA;EACE,YAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,UAAA;EACA,gCAAA;EACA,SAAA;EACA,OAAA;EACA,kBAAA;EACA,gFAAA;AAAF;;AAGA;EACE;IACI,UAAA;EAAJ;EAGA;IACI,aAAA;EADJ;EAIA;IACI,UAAA;EAFJ;AACF","sourcesContent":[".InputWrapper {\r\n  display: flex;\r\n}\r\n\r\n.placeholder {\r\n  margin-right: 5px;\r\n}\r\n\r\n.input {\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  width: 100%;\r\n  color: transparent;\r\n  text-shadow: 0 0 0 var(--primary-color);\r\n\r\n  &:focus {\r\n      outline: none;\r\n  }\r\n}\r\n\r\n.caretWrapper {\r\n  flex-grow: 1;\r\n  position: relative;\r\n}\r\n\r\n.caret {\r\n  height: 3px;\r\n  width: 9px;\r\n  background: var(--primary-color);\r\n  bottom: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  animation: blink 0.7s forwards infinite;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n      opacity: 0;\r\n  }\r\n\r\n  50% {\r\n      opacity: 0.01;\r\n  }\r\n\r\n  100% {\r\n      opacity: 1;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"InputWrapper": `src-shared-ui-Input-Input-module__InputWrapper--LuFDU`,
	"placeholder": `src-shared-ui-Input-Input-module__placeholder--emAQQ`,
	"input": `src-shared-ui-Input-Input-module__input--LVdIP`,
	"caretWrapper": `src-shared-ui-Input-Input-module__caretWrapper--y1GiF`,
	"caret": `src-shared-ui-Input-Input-module__caret--lqMFG`,
	"blink": `src-shared-ui-Input-Input-module__blink--M7n8f`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-Text-Text-module__title--ikI7V {
  font: var(--font-l);
  color: var(--primary-color);
}

.src-shared-ui-Text-Text-module__text--uNJee {
  font: var(--font-m);
  color: var(--secondary-color);
}

.src-shared-ui-Text-Text-module__error--F9oLX .src-shared-ui-Text-Text-module__title--ikI7V {
  color: var(--red-light);
}
.src-shared-ui-Text-Text-module__error--F9oLX .src-shared-ui-Text-Text-module__text--uNJee {
  color: var(--red-dark);
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Text/Text.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,2BAAA;AACJ;;AACA;EACI,mBAAA;EACA,6BAAA;AAEJ;;AAEI;EACI,uBAAA;AACR;AAEI;EACI,sBAAA;AAAR","sourcesContent":[".title{\r\n    font:var(--font-l);\r\n    color:var(--primary-color);\r\n}\r\n.text{\r\n    font:var(--font-m);\r\n    color:var(--secondary-color);\r\n\r\n}\r\n.error{\r\n    .title{\r\n        color: var(--red-light);\r\n    }\r\n\r\n    .text{  \r\n        color: var(--red-dark);\r\n\r\n    }\r\n} \r\n.primary{\r\n    .title{}\r\n    .text{}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"title": `src-shared-ui-Text-Text-module__title--ikI7V`,
	"text": `src-shared-ui-Text-Text-module__text--uNJee`,
	"error": `src-shared-ui-Text-Text-module__error--F9oLX`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/ui/Input/Input.module.scss":
/*!***********************************************!*\
  !*** ./src/shared/ui/Input/Input.module.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/Text/Text.module.scss":
/*!*********************************************!*\
  !*** ./src/shared/ui/Text/Text.module.scss ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Text.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Text.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Text.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/lib/hooks/AppDispatch/AppDispatch.ts":
/*!*********************************************************!*\
  !*** ./src/shared/lib/hooks/AppDispatch/AppDispatch.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var useAppDispatch = function () { return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); };


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NoYXJlZF9saWJfY29tcG9uZW50c19EeW5hbWljTW9kdWxlTG9hZGVyX0R5bmFtaWNNb2R1bGVMb2FkZXJfdHN4LXNyY19zaGFyZWRfdWlfSW5wdXRfSW5wLTY3OTNlYS5lOTE4NDk4ZWYyYTQyMWNlMGY1OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVFO0FBQ3JDO0FBQ2tCO0FBQzdDLElBQUlPLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQWFDLEtBQUssRUFBRTtFQUM5QyxJQUFJQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0MsUUFBUTtJQUFFQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0UsUUFBUTtJQUFFQyxrQkFBa0IsR0FBR0gsS0FBSyxDQUFDRyxrQkFBa0I7RUFDdkcsSUFBSUMsS0FBSyxHQUFHTixxREFBUSxDQUFDLENBQUM7RUFDdEIsSUFBSU8sUUFBUSxHQUFHUix3REFBVyxDQUFDLENBQUM7RUFDNUJELGdEQUFTLENBQUMsWUFBWTtJQUNsQlUsTUFBTSxDQUFDQyxPQUFPLENBQUNMLFFBQVEsQ0FBQyxDQUFDTSxPQUFPLENBQUMsVUFBVUMsRUFBRSxFQUFFO01BQzNDLElBQUlDLElBQUksR0FBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUFFRSxPQUFPLEdBQUdGLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDakNMLEtBQUssQ0FBQ1EsY0FBYyxDQUFDQyxHQUFHLENBQUNILElBQUksRUFBRUMsT0FBTyxDQUFDO01BQ3ZDTixRQUFRLENBQUM7UUFBRVMsSUFBSSxFQUFFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDTCxJQUFJLEVBQUUsVUFBVTtNQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUM7SUFDRixPQUFPLFlBQVk7TUFDZixJQUFJUCxrQkFBa0IsRUFBRTtRQUNwQkcsTUFBTSxDQUFDQyxPQUFPLENBQUNMLFFBQVEsQ0FBQyxDQUFDTSxPQUFPLENBQUMsVUFBVUMsRUFBRSxFQUFFO1VBQzNDLElBQUlDLElBQUksR0FB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TTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEpBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLDBKQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QiwwSkFBTztBQUNoQyxvQ0FBb0MsK0lBQVcsR0FBRywwSkFBTzs7QUFFekQsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSx5U0FBbUo7QUFDekosTUFBTTtBQUFBO0FBQ04sc0RBQXNELCtJQUFXLEdBQUcsMEpBQU87QUFDM0UsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLCtJQUFXLEdBQUcsMEpBQU87O0FBRS9ELHFCQUFxQiwwSkFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBR2tLO0FBQ2xLLE9BQU8saUVBQWUsMEpBQU8sSUFBSSwwSkFBTyxVQUFVLDBKQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZuQztBQUNuQyxtQ0FBbUMsT0FBTyx3REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlci50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQudHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvc2hhcmVkL3VpL1RleHQvVGV4dC50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvdWkvVGV4dC9UZXh0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzPzRlMjEiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvdWkvVGV4dC9UZXh0Lm1vZHVsZS5zY3NzPzk4YjUiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvbGliL2hvb2tzL0FwcERpc3BhdGNoL0FwcERpc3BhdGNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmV4cG9ydCB2YXIgRHluYW1pY01vZHVsZUxvYWRlciA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIHJlZHVjZXJzID0gcHJvcHMucmVkdWNlcnMsIHJlbW92ZUFmdGVyVW5tb3VudCA9IHByb3BzLnJlbW92ZUFmdGVyVW5tb3VudDtcclxuICAgIHZhciBzdG9yZSA9IHVzZVN0b3JlKCk7XHJcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBPYmplY3QuZW50cmllcyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYVswXSwgcmVkdWNlciA9IF9hWzFdO1xyXG4gICAgICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5hZGQobmFtZSwgcmVkdWNlcik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJASU5JVCBcIi5jb25jYXQobmFtZSwgXCIgcmVkdWNlclwiKSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocmVtb3ZlQWZ0ZXJVbm1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCByZWR1Y2VyID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUucmVkdWNlck1hbmFnZXIucmVtb3ZlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJAREVTVFJPWSBcIi5jb25jYXQobmFtZSwgXCIgcmVkdWNlclwiKSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LW5vLXVzZWxlc3MtZnJhZ21lbnRcclxuICAgIF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9LCB2b2lkIDApKTtcclxufTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lXCI7XHJcbmltcG9ydCBjbHMgZnJvbSBcIi4vSW5wdXQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgbWVtbywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCB2YXIgSW5wdXQgPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgdmFsdWUgPSBfYS52YWx1ZSwgb25DaGFuZ2UgPSBfYS5vbkNoYW5nZSwgX2IgPSBfYS50eXBlLCB0eXBlID0gX2IgPT09IHZvaWQgMCA/IFwidGV4dFwiIDogX2IsIHBsYWNlaG9sZGVyID0gX2EucGxhY2Vob2xkZXIsIGF1dG9Gb2N1cyA9IF9hLmF1dG9Gb2N1cywgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcInZhbHVlXCIsIFwib25DaGFuZ2VcIiwgXCJ0eXBlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJhdXRvRm9jdXNcIl0pO1xyXG4gICAgdmFyIHJlZiA9IHVzZVJlZigpO1xyXG4gICAgdmFyIF9jID0gdXNlU3RhdGUoZmFsc2UpLCBpc0ZvY3VzZWQgPSBfY1swXSwgc2V0SXNGb2N1c2VkID0gX2NbMV07XHJcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZSgwKSwgY2FyZXRQb3NpdGlvbiA9IF9kWzBdLCBzZXRDYXJldFBvc2l0aW9uID0gX2RbMV07XHJcbiAgICB2YXIgb25DaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldENhcmV0UG9zaXRpb24oZS50YXJnZXQudmFsdWUubGVuZ3RoKTtcclxuICAgIH07XHJcbiAgICB2YXIgb25CbHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldElzRm9jdXNlZChmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0SXNGb2N1c2VkKHRydWUpO1xyXG4gICAgfTtcclxuICAgIHZhciBvblNlbGVjdCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHNldENhcmV0UG9zaXRpb24oKChfYSA9IGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS50YXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZWxlY3Rpb25TdGFydCkgfHwgMCk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoYXV0b0ZvY3VzKSB7XHJcbiAgICAgICAgICAgIHNldElzRm9jdXNlZCh0cnVlKTtcclxuICAgICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYXV0b0ZvY3VzXSk7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5JbnB1dFdyYXBwZXIsIHt9LCBbY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW3BsYWNlaG9sZGVyICYmIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMucGxhY2Vob2xkZXIgfSwgeyBjaGlsZHJlbjogXCJcIi5jb25jYXQocGxhY2Vob2xkZXIsIFwiPlwiKSB9KSwgdm9pZCAwKSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuY2FyZXRXcmFwcGVyIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgeyByZWY6IHJlZiwgdHlwZTogdHlwZSwgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogb25DaGFuZ2VIYW5kbGVyLCBjbGFzc05hbWU6IGNscy5pbnB1dCwgb25CbHVyOiBvbkJsdXIsIG9uRm9jdXM6IG9uRm9jdXMsIG9uU2VsZWN0OiBvblNlbGVjdCB9LCB2b2lkIDApLCBpc0ZvY3VzZWQgJiYgKF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuY2FyZXQsIHN0eWxlOiB7IGxlZnQ6IFwiXCIuY29uY2F0KGNhcmV0UG9zaXRpb24gKiA3LjUsIFwicHhcIikgfSB9LCB7IGNoaWxkcmVuOiBcIiBcIiB9KSwgdm9pZCAwKSldIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSk7XHJcbn0pO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwic2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZVwiO1xyXG5pbXBvcnQgY2xzIGZyb20gXCIuL1RleHQubW9kdWxlLnNjc3NcIjtcclxuZXhwb3J0IHZhciBUZXh0VGhlbWU7XHJcbihmdW5jdGlvbiAoVGV4dFRoZW1lKSB7XHJcbiAgICBUZXh0VGhlbWVbXCJQUklNQVJZXCJdID0gXCJwcmltYXJ5XCI7XHJcbiAgICBUZXh0VGhlbWVbXCJFUlJPUlwiXSA9IFwiZXJyb3JcIjtcclxufSkoVGV4dFRoZW1lIHx8IChUZXh0VGhlbWUgPSB7fSkpO1xyXG5leHBvcnQgdmFyIFRleHQgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHRpdGxlID0gX2EudGl0bGUsIHRleHQgPSBfYS50ZXh0LCBfYiA9IF9hLnRoZW1lLCB0aGVtZSA9IF9iID09PSB2b2lkIDAgPyBUZXh0VGhlbWUuUFJJTUFSWSA6IF9iO1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuVGV4dCwge30sIFtjbGFzc05hbWUsIGNsc1t0aGVtZV1dKSB9LCB7IGNoaWxkcmVuOiBbdGl0bGUgJiYgX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy50aXRsZSB9LCB7IGNoaWxkcmVuOiB0aXRsZSB9KSwgdm9pZCAwKSwgdGV4dCAmJiBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLnRleHQgfSwgeyBjaGlsZHJlbjogdGV4dCB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19JbnB1dFdyYXBwZXItLUx1RkRVIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19wbGFjZWhvbGRlci0tZW1BUVEge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dC0tTFZkSVAge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2lucHV0LS1MVmRJUDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXRXcmFwcGVyLS15MUdpRiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0LS1scU1GRyB7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogOXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFuaW1hdGlvbjogc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZiAwLjdzIGZvcndhcmRzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGYge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUFDRjtBQUNFO0VBQ0ksYUFBQTtBQUNOOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGdGQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNJLFVBQUE7RUFBSjtFQUdBO0lBQ0ksYUFBQTtFQURKO0VBSUE7SUFDSSxVQUFBO0VBRko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSW5wdXRXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZWhvbGRlciB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcblxcclxcbiAgJjpmb2N1cyB7XFxyXFxuICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmV0V3JhcHBlciB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJldCB7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIHdpZHRoOiA5cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBhbmltYXRpb246IGJsaW5rIDAuN3MgZm9yd2FyZHMgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmsge1xcclxcbiAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDAuMDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJJbnB1dFdyYXBwZXJcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19JbnB1dFdyYXBwZXItLUx1RkRVYCxcblx0XCJwbGFjZWhvbGRlclwiOiBgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3BsYWNlaG9sZGVyLS1lbUFRUWAsXG5cdFwiaW5wdXRcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dC0tTFZkSVBgLFxuXHRcImNhcmV0V3JhcHBlclwiOiBgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0V3JhcHBlci0teTFHaUZgLFxuXHRcImNhcmV0XCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXQtLWxxTUZHYCxcblx0XCJibGlua1wiOiBgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX190aXRsZS0taWtJN1Yge1xuICBmb250OiB2YXIoLS1mb250LWwpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX3RleHQtLXVOSmVlIHtcbiAgZm9udDogdmFyKC0tZm9udC1tKTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX2Vycm9yLS1GOW9MWCAuc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX190aXRsZS0taWtJN1Yge1xuICBjb2xvcjogdmFyKC0tcmVkLWxpZ2h0KTtcbn1cbi5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX2Vycm9yLS1GOW9MWCAuc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX190ZXh0LS11TkplZSB7XG4gIGNvbG9yOiB2YXIoLS1yZWQtZGFyayk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL3VpL1RleHQvVGV4dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFFSTtFQUNJLHVCQUFBO0FBQ1I7QUFFSTtFQUNJLHNCQUFBO0FBQVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxle1xcclxcbiAgICBmb250OnZhcigtLWZvbnQtbCk7XFxyXFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG4udGV4dHtcXHJcXG4gICAgZm9udDp2YXIoLS1mb250LW0pO1xcclxcbiAgICBjb2xvcjp2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcblxcclxcbn1cXHJcXG4uZXJyb3J7XFxyXFxuICAgIC50aXRsZXtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0eyAgXFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWRhcmspO1xcclxcblxcclxcbiAgICB9XFxyXFxufSBcXHJcXG4ucHJpbWFyeXtcXHJcXG4gICAgLnRpdGxle31cXHJcXG4gICAgLnRleHR7fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0aXRsZVwiOiBgc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX190aXRsZS0taWtJN1ZgLFxuXHRcInRleHRcIjogYHNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fdGV4dC0tdU5KZWVgLFxuXHRcImVycm9yXCI6IGBzcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX2Vycm9yLS1GOW9MWGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UZXh0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGV4dC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UZXh0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuZXhwb3J0IHZhciB1c2VBcHBEaXNwYXRjaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVzZURpc3BhdGNoKCk7IH07XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeCIsIl9qc3giLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVN0b3JlIiwiRHluYW1pY01vZHVsZUxvYWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJyZWR1Y2VycyIsInJlbW92ZUFmdGVyVW5tb3VudCIsInN0b3JlIiwiZGlzcGF0Y2giLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIl9hIiwibmFtZSIsInJlZHVjZXIiLCJyZWR1Y2VyTWFuYWdlciIsImFkZCIsInR5cGUiLCJjb25jYXQiLCJyZW1vdmUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwianN4cyIsIl9qc3hzIiwiY2xhc3NOYW1lcyIsImNscyIsIm1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIklucHV0IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsIl9iIiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJyZWYiLCJfYyIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsIl9kIiwiY2FyZXRQb3NpdGlvbiIsInNldENhcmV0UG9zaXRpb24iLCJvbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25TZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsImN1cnJlbnQiLCJmb2N1cyIsIklucHV0V3JhcHBlciIsImNhcmV0V3JhcHBlciIsImlucHV0IiwiY2FyZXQiLCJzdHlsZSIsImxlZnQiLCJUZXh0VGhlbWUiLCJUZXh0IiwidGl0bGUiLCJ0ZXh0IiwidGhlbWUiLCJQUklNQVJZIl0sInNvdXJjZVJvb3QiOiIifQ==