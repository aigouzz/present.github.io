(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{348:function(t,s,a){t.exports=a.p+"assets/img/vue8-1.2d4eb996.png"},349:function(t,s,a){t.exports=a.p+"assets/img/vue8-2.686499d9.png"},350:function(t,s,a){t.exports=a.p+"assets/img/vue8-3.bb5b901f.png"},546:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("font",{staticStyle:{"font-size":"36px"}},[t._v("首屏加载速度慢怎么办？")])],1),t._v(" "),s("h2",{attrs:{id:"一、什么是首屏加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是首屏加载"}},[t._v("#")]),t._v(" 一、什么是首屏加载")]),t._v(" "),s("p",[t._v("首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容")]),t._v(" "),s("p",[t._v("首屏加载可以说是用户体验中最重要的环节")]),t._v(" "),s("h3",{attrs:{id:"关于计算首屏时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于计算首屏时间"}},[t._v("#")]),t._v(" 关于计算首屏时间")]),t._v(" "),s("p",[t._v("利用performance.timing提供的数据：")]),t._v(" "),s("img",{attrs:{src:a(348)}}),t._v(" "),s("p",[t._v("通过DOMContentLoad或者performance来计算出首屏时间")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方案一：")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first contentful painting'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方案二：")]),t._v("\nperformance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first-contentful-paint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// performance.getEntriesByName("first-contentful-paint")[0]')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会返回一个 PerformancePaintTiming的实例，结构如下：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first-contentful-paint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entryType")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("startTime")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("507.80000002123415")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"二、加载慢的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、加载慢的原因"}},[t._v("#")]),t._v(" 二、加载慢的原因")]),t._v(" "),s("p",[t._v("在页面渲染的过程，导致加载速度慢的因素可能如下：")]),t._v(" "),s("ul",[s("li",[t._v("网络延时问题")]),t._v(" "),s("li",[t._v("资源文件体积是否过大")]),t._v(" "),s("li",[t._v("资源是否重复发送请求去加载了")]),t._v(" "),s("li",[t._v("加载脚本的时候，渲染内容堵塞了")])]),t._v(" "),s("h2",{attrs:{id:"三、解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、解决方案"}},[t._v("#")]),t._v(" 三、解决方案")]),t._v(" "),s("p",[t._v("常见的几种SPA首屏优化方式")]),t._v(" "),s("ul",[s("li",[t._v("减小入口文件积")]),t._v(" "),s("li",[t._v("静态资源本地缓存")]),t._v(" "),s("li",[t._v("UI框架按需加载")]),t._v(" "),s("li",[t._v("图片资源的压缩")]),t._v(" "),s("li",[t._v("组件重复打包")]),t._v(" "),s("li",[t._v("开启GZip压缩")]),t._v(" "),s("li",[t._v("使用SSR")])]),t._v(" "),s("h3",{attrs:{id:"减小入口文件体积"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减小入口文件体积"}},[t._v("#")]),t._v(" 减小入口文件体积")]),t._v(" "),s("p",[t._v("常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加")]),t._v(" "),s("img",{attrs:{src:a(349)}}),t._v(" "),s("p",[t._v("在vue-router配置路由的时候，采用动态加载路由的形式")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Blogs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ShowBlogs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/ShowBlogs.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件")]),t._v(" "),s("h3",{attrs:{id:"静态资源本地缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源本地缓存"}},[t._v("#")]),t._v(" 静态资源本地缓存")]),t._v(" "),s("p",[t._v("后端返回资源问题：")]),t._v(" "),s("ul",[s("li",[t._v("采用HTTP缓存，设置Cache-Control，Last-Modified，Etag等响应头")]),t._v(" "),s("li",[t._v("采用Service Worker离线缓存")]),t._v(" "),s("li",[t._v("前端合理利用localStorage")])]),t._v(" "),s("h3",{attrs:{id:"ui框架按需加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui框架按需加载"}},[t._v("#")]),t._v(" UI框架按需加载")]),t._v(" "),s("p",[t._v("在日常使用UI框架，例如element-UI、或者antd，我们经常性直接引用整个UI库")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElementUI "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ElementUI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Pagination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TableColumn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MessageBox "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Pagination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"组件重复打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件重复打包"}},[t._v("#")]),t._v(" 组件重复打包")]),t._v(" "),s("p",[t._v("假设A.js文件是一个常用的库，现在有多个路由使用了A.js文件，这就造成了重复下载")]),t._v(" "),s("p",[t._v("解决方案：在webpack的config文件中，修改CommonsChunkPlugin的配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("minChunks")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("p",[t._v("minChunks为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件")]),t._v(" "),s("h3",{attrs:{id:"图片资源的压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片资源的压缩"}},[t._v("#")]),t._v(" 图片资源的压缩")]),t._v(" "),s("p",[t._v("图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素")]),t._v(" "),s("p",[t._v("对于所有的图片资源，我们可以进行适当的压缩")]),t._v(" "),s("p",[t._v("对页面上使用到的icon，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻http请求压力。")]),t._v(" "),s("h3",{attrs:{id:"开启gzip压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启gzip压缩"}},[t._v("#")]),t._v(" 开启GZip压缩")]),t._v(" "),s("p",[t._v("拆完包之后，我们再用gzip做一下压缩 安装compression-webpack-plugin")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("cnmp i compression"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n")])])]),s("p",[t._v("在vue.congig.js中引入并修改webpack配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CompressionPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compression-webpack-plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为生产环境修改配置...")]),t._v("\n            config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompressionPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$|\\.html$|\\.css")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匹配文件名")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("threshold")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对超过10k的数据进行压缩")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("deleteOriginalAssets")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否删除原文件")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在服务器我们也要做相应的配置 如果发送请求的浏览器支持gzip，就发送给它gzip格式的文件 我的服务器是用express框架搭建的 只要安装一下compression就能使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" compression "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compression'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在其他中间件使用之前调用")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用ssr"}},[t._v("#")]),t._v(" 使用SSR")]),t._v(" "),s("p",[t._v("SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器")]),t._v(" "),s("p",[t._v("从头搭建一个服务端渲染是很复杂的，vue应用建议使用Nuxt.js实现服务端渲染")]),t._v(" "),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结：")]),t._v(" "),s("p",[t._v("减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分")]),t._v(" "),s("ul",[s("li",[t._v("资源加载优化")]),t._v(" "),s("li",[t._v("页面渲染优化")])]),t._v(" "),s("p",[t._v("下图是更为全面的首屏优化的方案")]),t._v(" "),s("img",{attrs:{src:a(350)}}),t._v(" "),s("p",[t._v("大家可以根据自己项目的情况选择各种方式进行首屏渲染的优化")]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session")]),t._v(" "),s("li",[t._v("https://www.chengrang.com/how-browsers-work.html")]),t._v(" "),s("li",[t._v("https://juejin.cn/post/6844904185264095246")])])])}),[],!1,null,null,null);s.default=e.exports}}]);