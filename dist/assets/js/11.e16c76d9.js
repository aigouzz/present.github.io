(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{279:function(t,s,a){t.exports=a.p+"assets/img/calc1-5.b5bea97f.png"},280:function(t,s,a){t.exports=a.p+"assets/img/calc1-6.337590e5.png"},281:function(t,s,a){t.exports=a.p+"assets/img/calc1-7.a4035533.png"},395:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("font",{staticStyle:{"font-size":"36px"}},[t._v("对于链表的理解和常见操作")])],1),t._v(" "),s("h2",{attrs:{id:"一、是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),s("p",[t._v("链表（Linked List）是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的，由一系列结点（链表中每一个元素称为结点）组成")]),t._v(" "),s("p",[t._v("每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域")]),t._v(" "),s("img",{attrs:{src:a(279)}}),t._v(" "),s("p",[t._v("节点用代码表示，则如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("data 表示节点存放的数据\nnext 表示下一个节点指向的内存空间\n相比于线性表顺序结构，操作复杂。由于不必须按顺序存储，链表在插入的时候可以达到O(1)的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要O(n)的时间，而线性表和顺序表相应的时间复杂度分别是O(logn)和O(1)")]),t._v(" "),s("p",[t._v("链表的结构也十分多，常见的有四种形式：")]),t._v(" "),s("ul",[s("li",[t._v("单链表：除了头节点和尾节点，其他节点只包含一个后继指针")]),t._v(" "),s("li",[t._v("循环链表：跟单链表唯一的区别就在于它的尾结点又指回了链表的头结点，首尾相连，形成了一个环")]),t._v(" "),s("li",[t._v("双向链表：每个结点具有两个方向指针，后继指针(next)指向后面的结点，前驱指针(prev)指向前面的结点，其中节点的前驱指针和尾结点的后继指针均指向空地址NULL")]),t._v(" "),s("li",[t._v("双向循环链表：跟双向链表基本一致，不过头节点前驱指针指向尾迹诶单和尾节点的后继指针指向头节点")])]),t._v(" "),s("h2",{attrs:{id:"二、操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、操作"}},[t._v("#")]),t._v(" 二、操作")]),t._v(" "),s("p",[t._v("关于链表的操作可以主要分成如下：")]),t._v(" "),s("ul",[s("li",[t._v("遍历")]),t._v(" "),s("li",[t._v("插入")]),t._v(" "),s("li",[t._v("删除")])]),t._v(" "),s("h3",{attrs:{id:"遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遍历"}},[t._v("#")]),t._v(" 遍历")]),t._v(" "),s("p",[t._v("遍历很好理解，就是根据next指针遍历下去，直到为null，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"插入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入"}},[t._v("#")]),t._v(" 插入")]),t._v(" "),s("p",[t._v("向链表中间插入一个元素，可以如下图所示：")]),t._v(" "),s("img",{attrs:{src:a(280)}}),t._v(" "),s("p",[t._v("可以看到，插入节点可以分成如下步骤：")]),t._v(" "),s("ul",[s("li",[t._v("存储插入位置的前一个节点")]),t._v(" "),s("li",[t._v("存储插入位置的后一个节点")]),t._v(" "),s("li",[t._v("将插入位置的前一个节点的 next 指向插入节点")]),t._v(" "),s("li",[t._v("将插入节点的 next 指向前面存储的 next 节点")])]),t._v(" "),s("p",[t._v("相关代码如下所示：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pervious "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\npervious"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果在头节点进行插入操作的时候，会实现previousNode节点为undefined，不适合上述方式")]),t._v(" "),s("p",[t._v("解放方式可以是在头节点前面添加一个虚拟头节点，保证插入行为一致")]),t._v(" "),s("h3",{attrs:{id:"删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),s("p",[t._v("向链表任意位置删除节点，如下图操作：")]),t._v(" "),s("img",{attrs:{src:a(281)}}),t._v(" "),s("p",[t._v("从上图可以看到删除节点的步骤为如下：")]),t._v(" "),s("ul",[s("li",[t._v("获取删除节点的前一个节点")]),t._v(" "),s("li",[t._v("获取删除节点的后一个节点")]),t._v(" "),s("li",[t._v("将前一个节点的 next 指向后一个节点")]),t._v(" "),s("li",[t._v("向删除节点的 next 指向为null\n如果想要删除制定的节点，示意代码如下：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pervious "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  nextNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\npervious"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextNode\n")])])]),s("p",[t._v("同样如何希望删除节点处理行为一致，可以在头节点前面添加一个虚拟头节点")]),t._v(" "),s("h2",{attrs:{id:"三、应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[t._v("#")]),t._v(" 三、应用场景")]),t._v(" "),s("p",[t._v("缓存是一种提高数据读取性能的技术，在硬件设计、软件开发中都有着非常广泛的应用，比如常见的CPU缓存、数据库缓存、浏览器缓存等等")]),t._v(" "),s("p",[t._v("当缓存空间被用满时，我们可能会使用LRU最近最好使用策略去清楚，而实现LRU算法的数据结构是链表，思路如下：")]),t._v(" "),s("p",[t._v("维护一个有序单链表，越靠近链表尾部的结点是越早之前访问的。当有一个新的数据被访问时，我们从链表头部开始顺序遍历链表")]),t._v(" "),s("ul",[s("li",[t._v("如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据的对应结点，并将其从原来的位置删除，并插入到链表头部")]),t._v(" "),s("li",[t._v("如果此数据没在缓存链表中\n"),s("ul",[s("li",[t._v("如果此时缓存未满，可直接在链表头部插入新节点存储此数据")]),t._v(" "),s("li",[t._v("如果此时缓存已满，则删除链表尾部节点，再在链表头部插入新节点")])])])]),t._v(" "),s("p",[t._v("由于链表插入删除效率极高，达到O(1)。对于不需要搜索但变动频繁且无法预知数量上限的数据的情况的时候，都可以使用链表")]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://zh.wikipedia.org/zh-hans/%E9%93%BE%E8%A1%A8")]),t._v(" "),s("li",[t._v("https://mah93.github.io/2019/07/19/js-linked/")])])])}),[],!1,null,null,null);s.default=e.exports}}]);