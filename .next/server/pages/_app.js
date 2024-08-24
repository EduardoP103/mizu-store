(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(3318);
// Exports
module.exports = {
	"primary-color": "" + ___CSS_LOADER_ICSS_IMPORT_0___["primary-color"] + "",
	"neutral-100": "" + ___CSS_LOADER_ICSS_IMPORT_0___["neutral-100"] + "",
	"neutral-200": "" + ___CSS_LOADER_ICSS_IMPORT_0___["neutral-200"] + "",
	"neutral-500": "" + ___CSS_LOADER_ICSS_IMPORT_0___["neutral-500"] + "",
	"neutral-700": "" + ___CSS_LOADER_ICSS_IMPORT_0___["neutral-700"] + "",
	"container": "footer_container__Pahmf",
	"footer": "footer_footer__OT4Wn",
	"link": "footer_link__QkJpo",
	"logo": "footer_logo__QA7a6",
	"top-section": "footer_top-section__X5AKi",
	"nav": "footer_nav__yYrXF",
	"nav-item": "footer_nav-item__REnhv",
	"title": "footer_title__RJUoE",
	"bottom-section": "footer_bottom-section__wJ0sm",
	"newsletter": "footer_newsletter__DsdfU",
	"form": "footer_form__GY0iT",
	"input": "footer_input__RLRAu",
	"button": "footer_button__Rx_Xk"
};


/***/ }),

/***/ 5980:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "logo_logo__joQvc"
};


/***/ }),

/***/ 6167:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(3318);
// Exports
module.exports = {
	"primary-color": "" + ___CSS_LOADER_ICSS_IMPORT_0___["primary-color"] + "",
	"neutral-100": "" + ___CSS_LOADER_ICSS_IMPORT_0___["neutral-100"] + "",
	"neutral-700": "" + ___CSS_LOADER_ICSS_IMPORT_0___["neutral-700"] + "",
	"container": "navbar_container__EYlRl",
	"navbar": "navbar_navbar__9q1fQ",
	"menu-icon": "navbar_menu-icon__Irh7Z",
	"nav": "navbar_nav__cJfdS",
	"nav-item": "navbar_nav-item__LPvn_",
	"mobile-nav": "navbar_mobile-nav__d2FgF",
	"mobile-nav-item": "navbar_mobile-nav-item__yJOaR"
};


/***/ }),

/***/ 2383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/footer.module.css
var footer_module = __webpack_require__(7987);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/logo-mizu.png
/* harmony default export */ const logo_mizu = ({"src":"/_next/static/media/logo-mizu.5493ac71.png","height":164,"width":472,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AbbT5JUYEQdq5vX/h0smFXqjxcwEnYaN/Pz/AgEICQn/AZ/H4fYZDQcJ7fwF3nlVXWclLhf6/v0A6f7+/RgAAAH7AavR45AQCwdvBvb0g+T/Dn7Vxb0G0MG9/vP19wEFBAQEfucxHiykzFYAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/logo.module.css
var logo_module = __webpack_require__(5980);
var logo_module_default = /*#__PURE__*/__webpack_require__.n(logo_module);
;// CONCATENATED MODULE: ./components/logo.js





function Logo() {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (logo_module_default()).logo,
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: logo_mizu,
                alt: "",
                layout: "fill"
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/footer.js




const purposes = [
    {
        title: "Polos",
        path: "/properties"
    }, 
];
const types = [];
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (footer_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (footer_module_default()).footer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default())["top-section"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (footer_module_default()).nav,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (footer_module_default()).nav,
                            children: purposes.map(({ title , path  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: (footer_module_default())["nav-item"],
                                            children: title
                                        })
                                    })
                                }, path))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (footer_module_default()).nav,
                            children: types.map(({ title , path  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: (footer_module_default())["nav-item"],
                                            children: title
                                        })
                                    })
                                }, path))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (footer_module_default()).newsletter,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (footer_module_default()).title,
                                    children: "Suscr\xedbase al bolet\xedn de noticias"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    className: (footer_module_default()).form,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            placeholder: "Correo electr\xf3nico",
                                            className: (footer_module_default()).input
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (footer_module_default()).button,
                                            children: "Suscribirse"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (footer_module_default())["bottom-section"],
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "\xa9 ",
                                new Date().getFullYear(),
                                " Mizu. Todos los derechos reservados."
                            ]
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./public/menu-icon.svg
/* harmony default export */ const menu_icon = ({"src":"/_next/static/media/menu-icon.a9393b95.svg","height":512,"width":512});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/navbar.module.css
var navbar_module = __webpack_require__(6167);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./components/navbar.js







// navbar horizontal
const menu = [
    {
        title: "Polos",
        path: "/properties"
    },
    {
        title: "Poleras",
        path: "/"
    },
    {
        title: "Bikinis",
        path: "/"
    },
    {
        title: "Casacas",
        path: "/"
    }, 
];
function Navbar() {
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const handleOpen = ()=>setIsOpen((isOpen)=>!isOpen);
    const handleClose = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (navbar_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: (navbar_module_default()).navbar,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: handleOpen,
                            className: (navbar_module_default())["menu-icon"],
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: menu_icon,
                                alt: "",
                                layout: "fill"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: (navbar_module_default()).nav,
                            children: menu.map(({ title , path  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (navbar_module_default())["nav-item"],
                                        children: title
                                    })
                                }, path))
                        })
                    ]
                })
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (navbar_module_default())["mobile-nav"],
                children: menu.map(({ title , path  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: path,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            onClick: handleClose,
                            className: (navbar_module_default())["mobile-nav-item"],
                            children: title
                        })
                    }, path))
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,318], () => (__webpack_exec__(2383)));
module.exports = __webpack_exports__;

})();