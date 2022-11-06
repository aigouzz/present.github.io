import{_ as n,c as a,a as l,w as p,b as o,r as e,o as t,e as c}from"./app.f6f71376.js";const r="/dist/assets/js16-1.26c61844.png",h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u6D41\u7A0B","slug":"\u4E8C\u3001\u6D41\u7A0B","link":"#\u4E8C\u3001\u6D41\u7A0B","children":[]},{"level":2,"title":"\u4E09\u3001\u624B\u5199new\u64CD\u4F5C\u7B26","slug":"\u4E09\u3001\u624B\u5199new\u64CD\u4F5C\u7B26","link":"#\u4E09\u3001\u624B\u5199new\u64CD\u4F5C\u7B26","children":[]}],"relativePath":"js/16.md"}'),y={name:"js/16.md"},F=o(`<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u5728JavaScript\u4E2D\uFF0Cnew\u64CD\u4F5C\u7B26\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u7ED9\u5B9A\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u5BF9\u8C61</p><p>\u4F8B\u5B50</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> person1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person1)  </span><span style="color:#676E95;">// Person {name: &quot;Tom&quot;, age: 20}</span></span>
<span class="line"><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayName</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">// &#39;Tom&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF1A</p><ul><li>new \u901A\u8FC7\u6784\u9020\u51FD\u6570 Person \u521B\u5EFA\u51FA\u6765\u7684\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u4E2D\u7684\u5C5E\u6027</li><li>new \u901A\u8FC7\u6784\u9020\u51FD\u6570 Person \u521B\u5EFA\u51FA\u6765\u7684\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u539F\u578B\u94FE\u4E2D\u7684\u5C5E\u6027\uFF08\u5373\u5B9E\u4F8B\u4E0E\u6784\u9020\u51FD\u6570\u901A\u8FC7\u539F\u578B\u94FE\u8FDE\u63A5\u4E86\u8D77\u6765\uFF09</li><li>\u73B0\u5728\u5728\u6784\u5EFA\u51FD\u6570\u4E2D\u663E\u5F0F\u52A0\u4E0A\u8FD4\u56DE\u503C\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u539F\u59CB\u7C7B\u578B</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(t</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name) </span><span style="color:#676E95;">// &#39;xxx&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6784\u9020\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u539F\u59CB\u503C\uFF0C\u7136\u800C\u8FD9\u4E2A\u8FD4\u56DE\u503C\u5E76\u6CA1\u6709\u4F5C\u7528</p><p>\u4E0B\u9762\u5728\u6784\u9020\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// Test { name: &#39;xxx&#39; }</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">26</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(t) </span><span style="color:#676E95;">// { age: 26 }</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(t</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name) </span><span style="color:#676E95;">// &#39;undefined&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6784\u9020\u51FD\u6570\u5982\u679C\u8FD4\u56DE\u503C\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8FD4\u56DE\u503C\u4F1A\u88AB\u6B63\u5E38\u4F7F\u7528</p><h2 id="\u4E8C\u3001\u6D41\u7A0B" tabindex="-1">\u4E8C\u3001\u6D41\u7A0B <a class="header-anchor" href="#\u4E8C\u3001\u6D41\u7A0B" aria-hidden="true">#</a></h2><p>\u4ECE\u4E0A\u9762\u4ECB\u7ECD\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230new\u5173\u952E\u5B57\u4E3B\u8981\u505A\u4E86\u4EE5\u4E0B\u7684\u5DE5\u4F5C\uFF1A</p><ul><li><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61obj</p></li><li><p>\u5C06\u5BF9\u8C61\u4E0E\u6784\u5EFA\u51FD\u6570\u901A\u8FC7\u539F\u578B\u94FE\u8FDE\u63A5\u8D77\u6765</p></li><li><p>\u5C06\u6784\u5EFA\u51FD\u6570\u4E2D\u7684this\u7ED1\u5B9A\u5230\u65B0\u5EFA\u7684\u5BF9\u8C61obj\u4E0A</p></li><li><p>\u6839\u636E\u6784\u5EFA\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B\u4F5C\u5224\u65AD\uFF0C\u5982\u679C\u662F\u539F\u59CB\u503C\u5219\u88AB\u5FFD\u7565\uFF0C\u5982\u679C\u662F\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u9700\u8981\u6B63\u5E38\u5904\u7406</p></li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> person1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person1)  </span><span style="color:#676E95;">// Person {name: &quot;Tom&quot;, age: 20}</span></span>
<span class="line"><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayName</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">// &#39;Tom&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p><img src="`+r+`"><h2 id="\u4E09\u3001\u624B\u5199new\u64CD\u4F5C\u7B26" tabindex="-1">\u4E09\u3001\u624B\u5199new\u64CD\u4F5C\u7B26 <a class="header-anchor" href="#\u4E09\u3001\u624B\u5199new\u64CD\u4F5C\u7B26" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u6211\u4EEC\u5DF2\u7ECF\u6E05\u695A\u5730\u638C\u63E1\u4E86new\u7684\u6267\u884C\u8FC7\u7A0B</p><p>\u90A3\u4E48\u6211\u4EEC\u5C31\u52A8\u624B\u6765\u5B9E\u73B0\u4E00\u4E0Bnew</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mynew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Func</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// 1.\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// 2.\u65B0\u5BF9\u8C61\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u539F\u578B\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Func</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// 3.\u5C06\u6784\u5EFA\u51FD\u6570\u7684this\u6307\u5411\u65B0\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Func</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// 4.\u6839\u636E\u8FD4\u56DE\u503C\u5224\u65AD</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6D4B\u8BD5\u4E00\u4E0B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mynew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">func</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mynew</span><span style="color:#A6ACCD;">(Person</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">huihui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(p) </span><span style="color:#676E95;">// Person {name: &quot;huihui&quot;, age: 123}</span></span>
<span class="line"><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">// huihui</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u53D1\u73B0\uFF0C\u4EE3\u7801\u867D\u7136\u5F88\u77ED\uFF0C\u4F46\u662F\u80FD\u591F\u6A21\u62DF\u5B9E\u73B0new</p>`,25);function D(A,C,i,u,d,g){const s=e("font");return t(),a("div",null,[l(s,{style:{"font-size":"36px"}},{default:p(()=>[c("new\u64CD\u4F5C\u7B26")]),_:1}),F])}const E=n(y,[["render",D]]);export{h as __pageData,E as default};