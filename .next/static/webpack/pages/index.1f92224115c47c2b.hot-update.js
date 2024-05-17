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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (image) {\n            const canvas = canvasRef.current;\n            const ctx = canvas.getContext(\"2d\");\n            // Adjust canvas size to image size or max allowable size\n            const scale = Math.min(canvas.parentElement.offsetWidth / image.width, canvas.parentElement.offsetHeight / image.height);\n            const width = image.width * scale;\n            const height = image.height * scale;\n            canvas.width = width;\n            canvas.height = height;\n            ctx.clearRect(0, 0, width, height);\n            ctx.drawImage(image, 0, 0, width, height);\n        }\n    }, [\n        image\n    ]);\n    const handleFileChange = (event)=>{\n        const file = event.target.files[0];\n        if (file) {\n            const reader = new FileReader();\n            reader.onload = (e)=>{\n                const img = new Image();\n                img.onload = ()=>{\n                    setImage(img);\n                };\n                img.src = e.target.result;\n            };\n            reader.readAsDataURL(file);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-white mb-4\",\n                        children: \"Scoreboard Image Processing Tool\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        onChange: handleFileChange,\n                        accept: \"image/*\",\n                        className: \"mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-crimson hover:bg-red-700 text-white font-bold py-2 px-4 rounded\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                className: \"canvas\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ltper\\\\PCKSTATS\\\\pages\\\\index.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"rCBpDzD44Q3IgcJIbjmFk/SYPP8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9EO0FBRXJDLFNBQVNHOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTU0sWUFBWUosNkNBQU1BLENBQUM7SUFFekJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSUcsT0FBTztZQUNQLE1BQU1HLFNBQVNELFVBQVVFLE9BQU87WUFDaEMsTUFBTUMsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1lBRTlCLHlEQUF5RDtZQUN6RCxNQUFNQyxRQUFRQyxLQUFLQyxHQUFHLENBQUNOLE9BQU9PLGFBQWEsQ0FBQ0MsV0FBVyxHQUFHWCxNQUFNWSxLQUFLLEVBQUVULE9BQU9PLGFBQWEsQ0FBQ0csWUFBWSxHQUFHYixNQUFNYyxNQUFNO1lBQ3ZILE1BQU1GLFFBQVFaLE1BQU1ZLEtBQUssR0FBR0w7WUFDNUIsTUFBTU8sU0FBU2QsTUFBTWMsTUFBTSxHQUFHUDtZQUU5QkosT0FBT1MsS0FBSyxHQUFHQTtZQUNmVCxPQUFPVyxNQUFNLEdBQUdBO1lBRWhCVCxJQUFJVSxTQUFTLENBQUMsR0FBRyxHQUFHSCxPQUFPRTtZQUMzQlQsSUFBSVcsU0FBUyxDQUFDaEIsT0FBTyxHQUFHLEdBQUdZLE9BQU9FO1FBQ3RDO0lBQ0osR0FBRztRQUFDZDtLQUFNO0lBRVYsTUFBTWlCLG1CQUFtQkMsQ0FBQUE7UUFDckIsTUFBTUMsT0FBT0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUNsQyxJQUFJRixNQUFNO1lBQ04sTUFBTUcsU0FBUyxJQUFJQztZQUNuQkQsT0FBT0UsTUFBTSxHQUFHLENBQUNDO2dCQUNiLE1BQU1DLE1BQU0sSUFBSUM7Z0JBQ2hCRCxJQUFJRixNQUFNLEdBQUc7b0JBQ1R2QixTQUFTeUI7Z0JBQ2I7Z0JBQ0FBLElBQUlFLEdBQUcsR0FBR0gsRUFBRUwsTUFBTSxDQUFDUyxNQUFNO1lBQzdCO1lBQ0FQLE9BQU9RLGFBQWEsQ0FBQ1g7UUFDekI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7O2tDQUNHLDhEQUFDRTt3QkFBR0QsV0FBVTtrQ0FBcUM7Ozs7OztrQ0FDbkQsOERBQUNFO3dCQUFNQyxNQUFLO3dCQUFPQyxVQUFVbkI7d0JBQWtCb0IsUUFBTzt3QkFBVUwsV0FBVTs7Ozs7O2tDQUMxRSw4REFBQ007d0JBQU9OLFdBQVU7a0NBQXFFOzs7Ozs7Ozs7Ozs7MEJBSTNGLDhEQUFDN0I7Z0JBQU9vQyxLQUFLckM7Z0JBQVc4QixXQUFVOzs7Ozs7Ozs7Ozs7QUFHOUM7R0FqRHdCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBZGp1c3QgY2FudmFzIHNpemUgdG8gaW1hZ2Ugc2l6ZSBvciBtYXggYWxsb3dhYmxlIHNpemVcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbihjYW52YXMucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCAvIGltYWdlLndpZHRoLCBjYW52YXMucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgLyBpbWFnZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLndpZHRoICogc2NhbGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmhlaWdodCAqIHNjYWxlO1xyXG5cclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaW1hZ2VdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2UoaW1nKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTRcIj5TY29yZWJvYXJkIEltYWdlIFByb2Nlc3NpbmcgVG9vbDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gYWNjZXB0PVwiaW1hZ2UvKlwiIGNsYXNzTmFtZT1cIm1iLTRcIi8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWNyaW1zb24gaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSBjbGFzc05hbWU9XCJjYW52YXNcIj48L2NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSG9tZSIsImltYWdlIiwic2V0SW1hZ2UiLCJjYW52YXNSZWYiLCJjYW52YXMiLCJjdXJyZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsInNjYWxlIiwiTWF0aCIsIm1pbiIsInBhcmVudEVsZW1lbnQiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiaGVpZ2h0IiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwiaGFuZGxlRmlsZUNoYW5nZSIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJpbWciLCJJbWFnZSIsInNyYyIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYWNjZXB0IiwiYnV0dG9uIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});