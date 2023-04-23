define("discourse/plugins/discourse-bbcode-color/lib/discourse-markdown/bbcode-color",["exports"],(function(o){"use strict"
Object.defineProperty(o,"__esModule",{value:!0}),o.setup=function(o){o.allowList({custom(o,r,t){if("span"===o&&"style"===r)return/^(background-)?color:#?[a-zA-Z0-9]+$/.exec(t)}}),o.registerOptions((o=>{o.features["bbcode-color"]=!0})),o.markdownIt?o.registerPlugin((o=>{const r=o.inline.bbcode.ruler
r.push("bgcolor",{tag:"bgcolor",wrap:function(o,r,t){o.type="span_open",o.tag="span",o.attrs=[["style","background-color:"+t.attrs._default.trim()]],o.content="",o.nesting=1,r.type="span_close",r.tag="span",r.nesting=-1,r.content=""}}),r.push("color",{tag:"color",wrap:function(o,r,t){o.type="span_open",o.tag="span",o.attrs=[["style","color:"+t.attrs._default.trim()]],o.content="",o.nesting=1,r.type="span_close",r.tag="span",r.nesting=-1,r.content=""}})})):(o.addPreProcessor((o=>function(o){o=o||""
for(;o!==(o=o.replace(/\[color=([^\]]+)\]((?:(?!\[color=[^\]]+\]|\[\/color\])[\S\s])*)\[\/color\]/gi,(function(o,r,t){return`<span style='color:${r}'>${t}</span>`}))););return o}(o))),o.addPreProcessor((o=>function(o){o=o||""
for(;o!==(o=o.replace(/\[bgcolor=([^\]]+)\]((?:(?!\[bgcolor=[^\]]+\]|\[\/bgcolor\])[\S\s])*)\[\/bgcolor\]/gi,(function(o,r,t){return`<span style='background-color:${r}'>${t}</span>`}))););return o}(o))))}}))

//# sourceMappingURL=discourse-bbcode-color-d41c8133e0b300ec47acd3350986fa79c63e23e71501af8553b45b4d5bfcdfed.map
//!

;
