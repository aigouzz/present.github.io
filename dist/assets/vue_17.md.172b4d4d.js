import{_ as n,c as a,a as l,w as p,b as o,r as e,o as t,e as c}from"./app.2fffb4bb.js";const r="/dist/assets/vue17-1.683ac974.png",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001Key\u662F\u4EC0\u4E48","slug":"\u4E00\u3001key\u662F\u4EC0\u4E48","link":"#\u4E00\u3001key\u662F\u4EC0\u4E48","children":[{"level":3,"title":"\u573A\u666F\u80CC\u540E\u7684\u903B\u8F91","slug":"\u573A\u666F\u80CC\u540E\u7684\u903B\u8F91","link":"#\u573A\u666F\u80CC\u540E\u7684\u903B\u8F91","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u8BBE\u7F6Ekey\u4E0E\u4E0D\u8BBE\u7F6Ekey\u533A\u522B","slug":"\u4E8C\u3001\u8BBE\u7F6Ekey\u4E0E\u4E0D\u8BBE\u7F6Ekey\u533A\u522B","link":"#\u4E8C\u3001\u8BBE\u7F6Ekey\u4E0E\u4E0D\u8BBE\u7F6Ekey\u533A\u522B","children":[{"level":3,"title":"\u8BBE\u7F6Ekey\u503C\u4E00\u5B9A\u80FD\u63D0\u9AD8diff\u6548\u7387\u5417\uFF1F","slug":"\u8BBE\u7F6Ekey\u503C\u4E00\u5B9A\u80FD\u63D0\u9AD8diff\u6548\u7387\u5417\uFF1F","link":"#\u8BBE\u7F6Ekey\u503C\u4E00\u5B9A\u80FD\u63D0\u9AD8diff\u6548\u7387\u5417\uFF1F","children":[]}]},{"level":2,"title":"\u4E09\u3001\u539F\u7406\u5206\u6790","slug":"\u4E09\u3001\u539F\u7406\u5206\u6790","link":"#\u4E09\u3001\u539F\u7406\u5206\u6790","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"vue/17.md"}'),y={name:"vue/17.md"},F=o(`<h2 id="\u4E00\u3001key\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001Key\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001key\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u5F00\u59CB\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u8FD8\u539F\u4E24\u4E2A\u5B9E\u9645\u5DE5\u4F5C\u573A\u666F</p><p>\u5F53\u6211\u4EEC\u5728\u4F7F\u7528v-for\u65F6\uFF0C\u9700\u8981\u7ED9\u5355\u5143\u52A0\u4E0Akey</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :key=&quot;item.id&quot;&gt;...&lt;/li&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/ul&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u7528+new Date()\u751F\u6210\u7684\u65F6\u95F4\u6233\u4F5C\u4E3Akey\uFF0C\u624B\u52A8\u5F3A\u5236\u89E6\u53D1\u91CD\u65B0\u6E32\u67D3</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Comp</span><span style="color:#89DDFF;"> :key=&quot;+new Date()&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u90A3\u4E48\u8FD9\u80CC\u540E\u7684\u903B\u8F91\u662F\u4EC0\u4E48\uFF0Ckey\u7684\u4F5C\u7528\u53C8\u662F\u4EC0\u4E48\uFF1F</p><p>\u4E00\u53E5\u8BDD\u6765\u8BB2</p><blockquote><p>key\u662F\u7ED9\u6BCF\u4E00\u4E2Avnode\u7684\u552F\u4E00id\uFF0C\u4E5F\u662Fdiff\u7684\u4E00\u79CD\u4F18\u5316\u7B56\u7565\uFF0C\u53EF\u4EE5\u6839\u636Ekey\uFF0C\u66F4\u51C6\u786E\uFF0C \u66F4\u5FEB\u7684\u627E\u5230\u5BF9\u5E94\u7684vnode\u8282\u70B9</p></blockquote><h3 id="\u573A\u666F\u80CC\u540E\u7684\u903B\u8F91" tabindex="-1">\u573A\u666F\u80CC\u540E\u7684\u903B\u8F91 <a class="header-anchor" href="#\u573A\u666F\u80CC\u540E\u7684\u903B\u8F91" aria-hidden="true">#</a></h3><p>\u5F53\u6211\u4EEC\u5728\u4F7F\u7528v-for\u65F6\uFF0C\u9700\u8981\u7ED9\u5355\u5143\u52A0\u4E0Akey</p><ul><li><p>\u5982\u679C\u4E0D\u7528key\uFF0CVue\u4F1A\u91C7\u7528\u5C31\u5730\u590D\u5730\u539F\u5219\uFF1A\u6700\u5C0F\u5316element\u7684\u79FB\u52A8\uFF0C\u5E76\u4E14\u4F1A\u5C1D\u8BD5\u5C3D\u6700\u5927\u7A0B\u5EA6\u5728\u540C\u9002\u5F53\u7684\u5730\u65B9\u5BF9\u76F8\u540C\u7C7B\u578B\u7684element\uFF0C\u505Apatch\u6216\u8005reuse\u3002</p></li><li><p>\u5982\u679C\u4F7F\u7528\u4E86key\uFF0CVue\u4F1A\u6839\u636Ekeys\u7684\u987A\u5E8F\u8BB0\u5F55element\uFF0C\u66FE\u7ECF\u62E5\u6709\u4E86key\u7684element\u5982\u679C\u4E0D\u518D\u51FA\u73B0\u7684\u8BDD\uFF0C\u4F1A\u88AB\u76F4\u63A5remove\u6216\u8005destoryed</p></li><li><p>\u7528+new Date()\u751F\u6210\u7684\u65F6\u95F4\u6233\u4F5C\u4E3Akey\uFF0C\u624B\u52A8\u5F3A\u5236\u89E6\u53D1\u91CD\u65B0\u6E32\u67D3</p></li><li><p>\u5F53\u62E5\u6709\u65B0\u503C\u7684rerender\u4F5C\u4E3Akey\u65F6\uFF0C\u62E5\u6709\u4E86\u65B0key\u7684Comp\u51FA\u73B0\u4E86\uFF0C\u90A3\u4E48\u65E7key Comp\u4F1A\u88AB\u79FB\u9664\uFF0C\u65B0key Comp\u89E6\u53D1\u6E32\u67D3</p></li></ul><h2 id="\u4E8C\u3001\u8BBE\u7F6Ekey\u4E0E\u4E0D\u8BBE\u7F6Ekey\u533A\u522B" tabindex="-1">\u4E8C\u3001\u8BBE\u7F6Ekey\u4E0E\u4E0D\u8BBE\u7F6Ekey\u533A\u522B <a class="header-anchor" href="#\u4E8C\u3001\u8BBE\u7F6Ekey\u4E0E\u4E0D\u8BBE\u7F6Ekey\u533A\u522B" aria-hidden="true">#</a></h2><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><p>\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\uFF0C2\u79D2\u540E\u5F80items\u6570\u7EC4\u63D2\u5165\u6570\u636E</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :key=&quot;item&quot;&gt;{{item}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;script </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../dist/vue.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u521B\u5EFA\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">    const app = new Vue(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      el: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#demo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">e</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">mounted</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">setTimeout</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">this</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">items</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">splice</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// </span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#F07178;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u4E0D\u4F7F\u7528key\u7684\u60C5\u51B5\uFF0Cvue\u4F1A\u8FDB\u884C\u8FD9\u6837\u7684\u64CD\u4F5C\uFF1A</p><img src="`+r+`"><p>\u5206\u6790\u4E0B\u6574\u4F53\u6D41\u7A0B\uFF1A</p><ul><li>\u6BD4\u8F83A\uFF0CA\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u4F46\u6570\u636E\u76F8\u540C\uFF0C\u4E0D\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u6BD4\u8F83B\uFF0CB\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u4F46\u6570\u636E\u76F8\u540C\uFF0C\u4E0D\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u6BD4\u8F83C\uFF0CF\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u6570\u636E\u4E0D\u540C\uFF0C\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u6BD4\u8F83D\uFF0CC\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u6570\u636E\u4E0D\u540C\uFF0C\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u6BD4\u8F83E\uFF0CD\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u6570\u636E\u4E0D\u540C\uFF0C\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u5FAA\u73AF\u7ED3\u675F\uFF0C\u5C06E\u63D2\u5165\u5230DOM\u4E2D</li></ul><p>\u4E00\u5171\u53D1\u751F\u4E863\u6B21\u66F4\u65B0\uFF0C1\u6B21\u63D2\u5165\u64CD\u4F5C</p><p>\u5728\u4F7F\u7528key\u7684\u60C5\u51B5\uFF1Avue\u4F1A\u8FDB\u884C\u8FD9\u6837\u7684\u64CD\u4F5C\uFF1A</p><ul><li>\u6BD4\u8F83A\uFF0CA\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u4F46\u6570\u636E\u76F8\u540C\uFF0C\u4E0D\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u6BD4\u8F83B\uFF0CB\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u4F46\u6570\u636E\u76F8\u540C\uFF0C\u4E0D\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u6BD4\u8F83C\uFF0CF\uFF0C\u4E0D\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9</li><li>\u6BD4\u8F83E\u3001E\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u4F46\u6570\u636E\u76F8\u540C\uFF0C\u4E0D\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u6BD4\u8F83D\u3001D\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u4F46\u6570\u636E\u76F8\u540C\uFF0C\u4E0D\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u6BD4\u8F83C\u3001C\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u8FDB\u884Cpatch\uFF0C\u4F46\u6570\u636E\u76F8\u540C\uFF0C\u4E0D\u53D1\u751Fdom\u64CD\u4F5C</li><li>\u5FAA\u73AF\u7ED3\u675F\uFF0C\u5C06F\u63D2\u5165\u5230C\u4E4B\u524D</li></ul><p>\u4E00\u5171\u53D1\u751F\u4E860\u6B21\u66F4\u65B0\uFF0C1\u6B21\u63D2\u5165\u64CD\u4F5C</p><p>\u901A\u8FC7\u4E0A\u9762\u4E24\u4E2A\u5C0F\u4F8B\u5B50\uFF0C\u53EF\u89C1\u8BBE\u7F6Ekey\u80FD\u591F\u5927\u5927\u51CF\u5C11\u5BF9\u9875\u9762\u7684DOM\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u4E86diff\u6548\u7387</p><h3 id="\u8BBE\u7F6Ekey\u503C\u4E00\u5B9A\u80FD\u63D0\u9AD8diff\u6548\u7387\u5417\uFF1F" tabindex="-1">\u8BBE\u7F6Ekey\u503C\u4E00\u5B9A\u80FD\u63D0\u9AD8diff\u6548\u7387\u5417\uFF1F <a class="header-anchor" href="#\u8BBE\u7F6Ekey\u503C\u4E00\u5B9A\u80FD\u63D0\u9AD8diff\u6548\u7387\u5417\uFF1F" aria-hidden="true">#</a></h3><p>\u5176\u5B9E\u4E0D\u7136\uFF0C\u6587\u6863\u4E2D\u4E5F\u660E\u786E\u8868\u793A</p><ul><li><p>\u5F53 Vue.js \u7528 v-for \u6B63\u5728\u66F4\u65B0\u5DF2\u6E32\u67D3\u8FC7\u7684\u5143\u7D20\u5217\u8868\u65F6\uFF0C\u5B83\u9ED8\u8BA4\u7528\u201C\u5C31\u5730\u590D\u7528\u201D\u7B56\u7565\u3002\u5982\u679C\u6570\u636E\u9879\u7684\u987A\u5E8F\u88AB\u6539\u53D8\uFF0CVue \u5C06\u4E0D\u4F1A\u79FB\u52A8 DOM \u5143\u7D20\u6765\u5339\u914D\u6570\u636E\u9879\u7684\u987A\u5E8F\uFF0C \u800C\u662F\u7B80\u5355\u590D\u7528\u6B64\u5904\u6BCF\u4E2A\u5143\u7D20\uFF0C\u5E76\u4E14\u786E\u4FDD\u5B83\u5728\u7279\u5B9A\u7D22\u5F15\u4E0B\u663E\u793A\u5DF2\u88AB\u6E32\u67D3\u8FC7\u7684\u6BCF\u4E2A\u5143\u7D20</p></li><li><p>\u8FD9\u4E2A\u9ED8\u8BA4\u7684\u6A21\u5F0F\u662F\u9AD8\u6548\u7684\uFF0C\u4F46\u662F\u53EA\u9002\u7528\u4E8E\u4E0D\u4F9D\u8D56\u5B50\u7EC4\u4EF6\u72B6\u6001\u6216\u4E34\u65F6 DOM \u72B6\u6001 (\u4F8B\u5982\uFF1A\u8868\u5355\u8F93\u5165\u503C) \u7684\u5217\u8868\u6E32\u67D3\u8F93\u51FA</p></li><li><p>\u5EFA\u8BAE\u5C3D\u53EF\u80FD\u5728\u4F7F\u7528 v-for \u65F6\u63D0\u4F9B key\uFF0C\u9664\u975E\u904D\u5386\u8F93\u51FA\u7684 DOM \u5185\u5BB9\u975E\u5E38\u7B80\u5355\uFF0C\u6216\u8005\u662F\u523B\u610F\u4F9D\u8D56\u9ED8\u8BA4\u884C\u4E3A\u4EE5\u83B7\u53D6\u6027\u80FD\u4E0A\u7684\u63D0\u5347</p></li></ul><h2 id="\u4E09\u3001\u539F\u7406\u5206\u6790" tabindex="-1">\u4E09\u3001\u539F\u7406\u5206\u6790 <a class="header-anchor" href="#\u4E09\u3001\u539F\u7406\u5206\u6790" aria-hidden="true">#</a></h2><p>\u6E90\u7801\u4F4D\u7F6E\uFF1Acore/vdom/patch.js</p><p>\u8FD9\u91CC\u5224\u65AD\u662F\u5426\u4E3A\u540C\u4E00\u4E2Akey\uFF0C\u9996\u5148\u5224\u65AD\u7684\u662Fkey\u503C\u662F\u5426\u76F8\u7B49\u5982\u679C\u6CA1\u6709\u8BBE\u7F6Ekey\uFF0C\u90A3\u4E48key\u4E3Aundefined\uFF0C\u8FD9\u65F6\u5019undefined\u662F\u6052\u7B49\u4E8Eundefined</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sameVnode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">            (</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isComment</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isComment</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">isDef</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">isDef</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">sameInputType</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            ) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">isTrue</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isAsyncPlaceholder</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">asyncFactory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">asyncFactory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">isUndef</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">asyncFactory</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            )</span></span>
<span class="line"><span style="color:#F07178;">        )</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>updateChildren\u65B9\u6CD5\u4E2D\u4F1A\u5BF9\u65B0\u65E7vnode\u8FDB\u884Cdiff\uFF0C\u7136\u540E\u5C06\u6BD4\u5BF9\u51FA\u7684\u7ED3\u679C\u7528\u6765\u66F4\u65B0\u771F\u5B9E\u7684DOM</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">updateChildren</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">parentElm</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">oldCh</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">newCh</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">insertedVnodeQueue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">removeOnly</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">oldStartIdx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldEndIdx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartIdx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newEndIdx</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isUndef</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">oldStartVnode</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isUndef</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">oldEndVnode</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">sameVnode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">oldStartVnode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">sameVnode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">oldEndVnode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newEndVnode</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">sameVnode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">oldStartVnode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newEndVnode</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// Vnode moved right</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">sameVnode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">oldEndVnode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// Vnode moved left</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isUndef</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">oldKeyToIdx</span><span style="color:#F07178;">)) </span><span style="color:#A6ACCD;">oldKeyToIdx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">createKeyToOldIdx</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">oldCh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldStartIdx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldEndIdx</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">idxInOld</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">isDef</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldKeyToIdx</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">findIdxInOld</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldCh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldStartIdx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldEndIdx</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isUndef</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">idxInOld</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// New element</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">createElm</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">insertedVnodeQueue</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parentElm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldStartVnode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">elm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newCh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartIdx</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">vnodeToMove</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldCh</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">idxInOld</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">sameVnode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vnodeToMove</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#82AAFF;">patchVnode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vnodeToMove</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">insertedVnodeQueue</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newCh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartIdx</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">oldCh</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">idxInOld</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">canMove</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nodeOps</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insertBefore</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">parentElm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vnodeToMove</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">elm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldStartVnode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">elm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#676E95;">// same key but different element. treat as new element</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#82AAFF;">createElm</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">insertedVnodeQueue</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parentElm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldStartVnode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">elm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newCh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartIdx</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">newStartVnode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newCh</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">newStartIdx</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844903826693029895" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903826693029895</a></li><li><a href="https://juejin.cn/post/6844903985397104648" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903985397104648</a></li></ul>`,36);function D(C,A,i,d,u,m){const s=e("font");return t(),a("div",null,[l(s,{style:{"font-size":"36px"}},{default:p(()=>[c("key\u7684\u539F\u7406\u548C\u4F5C\u7528")]),_:1}),F])}const k=n(y,[["render",D]]);export{f as __pageData,k as default};
