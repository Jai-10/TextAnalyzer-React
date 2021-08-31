(this.webpackJsonptext_analyzer=this.webpackJsonptext_analyzer||[]).push([[0],[,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),o=(a(9),a(2)),l=a(0);var i=function(e){return Object(l.jsx)("div",{className:"app__navbar",children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),style:{borderBottom:"1px solid #ccccff"},children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch float-end text-".concat("dark"==e.mode?"light":"dark"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefaultDark",onClick:e.toggleMode}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefaultDark",children:"Toggle theme"})]})]})]})})})};a(11);var b=function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h4",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",id:"myBox",rows:"10",value:n,onChange:function(e){s(e.target.value)},placeholder:"Enter text here..",style:{backgroundColor:"#f2f2f2"}})}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(t){s(n.toUpperCase()),e.showAlert("Converted to upper case","success")},children:"Convert to UPPERCASE"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(t){s(n.toLowerCase()),e.showAlert("Converted to lower case","success")},children:"Convert to lowercase"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:"Remove Extra Spaces"}),Object(l.jsx)("button",{type:"button",className:"btn btn-secondary float-end",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied to clipboard","success")},children:"Copy Text"}),Object(l.jsx)("button",{type:"button",className:"btn btn-dark float-end mx-3",onClick:function(){s(""),e.showAlert("Cleared the text","success")},children:"Clear text"})]}),Object(l.jsx)("br",{})," ",Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"container my-4",children:[Object(l.jsx)("h4",{children:"Your text summary"}),Object(l.jsxs)("p",{children:[n.split(" ").length," words, ",n.length," characters"]}),Object(l.jsxs)("p",{children:["An average reader will take about ",.008*n.length," minutes to read this piece of text."]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"preview",children:[Object(l.jsx)("h4",{children:"Preview"}),Object(l.jsx)("p",{children:n.length>0?n:"Enter something in the textbox above to preview it."})]})]})]})};a(12);var d=function(e){return e.alert&&Object(l.jsxs)("div",{className:"container alert alert-".concat(e.alert.type," alert-dismissible fade show my-4"),role:"alert",children:[Object(l.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),"!"]})," \xa0 ",e.alert.msg]})};var j=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(o.a)(s,2),j=r[0],h=r[1],u=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),2100)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i,{title:"TextAnalyzer",mode:a,toggleMode:function(){"light"==a?(n("dark"),document.body.style.backgroundColor="#2d3339",document.body.style.color="white",u("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",document.body.style.color="#2d3339",u("Light mode has been enabled","success"))}}),Object(l.jsx)(d,{alert:j}),Object(l.jsx)("div",{className:"container my-5",children:Object(l.jsx)(b,{heading:"Enter the text to be analysed",showAlert:u})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),h()}],[[13,1,2]]]);
//# sourceMappingURL=main.33d10dbf.chunk.js.map