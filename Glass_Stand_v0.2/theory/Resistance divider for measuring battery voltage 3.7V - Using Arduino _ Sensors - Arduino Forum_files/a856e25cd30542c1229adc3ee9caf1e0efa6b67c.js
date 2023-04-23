"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(38,{emoji_icon:"👩🏽‍💻",disable_at_trust_level:3,sensitivity:.5,min_post_length_to_check:50,max_post_length_to_check:-1,include_html:!0}),"define"in window&&define("discourse/theme-38/discourse/templates/modal/ucd-warning-modal",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:null,block:'[[[6,[39,0],null,[["rawTitle"],[[28,[37,1],null,null]]],[["default"],[[[[1,"  "],[1,[28,[35,2],[[28,[37,3],[38,"warning_modal.content"],null]],null]],[1,"\\n  "],[10,"label"],[14,"for","ucd_do-not-show-again"],[14,0,"checkbox-label"],[12],[1,"\\n    "],[1,[28,[35,4],null,[["type","id","name","checked"],["checkbox","ucd_do-not-show-again","ucd_do-not-show-again",[33,5,["ucd_shouldPermanentlyDismiss"]]]]]],[1,"\\n    "],[1,[28,[35,3],[38,"warning_modal.do_not_show_again"],null]],[1,"\\n  "],[13],[1,"\\n  "],[10,0],[14,0,"action-buttons"],[12],[1,"\\n    "],[1,[28,[35,6],null,[["action","icon","tagName","class","label"],[[28,[37,7],[[30,0],"goBackAndFix"],null],"pencil-alt","button","btn-primary",[28,[37,8],[38,"warning_modal.fix_post"],null]]]]],[1,"\\n    "],[1,[28,[35,6],null,[["action","tagName","label"],[[28,[37,7],[[30,0],"ignoreAndProceed"],null],"button",[28,[37,8],[38,"warning_modal.ignore_and_post_anyway"],null]]]]],[1,"\\n  "],[13],[1,"\\n"]],[]]]]]],[],false,["d-modal-body","ucd-modal-title","cook-text","theme-i18n","input","model","d-button","action","theme-prefix"]]',moduleName:"discourse/theme-38/discourse/templates/modal/ucd-warning-modal",isStrictMode:!1})
e.default=n})),"define"in window&&define("discourse/theme-38/unformatted-code-detector/core/code-energy",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getCodeEnergyIndicators=e.codeEnergyValues=e.CodeEnergyLevels=void 0
const t=require("discourse/lib/theme-settings-store").getObjectForTheme(38),n="[$_a-zA-Z0-9]*",o=`[$_a-zA-Z]${n}`,i=`[$a-zA-Z]${n}`,s="[a-zA-Z-]+",r=`(?:${o}|(?:"(?:[^\\n"\\\\]|\\\\[^\\n])*"|'(?:[^\\n'\\\\]|\\\\[^\\n])*')|-?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)`,d=`(?:\\s*${r}\\s*(?:,\\s*${r}\\s*)*|\\s*)`,c={Complex:"Complex",High:"High",Medium:"Medium",Low:"Low"}
e.CodeEnergyLevels=c
const a={[c.Complex]:1,[c.High]:.7,[c.Medium]:.3,[c.Low]:.1}
e.codeEnergyValues=a
const l=[`\\$${o}`,`^\\s*\\.${s}`,`:${o}`,`${i}(?:_${i})+`,"(?:^|\\s+)(?:\\/\\/|;)","\\/\\*[\\s\\S]+?\\*\\/","('''|\"\"\")[\\s\\S]+?\\1",";\\s*$",`(?:${o})?[$_a-z]\\(${d}\\)`,`${o}\\[\\s*${r}?\\s*\\]`,"^\\s*[{}]\\s*$","\\{\\{.+\\}\\}","[\\$#]\\{.+\\}","&&|!=|>>|<<|::|\\+=|-=|\\*=|\\/=|\\|\\|=|\\?=|\\.\\?","\\\\['\"ntr0\\\\]","<\\?[^>]*\\?>","<%[^>]*%>","0000-00-00T00:00:00".split("0").join("\\d"),"^\\s*at .+(.+)",'^\\s*{\\s*"[^"]*"\\s*:'],u=["\x3c!--[\\s\\S]*?--\x3e",`<${s}[^>]*\\/?>`,`</${s}>`,"&[0-9a-zA-Z]+;","&#[0-9]{1,7};","&#x[0-9a-fA-F]{1,6};"],m={[c.Complex]:{get indicators(){return[l,t.include_html&&u].filter(Boolean).flat()}},[c.High]:{indicators:[]},[c.Medium]:{indicators:[]},[c.Low]:{value:.1,indicators:[]}}
e.getCodeEnergyIndicators=()=>Object.entries(m).map((e=>{let[t,{indicators:n}]=e
return n.map((e=>({value:a[t],matcher:new RegExp(e,"gm")})))})).flat()})),"define"in window&&define("discourse/theme-38/unformatted-code-detector/core/detect-code",["exports","../helpers/boundaries","./strip-ignored-content","./code-energy","./sensitivity"],(function(e,t,n,o,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.printDebugInfo=e.numSequentialLinesWithThresholdCodeEnergy=e.getCodeEnergy=e.detectUnformattedCode=void 0
const s=require("discourse/lib/theme-settings-store").getObjectForTheme(38),r=e=>{let n=0,i=0
const s=(0,t.getLineBoundaries)(e)
s.forEach((e=>{e.matches=0,e.matched_patterns=[]}))
for(const{matcher:r,value:d}of(0,o.getCodeEnergyIndicators)()){const c=[...e.matchAll(r)]
n+=c.length*d,d===o.codeEnergyValues[o.CodeEnergyLevels.Complex]&&(i+=c.length)
for(const e of c){const n=e.index,o=n+e[0].length
for(const e of s){const i=(0,t.isBetween)(e.start,e.end);(i(n)||i(o)||e.start>=n&&e.end<=o)&&(++e.matches,e.matched_patterns.push({matcher:r,value:d}))}}}return{totalCodeEnergy:n,totalComplexMatches:i,lines:s}}
e.getCodeEnergy=r
const d=e=>t=>{let n=0,o=0
for(const i of t)i.content.trim().length&&(i.matches>=e?++o:(n=Math.max(n,o),o=0))
return Math.max(n,o)}
e.numSequentialLinesWithThresholdCodeEnergy=d
e.printDebugInfo=e=>{e=(0,n.stripIgnoredContent)(e)
const{complexMatchesToIgnore:t,minSequentialLinesToMatch:o,minTotalCodeEnergy:s}=i.sensitivityConfig,{totalCodeEnergy:d,totalComplexMatches:c,lines:a}=r(e),l=[]
let u=0
a.forEach((e=>{e.content.trim()&&(e.matches?u++:u=0,l.push([e.matches?String(e.matches):"",u?String(u):"",e.matched_patterns.length?`\`${e.matched_patterns.map((e=>e.matcher)).join("`, `")}\``:"",e.content]))}))
const m=["matches","cumulative","matched patterns","content"],g=m.map((()=>""))
m.forEach(((e,t)=>{const n=Math.max(e.length,...l.map((e=>e[t].length)))
l.forEach((e=>e[t]=e[t].padEnd(n))),m[t]=e.padEnd(n),g[t]=g[t].padEnd(n,"-")})),l.unshift(m,g),console.log(l.map((e=>`| ${e.join(" | ")} |`)).join("\n")),console.log("Result is ",{totalCodeEnergy:d,totalComplexMatches:c,lines:a}),console.log("Sensitivity Config is ",{complexMatchesToIgnore:t,minSequentialLinesToMatch:o,minTotalCodeEnergy:s})}
e.detectUnformattedCode=e=>{const c=(0,n.stripIgnoredContent)(e)
return!!(0,t.isBetween)(s.min_post_length_to_check,-1===s.max_post_length_to_check?1/0:s.max_post_length_to_check)(e.length)&&(e=>{const{complexMatchesToIgnore:t,minSequentialLinesToMatch:n,minTotalCodeEnergy:s}=i.sensitivityConfig,{totalCodeEnergy:c,totalComplexMatches:a,lines:l}=r(e)
return!(a<=t||c<s||d(o.codeEnergyValues[o.CodeEnergyLevels.Complex])(l)<n)})(c)}})),"define"in window&&define("discourse/theme-38/unformatted-code-detector/core/sensitivity",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.sensitivityConfig=e.applySensitivity=void 0
const t=require("discourse/lib/theme-settings-store").getObjectForTheme(38),n=e=>(t,n)=>t+e*(n-t)
e.applySensitivity=n
const o={get complexMatchesToIgnore(){return Math.round(n(t.sensitivity)(4,0))},get minSequentialLinesToMatch(){return Math.round(n(t.sensitivity)(5,1))},get minTotalCodeEnergy(){return Math.round(n(t.sensitivity)(5,1))}}
e.sensitivityConfig=o})),"define"in window&&define("discourse/theme-38/unformatted-code-detector/core/strip-ignored-content",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.stripIgnoredContent=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(38)
const t=[/(^([`~])\2{2,})[^`~\n]*\n[\s\S]*?\n\1\2*\s*(?:\n|$)/gm,/(?:^|(?:\n{2,}))\s*(?:(?: {4}|\t).*(?:\n|$))/g,/`[^`\n]+`/g,/\[([a-z]+).*?\][\s\S]*?\[\/\1\]/gim,/https?:\/\/(_\([^() \n\t]+\)|[^() \n\t])+/g,/:[a-z_+-][a-z_0-9+-]*:/g,/:D|:-D|:\)|:-\)|;\)|;-\)|:\(|:-\(|:o|:-o|:\?|:-\?|:\?\?\?:|8\)|8-\)|:x|:-x|:P|:-P|:!:|:\?:|:\||:-\||^_^|^__^|:'\(|:'-\(|:-'\(|:p|:O|:-O|:\/|;P|;-P|:\$|:-\$/g,/\((?:c|tm|r)\)/gi,/!?\[[^\]]+\]\([[^\)]+\)/g,/\B@[\w][\w.-]{0,58}\b/g]
e.stripIgnoredContent=e=>t.reduce(((e,t)=>e.replace(t,"")),e)})),"define"in window&&define("discourse/theme-38/unformatted-code-detector/helpers/boundaries",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isBetween=e.getLineBoundaries=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(38)
e.getLineBoundaries=e=>{const t=[]
let n=-1
do{t.push({start:n+1}),n=e.indexOf("\n",n+1),t[t.length-1].end=-1===n?e.length:n,t[t.length-1].content=e.slice(t[t.length-1].start,t[t.length-1].end)}while(n>-1)
return t}
e.isBetween=(e,t)=>n=>n>=e&&n<=t})),"define"in window&&define("discourse/theme-38/unformatted-code-detector/helpers/emoji-diversity",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.randomizeEmojiSkinTone=e.randomizeEmojiGender=e.randomizeEmojiDiversity=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(38)
const t={masc:{adult:"👨",child:"👦",modifier:"‍♂"},fem:{adult:"👩",child:"👧",modifier:"‍♀"}},n=Object.keys(Object.values(t)[0]).reduce(((e,n)=>(e[n]=new RegExp(Object.values(t).map((e=>e[n])).filter(Boolean).join("|"),"g"),e)),{}),o=e=>Object.entries(n).reduce(((e,n)=>{let[o,i]=n
return e.replace(i,(()=>(()=>{const e=Object.values(t)
return e[Math.floor(Math.random()*e.length)]})()[o]))}),e)
e.randomizeEmojiGender=o
const i=127995,s=e=>e.replace(/[\u{1f3fb}-\u{1f3ff}]/gu,(()=>String.fromCodePoint(i+Math.floor(5*Math.random()))))
e.randomizeEmojiSkinTone=s
e.randomizeEmojiDiversity=e=>s(o(e))})),"define"in window&&define("discourse/theme-38/unformatted-code-detector/initializers/init",["exports","discourse/lib/plugin-api","discourse/lib/show-modal","../core/detect-code","../helpers/emoji-diversity","discourse/lib/text","@ember/template","discourse-common/lib/helpers","I18n","pretty-text/sanitizer"],(function(e,t,n,o,i,s,r,d,c,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=require("discourse/lib/theme-settings-store").getObjectForTheme(38)
var u={name:"unformatted-code-detector",initialize(){(0,t.withPluginApi)("0.8.8",(e=>{window.debugUnformattedCodeDetector=()=>{const e=document.querySelector("#reply-control textarea.d-editor-input")?.value
e?(0,o.printDebugInfo)(e):console.log("No content found")},(0,d.registerUnbound)("ucd-modal-title",(()=>{return(0,r.htmlSafe)([(0,s.emojiUnescape)((0,a.escape)((0,i.randomizeEmojiDiversity)(l.emoji_icon))),(0,a.escape)(c.default.t((e="warning_modal.title",`theme_translations.38.${e}`)))].join(" "))
var e})),e.modifyClass("model:composer",{pluginId:"unformatted-code-detector",ucd_shouldPermanentlyDismiss:!1,ucd_checkPermanentlyDismissed:()=>!!localStorage.ucd_warningPermanentlyDismissed,ucd_checkShouldIgnoreWarning(){return!localStorage.ucd_forceShowWarning&&(this.ucd_previousWarningIgnored||this.ucd_checkPermanentlyDismissed()||e.getCurrentUser().trust_level>=(-1===l.disable_at_trust_level?1/0:l.disable_at_trust_level))},ucd_checkUnformattedCodeDetected(){return(0,o.detectUnformattedCode)(this.reply)}}),e.modifyClass("controller:composer",{pluginId:"unformatted-code-detector",ucd_permanentlyDismiss(){localStorage.ucd_warningPermanentlyDismissed="1"},ucd_closeModal(){this.model.ucd_shouldPermanentlyDismiss&&this.ucd_permanentlyDismiss(),this.send("closeModal")},save(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o]
const i=this.model,s=this,r=this._super
if(i.ucd_checkUnformattedCodeDetected()&&!i.ucd_checkShouldIgnoreWarning()){const e=(0,n.default)("ucdWarningModal",{modalClass:"ucd_warning-modal",model:i})
e.actions.ignoreAndProceed=()=>{s.ucd_closeModal.call(s),r.call(s,...t)},e.actions.goBackAndFix=()=>s.ucd_closeModal.call(s)}else this._super(...t)}})}))}}
e.default=u}))

//# sourceMappingURL=a856e25cd30542c1229adc3ee9caf1e0efa6b67c.map?__ws=forum.arduino.cc
