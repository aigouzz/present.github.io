"use strict";(self["webpackChunkvue3_init_pc_shop"]=self["webpackChunkvue3_init_pc_shop"]||[]).push([[867],{9956:function(t,i,e){e.d(i,{QN:function(){return a},Rt:function(){return c},_G:function(){return l},on:function(){return p},pm:function(){return o},rz:function(){return m},sL:function(){return r},sl:function(){return d},xb:function(){return h},z4:function(){return u}});var s=e(2558),n=e(1427);const u=t=>Promise.resolve(n.Z8),l=t=>(0,s.K)("/member/cartList",t),r=t=>(0,s.K)("/member/delCartChecked",t),o=t=>Promise.resolve(n.T7),a=t=>Promise.resolve(n.OK),c=t=>Promise.resolve(n.p),d=t=>(0,s.K)("/member/cancelOrder",t),m=t=>Promise.resolve(n.ux),p=t=>(0,s.k)("/goods/search",t),h=t=>Promise.resolve(n.Tx)},2778:function(t,i,e){e.d(i,{Z:function(){return c}});var s=e(4317),n=e(5964);const u=["type","disabled","value"];function l(t,i,e,l,r,o){return(0,s.wg)(),(0,s.iD)("input",{type:e.inputType,readonly:"",class:(0,n.C_)(e.classStyle),onClick:i[0]||(i[0]=(...t)=>o.btnClick&&o.btnClick(...t)),disabled:"disabled-btn"===e.classStyle,value:e.text},null,10,u)}var r={props:{text:{type:[String,Number],default:"一颗小按钮"},inputType:{type:String,default:"button"},classStyle:{type:String,default:"default-btn"}},methods:{btnClick(t){this.$emit("btnClick",t)}}},o=e(963);const a=(0,o.Z)(r,[["render",l],["__scopeId","data-v-ce30ba20"]]);var c=a},7098:function(t,i,e){e.d(i,{Z:function(){return h}});var s=e(4317),n=e(5964),u=e(9333);const l={class:"item-cols-num clearfix"},r={class:"select"},o={class:"num"},a={ref:"ul"};function c(t,i,e,c,d,m){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",r,[(0,s._)("span",{class:(0,n.C_)(["down",{"down-disabled":d.Num<=1}]),onClick:i[0]||(i[0]=(0,u.iM)((t=>m.down()),["stop","prevent"]))},"- ",2),(0,s._)("span",o,[(0,s.wy)((0,s._)("input",{type:"text",class:(0,n.C_)({show:d.show}),"onUpdate:modelValue":i[1]||(i[1]=t=>m.limitNum=t),onBlur:i[2]||(i[2]=(...t)=>m.blur&&m.blur(...t)),maxlength:"2"},null,34),[[u.nr,m.limitNum]]),(0,s._)("ul",a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.numList,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t},(0,n.zw)(t),1)))),128))],512)]),(0,s._)("span",{class:(0,n.C_)(["up",{"up-disabled":d.Num>=e.limit}]),onClick:i[3]||(i[3]=(0,u.iM)((t=>m.up()),["stop","prevent"]))},"+",2)])])}var d={props:{num:{type:[Number],default:1},id:{type:[Number,String]},checked:{type:[String,Boolean]},limit:{type:Number,default:10}},computed:{limitNum(){return this.Num>this.limit?this.limit:this.Num}},data(){return{show:!0,flag:!0,Num:this.num,numList:[]}},methods:{up(){return this.flag&&this.Num<this.limit&&this.ani("up"),!1},down(){return this.flag&&this.Num>1&&this.ani("down"),!1},blur(){this.Num=this.Num>this.limit?Number(this.limit):Number(this.Num),this.$emit("edit-num",this.Num,this.id,this.checked)},ani(t){this.flag=!1;let i=this.Num;this.numList=[i-1,i,i+1];let e=this.$refs.ul,s=e.style;this.show=!1,s.zIndex="99",s.transition="all .2s ease-out","up"===t?(this.Num++,s.transform="translateY(-54px)"):(this.Num--,s.transform="translateY(-18px)"),e.addEventListener("transitionend",(()=>{this.show=!0,this.domInt(s),this.flag=!0})),e.addEventListener("webkitAnimationEnd",(()=>{this.show=!0,this.domInt(s),this.flag=!0})),this.$emit("edit-num",this.Num,this.id,this.checked)},domInt(t){t.zIndex="1",t.transition="all 0s",t.transform="translateY(-36px)"}}},m=e(963);const p=(0,m.Z)(d,[["render",c],["__scopeId","data-v-140958be"]]);var h=p},4154:function(t,i,e){e.d(i,{Z:function(){return d}});var s=e(4317),n=e(5964);const u={class:"gray-box"},l={class:"title"};function r(t,i,e,r,o,a){return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",l,[(0,s._)("h2",null,(0,n.zw)(e.title),1),(0,s._)("div",null,[(0,s.WI)(t.$slots,"right",{},void 0,!0)])]),(0,s._)("div",null,[(0,s.WI)(t.$slots,"content",{},void 0,!0)])])}var o={props:["title"]},a=e(963);const c=(0,a.Z)(o,[["render",r],["__scopeId","data-v-6099d476"]]);var d=c},9573:function(t,i,e){e.r(i),e.d(i,{default:function(){return K}});var s=e(4317),n=e(5964),u=e.p+"img/no-data.658831dc.png";const l=t=>((0,s.dD)("data-v-79d222ac"),t=t(),(0,s.Cn)(),t),r={class:"w store-content"},o={class:"gray-box"},a={class:"gallery-wrapper"},c={class:"gallery"},d={class:"thumbnail"},m=["onClick"],p=["alt"],h={class:"thumb"},g={class:"big"},_=["src","alt"],v={class:"banner"},f={class:"sku-custom-title"},b={class:"price"},N=l((()=>(0,s._)("em",null,"¥",-1))),w={class:"num"},y=l((()=>(0,s._)("span",{class:"params-name"},"数量",-1))),C={class:"buy"},k={class:"item-info"},I={key:0,class:"img-item"},x=["src"],D={key:1,class:"no-info"},S=l((()=>(0,s._)("img",{src:u},null,-1))),A=l((()=>(0,s._)("br",null,null,-1)));function T(t,i,e,u,l,T){const z=(0,s.up)("buy-num"),Z=(0,s.up)("y-button"),M=(0,s.up)("y-shelf"),P=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",o,[(0,s._)("div",a,[(0,s._)("div",c,[(0,s._)("div",d,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.small,((t,i)=>((0,s.wg)(),(0,s.iD)("li",{key:i+t,class:(0,n.C_)({on:l.big===t}),onClick:i=>l.big=t},[(0,s.wy)((0,s._)("img",{alt:l.product.productName},null,8,p),[[P,t]])],10,m)))),128))])]),(0,s._)("div",h,[(0,s._)("div",g,[(0,s._)("img",{src:l.big,alt:l.product.productName},null,8,_)])])])]),(0,s._)("div",v,[(0,s._)("div",f,[(0,s._)("h4",null,(0,n.zw)(l.product.productName),1),(0,s._)("h6",null,[(0,s._)("span",null,(0,n.zw)(l.product.subTitle),1),(0,s._)("span",b,[N,(0,s._)("i",null,(0,n.zw)(l.product.salePrice.toFixed(2)),1)])])]),(0,s._)("div",w,[y,(0,s.Wm)(z,{onEditNum:T.editNum,limit:Number(l.product.limitNum)},null,8,["onEditNum","limit"])]),(0,s._)("div",C,[(0,s.Wm)(Z,{text:"加入购物车",onBtnClick:i[0]||(i[0]=t=>T.addCart(l.product.productId,l.product.salePrice,l.product.productName,l.product.productImageBig)),classStyle:"main-btn",style:{width:"145px",height:"50px","line-height":"48px"}}),(0,s.Wm)(Z,{text:"现在购买",onBtnClick:i[1]||(i[1]=t=>T.checkout(l.product.productId)),style:{width:"145px",height:"50px","line-height":"48px","margin-left":"10px"}})])])]),(0,s._)("div",k,[(0,s.Wm)(M,{title:"产品信息"},{content:(0,s.w5)((()=>[l.productMsg?((0,s.wg)(),(0,s.iD)("div",I,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.productMsg,(t=>((0,s.wg)(),(0,s.iD)("img",{src:t,key:t},null,8,x)))),128))])):((0,s.wg)(),(0,s.iD)("div",D,[S,A,(0,s.Uk)(" 该商品暂无内容数据 ")]))])),_:1})])])}e(2575);var z=e(9956),Z=e(9192),M=e(4154),P=e(7098),B=e(2778),W=e(3529),L={data(){return{productMsg:{},small:[],big:"",product:{salePrice:0},productNum:1,userId:""}},computed:{...(0,Z.rn)(["login","showMoveImg","showCart"])},methods:{...(0,Z.OI)(["ADD_CART","ADD_ANIMATION","SHOW_CART"]),_productDet(t){(0,z.rz)({params:{productId:t}}).then((t=>{let i=t.result;this.product=i,this.productMsg=i.detail||"",this.small=i.productImageSmall,this.big=this.small[0]}))},addCart(t,i,e,s){if(!this.showMoveImg){this.ADD_CART({productId:t,salePrice:i,productName:e,productImg:s,productNum:this.productNum});let n=event.target,u=n.getBoundingClientRect().left+n.offsetWidth/2,l=n.getBoundingClientRect().top+n.offsetHeight/2;this.ADD_ANIMATION({moveShow:!0,elLeft:u,elTop:l,img:s}),this.showCart||this.SHOW_CART({showCart:!0})}},checkout(t){this.$router.push({path:"/checkout",query:{productId:t,num:this.productNum}})},editNum(t){this.productNum=t}},components:{YShelf:M.Z,BuyNum:P.Z,YButton:B.Z},created(){let t=this.$route.query.productId;this._productDet(t),this.userId=(0,W.bh)("userId")}},Y=e(963);const $=(0,Y.Z)(L,[["render",T],["__scopeId","data-v-79d222ac"]]);var K=$}}]);
//# sourceMappingURL=867.04b3e6ec.js.map