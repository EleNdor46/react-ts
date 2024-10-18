"use strict";
(self["webpackChunkproduct"] = self["webpackChunkproduct"] || []).push([["src_features_AuthByUsername_ui_LoginForm_LoginForm_tsx"],{

/***/ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx":
/*!****************************************************************!*\
  !*** ./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/lib/hooks/AppDispatch/AppDispatch */ "./src/shared/lib/hooks/AppDispatch/AppDispatch.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
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
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
















var initialReducers = {
  loginForm: features_AuthByUsername_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_7__.loginReducer
};
var LoginForm = /*#__PURE__*/_s(/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.memo)(_c = _s(function (_a) {
  _s();
  var className = _a.className,
    onSuccess = _a.onSuccess;
  var dispatch = (0,shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_14__.useAppDispatch)();
  var username = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_getLoginUsername_getLoginUsername__WEBPACK_IMPORTED_MODULE_10__.getLoginUsername);
  var password = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_getLoginPassword_getLoginPassword__WEBPACK_IMPORTED_MODULE_11__.getLoginPassword);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_getLoginIsLoading_getLoginIsLoading__WEBPACK_IMPORTED_MODULE_12__.getLoginIsLoading);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_model_selectors_getLoginError_getLoginError__WEBPACK_IMPORTED_MODULE_13__.getLoginError);
  var onChangeUsername = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (value) {
    dispatch(features_AuthByUsername_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_7__.loginActions.setUsername(value));
  }, [dispatch]);
  var onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (value) {
    dispatch(features_AuthByUsername_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_7__.loginActions.setPassword(value));
  }, [dispatch]);
  var onLoginClick = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, dispatch((0,features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_8__.loginByUsername)({
              username: username,
              password: password
            }))];
          case 1:
            result = _a.sent();
            if (result.meta.requestStatus === "fulfilled") {
              onSuccess();
            }
            return [2 /*return*/];
        }
      });
    });
  }, [onSuccess, dispatch, password, username]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_15__.DynamicModuleLoader, __assign({
    removeAfterUnmount: false,
    reducers: initialReducers
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
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
    }), void 0)
  }), void 0);
}, "CvNsEmO74mODqCgaTJ8Sugjs+zs=", false, function () {
  return [shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_14__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
})), "CvNsEmO74mODqCgaTJ8Sugjs+zs=", false, function () {
  return [shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_14__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
});
_c2 = LoginForm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "LoginForm$memo");
__webpack_require__.$Refresh$.register(_c2, "LoginForm");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

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

/***/ "./src/features/AuthByUsername/model/selectors/getLoginError/getLoginError.ts":
/*!************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginError/getLoginError.ts ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginError: () => (/* binding */ getLoginError)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginError = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.error; };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts":
/*!********************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.ts ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginIsLoading: () => (/* binding */ getLoginIsLoading)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginIsLoading = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts":
/*!******************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword.ts ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginPassword: () => (/* binding */ getLoginPassword)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginPassword = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.password) || ''; };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts":
/*!******************************************************************************************!*\
  !*** ./src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername.ts ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginUsername: () => (/* binding */ getLoginUsername)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var getLoginUsername = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.username) || ''; };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/features/AuthByUsername/model/slice/loginSlice.ts":
/*!***************************************************************!*\
  !*** ./src/features/AuthByUsername/model/slice/loginSlice.ts ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginActions: () => (/* binding */ loginActions),
/* harmony export */   loginReducer: () => (/* binding */ loginReducer),
/* harmony export */   loginSlice: () => (/* binding */ loginSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! features/AuthByUsername/services/loginByUsername/loginByUsername */ "./src/features/AuthByUsername/services/loginByUsername/loginByUsername.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var initialState = {
    username: "",
    password: "",
    isLoading: false,
};
var loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'login',
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
            .addCase(features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.pending, function (state) {
            console.log();
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(features_AuthByUsername_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.fulfilled, function (state) {
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


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/features/AuthByUsername/services/loginByUsername/loginByUsername.ts":
/*!*********************************************************************************!*\
  !*** ./src/features/AuthByUsername/services/loginByUsername/loginByUsername.ts ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginByUsername: () => (/* binding */ loginByUsername)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var shared_const_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/const/localStorage */ "./src/shared/const/localStorage.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

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



var loginByUsername = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)("login/loginByUsername", function (authData, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, dispatch, rejectWithValue, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, dispatch = thunkApi.dispatch, rejectWithValue = thunkApi.rejectWithValue;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.post("/login", authData)];
            case 2:
                response = _a.sent();
                if (!response.data) {
                    throw new Error();
                }
                localStorage.setItem(shared_const_localStorage__WEBPACK_IMPORTED_MODULE_1__.USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(entities_User__WEBPACK_IMPORTED_MODULE_0__.userActions.setAuthData(response.data));
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                return [2 /*return*/, rejectWithValue("error")];
            case 4: return [2 /*return*/];
        }
    });
}); });


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX0F1dGhCeVVzZXJuYW1lX3VpX0xvZ2luRm9ybV9Mb2dpbkZvcm1fdHN4LjQ5MTFkNTBhY2EwZmI5NmVjNTg5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0MsQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJSCxNQUFNLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNETixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztJQUNuQjtJQUNBLE9BQU9OLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT0gsUUFBUSxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUNELElBQUlPLFNBQVMsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxTQUFTLElBQUssVUFBVUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQ3JGLFNBQVNDLEtBQUtBLENBQUNDLEtBQUssRUFBRTtJQUFFLE9BQU9BLEtBQUssWUFBWUgsQ0FBQyxHQUFHRyxLQUFLLEdBQUcsSUFBSUgsQ0FBQyxDQUFDLFVBQVVJLE9BQU8sRUFBRTtNQUFFQSxPQUFPLENB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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL3VpL0xvZ2luRm9ybS9Mb2dpbkZvcm0udHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvdWkvTG9naW5Gb3JtL0xvZ2luRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL3VpL0xvZ2luRm9ybS9Mb2dpbkZvcm0ubW9kdWxlLnNjc3M/OGQ5NiIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbkVycm9yL2dldExvZ2luRXJyb3IudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5Jc0xvYWRpbmcvZ2V0TG9naW5Jc0xvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5QYXNzd29yZC9nZXRMb2dpblBhc3N3b3JkLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvbW9kZWwvc2VsZWN0b3JzL2dldExvZ2luVXNlcm5hbWUvZ2V0TG9naW5Vc2VybmFtZS50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL21vZGVsL3NsaWNlL2xvZ2luU2xpY2UudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VybmFtZS9zZXJ2aWNlcy9sb2dpbkJ5VXNlcm5hbWUvbG9naW5CeVVzZXJuYW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwic2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZVwiO1xyXG5pbXBvcnQgY2xzIGZyb20gXCIuL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRoZW1lQnV0dG9uIH0gZnJvbSBcInNoYXJlZC91aS9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcInNoYXJlZC91aS9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBsb2dpbkFjdGlvbnMsIGxvZ2luUmVkdWNlciwgfSBmcm9tIFwiZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvbW9kZWwvc2xpY2UvbG9naW5TbGljZVwiO1xyXG5pbXBvcnQgeyBsb2dpbkJ5VXNlcm5hbWUgfSBmcm9tIFwiZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvc2VydmljZXMvbG9naW5CeVVzZXJuYW1lL2xvZ2luQnlVc2VybmFtZVwiO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0VGhlbWUgfSBmcm9tIFwic2hhcmVkL3VpL1RleHQvVGV4dFwiO1xyXG5pbXBvcnQgeyBnZXRMb2dpblVzZXJuYW1lIH0gZnJvbSBcIi4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpblVzZXJuYW1lL2dldExvZ2luVXNlcm5hbWVcIjtcclxuaW1wb3J0IHsgZ2V0TG9naW5QYXNzd29yZCB9IGZyb20gXCIuLi8uLi9tb2RlbC9zZWxlY3RvcnMvZ2V0TG9naW5QYXNzd29yZC9nZXRMb2dpblBhc3N3b3JkXCI7XHJcbmltcG9ydCB7IGdldExvZ2luSXNMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbklzTG9hZGluZy9nZXRMb2dpbklzTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBnZXRMb2dpbkVycm9yIH0gZnJvbSBcIi4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbkVycm9yL2dldExvZ2luRXJyb3JcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwic2hhcmVkL2xpYi9ob29rcy9BcHBEaXNwYXRjaC9BcHBEaXNwYXRjaFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljTW9kdWxlTG9hZGVyIH0gZnJvbSBcInNoYXJlZC9saWIvY29tcG9uZW50cy9EeW5hbWljTW9kdWxlTG9hZGVyL0R5bmFtaWNNb2R1bGVMb2FkZXJcIjtcclxudmFyIGluaXRpYWxSZWR1Y2VycyA9IHtcclxuICAgIGxvZ2luRm9ybTogbG9naW5SZWR1Y2VyLFxyXG59O1xyXG52YXIgTG9naW5Gb3JtID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIG9uU3VjY2VzcyA9IF9hLm9uU3VjY2VzcztcclxuICAgIHZhciBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgICB2YXIgdXNlcm5hbWUgPSB1c2VTZWxlY3RvcihnZXRMb2dpblVzZXJuYW1lKTtcclxuICAgIHZhciBwYXNzd29yZCA9IHVzZVNlbGVjdG9yKGdldExvZ2luUGFzc3dvcmQpO1xyXG4gICAgdmFyIGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKGdldExvZ2luSXNMb2FkaW5nKTtcclxuICAgIHZhciBlcnJvciA9IHVzZVNlbGVjdG9yKGdldExvZ2luRXJyb3IpO1xyXG4gICAgdmFyIG9uQ2hhbmdlVXNlcm5hbWUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbnMuc2V0VXNlcm5hbWUodmFsdWUpKTtcclxuICAgIH0sIFtkaXNwYXRjaF0pO1xyXG4gICAgdmFyIG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbnMuc2V0UGFzc3dvcmQodmFsdWUpKTtcclxuICAgIH0sIFtkaXNwYXRjaF0pO1xyXG4gICAgdmFyIG9uTG9naW5DbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZGlzcGF0Y2gobG9naW5CeVVzZXJuYW1lKHsgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfSkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5tZXRhLnJlcXVlc3RTdGF0dXMgPT09IFwiZnVsZmlsbGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH0sIFtvblN1Y2Nlc3MsIGRpc3BhdGNoLCBwYXNzd29yZCwgdXNlcm5hbWVdKTtcclxuICAgIHJldHVybiAoX2pzeChEeW5hbWljTW9kdWxlTG9hZGVyLCBfX2Fzc2lnbih7IHJlbW92ZUFmdGVyVW5tb3VudDogZmFsc2UsIHJlZHVjZXJzOiBpbml0aWFsUmVkdWNlcnMgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkxvZ2luRm9ybSwge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChUZXh0LCB7IHRpdGxlOiBcItGE0L7RgNC80LAg0LDQstGC0L7RgNC40LfQsNGG0LjQuFwiIH0sIHZvaWQgMCksIGVycm9yICYmIF9qc3goVGV4dCwgeyB0ZXh0OiBlcnJvciwgdGhlbWU6IFRleHRUaGVtZS5FUlJPUiB9LCB2b2lkIDApLCBfanN4KElucHV0LCB7IGNsYXNzTmFtZTogY2xzLmlucHV0LCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiVXNlcm5hbWVcIiwgYXV0b0ZvY3VzOiB0cnVlLCBvbkNoYW5nZTogb25DaGFuZ2VVc2VybmFtZSwgdmFsdWU6IHVzZXJuYW1lIH0sIHZvaWQgMCksIF9qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaW5wdXQsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJwYXNzd29yZFwiLCBvbkNoYW5nZTogb25DaGFuZ2VQYXNzd29yZCwgdmFsdWU6IHBhc3N3b3JkIH0sIHZvaWQgMCksIF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IHRoZW1lOiBUaGVtZUJ1dHRvbi5PVVRMSU5FLCBjbGFzc05hbWU6IGNscy5sb2dpbkJ0biwgb25DbGljazogb25Mb2dpbkNsaWNrLCBkaXNhYmxlZDogaXNMb2FkaW5nIH0sIHsgY2hpbGRyZW46IFwiXFx1MDQxMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MlxcdTA0MzhcIiB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkgfSksIHZvaWQgMCkpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9fTG9naW5Gb3JtLS14WU5FZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLnNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9faW5wdXQtLVBRUGExIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNyYy1mZWF0dXJlcy1BdXRoQnlVc2VybmFtZS11aS1Mb2dpbkZvcm0tTG9naW5Gb3JtLW1vZHVsZV9fbG9naW5CdG4tLU9rXzVhIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZmVhdHVyZXMvQXV0aEJ5VXNlcm5hbWUvdWkvTG9naW5Gb3JtL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBR0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkxvZ2luRm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuLmlucHV0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcbi5sb2dpbkJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkxvZ2luRm9ybVwiOiBgc3JjLWZlYXR1cmVzLUF1dGhCeVVzZXJuYW1lLXVpLUxvZ2luRm9ybS1Mb2dpbkZvcm0tbW9kdWxlX19Mb2dpbkZvcm0tLXhZTkVmYCxcblx0XCJpbnB1dFwiOiBgc3JjLWZlYXR1cmVzLUF1dGhCeVVzZXJuYW1lLXVpLUxvZ2luRm9ybS1Mb2dpbkZvcm0tbW9kdWxlX19pbnB1dC0tUFFQYTFgLFxuXHRcImxvZ2luQnRuXCI6IGBzcmMtZmVhdHVyZXMtQXV0aEJ5VXNlcm5hbWUtdWktTG9naW5Gb3JtLUxvZ2luRm9ybS1tb2R1bGVfX2xvZ2luQnRuLS1Pa181YWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpbkZvcm0ubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgdmFyIGdldExvZ2luRXJyb3IgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gc3RhdGUgPT09IG51bGwgfHwgc3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXRlLmxvZ2luRm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmVycm9yOyB9O1xyXG4iLCJleHBvcnQgdmFyIGdldExvZ2luSXNMb2FkaW5nID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuICgoX2EgPSBzdGF0ZSA9PT0gbnVsbCB8fCBzdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhdGUubG9naW5Gb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNMb2FkaW5nKSB8fCBmYWxzZTsgfTtcclxuIiwiZXhwb3J0IHZhciBnZXRMb2dpblBhc3N3b3JkID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuICgoX2EgPSBzdGF0ZSA9PT0gbnVsbCB8fCBzdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhdGUubG9naW5Gb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFzc3dvcmQpIHx8ICcnOyB9O1xyXG4iLCJleHBvcnQgdmFyIGdldExvZ2luVXNlcm5hbWUgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKChfYSA9IHN0YXRlID09PSBudWxsIHx8IHN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGF0ZS5sb2dpbkZvcm0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS51c2VybmFtZSkgfHwgJyc7IH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgbG9naW5CeVVzZXJuYW1lIH0gZnJvbSBcImZlYXR1cmVzL0F1dGhCeVVzZXJuYW1lL3NlcnZpY2VzL2xvZ2luQnlVc2VybmFtZS9sb2dpbkJ5VXNlcm5hbWVcIjtcclxudmFyIGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG59O1xyXG5leHBvcnQgdmFyIGxvZ2luU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnbG9naW4nLFxyXG4gICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldFVzZXJuYW1lOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGFzc3dvcmQ6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhc3N3b3JkID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIGJ1aWxkZXJcclxuICAgICAgICAgICAgLmFkZENhc2UobG9naW5CeVVzZXJuYW1lLnBlbmRpbmcsIGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbkJ5VXNlcm5hbWUuZnVsZmlsbGVkLCBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENhc2UobG9naW5CeVVzZXJuYW1lLnJlamVjdGVkLCBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cclxuZXhwb3J0IHZhciBsb2dpbkFjdGlvbnMgPSBsb2dpblNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCB2YXIgbG9naW5SZWR1Y2VyID0gbG9naW5TbGljZS5yZWR1Y2VyO1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHVzZXJBY3Rpb25zIH0gZnJvbSBcImVudGl0aWVzL1VzZXJcIjtcclxuaW1wb3J0IHsgVVNFUl9MT0NBTFNUT1JBR0VfS0VZIH0gZnJvbSBcInNoYXJlZC9jb25zdC9sb2NhbFN0b3JhZ2VcIjtcclxuZXhwb3J0IHZhciBsb2dpbkJ5VXNlcm5hbWUgPSBjcmVhdGVBc3luY1RodW5rKFwibG9naW4vbG9naW5CeVVzZXJuYW1lXCIsIGZ1bmN0aW9uIChhdXRoRGF0YSwgdGh1bmtBcGkpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0cmEsIGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUsIHJlc3BvbnNlLCBlXzE7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBleHRyYSA9IHRodW5rQXBpLmV4dHJhLCBkaXNwYXRjaCA9IHRodW5rQXBpLmRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUgPSB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBleHRyYS5hcGkucG9zdChcIi9sb2dpblwiLCBhdXRoRGF0YSldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVVNFUl9MT0NBTFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5zZXRBdXRoRGF0YShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UuZGF0YV07XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVfMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVqZWN0V2l0aFZhbHVlKFwiZXJyb3JcIildO1xyXG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH0pO1xyXG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidiIsIm9wIiwiVHlwZUVycm9yIiwicG9wIiwicHVzaCIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJjbGFzc05hbWVzIiwiY2xzIiwiQnV0dG9uIiwiVGhlbWVCdXR0b24iLCJJbnB1dCIsInVzZVNlbGVjdG9yIiwibWVtbyIsInVzZUNhbGxiYWNrIiwibG9naW5BY3Rpb25zIiwibG9naW5SZWR1Y2VyIiwibG9naW5CeVVzZXJuYW1lIiwiVGV4dCIsIlRleHRUaGVtZSIsImdldExvZ2luVXNlcm5hbWUiLCJnZXRMb2dpblBhc3N3b3JkIiwiZ2V0TG9naW5Jc0xvYWRpbmciLCJnZXRMb2dpbkVycm9yIiwidXNlQXBwRGlzcGF0Y2giLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwiaW5pdGlhbFJlZHVjZXJzIiwibG9naW5Gb3JtIiwiTG9naW5Gb3JtIiwiX3MiLCJfYyIsIl9hIiwiY2xhc3NOYW1lIiwib25TdWNjZXNzIiwiZGlzcGF0Y2giLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJvbkNoYW5nZVVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbkxvZ2luQ2xpY2siLCJtZXRhIiwicmVxdWVzdFN0YXR1cyIsInJlbW92ZUFmdGVyVW5tb3VudCIsInJlZHVjZXJzIiwiY2hpbGRyZW4iLCJ0aXRsZSIsInRleHQiLCJ0aGVtZSIsIkVSUk9SIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJvbkNoYW5nZSIsIk9VVExJTkUiLCJsb2dpbkJ0biIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=