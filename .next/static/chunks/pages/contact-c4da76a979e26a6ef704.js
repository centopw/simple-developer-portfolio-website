(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{7375:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}r.d(t,{Z:function(){return n}})},6071:function(e,t,r){"use strict";var n=r(3038),l=r(862);t.default=void 0;var s=l(r(7294)),o=r(1689),a=r(2441),i=r(5749),c={};function d(e,t,r,n){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(l?"%"+l:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,r=(0,a.useRouter)(),l=r&&r.asPath||"/",u=s.default.useMemo((function(){var t=(0,o.resolveHref)(l,e.href,!0),r=n(t,2),s=r[0],a=r[1];return{href:s,as:e.as?(0,o.resolveHref)(l,e.as):a||s}}),[l,e.href,e.as]),f=u.href,h=u.as,x=e.children,m=e.replace,p=e.shallow,v=e.scroll,g=e.locale;"string"===typeof x&&(x=s.default.createElement("a",null,x));var b=s.Children.only(x),w=b&&"object"===typeof b&&b.ref,j=(0,i.useIntersection)({rootMargin:"200px"}),y=n(j,2),C=y[0],N=y[1],M=s.default.useCallback((function(e){C(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,C]);(0,s.useEffect)((function(){var e=N&&t&&(0,o.isLocalURL)(f),n="undefined"!==typeof g?g:r&&r.locale,l=c[f+"%"+h+(n?"%"+n:"")];e&&!l&&d(r,f,h,{locale:n})}),[h,f,N,g,t,r]);var L={ref:M,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,r,n,l,s,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),t[l?"replace":"push"](r,n,{shallow:s,locale:i,scroll:a}))}(e,r,f,h,m,p,v,g)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(r,f,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var k="undefined"!==typeof g?g:r&&r.locale,H=r&&r.isLocaleDomain&&(0,o.getDomainLocale)(h,k,r&&r.locales,r&&r.domainLocales);L.href=H||(0,o.addBasePath)((0,o.addLocale)(h,k,r&&r.defaultLocale))}return s.default.cloneElement(b,L)};t.default=u},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,i=(0,l.useRef)(),c=(0,l.useState)(!1),d=n(c,2),u=d[0],f=d[1],h=(0,l.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||u||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=a.get(t);if(r)return r;var n=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(t,r={id:t,observer:l,elements:n}),r}(r),l=n.id,s=n.observer,o=n.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),a.delete(l))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return(0,l.useEffect)((function(){if(!o&&!u){var e=(0,s.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[u]),[h,u]};var l=r(7294),s=r(8391),o="undefined"!==typeof IntersectionObserver;var a=new Map},3918:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(5893),l=(r(7294),r(6063)),s=r(1565);function o(){return(0,n.jsxs)("section",{children:[(0,n.jsx)("div",{className:"max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased",children:(0,n.jsx)("h1",{className:" text-5xl md:text-9xl font-bold py-20 text-center md:text-left",children:"Contact"})}),(0,n.jsx)("div",{className:"relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4",children:(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,n.jsxs)("div",{className:"md:ml-4",children:[(0,n.jsxs)("header",{className:"",children:[(0,n.jsx)("h1",{className:"text-gray-50 font-semibold text-2xl",children:"Get in touch, let's talk."}),(0,n.jsx)("p",{className:"font-light text-base text-gray-200 mt-2",children:"Fill in the details and I'll get back to you as soon as I can."})]}),(0,n.jsxs)("div",{className:"icons-container inline-flex flex-col my-20",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-telephone-fill h-4 w-4 text-blue-500",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"})}),(0,n.jsx)("p",{className:"text-gray-50 font-light text-sm",children:s.Z.phone})]}),(0,n.jsxs)("div",{className:"flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope-fill h-4 w-4 text-blue-500",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"})}),(0,n.jsx)("p",{className:"text-gray-50 font-light text-sm",children:s.Z.email})]}),(0,n.jsxs)("div",{className:"flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pin-fill h-4 w-4 text-blue-500",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"})}),(0,n.jsx)("p",{className:"text-gray-50 font-light text-sm",children:s.Z.address})]})]}),(0,n.jsxs)("div",{className:"social-icons flex flex-row space-x-8",children:[(0,n.jsx)("a",{href:s.Z.socialLinks.facebook,className:"h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",children:(0,n.jsx)("svg",{width:"24",height:"24",className:"text-gray-50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z",fill:"currentColor"})})}),(0,n.jsx)("a",{href:s.Z.socialLinks.twitter,className:"h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",children:(0,n.jsx)("svg",{width:"24",height:"24",className:"text-gray-50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z",fill:"currentColor"})})}),(0,n.jsx)("a",{href:s.Z.socialLinks.instagram,className:"h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",children:(0,n.jsxs)("svg",{width:"24",height:"24",className:"text-gray-50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z",fill:"currentColor"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z",fill:"currentColor"})]})})]})]}),(0,n.jsxs)("form",{className:"form rounded-lg bg-white p-4 flex flex-col",children:[(0,n.jsxs)("label",{htmlFor:"name",className:"text-sm text-gray-600 mx-4",children:[" ","Your Name"]}),(0,n.jsx)("input",{type:"text",className:"font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500",name:"name"}),(0,n.jsx)("label",{htmlFor:"email",className:"text-sm text-gray-600 mx-4 mt-4",children:"Email"}),(0,n.jsx)("input",{type:"text",className:"font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500",name:"email"}),(0,n.jsx)("label",{htmlFor:"message",className:"text-sm text-gray-600 mx-4 mt-4",children:"Message"}),(0,n.jsx)("textarea",{rows:"4",type:"text",className:"font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500",name:"message"}),(0,n.jsx)("button",{type:"submit",className:"bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold",children:"Send Message"})]})]})})]})}function a(){return(0,n.jsx)(l.Z,{children:(0,n.jsx)(o,{})})}},3269:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(3918)}])},1664:function(e,t,r){e.exports=r(6071)},1163:function(e,t,r){e.exports=r(2441)}},function(e){e.O(0,[63,774,888,179],(function(){return t=3269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);