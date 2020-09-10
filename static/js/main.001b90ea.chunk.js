(this["webpackJsonpdutch-pay"]=this["webpackJsonpdutch-pay"]||[]).push([[0],{29:function(e,t,a){},44:function(e,t,a){e.exports=a(71)},49:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=(a(49),a(21)),m=a(6),i=a(7),u=(a(55),a(8)),s=(a(56),a(73)),d=a(74),b=a(33),E=a(32);a(57);var p=function(e){return l.a.createElement("div",{className:"progress-step"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,e.title)),l.a.createElement("div",{className:"step rounded-circle ".concat(e.completed?"completed-step":"")},e.completed?l.a.createElement(m.a,{icon:i.d,className:"checked",alt:"checked"}):l.a.createElement("span",{className:"number"},e.step)))};a(58);var h=function(e){var t=["Basic info","Bills","Get result"];return l.a.createElement(s.a,{id:"progress-bar",fluid:!0},l.a.createElement(E.a,{now:100*(e.currentStep-1)/(t.length-1)}),l.a.createElement(d.a,null,t.map((function(a,n){return l.a.createElement(b.a,{key:n+a,xs:12/t.length},l.a.createElement(p,{step:n+1,title:a,completed:n+1<e.currentStep||e.currentStep===t.length}))}))))},y=a(12),f=a(10),v=a(77),S=a(80),N=a(34);a(59);var g=function(e){var t=["$","\u20a9","\u20ac","\xa3"],a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],d=r[1],b=Object(n.useState)({title:"",peopleNames:"",currency:t[0].name}),E=Object(u.a)(b,2),p=E[0],h=E[1];function g(e){h(Object(f.a)(Object(f.a)({},p),{},Object(y.a)({},e.target.name,e.target.value)))}return e.display&&l.a.createElement(s.a,{fluid:!0,className:"steps-container"},l.a.createElement("h2",{className:"step-title-header"},"Expenditure information"),l.a.createElement(v.a,{noValidate:!0,validated:c,onSubmit:function(a){a.preventDefault(),a.stopPropagation();var n=a.currentTarget.checkValidity();d(!0),n&&(window.dutch={currency:t.filter((function(e){return e.name===p.currency}))[0]},e.onSubmitSucceeded&&e.onSubmitSucceeded(p))},style:{position:"relative"}},l.a.createElement(v.a.Group,{controlId:"title"},l.a.createElement(v.a.Label,null,l.a.createElement(m.a,{icon:i.k})," What is bills about you want to split?"),l.a.createElement(v.a.Control,{name:"title",required:!0,type:"text",placeholder:"2020 Vancouver trip!",onChange:g})),l.a.createElement(v.a.Group,{controlId:"group-members"},l.a.createElement(v.a.Label,null,l.a.createElement(m.a,{icon:i.r})," Who do you want to split with?"),l.a.createElement(v.a.Control,{required:!0,name:"peopleNames",type:"text",placeholder:"Aree, Tomas, Jessica",onChange:g}),l.a.createElement(v.a.Text,null,"Enter the names of people separating with comma (,)")),l.a.createElement(v.a.Group,{controlId:"currency"},l.a.createElement(v.a.Label,null,l.a.createElement(m.a,{icon:i.g})," Select the currency"),l.a.createElement("br",null),l.a.createElement(S.a,{id:"currency-button-group",type:"radio",name:"currency",defaultValue:p.currency,onChange:function(e){h(Object(f.a)(Object(f.a)({},p),{},{currency:e}))}},t.map((function(e,t){return l.a.createElement(N.a,{value:e,key:e},e)})))),l.a.createElement(o.a,{className:"next-button",type:"submit"},"Next ",l.a.createElement(m.a,{icon:i.b}))))},w=a(41),j=a(78),O=a(79),k=a(75);a(61);var C=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)({billDate:"",billName:"",billAmount:0,billPayer:"",id:""}),d=Object(u.a)(s,2),E=d[0],p=d[1],h=function(e){p(Object(f.a)(Object(f.a)({},E),{},Object(y.a)({},e.target.name,"number"===e.target.name?e.target.valueAsNumber:e.target.value)))};return l.a.createElement(O.a,null,l.a.createElement(O.a.Body,null,l.a.createElement(O.a.Title,null,"Add new bill"),l.a.createElement(v.a,{noValidate:!0,validated:r,onSubmit:function(t){t.preventDefault(),t.stopPropagation();var a=t.currentTarget,n=a.checkValidity();c(!0),n&&e.onSubmitSucceeded&&(p(Object(f.a)(Object(f.a)({},E),{},{billAmount:E.billAmount,id:"".concat(E.billName,"_").concat((new Date).toJSON())})),e.onSubmitSucceeded(E),a.reset(),c(!1))}},l.a.createElement(v.a.Row,null,l.a.createElement(b.a,{xs:12,md:5},l.a.createElement(v.a.Group,{controlId:"billDate"},l.a.createElement(v.a.Label,null,l.a.createElement(m.a,{icon:i.c})," Bill date"),l.a.createElement(v.a.Control,{name:"billDate",type:"date",onChange:h}))),l.a.createElement(b.a,{xs:12,md:7},l.a.createElement(v.a.Group,{controlId:"billName"},l.a.createElement(v.a.Label,null,l.a.createElement(m.a,{icon:i.o})," Description"),l.a.createElement(v.a.Control,{required:!0,name:"billName",type:"text",onChange:h})))),l.a.createElement(v.a.Row,null,l.a.createElement(b.a,{xs:12,md:5},l.a.createElement(v.a.Group,{controlId:"billAmount"},l.a.createElement(v.a.Label,null,l.a.createElement(m.a,{icon:i.j})," Amount"),l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,null,e.currencySymbol)),l.a.createElement(v.a.Control,{required:!0,name:"billAmount",type:"number",onChange:h})))),l.a.createElement(b.a,{xs:12,md:7},l.a.createElement(v.a.Group,{controlId:"billPayer"},l.a.createElement(v.a.Label,null,l.a.createElement(m.a,{icon:i.q})," Payer"),l.a.createElement(v.a.Control,{required:!0,name:"billPayer",as:"select",onChange:h},l.a.createElement("option",null),e.peopleNames.map((function(e){return l.a.createElement("option",{key:e},e)})))))),l.a.createElement(o.a,{className:"add-button",type:"submit"},"Add ",l.a.createElement(m.a,{icon:i.a})))))},x=a(76);a(62);function A(e){var t=["Date","Description","Amount","Payer","Actions"];return e.actionsShow||t.pop(),l.a.createElement(x.a,{responsive:e.responsive,className:"".concat(e.additionalClassName," bill-table mt-4")},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),t.map((function(e,t){return l.a.createElement("th",{key:e},e)})))),l.a.createElement("tbody",null,e.bills.map((function(t,a){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,a+1),l.a.createElement("td",null,t.billDate),l.a.createElement("td",null,t.billName),l.a.createElement("td",null,e.currencySymbol," ",t.billAmount.toLocaleString()),l.a.createElement("td",null,t.billPayer),e.actionsShow&&l.a.createElement("td",null,l.a.createElement(o.a,{variant:"link",className:"p-0",onClick:function(){return e.onBillDeletionClicked(t)}},l.a.createElement(m.a,{icon:i.p}))))}))))}A.defaultProps={actionsShow:!0,responsive:!0,additionalClassName:"",currencySymbol:"$",bills:[]};var D=A;a(29);var I=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],d=Object(n.useState)(!1),b=Object(u.a)(d,2),E=b[0],p=b[1];return e.display&&l.a.createElement(s.a,{fluid:!0,className:"steps-container"},l.a.createElement("h2",{className:"step-title-header"},"Bill information"),l.a.createElement(C,{onSubmitSucceeded:function(e){c([].concat(Object(w.a)(r),[e]))},peopleNames:e.peopleNames,currencySymbol:e.currencySymbol}),l.a.createElement(D,{onBillDeletionClicked:function(e){var t=r.filter((function(t){return t.id!==e.id}));c(t)},bills:r,currencySymbol:e.currencySymbol,actionsShow:!0}),l.a.createElement("div",{style:{position:"relative "}},l.a.createElement(o.a,{className:"next-button",onClick:function(){r&&0!==r.length?(p(!1),e.onSubmitSucceeded&&e.onSubmitSucceeded(r)):p(!0)}},"Next ",l.a.createElement(m.a,{icon:i.b}))),l.a.createElement("div",{className:"toast-container"},l.a.createElement(j.a,{onClose:function(){return p(!1)},className:"error-toast",show:E,delay:3e3,autohide:!0},l.a.createElement(j.a.Header,null,l.a.createElement(m.a,{icon:i.i,className:"rounded mr-2"}),l.a.createElement("strong",{className:"mr-auto"},"Error occurred")),l.a.createElement(j.a.Body,null,"There should be at least 1 bill entered"))))},B=a(38);a(69);function P(e){var t=Object(n.useRef)(null),a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],E=r[1],p=Object(n.useState)(!1),h=Object(u.a)(p,2),y=h[0],f=h[1],v=Object(n.useState)(!1),S=Object(u.a)(v,2),N=S[0],g=S[1];if(!e.bills)return l.a.createElement("div",null,"No bills entered");var w=e.expenditureInfo,k=e.bills,C=k.flatMap((function(e){return e.billAmount})).reduce((function(e,t){return parseInt(e)+parseInt(t)})),A=C/w.peopleNames.length,I=function(e){e.sort((function(e,t){return e.amount-t.amount}));for(var t=[],a=0,n=e.length-1;a<n;){var l=e[a],r=e[n];if(!l||!r)break;var c=l.amount,o=r.amount;c+o<0?(t.push({sender:r.name,receiver:l.name,amount:o}),e[a].amount+=o,e[n].amount-=o,n-=1):c+o>0?(t.push({sender:r.name,receiver:l.name,amount:Math.abs(c)}),e[a].amount=0,e[n].amount+=c,a+=1):(t.push({sender:r.name,receiver:l.name,amount:o}),e[a].amount=0,e[n].amount=0,a+=1,n-=1)}return t}(function(){var e={};return w.peopleNames.forEach((function(t){return e[t]=A})),k.forEach((function(t){return e[t.billPayer]=e[t.billPayer]-t.billAmount})),Object.keys(e).map((function(t){return{name:t,amount:e[t]}}))}()),P=I.flatMap((function(e){return"".concat(e.sender,"->").concat(e.receiver," : ").concat(Math.round(10*e.amount)/10)})).join(", ");return e.display&&l.a.createElement(s.a,{fluid:!0,className:"steps-container"},l.a.createElement("div",{className:"report-container"},l.a.createElement("div",{ref:t,id:"report"},l.a.createElement("h2",{className:"step-title-header"},"Settlement"),l.a.createElement(O.a,null,l.a.createElement(O.a.Body,null,l.a.createElement(O.a.Title,null,w.title),l.a.createElement(O.a.Subtitle,null," with ",w.peopleNames.join(", ")),l.a.createElement(O.a.Text,null,"Sum of all bills: ",l.a.createElement("b",null,e.currencySymbol,C.toLocaleString()),l.a.createElement("br",null),"Cost of each person: ",l.a.createElement("b",null,e.currencySymbol,A.toLocaleString())))),l.a.createElement("br",null),l.a.createElement("h3",null,"Bill list"),l.a.createElement(D,{bills:k,currencySymbol:e.currencySymbol,actionsShow:!1,responsive:!1}),l.a.createElement(O.a,null,l.a.createElement(O.a.Body,null,l.a.createElement(O.a.Title,null,"Minimum transaction"),l.a.createElement(x.a,{borderless:!0,responsive:!0,size:"sm"},l.a.createElement("tbody",null,I.map((function(t,a){return l.a.createElement("tr",{key:"transaction-row-".concat(a)},l.a.createElement("td",null,l.a.createElement(m.a,{icon:i.l})),l.a.createElement("td",null,t.sender),l.a.createElement("td",null,l.a.createElement(m.a,{icon:i.b})),l.a.createElement("td",null,t.receiver),l.a.createElement("td",null,":"),l.a.createElement("td",null,e.currencySymbol,(Math.round(10*t.amount)/10).toLocaleString()))})))))))),l.a.createElement(d.a,{className:"mt-3"},l.a.createElement(b.a,{xs:12,md:6},l.a.createElement(o.a,{className:"action-button",onClick:function(){var e=document.createElement("input");e.value=P,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e),f(!0)}},l.a.createElement(m.a,{icon:i.e}),"\xa0Copy to clipboard")),l.a.createElement(b.a,{xs:12,md:6},l.a.createElement(o.a,{className:"action-button",onClick:function(){E(!0),Object(B.toJpeg)(t.current,{quality:.95}).then((function(e){alert(e);var t=document.createElement("a");t.download="".concat(w.title.split(" ").join("_"),".jpeg"),t.href=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)})),E(!1),g(!0)}},c?l.a.createElement(m.a,{icon:i.n,spin:!0}):l.a.createElement(m.a,{icon:i.h}),"\xa0",c?"Downloading":"Download"))),l.a.createElement(d.a,{className:"mt-5"},l.a.createElement(b.a,{xs:{span:8,offset:2}},l.a.createElement("a",{className:"text-center d-block",href:"/"},l.a.createElement(m.a,{icon:i.m}),"\xa0Begin new dutch pay"))),l.a.createElement("div",{className:"toast-container"},l.a.createElement(j.a,{onClose:function(){f(!1)},show:y,className:"success-toast",delay:3e3,autohide:!0},l.a.createElement(j.a.Header,null,l.a.createElement(m.a,{icon:i.i,className:"rounded mr-2"}),l.a.createElement("strong",{className:"mr-auto"},"Copied to clipboard!")),l.a.createElement(j.a.Body,null,P)),l.a.createElement(j.a,{onClose:function(){g(!1)},show:N,className:"success-toast",delay:3e3,autohide:!0},l.a.createElement(j.a.Header,null,l.a.createElement(m.a,{icon:i.i,className:"rounded mr-2"}),l.a.createElement("strong",{className:"mr-auto"},"Download completed!")),l.a.createElement(j.a.Body,null,"Check the download folder.. :)"))))}var L=P;P.defaultProps={currencySymbol:"$",expenditureInfo:{title:"",peopleNames:[""]},bills:[{billDate:"",billName:"",billAmount:0,billPayer:""}]};var T=function(){var e=Object(n.useState)({title:"",peopleNames:[""],currency:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([{id:null,billAmount:0,billPayer:"",billName:"",billDate:""}]),o=Object(u.a)(c,2),m=o[0],i=o[1],s=Object(n.useState)(1),d=Object(u.a)(s,2),b=d[0],E=d[1],p=Object(n.useState)(!0),y=Object(u.a)(p,2),f=y[0],v=y[1],S=Object(n.useState)(!1),N=Object(u.a)(S,2),w=N[0],j=N[1],O=Object(n.useState)(!1),k=Object(u.a)(O,2),C=k[0],x=k[1];return l.a.createElement("div",{id:"dutch-form"},l.a.createElement(h,{currentStep:b}),l.a.createElement(g,{display:f,onSubmitSucceeded:function(e){r({title:e.title,peopleNames:e.peopleNames.split(",").map((function(e){return e.trim()})),currency:e.currency}),E(2),v(!1),j(!0)}}),l.a.createElement(I,{display:w,onSubmitSucceeded:function(e){i(e),E(3),j(!1),x(!0),E(3)},currencySymbol:a.currency,peopleNames:a.peopleNames}),l.a.createElement(L,{display:C,expenditureInfo:a,currencySymbol:a.currency,bills:m}))},q=a(25);a(70);var G=function(){return l.a.createElement("div",{id:"footer-container"},l.a.createElement("span",null,l.a.createElement("b",null,"Have new feature request? Found a bug?"),l.a.createElement("br",null),"Feel free to create an issue\xa0",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/dutch-pay/dutch-pay.github.io/issues/new"},"here")),l.a.createElement("footer",null,"Designed and developed by Aree Oh, \xa0",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/aree-oh/"},l.a.createElement(m.a,{icon:q.b})),"\xa0\xa0",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/aria-grande"},l.a.createElement(m.a,{icon:q.a}))))};var M=function(){function e(){document.getElementById("dutch-form").scrollIntoView({behavior:"smooth"})}return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"introduction"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,l.a.createElement(m.a,{icon:i.f,className:"App-logo",alt:"logo",spin:!0,size:"lg"}),"\xa0\xa0\xa0",l.a.createElement("span",null,"Split bills with friends!")),l.a.createElement("p",{className:"p-3"},"It's not a simple calculator that lets you know how much you have to pay for a bill paid by one person.",l.a.createElement("br",null),l.a.createElement("span",{className:"highlight"},"Dutch pay")," will calculate and split every bills paid by multiple people.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",{className:"quote"},"I went to a trip with my friends and each of us spent different amount of money for buying food, drinks and etc. After the trip, I was struggled with how to spilt all the bills. At that moment, I used this and it was super easy. What I did was just entering all the bills and DutchPay solved the problem!",l.a.createElement("br",null),"- Aree"),l.a.createElement("br",null),l.a.createElement("br",null),"Enter every bills, we will let you know",l.a.createElement("br",null),"how to split bills with ",l.a.createElement("span",{className:"highlight"},"minimum transaction!"),l.a.createElement("br",null))),l.a.createElement("div",null,l.a.createElement(o.a,{className:"start-button",size:"lg",onClick:e},"Get started!"))),l.a.createElement(T,null),l.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.001b90ea.chunk.js.map