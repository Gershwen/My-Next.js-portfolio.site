(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3629:function(e,n,t){e.exports=t(5443)},4045:function(e,n,t){e.exports=t(8418)},3269:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(9144)}])},6853:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),o=t(5988),i=t(3629),a=t(4045),c={marginRight:15},u=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{style:c,children:"Home"})}),(0,r.jsx)(a.default,{href:"/about",children:(0,r.jsx)("a",{style:c,children:"About"})}),(0,r.jsx)(a.default,{href:"/projects",children:(0,r.jsx)("a",{style:c,children:"Projects"})}),(0,r.jsx)(a.default,{href:"/contact",children:(0,r.jsx)("a",{style:c,children:"Contact Me"})})]})},l={margin:20,padding:20,border:"1px solid #DDD"},s=function(e){return(0,r.jsxs)("div",{className:"jsx-ffe5581eb7e7c405",children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",crossorigin:"anonymous",className:"jsx-ffe5581eb7e7c405"})}),(0,r.jsxs)("div",{style:l,className:"jsx-ffe5581eb7e7c405",children:[(0,r.jsx)(u,{}),e.children]}),(0,r.jsx)(o.default,{id:"ffe5581eb7e7c405",children:'h1 {font-family:"Poppins", sans-serif;\nfont-weight:500;\nmargin:1.2em 0 1.2em 0}\nh2 {font-family:"Poppins", sans-serif;\nfont-weight:400}\nh3 {font-family:"Poppins", sans-serif;\nfont-weight:400;\nfont-size:1em}'})]})}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(6273),c=t(387),u=t(7190);var l={};function s(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var n=r(a.resolveHref(o,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?a.resolveHref(o,e.as):i||t}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var j=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,x=r(u.useIntersection({rootMargin:"200px"}),2),b=x[0],w=x[1],E=i.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);i.default.useEffect((function(){var e=w&&t&&a.isLocalURL(d),n="undefined"!==typeof g?g:o&&o.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&s(o,d,h,{locale:n})}),[h,d,w,g,t,o]);var _={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:u,scroll:c}))}(e,o,d,h,v,y,m,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&s(o,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof g?g:o&&o.locale,L=o&&o.isLocaleDomain&&a.getDomainLocale(h,M,o&&o.locales,o&&o.domainLocales);_.href=L||a.addBasePath(a.addLocale(h,M,o&&o.defaultLocale))}return i.default.cloneElement(n,_)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,u=o.useRef(),l=r(o.useState(!1),2),s=l[0],f=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||s||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!a&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),i=t(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},9144:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(6853),i=t(4045);n.default=function(){return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h1",{children:"Contact Me"}),(0,r.jsx)(i.default,{className:"email",href:"mailto:gershwen@gmail.com",children:(0,r.jsx)("a",{children:"gershwen@gmail.com"})}),(0,r.jsx)("h3",{children:"cell: 0720101062"})]})}},7884:function(e,n,t){"use strict";n.default=u;var r,o=(r=t(7294))&&r.__esModule?r:{default:r},i=t(8122),a=t(9035);var c=o.default.useInsertionEffect||o.default.useLayoutEffect;function u(e){var n=(0,i.useStyleRegistry)();return n?"undefined"===typeof window?(n.add(e),null):(c((function(){return n.add(e),function(){n.remove(e)}}),[e.id,String(e.dynamic)]),null):null}u.dynamic=function(e){return e.map((function(e){var n=e[0],t=e[1];return(0,a.computeId)(n,t)})).join(" ")}},5988:function(e,n,t){e.exports=t(7884)}},function(e){e.O(0,[774,888,179],(function(){return n=3269,e(e.s=n);var n}));var n=e.O();_N_E=n}]);