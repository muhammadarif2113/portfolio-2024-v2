"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9924);




const GetInTouch = ()=>{
    const { 0: mailData , 1: setMailData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        message: ""
    });
    const { name , email , message  } = mailData;
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onChange = (e)=>setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    const onSubmit = (e)=>{
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
            clearError();
        } else {
            emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().send("service_seruhwu", "template_21aw58z", mailData, "Q3pccdLZhU-mZT7tQ" // public api
            ).then((response)=>{
                setError(false);
                clearError();
                setMailData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (err)=>{
                console.log(err.text);
            });
        }
    };
    const clearError = ()=>{
        setTimeout(()=>{
            setError(null);
        }, 2000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        sectionName: "Contact",
        title: {
            first: "get",
            last: "in touch"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bl-content",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container page-title center-align",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "center-align",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "data-hover": "get",
                                children: "get "
                            }),
                            "",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "data-hover": "in touch",
                                children: "in touch"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "divider center-align",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "outer-line"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "fa fa-envelope-open",
                                    "aria-hidden": "true"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "outer-line"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row contact section-padding",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col s12 m5 l5 xl4 leftside",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "font-weight-700 uppercase",
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "font-weight-400 second-font",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-envelope"
                                                }),
                                                " saim@saimdev.com"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "font-weight-700 uppercase",
                                            children: "Address"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "font-weight-400 second-font",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-home"
                                                }),
                                                " New York, NY"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "font-weight-700 uppercase",
                                            children: "Social Profiles"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "social",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "list-inline social social-intro center-align p-none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "linkedin",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://www.linkedin.com/in/muhammad-arif-2a9784163",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-linkedin"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "google-plus",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://github.com/muhammadarif2113?tab=repositories",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-github"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "twitter",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-twitter"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col s12 m7 l7 xl8 rightside",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "uppercase m-none font-weight-700",
                                            children: "Feel free to drop me a line"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "col s12 m12 l12 xl10 second-font",
                                                children: "If you have any suggestions, projects, or just want to chat, please fill out the form below and I will reply to you shortly."
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: "contactform",
                                            onSubmit: (e)=>onSubmit(e),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "input-field second-font",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-user prefix"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            id: "name",
                                                            name: "name",
                                                            onChange: (e)=>onChange(e),
                                                            value: name,
                                                            type: "text",
                                                            className: "validate"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "font-weight-400",
                                                            htmlFor: "name",
                                                            children: "Your Name"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "input-field second-font",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-envelope prefix"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            id: "email",
                                                            type: "email",
                                                            name: "email",
                                                            onChange: (e)=>onChange(e),
                                                            value: email,
                                                            className: "validate",
                                                            required: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "email",
                                                            children: "Your Email"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "input-field second-font",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-comments prefix"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            id: "comment",
                                                            name: "message",
                                                            onChange: (e)=>onChange(e),
                                                            value: message,
                                                            className: "materialize-textarea",
                                                            required: "",
                                                            defaultValue: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "comment",
                                                            children: "Your Comment"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col s12 m12 l9 xl8 submit-form",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        className: "btn font-weight-700",
                                                        type: "submit",
                                                        name: "send",
                                                        children: [
                                                            "Send Message ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-send"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col s12 m12 l8 xl8 form-message",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: error ? "red-text" : "green-text",
                                                        style: {
                                                            opacity: error == null ? "0" : "1"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: error ? "Please Fill Required Fields" : "Your message has been received, We will contact you soon."
                                                        })
                                                    })
                                                })
                                            ]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(GetInTouch));


/***/ }),

/***/ 2021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(9424);
;// CONCATENATED MODULE: ./src/utils.js
const directionHover = ()=>{
    const getHoverDirection = function(event) {
        var directions = [
            "top",
            "right",
            "bottom",
            "left"
        ];
        var item = event.currentTarget;
        // Width and height of current item
        var w = item.offsetWidth;
        var h = item.offsetHeight;
        // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
        // Scale (sort of normalize) the coordinate on smallest side to the scale of the longest.
        var x = (event.clientX - item.getBoundingClientRect().left - w / 2) * (w > h ? h / w : 1);
        var y = (event.clientY - item.getBoundingClientRect().top - h / 2) * (h > w ? w / h : 1);
        // Calculate the angle to the center the pointer entered/exited
        // and convert to clockwise format (top/right/bottom/left = 0/1/2/3).
        var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return directions[d];
    };
    var items = document.querySelectorAll("#bl-work-items .col a");
    for(var i = 0; i < items.length; i++){
        // Loop over the registered event types.
        [
            "mouseenter",
            "mouseleave"
        ].forEach(function(eventname) {
            items[i].addEventListener(eventname, function(event) {
                // Retrieve the direction of the enter/leave event.
                var dir = getHoverDirection(event);
                // Reset classes.
                // event.currentTarget.className = 'item hover';
                // > If support for IE11 is not needed.
                // event.currentTarget.classList.remove('mouseenter', 'mouseleave', 'top', 'right', 'bottom', 'left');
                // > If support for IE11 is needed.
                event.currentTarget.classList.remove("mouseenter");
                event.currentTarget.classList.remove("mouseleave");
                event.currentTarget.classList.remove("top");
                event.currentTarget.classList.remove("right");
                event.currentTarget.classList.remove("bottom");
                event.currentTarget.classList.remove("left");
                // Add the event and direction classes.
                // > If support for IE11 is not needed.
                // event.currentTarget.classList.add(event.type, dir);
                // > If support for IE11 is needed.
                event.currentTarget.className += " " + event.type + " " + dir;
            }, false);
        });
    }
};

// EXTERNAL MODULE: ./src/components/SectionContainer.js
var SectionContainer = __webpack_require__(9924);
;// CONCATENATED MODULE: ./src/components/Portfolio.js





const Portfolio = ()=>{
    const { showProjectFunction , activeProjectFunction  } = (0,external_react_.useContext)(context/* Context */._);
    (0,external_react_.useEffect)(()=>{
        directionHover();
    }, []);
    const activeShowProject = (0,external_react_.useCallback)((value)=>{
        showProjectFunction();
        activeProjectFunction(value);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
        sectionName: "work",
        title: {
            first: "my ",
            last: "portfolio"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bl-content",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container page-title center-align",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "center-align",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                "data-hover": "my",
                                children: "my "
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                "data-hover": "portfolio",
                                children: " portfolio"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "divider center-align",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "outer-line"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "fa fa-suitcase",
                                    "aria-hidden": "true"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "outer-line"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row center-align da-thumbs",
                            id: "bl-work-items",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-1",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/projects/applenewsletterclone.html",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/apple.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "valign-wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-weight-700 uppercase",
                                                    children: "Newsletter Email Clone"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://muhammadarif2113.github.io/airline-promo-email/",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/airline.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "valign-wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-weight-700 uppercase",
                                                    children: "PROMOTIONAL EMAIL"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://muhammadarif2113.github.io/transactional-email/",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/myprotein.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "valign-wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-weight-700 uppercase",
                                                    children: "TRANSACTION EMAIL"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://luxaryfreedom.myshopify.com/",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/shopify.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "valign-wrapper",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "font-weight-700 uppercase",
                                                        children: "SHOPIFY THEME"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "",
                                                        style: {
                                                            fontStyle: "italic"
                                                        },
                                                        children: "Password: 123456"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://muhammadarif2113.github.io/nbastore-promo-email",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/nba.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "valign-wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-weight-700 uppercase",
                                                    children: "PROMOTIONAL EMAIL"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/projects/business-kit-v1.html",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/pietrapromo.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "valign-wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-weight-700 uppercase",
                                                    children: "PROMOTIONAL EMAIL"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-7",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/projects/business-kit-news.html",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/pietranews.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "valign-wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-weight-700 uppercase",
                                                    children: "NEWSLETTER EMAIL"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-8",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/projects/vegancuts-welcome.html",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/vegancuts.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "valign-wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-weight-700 uppercase",
                                                    children: "KLAVIYO EMAIL"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-9",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/projects/honey-welcome.html",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/klaviyohoney.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "valign-wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-weight-700 uppercase",
                                                    children: "KLAVIYO EMAIL"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col s12 m6 l6 xl4",
                                    "data-panel": "panel-9",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/projects/suckerz-welcome.html",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "responsive-img",
                                                src: "images/projects/klaviyosuckerz.png",
                                                alt: "Project"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "valign-wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-weight-700 uppercase",
                                                    children: "KLAVIYO EMAIL"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Portfolio = (/*#__PURE__*/(0,external_react_.memo)(Portfolio));


/***/ }),

/***/ 9924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9424);



const SectionContainer = ({ children , sectionName , title  })=>{
    const { openSection , closeSection , nav  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__/* .Context */ ._);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: nav === sectionName ? "bl-expand bl-expand-top" : "",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bl-box valign-wrapper",
                onClick: ()=>openSection(sectionName),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "page-title center-align",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "center-align",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                "data-hover": title.first,
                                children: [
                                    title.first,
                                    " "
                                ]
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "data-hover": title.last,
                                children: title.last
                            })
                        ]
                    })
                })
            }),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: "close",
                src: "images/close-button.png",
                className: "bl-icon-close",
                onClick: ()=>closeSection()
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(SectionContainer));


/***/ }),

/***/ 7313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([typed_js__WEBPACK_IMPORTED_MODULE_2__]);
typed_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TypingAnimation = ({ data  })=>{
    // Create Ref element.
    const el = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const typed = new typed_js__WEBPACK_IMPORTED_MODULE_2__["default"](el.current, {
            strings: data ? data : [
                "Developer",
                "Marketer",
                "Designer"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: false
        });
        // Destropying
        return ()=>{
            typed.destroy();
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "ah-words-wrapper",
        style: {
            width: "206.288px",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            className: "is-visible",
            ref: el
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(TypingAnimation));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;