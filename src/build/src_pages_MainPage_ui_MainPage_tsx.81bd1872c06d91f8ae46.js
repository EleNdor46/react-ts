"use strict";
(self["webpackChunkproduct"] = self["webpackChunkproduct"] || []).push([["src_pages_MainPage_ui_MainPage_tsx"],{

/***/ "./src/pages/MainPage/ui/MainPage.tsx":
/*!********************************************!*\
  !*** ./src/pages/MainPage/ui/MainPage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_providers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/providers/ErrorBoundary */ "./src/app/providers/ErrorBoundary/index.ts");
/* harmony import */ var entities_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/Counter */ "./src/entities/Counter/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");





var MainPage = function MainPage() {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_providers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.BugButton, {}, void 0), t("Главная страница"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Counter__WEBPACK_IMPORTED_MODULE_2__.Counter, {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_3__.Input, {}, void 0)]
  }, void 0);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX01haW5QYWdlX3VpX01haW5QYWdlX3RzeC44MWJkMTg3MmMwNmQ5MWY4YWU0Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDUDtBQUNiO0FBQ0k7QUFDRDtBQUM5QyxJQUFJUSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFlO0VBQ3ZCLElBQUlDLENBQUMsR0FBR0gsNkRBQWMsQ0FBQyxDQUFDLENBQUNHLENBQUM7RUFDMUIsT0FBUU4sdURBQUssQ0FBQyxLQUFLLEVBQUU7SUFBRU8sUUFBUSxFQUFFLENBQUNULHNEQUFJLENBQUNHLGtFQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRUssQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUVSLHNEQUFJLENBQUNJLHFEQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRUosc0RBQUksQ0FBQ00sd0RBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4SixDQUFDO0FBQ0QsaUVBQWVDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R2QixJQUFJRyxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0osQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUssQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJRixNQUFNLENBQUNRLFNBQVMsQ0FBQ0MsY0FB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QUUxQjtBQUNBOztBQUVBLDBDQUEwQyxnSkFBVyxHQUFHLDJKQUFPOztBQUUvRCxxQkFBcUIsMkpBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUdtSztBQUNuSyxPQUFPLGlFQUFlLDJKQUFPLElBQUksMkpBQU8sVUFBVSwySkFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvcGFnZXMvTWFpblBhZ2UvdWkvTWFpblBhZ2UudHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0LnRzeCIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC5tb2R1bGUuc2Nzcz80ZTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IEJ1Z0J1dHRvbiB9IGZyb20gXCJhcHAvcHJvdmlkZXJzL0Vycm9yQm91bmRhcnlcIjtcclxuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCJlbnRpdGllcy9Db3VudGVyXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwic2hhcmVkL3VpL0lucHV0L0lucHV0XCI7XHJcbnZhciBNYWluUGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChCdWdCdXR0b24sIHt9LCB2b2lkIDApLCB0KFwi0JPQu9Cw0LLQvdCw0Y8g0YHRgtGA0LDQvdC40YbQsFwiKSwgX2pzeChDb3VudGVyLCB7fSwgdm9pZCAwKSwgX2pzeChJbnB1dCwge30sIHZvaWQgMCldIH0sIHZvaWQgMCkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lXCI7XHJcbmltcG9ydCBjbHMgZnJvbSBcIi4vSW5wdXQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgbWVtbywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCB2YXIgSW5wdXQgPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIF9iO1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgdmFsdWUgPSBfYS52YWx1ZSwgb25DaGFuZ2UgPSBfYS5vbkNoYW5nZSwgX2MgPSBfYS50eXBlLCB0eXBlID0gX2MgPT09IHZvaWQgMCA/IFwidGV4dFwiIDogX2MsIHBsYWNlaG9sZGVyID0gX2EucGxhY2Vob2xkZXIsIGF1dG9Gb2N1cyA9IF9hLmF1dG9Gb2N1cywgcmVhZG9ubHkgPSBfYS5yZWFkb25seSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcInZhbHVlXCIsIFwib25DaGFuZ2VcIiwgXCJ0eXBlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJhdXRvRm9jdXNcIiwgXCJyZWFkb25seVwiXSk7XHJcbiAgICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBpc0ZvY3VzZWQgPSBfZFswXSwgc2V0SXNGb2N1c2VkID0gX2RbMV07XHJcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZSgwKSwgY2FyZXRQb3NpdGlvbiA9IF9lWzBdLCBzZXRDYXJldFBvc2l0aW9uID0gX2VbMV07XHJcbiAgICB2YXIgaXNDYXJldFZpc2libGUgPSBpc0ZvY3VzZWQgJiYgIXJlYWRvbmx5O1xyXG4gICAgdmFyIG9uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRDYXJldFBvc2l0aW9uKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uQmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHZhciBvbkZvY3VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldElzRm9jdXNlZCh0cnVlKTtcclxuICAgIH07XHJcbiAgICB2YXIgb25TZWxlY3QgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzZXRDYXJldFBvc2l0aW9uKCgoX2EgPSBlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2VsZWN0aW9uU3RhcnQpIHx8IDApO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmIChhdXRvRm9jdXMpIHtcclxuICAgICAgICAgICAgc2V0SXNGb2N1c2VkKHRydWUpO1xyXG4gICAgICAgICAgICAoX2EgPSByZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dG9Gb2N1c10pO1xyXG4gICAgdmFyIG1vZHMgPSAoX2IgPSB7fSxcclxuICAgICAgICBfYltjbHMucmVhZG9ubHldID0gcmVhZG9ubHksXHJcbiAgICAgICAgX2IpO1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuSW5wdXRXcmFwcGVyLCBtb2RzLCBbY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW3BsYWNlaG9sZGVyICYmIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMucGxhY2Vob2xkZXIgfSwgeyBjaGlsZHJlbjogXCJcIi5jb25jYXQocGxhY2Vob2xkZXIsIFwiPlwiKSB9KSwgdm9pZCAwKSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuY2FyZXRXcmFwcGVyIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgeyByZWY6IHJlZiwgdHlwZTogdHlwZSwgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogb25DaGFuZ2VIYW5kbGVyLCBjbGFzc05hbWU6IGNscy5pbnB1dCwgb25CbHVyOiBvbkJsdXIsIG9uRm9jdXM6IG9uRm9jdXMsIG9uU2VsZWN0OiBvblNlbGVjdCwgcmVhZE9ubHk6IHJlYWRvbmx5IH0sIHZvaWQgMCksIGlzQ2FyZXRWaXNpYmxlICYmIChfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLmNhcmV0LCBzdHlsZTogeyBsZWZ0OiBcIlwiLmNvbmNhdChjYXJldFBvc2l0aW9uICogNy41LCBcInB4XCIpIH0gfSwgeyBjaGlsZHJlbjogXCIgXCIgfSksIHZvaWQgMCkpXSB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xyXG59KTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fSW5wdXRXcmFwcGVyLS1MdUZEVSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcGxhY2Vob2xkZXItLWVtQVFRIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9faW5wdXQtLUxWZElQIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dC0tTFZkSVA6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0V3JhcHBlci0teTFHaUYge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19jYXJldC0tbHFNRkcge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDlweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb246IHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGYgMC43cyBmb3J3YXJkcyBpbmZpbml0ZTtcbn1cblxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19yZWFkb25seS0tZlROMVAge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbkBrZXlmcmFtZXMgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQUNGO0FBQ0U7RUFDSSxhQUFBO0FBQ047O0FBR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0ZBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0ksVUFBQTtFQUFKO0VBR0E7SUFDSSxhQUFBO0VBREo7RUFJQTtJQUNJLFVBQUE7RUFGSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5JbnB1dFdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlaG9sZGVyIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAwIDAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuXFxyXFxuICAmOmZvY3VzIHtcXHJcXG4gICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZXRXcmFwcGVyIHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmV0IHtcXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgd2lkdGg6IDlweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGFuaW1hdGlvbjogYmxpbmsgMC43cyBmb3J3YXJkcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWRvbmx5IHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGluayB7XFxyXFxuICAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMC4wMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIklucHV0V3JhcHBlclwiOiBgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX0lucHV0V3JhcHBlci0tTHVGRFVgLFxuXHRcInBsYWNlaG9sZGVyXCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcGxhY2Vob2xkZXItLWVtQVFRYCxcblx0XCJpbnB1dFwiOiBgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2lucHV0LS1MVmRJUGAsXG5cdFwiY2FyZXRXcmFwcGVyXCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXRXcmFwcGVyLS15MUdpRmAsXG5cdFwiY2FyZXRcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19jYXJldC0tbHFNRkdgLFxuXHRcImJsaW5rXCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fYmxpbmstLU03bjhmYCxcblx0XCJyZWFkb25seVwiOiBgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3JlYWRvbmx5LS1mVE4xUGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkJ1Z0J1dHRvbiIsIkNvdW50ZXIiLCJ1c2VUcmFuc2xhdGlvbiIsIklucHV0IiwiTWFpblBhZ2UiLCJ0IiwiY2hpbGRyZW4iLCJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIl9fcmVzdCIsImUiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjbGFzc05hbWVzIiwiY2xzIiwibWVtbyIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiX2EiLCJfYiIsImNsYXNzTmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJfYyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dG9Gb2N1cyIsInJlYWRvbmx5IiwicHJvcHMiLCJyZWYiLCJfZCIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsIl9lIiwiY2FyZXRQb3NpdGlvbiIsInNldENhcmV0UG9zaXRpb24iLCJpc0NhcmV0VmlzaWJsZSIsIm9uQ2hhbmdlSGFuZGxlciIsInRhcmdldCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvblNlbGVjdCIsInNlbGVjdGlvblN0YXJ0IiwiY3VycmVudCIsImZvY3VzIiwibW9kcyIsIklucHV0V3JhcHBlciIsImNvbmNhdCIsImNhcmV0V3JhcHBlciIsImlucHV0IiwicmVhZE9ubHkiLCJjYXJldCIsInN0eWxlIiwibGVmdCJdLCJzb3VyY2VSb290IjoiIn0=