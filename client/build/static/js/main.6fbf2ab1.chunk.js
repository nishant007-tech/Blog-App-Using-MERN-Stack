(this["webpackJsonpauth-using-nodejs-reactjs"]=this["webpackJsonpauth-using-nodejs-reactjs"]||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(29),i=n.n(r),o=n(3),l=n(9);var u=function(){var e=Object(c.useState)("topnav"),t=Object(o.a)(e,2),n=t[0],s=t[1],r=function(){s("topnav"===n?"topnav responsive":"topnav")},i=function(){s("topnav")};return localStorage.getItem("token")?Object(a.jsx)("div",{className:"navBar",children:Object(a.jsxs)("ul",{className:n,children:[Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("li",{children:" WEB BLOGGER HOME"})}),Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("li",{onClick:function(e){localStorage.removeItem("token")},children:"Logout"})}),Object(a.jsx)(l.b,{onClick:i,to:"/profile",children:Object(a.jsx)("li",{children:"Profile"})}),Object(a.jsx)(l.b,{onClick:i,to:"/yourpost",children:Object(a.jsx)("li",{children:"My Posts"})}),Object(a.jsx)(l.b,{onClick:i,to:"/allposts",children:Object(a.jsx)("li",{children:"All Posts"})}),Object(a.jsx)("i",{onClick:r,className:" menuicon fa fa-bars"})]})}):Object(a.jsx)("div",{className:"navBar",children:Object(a.jsxs)("ul",{className:n,children:[Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("li",{children:"WEB HOME"})}),Object(a.jsx)(l.b,{onClick:i,to:"/register",children:Object(a.jsx)("li",{children:"Register"})}),Object(a.jsx)(l.b,{onClick:i,to:"/login",children:Object(a.jsx)("li",{children:"Login"})}),Object(a.jsx)("i",{onClick:r,className:" menuicon fa fa-bars"})]})})},j=n(7),d=n(2),b=n.n(d),p=n(6),A=n(5),h=n(4),O=n.n(h);var x=function(){var e=Object(c.useState)({name:"",email:"",password:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),i=Object(o.a)(r,2),u=i[0],j=i[1],d=function(){var e=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.post("/api/user/register",n);case 4:a=e.sent,console.log(a),window.location="/login",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.response&&e.t0.response.data&&j(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"RegisterContainer",children:Object(a.jsx)("form",{onSubmit:function(e){return d(e)},children:Object(a.jsxs)("div",{className:"RegisterContent",children:[Object(a.jsx)("h1",{style:{color:"white"},children:"Register"}),Object(a.jsx)("p",{style:{color:"white"},children:"Please fill in this form to create an account."}),u&&Object(a.jsxs)("div",{className:"error-msg",children:[Object(a.jsx)("span",{children:u}),Object(a.jsx)("button",{onClick:function(){j(void 0)},children:"X"})]}),Object(a.jsx)("label",{style:{color:"white"},children:Object(a.jsx)("b",{children:"Name"})}),Object(a.jsx)("input",{className:"RegisterInput",onChange:function(e){return function(e){s(Object(A.a)(Object(A.a)({},n),{},{name:e.target.value}))}(e)},type:"text",placeholder:"Enter Name",id:"email",required:!0}),Object(a.jsx)("label",{style:{color:"white"},children:Object(a.jsx)("b",{children:"Email"})}),Object(a.jsx)("input",{className:"RegisterInput",onChange:function(e){return function(e){s(Object(A.a)(Object(A.a)({},n),{},{email:e.target.value}))}(e)},type:"email",placeholder:"Enter Email",name:"psw",id:"psw",required:!0}),Object(a.jsx)("label",{style:{color:"white"},children:Object(a.jsx)("b",{children:"Password"})}),Object(a.jsx)("input",{className:"RegisterInput",onChange:function(e){return function(e){s(Object(A.a)(Object(A.a)({},n),{},{password:e.target.value}))}(e)},type:"password",placeholder:"Password",name:"psw-repeat",id:"psw-repeat",required:!0}),Object(a.jsx)("button",{type:"submit",className:"registerbtn",children:"Register"}),Object(a.jsx)("div",{className:"container signin",children:Object(a.jsxs)("p",{children:["Already have an account? ",Object(a.jsx)(l.b,{to:"/login",children:"Sign in"}),"."]})})]})})})},m=Object(c.createContext)();function f(e){var t=Object(c.useState)({user:[]}),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)({name:"",email:"",id:"",photo:"",uploadPhoto:null}),l=Object(o.a)(i,2),u=l[0],j=l[1];return Object(a.jsx)(m.Provider,{value:[s,r,u,j],children:e.children})}var v=function(){var e=Object(c.useContext)(m),t=Object(o.a)(e,2)[1],n=Object(c.useState)(),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)({email:"",password:""}),u=Object(o.a)(l,2),j=u[0],d=u[1],h=function(){var e=Object(p.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,O.a.post("/api/user/login",j);case 4:a=e.sent,localStorage.setItem("token",JSON.stringify(a.data.token)),t({user:a.data.user}),window.location="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),i(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"LoginContainer",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{id:"LoginH2",children:"Login Here!"}),Object(a.jsx)("form",{onSubmit:h,className:"modal-content animate loginContent",method:"post",children:Object(a.jsxs)("div",{className:"container",children:[r&&Object(a.jsxs)("div",{className:"error-msg",children:[Object(a.jsx)("span",{children:r}),Object(a.jsx)("button",{onClick:function(){i(void 0)},children:"X"})]}),Object(a.jsx)("label",{children:Object(a.jsx)("b",{children:"Email"})}),Object(a.jsx)("input",{onChange:function(e){d(Object(A.a)(Object(A.a)({},j),{},{email:e.target.value}))},type:"text",placeholder:"Enter Email",name:"uname",required:!0}),Object(a.jsx)("label",{children:Object(a.jsx)("b",{children:"Password"})}),Object(a.jsx)("input",{onChange:function(e){d(Object(A.a)(Object(A.a)({},j),{},{password:e.target.value}))},type:"password",placeholder:"Enter Password",name:"psw",required:!0}),Object(a.jsx)("button",{id:"login",type:"submit",children:"Login"})]})})]})})};var g=function(){var e=Object(c.useState)({name:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],r=localStorage.getItem("token");return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=JSON.parse(localStorage.getItem("token")))){e.next=7;break}return e.next=5,O.a.get("/api/user/profile",{headers:{"x-auth-token":t}});case 5:n=e.sent,s({name:n.data.user.name});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r?Object(a.jsx)("div",{className:"container3",children:Object(a.jsx)("div",{className:"content3",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"WEB BLOGGER"}),Object(a.jsx)("p",{children:"Create an account and share your thoughts with others."}),Object(a.jsxs)("b",{children:["Welcome, ",n.name]}),Object(a.jsx)(l.b,{to:"/createpost",children:"Create Post"})]})})}):Object(a.jsx)("div",{className:"container3",children:Object(a.jsx)("div",{className:"content3",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"WEB BLOGGER"}),Object(a.jsx)("p",{children:"Create an account and share your thoughts with others."}),Object(a.jsx)(l.b,{to:"/register",children:"Register"}),Object(a.jsx)("b",{}),Object(a.jsx)(l.b,{to:"/login",children:"Login"})]})})})},N="data:image/png;base64,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";var k=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(c.useContext)(m),d=Object(o.a)(j,2),h=d[0],x=d[1],f=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l?v():g(),(n=new FormData).append("name",h.name),n.append("profileImage",h.uploadPhoto),n.append("id",h.id),e.prev=6,e.next=9,O.a.put("/api/user/updateProfile",n);case 9:a=e.sent,s(a.data.message),x({name:a.data.savedUser.name,email:a.data.savedUser.email,id:a.data.savedUser._id,photo:a.data.savedUser.photo}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0),e.t0.response?u(e.t0.response.data.message):u("Already Updated!!");case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(localStorage.getItem("token")),e.next=4,O.a.get("/api/user/profile",{headers:{"x-auth-token":t}});case 4:n=e.sent,x({name:n.data.user.name,email:n.data.user.email,photo:n.data.user.photo,id:n.data.user._id}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]);var v=function(){u("")},g=function(){s("")};if(h.photo)var k=h.photo,y=k=k.replace("public/","");else y=N;return Object(a.jsx)("div",{className:"container2",children:Object(a.jsxs)("div",{className:"content2",children:[Object(a.jsx)("h2",{style:{textAlign:"center"},children:"User Profile"}),Object(a.jsx)("div",{className:"userImage",children:Object(a.jsx)("img",{src:y,width:95,height:95,round:"true",alt:"Loading...",border:"2px solid skyblue"})}),Object(a.jsx)("form",{onSubmit:f,encType:"multipart/form-data",children:Object(a.jsxs)("div",{children:[n&&Object(a.jsxs)("div",{className:"success-msg",children:[Object(a.jsx)("span",{children:n}),Object(a.jsx)("button",{onClick:g,children:"X"})]}),l&&Object(a.jsxs)("div",{className:"error-msg",children:[Object(a.jsx)("span",{children:l}),Object(a.jsx)("button",{onClick:v,children:"X"})]}),Object(a.jsx)("label",{children:Object(a.jsx)("b",{children:"Name"})}),Object(a.jsx)("input",{className:"input",onChange:function(e){x(Object(A.a)(Object(A.a)({},h),{},{name:e.target.value}))},name:"name",type:"text",required:!0,value:h.name||""}),Object(a.jsx)("label",{children:Object(a.jsx)("b",{children:"Email"})}),Object(a.jsx)("input",{className:"input",onChange:function(e){x(Object(A.a)(Object(A.a)({},h),{},{email:e.target.value}))},readOnly:!0,name:"email",type:"text",required:!0,value:h.email||""}),Object(a.jsx)("label",{children:Object(a.jsx)("b",{children:"Image"})}),Object(a.jsx)("input",{onChange:function(e){x(Object(A.a)(Object(A.a)({},h),{},{uploadPhoto:e.target.files[0]}))},className:"input",name:"profileImage",type:"file"}),Object(a.jsx)("button",{id:"updateButton",children:Object(a.jsx)("b",{children:"Update Profile"})})]})})]})})};var y=function(){var e=Object(c.useState)({title:"",description:"",postImage:null,userId:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],r=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("title",n.title),a.append("desc",n.description),a.append("postImage",n.postImage),a.append("id",n.userId),e.prev=6,e.next=9,O.a.post("/api/user/posts",a);case 9:c=e.sent,console.log(c),window.location="/yourpost",e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(localStorage.getItem("token")),e.next=4,O.a.get("/api/user/profile",{headers:{"x-auth-token":t}});case 4:n=e.sent,s({userId:n.data.user._id}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsxs)("div",{className:"post-container",children:[Object(a.jsx)("div",{className:"blankContainer",children:Object(a.jsx)("b",{children:"Say Something...."})}),Object(a.jsx)("div",{className:"post-content",children:Object(a.jsxs)("form",{onSubmit:r,children:[Object(a.jsx)("label",{children:Object(a.jsx)("b",{children:"Title"})}),Object(a.jsx)("input",{className:"postinput",placeholder:"Title of your post...",onChange:function(e){s(Object(A.a)(Object(A.a)({},n),{},{title:e.target.value}))},name:"title",type:"text",required:!0}),Object(a.jsx)("label",{children:Object(a.jsx)("b",{children:"Image"})}),Object(a.jsx)("input",{onChange:function(e){s(Object(A.a)(Object(A.a)({},n),{},{postImage:e.target.files[0]}))},className:"postinput",name:"postImage",type:"file"}),Object(a.jsx)("label",{children:Object(a.jsx)("b",{children:"Description"})}),Object(a.jsx)("textarea",{rows:"5",id:"textInput",placeholder:"Write Something...",onChange:function(e){s(Object(A.a)(Object(A.a)({},n),{},{description:e.target.value}))},name:"desc",type:"text",required:!0}),Object(a.jsx)("button",{id:"postButton",children:Object(a.jsx)("b",{children:"Post"})})]})})]})},P="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0PDg0NDQ0NDQ0NDQ8NDQ4NFhEWFhURExMYHSggGBolGxUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAgEDBAUH/8QAMBABAQACAAIGCAcBAQAAAAAAAAECEQMEEiExQVJxFTJRYWKRobEFExQigZKi0XL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/RAAAAAAAAAADQ0GaNNAZo0oBOjSzQI0adDQOejTpo0Dno0vRoEaNLYCdGlMBg2sAAAAAAAAAAAAAAAAAAAAAayKBjRoDdEipATpulaboE6NLkNAjRpejQIZpemaBGmLsZYCBVTQZWNYAAAAAAAAAAAAAAAAAAAABFJioDWyEVAFSEipAZMVSNkVICZG6Xo0COizTthw7l1SW+UdOLyuWGPSuu3Wu2wHk0yx1sTYDlYyulibAc9JrpU0EJVUgAAAAAAAAAAAAAAAAAAAARcRF4gqKjIuA2RWMZHfg8HLL1cbff3fMESKmL28LkPHf4x/69Mxw4fZjd+7G2/MHi4XKZ5d2p7+p6ceUwx68rvz6ozPj8S+rhZ77La4ZY53rsyvnKD0Zc1hj1YzflNRWN/N4dl7bueV7nk/Ly8N+Vd+U3LZZdWey9oPBcU2PbzXBvStktl6+qb63C8HPwZf1oPNYmx1sRYDlU10sRkDlUrqAAAAAAAAAAAAAAAAAAAAAI6YucdMQXF4oi8Qev8AD5jc9ZSXc6t+17+Z5n8vUmPbOr2Pk8PKyyztllj6nN49PhzOd2sv47wOT4uWeWXSvdNTuis+a6Ns6O9X2uX4d25eUc+P6+XmD0fq/h+p+q+H6rnLY613+3byZTVs9lsB6f1Xw/Vl5v4fq8yuJhcdb75sHa858P1duX43T31a179vn16uQ7MvOfYHg4vrZed+7lXbi+tfO/dxoIrnXSudBzyRV5IoAAAAAAAAAAAAAAAAAAAAEdMXOOmILi8XOLgLj6n4fn0sLhe77V8qPVyXF6OePsv7b/IPXyWHRzzxvc48f18vN75w9Z3L24yXzj5/Mevl5g7Y8zlJrq8+9y2rluF07u+rO2+33PTxOWl7P2/YHPluFu7vZOz316eJw5lOvuVjjJJJ2RoPnc1h0curss3HbkOzLzn2bz+O8Zl7L9Kn8OvVl5wHh4vrXzv3csl8W/uy8793Ogioq7UZA55IXkgAAAAAAAAAAAAAAAAAAAACLiIqAuKiIqA6Sqlc5VSg+7yvE6eGN79avnHh5jDLp5axys32yVz5Tm/y5ZZuXr7dar0+kp4L/YDHmOJJqcPUnw5N/VcXwf5yPSM8H1PSM8F+YN/VcTwf5yZ+q4vg/wA5HpGeC/M9IzwfUE8Tj8TKWXDqvV6uTr+HY2TLcs652zTn6SngvzZ6Tngv9geHi392X/q/dztbnlu2+22otBlTk2poIqVVIAAAAAAAAAAAAAAAAAAAAEVEqBqpUNBcqtucqtguVUrnK3YOkrduezYOmzbn0i0FbZck7ZsG2stZtloFqaUBiWsAAAAAAAAAAAAAAAAAAAAAaxoDWAKakBcptICzaGgrZtIDdm07Ng3bGAAMArG1gAAAAAAAAAAAAAAAAAAAABsAaMAaMAUJAUJAUJAUJAaMAaMAbWAAAAAAAAAAAD//2Q==";var w=function(){var e=Object(c.useState)({posts:[]}),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(c.useState)({photo:"",name:""}),d=Object(o.a)(j,2),A=d[0],h=d[1];Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(localStorage.getItem("token")),e.next=4,O.a.get("/api/user/getpost",{headers:{"x-auth-token":t}});case 4:return n=e.sent,e.next=7,O.a.get("/api/user/profile",{headers:{"x-auth-token":t}});case 7:a=e.sent,u(a.data.user._id),h({photo:a.data.user.photo,name:a.data.user.name}),s({posts:n.data.post}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.data);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var x=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("/api/user/deletepost/".concat(t));case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.parse(localStorage.getItem("token")),e.next=4,O.a.put("/api/user/likes",{id:t},{headers:{"x-auth-token":a}});case 4:c=e.sent,r=n.posts.map((function(e){return e._id===c.data._id?c.data:e})),s({posts:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.parse(localStorage.getItem("token")),e.next=4,O.a.put("/api/user/dislikes",{id:t},{headers:{"x-auth-token":a}});case 4:c=e.sent,r=n.posts.map((function(e){return e._id===c.data._id?c.data:e})),s({posts:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();if(A.photo)var v=A.photo,g=v=v.replace("public/","");else g=N;return n.posts.length>0?Object(a.jsxs)("div",{className:"myPost-container",children:[Object(a.jsxs)("div",{className:"headPost",children:[Object(a.jsxs)("h2",{children:["My ",Object(a.jsx)("span",{className:"badge",children:"Blog Posts"})]}),Object(a.jsx)("hr",{})]}),n.posts.map((function(e,t){return Object(a.jsxs)("div",{className:"blog-cards",children:[Object(a.jsxs)("div",{className:"HeaderContent",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:g,alt:"UserIMG"}),Object(a.jsxs)("span",{children:[A.name," "]})]}),Object(a.jsxs)("strong",{id:"Date",children:[" ",e.date," "]})]}),Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:e.postimage?e.postimage.replace("public/",""):P,alt:"PostIMG"})}),Object(a.jsxs)("div",{className:"blog-content",children:[Object(a.jsxs)("b",{children:[" ",e.title]}),Object(a.jsx)("p",{children:e.description}),Object(a.jsx)("hr",{id:"hr2"}),Object(a.jsxs)("div",{className:"icons",children:[Object(a.jsxs)("div",{children:[e.likes.includes(l)?Object(a.jsx)("i",{onClick:function(){return f(e._id)},id:"heart",className:"fa fa-heart redheart"}):Object(a.jsx)("i",{onClick:function(){return m(e._id)},id:"heart",className:"fa fa-heart-o"}),Object(a.jsx)("i",{id:"showlikes",children:e.likes.length>1?"".concat(e.likes.length," Likes"):"".concat(e.likes.length," Like")})]}),Object(a.jsx)("i",{id:"trash",onClick:function(){return x(e._id)},className:"fa fa-trash-o"})]})]})]},t)}))]}):Object(a.jsxs)("div",{className:"myPost-container",children:[Object(a.jsxs)("div",{className:"headPost",children:[Object(a.jsxs)("h2",{children:["My ",Object(a.jsx)("span",{className:"badge",children:"Blog Posts"})]}),Object(a.jsx)("hr",{})]}),Object(a.jsx)("div",{className:"blog-cards",children:Object(a.jsx)("div",{className:"blog-content",children:Object(a.jsx)("b",{children:"You Haven't Created Any Blog Post Yet!"})})})]})};var E=function(e){var t=e.value,n=Object(c.useState)({name:"",photo:""}),s=Object(o.a)(n,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/user/allusers/".concat(t),{});case 2:n=e.sent,i({name:n.data.user.name,photo:n.data.user.photo});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:r.photo?r.photo.replace("public/",""):N,alt:"UserIMG"}),Object(a.jsxs)("span",{children:[r.name," "]})]})};var z=function(){var e=Object(c.useState)({allPosts:[]}),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),i=Object(o.a)(r,2),l=i[0],u=i[1];Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(localStorage.getItem("token")),e.next=4,O.a.get("/api/user/getallpost",{headers:{"x-auth-token":t}});case 4:return n=e.sent,e.next=7,O.a.get("/api/user/profile",{headers:{"x-auth-token":t}});case 7:a=e.sent,u(a.data.user._id),s({allPosts:n.data.posts}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.data);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var j=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.parse(localStorage.getItem("token")),e.next=4,O.a.put("/api/user/likes",{id:t},{headers:{"x-auth-token":a}});case 4:c=e.sent,r=n.allPosts.map((function(e){return e._id===c.data._id?c.data:e})),s({allPosts:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.parse(localStorage.getItem("token")),e.next=4,O.a.put("/api/user/dislikes",{id:t},{headers:{"x-auth-token":a}});case 4:c=e.sent,r=n.allPosts.map((function(e){return e._id===c.data._id?c.data:e})),s({allPosts:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(b.a.mark((function e(t,a){var c,r,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),c=t.target[0].value,r=JSON.parse(localStorage.getItem("token")),e.next=6,O.a.put("/api/user/comments",{text:c,id:a},{headers:{"x-auth-token":r}});case 6:i=e.sent,t.target[0].value="",o=n.allPosts.map((function(e){return e._id===i.data._id?i.data:e})),s({allPosts:o}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(b.a.mark((function e(t,a){var c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=JSON.parse(localStorage.getItem("token")),e.next=4,O.a.put("/api/user/deletecomment",{commentId:t,postId:a},{headers:{"x-auth-token":c}});case 4:r=e.sent,i=n.allPosts.map((function(e){return e._id===r.data._id?r.data:e})),s({allPosts:i}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}();return n.allPosts.length>0?Object(a.jsxs)("div",{className:"myPost-container",children:[Object(a.jsxs)("div",{className:"headPost",children:[Object(a.jsxs)("h2",{children:["ALL ",Object(a.jsx)("span",{className:"badge",children:"Blog Posts"})]}),Object(a.jsx)("hr",{})]}),n.allPosts.map((function(e,t){return Object(a.jsxs)("div",{className:"blog-cards",children:[Object(a.jsxs)("div",{className:"HeaderContent",children:[Object(a.jsx)("div",{children:Object(a.jsx)(E,{value:e.userId})}),Object(a.jsxs)("strong",{id:"Date",children:[" ",e.date," "]})]}),Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:e.postimage?e.postimage.replace("public/",""):P,alt:"PostImg"})}),Object(a.jsxs)("div",{className:"blog-content",children:[Object(a.jsxs)("b",{children:[" ",e.title]}),Object(a.jsx)("p",{children:e.description}),Object(a.jsx)("div",{className:"icons",children:Object(a.jsxs)("div",{children:[e.likes.includes(l)?Object(a.jsx)("i",{onClick:function(){return d(e._id)},id:"heart",className:"fa fa-heart redheart"}):Object(a.jsx)("i",{onClick:function(){return j(e._id)},id:"heart",className:"fa fa-heart-o"}),Object(a.jsx)("i",{id:"showlikes",children:e.likes.length>1?"".concat(e.likes.length," Likes"):"".concat(e.likes.length," Like")})]})}),e.comments.map((function(t){return Object(a.jsxs)("p",{id:"commentP",children:[Object(a.jsx)("b",{id:"commentB",children:t.postedByName}),Object(a.jsx)("span",{id:"commentText",children:t.text}),t.postedBy===l?Object(a.jsx)("i",{id:"trashForComment",onClick:function(){return h(t._id,e._id)},className:"fa fa-trash-o"}):""]},t._id)})),Object(a.jsx)("form",{onSubmit:function(t){A(t,e._id)},className:"comments",children:Object(a.jsx)("input",{id:"commentInput",type:"commentText",placeholder:"add a comment"})})]})]},t)}))]}):Object(a.jsxs)("div",{className:"myPost-container",children:[Object(a.jsxs)("div",{className:"headPost",children:[Object(a.jsxs)("h2",{children:["ALL ",Object(a.jsx)("span",{className:"badge",children:"Blog Posts"})]}),Object(a.jsx)("hr",{})]}),Object(a.jsx)("div",{className:"blog-cards",children:Object(a.jsx)("div",{className:"blog-content",children:Object(a.jsx)("b",{children:"No Post Yet!! Be The First One To Create Post."})})})]})};n(59);var S=function(){return Object(c.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;document.getElementById("footerID").style.bottom=e>t?"0":"-60px",e=t}}),[]),Object(a.jsx)(f,{children:Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{}),Object(a.jsx)(j.a,{exact:!0,path:"/",component:g}),Object(a.jsx)(j.a,{exact:!0,path:"/register",component:x}),Object(a.jsx)(j.a,{exact:!0,path:"/login",component:v}),Object(a.jsx)(j.a,{exact:!0,path:"/profile",component:k}),Object(a.jsx)(j.a,{exact:!0,path:"/createpost",component:y}),Object(a.jsx)(j.a,{exact:!0,path:"/yourpost",component:w}),Object(a.jsx)(j.a,{exact:!0,path:"/allposts",component:z}),Object(a.jsx)("div",{className:"footer",id:"footerID",children:Object(a.jsxs)("p",{children:["Copyright \xa92020 Nishant Rana",Object(a.jsx)("a",{href:"https://www.instagram.com/nishant._.rana_/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("i",{className:"fa fa-instagram",children:" "})}),Object(a.jsx)("a",{href:"https://github.com/nishant007-tech",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("i",{className:"fa fa-github"})})]})})]})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),I()}},[[60,1,2]]]);
//# sourceMappingURL=main.6fbf2ab1.chunk.js.map