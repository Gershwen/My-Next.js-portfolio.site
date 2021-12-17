"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MyLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next/Head"
var Head_ = __webpack_require__(824);
var Head_default = /*#__PURE__*/__webpack_require__.n(Head_);
// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__(514);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: ./components/Header.js

//using Link from the Next API to ensure client side navigation. Otherwise the request will be made to the server.

//the below style get passed to the a tags as variable
const linkStyle = {
    marginRight: 15
};
//this component holds the links to other pages. It acts as a Navbar.
const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: linkStyle,
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: linkStyle,
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: "/projects",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: linkStyle,
                    children: "Projects"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: linkStyle,
                    children: "Contact Me"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/MyLayout.js


//the Head allows us to pass in CDN's like google fonts and react-bootstrap

//Header components holds the links that behave as the navbar

//below styles will apply a general layout for all pages.
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
};
//the layout component is what we will wrap all pages in to pass the same styles to all pages.
const Layout = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-ffe5581eb7e7c405",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Head_default()), {
                /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
                    integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
                    crossorigin: "anonymous",
                    className: "jsx-ffe5581eb7e7c405"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: layoutStyle,
                className: "jsx-ffe5581eb7e7c405",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                    }),
                    props.children
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "ffe5581eb7e7c405",
                children: "h1 {font-family:\"Poppins\", sans-serif;\nfont-weight:500;\nmargin:1.2em 0 1.2em 0}\nh2 {font-family:\"Poppins\", sans-serif;\nfont-weight:400}\nh3 {font-family:\"Poppins\", sans-serif;\nfont-weight:400;\nfont-size:1em}"
            })
        ]
    }));
};
/* harmony default export */ const MyLayout = (Layout);


/***/ })

};
;