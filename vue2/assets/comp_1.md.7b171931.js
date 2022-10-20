import{_ as a,c as n,a as p,w as e,b as o,r as l,o as t,d as c}from"./app.25103857.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u5316","slug":"\u7EC4\u4EF6\u5316","link":"#\u7EC4\u4EF6\u5316","children":[]}],"relativePath":"comp/1.md"}'),r={name:"comp/1.md"},D=o(`<h2 id="\u7EC4\u4EF6\u5316" tabindex="-1">\u7EC4\u4EF6\u5316 <a class="header-anchor" href="#\u7EC4\u4EF6\u5316" aria-hidden="true">#</a></h2><p>Vue.js \u53E6\u4E00\u4E2A\u6838\u5FC3\u601D\u60F3\u662F\u7EC4\u4EF6\u5316\u3002\u6240\u8C13\u7EC4\u4EF6\u5316\uFF0C\u5C31\u662F\u628A\u9875\u9762\u62C6\u5206\u6210\u591A\u4E2A\u7EC4\u4EF6 (component)\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u4F9D\u8D56\u7684 CSS\u3001JavaScript\u3001\u6A21\u677F\u3001\u56FE\u7247\u7B49\u8D44\u6E90\u653E\u5728\u4E00\u8D77\u5F00\u53D1\u548C\u7EF4\u62A4\u3002\u7EC4\u4EF6\u662F\u8D44\u6E90\u72EC\u7ACB\u7684\uFF0C\u7EC4\u4EF6\u5728\u7CFB\u7EDF\u5185\u90E8\u53EF\u590D\u7528\uFF0C\u7EC4\u4EF6\u548C\u7EC4\u4EF6\u4E4B\u95F4\u53EF\u4EE5\u5D4C\u5957\u3002</p><p>\u6211\u4EEC\u5728\u7528 Vue.js \u5F00\u53D1\u5B9E\u9645\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u5C31\u662F\u50CF\u642D\u79EF\u6728\u4E00\u6837\uFF0C\u7F16\u5199\u4E00\u5806\u7EC4\u4EF6\u62FC\u88C5\u751F\u6210\u9875\u9762\u3002\u5728 Vue.js \u7684\u5B98\u7F51\u4E2D\uFF0C\u4E5F\u662F\u82B1\u4E86\u5927\u7BC7\u5E45\u6765\u4ECB\u7ECD\u4EC0\u4E48\u662F\u7EC4\u4EF6\uFF0C\u5982\u4F55\u7F16\u5199\u7EC4\u4EF6\u4EE5\u53CA\u7EC4\u4EF6\u62E5\u6709\u7684\u5C5E\u6027\u548C\u7279\u6027\u3002</p><p>\u90A3\u4E48\u5728\u8FD9\u4E00\u7AE0\u8282\uFF0C\u6211\u4EEC\u5C06\u4ECE\u6E90\u7801\u7684\u89D2\u5EA6\u6765\u5206\u6790 Vue \u7684\u7EC4\u4EF6\u5185\u90E8\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF0C\u53EA\u6709\u4E86\u89E3\u4E86\u5185\u90E8\u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u624D\u80FD\u8BA9\u6211\u4EEC\u4F7F\u7528\u5B83\u7684\u65F6\u5019\u66F4\u52A0\u5F97\u5FC3\u5E94\u624B\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u4F1A\u7528 Vue-cli \u521D\u59CB\u5316\u7684\u4EE3\u7801\u4E3A\u4F8B\uFF0C\u6765\u5206\u6790\u4E00\u4E0B Vue \u7EC4\u4EF6\u521D\u59CB\u5316\u7684\u4E00\u4E2A\u8FC7\u7A0B\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u8FD9\u91CC\u7684 h \u662F createElement \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">h</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">h</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6BB5\u4EE3\u7801\u76F8\u4FE1\u5F88\u591A\u540C\u5B66\u90FD\u5F88\u719F\u6089\uFF0C\u5B83\u548C\u6211\u4EEC\u4E0A\u4E00\u7AE0\u76F8\u540C\u7684\u70B9\u4E5F\u662F\u901A\u8FC7 render \u51FD\u6570\u53BB\u6E32\u67D3\u7684\uFF0C\u4E0D\u540C\u7684\u8FD9\u6B21\u901A\u8FC7 createElement \u4F20\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u7EC4\u4EF6\u800C\u4E0D\u662F\u4E00\u4E2A\u539F\u751F\u7684\u6807\u7B7E\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u5F00\u59CB\u5206\u6790\u8FD9\u4E00\u8FC7\u7A0B\u3002</p>`,7);function y(A,C,F,i,_,d){const s=l("font");return t(),n("div",null,[p(s,{style:{"font-size":"36px"}},{default:e(()=>[c("\u7EC4\u4EF6")]),_:1}),D])}const h=a(r,[["render",y]]);export{m as __pageData,h as default};
