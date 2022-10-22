import{_ as l,c as a,a as t,w as i,b as n,r,o as s,e as u}from"./app.f8d2d9e0.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00.\u4ECE\u5386\u53F2\u8BF4\u8D77","slug":"\u4E00-\u4ECE\u5386\u53F2\u8BF4\u8D77","link":"#\u4E00-\u4ECE\u5386\u53F2\u8BF4\u8D77","children":[]},{"level":2,"title":"\u4E8C\u3001vue\u662F\u4EC0\u4E48","slug":"\u4E8C\u3001vue\u662F\u4EC0\u4E48","link":"#\u4E8C\u3001vue\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E09\u3001Vue\u6838\u5FC3\u7279\u6027","slug":"\u4E09\u3001vue\u6838\u5FC3\u7279\u6027","link":"#\u4E09\u3001vue\u6838\u5FC3\u7279\u6027","children":[]},{"level":2,"title":"\u56DB\u3001Vue\u8DDF\u4F20\u7EDF\u5F00\u53D1\u7684\u533A\u522B","slug":"\u56DB\u3001vue\u8DDF\u4F20\u7EDF\u5F00\u53D1\u7684\u533A\u522B","link":"#\u56DB\u3001vue\u8DDF\u4F20\u7EDF\u5F00\u53D1\u7684\u533A\u522B","children":[]},{"level":2,"title":"\u4E94\u3001Vue\u548CReact\u5BF9\u6BD4","slug":"\u4E94\u3001vue\u548Creact\u5BF9\u6BD4","link":"#\u4E94\u3001vue\u548Creact\u5BF9\u6BD4","children":[]}],"relativePath":"vue/code.md"}'),o={name:"vue/code.md"},c=n(`<h2 id="\u4E00-\u4ECE\u5386\u53F2\u8BF4\u8D77" tabindex="-1">\u4E00.\u4ECE\u5386\u53F2\u8BF4\u8D77 <a class="header-anchor" href="#\u4E00-\u4ECE\u5386\u53F2\u8BF4\u8D77" aria-hidden="true">#</a></h2><p>Web\u662FWorld Wide Web\u7684\u7B80\u79F0\uFF0C\u4E2D\u6587\u8BD1\u4E3A\u4E07\u7EF4\u7F51\u6211\u4EEC\u53EF\u4EE5\u5C06\u5B83\u89C4\u5212\u6210\u5982\u4E0B\u7684\u51E0\u4E2A\u65F6\u4EE3\u6765\u8FDB\u884C\u7406\u89E3</p><ul><li>\u77F3\u5668\u65F6\u4EE3</li><li>\u6587\u660E\u65F6\u4EE3</li><li>\u5DE5\u4E1A\u9769\u547D\u65F6\u4EE3</li><li>\u767E\u82B1\u9F50\u653E\u65F6\u4EE3</li></ul><hr><ul><li>\u77F3\u5668\u65F6\u4EE3<br> \u6700\u65E9\u7684\u7F51\u9875\u662F\u6CA1\u6709\u6570\u636E\u5E93\u7684\uFF0C\u53EF\u4EE5\u7406\u89E3\u6210\u5C31\u662F\u4E00\u5F20\u53EF\u4EE5\u5728\u7F51\u7EDC\u4E0A\u6D4F\u89C8\u7684\u62A5\u7EB8\uFF0C\u76F4\u5230CGI\u6280\u672F\u7684\u51FA\u73B0\u901A\u8FC7 CGI Perl \u8FD0\u884C\u4E00\u5C0F\u6BB5\u4EE3\u7801\u4E0E\u6570\u636E\u5E93\u6216\u6587\u4EF6\u7CFB\u7EDF\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5982\u5F53\u65F6\u7684Google\uFF081998\u5E74\uFF09</li><li>\u6587\u660E\u65F6\u4EE3<br> ASP\uFF0CJSP\u5927\u5BB6\u5E94\u8BE5\u90FD\u4E0D\u4F1A\u592A\u964C\u751F\uFF0C\u6700\u65E9\u51FA\u73B0\u4E8E 2005 \u5E74\u5DE6\u53F3\uFF0C\u5148\u540E\u51FA\u73B0\u4E86\u5FAE\u8F6F\u7684 ASP \u548C Java Server Pages [JSP] \u7B49\u6280\u672F,\u53D6\u4EE3\u4E86 CGI \uFF0C\u589E\u5F3A\u4E86 WEB \u4E0E\u670D\u52A1\u7AEF\u7684\u4EA4\u4E92\u7684\u5B89\u5168\u6027\uFF0C\u7C7B\u4F3C\u4E8E\u4E0B\u9762\u8FD9\u6837\uFF0C\u5176\u5B9E\u5C31\u662FJava + HTML</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;   </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;meta charset=&quot;utf-8&quot;&gt;   </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;title&gt;JSP demo&lt;/title&gt; &lt;/head&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;   </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;img src=&quot;http://localhost:8080/web05_session/1.jpg&quot; width=200 height=100 /&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>JSP\u6709\u4E00\u4E2A\u5F88\u5927\u7684\u7F3A\u70B9\uFF0C\u5C31\u662F\u4E0D\u592A\u7075\u6D3B\uFF0C\u56E0\u4E3AJSP\u662F\u5728\u670D\u52A1\u5668\u7AEF\u6267\u884C\u7684\uFF0C\u901A\u5E38\u8FD4\u56DE\u8BE5\u5BA2\u6237\u7AEF\u7684\u5C31\u662F\u4E00\u4E2AHTML\u6587\u672C\u3002\u6211\u4EEC\u6BCF\u6B21\u7684\u8BF7\u6C42\uFF1A\u83B7\u53D6\u7684\u6570\u636E\u3001\u5185\u5BB9\u7684\u52A0\u8F7D\uFF0C\u90FD\u662F\u670D\u52A1\u5668\u4E3A\u6211\u4EEC\u8FD4\u56DE\u6E32\u67D3\u5B8C\u6210\u4E4B\u540E\u7684 DOM\uFF0C\u8FD9\u4E5F\u5C31\u4F7F\u5F97\u6211\u4EEC\u5F00\u53D1\u7F51\u7AD9\u7684\u7075\u6D3B\u5EA6\u5927\u6253\u6298\u6263\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u540C\u5E74\uFF1AAjax\u706B\u4E86(\u5C0F\u7EC6\u8282\uFF0C\u8FD9\u91CC\u4E3A\u4EC0\u4E48\u8BF4\u706B\u4E86\uFF0C\u56E0\u4E3A Ajax \u6280\u672F\u5E76\u4E0D\u662F 2005 \u5E74\u51FA\u73B0\u7684\uFF0C\u4ED6\u7684\u96CF\u5F62\u662F 1999 \u5E74)\uFF0C\u73B0\u5728\u770B\u6765\u5F88\u5E38\u89C1\u7684\u6280\u672F\u624B\u6BB5\uFF0C\u5728\u5F53\u65F6\u53EF\u662F\u73CD\u8D35\u65E0\u6BD4</p><ul><li>\u5DE5\u4E1A\u9769\u547D\u65F6\u4EE3<br> \u5230\u8FD9\u91CC\u5927\u5BB6\u5C31\u66F4\u719F\u6089\u4E86\uFF0C\u79FB\u52A8\u8BBE\u5907\u7684\u666E\u53CA\uFF0CJquery\u7684\u51FA\u73B0\uFF0C\u4EE5\u53CASPA\uFF08Single Page Application \u5355\u9875\u9762\u5E94\u7528\uFF09\u7684\u96CF\u5F62\uFF0CBackbone EmberJS AngularJS \u8FD9\u6837\u4E00\u6279\u524D\u7AEF\u6846\u67B6\u968F\u4E4B\u51FA\u73B0\uFF0C\u4F46\u5F53\u65F6SPA\u7684\u8DEF\u4E0D\u597D\u8D70\uFF0C\u4F8B\u5982SEO\u95EE\u9898\uFF0CSPA \u8FC7\u591A\u7684\u9875\u9762\u3001\u590D\u6742\u573A\u666F\u4E0B View \u7684\u7ED1\u5B9A\u7B49\uFF0C\u90FD\u6CA1\u6709\u5F88\u597D\u7684\u5904\u7406\u7ECF\u8FC7\u8FD9\u51E0\u5E74\u7684\u98DE\u901F\u53D1\u5C55\uFF0C\u8282\u7EA6\u4E86\u5F00\u53D1\u4EBA\u5458\u5927\u91CF\u7684\u7CBE\u529B\u3001\u964D\u4F4E\u4E86\u5F00\u53D1\u8005\u548C\u5F00\u53D1\u8FC7\u7A0B\u7684\u95E8\u69DB\uFF0C\u6781\u5927\u63D0\u5347\u4E86\u5F00\u53D1\u6548\u7387\u548C\u8FED\u4EE3\u901F\u5EA6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u79F0\u4E4B\u5176\u4E3A\u5DE5\u4E1A\u65F6\u4EE3</li><li>\u767E\u82B1\u9F50\u653E\u65F6\u4EE3<br> \u8FD9\u91CC\u6CA1\u6709\u6587\u5B57\uFF0C\u653E\u4E00\u5F20\u56FE\u611F\u53D7\u4E00\u4E0B</li></ul><h2 id="\u4E8C\u3001vue\u662F\u4EC0\u4E48" tabindex="-1">\u4E8C\u3001vue\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E8C\u3001vue\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>Vue.js\uFF08/vju\u02D0/\uFF0C\u6216\u7B80\u79F0\u4E3AVue\uFF09\u662F\u4E00\u4E2A\u7528\u4E8E\u521B\u5EFA\u7528\u6237\u754C\u9762\u7684\u5F00\u6E90JavaScript\u6846\u67B6\uFF0C\u4E5F\u662F\u4E00\u4E2A\u521B\u5EFA\u5355\u9875\u5E94\u7528\u7684Web\u5E94\u7528\u6846\u67B6\u30022016\u5E74\u4E00\u9879\u9488\u5BF9JavaScript\u7684\u8C03\u67E5\u8868\u660E\uFF0CVue\u6709\u774089%\u7684\u5F00\u53D1\u8005\u6EE1\u610F\u5EA6\u3002\u5728GitHub\u4E0A\uFF0C\u8BE5\u9879\u76EE\u5E73\u5747\u6BCF\u5929\u80FD\u6536\u83B795\u9897\u661F\uFF0C\u4E3AGithub\u6709\u53F2\u4EE5\u6765\u661F\u6807\u6570\u7B2C3\u591A\u7684\u9879\u76EE\u540C\u65F6\u4E5F\u662F\u4E00\u6B3E\u6D41\u884C\u7684JavaScript\u524D\u7AEF\u6846\u67B6\uFF0C\u65E8\u5728\u66F4\u597D\u5730\u7EC4\u7EC7\u4E0E\u7B80\u5316Web\u5F00\u53D1\u3002Vue\u6240\u5173\u6CE8\u7684\u6838\u5FC3\u662FMVC\u6A21\u5F0F\u4E2D\u7684\u89C6\u56FE\u5C42\uFF0C\u540C\u65F6\uFF0C\u5B83\u4E5F\u80FD\u65B9\u4FBF\u5730\u83B7\u53D6\u6570\u636E\u66F4\u65B0\uFF0C\u5E76\u901A\u8FC7\u7EC4\u4EF6\u5185\u90E8\u7279\u5B9A\u7684\u65B9\u6CD5\u5B9E\u73B0\u89C6\u56FE\u4E0E\u6A21\u578B\u7684\u4EA4\u4E92PS: Vue\u4F5C\u8005\u5C24\u96E8\u6EAA\u662F\u5728\u4E3AAngularJS\u5DE5\u4F5C\u4E4B\u540E\u5F00\u53D1\u51FA\u4E86\u8FD9\u4E00\u6846\u67B6\u3002\u4ED6\u58F0\u79F0\u81EA\u5DF1\u7684\u601D\u8DEF\u662F\u63D0\u53D6Angular\u4E2D\u4E3A\u81EA\u5DF1\u6240\u559C\u6B22\u7684\u90E8\u5206\uFF0C\u6784\u5EFA\u51FA\u4E00\u6B3E\u76F8\u5F53\u8F7B\u91CF\u7684\u6846\u67B6</p><h2 id="\u4E09\u3001vue\u6838\u5FC3\u7279\u6027" tabindex="-1">\u4E09\u3001Vue\u6838\u5FC3\u7279\u6027 <a class="header-anchor" href="#\u4E09\u3001vue\u6838\u5FC3\u7279\u6027" aria-hidden="true">#</a></h2><ul><li>\u6570\u636E\u9A71\u52A8\uFF08MVVM) MVVM\u8868\u793A\u7684\u662F Model-View-ViewModel</li></ul><p>Model\uFF1A\u6A21\u578B\u5C42\uFF0C\u8D1F\u8D23\u5904\u7406\u4E1A\u52A1\u903B\u8F91\u4EE5\u53CA\u548C\u670D\u52A1\u5668\u7AEF\u8FDB\u884C\u4EA4\u4E92<br> View\uFF1A\u89C6\u56FE\u5C42\uFF1A\u8D1F\u8D23\u5C06\u6570\u636E\u6A21\u578B\u8F6C\u5316\u4E3AUI\u5C55\u793A\u51FA\u6765\uFF0C\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E3AHTML\u9875\u9762<br> ViewModel\uFF1A\u89C6\u56FE\u6A21\u578B\u5C42\uFF0C\u7528\u6765\u8FDE\u63A5Model\u548CView\uFF0C\u662FModel\u548CView\u4E4B\u95F4\u7684\u901A\u4FE1\u6865\u6881</p><ul><li>\u7EC4\u4EF6\u5316<br> 1.\u4EC0\u4E48\u662F\u7EC4\u4EF6\u5316<br> \u4E00\u53E5\u8BDD\u6765\u8BF4\u5C31\u662F\u628A\u56FE\u5F62\u3001\u975E\u56FE\u5F62\u7684\u5404\u79CD\u903B\u8F91\u5747\u62BD\u8C61\u4E3A\u4E00\u4E2A\u7EDF\u4E00\u7684\u6982\u5FF5\uFF08\u7EC4\u4EF6\uFF09\u6765\u5B9E\u73B0\u5F00\u53D1\u7684\u6A21\u5F0F\uFF0C\u5728Vue\u4E2D\u6BCF\u4E00\u4E2A.vue\u6587\u4EF6\u90FD\u53EF\u4EE5\u89C6\u4E3A\u4E00\u4E2A\u7EC4\u4EF6<br> 2.\u7EC4\u4EF6\u5316\u7684\u4F18\u52BF <ul><li>\u964D\u4F4E\u6574\u4E2A\u7CFB\u7EDF\u7684\u8026\u5408\u5EA6\uFF0C\u5728\u4FDD\u6301\u63A5\u53E3\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66FF\u6362\u4E0D\u540C\u7684\u7EC4\u4EF6\u5FEB\u901F\u5B8C\u6210\u9700\u6C42\uFF0C\u4F8B\u5982\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u66FF\u6362\u4E3A\u65E5\u5386\u3001\u65F6\u95F4\u3001\u8303\u56F4\u7B49\u7EC4\u4EF6\u4F5C\u5177\u4F53\u7684\u5B9E\u73B0</li><li>\u8C03\u8BD5\u65B9\u4FBF\uFF0C\u7531\u4E8E\u6574\u4E2A\u7CFB\u7EDF\u662F\u901A\u8FC7\u7EC4\u4EF6\u7EC4\u5408\u8D77\u6765\u7684\uFF0C\u5728\u51FA\u73B0\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7528\u6392\u9664\u6CD5\u76F4\u63A5\u79FB\u9664\u7EC4\u4EF6\uFF0C\u6216\u8005\u6839\u636E\u62A5\u9519\u7684\u7EC4\u4EF6\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\uFF0C\u4E4B\u6240\u4EE5\u80FD\u591F\u5FEB\u901F\u5B9A\u4F4D\uFF0C\u662F\u56E0\u4E3A\u6BCF\u4E2A\u7EC4\u4EF6\u4E4B\u95F4\u4F4E\u8026\u5408\uFF0C\u804C\u8D23\u5355\u4E00\uFF0C\u6240\u4EE5\u903B\u8F91\u4F1A\u6BD4\u5206\u6790\u6574\u4E2A\u7CFB\u7EDF\u8981\u7B80\u5355</li><li>\u63D0\u9AD8\u53EF\u7EF4\u62A4\u6027\uFF0C\u7531\u4E8E\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u804C\u8D23\u5355\u4E00\uFF0C\u5E76\u4E14\u7EC4\u4EF6\u5728\u7CFB\u7EDF\u4E2D\u662F\u88AB\u590D\u7528\u7684\uFF0C\u6240\u4EE5\u5BF9\u4EE3\u7801\u8FDB\u884C\u4F18\u5316\u53EF\u83B7\u5F97\u7CFB\u7EDF\u7684\u6574\u4F53\u5347\u7EA7</li></ul></li><li>\u6307\u4EE4\u7CFB\u7EDF<br> \u89E3\u91CA\uFF1A\u6307\u4EE4 (Directives) \u662F\u5E26\u6709 v- \u524D\u7F00\u7684\u7279\u6B8A\u5C5E\u6027\u4F5C\u7528\uFF1A\u5F53\u8868\u8FBE\u5F0F\u7684\u503C\u6539\u53D8\u65F6\uFF0C\u5C06\u5176\u4EA7\u751F\u7684\u8FDE\u5E26\u5F71\u54CD\uFF0C\u54CD\u5E94\u5F0F\u5730\u4F5C\u7528\u4E8E DOM<br> \u5E38\u7528\u7684\u6307\u4EE4 <ul><li>\u6761\u4EF6\u6E32\u67D3\u6307\u4EE4 v-if</li><li>\u5217\u8868\u6E32\u67D3\u6307\u4EE4v-for</li><li>\u5C5E\u6027\u7ED1\u5B9A\u6307\u4EE4v-bind</li><li>\u4E8B\u4EF6\u7ED1\u5B9A\u6307\u4EE4v-on</li><li>\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u6307\u4EE4v-model</li><li>\u6CA1\u6709\u6307\u4EE4\u4E4B\u524D\u6211\u4EEC\u662F\u600E\u4E48\u505A\u7684\uFF1F\u662F\u4E0D\u662F\u5148\u8981\u83B7\u53D6\u5230DOM\u7136\u540E\u5728....\u5E72\u70B9\u5565</li></ul></li></ul><h2 id="\u56DB\u3001vue\u8DDF\u4F20\u7EDF\u5F00\u53D1\u7684\u533A\u522B" tabindex="-1">\u56DB\u3001Vue\u8DDF\u4F20\u7EDF\u5F00\u53D1\u7684\u533A\u522B <a class="header-anchor" href="#\u56DB\u3001vue\u8DDF\u4F20\u7EDF\u5F00\u53D1\u7684\u533A\u522B" aria-hidden="true">#</a></h2><p>\xB7 Vue\u6240\u6709\u7684\u754C\u9762\u4E8B\u4EF6\uFF0C\u90FD\u662F\u53EA\u53BB\u64CD\u4F5C\u6570\u636E\u7684\uFF0CJquery\u64CD\u4F5CDOM<br> \xB7 Vue\u6240\u6709\u754C\u9762\u7684\u53D8\u52A8\uFF0C\u90FD\u662F\u6839\u636E\u6570\u636E\u81EA\u52A8\u7ED1\u5B9A\u51FA\u6765\u7684\uFF0CJquery\u64CD\u4F5CDOM</p><h2 id="\u4E94\u3001vue\u548Creact\u5BF9\u6BD4" tabindex="-1">\u4E94\u3001Vue\u548CReact\u5BF9\u6BD4 <a class="header-anchor" href="#\u4E94\u3001vue\u548Creact\u5BF9\u6BD4" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u5C31\u505A\u51E0\u4E2A\u7B80\u5355\u7684\u7C7B\u6BD4\u5427\uFF0C\u5F53\u7136\u6CA1\u6709\u597D\u574F\u4E4B\u5206\uFF0C\u53EA\u662F\u4F7F\u7528\u573A\u666F\u4E0D\u540C</p><ul><li>\u76F8\u540C\u70B9 <ul><li>\u90FD\u6709\u7EC4\u4EF6\u5316\u601D\u60F3</li><li>\u90FD\u652F\u6301\u670D\u52A1\u5668\u7AEF\u6E32\u67D3</li><li>\u90FD\u6709Virtual DOM\uFF08\u865A\u62DFdom\uFF09</li><li>\u6570\u636E\u9A71\u52A8\u89C6\u56FE</li><li>\u90FD\u6709\u652F\u6301native\u7684\u65B9\u6848\uFF1AVue\u7684weex\u3001React\u7684React native</li><li>\u90FD\u6709\u81EA\u5DF1\u7684\u6784\u5EFA\u5DE5\u5177\uFF1AVue\u7684vue-cli\u3001React\u7684Create React App</li></ul></li><li>\u533A\u522B <ul><li>\u6570\u636E\u6D41\u5411\u7684\u4E0D\u540C\u3002react\u4ECE\u8BDE\u751F\u5F00\u59CB\u5C31\u63A8\u5D07\u5355\u5411\u6570\u636E\u6D41\uFF0C\u800CVue\u662F\u53CC\u5411\u6570\u636E\u6D41</li><li>\u6570\u636E\u53D8\u5316\u7684\u5B9E\u73B0\u539F\u7406\u4E0D\u540C\u3002react\u4F7F\u7528\u7684\u662F\u4E0D\u53EF\u53D8\u6570\u636E\uFF0C\u800CVue\u4F7F\u7528\u7684\u662F\u53EF\u53D8\u7684\u6570\u636E</li><li>\u7EC4\u4EF6\u5316\u901A\u4FE1\u7684\u4E0D\u540C\u3002react\u4E2D\u6211\u4EEC\u901A\u8FC7\u4F7F\u7528\u56DE\u8C03\u51FD\u6570\u6765\u8FDB\u884C\u901A\u4FE1\u7684\uFF0C\u800CVue\u4E2D\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012\u6D88\u606F\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A\u4E8B\u4EF6\u548C\u56DE\u8C03\u51FD\u6570</li><li>diff\u7B97\u6CD5\u4E0D\u540C\u3002react\u4E3B\u8981\u4F7F\u7528diff\u961F\u5217\u4FDD\u5B58\u9700\u8981\u66F4\u65B0\u54EA\u4E9BDOM\uFF0C\u5F97\u5230patch\u6811\uFF0C\u518D\u7EDF\u4E00\u64CD\u4F5C\u6279\u91CF\u66F4\u65B0DOM\u3002Vue \u4F7F\u7528\u53CC\u5411\u6307\u9488\uFF0C\u8FB9\u5BF9\u6BD4\uFF0C\u8FB9\u66F4\u65B0DOM</li></ul></li></ul><h4 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h4><p><a href="https://segmentfault.com/a/1190000016269636" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000016269636</a><br><a href="https://zh.wikipedia.org/zh-cn/Vue.js" target="_blank" rel="noreferrer">https://zh.wikipedia.org/zh-cn/Vue.js</a><br><a href="https://zhuanlan.zhihu.com/p/20197803" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/20197803</a><br><a href="https://zhuanlan.zhihu.com/p/38296857" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/38296857</a></p>`,21);function p(h,d,v,b,V,g){const e=r("font");return s(),a("div",null,[t(e,{style:{"font-size":"36px"}},{default:i(()=>[u("\u8C08\u8C08\u5BF9vue\u7684\u7406\u89E3")]),_:1}),c])}const _=l(o,[["render",p]]);export{f as __pageData,_ as default};