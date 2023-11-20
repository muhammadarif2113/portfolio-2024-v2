"use strict";
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 9708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../../.nvm/versions/node/v20.2.0/lib/node_modules/next/head.js
var head = __webpack_require__(5831);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(9424);
// EXTERNAL MODULE: ./src/layout/Preloader.js
var Preloader = __webpack_require__(7120);
;// CONCATENATED MODULE: ./src/layout/Switcher.js



const colors = [
    {
        name: "blue",
        colorImg: "images/styleswitcher/blue.png"
    },
    {
        name: "red",
        colorImg: "images/styleswitcher/red.png"
    },
    {
        name: "goldrenrod",
        colorImg: "images/styleswitcher/goldenrod.png"
    },
    {
        name: "magenta",
        colorImg: "images/styleswitcher/magenta.png"
    },
    {
        name: "yellowgreen",
        colorImg: "images/styleswitcher/yellowgreen.png"
    },
    {
        name: "orange",
        colorImg: "images/styleswitcher/orange.png"
    },
    {
        name: "green",
        colorImg: "images/styleswitcher/green.png"
    },
    {
        name: "yellow",
        colorImg: "images/styleswitcher/yellow.png"
    },
    {
        name: "purple",
        colorImg: "images/styleswitcher/purple.png"
    },
    {
        name: "blueviolet",
        colorImg: "images/styleswitcher/blueviolet.png"
    }, 
];
const Switcher = ()=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const { 0: dark , 1: setDark  } = (0,external_react_.useState)(false);
    const { colorChange  } = (0,external_react_.useContext)(context/* Context */._);
    (0,external_react_.useEffect)(()=>{
        setDark(document.querySelector("body").classList.contains("dark"));
    }, []);
    const toggleState = (0,external_react_.useMemo)(()=>({
            toggle,
            setToggle
        }), [
        toggle
    ]);
    const themeToggle = (0,external_react_.useMemo)(()=>({
            dark,
            setDark
        }), [
        dark
    ]);
    const moodChange = (value)=>{
        if (value === "dark") {
            document.querySelector("body").classList.add("dark");
            document.querySelector("body").classList.remove("light");
        } else {
            document.querySelector("body").classList.add("light");
            document.querySelector("body").classList.remove("dark");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "switcher",
                style: {
                    display: toggle ? "block" : "none"
                },
                className: "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content-switcher",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "STYLE SWITCHER"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: colors.map((color, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        title: color.name,
                                        className: "color",
                                        onClick: ()=>colorChange(color.name),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: color.colorImg,
                                            alt: color.name
                                        })
                                    }, i)
                                }, i))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "BODY SKIN"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: "dark_switch",
                                    type: "radio",
                                    name: "color_style",
                                    id: "is_light",
                                    defaultValue: "light",
                                    defaultChecked: !themeToggle.dark ? "checked" : "",
                                    onClick: ()=>moodChange("light")
                                }),
                                " ",
                                "Light"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: "dark_switch",
                                    type: "radio",
                                    name: "color_style",
                                    id: "is_dark",
                                    defaultChecked: themeToggle.dark ? "checked" : "",
                                    onClick: ()=>moodChange("dark")
                                }),
                                " ",
                                "Dark"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "",
                            className: "waves-effect waves-light btn font-weight-700 purchase hoverable",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa fa-shopping-cart"
                                }),
                                " Purchase"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "hideSwitcher",
                            onClick: ()=>toggleState.setToggle(false),
                            children: "\xd7"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "showSwitcher",
                className: "styleSecondColor",
                // style={{ display: `${!toggleState.toggle ? "block" : "none"}` }}
                style: {
                    display: "none"
                },
                onClick: ()=>toggleState.setToggle(!toggleState.toggle),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fa fa-cog fa-spin"
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Switcher = (/*#__PURE__*/(0,external_react_.memo)(Switcher));

;// CONCATENATED MODULE: ./src/layout/Layout.js






const Layout = ({ children  })=>{
    const { color  } = (0,external_react_.useContext)(context/* Context */._);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Moscow - Personal Portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Lato:400,700,900",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/font-awesome.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/jquery.animatedheadline.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/materialize.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/style.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: `css/skins/${color}.css`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/styleswitcher.css"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Preloader/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Switcher, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wrapper",
                children: children
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (/*#__PURE__*/(0,external_react_.memo)(Layout));


/***/ })

};
;