import{_ as a,c as l,a as n,w as p,b as o,r as e,o as r,e as c}from"./app.6f0f475c.js";const t="/dist/assets/webpack3-1.c461a865.png",D="/dist/assets/webpack3-2.d6f82a9c.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[{"level":3,"title":"\u914D\u7F6E\u65B9\u5F0F","slug":"\u914D\u7F6E\u65B9\u5F0F","link":"#\u914D\u7F6E\u65B9\u5F0F","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u7279\u6027","slug":"\u4E8C\u3001\u7279\u6027","link":"#\u4E8C\u3001\u7279\u6027","children":[]},{"level":2,"title":"\u4E09\u3001\u5E38\u89C1\u7684loader","slug":"\u4E09\u3001\u5E38\u89C1\u7684loader","link":"#\u4E09\u3001\u5E38\u89C1\u7684loader","children":[{"level":3,"title":"css-loader","slug":"css-loader","link":"#css-loader","children":[]},{"level":3,"title":"style-loader","slug":"style-loader","link":"#style-loader","children":[]},{"level":3,"title":"less-loader","slug":"less-loader","link":"#less-loader","children":[]},{"level":3,"title":"raw-loader","slug":"raw-loader","link":"#raw-loader","children":[]},{"level":3,"title":"file-loader","slug":"file-loader","link":"#file-loader","children":[]},{"level":3,"title":"url-loader","slug":"url-loader","link":"#url-loader","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]},{"level":2,"title":"\u5E38\u89C1loader","slug":"\u5E38\u89C1loader","link":"#\u5E38\u89C1loader","children":[]}],"relativePath":"webpack/3.md"}'),y={name:"webpack/3.md"},F=o('<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>loader \u7528\u4E8E\u5BF9\u6A21\u5757\u7684&quot;\u6E90\u4EE3\u7801&quot;\u8FDB\u884C\u8F6C\u6362\uFF0C\u5728 import \u6216&quot;\u52A0\u8F7D&quot;\u6A21\u5757\u65F6\u9884\u5904\u7406\u6587\u4EF6</p><p>webpack\u505A\u7684\u4E8B\u60C5\uFF0C\u4EC5\u4EC5\u662F\u5206\u6790\u51FA\u5404\u79CD\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7136\u540E\u5F62\u6210\u8D44\u6E90\u5217\u8868\uFF0C\u6700\u7EC8\u6253\u5305\u751F\u6210\u5230\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><img src="'+t+'"><p>\u5728webpack\u5185\u90E8\u4E2D\uFF0C\u4EFB\u4F55\u6587\u4EF6\u90FD\u662F\u6A21\u5757\uFF0C\u4E0D\u4EC5\u4EC5\u53EA\u662Fjs\u6587\u4EF6</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u9047\u5230import\u6216\u8005require\u52A0\u8F7D\u6A21\u5757\u7684\u65F6\u5019\uFF0Cwebpack\u53EA\u652F\u6301\u5BF9js \u548C json \u6587\u4EF6\u6253\u5305</p><p>\u50CFcss\u3001sass\u3001png\u7B49\u8FD9\u4E9B\u7C7B\u578B\u7684\u6587\u4EF6\u7684\u65F6\u5019\uFF0Cwebpack\u5219\u65E0\u80FD\u4E3A\u529B\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u914D\u7F6E\u5BF9\u5E94\u7684loader\u8FDB\u884C\u6587\u4EF6\u5185\u5BB9\u7684\u89E3\u6790</p><p>\u5728\u52A0\u8F7D\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u6267\u884C\u987A\u5E8F\u5982\u4E0B\uFF1A</p><img src="'+D+`"><p>\u5F53 webpack \u78B0\u5230\u4E0D\u8BC6\u522B\u7684\u6A21\u5757\u7684\u65F6\u5019\uFF0Cwebpack \u4F1A\u5728\u914D\u7F6E\u7684\u4E2D\u67E5\u627E\u8BE5\u6587\u4EF6\u89E3\u6790\u89C4\u5219</p><p>\u5173\u4E8E\u914D\u7F6Eloader\u7684\u65B9\u5F0F\u6709\u4E09\u79CD\uFF1A</p><ul><li>\u914D\u7F6E\u65B9\u5F0F\uFF08\u63A8\u8350\uFF09\uFF1A\u5728 webpack.config.js\u6587\u4EF6\u4E2D\u6307\u5B9A loader</li><li>\u5185\u8054\u65B9\u5F0F\uFF1A\u5728\u6BCF\u4E2A import \u8BED\u53E5\u4E2D\u663E\u5F0F\u6307\u5B9A loader</li><li>CLI \u65B9\u5F0F\uFF1A\u5728 shell \u547D\u4EE4\u4E2D\u6307\u5B9A\u5B83\u4EEC</li></ul><h3 id="\u914D\u7F6E\u65B9\u5F0F" tabindex="-1">\u914D\u7F6E\u65B9\u5F0F <a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a></h3><p>\u5173\u4E8Eloader\u7684\u914D\u7F6E\uFF0C\u6211\u4EEC\u662F\u5199\u5728module.rules\u5C5E\u6027\u4E2D\uFF0C\u5C5E\u6027\u4ECB\u7ECD\u5982\u4E0B\uFF1A</p><p>rules\u662F\u4E00\u4E2A\u6570\u7EC4\u7684\u5F62\u5F0F\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u914D\u7F6E\u5F88\u591A\u4E2Aloader</p><p>\u6BCF\u4E00\u4E2Aloader\u5BF9\u5E94\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F62\u5F0F\uFF0C\u5BF9\u8C61\u5C5E\u6027test \u4E3A\u5339\u914D\u7684\u89C4\u5219\uFF0C\u4E00\u822C\u60C5\u51B5\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F</p><p>\u5C5E\u6027use\u9488\u5BF9\u5339\u914D\u5230\u6587\u4EF6\u7C7B\u578B\uFF0C\u8C03\u7528\u5BF9\u5E94\u7684 loader \u8FDB\u884C\u5904\u7406</p><p>\u4EE3\u7801\u7F16\u5199\uFF0C\u5982\u4E0B\u5F62\u5F0F\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">style-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sass-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\u3001\u7279\u6027" tabindex="-1">\u4E8C\u3001\u7279\u6027 <a class="header-anchor" href="#\u4E8C\u3001\u7279\u6027" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u7EE7\u7EED\u62FF\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6765\u8BB2\u8BB2loader\u7684\u7279\u6027</p><p>\u4ECE\u4E0A\u8FF0\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u5904\u7406css\u6A21\u5757\u7684\u65F6\u5019\uFF0Cuse\u5C5E\u6027\u4E2D\u914D\u7F6E\u4E86\u4E09\u4E2Aloader\u5206\u522B\u5904\u7406css\u6587\u4EF6</p><p>\u56E0\u4E3Aloader\u652F\u6301\u94FE\u5F0F\u8C03\u7528\uFF0C\u94FE\u4E2D\u7684\u6BCF\u4E2Aloader\u4F1A\u5904\u7406\u4E4B\u524D\u5DF2\u5904\u7406\u8FC7\u7684\u8D44\u6E90\uFF0C\u6700\u7EC8\u53D8\u4E3Ajs\u4EE3\u7801\u3002\u987A\u5E8F\u4E3A\u76F8\u53CD\u7684\u987A\u5E8F\u6267\u884C\uFF0C\u5373\u4E0A\u8FF0\u6267\u884C\u65B9\u5F0F\u4E3Asass-loader\u3001css-loader\u3001style-loader</p><p>\u9664\u6B64\u4E4B\u5916\uFF0Cloader\u7684\u7279\u6027\u8FD8\u6709\u5982\u4E0B\uFF1A</p><ul><li>loader \u53EF\u4EE5\u662F\u540C\u6B65\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F02\u6B65\u7684</li><li>loader \u8FD0\u884C\u5728 Node.js \u4E2D\uFF0C\u5E76\u4E14\u80FD\u591F\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C</li><li>\u9664\u4E86\u5E38\u89C1\u7684\u901A\u8FC7 package.json \u7684 main \u6765\u5C06\u4E00\u4E2A npm \u6A21\u5757\u5BFC\u51FA\u4E3A loader\uFF0C\u8FD8\u53EF\u4EE5\u5728 module.rules \u4E2D\u4F7F\u7528 loader \u5B57\u6BB5\u76F4\u63A5\u5F15\u7528\u4E00\u4E2A\u6A21\u5757</li><li>\u63D2\u4EF6(plugin)\u53EF\u4EE5\u4E3A loader \u5E26\u6765\u66F4\u591A\u7279\u6027</li><li>loader \u80FD\u591F\u4EA7\u751F\u989D\u5916\u7684\u4EFB\u610F\u6587\u4EF6</li><li>\u53EF\u4EE5\u901A\u8FC7 loader \u7684\u9884\u5904\u7406\u51FD\u6570\uFF0C\u4E3A JavaScript \u751F\u6001\u7CFB\u7EDF\u63D0\u4F9B\u66F4\u591A\u80FD\u529B\u3002\u7528\u6237\u73B0\u5728\u53EF\u4EE5\u66F4\u52A0\u7075\u6D3B\u5730\u5F15\u5165\u7EC6\u7C92\u5EA6\u903B\u8F91\uFF0C\u4F8B\u5982\uFF1A\u538B\u7F29\u3001\u6253\u5305\u3001\u8BED\u8A00\u7FFB\u8BD1\u548C\u66F4\u591A\u5176\u4ED6\u7279\u6027</li></ul><h2 id="\u4E09\u3001\u5E38\u89C1\u7684loader" tabindex="-1">\u4E09\u3001\u5E38\u89C1\u7684loader <a class="header-anchor" href="#\u4E09\u3001\u5E38\u89C1\u7684loader" aria-hidden="true">#</a></h2><p>\u5728\u9875\u9762\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u6027\u52A0\u8F7D\u9664\u4E86js\u6587\u4EF6\u4EE5\u5916\u7684\u5185\u5BB9\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u914D\u7F6E\u54CD\u5E94\u7684loader\u8FDB\u884C\u52A0\u8F7D</p><p>\u5E38\u89C1\u7684loader\u5982\u4E0B\uFF1A</p><ul><li>style-loader: \u5C06css\u6DFB\u52A0\u5230DOM\u7684\u5185\u8054\u6837\u5F0F\u6807\u7B7Estyle\u91CC</li><li>css-loader :\u5141\u8BB8\u5C06css\u6587\u4EF6\u901A\u8FC7require\u7684\u65B9\u5F0F\u5F15\u5165\uFF0C\u5E76\u8FD4\u56DEcss\u4EE3\u7801</li><li>less-loader: \u5904\u7406less</li><li>sass-loader: \u5904\u7406sass</li><li>postcss-loader: \u7528postcss\u6765\u5904\u7406CSS</li><li>autoprefixer-loader: \u5904\u7406CSS3\u5C5E\u6027\u524D\u7F00\uFF0C\u5DF2\u88AB\u5F03\u7528\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528postcss</li><li>file-loader: \u5206\u53D1\u6587\u4EF6\u5230output\u76EE\u5F55\u5E76\u8FD4\u56DE\u76F8\u5BF9\u8DEF\u5F84</li><li>url-loader: \u548Cfile-loader\u7C7B\u4F3C\uFF0C\u4F46\u662F\u5F53\u6587\u4EF6\u5C0F\u4E8E\u8BBE\u5B9A\u7684limit\u65F6\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2AData Url</li><li>html-minify-loader: \u538B\u7F29HTML</li><li>babel-loader :\u7528babel\u6765\u8F6C\u6362ES6\u6587\u4EF6\u5230ES \u4E0B\u9762\u7ED9\u51FA\u4E00\u4E9B\u5E38\u89C1\u7684loader\u7684\u4F7F\u7528\uFF1A</li></ul><h3 id="css-loader" tabindex="-1">css-loader <a class="header-anchor" href="#css-loader" aria-hidden="true">#</a></h3><p>\u5206\u6790 css \u6A21\u5757\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u5E76\u5408\u6210\u2F00\u4E2A css</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev css</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;">// \u542F\u7528/\u7981\u7528 url() \u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;">// \u542F\u7528/\u7981\u7528 @import \u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">import</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u542F\u7528/\u7981\u7528 Sourcemap</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">sourceMap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u53EA\u901A\u8FC7css-loader\u52A0\u8F7D\u6587\u4EF6\uFF0C\u8FD9\u65F6\u5019\u9875\u9762\u4EE3\u7801\u8BBE\u7F6E\u7684\u6837\u5F0F\u5E76\u6CA1\u6709\u751F\u6548</p><p>\u539F\u56E0\u5728\u4E8E\uFF0Ccss-loader\u53EA\u662F\u8D1F\u8D23\u5C06.css\u6587\u4EF6\u8FDB\u884C\u4E00\u4E2A\u89E3\u6790\uFF0C\u800C\u5E76\u4E0D\u4F1A\u5C06\u89E3\u6790\u540E\u7684css\u63D2\u5165\u5230\u9875\u9762\u4E2D</p><p>\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u518D\u5B8C\u6210\u63D2\u5165style\u7684\u64CD\u4F5C\uFF0C\u90A3\u4E48\u6211\u4EEC\u8FD8\u9700\u8981\u53E6\u5916\u4E00\u4E2Aloader\uFF0C\u5C31\u662Fstyle-loader</p><h3 id="style-loader" tabindex="-1">style-loader <a class="header-anchor" href="#style-loader" aria-hidden="true">#</a></h3><p>\u628A css-loader \u751F\u6210\u7684\u5185\u5BB9\uFF0C\u7528 style \u6807\u7B7E\u6302\u8F7D\u5230\u9875\u9762\u7684 head \u4E2D</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev style</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">style-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p>\u540C\u4E00\u4E2A\u4EFB\u52A1\u7684 loader \u53EF\u4EE5\u540C\u65F6\u6302\u8F7D\u591A\u4E2A\uFF0C\u5904\u7406\u987A\u5E8F\u4E3A\uFF1A\u4ECE\u53F3\u5230\u5DE6\uFF0C\u4ECE\u4E0B\u5F80\u4E0A</p><h3 id="less-loader" tabindex="-1">less-loader <a class="header-anchor" href="#less-loader" aria-hidden="true">#</a></h3><p>\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u4E5F\u5E38\u5E38\u4F1A\u4F7F\u7528less\u3001sass\u3001stylus\u9884\u5904\u7406\u5668\u7F16\u5199css\u6837\u5F0F\uFF0C\u4F7F\u5F00\u53D1\u6548\u7387\u63D0\u9AD8\uFF0C\u8FD9\u91CC\u9700\u8981\u4F7F\u7528less-loader</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install less</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">style-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">less-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="raw-loader" tabindex="-1">raw-loader <a class="header-anchor" href="#raw-loader" aria-hidden="true">#</a></h3><p>\u5728 webpack\u4E2D\u901A\u8FC7 import\u65B9\u5F0F\u5BFC\u5165\u6587\u4EF6\u5185\u5BB9\uFF0C\u8BE5loader\u5E76\u4E0D\u662F\u5185\u7F6E\u7684\uFF0C\u6240\u4EE5\u9996\u5148\u8981\u5B89\u88C5</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev raw</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u5728 webpack.config.js \u4E2D\u8FDB\u884C\u914D\u7F6E</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">txt</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">md</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">raw-loader</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="file-loader" tabindex="-1">file-loader <a class="header-anchor" href="#file-loader" aria-hidden="true">#</a></h3><p>\u628A\u8BC6\u522B\u51FA\u7684\u8D44\u6E90\u6A21\u5757\uFF0C\u79FB\u52A8\u5230\u6307\u5B9A\u7684\u8F93\u51FA\u2F6C\u76EE\u5F55\uFF0C\u5E76\u4E14\u8FD4\u56DE\u8FD9\u4E2A\u8D44\u6E90\u5728\u8F93\u51FA\u76EE\u5F55\u7684\u5730\u5740(\u5B57\u7B26\u4E32)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev file</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">png</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">jpe</span><span style="color:#89DDFF;">?</span><span style="color:#C3E88D;">g</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">gif</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">file-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// placeholder \u5360\u4F4D\u7B26 [name] \u6E90\u8D44\u6E90\u6A21\u5757\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// [ext] \u6E90\u8D44\u6E90\u6A21\u5757\u7684\u540E\u7F00</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[name]_[hash].[ext]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u6253\u5305\u540E\u7684\u5B58\u653E\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">outputPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./images</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u6253\u5305\u540E\u6587\u4EF6\u7684 url</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./images</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="url-loader" tabindex="-1">url-loader <a class="header-anchor" href="#url-loader" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u5904\u7406\uF9E4 file-loader \u6240\u6709\u7684\u4E8B\u60C5\uFF0C\u4F46\u662F\u9047\u5230\u56FE\u7247\u683C\u5F0F\u7684\u6A21\u5757\uFF0C\u53EF\u4EE5\u9009\u62E9\u6027\u7684\u628A\u56FE\u7247\u8F6C\u6210 base64 \u683C\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u5E76\u6253\u5305\u5230 js \u4E2D\uFF0C\u5BF9\u5C0F\u4F53\u79EF\u7684\u56FE\u7247\u6BD4\u8F83\u5408\u9002\uFF0C\u5927\u56FE\u7247\uF967\u5408\u9002\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev url</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">png</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">jpe</span><span style="color:#89DDFF;">?</span><span style="color:#C3E88D;">g</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">gif</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">url-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// placeholder \u5360\u4F4D\u7B26 [name] \u6E90\u8D44\u6E90\u6A21\u5757\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// [ext] \u6E90\u8D44\u6E90\u6A21\u5757\u7684\u540E\u7F00</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[name]_[hash].[ext]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u6253\u5305\u540E\u7684\u5B58\u653E\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">outputPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./images</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u6253\u5305\u540E\u6587\u4EF6\u7684 url</span></span>
<span class="line"><span style="color:#A6ACCD;">        publicPath: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./images</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5C0F\u4E8E 100 \u5B57\u8282\u8F6C\u6210 base64 \u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://webpack.docschina.org/concepts/loaders/" target="_blank" rel="noreferrer">https://webpack.docschina.org/concepts/loaders/</a></li><li><a href="https://segmentfault.com/a/1190000018680530" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000018680530</a></li><li><a href="https://vue3js.cn/interview/" target="_blank" rel="noreferrer">https://vue3js.cn/interview/</a></li></ul><h2 id="\u5E38\u89C1loader" tabindex="-1">\u5E38\u89C1loader <a class="header-anchor" href="#\u5E38\u89C1loader" aria-hidden="true">#</a></h2><ul><li>file-loader:\u6587\u4EF6\u52A0\u8F7D</li><li>url-loader\uFF1A\u6587\u4EF6\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u9608\u503C\uFF0C\u5C0F\u4E8E\u65F6\u628A\u6587\u4EF6base64\u7F16\u7801</li><li>image-loader\uFF1A\u52A0\u8F7D\u5E76\u538B\u7F29\u56FE\u7247</li><li>json-loader\uFF1Awebpack\u9ED8\u8BA4\u5305\u542B\u4E86</li><li>babel-loader\uFF1AES6+ \u8F6C\u6210ES5</li><li>ts-loader\uFF1A\u5C06ts\u8F6C\u6210js</li><li>awesome-typescript-loader\uFF1A\u6BD4\u4E0A\u9762\u90A3\u4E2A\u6027\u80FD\u597D</li><li>css-loader\uFF1A\u5904\u7406@import\u548Curl\u8FD9\u6837\u7684\u5916\u90E8\u8D44\u6E90</li><li>style-loader\uFF1A\u5728head\u521B\u5EFAstyle\u6807\u7B7E\u628A\u6837\u5F0F\u63D2\u5165\uFF1B</li><li>postcss-loader\uFF1A\u6269\u5C55css\u8BED\u6CD5\uFF0C\u4F7F\u7528postcss\u5404\u79CD\u63D2\u4EF6autoprefixer\uFF0Ccssnext\uFF0Ccssnano</li><li>eslint-loader,tslint-loader:\u901A\u8FC7\u8FD9\u4E24\u79CD\u68C0\u67E5\u4EE3\u7801\uFF0Ctslint\u4E0D\u518D\u7EF4\u62A4\uFF0C\u7528\u7684eslint</li><li>vue-loader\uFF1A\u52A0\u8F7Dvue\u5355\u6587\u4EF6\u7EC4\u4EF6</li><li>i18n-loader\uFF1A\u56FD\u9645\u5316</li><li>cache-loader\uFF1A\u6027\u80FD\u5F00\u9500\u5927\u7684loader\u524D\u6DFB\u52A0\uFF0C\u5C06\u7ED3\u679C\u7F13\u5B58\u5230\u78C1\u76D8\uFF1B</li><li>svg-inline-loader\uFF1A\u538B\u7F29\u540E\u7684svg\u6CE8\u5165\u4EE3\u7801\uFF1B</li><li>source-map-loader\uFF1A\u52A0\u8F7Dsource Map\u6587\u4EF6\uFF0C\u65B9\u4FBF\u8C03\u8BD5\uFF1B</li><li>expose-loader:\u66B4\u9732\u5BF9\u8C61\u4E3A\u5168\u5C40\u53D8\u91CF</li><li>imports-loader\u3001exports-loader\u7B49\u53EF\u4EE5\u5411\u6A21\u5757\u6CE8\u5165\u53D8\u91CF\u6216\u8005\u63D0\u4F9B\u5BFC\u51FA\u6A21\u5757\u529F\u80FD</li><li>raw-loader\u53EF\u4EE5\u5C06\u6587\u4EF6\u5DF2\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u8FD4\u56DE</li><li>\u6821\u9A8C\u6D4B\u8BD5\uFF1Amocha-loader\u3001jshint-loader \u3001eslint-loader\u7B49</li></ul>`,62);function i(C,d,A,u,h,g){const s=e("font");return r(),l("div",null,[n(s,{style:{"font-size":"36px"}},{default:p(()=>[c("webpack\u4E2D\u5E38\u89C1\u7684loader \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898")]),_:1}),F])}const v=a(y,[["render",i]]);export{m as __pageData,v as default};