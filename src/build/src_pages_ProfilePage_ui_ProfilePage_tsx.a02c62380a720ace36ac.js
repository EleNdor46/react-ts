"use strict";
(self["webpackChunkproduct"] = self["webpackChunkproduct"] || []).push([["src_pages_ProfilePage_ui_ProfilePage_tsx"],{

/***/ "./src/entities/Profile/ui/ProfileCard/ProfileCard.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Profile/ui/ProfileCard/ProfileCard.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileCard: () => (/* binding */ ProfileCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileCard.module.scss */ "./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss");
/* harmony import */ var entities_Profile_model_selectors_getProfileData_getProfileData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! entities/Profile/model/selectors/getProfileData/getProfileData */ "./src/entities/Profile/model/selectors/getProfileData/getProfileData.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var entities_Profile_model_selectors_getProfileError_getProfileError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! entities/Profile/model/selectors/getProfileError/getProfileError */ "./src/entities/Profile/model/selectors/getProfileError/getProfileError.ts");
/* harmony import */ var entities_Profile_model_selectors_getProfileIsLoading_getProfileIsLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading */ "./src/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading.ts");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
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










var ProfileCard = function ProfileCard(_a) {
  var className = _a.className;
  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(entities_Profile_model_selectors_getProfileData_getProfileData__WEBPACK_IMPORTED_MODULE_3__.getProfileData);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(entities_Profile_model_selectors_getProfileError_getProfileError__WEBPACK_IMPORTED_MODULE_5__.getProfileError);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(entities_Profile_model_selectors_getProfileIsLoading_getProfileIsLoading__WEBPACK_IMPORTED_MODULE_6__.getProfileIsLoading);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ProfileCard, {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].header
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_8__.Text, {
        title: 'profile'
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__.Button, __assign({
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].editBtn,
        theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_7__.ThemeButton.OUTLINE
      }, {
        children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
      }), void 0)]
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].data
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__.Input, {
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iput,
        value: data === null || data === void 0 ? void 0 : data.first,
        placeholder: 'your name'
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__.Input, {
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iput,
        value: data === null || data === void 0 ? void 0 : data.lastname,
        placeholder: 'your lastname'
      }, void 0)]
    }), void 0)]
  }), void 0);
};

/***/ }),

/***/ "./src/pages/ProfilePage/ui/ProfilePage.tsx":
/*!**************************************************!*\
  !*** ./src/pages/ProfilePage/ui/ProfilePage.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var entities_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/Profile */ "./src/entities/Profile/index.ts");
/* harmony import */ var shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/hooks/AppDispatch/AppDispatch */ "./src/shared/lib/hooks/AppDispatch/AppDispatch.ts");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
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







var reducers = {
  profile: entities_Profile__WEBPACK_IMPORTED_MODULE_2__.profileReducer
};
var ProfilePage = function ProfilePage(_a) {
  var className = _a.className;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)().t;
  var dispatch = (0,shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,entities_Profile__WEBPACK_IMPORTED_MODULE_2__.fetchProfileData)());
  }, [dispatch]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_5__.DynamicModuleLoader, __assign({
    reducers: reducers,
    removeAfterUnmount: true
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_4__.classNames)("", {}, [className])
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.ProfileCard, {}, void 0)
    }), void 0)
  }), void 0);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Profile-ui-ProfileCard-ProfileCard-module__ProfileCard--wW9jg {
  padding: 20px;
  border: 2px solid var(--inverted-bg-color);
}

.src-entities-Profile-ui-ProfileCard-ProfileCard-module__header--nP7J5 {
  display: flex;
}

.src-entities-Profile-ui-ProfileCard-ProfileCard-module__editBtn--LGXZA {
  margin-left: auto;
}

.src-entities-Profile-ui-ProfileCard-ProfileCard-module__data--mem1n {
  margin-top: 30px;
}

.src-entities-Profile-ui-ProfileCard-ProfileCard-module__input--ZTyX8 {
  margin-top: 10px;
}`, "",{"version":3,"sources":["webpack://./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,0CAAA;AACJ;;AACA;EACI,aAAA;AAEJ;;AAAA;EACI,iBAAA;AAGJ;;AAAA;EACI,gBAAA;AAGJ;;AADA;EACI,gBAAA;AAIJ","sourcesContent":[".ProfileCard {\r\n    padding: 20px;\r\n    border: 2px solid var(--inverted-bg-color);\r\n}\r\n.header{\r\n    display: flex;\r\n}\r\n.editBtn{\r\n    margin-left: auto;\r\n}\r\n\r\n.data{\r\n    margin-top: 30px;\r\n}\r\n.input{\r\n    margin-top: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProfileCard": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__ProfileCard--wW9jg`,
	"header": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__header--nP7J5`,
	"editBtn": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__editBtn--LGXZA`,
	"data": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__data--mem1n`,
	"input": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__input--ZTyX8`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss":
/*!*********************************************************************!*\
  !*** ./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss ***!
  \*********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProfileCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProfileCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProfileCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Profile/index.ts":
/*!***************************************!*\
  !*** ./src/entities/Profile/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileCard: () => (/* reexport safe */ _ui_ProfileCard_ProfileCard__WEBPACK_IMPORTED_MODULE_0__.ProfileCard),
/* harmony export */   fetchProfileData: () => (/* reexport safe */ _model_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_2__.fetchProfileData),
/* harmony export */   profileActions: () => (/* reexport safe */ _model_slice_ProfileSlice__WEBPACK_IMPORTED_MODULE_1__.profileActions),
/* harmony export */   profileReducer: () => (/* reexport safe */ _model_slice_ProfileSlice__WEBPACK_IMPORTED_MODULE_1__.profileReducer)
/* harmony export */ });
/* harmony import */ var _ui_ProfileCard_ProfileCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ProfileCard/ProfileCard */ "./src/entities/Profile/ui/ProfileCard/ProfileCard.tsx");
/* harmony import */ var _model_slice_ProfileSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/slice/ProfileSlice */ "./src/entities/Profile/model/slice/ProfileSlice.ts");
/* harmony import */ var _model_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/services/fetchProfileData/fetchProfileData */ "./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts");





/***/ }),

/***/ "./src/entities/Profile/model/selectors/getProfileData/getProfileData.ts":
/*!*******************************************************************************!*\
  !*** ./src/entities/Profile/model/selectors/getProfileData/getProfileData.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProfileData: () => (/* binding */ getProfileData)
/* harmony export */ });
var getProfileData = function (state) { var _a; return (_a = state.profile) === null || _a === void 0 ? void 0 : _a.data; };


/***/ }),

/***/ "./src/entities/Profile/model/selectors/getProfileError/getProfileError.ts":
/*!*********************************************************************************!*\
  !*** ./src/entities/Profile/model/selectors/getProfileError/getProfileError.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProfileError: () => (/* binding */ getProfileError)
/* harmony export */ });
var getProfileError = function (state) { var _a; return (_a = state.profile) === null || _a === void 0 ? void 0 : _a.error; };


/***/ }),

/***/ "./src/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading.ts":
/*!*****************************************************************************************!*\
  !*** ./src/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProfileIsLoading: () => (/* binding */ getProfileIsLoading)
/* harmony export */ });
var getProfileIsLoading = function (state) { var _a; return (_a = state.profile) === null || _a === void 0 ? void 0 : _a.isLoading; };


/***/ }),

/***/ "./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts":
/*!**********************************************************************************!*\
  !*** ./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchProfileData: () => (/* binding */ fetchProfileData)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
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

var fetchProfileData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('profile/fetchProfileData', function (_, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, rejectWithValue, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.get('/profile')];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                return [2 /*return*/, rejectWithValue('error')];
            case 4: return [2 /*return*/];
        }
    });
}); });


/***/ }),

/***/ "./src/entities/Profile/model/slice/ProfileSlice.ts":
/*!**********************************************************!*\
  !*** ./src/entities/Profile/model/slice/ProfileSlice.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   profileActions: () => (/* binding */ profileActions),
/* harmony export */   profileReducer: () => (/* binding */ profileReducer),
/* harmony export */   profileSlice: () => (/* binding */ profileSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetchProfileData/fetchProfileData */ "./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts");


var initialState = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};
var profileSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'profile',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__.fetchProfileData.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__.fetchProfileData.fulfilled, function (state, action) {
            state.isLoading = true;
            state.data = action.payload;
        })
            .addCase(_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__.fetchProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
// Action creators are generated for each case reducer function
var profileActions = profileSlice.actions;
var profileReducer = profileSlice.reducer;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1Byb2ZpbGVQYWdlX3VpX1Byb2ZpbGVQYWdlX3RzeC5hMDJjNjIzODBhNzIwYWNlMzZhYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxRQUFRLElBQUssWUFBWTtFQUNsREEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sSUFBSSxVQUFTQyxDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVILENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUlJLENBQUMsSUFBSUwsQ0FBQyxFQUFFLElBQUlILE1BQU0sQ0FBQ1MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFDM0ROLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQzhEO0FBQ0Y7QUFDakI7QUFDb0Q7QUFDdEQ7QUFDeUQ7QUFDWTtBQUNqRDtBQUNuQjtBQUNHO0FBQ3ZDLElBQUlxQixXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBYUMsRUFBRSxFQUFFO0VBQ25DLElBQUlDLFNBQVMsR0FBR0QsRUFBRSxDQUFDQyxTQUFTO0VBQzVCLElBQUlDLElBQUksR0FBR1Ysd0RBQVcsQ0FBQ0QsMEdBQWMsQ0FBQztFQUN0QyxJQUFJWSxLQUFLLEdBQUdYLHdEQUFXLENBQUNDLDZHQUFlLENBQUM7RUFDeEMsSUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RDBDO0FBQ2tDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLG1CQUFtQiw2REFBVztBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxxQkFBcUIseUZBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUJBQXFCLHlGQUFnQjtBQUNyQztBQUNBO0FBQ0EsU0FBUztBQUNULHFCQUFxQix5RkFBZ0I7QUFDckM7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ087QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS91aS9Qcm9maWxlQ2FyZC9Qcm9maWxlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9wYWdlcy9Qcm9maWxlUGFnZS91aS9Qcm9maWxlUGFnZS50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9lbnRpdGllcy9Qcm9maWxlL3VpL1Byb2ZpbGVDYXJkL1Byb2ZpbGVDYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS91aS9Qcm9maWxlQ2FyZC9Qcm9maWxlQ2FyZC5tb2R1bGUuc2Nzcz82ZTEwIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVEYXRhL2dldFByb2ZpbGVEYXRhLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZUVycm9yL2dldFByb2ZpbGVFcnJvci50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVJc0xvYWRpbmcvZ2V0UHJvZmlsZUlzTG9hZGluZy50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvbW9kZWwvc2VydmljZXMvZmV0Y2hQcm9maWxlRGF0YS9mZXRjaFByb2ZpbGVEYXRhLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zbGljZS9Qcm9maWxlU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVcIjtcclxuaW1wb3J0IGNscyBmcm9tIFwiLi9Qcm9maWxlQ2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlRGF0YSB9IGZyb20gXCJlbnRpdGllcy9Qcm9maWxlL21vZGVsL3NlbGVjdG9ycy9nZXRQcm9maWxlRGF0YS9nZXRQcm9maWxlRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlRXJyb3IgfSBmcm9tIFwiZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZUVycm9yL2dldFByb2ZpbGVFcnJvclwiO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlSXNMb2FkaW5nIH0gZnJvbSBcImVudGl0aWVzL1Byb2ZpbGUvbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVJc0xvYWRpbmcvZ2V0UHJvZmlsZUlzTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRoZW1lQnV0dG9uIH0gZnJvbSBcInNoYXJlZC91aS9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwic2hhcmVkL3VpL1RleHQvVGV4dFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJzaGFyZWQvdWkvSW5wdXQvSW5wdXRcIjtcclxuZXhwb3J0IHZhciBQcm9maWxlQ2FyZCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZTtcclxuICAgIHZhciBkYXRhID0gdXNlU2VsZWN0b3IoZ2V0UHJvZmlsZURhdGEpO1xyXG4gICAgdmFyIGVycm9yID0gdXNlU2VsZWN0b3IoZ2V0UHJvZmlsZUVycm9yKTtcclxuICAgIHZhciBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihnZXRQcm9maWxlSXNMb2FkaW5nKTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLlByb2ZpbGVDYXJkLCB7fSwgW2NsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLmhlYWRlciB9LCB7IGNoaWxkcmVuOiBbX2pzeChUZXh0LCB7IHRpdGxlOiAncHJvZmlsZScgfSwgdm9pZCAwKSwgX2pzeChCdXR0b24sIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuZWRpdEJ0biwgdGhlbWU6IFRoZW1lQnV0dG9uLk9VVExJTkUgfSwgeyBjaGlsZHJlbjogXCJcXHUwNDIwXFx1MDQzNVxcdTA0MzRcXHUwNDMwXFx1MDQzQVxcdTA0NDJcXHUwNDM4XFx1MDQ0MFxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDXCIgfSksIHZvaWQgMCldIH0pLCB2b2lkIDApLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLmRhdGEgfSwgeyBjaGlsZHJlbjogW19qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaXB1dCwgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5maXJzdCwgcGxhY2Vob2xkZXI6ICd5b3VyIG5hbWUnIH0sIHZvaWQgMCksIF9qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaXB1dCwgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5sYXN0bmFtZSwgcGxhY2Vob2xkZXI6ICd5b3VyIGxhc3RuYW1lJyB9LCB2b2lkIDApXSB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xyXG59O1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZmlsZURhdGEsIFByb2ZpbGVDYXJkLCBwcm9maWxlUmVkdWNlciB9IGZyb20gXCJlbnRpdGllcy9Qcm9maWxlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcInNoYXJlZC9saWIvaG9va3MvQXBwRGlzcGF0Y2gvQXBwRGlzcGF0Y2hcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lXCI7XHJcbmltcG9ydCB7IER5bmFtaWNNb2R1bGVMb2FkZXIgfSBmcm9tIFwic2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlclwiO1xyXG52YXIgcmVkdWNlcnMgPSB7XHJcbiAgICBwcm9maWxlOiBwcm9maWxlUmVkdWNlcixcclxufTtcclxudmFyIFByb2ZpbGVQYWdlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xyXG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XHJcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2ZpbGVEYXRhKCkpO1xyXG4gICAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgICByZXR1cm4gKF9qc3goRHluYW1pY01vZHVsZUxvYWRlciwgX19hc3NpZ24oeyByZWR1Y2VyczogcmVkdWNlcnMsIHJlbW92ZUFmdGVyVW5tb3VudDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIsIHt9LCBbY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogX2pzeChQcm9maWxlQ2FyZCwge30sIHZvaWQgMCkgfSksIHZvaWQgMCkgfSksIHZvaWQgMCkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX1Byb2ZpbGVDYXJkLS13VzlqZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1cblxuLnNyYy1lbnRpdGllcy1Qcm9maWxlLXVpLVByb2ZpbGVDYXJkLVByb2ZpbGVDYXJkLW1vZHVsZV9faGVhZGVyLS1uUDdKNSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2VkaXRCdG4tLUxHWFpBIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2RhdGEtLW1lbTFuIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNyYy1lbnRpdGllcy1Qcm9maWxlLXVpLVByb2ZpbGVDYXJkLVByb2ZpbGVDYXJkLW1vZHVsZV9faW5wdXQtLVpUeVg4IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9lbnRpdGllcy9Qcm9maWxlL3VpL1Byb2ZpbGVDYXJkL1Byb2ZpbGVDYXJkLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlByb2ZpbGVDYXJkIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uZWRpdEJ0bntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kYXRhe1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG4uaW5wdXR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlByb2ZpbGVDYXJkXCI6IGBzcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX1Byb2ZpbGVDYXJkLS13VzlqZ2AsXG5cdFwiaGVhZGVyXCI6IGBzcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2hlYWRlci0tblA3SjVgLFxuXHRcImVkaXRCdG5cIjogYHNyYy1lbnRpdGllcy1Qcm9maWxlLXVpLVByb2ZpbGVDYXJkLVByb2ZpbGVDYXJkLW1vZHVsZV9fZWRpdEJ0bi0tTEdYWkFgLFxuXHRcImRhdGFcIjogYHNyYy1lbnRpdGllcy1Qcm9maWxlLXVpLVByb2ZpbGVDYXJkLVByb2ZpbGVDYXJkLW1vZHVsZV9fZGF0YS0tbWVtMW5gLFxuXHRcImlucHV0XCI6IGBzcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2lucHV0LS1aVHlYOGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb2ZpbGVDYXJkLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvZmlsZUNhcmQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvZmlsZUNhcmQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgeyBQcm9maWxlQ2FyZCB9IGZyb20gXCIuL3VpL1Byb2ZpbGVDYXJkL1Byb2ZpbGVDYXJkXCI7XHJcbmV4cG9ydCB7IHByb2ZpbGVBY3Rpb25zLCBwcm9maWxlUmVkdWNlciB9IGZyb20gXCIuL21vZGVsL3NsaWNlL1Byb2ZpbGVTbGljZVwiO1xyXG5leHBvcnQgeyBmZXRjaFByb2ZpbGVEYXRhIH0gZnJvbSBcIi4vbW9kZWwvc2VydmljZXMvZmV0Y2hQcm9maWxlRGF0YS9mZXRjaFByb2ZpbGVEYXRhXCI7XHJcbiIsImV4cG9ydCB2YXIgZ2V0UHJvZmlsZURhdGEgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gc3RhdGUucHJvZmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGE7IH07XHJcbiIsImV4cG9ydCB2YXIgZ2V0UHJvZmlsZUVycm9yID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuIChfYSA9IHN0YXRlLnByb2ZpbGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lcnJvcjsgfTtcclxuIiwiZXhwb3J0IHZhciBnZXRQcm9maWxlSXNMb2FkaW5nID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuIChfYSA9IHN0YXRlLnByb2ZpbGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc0xvYWRpbmc7IH07XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmV4cG9ydCB2YXIgZmV0Y2hQcm9maWxlRGF0YSA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb2ZpbGUvZmV0Y2hQcm9maWxlRGF0YScsIGZ1bmN0aW9uIChfLCB0aHVua0FwaSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRyYSwgcmVqZWN0V2l0aFZhbHVlLCByZXNwb25zZSwgZV8xO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgZXh0cmEgPSB0aHVua0FwaS5leHRyYSwgcmVqZWN0V2l0aFZhbHVlID0gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZXh0cmEuYXBpLmdldCgnL3Byb2ZpbGUnKV07XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlXzEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlamVjdFdpdGhWYWx1ZSgnZXJyb3InKV07XHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGZldGNoUHJvZmlsZURhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZXRjaFByb2ZpbGVEYXRhL2ZldGNoUHJvZmlsZURhdGEnO1xyXG52YXIgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcmVhZG9ubHk6IHRydWUsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcclxuICAgIGRhdGE6IHVuZGVmaW5lZCxcclxufTtcclxuZXhwb3J0IHZhciBwcm9maWxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAncHJvZmlsZScsXHJcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7fSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgYnVpbGRlclxyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFByb2ZpbGVEYXRhLnBlbmRpbmcsIGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFByb2ZpbGVEYXRhLmZ1bGZpbGxlZCwgZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3RhdGUuZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvZmlsZURhdGEucmVqZWN0ZWQsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxyXG5leHBvcnQgdmFyIHByb2ZpbGVBY3Rpb25zID0gcHJvZmlsZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCB2YXIgcHJvZmlsZVJlZHVjZXIgPSBwcm9maWxlU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJjbGFzc05hbWVzIiwiY2xzIiwiZ2V0UHJvZmlsZURhdGEiLCJ1c2VTZWxlY3RvciIsImdldFByb2ZpbGVFcnJvciIsImdldFByb2ZpbGVJc0xvYWRpbmciLCJCdXR0b24iLCJUaGVtZUJ1dHRvbiIsIlRleHQiLCJJbnB1dCIsIlByb2ZpbGVDYXJkIiwiX2EiLCJjbGFzc05hbWUiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJjaGlsZHJlbiIsImhlYWRlciIsInRpdGxlIiwiZWRpdEJ0biIsInRoZW1lIiwiT1VUTElORSIsImlwdXQiLCJ2YWx1ZSIsImZpcnN0IiwicGxhY2Vob2xkZXIiLCJsYXN0bmFtZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9maWxlRGF0YSIsInByb2ZpbGVSZWR1Y2VyIiwidXNlQXBwRGlzcGF0Y2giLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwicmVkdWNlcnMiLCJwcm9maWxlIiwiUHJvZmlsZVBhZ2UiLCJkaXNwYXRjaCIsInJlbW92ZUFmdGVyVW5tb3VudCJdLCJzb3VyY2VSb290IjoiIn0=