(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(14),i=n(3),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=n(2),s=n.n(f),p=function(){var t=s.a.get("/api/notes"),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},d=function(t){return s.a.post("/api/notes",t).then((function(t){return t.data}))},v=function(t,e){return s.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},E=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},b=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),o=n[0],c=n[1],f=Object(a.useState)(""),s=Object(i.a)(f,2),b=s[0],h=s[1],g=Object(a.useState)(!0),O=Object(i.a)(g,2),j=O[0],S=O[1],y=Object(a.useState)("some error happened..."),k=Object(i.a)(y,2),w=k[0],N=k[1];Object(a.useEffect)((function(){p().then((function(t){c(t)}))}),[]);var C=j?o:o.filter((function(t){return!0===t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:w}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return S(!j)}},"show ",j?"important":"all")),r.a.createElement("ul",null,C.map((function(t,e){return r.a.createElement(l,{key:e,note:t,toggleImportance:function(){return function(t){var e=o.find((function(e){return e.id===t})),n=Object(u.a)({},e,{important:!e.important});v(n).then((function(e){c(o.map((function(n){return n.id!==t?n:e})))})).catch((function(n){N("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){N(null)}),5e3),c(o.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:b,date:(new Date).toISOString(),important:Math.random()>.5};d(e).then((function(t){c(o.concat(t)),h("")}))}},r.a.createElement("input",{value:b,onChange:function(t){console.log(t.target.value),h(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(E,null))};n(37);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f205ae9f.chunk.js.map