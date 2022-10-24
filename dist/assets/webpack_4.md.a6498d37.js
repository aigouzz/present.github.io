import{_ as n,c as a,a as l,w as p,b as o,r as e,o as c,e as t}from"./app.6f0f475c.js";const r="/dist/assets/webpack4-1.cc665e3a.png",D="/dist/assets/webpack4-2.8f1a077a.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[{"level":3,"title":"\u914D\u7F6E\u65B9\u5F0F","slug":"\u914D\u7F6E\u65B9\u5F0F","link":"#\u914D\u7F6E\u65B9\u5F0F","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u7279\u6027","slug":"\u4E8C\u3001\u7279\u6027","link":"#\u4E8C\u3001\u7279\u6027","children":[]},{"level":2,"title":"\u4E09\u3001\u5E38\u89C1\u7684Plugin","slug":"\u4E09\u3001\u5E38\u89C1\u7684plugin","link":"#\u4E09\u3001\u5E38\u89C1\u7684plugin","children":[{"level":3,"title":"HtmlWebpackPlugin","slug":"htmlwebpackplugin","link":"#htmlwebpackplugin","children":[]},{"level":3,"title":"clean-webpack-plugin","slug":"clean-webpack-plugin","link":"#clean-webpack-plugin","children":[]},{"level":3,"title":"mini-css-extract-plugin","slug":"mini-css-extract-plugin","link":"#mini-css-extract-plugin","children":[]},{"level":3,"title":"DefinePlugin","slug":"defineplugin","link":"#defineplugin","children":[]},{"level":3,"title":"copy-webpack-plugin","slug":"copy-webpack-plugin","link":"#copy-webpack-plugin","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]},{"level":2,"title":"\u5E38\u89C1plugin","slug":"\u5E38\u89C1plugin","link":"#\u5E38\u89C1plugin","children":[]}],"relativePath":"webpack/4.md"}'),y={name:"webpack/4.md"},i=o('<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>Plugin\uFF08Plug-in\uFF09\u662F\u4E00\u79CD\u8BA1\u7B97\u673A\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5B83\u548C\u4E3B\u5E94\u7528\u7A0B\u5E8F\u4E92\u76F8\u4EA4\u4E92\uFF0C\u4EE5\u63D0\u4F9B\u7279\u5B9A\u7684\u529F\u80FD</p><p>\u662F\u4E00\u79CD\u9075\u5FAA\u4E00\u5B9A\u89C4\u8303\u7684\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u7F16\u5199\u51FA\u6765\u7684\u7A0B\u5E8F\uFF0C\u53EA\u80FD\u8FD0\u884C\u5728\u7A0B\u5E8F\u89C4\u5B9A\u7684\u7CFB\u7EDF\u4E0B\uFF0C\u56E0\u4E3A\u5176\u9700\u8981\u8C03\u7528\u539F\u7EAF\u51C0\u7CFB\u7EDF\u63D0\u4F9B\u7684\u51FD\u6570\u5E93\u6216\u8005\u6570\u636E</p><p>webpack\u4E2D\u7684plugin\u4E5F\u662F\u5982\u6B64\uFF0Cplugin\u8D4B\u4E88\u5176\u5404\u79CD\u7075\u6D3B\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u6253\u5305\u4F18\u5316\u3001\u8D44\u6E90\u7BA1\u7406\u3001\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u7B49\uFF0C\u5B83\u4EEC\u4F1A\u8FD0\u884C\u5728 webpack \u7684\u4E0D\u540C\u9636\u6BB5\uFF08\u94A9\u5B50 / \u751F\u547D\u5468\u671F\uFF09\uFF0C\u8D2F\u7A7F\u4E86webpack\u6574\u4E2A\u7F16\u8BD1\u5468\u671F</p><img src="'+r+`"><p>\u76EE\u7684\u5728\u4E8E\u89E3\u51B3loader \u65E0\u6CD5\u5B9E\u73B0\u7684\u5176\u4ED6\u4E8B</p><h3 id="\u914D\u7F6E\u65B9\u5F0F" tabindex="-1">\u914D\u7F6E\u65B9\u5F0F <a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a></h3><p>\u8FD9\u91CC\u8BB2\u8FF0\u6587\u4EF6\u7684\u914D\u7F6E\u65B9\u5F0F\uFF0C\u4E00\u822C\u60C5\u51B5\uFF0C\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u5BFC\u51FA\u5BF9\u8C61\u4E2Dplugins\u5C5E\u6027\u4F20\u5165new\u5B9E\u4F8B\u5BF9\u8C61\u3002\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> HtmlWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u901A\u8FC7 npm \u5B89\u88C5</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ProgressPlugin</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HtmlWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/index.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\u3001\u7279\u6027" tabindex="-1">\u4E8C\u3001\u7279\u6027 <a class="header-anchor" href="#\u4E8C\u3001\u7279\u6027" aria-hidden="true">#</a></h2><p>\u5176\u672C\u8D28\u662F\u4E00\u4E2A\u5177\u6709apply\u65B9\u6CD5javascript\u5BF9\u8C61</p><p>apply \u65B9\u6CD5\u4F1A\u88AB webpack compiler\u8C03\u7528\uFF0C\u5E76\u4E14\u5728\u6574\u4E2A\u7F16\u8BD1\u751F\u547D\u5468\u671F\u90FD\u53EF\u4EE5\u8BBF\u95EE compiler\u5BF9\u8C61</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pluginName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ConsoleLogOnBuildWebpackPlugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ConsoleLogOnBuildWebpackPlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">apply</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">compiler</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">compiler</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hooks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">run</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tap</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pluginName</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">compilation</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack \u6784\u5EFA\u8FC7\u7A0B\u5F00\u59CB\uFF01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ConsoleLogOnBuildWebpackPlugin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>compiler hook \u7684 tap\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E94\u662F\u9A7C\u5CF0\u5F0F\u547D\u540D\u7684\u63D2\u4EF6\u540D\u79F0</p><p>\u5173\u4E8E\u6574\u4E2A\u7F16\u8BD1\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u6709\u5982\u4E0B\uFF1A</p><ul><li>entry-option \uFF1A\u521D\u59CB\u5316 option</li><li>run</li><li>compile\uFF1A \u771F\u6B63\u5F00\u59CB\u7684\u7F16\u8BD1\uFF0C\u5728\u521B\u5EFA compilation \u5BF9\u8C61\u4E4B\u524D</li><li>compilation \uFF1A\u751F\u6210\u597D\u4E86 compilation \u5BF9\u8C61</li><li>make \u4ECE entry \u5F00\u59CB\u9012\u5F52\u5206\u6790\u4F9D\u8D56\uFF0C\u51C6\u5907\u5BF9\u6BCF\u4E2A\u6A21\u5757\u8FDB\u884C build</li><li>after-compile\uFF1A \u7F16\u8BD1 build \u8FC7\u7A0B\u7ED3\u675F</li><li>emit \uFF1A\u5728\u5C06\u5185\u5B58\u4E2D assets \u5185\u5BB9\u5199\u5230\u78C1\u76D8\u6587\u4EF6\u5939\u4E4B\u524D</li><li>after-emit \uFF1A\u5728\u5C06\u5185\u5B58\u4E2D assets \u5185\u5BB9\u5199\u5230\u78C1\u76D8\u6587\u4EF6\u5939\u4E4B\u540E</li><li>done\uFF1A \u5B8C\u6210\u6240\u6709\u7684\u7F16\u8BD1\u8FC7\u7A0B</li><li>failed\uFF1A \u7F16\u8BD1\u5931\u8D25\u7684\u65F6\u5019</li></ul><h2 id="\u4E09\u3001\u5E38\u89C1\u7684plugin" tabindex="-1">\u4E09\u3001\u5E38\u89C1\u7684Plugin <a class="header-anchor" href="#\u4E09\u3001\u5E38\u89C1\u7684plugin" aria-hidden="true">#</a></h2><p>\u5E38\u89C1\u7684plugin\u6709\u5982\u56FE\u6240\u793A\uFF1A</p><img src="`+D+`"><p>\u4E0B\u9762\u4ECB\u7ECD\u51E0\u4E2A\u5E38\u7528\u7684\u63D2\u4EF6\u7528\u6CD5\uFF1A</p><h3 id="htmlwebpackplugin" tabindex="-1">HtmlWebpackPlugin <a class="header-anchor" href="#htmlwebpackplugin" aria-hidden="true">#</a></h3><p>\u5728\u6253\u5305\u7ED3\u675F\u540E\uFF0C\u2F83\u52A8\u751F\u6210\u2F00\u4E2A html \u2F42\u6587\u4EF6\uFF0C\u5E76\u628A\u6253\u5305\u751F\u6210\u7684js \u6A21\u5757\u5F15\u2F0A\u5230\u8BE5 html \u4E2D</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev html</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">webpack</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// webpack.config.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> HtmlWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">html-webpack-plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HtmlWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/html/index.html</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!--./</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ie=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&lt;%=htmlWebpackPlugin.options.title%&gt;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">html-webpack-plugin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5728 html \u6A21\u677F\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 &lt;%=<a href="http://htmlWebpackPlugin.options.XXX" target="_blank" rel="noreferrer">htmlWebpackPlugin.options.XXX</a>%&gt; \u7684\u65B9\u5F0F\u83B7\u53D6\u914D\u7F6E\u7684\u503C</p><p>\u66F4\u591A\u7684\u914D\u7F6E\u53EF\u4EE5\u81EA\u5BFB\u67E5\u627E</p><h3 id="clean-webpack-plugin" tabindex="-1">clean-webpack-plugin <a class="header-anchor" href="#clean-webpack-plugin" aria-hidden="true">#</a></h3><p>\u5220\u9664\uFF08\u6E05\u7406\uFF09\u6784\u5EFA\u76EE\u5F55</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev clean</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">webpack</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">CleanWebpackPlugin</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">clean-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CleanWebpackPlugin</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="mini-css-extract-plugin" tabindex="-1">mini-css-extract-plugin <a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a></h3><p>\u63D0\u53D6 CSS \u5230\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u4E2D</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev mini</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">css</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">extract</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MiniCssExtractPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mini-css-extract-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">ac</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">ss</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> MiniCssExtractPlugin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">loader</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sass-loader</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">   ]</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MiniCssExtractPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[name].css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="defineplugin" tabindex="-1">DefinePlugin <a class="header-anchor" href="#defineplugin" aria-hidden="true">#</a></h3><p>\u5141\u8BB8\u5728\u7F16\u8BD1\u65F6\u521B\u5EFA\u914D\u7F6E\u7684\u5168\u5C40\u5BF9\u8C61\uFF0C\u662F\u4E00\u4E2Awebpack\u5185\u7F6E\u7684\u63D2\u4EF6\uFF0C\u4E0D\u9700\u8981\u5B89\u88C5</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> DefinePlugun </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    plugins:[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DefinePlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">BASE_URL</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;./&quot;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u65F6\u5019\u7F16\u8BD1template\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u5C31\u80FD\u901A\u8FC7\u4E0B\u8FF0\u5F62\u5F0F\u83B7\u53D6\u5168\u5C40\u5BF9\u8C61</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;%= BASE_URL%&gt;favicon.ico&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="copy-webpack-plugin" tabindex="-1">copy-webpack-plugin <a class="header-anchor" href="#copy-webpack-plugin" aria-hidden="true">#</a></h3><p>\u590D\u5236\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u6267\u884C\u533A\u57DF\uFF0C\u5982vue\u7684\u6253\u5305\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u5C06\u4E00\u4E9B\u6587\u4EF6\u653E\u5230public\u7684\u76EE\u5F55\u4E0B\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u76EE\u5F55\u4F1A\u88AB\u590D\u5236\u5230dist\u6587\u4EF6\u5939\u4E2D</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install copy</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">webpack</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CopyWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">parrerns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">globOptions</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">ignore</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">**/index.html</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u590D\u5236\u7684\u89C4\u5219\u5728patterns\u5C5E\u6027\u4E2D\u8BBE\u7F6E\uFF1A</p><ul><li>from\uFF1A\u8BBE\u7F6E\u4ECE\u54EA\u4E00\u4E2A\u6E90\u4E2D\u5F00\u59CB\u590D\u5236</li><li>to\uFF1A\u590D\u5236\u5230\u7684\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u7701\u7565\uFF0C\u4F1A\u9ED8\u8BA4\u590D\u5236\u5230\u6253\u5305\u7684\u76EE\u5F55\u4E0B</li><li>globOptions\uFF1A\u8BBE\u7F6E\u4E00\u4E9B\u989D\u5916\u7684\u9009\u9879\uFF0C\u5176\u4E2D\u53EF\u4EE5\u7F16\u5199\u9700\u8981\u5FFD\u7565\u7684\u6587\u4EF6</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://webpack.docschina.org/concepts/plugins/" target="_blank" rel="noreferrer">https://webpack.docschina.org/concepts/plugins/</a></li><li><a href="https://baike.baidu.com/item/Plugin" target="_blank" rel="noreferrer">https://baike.baidu.com/item/Plugin</a></li><li><a href="https://segmentfault.com/a/1190000018695134" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000018695134</a></li><li><a href="https://vue3js.cn/interview" target="_blank" rel="noreferrer">https://vue3js.cn/interview</a></li></ul><h2 id="\u5E38\u89C1plugin" tabindex="-1">\u5E38\u89C1plugin <a class="header-anchor" href="#\u5E38\u89C1plugin" aria-hidden="true">#</a></h2><ul><li>ignore-plugin\uFF1A\u5FFD\u7565\u6587\u4EF6</li><li>uglifyjs-webpack-plugin\uFF1A\u4E0D\u652F\u6301 ES6 \u538B\u7F29 (Webpack4 \u4EE5\u524D\u4F7F\u7528)</li><li>terser-webpack-plugin: \u652F\u6301\u538B\u7F29 ES6 (Webpack4)</li><li>webpack-parallel-uglify-plugin: \u591A\u8FDB\u7A0B\u6267\u884C\u4EE3\u7801\u538B\u7F29\uFF0C\u63D0\u5347\u6784\u5EFA\u901F\u5EA6</li><li>mini-css-extract-plugin: \u5206\u79BB\u6837\u5F0F\u6587\u4EF6\uFF0CCSS \u63D0\u53D6\u4E3A\u72EC\u7ACB\u6587\u4EF6\uFF0C\u652F\u6301\u6309\u9700\u52A0\u8F7D</li><li>serviceworker-webpack-plugin\uFF1A\u4E3A\u7F51\u9875\u5E94\u7528\u589E\u52A0\u79BB\u7EBF\u7F13\u5B58\u529F\u80FD</li><li>clean-webpack-plugin: \u76EE\u5F55\u6E05\u7406</li><li>speed-measure-webpack-plugin: \u53EF\u4EE5\u770B\u5230\u6BCF\u4E2A Loader \u548C Plugin \u6267\u884C\u8017\u65F6</li><li>webpack\u5185\u7F6EUglifyJsPlugin\uFF0C\u538B\u7F29\u548C\u6DF7\u6DC6\u4EE3\u7801\u3002</li><li>webpack\u5185\u7F6ECommonsChunkPlugin\uFF0C\u63D0\u9AD8\u6253\u5305\u6548\u7387\uFF0C\u5C06\u7B2C\u4E09\u65B9\u5E93\u548C\u4E1A\u52A1\u4EE3\u7801\u5206\u5F00\u6253\u5305\u3002</li><li>ProvidePlugin\uFF1A\u81EA\u52A8\u52A0\u8F7D\u6A21\u5757\uFF0C\u4EE3\u66FFrequire\u548Cimport</li><li>html-webpack-plugin\u53EF\u4EE5\u6839\u636E\u6A21\u677F\u81EA\u52A8\u751F\u6210html\u4EE3\u7801\uFF0C\u5E76\u81EA\u52A8\u5F15\u7528css\u548Cjs\u6587\u4EF6</li><li>extract-text-webpack-plugin \u5C06js\u6587\u4EF6\u4E2D\u5F15\u7528\u7684\u6837\u5F0F\u5355\u72EC\u62BD\u79BB\u6210css\u6587\u4EF6</li><li>DefinePlugin \u7F16\u8BD1\u65F6\u914D\u7F6E\u5168\u5C40\u53D8\u91CF\uFF0C\u8FD9\u5BF9\u5F00\u53D1\u6A21\u5F0F\u548C\u53D1\u5E03\u6A21\u5F0F\u7684\u6784\u5EFA\u5141\u8BB8\u4E0D\u540C\u7684\u884C\u4E3A\u975E\u5E38\u6709\u7528\u3002</li><li>HotModuleReplacementPlugin \u70ED\u66F4\u65B0</li><li>DllPlugin\u548CDllReferencePlugin\u76F8\u4E92\u914D\u5408\uFF0C\u524D\u8005\u7B2C\u4E09\u65B9\u5305\u7684\u6784\u5EFA\uFF0C\u53EA\u6784\u5EFA\u4E1A\u52A1\u4EE3\u7801\uFF0C\u540C\u65F6\u80FD\u89E3\u51B3Externals\u591A\u6B21\u5F15\u7528\u95EE\u9898\u3002DllReferencePlugin\u5F15\u7528DllPlugin\u914D\u7F6E\u751F\u6210\u7684manifest.json\u6587\u4EF6\uFF0Cmanifest.json\u5305\u542B\u4E86\u4F9D \u8D56\u6A21\u5757\u548Cmodule id\u7684\u6620\u5C04\u5173\u7CFB</li><li>optimize-css-assets-webpack-plugin \u4E0D\u540C\u7EC4\u4EF6\u4E2D\u91CD\u590D\u7684css\u53EF\u4EE5\u5FEB\u901F\u53BB\u91CD</li><li>webpack-bundle-analyzer \u4E00\u4E2Awebpack\u7684bundle\u6587\u4EF6\u5206\u6790\u5DE5\u5177\uFF0C\u5C06bundle\u6587\u4EF6\u4EE5\u53EF\u4EA4\u4E92\u7F29\u653E\u7684treemap\u7684\u5F62\u5F0F\u5C55\u793A\u3002</li><li>compression-webpack-plugin \u751F\u4EA7\u73AF\u5883\u53EF\u91C7\u7528gzip\u538B\u7F29JS\u548CCSS</li><li>happypack\uFF1A\u901A\u8FC7\u591A\u8FDB\u7A0B\u6A21\u578B\uFF0C\u6765\u52A0\u901F\u4EE3\u7801\u6784\u5EFA</li></ul>`,49);function F(C,A,u,g,d,h){const s=e("font");return c(),a("div",null,[l(s,{style:{"font-size":"36px"}},{default:p(()=>[t("webpack\u5E38\u89C1\u7684plugin\u53CA\u5176\u5E94\u7528")]),_:1}),i])}const k=n(y,[["render",F]]);export{m as __pageData,k as default};