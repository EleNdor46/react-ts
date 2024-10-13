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
  var _b;
  var className = _a.className,
    value = _a.value,
    onChange = _a.onChange,
    _c = _a.type,
    type = _c === void 0 ? "text" : _c,
    placeholder = _a.placeholder,
    autoFocus = _a.autoFocus,
    readonly = _a.readonly,
    props = __rest(_a, ["className", "value", "onChange", "type", "placeholder", "autoFocus", "readonly"]);
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    isFocused = _d[0],
    setIsFocused = _d[1];
  var _e = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
    caretPosition = _e[0],
    setCaretPosition = _e[1];
  var isCaretVisible = isFocused && !readonly;
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
    var _a;
    if (autoFocus) {
      setIsFocused(true);
      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [autoFocus]);
  var mods = (_b = {}, _b[_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].readonly] = readonly, _b);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].InputWrapper, mods, [className])
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
        onSelect: onSelect,
        readOnly: readonly
      }, void 0), isCaretVisible && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({
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
/* harmony export */   TextAlign: () => (/* binding */ TextAlign),
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
var TextAlign;
(function (TextAlign) {
  TextAlign["RIGHT"] = "right";
  TextAlign["CENTER"] = "center";
  TextAlign["LEFT"] = "left";
})(TextAlign || (TextAlign = {}));
var Text = function Text(_a) {
  var _b;
  var className = _a.className,
    title = _a.title,
    text = _a.text,
    _c = _a.theme,
    theme = _c === void 0 ? TextTheme.PRIMARY : _c,
    _d = _a.aligin,
    aligin = _d === void 0 ? TextAlign.LEFT : _d;
  var mods = (_b = {}, _b[_Text_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][theme]] = true, _b[_Text_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][aligin]] = true, _b);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Text_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Text, mods, [className])
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

.src-shared-ui-Input-Input-module__readonly--fTN1P {
  opacity: 0.7;
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
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Input/Input.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,uBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,uCAAA;AACF;AACE;EACI,aAAA;AACN;;AAGA;EACE,YAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,UAAA;EACA,gCAAA;EACA,SAAA;EACA,OAAA;EACA,kBAAA;EACA,gFAAA;AAAF;;AAGA;EACE,YAAA;AAAF;;AAGA;EACE;IACI,UAAA;EAAJ;EAGA;IACI,aAAA;EADJ;EAIA;IACI,UAAA;EAFJ;AACF","sourcesContent":[".InputWrapper {\r\n  display: flex;\r\n}\r\n\r\n.placeholder {\r\n  margin-right: 5px;\r\n}\r\n\r\n.input {\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  width: 100%;\r\n  color: transparent;\r\n  text-shadow: 0 0 0 var(--primary-color);\r\n\r\n  &:focus {\r\n      outline: none;\r\n  }\r\n}\r\n\r\n.caretWrapper {\r\n  flex-grow: 1;\r\n  position: relative;\r\n}\r\n\r\n.caret {\r\n  height: 3px;\r\n  width: 9px;\r\n  background: var(--primary-color);\r\n  bottom: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  animation: blink 0.7s forwards infinite;\r\n}\r\n\r\n.readonly {\r\n  opacity: 0.7;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n      opacity: 0;\r\n  }\r\n\r\n  50% {\r\n      opacity: 0.01;\r\n  }\r\n\r\n  100% {\r\n      opacity: 1;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"InputWrapper": `src-shared-ui-Input-Input-module__InputWrapper--LuFDU`,
	"placeholder": `src-shared-ui-Input-Input-module__placeholder--emAQQ`,
	"input": `src-shared-ui-Input-Input-module__input--LVdIP`,
	"caretWrapper": `src-shared-ui-Input-Input-module__caretWrapper--y1GiF`,
	"caret": `src-shared-ui-Input-Input-module__caret--lqMFG`,
	"blink": `src-shared-ui-Input-Input-module__blink--M7n8f`,
	"readonly": `src-shared-ui-Input-Input-module__readonly--fTN1P`
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
}

.src-shared-ui-Text-Text-module__left--dBqPI {
  text-align: left;
}

.src-shared-ui-Text-Text-module__right--j4UBr {
  text-align: right;
}

.src-shared-ui-Text-Text-module__center--iJw6m {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Text/Text.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,2BAAA;AACJ;;AACA;EACI,mBAAA;EACA,6BAAA;AAEJ;;AACI;EACI,uBAAA;AAER;AACI;EACI,sBAAA;AACR;;AASA;EACI,gBAAA;AANJ;;AAQA;EACI,iBAAA;AALJ;;AAOA;EACI,kBAAA;AAJJ","sourcesContent":[".title {\r\n    font: var(--font-l);\r\n    color: var(--primary-color);\r\n}\r\n.text {\r\n    font: var(--font-m);\r\n    color: var(--secondary-color);\r\n}\r\n.error {\r\n    .title {\r\n        color: var(--red-light);\r\n    }\r\n\r\n    .text {\r\n        color: var(--red-dark);\r\n    }\r\n}\r\n.primary {\r\n    .title {\r\n    }\r\n    .text {\r\n    }\r\n}\r\n\r\n.left {\r\n    text-align: left;\r\n}\r\n.right {\r\n    text-align: right;\r\n}\r\n.center {\r\n    text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"title": `src-shared-ui-Text-Text-module__title--ikI7V`,
	"text": `src-shared-ui-Text-Text-module__text--uNJee`,
	"error": `src-shared-ui-Text-Text-module__error--F9oLX`,
	"left": `src-shared-ui-Text-Text-module__left--dBqPI`,
	"right": `src-shared-ui-Text-Text-module__right--j4UBr`,
	"center": `src-shared-ui-Text-Text-module__center--iJw6m`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NoYXJlZF9saWJfY29tcG9uZW50c19EeW5hbWljTW9kdWxlTG9hZGVyX0R5bmFtaWNNb2R1bGVMb2FkZXJfdHN4LXNyY19zaGFyZWRfdWlfSW5wdXRfSW5wLTY3OTNlYS45YWZhNjZjYmY3YzBiNjQzNGE2NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVFO0FBQ3JDO0FBQ2tCO0FBQzdDLElBQUlPLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQWFDLEtBQUssRUFBRTtFQUM5QyxJQUFJQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0MsUUFBUTtJQUFFQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0UsUUFBUTtJQUFFQyxrQkFBa0IsR0FBR0gsS0FBSyxDQUFDRyxrQkFBa0I7RUFDdkcsSUFBSUMsS0FBSyxHQUFHTixxREFBUSxDQUFDLENBQUM7RUFDdEIsSUFBSU8sUUFBUSxHQUFHUix3REFBVyxDQUFDLENBQUM7RUFDNUJELGdEQUFTLENBQUMsWUFBWTtJQUNsQlUsTUFBTSxDQUFDQyxPQUFPLENBQUNMLFFBQVEsQ0FBQyxDQUFDTSxPQUFPLENBQUMsVUFBVUMsRUFBRSxFQUFFO01BQzNDLElBQUlDLElBQUksR0FBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUFFRSxPQUFPLEdBQUdGLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDakNMLEtBQUssQ0FBQ1EsY0FBYyxDQUFDQyxHQUFHLENBQUNILElBQUksRUFBRUMsT0FBTyxDQUFDO01BQ3ZDTixRQUFRLENBQUM7UUFBRVMsSUFBSSxFQUFFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDTCxJQUFJLEVBQUUsVUFBVTtNQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUM7SUFDRixPQUFPLFlBQVk7TUFDZixJQUFJUCxrQkFBa0IsRUFBRTtRQUNwQkcsTUFBTSxDQUFDQyxPQUFPLENBQUNMLFFBQVEsQ0FBQyxDQUFDTSxPQUFPLENBQUMsVUFBVUMsRUFBRSxFQUFFO1VBQzNDLElBQUlDLElBQUksR0FB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ckcsTUFBd0g7QUFDeEgsTUFBaUg7QUFDakgsTUFBaUg7QUFDakgsTUFBZ007QUFDaE07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywwSkFBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sMEpBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLDBKQUFPO0FBQ2hDLG9DQUFvQywrSUFBVyxHQUFHLDBKQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHlTQUFtSjtBQUN6SixNQUFNO0FBQUE7QUFDTixzREFBc0QsK0lBQVcsR0FBRywwSkFBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsK0lBQVcsR0FBRywwSkFBTzs7QUFFL0QscUJBQXFCLDBKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHa0s7QUFDbEssT0FBTyxpRUFBZSwwSkFBTyxJQUFJLDBKQUFPLFVBQVUsMEpBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRm5DO0FBQ25DLG1DQUFtQyxPQUFPLHdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvbGliL2NvbXBvbmVudHMvRHluYW1pY01vZHVsZUxvYWRlci9EeW5hbWljTW9kdWxlTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvdWkvVGV4dC9UZXh0LnRzeCIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9UZXh0L1RleHQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3M/NGUyMSIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9UZXh0L1RleHQubW9kdWxlLnNjc3M/OThiNSIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC9saWIvaG9va3MvQXBwRGlzcGF0Y2gvQXBwRGlzcGF0Y2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTdG9yZSB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuZXhwb3J0IHZhciBEeW5hbWljTW9kdWxlTG9hZGVyID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbiwgcmVkdWNlcnMgPSBwcm9wcy5yZWR1Y2VycywgcmVtb3ZlQWZ0ZXJVbm1vdW50ID0gcHJvcHMucmVtb3ZlQWZ0ZXJVbm1vdW50O1xyXG4gICAgdmFyIHN0b3JlID0gdXNlU3RvcmUoKTtcclxuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCByZWR1Y2VyID0gX2FbMV07XHJcbiAgICAgICAgICAgIHN0b3JlLnJlZHVjZXJNYW5hZ2VyLmFkZChuYW1lLCByZWR1Y2VyKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkBJTklUIFwiLmNvbmNhdChuYW1lLCBcIiByZWR1Y2VyXCIpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlclVubW91bnQpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX2FbMF0sIHJlZHVjZXIgPSBfYVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5yZW1vdmUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkBERVNUUk9ZIFwiLmNvbmNhdChuYW1lLCBcIiByZWR1Y2VyXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtbm8tdXNlbGVzcy1mcmFnbWVudFxyXG4gICAgX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0sIHZvaWQgMCkpO1xyXG59O1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVcIjtcclxuaW1wb3J0IGNscyBmcm9tIFwiLi9JbnB1dC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IHZhciBJbnB1dCA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgX2I7XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCB2YWx1ZSA9IF9hLnZhbHVlLCBvbkNoYW5nZSA9IF9hLm9uQ2hhbmdlLCBfYyA9IF9hLnR5cGUsIHR5cGUgPSBfYyA9PT0gdm9pZCAwID8gXCJ0ZXh0XCIgOiBfYywgcGxhY2Vob2xkZXIgPSBfYS5wbGFjZWhvbGRlciwgYXV0b0ZvY3VzID0gX2EuYXV0b0ZvY3VzLCByZWFkb25seSA9IF9hLnJlYWRvbmx5LCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCIsIFwidmFsdWVcIiwgXCJvbkNoYW5nZVwiLCBcInR5cGVcIiwgXCJwbGFjZWhvbGRlclwiLCBcImF1dG9Gb2N1c1wiLCBcInJlYWRvbmx5XCJdKTtcclxuICAgIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShmYWxzZSksIGlzRm9jdXNlZCA9IF9kWzBdLCBzZXRJc0ZvY3VzZWQgPSBfZFsxXTtcclxuICAgIHZhciBfZSA9IHVzZVN0YXRlKDApLCBjYXJldFBvc2l0aW9uID0gX2VbMF0sIHNldENhcmV0UG9zaXRpb24gPSBfZVsxXTtcclxuICAgIHZhciBpc0NhcmV0VmlzaWJsZSA9IGlzRm9jdXNlZCAmJiAhcmVhZG9ubHk7XHJcbiAgICB2YXIgb25DaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldENhcmV0UG9zaXRpb24oZS50YXJnZXQudmFsdWUubGVuZ3RoKTtcclxuICAgIH07XHJcbiAgICB2YXIgb25CbHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldElzRm9jdXNlZChmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0SXNGb2N1c2VkKHRydWUpO1xyXG4gICAgfTtcclxuICAgIHZhciBvblNlbGVjdCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHNldENhcmV0UG9zaXRpb24oKChfYSA9IGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS50YXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZWxlY3Rpb25TdGFydCkgfHwgMCk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKGF1dG9Gb2N1cykge1xyXG4gICAgICAgICAgICBzZXRJc0ZvY3VzZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIChfYSA9IHJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYXV0b0ZvY3VzXSk7XHJcbiAgICB2YXIgbW9kcyA9IChfYiA9IHt9LFxyXG4gICAgICAgIF9iW2Nscy5yZWFkb25seV0gPSByZWFkb25seSxcclxuICAgICAgICBfYik7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5JbnB1dFdyYXBwZXIsIG1vZHMsIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbcGxhY2Vob2xkZXIgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5wbGFjZWhvbGRlciB9LCB7IGNoaWxkcmVuOiBcIlwiLmNvbmNhdChwbGFjZWhvbGRlciwgXCI+XCIpIH0pLCB2b2lkIDApKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5jYXJldFdyYXBwZXIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCB7IHJlZjogcmVmLCB0eXBlOiB0eXBlLCB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBvbkNoYW5nZUhhbmRsZXIsIGNsYXNzTmFtZTogY2xzLmlucHV0LCBvbkJsdXI6IG9uQmx1ciwgb25Gb2N1czogb25Gb2N1cywgb25TZWxlY3Q6IG9uU2VsZWN0LCByZWFkT25seTogcmVhZG9ubHkgfSwgdm9pZCAwKSwgaXNDYXJldFZpc2libGUgJiYgKF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuY2FyZXQsIHN0eWxlOiB7IGxlZnQ6IFwiXCIuY29uY2F0KGNhcmV0UG9zaXRpb24gKiA3LjUsIFwicHhcIikgfSB9LCB7IGNoaWxkcmVuOiBcIiBcIiB9KSwgdm9pZCAwKSldIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSk7XHJcbn0pO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwic2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZVwiO1xyXG5pbXBvcnQgY2xzIGZyb20gXCIuL1RleHQubW9kdWxlLnNjc3NcIjtcclxuZXhwb3J0IHZhciBUZXh0VGhlbWU7XHJcbihmdW5jdGlvbiAoVGV4dFRoZW1lKSB7XHJcbiAgICBUZXh0VGhlbWVbXCJQUklNQVJZXCJdID0gXCJwcmltYXJ5XCI7XHJcbiAgICBUZXh0VGhlbWVbXCJFUlJPUlwiXSA9IFwiZXJyb3JcIjtcclxufSkoVGV4dFRoZW1lIHx8IChUZXh0VGhlbWUgPSB7fSkpO1xyXG5leHBvcnQgdmFyIFRleHRBbGlnbjtcclxuKGZ1bmN0aW9uIChUZXh0QWxpZ24pIHtcclxuICAgIFRleHRBbGlnbltcIlJJR0hUXCJdID0gXCJyaWdodFwiO1xyXG4gICAgVGV4dEFsaWduW1wiQ0VOVEVSXCJdID0gXCJjZW50ZXJcIjtcclxuICAgIFRleHRBbGlnbltcIkxFRlRcIl0gPSBcImxlZnRcIjtcclxufSkoVGV4dEFsaWduIHx8IChUZXh0QWxpZ24gPSB7fSkpO1xyXG5leHBvcnQgdmFyIFRleHQgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBfYjtcclxuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHRpdGxlID0gX2EudGl0bGUsIHRleHQgPSBfYS50ZXh0LCBfYyA9IF9hLnRoZW1lLCB0aGVtZSA9IF9jID09PSB2b2lkIDAgPyBUZXh0VGhlbWUuUFJJTUFSWSA6IF9jLCBfZCA9IF9hLmFsaWdpbiwgYWxpZ2luID0gX2QgPT09IHZvaWQgMCA/IFRleHRBbGlnbi5MRUZUIDogX2Q7XHJcbiAgICB2YXIgbW9kcyA9IChfYiA9IHt9LFxyXG4gICAgICAgIF9iW2Nsc1t0aGVtZV1dID0gdHJ1ZSxcclxuICAgICAgICBfYltjbHNbYWxpZ2luXV0gPSB0cnVlLFxyXG4gICAgICAgIF9iKTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLlRleHQsIG1vZHMsIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbdGl0bGUgJiYgX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy50aXRsZSB9LCB7IGNoaWxkcmVuOiB0aXRsZSB9KSwgdm9pZCAwKSwgdGV4dCAmJiBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLnRleHQgfSwgeyBjaGlsZHJlbjogdGV4dCB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19JbnB1dFdyYXBwZXItLUx1RkRVIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19wbGFjZWhvbGRlci0tZW1BUVEge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dC0tTFZkSVAge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2lucHV0LS1MVmRJUDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXRXcmFwcGVyLS15MUdpRiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0LS1scU1GRyB7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogOXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFuaW1hdGlvbjogc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZiAwLjdzIGZvcndhcmRzIGluZmluaXRlO1xufVxuXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3JlYWRvbmx5LS1mVE4xUCB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuQGtleWZyYW1lcyBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fYmxpbmstLU03bjhmIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7QUFDRTtFQUNJLGFBQUE7QUFDTjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDSSxVQUFBO0VBQUo7RUFHQTtJQUNJLGFBQUE7RUFESjtFQUlBO0lBQ0ksVUFBQTtFQUZKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLklucHV0V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2Vob2xkZXIge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDAgMCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG5cXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJldFdyYXBwZXIge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZXQge1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICB3aWR0aDogOXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYW5pbWF0aW9uOiBibGluayAwLjdzIGZvcndhcmRzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhZG9ubHkge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwLjAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiSW5wdXRXcmFwcGVyXCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fSW5wdXRXcmFwcGVyLS1MdUZEVWAsXG5cdFwicGxhY2Vob2xkZXJcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19wbGFjZWhvbGRlci0tZW1BUVFgLFxuXHRcImlucHV0XCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9faW5wdXQtLUxWZElQYCxcblx0XCJjYXJldFdyYXBwZXJcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19jYXJldFdyYXBwZXItLXkxR2lGYCxcblx0XCJjYXJldFwiOiBgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0LS1scU1GR2AsXG5cdFwiYmxpbmtcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGZgLFxuXHRcInJlYWRvbmx5XCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcmVhZG9ubHktLWZUTjFQYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX3RpdGxlLS1pa0k3ViB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtbCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fdGV4dC0tdU5KZWUge1xuICBmb250OiB2YXIoLS1mb250LW0pO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fZXJyb3ItLUY5b0xYIC5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX3RpdGxlLS1pa0k3ViB7XG4gIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xufVxuLnNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fZXJyb3ItLUY5b0xYIC5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX3RleHQtLXVOSmVlIHtcbiAgY29sb3I6IHZhcigtLXJlZC1kYXJrKTtcbn1cblxuLnNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fbGVmdC0tZEJxUEkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX19yaWdodC0tajRVQnIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fY2VudGVyLS1pSnc2bSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaGFyZWQvdWkvVGV4dC9UZXh0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtBQUVKOztBQUNJO0VBQ0ksdUJBQUE7QUFFUjtBQUNJO0VBQ0ksc0JBQUE7QUFDUjs7QUFTQTtFQUNJLGdCQUFBO0FBTko7O0FBUUE7RUFDSSxpQkFBQTtBQUxKOztBQU9BO0VBQ0ksa0JBQUE7QUFKSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGl0bGUge1xcclxcbiAgICBmb250OiB2YXIoLS1mb250LWwpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcbi50ZXh0IHtcXHJcXG4gICAgZm9udDogdmFyKC0tZm9udC1tKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcbi5lcnJvciB7XFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWxpZ2h0KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGV4dCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWRhcmspO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5wcmltYXJ5IHtcXHJcXG4gICAgLnRpdGxlIHtcXHJcXG4gICAgfVxcclxcbiAgICAudGV4dCB7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4ucmlnaHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuLmNlbnRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGl0bGVcIjogYHNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fdGl0bGUtLWlrSTdWYCxcblx0XCJ0ZXh0XCI6IGBzcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX3RleHQtLXVOSmVlYCxcblx0XCJlcnJvclwiOiBgc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX19lcnJvci0tRjlvTFhgLFxuXHRcImxlZnRcIjogYHNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fbGVmdC0tZEJxUElgLFxuXHRcInJpZ2h0XCI6IGBzcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX3JpZ2h0LS1qNFVCcmAsXG5cdFwiY2VudGVyXCI6IGBzcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX2NlbnRlci0taUp3Nm1gXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbnB1dC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGV4dC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RleHQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGV4dC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmV4cG9ydCB2YXIgdXNlQXBwRGlzcGF0Y2ggPSBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VEaXNwYXRjaCgpOyB9O1xyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJqc3giLCJfanN4IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTdG9yZSIsIkR5bmFtaWNNb2R1bGVMb2FkZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwicmVkdWNlcnMiLCJyZW1vdmVBZnRlclVubW91bnQiLCJzdG9yZSIsImRpc3BhdGNoIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfYSIsIm5hbWUiLCJyZWR1Y2VyIiwicmVkdWNlck1hbmFnZXIiLCJhZGQiLCJ0eXBlIiwiY29uY2F0IiwicmVtb3ZlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiX19yZXN0IiwiZSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImpzeHMiLCJfanN4cyIsImNsYXNzTmFtZXMiLCJjbHMiLCJtZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJJbnB1dCIsIl9iIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsIl9jIiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJyZWFkb25seSIsInJlZiIsIl9kIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwiX2UiLCJjYXJldFBvc2l0aW9uIiwic2V0Q2FyZXRQb3NpdGlvbiIsImlzQ2FyZXRWaXNpYmxlIiwib25DaGFuZ2VIYW5kbGVyIiwidGFyZ2V0Iiwib25CbHVyIiwib25Gb2N1cyIsIm9uU2VsZWN0Iiwic2VsZWN0aW9uU3RhcnQiLCJjdXJyZW50IiwiZm9jdXMiLCJtb2RzIiwiSW5wdXRXcmFwcGVyIiwiY2FyZXRXcmFwcGVyIiwiaW5wdXQiLCJyZWFkT25seSIsImNhcmV0Iiwic3R5bGUiLCJsZWZ0IiwiVGV4dFRoZW1lIiwiVGV4dEFsaWduIiwiVGV4dCIsInRpdGxlIiwidGV4dCIsInRoZW1lIiwiUFJJTUFSWSIsImFsaWdpbiIsIkxFRlQiXSwic291cmNlUm9vdCI6IiJ9