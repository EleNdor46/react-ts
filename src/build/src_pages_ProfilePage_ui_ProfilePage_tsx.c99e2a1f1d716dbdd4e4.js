"use strict";
(self["webpackChunkproduct"] = self["webpackChunkproduct"] || []).push([["src_pages_ProfilePage_ui_ProfilePage_tsx"],{

/***/ "./src/entities/Country/ui/CountrySelect/CountrySelect.tsx":
/*!*****************************************************************!*\
  !*** ./src/entities/Country/ui/CountrySelect/CountrySelect.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountrySelect: () => (/* binding */ CountrySelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Country/model/types/country */ "./src/entities/Country/model/types/country.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Select/Select */ "./src/shared/ui/Select/Select.tsx");





var options = [{
  value: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.Armenia,
  content: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.Armenia
}, {
  value: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.Belarus,
  content: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.Belarus
}, {
  value: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.Russia,
  content: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.Russia
}, {
  value: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.USA,
  content: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.USA
}, {
  value: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.Ukraine,
  content: entities_Country_model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country.Ukraine
}];
var CountrySelect = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_a) {
  var className = _a.className,
    value = _a.value,
    onChange = _a.onChange,
    readonly = _a.readonly;
  var onChangeHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (value) {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  }, [onChange]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_4__.Select, {
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_3__.classNames)("", {}, [className]),
    label: "страна",
    options: options,
    value: value,
    onChange: onChangeHandler,
    readonly: readonly
  }, void 0);
});

/***/ }),

/***/ "./src/entities/Currency/ui/CurrencySelect/CurrencySelect.tsx":
/*!********************************************************************!*\
  !*** ./src/entities/Currency/ui/CurrencySelect/CurrencySelect.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrencySelect: () => (/* binding */ CurrencySelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entities_Currency_model_types_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Currency/model/types/currency */ "./src/entities/Currency/model/types/currency.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Select/Select */ "./src/shared/ui/Select/Select.tsx");





var options = [{
  value: entities_Currency_model_types_currency__WEBPACK_IMPORTED_MODULE_1__.Currency.RUB,
  content: entities_Currency_model_types_currency__WEBPACK_IMPORTED_MODULE_1__.Currency.RUB
}, {
  value: entities_Currency_model_types_currency__WEBPACK_IMPORTED_MODULE_1__.Currency.EUR,
  content: entities_Currency_model_types_currency__WEBPACK_IMPORTED_MODULE_1__.Currency.EUR
}, {
  value: entities_Currency_model_types_currency__WEBPACK_IMPORTED_MODULE_1__.Currency.USD,
  content: entities_Currency_model_types_currency__WEBPACK_IMPORTED_MODULE_1__.Currency.USD
}];
var CurrencySelect = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_a) {
  var className = _a.className,
    value = _a.value,
    onChange = _a.onChange,
    readonly = _a.readonly;
  var onChangeHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (value) {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  }, [onChange]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Select_Select__WEBPACK_IMPORTED_MODULE_4__.Select, {
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_3__.classNames)("", {}, [className]),
    label: "валюта",
    options: options,
    value: value,
    onChange: onChangeHandler,
    readonly: readonly
  }, void 0);
});

/***/ }),

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
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var shared_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/Loader/Loader */ "./src/shared/ui/Loader/Loader.tsx");
/* harmony import */ var shared_ui_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Avatar/Avatar */ "./src/shared/ui/Avatar/Avatar.tsx");
/* harmony import */ var entities_Currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! entities/Currency */ "./src/entities/Currency/index.ts");
/* harmony import */ var entities_Country__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! entities/Country */ "./src/entities/Country/index.ts");
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
  var _b, _c;
  var className = _a.className,
    data = _a.data,
    isLoading = _a.isLoading,
    error = _a.error,
    onChangeLastname = _a.onChangeLastname,
    onChangeFirtsname = _a.onChangeFirtsname,
    readonly = _a.readonly,
    onChangeAge = _a.onChangeAge,
    onChangeCity = _a.onChangeCity,
    onChangeUsername = _a.onChangeUsername,
    onChangeAvatar = _a.onChangeAvatar,
    onChangeCurrency = _a.onChangeCurrency,
    onChangeCountry = _a.onChangeCountry;
  if (!isLoading) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ProfileCard, (_b = {}, _b[_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].loading] = true, _b), [className])
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__.Loader, {}, void 0)
    }), void 0);
  }
  if (error) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ProfileCard, {}, [className, _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error])
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {
        title: "error profile",
        theme: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_3__.TextTheme.ERROR,
        text: "reload page",
        aligin: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_3__.TextAlign.CENTER
      }, void 0)
    }), void 0);
  }
  var mods = (_c = {}, _c[_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].editing] = !readonly, _c);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ProfileCard, mods, [className])
  }, {
    children: [(data === null || data === void 0 ? void 0 : data.avatar) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatarWrapper
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
        src: data === null || data === void 0 ? void 0 : data.avatar,
        alt: "avatar"
      }, void 0)
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].data
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iput,
        value: data === null || data === void 0 ? void 0 : data.first,
        placeholder: "your name",
        onChange: onChangeFirtsname,
        readonly: readonly
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iput,
        value: data === null || data === void 0 ? void 0 : data.lastname,
        placeholder: "your lastname",
        onChange: onChangeLastname,
        readonly: readonly
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iput,
        value: data === null || data === void 0 ? void 0 : data.age,
        placeholder: "your age",
        onChange: onChangeAge,
        readonly: readonly
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iput,
        value: data === null || data === void 0 ? void 0 : data.city,
        placeholder: "your city",
        onChange: onChangeCity,
        readonly: readonly
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iput,
        value: data === null || data === void 0 ? void 0 : data.username,
        placeholder: "your username",
        onChange: onChangeUsername,
        readonly: readonly
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iput,
        value: data === null || data === void 0 ? void 0 : data.avatar,
        placeholder: "your avatar",
        onChange: onChangeAvatar,
        readonly: readonly
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Currency__WEBPACK_IMPORTED_MODULE_7__.CurrencySelect, {
        value: data === null || data === void 0 ? void 0 : data.currency,
        onChange: onChangeCurrency,
        readonly: readonly,
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Country__WEBPACK_IMPORTED_MODULE_8__.CountrySelect, {
        value: data === null || data === void 0 ? void 0 : data.country,
        onChange: onChangeCountry,
        readonly: readonly,
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var entities_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/Profile */ "./src/entities/Profile/index.ts");
/* harmony import */ var shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/hooks/AppDispatch/AppDispatch */ "./src/shared/lib/hooks/AppDispatch/AppDispatch.ts");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var entities_Profile_model_selectors_getProfileError_getProfileError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! entities/Profile/model/selectors/getProfileError/getProfileError */ "./src/entities/Profile/model/selectors/getProfileError/getProfileError.ts");
/* harmony import */ var entities_Profile_model_selectors_getProfileIsLoading_getProfileIsLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading */ "./src/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading.ts");
/* harmony import */ var _ProfilePageHeader_ProfilePageHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProfilePageHeader/ProfilePageHeader */ "./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.tsx");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
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
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)().t;
  var dispatch = (0,shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  var formData = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.getProfileForm);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(entities_Profile_model_selectors_getProfileError_getProfileError__WEBPACK_IMPORTED_MODULE_7__.getProfileError);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(entities_Profile_model_selectors_getProfileIsLoading_getProfileIsLoading__WEBPACK_IMPORTED_MODULE_8__.getProfileIsLoading);
  var readonly = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.getProfileReadonly);
  var validateErrors = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.getProfileValidateError);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,entities_Profile__WEBPACK_IMPORTED_MODULE_2__.fetchProfileData)());
  }, [dispatch]);
  var onChangeFirtsname = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.profileActions.updateProfile({
      first: value || ""
    }));
  }, [dispatch]);
  var onChangeLastname = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.profileActions.updateProfile({
      lastname: value || ""
    }));
  }, [dispatch]);
  var onChangeAge = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.profileActions.updateProfile({
      age: Number(value) || 0
    }));
  }, [dispatch]);
  var onChangeCity = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.profileActions.updateProfile({
      city: value || ""
    }));
  }, [dispatch]);
  var onChangeUsername = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.profileActions.updateProfile({
      username: value || ""
    }));
  }, [dispatch]);
  var onChangeAvatar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.profileActions.updateProfile({
      avatar: value || ""
    }));
  }, [dispatch]);
  var onChangeCurrency = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (currency) {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.profileActions.updateProfile({
      currency: currency
    }));
  }, [dispatch]);
  var onChangeCountry = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (country) {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.profileActions.updateProfile({
      country: country
    }));
  }, [dispatch]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_5__.DynamicModuleLoader, __assign({
    reducers: reducers,
    removeAfterUnmount: true
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_4__.classNames)("", {}, [className])
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProfilePageHeader_ProfilePageHeader__WEBPACK_IMPORTED_MODULE_9__.ProfilePageHeader, {}, void 0), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (err) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_10__.Text, {
          theme: shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_10__.TextTheme.ERROR,
          text: err
        }, err);
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Profile__WEBPACK_IMPORTED_MODULE_2__.ProfileCard, {
        onChangeAge: onChangeAge,
        data: formData,
        isLoading: isLoading,
        error: error,
        readonly: readonly,
        onChangeCity: onChangeCity,
        onChangeFirtsname: onChangeFirtsname,
        onChangeLastname: onChangeLastname,
        onChangeUsername: onChangeUsername,
        onChangeAvatar: onChangeAvatar,
        onChangeCurrency: onChangeCurrency,
        onChangeCountry: onChangeCountry
      }, void 0)]
    }), void 0)
  }), void 0);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

/***/ }),

/***/ "./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.tsx":
/*!**************************************************************************!*\
  !*** ./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageHeader: () => (/* binding */ ProfilePageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var _ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfilePageHeader.module.scss */ "./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var entities_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! entities/Profile */ "./src/entities/Profile/index.ts");
/* harmony import */ var shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/lib/hooks/AppDispatch/AppDispatch */ "./src/shared/lib/hooks/AppDispatch/AppDispatch.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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









var ProfilePageHeader = function ProfilePageHeader(_a) {
  var className = _a.className;
  var readonly = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(entities_Profile__WEBPACK_IMPORTED_MODULE_6__.getProfileReadonly);
  var dispatch = (0,shared_lib_hooks_AppDispatch_AppDispatch__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();
  var onEdit = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function () {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_6__.profileActions.setReadonly(false));
  }, [dispatch]);
  var onCancelEdit = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function () {
    dispatch(entities_Profile__WEBPACK_IMPORTED_MODULE_6__.profileActions.cancelEdit());
  }, [dispatch]);
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function () {
    dispatch((0,entities_Profile__WEBPACK_IMPORTED_MODULE_6__.updateProfileData)());
  }, [dispatch]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ProfilePageHeader, {}, [className])
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: _ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].header
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_4__.Text, {
        title: "profile"
      }, void 0), readonly ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({
        className: _ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].editBtn,
        theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.ThemeButton.OUTLINE,
        onClick: onEdit
      }, {
        children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
      }), void 0) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({
          className: _ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].editBtn,
          theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.ThemeButton.OUTLINE_RED,
          onClick: onCancelEdit
        }, {
          children: "\u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
        }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({
          className: _ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].saveBtn,
          theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.ThemeButton.OUTLINE,
          onClick: onSave
        }, {
          children: "\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
        }), void 0)]
      }, void 0)]
    }), void 0)
  }), void 0);
};

/***/ }),

/***/ "./src/shared/ui/Avatar/Avatar.tsx":
/*!*****************************************!*\
  !*** ./src/shared/ui/Avatar/Avatar.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var _Avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar.module.scss */ "./src/shared/ui/Avatar/Avatar.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var Avatar = function Avatar(_a) {
  var className = _a.className,
    src = _a.src,
    size = _a.size,
    alt = _a.alt;
  var styles = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return {
      width: size || 100,
      height: size || 100
    };
  }, [size]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
    src: src,
    style: styles,
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Avatar, {}, [className]),
    alt: alt
  }, void 0);
};

/***/ }),

/***/ "./src/shared/ui/Select/Select.tsx":
/*!*****************************************!*\
  !*** ./src/shared/ui/Select/Select.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/className */ "./src/shared/lib/classNames/className.ts");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Select.module.scss */ "./src/shared/ui/Select/Select.module.scss");
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




var Select = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function (_a) {
  var className = _a.className,
    label = _a.label,
    options = _a.options,
    value = _a.value,
    onChange = _a.onChange,
    readonly = _a.readonly;
  var mods = {
    // [cls.]
  };
  var onChangeHandler = function onChangeHandler(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
  };
  var optionList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return options === null || options === void 0 ? void 0 : options.map(function (opt) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", __assign({
        className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].option,
        value: opt.value
      }, {
        children: opt.content
      }), opt.value);
    });
  }, [options]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Select_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Wrapper, mods, [className])
  }, {
    children: [label && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
    }, {
      children: "".concat(label, ">")
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", __assign({
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].select,
      value: value,
      onChange: onChangeHandler,
      disabled: readonly
    }, {
      children: optionList
    }), void 0)]
  }), void 0);
});

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

.src-entities-Profile-ui-ProfileCard-ProfileCard-module__input--ZTyX8 {
  margin-top: 10px;
}

.src-entities-Profile-ui-ProfileCard-ProfileCard-module__loading--t07Zx {
  display: flex;
  align-items: center;
  justify-content: center;
}

.src-entities-Profile-ui-ProfileCard-ProfileCard-module__error--i5YK3 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.src-entities-Profile-ui-ProfileCard-ProfileCard-module__avatarWrapper--bEFNS {
  display: flex;
  justify-content: center;
}

.src-entities-Profile-ui-ProfileCard-ProfileCard-module__editing--DjTe7 {
  border: 2px solid var(--inverted-primary-color);
}`, "",{"version":3,"sources":["webpack://./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,0CAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AACA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AAEJ;;AAAA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AAGJ;;AADA;EACI,aAAA;EACA,uBAAA;AAIJ;;AAFA;EACI,+CAAA;AAKJ","sourcesContent":[".ProfileCard {\r\n    padding: 20px;\r\n    border: 2px solid var(--inverted-bg-color);\r\n}\r\n\r\n.input {\r\n    margin-top: 10px;\r\n}\r\n.loading {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.error {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.avatarWrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.editing {\r\n    border: 2px solid var(--inverted-primary-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProfileCard": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__ProfileCard--wW9jg`,
	"input": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__input--ZTyX8`,
	"loading": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__loading--t07Zx`,
	"error": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__error--i5YK3`,
	"avatarWrapper": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__avatarWrapper--bEFNS`,
	"editing": `src-entities-Profile-ui-ProfileCard-ProfileCard-module__editing--DjTe7`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss ***!
  \*******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__ProfilePageHeader--FPJSg {
  margin-bottom: 20px;
}
.src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__ProfilePageHeader--FPJSg .src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__header--BhPkj {
  display: flex;
}
.src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__ProfilePageHeader--FPJSg .src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__editBtn--vP5lJ {
  margin-left: auto;
  margin-right: 10px;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;AAAI;EACI,aAAA;AAER;AAAI;EACI,iBAAA;EACA,kBAAA;AAER","sourcesContent":[".ProfilePageHeader {\r\n    margin-bottom: 20px;\r\n    .header {\r\n        display: flex;\r\n    }\r\n    .editBtn {\r\n        margin-left: auto;\r\n        margin-right: 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProfilePageHeader": `src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__ProfilePageHeader--FPJSg`,
	"header": `src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__header--BhPkj`,
	"editBtn": `src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__editBtn--vP5lJ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss ***!
  \**********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-Avatar-Avatar-module__Avatar--ZqPdw {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Avatar/Avatar.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,aAAA;EACA,YAAA;AACJ","sourcesContent":[".Avatar{\r\n    border-radius: 50%;\r\n    height: 100px;\r\n    width: 100px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Avatar": `src-shared-ui-Avatar-Avatar-module__Avatar--ZqPdw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss ***!
  \**********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-Select-Select-module__Wrapper--cidfd {
  display: flex;
}

.src-shared-ui-Select-Select-module__label--G1uuf {
  margin-right: 5px;
}

.src-shared-ui-Select-Select-module__select--VOKOu {
  background: none;
  outline: none;
  color: var(--primary-color);
  padding-right: 2px 10px 2px 2px;
  border: 1px solid var(--primary-color);
}

.src-shared-ui-Select-Select-module__option--JkXz9 {
  color: var(--inverted-primary-color);
  background: var(--inverted-bg-color);
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Select/Select.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AACA;EACI,iBAAA;AAEJ;;AAAA;EACI,gBAAA;EACA,aAAA;EACA,2BAAA;EACA,+BAAA;EACA,sCAAA;AAGJ;;AADA;EACI,oCAAA;EACA,oCAAA;AAIJ","sourcesContent":[".Wrapper {\r\n    display: flex;\r\n}\r\n.label {\r\n    margin-right: 5px;\r\n}\r\n.select {\r\n    background: none;\r\n    outline: none;\r\n    color: var(--primary-color);\r\n    padding-right: 2px 10px 2px 2px;\r\n    border: 1px solid var(--primary-color);\r\n}\r\n.option{\r\n    color: var(--inverted-primary-color);\r\n    background: var(--inverted-bg-color);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Wrapper": `src-shared-ui-Select-Select-module__Wrapper--cidfd`,
	"label": `src-shared-ui-Select-Select-module__label--G1uuf`,
	"select": `src-shared-ui-Select-Select-module__select--VOKOu`,
	"option": `src-shared-ui-Select-Select-module__option--JkXz9`
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

/***/ "./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss ***!
  \**********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePageHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePageHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePageHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/Avatar/Avatar.module.scss":
/*!*************************************************!*\
  !*** ./src/shared/ui/Avatar/Avatar.module.scss ***!
  \*************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Avatar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Avatar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Avatar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Avatar/Avatar.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/Select/Select.module.scss":
/*!*************************************************!*\
  !*** ./src/shared/ui/Select/Select.module.scss ***!
  \*************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Select.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Country/index.ts":
/*!***************************************!*\
  !*** ./src/entities/Country/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Country: () => (/* reexport safe */ _model_types_country__WEBPACK_IMPORTED_MODULE_1__.Country),
/* harmony export */   CountrySelect: () => (/* reexport safe */ _ui_CountrySelect_CountrySelect__WEBPACK_IMPORTED_MODULE_0__.CountrySelect)
/* harmony export */ });
/* harmony import */ var _ui_CountrySelect_CountrySelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/CountrySelect/CountrySelect */ "./src/entities/Country/ui/CountrySelect/CountrySelect.tsx");
/* harmony import */ var _model_types_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/types/country */ "./src/entities/Country/model/types/country.ts");




/***/ }),

/***/ "./src/entities/Country/model/types/country.ts":
/*!*****************************************************!*\
  !*** ./src/entities/Country/model/types/country.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Country: () => (/* binding */ Country)
/* harmony export */ });
var Country;
(function (Country) {
    Country["Russia"] = "Russia";
    Country["Armenia"] = "Armenia";
    Country["Belarus"] = "Belarus";
    Country["Ukraine"] = "Ukraine";
    Country["USA"] = "USA";
})(Country || (Country = {}));


/***/ }),

/***/ "./src/entities/Currency/index.ts":
/*!****************************************!*\
  !*** ./src/entities/Currency/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Currency: () => (/* reexport safe */ _model_types_currency__WEBPACK_IMPORTED_MODULE_1__.Currency),
/* harmony export */   CurrencySelect: () => (/* reexport safe */ _ui_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_0__.CurrencySelect)
/* harmony export */ });
/* harmony import */ var _ui_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/CurrencySelect/CurrencySelect */ "./src/entities/Currency/ui/CurrencySelect/CurrencySelect.tsx");
/* harmony import */ var _model_types_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/types/currency */ "./src/entities/Currency/model/types/currency.ts");




/***/ }),

/***/ "./src/entities/Currency/model/types/currency.ts":
/*!*******************************************************!*\
  !*** ./src/entities/Currency/model/types/currency.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Currency: () => (/* binding */ Currency)
/* harmony export */ });
var Currency;
(function (Currency) {
    Currency["RUB"] = "RUB";
    Currency["EUR"] = "EUR";
    Currency["USD"] = "USD";
})(Currency || (Currency = {}));


/***/ }),

/***/ "./src/entities/Profile/index.ts":
/*!***************************************!*\
  !*** ./src/entities/Profile/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileCard: () => (/* reexport safe */ _ui_ProfileCard_ProfileCard__WEBPACK_IMPORTED_MODULE_7__.ProfileCard),
/* harmony export */   fetchProfileData: () => (/* reexport safe */ _model_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_10__.fetchProfileData),
/* harmony export */   getProfileData: () => (/* reexport safe */ _model_selectors_getProfileData_getProfileData__WEBPACK_IMPORTED_MODULE_6__.getProfileData),
/* harmony export */   getProfileError: () => (/* reexport safe */ _model_selectors_getProfileError_getProfileError__WEBPACK_IMPORTED_MODULE_5__.getProfileError),
/* harmony export */   getProfileForm: () => (/* reexport safe */ _model_selectors_getProfileForm_getProfileForm__WEBPACK_IMPORTED_MODULE_2__.getProfileForm),
/* harmony export */   getProfileIsLoading: () => (/* reexport safe */ _model_selectors_getProfileIsLoading_getProfileIsLoading__WEBPACK_IMPORTED_MODULE_3__.getProfileIsLoading),
/* harmony export */   getProfileReadonly: () => (/* reexport safe */ _model_selectors_getProfileReadonly_getProfileReadonly__WEBPACK_IMPORTED_MODULE_4__.getProfileReadonly),
/* harmony export */   getProfileValidateError: () => (/* reexport safe */ _model_selectors_getProfileValidateError_getProfileValidateError__WEBPACK_IMPORTED_MODULE_0__.getProfileValidateError),
/* harmony export */   profileActions: () => (/* reexport safe */ _model_slice_ProfileSlice__WEBPACK_IMPORTED_MODULE_9__.profileActions),
/* harmony export */   profileReducer: () => (/* reexport safe */ _model_slice_ProfileSlice__WEBPACK_IMPORTED_MODULE_9__.profileReducer),
/* harmony export */   updateProfileData: () => (/* reexport safe */ _model_services_updateProfileData_updateProfileData__WEBPACK_IMPORTED_MODULE_1__.updateProfileData),
/* harmony export */   validateProfileError: () => (/* reexport safe */ _model_types_Profile__WEBPACK_IMPORTED_MODULE_8__.validateProfileError)
/* harmony export */ });
/* harmony import */ var _model_selectors_getProfileValidateError_getProfileValidateError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/selectors/getProfileValidateError/getProfileValidateError */ "./src/entities/Profile/model/selectors/getProfileValidateError/getProfileValidateError.ts");
/* harmony import */ var _model_services_updateProfileData_updateProfileData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/services/updateProfileData/updateProfileData */ "./src/entities/Profile/model/services/updateProfileData/updateProfileData.ts");
/* harmony import */ var _model_selectors_getProfileForm_getProfileForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/selectors/getProfileForm/getProfileForm */ "./src/entities/Profile/model/selectors/getProfileForm/getProfileForm.ts");
/* harmony import */ var _model_selectors_getProfileIsLoading_getProfileIsLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/selectors/getProfileIsLoading/getProfileIsLoading */ "./src/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading.ts");
/* harmony import */ var _model_selectors_getProfileReadonly_getProfileReadonly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/selectors/getProfileReadonly/getProfileReadonly */ "./src/entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly.ts");
/* harmony import */ var _model_selectors_getProfileError_getProfileError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/selectors/getProfileError/getProfileError */ "./src/entities/Profile/model/selectors/getProfileError/getProfileError.ts");
/* harmony import */ var _model_selectors_getProfileData_getProfileData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/selectors/getProfileData/getProfileData */ "./src/entities/Profile/model/selectors/getProfileData/getProfileData.ts");
/* harmony import */ var _ui_ProfileCard_ProfileCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/ProfileCard/ProfileCard */ "./src/entities/Profile/ui/ProfileCard/ProfileCard.tsx");
/* harmony import */ var _model_types_Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/types/Profile */ "./src/entities/Profile/model/types/Profile.ts");
/* harmony import */ var _model_slice_ProfileSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/slice/ProfileSlice */ "./src/entities/Profile/model/slice/ProfileSlice.ts");
/* harmony import */ var _model_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/services/fetchProfileData/fetchProfileData */ "./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts");













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

/***/ "./src/entities/Profile/model/selectors/getProfileForm/getProfileForm.ts":
/*!*******************************************************************************!*\
  !*** ./src/entities/Profile/model/selectors/getProfileForm/getProfileForm.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProfileForm: () => (/* binding */ getProfileForm)
/* harmony export */ });
var getProfileForm = function (state) { var _a; return (_a = state.profile) === null || _a === void 0 ? void 0 : _a.form; };


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

/***/ "./src/entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly.ts":
/*!***************************************************************************************!*\
  !*** ./src/entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProfileReadonly: () => (/* binding */ getProfileReadonly)
/* harmony export */ });
var getProfileReadonly = function (state) { var _a; return (_a = state.profile) === null || _a === void 0 ? void 0 : _a.readonly; };


/***/ }),

/***/ "./src/entities/Profile/model/selectors/getProfileValidateError/getProfileValidateError.ts":
/*!*************************************************************************************************!*\
  !*** ./src/entities/Profile/model/selectors/getProfileValidateError/getProfileValidateError.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProfileValidateError: () => (/* binding */ getProfileValidateError)
/* harmony export */ });
var getProfileValidateError = function (state) { var _a; return (_a = state.profile) === null || _a === void 0 ? void 0 : _a.validateErrors; };


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

/***/ "./src/entities/Profile/model/services/updateProfileData/updateProfileData.ts":
/*!************************************************************************************!*\
  !*** ./src/entities/Profile/model/services/updateProfileData/updateProfileData.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateProfileData: () => (/* binding */ updateProfileData)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _types_Profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/Profile */ "./src/entities/Profile/model/types/Profile.ts");
/* harmony import */ var _selectors_getProfileForm_getProfileForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors/getProfileForm/getProfileForm */ "./src/entities/Profile/model/selectors/getProfileForm/getProfileForm.ts");
/* harmony import */ var _validateProfileData_validateProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validateProfileData/validateProfile */ "./src/entities/Profile/model/services/validateProfileData/validateProfile.ts");
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




var updateProfileData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)("profile/updateProfileData", function (_, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, rejectWithValue, getState, formData, errors, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue, getState = thunkApi.getState;
                formData = (0,_selectors_getProfileForm_getProfileForm__WEBPACK_IMPORTED_MODULE_1__.getProfileForm)(getState());
                errors = (0,_validateProfileData_validateProfile__WEBPACK_IMPORTED_MODULE_2__.validateProfileData)(formData);
                if (errors.length) {
                    return [2 /*return*/, rejectWithValue(errors)];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.put("/profile", formData)];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                return [2 /*return*/, rejectWithValue([_types_Profile__WEBPACK_IMPORTED_MODULE_0__.validateProfileError.SERVER_ERROR])];
            case 4: return [2 /*return*/];
        }
    });
}); });


/***/ }),

/***/ "./src/entities/Profile/model/services/validateProfileData/validateProfile.ts":
/*!************************************************************************************!*\
  !*** ./src/entities/Profile/model/services/validateProfileData/validateProfile.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateProfileData: () => (/* binding */ validateProfileData)
/* harmony export */ });
/* harmony import */ var _types_Profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/Profile */ "./src/entities/Profile/model/types/Profile.ts");

var validateProfileData = function (profile) {
    if (!profile) {
        return [_types_Profile__WEBPACK_IMPORTED_MODULE_0__.validateProfileError.NO_DATA];
    }
    var first = profile.first, lastname = profile.lastname, age = profile.age, country = profile.country;
    var errors = [];
    if (!first || !lastname) {
        errors.push(_types_Profile__WEBPACK_IMPORTED_MODULE_0__.validateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(_types_Profile__WEBPACK_IMPORTED_MODULE_0__.validateProfileError.INCORRECT_AGE);
    }
    if (!country) {
        errors.push(_types_Profile__WEBPACK_IMPORTED_MODULE_0__.validateProfileError.INCORRECT_COUNTRY);
    }
    return errors;
};


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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetchProfileData/fetchProfileData */ "./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts");
/* harmony import */ var _services_updateProfileData_updateProfileData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/updateProfileData/updateProfileData */ "./src/entities/Profile/model/services/updateProfileData/updateProfileData.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var initialState = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};
var profileSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
    name: "profile",
    initialState: initialState,
    reducers: {
        setReadonly: function (state, action) {
            state.readonly = action.payload;
        },
        updateProfile: function (state, action) {
            state.form = __assign(__assign({}, state.form), action.payload);
        },
        cancelEdit: function (state) {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__.fetchProfileData.pending, function (state) {
            state.validateErrors = undefined;
            state.isLoading = true;
        })
            .addCase(_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__.fetchProfileData.fulfilled, function (state, action) {
            state.isLoading = true;
            state.data = action.payload;
            state.form = action.payload;
        })
            .addCase(_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__.fetchProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        })
            .addCase(_services_updateProfileData_updateProfileData__WEBPACK_IMPORTED_MODULE_1__.updateProfileData.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(_services_updateProfileData_updateProfileData__WEBPACK_IMPORTED_MODULE_1__.updateProfileData.fulfilled, function (state, action) {
            state.isLoading = true;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
        })
            .addCase(_services_updateProfileData_updateProfileData__WEBPACK_IMPORTED_MODULE_1__.updateProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});
// Action creators are generated for each case reducer function
var profileActions = profileSlice.actions;
var profileReducer = profileSlice.reducer;


/***/ }),

/***/ "./src/entities/Profile/model/types/Profile.ts":
/*!*****************************************************!*\
  !*** ./src/entities/Profile/model/types/Profile.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateProfileError: () => (/* binding */ validateProfileError)
/* harmony export */ });
var validateProfileError;
(function (validateProfileError) {
    validateProfileError["INCORRECT_USER_DATA"] = "INCORRECT_user_data";
    validateProfileError["INCORRECT_AGE"] = "INCORRECT_age";
    validateProfileError["INCORRECT_COUNTRY"] = "INCORRECT_country";
    validateProfileError["NO_DATA"] = "NO_DATA";
    validateProfileError["SERVER_ERROR"] = "SERVER_ERROR";
})(validateProfileError || (validateProfileError = {}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1Byb2ZpbGVQYWdlX3VpX1Byb2ZpbGVQYWdlX3RzeC5jOTllMmExZjFkNzE2ZGJkZDRlNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDZTtBQUNyQjtBQUNtQjtBQUNaO0FBQ2pELElBQUlPLE9BQU8sR0FBRyxDQUNWO0VBQUVDLEtBQUssRUFBRU4seUVBQU8sQ0FBQ08sT0FBTztFQUFFQyxPQUFPLEVBQUVSLHlFQUFPLENBQUNPO0FBQVEsQ0FBQyxFQUNwRDtFQUFFRCxLQUFLLEVBQUVOLHlFQUFPLENBQUNTLE9BQU87RUFBRUQsT0FBTyxFQUFFUix5RUFBTyxDQUFDUztBQUFRLENBQUMsRUFDcEQ7RUFBRUgsS0FBSyxFQUFFTix5RUFBTyxDQUFDVSxNQUFNO0VBQUVGLE9BQU8sRUFBRVIseUVBQU8sQ0FBQ1U7QUFBTyxDQUFDLEVBQ2xEO0VBQUVKLEtBQUssRUFBRU4seUVBQU8sQ0FBQ1csR0FBRztFQUFFSCxPQUFPLEVBQUVSLHlFQUFPLENBQUNXO0FBQUksQ0FBQyxFQUM1QztFQUFFTCxLQUFLLEVBQUVOLHlFQUFPLENBQUNZLE9BQU87RUFBRUosT0FBTyxFQUFFUix5RUFBTyxDQUFDWTtBQUFRLENBQUMsQ0FDdkQ7QUFDTSxJQUFJQyxhQUFhLGdCQUFHWiwyQ0FBSSxDQUFDLFVBQVVhLEVBQUUsRUFBRTtFQUMxQyxJQUFJQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ0MsU0FBUztJQUFFVCxLQUFLLEdBQUdRLEVBQUUsQ0FBQ1IsS0FBSztJQUFFVSxRQUFRLEdBQUdGLEVBQUUsQ0FBQ0UsUUFBUTtJQUFFQyxRQUFRLEdBQUdILEVBQUUsQ0FBQ0csUUFBUTtFQUM5RixJQUFJQyxlQUFlLEdBQUdoQixrREFBVyxDQUFDLFVBQVVJLEtBQUssRUFBRTtJQUMvQ1UsUUFBUSxLQUFLLElBQUksSUFBSUEsUUFBUSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxRQUFRLENBQUNWLEtBQUssQ0FBQztFQUN2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TUFBRVYsUUFBUSxFQUFFaEUsc0RBQUksQ0FBQ2dELDJEQUFNLEVBQUU7UUFBRTJCLEdBQUcsRUFBRXZCLElBQUksS0FBSyxJQUFJLElBQUlBLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsSUFBSSxDQUFDcUIsTUFBTTtRQUFFRyxHQUFHLEVBQUU7TUFBUyxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUUsRUFBRW5DLHVEQUFLLENBQUMsS0FBSyxFQUFFZixRQUFRLENBQUM7TUFBRVYsU0FBUyxFQUFFMEIsZ0VBQUcsQ0FBQ1U7SUFBSyxDQUFDLEVBQUU7TUFBRVksUUFBUSxFQUFFLENBQUNoRSxzREFBSSxDQUFDOEMsd0RBQUssRUFBRTtRQUFFOUIsU0FBUyxFQUFFMEIsZ0VBQUcsQ0FBQ21DLElBQUk7UUFBRXRFLEtBQUssRUFBRTZDLElBQUksS0FBSyxJQUFJLElBQUlBLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsSUFBSSxDQUFDMEIsS0FBSztRQUFFQyxXQUFXLEVBQUUsV0FBVztRQUFFOUQsUUFBUSxFQUFFdUMsaUJBQWlCO1FBQUV0QyxRQUFRLEVBQUVBO01BQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUVsQixzREFBSSxDQUFDOEMsd0RBQUssRUFBRTtRQUFFOUIsU0FBUyxFQUFFMEIsZ0VBQUcsQ0FBQ21DLElBQUk7UUFBRXRFLEtBQUssRUFBRTZDLElBQUksS0FBSyxJQUFJLElBQUlBLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsSUFBSSxDQUFDNEIsUUFBUTtRQUFFRCxXQUFXLEVBQUUsZUFBZTtRQUFFOUQsUUFBUSxFQUFFc0MsZ0JBQWdCO1FBQUVyQyxRQUFRLEVBQUVBO01BQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUVsQixzREFBSSxDQUFDOEMsd0RBQUssRUFBRTtRQUFFOUIsU0FBUyxFQUFFMEIsZ0VBQUcsQ0FBQ21D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QUNBLFNBQVM7QUFDVDtBQUNBLDZDQUE2QztBQUM3QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQkFBcUIseUZBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUJBQXFCLHlGQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUJBQXFCLHlGQUFnQjtBQUNyQztBQUNBO0FBQ0EsU0FBUztBQUNULHFCQUFxQiw0RkFBaUI7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQkFBcUIsNEZBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFCQUFxQiw0RkFBaUI7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ087QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL0NvdW50cnkvdWkvQ291bnRyeVNlbGVjdC9Db3VudHJ5U2VsZWN0LnRzeCIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL0N1cnJlbmN5L3VpL0N1cnJlbmN5U2VsZWN0L0N1cnJlbmN5U2VsZWN0LnRzeCIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvdWkvUHJvZmlsZUNhcmQvUHJvZmlsZUNhcmQudHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvcGFnZXMvUHJvZmlsZVBhZ2UvdWkvUHJvZmlsZVBhZ2UudHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvcGFnZXMvUHJvZmlsZVBhZ2UvdWkvUHJvZmlsZVBhZ2VIZWFkZXIvUHJvZmlsZVBhZ2VIZWFkZXIudHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvc2hhcmVkL3VpL0F2YXRhci9BdmF0YXIudHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvc2hhcmVkL3VpL1NlbGVjdC9TZWxlY3QudHN4Iiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS91aS9Qcm9maWxlQ2FyZC9Qcm9maWxlQ2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3BhZ2VzL1Byb2ZpbGVQYWdlL3VpL1Byb2ZpbGVQYWdlSGVhZGVyL1Byb2ZpbGVQYWdlSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvc2hhcmVkL3VpL0F2YXRhci9BdmF0YXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvdWkvU2VsZWN0L1NlbGVjdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvdWkvUHJvZmlsZUNhcmQvUHJvZmlsZUNhcmQubW9kdWxlLnNjc3M/NmUxMCIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL3BhZ2VzL1Byb2ZpbGVQYWdlL3VpL1Byb2ZpbGVQYWdlSGVhZGVyL1Byb2ZpbGVQYWdlSGVhZGVyLm1vZHVsZS5zY3NzP2RkNGYiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9zaGFyZWQvdWkvQXZhdGFyL0F2YXRhci5tb2R1bGUuc2Nzcz84NGIwIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvc2hhcmVkL3VpL1NlbGVjdC9TZWxlY3QubW9kdWxlLnNjc3M/NzdkOSIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL0NvdW50cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9lbnRpdGllcy9Db3VudHJ5L21vZGVsL3R5cGVzL2NvdW50cnkudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9lbnRpdGllcy9DdXJyZW5jeS9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL0N1cnJlbmN5L21vZGVsL3R5cGVzL2N1cnJlbmN5LnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVEYXRhL2dldFByb2ZpbGVEYXRhLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZUVycm9yL2dldFByb2ZpbGVFcnJvci50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVGb3JtL2dldFByb2ZpbGVGb3JtLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZUlzTG9hZGluZy9nZXRQcm9maWxlSXNMb2FkaW5nLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZVJlYWRvbmx5L2dldFByb2ZpbGVSZWFkb25seS50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVWYWxpZGF0ZUVycm9yL2dldFByb2ZpbGVWYWxpZGF0ZUVycm9yLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZXJ2aWNlcy9mZXRjaFByb2ZpbGVEYXRhL2ZldGNoUHJvZmlsZURhdGEudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9lbnRpdGllcy9Qcm9maWxlL21vZGVsL3NlcnZpY2VzL3VwZGF0ZVByb2ZpbGVEYXRhL3VwZGF0ZVByb2ZpbGVEYXRhLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZXJ2aWNlcy92YWxpZGF0ZVByb2ZpbGVEYXRhL3ZhbGlkYXRlUHJvZmlsZS50cyIsIndlYnBhY2s6Ly9wcm9kdWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvbW9kZWwvc2xpY2UvUHJvZmlsZVNsaWNlLnRzIiwid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC90eXBlcy9Qcm9maWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tIFwiZW50aXRpZXMvQ291bnRyeS9tb2RlbC90eXBlcy9jb3VudHJ5XCI7XHJcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwic2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZVwiO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwic2hhcmVkL3VpL1NlbGVjdC9TZWxlY3RcIjtcclxudmFyIG9wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiBDb3VudHJ5LkFybWVuaWEsIGNvbnRlbnQ6IENvdW50cnkuQXJtZW5pYSB9LFxyXG4gICAgeyB2YWx1ZTogQ291bnRyeS5CZWxhcnVzLCBjb250ZW50OiBDb3VudHJ5LkJlbGFydXMgfSxcclxuICAgIHsgdmFsdWU6IENvdW50cnkuUnVzc2lhLCBjb250ZW50OiBDb3VudHJ5LlJ1c3NpYSB9LFxyXG4gICAgeyB2YWx1ZTogQ291bnRyeS5VU0EsIGNvbnRlbnQ6IENvdW50cnkuVVNBIH0sXHJcbiAgICB7IHZhbHVlOiBDb3VudHJ5LlVrcmFpbmUsIGNvbnRlbnQ6IENvdW50cnkuVWtyYWluZSB9LFxyXG5dO1xyXG5leHBvcnQgdmFyIENvdW50cnlTZWxlY3QgPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgdmFsdWUgPSBfYS52YWx1ZSwgb25DaGFuZ2UgPSBfYS5vbkNoYW5nZSwgcmVhZG9ubHkgPSBfYS5yZWFkb25seTtcclxuICAgIHZhciBvbkNoYW5nZUhhbmRsZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfSwgW29uQ2hhbmdlXSk7XHJcbiAgICByZXR1cm4gKF9qc3goU2VsZWN0LCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLCB7fSwgW2NsYXNzTmFtZV0pLCBsYWJlbDogXCLRgdGC0YDQsNC90LBcIiwgb3B0aW9uczogb3B0aW9ucywgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogb25DaGFuZ2VIYW5kbGVyLCByZWFkb25seTogcmVhZG9ubHkgfSwgdm9pZCAwKSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gXCJlbnRpdGllcy9DdXJyZW5jeS9tb2RlbC90eXBlcy9jdXJyZW5jeVwiO1xyXG5pbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVcIjtcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcInNoYXJlZC91aS9TZWxlY3QvU2VsZWN0XCI7XHJcbnZhciBvcHRpb25zID0gW1xyXG4gICAgeyB2YWx1ZTogQ3VycmVuY3kuUlVCLCBjb250ZW50OiBDdXJyZW5jeS5SVUIgfSxcclxuICAgIHsgdmFsdWU6IEN1cnJlbmN5LkVVUiwgY29udGVudDogQ3VycmVuY3kuRVVSIH0sXHJcbiAgICB7IHZhbHVlOiBDdXJyZW5jeS5VU0QsIGNvbnRlbnQ6IEN1cnJlbmN5LlVTRCB9LFxyXG5dO1xyXG5leHBvcnQgdmFyIEN1cnJlbmN5U2VsZWN0ID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHZhbHVlID0gX2EudmFsdWUsIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2UsIHJlYWRvbmx5ID0gX2EucmVhZG9ubHk7XHJcbiAgICB2YXIgb25DaGFuZ2VIYW5kbGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIH0sIFtvbkNoYW5nZV0pO1xyXG4gICAgcmV0dXJuIChfanN4KFNlbGVjdCwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIiwge30sIFtjbGFzc05hbWVdKSwgbGFiZWw6IFwi0LLQsNC70Y7RgtCwXCIsIG9wdGlvbnM6IG9wdGlvbnMsIHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IG9uQ2hhbmdlSGFuZGxlciwgcmVhZG9ubHk6IHJlYWRvbmx5IH0sIHZvaWQgMCkpO1xyXG59KTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVcIjtcclxuaW1wb3J0IGNscyBmcm9tIFwiLi9Qcm9maWxlQ2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0QWxpZ24sIFRleHRUaGVtZSB9IGZyb20gXCJzaGFyZWQvdWkvVGV4dC9UZXh0XCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcInNoYXJlZC91aS9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwic2hhcmVkL3VpL0xvYWRlci9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSBcInNoYXJlZC91aS9BdmF0YXIvQXZhdGFyXCI7XHJcbmltcG9ydCB7IEN1cnJlbmN5U2VsZWN0IH0gZnJvbSBcImVudGl0aWVzL0N1cnJlbmN5XCI7XHJcbmltcG9ydCB7IENvdW50cnlTZWxlY3QgfSBmcm9tIFwiZW50aXRpZXMvQ291bnRyeVwiO1xyXG5leHBvcnQgdmFyIFByb2ZpbGVDYXJkID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgX2IsIF9jO1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgZGF0YSA9IF9hLmRhdGEsIGlzTG9hZGluZyA9IF9hLmlzTG9hZGluZywgZXJyb3IgPSBfYS5lcnJvciwgb25DaGFuZ2VMYXN0bmFtZSA9IF9hLm9uQ2hhbmdlTGFzdG5hbWUsIG9uQ2hhbmdlRmlydHNuYW1lID0gX2Eub25DaGFuZ2VGaXJ0c25hbWUsIHJlYWRvbmx5ID0gX2EucmVhZG9ubHksIG9uQ2hhbmdlQWdlID0gX2Eub25DaGFuZ2VBZ2UsIG9uQ2hhbmdlQ2l0eSA9IF9hLm9uQ2hhbmdlQ2l0eSwgb25DaGFuZ2VVc2VybmFtZSA9IF9hLm9uQ2hhbmdlVXNlcm5hbWUsIG9uQ2hhbmdlQXZhdGFyID0gX2Eub25DaGFuZ2VBdmF0YXIsIG9uQ2hhbmdlQ3VycmVuY3kgPSBfYS5vbkNoYW5nZUN1cnJlbmN5LCBvbkNoYW5nZUNvdW50cnkgPSBfYS5vbkNoYW5nZUNvdW50cnk7XHJcbiAgICBpZiAoIWlzTG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuUHJvZmlsZUNhcmQsIChfYiA9IHt9LCBfYltjbHMubG9hZGluZ10gPSB0cnVlLCBfYiksIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRlciwge30sIHZvaWQgMCkgfSksIHZvaWQgMCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5Qcm9maWxlQ2FyZCwge30sIFtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIGNscy5lcnJvcixcclxuICAgICAgICAgICAgXSkgfSwgeyBjaGlsZHJlbjogX2pzeChUZXh0LCB7IHRpdGxlOiBcImVycm9yIHByb2ZpbGVcIiwgdGhlbWU6IFRleHRUaGVtZS5FUlJPUiwgdGV4dDogXCJyZWxvYWQgcGFnZVwiLCBhbGlnaW46IFRleHRBbGlnbi5DRU5URVIgfSwgdm9pZCAwKSB9KSwgdm9pZCAwKSk7XHJcbiAgICB9XHJcbiAgICB2YXIgbW9kcyA9IChfYyA9IHt9LFxyXG4gICAgICAgIF9jW2Nscy5lZGl0aW5nXSA9ICFyZWFkb25seSxcclxuICAgICAgICBfYyk7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5Qcm9maWxlQ2FyZCwgbW9kcywgW2NsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFsoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmF2YXRhcikgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5hdmF0YXJXcmFwcGVyIH0sIHsgY2hpbGRyZW46IF9qc3goQXZhdGFyLCB7IHNyYzogZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmF2YXRhciwgYWx0OiBcImF2YXRhclwiIH0sIHZvaWQgMCkgfSksIHZvaWQgMCkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLmRhdGEgfSwgeyBjaGlsZHJlbjogW19qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaXB1dCwgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5maXJzdCwgcGxhY2Vob2xkZXI6IFwieW91ciBuYW1lXCIsIG9uQ2hhbmdlOiBvbkNoYW5nZUZpcnRzbmFtZSwgcmVhZG9ubHk6IHJlYWRvbmx5IH0sIHZvaWQgMCksIF9qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaXB1dCwgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5sYXN0bmFtZSwgcGxhY2Vob2xkZXI6IFwieW91ciBsYXN0bmFtZVwiLCBvbkNoYW5nZTogb25DaGFuZ2VMYXN0bmFtZSwgcmVhZG9ubHk6IHJlYWRvbmx5IH0sIHZvaWQgMCksIF9qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaXB1dCwgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5hZ2UsIHBsYWNlaG9sZGVyOiBcInlvdXIgYWdlXCIsIG9uQ2hhbmdlOiBvbkNoYW5nZUFnZSwgcmVhZG9ubHk6IHJlYWRvbmx5IH0sIHZvaWQgMCksIF9qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaXB1dCwgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5jaXR5LCBwbGFjZWhvbGRlcjogXCJ5b3VyIGNpdHlcIiwgb25DaGFuZ2U6IG9uQ2hhbmdlQ2l0eSwgcmVhZG9ubHk6IHJlYWRvbmx5IH0sIHZvaWQgMCksIF9qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaXB1dCwgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS51c2VybmFtZSwgcGxhY2Vob2xkZXI6IFwieW91ciB1c2VybmFtZVwiLCBvbkNoYW5nZTogb25DaGFuZ2VVc2VybmFtZSwgcmVhZG9ubHk6IHJlYWRvbmx5IH0sIHZvaWQgMCksIF9qc3goSW5wdXQsIHsgY2xhc3NOYW1lOiBjbHMuaXB1dCwgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5hdmF0YXIsIHBsYWNlaG9sZGVyOiBcInlvdXIgYXZhdGFyXCIsIG9uQ2hhbmdlOiBvbkNoYW5nZUF2YXRhciwgcmVhZG9ubHk6IHJlYWRvbmx5IH0sIHZvaWQgMCksIF9qc3goQ3VycmVuY3lTZWxlY3QsIHsgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5jdXJyZW5jeSwgb25DaGFuZ2U6IG9uQ2hhbmdlQ3VycmVuY3ksIHJlYWRvbmx5OiByZWFkb25seSwgY2xhc3NOYW1lOiBjbHMuaW5wdXQgfSwgdm9pZCAwKSwgX2pzeChDb3VudHJ5U2VsZWN0LCB7IHZhbHVlOiBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuY291bnRyeSwgb25DaGFuZ2U6IG9uQ2hhbmdlQ291bnRyeSwgcmVhZG9ubHk6IHJlYWRvbmx5LCBjbGFzc05hbWU6IGNscy5pbnB1dCB9LCB2b2lkIDApXSB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xyXG59O1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmZXRjaFByb2ZpbGVEYXRhLCBnZXRQcm9maWxlRm9ybSwgZ2V0UHJvZmlsZVJlYWRvbmx5LCBnZXRQcm9maWxlVmFsaWRhdGVFcnJvciwgcHJvZmlsZUFjdGlvbnMsIFByb2ZpbGVDYXJkLCBwcm9maWxlUmVkdWNlciwgfSBmcm9tIFwiZW50aXRpZXMvUHJvZmlsZVwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCJzaGFyZWQvbGliL2hvb2tzL0FwcERpc3BhdGNoL0FwcERpc3BhdGNoXCI7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwic2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljTW9kdWxlTG9hZGVyLCB9IGZyb20gXCJzaGFyZWQvbGliL2NvbXBvbmVudHMvRHluYW1pY01vZHVsZUxvYWRlci9EeW5hbWljTW9kdWxlTG9hZGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldFByb2ZpbGVFcnJvciB9IGZyb20gXCJlbnRpdGllcy9Qcm9maWxlL21vZGVsL3NlbGVjdG9ycy9nZXRQcm9maWxlRXJyb3IvZ2V0UHJvZmlsZUVycm9yXCI7XHJcbmltcG9ydCB7IGdldFByb2ZpbGVJc0xvYWRpbmcgfSBmcm9tIFwiZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZUlzTG9hZGluZy9nZXRQcm9maWxlSXNMb2FkaW5nXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVQYWdlSGVhZGVyIH0gZnJvbSBcIi4vUHJvZmlsZVBhZ2VIZWFkZXIvUHJvZmlsZVBhZ2VIZWFkZXJcIjtcclxuaW1wb3J0IHsgVGV4dCwgVGV4dFRoZW1lIH0gZnJvbSBcInNoYXJlZC91aS9UZXh0L1RleHRcIjtcclxudmFyIHJlZHVjZXJzID0ge1xyXG4gICAgcHJvZmlsZTogcHJvZmlsZVJlZHVjZXIsXHJcbn07XHJcbnZhciBQcm9maWxlUGFnZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZTtcclxuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xyXG4gICAgdmFyIGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICAgIHZhciBmb3JtRGF0YSA9IHVzZVNlbGVjdG9yKGdldFByb2ZpbGVGb3JtKTtcclxuICAgIHZhciBlcnJvciA9IHVzZVNlbGVjdG9yKGdldFByb2ZpbGVFcnJvcik7XHJcbiAgICB2YXIgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoZ2V0UHJvZmlsZUlzTG9hZGluZyk7XHJcbiAgICB2YXIgcmVhZG9ubHkgPSB1c2VTZWxlY3RvcihnZXRQcm9maWxlUmVhZG9ubHkpO1xyXG4gICAgdmFyIHZhbGlkYXRlRXJyb3JzID0gdXNlU2VsZWN0b3IoZ2V0UHJvZmlsZVZhbGlkYXRlRXJyb3IpO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2ZpbGVEYXRhKCkpO1xyXG4gICAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgICB2YXIgb25DaGFuZ2VGaXJ0c25hbWUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBkaXNwYXRjaChwcm9maWxlQWN0aW9ucy51cGRhdGVQcm9maWxlKHsgZmlyc3Q6IHZhbHVlIHx8IFwiXCIgfSkpO1xyXG4gICAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgICB2YXIgb25DaGFuZ2VMYXN0bmFtZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHByb2ZpbGVBY3Rpb25zLnVwZGF0ZVByb2ZpbGUoeyBsYXN0bmFtZTogdmFsdWUgfHwgXCJcIiB9KSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHZhciBvbkNoYW5nZUFnZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHByb2ZpbGVBY3Rpb25zLnVwZGF0ZVByb2ZpbGUoeyBhZ2U6IE51bWJlcih2YWx1ZSkgfHwgMCB9KSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHZhciBvbkNoYW5nZUNpdHkgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBkaXNwYXRjaChwcm9maWxlQWN0aW9ucy51cGRhdGVQcm9maWxlKHsgY2l0eTogdmFsdWUgfHwgXCJcIiB9KSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHZhciBvbkNoYW5nZVVzZXJuYW1lID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHJvZmlsZUFjdGlvbnMudXBkYXRlUHJvZmlsZSh7IHVzZXJuYW1lOiB2YWx1ZSB8fCBcIlwiIH0pKTtcclxuICAgIH0sIFtkaXNwYXRjaF0pO1xyXG4gICAgdmFyIG9uQ2hhbmdlQXZhdGFyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHJvZmlsZUFjdGlvbnMudXBkYXRlUHJvZmlsZSh7IGF2YXRhcjogdmFsdWUgfHwgXCJcIiB9KSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHZhciBvbkNoYW5nZUN1cnJlbmN5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGN1cnJlbmN5KSB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHJvZmlsZUFjdGlvbnMudXBkYXRlUHJvZmlsZSh7IGN1cnJlbmN5OiBjdXJyZW5jeSB9KSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHZhciBvbkNoYW5nZUNvdW50cnkgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHByb2ZpbGVBY3Rpb25zLnVwZGF0ZVByb2ZpbGUoeyBjb3VudHJ5OiBjb3VudHJ5IH0pKTtcclxuICAgIH0sIFtkaXNwYXRjaF0pO1xyXG4gICAgcmV0dXJuIChfanN4KER5bmFtaWNNb2R1bGVMb2FkZXIsIF9fYXNzaWduKHsgcmVkdWNlcnM6IHJlZHVjZXJzLCByZW1vdmVBZnRlclVubW91bnQ6IHRydWUgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIiwge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChQcm9maWxlUGFnZUhlYWRlciwge30sIHZvaWQgMCksICh2YWxpZGF0ZUVycm9ycyA9PT0gbnVsbCB8fCB2YWxpZGF0ZUVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsaWRhdGVFcnJvcnMubGVuZ3RoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiAoX2pzeChUZXh0LCB7IHRoZW1lOiBUZXh0VGhlbWUuRVJST1IsIHRleHQ6IGVyciB9LCBlcnIpKTsgfSksIF9qc3goUHJvZmlsZUNhcmQsIHsgb25DaGFuZ2VBZ2U6IG9uQ2hhbmdlQWdlLCBkYXRhOiBmb3JtRGF0YSwgaXNMb2FkaW5nOiBpc0xvYWRpbmcsIGVycm9yOiBlcnJvciwgcmVhZG9ubHk6IHJlYWRvbmx5LCBvbkNoYW5nZUNpdHk6IG9uQ2hhbmdlQ2l0eSwgb25DaGFuZ2VGaXJ0c25hbWU6IG9uQ2hhbmdlRmlydHNuYW1lLCBvbkNoYW5nZUxhc3RuYW1lOiBvbkNoYW5nZUxhc3RuYW1lLCBvbkNoYW5nZVVzZXJuYW1lOiBvbkNoYW5nZVVzZXJuYW1lLCBvbkNoYW5nZUF2YXRhcjogb25DaGFuZ2VBdmF0YXIsIG9uQ2hhbmdlQ3VycmVuY3k6IG9uQ2hhbmdlQ3VycmVuY3ksIG9uQ2hhbmdlQ291bnRyeTogb25DaGFuZ2VDb3VudHJ5IH0sIHZvaWQgMCldIH0pLCB2b2lkIDApIH0pLCB2b2lkIDApKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVcIjtcclxuaW1wb3J0IGNscyBmcm9tIFwiLi9Qcm9maWxlUGFnZUhlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRoZW1lQnV0dG9uIH0gZnJvbSBcInNoYXJlZC91aS9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwic2hhcmVkL3VpL1RleHQvVGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlUmVhZG9ubHksIHByb2ZpbGVBY3Rpb25zLCB1cGRhdGVQcm9maWxlRGF0YSB9IGZyb20gXCJlbnRpdGllcy9Qcm9maWxlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcInNoYXJlZC9saWIvaG9va3MvQXBwRGlzcGF0Y2gvQXBwRGlzcGF0Y2hcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IHZhciBQcm9maWxlUGFnZUhlYWRlciA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZTtcclxuICAgIHZhciByZWFkb25seSA9IHVzZVNlbGVjdG9yKGdldFByb2ZpbGVSZWFkb25seSk7XHJcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gICAgdmFyIG9uRWRpdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwYXRjaChwcm9maWxlQWN0aW9ucy5zZXRSZWFkb25seShmYWxzZSkpO1xyXG4gICAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgICB2YXIgb25DYW5jZWxFZGl0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHByb2ZpbGVBY3Rpb25zLmNhbmNlbEVkaXQoKSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHZhciBvblNhdmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlUHJvZmlsZURhdGEoKSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuUHJvZmlsZVBhZ2VIZWFkZXIsIHt9LCBbY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5oZWFkZXIgfSwgeyBjaGlsZHJlbjogW19qc3goVGV4dCwgeyB0aXRsZTogXCJwcm9maWxlXCIgfSwgdm9pZCAwKSwgcmVhZG9ubHkgPyAoX2pzeChCdXR0b24sIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuZWRpdEJ0biwgdGhlbWU6IFRoZW1lQnV0dG9uLk9VVExJTkUsIG9uQ2xpY2s6IG9uRWRpdCB9LCB7IGNoaWxkcmVuOiBcIlxcdTA0MjBcXHUwNDM1XFx1MDQzNFxcdTA0MzBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0NENcIiB9KSwgdm9pZCAwKSkgOiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChCdXR0b24sIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuZWRpdEJ0biwgdGhlbWU6IFRoZW1lQnV0dG9uLk9VVExJTkVfUkVELCBvbkNsaWNrOiBvbkNhbmNlbEVkaXQgfSwgeyBjaGlsZHJlbjogXCJcXHUwNDNFXFx1MDQ0MlxcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1wiIH0pLCB2b2lkIDApLCBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5zYXZlQnRuLCB0aGVtZTogVGhlbWVCdXR0b24uT1VUTElORSwgb25DbGljazogb25TYXZlIH0sIHsgY2hpbGRyZW46IFwiXFx1MDQ0MVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIgfSksIHZvaWQgMCldIH0sIHZvaWQgMCkpXSB9KSwgdm9pZCAwKSB9KSwgdm9pZCAwKSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwic2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZVwiO1xyXG5pbXBvcnQgY2xzIGZyb20gXCIuL0F2YXRhci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCB2YXIgQXZhdGFyID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBzcmMgPSBfYS5zcmMsIHNpemUgPSBfYS5zaXplLCBhbHQgPSBfYS5hbHQ7XHJcbiAgICB2YXIgc3R5bGVzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd2lkdGg6IHNpemUgfHwgMTAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemUgfHwgMTAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbc2l6ZV0pO1xyXG4gICAgcmV0dXJuIChfanN4KFwiaW1nXCIsIHsgc3JjOiBzcmMsIHN0eWxlOiBzdHlsZXMsIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuQXZhdGFyLCB7fSwgW2NsYXNzTmFtZV0pLCBhbHQ6IGFsdCB9LCB2b2lkIDApKTtcclxufTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVcIjtcclxuaW1wb3J0IGNscyBmcm9tIFwiLi9TZWxlY3QubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgbWVtbywgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgdmFyIFNlbGVjdCA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBsYWJlbCA9IF9hLmxhYmVsLCBvcHRpb25zID0gX2Eub3B0aW9ucywgdmFsdWUgPSBfYS52YWx1ZSwgb25DaGFuZ2UgPSBfYS5vbkNoYW5nZSwgcmVhZG9ubHkgPSBfYS5yZWFkb25seTtcclxuICAgIHZhciBtb2RzID0ge1xyXG4gICAgLy8gW2Nscy5dXHJcbiAgICB9O1xyXG4gICAgdmFyIG9uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICB2YXIgb3B0aW9uTGlzdCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIChfanN4KFwib3B0aW9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMub3B0aW9uLCB2YWx1ZTogb3B0LnZhbHVlIH0sIHsgY2hpbGRyZW46IG9wdC5jb250ZW50IH0pLCBvcHQudmFsdWUpKTsgfSk7XHJcbiAgICB9LCBbb3B0aW9uc10pO1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuV3JhcHBlciwgbW9kcywgW2NsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFtsYWJlbCAmJiBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLmxhYmVsIH0sIHsgY2hpbGRyZW46IFwiXCIuY29uY2F0KGxhYmVsLCBcIj5cIikgfSksIHZvaWQgMCksIF9qc3goXCJzZWxlY3RcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5zZWxlY3QsIHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IG9uQ2hhbmdlSGFuZGxlciwgZGlzYWJsZWQ6IHJlYWRvbmx5IH0sIHsgY2hpbGRyZW46IG9wdGlvbkxpc3QgfSksIHZvaWQgMCldIH0pLCB2b2lkIDApKTtcclxufSk7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19Qcm9maWxlQ2FyZC0td1c5amcge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XG59XG5cbi5zcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2lucHV0LS1aVHlYOCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2xvYWRpbmctLXQwN1p4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2Vycm9yLS1pNVlLMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19hdmF0YXJXcmFwcGVyLS1iRUZOUyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19lZGl0aW5nLS1EalRlNyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWludmVydGVkLXByaW1hcnktY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvdWkvUHJvZmlsZUNhcmQvUHJvZmlsZUNhcmQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUlKOztBQUZBO0VBQ0ksK0NBQUE7QUFLSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuUHJvZmlsZUNhcmQge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcbi5sb2FkaW5nIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5lcnJvciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uYXZhdGFyV3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZWRpdGluZyB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWludmVydGVkLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJQcm9maWxlQ2FyZFwiOiBgc3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19Qcm9maWxlQ2FyZC0td1c5amdgLFxuXHRcImlucHV0XCI6IGBzcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2lucHV0LS1aVHlYOGAsXG5cdFwibG9hZGluZ1wiOiBgc3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19sb2FkaW5nLS10MDdaeGAsXG5cdFwiZXJyb3JcIjogYHNyYy1lbnRpdGllcy1Qcm9maWxlLXVpLVByb2ZpbGVDYXJkLVByb2ZpbGVDYXJkLW1vZHVsZV9fZXJyb3ItLWk1WUszYCxcblx0XCJhdmF0YXJXcmFwcGVyXCI6IGBzcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2F2YXRhcldyYXBwZXItLWJFRk5TYCxcblx0XCJlZGl0aW5nXCI6IGBzcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2VkaXRpbmctLURqVGU3YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtcGFnZXMtUHJvZmlsZVBhZ2UtdWktUHJvZmlsZVBhZ2VIZWFkZXItUHJvZmlsZVBhZ2VIZWFkZXItbW9kdWxlX19Qcm9maWxlUGFnZUhlYWRlci0tRlBKU2cge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNyYy1wYWdlcy1Qcm9maWxlUGFnZS11aS1Qcm9maWxlUGFnZUhlYWRlci1Qcm9maWxlUGFnZUhlYWRlci1tb2R1bGVfX1Byb2ZpbGVQYWdlSGVhZGVyLS1GUEpTZyAuc3JjLXBhZ2VzLVByb2ZpbGVQYWdlLXVpLVByb2ZpbGVQYWdlSGVhZGVyLVByb2ZpbGVQYWdlSGVhZGVyLW1vZHVsZV9faGVhZGVyLS1CaFBraiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc3JjLXBhZ2VzLVByb2ZpbGVQYWdlLXVpLVByb2ZpbGVQYWdlSGVhZGVyLVByb2ZpbGVQYWdlSGVhZGVyLW1vZHVsZV9fUHJvZmlsZVBhZ2VIZWFkZXItLUZQSlNnIC5zcmMtcGFnZXMtUHJvZmlsZVBhZ2UtdWktUHJvZmlsZVBhZ2VIZWFkZXItUHJvZmlsZVBhZ2VIZWFkZXItbW9kdWxlX19lZGl0QnRuLS12UDVsSiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvUHJvZmlsZVBhZ2UvdWkvUHJvZmlsZVBhZ2VIZWFkZXIvUHJvZmlsZVBhZ2VIZWFkZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFFUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuUHJvZmlsZVBhZ2VIZWFkZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmVkaXRCdG4ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiUHJvZmlsZVBhZ2VIZWFkZXJcIjogYHNyYy1wYWdlcy1Qcm9maWxlUGFnZS11aS1Qcm9maWxlUGFnZUhlYWRlci1Qcm9maWxlUGFnZUhlYWRlci1tb2R1bGVfX1Byb2ZpbGVQYWdlSGVhZGVyLS1GUEpTZ2AsXG5cdFwiaGVhZGVyXCI6IGBzcmMtcGFnZXMtUHJvZmlsZVBhZ2UtdWktUHJvZmlsZVBhZ2VIZWFkZXItUHJvZmlsZVBhZ2VIZWFkZXItbW9kdWxlX19oZWFkZXItLUJoUGtqYCxcblx0XCJlZGl0QnRuXCI6IGBzcmMtcGFnZXMtUHJvZmlsZVBhZ2UtdWktUHJvZmlsZVBhZ2VIZWFkZXItUHJvZmlsZVBhZ2VIZWFkZXItbW9kdWxlX19lZGl0QnRuLS12UDVsSmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXNoYXJlZC11aS1BdmF0YXItQXZhdGFyLW1vZHVsZV9fQXZhdGFyLS1acVBkdyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9BdmF0YXIvQXZhdGFyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BdmF0YXJ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJBdmF0YXJcIjogYHNyYy1zaGFyZWQtdWktQXZhdGFyLUF2YXRhci1tb2R1bGVfX0F2YXRhci0tWnFQZHdgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1zaGFyZWQtdWktU2VsZWN0LVNlbGVjdC1tb2R1bGVfX1dyYXBwZXItLWNpZGZkIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNyYy1zaGFyZWQtdWktU2VsZWN0LVNlbGVjdC1tb2R1bGVfX2xhYmVsLS1HMXV1ZiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3JjLXNoYXJlZC11aS1TZWxlY3QtU2VsZWN0LW1vZHVsZV9fc2VsZWN0LS1WT0tPdSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgcGFkZGluZy1yaWdodDogMnB4IDEwcHggMnB4IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5zcmMtc2hhcmVkLXVpLVNlbGVjdC1TZWxlY3QtbW9kdWxlX19vcHRpb24tLUprWHo5IHtcbiAgY29sb3I6IHZhcigtLWludmVydGVkLXByaW1hcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL3VpL1NlbGVjdC9TZWxlY3QubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0FBR0o7O0FBREE7RUFDSSxvQ0FBQTtFQUNBLG9DQUFBO0FBSUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLldyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ubGFiZWwge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLnNlbGVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnB4IDEwcHggMnB4IDJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcbi5vcHRpb257XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1pbnZlcnRlZC1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJXcmFwcGVyXCI6IGBzcmMtc2hhcmVkLXVpLVNlbGVjdC1TZWxlY3QtbW9kdWxlX19XcmFwcGVyLS1jaWRmZGAsXG5cdFwibGFiZWxcIjogYHNyYy1zaGFyZWQtdWktU2VsZWN0LVNlbGVjdC1tb2R1bGVfX2xhYmVsLS1HMXV1ZmAsXG5cdFwic2VsZWN0XCI6IGBzcmMtc2hhcmVkLXVpLVNlbGVjdC1TZWxlY3QtbW9kdWxlX19zZWxlY3QtLVZPS091YCxcblx0XCJvcHRpb25cIjogYHNyYy1zaGFyZWQtdWktU2VsZWN0LVNlbGVjdC1tb2R1bGVfX29wdGlvbi0tSmtYejlgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9maWxlQ2FyZC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb2ZpbGVDYXJkLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb2ZpbGVDYXJkLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvZmlsZVBhZ2VIZWFkZXIubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9maWxlUGFnZUhlYWRlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9maWxlUGFnZUhlYWRlci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0F2YXRhci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0F2YXRhci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BdmF0YXIubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3QubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3QubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VsZWN0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IHsgQ291bnRyeVNlbGVjdCB9IGZyb20gXCIuL3VpL0NvdW50cnlTZWxlY3QvQ291bnRyeVNlbGVjdFwiO1xyXG5leHBvcnQgeyBDb3VudHJ5IH0gZnJvbSBcIi4vbW9kZWwvdHlwZXMvY291bnRyeVwiO1xyXG4iLCJleHBvcnQgdmFyIENvdW50cnk7XHJcbihmdW5jdGlvbiAoQ291bnRyeSkge1xyXG4gICAgQ291bnRyeVtcIlJ1c3NpYVwiXSA9IFwiUnVzc2lhXCI7XHJcbiAgICBDb3VudHJ5W1wiQXJtZW5pYVwiXSA9IFwiQXJtZW5pYVwiO1xyXG4gICAgQ291bnRyeVtcIkJlbGFydXNcIl0gPSBcIkJlbGFydXNcIjtcclxuICAgIENvdW50cnlbXCJVa3JhaW5lXCJdID0gXCJVa3JhaW5lXCI7XHJcbiAgICBDb3VudHJ5W1wiVVNBXCJdID0gXCJVU0FcIjtcclxufSkoQ291bnRyeSB8fCAoQ291bnRyeSA9IHt9KSk7XHJcbiIsImV4cG9ydCB7IEN1cnJlbmN5U2VsZWN0IH0gZnJvbSBcIi4vdWkvQ3VycmVuY3lTZWxlY3QvQ3VycmVuY3lTZWxlY3RcIjtcclxuZXhwb3J0IHsgQ3VycmVuY3kgfSBmcm9tIFwiLi9tb2RlbC90eXBlcy9jdXJyZW5jeVwiO1xyXG4iLCJleHBvcnQgdmFyIEN1cnJlbmN5O1xyXG4oZnVuY3Rpb24gKEN1cnJlbmN5KSB7XHJcbiAgICBDdXJyZW5jeVtcIlJVQlwiXSA9IFwiUlVCXCI7XHJcbiAgICBDdXJyZW5jeVtcIkVVUlwiXSA9IFwiRVVSXCI7XHJcbiAgICBDdXJyZW5jeVtcIlVTRFwiXSA9IFwiVVNEXCI7XHJcbn0pKEN1cnJlbmN5IHx8IChDdXJyZW5jeSA9IHt9KSk7XHJcbiIsImV4cG9ydCB7IGdldFByb2ZpbGVWYWxpZGF0ZUVycm9yIH0gZnJvbSBcIi4vbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVWYWxpZGF0ZUVycm9yL2dldFByb2ZpbGVWYWxpZGF0ZUVycm9yXCI7XHJcbmV4cG9ydCB7IHVwZGF0ZVByb2ZpbGVEYXRhIH0gZnJvbSBcIi4vbW9kZWwvc2VydmljZXMvdXBkYXRlUHJvZmlsZURhdGEvdXBkYXRlUHJvZmlsZURhdGFcIjtcclxuZXhwb3J0IHsgZ2V0UHJvZmlsZUZvcm0gfSBmcm9tIFwiLi9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZUZvcm0vZ2V0UHJvZmlsZUZvcm1cIjtcclxuZXhwb3J0IHsgZ2V0UHJvZmlsZUlzTG9hZGluZyB9IGZyb20gXCIuL21vZGVsL3NlbGVjdG9ycy9nZXRQcm9maWxlSXNMb2FkaW5nL2dldFByb2ZpbGVJc0xvYWRpbmdcIjtcclxuZXhwb3J0IHsgZ2V0UHJvZmlsZVJlYWRvbmx5IH0gZnJvbSBcIi4vbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVSZWFkb25seS9nZXRQcm9maWxlUmVhZG9ubHlcIjtcclxuZXhwb3J0IHsgZ2V0UHJvZmlsZUVycm9yIH0gZnJvbSBcIi4vbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVFcnJvci9nZXRQcm9maWxlRXJyb3JcIjtcclxuZXhwb3J0IHsgZ2V0UHJvZmlsZURhdGEgfSBmcm9tIFwiLi9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZURhdGEvZ2V0UHJvZmlsZURhdGFcIjtcclxuZXhwb3J0IHsgUHJvZmlsZUNhcmQgfSBmcm9tIFwiLi91aS9Qcm9maWxlQ2FyZC9Qcm9maWxlQ2FyZFwiO1xyXG5leHBvcnQgeyB2YWxpZGF0ZVByb2ZpbGVFcnJvciwgfSBmcm9tIFwiLi9tb2RlbC90eXBlcy9Qcm9maWxlXCI7XHJcbmV4cG9ydCB7IHByb2ZpbGVBY3Rpb25zLCBwcm9maWxlUmVkdWNlciB9IGZyb20gXCIuL21vZGVsL3NsaWNlL1Byb2ZpbGVTbGljZVwiO1xyXG5leHBvcnQgeyBmZXRjaFByb2ZpbGVEYXRhIH0gZnJvbSBcIi4vbW9kZWwvc2VydmljZXMvZmV0Y2hQcm9maWxlRGF0YS9mZXRjaFByb2ZpbGVEYXRhXCI7XHJcbiIsImV4cG9ydCB2YXIgZ2V0UHJvZmlsZURhdGEgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gc3RhdGUucHJvZmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGE7IH07XHJcbiIsImV4cG9ydCB2YXIgZ2V0UHJvZmlsZUVycm9yID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuIChfYSA9IHN0YXRlLnByb2ZpbGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lcnJvcjsgfTtcclxuIiwiZXhwb3J0IHZhciBnZXRQcm9maWxlRm9ybSA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2E7IHJldHVybiAoX2EgPSBzdGF0ZS5wcm9maWxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9ybTsgfTtcclxuIiwiZXhwb3J0IHZhciBnZXRQcm9maWxlSXNMb2FkaW5nID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuIChfYSA9IHN0YXRlLnByb2ZpbGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc0xvYWRpbmc7IH07XHJcbiIsImV4cG9ydCB2YXIgZ2V0UHJvZmlsZVJlYWRvbmx5ID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuIChfYSA9IHN0YXRlLnByb2ZpbGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZWFkb25seTsgfTtcclxuIiwiZXhwb3J0IHZhciBnZXRQcm9maWxlVmFsaWRhdGVFcnJvciA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2E7IHJldHVybiAoX2EgPSBzdGF0ZS5wcm9maWxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsaWRhdGVFcnJvcnM7IH07XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmV4cG9ydCB2YXIgZmV0Y2hQcm9maWxlRGF0YSA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb2ZpbGUvZmV0Y2hQcm9maWxlRGF0YScsIGZ1bmN0aW9uIChfLCB0aHVua0FwaSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRyYSwgcmVqZWN0V2l0aFZhbHVlLCByZXNwb25zZSwgZV8xO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgZXh0cmEgPSB0aHVua0FwaS5leHRyYSwgcmVqZWN0V2l0aFZhbHVlID0gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZXh0cmEuYXBpLmdldCgnL3Byb2ZpbGUnKV07XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlXzEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlamVjdFdpdGhWYWx1ZSgnZXJyb3InKV07XHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfSk7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgdmFsaWRhdGVQcm9maWxlRXJyb3IgfSBmcm9tIFwiLi4vLi4vdHlwZXMvUHJvZmlsZVwiO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlRm9ybSB9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnMvZ2V0UHJvZmlsZUZvcm0vZ2V0UHJvZmlsZUZvcm1cIjtcclxuaW1wb3J0IHsgdmFsaWRhdGVQcm9maWxlRGF0YSB9IGZyb20gXCIuLi92YWxpZGF0ZVByb2ZpbGVEYXRhL3ZhbGlkYXRlUHJvZmlsZVwiO1xyXG5leHBvcnQgdmFyIHVwZGF0ZVByb2ZpbGVEYXRhID0gY3JlYXRlQXN5bmNUaHVuayhcInByb2ZpbGUvdXBkYXRlUHJvZmlsZURhdGFcIiwgZnVuY3Rpb24gKF8sIHRodW5rQXBpKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dHJhLCByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlLCBmb3JtRGF0YSwgZXJyb3JzLCByZXNwb25zZSwgZV8xO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgZXh0cmEgPSB0aHVua0FwaS5leHRyYSwgcmVqZWN0V2l0aFZhbHVlID0gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSA9IHRodW5rQXBpLmdldFN0YXRlO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEgPSBnZXRQcm9maWxlRm9ybShnZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIGVycm9ycyA9IHZhbGlkYXRlUHJvZmlsZURhdGEoZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVqZWN0V2l0aFZhbHVlKGVycm9ycyldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZXh0cmEuYXBpLnB1dChcIi9wcm9maWxlXCIsIGZvcm1EYXRhKV07XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlXzEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlamVjdFdpdGhWYWx1ZShbdmFsaWRhdGVQcm9maWxlRXJyb3IuU0VSVkVSX0VSUk9SXSldO1xyXG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH0pO1xyXG4iLCJpbXBvcnQgeyB2YWxpZGF0ZVByb2ZpbGVFcnJvciB9IGZyb20gXCIuLi8uLi90eXBlcy9Qcm9maWxlXCI7XHJcbmV4cG9ydCB2YXIgdmFsaWRhdGVQcm9maWxlRGF0YSA9IGZ1bmN0aW9uIChwcm9maWxlKSB7XHJcbiAgICBpZiAoIXByb2ZpbGUpIHtcclxuICAgICAgICByZXR1cm4gW3ZhbGlkYXRlUHJvZmlsZUVycm9yLk5PX0RBVEFdO1xyXG4gICAgfVxyXG4gICAgdmFyIGZpcnN0ID0gcHJvZmlsZS5maXJzdCwgbGFzdG5hbWUgPSBwcm9maWxlLmxhc3RuYW1lLCBhZ2UgPSBwcm9maWxlLmFnZSwgY291bnRyeSA9IHByb2ZpbGUuY291bnRyeTtcclxuICAgIHZhciBlcnJvcnMgPSBbXTtcclxuICAgIGlmICghZmlyc3QgfHwgIWxhc3RuYW1lKSB7XHJcbiAgICAgICAgZXJyb3JzLnB1c2godmFsaWRhdGVQcm9maWxlRXJyb3IuSU5DT1JSRUNUX1VTRVJfREFUQSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFnZSB8fCAhTnVtYmVyLmlzSW50ZWdlcihhZ2UpKSB7XHJcbiAgICAgICAgZXJyb3JzLnB1c2godmFsaWRhdGVQcm9maWxlRXJyb3IuSU5DT1JSRUNUX0FHRSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWNvdW50cnkpIHtcclxuICAgICAgICBlcnJvcnMucHVzaCh2YWxpZGF0ZVByb2ZpbGVFcnJvci5JTkNPUlJFQ1RfQ09VTlRSWSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JzO1xyXG59O1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9maWxlRGF0YSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mZXRjaFByb2ZpbGVEYXRhL2ZldGNoUHJvZmlsZURhdGFcIjtcclxuaW1wb3J0IHsgdXBkYXRlUHJvZmlsZURhdGEgfSBmcm9tIFwiLi4vc2VydmljZXMvdXBkYXRlUHJvZmlsZURhdGEvdXBkYXRlUHJvZmlsZURhdGFcIjtcclxudmFyIGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGVycm9yOiB1bmRlZmluZWQsXHJcbiAgICBkYXRhOiB1bmRlZmluZWQsXHJcbn07XHJcbmV4cG9ydCB2YXIgcHJvZmlsZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJwcm9maWxlXCIsXHJcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0UmVhZG9ubHk6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJlYWRvbmx5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVQcm9maWxlOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5mb3JtID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHN0YXRlLmZvcm0pLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWxFZGl0OiBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUucmVhZG9ubHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBzdGF0ZS5mb3JtID0gc3RhdGUuZGF0YTtcclxuICAgICAgICAgICAgc3RhdGUudmFsaWRhdGVFcnJvcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIGJ1aWxkZXJcclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9maWxlRGF0YS5wZW5kaW5nLCBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUudmFsaWRhdGVFcnJvcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9maWxlRGF0YS5mdWxmaWxsZWQsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0YXRlLmRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgc3RhdGUuZm9ybSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvZmlsZURhdGEucmVqZWN0ZWQsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRDYXNlKHVwZGF0ZVByb2ZpbGVEYXRhLnBlbmRpbmcsIGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQ2FzZSh1cGRhdGVQcm9maWxlRGF0YS5mdWxmaWxsZWQsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0YXRlLmRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgc3RhdGUuZm9ybSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5yZWFkb25seSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENhc2UodXBkYXRlUHJvZmlsZURhdGEucmVqZWN0ZWQsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS52YWxpZGF0ZUVycm9ycyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxyXG5leHBvcnQgdmFyIHByb2ZpbGVBY3Rpb25zID0gcHJvZmlsZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCB2YXIgcHJvZmlsZVJlZHVjZXIgPSBwcm9maWxlU2xpY2UucmVkdWNlcjtcclxuIiwiZXhwb3J0IHZhciB2YWxpZGF0ZVByb2ZpbGVFcnJvcjtcclxuKGZ1bmN0aW9uICh2YWxpZGF0ZVByb2ZpbGVFcnJvcikge1xyXG4gICAgdmFsaWRhdGVQcm9maWxlRXJyb3JbXCJJTkNPUlJFQ1RfVVNFUl9EQVRBXCJdID0gXCJJTkNPUlJFQ1RfdXNlcl9kYXRhXCI7XHJcbiAgICB2YWxpZGF0ZVByb2ZpbGVFcnJvcltcIklOQ09SUkVDVF9BR0VcIl0gPSBcIklOQ09SUkVDVF9hZ2VcIjtcclxuICAgIHZhbGlkYXRlUHJvZmlsZUVycm9yW1wiSU5DT1JSRUNUX0NPVU5UUllcIl0gPSBcIklOQ09SUkVDVF9jb3VudHJ5XCI7XHJcbiAgICB2YWxpZGF0ZVByb2ZpbGVFcnJvcltcIk5PX0RBVEFcIl0gPSBcIk5PX0RBVEFcIjtcclxuICAgIHZhbGlkYXRlUHJvZmlsZUVycm9yW1wiU0VSVkVSX0VSUk9SXCJdID0gXCJTRVJWRVJfRVJST1JcIjtcclxufSkodmFsaWRhdGVQcm9maWxlRXJyb3IgfHwgKHZhbGlkYXRlUHJvZmlsZUVycm9yID0ge30pKTtcclxuIl0sIm5hbWVzIjpbImpzeCIsIl9qc3giLCJDb3VudHJ5IiwibWVtbyIsInVzZUNhbGxiYWNrIiwiY2xhc3NOYW1lcyIsIlNlbGVjdCIsIm9wdGlvbnMiLCJ2YWx1ZSIsIkFybWVuaWEiLCJjb250ZW50IiwiQmVsYXJ1cyIsIlJ1c3NpYSIsIlVTQSIsIlVrcmFpbmUiLCJDb3VudHJ5U2VsZWN0IiwiX2EiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInJlYWRvbmx5Iiwib25DaGFuZ2VIYW5kbGVyIiwibGFiZWwiLCJDdXJyZW5jeSIsIlJVQiIsIkVVUiIsIlVTRCIsIkN1cnJlbmN5U2VsZWN0IiwiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwianN4cyIsIl9qc3hzIiwiY2xzIiwiVGV4dCIsIlRleHRBbGlnbiIsIlRleHRUaGVtZSIsIklucHV0IiwiTG9hZGVyIiwiQXZhdGFyIiwiUHJvZmlsZUNhcmQiLCJfYiIsIl9jIiwiZGF0YSIsImlzTG9hZGluZyIsImVycm9yIiwib25DaGFuZ2VMYXN0bmFtZSIsIm9uQ2hhbmdlRmlydHNuYW1lIiwib25DaGFuZ2VBZ2UiLCJvbkNoYW5nZUNpdHkiLCJvbkNoYW5nZVVzZXJuYW1lIiwib25DaGFuZ2VBdmF0YXIiLCJvbkNoYW5nZUN1cnJlbmN5Iiwib25DaGFuZ2VDb3VudHJ5IiwibG9hZGluZyIsImNoaWxkcmVuIiwidGl0bGUiLCJ0aGVtZSIsIkVSUk9SIiwidGV4dCIsImFsaWdpbiIsIkNFTlRFUiIsIm1vZHMiLCJlZGl0aW5nIiwiYXZhdGFyIiwiYXZhdGFyV3JhcHBlciIsInNyYyIsImFsdCIsImlwdXQiLCJmaXJzdCIsInBsYWNlaG9sZGVyIiwibGFzdG5hbWUiLCJhZ2UiLCJjaXR5IiwidXNlcm5hbWUiLCJjdXJyZW5jeSIsImlucHV0IiwiY291bnRyeSIsInVzZVRyYW5zbGF0aW9uIiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9maWxlRGF0YSIsImdldFByb2ZpbGVGb3JtIiwiZ2V0UHJvZmlsZVJlYWRvbmx5IiwiZ2V0UHJvZmlsZVZhbGlkYXRlRXJyb3IiLCJwcm9maWxlQWN0aW9ucyIsInByb2ZpbGVSZWR1Y2VyIiwidXNlQXBwRGlzcGF0Y2giLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwidXNlU2VsZWN0b3IiLCJnZXRQcm9maWxlRXJyb3IiLCJnZXRQcm9maWxlSXNMb2FkaW5nIiwiUHJvZmlsZVBhZ2VIZWFkZXIiLCJyZWR1Y2VycyIsInByb2ZpbGUiLCJQcm9maWxlUGFnZSIsImRpc3BhdGNoIiwiZm9ybURhdGEiLCJ2YWxpZGF0ZUVycm9ycyIsInVwZGF0ZVByb2ZpbGUiLCJOdW1iZXIiLCJyZW1vdmVBZnRlclVubW91bnQiLCJtYXAiLCJlcnIiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkJ1dHRvbiIsIlRoZW1lQnV0dG9uIiwidXBkYXRlUHJvZmlsZURhdGEiLCJvbkVkaXQiLCJzZXRSZWFkb25seSIsIm9uQ2FuY2VsRWRpdCIsImNhbmNlbEVkaXQiLCJvblNhdmUiLCJoZWFkZXIiLCJlZGl0QnRuIiwiT1VUTElORSIsIm9uQ2xpY2siLCJPVVRMSU5FX1JFRCIsInNhdmVCdG4iLCJ1c2VNZW1vIiwic2l6ZSIsInN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJlIiwidGFyZ2V0Iiwib3B0aW9uTGlzdCIsIm9wdCIsIm9wdGlvbiIsIldyYXBwZXIiLCJjb25jYXQiLCJzZWxlY3QiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=