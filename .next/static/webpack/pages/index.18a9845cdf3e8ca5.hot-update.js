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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/card */ \"./node_modules/baseui/esm/card/index.js\");\n/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui/button */ \"./node_modules/baseui/esm/button/index.js\");\n/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/input */ \"./node_modules/baseui/esm/input/index.js\");\n/* harmony import */ var baseui_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseui/accordion */ \"./node_modules/baseui/esm/accordion/index.js\");\n/* harmony import */ var baseui_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! baseui/slider */ \"./node_modules/baseui/esm/slider/index.js\");\n/* harmony import */ var baseui_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! baseui/checkbox */ \"./node_modules/baseui/esm/checkbox/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseui/block */ \"./node_modules/baseui/esm/block/index.js\");\n/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! baseui/form-control */ \"./node_modules/baseui/esm/form-control/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        slider: [\n            32\n        ],\n        checkCaps: false,\n        checkNumbers: false,\n        checkSpecials: false\n    }), values = ref[0], setValues = ref[1];\n    var handleChange = function(e, name) {\n        if (name === \"slider\") setValues(_objectSpread({}, values, _defineProperty({}, name, [\n            e.value\n        ])));\n        if (name.includes(\"check\")) setValues(_objectSpread({}, values, _defineProperty({}, name, e.target.checked)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            overrides: {\n                Root: {\n                    style: {\n                        left: \"50%\",\n                        maxWidth: \"420px\",\n                        position: \"absolute\",\n                        top: \"20px\",\n                        transform: \"translate(-50%, 0)\",\n                        width: \"95vw\"\n                    }\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_card__WEBPACK_IMPORTED_MODULE_3__.StyledBody, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                            clearOnEscape: true,\n                            overrides: {\n                                After: function() {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                        kind: baseui_button__WEBPACK_IMPORTED_MODULE_5__.KIND.tertiary,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            children: \"Copy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_card__WEBPACK_IMPORTED_MODULE_3__.StyledAction, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_accordion__WEBPACK_IMPORTED_MODULE_6__.Accordion, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_accordion__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n                            title: \"Options\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_block__WEBPACK_IMPORTED_MODULE_7__.Block, {\n                                    marginBottom: \"scale800\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_form_control__WEBPACK_IMPORTED_MODULE_8__.FormControl, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_slider__WEBPACK_IMPORTED_MODULE_9__.Slider, {\n                                            min: 4,\n                                            max: 64,\n                                            step: 1,\n                                            value: values.slider,\n                                            onChange: function(e) {\n                                                return handleChange(e, \"slider\");\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_checkbox__WEBPACK_IMPORTED_MODULE_10__.Checkbox, {\n                                    checked: values.checkCaps,\n                                    onChange: function(e) {\n                                        return handleChange(e, \"checkCaps\");\n                                    },\n                                    children: \"A-Z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_checkbox__WEBPACK_IMPORTED_MODULE_10__.Checkbox, {\n                                    checked: values.checkNumbers,\n                                    onChange: function(e) {\n                                        return handleChange(e, \"checkNumbers\");\n                                    },\n                                    children: \"0-9\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(baseui_checkbox__WEBPACK_IMPORTED_MODULE_10__.Checkbox, {\n                                    checked: values.checkSpecials,\n                                    onChange: function(e) {\n                                        return handleChange(e, \"checkSpecials\");\n                                    },\n                                    children: \"%@#\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mlokhate/Documents/password-generator-baseweb/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"E5TtOroF0nW4lxMmb/cWbDVeSRY=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxDQUFDQyxDQUFDLEVBQUUsY0FBYyxDQUFDO3FDQUFBOzhDQUNqRCxLQUVEOzs7Ozt3Q0FBVzs4Q0FDWCw4REFBQ1osc0RBQVE7b0NBQ1BpQixPQUFPLEVBQUVSLE1BQU0sQ0FBQ0QsYUFBYTtvQ0FDN0I2QixRQUFRLEVBQUUsU0FBQ3pCLENBQUM7K0NBQUtELFlBQVksQ0FBQ0MsQ0FBQyxFQUFFLGVBQWUsQ0FBQztxQ0FBQTs4Q0FDbEQsS0FFRDs7Ozs7d0NBQVc7Ozs7OztnQ0FDTDs7Ozs7NEJBQ0U7Ozs7O3dCQUNDOzs7Ozs7Z0JBQ1Y7Ozs7O1lBQ0EsQ0FDVDtDQUNIO0dBbEZRUixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFvRmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBTdGF0ZWZ1bElucHV0IH0gZnJvbSBcImJhc2V1aS9pbnB1dFwiO1xuaW1wb3J0IHsgQ2FyZCwgU3R5bGVkQWN0aW9uLCBTdHlsZWRCb2R5IH0gZnJvbSBcImJhc2V1aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24sIEtJTkQgfSBmcm9tIFwiYmFzZXVpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYmFzZXVpL2lucHV0XCI7XG5pbXBvcnQgeyBBY2NvcmRpb24sIFBhbmVsIH0gZnJvbSBcImJhc2V1aS9hY2NvcmRpb25cIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJiYXNldWkvc2xpZGVyXCI7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJiYXNldWkvY2hlY2tib3hcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCJiYXNldWkvYmxvY2tcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcImJhc2V1aS9mb3JtLWNvbnRyb2xcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBzbGlkZXI6IFszMl0sXG4gICAgY2hlY2tDYXBzOiBmYWxzZSxcbiAgICBjaGVja051bWJlcnM6IGZhbHNlLFxuICAgIGNoZWNrU3BlY2lhbHM6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmFtZSkgPT4ge1xuICAgIGlmIChuYW1lID09PSBcInNsaWRlclwiKSBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogW2UudmFsdWVdIH0pO1xuICAgIGlmIChuYW1lLmluY2x1ZGVzKFwiY2hlY2tcIikpXG4gICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogZS50YXJnZXQuY2hlY2tlZCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q2FyZFxuICAgICAgICBvdmVycmlkZXM9e3tcbiAgICAgICAgICBSb290OiB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MjBweFwiLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICB0b3A6IFwiMjBweFwiLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIDApXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjk1dndcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFN0eWxlZEJvZHk+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBjbGVhck9uRXNjYXBlXG4gICAgICAgICAgICBvdmVycmlkZXM9e3tcbiAgICAgICAgICAgICAgQWZ0ZXI6ICgpID0+IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGtpbmQ9e0tJTkQudGVydGlhcnl9PlxuICAgICAgICAgICAgICAgICAgPEljb24gLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uPkNvcHk8L0J1dHRvbj5cbiAgICAgICAgPC9TdHlsZWRCb2R5PlxuICAgICAgICA8U3R5bGVkQWN0aW9uPlxuICAgICAgICAgIDxBY2NvcmRpb24+XG4gICAgICAgICAgICA8UGFuZWwgdGl0bGU9XCJPcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxCbG9jayBtYXJnaW5Cb3R0b209XCJzY2FsZTgwMFwiPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbWluPXs0fVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezY0fVxuICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnNsaWRlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgXCJzbGlkZXJcIil9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWVzLmNoZWNrQ2Fwc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBcImNoZWNrQ2Fwc1wiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEEtWlxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZXMuY2hlY2tOdW1iZXJzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIFwiY2hlY2tOdW1iZXJzXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgMC05XG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlcy5jaGVja1NwZWNpYWxzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIFwiY2hlY2tTcGVjaWFsc1wiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICVAI1xuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgPC9TdHlsZWRBY3Rpb24+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU3RhdGVmdWxJbnB1dCIsIkNhcmQiLCJTdHlsZWRBY3Rpb24iLCJTdHlsZWRCb2R5IiwiQnV0dG9uIiwiS0lORCIsIklucHV0IiwiQWNjb3JkaW9uIiwiUGFuZWwiLCJTbGlkZXIiLCJDaGVja2JveCIsInVzZVN0YXRlIiwiQmxvY2siLCJGb3JtQ29udHJvbCIsIkhvbWUiLCJzbGlkZXIiLCJjaGVja0NhcHMiLCJjaGVja051bWJlcnMiLCJjaGVja1NwZWNpYWxzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsImluY2x1ZGVzIiwidGFyZ2V0IiwiY2hlY2tlZCIsIm92ZXJyaWRlcyIsIlJvb3QiLCJzdHlsZSIsImxlZnQiLCJtYXhXaWR0aCIsInBvc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtIiwid2lkdGgiLCJjbGVhck9uRXNjYXBlIiwiQWZ0ZXIiLCJraW5kIiwidGVydGlhcnkiLCJJY29uIiwidGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJtaW4iLCJtYXgiLCJzdGVwIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});