!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?E.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return u(e,l,r,o,null)}function u(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++C:o};return null==o&&null!=P.vnode&&P.vnode(i),i}function l(e){return e.children}function _(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function a(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return a(e)}}function f(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!s.__r++||T!==P.debounceRendering)&&((T=P.debounceRendering)||H)(s)}function s(){for(var e;s.__r=I.length;)e=I.sort((function(e,t){return e.__v.__b-t.__v.__b})),I=[],e.some((function(e){var t,n,o,i,u,l;e.__d&&(u=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,g(l,i,o,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?c(i):u,i.__h),k(n,i),i.__e!=u&&a(i)))}))}function d(e,t,n,r,o,i,_,a,f,s){var d,h,y,m,b,k,O,j=r&&r.__k||q,S=j.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(m=n.__k[d]=null==(m=t[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(l,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=j[d])||y&&m.key==y.key&&m.type===y.type)j[d]=void 0;else for(h=0;h<S;h++){if((y=j[h])&&m.key==y.key&&m.type===y.type){j[h]=void 0;break}y=null}g(e,m,y=y||N,o,i,_,a,f,s),b=m.__e,(h=m.ref)&&y.ref!=h&&(O||(O=[]),y.ref&&O.push(y.ref,null,m),O.push(h,m.__c||b,m)),null!=b?(null==k&&(k=b),"function"==typeof m.type&&m.__k===y.__k?m.__d=f=p(m,f,e):f=v(e,m,y,j,b,f),"function"==typeof n.type&&(n.__d=f)):f&&y.__e==f&&f.parentNode!=e&&(f=c(y))}for(n.__e=k,d=S;d--;)null!=j[d]&&("function"==typeof n.type&&null!=j[d].__e&&j[d].__e==n.__d&&(n.__d=c(r,d+1)),x(j[d],j[d]));if(O)for(d=0;d<O.length;d++)w(O[d],O[++d],O[++d])}function p(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?p(r,t,n):v(n,r,r,o,r.__e,t));return t}function v(e,t,n,r,o,i){var u,l,_;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),u=null;else{for(l=i,_=0;(l=l.nextSibling)&&_<r.length;_+=2)if(l==o)break e;e.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function h(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||D.test(t)?n:n+"px"}function y(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||h(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||h(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?b:m,i):e.removeEventListener(t,i?b:m,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function m(e){this.l[e.type+!1](P.event?P.event(e):e)}function b(e){this.l[e.type+!0](P.event?P.event(e):e)}function g(e,t,n,o,i,u,c,a,f){var s,p,v,h,y,m,b,g,k,w,x,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(f=n.__h,a=t.__e=n.__e,t.__h=null,u=[a]),(s=P.__b)&&s(t);try{e:if("function"==typeof S){if(g=t.props,k=(s=S.contextType)&&o[s.__c],w=s?k?k.props.value:s.__:o,n.__c?b=(p=t.__c=n.__c).__=p.__E:("prototype"in S&&S.prototype.render?t.__c=p=new S(g,w):(t.__c=p=new _(g,w),p.constructor=S,p.render=j),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=w,p.__n=o,v=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=S.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,S.getDerivedStateFromProps(g,p.__s))),h=p.props,y=p.state,v)null==S.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==h&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,w)||t.__v===n.__v){p.props=g,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&c.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(h,y,m)}))}p.context=w,p.props=g,p.state=p.__s,(s=P.__r)&&s(t),p.__d=!1,p.__v=t,p.__P=e,s=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),v||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(h,y)),x=null!=s&&s.type===l&&null==s.key?s.props.children:s,d(e,Array.isArray(x)?x:[x],t,n,o,i,u,c,a,f),p.base=t.__e,t.__h=null,p.__h.length&&c.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,o,i,u,c,f);(s=P.diffed)&&s(t)}catch(e){t.__v=null,(f||null!=u)&&(t.__e=a,t.__h=!!f,u[u.indexOf(a)]=null),P.__e(e,t,n)}}function k(e,t){P.__c&&P.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){P.__e(e,t.__v)}}))}function O(e,t,n,r,i,u,l,_){var a,f,s,p=n.props,v=t.props,h=t.type,m=0;if("svg"===h&&(i=!0),null!=u)for(;m<u.length;m++)if((a=u[m])&&"setAttribute"in a==!!h&&(h?a.localName===h:3===a.nodeType)){e=a,u[m]=null;break}if(null==e){if(null===h)return document.createTextNode(v);e=i?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,v.is&&v),u=null,_=!1}if(null===h)p===v||_&&e.data===v||(e.data=v);else{if(u=u&&E.call(e.childNodes),f=(p=n.props||N).dangerouslySetInnerHTML,s=v.dangerouslySetInnerHTML,!_){if(null!=u)for(p={},m=0;m<e.attributes.length;m++)p[e.attributes[m].name]=e.attributes[m].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||y(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||y(e,i,t[i],n[i],r)}(e,v,p,i,_),s)t.__k=[];else if(m=t.props.children,d(e,Array.isArray(m)?m:[m],t,n,r,i&&"foreignObject"!==h,u,l,u?u[0]:n.__k&&c(n,0),_),null!=u)for(m=u.length;m--;)null!=u[m]&&o(u[m]);_||("value"in v&&void 0!==(m=v.value)&&(m!==p.value||m!==e.value||"progress"===h&&!m)&&y(e,"value",m,p.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==e.checked&&y(e,"checked",m,p.checked,!1))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){P.__e(e,n)}}function x(e,t,n){var r,i;if(P.unmount&&P.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){P.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&x(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function j(e,t,n){return this.constructor(e,n)}function S(e,t,n){var r,o,u;P.__&&P.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,u=[],g(t,e=(!r&&n||t).__k=i(l,null,[e]),o||N,N,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?E.call(t.childNodes):null,u,!r&&n?n:o?o.__e:t.firstChild,r),k(u,e)}function A(e,t){S(e,t,A)}n.d(t,"d",(function(){return S})),n.d(t,"b",(function(){return A})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return P}));var E,P,C,I,H,T,N={},q=[],D=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;E=q.slice,P={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},C=0,_.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},_.prototype.render=l,I=[],H="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s.__r=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=r.a,i=r.d,u=function(e){return e&&e.default?e.default:e};if("function"==typeof u(n("qVkA"))){var l=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=u(n("qVkA")),t={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(t=JSON.parse(decodeURI(r.innerHTML)).preRenderData||t);var _;t.url&&(_=t.url);l=i(o(e,{CLI_DATA:{preRenderData:t}}),document.body,l)}()}},qVkA:function(e,t,n){"use strict";function r(e,t){P.c.__h&&P.c.__h(A,e,C||t),C=0;var n=A.__H||(A.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){return C=1,function(e,t,n){var o=r(S++,2);return o.t=e,o.__c||(o.__=[n?n(t):d(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=A),o.__}(d,e)}function i(e,t){var n=r(S++,3);!P.c.__s&&s(n.__H,t)&&(n.__=e,n.__H=t,A.__H.__h.push(n))}function u(e,t){var n=r(S++,4);!P.c.__s&&s(n.__H,t)&&(n.__=e,n.__H=t,A.__h.push(n))}function l(e){return C=5,_((function(){return{current:e}}),[])}function _(e,t){var n=r(S++,7);return s(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function c(){var e;for(I.sort((function(e,t){return e.__v.__b-t.__v.__b}));e=I.pop();)if(e.__P)try{e.__H.__h.forEach(a),e.__H.__h.forEach(f),e.__H.__h=[]}catch(t){e.__H.__h=[],P.c.__e(t,e.__v)}}function a(e){var t=A,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),A=t}function f(e){var t=A;e.__c=e.__(),A=t}function s(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function d(e,t){return"function"==typeof t?t(e):t}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function y(e,t,n,r,o,i,u){try{var l=e[i](u),_=l.value}catch(e){return void n(e)}l.done?t(_):Promise.resolve(_).then(r,o)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||O(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){var n=e.getAttribute("squidex-token");if(!n&&"IMG"===e.nodeName){var r=e.src;if(r){var o,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=O(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){l=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(o=i.n()).done;){var u=o.value;if(0===r.indexOf(u)){var l,_,c=r.substring(u.length+1).split("/");if("api"===c[0]&&"assets"===c[1]&&(null===(l=c[2])||void 0===l?void 0:l.length)>0&&(null===(_=c[3])||void 0===_?void 0:_.length)>0)return{u:u,a:c[2],i:c[3]}}}}catch(e){i.e(e)}finally{i.f()}if(0===r.indexOf(R)){var a,f,s=r.substring(R.length+1).split("/");if((null===(a=s[0])||void 0===a?void 0:a.length)>0&&(null===(f=s[1])||void 0===f?void 0:f.length)>0)return{u:R,a:s[0],i:s[1]}}}}if(!n)return null;try{var d=atob(n),p=JSON.parse(d);if(!p.u||!p.i||!p.a)return null;for(;p.u.endsWith("/");)p.u=p.u.substring(0,p.u.length-1);return p}catch(e){return null}}function j(){var e;e=B,V||(V=document.body.appendChild(document.createElement("div"))),Object(P.d)(Object(P.a)(W,{baseUrl:e}),V),function(){var e;if(!B)return;var t=document.createElement("link");t.rel="stylesheet",t.href="".concat(B,"/scripts/embed-sdk.css"),t.type="text/css",null===(e=document.head)||void 0===e||e.appendChild(t)}()}n.r(t);var S,A,E,P=n("hosL"),C=0,I=[],H=P.c.__b,T=P.c.__r,N=P.c.diffed,q=P.c.__c,D=P.c.unmount;P.c.__b=function(e){A=null,H&&H(e)},P.c.__r=function(e){T&&T(e),S=0;var t=(A=e.__c).__H;t&&(t.__h.forEach(a),t.__h.forEach(f),t.__h=[])},P.c.diffed=function(e){N&&N(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==I.push(t)&&E===P.c.requestAnimationFrame||((E=P.c.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),L&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);L&&(t=requestAnimationFrame(n))})(c)),A=null},P.c.__c=function(e,t){t.some((function(e){try{e.__h.forEach(a),e.__h=e.__h.filter((function(e){return!e.__||f(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],P.c.__e(n,e.__v)}})),q&&q(e,t)},P.c.unmount=function(e){D&&D(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{a(e)}catch(e){t=e}})),t&&P.c.__e(t,n.__v))};var L="function"==typeof requestAnimationFrame,M=function(e){var t=e.url,n=e.onClose;return Object(P.a)("div",{class:"squidex-iframe"},Object(P.a)("button",{class:"squidex-iframe-close",onClick:n},Object(P.a)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},Object(P.a)("path",{d:"M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"}))),Object(P.a)("iframe",{src:t,frameBorder:0}))},U=function(e){var t,n,r,c,a,f,s=e.onOpen,d=e.target,v=e.token,h=l(),y=l(),m=l(),b=p(o(0),2),g=b[1];i((function(){g((function(e){return e+1}))}),[v]),i((function(){function e(){var e=d.getBoundingClientRect(),t=m.current;t&&e.height===t.height&&e.width===t.width&&e.x===t.x&&e.y===t.y||(m.current=e,g((function(e){return e+1})))}document.body.addEventListener("scroll",e);var t=setInterval((function(){e()}),500);return e(),function(){clearInterval(t),document.body.removeEventListener("scroll",e)}}),[d]),u((function(){if(h.current){var e=h.current.getBoundingClientRect(),t=y.current;t&&e.height===t.height&&e.width===t.width||(y.current=e,g((function(e){return e+1})))}}),[g]);var k=_((function(){var e=v.a,t=v.i,n=v.s,r=v.u;return n?"".concat(r,"/app/").concat(e,"/content/").concat(n,"/").concat(t):"".concat(r,"/app/").concat(e,"/assets/?ref=").concat(t)}),[v]),O=_((function(){var e=v.a,t=v.i,n=v.s,r=v.u;return n?"".concat(r,"/embed/app/").concat(e,"/content/").concat(n,"/").concat(t):"".concat(r,"/embed/app/").concat(e,"/assets/?ref=").concat(t)}),[v]),w=((null===(t=m.current)||void 0===t?void 0:t.x)||0)-2,x=((null===(n=m.current)||void 0===n?void 0:n.y)||0)-2,j=((null===(r=m.current)||void 0===r?void 0:r.width)||0)+4,S=((null===(c=m.current)||void 0===c?void 0:c.height)||0)+4,A=(null===(a=y.current)||void 0===a?void 0:a.width)||0,E=(null===(f=y.current)||void 0===f?void 0:f.height)||0,C=w,I=x-E+2;return I<0&&(I=x+S-2),I+E>window.innerHeight&&(C=window.innerHeight-E),C<0&&(C=0),C+A>window.innerWidth&&(C=window.innerWidth-A),Object(P.a)("div",{class:"squidex-overlay"},Object(P.a)("div",{class:"squidex-overlay-border",style:{left:w,top:x,width:j,height:S}}),Object(P.a)("div",{class:"squidex-overlay-toolbar",style:{left:C,top:I},ref:h},Object(P.a)("div",{class:"squidex-overlay-schema"},(null==v?void 0:v.s)||"Asset"),Object(P.a)("div",{class:"squidex-overlay-links","data-links":!0},Object(P.a)("a",{onClick:function(){return s(O)}},"Edit Inline"),Object(P.a)("a",{href:k,target:"_blank"},"Edit In Squidex"))))},F={x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY},W=function(e){var t=l(),n=k(o({}),2),r=n[0],u=n[1],c=k(o(),2),a=c[0],f=c[1],s=k(o(),2),d=s[0],p=s[1],v=l(r);i((function(){function e(e){var t=e.target;if(t&&!function(e){for(var t=e;t;){if("squidex-overlay-toolbar"===t.className)return!0;t=t.parentElement}return!1}(t)){var o=function(e,t){for(var n=e;n;){var r=x(n,t);if(r)return{token:r,target:n};n=n.parentElement}return{}}(t,Object.keys(v.current)),i=o.token,u=o.target,l={x:e.clientX,y:e.clientY};i&&u?(r(u,i),n=l):Math.abs(l.x-n.x)+Math.abs(l.y-n.y)>20&&r(void 0,void 0),t}}var t=void 0,n=F,r=function(e,n){e!==t&&(f(e&&n?{target:e,token:n}:void 0),t=e)};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}}),[]);var m,O=(m=function(e){if(e&&!v.current[e]){var t=function(t){var n=b(b({},v.current),{},g({},e,t));v.current=n,u(n)};if(0!==e.indexOf("http://")){var n=function(){var n,r=(n=function*(){t("Pending");try{var n=yield fetch("".concat(e,"/identity-server/info"),{credentials:"include"}),r=yield n.json();t(r.displayName?"Authenticated":"Failed")}catch(e){t("Failed")}},function(){var e=this,t=arguments;return new Promise((function(r,o){function i(e){y(l,r,o,i,u,"next",e)}function u(e){y(l,r,o,i,u,"throw",e)}var l=n.apply(e,t);i(void 0)}))});return function(){return r.apply(this,arguments)}}();n()}else t("Authenticated")}},C=8,_((function(){return m}),[r]));i((function(){O(e.baseUrl)}),[e.baseUrl]),i((function(){O(null==a?void 0:a.token.u)}),[null==a?void 0:a.token.u]);var w="Authenticated"===r[null==a?void 0:a.token.u];return Object(P.a)("div",{class:"squidex",ref:t},a&&w&&Object(P.a)(U,h({onOpen:p},a)),d&&Object(P.a)(M,{url:d,onClose:function(){return p(void 0)}}))},R="https://assets.squidex.io",V=null,B=function(){var e,t,n=null===(e=document.currentScript)||void 0===e?void 0:e.src;if(!("string"==typeof(t=n)||t instanceof String))return null;var r=(n=n.trim()).indexOf("/","https://".length);return r>0&&(n=n.substring(0,r)),n}();"complete"===document.readyState?j():window.addEventListener("load",(function(){return j()}))}});
//# sourceMappingURL=embed-sdk.js.map