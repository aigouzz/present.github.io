"use strict";(self["webpackChunkvue3_init_music"]=self["webpackChunkvue3_init_music"]||[]).push([[315],{5315:function(a,t,e){e.r(t),e.d(t,{default:function(){return D}});var i=e(3396),s=e(7139);const l=a=>((0,i.dD)("data-v-4d6c2ede"),a=a(),(0,i.Cn)(),a),n={class:"fixed-title"},r={class:"play-title"},o={class:"play-name"},d={class:"playlist-info"},c={class:"info-wrapper"},u={class:"info-gallery"},p=["src"],g={class:"info-title"},A={class:"titile"},m={key:0,class:"author"},v=["src"],f=l((()=>(0,i._)("div",{class:"bg-mask"},null,-1))),h={class:"playlist-holder"},w={class:"add-all"},k={class:"list-left"},y={class:"list-right"};function C(a,t,e,l,C,b){const z=(0,i.up)("van-icon"),O=(0,i.up)("van-nav-bar"),_=(0,i.up)("van-button"),B=(0,i.up)("van-cell"),D=(0,i.up)("van-list");return(0,i.wg)(),(0,i.iD)("div",{class:(0,s.C_)(["playList",{view:a.songList.length>0}])},[(0,i._)("div",n,[(0,i.Wm)(O,null,{left:(0,i.w5)((()=>[(0,i.Wm)(z,{name:"arrow-left",size:".6rem",onClick:b.back},null,8,["onClick"])])),title:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i._)("div",o,[(0,i._)("span",null,(0,s.zw)(C.fname),1)])])])),_:1})]),(0,i._)("div",d,[(0,i._)("div",c,[(0,i._)("div",u,[(0,i._)("span",null,(0,s.zw)(b.formatCount(C.playCount)),1),(0,i._)("img",{src:C.creator.backgroundUrl,alt:""},null,8,p)]),(0,i._)("div",g,[(0,i._)("p",A,(0,s.zw)(C.name),1),C.creator.avatarUrl?((0,i.wg)(),(0,i.iD)("p",m,[(0,i._)("img",{src:C.creator.avatarUrl},null,8,v),(0,i._)("span",null,(0,s.zw)(C.creator.nickname),1)])):(0,i.kq)("",!0)])]),f,(0,i._)("div",{class:"bg-player",id:"backImg",style:(0,s.j5)({"background-image":"url("+C.coverImgUrl+"?param=300y300)"})},null,4)]),(0,i._)("div",h,[(0,i._)("div",w,[(0,i.Wm)(z,{name:"add-o",size:".5rem"}),(0,i.Wm)(_,{class:"demo-flat-button",icon:"add_circle_outline",onClick:b.playAll},{default:(0,i.w5)((()=>[(0,i.Uk)("播放全部")])),_:1},8,["onClick"])]),(0,i._)("div",null,[(0,i.Wm)(D,{loading:C.isloading,finished:C.finished,finishedText:"没有更多了",onLoad:b.loadMore},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(C.list,((a,t)=>((0,i.wg)(),(0,i.j4)(B,{key:a.id,onClick:t=>b.playAudio(a)},{default:(0,i.w5)((()=>[(0,i._)("span",k,(0,s.zw)(t+1),1),(0,i._)("span",y,(0,s.zw)(a.name)+" - "+(0,s.zw)(a.ar?a.ar[0].name:""),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["loading","finished","onLoad"])])])],2)}e(7658);var b=e(3744),z=e(65),O={data(){return{coverImgUrl:e(8014),name:"歌单标题",id:0,fname:"歌单",playCount:0,description:"描述描述",creator:{avatarUrl:e(7826),nickname:"昵称",backgroundUrl:e(8014)},list:[],value:0,isloading:!1,finished:!1}},created(){this.offset=0,this.ids=""},beforeRouteEnter:(a,t,e)=>{e((t=>{parseInt(a.params.id)!==parseInt(t.id)&&(t.offset=0,t.ids="",t.list=[],t.finished=!1,t.getData()),a.params.coverImg&&(t.coverImgUrl=t.$route.params.coverImg,t.name=t.$route.params.name,t.description=t.$route.params.desc,t.playCount=t.$route.params.count,t.creator=t.$route.params.creator,t.id=t.$route.params.id),window.onscroll=()=>{var a=window.pageYOffset/150;t.fname=a>.5?t.name:"歌单"}}))},beforeRouteLeave:(a,t,e)=>{window.onscroll=null,e()},methods:{back(){this.$router.go(-1)},getData(){b.Z.getPlayListDetail(this.$route.params.id).then((a=>{this.coverImgUrl=a.playlist.coverImgUrl,this.playCount=a.playlist.playCount,this.name=a.playlist.name,this.creator={avatarUrl:a.playlist.creator.avatarUrl,nickname:a.playlist.creator.nickname,backgroundUrl:a.playlist.creator.backgroundUrl},a.playlist.trackIds.forEach(((a,t)=>{0!==t||this.ids?this.ids+=`,${a.id}`:this.ids+=`${a.id}`}))})),this.loadMore()},loadMore(){this.isloading=!0,b.Z.getPlayListAll({id:this.$route.params.id,offset:this.offset,limit:10}).then((a=>{this.list.push(...a.songs),this.offset+=10,this.offset>=this.ids.split(",").length&&(this.finished=!0),this.isloading=!1})).catch((a=>{console.log("获取歌单信息出错:"+a)}))},change(a){this.value=a},playAudio(a){document.getElementById("audioPlay").pause(),this.$store.commit("pause"),this.$store.dispatch("getSong",a.id)},playAll(){this.$store.dispatch("getSong",this.ids)},formatCount(a){return a<9999?a:(a/1e4).toFixed(0)+"万"}},computed:{...(0,z.Se)(["songList"])}},_=e(89);const B=(0,_.Z)(O,[["render",C],["__scopeId","data-v-4d6c2ede"]]);var D=B},8014:function(a,t,e){a.exports=e.p+"img/default_cover.1ab3dcd1.png"},7826:function(a){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAMAAAC4uKf/AAAAzFBMVEXW2Nrx8fHw8PDk5ebi4+TY2tzX2dvv7+/Z293e4OHl5ufu7u/g4eLq6+vc3d/a293h4uPm5+jn5+jp6urq6uvc3t/t7e3e3+Du7+/e3+Hj5OXr7Ozu7u7b3N7n6Ons7e3s7O3f4OLh4uTv7/Dv8PDg4uPa3N3b3d7p6erX2NrZ2tzt7u7f4eLa3N7m5+fw8fHd3uDf4OHp6uvY2dvl5ebZ29zi5OXo6erj4+Xg4ePr6+vb3d/o6Ond3+Dr6+zt7e7c3uDs7Ozl5ubi4+Xv0F4gAAAC60lEQVR4Ae3YxYLzOBBF4XtktsPM0MzdP+Pw+z/TYLIJ2Yk07G8XNFxFVRX9+5VKpVKpVCqVSuF10vD9RnId6k/WTcesMU67+tOE/oQNEz/8kw4VsUP0ZxzuS4+V+3YzTZvte1Z6X+SYbwAwX5eBVoLl19WTvpx6AuB8tD7S+nijcwCe5FALgFagLcHqJTnzI8BFop2SC4C3cmQJkE21xzQDWMqJ2ACDK+11NQBMLBfagKnpgJoB2nLgBeBMB50BvMheFfhWOT4DVVmbAtSUowYwla0U6ChXB0hlawI8KNcDMJGlOmBC5QoNUJedV0WTrwKvZGdUNIsUGMlOE/BVgA80ZWcGVFRABZj9mw7WBBoqoOHgNnpFcx8Bnuz4QKv4SrIzBMYqYAwMZecdYFSAAd7JUgbUlKsGZLI1Kxa8B8xkqwKMi0VWka0AIFaOGCBw0xaMivzKqrJ3Cdwrx3fApeyFBujroP66xFpr5d+ijrN2/xGgqwO6AI9y4gb4nNc13siNLkCivRKArhz5AEz25h9OgA9ypW6A5qHiYuqOp8H+/mVPKnfCHpDF2iHOgPtQDtUAFju+MlwAvMgpj93L+wbAk2OvAfxdLQqv5dqbOTDXhh4wfyPXAg+40IYLwAvkVPipA8AP2rAAoPMplCtxGgE7V8JbACBKY7lQb7H2fK0N3xvWWnX7qJ5YWYxqO27Wbe39gpUny/D8cwDIvEP/8HgZAJz7NmVzDADzyq0Ouq3MAWA81Yl+MgD0HlTAsgeAeX9aWm0AojMVdBYB0A50tOsJALNAhQUzACbXOlJiAKJER0kGACY5vjOF6p2OdFeFY/tVn5MrhwfHzaANgOeGTnL5DNA4ZkrCDHWioaH4/NQ1gPlGJ/vGAKarAuIIMH1Z6BsgipWviv0QWaHYvDZy0sF4FBkhrwzQkbUOYK4KvCm6k7W7KP+kP24GZhfbRx1igKqcqAJGhwxgoOLsvms4yIZyYf1d/0alUqn0C3NhJPRnmvTEAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=315.43db9a02.js.map