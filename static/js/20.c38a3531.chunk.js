(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[20],{204:function(e,t,n){"use strict";function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return c}))},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,a=n(204),r=n(29),i=n(10),s=n(184),l=n(110),o=n(114),j=n(82),u=n(210),d=n(1);function b(e){var t=e.location,n=e.onEquip,b=e.weaponTypeKey,O=e.disableUnequip,x=void 0!==O&&O,h=e.disabled,v=Object(l.a)(["artifact"]).t,f=Object(j.b)(o.b.get(t),[t]),m=(null===f||void 0===f?void 0:f.name)?f.nameWIthIcon:Object(d.jsxs)("span",{children:[Object(d.jsx)(i.a,{icon:r.c})," ",v(c||(c=Object(a.a)(["filterLocation.inventory"])))]});return h?m:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(s.a.Toggle,{className:"text-left",children:m}),Object(d.jsxs)(s.a.Menu,{children:[!x&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(s.a.Item,{onClick:function(){},children:[Object(d.jsx)(i.a,{icon:r.c})," Inventory"]}),Object(d.jsx)(s.a.Divider,{})]}),Object(d.jsx)(u.b,{onSelect:n,weaponTypeKey:b})]})]})}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var c=n(2),a=n(29),r=n(10),i=n(0),s=n(186),l=n(140),o=n(119),j=n(70),u=n(113),d=n(206),b=n(227),O=n(202),x=n(112),h=n(45),v=n(33),f=n(82),m=n(116),p=n(1);function y(e){var t,n=e.weaponId,y=e.onEdit,g=e.onDelete,N=e.onClick,w=e.cardClassName,k=void 0===w?"":w,C=e.bg,S=void 0===C?"":C,T=e.footer,W=void 0!==T&&T,E=Object(i.useContext)(h.b),I=Object(i.useState)(void 0),z=Object(c.a)(I,2),B=z[0],F=z[1];Object(i.useEffect)((function(){return n?E.followWeapon(n,F):void 0}),[n,F,E]);var H=B,A=Object(f.b)((null===H||void 0===H?void 0:H.key)&&m.a.get(H.key),[null===H||void 0===H?void 0:H.key]);if(!H||!A)return null;var _=H.level,D=H.ascension,K=H.refine,L=(H.id,A.weaponType),R=A.getMainStatValue(_,D).toFixed(v.b.fixedUnit("atk")),U=A.getSubStatKey(),q=A.getSubStatValue(_,D).toFixed(v.b.fixedUnit(U)),V=m.a.getLevelString(H),J=[["weaponATK",R]];return(null===A||void 0===A?void 0:A.passiveName)&&J.push([U,q]),Object(p.jsxs)(s.a,{className:k,bg:S||"darkcontent",text:"lightfont",children:[Object(p.jsxs)(s.a.Header,{children:[Object(p.jsx)(l.a,{src:null===(t=d.a.weaponTypes)||void 0===t?void 0:t[L],className:"inline-icon"})," ",Object(p.jsx)("h5",{className:"d-inline",children:A.name})]}),Object(p.jsxs)(s.a.Body,{onClick:function(){return null===N||void 0===N?void 0:N(n)},className:N?"cursor-pointer":"",children:[Object(p.jsxs)(o.a,{children:[Object(p.jsx)(j.a,{xs:"auto",className:"pr-0",children:Object(p.jsx)(l.a,{src:A.img,className:"thumb-big grad-".concat(A.rarity,"star p-0"),thumbnail:!0})}),Object(p.jsxs)(j.a,{children:[Object(p.jsxs)("h5",{className:"mb-0",children:["Level ",V," "]}),Object(p.jsxs)("h5",{children:["Refinement ",K]}),Object(p.jsx)("h6",{className:"mb-0",children:Object(p.jsx)(O.a,{stars:A.rarity,colored:!0})})]})]}),Object(p.jsx)(o.a,{children:J.map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1],r=v.b.getStatUnit(n);return Object(p.jsxs)(j.a,{xs:12,children:[Object(p.jsxs)("h6",{className:"d-inline",children:[x.a[n]," ",v.b.getStatName(n)]}),Object(p.jsx)("span",{className:"float-right",children:a+r})]},n)}))}),!1]}),W&&Object(p.jsx)(s.a.Footer,{children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{location:null===H||void 0===H?void 0:H.location,onEquip:function(e){return E.setWeaponLocation(n,e)},weaponTypeKey:L,disableUnequip:!!H.location})}),Object(p.jsx)(j.a,{xs:"auto",children:Object(p.jsxs)("span",{className:"float-right align-top ml-1",children:[y&&Object(p.jsx)(u.a,{variant:"primary",size:"sm",className:"mr-1",onClick:function(){return y(n)},children:Object(p.jsx)(r.a,{icon:a.k})}),g&&Object(p.jsx)(u.a,{variant:"danger",size:"sm",disabled:!!H.location,onClick:function(){return g(n)},children:Object(p.jsx)(r.a,{icon:a.E})})]})})]})})]})}},236:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return N}));var c=n(14),a=n(2),r=n(29),i=n(10),s=n(0),l=n(545),o=n(186),j=n(119),u=n(70),d=n(231),b=n(113),O=n(140),x=n(206),h=n(202),v=n(16),f=n(82),m=n(116),p=n(1);function y(e,t){return t===e?"":t}function g(e){var t=e.show,n=e.onHide,g=e.onSelect,N=e.filter,w=void 0===N?function(){return!0}:N,k=Object(f.b)(m.a.getAll(),[]),C=Object(s.useReducer)(y,""),S=Object(a.a)(C,2),T=S[0],W=S[1],E=k?Object(c.a)(new Set(v.i)).filter((function(e){return w(k[e])})).filter((function(e){var t;return!T||T===(null===k||void 0===k||null===(t=k[e])||void 0===t?void 0:t.weaponType)})).sort((function(e,t){var n,c,a,r;return(null!==(n=null===k||void 0===k||null===(c=k[t])||void 0===c?void 0:c.rarity)&&void 0!==n?n:0)-(null!==(a=null===k||void 0===k||null===(r=k[e])||void 0===r?void 0:r.rarity)&&void 0!==a?a:0)})):[];return k?Object(p.jsx)(l.a,{show:t,size:"xl",contentClassName:"bg-transparent",onHide:n,children:Object(p.jsxs)(o.a,{bg:"lightcontent",text:"lightfont",children:[Object(p.jsx)(o.a.Header,{children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(u.a,{children:Object(p.jsx)(d.a,{children:v.j.map((function(e){var t;return Object(p.jsx)(b.a,{variant:T&&T!==e?"secondary":"success",className:"py-1 px-2",onClick:function(){return W(e)},children:Object(p.jsx)("h3",{className:"mb-0",children:Object(p.jsx)(O.a,{src:null===(t=x.a.weaponTypes)||void 0===t?void 0:t[e],className:"inline-icon"})})},e)}))})}),Object(p.jsx)(u.a,{xs:"auto",children:Object(p.jsx)(b.a,{onClick:n,variant:"danger",children:Object(p.jsx)(i.a,{icon:r.B})})})]})}),Object(p.jsx)(o.a.Body,{children:Object(p.jsx)(j.a,{children:E.map((function(e){var t,c=k[e];return Object(p.jsx)(u.a,{lg:3,md:4,className:"mb-2",children:Object(p.jsx)(b.a,{className:"w-100 h-100 align-top",variant:"darkcontent",onClick:function(){n(),g(e)},children:Object(p.jsxs)(j.a,{className:"h-100",children:[Object(p.jsx)(u.a,{xs:"auto",className:"pr-0",children:Object(p.jsx)(O.a,{src:c.img,className:"thumb-big grad-".concat(c.rarity,"star p-0"),thumbnail:!0})}),Object(p.jsxs)(u.a,{children:[Object(p.jsxs)("h5",{className:"mb-0",children:[Object(p.jsx)(O.a,{src:null===(t=x.a.weaponTypes)||void 0===t?void 0:t[c.weaponType],className:"inline-icon"})," ",c.name]}),Object(p.jsx)("h6",{className:"mb-0",children:Object(p.jsx)(h.a,{stars:c.rarity,colored:!0})})]})]})})},e)}))})})]})}):null}function N(e){var t,n=e.weaponSheet,c=e.onSelect,r=e.filter,i=Object(s.useState)(!1),l=Object(a.a)(i,2),o=l[0],j=l[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{as:d.a,onClick:function(){return j(!0)},className:"text-nowrap",children:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:"Select a Weapon"}),Object(p.jsx)(g,{show:o,onHide:function(){return j(!1)},onSelect:c,filter:r})]})}},542:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F}));var c=n(46),a=n.n(c),r=n(57),i=n(2),s=n(29),l=n(10),o=n(103),j=n(0),u=n(187),d=n(119),b=n(70),O=n(186),x=n(231),h=n(113),v=n(140),f=n(538),m=n(332),p=n(48),y=n(206),g=n(45),N=n(34),w=n(16),k=n(82),C=n(235),S=n(236),T=n(116),W=n(127),E=n(1),I=Object(j.lazy)((function(){return n.e(15).then(n.bind(null,279))})),z={level:"Level",rarity:"Rarity"};function B(e,t){return t===e?"":t}function F(e){var t,n=Object(j.useContext)(g.b),c=Object(j.useState)(""),F=Object(i.a)(c,2),H=F[0],A=F[1],_=Object(j.useState)((function(){return Object.keys(z)[0]})),D=Object(i.a)(_,2),K=D[0],L=D[1],R=Object(j.useReducer)(B,""),U=Object(i.a)(R,2),q=U[0],V=U[1],J=Object(j.useState)(!1),M=Object(i.a)(J,2),P=M[0],G=M[1],Q=Object(k.a)(),X=Object(i.a)(Q,2)[1],Y=Object(j.useRef)(null);Object(j.useEffect)((function(){p.a.pageview("/weapon");var e=N.b.get("WeaponDisplay.state");if(e){var t=e.charIdToEdit,c=e.sortBy,a=e.weaponFilter;A(t),L(c),w.j.includes(a)&&V(a)}return n.followAnyWeapon(X)}),[X,n]);var Z=null!==(t=Object(k.b)(T.a.getAll(),[]))&&void 0!==t?t:{},$=function(e){var t,c;return null!==(t=null===(c=n._getWeapon(e))||void 0===c?void 0:c.level)&&void 0!==t?t:0},ee=function(e){var t,c;return null===(t=Z[null===(c=n._getWeapon(e))||void 0===c?void 0:c.key])||void 0===t?void 0:t.rarity};Object(j.useEffect)((function(){var e={charIdToEdit:H,sortBy:K,weaponFilter:q};N.b.set("WeaponDisplay.state",e)}),[H,K,q]);var te=Object(j.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n._getWeapon(t)){e.next=3;break}return e.abrupt("return");case 3:if(r=o.a.t("weapon_".concat(c.key,"_gen:name")),window.confirm("Are you sure you want to remove ".concat(r,"?"))){e.next=6;break}return e.abrupt("return");case 6:n.removeWeapon(t),H===t&&A("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[H,A,n]),ne=Object(j.useCallback)((function(e){A(e),setTimeout((function(){var e;null===(e=Y.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),500)}),[A,Y]),ce=Object(j.useCallback)((function(e){ne(n.createWeapon(Object(W.b)(e)))}),[n,ne]),ae=n.weapons.keys.filter((function(e){var t,c=n._getWeapon(e);return!!c&&(!q||q===(null===(t=Z[c.key])||void 0===t?void 0:t.weaponType))})).sort((function(e,t){if("level"===K){var n=$(t)-$(e);return n||ee(t)-ee(e)}var c=ee(t)-ee(e);return c||$(t)-$(e)}));return Object(E.jsxs)(u.a,{ref:Y,className:"mt-2",children:[H?Object(E.jsx)(d.a,{className:"mt-2",children:Object(E.jsx)(b.a,{children:Object(E.jsx)(I,{weaponId:H,footer:!0,onClose:function(){return A("")}})})}):null,Object(E.jsx)(O.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:Object(E.jsx)(O.a.Body,{className:"p-2",children:Object(E.jsxs)(d.a,{children:[Object(E.jsx)(b.a,{children:Object(E.jsx)(x.a,{children:w.j.map((function(e){var t;return Object(E.jsx)(h.a,{variant:q&&q!==e?"secondary":"success",className:"py-1 px-2",onClick:function(){return V(e)},children:Object(E.jsx)("h3",{className:"mb-0",children:Object(E.jsx)(v.a,{src:null===(t=y.a.weaponTypes)||void 0===t?void 0:t[e],className:"inline-icon"})})},e)}))})}),Object(E.jsxs)(b.a,{xs:"auto",children:[Object(E.jsx)("span",{children:"Sort by: "}),Object(E.jsx)(f.a,{type:"radio",name:"level",value:K,onChange:L,children:Object.entries(z).map((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(E.jsx)(m.a,{value:n,variant:K===n?"success":"primary",children:Object(E.jsx)("h6",{className:"mb-0",children:c})},n)}))})]})]})})}),Object(E.jsxs)(d.a,{className:"mt-2",children:[!H&&Object(E.jsx)(b.a,{lg:4,md:6,className:"mb-2",children:Object(E.jsxs)(O.a,{className:"h-100",bg:"darkcontent",text:"lightfont",children:[Object(E.jsx)(O.a.Header,{className:"pr-2",children:Object(E.jsx)("span",{children:"Add New Weapon"})}),Object(E.jsx)(O.a.Body,{className:"d-flex flex-column justify-content-center",children:Object(E.jsx)(d.a,{className:"d-flex flex-row justify-content-center",children:Object(E.jsxs)(b.a,{xs:"auto",children:[Object(E.jsx)(h.a,{onClick:function(){return G(!0)},children:Object(E.jsx)("h1",{children:Object(E.jsx)(l.a,{icon:s.u,className:"fa-fw"})})}),Object(E.jsx)(S.b,{show:P,onHide:function(){return G(!1)},onSelect:ce})]})})})]})}),ae.map((function(e){return Object(E.jsx)(b.a,{lg:4,md:6,className:"mb-2",children:Object(E.jsx)(C.a,{weaponId:e,cardClassName:"h-100",onDelete:te,onEdit:ne,onClick:ne,footer:!0})},e)}))]})]})}}}]);
//# sourceMappingURL=20.c38a3531.chunk.js.map