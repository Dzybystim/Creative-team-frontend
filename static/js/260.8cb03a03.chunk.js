"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[260],{9260:function(e,s,n){n.r(s),n.d(s,{default:function(){return v}});var t="OurFriendsPage_container__x4Ema",r="OurFriendsPage_title__EeYef",a="OurFriendsIcons_iconContainer__Nso5X",i="OurFriendsIcons_logo__r9mCm",l="OurFriendsIcons_letter__cM698",c=n(184),d=function(){return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",width:"30",height:"20",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"})})},o=function(){return(0,c.jsxs)("div",{className:a,children:[(0,c.jsxs)("p",{className:i,children:["pe",(0,c.jsx)("span",{className:l,children:"t"}),"ly"]}),(0,c.jsx)(d,{})]})},u=n(9439),m=n(2791),h=n(4691),_=n(5861),x=n(4687),p=n.n(x),f=n(1243),j=function(){var e=(0,_.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("".concat("https://backend.petly.club","/servicesSidebar")).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g={menu:"WorkingDaysMenu_menu__P6fRn",item:"WorkingDaysMenu_item__vybMs"},k=function(e){var s=e.onClose,n=e.daysList,t=e.workdays;return(0,m.useEffect)((function(){window.addEventListener("keydown",(function(e){"Escape"===e.code&&s()}))})),(0,c.jsx)("div",{className:g.overlay,onClick:function(e){e.target!==e.currentTarget&&s()},children:(0,c.jsx)("ul",{className:g.menu,children:n.map((function(e,s){return(0,c.jsx)("li",{className:g.item,children:t[s].isOpen?"".concat(e," ").concat(t[s].from," - ").concat(t[s].to):"".concat(e," is closed")},s)}))})})},N={item:"OurFriendsItem_item__g1xKl",container:"OurFriendsItem_container__k7jX-",textContainer:"OurFriendsItem_textContainer__uyVlu",title:"OurFriendsItem_title__BrbUk",titleLink:"OurFriendsItem_titleLink__SfajN",imageContainer:"OurFriendsItem_imageContainer__Q3lZ7",image:"OurFriendsItem_image__Hi6dq",adressLink:"OurFriendsItem_adressLink__TDmct",text:"OurFriendsItem_text__3y2Eb",link:"OurFriendsItem_link__H0pdL",isOpen:"OurFriendsItem_isOpen__piJMx",statusOpened:"OurFriendsItem_statusOpened__15PPH",statusClosed:"OurFriendsItem_statusClosed__daLBM"},w=function(e){var s=e.id,n=e.title,t=e.adressUrl,r=e.adress,a=e.email,i=e.phone,l=e.image,d=e.workdays,o=void 0===d?[]:d,h=e.url,_=(0,m.useState)(!1),x=(0,u.Z)(_,2),p=x[0],f=x[1],j=function(e){return f(!p)},g=new Date,w="";w=0===g.getDay()?6:g.getDay()-1;var O=g.getHours();return(0,c.jsxs)("li",{className:N.item,children:[(0,c.jsx)("h4",{className:N.title,children:(0,c.jsx)("a",{href:h,className:N.titleLink,children:n})}),(0,c.jsxs)("div",{className:N.container,children:[(0,c.jsx)("div",{className:N.imageContainer,children:(0,c.jsx)("img",{src:l,alt:n,className:N.image})}),(0,c.jsxs)("div",{className:N.textContainer,children:[(0,c.jsxs)("h4",{className:N.text,children:["Time: ",null===o?(0,c.jsx)("p",{children:" ----------------------------------"}):void 0!==o[w]&&o[w].isOpen?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:N.isOpen,onClick:j,children:"".concat(o[w].from," : ").concat(o[w].to)}),O>=o[w].from.split(":")[0]&&O<o[w].to.split(":")[0]?(0,c.jsx)("span",{className:N.statusOpened,children:"is Opened now"}):(0,c.jsx)("span",{className:N.statusClosed,children:"is Closed now"})]}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("p",{className:N.isClosed,onClick:j,children:"Is closed today"})}),p&&(0,c.jsx)(k,{onClose:j,daysList:["MN","TU","WE","TH","FR","SA","SU"],workdays:o})]}),(0,c.jsxs)("p",{className:N.text,children:["Adress:"," ",r?(0,c.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",className:N.adressLink,children:r}):"----------------------------------"]}),(0,c.jsxs)("p",{className:N.text,children:["Email:",a?(0,c.jsx)("a",{href:"mailto:".concat(a),className:N.link,children:a}):"----------------------------------"]}),(0,c.jsxs)("p",{className:N.text,children:["Phone:",i?(0,c.jsx)("a",{href:"tel:".concat(i),className:N.link,children:i}):"----------------------------------"]})]})]})]},s)},O=function(){var e=(0,m.useState)(!1),s=(0,u.Z)(e,2),n=s[0],t=s[1],r=(0,m.useState)([]),a=(0,u.Z)(r,2),i=a[0],l=a[1],d=(0,m.useState)(""),o=(0,u.Z)(d,2),_=o[0],x=o[1];return(0,m.useEffect)((function(){t(!0),j().then(l).catch((function(e){return x(e.message)})).finally((function(){return t(!1)}))}),[]),(0,c.jsxs)(c.Fragment,{children:[n&&(0,c.jsx)(h.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"}),_&&(0,c.jsx)("h1",{children:_}),(0,c.jsx)("ul",{className:CSS.list,children:i.length>0&&i.map((function(e,s){var n=e.title,t=e.addressUrl,r=e.address,a=e.email,i=e.phone,l=e.url,d=e.workDays,o=e.imageUrl;return(0,c.jsx)(w,{id:s,adress:r,adressUrl:t,title:n,email:a,phone:i,image:o,workdays:d,url:l},s)}))})]})},v=function(){return(0,c.jsxs)("div",{className:t,children:[(0,c.jsx)(o,{}),(0,c.jsx)("h3",{className:r,children:"Our friends"}),(0,c.jsx)(O,{})]})}}}]);
//# sourceMappingURL=260.8cb03a03.chunk.js.map