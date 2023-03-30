"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{2802:function(e,t,a){a.r(t),a.d(t,{default:function(){return at}});var n=a(5861),s=a(9439),r=a(4687),c=a.n(r),i=a(4087),l=a(3433),o=a(176),d=a(9229),u=a(7639),m=a(2791);var h=a.p+"static/media/petDefaultAvatar.0ac8b76f65c4b836a6e35d03df291105.svg",p=a(5048),x=a(1243),_=a(4724);x.Z.defaults.baseURL="https://backend.petly.club",(0,_.ok)();var f=function(){var e=(0,n.Z)(c().mark((function e(t){var a,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.post("/pets",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,n.Z)(c().mark((function e(t){var a,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.delete("/pets/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=a(5273),v=a(5985),g=function(e){return v.Am.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},N=function(e){return v.Am.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},y=(0,b.hg)("auth/addPet",function(){var e=(0,n.Z)(c().mark((function e(t,a){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),g("Something went wrong, try to reload the page"),e.abrupt("return",a.rejectWithValue(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()),k=(0,b.hg)("auth/deletePet",function(){var e=(0,n.Z)(c().mark((function e(t,a){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(t);case 3:return N("Pet was successfully deleted"),e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),g("Something went wrong, try to reload the page"),e.abrupt("return",a.rejectWithValue(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()),P="PetsList_container_pets_list__2UI9e",w="PetsList_container_pets_img__OkewA",Z="PetsList_pets_img__butis",C="PetsList_title_info__oGLsL",F="PetsList_text_info_pets__Pxjy8",A="PetsList_ul_pets_info__HCoEI",S="PetsList_button_delete_pet__sd8nM",D="PetsList_li_pets_info__2fBYT",L="PetsList_container_button_ul_pets__W-BxH",U="PetsList_icon_delete__qb9GB",M="PetsList_fon_delete_icon__+odm0",R=a(184),Y=function(e){var t=e.pets,a=e.setAddPet,n=e.addPet,s=t.reduce((function(e,t){return[t].concat((0,l.Z)(e))}),[]),r=(0,p.I0)();return s.length>0?(0,R.jsx)("div",{children:s.map((function(e){var t=e._id,s=e.name,c=e.date,i=e.breed,l=e.photoURL,o=e.comments;return(0,R.jsxs)("div",{className:P,children:[(0,R.jsx)("div",{className:w,children:(0,R.jsx)("img",{src:null!==l&&void 0!==l?l:h,alt:"pet",className:Z})}),(0,R.jsxs)("div",{className:L,children:[(0,R.jsx)("button",{onClick:function(e){return function(e,t){r(k(t)),e.preventDefault()}(e,t)},type:"button",className:S,children:(0,R.jsx)("div",{className:M,onClick:function(){return a(!n)},children:(0,R.jsx)(u.p,{border:"none",className:U})})}),(0,R.jsxs)("ul",{className:A,children:[(0,R.jsx)("li",{className:D,children:(0,R.jsxs)("p",{className:F,children:[(0,R.jsx)("span",{className:C,children:"Name:"})," ",s]})}),(0,R.jsx)("li",{className:D,children:(0,R.jsxs)("p",{className:F,children:[(0,R.jsx)("span",{className:C,children:"Date of birth:"})," ",c]})}),(0,R.jsx)("li",{className:D,children:(0,R.jsxs)("p",{className:F,children:[(0,R.jsx)("span",{className:C,children:"Breed:"})," ",i]})}),(0,R.jsx)("li",{className:D,children:(0,R.jsxs)("p",{className:F,children:[(0,R.jsx)("span",{className:C,children:"Comments:"})," ",o]})})]})]})]},t)}))}):(0,R.jsx)(o.k,{bgColor:"accent.white","box-shadow":"7px 4px 14px rgba(0, 0, 0, 0.11)",borderRadius:"40px",direction:{base:"column",md:"row",xl:"row"},mb:{base:"20px",xl:"22px"},px:{base:"20px",md:"20px",xl:"28px"},py:{base:"40px",md:"20px",xl:"20px"},w:{base:"280px",md:"704px",xl:"821px"},children:(0,R.jsx)(d.x,{mx:"auto",children:" You have no pets yet "})})},q=a(9817),B={name:"",date:"",breed:"",photoURL:"https://res.cloudinary.com/daud0cvhu/image/upload/v1679907667/placeholder.jpg.jpg",comments:""},E=a(6727),I=a(2426),O=a.n(I),z=E.Ry().shape({name:E.Z_().min(2).max(16).matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491\s\-']+$/,"Can only contain letters").required("Required"),date:E.hT().min(O()("06021995","DDMMYYYY"),"Must be at later than 06.02.1995").max(O()(),"Must be at earlier than ".concat(O()().add(1,"days").format("DD.MM.YYYY"))).required("Required"),breed:E.Z_().min(2).max(16).matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491\s\-']+$/,"Can only contain letters").required("Required"),comments:E.Z_().min(8).max(120).required("Required")}),T=a(1413),W=a(5705),H="ModalAddsPet_container__FYpU2",J="ModalAddsPet_title__Ts2JQ",G="ModalAddsPet_label__USmjo",Q="ModalAddsPet_label_photo__scDyl",$="ModalAddsPet_file_btn__YQHEJ",V="ModalAddsPet_field__iYkor",K="ModalAddsPet_label_last__nJyRm",X="ModalAddsPet_btn__nl-ae",ee="ModalAddsPet_accent_btn__bcdtA",te="ModalAddsPet_field_photo__8WK5N",ae="ModalAddsPet_img_photo__1NCT+",ne="ModalAddsPet_error_msg__lKCO0",se="ModalAddsPet_btn_list__xRRpn",re="ModalAddsPet_field_comments__+qNEA",ce=function(e){var t=e.onClose,a=e.setAddPet,r=e.addPet,i=(0,m.useState)(!0),l=(0,s.Z)(i,2),o=l[0],d=l[1],u=(0,m.useState)(""),h=(0,s.Z)(u,2),x=h[0],f=h[1],j=(0,p.I0)();function b(e,t){var a=t.name,n=t.date,s=t.breed;return!e||void 0!==a||void 0!==n||void 0!==s}var g=function(){var e=(0,n.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target.files[0]){e.next=3;break}return v.Am.error("Please select a file"),e.abrupt("return");case 3:if(!(t.target.files[0].size>375e3)){e.next=6;break}return v.Am.error("You can not upload the file greater then 3 MB"),e.abrupt("return");case 6:(a=new FormData).append("avatar",t.target.files[0]),(0,_.WW)(a).then((function(e){f(e.urlAvatar)})).catch((function(e){console.log("Error",e)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){document.querySelector("textarea").addEventListener("keyup",(function(){this.scrollTop>0&&(this.style.height=this.scrollHeight+"px",this.style.borderRadius="20px")}))};return(0,R.jsxs)("div",{className:H,children:[(0,R.jsx)("h1",{className:J,children:"Add pet"}),(0,R.jsx)(W.J9,{onSubmit:function(e){var a=x||"https://res.cloudinary.com/daud0cvhu/image/upload/v1679907667/placeholder.jpg.jpg",n=O()(e.date,"YYYYY-MM-DD").format("DD.MM.YYYY"),s=(0,T.Z)((0,T.Z)({},e),{},{photoURL:a,date:n});j(y(s)),t()},initialValues:B,validationSchema:z,children:function(e){var n=e.errors,s=e.dirty;return(0,R.jsx)(W.l0,{autoComplete:"off",children:o?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("label",{htmlFor:"name",className:G,children:["Name pet",(0,R.jsx)(W.gN,{className:V,id:"name",type:"text",name:"name",placeholder:"Type name pet",required:!0}),(0,R.jsx)(W.Bc,{name:"name",component:"div",className:ne})]}),(0,R.jsxs)("label",{className:G,htmlFor:"birthdate",children:["Date of birth",(0,R.jsx)(W.gN,{className:V,id:"date",type:"date",name:"date",placeholder:"DD.MM.YYYY",required:!0}),(0,R.jsx)(W.Bc,{name:"date",component:"div",className:ne})]}),(0,R.jsxs)("label",{className:"".concat(G," ").concat(K),htmlFor:"breed",children:["Breed",(0,R.jsxs)(W.gN,{className:V,id:"breed",type:"text",name:"breed",component:"select",placeholder:"Type breed",required:!0,children:[(0,R.jsx)("option",{selected:!0,value:"Dog",children:"Dog"}),(0,R.jsx)("option",{value:"Cat",children:"Cat"}),(0,R.jsx)("option",{value:"Hamster",children:"Hamster"}),(0,R.jsx)("option",{value:"Parrot",children:"Parrot"}),(0,R.jsx)("option",{value:"Guinea pig",children:"Guinea pig"}),(0,R.jsx)("option",{value:"Wookiee",children:"Wookiee"}),(0,R.jsx)("option",{value:"Ewoks",children:"Ewoks"}),(0,R.jsx)("option",{value:"The Dark Lord",children:"The Dark Lord"}),(0,R.jsx)("option",{value:"Grud",children:"Grud"}),(0,R.jsx)("option",{value:"Other",children:"Other"})]}),(0,R.jsx)(W.Bc,{name:"breed",component:"div",className:ne})]}),(0,R.jsxs)("div",{className:se,children:[(0,R.jsx)("button",{className:"".concat(X," ").concat(ee),onClick:function(){return d(!1)},disabled:b(s,n),"aria-label":"next",children:"Next"}),(0,R.jsx)("button",{type:"button",onClick:t,className:X,"aria-label":"cancel",children:"Cancel"})]})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("label",{htmlFor:"imageURL",className:"".concat(G," ").concat(Q),children:"Add photo and some comments"}),(0,R.jsxs)("label",{htmlFor:"imageURL",className:te,children:[(0,R.jsx)(W.gN,{className:$,id:"imageURL",type:"file",name:"imageURL",accept:"image/*,.png,.jpg,.gif,.web,",onChange:g}),x&&(0,R.jsx)("img",{src:x,className:ae,alt:"Pet",height:116,width:116})]}),(0,R.jsxs)("label",{htmlFor:"comments",className:"".concat(G," ").concat(K),children:["Comments",(0,R.jsx)(W.gN,{as:"textarea",className:"".concat(V," ").concat(re),id:"comments",type:"text",name:"comments",rows:"1",placeholder:"Some comments",onClick:N,required:!0}),(0,R.jsx)(W.Bc,{name:"comments",component:"div",className:ne})]}),(0,R.jsxs)("div",{className:se,children:[(0,R.jsx)("button",{type:"submit","aria-label":"add",className:"".concat(X," ").concat(ee),onClick:function(){return a(!r)},children:"Done"}),(0,R.jsx)("button",{onClick:function(){return d(!0)},type:"button",className:X,"aria-label":"back",children:"Back"})]})]})})}})]})},ie=a(9126),le="PetsData_title__gB1RG",oe="PetsData_icon_plus__JC4So",de="PetsData_button_add__9-wSa",ue="PetsData_text_button__cl99l",me="PetsData_header_my_pets__8HpS8",he=function(e){var t=e.pets,a=e.setAddPet,n=e.addPet,r=(0,m.useState)(!1),c=(0,s.Z)(r,2),l=c[0],o=c[1],d=function(){o(!l)};return(0,R.jsxs)(i.xu,{ml:{xl:"32px"},w:"100%",children:[(0,R.jsxs)("div",{className:me,children:[(0,R.jsx)("h2",{className:le,children:"My pets:"})," ",(0,R.jsxs)("button",{onClick:d,type:"button",className:de,children:[(0,R.jsx)("p",{className:ue,children:"Add pet"}),(0,R.jsx)(ie.Y_C,{className:oe})]})]}),(0,R.jsx)(Y,{pets:t,setAddPet:a,addPet:n}),l&&(0,R.jsx)(q.u,{onClose:d,children:(0,R.jsx)(ce,{onClose:d,setAddPet:a,addPet:n})})]})},pe=a(8617),xe="UserDataItem_form_user_input__95YW8",_e="UserDataItem_td_user__pYCXv",fe="UserDataItem_text_user__a0yxL",je="UserDataItem_container_text__FpQYW",be="UserDataItem_button_pencil__w1LRs",ve="UserDataItem_pencil__el8SJ",ge="UserDataItem_pencil_disabled__sxFTe",Ne="UserDataItem_check__ZyFe0",ye="UserDataItem_input__VhN2V";function ke(e){var t=e.user,a=t.birthdate,n=t.cityRegion,r=t.email,c=t.mobilePhone,i=t.name,l=(0,m.useState)(i),o=(0,s.Z)(l,2),d=o[0],u=o[1],h=(0,m.useState)(r),p=(0,s.Z)(h,2),x=p[0],f=p[1],j=(0,m.useState)(a||"01.01.2000"),b=(0,s.Z)(j,2),v=b[0],g=b[1],N=(0,m.useState)(c||"+38000000000"),y=(0,s.Z)(N,2),k=y[0],P=y[1],w=(0,m.useState)(n),Z=(0,s.Z)(w,2),C=Z[0],F=Z[1],A=(0,m.useState)(!1),S=(0,s.Z)(A,2),D=S[0],L=S[1],U=(0,m.useState)(!1),M=(0,s.Z)(U,2),Y=M[0],q=M[1],B=(0,m.useState)(!1),E=(0,s.Z)(B,2),I=E[0],O=E[1],z=(0,m.useState)(!1),T=(0,s.Z)(z,2),W=T[0],H=T[1],J=(0,m.useState)(!1),G=(0,s.Z)(J,2),Q=G[0],$=G[1],V=(0,m.useState)(!1),K=(0,s.Z)(V,2),X=K[0],ee=K[1],te=function(e){switch(e.preventDefault(),e.currentTarget.name[0].name||e.currentTarget.name){case"name":ee(!0),L(!D);break;case"email":ee(!0),q(!Y);break;case"birthday":ee(!0),O(!I);break;case"phone":ee(!0),H(!W);break;case"city":ee(!0),$(!Q);break;default:console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 UserDataItem (handleVlick)")}},ae=function(e){switch(e.preventDefault(),e.target.name){case"name":u(e.target.value);break;case"email":f(e.target.value);break;case"birthday":g(e.target.value);break;case"phone":P(e.target.value);break;case"city":F(e.target.value);break;default:console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 UserDataItem (handleChange)")}},ne=function(e){if(e.preventDefault(),te(e),ee(!1),d!==i)(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:k}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v});else if(x!==r)(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:k}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v});else if(k!==c)(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:k}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v});else if(C!==n)(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:k}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v});else{if(v===a)return;(0,_.f7)({name:d}),(0,_.f7)({email:x}),(0,_.f7)({mobilePhone:k}),(0,_.f7)({cityRegion:C}),(0,_.f7)({birthdate:v})}};return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("table",{className:je,children:(0,R.jsxs)("tbody",{children:[(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:"Name:"})}),!1===D?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:d})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"button",className:be,name:"name",onClick:te,disabled:!1!==X,children:(0,R.jsx)(pe.LsQ,{className:!1===X?ve:ge})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("form",{id:"sub_name",name:"name",onSubmit:ne,className:xe,children:(0,R.jsx)("input",{type:"text",name:"name",required:!0,pattern:"^[a-zA-Z]+$",value:d,onChange:ae,className:ye})})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"submit",form:"sub_name",className:be,name:"name",children:(0,R.jsx)(ie.oFd,{className:Ne})})})]})]}),(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:"Email:"})}),!1===Y?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:x})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"button",className:be,name:"email",onClick:te,disabled:!1!==X,children:(0,R.jsx)(pe.LsQ,{className:!1===X?ve:ge})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("form",{id:"sub_email",name:"email",onSubmit:ne,className:xe,children:(0,R.jsx)("input",{type:"email",name:"email",required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",value:x,onChange:ae,className:ye})})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"submit",className:be,name:"email",form:"sub_email",children:(0,R.jsx)(ie.oFd,{className:Ne})})})]})]}),(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:"Birthday:"})}),!1===I?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:v||"01.01.2000"})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"button",className:be,name:"birthday",onClick:te,disabled:!1!==X,children:(0,R.jsx)(pe.LsQ,{className:!1===X?ve:ge})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("form",{id:"sub_birt",name:"birthday",onSubmit:ne,className:xe,children:(0,R.jsx)("input",{type:"text",name:"birthday",required:!0,pattern:"(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",value:v,onChange:ae,className:ye})})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"submit",className:be,name:"birthday",form:"sub_birt",children:(0,R.jsx)(ie.oFd,{className:Ne})})})]})]}),(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:"Phone:"})}),!1===W?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:k||"+38000000000"})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"button",className:be,name:"phone",onClick:te,disabled:!1!==X,children:(0,R.jsx)(pe.LsQ,{className:!1===X?ve:ge})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("form",{id:"sub_phone",name:"phone",onSubmit:ne,className:xe,children:(0,R.jsx)("input",{type:"tel",name:"phone",required:!0,pattern:"\\+?[0-9\\s\\-\\(\\)]+",value:k,onChange:ae,className:ye})})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"submit",className:be,name:"phone",form:"sub_phone",children:(0,R.jsx)(ie.oFd,{className:Ne})})})]})]}),(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:"City:"})}),!1===Q?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("p",{className:fe,children:C})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"button",className:be,name:"city",onClick:te,disabled:!1!==X,children:(0,R.jsx)(pe.LsQ,{className:!1===X?ve:ge})})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("form",{id:"sub_city",name:"city",onSubmit:ne,className:xe,children:(0,R.jsx)("input",{type:"text",name:"city",required:!0,pattern:"^[a-zA-Z]+$",value:C,onChange:ae,className:ye})})}),(0,R.jsx)("td",{className:_e,children:(0,R.jsx)("button",{type:"submit",className:be,name:"city",form:"sub_city",children:(0,R.jsx)(ie.oFd,{className:Ne})})})]})]})]})})})}function Pe(e){var t=e.user;return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(ke,{user:t})})}var we=a(71),Ze=a(4396),Ce=a(7689),Fe="LogOut_container_logOut__+ahIw",Ae="LogOut_button_logOut__rIu97",Se="LogOut_svg_logOut__66un1",De="LogOut_text_logOut__pbfSv";function Le(){var e=(0,Ze.$n)(),t=(0,s.Z)(e,1)[0],a=(0,Ce.s0)();return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("div",{className:Fe,children:(0,R.jsxs)("button",{type:"button",className:Ae,onClick:function(){t(),a("/")},children:[(0,R.jsx)(we.qgu,{className:Se}),(0,R.jsx)("span",{className:De,children:"Log Out"})]})})})}var Ue=a(9983),Me=a(8820),Re="UserFoto_conteiner_foto__vwSUu",Ye="UserFoto_foto_img__Rt+HP",qe="UserFoto_foto_svg_container__Ndr6Y",Be="UserFoto_foto_svg__-yoiM";function Ee(e){var t=e.userFoto,a=e.user.photoURL;return null!==t&&(a=t),(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(Ue.Pd.Provider,{value:{style:{verticalAlign:"middle"}},children:(0,R.jsx)("div",{className:Re,children:a?(0,R.jsx)("img",{src:a,alt:"User Foto",className:Ye}):(0,R.jsx)("div",{className:qe,children:(0,R.jsx)(Me.nf1,{className:Be})})})})})}var Ie=a(3479),Oe="EditFoto_svg_camera__2Utdn",ze="EditFoto_container_edit__Rgrwp",Te="EditFoto_field_photo__1d6r6",We="EditFoto_input_file__SvS56";function He(e){var t=e.setUserFoto,a=localStorage.getItem("persist:users");if(null!==a){var s=JSON.parse(a).token;!function(e){x.Z.defaults.headers.common.Authorization="Bearer ".concat(e)}(s.slice(1,s.length-1))}else x.Z.defaults.headers.common.Authorization="";var r=function(){var e=(0,n.Z)(c().mark((function e(a){var n,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=a.target.files[0]).size>375e3&&v.Am.error("Maximum file size is 3 MB"),(s=new FormData).append("avatar",n),(0,_.WW)(s).then((function(e){(0,_.f7)({photoURL:e.urlAvatar}),t(e.urlAvatar)})).catch((function(e){console.log("Error",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("div",{className:ze,children:(0,R.jsxs)("label",{htmlFor:"file",className:Te,children:[(0,R.jsx)(Ie.wa4,{className:Oe}),"Edit photo",(0,R.jsx)("input",{className:We,id:"file",type:"file",name:"file",accept:"image/*,.png,.jpg,.gif,.web,",onChange:r,required:!0})]})})})}var Je="UserPage_container__dD64l",Ge="UserPage_title__5CGDq",Qe="UserPage_container__userdata__NV8sG",$e="UserPage_container_desktop__FvMg8",Ve="UserPage_container_pets__o0dmH",Ke="UserPage_container__petsdata__wEphH",Xe="UserPage_container_tablet__htLg9",et="UserPage_container_tablet_tab__Hjgpr",tt=a(4217);function at(){var e=(0,m.useState)({}),t=(0,s.Z)(e,2),a=t[0],r=t[1],i=(0,m.useState)(null),l=(0,s.Z)(i,2),o=l[0],d=l[1],u=(0,m.useState)(!1),h=(0,s.Z)(u,2),x=h[0],f=h[1],j=(0,Ze.$n)(),b=(0,s.Z)(j,1)[0],v=(0,p.v9)(tt.wl.getToken),g=(0,Ce.s0)();return(0,m.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.J$)(v);case 2:return t=e.sent,r(t),e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch(console.error)}),[v,x]),console.log(a),void 0===a?(b(),g("/login")):(0,R.jsxs)("div",{className:Je,children:[a.user&&(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)("div",{className:Qe,children:[(0,R.jsx)("h2",{className:Ge,children:"My information:"}),(0,R.jsxs)("div",{className:$e,children:[(0,R.jsxs)("div",{className:Xe,children:[(0,R.jsx)(Ee,{userFoto:o,user:a.user}),(0,R.jsx)(He,{setUserFoto:d})]}),(0,R.jsxs)("div",{className:et,children:[(0,R.jsx)(Pe,{user:a.user}),(0,R.jsx)(Le,{})]})]})]})}),a.pets&&(0,R.jsx)("div",{className:Ve,children:(0,R.jsx)("div",{className:Ke,children:(0,R.jsx)(he,{pets:a.pets,setAddPet:f,addPet:x})})})]})}},9817:function(e,t,a){a.d(t,{u:function(){return m}});var n=a(2791),s=a(4164),r="Modal_container__vBmG0",c="Modal_overlay__4cVbv",i="Modal_icon__RWxm6",l="Modal_close__xTbKf",o=a(1213),d=a(184),u=document.querySelector("#modal-root");function m(e){var t=e.children,a=e.onClose;(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);var m=function(e){e.currentTarget===e.target&&a()};return(0,s.createPortal)((0,d.jsx)("div",{className:c,onClick:m,children:(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("button",{className:i,onClick:m,children:(0,d.jsx)("span",{className:l,children:(0,d.jsx)(o.ySC,{size:"16px",onClick:m})})}),t]})}),u)}},4724:function(e,t,a){a.d(t,{Bn:function(){return i},J$:function(){return o},WW:function(){return d},aL:function(){return l},f7:function(){return m},jQ:function(){return p},ok:function(){return u},up:function(){return h}});var n=a(5861),s=a(4687),r=a.n(s),c=a(1243);c.Z.defaults.baseURL="https://backend.petly.club";var i=function(){var e=(0,n.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/servicesSidebar").then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/news").then((function(e){return e.data})).catch((function(e){return console.error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(r().mark((function e(t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/userAndPets",{headers:{Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.status);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(r().mark((function e(t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.post("/uploadAvatar",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=localStorage.getItem("persist:users");if(null!==e){var t=JSON.parse(e).token;!function(e){c.Z.defaults.headers.common.Authorization="Bearer ".concat(e)}(t.slice(1,t.length-1))}else c.Z.defaults.headers.common.Authorization=""},m=function(){var e=(0,n.Z)(r().mark((function e(t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.patch("/users/edit",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(r().mark((function e(t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/notices/".concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=localStorage.getItem("persist:users");if("null"!==e){var t=JSON.parse(e).id;if("null"===t)return;return t.slice(1,t.length-1)}}}}]);
//# sourceMappingURL=802.945db4d3.chunk.js.map