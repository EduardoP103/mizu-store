exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 5516:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(3318);
// Exports
module.exports = {
	"primary-color": "" + ___CSS_LOADER_ICSS_IMPORT_0___["primary-color"] + "",
	"primary-color-50": "" + ___CSS_LOADER_ICSS_IMPORT_0___["primary-color-50"] + "",
	"button": "button_button__5XOLM",
	"center": "button_center__zi_qy"
};


/***/ }),

/***/ 8753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(3318);
// Exports
module.exports = {
	"neutral-700": "" + ___CSS_LOADER_ICSS_IMPORT_0___["neutral-700"] + "",
	"paragraph": "paragraph_paragraph__8XGm9",
	"lg": "paragraph_lg__XDQrw"
};


/***/ }),

/***/ 2442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5516);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Button({ children , href , lg , center  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: [
                (_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),
                [
                    `${center ? (_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().center) : []}`
                ]
            ].join(" "),
            children: children
        })
    });
};


/***/ }),

/***/ 3562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paragraph_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8753);
/* harmony import */ var _paragraph_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_paragraph_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Paragraph({ children , lg  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: [
            (_paragraph_module_css__WEBPACK_IMPORTED_MODULE_1___default().paragraph),
            [
                `${lg ? (_paragraph_module_css__WEBPACK_IMPORTED_MODULE_1___default().lg) : []}`
            ]
        ].join(" "),
        children: children
    });
};


/***/ })

};
;