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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (image) {\n            const canvas = canvasRef.current;\n            const ctx = canvas.getContext(\"2d\");\n            // Fit image within canvas size\n            const scale = Math.min(canvas.parentElement.offsetWidth / image.width, canvas.parentElement.offsetHeight / image.height);\n            const width = image.width * scale;\n            const height = image.height * scale;\n            canvas.width = width;\n            canvas.height = height;\n            ctx.clearRect(0, 0, width, height);\n            ctx.drawImage(image, 0, 0, width, height);\n        }\n    }, [\n        image\n    ]);\n    const handleFileChange = (event)=>{\n        const file = event.target.files[0];\n        if (file) {\n            const reader = new FileReader();\n            reader.onload = (e)=>{\n                const img = new Image();\n                img.onload = ()=>{\n                    setImage(img);\n                };\n                img.src = e.target.result;\n            };\n            reader.readAsDataURL(file);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex justify-between items-center bg-charcoal p-4 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/logo.png\",\n                        alt: \"Logo\",\n                        className: \"h-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://youtube.com/yourchannel\",\n                                className: \"mr-4\",\n                                children: \"YouTube\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://x.com/yourprofile\",\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"w-1/4 bg-gray-800 p-4 text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg mb-4\",\n                                children: \"Match Details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block mb-2\",\n                                        children: \"Map\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"w-full p-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Kafe Dostoyevsky\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Border\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Clubhouse\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Oregon\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Skyscraper\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Nighthaven Labs\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Bank\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Chalet\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block mb-2\",\n                                        children: \"Match Type\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"w-full p-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Seeding\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Option, {\n                                                children: \"Playoff - Regular\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Playoff\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block mb-2\",\n                                        children: \"Score\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"w-full p-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"8-7\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"7-8\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"flex-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                            ref: canvasRef,\n                            className: \"max-w-full max-h-full border-4 border-gray-200\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"rCBpDzD44Q3IgcJIbjmFk/SYPP8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPOzs7Ozs7MERBQ1IsOERBQUNBOzBEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXBCLDhEQUFDRTt3QkFBS1gsV0FBVTtrQ0FDWiw0RUFBQzdCOzRCQUFPeUMsS0FBSzFDOzRCQUFXOEIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEQ7R0FqRndCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC5qc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIC8vIEZpdCBpbWFnZSB3aXRoaW4gY2FudmFzIHNpemVcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbihjYW52YXMucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCAvIGltYWdlLndpZHRoLCBjYW52YXMucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgLyBpbWFnZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLndpZHRoICogc2NhbGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmhlaWdodCAqIHNjYWxlO1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2ltYWdlXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlKGltZyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmctY2hhcmNvYWwgcC00IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cImgtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3lvdXR1YmUuY29tL3lvdXJjaGFubmVsXCIgY2xhc3NOYW1lPVwibXItNFwiPllvdVR1YmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8veC5jb20veW91cnByb2ZpbGVcIj5YPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwidy0xLzQgYmctZ3JheS04MDAgcC00IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+TWF0Y2ggRGV0YWlsczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yXCI+TWFwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkthZmUgRG9zdG95ZXZza3k8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Qm9yZGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNsdWJob3VzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PcmVnb248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U2t5c2NyYXBlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5OaWdodGhhdmVuIExhYnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QmFuazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5DaGFsZXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yXCI+TWF0Y2ggVHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWVkaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uPlBsYXlvZmYgLSBSZWd1bGFyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlBsYXlvZmY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTJcIj5TY29yZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj44LTc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Ny04PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IGNsYXNzTmFtZT1cIm1heC13LWZ1bGwgbWF4LWgtZnVsbCBib3JkZXItNCBib3JkZXItZ3JheS0yMDBcIj48L2NhbnZhcz5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkhvbWUiLCJpbWFnZSIsInNldEltYWdlIiwiY2FudmFzUmVmIiwiY2FudmFzIiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJzY2FsZSIsIk1hdGgiLCJtaW4iLCJwYXJlbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiYWx0IiwiYSIsImhyZWYiLCJhc2lkZSIsImgyIiwibGFiZWwiLCJzZWxlY3QiLCJvcHRpb24iLCJPcHRpb24iLCJtYWluIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});