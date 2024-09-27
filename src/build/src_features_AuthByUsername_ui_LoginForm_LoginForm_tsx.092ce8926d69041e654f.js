"use strict";
(self["webpackChunkproduct"] = self["webpackChunkproduct"] || []).push([["src_features_AuthByUsername_ui_LoginForm_LoginForm_tsx"],{

/***/ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx":
/*!****************************************************************!*\
  !*** ./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var features_AuthByUsername_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! features/AuthByUsername/model/slice/loginSlice */ "./src/features/AuthByUsername/model/slice/loginSlice.ts");
/* harmony import */ var features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! features/AuthByUsername/services/loginByUsername/loginByUsername */ "./src/features/AuthByUsername/services/loginByUsername/loginByUsername.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var _model_selectors_getLoginUsername_getLoginUsername__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/selectors/getLoginUsername/getLoginUsername */ "./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts");
/* harmony import */ var _model_selectors_getLoginPassword_getLoginPassword__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/selectors/getLoginPassword/getLoginPassword */ "./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts");
/* harmony import */ var _model_selectors_getLoginIsLoading_getLoginIsLoading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/selectors/getLoginIsLoading/getLoginIsLoading */ "./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts");
/* harmony import */ var _model_selectors_getLoginError_getLoginError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../model/selectors/getLoginError/getLoginError */ "./src/features/AuthByUsername/model/selectors/getLoginError/getLoginError.ts");
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














var LoginForm = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.memo)(function (_a) {
  var className = _a.className;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var username = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_getLoginUsername_getLoginUsername__WEBPACK_IMPORTED_MODULE_10__.getLoginUsername);
  var password = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_getLoginPassword_getLoginPassword__WEBPACK_IMPORTED_MODULE_11__.getLoginPassword);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_getLoginIsLoading_getLoginIsLoading__WEBPACK_IMPORTED_MODULE_12__.getLoginIsLoading);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_getLoginError_getLoginError__WEBPACK_IMPORTED_MODULE_13__.getLoginError);
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    store.reducerManager.add("loginForm", features_AuthByUsername_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_7__.loginReducer);
    return function () {
      store.reducerManager.remove("loginForm");
    };
  }, []);
  var onChangeUsername = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (value) {
    dispatch(features_AuthByUsername_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_7__.loginActions.setUsername(value));
  }, [dispatch]);
  var onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (value) {
    dispatch(features_AuthByUsername_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_7__.loginActions.setPassword(value));
  }, [dispatch]);
  var onLoginClick = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function () {
    dispatch((0,features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_8__.loginByUsername)({
      username: username,
      password: password
    }));
  }, [dispatch, username, password]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].LoginForm, {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__.Text, {
      title: "форма авторизации"
    }, void 0), error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__.Text, {
      text: error,
      theme: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_9__.TextTheme.ERROR
    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {
      className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
      type: "text",
      placeholder: "Username",
      autoFocus: true,
      onChange: onChangeUsername,
      value: username
    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {
      className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
      type: "text",
      placeholder: "password",
      onChange: onChangePassword,
      value: password
    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({
      theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.ThemeButton.OUTLINE,
      className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].loginBtn,
      onClick: onLoginClick,
      disabled: isLoading
    }, {
      children: "\u0412\u043E\u0439\u0442\u0438"
    }), void 0)]
  }), void 0);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__LoginForm--xYNEf {
  display: flex;
  flex-direction: column;
  width: 400px;
}

.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__input--PQPa1 {
  margin-top: 10px;
}

.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginBtn--Ok_5a {
  margin-top: 15px;
  margin-left: auto;
}`, "",{"version":3,"sources":["webpack://./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AACF;;AACA;EACE,gBAAA;AAEF;;AAAA;EACE,gBAAA;EACA,iBAAA;AAGF","sourcesContent":[".LoginForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 400px;\r\n}\r\n.input {\r\n  margin-top: 10px;\r\n}\r\n.loginBtn {\r\n  margin-top: 15px;\r\n  margin-left: auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LoginForm": `src-features-AuthByUsername-ui-LoginForm-LoginForm-module__LoginForm--xYNEf`,
	"input": `src-features-AuthByUsername-ui-LoginForm-LoginForm-module__input--PQPa1`,
	"loginBtn": `src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginBtn--Ok_5a`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss":
/*!************************************************************************!*\
  !*** ./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/features/AuthByUsername/model/selectors/getLoginError/getLoginError.ts":
/*!************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginError/getLoginError.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginError: () => (/* binding */ getLoginError)
/* harmony export */ });
var getLoginError = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.error; };


/***/ }),

/***/ "./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts":
/*!********************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginIsLoading: () => (/* binding */ getLoginIsLoading)
/* harmony export */ });
var getLoginIsLoading = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };


/***/ }),

/***/ "./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts":
/*!******************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginPassword: () => (/* binding */ getLoginPassword)
/* harmony export */ });
var getLoginPassword = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.password) || ''; };


/***/ }),

/***/ "./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts":
/*!******************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginUsername: () => (/* binding */ getLoginUsername)
/* harmony export */ });
var getLoginUsername = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.username) || ''; };


/***/ }),

/***/ "./src/features/AuthByUsername/model/slice/loginSlice.ts":
/*!***************************************************************!*\
  !*** ./src/features/AuthByUsername/model/slice/loginSlice.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginActions: () => (/* binding */ loginActions),
/* harmony export */   loginReducer: () => (/* binding */ loginReducer),
/* harmony export */   loginSlice: () => (/* binding */ loginSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! features/AuthByUsername/services/loginByUsername/loginByUsername */ "./src/features/AuthByUsername/services/loginByUsername/loginByUsername.ts");


var initialState = {
    username: "",
    password: "",
    isLoading: false,
};
var loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "login",
    initialState: initialState,
    reducers: {
        setUsername: function (state, action) {
            state.username = action.payload;
        },
        setPassword: function (state, action) {
            state.password = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.fulfilled, function (state, action) {
            state.isLoading = false;
        })
            .addCase(features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
// Action creators are generated for each case reducer function
var loginActions = loginSlice.actions;
var loginReducer = loginSlice.reducer;


/***/ }),

/***/ "./src/features/AuthByUsername/services/loginByUsername/loginByUsername.ts":
/*!*********************************************************************************!*\
  !*** ./src/features/AuthByUsername/services/loginByUsername/loginByUsername.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginByUsername: () => (/* binding */ loginByUsername)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var shared_const_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/const/localStorage */ "./src/shared/const/localStorage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var loginByUsername = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)("login/loginByUsername", function (authData, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:8000/login", authData)];
            case 1:
                response = _a.sent();
                if (!response.data) {
                    throw new Error();
                }
                localStorage.setItem(shared_const_localStorage__WEBPACK_IMPORTED_MODULE_2__.USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                thunkAPI.dispatch(entities_User__WEBPACK_IMPORTED_MODULE_1__.userActions.setAuthData(response.data));
                return [2 /*return*/, response.data];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [2 /*return*/, thunkAPI.rejectWithValue("referense error: you`re have mistake in username or password")];
            case 3: return [2 /*return*/];
        }
    });
}); });


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX0F1dGhCeVVzZXJuYW1lX3VpX0xvZ2luRm9ybV9Mb2dpbkZvcm1fdHN4LjA5MmNlODkyNmQ2OTA0MWU2NTRmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxRQUFRLElBQUssWUFBWTtFQUNsREEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sSUFBSSxVQUFTQyxDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVILENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUlJLENBQUMsSUFBSUwsQ0FBQyxFQUFFLElBQUlILE1BQU0sQ0FBQ1MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFDM0ROLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQzhEO0FBQ0Y7QUFDbkI7QUFDb0I7QUFDaEI7QUFDbUI7QUFDWjtBQUN3QztBQUNNO0FBQzdDO0FBQ3FDO0FBQ0E7QUFDRztBQUNaO0FBQ2xGLElBQUkrQixTQUFTLGdCQUFHWiwyQ0FBSSxDQUFDLFVBQVVhLEVBQUUsRUFBRTtFQUMvQixJQUFJQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ0MsU0FBUztFQUM1QixJQUFJQyxRQUFRLEdBQUdsQix3REFBVyxDQUFDLENBQUM7RUFDNUIsSUFBSW1CLFFBQVEsR0FB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L0F1dGhCeVVzZXJuYW1lL3VpL0xvZ2luRm9ybS9Mb2dpbkZvcm0udHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0LnRzeCIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9UZXh0L1RleHQudHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvdWkvTG9naW5Gb3JtL0xvZ2luRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9UZXh0L1RleHQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS91aS9Mb2dpbkZvcm0vTG9naW5Gb3JtLm1vZHVsZS5zY3NzPzhkOTYiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3M/NGUyMSIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3NoYXJlZC91aS9UZXh0L1RleHQubW9kdWxlLnNjc3M/OThiNSIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbkVycm9yL2dldExvZ2luRXJyb3IudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5Jc0xvYWRpbmcvZ2V0TG9naW5Jc0xvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5QYXNzd29yZC9nZXRMb2dpblBhc3N3b3JkLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvbW9kZWwvc2VsZWN0b3JzL2dldExvZ2luVXNlcm5hbWUvZ2V0TG9naW5Vc2VybmFtZS50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NsaWNlL2xvZ2luU2xpY2UudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9zZXJ2aWNlcy9sb2dpbkJ5VXNlcm5hbWUvbG9naW5CeVVzZXJuYW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lXCI7XHJcbmltcG9ydCBjbHMgZnJvbSBcIi4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGhlbWVCdXR0b24gfSBmcm9tIFwic2hhcmVkL3VpL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwic2hhcmVkL3VpL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciwgdXNlU3RvcmUgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBsb2dpbkFjdGlvbnMsIGxvZ2luUmVkdWNlciwgfSBmcm9tIFwiZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvbW9kZWwvc2xpY2UvbG9naW5TbGljZVwiO1xyXG5pbXBvcnQgeyBsb2dpbkJ5VXNlcm5hbWUgfSBmcm9tIFwiZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvc2VydmljZXMvbG9naW5CeVVzZXJuYW1lL2xvZ2luQnlVc2VybmFtZVwiO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0VGhlbWUgfSBmcm9tIFwic2hhcmVkL3VpL1RleHQvVGV4dFwiO1xyXG5pbXBvcnQgeyBnZXRMb2dpblVzZXJuYW1lIH0gZnJvbSBcIi4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpblVzZXJuYW1lL2dldExvZ2luVXNlcm5hbWVcIjtcclxuaW1wb3J0IHsgZ2V0TG9naW5QYXNzd29yZCB9IGZyb20gXCIuLi8uLi9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5QYXNzd29yZC9nZXRMb2dpblBhc3N3b3JkXCI7XHJcbmltcG9ydCB7IGdldExvZ2luSXNMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbklzTG9hZGluZy9nZXRMb2dpbklzTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBnZXRMb2dpbkVycm9yIH0gZnJvbSBcIi4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbkVycm9yL2dldExvZ2luRXJyb3JcIjtcclxudmFyIExvZ2luRm9ybSA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xyXG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHZhciB1c2VybmFtZSA9IHVzZVNlbGVjdG9yKGdldExvZ2luVXNlcm5hbWUpO1xyXG4gICAgdmFyIHBhc3N3b3JkID0gdXNlU2VsZWN0b3IoZ2V0TG9naW5QYXNzd29yZCk7XHJcbiAgICB2YXIgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoZ2V0TG9naW5Jc0xvYWRpbmcpO1xyXG4gICAgdmFyIGVycm9yID0gdXNlU2VsZWN0b3IoZ2V0TG9naW5FcnJvcik7XHJcbiAgICB2YXIgc3RvcmUgPSB1c2VTdG9yZSgpO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5hZGQoXCJsb2dpbkZvcm1cIiwgbG9naW5SZWR1Y2VyKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5yZW1vdmUoXCJsb2dpbkZvcm1cIik7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHZhciBvbkNoYW5nZVVzZXJuYW1lID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb25zLnNldFVzZXJuYW1lKHZhbHVlKSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHZhciBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb25zLnNldFBhc3N3b3JkKHZhbHVlKSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHZhciBvbkxvZ2luQ2xpY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5CeVVzZXJuYW1lKHsgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfSkpO1xyXG4gICAgfSwgW2Rpc3BhdGNoLCB1c2VybmFtZSwgcGFzc3dvcmRdKTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkxvZ2luRm9ybSwge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChUZXh0LCB7IHRpdGxlOiBcItGE0L7RgNC80LAg0LDQstGC0L7RgNC40LfQsNGG0LjQuFwiIH0sIHZvaWQgMCksIGVycm9yICYmIF9qc3goVGV4dCwgeyB0ZXh0OiBlcnJvciwgdGhlbWU6IFRleHRUaGVtZS5FUlJPUiB9LCB2b2lkIDApLCBfanN4KElucHV0LCB7IGNsYXNzTmFtZTogY2xzLmlucHV0LCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiVXNlcm5hbWVcIiwgYXV0b0ZvY3VzOiB0cnVlLCBvbkNoYW5nZTogb25DaGFuZ2VVc2VybmFtZSwgdmFsdWU6IHVzZXJuYW1lIH0sIHZvaWQgMCksIF9qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaW5wdXQsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJwYXNzd29yZFwiLCBvbkNoYW5nZTogb25DaGFuZ2VQYXNzd29yZCwgdmFsdWU6IHBhc3N3b3JkIH0sIHZvaWQgMCksIF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IHRoZW1lOiBUaGVtZUJ1dHRvbi5PVVRMSU5FLCBjbGFzc05hbWU6IGNscy5sb2dpbkJ0biwgb25DbGljazogb25Mb2dpbkNsaWNrLCBkaXNhYmxlZDogaXNMb2FkaW5nIH0sIHsgY2hpbGRyZW46IFwiXFx1MDQxMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MlxcdTA0MzhcIiB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVcIjtcclxuaW1wb3J0IGNscyBmcm9tIFwiLi9JbnB1dC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IHZhciBJbnB1dCA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCB2YWx1ZSA9IF9hLnZhbHVlLCBvbkNoYW5nZSA9IF9hLm9uQ2hhbmdlLCBfYiA9IF9hLnR5cGUsIHR5cGUgPSBfYiA9PT0gdm9pZCAwID8gXCJ0ZXh0XCIgOiBfYiwgcGxhY2Vob2xkZXIgPSBfYS5wbGFjZWhvbGRlciwgYXV0b0ZvY3VzID0gX2EuYXV0b0ZvY3VzLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCIsIFwidmFsdWVcIiwgXCJvbkNoYW5nZVwiLCBcInR5cGVcIiwgXCJwbGFjZWhvbGRlclwiLCBcImF1dG9Gb2N1c1wiXSk7XHJcbiAgICB2YXIgcmVmID0gdXNlUmVmKCk7XHJcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShmYWxzZSksIGlzRm9jdXNlZCA9IF9jWzBdLCBzZXRJc0ZvY3VzZWQgPSBfY1sxXTtcclxuICAgIHZhciBfZCA9IHVzZVN0YXRlKDApLCBjYXJldFBvc2l0aW9uID0gX2RbMF0sIHNldENhcmV0UG9zaXRpb24gPSBfZFsxXTtcclxuICAgIHZhciBvbkNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbihlLnRhcmdldC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgfTtcclxuICAgIHZhciBvbkJsdXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0SXNGb2N1c2VkKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICB2YXIgb25Gb2N1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXRJc0ZvY3VzZWQodHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uU2VsZWN0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbigoKF9hID0gZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLnRhcmdldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNlbGVjdGlvblN0YXJ0KSB8fCAwKTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChhdXRvRm9jdXMpIHtcclxuICAgICAgICAgICAgc2V0SXNGb2N1c2VkKHRydWUpO1xyXG4gICAgICAgICAgICByZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthdXRvRm9jdXNdKTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLklucHV0V3JhcHBlciwge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbcGxhY2Vob2xkZXIgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5wbGFjZWhvbGRlciB9LCB7IGNoaWxkcmVuOiBcIlwiLmNvbmNhdChwbGFjZWhvbGRlciwgXCI+XCIpIH0pLCB2b2lkIDApKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5jYXJldFdyYXBwZXIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCB7IHJlZjogcmVmLCB0eXBlOiB0eXBlLCB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBvbkNoYW5nZUhhbmRsZXIsIGNsYXNzTmFtZTogY2xzLmlucHV0LCBvbkJsdXI6IG9uQmx1ciwgb25Gb2N1czogb25Gb2N1cywgb25TZWxlY3Q6IG9uU2VsZWN0IH0sIHZvaWQgMCksIGlzRm9jdXNlZCAmJiAoX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5jYXJldCwgc3R5bGU6IHsgbGVmdDogXCJcIi5jb25jYXQoY2FyZXRQb3NpdGlvbiAqIDcuNSwgXCJweFwiKSB9IH0sIHsgY2hpbGRyZW46IFwiIFwiIH0pLCB2b2lkIDApKV0gfSksIHZvaWQgMCldIH0pLCB2b2lkIDApKTtcclxufSk7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lXCI7XHJcbmltcG9ydCBjbHMgZnJvbSBcIi4vVGV4dC5tb2R1bGUuc2Nzc1wiO1xyXG5leHBvcnQgdmFyIFRleHRUaGVtZTtcclxuKGZ1bmN0aW9uIChUZXh0VGhlbWUpIHtcclxuICAgIFRleHRUaGVtZVtcIlBSSU1BUllcIl0gPSBcInByaW1hcnlcIjtcclxuICAgIFRleHRUaGVtZVtcIkVSUk9SXCJdID0gXCJlcnJvclwiO1xyXG59KShUZXh0VGhlbWUgfHwgKFRleHRUaGVtZSA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgVGV4dCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgdGl0bGUgPSBfYS50aXRsZSwgdGV4dCA9IF9hLnRleHQsIF9iID0gX2EudGhlbWUsIHRoZW1lID0gX2IgPT09IHZvaWQgMCA/IFRleHRUaGVtZS5QUklNQVJZIDogX2I7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5UZXh0LCB7fSwgW2NsYXNzTmFtZSwgY2xzW3RoZW1lXV0pIH0sIHsgY2hpbGRyZW46IFt0aXRsZSAmJiBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLnRpdGxlIH0sIHsgY2hpbGRyZW46IHRpdGxlIH0pLCB2b2lkIDApLCB0ZXh0ICYmIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMudGV4dCB9LCB7IGNoaWxkcmVuOiB0ZXh0IH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSk7XHJcbn07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWZlYXR1cmVzLUF1dGhCeVVzZXJuYW1lLXVpLUxvZ2luRm9ybS1Mb2dpbkZvcm0tbW9kdWxlX19Mb2dpbkZvcm0tLXhZTkVmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uc3JjLWZlYXR1cmVzLUF1dGhCeVVzZXJuYW1lLXVpLUxvZ2luRm9ybS1Mb2dpbkZvcm0tbW9kdWxlX19pbnB1dC0tUFFQYTEge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3JjLWZlYXR1cmVzLUF1dGhCeVVzZXJuYW1lLXVpLUxvZ2luRm9ybS1Mb2dpbkZvcm0tbW9kdWxlX19sb2dpbkJ0bi0tT2tfNWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS91aS9Mb2dpbkZvcm0vTG9naW5Gb3JtLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTG9naW5Gb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG4uaW5wdXQge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuLmxvZ2luQnRuIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiTG9naW5Gb3JtXCI6IGBzcmMtZmVhdHVyZXMtQXV0aEJ5VXNlcm5hbWUtdWktTG9naW5Gb3JtLUxvZ2luRm9ybS1tb2R1bGVfX0xvZ2luRm9ybS0teFlORWZgLFxuXHRcImlucHV0XCI6IGBzcmMtZmVhdHVyZXMtQXV0aEJ5VXNlcm5hbWUtdWktTG9naW5Gb3JtLUxvZ2luRm9ybS1tb2R1bGVfX2lucHV0LS1QUVBhMWAsXG5cdFwibG9naW5CdG5cIjogYHNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9fbG9naW5CdG4tLU9rXzVhYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fSW5wdXRXcmFwcGVyLS1MdUZEVSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcGxhY2Vob2xkZXItLWVtQVFRIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9faW5wdXQtLUxWZElQIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dC0tTFZkSVA6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0V3JhcHBlci0teTFHaUYge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19jYXJldC0tbHFNRkcge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDlweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb246IHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGYgMC43cyBmb3J3YXJkcyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fYmxpbmstLU03bjhmIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7QUFDRTtFQUNJLGFBQUE7QUFDTjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDSSxVQUFBO0VBQUo7RUFHQTtJQUNJLGFBQUE7RUFESjtFQUlBO0lBQ0ksVUFBQTtFQUZKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLklucHV0V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2Vob2xkZXIge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDAgMCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG5cXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJldFdyYXBwZXIge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZXQge1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICB3aWR0aDogOXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYW5pbWF0aW9uOiBibGluayAwLjdzIGZvcndhcmRzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwLjAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiSW5wdXRXcmFwcGVyXCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fSW5wdXRXcmFwcGVyLS1MdUZEVWAsXG5cdFwicGxhY2Vob2xkZXJcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19wbGFjZWhvbGRlci0tZW1BUVFgLFxuXHRcImlucHV0XCI6IGBzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9faW5wdXQtLUxWZElQYCxcblx0XCJjYXJldFdyYXBwZXJcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19jYXJldFdyYXBwZXItLXkxR2lGYCxcblx0XCJjYXJldFwiOiBgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0LS1scU1GR2AsXG5cdFwiYmxpbmtcIjogYHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGZgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fdGl0bGUtLWlrSTdWIHtcbiAgZm9udDogdmFyKC0tZm9udC1sKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX190ZXh0LS11TkplZSB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtbSk7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4uc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX19lcnJvci0tRjlvTFggLnNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fdGl0bGUtLWlrSTdWIHtcbiAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XG59XG4uc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX19lcnJvci0tRjlvTFggLnNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fdGV4dC0tdU5KZWUge1xuICBjb2xvcjogdmFyKC0tcmVkLWRhcmspO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9UZXh0L1RleHQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0FBRUo7O0FBRUk7RUFDSSx1QkFBQTtBQUNSO0FBRUk7RUFDSSxzQkFBQTtBQUFSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aXRsZXtcXHJcXG4gICAgZm9udDp2YXIoLS1mb250LWwpO1xcclxcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuLnRleHR7XFxyXFxuICAgIGZvbnQ6dmFyKC0tZm9udC1tKTtcXHJcXG4gICAgY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG5cXHJcXG59XFxyXFxuLmVycm9ye1xcclxcbiAgICAudGl0bGV7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWxpZ2h0KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGV4dHsgIFxcclxcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1kYXJrKTtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn0gXFxyXFxuLnByaW1hcnl7XFxyXFxuICAgIC50aXRsZXt9XFxyXFxuICAgIC50ZXh0e31cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGl0bGVcIjogYHNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fdGl0bGUtLWlrSTdWYCxcblx0XCJ0ZXh0XCI6IGBzcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX3RleHQtLXVOSmVlYCxcblx0XCJlcnJvclwiOiBgc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX19lcnJvci0tRjlvTFhgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpbkZvcm0ubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpbkZvcm0ubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbnB1dC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbnB1dC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RleHQubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UZXh0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RleHQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgdmFyIGdldExvZ2luRXJyb3IgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gc3RhdGUgPT09IG51bGwgfHwgc3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXRlLmxvZ2luRm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmVycm9yOyB9O1xyXG4iLCJleHBvcnQgdmFyIGdldExvZ2luSXNMb2FkaW5nID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuICgoX2EgPSBzdGF0ZSA9PT0gbnVsbCB8fCBzdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhdGUubG9naW5Gb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNMb2FkaW5nKSB8fCBmYWxzZTsgfTtcclxuIiwiZXhwb3J0IHZhciBnZXRMb2dpblBhc3N3b3JkID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuICgoX2EgPSBzdGF0ZSA9PT0gbnVsbCB8fCBzdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhdGUubG9naW5Gb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFzc3dvcmQpIHx8ICcnOyB9O1xyXG4iLCJleHBvcnQgdmFyIGdldExvZ2luVXNlcm5hbWUgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKChfYSA9IHN0YXRlID09PSBudWxsIHx8IHN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGF0ZS5sb2dpbkZvcm0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS51c2VybmFtZSkgfHwgJyc7IH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgbG9naW5CeVVzZXJuYW1lIH0gZnJvbSBcImZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL3NlcnZpY2VzL2xvZ2luQnlVc2VybmFtZS9sb2dpbkJ5VXNlcm5hbWVcIjtcclxudmFyIGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG59O1xyXG5leHBvcnQgdmFyIGxvZ2luU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcImxvZ2luXCIsXHJcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWU6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQYXNzd29yZDogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgc3RhdGUucGFzc3dvcmQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgYnVpbGRlclxyXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbkJ5VXNlcm5hbWUucGVuZGluZywgZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENhc2UobG9naW5CeVVzZXJuYW1lLmZ1bGZpbGxlZCwgZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENhc2UobG9naW5CeVVzZXJuYW1lLnJlamVjdGVkLCBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cclxuZXhwb3J0IHZhciBsb2dpbkFjdGlvbnMgPSBsb2dpblNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCB2YXIgbG9naW5SZWR1Y2VyID0gbG9naW5TbGljZS5yZWR1Y2VyO1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlckFjdGlvbnMgfSBmcm9tIFwiZW50aXRpZXMvVXNlclwiO1xyXG5pbXBvcnQgeyBVU0VSX0xPQ0FMU1RPUkFHRV9LRVkgfSBmcm9tIFwic2hhcmVkL2NvbnN0L2xvY2FsU3RvcmFnZVwiO1xyXG5leHBvcnQgdmFyIGxvZ2luQnlVc2VybmFtZSA9IGNyZWF0ZUFzeW5jVGh1bmsoXCJsb2dpbi9sb2dpbkJ5VXNlcm5hbWVcIiwgZnVuY3Rpb24gKGF1dGhEYXRhLCB0aHVua0FQSSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByZXNwb25zZSwgZV8xO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvbG9naW5cIiwgYXV0aERhdGEpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFVTRVJfTE9DQUxTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgdGh1bmtBUEkuZGlzcGF0Y2godXNlckFjdGlvbnMuc2V0QXV0aERhdGEocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlXzEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRodW5rQVBJLnJlamVjdFdpdGhWYWx1ZShcInJlZmVyZW5zZSBlcnJvcjogeW91YHJlIGhhdmUgbWlzdGFrZSBpbiB1c2VybmFtZSBvciBwYXNzd29yZFwiKV07XHJcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfSk7XHJcbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiY2xhc3NOYW1lcyIsImNscyIsIkJ1dHRvbiIsIlRoZW1lQnV0dG9uIiwiSW5wdXQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlU3RvcmUiLCJtZW1vIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJsb2dpbkFjdGlvbnMiLCJsb2dpblJlZHVjZXIiLCJsb2dpbkJ5VXNlcm5hbWUiLCJUZXh0IiwiVGV4dFRoZW1lIiwiZ2V0TG9naW5Vc2VybmFtZSIsImdldExvZ2luUGFzc3dvcmQiLCJnZXRMb2dpbklzTG9hZGluZyIsImdldExvZ2luRXJyb3IiLCJMb2dpbkZvcm0iLCJfYSIsImNsYXNzTmFtZSIsImRpc3BhdGNoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImlzTG9hZGluZyIsImVycm9yIiwic3RvcmUiLCJyZWR1Y2VyTWFuYWdlciIsImFkZCIsInJlbW92ZSIsIm9uQ2hhbmdlVXNlcm5hbWUiLCJ2YWx1ZSIsInNldFVzZXJuYW1lIiwib25DaGFuZ2VQYXNzd29yZCIsInNldFBhc3N3b3JkIiwib25Mb2dpbkNsaWNrIiwiY2hpbGRyZW4iLCJ0aXRsZSIsInRleHQiLCJ0aGVtZSIsIkVSUk9SIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJvbkNoYW5nZSIsIk9VVExJTkUiLCJsb2dpbkJ0biIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIl9fcmVzdCIsImUiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIl9iIiwicHJvcHMiLCJyZWYiLCJfYyIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsIl9kIiwiY2FyZXRQb3NpdGlvbiIsInNldENhcmV0UG9zaXRpb24iLCJvbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25TZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsImN1cnJlbnQiLCJmb2N1cyIsIklucHV0V3JhcHBlciIsImNvbmNhdCIsImNhcmV0V3JhcHBlciIsImNhcmV0Iiwic3R5bGUiLCJsZWZ0IiwiUFJJTUFSWSJdLCJzb3VyY2VSb290IjoiIn0=