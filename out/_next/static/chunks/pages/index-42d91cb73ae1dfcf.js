(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4186)}])},4636:function(e,t){"use strict";let n=e=>{let{src:t}=e;return t};t.Z=n},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),a=n(1003),i=n(7795),u=n(4465),c=n(2692),f=n(8245),s=n(9246),d=n(227),p=n(3468);let _=new Set;function h(e,t,n,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(_.has(l))return;_.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function v(e){return"string"==typeof e?e:i.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let n,o;let{href:i,as:_,children:m,prefetch:y,passHref:g,replace:b,shallow:j,scroll:x,locale:C,onClick:M,onMouseEnter:k,onTouchStart:E,legacyBehavior:w=!1}=e,O=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,w&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let P=!1!==y,L=l.default.useContext(c.RouterContext),H=l.default.useContext(f.AppRouterContext),S=null!=L?L:H,I=!L,{href:N,as:T}=l.default.useMemo(()=>{if(!L){let e=v(i);return{href:e,as:_?v(_):e}}let[t,n]=a.resolveHref(L,i,!0);return{href:t,as:_?a.resolveHref(L,_):n||t}},[L,i,_]),R=l.default.useRef(N),Z=l.default.useRef(T);w&&(o=l.default.Children.only(n));let D=w?o&&"object"==typeof o&&o.ref:t,[K,U,X]=s.useIntersection({rootMargin:"200px"}),A=l.default.useCallback(e=>{(Z.current!==T||R.current!==N)&&(X(),Z.current=T,R.current=N),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[T,D,N,X,K]);l.default.useEffect(()=>{S&&U&&P&&h(S,N,T,{locale:C})},[T,N,U,C,P,null==L?void 0:L.locale,S]);let B={ref:A,onClick(e){w||"function"!=typeof M||M(e),w&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,o,r,i,u,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let _=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:i,locale:c,scroll:u}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!s})};f?l.default.startTransition(_):_()}(e,S,N,T,b,j,x,C,I,P)},onMouseEnter(e){w||"function"!=typeof k||k(e),w&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&(P||!I)&&h(S,N,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){w||"function"!=typeof E||E(e),w&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&(P||!I)&&h(S,N,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!w||g||"a"===o.type&&!("href"in o.props)){let G=void 0!==C?C:null==L?void 0:L.locale,z=(null==L?void 0:L.isLocaleDomain)&&d.getDomainLocale(T,G,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);B.href=z||p.addBasePath(u.addLocale(T,G,null==L?void 0:L.defaultLocale))}return w?l.default.cloneElement(o,B):l.default.createElement("a",Object.assign({},O,B),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!l,[f,s]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!c&&!f&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=i.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},i.push(n),a.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(o);let t=i.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&i.splice(t,1)}}}(d,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){let o=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(o)}},[d,c,n,t,f]);let _=o.useCallback(()=>{s(!1)},[]);return[p,f,_]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4186:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _}});var o=n(5893),r=n(9008),l=n.n(r),a=n(5675),i=n.n(a),u=n(1502),c=n.n(u),f=n(4636),s=n(1664),d=n.n(s);let p=e=>{let{characters:t}=e;return(0,o.jsxs)("div",{className:c().container,children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:"Create Nexts App"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),t.map(e=>(0,o.jsxs)("div",{children:[(0,o.jsx)(d(),{href:"/characters/".concat(e.id),children:(0,o.jsx)("h3",{children:e.name})}),(0,o.jsx)(i(),{loader:f.Z,unoptimized:!0,src:e.image,alt:e.name,width:200,height:200})]},e.id))]})};var _=!0;t.default=p},1502:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);