(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(152),i=a(171),l=a(169);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.a,{to:"/"},"Go back to the homepage"))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return l.navigate});a(155);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},166:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},169:function(e,t,a){"use strict";var n=a(170),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(187),s=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,d=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},171:function(e,t,a){"use strict";var n=a(165),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(152),s=a(154),d=a(179),m=a.n(d),u=a(185),p=a.n(u),g=a(153),f=a.n(g),y=a(168),h=a.n(y),v=function(e){var t=e.classes;return o.a.createElement(m.a,{className:t.appBar,position:"static"},o.a.createElement(p.a,{className:t.menu},o.a.createElement("div",{className:t.left},o.a.createElement(f.a,{variant:"h6",color:"inherit",className:t.logo},"FLYACADEMIA")),o.a.createElement("div",{className:t.right},o.a.createElement(h.a,{color:"inherit",size:"large",onClick:function(){Object(c.c)("/")}},"首页"),o.a.createElement(h.a,{color:"inherit",size:"large",onClick:function(){Object(c.c)("/#services")}},"咨询服务"),o.a.createElement(h.a,{color:"inherit",size:"large",onClick:function(){Object(c.c)("/#downloads")}},"文档下载"),o.a.createElement(h.a,{color:"inherit",size:"large",onClick:function(){window.open("https://mp.weixin.qq.com/s/9Rhrvkp_6A_KefyPQe8HZw","_blank")}},"关于我们"))))};v.propTypes={siteTitle:l.a.string,classes:l.a.object.isRequired},v.defaultProps={siteTitle:""};var E=Object(s.withStyles)({root:{margin:"0 auto",padding:"0px 48px 48px",paddingTop:24},appBar:{position:"fixed",top:0,backgroundColor:"#20232a"},menu:{display:"flex",justifyContent:"space-between",minHeight:56},left:{marginRight:"auto"},right:{marginLeft:"auto"}})(v),b=a(163),w=a.n(b),x=a(178),T=a.n(x),S=a(164),j=a.n(S),N=function(e){e.siteTitle;var t=e.classes;return o.a.createElement("div",null,o.a.createElement(w.a,{className:t.contact},o.a.createElement(T.a,{className:t.contactMedia}),o.a.createElement("div",{className:t.overlay},o.a.createElement("div",{className:[t.overlaySlogen,t.overlaySlogenTop].join(" ")},o.a.createElement("h1",{className:t.overlayTitle},"FLY ACADEMIA")),o.a.createElement("div",{className:[t.overlaySlogen,t.overlaySlogenMiddle].join(" ")},o.a.createElement("h1",{className:t.overlaySlogenMiddleTitle},"最学术的留学咨询服务机构")),o.a.createElement("div",{className:[t.overlaySlogen,t.overlaySlogenBottom].join(" ")},o.a.createElement("h1",{className:t.overlaySlogenBottomTitle},"Lead to world-class education with excellent academia expertise")))),o.a.createElement(w.a,{className:t.footer},o.a.createElement(j.a,{className:t.footerContent},o.a.createElement(f.a,{className:t.footerText,component:"p"},"©"+(new Date).getFullYear()+" FLY ACADEMIA"),o.a.createElement(f.a,{className:t.pos,component:"p"}))))};N.propTypes={siteTitle:l.a.string,classes:l.a.object.isRequired},N.defaultProps={siteTitle:""};var k=Object(s.withStyles)(function(e){return{root:{},contact:{maxWidth:"100%",position:"relative",borderRadius:"0px"},contactMedia:{height:"300px",backgroundColor:"rgb(40, 44, 52)"},overlay:{position:"absolute",width:"100%",top:"0px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},overlaySlogen:{display:"flex"},overlaySlogenTop:{color:"rgb(97, 218, 251)"},overlaySlogenMiddle:{color:"#EEEEEE"},overlaySlogenMiddleTitle:{fontSize:"2.0em"},overlaySlogenBottom:{color:"rgb(97, 218, 251)"},overlaySlogenBottomTitle:{fontSize:"1.2em"},overlayIcon:{color:"white",fontSize:"1.6em",marginRight:"24px"},footer:{maxWidth:"100%",position:"relative",borderRadius:"0px"},footerContent:{width:"100%",minHeight:24,backgroundColor:"#20232a",display:"flex",alignItems:"center",justifyContent:"center","&:last-child":{paddingBottom:12}},footerText:{color:"#DDDDDD"}}})(N),C=(a(186),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",marginTop:56}},o.a.createElement("main",null,t),o.a.createElement(k,null)))},data:n})});C.propTypes={children:l.a.node.isRequired};t.a=C}}]);
//# sourceMappingURL=component---src-pages-page-2-js-64b81749908d91162c37.js.map