"use strict";(self["webpackChunkvue3_init_pc_shop"]=self["webpackChunkvue3_init_pc_shop"]||[]).push([[787],{9956:function(e,t,r){r.d(t,{QN:function(){return u},Rt:function(){return c},_G:function(){return o},on:function(){return m},pm:function(){return a},rz:function(){return d},sL:function(){return l},sl:function(){return h},xb:function(){return p},z4:function(){return n}});var s=r(2558),i=r(1427);const n=e=>Promise.resolve(i.Z8),o=e=>(0,s.K)("/member/cartList",e),l=e=>(0,s.K)("/member/delCartChecked",e),a=e=>Promise.resolve(i.T7),u=e=>Promise.resolve(i.OK),c=e=>Promise.resolve(i.p),h=e=>(0,s.K)("/member/cancelOrder",e),d=e=>Promise.resolve(i.ux),m=e=>(0,s.k)("/goods/search",e),p=e=>Promise.resolve(i.Tx)},6444:function(e,t,r){r.d(t,{Z:function(){return h}});var s=r(4317);const i={class:"img-verify"},n=["width","height"];function o(e,t,r,o,l,a){return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("canvas",{ref:"verify",width:e.width,height:e.height,onClick:t[0]||(t[0]=(...e)=>o.handleDraw&&o.handleDraw(...e))},null,8,n)])}var l=r(9346),a={setup(){const e=(0,l.iH)(null),t=(0,l.qj)({pool:"ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",width:120,height:50,imgCode:""});(0,s.bv)((()=>{t.imgCode=o()}));const r=()=>{t.imgCode=o()},i=(e,t)=>parseInt(Math.random()*(t-e)+e),n=(e,t)=>{const r=i(e,t),s=i(e,t),n=i(e,t);return`rgb(${r},${s},${n})`},o=()=>{const r=e.value.getContext("2d");r.fillStyle=n(180,230),r.fillRect(0,0,t.width,t.height);let s="";for(let e=0;e<4;e++){const o=t.pool[i(0,t.pool.length)];s+=o;const l=i(18,40),a=i(-30,30);r.font=l+"px Simhei",r.textBaseline="top",r.fillStyle=n(80,150),r.save(),r.translate(30*e+15,15),r.rotate(a*Math.PI/180),r.fillText(o,-10,-15),r.restore()}for(let e=0;e<5;e++)r.beginPath(),r.moveTo(i(0,t.width),i(0,t.height)),r.lineTo(i(0,t.width),i(0,t.height)),r.strokeStyle=n(180,230),r.closePath(),r.stroke();for(let e=0;e<40;e++)r.beginPath(),r.arc(i(0,t.width),i(0,t.height),1,0,2*Math.PI),r.closePath(),r.fillStyle=n(150,220),r.fill();return s};return{...(0,l.BK)(t),verify:e,handleDraw:r}}},u=r(963);const c=(0,u.Z)(a,[["render",o]]);var h=c},2778:function(e,t,r){r.d(t,{Z:function(){return c}});var s=r(4317),i=r(5964);const n=["type","disabled","value"];function o(e,t,r,o,l,a){return(0,s.wg)(),(0,s.iD)("input",{type:r.inputType,readonly:"",class:(0,i.C_)(r.classStyle),onClick:t[0]||(t[0]=(...e)=>a.btnClick&&a.btnClick(...e)),disabled:"disabled-btn"===r.classStyle,value:r.text},null,10,n)}var l={props:{text:{type:[String,Number],default:"一颗小按钮"},inputType:{type:String,default:"button"},classStyle:{type:String,default:"default-btn"}},methods:{btnClick(e){this.$emit("btnClick",e)}}},a=r(963);const u=(0,a.Z)(l,[["render",o],["__scopeId","data-v-ce30ba20"]]);var c=u},2787:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var s=r(4317),i=r(9333);const n=e=>((0,s.dD)("data-v-4c15c813"),e=e(),(0,s.Cn)(),e),o={class:"login v2"},l={class:"wrapper"},a={class:"dialog dialog-shadow"},u=n((()=>(0,s._)("div",{class:"title"},[(0,s._)("h4",null,"使用 himi 账号 登录官网")],-1))),c={key:0,class:"content"},h={class:"common-form"},d={class:"username border-1p"},m={class:"input"},p={class:"input"},g={id:"captcha",class:"input"},f={style:{"text-align":"right"},class:"pr"},v={style:{"margin-top":"25px"}};function y(e,t,r,n,y,w){const b=(0,s.up)("vue-verify-code"),_=(0,s.up)("el-checkbox"),k=(0,s.up)("y-button");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",l,[(0,s._)("div",a,[u,y.loginPage?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("ul",h,[(0,s._)("li",d,[(0,s._)("div",m,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>y.ruleForm.userName=e),placeholder:"账号"},null,512),[[i.nr,y.ruleForm.userName,void 0,{trim:!0}]])])]),(0,s._)("li",null,[(0,s._)("div",p,[(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>y.ruleForm.userPwd=e),onKeyup:t[2]||(t[2]=(0,i.D2)(((...e)=>w.login&&w.login(...e)),["enter"])),placeholder:"密码"},null,544),[[i.nr,y.ruleForm.userPwd,void 0,{trim:!0}]])])]),(0,s._)("li",null,[(0,s._)("div",g,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>y.ruleForm.captcha=e),placeholder:"请输入验证码"},null,512),[[i.nr,y.ruleForm.captcha,void 0,{trim:!0}]]),(0,s.Wm)(b,{ref:"captcha"},null,512)])]),(0,s._)("li",f,[(0,s.Wm)(_,{class:"auto-login",modelValue:y.autoLogin,"onUpdate:modelValue":t[4]||(t[4]=e=>y.autoLogin=e)},{default:(0,s.w5)((()=>[(0,s.Uk)("记住密码")])),_:1},8,["modelValue"]),(0,s._)("a",{href:"javascript:;",class:"register",onClick:t[5]||(t[5]=(...e)=>w.toRegister&&w.toRegister(...e))},"注册 himi 账号"),(0,s._)("a",{style:{padding:"1px 0 0 10px"},onClick:t[6]||(t[6]=e=>w.open("找回密码","请联系邮箱找回密码或使用测试账号登录：test | test"))},"忘记密码 ?")])]),(0,s._)("div",v,[(0,s.Wm)(k,{text:y.logintxt,classStyle:y.ruleForm.userPwd&&y.ruleForm.userName&&"登录"===y.logintxt?"main-btn":"disabled-btn",onBtnClick:w.login,style:{margin:"0",width:"100%",height:"48px","font-size":"18px","line-height":"48px"}},null,8,["text","classStyle","onBtnClick"])]),(0,s._)("div",null,[(0,s.Wm)(k,{text:"返回",onBtnClick:w.login_back,style:{marginTop:"10px",marginBottom:"15px",width:"100%",height:"48px","font-size":"18px","line-height":"48px"}},null,8,["onBtnClick"])])])):(0,s.kq)("",!0)])])])}r(2575);var w=r(2778),b=r(6444),_=r(9256),k=(r(9956),r(3529)),x={data(){return{cart:[],loginPage:!0,ruleForm:{userName:"",userPwd:"",captcha:"",errMsg:""},registered:{userName:"",userPwd:"",userPwd2:"",errMsg:""},autoLogin:!1,logintxt:"登录",statusKey:""}},computed:{count(){return this.$store.state.login}},methods:{open(e,t){this.$notify.info({title:e,message:t})},messageSuccess(){this.$message({message:"恭喜您，注册成功！赶紧登录体验吧",type:"success"})},message(e){this.$message.error({message:e})},getRemembered(){const e=(0,k.bh)("rusername");e&&(this.autoLogin=!0,this.ruleForm.userName=(0,k.bh)("rusername"),this.ruleForm.userPwd=(0,k.bh)("rpassword"))},rememberPass(){!0===this.autoLogin?((0,k.PQ)("rusername",this.ruleForm.userName),(0,k.PQ)("rpassword",this.ruleForm.userPwd)):((0,k.kr)("rusername"),(0,k.kr)("rpassword"))},toRegister(){this.$router.push({path:"/register"})},login_back(){this.$router.go(-1)},login_addCart(){let e=[],t=JSON.parse((0,k.bh)("buyCart"));t&&t.length&&t.forEach((t=>{e.push({userId:(0,k.bh)("userId"),productId:t.productId,productNum:t.productNum})})),this.cart=e},checkCaptcha(){let e=this.$refs.captcha.imgCode.toLowerCase();return this.ruleForm.captcha.toLowerCase()===e||(this.message("请输入正确的验证码"),!1)},checkUser(){return!(!this.ruleForm.userName||!this.ruleForm.userPwd)||(this.message("账号或者密码不能为空!"),!1)},login(){if(this.logintxt="登录中...",this.rememberPass(),this.checkCaptcha()&&this.checkUser()){let e={userName:this.ruleForm.userName,userPwd:this.ruleForm.userPwd,statusKey:this.statusKey};(0,_.n$)(e).then((e=>{if(1!==e.result.state)return this.logintxt="登录",this.message(e.result.message),!1;(0,k.PQ)("token",e.result.token),(0,k.PQ)("userId",e.result.id),(0,k.PQ)("userInfo",JSON.stringify({info:e.result.info})),this.$route.query.path?this.$router.push({path:this.$route.query.path,query:JSON.parse(this.$route.query.query)}):this.$router.push({path:"/"})}))}else this.logintxt="登录"}},mounted(){this.getRemembered(),this.login_addCart(),this.open("登录提示","测试体验账号密码：test | test")},components:{YButton:w.Z,VueVerifyCode:b.Z}},P=r(963);const C=(0,P.Z)(x,[["render",y],["__scopeId","data-v-4c15c813"]]);var F=C}}]);
//# sourceMappingURL=787.86edd5f7.js.map