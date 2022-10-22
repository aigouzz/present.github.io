import{_ as n,c as a,a as l,w as p,b as o,r as e,o as t,e as c}from"./app.2fffb4bb.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5982\u4F55\u90E8\u7F72","slug":"\u4E00\u3001\u5982\u4F55\u90E8\u7F72","link":"#\u4E00\u3001\u5982\u4F55\u90E8\u7F72","children":[]},{"level":2,"title":"\u4E8C\u3001404\u95EE\u9898","slug":"\u4E8C\u3001404\u95EE\u9898","link":"#\u4E8C\u3001404\u95EE\u9898","children":[{"level":3,"title":"\u4E3A\u4EC0\u4E48history\u6A21\u5F0F\u4E0B\u6709\u95EE\u9898","slug":"\u4E3A\u4EC0\u4E48history\u6A21\u5F0F\u4E0B\u6709\u95EE\u9898","link":"#\u4E3A\u4EC0\u4E48history\u6A21\u5F0F\u4E0B\u6709\u95EE\u9898","children":[]},{"level":3,"title":"\u4E3A\u4EC0\u4E48hash\u6A21\u5F0F\u4E0B\u6CA1\u6709\u95EE\u9898","slug":"\u4E3A\u4EC0\u4E48hash\u6A21\u5F0F\u4E0B\u6CA1\u6709\u95EE\u9898","link":"#\u4E3A\u4EC0\u4E48hash\u6A21\u5F0F\u4E0B\u6CA1\u6709\u95EE\u9898","children":[]},{"level":3,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","link":"#\u89E3\u51B3\u65B9\u6848","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"vue/30.md"}'),r={name:"vue/30.md"},y=o(`<h2 id="\u4E00\u3001\u5982\u4F55\u90E8\u7F72" tabindex="-1">\u4E00\u3001\u5982\u4F55\u90E8\u7F72 <a class="header-anchor" href="#\u4E00\u3001\u5982\u4F55\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1\u6A21\u5F0F\u4E0B\uFF0C\u524D\u540E\u7AEF\u662F\u72EC\u7ACB\u5E03\u7F72\u7684\uFF0C\u524D\u7AEF\u53EA\u9700\u8981\u5C06\u6700\u540E\u7684\u6784\u5EFA\u7269\u4E0A\u4F20\u81F3\u76EE\u6807\u670D\u52A1\u5668\u7684web\u5BB9\u5668\u6307\u5B9A\u7684\u9759\u6001\u76EE\u5F55\u4E0B\u5373\u53EF</p><p>\u6211\u4EEC\u77E5\u9053vue\u9879\u76EE\u5728\u6784\u5EFA\u540E\uFF0C\u662F\u751F\u6210\u4E00\u7CFB\u5217\u7684\u9759\u6001\u6587\u4EF6</p><p>\u5E38\u89C4\u5E03\u7F72\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u8FD9\u4E2A\u76EE\u5F55\u4E0A\u4F20\u81F3\u76EE\u6807\u670D\u52A1\u5668\u5373\u53EF</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// scp \u4E0A\u4F20 user\u4E3A\u4E3B\u673A\u767B\u5F55\u7528\u6237\uFF0Chost\u4E3A\u4E3B\u673A\u5916\u7F51ip, xx\u4E3Aweb\u5BB9\u5668\u9759\u6001\u8D44\u6E90\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">scp dist</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">zip user@</span><span style="color:#FFCB6B;">host</span><span style="color:#89DDFF;">:/</span><span style="color:#A6ACCD;">xx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">xx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">xx</span></span>
<span class="line"></span></code></pre></div><p>\u8BA9web\u5BB9\u5668\u8DD1\u8D77\u6765\uFF0C\u4EE5nginx\u4E3A\u4F8B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">listen</span><span style="color:#F07178;">  </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">server_name</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">www</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xxx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">dist</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E\u5B8C\u6210\u8BB0\u5F97\u91CD\u542Fnginx</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u68C0\u67E5\u914D\u7F6E\u662F\u5426\u6B63\u786E</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">t </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5E73\u6ED1\u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s reload</span></span>
<span class="line"></span></code></pre></div><p>\u64CD\u4F5C\u5B8C\u540E\u5C31\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u8F93\u5165\u57DF\u540D\u8FDB\u884C\u8BBF\u95EE\u4E86</p><p>\u5F53\u7136\u4E0A\u9762\u53EA\u662F\u63D0\u5230\u6700\u7B80\u5355\u4E5F\u662F\u6700\u76F4\u63A5\u7684\u4E00\u79CD\u5E03\u7F72\u65B9\u5F0F</p><p>\u4EC0\u4E48\u81EA\u52A8\u5316\uFF0C\u955C\u50CF\uFF0C\u5BB9\u5668\uFF0C\u6D41\u6C34\u7EBF\u5E03\u7F72\uFF0C\u672C\u8D28\u4E5F\u662F\u5C06\u8FD9\u5957\u903B\u8F91\u62BD\u8C61\uFF0C\u9694\u79BB\uFF0C\u7528\u7A0B\u5E8F\u6765\u4EE3\u66FF\u91CD\u590D\u6027\u7684\u52B3\u52A8\uFF0C\u672C\u6587\u4E0D\u5C55\u5F00</p><h2 id="\u4E8C\u3001404\u95EE\u9898" tabindex="-1">\u4E8C\u3001404\u95EE\u9898 <a class="header-anchor" href="#\u4E8C\u3001404\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u8FD9\u662F\u4E00\u4E2A\u7ECF\u5178\u7684\u95EE\u9898\uFF0C\u76F8\u4FE1\u5F88\u591A\u540C\u5B66\u90FD\u6709\u9047\u5230\u8FC7\uFF0C\u90A3\u4E48\u4F60\u77E5\u9053\u5176\u771F\u6B63\u7684\u539F\u56E0\u5417\uFF1F</p><p>\u6211\u4EEC\u5148\u8FD8\u539F\u4E00\u4E0B\u573A\u666F\uFF1A</p><p>vue\u9879\u76EE\u5728\u672C\u5730\u65F6\u8FD0\u884C\u6B63\u5E38\uFF0C\u4F46\u90E8\u7F72\u5230\u670D\u52A1\u5668\u4E2D\uFF0C\u5237\u65B0\u9875\u9762\uFF0C\u51FA\u73B0\u4E86404\u9519\u8BEF \u5148\u5B9A\u4F4D\u4E00\u4E0B\uFF0CHTTP 404 \u9519\u8BEF\u610F\u5473\u7740\u94FE\u63A5\u6307\u5411\u7684\u8D44\u6E90\u4E0D\u5B58\u5728</p><p>\u95EE\u9898\u5728\u4E8E\u4E3A\u4EC0\u4E48\u4E0D\u5B58\u5728\uFF1F\u4E14\u4E3A\u4EC0\u4E48\u53EA\u6709history\u6A21\u5F0F\u4E0B\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\uFF1F</p><h3 id="\u4E3A\u4EC0\u4E48history\u6A21\u5F0F\u4E0B\u6709\u95EE\u9898" tabindex="-1">\u4E3A\u4EC0\u4E48history\u6A21\u5F0F\u4E0B\u6709\u95EE\u9898 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48history\u6A21\u5F0F\u4E0B\u6709\u95EE\u9898" aria-hidden="true">#</a></h3><p>Vue\u662F\u5C5E\u4E8E\u5355\u9875\u5E94\u7528\uFF08single-page application\uFF09</p><p>\u800CSPA\u662F\u4E00\u79CD\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u6216\u7F51\u7AD9\u7684\u6A21\u578B\uFF0C\u6240\u6709\u7528\u6237\u4EA4\u4E92\u662F\u901A\u8FC7\u52A8\u6001\u91CD\u5199\u5F53\u524D\u9875\u9762\uFF0C\u524D\u9762\u6211\u4EEC\u4E5F\u770B\u5230\u4E86\uFF0C\u4E0D\u7BA1\u6211\u4EEC\u5E94\u7528\u6709\u591A\u5C11\u9875\u9762\uFF0C\u6784\u5EFA\u7269\u90FD\u53EA\u4F1A\u4EA7\u51FA\u4E00\u4E2Aindex.html</p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u56DE\u5934\u6765\u770B\u4E00\u4E0B\u6211\u4EEC\u7684nginx\u914D\u7F6E</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">listen</span><span style="color:#F07178;">  </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">server_name</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">www</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xxx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">dist</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u6839\u636E nginx \u914D\u7F6E\u5F97\u51FA\uFF0C\u5F53\u6211\u4EEC\u5728\u5730\u5740\u680F\u8F93\u5165 <a href="http://www.xxx.com" target="_blank" rel="noreferrer">www.xxx.com</a> \u65F6\uFF0C\u8FD9\u65F6\u4F1A\u6253\u5F00\u6211\u4EEC dist \u76EE\u5F55\u4E0B\u7684 index.html \u6587\u4EF6\uFF0C\u7136\u540E\u6211\u4EEC\u5728\u8DF3\u8F6C\u8DEF\u7531\u8FDB\u5165\u5230 <a href="http://www.xxx.com/login" target="_blank" rel="noreferrer">www.xxx.com/login</a></p><p>\u5173\u952E\u5728\u8FD9\u91CC\uFF0C\u5F53\u6211\u4EEC\u5728 <a href="http://website.com/login" target="_blank" rel="noreferrer">website.com/login</a> \u9875\u6267\u884C\u5237\u65B0\u64CD\u4F5C\uFF0Cnginx location \u662F\u6CA1\u6709\u76F8\u5173\u914D\u7F6E\u7684\uFF0C\u6240\u4EE5\u5C31\u4F1A\u51FA\u73B0 404 \u7684\u60C5\u51B5</p><h3 id="\u4E3A\u4EC0\u4E48hash\u6A21\u5F0F\u4E0B\u6CA1\u6709\u95EE\u9898" tabindex="-1">\u4E3A\u4EC0\u4E48hash\u6A21\u5F0F\u4E0B\u6CA1\u6709\u95EE\u9898 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48hash\u6A21\u5F0F\u4E0B\u6CA1\u6709\u95EE\u9898" aria-hidden="true">#</a></h3><p>router hash \u6A21\u5F0F\u6211\u4EEC\u90FD\u77E5\u9053\u662F\u7528\u7B26\u53F7#\u8868\u793A\u7684\uFF0C\u5982 <a href="http://website.com/#/login" target="_blank" rel="noreferrer">website.com/#/login</a>, hash \u7684\u503C\u4E3A #/login</p><p>\u5B83\u7684\u7279\u70B9\u5728\u4E8E\uFF1Ahash \u867D\u7136\u51FA\u73B0\u5728 URL \u4E2D\uFF0C\u4F46\u4E0D\u4F1A\u88AB\u5305\u62EC\u5728 HTTP \u8BF7\u6C42\u4E2D\uFF0C\u5BF9\u670D\u52A1\u7AEF\u5B8C\u5168\u6CA1\u6709\u5F71\u54CD\uFF0C\u56E0\u6B64\u6539\u53D8 hash \u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u9875\u9762</p><p>hash \u6A21\u5F0F\u4E0B\uFF0C\u4EC5 hash \u7B26\u53F7\u4E4B\u524D\u7684\u5185\u5BB9\u4F1A\u88AB\u5305\u542B\u5728\u8BF7\u6C42\u4E2D\uFF0C\u5982 <a href="http://website.com/#/login" target="_blank" rel="noreferrer">website.com/#/login</a> \u53EA\u6709 <a href="http://website.com" target="_blank" rel="noreferrer">website.com</a> \u4F1A\u88AB\u5305\u542B\u5728\u8BF7\u6C42\u4E2D \uFF0C\u56E0\u6B64\u5BF9\u4E8E\u670D\u52A1\u7AEF\u6765\u8BF4\uFF0C\u5373\u4F7F\u6CA1\u6709\u914D\u7F6Elocation\uFF0C\u4E5F\u4E0D\u4F1A\u8FD4\u56DE404\u9519\u8BEF</p><h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h3><p>\u770B\u5230\u8FD9\u91CC\u6211\u76F8\u4FE1\u5927\u90E8\u5206\u540C\u5B66\u90FD\u80FD\u60F3\u5230\u600E\u4E48\u89E3\u51B3\u95EE\u9898\u4E86\uFF0C</p><ul><li><p>\u4EA7\u751F\u95EE\u9898\u7684\u672C\u8D28\u662F\u56E0\u4E3A\u6211\u4EEC\u7684\u8DEF\u7531\u662F\u901A\u8FC7JS\u6765\u6267\u884C\u89C6\u56FE\u5207\u6362\u7684\uFF0C</p></li><li><p>\u5F53\u6211\u4EEC\u8FDB\u5165\u5230\u5B50\u8DEF\u7531\u65F6\u5237\u65B0\u9875\u9762\uFF0Cweb\u5BB9\u5668\u6CA1\u6709\u76F8\u5BF9\u5E94\u7684\u9875\u9762\u6B64\u65F6\u4F1A\u51FA\u73B0404</p></li><li><p>\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u914D\u7F6E\u5C06\u4EFB\u610F\u9875\u9762\u90FD\u91CD\u5B9A\u5411\u5230 index.html\uFF0C\u628A\u8DEF\u7531\u4EA4\u7531\u524D\u7AEF\u5904\u7406</p></li><li><p>\u5BF9nginx\u914D\u7F6E\u6587\u4EF6.conf\u4FEE\u6539\uFF0C\u6DFB\u52A0try_files $uri $uri/ /index.html;</p></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">listen</span><span style="color:#F07178;">  </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">server_name</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">www</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xxx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">dist</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">try_files</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$uri</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$uri</span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u5B8C\u914D\u7F6E\u6587\u4EF6\u540E\u8BB0\u5F97\u914D\u7F6E\u7684\u66F4\u65B0</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s reload</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E48\u505A\u4EE5\u540E\uFF0C\u4F60\u7684\u670D\u52A1\u5668\u5C31\u4E0D\u518D\u8FD4\u56DE 404 \u9519\u8BEF\u9875\u9762\uFF0C\u56E0\u4E3A\u5BF9\u4E8E\u6240\u6709\u8DEF\u5F84\u90FD\u4F1A\u8FD4\u56DE index.html \u6587\u4EF6</p><p>\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F60\u5E94\u8BE5\u5728 Vue \u5E94\u7528\u91CC\u9762\u8986\u76D6\u6240\u6709\u7684\u8DEF\u7531\u60C5\u51B5\uFF0C\u7136\u540E\u5728\u7ED9\u51FA\u4E00\u4E2A 404 \u9875\u9762</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VueRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">history</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NotFoundComponent </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5173\u4E8E\u540E\u7AEF\u914D\u7F6E\u65B9\u6848\u8FD8\u6709\uFF1AApache\u3001nodejs\u7B49\uFF0C\u601D\u60F3\u662F\u4E00\u81F4\u7684\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u5C55\u5F00\u8FF0\u8BF4\u4E86</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844903872637632525" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903872637632525</a></li><li><a href="https://vue-js.com/topic/5f8cf91d96b2cb0032c385c0" target="_blank" rel="noreferrer">https://vue-js.com/topic/5f8cf91d96b2cb0032c385c0</a></li></ul>`,40);function D(i,F,C,A,d,h){const s=e("font");return t(),a("div",null,[l(s,{style:{"font-size":"36px"}},{default:p(()=>[c("Vue\u672C\u5730\u5F00\u53D1\u5B8C\u6210\u540E\u90E8\u7F72\u5230\u670D\u52A1\u5668\u540E\u62A5404\u662F\u4EC0\u4E48\u539F\u56E0")]),_:1}),y])}const g=n(r,[["render",D]]);export{x as __pageData,g as default};
