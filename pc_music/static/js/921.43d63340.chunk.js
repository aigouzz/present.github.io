"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[921],{27367:function(n,t,e){e.d(t,{Z:function(){return h}});var i,r,o,s=e(73090),a=e(23130),c=e(45978),l=c.default.div(i||(i=(0,a.Z)(["\n  display: flex;\n  justify-content: space-between;\n  height: 33px;\n  padding: 0 10px 0 0;\n  padding-left: ",";\n  border-bottom: 2px solid #c10d0c;\n  background: ",";\n  background-position: -225px -156px;\n  line-height: 33px;\n"])),(function(n){return n.showIcon?"34px":"2px"}),(function(n){var t="url("+e(50402)+") no-repeat center";return n.showIcon?t:""})),d=c.default.div(r||(r=(0,a.Z)(["\n  display: flex;\n  .hot-title {\n    display: flex;\n    margin-bottom: 5px;\n    a {\n      color: #333333;\n      &:hover {\n        text-decoration: none;\n      }\n    }\n  }\n\n  .keywords {\n    display: flex;\n    margin-left: 20px;\n    color: #ccc;\n    line-height: 35px;\n    .item {\n      .line {\n        margin: 0 10px;\n      }\n    }\n  }\n"]))),p=c.default.div(o||(o=(0,a.Z)(["\n  .icon {\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    margin-left: 4px;\n    vertical-align: middle;\n    background: transparent url('","') no-repeat center;\n    background-position: 0 -240px;\n  }\n"])),e(50402)),u=e(69193),x=function(n){var t=n.title,e=n.keywords,i=n.showIcon,r=n.right,o=n.keywordsClick;return(0,u.jsxs)(l,{showIcon:i,children:[(0,u.jsxs)(d,{children:[(0,u.jsx)("h2",{className:"hot-title",children:(0,u.jsx)("a",{href:"/discover/recommend",className:"no-link hot-text",children:t})}),(0,u.jsx)("ul",{className:"keywords",children:e.map((function(n){return(0,u.jsxs)("li",{className:"item",children:[(0,u.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),o(n)},children:n}),(0,u.jsx)("span",{className:"line",children:"|"})]},n)}))})]}),(0,u.jsxs)(p,{children:[(0,u.jsx)("span",{children:r}),i&&(0,u.jsx)("i",{className:"icon"})]})]})};x.defaultProps={keywords:[],showIcon:!0,right:"\u66f4\u591a"};var h=(0,s.memo)(x)},27967:function(n,t,e){e.d(t,{z:function(){return s}});var i=e(80060),r=e(25376),o=e(35228);function s(n,t){var e=(0,i.I0)();return function(i,s){if(i.preventDefault&&i.preventDefault(),e((0,r.U$)(s)),-1===(0,o.i)(n,s))t.success({content:"\u6dfb\u52a0\u6210\u529f"});else t.success({content:"\u4e0d\u80fd\u6dfb\u52a0\u91cd\u590d\u7684\u6b4c\u66f2"})}}},34549:function(n,t,e){e.d(t,{Z:function(){return m}});var i,r=e(73090),o=e(80060),s=e(77533),a=e(27967),c=e(97012),l=e(94890),d=e(23130),p=e(45978).default.div(i||(i=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  height: 30px;\n\n  .song-item {\n    padding: 6px 10px;\n    line-height: 18px;\n    text-align: left;\n  }\n\n  .rank-count {\n    padding-left: 25px;\n    width: 70px;\n    color: #999;\n  }\n\n  .song-info {\n    display: flex;\n    justify-content: space-between;\n    width: ",";\n\n    .font-active {\n      font-size: 15px;\n      cursor: pointer;\n      margin-right: 8px;\n    }\n    .font-active:active {\n      color: #d31111;\n    }\n\n    .btn {\n      width: 17px;\n      height: 17px;\n      margin-left: 8px;\n      cursor: pointer;\n      &.addto {\n        position: relative;\n        top: 2px;\n        background-position: 0 -700px;\n      }\n    }\n\n    .left-info>a {\n      display: inline-block;\n      width: 190px;\n    }\n  }\n\n  .duration {\n    width: 91px;\n  }\n"])),(function(n){return n.isPic?"258px":"328px"})),u=e(99944),x=e(32247),h=e(69193);function f(n){var t=n.currentRanking,e=n.coverPic,i=n.duration,r=n.singer,d=n.songId,f=n.songName,m=n.className,g=void 0===m?"":m,v=(0,o.I0)(),b=(0,o.v9)((function(n){return{playlist:n.getIn(["player","playList"])}}),o.wU).playlist,j=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t||n.preventDefault(),v((0,l.XF)(d)),document.getElementById("audio").autoplay=!0},N=(0,a.z)(b,x.ZP);return(0,h.jsxs)(p,{className:g,isPic:e,children:[(0,h.jsx)("div",{className:"song-item rank-count",children:t}),e&&(0,h.jsx)(s.OL,{to:"/discover/song",className:"song-item",onClick:function(n){return j(n,!0)},children:(0,h.jsx)("img",{src:(0,c.Vx)(e,50),alt:""})}),(0,h.jsxs)("div",{className:"song-item song-info",children:[(0,h.jsxs)("div",{className:"left-info",children:[(0,h.jsx)(u.Z,{className:"font-active",onClick:function(n){return j(n)}}),(0,h.jsx)("a",{href:"/play",onClick:function(n){return j(n)},className:"text-nowrap",children:f})]}),(0,h.jsx)("div",{className:"right-operator",children:(0,h.jsx)("button",{href:"/discover/recommend",className:"sprite_icon2 btn addto",onClick:function(n){return N(n,d)}})})]}),(0,h.jsx)("div",{className:"song-item duration",children:i}),(0,h.jsx)(s.OL,{to:"/discover/song",className:"song-item singer",onClick:function(n){return j(n,!0)},children:r})]})}var m=(0,r.memo)(f)},62921:function(n,t,e){e.r(t),e.d(t,{default:function(){return M}});var i,r,o,s,a=e(73090),c=e(80060),l=e(1517),d=e(23130),p=e(45978),u=p.default.div(i||(i=(0,d.Z)(["\n  width: 982px;\n  margin: 0 auto;\n  border: 1px solid #d3d3d3;\n  border-width: 0 1px;\n  .content {\n    display: flex;\n  }\n"]))),x=p.default.div(r||(r=(0,d.Z)(["\n  width: 240px;\n  background: #f9f9f9;\n  .top-list-container {\n    margin-top: 40px;\n  }\n"]))),h=p.default.div(o||(o=(0,d.Z)(["\n  width: 740px;\n"]))),f=e(97012),m=e(75368),g=p.default.div(s||(s=(0,d.Z)(["\n  margin-top: ",";\n\n  h3 {\n    font-weight: bold;\n    padding: 0 10px 6px 15px;\n    font-size: 14px;\n    font-family: \u5b8b\u4f53;\n    color: #000;\n  }\n  .info {\n    display: flex;\n    padding: 10px 0 10px 20px;\n    height: 62px;\n    background-color: ",";\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover {\n      background-color: #f4f2f2;\n    }\n\n    &.bg {\n      background-color: #e6e6e6;\n    }\n\n    .info-right {\n      margin-left: 10px;\n\n      .info-title {\n        width: 150px;\n        overflow: hidden;\n        margin-top: 2px;\n        margin-bottom: 8px;\n        color: #000;\n      }\n\n      .info-update {\n        color: #999;\n      }\n    }\n  }\n"])),(function(n){return n.top+"px"}),(function(n){return n.selected?"#e6e6e6;":""})),v=e(77533),b=e(69193);function j(n){var t=n.toplistInfo,e=(0,c.I0)(),i=(0,c.v9)((function(n){return{currentIndex:n.getIn(["toplist","currentIndex"])}}),c.wU).currentIndex;return(0,b.jsx)(g,{children:t.map((function(t,r){return(0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)("h3",{style:{marginTop:4===r?"17px":""},children:0===r?"\u4e91\u97f3\u4e50\u7279\u8272\u699c":4===r?"\u5168\u7403\u5a92\u4f53\u699c":""}),(0,b.jsxs)(v.OL,{className:"info "+(r===i?"bg":""),onClick:function(i){return function(t,i,r){t.preventDefault(),e((0,m.L6)(r)),e((0,m.ez)(i)),n.history.push("/discover/ranking?id=".concat(r))}(i,r,t.id)},to:{pathname:"/discover/songs",search:"?id=".concat(t.id)},children:[(0,b.jsx)("div",{className:"image",children:(0,b.jsx)("img",{src:(0,f.Vx)(t.coverImgUrl,44),alt:""})}),(0,b.jsxs)("div",{className:"info-right",children:[(0,b.jsx)("div",{className:"info-title",children:t.name}),(0,b.jsx)("div",{className:"info-update",children:t.updateFrequency})]})]})]},t.id)}))})}j.defaultProps={selected:!0};var N=(0,a.memo)(j),y=e(55556),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z"}},{tag:"path",attrs:{d:"M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z"}}]},name:"field-time",theme:"outlined"},w=e(24206),I=function(n,t){return a.createElement(w.Z,(0,y.Z)((0,y.Z)({},n),{},{ref:t,icon:k}))};I.displayName="FieldTimeOutlined";var _,C,Z=a.forwardRef(I),T=p.default.div(_||(_=(0,d.Z)(["\n  display: flex;\n  padding: 40px;\n  \n  .title-image {\n    position: relative;\n    padding: 3px;\n    border: 1px solid #ccc;\n\n    .msk {\n      width: 150px;\n      height: 150px;\n      background-position: -230px -380px;\n      top: 3px;\n      left: 3px;\n    }\n  }\n\n  .title-info {\n    margin-left: 35px;\n    padding: 16px 0 3px;\n\n    .update-info {\n      margin: 0 0 20px;\n      line-height: 35px;\n\n      .timer {\n        font-size: 15px;\n        margin-right: 5px;\n      }\n    }\n\n    .controls {\n      margin-bottom: 25px;\n      margin-right: -10px;\n      display: flex;\n      .play {\n        position: relative;\n        color: #fff;\n        width: 66px;\n        height: 31px;\n        padding: 0 5px 0 0;\n        margin-right: 35px;\n        line-height: 31px;\n        background-position: right -428px;\n        cursor: pointer;\n\n        .play-icon {\n          width: 20px;\n          height: 18px;\n          margin: 6px 2px 2px 0;\n          background-position: 0 -1622px;\n          overflow: hidden;\n        }\n\n        &:after {\n          content: '';\n          position: absolute;\n          right: -29px;\n          top: 0;\n          bottom: 0;\n          width: 31px;\n          background: url(",") 0 9999px;\n          background-position: 0 -1588px;\n        }\n      }\n\n      .inner {\n        display: flex;\n        width: 100%;\n        height: 31px;\n        padding: 0 7px 0 8px;\n        background-position: 0 -387px;\n        line-height: 31px;\n      }\n\n      .favorite,\n      .share,\n      .download,\n      .comment {\n        background-position: right -1020px;\n        margin-right: 6px;\n        padding: 0 5px 0 0;\n      }\n\n      .favorite > .inner,\n      .share > .inner,\n      .download > .inner,\n      .comment > .inner {\n        padding-right: 2px;\n        padding-left: 28px;\n      }\n\n      .favorite {\n        background-position: right -1020px;\n        .inner {\n          background-position: 0 -977px;\n        }\n      }\n\n      .share {\n        .inner {\n          background-position: 0 -1225px;\n        }\n      }\n\n      .download {\n        .inner {\n          background-position: 0 -2761px;\n        }\n      }\n\n      .comment {\n        .inner {\n          background-position: 0 -1465px;\n        }\n      }\n    }\n  }\n"])),e(79917)),z=(0,a.memo)((function(){var n=(0,c.v9)((function(n){return{titleInfo:n.getIn(["toplist","currentToplistTitleInfo"])}}),c.wU).titleInfo,t=n&&n.coverImgUrl,e=n&&n.name,i=n&&n.trackNumberUpdateTime,r=n&&n.commentCount,o=n&&n.shareCount,s=n&&n.subscribedCount;return(0,b.jsxs)(T,{children:[(0,b.jsxs)("div",{className:"title-image",children:[(0,b.jsx)("img",{src:(0,f.Vx)(t,150),alt:""}),(0,b.jsx)("div",{className:"image_cover msk"})]}),(0,b.jsxs)("div",{className:"title-info",children:[(0,b.jsx)("h2",{children:e}),(0,b.jsxs)("div",{className:"update-info",children:[(0,b.jsx)(Z,{className:"timer"}),"\u6700\u8fd1\u66f4\u65b0: ",(0,f.$j)(i)]}),(0,b.jsxs)("div",{className:"controls",children:[(0,b.jsx)("div",{className:"sprite_button play",children:(0,b.jsxs)("i",{className:"sprite_button inner",children:[(0,b.jsx)("em",{className:"sprite_button play-icon"}),"\u64ad\u653e"]})}),(0,b.jsx)("div",{className:"sprite_button favorite",children:(0,b.jsxs)("i",{className:"sprite_button inner",children:[(0,b.jsx)("em",{className:"sprite_button favorite-icon"}),"(",s,")"]})}),(0,b.jsx)("div",{className:"sprite_button share",children:(0,b.jsxs)("i",{className:"sprite_button inner",children:[(0,b.jsx)("em",{className:"sprite_button favorite-icon"}),"(",o,")"]})}),(0,b.jsx)("div",{className:"sprite_button download",children:(0,b.jsxs)("i",{className:"sprite_button inner",children:[(0,b.jsx)("em",{className:"sprite_button favorite-icon"}),"\u4e0b\u8f7d"]})}),(0,b.jsx)("div",{className:"sprite_button comment",children:(0,b.jsxs)("i",{className:"sprite_button inner",children:[(0,b.jsx)("em",{className:"sprite_button favorite-icon"}),"(",r,")"]})})]})]})]})})),U=p.default.div(C||(C=(0,d.Z)(["\n  padding: 10px 40px;\n\n  .toplist-main {\n    border: 1px solid #d9d9d9;\n\n    .main-header {\n      display: flex;\n      .header-item {\n        width: 74px;\n        height: 34px;\n        line-height: 18px;\n        padding: 8px 10px;\n        background-position: 0 0;\n        background-repeat: repeat-x;\n        background-color: #f2f2f2;\n        color: #666;\n        \n        &:first-child {\n          border-right: 1px solid #dadada;\n        }\n        &.header-title {\n          width: 327px;\n          border-right: 1px solid #dadada;\n        }\n        &.header-singer {\n          width: 173px;\n        }\n        &.header-time {\n          width: 91px;\n          border-right: 1px solid #dadada;\n        }\n      }\n    }\n\n    .main-list {\n      .song_item:nth-child(odd) {\n        background: #f7f7f7 !important;\n      }\n      .song_item:nth-child(-n + 3) {\n        height: 70px !important;\n      }\n    }\n  }\n"]))),E=e(27367),L=e(34549),P=(0,a.memo)((function(){var n=(0,c.I0)(),t=(0,c.v9)((function(n){return{playCount:n.getIn(["toplist","currentToplistTitleInfo","playCount"]),currentToplistId:n.getIn(["toplist","currentToplistId"]),currentToplist:n.getIn(["toplist","currentToplist"])}}),c.wU),e=t.playCount,i=t.currentToplistId,r=t.currentToplist;(0,a.useEffect)((function(){n((0,m.SE)(i))}),[n,i]);var o=(0,b.jsxs)("span",{children:["\u64ad\u653e\uff1a",(0,b.jsx)("em",{style:{color:"#c20c0c"},children:e}),"\u6b21"]});return(0,b.jsxs)(U,{children:[(0,b.jsx)(E.Z,{title:"\u6b4c\u66f2\u5217\u8868",showIcon:!1,right:o}),(0,b.jsxs)("div",{className:"toplist-main",children:[(0,b.jsxs)("div",{className:"main-header",children:[(0,b.jsx)("div",{className:"sprite_table header-item"}),(0,b.jsx)("div",{className:"sprite_table header-item header-title",children:"\u6807\u9898"}),(0,b.jsx)("div",{className:"sprite_table header-item header-time",children:"\u65f6\u957f"}),(0,b.jsx)("div",{className:"sprite_table header-item header-singer",children:"\u6b4c\u624b"})]}),(0,b.jsx)("div",{className:"main-list",children:r&&r.slice(0,100).map((function(n,t){return(0,b.jsx)(L.Z,{currentRanking:t+1,className:"song_item",coverPic:t<3?n.al.picUrl:"",duration:(0,f.g9)(n.dt),songName:n.name,singer:n.ar[0].name,songId:n.id},n.id)}))})]})]})})),M=(0,a.memo)((function(n){var t=(0,c.I0)(),e=(0,c.v9)((function(n){return{toplistInfo:n.getIn(["toplist","toplistInfo"]),currentToplistId:n.getIn(["toplist","currentToplistId"])}}),c.wU),i=e.toplistInfo,r=e.currentToplistId;return(0,a.useEffect)((function(){t((0,m.kE)())}),[t]),(0,a.useEffect)((function(){var e=l.parse(n.location.search).id;e||(e=r),t((0,m.Lv)(e))}),[r,t,n]),(0,b.jsx)(u,{className:"wrap-bg2",children:(0,b.jsxs)("div",{className:"content w980",children:[(0,b.jsx)(x,{children:(0,b.jsx)("div",{className:"top-list-container",children:(0,b.jsx)(N,{toplistInfo:i,history:n.history})})}),(0,b.jsxs)(h,{children:[(0,b.jsx)(z,{}),(0,b.jsx)(P,{})]})]})})}))},75368:function(n,t,e){e.d(t,{L6:function(){return s},Lv:function(){return c},SE:function(){return l},ez:function(){return o},kE:function(){return a}});var i=e(7010),r=e(45690),o=function(n){return{type:i.FZ,index:n}},s=function(n){return{type:i._s,id:n}},a=function(){return function(n){(0,r.Q)().then((function(t){var e;n((e=t.list,{type:i.Qz,toplistInfo:e}))}))}},c=function(n){return function(t){(0,r.E)(n).then((function(n){var e,r=n&&n.playlist,o=r.coverImgUrl,s=r.name,a=r.trackNumberUpdateTime,c=r.playCount,l=r.subscribedCount,d=r.commentCount,p=r.shareCount;t((e={coverImgUrl:o,name:s,trackNumberUpdateTime:a,playCount:c,subscribedCount:l,commentCount:d,shareCount:p},{type:i.sC,titleInfo:e}))}))}},l=function(n){return function(t){(0,r.E)(n).then((function(n){var e,r=n&&n.playlist&&n.playlist.tracks;t((e=r,{type:i.wk,toplist:e}))}))}}},45690:function(n,t,e){e.d(t,{E:function(){return o},Q:function(){return r}});var i=e(4251);function r(){return(0,i.Z)({url:"/toplist"})}function o(n){return(0,i.Z)({url:"/playlist/detail",params:{id:n}})}},99944:function(n,t,e){e.d(t,{Z:function(){return c}});var i=e(55556),r=e(73090),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"}}]},name:"play-circle",theme:"outlined"},s=e(24206),a=function(n,t){return r.createElement(s.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:t,icon:o}))};a.displayName="PlayCircleOutlined";var c=r.forwardRef(a)},50402:function(n,t,e){n.exports=e.p+"static/media/sprite_02.046e0f8104cd7b58ed2d.png"},79917:function(n,t,e){n.exports=e.p+"static/media/sprite_button.398d627a5d3157b19f4a.png"}}]);
//# sourceMappingURL=921.43d63340.chunk.js.map