"use strict";
(() => {
var exports = {};
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 4527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6388);

function handler(req, res) {
    const query = req.query;
    const { status , type , bedrooms , bathrooms  } = query;
    const filtered = _data__WEBPACK_IMPORTED_MODULE_0__/* .properties.filter */ .a.filter((p)=>{
        if (status && p.status !== status) {
            return false;
        }
        if (type && p.type !== type) {
            return false;
        }
        if (bedrooms && p.bedrooms !== parseInt(bedrooms, 10)) {
            return false;
        }
        if (bathrooms && p.bathrooms !== parseInt(bathrooms, 10)) {
            return false;
        }
        return true;
    });
    if (filtered.length > 0) {
        res.status(200).json(filtered);
    } else {
        res.status(404).json(null);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [388], () => (__webpack_exec__(4527)));
module.exports = __webpack_exports__;

})();