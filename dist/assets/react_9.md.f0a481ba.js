import{_ as a,c as n,a as l,w as p,b as o,r as e,o as t,e as c}from"./app.2fffb4bb.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u5982\u4F55\u6784\u5EFA","slug":"\u4E8C\u3001\u5982\u4F55\u6784\u5EFA","link":"#\u4E8C\u3001\u5982\u4F55\u6784\u5EFA","children":[{"level":3,"title":"\u51FD\u6570\u5F0F\u521B\u5EFA","slug":"\u51FD\u6570\u5F0F\u521B\u5EFA","link":"#\u51FD\u6570\u5F0F\u521B\u5EFA","children":[]},{"level":3,"title":"\u901A\u8FC7 React.createClass \u65B9\u6CD5\u521B\u5EFA","slug":"\u901A\u8FC7-react-createclass-\u65B9\u6CD5\u521B\u5EFA","link":"#\u901A\u8FC7-react-createclass-\u65B9\u6CD5\u521B\u5EFA","children":[]},{"level":3,"title":"\u7EE7\u627F React.Component \u521B\u5EFA","slug":"\u7EE7\u627F-react-component-\u521B\u5EFA","link":"#\u7EE7\u627F-react-component-\u521B\u5EFA","children":[]}]},{"level":2,"title":"\u4E09\u3001\u533A\u522B","slug":"\u4E09\u3001\u533A\u522B","link":"#\u4E09\u3001\u533A\u522B","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"react/9.md"}'),r={name:"react/9.md"},F=o(`<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5C31\u662F\u628A\u56FE\u5F62\u3001\u975E\u56FE\u5F62\u7684\u5404\u79CD\u903B\u8F91\u5747\u62BD\u8C61\u4E3A\u4E00\u4E2A\u7EDF\u4E00\u7684\u6982\u5FF5\uFF08\u7EC4\u4EF6\uFF09\u6765\u5B9E\u73B0\u5F00\u53D1\u7684\u6A21\u5F0F</p><p><strong>\u5728React\u4E2D\uFF0C\u4E00\u4E2A\u7C7B\u3001\u4E00\u4E2A\u51FD\u6570\u90FD\u53EF\u4EE5\u89C6\u4E3A\u4E00\u4E2A\u7EC4\u4EF6</strong></p><p>\u5728\u4E4B\u524D\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u7EC4\u4EF6\u6240\u5B58\u5728\u7684\u4F18\u52BF\uFF1A</p><ul><li>\u964D\u4F4E\u6574\u4E2A\u7CFB\u7EDF\u7684\u8026\u5408\u5EA6\uFF0C\u5728\u4FDD\u6301\u63A5\u53E3\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66FF\u6362\u4E0D\u540C\u7684\u7EC4\u4EF6\u5FEB\u901F\u5B8C\u6210\u9700\u6C42\uFF0C\u4F8B\u5982\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u66FF\u6362\u4E3A\u65E5\u5386\u3001\u65F6\u95F4\u3001\u8303\u56F4\u7B49\u7EC4\u4EF6\u4F5C\u5177\u4F53\u7684\u5B9E\u73B0</li><li>\u8C03\u8BD5\u65B9\u4FBF\uFF0C\u7531\u4E8E\u6574\u4E2A\u7CFB\u7EDF\u662F\u901A\u8FC7\u7EC4\u4EF6\u7EC4\u5408\u8D77\u6765\u7684\uFF0C\u5728\u51FA\u73B0\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7528\u6392\u9664\u6CD5\u76F4\u63A5\u79FB\u9664\u7EC4\u4EF6\uFF0C\u6216\u8005\u6839\u636E\u62A5\u9519\u7684\u7EC4\u4EF6\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\uFF0C\u4E4B\u6240\u4EE5\u80FD\u591F\u5FEB\u901F\u5B9A\u4F4D\uFF0C\u662F\u56E0\u4E3A\u6BCF\u4E2A\u7EC4\u4EF6\u4E4B\u95F4\u4F4E\u8026\u5408\uFF0C\u804C\u8D23\u5355\u4E00\uFF0C\u6240\u4EE5\u903B\u8F91\u4F1A\u6BD4\u5206\u6790\u6574\u4E2A\u7CFB\u7EDF\u8981\u7B80\u5355</li><li>\u63D0\u9AD8\u53EF\u7EF4\u62A4\u6027\uFF0C\u7531\u4E8E\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u804C\u8D23\u5355\u4E00\uFF0C\u5E76\u4E14\u7EC4\u4EF6\u5728\u7CFB\u7EDF\u4E2D\u662F\u88AB\u590D\u7528\u7684\uFF0C\u6240\u4EE5\u5BF9\u4EE3\u7801\u8FDB\u884C\u4F18\u5316\u53EF\u83B7\u5F97\u7CFB\u7EDF\u7684\u6574\u4F53\u5347\u7EA7</li></ul><h2 id="\u4E8C\u3001\u5982\u4F55\u6784\u5EFA" tabindex="-1">\u4E8C\u3001\u5982\u4F55\u6784\u5EFA <a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u6784\u5EFA" aria-hidden="true">#</a></h2><p>\u5728React\u76EE\u524D\u6765\u8BB2\uFF0C\u7EC4\u4EF6\u7684\u521B\u5EFA\u4E3B\u8981\u5206\u6210\u4E86\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u51FD\u6570\u5F0F\u521B\u5EFA</li><li>\u901A\u8FC7 React.createClass \u65B9\u6CD5\u521B\u5EFA</li><li>\u7EE7\u627F React.Component \u521B\u5EFA</li></ul><h3 id="\u51FD\u6570\u5F0F\u521B\u5EFA" tabindex="-1">\u51FD\u6570\u5F0F\u521B\u5EFA <a class="header-anchor" href="#\u51FD\u6570\u5F0F\u521B\u5EFA" aria-hidden="true">#</a></h3><p>\u5728React Hooks\u51FA\u6765\u4E4B\u524D\uFF0C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u53EF\u4EE5\u89C6\u4E3A\u65E0\u72B6\u6001\u7EC4\u4EF6\uFF0C\u53EA\u8D1F\u8D23\u6839\u636E\u4F20\u5165\u7684props\u6765\u5C55\u793A\u89C6\u56FE\uFF0C\u4E0D\u6D89\u53CA\u5BF9state\u72B6\u6001\u7684\u64CD\u4F5C</p><p>\u5927\u591A\u6570\u7EC4\u4EF6\u53EF\u4EE5\u5199\u4E3A\u65E0\u72B6\u6001\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u7B80\u5355\u7EC4\u5408\u6784\u5EFA\u5176\u4ED6\u7EC4\u4EF6</p><p>\u5728React\u4E2D\uFF0C\u901A\u8FC7\u51FD\u6570\u7B80\u5355\u521B\u5EFA\u7EC4\u4EF6\u7684\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HelloComponent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* context */</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u901A\u8FC7-react-createclass-\u65B9\u6CD5\u521B\u5EFA" tabindex="-1">\u901A\u8FC7 React.createClass \u65B9\u6CD5\u521B\u5EFA <a class="header-anchor" href="#\u901A\u8FC7-react-createclass-\u65B9\u6CD5\u521B\u5EFA" aria-hidden="true">#</a></h3><p>React.createClass\u662Freact\u521A\u5F00\u59CB\u63A8\u8350\u7684\u521B\u5EFA\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u76EE\u524D\u8FD9\u79CD\u521B\u5EFA\u65B9\u5F0F\u5DF2\u7ECF\u4E0D\u600E\u4E48\u7528\u4E86</p><p>\u50CF\u4E0A\u8FF0\u901A\u8FC7\u51FD\u6570\u5F0F\u521B\u5EFA\u7684\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u6700\u7EC8\u4F1A\u901A\u8FC7babel\u8F6C\u5316\u6210React.createClass\u8FD9\u79CD\u5F62\u5F0F\uFF0C\u8F6C\u5316\u6210\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HelloComponent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* context */</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7531\u4E8E\u4E0A\u8FF0\u7684\u7F16\u5199\u65B9\u5F0F\u8FC7\u4E8E\u5197\u6742\uFF0C\u76EE\u524D\u57FA\u672C\u4E0A\u4E0D\u4F7F\u7528\u4E0A</p><h3 id="\u7EE7\u627F-react-component-\u521B\u5EFA" tabindex="-1">\u7EE7\u627F React.Component \u521B\u5EFA <a class="header-anchor" href="#\u7EE7\u627F-react-component-\u521B\u5EFA" aria-hidden="true">#</a></h3><p>\u540C\u6837\u5728react hooks\u51FA\u6765\u4E4B\u524D\uFF0C\u6709\u72B6\u6001\u7684\u7EC4\u4EF6\u53EA\u80FD\u901A\u8FC7\u7EE7\u627FReact.Component\u8FD9\u79CD\u5F62\u5F0F\u8FDB\u884C\u521B\u5EFA</p><p>\u6709\u72B6\u6001\u7684\u7EC4\u4EF6\u4E5F\u5C31\u662F\u7EC4\u4EF6\u5185\u90E8\u5B58\u5728\u7EF4\u62A4\u7684\u6570\u636E\uFF0C\u5728\u7C7B\u521B\u5EFA\u7684\u65B9\u5F0F\u4E2D\u901A\u8FC7this.state\u8FDB\u884C\u8BBF\u95EE</p><p>\u5F53\u8C03\u7528this.setState\u4FEE\u6539\u7EC4\u4EF6\u7684\u72B6\u6001\u65F6\uFF0C\u7EC4\u4EF7\u4F1A\u518D\u6B21\u4F1A\u8C03\u7528render()\u65B9\u6CD5\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3</p><p>\u901A\u8FC7\u7EE7\u627FReact.Component\u521B\u5EFA\u4E00\u4E2A\u65F6\u949F\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Timer</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> seconds</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tick</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      seconds</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seconds</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentDidMount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">interval</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">tick</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentWillUnmount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">clearInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">interval</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Seconds: </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seconds</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1">\u4E09\u3001\u533A\u522B <a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a></h2><p>\u7531\u4E8EReact.createClass\u521B\u5EFA\u7684\u65B9\u5F0F\u8FC7\u4E8E\u5197\u6742\uFF0C\u5E76\u4E0D\u5EFA\u8BAE\u4F7F\u7528</p><p>\u800C\u50CF\u51FD\u6570\u5F0F\u521B\u5EFA\u548C\u7C7B\u7EC4\u4EF6\u521B\u5EFA\u7684\u533A\u522B\u4E3B\u8981\u5728\u4E8E\u9700\u8981\u521B\u5EFA\u7684\u7EC4\u4EF6\u662F\u5426\u9700\u8981\u4E3A\u6709\u72B6\u6001\u7EC4\u4EF6\uFF1A</p><ul><li><p>\u5BF9\u4E8E\u4E00\u4E9B\u65E0\u72B6\u6001\u7684\u7EC4\u4EF6\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u51FD\u6570\u5F0F\u521B\u5EFA\u7684\u65B9\u5F0F</p></li><li><p>\u7531\u4E8Ereact hooks\u7684\u51FA\u73B0\uFF0C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u521B\u5EFA\u7684\u7EC4\u4EF6\u901A\u8FC7\u4F7F\u7528hooks\u65B9\u6CD5\u4E5F\u80FD\u4F7F\u4E4B\u6210\u4E3A\u6709\u72B6\u6001\u7EC4\u4EF6\uFF0C\u518D\u52A0\u4E0A\u76EE\u524D\u63A8\u5D07\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5EFA\u8BAE\u90FD\u4F7F\u7528\u51FD\u6570\u5F0F\u7684\u65B9\u5F0F\u6765\u521B\u5EFA\u7EC4\u4EF6</p></li><li><p>\u5728\u8003\u8651\u7EC4\u4EF6\u7684\u9009\u62E9\u539F\u5219\u4E0A\uFF0C\u80FD\u7528\u65E0\u72B6\u6001\u7EC4\u4EF6\u5219\u7528\u65E0\u72B6\u6001\u7EC4\u4EF6</p></li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://react.docschina.org/" target="_blank" rel="noreferrer">https://react.docschina.org/</a></li></ul>`,30);function y(D,i,C,A,d,h){const s=e("font");return t(),n("div",null,[l(s,{style:{"font-size":"36px"}},{default:p(()=>[c("React\u6784\u5EFA\u7EC4\u4EF6\u7684\u65B9\u5F0F\u53CA\u5176\u533A\u522B")]),_:1}),F])}const m=a(r,[["render",y]]);export{_ as __pageData,m as default};
