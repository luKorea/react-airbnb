"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[521],{5842:function(n,e,i){var t=i(2791),r=i(7461),o=i(184),s=(0,t.memo)((function(n){var e=n.width,i=void 0===e?12:e,t=n.height,s=void 0===t?12:t;return(0,o.jsx)("svg",{viewBox:"0 0 18 18",role:"img","aria-hidden":"false","aria-label":"previous",focusable:"false",style:(0,r.Z)("height: ".concat(s,"px; width: ").concat(i,"px; display: block; fill: currentcolor;")),children:(0,o.jsx)("path",{d:"m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z",fillRule:"evenodd"})})}));e.Z=s},4155:function(n,e,i){var t=i(2791),r=i(7461),o=i(184),s=(0,t.memo)((function(n){var e=n.width,i=void 0===e?12:e,t=n.height,s=void 0===t?12:t;return(0,o.jsx)("svg",{viewBox:"0 0 18 18",role:"img","aria-hidden":"false","aria-label":"next",focusable:"false",style:(0,r.Z)("height: ".concat(s,"px; width: ").concat(i,"px; display: block; fill: currentcolor;")),children:(0,o.jsx)("path",{d:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",fillRule:"evenodd"})})}));e.Z=s},1428:function(n,e,i){i.d(e,{Z:function(){return a}});var t,r=i(2791),o=i(168),s=i(7939).ZP.div(t||(t=(0,o.Z)(["\n  overflow: hidden;  \n\n  .i-content {\n    display: flex;\n    position: relative;\n    transition: transform 200ms ease;\n\n    > * {\n      flex-shrink: 0;\n    }\n  }\n"]))),l=i(184),a=(0,r.memo)((function(n){var e=n.selectIndex,i=void 0===e?0:e,t=(0,r.useRef)();return(0,r.useEffect)((function(){var n=t.current.children[i],e=n.offsetLeft,r=n.clientWidth,o=t.current.clientWidth,s=e+.5*r-.5*o;s<0&&(s=0);var l=t.current.scrollWidth-o;s>l&&(s=l),t.current.style.transform="translate(".concat(-s,"px)")}),[i]),(0,l.jsx)(s,{children:(0,l.jsx)("div",{className:"i-content",ref:t,children:n.children})})}))},4592:function(n,e,i){i.d(e,{Z:function(){return v}});var t,r=i(885),o=i(2791),s=i(1752),l=i(6144),a=i(168),c=i(7939).ZP.div(t||(t=(0,a.Z)(["\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: ",";\n  padding: 8px;\n\n  .inner {\n    width: 100%;\n  }\n  .slide {\n    position: relative;\n    cursor: pointer;\n    &:hover {\n      .control {\n        display: flex;\n      }\n    }\n    .control {\n      position: absolute;\n      z-index: 1;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      display: none;\n      justify-content: space-between;\n      color: #fff;\n      .btn {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 83px;\n        height: 100%;\n        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, .25) 100%);\n        &.right {\n          background: linear-gradient(to right, transparent 0% , rgba(0, 0, 0, .25) 100%);\n        }\n      }\n    }\n    .indicator {\n      position: absolute;\n      z-index: 9;\n      width: 30%;\n      left: 0;\n      right: 0;\n      bottom: 10px;\n      margin: 0 auto;\n\n      .item {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 20%;\n\n        .dot {\n          width: 6px;\n          height: 6px;\n          background-color: rgba(0,0,0, .6);\n          border-radius: 50%;\n\n          &.active {\n            width: 9px;\n            height: 9px;\n            background: #fff;\n          }\n        }\n      }\n    }\n  }\n  .cover {\n    position: relative;\n    box-sizing: border-box;\n    padding: 66.66% 8px 0;\n    border-radius: 3px;\n    overflow: hidden;\n\n    img {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .desc {\n    margin: 10px 0 5px;\n    font-size: 12px;\n    font-weight: 700;\n    color: ",";\n  }\n\n  .name {\n    font-size: 16px;\n    font-weight: 700;\n\n    overflow: hidden;  \n    text-overflow: ellipsis; \n    display: -webkit-box; \n    -webkit-line-clamp: 2; \n    -webkit-box-orient: vertical;\n  }\n\n  .price {\n    margin: 8px 0;\n  }\n\n  .bottom {\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    font-weight: 400;\n    color: ",";\n\n    .count {\n      margin: 0 2px 0 4px;\n    }\n\n    .MuiRating-decimal {\n      margin-right: -2px;\n    }\n  }\n"])),(function(n){return n.itemWidth}),(function(n){return n.verifyColor}),(function(n){return n.theme.text.primaryColor})),d=i(4155),f=i(5842),u=i(1428),x=i(1694),m=i.n(x),h=i(184),p=(0,o.memo)((function(n){var e,i,t,a,x,p=n.itemData,v=n.itemWidth,g=void 0===v?"25%":v,j=n.itemClick,b=(0,o.useState)(0),w=(0,r.Z)(b,2),Z=w[0],y=w[1],N=(0,o.useRef)();function k(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>1?arguments[1]:void 0;i.stopPropagation(),e?N.current.next():N.current.prev();var t=e?Z+1:Z-1,r=n.itemData.picture_urls.length;t>r-1&&(t=0),t<0&&(t=r-1),y(t)}var I=(0,h.jsx)("div",{className:"cover",children:(0,h.jsx)("img",{src:p.picture_url,alt:""})}),z=(0,h.jsxs)("div",{className:"slide",children:[(0,h.jsxs)("div",{className:"control",children:[(0,h.jsx)("div",{className:"btn left",onClick:function(n){return k(!1,n)},children:(0,h.jsx)(f.Z,{width:20,height:20})}),(0,h.jsx)("div",{className:"btn right",onClick:function(n){return k(!0,n)},children:(0,h.jsx)(d.Z,{width:20,height:20})})]}),(0,h.jsx)("div",{className:"indicator",children:(0,h.jsx)(u.Z,{selectIndex:Z,children:null===p||void 0===p||null===(e=p.picture_urls)||void 0===e?void 0:e.map((function(n,e){return(0,h.jsx)("div",{className:"item",children:(0,h.jsx)("span",{className:m()("dot",{active:Z===e})})},n)}))})}),(0,h.jsx)(l.Z,{ref:N,dots:!1,autoplay:!1,effect:"fade",children:null===p||void 0===p||null===(i=p.picture_urls)||void 0===i?void 0:i.map((function(n){return(0,h.jsx)("div",{className:"cover",children:(0,h.jsx)("img",{src:n,alt:""})},n)}))})]});return(0,h.jsx)(c,{verifyColor:(null===p||void 0===p||null===(t=p.verify_info)||void 0===t?void 0:t.text_color)||"#39576a",itemWidth:g,onClick:function(){j&&j(p)},children:(0,h.jsxs)("div",{className:"inner",children:[p.picture_urls?z:I,(0,h.jsx)("div",{className:"desc",children:p.verify_info.messages.join(" \xb7 ")}),(0,h.jsx)("div",{className:"name",children:p.name}),(0,h.jsxs)("div",{className:"price",children:["\xa5",p.price,"/\u665a"]}),(0,h.jsxs)("div",{className:"bottom",children:[(0,h.jsx)(s.Z,{value:null!==(a=p.star_rating)&&void 0!==a?a:5,precision:.1,readOnly:!0,sx:{fontSize:"12px",color:"#00848A",marginRight:"-1px"}}),(0,h.jsx)("span",{className:"count",children:p.reviews_count}),p.bottom_info&&(0,h.jsxs)("span",{className:"extra",children:["\xb7",null===(x=p.bottom_info)||void 0===x?void 0:x.content]})]})]})})})),v=p},5521:function(n,e,i){i.r(e),i.d(e,{default:function(){return en}});var t,r,o,s,l,a,c,d,f,u,x,m,h=i(2791),p=i(168),v=i(7939),g=v.ZP.div(t||(t=(0,p.Z)(["\n  > .content {\n    width: 1032px;\n    margin: 0 auto;\n\n    > div {\n      margin-top: 30px;\n    }\n  }\n"]))),j=v.ZP.div(r||(r=(0,p.Z)(["\n  height: 529px;\n  background: url(",") center/cover;\n"])),i(3109)),b=i(184),w=(0,h.memo)((function(){return(0,b.jsx)(j,{})})),Z=i(190),y=i(5048),N=i(7461),k=(0,h.memo)((function(){return(0,b.jsx)("svg",{viewBox:"0 0 18 18",role:"presentation","aria-hidden":"true",focusable:"false",style:(0,N.Z)("height: 10px; width: 10px; fill: currentcolor;"),children:(0,b.jsx)("path",{d:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",fillRule:"evenodd"})})})),I=i(7689),z=v.ZP.div(o||(o=(0,p.Z)(["\n  display: flex;\n  margin-top: 10px;\n\n  .info {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n\n    font-size: 17px;\n    font-weight: 700;\n    color: ",";\n    \n    &:hover {\n      text-decoration: underline;\n    }\n\n    .text {\n      margin-right: 6px;\n    }\n  }\n"])),(function(n){return n.color})),D=(0,h.memo)((function(n){var e=n.name,i="\u663e\u793a\u5168\u90e8";e&&(i="\u663e\u793a\u66f4\u591a".concat(e,"\u623f\u6e90"));var t=(0,I.s0)();return(0,b.jsx)(z,{color:e?"#00848A":"#000",children:(0,b.jsxs)("div",{className:"info",onClick:function(){t("/entire")},children:[(0,b.jsx)("span",{className:"text",children:i}),(0,b.jsx)(k,{})]})})})),P=v.ZP.div(s||(s=(0,p.Z)(["\n  color: #222;\n  \n  .title {\n    font-size: 22px;\n    font-weight: 700;\n    margin-bottom: 16px;\n  }\n\n  .subtitle {\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n"]))),C=(0,h.memo)((function(n){var e=n.title,i=n.subtitle;return(0,b.jsxs)(P,{children:[(0,b.jsx)("h2",{className:"title",children:e}),i&&(0,b.jsx)("div",{className:"subtitle",children:i})]})})),_=i(4592),W=v.ZP.div(l||(l=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -8px;\n"]))),S=(0,h.memo)((function(n){var e,i=n.roomList,t=void 0===i?[]:i,r=n.itemWidth;return(0,b.jsx)(W,{children:null===(e=t.slice(0,8))||void 0===e?void 0:e.map((function(n){return(0,b.jsx)(_.Z,{itemData:n,itemWidth:r},n.id)}))})})),R=v.ZP.div(a||(a=(0,p.Z)(["\n  margin-top: 30px;\n"]))),L=(0,h.memo)((function(n){var e=n.infoData;return(0,b.jsxs)(R,{children:[(0,b.jsx)(C,{title:e.title,subtitle:e.subtitle}),(0,b.jsx)(S,{roomList:e.list,itemWidth:"25%"}),(0,b.jsx)(D,{})]})})),A=i(885),B=i(5842),E=i(4155),O=v.ZP.div(c||(c=(0,p.Z)(["\n  position: relative;\n  padding: 8px 0;\n\n  .scroll {\n    overflow: hidden;\n\n    .scroll-content {\n      display: flex;\n      transition: transform 250ms ease;\n    }\n  }\n\n  .control {\n    position: absolute;\n    z-index: 9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    text-align: center;\n    border-width: 2px;\n    border-style: solid;\n    border-color: #fff;\n    background: #fff;\n    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);\n    cursor: pointer;\n\n    &.left {\n      left: 0;\n      top: 50%;\n      transform: translate(-50%, -50%);\n    }\n\n    &.right {\n      right: 0;\n      top: 50%;\n      transform: translate(50%, -50%);\n    }\n  }\n"]))),F=(0,h.memo)((function(n){var e=(0,h.useState)(!1),i=(0,A.Z)(e,2),t=i[0],r=i[1],o=(0,h.useState)(!1),s=(0,A.Z)(o,2),l=s[0],a=s[1],c=(0,h.useState)(0),d=(0,A.Z)(c,2),f=d[0],u=d[1],x=(0,h.useRef)(),m=(0,h.useRef)();function p(n){var e=n?f+1:f-1,i=m.current.children[e].offsetLeft;m.current.style.transform="translate(-".concat(i,"px)"),u(e),a(x.current>i),r(i>0)}return(0,h.useEffect)((function(){var n=m.current.scrollWidth-m.current.clientWidth;x.current=n,a(n>0)}),[n.children]),(0,b.jsxs)(O,{children:[t&&(0,b.jsx)("div",{className:"control left",onClick:function(n){return p(!1)},children:(0,b.jsx)(B.Z,{})}),l&&(0,b.jsx)("div",{className:"control right",onClick:function(n){return p(!0)},children:(0,b.jsx)(E.Z,{})}),(0,b.jsx)("div",{className:"scroll",children:(0,b.jsx)("div",{className:"scroll-content",ref:m,children:n.children})})]})})),G=i(1694),M=i.n(G),U=v.ZP.div(d||(d=(0,p.Z)(["\n  .item {\n    box-sizing: border-box;\n    flex-basis: 120px;\n    flex-shrink: 0;\n    padding: 14px 16px;\n    margin-right: 16px;\n    border-radius: 3px;\n    font-size: 17px;\n    text-align: center;\n    border: 0.5px solid #D8D8D8;\n    white-space: nowrap;\n    cursor: pointer;\n    ",";\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &.active {\n      color: #fff;\n      background-color: ",";\n    }\n  }\n"])),(function(n){return n.theme.mixin.boxShadow}),(function(n){return n.theme.color.secondaryColor})),q=(0,h.memo)((function(n){var e=n.tabNames,i=void 0===e?[]:e,t=n.tabClick,r=(0,h.useState)(0),o=(0,A.Z)(r,2),s=o[0],l=o[1];return(0,b.jsx)(U,{children:(0,b.jsx)(F,{children:i.map((function(n,e){return(0,b.jsx)("div",{className:M()("item",{active:e===s}),onClick:function(i){return function(n,e){l(n),t(n,e)}(e,n)},children:n},e)}))})})})),H=v.ZP.div(f||(f=(0,p.Z)(["\n  margin-top: 30px;\n"]))),J=(0,h.memo)((function(n){var e,i,t=n.infoData,r=Object.keys(t.dest_list)[0],o=(0,h.useState)(r),s=(0,A.Z)(o,2),l=s[0],a=s[1],c=null===(e=t.dest_address)||void 0===e?void 0:e.map((function(n){return n.name})),d=(0,h.useCallback)((function(n,e){a(e)}),[]);return(0,b.jsxs)(H,{children:[(0,b.jsx)(C,{title:t.title,subtitle:t.subtitle}),(0,b.jsx)(q,{tabNames:c,tabClick:d}),(0,b.jsx)(S,{roomList:null===(i=t.dest_list)||void 0===i?void 0:i[l],itemWidth:"33.33333%"}),(0,b.jsx)(D,{name:l})]})})),K=v.ZP.div(u||(u=(0,p.Z)(["\n  .room-list {\n    margin: 0 -8px;\n    /* display: flex;\n    flex-wrap: wrap; */\n  }\n"]))),Q=(0,h.memo)((function(n){var e=n.infoData;return(0,b.jsxs)(K,{children:[(0,b.jsx)(C,{title:e.title,subtitle:e.subtitle}),(0,b.jsx)("div",{className:"room-list",children:(0,b.jsx)(F,{children:e.list.map((function(n){return(0,b.jsx)(_.Z,{itemData:n,itemWidth:"20%"},n.id)}))})}),(0,b.jsx)(D,{name:"plus"})]})})),T=v.ZP.div(x||(x=(0,p.Z)(["\n  flex-shrink: 0;\n  width: 20%;\n  \n  .inner {\n    padding: 8px;\n\n    .item-info {\n      position: relative;\n      border-radius: 3px;\n      overflow: hidden;\n    }\n  }\n\n  .cover {\n    width: 100%;\n  }\n\n  .bg-cover {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 60%;\n    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)\n  }\n\n  .info {\n    position: absolute;\n    left: 8px;\n    right: 8px;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 24px 32px;\n    color: #fff;\n\n    .city {\n      font-size: 18px;\n      font-weight: 600;\n    }\n\n    .price {\n      font-size: 14px;\n      margin-top: 5px;\n    }\n  }\n"]))),V=(0,h.memo)((function(n){var e=n.itemData;return(0,b.jsx)(T,{children:(0,b.jsx)("div",{className:"inner",children:(0,b.jsxs)("div",{className:"item-info",children:[(0,b.jsx)("img",{className:"cover",src:e.picture_url,alt:""}),(0,b.jsx)("div",{className:"bg-cover"}),(0,b.jsxs)("div",{className:"info",children:[(0,b.jsx)("div",{className:"city",children:e.city}),(0,b.jsxs)("div",{className:"price",children:["\u5747\u4ef7 ",e.price]})]})]})})})})),X=v.ZP.div(m||(m=(0,p.Z)(["\n  margin-top: 30px;\n\n  .longfor-list {\n    display: flex;\n    margin: 0 -8px;\n  }\n"]))),Y=(0,h.memo)((function(n){var e=n.infoData;return(0,b.jsxs)(X,{children:[(0,b.jsx)(C,{title:e.title,subtitle:e.subtitle}),(0,b.jsx)("div",{className:"longfor-list",children:(0,b.jsx)(F,{children:e.list.map((function(n){return(0,b.jsx)(V,{itemData:n},n.city)}))})})]})}));function $(n){return!!Object.keys(n).length}var nn=i(6031),en=(0,h.memo)((function(){var n=(0,y.v9)((function(n){return{goodPriceInfo:n.home.goodPriceInfo,highScoreInfo:n.home.highScoreInfo,discountInfo:n.home.discountInfo,recommendInfo:n.home.recommendInfo,longforInfo:n.home.longforInfo,plusInfo:n.home.plusInfo}}),y.wU),e=n.goodPriceInfo,i=n.highScoreInfo,t=n.discountInfo,r=n.recommendInfo,o=n.longforInfo,s=n.plusInfo;console.log(e,"goodPriceInfo");var l=(0,y.I0)();return(0,h.useEffect)((function(){l((0,Z.d7)()),l((0,nn.G)({isFixed:!0,topAlpha:!0}))}),[l]),(0,b.jsxs)(g,{children:[(0,b.jsx)(w,{}),(0,b.jsxs)("div",{className:"content",children:[$(t)&&(0,b.jsx)(J,{infoData:t}),$(r)&&(0,b.jsx)(J,{infoData:r}),$(o)&&(0,b.jsx)(Y,{infoData:o}),$(e)&&(0,b.jsx)(L,{infoData:e}),$(i)&&(0,b.jsx)(L,{infoData:i}),$(s)&&(0,b.jsx)(Q,{infoData:s})]})]})}))},3109:function(n,e,i){n.exports=i.p+"static/media/cover_01.293232bc7bb8539118a8.jpeg"}}]);
//# sourceMappingURL=521.73f5327f.chunk.js.map