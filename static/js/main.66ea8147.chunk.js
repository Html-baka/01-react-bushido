(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{128:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(39),a=n(5),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"Hohlojin",ava:"https://2ch.hk/b/src/230174100/16016694875240.png"},{id:2,name:"Ded Klop",ava:"https://pbs.twimg.com/media/Dsj9jNdXgAErMCd.jpg"},{id:3,name:"Petuh",ava:"https://lh3.googleusercontent.com/proxy/TcnTRjDWoZ6Gslu5TkCsMHH-cMxSiFDdkPvrvmac3jw48ZBW6EoaCJyzITxn_CLOHaVlDKKlflv7Kuf0x7TUw4bn-s4"},{id:4,name:"Klop 1",ava:"https://www.blast.hk/attachments/64805/"},{id:5,name:"Klop 2",ava:"https://cs7.pikabu.ru/post_img/2018/01/06/7/151523515925553621.jpg"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How is your react?"},{id:3,message:"heeeey?"}]},i=function(e){return{type:s,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},136:function(e,t,n){e.exports={userPhoto:"users_userPhoto__28pZG",selectedPage:"users_selectedPage__3z8QX"}},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(5),a=n(28),s=n(29),c=n(31),i=n(30),o=n(1),u=n.n(o),l=n(12),d=n(10),j=n(0),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(r.a)({},this.props)):Object(j.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(f)(t)}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(134),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8e7a3fe9-89c5-48d3-ba63-7d0a8f0f6fc3"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},i={getMe:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},16:function(e,t,n){e.exports={nav:"Navbar_nav__3Nb8O",item:"Navbar_item__2XkOf",active:"Navbar_active__xp3Gb"}},170:function(e,t,n){},171:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,305)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(1),s=n.n(a),c=n(65),i=n.n(c),o=(n(170),n(28)),u=n(29),l=n(31),d=n(30),j=(n(171),n(5)),f=n(12),p=n(13),b=n(93),h=n.n(b),O=n(0),g=function(e){return Object(O.jsxs)("header",{className:h.a.header,children:[Object(O.jsx)("img",{src:"https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"}),Object(O.jsx)("div",{className:h.a.loginBlock,children:e.isAuth?Object(O.jsxs)("div",{children:[e.login," - ",Object(O.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(O.jsx)(p.b,{to:"/login",children:"Log In"})})]})},m=n(11),v=n.n(m),x=n(20),w=n(45),_=n(15),P="samuraiJS/auth/SET_USER_DATA",C={email:null,userId:null,login:null,isAuth:!1},S=function(e,t,n,r){return{type:P,payload:{email:e,userId:t,login:n,isAuth:r}}},y=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,a,s,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.getMe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.email,s=r.id,c=r.login,t(S(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(g,Object(j.a)({},this.props))}}]),n}(s.a.Component),I=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.data.resultCode&&t(S(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(k),E=n(71),T=n.n(E),F=n(56),z=n.n(F),U=function(e){var t="/dialogs/"+e.id;return Object(O.jsx)(p.b,{className:z.a.navLink,to:t,children:Object(O.jsxs)("div",{className:z.a.wrapper,children:[Object(O.jsx)("img",{className:z.a.ava,src:e.ava}),Object(O.jsx)("div",{className:z.a.name,children:e.name})]})})},A=function(e){var t=e.state.friendsOnline.map((function(e){return Object(O.jsx)(U,{name:e.name,id:e.id,ava:e.ava},e.id)}));return Object(O.jsxs)("div",{className:T.a.main,children:[Object(O.jsx)("h4",{className:T.a.heading,children:"Friends Online:"}),Object(O.jsx)("div",{className:T.a.wrapper,children:t})]})},M=n(16),L=n.n(M),D=function(e){return Object(O.jsxs)("nav",{className:L.a.nav,children:[Object(O.jsx)("div",{className:L.a.item,children:Object(O.jsx)(p.b,{to:"/profile",activeClassName:L.a.active,children:"Profile"})}),Object(O.jsx)("div",{className:"".concat(L.a.item," ").concat(L.a.active),children:Object(O.jsx)(p.b,{to:"/dialogs",activeClassName:L.a.active,children:"Messages"})}),Object(O.jsx)("div",{className:L.a.item,children:Object(O.jsx)(p.b,{to:"/users",activeClassName:L.a.active,children:"Users"})}),Object(O.jsx)("div",{className:L.a.item,children:Object(O.jsx)(p.b,{to:"/news",activeClassName:L.a.active,children:"News"})}),Object(O.jsx)("div",{className:L.a.item,children:Object(O.jsx)(p.b,{to:"/music",activeClassName:L.a.active,children:"Music"})}),Object(O.jsx)("div",{className:L.a.item,children:Object(O.jsx)(p.b,{to:"/settings",activeClassName:L.a.active,children:"Settings"})}),Object(O.jsx)(A,{state:e.state})]})},H=Object(f.b)((function(e){return{state:e.navBar}}))(D),G=n(10),R=(n(196),function(){return Object(O.jsx)("div",{children:"News"})}),K=(n(197),function(){return Object(O.jsx)("div",{children:"Music"})}),B=(n(198),function(){return Object(O.jsx)("div",{children:"Settings"})}),W=n(39),X=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),r):e}))},J="FOLLOW",V="UNFOLLOW",Z="SET_USERS",q="SET_CURRENT_PAGE",Q="SET_TOTAL_USERS_COUNT",Y="TOGGLE_IS_FETCHING",$="TOGGLE_IS_FOLLOWING_PROGRESS",ee={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},te=function(e){return{type:J,userId:e}},ne=function(e){return{type:V,userId:e}},re=function(e){return{type:q,currentPage:e}},ae=function(e){return{type:Y,isFetching:e}},se=function(e,t){return{type:$,isFetching:e,userId:t}},ce=function(){var e=Object(x.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(se(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(se(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(j.a)(Object(j.a)({},e),{},{users:X(e.users,t.userId,"id",{followed:!0})});case V:return Object(j.a)(Object(j.a)({},e),{},{users:X(e.users,t.userId,"id",{followed:!1})});case Z:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case q:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case Q:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case Y:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case $:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(W.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},oe=n(44),ue=n(68),le=n(131),de=n(72),je=n.n(de),fe=n(135),pe=n.n(fe),be=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),j=Object(a.useState)(1),f=Object(le.a)(j,2),p=f[0],b=f[1],h=(p-1)*i+1,g=p*i;return Object(O.jsxs)("div",{className:je.a.paginator,children:[p>1&&Object(O.jsx)("button",{onClick:function(){b(p-1)},children:"Prev"}),u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(O.jsx)("span",{className:pe()(Object(ue.a)({},je.a.selectedPage,r===e),je.a.pageNumber),onClick:function(t){s(e)},children:e})})),d>p&&Object(O.jsx)("button",{onClick:function(){b(p+1)},children:"Next"})]})},he=n(136),Oe=n.n(he),ge=n.p+"static/media/user_undefined.7bc1f545.png",me=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(p.b,{to:"/profile/"+t.id,children:Object(O.jsx)("img",{src:null!=t.photos.small?t.photos.small:ge,className:Oe.a.userPhoto})})}),Object(O.jsx)("div",{children:t.followed?Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:t.name}),Object(O.jsx)("div",{children:t.status})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:"u.location.country"}),Object(O.jsx)("div",{children:"u.location.city"})]})]})},ve=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,s=Object(oe.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize"]);return Object(O.jsxs)("div",{children:[Object(O.jsx)(be,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),Object(O.jsx)("div",{children:s.users.map((function(e){return Object(O.jsx)(me,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))})]})},xe=n(43),we=n(9),_e=(n(140),n(137)),Pe=Object(_e.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ce=function(e){return e.usersPage.pageSize},Se=function(e){return e.usersPage.totalUsersCount},ye=function(e){return e.usersPage.currentPage},Ne=function(e){return e.usersPage.isFetching},ke=function(e){return e.usersPage.followingInProgress},Ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)(xe.a,{}):null,Object(O.jsx)(ve,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followSuccess:this.props.follow,unfollowSuccess:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),n}(s.a.Component),Ee=Object(we.d)(Object(f.b)((function(e){return{users:Pe(e),pageSize:Ce(e),totalUsersCount:Se(e),currentPage:ye(e),isFetching:Ne(e),followingInProgress:ke(e)}}),{followSuccess:te,unfollowSuccess:ne,setCurrentPage:re,toggleFollowingProgress:se,requestUsers:function(e,t){return function(){var n=Object(x.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ae(!0)),r(re(e)),n.next=4,_.c.getUsers(e,t);case 4:a=n.sent,r(ae(!1)),r((c=a.items,{type:Z,users:c})),r((s=a.totalCount,{type:Q,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ce(n,e,_.c.follow.bind(_.c),te);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ce(n,e,_.c.unfollow.bind(_.c),ne);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Ie),Te=n(129),Fe=n(130),ze=n(77),Ue=n(66),Ae=n(53),Me=n.n(Ae),Le=Object(Fe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(O.jsxs)("form",{onSubmit:t,children:[Object(O.jsx)("div",{children:Object(O.jsx)(Te.a,{placeholder:"Email",name:"email",component:Ue.a,validate:[ze.b]})}),Object(O.jsx)("div",{children:Object(O.jsx)(Te.a,{placeholder:"Password",name:"password",type:"password",component:Ue.a,validate:[ze.b]})}),Object(O.jsxs)("div",{children:[Object(O.jsx)(Te.a,{type:"checkbox",name:"rememberMe",component:Ue.a})," remember me"]}),n&&Object(O.jsxs)("div",{className:Me.a.formSummaryError,children:[" ",n]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Log In"})})]})})),De=Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(x.a)(v.a.mark((function r(a){var s,c;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(y()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(w.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(O.jsx)(G.a,{to:"/profile"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Log In"}),Object(O.jsx)(Le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),He="INITIALIZED_SUCCESS",Ge={initialized:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case He:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Ke=n(98),Be=n(128),We={friendsOnline:[{id:1,name:"Hohlojin",ava:"https://2ch.hk/b/src/230174100/16016694875240.png"},{id:2,name:"Ded Klop",ava:"https://pbs.twimg.com/media/Dsj9jNdXgAErMCd.jpg"},{id:3,name:"Petuh",ava:"https://lh3.googleusercontent.com/proxy/TcnTRjDWoZ6Gslu5TkCsMHH-cMxSiFDdkPvrvmac3jw48ZBW6EoaCJyzITxn_CLOHaVlDKKlflv7Kuf0x7TUw4bn-s4"}]},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;return e},Je=n(139),Ve=n(132),Ze=Object(we.c)({profilePage:Ke.b,dialogsPage:Be.a,navBar:Xe,usersPage:ie,auth:N,form:Ve.a,app:Re}),qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.d,Qe=Object(we.e)(Ze,qe(Object(we.a)(Je.a)));window.store=Qe;var Ye=Qe,$e=s.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),et=s.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),tt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(I,{}),Object(O.jsx)(H,{}),Object(O.jsxs)("div",{className:"app-wrapper-content",children:[Object(O.jsx)(G.b,{path:"/dialogs",render:function(){return Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)(xe.a,{}),children:Object(O.jsx)(et,{})})}}),Object(O.jsx)(G.b,{path:"/profile/:userId?",render:function(){return Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)(xe.a,{}),children:Object(O.jsx)($e,{})})}}),Object(O.jsx)(G.b,{path:"/news",render:function(){return Object(O.jsx)(R,{})}}),Object(O.jsx)(G.b,{path:"/music",render:function(){return Object(O.jsx)(K,{})}}),Object(O.jsx)(G.b,{path:"/users",render:function(){return Object(O.jsx)(Ee,{})}}),Object(O.jsx)(G.b,{path:"/login",render:function(){return Object(O.jsx)(De,{})}}),Object(O.jsx)(G.b,{path:"/settings",render:function(){return Object(O.jsx)(B,{})}})]})]}):Object(O.jsx)(xe.a,{})}}]),n}(a.Component),nt=Object(we.d)(G.f,Object(f.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(y());Promise.all([t]).then((function(){e({type:He})}))}}}))(tt),rt=function(e){return Object(O.jsx)(p.a,{children:Object(O.jsx)(f.a,{store:Ye,children:Object(O.jsx)(nt,{})})})};i.a.render(Object(O.jsx)(rt,{}),document.getElementById("root")),window.store=Ye,r()},43:function(e,t,n){"use strict";n(1);var r=n.p+"static/media/preloader.1aacaadb.svg",a=n(0);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2ArQE",error:"FormsControls_error__2izoH",formSummaryError:"FormsControls_formSummaryError__Kzf0n"}},56:function(e,t,n){e.exports={wrapper:"FriendOnlineItem_wrapper__jmfmV",ava:"FriendOnlineItem_ava__2SBGe",name:"FriendOnlineItem_name__3eDmt",navLink:"FriendOnlineItem_navLink__1JVXV"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(5),a=n(44),s=(n(1),n(53)),c=n.n(s),i=n(0),o=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(r?c.a.error:""),children:[Object(i.jsx)("div",{children:n.children}),r&&Object(i.jsx)("span",{children:t.error})]})},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},71:function(e,t,n){e.exports={main:"FriendsOnline_main__1zOQI",wrapper:"FriendsOnline_wrapper__biDRz",heading:"FriendsOnline_heading__3eEHT"}},72:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2SFdK",paginator:"Paginator_paginator__8bMM2",pageNumber:"Paginator_pageNumber__1_QNB"}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},93:function(e,t,n){e.exports={header:"Header_header__3xieG",loginBlock:"Header_loginBlock__1t6NP"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(11),a=n.n(r),s=n(20),c=n(39),i=n(5),o=n(15),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",f={posts:[{id:1,message:"Hey, how are you?",likeCounts:15},{id:2,message:"My first post",likeCounts:3}],profile:null,status:""},p=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likeCounts:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[297,1,2]]]);
//# sourceMappingURL=main.66ea8147.chunk.js.map