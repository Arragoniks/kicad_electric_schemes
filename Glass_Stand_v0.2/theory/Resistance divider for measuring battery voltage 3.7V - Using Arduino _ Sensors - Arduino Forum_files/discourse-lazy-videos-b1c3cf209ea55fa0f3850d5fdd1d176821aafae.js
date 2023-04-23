define("discourse/plugins/discourse-lazy-videos/discourse/components/lazy-iframe",["exports","@ember/component","@ember/template-factory","@glimmer/component"],(function(e,i,t,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=(0,t.createTemplateFactory)({id:"aRGjz/CC",block:'[[[41,[30,1],[[[1,"  "],[10,"iframe"],[15,"src",[30,0,["iframeSrc"]]],[15,"title",[30,2]],[14,"allowFullScreen",""],[14,"scrolling","no"],[14,"frameborder","0"],[14,"seamless","seamless"],[14,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],[12],[13],[1,"\\n"]],[]],null]],["@providerName","@title"],false,["if"]]',moduleName:"discourse/plugins/discourse-lazy-videos/discourse/components/lazy-iframe.hbs",isStrictMode:!1})
class a extends o.default{get iframeSrc(){switch(this.args.providerName){case"youtube":return`https://www.youtube.com/embed/${this.args.videoId}?autoplay=1`
case"vimeo":return`https://player.vimeo.com/video/${this.args.videoId}${this.args.videoId.includes("?")?"&":"?"}autoplay=1`
case"tiktok":return`https://www.tiktok.com/embed/v2/${this.args.videoId}`}}}e.default=a,(0,i.setComponentTemplate)(r,a)})),define("discourse/plugins/discourse-lazy-videos/discourse/components/lazy-video",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@glimmer/tracking","@ember/template"],(function(e,i,t,o,r,a,l){"use strict"
var s,n
function d(e,i,t,o,r){var a={}
return Object.keys(o).forEach((function(e){a[e]=o[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=t.slice().reverse().reduce((function(t,o){return o(e,i,t)||t}),a),r&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(r):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,i,a),a=null),a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const c=(0,t.createTemplateFactory)({id:"ckJ/HUjd",block:'[[[10,0],[15,0,[28,[37,0],["lazy-video-container",[28,[37,1],[[30,1,["providerName"]],"-onebox"],null],[52,[30,0,["isLoaded"]],"video-loaded"]],null]],[15,"data-video-id",[30,1,["id"]]],[15,"data-video-title",[30,1,["title"]]],[15,"data-provider-name",[30,1,["providerName"]]],[12],[1,"\\n"],[41,[30,0,["isLoaded"]],[[[1,"    "],[8,[39,3],null,[["@providerName","@title","@videoId"],[[30,1,["providerName"]],[30,1,["title"]],[30,1,["id"]]]],null],[1,"\\n"]],[]],[[[1,"    "],[11,0],[16,0,[28,[37,0],["video-thumbnail",[30,1,["providerName"]]],null]],[24,"tabindex","0"],[16,5,[30,0,["thumbnailStyle"]]],[4,[38,4],["click",[30,0,["loadEmbed"]]],null],[4,[38,4],["keypress",[30,0,["loadEmbed"]]],null],[12],[1,"\\n      "],[10,"img"],[15,0,[28,[37,1],[[30,1,["providerName"]],"-thumbnail"],null]],[15,"src",[30,1,["thumbnail"]]],[15,"title",[30,1,["title"]]],[14,"loading","lazy"],[12],[13],[1,"\\n      "],[10,0],[15,0,[28,[37,0],["icon",[28,[37,1],[[30,1,["providerName"]],"-icon"],null]],null]],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"title-container"],[12],[1,"\\n      "],[10,0],[14,0,"title-wrapper"],[12],[1,"\\n        "],[10,3],[14,"target","_blank"],[14,"rel","noopener noreferrer"],[14,0,"title-link"],[15,6,[30,1,["url"]]],[15,"title",[30,1,["title"]]],[12],[1,"\\n          "],[1,[30,1,["title"]]],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]]],[13]],["@videoAttributes"],false,["concat-class","concat","if","lazy-iframe","on"]]',moduleName:"discourse/plugins/discourse-lazy-videos/discourse/components/lazy-video.hbs",isStrictMode:!1})
let u=(s=class extends o.default{constructor(){var e,i,t,o
super(...arguments),e=this,i="isLoaded",o=this,(t=n)&&Object.defineProperty(e,i,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(o):void 0})}loadEmbed(){this.isLoaded||(this.isLoaded=!0,this.args.onLoadedVideo?.())}onKeyPress(e){"Enter"===e.key&&(e.preventDefault(),this.loadEmbed())}get thumbnailStyle(){const e=this.args.videoAttributes.dominantColor
if(e?.match(/^[0-9A-Fa-f]+$/))return(0,l.htmlSafe)(`background-color: #${e};`)}},n=d(s.prototype,"isLoaded",[a.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d(s.prototype,"loadEmbed",[r.action],Object.getOwnPropertyDescriptor(s.prototype,"loadEmbed"),s.prototype),d(s.prototype,"onKeyPress",[r.action],Object.getOwnPropertyDescriptor(s.prototype,"onKeyPress"),s.prototype),s)
e.default=u,(0,i.setComponentTemplate)(c,u)})),define("discourse/plugins/discourse-lazy-videos/initializers/lazy-videos",["exports","@ember/template-factory","discourse/lib/plugin-api","discourse/plugins/discourse-lazy-videos/lib/lazy-video-attributes"],(function(e,i,t,o){"use strict"
function r(e){e.decorateCookedElement(((t,r)=>{if(t.classList.contains("d-editor-preview"))return
t.querySelectorAll(".lazy-video-container").forEach((a=>{const l=e.container.lookup("site-settings:main"),s=(0,o.default)(a)
if(l[`lazy_${s.providerName}_enabled`]){const o=()=>{const i=t.closest("article")?.dataset?.postId
i&&e.preventCloak(parseInt(i,10))},l=r.renderGlimmer("p.lazy-video-wrapper",(0,i.createTemplateFactory)({id:"BIb4XPBx",block:'[[[8,[39,0],null,[["@videoAttributes","@onLoadedVideo"],[[30,1,["param"]],[30,1,["onLoadedVideo"]]]],null]],["@data"],false,["lazy-video"]]',moduleName:"/var/www/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-lazy-videos/initializers/lazy-videos.js",isStrictMode:!1}),{param:s,onLoadedVideo:o})
a.replaceWith(l)}}))}),{onlyStream:!0,id:"discourse-lazy-videos"})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"discourse-lazy-videos",initialize(){(0,t.withPluginApi)("1.6.0",r)}}
e.default=a})),define("discourse/plugins/discourse-lazy-videos/lib/lazy-video-attributes",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){if(!e.classList.contains("lazy-video-container"))return{}
const i=e.querySelector("a")?.getAttribute("href"),t=e.querySelector("img"),o=t?.getAttribute("src"),r=t?.dataset?.dominantColor,a=e.dataset.videoTitle,l=e.dataset.providerName,s=e.dataset.videoId
return{url:i,thumbnail:o,title:a,providerName:l,id:s,dominantColor:r}}}))

//# sourceMappingURL=discourse-lazy-videos-a9a86752bf538a2b969103fac81f77003412132288bca59a2f705978cb8c026f.map
//!

;
