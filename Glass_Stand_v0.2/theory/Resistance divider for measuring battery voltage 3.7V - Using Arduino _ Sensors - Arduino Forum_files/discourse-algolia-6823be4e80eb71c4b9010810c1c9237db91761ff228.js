define("discourse/plugins/discourse-algolia/discourse/initializers/discourse-algolia",["exports","discourse/lib/plugin-api","discourse/lib/url","I18n","virtual-dom","discourse/lib/load-script","rsvp"],(function(e,t,a,s,i,l,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"discourse-algolia",initialize(){(0,t.withPluginApi)("0.8.8",(e=>{e.createWidget("algolia",{tagName:"li.algolia-holder",didRenderWidget(){this.siteSettings.algolia_enabled&&this.siteSettings.algolia_autocomplete_enabled&&o.Promise.all([(0,l.default)("/plugins/discourse-algolia/javascripts/autocomplete.js"),(0,l.default)("/plugins/discourse-algolia/javascripts/algoliasearch.js")]).then((()=>{document.body.classList.add("algolia-enabled"),this._search=function(e){const t=window.algoliasearch,{autocomplete:i,getAlgoliaResults:l}=window["@algolia/autocomplete-js"]
if(document.getElementsByClassName("algolia-search")[0].getElementsByClassName("aa-Autocomplete").length>0)return
const o=t(e.algoliaApplicationId,e.algoliaSearchApiKey),r=i({container:".algolia-search",panelContainer:".algolia-autocomplete",debug:e.debug,detachedMediaQuery:"none",placeholder:s.default.t("discourse_algolia.search_box_placeholder"),getSources:()=>[{sourceId:"posts",getItemInputValue:e=>{let{item:t}=e
return t.query},getItems(e){let{query:t}=e
return l({searchClient:o,queries:[{indexName:"discourse-posts",query:t,params:{hitsPerPage:4}}]})},templates:{item(e){let{item:t,components:i,html:l}=e,o=[],n=t.topic.tags
return n&&n.forEach(((e,s)=>{o.push(l`<a
                    class="hit-post-tag"
                    onClick="${t=>{a.default.routeTo(`/tags/${e}`),r.setIsOpen(!1),t.preventDefault(),t.stopPropagation()}}"
                  >
                    ${i.Highlight({hit:t,attribute:["topic","tags",s]})}
                  </a>`)})),l` <div class="hit-post">
                <div class="hit-post-title-holder">
                  <span class="hit-post-topic-title">
                    ${i.Highlight({hit:t,attribute:["topic","title"]})}
                  </span>
                  <span
                    class="hit-post-topic-views"
                    title="${s.default.t("discourse_algolia.topic_views")}"
                  >
                    ${t.topic.views}
                  </span>
                </div>
                <div class="hit-post-category-tags">
                  <span class="hit-post-category">
                    <span class="badge-wrapper bullet">
                      <span
                        class="badge-category-bg"
                        style="background-color: #${t.category?.color};"
                      />
                      <a
                        class="badge-category hit-post-category-name"
                        onClick="${e=>{a.default.routeTo(t.category.url),r.setIsOpen(!1),e.preventDefault(),e.stopPropagation()}}"
                        >${t.category?.name}</a
                      >
                    </span>
                  </span>
                  <span class="hit-post-tags">${o}</span>
                </div>
                <div class="hit-post-content-holder">
                  <a
                    class="hit-post-username"
                    onClick="${e=>{a.default.routeTo(t.user.url),r.setIsOpen(!1),e.preventDefault(),e.stopPropagation()}}"
                    >@${t.user.username}</a
                  >:
                  <span class="hit-post-content">
                    ${i.Snippet({hit:t,attribute:"content"})}
                  </span>
                </div>
              </div>`},noResults(e){let{html:t}=e
return t`<div class="aa-empty">
                ${s.default.t("discourse_algolia.no_posts")}
              </div>`}},onSelect(e){let{item:t}=e
a.default.routeTo(t.url)}},{sourceId:"users",getItemInputValue:e=>{let{item:t}=e
return t.query},getItems(e){let{query:t}=e
return l({searchClient:o,queries:[{indexName:"discourse-users",query:t,params:{hitsPerPage:4}}]})},templates:{item(t){let{item:a,components:i,html:l}=t,o=""
a.likes_received>0&&(o=l`<span class="hit-user-like-heart">❤</span>
                  ${a.likes_received}`)
const r=i.Highlight({hit:a,attribute:a.name?"name":"username"})
return l`<div class="hit-user-left">
                  <img
                    class="hit-user-avatar"
                    src="${e.imageBaseURL}${a.avatar_template.replace("{size}",50)}"
                  />
                </div>
                <div class="hit-user-right">
                  <div class="hit-user-username-holder">
                    <span class="hit-user-username">
                      @${i.Highlight({hit:a,attribute:"username"})}
                    </span>
                    <span
                      class="hit-user-custom-ranking"
                      title="${s.default.t("discourse_algolia.user_likes")}"
                    >
                      ${o}
                    </span>
                  </div>
                  <div class="hit-user-name">${r}</div>
                </div>`}},onSelect(e){let{item:t}=e
a.default.routeTo(t.url)}},{sourceId:"tags",getItemInputValue:e=>{let{item:t}=e
return t.query},getItems(e){let{query:t}=e
return l({searchClient:o,queries:[{indexName:"discourse-tags",query:t,params:{hitsPerPage:4}}]})},templates:{item(e){let{item:t,components:a,html:i}=e
return i`<div class="hit-tag">
                #<span class="hit-tag-name">
                  ${a.Highlight({hit:t,attribute:"name"})}</span
                >
                <span
                  class="hit-tag-topic_count"
                  title="${s.default.t("discourse_algolia.topic_tags")}"
                  >${t.topic_count}</span
                >
              </div> `}},onSelect(e){let{item:t}=e
a.default.routeTo(t.url)}}],render(e,t){let{elements:i,render:l,html:o}=e
const{posts:n,users:c,tags:u}=i
l(o`<div class="aa-dropdown-menu">
          <div class="left-container">
            <div class="aa-dataset-posts">${n}</div>
          </div>
          <div class="right-container">
            <span class="aa-dataset-users">${c}</span>
            <span class="aa-dataset-tags">${u}</span>
          </div>
          <div class="aa-footer">
            <div class="left-container">
              <a
                class="advanced-search"
                onClick="${e=>{a.default.routeTo("/search"),r.setIsOpen(!1),e.preventDefault(),e.stopPropagation()}}"
                >${s.default.t("discourse_algolia.advanced_search")}</a
              >
            </div>
            <div class="right-container">
              <a
                target="_blank"
                class="algolia-logo"
                href="https://algolia.com/"
                title="${s.default.t("discourse_algolia.powered_by")}"
              ></a>
            </div>
          </div>
        </div>`,t)}})
return r}({algoliaApplicationId:this.siteSettings.algolia_application_id,algoliaSearchApiKey:this.siteSettings.algolia_search_api_key,imageBaseURL:"",debug:document.location.host.indexOf("localhost")>-1})}))},willRerenderWidget(){this._search&&this._search.destroy()},html:()=>[(0,i.h)(".algolia-search"),(0,i.h)(".algolia-autocomplete")]}),e.decorateWidget("header-icons:before",(function(e){if(e.widget.siteSettings.algolia_enabled&&e.widget.siteSettings.algolia_autocomplete_enabled&&(!e.widget.siteSettings.login_required||e.widget.currentUser))return e.attach("algolia")}))}))}}
e.default=r}))

//# sourceMappingURL=discourse-algolia-801df576dd13f6b0028265839d7d66fd7ac3959ccd96baca382f70026f3f2199.map
//!

;
