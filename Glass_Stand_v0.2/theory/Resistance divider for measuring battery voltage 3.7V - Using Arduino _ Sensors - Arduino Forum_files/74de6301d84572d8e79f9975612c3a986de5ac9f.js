"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(43,{svg_icons:"fab-youtube|fab-linkedin-in|fab-facebook-f",theme_uploads:{"icons-sprite":"https://europe1.discourse-cdn.com/arduino/original/3X/5/2/5216ddd8fb2265b117cde44bca7cba571a9313bc.svg","svg-close":"https://europe1.discourse-cdn.com/arduino/original/3X/e/c/ec18a2369593199dd4fb999f8af357993b79789b.svg","svg-device-manager":"https://europe1.discourse-cdn.com/arduino/original/3X/d/2/d26759ae4d0564fb0f223d801c5b1ded6ddb5283.svg","svg-iot-cloud":"https://europe1.discourse-cdn.com/arduino/original/3X/6/d/6deba2a42824fdb721f3f5868e42988277718e3a.svg","svg-web-editor":"https://europe1.discourse-cdn.com/arduino/original/3X/6/c/6ccb07efdc83c96cfa45eccf0323305461658ed0.svg","typoninesans-regular":"https://europe1.discourse-cdn.com/arduino/original/3X/3/d/3d65f8b624b550a1377c11e84e79db86f410ed4e.woff","typsansmono-regular":"https://europe1.discourse-cdn.com/arduino/original/3X/b/8/b8362c60f30f0363c8f965ef94c0bb6f60651e61.woff"}}),"define"in window&&define("discourse/theme-43/arduino/templates/connectors/above-footer/footer",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=(0,t.createTemplateFactory)({id:null,block:'[[[41,[33,1],[[[1,"  "],[1,[28,[35,2],null,[["showFooter","model"],[[33,1],[28,[37,3],null,[["model"],[[33,4]]]]]]]],[1,"\\n"]],[]],null]],[],false,["if","showFooter","arduino-footer","hash","model"]]',moduleName:"discourse/theme-43/arduino/templates/connectors/above-footer/footer",isStrictMode:!1})
e.default=i})),"define"in window&&define("discourse/theme-43/components/arduino-footer",["exports","@ember/component","@ember/service","discourse/lib/url"],(function(e,t,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
var o=t.default.extend({router:(0,i.inject)(),currentRouteName:null,_jumpType(){this.isDestroyed||this.isDestroying||("topic.fromParamsNear"===this.router.currentRouteName||"topic.fromParams"===this.router.currentRouteName?this.set("jumpType","topic"):this.set("jumpType","other"))},actions:{jumpTop(){if("topic"===this.jumpType){let e=window.location.pathname.split("/"),t=e[0]+"/"+e[1]+"/"+e[2]+"/"+e[3]
r.default.routeTo(t)}else $("html, body").animate({scrollTop:0},"fast")}},didInsertElement(){this._super(...arguments),this.appEvents.on("page:changed",this,"_jumpType")}})
e.default=o})),"define"in window&&define("discourse/theme-43/initializers/arduino-code-button",["exports","discourse/lib/plugin-api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
var i={name:"arduino-code-button",initialize(){(0,t.withPluginApi)("0.8",(e=>{e.onToolbarCreate((e=>{e.addButton({id:"custom-preformatted-text",group:"insertions",icon:"code",action:function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r]
return e.context.send("formatCode",i)},title:"composer.code_title"})}))}))}}
e.default=i})),"define"in window&&define("discourse/theme-43/initializers/arduino-header",["exports","discourse/lib/plugin-api","virtual-dom"],(function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
var r={name:"arduino-header",initialize(){(0,t.withPluginApi)("0.8",(e=>{e.decorateWidget("header-contents:before",(e=>e.attach("arduino-nav"))),e.decorateWidget("header-buttons:before",(e=>{if(!e.attrs.topic)return document.querySelector("body").classList.remove("show-extra-info"),e.attach("arduino-discourse-nav")
document.querySelector("body").classList.add("show-extra-info")})),e.createWidget("arduino-discourse-nav",{tagName:"div.arduino-discourse-nav",buildKey:()=>"arduino-discourse-nav",lookupCount(e){const t=this.register.lookup("topic-tracking-state:main")
return t?t.lookupCount({type:e}):0},html(){let t=[],r=e.getCurrentUser()
if(t.push((0,i.h)("li.filter-categories",(0,i.h)("a",{href:"/categories"},"Categories"))),t.push((0,i.h)("li.filter-latest",(0,i.h)("a",{href:"/latest"},"Latest"))),r){let e,r
this.lookupCount("new")>0&&(e=this.lookupCount("new"),t.push((0,i.h)("li.filter-new",(0,i.h)("a",{href:"/new"},"New ("+e+")")))),this.lookupCount("unread")>0&&(r=this.lookupCount("unread"),t.push((0,i.h)("li.filter-unread",(0,i.h)("a",{href:"/unread"},"Unread ("+r+")"))))}return t.push((0,i.h)("li.filter-about",(0,i.h)("a",{href:"/about"},"About"))),t.push((0,i.h)("li.filter-faq",(0,i.h)("a",{href:"/faq"},"FAQ"))),(0,i.h)("ul",[t])}}),e.createWidget("arduino-nav",{tagName:"div.arduino-nav-top",buildKey:()=>"arduino-nav",html(){return(0,i.h)("div.wrap",[this.attach("arduino-header-links"),this.attach("arduino-search-wrapper"),this.attach("arduino-grid-button"),this.attach("arduino-login-button"),(0,i.h)("div.arduino-user-placeholder")])}}),e.createWidget("arduino-header-links",{tagName:"div.arduino-header-links",buildKey:()=>"arduino-header-links",html:()=>(0,i.h)("ul",[(0,i.h)("li",(0,i.h)("a",{href:"https://arduino.cc"},[(0,i.h)("span","Arduino"),(0,i.h)("span",".cc")])),(0,i.h)("li",[(0,i.h)("a",{href:"https://arduino.cc/pro"},[(0,i.h)("span","Pro"),(0,i.h)("span","fessional")])]),(0,i.h)("li",[(0,i.h)("a",{href:"https://arduino.cc/education"},[(0,i.h)("span","Edu"),(0,i.h)("span","cation")])]),(0,i.h)("li",[(0,i.h)("a",{href:"https://store.arduino.cc"},"Store")])])}),e.createWidget("arduino-grid-button",{tagName:"div.arduino-grid-button",buildKey:()=>"arduino-grid-button",template:function(e,t){var i=__widget_helpers.iconNode,r=[]
r.push("\n        ")
var o=[]
o.push(i("app-list")),r.push(virtualDom.h("a",o)),r.push("\n        ")
var a=[]
a.push("\n        ")
var s=[]
s.push("\n          ")
var n=[],u=[],c=[]
c.push("\n            ")
var d=[]
d.push("\n            "),c.push(virtualDom.h("div",{className:"app-application__icon",attributes:{}},d)),c.push("\n            ")
var l=[]
l.push("IoT Cloud"),c.push(virtualDom.h("div",{className:"app-application__name",attributes:{}},l)),c.push("\n          "),u.push(virtualDom.h("a",{className:"app-application",attributes:{id:"iot-cloud",href:"https://create.arduino.cc/iot",target:"blank",rel:"noopener noreferrer"}},c)),n.push(virtualDom.h("div",{className:"app-applications__item",attributes:{}},u))
var h=[],p=[]
p.push("\n            ")
var m=[]
m.push("\n\n            "),p.push(virtualDom.h("div",{className:"app-application__icon",attributes:{}},m)),p.push("\n            ")
var f=[]
f.push("Web Editor"),p.push(virtualDom.h("div",{className:"app-application__name",attributes:{}},f)),p.push("\n          "),h.push(virtualDom.h("a",{className:"app-application",attributes:{id:"web-editor",href:"https://create.arduino.cc/editor",target:"blank",rel:"noopener noreferrer"}},p)),n.push(virtualDom.h("div",{className:"app-applications__item",attributes:{}},h))
var b=[],g=[]
g.push("\n            ")
var v=[]
v.push("\n\n            "),g.push(virtualDom.h("div",{className:"app-application__icon",attributes:{}},v)),g.push("\n            ")
var w=[]
return w.push("Manager for Linux"),g.push(virtualDom.h("div",{className:"app-application__name",attributes:{}},w)),g.push("\n          "),b.push(virtualDom.h("a",{className:"app-application",attributes:{id:"device-manager",href:"https://create.arduino.cc/devices",target:"blank",rel:"noopener noreferrer"}},g)),n.push(virtualDom.h("div",{className:"app-applications__item",attributes:{}},b)),s.push(virtualDom.h("div",{attributes:{id:"app-apps-container-box"}},n)),s.push("\n        "),a.push(virtualDom.h("div",{className:"popup-container__box",attributes:{}},s)),a.push("\n      "),r.push(virtualDom.h("div",{className:"popup-container",attributes:{}},a)),r.push("\n      "),r},defaultState:()=>({expanded:!1}),click(){this.state.expanded=!this.state.expanded,document.querySelector(".arduino-grid-button").classList.toggle("active")},clickOutside(){this.state.expanded=!1,document.querySelector(".arduino-grid-button").classList.remove("active")}}),e.createWidget("arduino-login-button",{tagName:"div.arduino-login-button",buildKey:()=>"arduino-login-button",html(){if(e.getCurrentUser())return
const t=[]
return t.push(this.attach("button",{label:"log_in",className:"btn-primary btn-small login-button",action:"showLogin",icon:"user"})),t}}),e.createWidget("arduino-search-wrapper",{tagName:"div.arduino-search-wrapper",buildKey:()=>"arduino-search-wrapper"})}))}}
e.default=r})),"define"in window&&define("discourse/theme-43/initializers/arduino-icon-replace",["exports","discourse/lib/plugin-api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
var i={name:"arduino-icon-replace",initialize(){(0,t.withPluginApi)("0.8",(e=>{e.replaceIcon("bars","arduino-bars"),e.replaceIcon("search","arduino-search"),e.replaceIcon("fab-github","arduino-github")}))}}
e.default=i})),"define"in window&&define("discourse/theme-43/initializers/arduino-quick-access-items",["exports","discourse/lib/plugin-api","I18n"],(function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
var r={name:"arduino-quick-access-items",initialize(){(0,t.withPluginApi)("0.8.13",(e=>{e.reopenWidget("quick-access-profile",{_getDefaultItems(){const e=[{icon:"user",href:"https://id.arduino.cc/",content:"Arduino profile",className:"arduino-profile"},{icon:"user",href:`${this.attrs.path}/summary`,content:"Forum profile",className:"summary"},{icon:"stream",href:`${this.attrs.path}/activity`,content:i.default.t("user.activity_stream"),className:"activity"}]
return this.currentUser.can_invite_to_forum&&e.push({icon:"user-plus",href:`${this.attrs.path}/invited`,content:i.default.t("user.invited.title"),className:"invites"}),e.push({icon:"pencil-alt",href:`${this.attrs.path}/activity/drafts`,content:i.default.t("user_action_groups.15"),className:"drafts"},{icon:"cog",href:`${this.attrs.path}/preferences`,content:i.default.t("user.preferences"),className:"preferences"}),e.push({widget:"do-not-disturb"}),e}})}))}}
e.default=r})),"define"in window&&define("discourse/theme-43/initializers/cookie-consent",["exports","discourse/lib/load-script"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
var i={name:"init-cookie-consent",initialize(){(function(e){let i="en"
"it-IT"===navigator.language&&(i="it")
let r=e?"":", and to show you personalised advertisement",o=`<div id="iubenda-cs-title">We use cookies &#127850;</div><div>Our websites use cookies (also from third parties) for functional and analytical purposes${r}. You can adjust this in <a class="iubenda-cs-customize-btn">Cookie Settings</a> or learn more by reading our %{cookie_policy_link}.</div>`
"it"===i&&(r=e?"":", e per mostrare contenuti pubblicitari personalizzati",o=`<div id="iubenda-cs-title">Usiamo i cookies &#127850;</div><div>I nostri siti usano cookie (anche di terze parti) per fini funzionali e di analisi${r}. Puoi regolare queste impostazioni nelle <a class="iubenda-cs-customize-btn">Impostazioni di tracciamento</a> o saperne di pi&ugrave; leggendo la %{cookie_policy_link}.</div>`),window._iub=window._iub||[],window._iub.csConfiguration={askConsentAtCookiePolicyUpdate:!0,ccpaAcknowledgeOnDisplay:!1,ccpaApplies:!1,ccpaNoticeDisplay:!1,consentOnContinuedBrowsing:!1,cookiePolicyId:11225532,countryDetection:!0,enableCcpa:!1,floatingPreferencesButtonDisplay:!1,startOnDomReady:!0,lang:i,perPurposeConsent:!0,purposes:e?"1, 4":"1, 4, 5",siteId:2023027,whitelabel:!0,cookiePolicyUrl:"https://www.arduino.cc/"+i+"/cookie-policy",banner:{applyStyles:!1,content:o,rejectButtonDisplay:!0,rejectButtonCaption:"en"===i?"ONLY REQUIRED":"SOLO NECESSARI",position:"float-bottom-left",acceptButtonDisplay:!0,acceptButtonCaption:"en"===i?"ACCEPT ALL":"ACCETTA TUTTI",backgroundOverlay:!1,brandBackgroundColor:"black"},callback:{onPreferenceFirstExpressed:e=>{const t=window.dataLayer||[]
if(t.push({iubenda_ccpa_opted_out:window._iub.cs.api.isCcpaOptedOut()}),e)if(e.consent)t.push({event:"iubenda_consent_given"})
else if(e.consent){if(e.purposes)for(const i in e.purposes)e.purposes[i]&&t.push({event:"iubenda_consent_given_purpose_"+i})}else t.push({event:"iubenda_consent_rejected"})
else t.push({event:"iubenda_preference_not_needed"})}}},(0,t.default)("//cdn.arduino.cc/header-footer/iubenda-7477c61df49044b49eabbd94edfbd933.js")})()}}
e.default=i})),"define"in window&&define("discourse/theme-43/initializers/d-navigation-class",["exports","discourse/lib/plugin-api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
var i={name:"d-navigation-class",initialize(){(0,t.withPluginApi)("0.8",(e=>{e.modifyClass("component:d-navigation",{pluginId:"d-navigation-class",didInsertElement(){document.body.classList.add(`filter-mode-${this.filterType}`)},willDestroyElement(){document.body.classList.remove(`filter-mode-${this.filterType}`)}})}))}}
e.default=i})),"define"in window&&define("discourse/theme-43/initializers/search-bar",["exports","@ember/runloop","discourse-common/utils/decorators","discourse/lib/plugin-api","discourse/lib/search"],(function(e,t,i,r,o){"use strict"
function a(e,t,i,r,o){var a={}
return Object.keys(r).forEach((function(e){a[e]=r[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=i.slice().reverse().reduce((function(i,r){return r(e,t,i)||i}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
var s={name:"search-bar",initialize(e){(0,r.withPluginApi)("0.8.13",(r=>{var s,n,u
r.modifyClass("component:site-header",(s=(0,i.on)("didInsertElement"),n=(0,i.on)("willDestroyElement"),a(u={pluginId:"search-bar",boundToggleVisibility:null,toggleVisibility(i){const r=e.lookup("controller:application"),o=r.showHeaderSearch
r.set("showHeaderSearch",!this.hideHeaderSearch),(i||void 0===o||r.showHeaderSearch!==o)&&(this.queueRerender(),(0,t.scheduleOnce)("afterRender",(()=>{$(".d-header").toggleClass("header-search-enabled",!$(".panel > .search-menu").length&&r.showHeaderSearch)})))},initSizeWatcher(){this.set("boundToggleVisibility",(0,t.bind)(this,this.toggleVisibility)),window.addEventListener("resize",this.boundToggleVisibility),(0,t.scheduleOnce)("afterRender",(()=>{this.toggleVisibility()}))},destroySizeWatcher(){window.removeEventListener("resize",this.boundToggleVisibility)}},"initSizeWatcher",[s],Object.getOwnPropertyDescriptor(u,"initSizeWatcher"),u),a(u,"destroySizeWatcher",[n],Object.getOwnPropertyDescriptor(u,"destroySizeWatcher"),u),u))
const c=e.factoryFor("widget:search-menu").class.prototype.panelContents
r.reopenWidget("search-menu",{buildKey:e=>`search-${e.formFactor||"menu"}`,defaultState:e=>({formFactor:e.formFactor||"menu",showHeaderResults:!1}),buildClasses(){const e=this.state.formFactor,t=[`search-${e}`]
return"header"===e&&this.state.showHeaderResults&&t.push("show-header-results"),t},html(){return this.panelContents()},clearTopicContext(){this.state.inTopicContext=!1,this.state.showHeaderResults=!1,$("#search-term").val("")},mouseDownOutside(){if("menu"===this.state.formFactor)return this.sendWidgetAction("toggleSearchMenu")
this.state.showHeaderResults=!1,this.scheduleRerender()},click(){"header"===this.state.formFactor&&this.showResults()},searchTermChanged(){this._super(...arguments),this.click()},showResults(){this.state.showHeaderResults=!0,this.scheduleRerender()},linkClickedEvent(e){const{searchLogId:t,searchResultId:i,searchResultType:r}=e
t&&i&&r&&(0,o.logSearchLinkClick)({searchLogId:t,searchResultId:i,searchResultType:r}),"header"===this.state.formFactor&&($("#search-term").val(""),$(".search-placeholder").css("visibility","visible"),this.state.showHeaderResults=!1,this.scheduleRerender())},panelContents(){let e=[]
"header"===this.state.formFactor&&e.push(this.attach("button",{icon:"search",className:"search-icon",action:"showResults"})),e=e.concat(...c.call(this))
let t=e.find((e=>"search-menu-results"===e.name))
t&&t.attrs.results?$(".search-menu.search-header").addClass("has-results"):$(".search-menu.search-header").removeClass("has-results")
const i=e.filter((e=>"search-menu-results"!==e.name&&"search-context"!==e.name))
return"menu"===this.state.formFactor||void 0===this.state.showHeaderResults||null===this.state.showHeaderResults||this.state.showHeaderResults?[i,this.attach("menu-panel",{maxWidth:500,contents:()=>e.filter((e=>"search-menu-results"===e.name||"search-context"===e.name))})]:i}}),r.decorateWidget("arduino-search-wrapper:before",(e=>{const t=e.widget.parentWidget,i=e.register.lookup("controller:application")
if(!t.state.searchVisible&&i.showHeaderSearch)return document.querySelector(".d-header")?.classList?.add("header-search-enabled"),e.attach("search-menu",{contextEnabled:t.state.contextEnabled,formFactor:"header"})
document.querySelector(".d-header")?.classList?.remove("header-search-enabled")}))}))}}
e.default=s})),"define"in window&&define("discourse/theme-43/initializers/site-logo-link",["exports","discourse/lib/intercept-click","discourse/lib/plugin-api","discourse/lib/url"],(function(e,t,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
var o={name:"site-logo-link",initialize(){(0,i.withPluginApi)("0.8.13",(e=>{e.reopenWidget("home-logo",{click(e){return(0,t.wantsNewWindow)(e)||(e.preventDefault(),"site-logo"!==e.target.id&&"site-text-logo"!==e.target.id||r.default.routeTo(this.href())),!1}})}))}}
e.default=o})),"define"in window&&define("discourse/theme-43/discourse/templates/components/arduino-footer",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=(0,t.createTemplateFactory)({id:null,block:'[[[10,"footer"],[14,0,"arduino-footer"],[12],[1,"\\n  "],[10,"section"],[14,0,"arduino-footer-top"],[12],[1,"\\n    "],[10,"svg"],[14,"width","102"],[14,"height","14"],[14,"fill","none"],[14,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[14,"data-inject-url","https://cdn.arduino.cc/header-footer/prod/assets/footerLogo-arduino.svg"],[12],[1,"\\n      "],[10,"path"],[14,"d","M0 13.812L4.162.19h3.784l4.351 13.622H8.703l-.757-2.649H4.162l-.757 2.649H0zM6.054 3.595L4.73 8.515h2.648l-1.324-4.92zM14.378.19h5.486c3.784 0 5.108 1.891 5.108 4.54 0 1.892-.756 3.216-2.27 3.973l2.649 4.919h-3.973l-1.892-4.163h-1.703v4.352h-3.405V.189zm7.19 4.54c0-1.135-.38-1.892-2.082-1.892h-1.703v3.784h1.703c1.324.189 2.081-.379 2.081-1.892zM27.811.19h4.352c5.108 0 6.81 2.459 6.81 6.62 0 3.217-.945 6.812-6.81 6.812h-4.54V.189h.188zm3.406 2.648v7.946h1.324c2.838 0 3.027-1.703 3.027-3.973 0-2.649-.19-3.973-3.216-3.973h-1.135zM48.81.19h3.217V9.08C52.027 13.054 49 14 46.541 14c-2.27 0-5.298-.757-5.298-4.919V.19h3.406v8.324c0 2.27.756 2.838 2.08 2.838 1.514 0 2.082-.756 2.082-2.838V.19zM55.054 10.973h3.594V3.027h-3.405V.189h10.405v2.838h-3.594v7.946h3.594v2.838H55.243v-2.838h-.19zM71.325 13.622h-3.217V.189h3.784l4.352 8.135V.19h3.216v13.622h-3.406l-4.54-8.703-.19 8.514zM93.082 7c0 3.973-1.514 7-5.865 7-3.973 0-5.676-2.27-5.676-6.81 0-4.163 1.514-7.19 5.676-7.19 3.973 0 5.865 1.703 5.865 7zm-3.595 0c0-3.405-.19-4.162-2.27-4.162-1.703-.19-2.081.946-2.081 4.351 0 2.649.189 4.162 2.08 4.162 2.082-.189 2.271-1.324 2.271-4.351zM95.352 3.027C95.352 1.324 96.676 0 98.189 0c1.703 0 3.027 1.324 3.027 3.027s-1.324 3.027-3.027 3.027c-1.513-.19-2.837-1.513-2.837-3.027zm5.297 0c0-1.324-.946-2.46-2.46-2.46-1.324 0-2.27.947-2.27 2.46 0 1.514 1.135 2.46 2.27 2.46 1.514 0 2.46-.946 2.46-2.46zm-3.973-1.892h1.703c1.135 0 1.513.568 1.513 1.135 0 .379-.19.757-.567 1.135l.567 1.325h-1.135l-.378-1.135H98V4.73h-1.135V1.135h-.19zm1.513 1.703c.379 0 .568-.19.568-.568 0-.378-.19-.378-.568-.378h-.378v.946h.378z"],[14,"fill","currentColor"],[12],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[1,[28,[35,0],null,[["action","translatedLabel","icon"],["jumpTop","Back to top","arduino-chevron-up"]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"section"],[14,0,"arduino-footer-bottom"],[12],[1,"\\n    "],[10,"ul"],[14,0,"arduino-footer-menu"],[12],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://support.arduino.cc/"],[12],[1,"Help Center"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/contact-us"],[12],[1,"Contact Us"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/Trademark/HomePage"],[12],[1,"Trademark &\\n          Copyright"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/trademark"],[12],[1,"Brand Guidelines"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://store.arduino.cc/distributors"],[12],[1,"Distributors"],[13],[13],[1,"\\n      "],[10,"li"],[14,0,"hide-mobile"],[12],[10,3],[14,6,"https://careers.arduino.cc/"],[12],[1,"Careers"],[13],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"arduino-footer-social-menu"],[12],[1,"\\n      "],[10,"h4"],[12],[1,"Follow us"],[13],[1,"\\n      "],[10,"ul"],[12],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://www.facebook.com/official.arduino","fab-facebook-f"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://www.instagram.com/arduino.cc/","fab-instagram"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://twitter.com/arduino","fab-twitter"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://github.com/arduino/","fab-github"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://www.linkedin.com/company/arduino","fab-linkedin-in"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://www.youtube.com/user/arduinoteam","fab-youtube"]]]],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"arduino-footer-copy"],[12],[1,"\\n      © 2020 Arduino\\n    "],[13],[1,"\\n\\n    "],[10,"ul"],[14,0,"arduino-footer-legal"],[12],[1,"\\n      "],[10,"li"],[14,0,"hide-desktop"],[12],[10,3],[14,6,"https://careers.arduino.cc/"],[12],[1,"Careers"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/Main/TermsOfService"],[12],[1,"Terms of\\n          Service"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/Main/PrivacyPolicy"],[12],[1,"Privacy Policy"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/Main/Security"],[12],[1,"Security"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,0,"iubenda-cs-preferences-link"],[12],[1,"Cookie Settings"],[13],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13]],[],false,["d-button"]]',moduleName:"discourse/theme-43/discourse/templates/components/arduino-footer",isStrictMode:!1})
e.default=i}))

//# sourceMappingURL=74de6301d84572d8e79f9975612c3a986de5ac9f.map?__ws=forum.arduino.cc