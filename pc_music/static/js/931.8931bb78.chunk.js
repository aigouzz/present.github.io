"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[931],{29976:function(n,e,i){var t=i(73090),a=i(32247),o=i(31757),s=i(69193);function r(n){var e=n.flag;return(0,t.useEffect)((function(){e||a.ZP.loading("\u8bf7\u5148\u767b\u5f55, \u518d\u770b\u6bcf\u65e5\u63a8\u8350\u6b4c\u5355",2).then((function(){n.to(),n.showModal()}))}),[e,n]),(0,s.jsx)("div",{style:{display:e?"none":"block"},children:(0,s.jsx)(o.Z,{active:!0})})}e.Z=(0,t.memo)(r)},27367:function(n,e,i){i.d(e,{Z:function(){return x}});var t,a,o,s=i(73090),r=i(23130),c=i(45978),d=c.default.div(t||(t=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  height: 33px;\n  padding: 0 10px 0 0;\n  padding-left: ",";\n  border-bottom: 2px solid #c10d0c;\n  background: ",";\n  background-position: -225px -156px;\n  line-height: 33px;\n"])),(function(n){return n.showIcon?"34px":"2px"}),(function(n){var e="url("+i(50402)+") no-repeat center";return n.showIcon?e:""})),l=c.default.div(a||(a=(0,r.Z)(["\n  display: flex;\n  .hot-title {\n    display: flex;\n    margin-bottom: 5px;\n    a {\n      color: #333333;\n      &:hover {\n        text-decoration: none;\n      }\n    }\n  }\n\n  .keywords {\n    display: flex;\n    margin-left: 20px;\n    color: #ccc;\n    line-height: 35px;\n    .item {\n      .line {\n        margin: 0 10px;\n      }\n    }\n  }\n"]))),p=c.default.div(o||(o=(0,r.Z)(["\n  .icon {\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    margin-left: 4px;\n    vertical-align: middle;\n    background: transparent url('","') no-repeat center;\n    background-position: 0 -240px;\n  }\n"])),i(50402)),h=i(69193),u=function(n){var e=n.title,i=n.keywords,t=n.showIcon,a=n.right,o=n.keywordsClick;return(0,h.jsxs)(d,{showIcon:t,children:[(0,h.jsxs)(l,{children:[(0,h.jsx)("h2",{className:"hot-title",children:(0,h.jsx)("a",{href:"/discover/recommend",className:"no-link hot-text",children:e})}),(0,h.jsx)("ul",{className:"keywords",children:i.map((function(n){return(0,h.jsxs)("li",{className:"item",children:[(0,h.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),o(n)},children:n}),(0,h.jsx)("span",{className:"line",children:"|"})]},n)}))})]}),(0,h.jsxs)(p,{children:[(0,h.jsx)("span",{children:a}),t&&(0,h.jsx)("i",{className:"icon"})]})]})};u.defaultProps={keywords:[],showIcon:!0,right:"\u66f4\u591a"};var x=(0,s.memo)(u)},27967:function(n,e,i){i.d(e,{z:function(){return s}});var t=i(80060),a=i(25376),o=i(35228);function s(n,e){var i=(0,t.I0)();return function(t,s){if(t.preventDefault&&t.preventDefault(),i((0,a.U$)(s)),-1===(0,o.i)(n,s))e.success({content:"\u6dfb\u52a0\u6210\u529f"});else e.success({content:"\u4e0d\u80fd\u6dfb\u52a0\u91cd\u590d\u7684\u6b4c\u66f2"})}}},65931:function(n,e,i){i.r(e),i.d(e,{default:function(){return j}});var t,a,o=i(52359),s=i(73090),r=i(80060),c=i(29976),d=i(12746),l=i(23130),p=i(45978),h=p.default.div(t||(t=(0,l.Z)(["\n  height: auto;\n  .recommend-cover-bg {\n    width: 900px;\n    height: 179px;\n    background: url(",") no-repeat;\n    background-size: cover;\n    margin: 20px auto;\n    overflow: hidden;\n  }\n  .main {\n    margin-top: 45px;\n    padding: 0 30px;\n\n    .toplist-main {\n      border: 1px solid #d9d9d9;\n\n      .main-header {\n        display: flex;\n        .header-item {\n          width: 74px;\n          height: 34px;\n          line-height: 18px;\n          padding: 8px 10px;\n          background-position: 0 0;\n          background-repeat: repeat-x;\n          background-color: #f2f2f2;\n          color: #666;\n\n          &:first-child {\n            border-right: 1px solid #dadada;\n          }\n          &.header-title {\n            width: 327px;\n            border-right: 1px solid #dadada;\n          }\n          &.header-singer {\n            width: 173px;\n          }\n          &.header-time {\n            width: 91px;\n            border-right: 1px solid #dadada;\n          }\n        }\n      }\n\n      .main-list {\n        .song_item:nth-child(odd) {\n          background: #f7f7f7 !important;\n        }\n        .song_item:nth-child(-n + 3) {\n          height: 70px !important;\n        }\n      }\n    }\n  }\n"])),i(51903)),u=i(97012),x=p.default.div(a||(a=(0,l.Z)(["\n  width: 120px;\n  height: 120px;\n  background-position: 0 -270px;\n  position: relative;\n  margin: 34px 0 0 54px;\n  .head {\n    height: 26px;\n    line-height: 26px;\n    color: #fed9d9;\n    font-size: 14px;\n    text-shadow: 0 -1px #962626;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    -webkit-text-size-adjust: none;\n  }\n  .day {\n    font-size: 74px;\n    line-height: 80px;\n    display: block;\n    line-height: 102px;\n    text-align: center;\n    font-size: 94px;\n    font-weight: bold;\n    color: #202020;\n  }\n  .mask {\n    /* top: 26px; */\n    background-position: 0 -400px;\n    position: absolute;\n    top: 33px;\n    left: 0;\n    width: 142px;\n    height: 107px;\n  }\n"]))),m=i(69193),f=(0,s.memo)((function(){var n=(0,u.TD)(new Date,"{d}"),e="\u661f\u671f"+"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".charAt((new Date).getDay());return(0,m.jsxs)(x,{className:"date",children:[(0,m.jsx)("div",{className:"head",children:e}),(0,m.jsx)("div",{className:"day",children:n}),(0,m.jsx)("div",{className:"mask date"})]})})),g=i(27367),v=i(34549),k=i(4251);var j=(0,s.memo)((function(n){var e=(0,s.useState)([]),i=(0,o.Z)(e,2),t=i[0],a=i[1],l=(0,r.I0)(),p=(0,r.v9)((function(n){return{isLogin:n.getIn(["loginState","isLogin"]),cookie:n.getIn(["loginState","cookie"])}})),x=p.isLogin,j=p.cookie;(0,s.useEffect)((function(){}),[x]),(0,s.useEffect)((function(){j&&function(n){return(0,k.Z)({url:"/recommend/songs",method:"get",params:{cookie:n}})}(j).then((function(n){var e=n.data;a(e.dailySongs)}))}),[j]);var b=(0,s.useCallback)((function(){n.history.push("/")}),[n.history]),w=(0,s.useCallback)((function(){l((0,d.Q)(!0))}),[l]);return(0,m.jsxs)("div",{className:"w980",style:{border:"solid 1px #d3d3d3"},children:[(0,m.jsx)(c.Z,{flag:x,to:b,showModal:w}),(0,m.jsxs)(h,{className:"content",style:{display:x?"block":"none"},children:[(0,m.jsx)("div",{className:"recommend-cover-bg",children:(0,m.jsx)(f,{})}),(0,m.jsxs)("div",{className:"main",children:[(0,m.jsx)(g.Z,{title:"\u6b4c\u66f2\u5217\u8868",keywords:["26\u9996"],right:!0,showIcon:!1}),(0,m.jsxs)("div",{className:"toplist-main",children:[(0,m.jsxs)("div",{className:"main-header",children:[(0,m.jsx)("div",{className:"sprite_table header-item"}),(0,m.jsx)("div",{className:"sprite_table header-item header-title",children:"\u6807\u9898"}),(0,m.jsx)("div",{className:"sprite_table header-item header-time",children:"\u65f6\u957f"}),(0,m.jsx)("div",{className:"sprite_table header-item header-singer",children:"\u6b4c\u624b"})]}),(0,m.jsx)("div",{className:"main-list",children:t&&t.slice(0,100).map((function(n,e){return(0,m.jsx)(v.Z,{currentRanking:e+1,className:"song_item",coverPic:e<3?n.al.picUrl:"",duration:(0,u.g9)(n.dt),songName:n.name,singer:n.ar[0].name,songId:n.id},n.id)}))})]})]})]})]})}))},34549:function(n,e,i){i.d(e,{Z:function(){return f}});var t,a=i(73090),o=i(80060),s=i(77533),r=i(27967),c=i(97012),d=i(94890),l=i(23130),p=i(45978).default.div(t||(t=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  height: 30px;\n\n  .song-item {\n    padding: 6px 10px;\n    line-height: 18px;\n    text-align: left;\n  }\n\n  .rank-count {\n    padding-left: 25px;\n    width: 70px;\n    color: #999;\n  }\n\n  .song-info {\n    display: flex;\n    justify-content: space-between;\n    width: ",";\n\n    .font-active {\n      font-size: 15px;\n      cursor: pointer;\n      margin-right: 8px;\n    }\n    .font-active:active {\n      color: #d31111;\n    }\n\n    .btn {\n      width: 17px;\n      height: 17px;\n      margin-left: 8px;\n      cursor: pointer;\n      &.addto {\n        position: relative;\n        top: 2px;\n        background-position: 0 -700px;\n      }\n    }\n\n    .left-info>a {\n      display: inline-block;\n      width: 190px;\n    }\n  }\n\n  .duration {\n    width: 91px;\n  }\n"])),(function(n){return n.isPic?"258px":"328px"})),h=i(99944),u=i(32247),x=i(69193);function m(n){var e=n.currentRanking,i=n.coverPic,t=n.duration,a=n.singer,l=n.songId,m=n.songName,f=n.className,g=void 0===f?"":f,v=(0,o.I0)(),k=(0,o.v9)((function(n){return{playlist:n.getIn(["player","playList"])}}),o.wU).playlist,j=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e||n.preventDefault(),v((0,d.XF)(l)),document.getElementById("audio").autoplay=!0},b=(0,r.z)(k,u.ZP);return(0,x.jsxs)(p,{className:g,isPic:i,children:[(0,x.jsx)("div",{className:"song-item rank-count",children:e}),i&&(0,x.jsx)(s.OL,{to:"/discover/song",className:"song-item",onClick:function(n){return j(n,!0)},children:(0,x.jsx)("img",{src:(0,c.Vx)(i,50),alt:""})}),(0,x.jsxs)("div",{className:"song-item song-info",children:[(0,x.jsxs)("div",{className:"left-info",children:[(0,x.jsx)(h.Z,{className:"font-active",onClick:function(n){return j(n)}}),(0,x.jsx)("a",{href:"/play",onClick:function(n){return j(n)},className:"text-nowrap",children:m})]}),(0,x.jsx)("div",{className:"right-operator",children:(0,x.jsx)("button",{href:"/discover/recommend",className:"sprite_icon2 btn addto",onClick:function(n){return b(n,l)}})})]}),(0,x.jsx)("div",{className:"song-item duration",children:t}),(0,x.jsx)(s.OL,{to:"/discover/song",className:"song-item singer",onClick:function(n){return j(n,!0)},children:a})]})}var f=(0,a.memo)(m)},99944:function(n,e,i){i.d(e,{Z:function(){return c}});var t=i(55556),a=i(73090),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"}}]},name:"play-circle",theme:"outlined"},s=i(24206),r=function(n,e){return a.createElement(s.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e,icon:o}))};r.displayName="PlayCircleOutlined";var c=a.forwardRef(r)},51903:function(n,e,i){n.exports=i.p+"static/media/recommend-cover.89cacda0877460ac46c8.jpg"},50402:function(n,e,i){n.exports=i.p+"static/media/sprite_02.046e0f8104cd7b58ed2d.png"}}]);
//# sourceMappingURL=931.8931bb78.chunk.js.map