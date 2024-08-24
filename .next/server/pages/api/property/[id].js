"use strict";
(() => {
var exports = {};
exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 2108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6388);

function handler({ query: { id  }  }, res) {
    const filtered = _data__WEBPACK_IMPORTED_MODULE_0__/* .properties.filter */ .a.filter((p)=>p.id === id);
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(400).json({
            message: `Property with id: ${id} not found.`
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [388], () => (__webpack_exec__(2108)));
module.exports = __webpack_exports__;

})();