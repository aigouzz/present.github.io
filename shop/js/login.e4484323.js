(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0a39":function(e,t,o){"use strict";o("9abe")},"1bc3":function(e,t,o){"use strict";o("bc0d")},"9abe":function(e,t,o){},a55b:function(e,t,o){"use strict";o.r(t);var l=o("0324");const a={class:"login"},n=Object(l["createElementVNode"])("img",{class:"logo",src:"https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png",alt:""},null,-1),r={key:0,class:"login-body login"},c={style:{margin:"16px"}},i={key:1,class:"login-body register"},s={style:{margin:"16px"}};function d(e,t,o,d,u,b){const m=Object(l["resolveComponent"])("s-header"),p=Object(l["resolveComponent"])("van-field"),g=Object(l["resolveComponent"])("vue-img-verify"),f=Object(l["resolveComponent"])("van-button"),h=Object(l["resolveComponent"])("van-form");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",a,[Object(l["createVNode"])(m,{name:"login"==e.type?"登录":"注册",back:"/home"},null,8,["name"]),n,"login"==e.type?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",r,[Object(l["createVNode"])(h,{onSubmit:d.onSubmit},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(p,{modelValue:e.username,"onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t),name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),Object(l["createVNode"])(p,{modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"]),Object(l["createVNode"])(p,{center:"",clearable:"",label:"验证码",placeholder:"输入验证码",modelValue:e.verify,"onUpdate:modelValue":t[2]||(t[2]=t=>e.verify=t)},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(g,{ref:"verifyRef"},null,512)]),_:1},8,["modelValue"]),Object(l["createElementVNode"])("div",c,[Object(l["createElementVNode"])("div",{class:"link-register",onClick:t[3]||(t[3]=e=>d.toggle("register"))},"立即注册"),Object(l["createVNode"])(f,{round:"",block:"",color:"#1baeae","native-type":"submit"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("登录")]),_:1})])]),_:1},8,["onSubmit"])])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",i,[Object(l["createVNode"])(h,{onSubmit:d.onSubmit},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(p,{modelValue:e.username1,"onUpdate:modelValue":t[4]||(t[4]=t=>e.username1=t),name:"username1",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),Object(l["createVNode"])(p,{modelValue:e.password1,"onUpdate:modelValue":t[5]||(t[5]=t=>e.password1=t),type:"password",name:"password1",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"]),Object(l["createVNode"])(p,{center:"",clearable:"",label:"验证码",placeholder:"输入验证码",modelValue:e.verify,"onUpdate:modelValue":t[6]||(t[6]=t=>e.verify=t)},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(g,{ref:"verifyRef"},null,512)]),_:1},8,["modelValue"]),Object(l["createElementVNode"])("div",s,[Object(l["createElementVNode"])("div",{class:"link-login",onClick:t[7]||(t[7]=e=>d.toggle("login"))},"已有登录账号"),Object(l["createVNode"])(f,{round:"",block:"",color:"#1baeae","native-type":"submit"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("注册")]),_:1})])]),_:1},8,["onSubmit"])]))])}o("f106");var u=o("6e4c"),b=o("0eaf");const m={class:"img-verify"},p=["width","height"];function g(e,t,o,a,n,r){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",m,[Object(l["createElementVNode"])("canvas",{ref:"verify",width:e.width,height:e.height,onClick:t[0]||(t[0]=(...e)=>a.handleDraw&&a.handleDraw(...e))},null,8,p)])}var f={setup(){const e=Object(l["ref"])(null),t=Object(l["reactive"])({pool:"ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",width:120,height:40,imgCode:""});Object(l["onMounted"])(()=>{t.imgCode=r()});const o=()=>{t.imgCode=r()},a=(e,t)=>parseInt(Math.random()*(t-e)+e),n=(e,t)=>{const o=a(e,t),l=a(e,t),n=a(e,t);return`rgb(${o},${l},${n})`},r=()=>{const o=e.value.getContext("2d");o.fillStyle=n(180,230),o.fillRect(0,0,t.width,t.height);let l="";for(let e=0;e<4;e++){const r=t.pool[a(0,t.pool.length)];l+=r;const c=a(18,40),i=a(-30,30);o.font=c+"px Simhei",o.textBaseline="top",o.fillStyle=n(80,150),o.save(),o.translate(30*e+15,15),o.rotate(i*Math.PI/180),o.fillText(r,-10,-15),o.restore()}for(let e=0;e<5;e++)o.beginPath(),o.moveTo(a(0,t.width),a(0,t.height)),o.lineTo(a(0,t.width),a(0,t.height)),o.strokeStyle=n(180,230),o.closePath(),o.stroke();for(let e=0;e<40;e++)o.beginPath(),o.arc(a(0,t.width),a(0,t.height),1,0,2*Math.PI),o.closePath(),o.fillStyle=n(150,200),o.fill();return l};return{...Object(l["toRefs"])(t),verify:e,handleDraw:o}}},h=(o("0a39"),o("9954")),O=o.n(h);const j=O()(f,[["render",g]]);var v=j,w=o("9a1b"),V=o("495f"),y=o("509c"),C=o.n(y),N={setup(){const e=Object(l["ref"])(null),t=Object(l["reactive"])({username:"",password:"",username1:"",password1:"",type:"login",imgCode:"",verify:""}),o=e=>{t.type=e,t.verify=""},a=async o=>{if(console.log("verifyRef.value.imgCode",e.value.imgCode),t.imgCode=e.value.imgCode||"",t.verify.toLowerCase()==t.imgCode.toLowerCase())if("login"==t.type){const{data:e}=await Object(w["c"])({loginName:o.username,passwordMd5:C()(o.password)});Object(V["c"])("token",e),window.location.href="/"}else await Object(w["e"])({loginName:o.username1,password:o.password1}),u["a"].success("注册成功"),t.type="login",t.verify="";else u["a"].fail("验证码有误")};return{...Object(l["toRefs"])(t),toggle:o,onSubmit:a,verifyRef:e}},components:{sHeader:b["a"],vueImgVerify:v}};o("1bc3");const k=O()(N,[["render",d]]);t["default"]=k},bc0d:function(e,t,o){}}]);
//# sourceMappingURL=login.e4484323.js.map