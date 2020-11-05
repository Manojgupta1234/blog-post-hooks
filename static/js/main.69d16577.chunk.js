(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c(20),a=c.n(r),o=c(9),j=c.n(o),i=c(12),l=c(4),u=(c(14),c(2)),b=c(8);var d=function(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(s.useEffect)((function(){var e=!0;null==localStorage.getItem("token")&&(e=!1),r(e)}),[]),c?Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)(b.b,{to:"/users",className:"link-style",children:Object(n.jsx)("li",{children:"Users"})}),Object(n.jsx)(b.b,{to:"/posts",className:"link-style",children:Object(n.jsx)("li",{children:"Posts"})})]})}),Object(n.jsx)("h2",{children:Object(n.jsx)(b.b,{to:"/logout",children:"Logout "})})]}):Object(n.jsx)(u.a,{to:"/"})};var h=function(e){var t=e.user;return Object(n.jsxs)("div",{className:"user-card",children:[Object(n.jsxs)("h1",{children:[" ",t.name," "]}),Object(n.jsxs)("p",{className:"company",children:["Company: ",t.company.name]}),Object(n.jsxs)("p",{className:"phone",children:["Phone: ",t.phone]}),Object(n.jsxs)("p",{className:"city",children:["City: ",t.address.city]})]})};var O=function(){var e=Object(u.g)();return Object(n.jsx)("h3",{className:"back",onClick:function(){e.goBack()},children:" Back"})};var p=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",placeholder:e.placeholder,className:"filter",onChange:function(t){e.handleFilter(t.target.value)}})})},x=Object(s.createContext)(null);var f=function(){var e,t=Object(s.useContext)(x),c=Object(s.useState)(""),r=Object(l.a)(c,2),a=r[0],o=r[1];return e=""===a?t.map((function(e){return Object(n.jsx)(h,{user:e},e.id)})):t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).map((function(e){return Object(n.jsx)(h,{user:e},e.id)})),Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)(p,{handleFilter:function(e){o(e)},placeholder:"Search with User Name"}),e]})};var m=function(e){var t=e.post;return Object(n.jsx)("div",{className:"post-card",children:Object(n.jsxs)(b.b,{to:"/posts/".concat(t.id),className:"link-style",children:[Object(n.jsxs)("h1",{children:[" ",t.id]}),Object(n.jsxs)("p",{className:"title",children:[" ",t.title]}),Object(n.jsxs)("p",{className:"body",children:["Content: ",t.body]})]})})};var v=function(){var e;Object(s.useEffect)((function(){o()}),[]);var t=Object(s.useState)([]),c=Object(l.a)(t,2),r=c[0],a=c[1],o=function(){var e=Object(i.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=Object(s.useState)(""),b=Object(l.a)(u,2),d=b[0],h=b[1];return e=""===d?r.map((function(e){return Object(n.jsx)(m,{post:e},e.id)})):r.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())})).map((function(e){return Object(n.jsx)(m,{post:e},e.id)})),Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)("h1",{children:" Posts "}),Object(n.jsx)(p,{handleFilter:function(e){h(e),console.log(d)},placeholder:"Search with Author Name or Title"}),e]})};var g=function(e){var t=e.match;Object(s.useEffect)((function(){u()}),[]);var c=Object(s.useState)([]),r=Object(l.a)(c,2),a=r[0],o=r[1],u=function(){var e=Object(i.a)(j.a.mark((function e(){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/".concat(t.params.id));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0===a.length?Object(n.jsx)("h2",{children:"Loading..."}):Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsxs)("div",{className:"post-card",children:[Object(n.jsxs)("h1",{children:[" Post ",a.id," from User ",a.userId," "]}),Object(n.jsxs)("p",{className:"title",children:[" ",a.title]}),Object(n.jsxs)("p",{className:"body",children:["Content: ",a.body]})]})]})},y=c(15),N=c(11);var w=function(){var e=Object(s.useState)({userName:"",password:"",isLoggedIn:!1}),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(s.useContext)(x),o=function(e){r(Object(N.a)(Object(N.a)({},c),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(s.useEffect)((function(){var e=!0;null==localStorage.getItem("token")&&(e=!1),r(Object(N.a)(Object(N.a)({},c),{},{isLoggedIn:e}))}),[]),c.isLoggedIn?Object(n.jsx)(u.a,{to:"/home"}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.filter((function(e){return e.username===c.password&&e.email===c.userName})).length>0?(localStorage.setItem("token","sdfsdfsggsfsbetbsfsdf"),r(Object(N.a)(Object(N.a)({},c),{},{isLoggedIn:!0}))):alert("Incorrect username or password")},children:[Object(n.jsx)("input",{type:"email",className:"login-form",placeholder:"Enter Email",name:"userName",value:c.userName,onChange:o}),Object(n.jsx)("input",{type:"password",className:"login-form",placeholder:"Enter Password",name:"password",value:c.password,onChange:o}),Object(n.jsx)("input",{type:"submit",className:"login-form"})]})]})};var k=function(){return Object(s.useEffect)((function(){localStorage.removeItem("token")})),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:" You have beedn Logged out !!! "}),Object(n.jsx)(b.b,{to:"/",children:" Login "})]})};var C=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(s.useEffect)((function(){Object(i.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})))()}),[]),Object(n.jsx)(x.Provider,{value:c,children:Object(n.jsx)(b.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/",exact:!0,component:w}),Object(n.jsx)(u.b,{path:"/home",component:d}),Object(n.jsx)(u.b,{path:"/users",component:f}),Object(n.jsx)(u.b,{path:"/posts",exact:!0,component:v}),Object(n.jsx)(u.b,{path:"/posts/:id",component:g}),Object(n.jsx)(u.b,{path:"/logout",exact:!0,component:k})]})})})})};a.a.render(Object(n.jsx)(C,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.69d16577.chunk.js.map