(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(39)},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),u=n(14),l=n(2),i=n(3),m=n.n(i),f=function(){var t={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return m.a.get("/notes").then(function(e){return e.data.concat(t)})},s=function(t){return m.a.post("/notes",t).then(function(t){return t.data})},p=function(t,e){return m.a.put("".concat("/notes","/").concat(t),e).then(function(t){return t.data})},d=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"important";return o.a.createElement("li",{className:"note"},e.content,o.a.createElement("button",{onClick:n},a))},v=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},g=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},E=function(t){var e=Object(a.useState)([]),n=Object(l.a)(e,2),r=n[0],c=n[1],i=Object(a.useState)("a new note..."),m=Object(l.a)(i,2),E=m[0],b=m[1],h=Object(a.useState)(!0),O=Object(l.a)(h,2),S=O[0],j=O[1],w=Object(a.useState)(null),y=Object(l.a)(w,2),k=y[0],I=y[1];Object(a.useEffect)(function(){console.log("effect"),f().then(function(t){c(t),console.log("there's ".concat(r.length," notes"))})},[]),console.log("render",r.length,"notes");var C=S?r:r.filter(function(t){return!0===t.important});return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(v,{message:k}),o.a.createElement("button",{onClick:function(){return j(!S)}},S?"Important":"All"),o.a.createElement("ul",null,C.map(function(t){return o.a.createElement(d,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=r.find(function(e){return e.id===t}),n=Object(u.a)({},e,{important:!e.important});p(t,n).then(function(e){c(r.map(function(n){return n.id!==t?n:e}))}).catch(function(){I("the note '".concat(e.content,"' was already deleted from the server")),setTimeout(function(){return I(null)},5e3),c(r.filter(function(e){return e.id!==t}))})}(t.id)}})})),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:E,date:(new Date).toISOString(),important:Math.random()>.5};s(e).then(function(t){c(r.concat(t)),b("")})}},o.a.createElement("input",{type:"text",value:E,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),o.a.createElement("button",{type:"submit"},"Save")),o.a.createElement(g,null))};n(38);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b5b2a0d5.chunk.js.map