(this["webpackJsonpapp-music"]=this["webpackJsonpapp-music"]||[]).push([[0],{62:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),i=(n(62),n(22)),o=n.n(i),u=n(27),l=n(20),j=n(121),d=n(116),b=n(120),h=n(47),f=n.n(h),v=function(){var t=Object(u.a)(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://www.theaudiodb.com/api/v1/json/2/search.php",t.next=4,f.a.get("".concat("https://www.theaudiodb.com/api/v1/json/2/search.php","?s=").concat(encodeURI(e)));case 4:return n=t.sent,a=n.data,t.abrupt("return",a.artists[0]);case 9:t.prev=9,t.t0=t.catch(0),console.error("GET_INFORMATION_ERROR",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),O=n(122),p=n(123),m=n(28),x=n(35),g=n(6),w=function(t){var e=t.handleSearch,n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(a.useState)(t),n=Object(l.a)(e,2),r=n[0],c=n[1];return[r,function(t){var e=t.target;c(Object(x.a)(Object(x.a)({},r),{},Object(m.a)({},e.name,e.value)))},function(){c(t)}]}({artist:""}),r=Object(l.a)(n,2),c=r[0],s=r[1],i=c.artist;return Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==i.trim()&&e(c)},children:[Object(g.jsx)("h1",{className:"title",children:"Informaci\xf3n de artistas musicales"}),Object(g.jsxs)(d.a,{container:!0,spacing:3,alignItems:"center",children:[Object(g.jsx)(d.a,{item:!0,xs:12,children:Object(g.jsx)(O.a,{fullWidth:!0,id:"artist",name:"artist",label:"Artista",color:"secondary",variant:"outlined",onChange:s})}),Object(g.jsx)(d.a,{item:!0,xs:12,children:Object(g.jsx)(p.a,{fullWidth:!0,size:"large",type:"submit",color:"secondary",variant:"contained",children:"Buscar artista"})})]})]})},y=function(t){var e=t.info;return Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)(b.a,{variant:"h5",className:"title",children:null===e||void 0===e?void 0:e.strArtist}),Object(g.jsx)(b.a,{variant:"body2",children:null===e||void 0===e?void 0:e.strCountry}),Object(g.jsx)("div",{className:"info",children:Object(g.jsx)(b.a,{variant:"body1",align:"justify",children:null===e||void 0===e?void 0:e.strBiographyES})})]})};y.defaultProps={info:{}};var N=y,S=function(t){var e=t.info;return Object(g.jsx)("img",{alt:null===e||void 0===e?void 0:e.strArtist,className:"img-artist",src:null===e||void 0===e?void 0:e.strArtistCutout})};S.defaultProps={info:{}};var C=S,I=function(){var t=Object(a.useState)({}),e=Object(l.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({}),s=Object(l.a)(c,2),i=s[0],h=s[1],f=n.artist,O=Object(a.useCallback)((function(t){r(t)}),[r]);return Object(a.useEffect)((function(){f&&function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(f);case 2:e=t.sent,h(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[f,n]),Object(g.jsxs)(j.a,{children:[Object(g.jsx)(w,{handleSearch:O}),i?Object(g.jsxs)(d.a,{container:!0,spacing:5,children:[Object(g.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(N,{info:i})}),Object(g.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(C,{info:i})})]}):Object(g.jsx)(b.a,{variant:"h5",className:"not-found",children:"No se encontraron resultados :("})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),k()}},[[88,1,2]]]);
//# sourceMappingURL=main.2d60356b.chunk.js.map