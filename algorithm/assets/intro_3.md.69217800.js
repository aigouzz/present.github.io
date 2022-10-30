import{_ as n,c as l,b as a,w as p,a as o,r as t,o as e,d as r}from"./app.bff3aa87.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00. \u65F6\u95F4\u590D\u6742\u5EA6\u6570\u636E\u89C4\u6A21","slug":"\u4E00-\u65F6\u95F4\u590D\u6742\u5EA6\u6570\u636E\u89C4\u6A21","link":"#\u4E00-\u65F6\u95F4\u590D\u6742\u5EA6\u6570\u636E\u89C4\u6A21","children":[]},{"level":2,"title":"\u4E8C. \u7A7A\u95F4\u590D\u6742\u5EA6","slug":"\u4E8C-\u7A7A\u95F4\u590D\u6742\u5EA6","link":"#\u4E8C-\u7A7A\u95F4\u590D\u6742\u5EA6","children":[]},{"level":2,"title":"\u4E09. \u9012\u5F52\u7684\u65F6\u95F4\u590D\u6742\u5EA6","slug":"\u4E09-\u9012\u5F52\u7684\u65F6\u95F4\u590D\u6742\u5EA6","link":"#\u4E09-\u9012\u5F52\u7684\u65F6\u95F4\u590D\u6742\u5EA6","children":[]},{"level":2,"title":"1. \u53EA\u6709\u4E00\u6B21\u9012\u5F52\u8C03\u7528","slug":"_1-\u53EA\u6709\u4E00\u6B21\u9012\u5F52\u8C03\u7528","link":"#_1-\u53EA\u6709\u4E00\u6B21\u9012\u5F52\u8C03\u7528","children":[]},{"level":2,"title":"2. \u53EA\u6709\u591A\u6B21\u9012\u5F52\u8C03\u7528","slug":"_2-\u53EA\u6709\u591A\u6B21\u9012\u5F52\u8C03\u7528","link":"#_2-\u53EA\u6709\u591A\u6B21\u9012\u5F52\u8C03\u7528","children":[]}],"relativePath":"intro/3.md"}'),c={name:"intro/3.md"},y=o(`<h2 id="\u4E00-\u65F6\u95F4\u590D\u6742\u5EA6\u6570\u636E\u89C4\u6A21" tabindex="-1">\u4E00. \u65F6\u95F4\u590D\u6742\u5EA6\u6570\u636E\u89C4\u6A21 <a class="header-anchor" href="#\u4E00-\u65F6\u95F4\u590D\u6742\u5EA6\u6570\u636E\u89C4\u6A21" aria-hidden="true">#</a></h2><p>1s \u5185\u80FD\u89E3\u51B3\u95EE\u9898\u7684\u6570\u636E\u89C4\u6A21\uFF1A10^6 ~ 10^7</p><ul><li>O(n^2) \u7B97\u6CD5\u53EF\u4EE5\u5904\u7406 10^4 \u7EA7\u522B\u7684\u6570\u636E\u89C4\u6A21(\u4FDD\u5B88\u4F30\u8BA1\uFF0C\u5904\u7406 1000 \u7EA7\u522B\u7684\u95EE\u9898\u80AF\u5B9A\u6CA1\u95EE\u9898)</li><li>O(n) \u7B97\u6CD5\u53EF\u4EE5\u5904\u7406 10^8 \u7EA7\u522B\u7684\u6570\u636E\u89C4\u6A21(\u4FDD\u5B88\u4F30\u8BA1\uFF0C\u5904\u7406 10^7 \u7EA7\u522B\u7684\u95EE\u9898\u80AF\u5B9A\u6CA1\u95EE\u9898)</li><li>O(nlog n) \u7B97\u6CD5\u53EF\u4EE5\u5904\u7406 10^7 \u7EA7\u522B\u7684\u6570\u636E\u89C4\u6A21(\u4FDD\u5B88\u4F30\u8BA1\uFF0C\u5904\u7406 10^6 \u7EA7\u522B\u7684\u95EE\u9898\u80AF\u5B9A\u6CA1\u95EE\u9898)</li></ul><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">\u6570\u636E\u89C4\u6A21</th><th style="text-align:left;">\u65F6\u95F4\u590D\u6742\u5EA6</th><th style="text-align:left;">\u7B97\u6CD5\u4E3E\u4F8B</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">10</td><td style="text-align:left;">O(n!)</td><td style="text-align:left;">permutation \u6392\u5217</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">20~30</td><td style="text-align:left;">O(2^n)</td><td style="text-align:left;">combination \u7EC4\u5408</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">50</td><td style="text-align:left;">O(n^4)</td><td style="text-align:left;">DFS \u641C\u7D22\u3001DP \u52A8\u6001\u89C4\u5212</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">100</td><td style="text-align:left;">O(n^3)</td><td style="text-align:left;">\u4EFB\u610F\u4E24\u70B9\u6700\u77ED\u8DEF\u5F84\u3001DP \u52A8\u6001\u89C4\u5212</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">1000</td><td style="text-align:left;">O(n^2)</td><td style="text-align:left;">\u7A20\u5BC6\u56FE\u3001DP \u52A8\u6001\u89C4\u5212</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">10^6</td><td style="text-align:left;">O(nlog n)</td><td style="text-align:left;">\u6392\u5E8F\uFF0C\u5806\uFF0C\u9012\u5F52\u4E0E\u5206\u6CBB</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">10^7</td><td style="text-align:left;">O(n)</td><td style="text-align:left;">DP \u52A8\u6001\u89C4\u5212\u3001\u56FE\u904D\u5386\u3001\u62D3\u6251\u6392\u5E8F\u3001\u6811\u904D\u5386</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">10^9</td><td style="text-align:left;">O(sqrt(n))</td><td style="text-align:left;">\u7B5B\u7D20\u6570\u3001\u6C42\u5E73\u65B9\u6839</td></tr><tr><td style="text-align:left;">9</td><td style="text-align:left;">10^10</td><td style="text-align:left;">O(log n)</td><td style="text-align:left;">\u4E8C\u5206\u641C\u7D22</td></tr><tr><td style="text-align:left;">10</td><td style="text-align:left;">+\u221E</td><td style="text-align:left;">O(1)</td><td style="text-align:left;">\u6570\u5B66\u76F8\u5173\u7B97\u6CD5</td></tr></tbody></table><p>\u4E00\u4E9B\u5177\u6709\u8FF7\u60D1\u6027\u7684\u4F8B\u5B50\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#A6ACCD;"> (int n)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sz</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sz</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sz</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sz</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">cout</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(nlog n) \u800C\u4E0D\u662F O(n^2)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">bool </span><span style="color:#82AAFF;">isPrime</span><span style="color:#A6ACCD;"> (int n)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(sqrt(n)) \u800C\u4E0D\u662F O(n)\u3002</p><p>\u518D\u4E3E\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u5C06\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5B57\u7B26\u4E32\u6309\u7167\u5B57\u6BCD\u5E8F\u6392\u5E8F\uFF0C\u4E4B\u540E\u518D\u5C06\u6574\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u6309\u7167\u5B57\u5178\u5E8F\u6392\u5E8F\u3002\u4E24\u6B65\u64CD\u4F5C\u7684\u6574\u4F53\u65F6\u95F4\u590D\u6742\u5EA6\u662F\u591A\u5C11\u5462\uFF1F</p><p>\u5982\u679C\u56DE\u7B54\u662F O(n*nlog n + nlog n) = O(n^2log n)\uFF0C\u8FD9\u4E2A\u7B54\u6848\u662F\u9519\u8BEF\u7684\u3002</p><p>\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u548C\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u6CA1\u6709\u5173\u7CFB\u7684\uFF0C\u6240\u4EE5\u8FD9\u4E24\u4E2A\u53D8\u91CF\u5E94\u8BE5\u5355\u72EC\u8BA1\u7B97\u3002\u5047\u8BBE\u6700\u957F\u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u4E3A s\uFF0C\u6570\u7EC4\u4E2D\u6709 n \u4E2A\u5B57\u7B26\u4E32\u3002\u5BF9\u6BCF\u4E2A\u5B57\u7B26\u4E32\u6392\u5E8F\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(slog s)\uFF0C\u5C06\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5B57\u7B26\u4E32\u90FD\u6309\u7167\u5B57\u6BCD\u5E8F\u6392\u5E8F\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(n * slog s)\u3002</p><p>\u5C06\u6574\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u6309\u7167\u5B57\u5178\u5E8F\u6392\u5E8F\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(s * nlog n)\u3002</p><p>\u6392\u5E8F\u7B97\u6CD5\u4E2D\u7684 O(nlog n) \u662F\u6BD4\u8F83\u7684\u6B21\u6570\uFF0C\u7531\u4E8E\u6BD4\u8F83\u7684\u662F\u6574\u578B\u6570\u5B57\uFF0C\u6240\u4EE5\u6BCF\u6B21\u6BD4\u8F83\u662F O(1)\u3002</p><p>\u4F46\u662F\u5B57\u7B26\u4E32\u6309\u7167\u5B57\u5178\u5E8F\u6BD4\u8F83\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(s)\u3002</p><p>\u6240\u4EE5\u5B57\u7B26\u4E32\u6570\u7EC4\u6309\u7167\u5B57\u5178\u5E8F\u6392\u5E8F\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(s * nlog n)\u3002</p><p>\u6240\u4EE5\u6574\u4F53\u590D\u6742\u5EA6\u662F O(n * slog s) + O(s * nlog n) = O(n<em>slog s + s</em>nlogn) = O(n<em>s</em>(log s + log n)) = O(n<em>s</em>log(n*s)\uFF09\u3002</p><h2 id="\u4E8C-\u7A7A\u95F4\u590D\u6742\u5EA6" tabindex="-1">\u4E8C. \u7A7A\u95F4\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u4E8C-\u7A7A\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a></h2><p>\u9012\u5F52\u8C03\u7528\u662F\u6709\u7A7A\u95F4\u4EE3\u4EF7\u7684\uFF0C\u9012\u5F52\u7B97\u6CD5\u9700\u8981\u4FDD\u5B58\u9012\u5F52\u6808\u4FE1\u606F\uFF0C\u6240\u4EE5\u82B1\u8D39\u7684\u7A7A\u95F4\u590D\u6742\u5EA6\u4F1A\u6BD4\u975E\u9012\u5F52\u7B97\u6CD5\u8981\u9AD8\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">int </span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">( int n )</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">assert</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ret</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">ret</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ret</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)\uFF0C\u7A7A\u95F4\u590D\u6742\u5EA6 O(1)\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">int </span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">( int n )</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">assert</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)\uFF0C\u7A7A\u95F4\u590D\u6742\u5EA6 O(n)\u3002</p><h2 id="\u4E09-\u9012\u5F52\u7684\u65F6\u95F4\u590D\u6742\u5EA6" tabindex="-1">\u4E09. \u9012\u5F52\u7684\u65F6\u95F4\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u4E09-\u9012\u5F52\u7684\u65F6\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a></h2><h2 id="_1-\u53EA\u6709\u4E00\u6B21\u9012\u5F52\u8C03\u7528" tabindex="-1">1. \u53EA\u6709\u4E00\u6B21\u9012\u5F52\u8C03\u7528 <a class="header-anchor" href="#_1-\u53EA\u6709\u4E00\u6B21\u9012\u5F52\u8C03\u7528" aria-hidden="true">#</a></h2><p>\u5982\u679C\u9012\u5F52\u51FD\u6570\u4E2D\uFF0C\u53EA\u8FDB\u884C\u4E86\u4E00\u6B21\u9012\u5F52\u8C03\u7528\uFF0C\u4E14\u9012\u5F52\u6DF1\u5EA6\u4E3A depth\uFF0C\u5728\u6BCF\u4E2A\u9012\u5F52\u51FD\u6570\u4E2D\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A T\uFF0C\u90A3\u4E48\u603B\u4F53\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(T * depth)</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">int </span><span style="color:#82AAFF;">binarySearch</span><span style="color:#A6ACCD;">(int arr[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> int l</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> int r</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> int target)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">	    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u9632\u6EA2\u51FA</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">binarySearch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">else</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">binarySearch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u4E8C\u5206\u67E5\u627E\u7684\u9012\u5F52\u5B9E\u73B0\u4E2D\uFF0C\u53EA\u9012\u5F52\u8C03\u7528\u4E86\u81EA\u8EAB\u3002\u9012\u5F52\u6DF1\u5EA6\u662F log n \uFF0C\u6BCF\u6B21\u9012\u5F52\u91CC\u9762\u7684\u590D\u6742\u5EA6\u662F O(1) \u7684\uFF0C\u6240\u4EE5\u4E8C\u5206\u67E5\u627E\u7684\u9012\u5F52\u5B9E\u73B0\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(log n) \u7684\u3002</p><h2 id="_2-\u53EA\u6709\u591A\u6B21\u9012\u5F52\u8C03\u7528" tabindex="-1">2. \u53EA\u6709\u591A\u6B21\u9012\u5F52\u8C03\u7528 <a class="header-anchor" href="#_2-\u53EA\u6709\u591A\u6B21\u9012\u5F52\u8C03\u7528" aria-hidden="true">#</a></h2><p>\u9488\u5BF9\u591A\u6B21\u9012\u5F52\u8C03\u7528\u7684\u60C5\u51B5\uFF0C\u5C31\u9700\u8981\u770B\u5B83\u7684\u8BA1\u7B97\u8C03\u7528\u7684\u6B21\u6570\u4E86\u3002\u901A\u5E38\u53EF\u4EE5\u753B\u4E00\u9897\u9012\u5F52\u6811\u6765\u770B\u3002\u4E3E\u4F8B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">int </span><span style="color:#82AAFF;">f</span><span style="color:#A6ACCD;">(int n)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">assert</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">f</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">f</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u8FD9\u6B21\u9012\u5F52\u8C03\u7528\u7684\u6B21\u6570\u4E3A 2^0^ + 2^1^ + 2^2^ + \u2026\u2026 + 2^n^ = 2^n+1^ - 1 = O(2^n)</p><blockquote><p>\u5173\u4E8E\u66F4\u52A0\u590D\u6742\u7684\u9012\u5F52\u7684\u590D\u6742\u5EA6\u5206\u6790\uFF0C\u8BF7\u53C2\u8003\u4E3B\u5B9A\u7406\u3002\u4E3B\u5B9A\u7406\u4E2D\u9488\u5BF9\u5404\u79CD\u590D\u6742\u60C5\u51B5\u90FD\u7ED9\u51FA\u4E86\u6B63\u786E\u7684\u7ED3\u8BBA\u3002</p></blockquote>`,34);function F(D,C,i,A,d,g){const s=t("font");return e(),l("div",null,[a(s,{style:{"font-size":"36px"}},{default:p(()=>[r("\u65F6\u95F4\u590D\u6742\u5EA6and\u7A7A\u95F4\u590D\u6742\u5EA6")]),_:1}),y])}const u=n(c,[["render",F]]);export{x as __pageData,u as default};