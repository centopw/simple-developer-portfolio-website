(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var a=o(n(7294)),l=n(1689),c=n(2441),i=n(5749),s={};function u(e,t,n,r){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.asPath||"/",f=a.default.useMemo((function(){var t=(0,l.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,l.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,b=e.scroll,x=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),y=g&&"object"===typeof g&&g.ref,j=(0,i.useIntersection)({rootMargin:"200px"}),w=r(j,2),k=w[0],N=w[1],E=a.default.useCallback((function(e){k(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,k]);(0,a.useEffect)((function(){var e=N&&t&&(0,l.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,d,p,{locale:r})}),[p,d,N,x,t,n]);var _={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}))}(e,n,d,p,h,m,b,x)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof x?x:n&&n.locale,O=n&&n.isLocaleDomain&&(0,l.getDomainLocale)(p,L,n&&n.locales,n&&n.domainLocales);_.href=O||(0,l.addBasePath)((0,l.addLocale)(p,L,n&&n.defaultLocale))}return a.default.cloneElement(g,_)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,i=(0,o.useRef)(),s=(0,o.useState)(!1),u=r(s,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!l&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),a=n(8391),l="undefined"!==typeof IntersectionObserver;var c=new Map},55:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),o=(n(7294),n(6063)),a=n(1565);function l(){return(0,r.jsxs)("section",{className:"bg-white dark:bg-gray-800",children:[(0,r.jsx)("div",{className:"max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",children:(0,r.jsx)("h1",{className:" text-5xl md:text-9xl font-bold py-20 text-center md:text-left",children:"Projects"})}),(0,r.jsx)("div",{className:"bg-[#F1F1F1] dark:bg-gray-900",children:(0,r.jsx)("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40",children:a.Z.projects.map((function(e,t){return(0,r.jsx)(c,{title:e.title,link:e.link,imgUrl:e.imgUrl,number:"".concat(t+1)})}))})})]})}var c=function(e){var t=e.title,n=e.link,o=e.imgUrl,a=e.number;return(0,r.jsx)("a",{href:n,className:"w-full block shadow-2xl",children:(0,r.jsxs)("div",{className:"relative overflow-hidden",children:[(0,r.jsx)("div",{className:"h-72 object-cover",children:(0,r.jsx)("img",{src:o,alt:"portfolio",className:"transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"})}),(0,r.jsx)("h1",{className:"absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2",children:t}),(0,r.jsx)("h1",{className:"absolute bottom-10 left-10 text-gray-50 font-bold text-xl",children:1===a.length?"0"+a:a})]})})};function i(){return(0,r.jsx)(o.Z,{title:"Projects - Cento",children:(0,r.jsx)(l,{})})}},8947:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(55)}])},1664:function(e,t,n){e.exports=n(6071)},1163:function(e,t,n){e.exports=n(2441)}},function(e){e.O(0,[63,774,888,179],(function(){return t=8947,e(e.s=t);var t}));var t=e.O();_N_E=t}]);