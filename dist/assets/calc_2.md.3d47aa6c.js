import{_ as n,c as a,a as l,w as p,b as o,r as e,o as t,e as c}from"./app.2fffb4bb.js";const r="/dist/assets/calc1-3.d20b9814.png",_=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u524D\u8A00","slug":"\u4E00\u3001\u524D\u8A00","link":"#\u4E00\u3001\u524D\u8A00","children":[]},{"level":2,"title":"\u4E8C\u3001\u65F6\u95F4\u590D\u6742\u5EA6","slug":"\u4E8C\u3001\u65F6\u95F4\u590D\u6742\u5EA6","link":"#\u4E8C\u3001\u65F6\u95F4\u590D\u6742\u5EA6","children":[]},{"level":2,"title":"\u4E09\u3001\u7A7A\u95F4\u590D\u6742\u5EA6","slug":"\u4E09\u3001\u7A7A\u95F4\u590D\u6742\u5EA6","link":"#\u4E09\u3001\u7A7A\u95F4\u590D\u6742\u5EA6","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"calc/2.md"}'),y={name:"calc/2.md"},F=o('<h2 id="\u4E00\u3001\u524D\u8A00" tabindex="-1">\u4E00\u3001\u524D\u8A00 <a class="header-anchor" href="#\u4E00\u3001\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u7B97\u6CD5\uFF08Algorithm\uFF09\u662F\u6307\u7528\u6765\u64CD\u4F5C\u6570\u636E\u3001\u89E3\u51B3\u7A0B\u5E8F\u95EE\u9898\u7684\u4E00\u7EC4\u65B9\u6CD5\u3002\u5BF9\u4E8E\u540C\u4E00\u4E2A\u95EE\u9898\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u7B97\u6CD5\uFF0C\u4E5F\u8BB8\u6700\u7EC8\u5F97\u5230\u7684\u7ED3\u679C\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u5728\u8FC7\u7A0B\u4E2D\u6D88\u8017\u7684\u8D44\u6E90\u548C\u65F6\u95F4\u5374\u4F1A\u6709\u5F88\u5927\u7684\u533A\u522B</p><p>\u8861\u91CF\u4E0D\u540C\u7B97\u6CD5\u4E4B\u95F4\u7684\u4F18\u52A3\u4E3B\u8981\u662F\u901A\u8FC7\u65F6\u95F4\u548C\u7A7A\u95F4\u4E24\u4E2A\u7EF4\u5EA6\u53BB\u8003\u91CF\uFF1A</p><ul><li>\u65F6\u95F4\u7EF4\u5EA6\uFF1A\u662F\u6307\u6267\u884C\u5F53\u524D\u7B97\u6CD5\u6240\u6D88\u8017\u7684\u65F6\u95F4\uFF0C\u6211\u4EEC\u901A\u5E38\u7528\u300C\u65F6\u95F4\u590D\u6742\u5EA6\u300D\u6765\u63CF\u8FF0\u3002</li><li>\u7A7A\u95F4\u7EF4\u5EA6\uFF1A\u662F\u6307\u6267\u884C\u5F53\u524D\u7B97\u6CD5\u9700\u8981\u5360\u7528\u591A\u5C11\u5185\u5B58\u7A7A\u95F4\uFF0C\u6211\u4EEC\u901A\u5E38\u7528\u300C\u7A7A\u95F4\u590D\u6742\u5EA6\u300D\u6765\u63CF\u8FF0</li><li>\u901A\u5E38\u4F1A\u9047\u5230\u4E00\u79CD\u60C5\u51B5\uFF0C\u65F6\u95F4\u548C\u7A7A\u95F4\u7EF4\u5EA6\u4E0D\u80FD\u591F\u517C\u987E\uFF0C\u9700\u8981\u5728\u4E24\u8005\u4E4B\u95F4\u53D6\u5F97\u4E00\u4E2A\u5E73\u8861\u70B9\u662F\u6211\u4EEC\u9700\u8981\u8003\u8651\u7684</li></ul><p>\u4E00\u4E2A\u7B97\u6CD5\u901A\u5E38\u5B58\u5728\u6700\u597D\u3001\u5E73\u5747\u3001\u6700\u574F\u4E09\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u4E00\u822C\u5173\u6CE8\u7684\u662F\u6700\u574F\u60C5\u51B5</p><p>\u6700\u574F\u60C5\u51B5\u662F\u7B97\u6CD5\u8FD0\u884C\u65F6\u95F4\u7684\u4E0A\u754C\uFF0C\u5BF9\u4E8E\u67D0\u4E9B\u7B97\u6CD5\u6765\u8BF4\uFF0C\u6700\u574F\u60C5\u51B5\u51FA\u73B0\u7684\u6BD4\u8F83\u9891\u7E41\uFF0C\u4E5F\u610F\u5473\u7740\u5E73\u5747\u60C5\u51B5\u548C\u6700\u574F\u60C5\u51B5\u4E00\u6837\u5DEE</p><h2 id="\u4E8C\u3001\u65F6\u95F4\u590D\u6742\u5EA6" tabindex="-1">\u4E8C\u3001\u65F6\u95F4\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u4E8C\u3001\u65F6\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a></h2><p>\u65F6\u95F4\u590D\u6742\u5EA6\u662F\u6307\u6267\u884C\u8FD9\u4E2A\u7B97\u6CD5\u6240\u9700\u8981\u7684\u8BA1\u7B97\u5DE5\u4F5C\u91CF\uFF0C\u5176\u590D\u6742\u5EA6\u53CD\u6620\u4E86\u7A0B\u5E8F\u6267\u884C\u65F6\u95F4\u300C\u968F\u8F93\u5165\u89C4\u6A21\u589E\u957F\u800C\u589E\u957F\u7684\u91CF\u7EA7\u300D\uFF0C\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u80FD\u5F88\u597D\u5730\u53CD\u6620\u51FA\u7B97\u6CD5\u7684\u4F18\u52A3\u4E0E\u5426</p><p>\u4E00\u4E2A\u7B97\u6CD5\u82B1\u8D39\u7684\u65F6\u95F4\u4E0E\u7B97\u6CD5\u4E2D\u8BED\u53E5\u7684\u300C\u6267\u884C\u6B21\u6570\u6210\u6B63\u6BD4\u300D\uFF0C\u6267\u884C\u6B21\u6570\u8D8A\u591A\uFF0C\u82B1\u8D39\u7684\u65F6\u95F4\u5C31\u8D8A\u591A</p><p>\u7B97\u6CD5\u7684\u590D\u6742\u5EA6\u901A\u5E38\u7528\u5927O\u7B26\u53F7\u8868\u8FF0\uFF0C\u5B9A\u4E49\u4E3AT(n) = O(f(n))\uFF0C\u5E38\u89C1\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u6709\uFF1AO(1)\u5E38\u6570\u578B\u3001O(log n)\u5BF9\u6570\u578B\u3001O(n)\u7EBF\u6027\u578B\u3001O(nlogn)\u7EBF\u6027\u5BF9\u6570\u578B\u3001O(n^2)\u5E73\u65B9\u578B\u3001O(n^3)\u7ACB\u65B9\u578B\u3001O(n^k)k\u6B21\u65B9\u578B\u3001O(2^n)\u6307\u6570\u578B\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><img src="'+r+`"><p>\u4ECE\u4E0A\u8FF0\u53EF\u4EE5\u770B\u5230\uFF0C\u968F\u7740\u95EE\u9898\u89C4\u6A21n\u7684\u4E0D\u65AD\u589E\u5927\uFF0C\u4E0A\u8FF0\u65F6\u95F4\u590D\u6742\u5EA6\u4E0D\u65AD\u589E\u5927\uFF0C\u7B97\u6CD5\u7684\u6267\u884C\u6548\u7387\u8D8A\u4F4E\uFF0C\u7531\u5C0F\u5230\u5927\u6392\u5E8F\u5982\u4E0B\uFF1A</p><p>\u039F(1)\uFF1C\u039F(log n)\uFF1C\u039F(n)\uFF1C\u039F(nlog n)\uFF1C\u039F(n2)\uFF1C\u039F(n3)\uFF1C\u2026\uFF1C\u039F(2^n)\uFF1C\u039F(n!) \u6CE8\u610F\u7684\u662F\uFF0C\u7B97\u6CD5\u590D\u6742\u5EA6\u53EA\u662F\u63CF\u8FF0\u7B97\u6CD5\u7684\u589E\u957F\u8D8B\u52BF\uFF0C\u5E76\u4E0D\u80FD\u8BF4\u4E00\u4E2A\u7B97\u6CD5\u4E00\u5B9A\u6BD4\u53E6\u5916\u4E00\u4E2A\u7B97\u6CD5\u9AD8\u6548\uFF0C\u5982\u679C\u5E38\u6570\u9879\u8FC7\u5927\u7684\u65F6\u5019\u4E5F\u4F1A\u5BFC\u81F4\u7B97\u6CD5\u7684\u6267\u884C\u65F6\u95F4\u53D8\u957F</p><p>\u5173\u4E8E\u5982\u4F55\u8BA1\u7B97\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u53EF\u4EE5\u770B\u770B\u5982\u4E0B\u7B80\u5355\u4F8B\u5B50\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">process</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8BE5\u51FD\u6570\u7B97\u6CD5\u9700\u8981\u6267\u884C\u7684\u8FD0\u7B97\u6B21\u6570\u7528\u8F93\u5165\u5927\u5C0Fn\u7684\u51FD\u6570\u8868\u793A\uFF0C\u5373 T(n) = 2 + n + 1\uFF0C\u90A3\u4E48\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(n + 3)\uFF0C\u53C8\u56E0\u4E3A\u65F6\u95F4\u590D\u6742\u5EA6\u53EA\u5173\u6CE8\u6700\u9AD8\u6570\u91CF\u7EA7\uFF0C\u4E14\u4E0E\u4E4B\u7CFB\u6570\u4E5F\u6CA1\u6709\u5173\u7CFB\uFF0C\u56E0\u6B64\u4E0A\u8FF0\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(n)</p><p>\u53C8\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">process</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5FAA\u73AF\u91CC\u9762\u5D4C\u5957\u5FAA\u73AF\uFF0C\u5916\u9762\u7684\u5FAA\u73AF\u6267\u884C\u4E00\u6B21\uFF0C\u91CC\u9762\u7684\u5FAA\u73AF\u6267\u884Cn\u6B21\uFF0C\u56E0\u6B64\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n<em>n</em>1 + 2) = O(n^2)</p><p>\u5BF9\u4E8E\u987A\u5E8F\u6267\u884C\u7684\u8BED\u53E5\uFF0C\u603B\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u7B49\u4E8E\u5176\u4E2D\u6700\u5927\u7684\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">process</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u7B2C\u4E00\u90E8\u5206\u590D\u6742\u5EA6\u4E3AO(n)\uFF0C\u7B2C\u4E8C\u90E8\u5206\u590D\u6742\u5EA6\u4E3AO(n^2)\uFF0C\u603B\u590D\u6742\u5EA6\u4E3Amax(O(n^2), O(n)) = O(n^2)</p><p>\u53C8\u5982\u4E0B\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">process</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u2460</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u2461</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5FAA\u73AF\u8BED\u53E5\u4E2D\u4EE52\u7684\u500D\u6570\u6765\u903C\u8FD1n\uFF0C\u6BCF\u6B21\u90FD\u4E58\u4EE52\u3002\u5982\u679C\u7528\u516C\u5F0F\u8868\u793A\u5C31\u662F1 * 2 * 2 * 2 \u2026 * 2 &lt;=n\uFF0C\u4E5F\u5C31\u662F\u8BF42\u7684x\u6B21\u65B9\u5C0F\u4E8E\u7B49\u4E8En\u65F6\u4F1A\u6267\u884C\u5FAA\u73AF\u4F53\uFF0C\u8BB0\u4F5C2^x &lt;= n\uFF0C\u4E8E\u662F\u5F97\u51FAx&lt;=logn</p><p>\u56E0\u6B64\u5FAA\u73AF\u5728\u6267\u884Clogn\u6B21\u4E4B\u540E\uFF0C\u4FBF\u7ED3\u675F\uFF0C\u56E0\u6B64\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(logn)</p><p>\u540C\u7406\uFF0C\u5982\u679C\u4E00\u4E2AO(n)\u5FAA\u73AF\u91CC\u9762\u5D4C\u5957O(logn)\u7684\u5FAA\u73AF\uFF0C\u5219\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(nlogn)\uFF0C\u50CFO(n^3)\u65E0\u975E\u4E5F\u5C31\u662F\u5D4C\u5957\u4E86\u4E09\u5C42O(n)\u5FAA\u73AF</p><h2 id="\u4E09\u3001\u7A7A\u95F4\u590D\u6742\u5EA6" tabindex="-1">\u4E09\u3001\u7A7A\u95F4\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u4E09\u3001\u7A7A\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a></h2><p>\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3B\u8981\u6307\u6267\u884C\u7B97\u6CD5\u6240\u9700\u5185\u5B58\u7684\u5927\u5C0F\uFF0C\u7528\u4E8E\u5BF9\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u6240\u9700\u8981\u7684\u4E34\u65F6\u5B58\u50A8\u7A7A\u95F4\u7684\u5EA6\u91CF</p><p>\u9664\u4E86\u9700\u8981\u5B58\u50A8\u7A7A\u95F4\u3001\u6307\u4EE4\u3001\u5E38\u6570\u3001\u53D8\u91CF\u548C\u8F93\u5165\u6570\u636E\u5916\uFF0C\u8FD8\u5305\u62EC\u5BF9\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\u7684\u5DE5\u4F5C\u5355\u5143\u548C\u5B58\u50A8\u8BA1\u7B97\u6240\u9700\u4FE1\u606F\u7684\u8F85\u52A9\u7A7A\u95F4</p><p>\u4E0B\u9762\u7ED9\u51FA\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3AO(1)\u7684\u793A\u4F8B\uFF0C\u5982\u4E0B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7684\u4E34\u65F6\u7A7A\u95F4\u4E0D\u4F1A\u968F\u7740n\u7684\u53D8\u5316\u800C\u53D8\u5316\uFF0C\u56E0\u6B64\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3AO(1)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr []</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;">(i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u53EF\u4EE5\u770B\u5230\uFF0C\u968F\u7740n\u7684\u589E\u52A0\uFF0C\u6570\u7EC4\u7684\u5360\u7528\u7684\u5185\u5B58\u7A7A\u95F4\u8D8A\u5927</p><p>\u901A\u5E38\u6765\u8BF4\uFF0C\u53EA\u8981\u7B97\u6CD5\u4E0D\u6D89\u53CA\u5230\u52A8\u6001\u5206\u914D\u7684\u7A7A\u95F4\uFF0C\u4EE5\u53CA\u9012\u5F52\u3001\u6808\u6240\u9700\u7684\u7A7A\u95F4\uFF0C\u7A7A\u95F4\u590D\u6742\u5EA6\u901A\u5E38\u4E3AO(1)\uFF0C\u4E00\u4E2A\u4E00\u7EF4\u6570\u7EC4a[n]\uFF0C\u7A7A\u95F4\u590D\u6742\u5EA6O(n)\uFF0C\u4E8C\u7EF4\u6570\u7EC4\u4E3AO(n^2)</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844904167824162823#heading-7" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904167824162823#heading-7</a></li><li><a href="https://zhuanlan.zhihu.com/p/50479555" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/50479555</a></li><li><a href="https://cloud.tencent.com/developer/article/1769988" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1769988</a></li></ul>`,38);function D(C,A,i,d,u,h){const s=e("font");return t(),a("div",null,[l(s,{style:{"font-size":"36px"}},{default:p(()=>[c("\u7B97\u6CD5\u65F6\u95F4\u590D\u6742\u5EA6\u548C\u7A7A\u95F4\u590D\u6742\u5EA6\u7684\u7406\u89E3\uFF0C\u5982\u4F55\u8BA1\u7B97\u5462\uFF1F")]),_:1}),F])}const f=n(y,[["render",D]]);export{_ as __pageData,f as default};
