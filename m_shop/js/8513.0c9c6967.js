"use strict";(self["webpackChunkvue3_init_h5_1"]=self["webpackChunkvue3_init_h5_1"]||[]).push([[8513],{6884:function(e,l,a){a.r(l),a.d(l,{default:function(){return T}});var s=a(4317),c=a(5964),n=a.p+"img/jd_logo.64d5d398.jpg";const t=e=>((0,s.dD)("data-v-153c0789"),e=e(),(0,s.Cn)(),e),i={class:"recommend"},o={class:"page-header"},r=t((()=>(0,s._)("div",{class:"header-content"},"推荐",-1))),d={class:"classify-search"},u={class:"recommend-classify",ref:"wrapper"},h=["onClick"],p=["src"],m={class:"item-detail"},_=t((()=>(0,s._)("p",{class:"store-info"},[(0,s._)("img",{src:n,class:"header-img"}),(0,s._)("label",null,"京东商城")],-1))),k={class:"item-title"},v={class:"item-count"};function g(e,l,a,n,t,g){const f=(0,s.up)("van-icon"),w=(0,s.up)("router-link"),y=(0,s.up)("list-scroll");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("header",o,[(0,s._)("span",{class:"btn-left",onClick:l[0]||(l[0]=(...e)=>n.handleGoBack&&n.handleGoBack(...e))},[(0,s.Wm)(f,{name:"arrow-left",size:".4rem"})]),r]),(0,s._)("div",d,[(0,s._)("div",{class:"header-search",onClick:l[1]||(l[1]=(...e)=>n.handleSearch&&n.handleSearch(...e))},[(0,s.Wm)(f,{name:"search"}),(0,s.Wm)(w,{slots:"span",class:"search-title",to:"./search"},{default:(0,s.w5)((()=>[(0,s.Uk)("推荐搜索 关键词")])),_:1})])]),(0,s._)("section",u,[(0,s.Wm)(y,{"scroll-data":e.likeList,class:"likeList",pullup:!0,onScrollToEnd:n.handleScrollToEnd,pulldown:!0},{default:(0,s.w5)((()=>[(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.likeList,((e,l)=>((0,s.wg)(),(0,s.iD)("ul",{class:"like-list",key:l},[(0,s._)("li",{class:"like-item",onClick:l=>n.handleToDetail(e)},[(0,s._)("img",{class:"item-picture",src:e.imagePath},null,8,p),(0,s._)("div",m,[_,(0,s._)("p",k,(0,c.zw)(e.name),1),(0,s._)("p",v,[(0,s._)("i",null,"￥："+(0,c.zw)(e.price),1),(0,s._)("span",null,(0,c.zw)(e.itemCount),1)])])],8,h)])))),128))])])),_:1},8,["scroll-data","onScrollToEnd"])],512)])}a(2575);var f=a(7809),w=a(1747),y=a(9346),C=a(7235),S={name:"indexRecommend",components:{ListScroll:f["default"]},setup(){const e=(0,y.qj)({likeList:[],page:1}),l=(0,w.tv)(),a=(0,y.iH)(1),c=(0,y.iH)(null),n=()=>{e.page++,o()},t=()=>{l.go(-1)},i=({sku:e})=>{l.push({path:"/classify/product",query:{sku:e}})},o=async()=>{const{data:l}=await(0,C.jl)(a.value);e.likeList.push(...l)},r=()=>{l.push("/search")},d=()=>{const{clientHeight:e}=document.documentElement.clientHeight;c.value.style.height=e-90+"px"};return(0,s.bv)((async()=>{d();const{data:l}=await(0,C.GG)(),{data:a}=l;e.likeList=a})),{wrapper:c,...(0,y.BK)(e),handleScrollToEnd:n,handleToDetail:i,handleSearch:r,handleGoBack:t}}},L=a(8738);const D=(0,L.Z)(S,[["render",g],["__scopeId","data-v-153c0789"]]);var T=D}}]);
//# sourceMappingURL=8513.0c9c6967.js.map