(function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],b=0,d=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},5058:function(e,t,n){"use strict";n("6f7e")},"6f7e":function(e,t,n){},"7a0d":function(e,t,n){},"7cce":function(e,t,n){"use strict";n("7a0d")},"9cdc":function(e,t,n){"use strict";n("d673")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=Object(a["g"])("br",null,null,-1),c={class:"container container_slim container_flex"};function o(e,t,n,o,i,l){var u=Object(a["y"])("marquee"),s=Object(a["y"])("LanguageSwitcher"),b=Object(a["y"])("router-view");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(u,{class:"notification"},{default:Object(a["E"])((function(){return[Object(a["g"])("strong",null,Object(a["A"])(e.t("underConstruction"))+" 🚧🏗👷‍♂️",1),r,Object(a["g"])("span",null,Object(a["A"])(e.t("developmentStarted",{on:new Date(1600015610879).toLocaleString()})),1)]})),_:1}),Object(a["g"])("div",c,[Object(a["g"])(s)]),Object(a["g"])(b)],64)}var i=n("ab42"),l=Object(a["F"])("data-v-2646f4df"),u=l((function(e,t,n,r,c,o){var i=Object(a["y"])("Button");return Object(a["q"])(),Object(a["e"])("div",null,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(e.languages,(function(t){return Object(a["q"])(),Object(a["e"])(i,{key:t.code,onClick:function(n){return e.locale=t.code}},{default:l((function(){return[Object(a["g"])("i",{class:"em em-".concat(t.code),"aria-role":"presentation","aria-label":t.aria},null,10,["aria-label"])]})),_:2},1032,["onClick"])})),128))])})),s=(n("9911"),Object(a["F"])("data-v-8b648368")),b=s((function(e,t,n,r,c,o){return e.link?(Object(a["q"])(),Object(a["e"])("a",{key:1,class:"button",href:e.to,title:e.title,target:e.blank?"_blank":null},[Object(a["x"])(e.$slots,"default")],8,["href","title","target"])):(Object(a["q"])(),Object(a["e"])("button",{key:0,class:"button",title:e.title},[Object(a["x"])(e.$slots,"default")],8,["title"]))})),d=Object(a["h"])({name:"button",props:{link:{type:Boolean,default:!1},to:{type:String,required:!1},title:{type:String,default:""},blank:{type:Boolean,default:!1}}});n("5058");d.render=b,d.__scopeId="data-v-8b648368";var f=d,p=Object(a["h"])({name:"LanguageSwitcher",components:{Button:f},setup:function(){return Object(i["b"])()},data:function(){return{languages:[{code:"ru",aria:"Russia Flag"},{code:"us",aria:"United States Flag"},{code:"fr",aria:"France Flag"}]}}});n("fed7");p.render=u,p.__scopeId="data-v-2646f4df";var O=p,m=Object(a["h"])({name:"App",components:{LanguageSwitcher:O},setup:function(){return Object(i["b"])()}});n("9cdc");m.render=o;var j=m,g=n("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var v=n("8c4f"),h=Object(a["F"])("data-v-03b5444c");Object(a["t"])("data-v-03b5444c");var k={class:"home"},w={class:"container"},y={class:"container"},_=Object(a["g"])("i",{class:"em em-airplane","aria-role":"presentation","aria-label":"AIRPLANE"},null,-1),S=Object(a["g"])("i",{class:"em em-email","aria-role":"presentation","aria-label":"ENVELOPE"},null,-1),M=Object(a["g"])("i",{class:"em em-purple_heart","aria-role":"presentation","aria-label":"PURPLE HEART"},null,-1);Object(a["r"])();var A=h((function(e,t,n,r,c,o){var i=Object(a["y"])("Button");return Object(a["q"])(),Object(a["e"])("div",k,[Object(a["g"])("div",w,[Object(a["g"])("h1",null,Object(a["A"])(e.t("name")),1),Object(a["g"])("p",{innerHTML:e.t("desc",e.icons)},null,8,["innerHTML"])]),Object(a["g"])("div",y,[Object(a["g"])("h2",null,Object(a["A"])(e.t("contactMe")),1),Object(a["g"])(i,{link:"",href:"https://t.me/leroifrancais",blank:""},{default:h((function(){return[_,Object(a["f"])(" "+Object(a["A"])(e.t("contact.telegram")),1)]})),_:1}),Object(a["g"])(i,{link:"",href:"mailto:hi@kopenkin.tech",blank:""},{default:h((function(){return[S,Object(a["f"])(" "+Object(a["A"])(e.t("contact.eMail")),1)]})),_:1}),Object(a["g"])(i,{link:"",href:"https://twitch.tv/DmitriyK_",blank:""},{default:h((function(){return[M,Object(a["f"])(" "+Object(a["A"])(e.t("contact.twitch")),1)]})),_:1})])])})),E=n("5530"),T=Object(a["h"])({name:"Home",components:{Button:f},setup:function(){var e=Object(i["b"])(),t={graduate:'<i class="em em-mortar_board" aria-role="presentation" aria-label="GRADUATION CAP"></i>',code:'<i class="em em-male-technologist" aria-role="presentation" aria-label=""></i>',books:'<i class="em em-book" aria-role="presentation" aria-label="OPEN BOOK"></i>',mail:'<i class="em em-email" aria-role="presentation" aria-label="ENVELOPE"></i>'};return Object(E["a"])(Object(E["a"])({},e),{},{icons:t})}});n("7cce");T.render=A,T.__scopeId="data-v-03b5444c";var N=T,P=[{path:"/",name:"Home",component:N}],C=Object(v["a"])({history:Object(v["b"])(),routes:P}),L=C,q=n("5502"),F=Object(q["a"])({state:{},mutations:{},actions:{},modules:{}}),x={name:"Dmitrii Kopenkin",desc:'\n  {graduate} Student at "YNOV Toulouse Campus".<br>\n  {code} Huge fan of JavaScript. <br>\n  {books} Nerd, weeb & knowledge addict. <br>\n  {mail} Feel free to contact me via E-Mail or Telegram.',underConstruction:"Website is under construction",developmentStarted:"Development started {on}",contactMe:"Get in touch",contact:{twitch:"Twitch",eMail:"E-Mail",telegram:"Telegram"}},B={name:"Дмитрий Копенкин",desc:'\n  {graduate} Студент в "YNOV Toulouse Campus".<br>\n  {code} Большой JavaScript энтузиаст. <br>\n  {books} Нёрд, любитель аниме & фанат знаний. <br>\n  {mail} Не стесняйтесь, пишите мне по E-Mail или Telegram.',underConstruction:"Сайт в разработке",developmentStarted:"Разработка началась {on}",contactMe:"Связаться со мной",contact:{twitch:"Твич",eMail:"Электронная почта",telegram:"Телеграм"}},D={name:"Dmitrii Kopenkin",desc:'\n  {graduate} Etudiant au "YNOV Toulouse Campus". <br>\n  {code} Grand fan de JavaScript. <br>\n  {books} Nerd, weeb et accro de la connaissance. <br>\n  {mail} N\'hésitez pas à me contacter par E-Mail ou Telegram.',underConstruction:"Ce site est en cours de développement",developmentStarted:"Le développement a commencé le {on}",contactMe:"Contactez moi",contact:{twitch:"Twitch",eMail:"Mail",telegram:"Telegram"}},H=Object(i["a"])({locale:"us",fallbackLocale:"us",messages:{us:x,ru:B,fr:D}});Object(a["d"])(j).use(H).use(F).use(L).mount("#app")},d673:function(e,t,n){},f8d9:function(e,t,n){},fed7:function(e,t,n){"use strict";n("f8d9")}});
//# sourceMappingURL=app.c23aee5c.js.map