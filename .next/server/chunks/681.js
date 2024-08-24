exports.id = 681;
exports.ids = [681];
exports.modules = {

/***/ 830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(3318);
// Exports
module.exports = {
	"primary-color": "" + ___CSS_LOADER_ICSS_IMPORT_0___["primary-color"] + "",
	"primary-color-10": "" + ___CSS_LOADER_ICSS_IMPORT_0___["primary-color-10"] + "",
	"neutral-100": "" + ___CSS_LOADER_ICSS_IMPORT_0___["neutral-100"] + "",
	"primary": "badge_primary__cClP5",
	"secondary": "badge_secondary___APHL"
};


/***/ }),

/***/ 2303:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "property-item_container__6mzOB",
	"image-container": "property-item_image-container__cv6h0",
	"image": "property-item_image__426Fd",
	"badge": "property-item_badge__iOHRa",
	"info-container": "property-item_info-container__Vl_5g",
	"title-container": "property-item_title-container__qDimc",
	"title": "property-item_title__lE1Gk",
	"data-container": "property-item_data-container__Ef_8C",
	"color": "property-item_color__2xPIT",
	"price": "property-item_price__c2GgI",
	"badges": "property-item_badges__bTEUw"
};


/***/ }),

/***/ 1602:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "property-listing_grid__IrY_k"
};


/***/ }),

/***/ 2181:
/***/ ((module) => {

// Exports
module.exports = {
	"h1": "title_h1__ymfbI",
	"h2": "title_h2__EjZOn"
};


/***/ }),

/***/ 2316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PropertyListing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/badge.module.css
var badge_module = __webpack_require__(830);
var badge_module_default = /*#__PURE__*/__webpack_require__.n(badge_module);
;// CONCATENATED MODULE: ./components/badge.js


function Badge({ primary , secondary , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: [
            [
                `${primary ? (badge_module_default()).primary : []}`
            ],
            [
                `${secondary ? (badge_module_default()).secondary : []}`
            ], 
        ].join(" "),
        children: children
    });
};

// EXTERNAL MODULE: ./components/property-item.module.css
var property_item_module = __webpack_require__(2303);
var property_item_module_default = /*#__PURE__*/__webpack_require__.n(property_item_module);
;// CONCATENATED MODULE: ./components/property-item.js





function PropertyItem({ property  }) {
    const { images , title , color , price , area , bedrooms , bathrooms , status , type ,  } = property;
    const translatedStatus = (status)=>{
        switch(status){
            case "sale":
                return "Venta";
            case "ofert":
                return "Oferta";
            default:
        }
    };
    const translatedType = (type)=>{
        switch(type){
            case "oversize":
                return "Oversize";
            case "house":
                return "Casa";
            case "office":
                return "Oficina";
            default:
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/property/${property.id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: (property_item_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (property_item_module_default())["image-container"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: images[0],
                            alt: "",
                            layout: "fill",
                            className: (property_item_module_default()).image
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (property_item_module_default()).badge,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                secondary: true,
                                children: translatedType(type)
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (property_item_module_default())["info-container"],
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (property_item_module_default())["title-container"],
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (property_item_module_default()).title,
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                    primary: true,
                                    children: translatedStatus(status)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (property_item_module_default())["data-container"],
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (property_item_module_default()).color,
                                            children: color
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: (property_item_module_default()).price,
                                            children: [
                                                "S/.",
                                                price,
                                                " SOL"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (property_item_module_default()).badges,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                            secondary: true,
                                            children: "Tallas:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                            secondary: true,
                                            children: area
                                        }),
                                        bedrooms && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Badge, {
                                            secondary: true,
                                            children: [
                                                bedrooms,
                                                " rec."
                                            ]
                                        }),
                                        bathrooms && /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                            secondary: true,
                                            children: `${bathrooms} ${bathrooms < 2 ? "ba\xf1o" : "ba\xf1os"}`
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/property-listing.module.css
var property_listing_module = __webpack_require__(1602);
var property_listing_module_default = /*#__PURE__*/__webpack_require__.n(property_listing_module);
;// CONCATENATED MODULE: ./components/bikini-listing.js



function PropertyListing({ data , error , isLoading  }) {
    if (isLoading) return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "Loading..."
    });
    if (!data) return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "No profile data"
    });
    if (error) return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        children: [
            "Error: ",
            error.message
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (property_listing_module_default()).grid,
        children: data.map((property)=>/*#__PURE__*/ jsx_runtime_.jsx(PropertyItem, {
                property: property
            }, property.id))
    });
};


/***/ }),

/***/ 7135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _title_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2181);
/* harmony import */ var _title_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_title_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Title({ children , h1 , h2  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            h1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_title_module_css__WEBPACK_IMPORTED_MODULE_1___default().h1),
                children: children
            }),
            h2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_title_module_css__WEBPACK_IMPORTED_MODULE_1___default().h2),
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 1695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFetch(url) {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setLoading(true);
        fetch(url).then((res)=>res.json()).then((data)=>{
            setData(data);
            setLoading(false);
        }).catch((err)=>{
            setError(err);
            setLoading(false);
        }).finally(()=>{
            setLoading(false);
        });
    }, [
        url
    ]);
    return {
        data,
        error,
        isLoading
    };
}


/***/ })

};
;