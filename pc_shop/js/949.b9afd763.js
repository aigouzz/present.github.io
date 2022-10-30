"use strict";(self["webpackChunkvue3_init_pc_shop"]=self["webpackChunkvue3_init_pc_shop"]||[]).push([[949],{9956:function(e,t,n){n.d(t,{QN:function(){return c},Rt:function(){return u},_G:function(){return o},on:function(){return m},pm:function(){return l},rz:function(){return g},sL:function(){return a},sl:function(){return d},xb:function(){return p},z4:function(){return r}});var s=n(2558),i=n(1427);const r=e=>Promise.resolve(i.Z8),o=e=>(0,s.K)("/member/cartList",e),a=e=>(0,s.K)("/member/delCartChecked",e),l=e=>Promise.resolve(i.T7),c=e=>Promise.resolve(i.OK),u=e=>Promise.resolve(i.p),d=e=>(0,s.K)("/member/cancelOrder",e),g=e=>Promise.resolve(i.ux),m=e=>(0,s.k)("/goods/search",e),p=e=>Promise.resolve(i.Tx)},2778:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(4317),i=n(5964);const r=["type","disabled","value"];function o(e,t,n,o,a,l){return(0,s.wg)(),(0,s.iD)("input",{type:n.inputType,readonly:"",class:(0,i.C_)(n.classStyle),onClick:t[0]||(t[0]=(...e)=>l.btnClick&&l.btnClick(...e)),disabled:"disabled-btn"===n.classStyle,value:n.text},null,10,r)}var a={props:{text:{type:[String,Number],default:"一颗小按钮"},inputType:{type:String,default:"button"},classStyle:{type:String,default:"default-btn"}},methods:{btnClick(e){this.$emit("btnClick",e)}}},l=n(963);const c=(0,l.Z)(a,[["render",o],["__scopeId","data-v-ce30ba20"]]);var u=c},1892:function(e,t,n){n.d(t,{Z:function(){return C}});var s=n(4317),i=n(5964);const r=e=>((0,s.dD)("data-v-46147410"),e=e(),(0,s.Cn)(),e),o={class:"good-item"},a={style:{}},l={class:"good-img"},c=["alt"],u={class:"good-title"},d={class:"sub-title ellipsis"},g={class:"good-price pr"},m={class:"ds pa"},p=r((()=>(0,s._)("span",{style:{"font-size":"14px"}},"￥",-1)));function h(e,t,n,r,h,_){const v=(0,s.up)("y-button"),y=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",a,[(0,s._)("div",l,[(0,s._)("a",{onClick:t[0]||(t[0]=e=>_.goodsDetails(n.msg.productId))},[(0,s.wy)(((0,s.wg)(),(0,s.iD)("img",{alt:n.msg.productName,key:n.msg.productImageBig},null,8,c)),[[y,n.msg.productImageBig]])])]),(0,s._)("h6",u,(0,i.zw)(n.msg.productName),1),(0,s._)("h3",d,(0,i.zw)(n.msg.subTitle),1),(0,s._)("div",g,[(0,s._)("div",m,[(0,s._)("a",{onClick:t[1]||(t[1]=e=>_.goodsDetails(n.msg.productId))},[(0,s.Wm)(v,{text:"查看详情",style:{margin:"0 5px"}})]),(0,s.Wm)(v,{text:"加入购物车",style:{margin:"0 5px"},onBtnClick:t[2]||(t[2]=e=>_.addCart(n.msg.productId,n.msg.salePrice,n.msg.productName,n.msg.productImageBig)),classStyle:"main-btn"})]),(0,s._)("p",null,[p,(0,s.Uk)((0,i.zw)(Number(n.msg.salePrice).toFixed(2)),1)])])])])}n(2575);var _=n(2778),v=(n(9956),n(9192)),y={props:{msg:{salePrice:0}},data(){return{}},methods:{...(0,v.OI)(["ADD_CART","ADD_ANIMATION","SHOW_CART"]),goodsDetails(e){this.$router.push({path:"/goodsDetails",query:{productId:e}})},addCart(e,t,n,s){if(!this.showMoveImg){this.ADD_CART({productId:e,salePrice:t,productName:n,productImg:s});var i=event.target;let r=i.getBoundingClientRect().left+i.offsetWidth/2,o=i.getBoundingClientRect().top+i.offsetHeight/2;this.ADD_ANIMATION({moveShow:!0,elLeft:r,elTop:o,img:s}),this.showCart||this.SHOW_CART({showCart:!0})}}},computed:{...(0,v.rn)(["login","showMoveImg","showCart"])},mounted(){},components:{YButton:_.Z}},w=n(963);const f=(0,w.Z)(y,[["render",h],["__scopeId","data-v-46147410"]]);var C=f},4154:function(e,t,n){n.d(t,{Z:function(){return d}});var s=n(4317),i=n(5964);const r={class:"gray-box"},o={class:"title"};function a(e,t,n,a,l,c){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",o,[(0,s._)("h2",null,(0,i.zw)(n.title),1),(0,s._)("div",null,[(0,s.WI)(e.$slots,"right",{},void 0,!0)])]),(0,s._)("div",null,[(0,s.WI)(e.$slots,"content",{},void 0,!0)])])}var l={props:["title"]},c=n(963);const u=(0,c.Z)(l,[["render",a],["__scopeId","data-v-6099d476"]]);var d=u},6949:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var s=n(4317),i=n(5964),r=n(9333),o=n(5742),a=n(3322);const l=e=>((0,s.dD)("data-v-eb40f5c2"),e=e(),(0,s.Cn)(),e),c={class:"goods"},u={class:"nav-subs"},d=l((()=>(0,s._)("div",{class:"nav-sub-bgs"},null,-1))),g={class:"nav-sub-wrappers"},m={class:"w"},p={class:"nav-lists"},h=l((()=>(0,s._)("a",null,"首页",-1))),_=l((()=>(0,s._)("li",null,[(0,s._)("a",{class:"active"},"搜索结果")],-1))),v={key:0},y={key:1},w=l((()=>(0,s._)("div",null,null,-1))),f={class:"nav"},C={class:"w"},k={class:"price-interval"},b=l((()=>(0,s._)("span",{style:{margin:"0 5px"}}," - ",-1))),D={"element-loading-text":"加载中...",style:{"min-height":"35vw"}},S={key:0,class:"img-item"},P={class:"goods-box w"},x={key:1,class:"no-info"},z=l((()=>(0,s._)("div",{class:"no-data"},[(0,s._)("img",{src:o}),(0,s._)("br"),(0,s.Uk)(" 抱歉！没有为您找到相关的商品 ")],-1))),I={class:"section"},T={class:"recommend"},W={key:2,class:"no-info"},B=l((()=>(0,s._)("div",{class:"no-data"},[(0,s._)("img",{src:a}),(0,s._)("br"),(0,s.Uk)(" 抱歉！出错了... ")],-1))),R={class:"section"},A={class:"recommend"};function Z(e,t,n,o,a,l){const Z=(0,s.up)("router-link"),N=(0,s.up)("y-button"),H=(0,s.up)("mall-goods"),j=(0,s.up)("el-pagination"),q=(0,s.up)("y-shelf"),K=(0,s.Q2)("loading");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",u,[d,(0,s._)("div",g,[(0,s._)("div",m,[(0,s._)("ul",p,[(0,s._)("li",null,[(0,s.Wm)(Z,{to:"/"},{default:(0,s.w5)((()=>[h])),_:1})]),_,(0,s._)("li",null,[!0===a.searching?((0,s.wg)(),(0,s.iD)("a",v,"拼命搜索中...")):(0,s.kq)("",!0),!1===a.searching?((0,s.wg)(),(0,s.iD)("a",y,"共为您找到 "+(0,i.zw)(a.total)+" 款商品信息",1)):(0,s.kq)("",!0)])]),w])])]),(0,s._)("div",f,[(0,s._)("div",C,[(0,s._)("a",{href:"javascript:;",class:(0,i.C_)({active:1===a.sortType}),onClick:t[0]||(t[0]=e=>l.reset())},"综合排序",2),(0,s._)("a",{href:"javascript:;",onClick:t[1]||(t[1]=e=>l.sortByPrice(1)),class:(0,i.C_)({active:2===a.sortType})},"价格从低到高",2),(0,s._)("a",{href:"javascript:;",onClick:t[2]||(t[2]=e=>l.sortByPrice(-1)),class:(0,i.C_)({active:3===a.sortType})},"价格从高到低",2),(0,s._)("div",k,[(0,s.wy)((0,s._)("input",{type:"number",class:"input",placeholder:"价格","onUpdate:modelValue":t[3]||(t[3]=e=>a.min=e)},null,512),[[r.nr,a.min]]),b,(0,s.wy)((0,s._)("input",{type:"number",placeholder:"价格","onUpdate:modelValue":t[4]||(t[4]=e=>a.max=e)},null,512),[[r.nr,a.max]]),(0,s.Wm)(N,{text:"确定",classStyle:"main-btn",onBtnClick:l.reset,style:{"margin-left":"10px"}},null,8,["onBtnClick"])])])]),(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",D,[a.noResult?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("div",P,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.goods,((e,t)=>((0,s.wg)(),(0,s.j4)(H,{key:t,msg:e},null,8,["msg"])))),128))]),a.noResult||a.error?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(j,{key:0,onSizeChange:l.handleSizeChange,onCurrentChange:l.handleCurrentChange,"current-page":a.currentPage,"page-sizes":[8,20,40,80],"page-size":a.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:a.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"]))])),a.noResult?((0,s.wg)(),(0,s.iD)("div",x,[z,(0,s._)("section",I,[(0,s.Wm)(q,{title:a.recommendPanel.name},{content:(0,s.w5)((()=>[(0,s._)("div",T,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.recommendPanel.panelContents,((e,t)=>((0,s.wg)(),(0,s.j4)(H,{msg:e,key:t},null,8,["msg"])))),128))])])),_:1},8,["title"])])])):(0,s.kq)("",!0),a.error?((0,s.wg)(),(0,s.iD)("div",W,[B,(0,s._)("section",R,[(0,s.Wm)(q,{title:a.recommendPanel.name},{content:(0,s.w5)((()=>[(0,s._)("div",A,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.recommendPanel.panelContents,((e,t)=>((0,s.wg)(),(0,s.j4)(H,{msg:e,key:t},null,8,["msg"])))),128))])])),_:1},8,["title"])])])):(0,s.kq)("",!0)])),[[K,a.loading]])])}var N=n(9956),H=n(9256),j=n(1892),q=n(2778),K=n(4154),O={data(){return{goods:[],noResult:!1,error:!1,min:"",max:"",loading:!0,searching:!0,timer:null,sortType:1,windowHeight:null,windowWidth:null,sort:"",recommendPanel:[],currentPage:1,pageSize:20,total:0,key:""}},methods:{handleSizeChange(e){this.pageSize=e,this._getSearch(),this.loading=!0},handleCurrentChange(e){this.currentPage=e,this._getSearch(),this.loading=!0},_getSearch(){let e={params:{key:this.key,size:this.pageSize,page:this.currentPage,sort:this.sort,priceGt:this.min,priceLte:this.max}};(0,N.on)(e).then((e=>{!0===e.success?(this.goods=e.result.itemList,this.total=e.result.recordCount,this.noResult=!1,0===this.total&&(this.noResult=!0),this.error=!1):this.error=!0,this.loading=!1,this.searching=!1}))},reset(){this.sortType=1,this.sort="",this.currentPage=1,this.loading=!0,this._getSearch()},sortByPrice(e){this.sortType=1===e?2:3,this.sort=e,this.currentPage=1,this.loading=!0,this._getSearch()}},created(){},mounted(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.key=this.$route.query.key,this._getSearch(),(0,H.l8)().then((e=>{let t=e.result;this.recommendPanel=t[0]}))},components:{mallGoods:j.Z,YButton:q.Z,YShelf:K.Z}},Y=n(963);const L=(0,Y.Z)(O,[["render",Z],["__scopeId","data-v-eb40f5c2"]]);var U=L},3322:function(e,t,n){e.exports=n.p+"img/error.320118f8.png"},5742:function(e,t,n){e.exports=n.p+"img/no-search.5aba8c45.png"}}]);
//# sourceMappingURL=949.b9afd763.js.map