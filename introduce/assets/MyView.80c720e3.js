import{d as r,o as s,c as _,r as n,_ as c,a as i,b as p,w as o,e as t}from"./index.324b5453.js";const h={class:"index__child"},m=r({__name:"ChildType",props:{name:{default:""},rent:{type:Function,default:()=>null}},setup(a){return console.log(),(e,u)=>(s(),_("div",h,[n(e.$slots,"title",{},void 0,!0),n(e.$slots,"content",{},void 0,!0)]))}});const f=c(m,[["__scopeId","data-v-384e8917"]]),v={components:{Child:f},methods:{rent(){}}},C={class:"father-wrap"},B=t("div",{class:"father-title"},"\u8FD9\u662F\u7236\u5143\u7D20title",-1),F=t("h4",null,"\u8FD9\u662F\u5B50\u5143\u7D20title",-1),$=t("span",null,"\u8FD9\u662F\u5B50\u5143\u7D20\u7684\u5185\u5BB9",-1);function y(a,e,u,D,x,l){const d=i("Child");return s(),_("div",C,[B,p(d,{name:"child",onRent:l.rent},{title:o(()=>[F]),content:o(()=>[$]),_:1},8,["onRent"])])}const V=c(v,[["render",y]]);export{V as default};