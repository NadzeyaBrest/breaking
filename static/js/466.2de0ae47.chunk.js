"use strict";(self.webpackChunkbreaking=self.webpackChunkbreaking||[]).push([[466],{1792:function(t,n,e){e.r(n),e.d(n,{default:function(){return X}});var r=e(2791),a=e(4172),s=e(885),i="style_container__6WJiv",o="style_catalog__VtxNO",c="style_buttonsContainer__XMQ5N",u="style_opacityForButton__oB9WC";var l=e.p+"static/media/squares2Grey.69f2d31068c426a19a7087f94dfbab2e.svg";var f=e.p+"static/media/squares2Yellow.948046045168065a08df32d62077480a.svg";var d=e.p+"static/media/squares4Grey.4be2ec9a0e7ea41bc0a1d36201adc47a.svg";var g=e.p+"static/media/squares4Yellow.3d8820bd7e618a2c9b0e7082ac383ecc.svg",h=e(1405),v=e(3014),_=e(184),y=function(t){var n=t.setToggledIntoState,e=t.opacity,r=t.firstButton,a=t.secondButton;return(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)("span",{className:o,children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),(0,_.jsxs)("div",{className:c,children:[(0,_.jsx)("button",{className:e,onClick:function(){return n(!1)},children:(0,_.jsx)("img",{src:r,alt:"button"})}),(0,_.jsx)("button",{onClick:function(){return n(!0)},children:(0,_.jsx)("img",{src:a,alt:"button"})})]})]})},m=e(4802),b=function(){var t=(0,r.useState)(!0),n=(0,s.Z)(t,2),e=n[0],a=n[1],i=(0,h.I0)(),o=(e=(0,m.v9)((function(t){return t.persons.toggled})))?l:f,c=e?g:d,b=e?u:"";return(0,_.jsx)(y,{setToggledIntoState:function(t){a(t),i(v.$.actions.setToggledIntoState(t))},opacity:b,firstButton:o,secondButton:c})},j="style_container__CeXX-",x="style_button__h3HbK",p="style_colored__9IE7K",C=function(t){var n=t.changeStateLimit,e=t.buttons,r=t.limit,a=e.map((function(t){var e=t===r?x+" "+p:x;return(0,_.jsx)("button",{onClick:function(){return n(t)},className:e,children:t},t)}));return(0,_.jsxs)("div",{className:j,children:[(0,_.jsx)("span",{children:"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a"}),(0,_.jsx)("div",{children:a})]})},B=function(){var t=(0,r.useState)([10,15,20,25,30]),n=(0,s.Z)(t,1)[0],e=(0,m.v9)((function(t){return t.persons.limit})),a=(0,m.I0)();return(0,_.jsx)("div",{children:(0,_.jsx)(C,{buttons:n,changeStateLimit:function(t){a(v.$.actions.setLimit(t))},limit:e})})},S="style_container__zEnWg",w=e(907);var N=e(181);function k(t){return function(t){if(Array.isArray(t))return(0,w.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,N.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=e(1633),L="style_buttonContainer__UGIZE",P="style_button__YYPii",A="style_colored__DKSD4",Z="style_arrowRight__i-bDN",E="style_arrowLeft__dXLTT",T="style_disabled__E61uT",$=e(1559),R=function(t){var n=t.currentButton,e=t.setCurrentButtonPagination,r=t.PaginationArray,a=t.arrowStyleLeft,s=t.arrowStyleRight,i=t.setCurrentButtonPaginationViaArrayRight,o=t.setCurrentButtonPaginationViaArrayLeft,c=r.map((function(t){var r=t===n?P+" "+A:P;return(0,_.jsx)("button",{onClick:function(n){e(n,t)},className:r,children:t},t)}));return(0,_.jsxs)("div",{className:L,children:[c,(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:$.Z,className:a,alt:"arrowLeft",onClick:o})}),(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:$.Z,className:s,alt:"arrowRight",onClick:i})})]})},V=function(){var t=(0,h.I0)();(0,r.useEffect)((function(){t((0,I.Bg)())}),[]);for(var n=(0,h.v9)((function(t){return t.persons.totalAmountPersons})),e=(0,h.v9)((function(t){return t.persons.limit})),a=n.length,i=Math.ceil(a/e)||5,o=[],c=1;c<=i;c++)o.push(c);var u=(0,h.v9)((function(t){return t.persons.currentButtonPagination})),l=(0,r.useState)([]),f=(0,s.Z)(l,2),d=f[0],g=f[1];(0,r.useEffect)((function(){var t="...",n=[].concat(o);if(u>o.length)u=o.length;else if(o.length<5)n=o;else if(u>=1&&u<=2)n=[1,2,3,t,o.length];else if(3===u){var e=o.slice(0,4);n=[].concat(k(e),[t,o.length])}else if(u>=4&&u<=o.length-2){var r=o.slice(u-2,u),a=o.slice(u,u+1);n=[1," ..."].concat(k(r),k(a),["... ",o.length])}else if(u>o.length-3){var s=o.slice(o.length-4);n=[1,t].concat(k(s))}g(n)}),[u,e]);var y=1===u?E+" "+T:E,m=u===o.length?Z+" "+T:Z;return(0,_.jsx)(R,{currentButton:u,setCurrentButtonPagination:function(n,r){if("..."!==n.target.innerHTML){t(v.$.actions.setCurrentButton(r));var a=r*e-e;t(v.$.actions.setOffset(a))}},PaginationArray:d,arrowStyleLeft:y,arrowStyleRight:m,setCurrentButtonPaginationViaArrayRight:function(){u=u===o.length?o.length:u+1,t(v.$.actions.setCurrentButton(u));var n=u*e-e;t(v.$.actions.setOffset(n))},setCurrentButtonPaginationViaArrayLeft:function(){u=1===u?1:u-1,t(v.$.actions.setCurrentButton(u));var n=u*e-e;t(v.$.actions.setOffset(n))}})},q=function(){return(0,_.jsxs)("div",{className:S,children:[(0,_.jsx)(V,{}),(0,_.jsx)(B,{})]})},M=e(4223),O="style_wrapper__FMeUa",X=function(){var t=(0,h.I0)();return(0,r.useEffect)((function(){t((0,I.iR)())}),[]),(0,_.jsxs)("div",{className:O,children:[(0,_.jsx)(M.Z,{}),(0,_.jsx)(b,{}),(0,_.jsx)(a.Z,{}),(0,_.jsx)(q,{})]})}}}]);
//# sourceMappingURL=466.2de0ae47.chunk.js.map