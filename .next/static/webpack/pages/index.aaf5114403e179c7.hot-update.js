"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/card */ \"./node_modules/baseui/esm/card/index.js\");\n/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui/button */ \"./node_modules/baseui/esm/button/index.js\");\n/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/input */ \"./node_modules/baseui/esm/input/index.js\");\n/* harmony import */ var baseui_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseui/accordion */ \"./node_modules/baseui/esm/accordion/index.js\");\n/* harmony import */ var baseui_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseui/slider */ \"./node_modules/baseui/esm/slider/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        slider: [\n            32\n        ]\n    }), values = ref[0], setValues = ref[1];\n    var handleChange = function(e, name) {\n        setValues(_objectSpread({}, values, _defineProperty({}, name, [\n            e.value\n        ])));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_card__WEBPACK_IMPORTED_MODULE_3__.StyledBody, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                            clearOnEscape: true\n                        }, void 0, false, {\n                            fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            children: \"Copy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_card__WEBPACK_IMPORTED_MODULE_3__.StyledAction, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_accordion__WEBPACK_IMPORTED_MODULE_6__.Accordion, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_accordion__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n                            title: \"Options\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_slider__WEBPACK_IMPORTED_MODULE_7__.Slider, {\n                                min: 4,\n                                max: 64,\n                                step: 1,\n                                value: values.slider,\n                                onChange: function(e) {\n                                    return handleChange(e, \"slider\");\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"mlFYN1b1tAvFKkusiuEysAvLjYM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNHO0FBQ2dCO0FBQ3RCO0FBQ0Y7QUFDZTtBQUNiO0FBQ0k7QUFDVjs7QUFFakMsU0FBU1ksSUFBSSxHQUFHOztJQUNkLElBQTRCRCxHQUUxQixHQUYwQkEsK0NBQVEsQ0FBQztRQUNuQ0UsTUFBTSxFQUFFO0FBQUMsY0FBRTtTQUFDO0tBQ2IsQ0FBQyxFQWJKLE1BV2UsR0FBZUYsR0FFMUIsR0FGVyxFQVhmLFNBVzBCLEdBQUlBLEdBRTFCLEdBRnNCO0lBSXhCLElBQU1LLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUVDLElBQUksRUFBSztRQUNoQ0gsU0FBUyxDQUFDLGtCQUFLRCxNQUFNLEVBQUUsb0JBQUNJLElBQUksRUFBRztZQUFDRCxDQUFDLENBQUNFLEtBQUs7U0FBQyxFQUFFLENBQUMsQ0FBQztLQUM3QztJQUVELHFCQUNFLDhEQUFDbkIsMERBQU07a0JBQ0wsNEVBQUNFLDZDQUFJOzs4QkFDSCw4REFBQ0UsbURBQVU7O3NDQUNULDhEQUFDRSwrQ0FBSzs0QkFBQ2MsYUFBYTs7Ozs7Z0NBQUc7c0NBQ3ZCLDhEQUFDZixpREFBTTtzQ0FBQyxNQUFJOzs7OztnQ0FBUzs7Ozs7O3dCQUNWOzhCQUNiLDhEQUFDRixxREFBWTs4QkFDWCw0RUFBQ0ksdURBQVM7a0NBQ1IsNEVBQUNDLG1EQUFLOzRCQUFDYSxLQUFLLEVBQUMsU0FBUztzQ0FDcEIsNEVBQUNaLGlEQUFNO2dDQUNMYSxHQUFHLEVBQUUsQ0FBQztnQ0FDTkMsR0FBRyxFQUFFLEVBQUU7Z0NBQ1BDLElBQUksRUFBRSxDQUFDO2dDQUNQTCxLQUFLLEVBQUVMLE1BQU0sQ0FBQ0QsTUFBTTtnQ0FDcEJZLFFBQVEsRUFBRSxTQUFDUixDQUFDOzJDQUFLRCxZQUFZLENBQUNDLENBQUMsRUFBRSxRQUFRLENBQUM7aUNBQUE7Ozs7O29DQUMxQzs7Ozs7Z0NBQ0k7Ozs7OzRCQUNFOzs7Ozt3QkFDQzs7Ozs7O2dCQUNWOzs7OztZQUNBLENBQ1Q7Q0FDSDtHQWhDUUwsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBa0NiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgU3RhdGVmdWxJbnB1dCB9IGZyb20gXCJiYXNldWkvaW5wdXRcIjtcbmltcG9ydCB7IENhcmQsIFN0eWxlZEFjdGlvbiwgU3R5bGVkQm9keSB9IGZyb20gXCJiYXNldWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImJhc2V1aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImJhc2V1aS9pbnB1dFwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBQYW5lbCB9IGZyb20gXCJiYXNldWkvYWNjb3JkaW9uXCI7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiYmFzZXVpL3NsaWRlclwiO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiYmFzZXVpL2NoZWNrYm94XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgIHNsaWRlcjogWzMyXSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogW2UudmFsdWVdIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8U3R5bGVkQm9keT5cbiAgICAgICAgICA8SW5wdXQgY2xlYXJPbkVzY2FwZSAvPlxuICAgICAgICAgIDxCdXR0b24+Q29weTwvQnV0dG9uPlxuICAgICAgICA8L1N0eWxlZEJvZHk+XG4gICAgICAgIDxTdHlsZWRBY3Rpb24+XG4gICAgICAgICAgPEFjY29yZGlvbj5cbiAgICAgICAgICAgIDxQYW5lbCB0aXRsZT1cIk9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgIG1pbj17NH1cbiAgICAgICAgICAgICAgICBtYXg9ezY0fVxuICAgICAgICAgICAgICAgIHN0ZXA9ezF9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zbGlkZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgXCJzbGlkZXJcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICA8L1N0eWxlZEFjdGlvbj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJTdGF0ZWZ1bElucHV0IiwiQ2FyZCIsIlN0eWxlZEFjdGlvbiIsIlN0eWxlZEJvZHkiLCJCdXR0b24iLCJJbnB1dCIsIkFjY29yZGlvbiIsIlBhbmVsIiwiU2xpZGVyIiwiQ2hlY2tib3giLCJ1c2VTdGF0ZSIsIkhvbWUiLCJzbGlkZXIiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwiY2xlYXJPbkVzY2FwZSIsInRpdGxlIiwibWluIiwibWF4Iiwic3RlcCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});