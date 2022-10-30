"use strict";(self["webpackChunkvue3_init_pc_shop"]=self["webpackChunkvue3_init_pc_shop"]||[]).push([[23],{9956:function(t,e,s){s.d(e,{QN:function(){return c},Rt:function(){return d},_G:function(){return r},on:function(){return h},pm:function(){return a},rz:function(){return g},sL:function(){return l},sl:function(){return u},xb:function(){return m},z4:function(){return o}});var i=s(2558),n=s(1427);const o=t=>Promise.resolve(n.Z8),r=t=>(0,i.K)("/member/cartList",t),l=t=>(0,i.K)("/member/delCartChecked",t),a=t=>Promise.resolve(n.T7),c=t=>Promise.resolve(n.OK),d=t=>Promise.resolve(n.p),u=t=>(0,i.K)("/member/cancelOrder",t),g=t=>Promise.resolve(n.ux),h=t=>(0,i.k)("/goods/search",t),m=t=>Promise.resolve(n.Tx)},2778:function(t,e,s){s.d(e,{Z:function(){return d}});var i=s(4317),n=s(5964);const o=["type","disabled","value"];function r(t,e,s,r,l,a){return(0,i.wg)(),(0,i.iD)("input",{type:s.inputType,readonly:"",class:(0,n.C_)(s.classStyle),onClick:e[0]||(e[0]=(...t)=>a.btnClick&&a.btnClick(...t)),disabled:"disabled-btn"===s.classStyle,value:s.text},null,10,o)}var l={props:{text:{type:[String,Number],default:"一颗小按钮"},inputType:{type:String,default:"button"},classStyle:{type:String,default:"default-btn"}},methods:{btnClick(t){this.$emit("btnClick",t)}}},a=s(963);const c=(0,a.Z)(l,[["render",r],["__scopeId","data-v-ce30ba20"]]);var d=c},1892:function(t,e,s){s.d(e,{Z:function(){return C}});var i=s(4317),n=s(5964);const o=t=>((0,i.dD)("data-v-46147410"),t=t(),(0,i.Cn)(),t),r={class:"good-item"},l={style:{}},a={class:"good-img"},c=["alt"],d={class:"good-title"},u={class:"sub-title ellipsis"},g={class:"good-price pr"},h={class:"ds pa"},m=o((()=>(0,i._)("span",{style:{"font-size":"14px"}},"￥",-1)));function p(t,e,s,o,p,v){const _=(0,i.up)("y-button"),f=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",l,[(0,i._)("div",a,[(0,i._)("a",{onClick:e[0]||(e[0]=t=>v.goodsDetails(s.msg.productId))},[(0,i.wy)(((0,i.wg)(),(0,i.iD)("img",{alt:s.msg.productName,key:s.msg.productImageBig},null,8,c)),[[f,s.msg.productImageBig]])])]),(0,i._)("h6",d,(0,n.zw)(s.msg.productName),1),(0,i._)("h3",u,(0,n.zw)(s.msg.subTitle),1),(0,i._)("div",g,[(0,i._)("div",h,[(0,i._)("a",{onClick:e[1]||(e[1]=t=>v.goodsDetails(s.msg.productId))},[(0,i.Wm)(_,{text:"查看详情",style:{margin:"0 5px"}})]),(0,i.Wm)(_,{text:"加入购物车",style:{margin:"0 5px"},onBtnClick:e[2]||(e[2]=t=>v.addCart(s.msg.productId,s.msg.salePrice,s.msg.productName,s.msg.productImageBig)),classStyle:"main-btn"})]),(0,i._)("p",null,[m,(0,i.Uk)((0,n.zw)(Number(s.msg.salePrice).toFixed(2)),1)])])])])}s(2575);var v=s(2778),_=(s(9956),s(9192)),f={props:{msg:{salePrice:0}},data(){return{}},methods:{...(0,_.OI)(["ADD_CART","ADD_ANIMATION","SHOW_CART"]),goodsDetails(t){this.$router.push({path:"/goodsDetails",query:{productId:t}})},addCart(t,e,s,i){if(!this.showMoveImg){this.ADD_CART({productId:t,salePrice:e,productName:s,productImg:i});var n=event.target;let o=n.getBoundingClientRect().left+n.offsetWidth/2,r=n.getBoundingClientRect().top+n.offsetHeight/2;this.ADD_ANIMATION({moveShow:!0,elLeft:o,elTop:r,img:i}),this.showCart||this.SHOW_CART({showCart:!0})}}},computed:{...(0,_.rn)(["login","showMoveImg","showCart"])},mounted(){},components:{YButton:v.Z}},y=s(963);const w=(0,y.Z)(f,[["render",p],["__scopeId","data-v-46147410"]]);var C=w},4154:function(t,e,s){s.d(e,{Z:function(){return u}});var i=s(4317),n=s(5964);const o={class:"gray-box"},r={class:"title"};function l(t,e,s,l,a,c){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",r,[(0,i._)("h2",null,(0,n.zw)(s.title),1),(0,i._)("div",null,[(0,i.WI)(t.$slots,"right",{},void 0,!0)])]),(0,i._)("div",null,[(0,i.WI)(t.$slots,"content",{},void 0,!0)])])}var a={props:["title"]},c=s(963);const d=(0,c.Z)(a,[["render",l],["__scopeId","data-v-6099d476"]]);var u=d},2023:function(t,e,s){s.r(e),s.d(e,{default:function(){return R}});var i=s(4317),n=s(5964),o=s(9333),r=s(5742),l=s(3322);const a=t=>((0,i.dD)("data-v-6b764731"),t=t(),(0,i.Cn)(),t),c={class:"goods"},d={class:"nav"},u={class:"w"},g={class:"price-interval"},h=a((()=>(0,i._)("span",{style:{margin:"0 5px"}}," - ",-1))),m={"element-loading-text":"加载中...",style:{"min-height":"35vw"}},p={key:0,class:"img-item"},v={class:"goods-box w"},_={key:1,class:"no-info"},f=a((()=>(0,i._)("div",{class:"no-data"},[(0,i._)("img",{src:r}),(0,i._)("br"),(0,i.Uk)(" 抱歉！暂时还没有商品 ")],-1))),y={class:"section"},w={class:"recommend"},C={key:2,class:"no-info"},b=a((()=>(0,i._)("div",{class:"no-data"},[(0,i._)("img",{src:l}),(0,i._)("br"),(0,i.Uk)(" 抱歉！出错了... ")],-1))),k={class:"section"},P={class:"recommend"};function x(t,e,s,r,l,a){const x=(0,i.up)("y-button"),D=(0,i.up)("mall-goods"),z=(0,i.up)("el-pagination"),I=(0,i.up)("y-shelf"),S=(0,i.Q2)("loading");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("a",{href:"javascript:;",class:(0,n.C_)({active:1===l.sortType}),onClick:e[0]||(e[0]=t=>a.reset())},"综合排序",2),(0,i._)("a",{href:"javascript:;",onClick:e[1]||(e[1]=t=>a.sortByPrice(1)),class:(0,n.C_)({active:2===l.sortType})},"价格从低到高",2),(0,i._)("a",{href:"javascript:;",onClick:e[2]||(e[2]=t=>a.sortByPrice(-1)),class:(0,n.C_)({active:3===l.sortType})},"价格从高到低",2),(0,i._)("div",g,[(0,i.wy)((0,i._)("input",{type:"number",class:"input",placeholder:"价格","onUpdate:modelValue":e[3]||(e[3]=t=>l.min=t)},null,512),[[o.nr,l.min]]),h,(0,i.wy)((0,i._)("input",{type:"number",placeholder:"价格","onUpdate:modelValue":e[4]||(e[4]=t=>l.max=t)},null,512),[[o.nr,l.max]]),(0,i.Wm)(x,{text:"确定",classStyle:"main-btn",onBtnClick:a.reset,style:{"margin-left":"10px"}},null,8,["onBtnClick"])])])]),(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",m,[l.noResult?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",p,[(0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.goods,((t,e)=>((0,i.wg)(),(0,i.j4)(D,{key:e,msg:t},null,8,["msg"])))),128))]),l.noResult||l.error?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(z,{key:0,onSizeChange:a.handleSizeChange,onCurrentChange:a.handleCurrentChange,"current-page":l.currentPage,"page-sizes":[8,20,40,80],"page-size":l.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:l.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"]))])),l.noResult?((0,i.wg)(),(0,i.iD)("div",_,[f,(0,i._)("section",y,[(0,i.Wm)(I,{title:l.recommendPanel.name},{content:(0,i.w5)((()=>[(0,i._)("div",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.recommendPanel.panelContents,((t,e)=>((0,i.wg)(),(0,i.j4)(D,{msg:t,key:e},null,8,["msg"])))),128))])])),_:1},8,["title"])])])):(0,i.kq)("",!0),l.error?((0,i.wg)(),(0,i.iD)("div",C,[b,(0,i._)("section",k,[(0,i.Wm)(I,{title:l.recommendPanel.name},{content:(0,i.w5)((()=>[(0,i._)("div",P,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.recommendPanel.panelContents,((t,e)=>((0,i.wg)(),(0,i.j4)(D,{msg:t,key:e},null,8,["msg"])))),128))])])),_:1},8,["title"])])])):(0,i.kq)("",!0)])),[[S,l.loading]])])}var D=s(9956),z=s(9256),I=s(1892),S=s(2778),T=s(4154),A={data(){return{goods:[],noResult:!1,error:!1,min:"",max:"",loading:!0,timer:null,sortType:1,windowHeight:null,windowWidth:null,recommendPanel:[],sort:"",currentPage:1,total:0,pageSize:20,allGoods:[]}},methods:{handleSizeChange(t){this.pageSize=t,this._getAllGoods(),this.loading=!0},handleCurrentChange(t){this.currentPage=t,this._getAllGoods(),this.loading=!0},_getAllGoods(){let t=this.$route.query.cid;""!==this.min&&(this.min=Math.floor(this.min)),""!==this.max&&(this.max=Math.floor(this.max));let e={params:{page:this.currentPage,size:this.pageSize,sort:this.sort,priceGt:this.min,priceLte:this.max,cid:t}},s=(this.currentPage-1)*this.pageSize,i=this.currentPage*this.pageSize;(0,D.z4)(e).then((t=>{!0===t.success?(this.total=t.result.total,this.allGoods=t.result.data,2==this.sortType?this.allGoods.sort(((t,e)=>t.salePrice-e.salePrice)):3===this.sortType?this.allGoods.sort(((t,e)=>e.salePrice-t.salePrice)):"number"===typeof this.min&&"number"===typeof this.max&&this.min<this.max&&(this.allGoods=this.allGoods.filter((t=>t.salePrice>this.min&&t.salePrice<this.max))),this.goods=this.allGoods.slice(s,i),this.noResult=!1,0===this.goods.length&&(this.noResult=!0),this.error=!1):this.error=!0,this.loading=!1}))},reset(){this.sortType=1,this.sort="",this.currentPage=1,this.loading=!0,this._getAllGoods()},sortByPrice(t){this.sortType=1===t?2:3,this.sort=t,this.currentPage=1,this.loading=!0,this._getAllGoods()}},watch:{$route(t,e){t.fullPath.indexOf("/goods?cid=")>=0&&(this.cId=t.query.cid,this._getAllGoods())}},created(){},mounted(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this._getAllGoods(),(0,z.l8)().then((t=>{this.recommendPanel=t.result[0]}))},components:{mallGoods:I.Z,YButton:S.Z,YShelf:T.Z}},G=s(963);const B=(0,G.Z)(A,[["render",x],["__scopeId","data-v-6b764731"]]);var R=B},3322:function(t,e,s){t.exports=s.p+"img/error.320118f8.png"},5742:function(t,e,s){t.exports=s.p+"img/no-search.5aba8c45.png"}}]);
//# sourceMappingURL=23.37cd3214.js.map