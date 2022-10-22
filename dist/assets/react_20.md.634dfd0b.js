import{_ as a,c as n,a as l,w as p,b as o,r as e,o as t,e as c}from"./app.2fffb4bb.js";const r="/dist/assets/react20-1.be36b196.png",x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6","slug":"\u4E8C\u3001\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6","link":"#\u4E8C\u3001\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6","children":[{"level":3,"title":"redux-thunk","slug":"redux-thunk","link":"#redux-thunk","children":[]},{"level":3,"title":"redux-logger","slug":"redux-logger","link":"#redux-logger","children":[]}]},{"level":2,"title":"\u4E09\u3001\u5B9E\u73B0\u539F\u7406","slug":"\u4E09\u3001\u5B9E\u73B0\u539F\u7406","link":"#\u4E09\u3001\u5B9E\u73B0\u539F\u7406","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"react/20.md"}'),F={name:"react/20.md"},y=o('<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u4E2D\u95F4\u4EF6\uFF08Middleware\uFF09\u662F\u4ECB\u4E8E\u5E94\u7528\u7CFB\u7EDF\u548C\u7CFB\u7EDF\u8F6F\u4EF6\u4E4B\u95F4\u7684\u4E00\u7C7B\u8F6F\u4EF6\uFF0C\u5B83\u4F7F\u7528\u7CFB\u7EDF\u8F6F\u4EF6\u6240\u63D0\u4F9B\u7684\u57FA\u7840\u670D\u52A1\uFF08\u529F\u80FD\uFF09\uFF0C\u8854\u63A5\u7F51\u7EDC\u4E0A\u5E94\u7528\u7CFB\u7EDF\u7684\u5404\u4E2A\u90E8\u5206\u6216\u4E0D\u540C\u7684\u5E94\u7528\uFF0C\u80FD\u591F\u8FBE\u5230\u8D44\u6E90\u5171\u4EAB\u3001\u529F\u80FD\u5171\u4EAB\u7684\u76EE\u7684</p><p>\u5728\u4E0A\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u4E86\u89E3\u5230\u4E86Redux\u6574\u4E2A\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u5F53action\u53D1\u51FA\u4E4B\u540E\uFF0Creducer\u7ACB\u5373\u7B97\u51FAstate\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u662F\u4E00\u4E2A\u540C\u6B65\u7684\u64CD\u4F5C</p><p>\u90A3\u4E48\u5982\u679C\u9700\u8981\u652F\u6301\u5F02\u6B65\u64CD\u4F5C\uFF0C\u6216\u8005\u652F\u6301\u9519\u8BEF\u5904\u7406\u3001\u65E5\u5FD7\u76D1\u63A7\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u53EF\u4EE5\u7528\u4E0A\u4E2D\u95F4\u4EF6</p><p>Redux\u4E2D\uFF0C\u4E2D\u95F4\u4EF6\u5C31\u662F\u653E\u5728\u5C31\u662F\u5728dispatch\u8FC7\u7A0B\uFF0C\u5728\u5206\u53D1action\u8FDB\u884C\u62E6\u622A\u5904\u7406\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><img src="'+r+`"><p>\u5176\u672C\u8D28\u4E0A\u4E00\u4E2A\u51FD\u6570\uFF0C\u5BF9store.dispatch\u65B9\u6CD5\u8FDB\u884C\u4E86\u6539\u9020\uFF0C\u5728\u53D1\u51FA Action\u548C\u6267\u884C Reducer\u8FD9\u4E24\u6B65\u4E4B\u95F4\uFF0C\u6DFB\u52A0\u4E86\u5176\u4ED6\u529F\u80FD</p><h2 id="\u4E8C\u3001\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6" tabindex="-1">\u4E8C\u3001\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u4E8C\u3001\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h2><p>\u6709\u5F88\u591A\u4F18\u79C0\u7684redux\u4E2D\u95F4\u4EF6\uFF0C\u5982\uFF1A</p><ul><li>redux-thunk\uFF1A\u7528\u4E8E\u5F02\u6B65\u64CD\u4F5C</li><li>redux-logger\uFF1A\u7528\u4E8E\u65E5\u5FD7\u8BB0\u5F55</li></ul><p>\u4E0A\u8FF0\u7684\u4E2D\u95F4\u4EF6\u90FD\u9700\u8981\u901A\u8FC7applyMiddlewares\u8FDB\u884C\u6CE8\u518C\uFF0C\u4F5C\u7528\u662F\u5C06\u6240\u6709\u7684\u4E2D\u95F4\u4EF6\u7EC4\u6210\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F9D\u6B21\u6267\u884C</p><p>\u7136\u540E\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u5165\u5230createStore\u4E2D</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> store </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createStore</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  reducer</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">applyMiddleware</span><span style="color:#A6ACCD;">(thunk</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> logger)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="redux-thunk" tabindex="-1">redux-thunk <a class="header-anchor" href="#redux-thunk" aria-hidden="true">#</a></h3><p>redux-thunk\u662F\u5B98\u7F51\u63A8\u8350\u7684\u5F02\u6B65\u5904\u7406\u4E2D\u95F4\u4EF6</p><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7684dispatch(action)\uFF0Caction\u9700\u8981\u662F\u4E00\u4E2AJavaScript\u7684\u5BF9\u8C61</li><li>redux-thunk\u4E2D\u95F4\u4EF6\u4F1A\u5224\u65AD\u4F60\u5F53\u524D\u4F20\u8FDB\u6765\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C06\u4F1A\u7ED9\u51FD\u6570\u4F20\u5165\u53C2\u6570\u503C\uFF08dispatch\uFF0CgetState\uFF09</li><li>dispatch\u51FD\u6570\u7528\u4E8E\u6211\u4EEC\u4E4B\u540E\u518D\u6B21\u6D3E\u53D1action</li><li>getState\u51FD\u6570\u8003\u8651\u5230\u6211\u4EEC\u4E4B\u540E\u7684\u4E00\u4E9B\u64CD\u4F5C\u9700\u8981\u4F9D\u8D56\u539F\u6765\u7684\u72B6\u6001\uFF0C\u7528\u4E8E\u8BA9\u6211\u4EEC\u53EF\u4EE5\u83B7\u53D6\u4E4B\u524D\u7684\u4E00\u4E9B\u72B6\u6001</li></ul><p>\u6240\u4EE5dispatch\u53EF\u4EE5\u5199\u6210\u4E0B\u8FF0\u51FD\u6570\u7684\u5F62\u5F0F\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getHomeMultidataAction </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dispatch</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://xxx.xx.xx.xx/test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">dispatch</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">changeBannersAction</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">banner</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">list</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">dispatch</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">changeRecommendsAction</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">recommend</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">list</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="redux-logger" tabindex="-1">redux-logger <a class="header-anchor" href="#redux-logger" aria-hidden="true">#</a></h3><p>\u5982\u679C\u60F3\u8981\u5B9E\u73B0\u4E00\u4E2A\u65E5\u5FD7\u529F\u80FD\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u73B0\u6210\u7684redux-logger</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">applyMiddleware</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">redux</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> createLogger </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">redux-logger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> logger </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createLogger</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> store </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createStore</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  reducer</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">applyMiddleware</span><span style="color:#A6ACCD;">(logger)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u80FD\u7B80\u5355\u901A\u8FC7\u4E2D\u95F4\u4EF6\u51FD\u6570\u5B9E\u73B0\u65E5\u5FD7\u8BB0\u5F55\u7684\u4FE1\u606F</p><h2 id="\u4E09\u3001\u5B9E\u73B0\u539F\u7406" tabindex="-1">\u4E09\u3001\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#\u4E09\u3001\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h2><p>\u9996\u5148\u770B\u770BapplyMiddlewares\u7684\u6E90\u7801</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">applyMiddleware</span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">middlewares</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">createStore</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">reducer</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">preloadedState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">enhancer</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">createStore</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">reducer</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">preloadedState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">enhancer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dispatch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dispatch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">chain</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">middlewareAPI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      getState</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getState</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">dispatch</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dispatch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">chain</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">middlewares</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">middleware</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">middleware</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">middlewareAPI</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">dispatch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">compose</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">chain</span><span style="color:#F07178;">)(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dispatch</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{...</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dispatch</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6240\u6709\u4E2D\u95F4\u4EF6\u88AB\u653E\u8FDB\u4E86\u4E00\u4E2A\u6570\u7EC4chain\uFF0C\u7136\u540E\u5D4C\u5957\u6267\u884C\uFF0C\u6700\u540E\u6267\u884Cstore.dispatch\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u4E2D\u95F4\u4EF6\u5185\u90E8\uFF08middlewareAPI\uFF09\u53EF\u4EE5\u62FF\u5230getState\u548Cdispatch\u8FD9\u4E24\u4E2A\u65B9\u6CD5</p><p>\u5728\u4E0A\u9762\u7684\u5B66\u4E60\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u4E86redux-thunk\u7684\u57FA\u672C\u4F7F\u7528</p><p>\u5185\u90E8\u4F1A\u5C06dispatch\u8FDB\u884C\u4E00\u4E2A\u5224\u65AD\uFF0C\u7136\u540E\u6267\u884C\u5BF9\u5E94\u64CD\u4F5C\uFF0C\u539F\u7406\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">patchThunk</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dispatch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dispatchAndThunk</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">action</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dispatch</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getState</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dispatch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dispatchAndThunk</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5B9E\u73B0\u4E00\u4E2A\u65E5\u5FD7\u8F93\u51FA\u7684\u539F\u7406\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dispatch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dispatchAndLog</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dispatching:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">addAction</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">addAction</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">5</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u65B0\u7684state:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getState</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dispatch </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dispatchAndLog</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html" target="_blank" rel="noreferrer">http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html</a></li></ul>`,33);function D(A,C,i,d,u,h){const s=e("font");return t(),n("div",null,[l(s,{style:{"font-size":"36px"}},{default:p(()=>[c("Redux\u4E2D\u95F4\u4EF6\u7684\u7406\u89E3\u53CA\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6")]),_:1}),y])}const _=a(F,[["render",D]]);export{x as __pageData,_ as default};