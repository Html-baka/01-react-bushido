(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{299:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__3uAJF",dialogsItems:"Dialogs_dialogsItems__X2on4",active:"Dialogs_active__3dujJ",messages:"Dialogs_messages__1aMA7",textareaWrapper:"Dialogs_textareaWrapper__3dgdY",sendMessage:"Dialogs_sendMessage__1dF_6"}},303:function(e,a,s){e.exports={dialog:"DialogItem_dialog__6Kojj",dialogAva:"DialogItem_dialogAva__20oup",dialogsItems:"DialogItem_dialogsItems__3eoT7",linkWrapper:"DialogItem_linkWrapper__2GAzi"}},304:function(e,a,s){e.exports={message:"Message_message__3Ihgr"}},307:function(e,a,s){"use strict";s.r(a);s(1);var t=s(128),i=s(299),n=s.n(i),o=s(303),c=s.n(o),d=s(13),g=s(0),l=function(e){var a="/dialogs/"+e.id;return Object(g.jsx)("div",{className:c.a.dialog+" "+c.a.active,children:Object(g.jsxs)(d.b,{className:c.a.linkWrapper,to:a,children:[Object(g.jsx)("img",{className:c.a.dialogAva,src:e.ava}),Object(g.jsx)("div",{children:e.name})]})})},r=s(304),m=s.n(r),j=function(e){return Object(g.jsx)("div",{className:m.a.message,children:e.message})},b=s(10),u=s(129),_=s(130),x=s(66),p=s(77),O=Object(p.a)(100),v=Object(_.a)({form:"dialogAddMessageForm"})((function(e){return Object(g.jsxs)("form",{className:n.a.textareaWrapper,onSubmit:e.handleSubmit,children:[Object(g.jsx)(u.a,{component:x.b,validate:[p.b,O],name:"newMessageText",placeholder:"enter your message"}),Object(g.jsx)("button",{className:n.a.sendMessage,children:"Send"})]})})),f=function(e){var a=e.dialogs.map((function(e){return Object(g.jsx)(l,{name:e.name,id:e.id,ava:e.ava},e.id)})),s=e.messages.map((function(e){return Object(g.jsx)(j,{message:e.message},e.id)}));return e.isAuth?Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:n.a.dialogs,children:[Object(g.jsx)("div",{className:n.a.dialogsItems,children:a}),Object(g.jsx)("div",{className:n.a.messages,children:s})]}),Object(g.jsx)(v,{onSubmit:function(a){e.sendMessage(a.newMessageText)}})]}):Object(g.jsx)(b.a,{to:"/login"})},h=s(12),M=s(140),D=s(9);a.default=Object(D.d)(Object(h.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{sendMessage:function(a){e(Object(t.b)(a))}}})),M.a)(f)}}]);
//# sourceMappingURL=4.bf3e5cb6.chunk.js.map