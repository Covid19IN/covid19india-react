(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[15],{101:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"f",(function(){return o})),a.d(t,"i",(function(){return c})),a.d(t,"j",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"h",(function(){return m}));var n={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},i={position:"absolute",transform:"translate3d(10rem, 0, 0)"},r={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},o={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},c={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},l={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},s={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},u={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},d={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},m={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},128:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},151:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(81),i=(a(151),a(112)),r=a.n(i),o=a(127),c=a(0),l=a.n(c),s=function(e){var t=e.title,a=e.calories;e.image;return l.a.createElement("div",null,l.a.createElement("h1",null,t),l.a.createElement("p",null," ",a," "),l.a.createElement("img",{src:"{image}",alt:"{title}"}))},u=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],i=t[1];Object(c.useEffect)((function(){u()}),[]);var u=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mnrlive.github.io/api/website_data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{classname:"Blog"},a.map((function(e){return l.a.createElement(s,{key:e.faq.question,title:e.faq.question,calories:e.recipe.calories,image:e.faq.image})})))},d=a(101),m=a(128),p=a(208),b=a(209),h=a(210),f=a(211),v=a(212),g=a(251),E=a(38),w=a(84),k=a(207),j=a(243);function y(e){var t=this,a=e.pages,n=e.setExpand,i=e.darkMode,r=e.windowSize,o=Object(c.useRef)(null),s=Object(g.a)().t,u=Object(c.useCallback)((function(){r.width>768&&n(!1)}),[n,r.width]);return l.a.createElement("div",{className:"expand",ref:o,onMouseLeave:u},a.map((function(e,a){return!0===e.showInNavbar?l.a.createElement(E.b,Object.assign({to:e.pageLink,key:a},r.width<769&&{onClick:n.bind(t,!1)}),l.a.createElement("span",N(e.pageLink,e.animationDelayForNavbar),s(e.displayName))):null})),r.width<768&&l.a.createElement(x,{darkMode:i}),l.a.createElement("div",{className:"expand-bottom"},l.a.createElement("h5",null,s("A crowdsourced initiative."))))}var O=function(e){var t,a=e.pages,i=e.darkMode,r=e.showLanguageSwitcher,o=e.setShowLanguageSwitcher,s=Object(g.a)(),u=s.i18n,f=s.t,v=Object.keys(m).includes(null===u||void 0===u?void 0:u.language)?null===u||void 0===u?void 0:u.language:null===u||void 0===u||null===(t=u.options)||void 0===t?void 0:t.fallbackLng[0],O=Object(c.useState)(!1),N=Object(n.a)(O,2),L=N[0],z=N[1];Object(k.a)(L);var C=Object(j.a)(),I=Object(w.c)((function(){return{opacity:0}})),M=Object(n.a)(I,3),q=M[0],B=M[1],T=M[2];B({opacity:1}),T();var A=Object(w.f)(L,null,{from:C.width<769?d.d:d.c,enter:C.width<769?d.f:d.e,leave:C.width<769?d.d:d.c,config:{mass:1,tension:210,friction:26}}),J=Object(c.useCallback)((function(){C.width>769&&z(!0)}),[C.width]),P=Object(c.useCallback)((function(){L&&z(!1),o(!r)}),[L,r,z,o]);return l.a.createElement(w.a.div,{className:"Navbar",style:q},l.a.createElement("div",{className:"navbar-left",onClick:P.bind(this)},m[v]),l.a.createElement("div",{className:"navbar-middle"},l.a.createElement(E.b,{to:"/",onClick:z.bind(this,!1)},"Covid19",l.a.createElement("span",null,"India"))),l.a.createElement("div",Object.assign({className:"navbar-right",onMouseEnter:J},C.width<769&&{onClick:z.bind(this,!L)}),C.width<769&&l.a.createElement("span",null,f(L?"Close":"Menu")),C.width>769&&l.a.createElement(l.a.Fragment,null,l.a.createElement(E.b,{to:"/"},l.a.createElement("span",null,l.a.createElement(p.a,S("/")))),l.a.createElement(E.b,{to:"/blog"},l.a.createElement("span",null,l.a.createElement(b.a,S("/blog")))),l.a.createElement(E.b,{to:"/about"},l.a.createElement("span",null,l.a.createElement(h.a,S("/about")))),l.a.createElement("span",null,l.a.createElement(x,{darkMode:i})))),A.map((function(e){var t=e.item,n=e.key,r=e.props;return t?l.a.createElement(w.a.div,{key:n,style:r},l.a.createElement(y,{pages:a,setExpand:z,darkMode:i,windowSize:C})):l.a.createElement(w.a.div,{key:n,style:r})})))},N=function(e,t){return{className:"".concat(window.location.pathname===e?"focused":"")}},S=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},x=function(e){var t=e.darkMode;return l.a.createElement("div",{className:"SunMoon",onClick:t.toggle},l.a.createElement("div",null,t.value?l.a.createElement(f.a,{color:"#ffc107"}):l.a.createElement(v.a,null)))},L=a(5),z=a(160),C=Object(c.lazy)((function(){return Promise.all([a.e(3),a.e(5),a.e(16)]).then(a.bind(null,249))})),I=Object(c.lazy)((function(){return Promise.all([a.e(3),a.e(18)]).then(a.bind(null,214))})),M=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(5),a.e(12)]).then(a.bind(null,236))})),q=Object(c.lazy)((function(){return a.e(19).then(a.bind(null,250))}));t.default=function(){var e=Object(z.a)(!1),t=Object(c.useState)(!1),a=Object(n.a)(t,2),i=a[0],r=a[1],o=Object(L.h)(),s=[{pageLink:"/",view:C,displayName:"Home",showInNavbar:!0},{pageLink:"/blog",view:u,displayName:"Blog",showInNavbar:!0},{pageLink:"/about",view:I,displayName:"About",showInNavbar:!0},{pageLink:"/state/:stateCode",view:M,displayName:"State",showInNavbar:!1}];return Object(c.useEffect)((function(){i&&(document.documentElement.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTo({top:0,behavior:"smooth"}))}),[i]),l.a.createElement("div",{className:"App"},l.a.createElement(c.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(q,{showLanguageSwitcher:i,setShowLanguageSwitcher:r})),l.a.createElement(O,Object.assign({pages:s},{darkMode:e},{showLanguageSwitcher:i,setShowLanguageSwitcher:r})),l.a.createElement(c.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(L.d,{location:o},s.map((function(e,t){return l.a.createElement(L.b,{exact:!0,path:e.pageLink,render:function(t){t.match;return l.a.createElement(e.view,null)},key:t})})),l.a.createElement(L.a,{to:"/"}))))}}}]);
//# sourceMappingURL=15.3dfbcd2d.chunk.js.map