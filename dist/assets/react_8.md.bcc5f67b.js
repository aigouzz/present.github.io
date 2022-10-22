import{_ as n,c as a,a as l,w as p,b as o,r as e,o as t,e as c}from"./app.2fffb4bb.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u5982\u4F55\u7ED1\u5B9A","slug":"\u4E8C\u3001\u5982\u4F55\u7ED1\u5B9A","link":"#\u4E8C\u3001\u5982\u4F55\u7ED1\u5B9A","children":[{"level":3,"title":"render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind","slug":"render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind","link":"#render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind","children":[]},{"level":3,"title":"render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570","slug":"render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570","link":"#render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570","children":[]},{"level":3,"title":"constructor\u4E2Dbind","slug":"constructor\u4E2Dbind","link":"#constructor\u4E2Dbind","children":[]},{"level":3,"title":"\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A","slug":"\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A","link":"#\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A","children":[]}]},{"level":2,"title":"\u4E09\u3001\u533A\u522B","slug":"\u4E09\u3001\u533A\u522B","link":"#\u4E09\u3001\u533A\u522B","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"react/8.md"}'),r={name:"react/8.md"},F=o(`<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u5728react\u5E94\u7528\u4E2D\uFF0C\u4E8B\u4EF6\u540D\u90FD\u662F\u7528\u5C0F\u9A7C\u5CF0\u683C\u5F0F\u8FDB\u884C\u4E66\u5199\uFF0C\u4F8B\u5982onclick\u8981\u6539\u5199\u6210onClick</p><p>\u6700\u7B80\u5355\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ShowAlert</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">showAlert</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">showAlert</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">show</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u65B9\u6CD5\u9700\u8981\u4F7F\u7528{}\u5305\u4F4F</p><p>\u4E0A\u8FF0\u7684\u4EE3\u7801\u770B\u4F3C\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u5F53\u5C06\u5904\u7406\u51FD\u6570\u8F93\u51FA\u4EE3\u7801\u6362\u6210console.log(this)\u7684\u65F6\u5019\uFF0C\u70B9\u51FB\u6309\u94AE\uFF0C\u5219\u4F1A\u53D1\u73B0\u63A7\u5236\u53F0\u8F93\u51FAundefined</p><h2 id="\u4E8C\u3001\u5982\u4F55\u7ED1\u5B9A" tabindex="-1">\u4E8C\u3001\u5982\u4F55\u7ED1\u5B9A <a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u7ED1\u5B9A" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u89E3\u51B3\u4E0A\u9762\u6B63\u786E\u8F93\u51FAthis\u7684\u95EE\u9898\uFF0C\u5E38\u89C1\u7684\u7ED1\u5B9A\u65B9\u5F0F\u6709\u5982\u4E0B\uFF1A</p><ul><li>render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind</li><li>render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</li><li>constructor\u4E2Dbind</li><li>\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A</li></ul><h3 id="render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind" tabindex="-1">render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind <a class="header-anchor" href="#render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F7F\u7528\u4E00\u4E2A\u7C7B\u7EC4\u4EF6\uFF0C\u5728\u5176\u4E2D\u7ED9\u67D0\u4E2A\u7EC4\u4EF6/\u5143\u7D20\u4E00\u4E2AonClick\u5C5E\u6027\uFF0C\u5B83\u73B0\u5728\u5E76\u4F1A\u81EA\u5B9A\u7ED1\u5B9A\u5176this\u5230\u5F53\u524D\u7EC4\u4EF6\uFF0C\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u65B9\u6CD5\u662F\u5728\u4E8B\u4EF6\u51FD\u6570\u540E\u4F7F\u7528.bind(this)\u5C06this\u7ED1\u5B9A\u5230\u5F53\u524D\u7EC4\u4EF6\u4E2D</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleClick</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this &gt; </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u79CD\u65B9\u5F0F\u5728\u7EC4\u4EF6\u6BCF\u6B21render\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u91CD\u65B0\u8FDB\u884Cbind\u7684\u64CD\u4F5C\uFF0C\u5F71\u54CD\u6027\u80FD</p><h3 id="render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570" tabindex="-1">render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570 <a class="header-anchor" href="#render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u901A\u8FC7ES6\u7684\u4E0A\u4E0B\u6587\u6765\u5C06this\u7684\u6307\u5411\u7ED1\u5B9A\u7ED9\u5F53\u524D\u7EC4\u4EF6\uFF0C\u540C\u6837\u518D\u6BCF\u4E00\u6B21render\u7684\u65F6\u5019\u90FD\u4F1A\u751F\u6210\u65B0\u7684\u65B9\u6CD5\uFF0C\u5F71\u54CD\u6027\u80FD</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleClick</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this &gt; </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">handleClick</span><span style="color:#A6ACCD;">(e)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="constructor\u4E2Dbind" tabindex="-1">constructor\u4E2Dbind <a class="header-anchor" href="#constructor\u4E2Dbind" aria-hidden="true">#</a></h3><p>\u5728constructor\u4E2D\u9884\u5148bind\u5F53\u524D\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u907F\u514D\u5728render\u64CD\u4F5C\u4E2D\u91CD\u590D\u7ED1\u5B9A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleClick</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this &gt; </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A" tabindex="-1">\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A <a class="header-anchor" href="#\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A" aria-hidden="true">#</a></h3><p>\u8DDF\u4E0A\u8FF0\u65B9\u5F0F\u4E09\u4E00\u6837\uFF0C\u80FD\u591F\u907F\u514D\u5728render\u64CD\u4F5C\u4E2D\u91CD\u590D\u7ED1\u5B9A\uFF0C\u5B9E\u73B0\u4E5F\u975E\u5E38\u7684\u7B80\u5355\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleClick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">log(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this &gt; </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1">\u4E09\u3001\u533A\u522B <a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a></h2><p>\u4E0A\u8FF0\u56DB\u79CD\u65B9\u6CD5\u7684\u65B9\u5F0F\uFF0C\u533A\u522B\u4E3B\u8981\u5982\u4E0B\uFF1A</p><ul><li>\u7F16\u5199\u65B9\u9762\uFF1A\u65B9\u5F0F\u4E00\u3001\u65B9\u5F0F\u4E8C\u5199\u6CD5\u7B80\u5355\uFF0C\u65B9\u5F0F\u4E09\u7684\u7F16\u5199\u8FC7\u4E8E\u5197\u6742</li><li>\u6027\u80FD\u65B9\u9762\uFF1A\u65B9\u5F0F\u4E00\u548C\u65B9\u5F0F\u4E8C\u5728\u6BCF\u6B21\u7EC4\u4EF6render\u7684\u65F6\u5019\u90FD\u4F1A\u751F\u6210\u65B0\u7684\u65B9\u6CD5\u5B9E\u4F8B\uFF0C\u6027\u80FD\u95EE\u9898\u6B20\u7F3A\u3002\u82E5\u8BE5\u51FD\u6570\u4F5C\u4E3A\u5C5E\u6027\u503C\u4F20\u7ED9\u5B50\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u5BFC\u81F4\u989D\u5916\u7684\u6E32\u67D3\u3002\u800C\u65B9\u5F0F\u4E09\u3001\u65B9\u5F0F\u56DB\u53EA\u4F1A\u751F\u6210\u4E00\u4E2A\u65B9\u6CD5\u5B9E\u4F8B</li><li>\u7EFC\u5408\u4E0A\u8FF0\uFF0C\u65B9\u5F0F\u56DB\u662F\u6700\u4F18\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://segmentfault.com/a/1190000011317515" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000011317515</a></li></ul>`,27);function y(D,i,C,A,d,h){const s=e("font");return t(),a("div",null,[l(s,{style:{"font-size":"36px"}},{default:p(()=>[c("React\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6709\u4EC0\u4E48\uFF0C\u533A\u522B")]),_:1}),F])}const b=n(r,[["render",y]]);export{g as __pageData,b as default};
