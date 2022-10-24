import{_ as a,c as n,a as p,w as l,b as o,r as e,o as t,d as c}from"./app.81578d5b.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406","slug":"\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406","link":"#\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406","children":[]}],"relativePath":"proxy/1.md"}'),r={name:"proxy/1.md"},D=o(`<h2 id="\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1">\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406 <a class="header-anchor" href="#\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a></h2><p>\u524D\u9762 2 \u7AE0\u4ECB\u7ECD\u7684\u90FD\u662F Vue \u600E\u4E48\u5B9E\u73B0\u6570\u636E\u6E32\u67D3\u548C\u7EC4\u4EF6\u5316\u7684\uFF0C\u4E3B\u8981\u8BB2\u7684\u662F\u521D\u59CB\u5316\u7684\u8FC7\u7A0B\uFF0C\u628A\u539F\u59CB\u7684\u6570\u636E\u6700\u7EC8\u6620\u5C04\u5230 DOM \u4E2D\uFF0C\u4F46\u5E76\u6CA1\u6709\u6D89\u53CA\u5230\u6570\u636E\u53D8\u5316\u5230 DOM \u53D8\u5316\u7684\u90E8\u5206\u3002\u800C Vue \u7684\u6570\u636E\u9A71\u52A8\u9664\u4E86\u6570\u636E\u6E32\u67D3 DOM \u4E4B\u5916\uFF0C\u8FD8\u6709\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u4F53\u73B0\u5C31\u662F\u6570\u636E\u7684\u53D8\u66F4\u4F1A\u89E6\u53D1 DOM \u7684\u53D8\u5316\u3002</p><p>\u5176\u5B9E\u524D\u7AEF\u5F00\u53D1\u6700\u91CD\u8981\u7684 2 \u4E2A\u5DE5\u4F5C\uFF0C\u4E00\u4E2A\u662F\u628A\u6570\u636E\u6E32\u67D3\u5230\u9875\u9762\uFF0C\u53E6\u4E00\u4E2A\u662F\u5904\u7406\u7528\u6237\u4EA4\u4E92\u3002</p><p>Vue \u628A\u6570\u636E\u6E32\u67D3\u5230\u9875\u9762\u7684\u80FD\u529B\u6211\u4EEC\u5DF2\u7ECF\u901A\u8FC7\u6E90\u7801\u5206\u6790\u51FA\u5176\u4E2D\u7684\u539F\u7406\u4E86\uFF0C\u4F46\u662F\u7531\u4E8E\u4E00\u4E9B\u7528\u6237\u4EA4\u4E92\u6216\u8005\u662F\u5176\u5B83\u65B9\u9762\u5BFC\u81F4\u6570\u636E\u53D1\u751F\u53D8\u5316\u91CD\u65B0\u5BF9\u9875\u9762\u6E32\u67D3\u7684\u539F\u7406\u6211\u4EEC\u8FD8\u672A\u5206\u6790\u3002</p><p>\u8003\u8651\u5982\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">changeMsg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{ message }}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello Vue!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">changeMsg</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u6211\u4EEC\u53BB\u4FEE\u6539 this.message \u7684\u65F6\u5019\uFF0C\u6A21\u677F\u5BF9\u5E94\u7684\u63D2\u503C\u4E5F\u4F1A\u6E32\u67D3\u6210\u65B0\u7684\u6570\u636E\uFF0C\u90A3\u4E48\u8FD9\u4E00\u5207\u662F\u600E\u4E48\u505A\u5230\u7684\u5462\uFF1F</p><p>\u5728\u5206\u6790\u524D\uFF0C\u6211\u4EEC\u5148\u76F4\u89C2\u7684\u60F3\u4E00\u4E0B\uFF0C\u5982\u679C\u4E0D\u7528 Vue \u7684\u8BDD\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u5B9E\u73B0\u8FD9\u4E2A\u9700\u6C42\uFF1A\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u4FEE\u6539\u6570\u636E\uFF0C\u624B\u52A8\u64CD\u4F5C DOM \u91CD\u65B0\u6E32\u67D3\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u548C\u4F7F\u7528 Vue \u7684\u6700\u5927\u533A\u522B\u5C31\u662F\u591A\u4E86\u4E00\u6B65\u201C\u624B\u52A8\u64CD\u4F5C DOM \u91CD\u65B0\u6E32\u67D3\u201D\u3002\u8FD9\u4E00\u6B65\u770B\u4E0A\u53BB\u5E76\u4E0D\u591A\uFF0C\u4F46\u5B83\u80CC\u540E\u53C8\u6F5C\u5728\u7684\u51E0\u4E2A\u8981\u5904\u7406\u7684\u95EE\u9898\uFF1A</p><ul><li><p>\u6211\u9700\u8981\u4FEE\u6539\u54EA\u5757\u7684 DOM\uFF1F</p></li><li><p>\u6211\u7684\u4FEE\u6539\u6548\u7387\u548C\u6027\u80FD\u662F\u4E0D\u662F\u6700\u4F18\u7684\uFF1F</p></li><li><p>\u6211\u9700\u8981\u5BF9\u6570\u636E\u6BCF\u4E00\u6B21\u7684\u4FEE\u6539\u90FD\u53BB\u64CD\u4F5C DOM \u5417\uFF1F</p></li><li><p>\u6211\u9700\u8981 case by case \u53BB\u5199\u4FEE\u6539 DOM \u7684\u903B\u8F91\u5417\uFF1F</p></li></ul><p>\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u4E86 Vue\uFF0C\u90A3\u4E48\u4E0A\u9762\u51E0\u4E2A\u95EE\u9898 Vue \u5185\u90E8\u5C31\u5E2E\u4F60\u505A\u4E86\uFF0C\u90A3\u4E48 Vue \u662F\u5982\u4F55\u5728\u6211\u4EEC\u5BF9\u6570\u636E\u4FEE\u6539\u540E\u81EA\u52A8\u505A\u8FD9\u4E9B\u4E8B\u60C5\u5462\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u8FDB\u5165\u4E00\u4E9B Vue \u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u5E95\u5C42\u7684\u7EC6\u8282\u3002</p>`,11);function F(y,i,C,A,d,u){const s=e("font");return t(),n("div",null,[p(s,{style:{"font-size":"36px"}},{default:l(()=>[c("\u54CD\u5E94\u5F0F\u539F\u7406")]),_:1}),D])}const g=a(r,[["render",F]]);export{h as __pageData,g as default};