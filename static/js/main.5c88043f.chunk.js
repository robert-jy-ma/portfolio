(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{80:function(e,t,a){e.exports=a(92)},85:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n,o,r,i=a(0),c=a.n(i),l=a(13),s=a.n(l),d=(a(85),a(68)),m=a(132),p=a(125),g=a(128),h=a(126),u=a(127),f=a(11),b=a(9),w=a(58),v=a.n(w)()({}),x={palette:{primary:{main:"#242424"},secondary:{main:"#ffffff"},text:{primary:"#33eb91",secondary:"#999999"}},typography:{fontFamily:["Inconsolata","monospace"].join(",")},overrides:{MuiButton:{outlinedSecondary:{"&:hover":{color:"#69f0ae"}},outlinedSizeLarge:(n={},Object(b.a)(n,v.down("md"),{fontSize:"0.9rem"}),Object(b.a)(n,v.down("sm"),{fontSize:"0.7rem"}),n)},MuiSpeedDialAction:{fab:(o={backgroundColor:"#ffffff","&:hover":{backgroundColor:"#69f0ae"},margin:"20px"},Object(b.a)(o,v.down("md"),{margin:"16px"}),Object(b.a)(o,v.down("sm"),{margin:"12px"}),o)},MuiFab:{root:{minHeight:"20px"},sizeSmall:(r={width:"50px",height:"50px"},Object(b.a)(r,v.down("md"),{width:"43px",height:"43px"}),Object(b.a)(r,v.down("sm"),{width:"35px",height:"35px"}),r)},MuiPaper:{root:{backgroundColor:"#303030"}},MuiDialogContent:{root:{padding:"unset","&:first-child":{paddingTop:"unset"}}},MuiCardContent:{root:{padding:"24px",paddingTop:"14px",paddingRight:"12px"}},MuiCardActions:{root:{padding:"24px"}},MuiCard:{root:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},MuiIconButton:{root:{color:"#999999","&:hover":{color:"#33eb91"}}}}},y=a(112),E=a(131),j=a(130),k=a(63),S=a.n(k),O=a(64),C=a.n(O),N=Object(y.a)((function(e){var t,a,n;return{dial:(t={position:"absolute",top:e.spacing(4),left:e.spacing(3)},Object(b.a)(t,e.breakpoints.down("md"),{top:e.spacing(3),left:e.spacing(2)}),Object(b.a)(t,e.breakpoints.down("sm"),{top:e.spacing(2),left:e.spacing(1)}),t),tooltip:(a={fontSize:16},Object(b.a)(a,e.breakpoints.down("md"),{fontSize:14}),Object(b.a)(a,e.breakpoints.down("sm"),{fontSize:11}),a),icon:(n={fontSize:35},Object(b.a)(n,e.breakpoints.down("md"),{fontSize:30}),Object(b.a)(n,e.breakpoints.down("sm"),{fontSize:25}),n)}}));var T=function(){var e=N();return c.a.createElement(E.a,{className:e.dial,ariaLabel:"SpeedDial example",direction:"right",open:!0,hidden:!0},c.a.createElement(j.a,{icon:c.a.createElement(S.a,{color:"primary",className:e.icon}),tooltipTitle:"/robertma1995",href:"https://github.com/robertma1995",target:"_blank",tooltipPlacement:"bottom",TooltipClasses:e}),c.a.createElement(j.a,{icon:c.a.createElement(C.a,{color:"primary",className:e.icon}),tooltipTitle:"/robertmajianying",href:"https://www.linkedin.com/in/robertmajianying/",target:"_blank",tooltipPlacement:"bottom",TooltipClasses:e}))},I=a(69),P=a(116),z=a(72),R=a(129),U=a(117),M=a(118),W=a(119),D=a(120),A=a(121),L=a(122),H=a(123),_=a(65),F=a.n(_),B=a(66),G=a.n(B),J=a(67),Q=a.n(J),q={hotdogs:{name:"Secret Ninja Hotdogs",logoUrl:"https://www.svgrepo.com/show/133687/hot-dog.svg",demoUrl:"https://secret-hotdogs.web.app",codeUrl:"https://github.com/robertma1995/secret_hotdogs_react",technologies:["React.js","Firebase","Material-UI","PHP","MySQL","Express.js","REST API"],description:"This project started as a PHP (and MySQL) learning exercise. \n\n Later on, I decided I wanted more interactivity and real-time databases, hence React and Firebase. I also wanted to explore these two technologies beyond one university course. \n\n I used an Express REST API for accessing the database, but this couldn't be used for real-time data. The main challenge of this app was the conversion to direct Firebase calls instead of proxying through an API, and also learning React's newest way of state variable tracking (hooks)."},portfolio:{name:"Portfolio",logoUrl:"https://www.svgrepo.com/show/191381/cat.svg",demoUrl:"TODO.url",codeUrl:"https://github.com/robertma1995/portfolio",technologies:["React.js","Material-UI"],description:"This is a showcase of my recent projects. The UI is kept as minimal and intuitive as possible. The main challenge with this app was figuring out how to make elements responsive based on viewport dimensions. \n\n React.js allows for code/component reuse, while Material-UI provides the responsiveness."}},V=Object(y.a)((function(e){var t,a;return{button:{padding:"unset"},imageWrapper:{opacity:.4,"&:hover":{opacity:1}},image:{height:400,width:400,maxHeight:"100%",maxWidth:"100%"},dialogImage:(t={height:500,width:500,maxHeight:"100%",maxWidth:"100%"},Object(b.a)(t,e.breakpoints.down("md"),{height:450,width:450}),Object(b.a)(t,e.breakpoints.down("sm"),{height:400,width:400}),t),card:{height:"100%"},bold:{fontWeight:"bold"},description:(a={height:"300px",whiteSpace:"pre-line",overflowY:"auto"},Object(b.a)(a,e.breakpoints.down("md"),{fontSize:"0.8rem"}),Object(b.a)(a,e.breakpoints.down("sm"),{fontSize:"0.75rem"}),a),paddingRight:{paddingRight:"24px"}}}));var Y=function(e){var t=V(e),a=q[e.projectName],n=Object(i.useState)(!0),o=Object(I.a)(n,2),r=o[0],l=o[1];function s(){l(!1)}return c.a.createElement("div",null,c.a.createElement(P.a,{color:"secondary",className:t.button,onClick:function(){l(!0)}},c.a.createElement(z.a,{elevation:3,className:t.imageWrapper},c.a.createElement("img",{src:a.logoUrl,alt:"logo",className:t.image}))),c.a.createElement(R.a,{fullWidth:!0,maxWidth:"md",open:r,className:t.dialog,onClose:function(){return s()}},c.a.createElement(U.a,null,c.a.createElement(M.a,{container:!0,alignItems:"center"},c.a.createElement(M.a,{item:!0,xs:6},c.a.createElement("img",{src:a.logoUrl,alt:"logo",className:t.dialogImage})),c.a.createElement(M.a,{item:!0,xs:6},c.a.createElement(W.a,{square:!0,className:t.card,style:{backgroundColor:"#404040"}},c.a.createElement(D.a,null,c.a.createElement(g.a,{display:"flex",alignItems:"center",flexDirection:"row",width:"100%"},c.a.createElement(g.a,{flexGrow:1},c.a.createElement(A.a,{variant:"h6",color:"textSecondary",className:t.bold},"Project")),c.a.createElement(g.a,null,c.a.createElement(L.a,{"aria-label":"close",size:"small",onClick:function(){return s()}},c.a.createElement(F.a,null)))),c.a.createElement(A.a,{variant:"h5",color:"secondary",align:"center",className:"".concat(t.bold," ").concat(t.paddingRight)},a.name),c.a.createElement(A.a,{variant:"subtitle2",align:"center",className:t.paddingRight},a.technologies.join(" | ")),c.a.createElement(A.a,{variant:"h6",color:"textSecondary",className:t.bold},"About"),c.a.createElement(A.a,{variant:"body2",color:"textSecondary",className:"".concat(t.description," ").concat(t.paddingRight)},a.description)),c.a.createElement(H.a,null,c.a.createElement(P.a,{href:a.demoUrl,target:"_blank",variant:"outlined",color:"secondary",size:"large",style:{border:"2px solid"},startIcon:c.a.createElement(G.a,null)},"Demo"),c.a.createElement(P.a,{href:a.codeUrl,target:"_blank",variant:"outlined",color:"secondary",size:"large",style:{border:"2px solid"},startIcon:c.a.createElement(Q.a,null)},"Code"))))))))},$=a(37);var K=function(){return c.a.createElement(g.a,{display:"flex",flexDirection:"column",justifyContent:"center"},c.a.createElement(A.a,{variant:"h1",color:"secondary",align:"center"},"Robert Ma"),c.a.createElement(A.a,{variant:"h6",color:"textPrimary",align:"center"},"Developer | Sydney, Australia"),c.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"center",style:{marginTop:"50px"}},c.a.createElement(P.a,{component:$.b,to:"/projects",variant:"outlined",color:"secondary",size:"large",style:{border:"2px solid"}},"View Projects")))},X=a(124),Z=Object(y.a)((function(e){var t,a;return{margin:(t={marginTop:e.spacing(3)},Object(b.a)(t,e.breakpoints.down("md"),{marginTop:e.spacing(2)}),Object(b.a)(t,e.breakpoints.down("sm"),{marginTop:e.spacing(1)}),t),marginLarge:(a={marginTop:e.spacing(15)},Object(b.a)(a,e.breakpoints.down("md"),{marginTop:e.spacing(12)}),Object(b.a)(a,e.breakpoints.down("sm"),{marginTop:e.spacing(10)}),a)}}));var ee=function(){var e=Z();return c.a.createElement(X.a,{maxWidth:"md",className:e.marginLarge},c.a.createElement(g.a,{display:"flex",flexDirection:"column"},c.a.createElement(g.a,{display:"flex",flexDirection:"column",justifyContent:"center"},c.a.createElement(A.a,{variant:"h3",color:"secondary"},"Projects"),c.a.createElement(A.a,{variant:"body1",color:"textPrimary",className:e.margin},"Here are the projects that I've worked on recently. Click on a tile to find out more.")),c.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"center",flexGrow:1,width:"100%"},c.a.createElement(M.a,{container:!0,spacing:3,className:e.margin},c.a.createElement(M.a,{item:!0,xs:6},c.a.createElement(Y,{projectName:"hotdogs"})),c.a.createElement(M.a,{item:!0,xs:6},c.a.createElement(Y,{projectName:"portfolio"}))))))},te=Object(d.a)(x);te=Object(m.a)(te);var ae=function(){return c.a.createElement(p.a,{theme:te},c.a.createElement(g.a,{display:"flex",flexDirection:"column",height:"100%"},c.a.createElement(g.a,{display:"flex",width:"100%"},c.a.createElement(h.a,{position:"static",elevation:0,color:"transparent",style:{zIndex:0}},c.a.createElement(u.a,null))),c.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"center",flexGrow:1},c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/",component:K}),c.a.createElement(f.a,{exact:!0,path:"/projects",component:ee})))),c.a.createElement(T,null))},ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement($.a,null,c.a.createElement(ae,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/portfolio","/service-worker.js");ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):oe(t,e)}))}}()}},[[80,1,2]]]);
//# sourceMappingURL=main.5c88043f.chunk.js.map