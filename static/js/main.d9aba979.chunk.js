(this["webpackJsonpreact-basic"]=this["webpackJsonpreact-basic"]||[]).push([[0],{12:function(e,t,a){e.exports={videosContainer:"video_list_videosContainer__1xnYg",videos:"video_list_videos__Yrm50",targetObserver:"video_list_targetObserver__3WFAF"}},16:function(e,t,a){e.exports={loaderContainer:"video_loader_loaderContainer__1q92b",loader:"video_loader_loader__1lNy1",spin:"video_loader_spin__d0J_3"}},2:function(e,t,a){e.exports={detail:"video_detail_detail__EPwT-",player:"video_detail_player__JtptY",description:"video_detail_description__I1llW",tags:"video_detail_tags__2kMUl",statistics:"video_detail_statistics__1CPMF",views:"video_detail_views__2_RRZ",likeUnlike:"video_detail_likeUnlike__cUArj",like:"video_detail_like__2710G",channelBox:"video_detail_channelBox__1gOjq",channelIcon:"video_detail_channelIcon__3yEY3",channelTitle:"video_detail_channelTitle__3PqAm",videoList:"video_detail_videoList__iSN_8",container:"video_detail_container__1w-MH",video:"video_detail_video__3MV-9",thumbanils:"video_detail_thumbanils__6hykm",metadata:"video_detail_metadata__ToiUy",title:"video_detail_title__1MNrt",channel:"video_detail_channel__7a3G6",count:"video_detail_count__2P6J_",comment:"video_detail_comment__3-php",comments:"video_detail_comments__3NP2J",commentBox:"video_detail_commentBox__1xzSJ",commentIcon:"video_detail_commentIcon__3xfLi",commentText:"video_detail_commentText__2D_GY"}},48:function(e,t,a){},6:function(e,t,a){e.exports={container:"video_item_container__gCwwT",video:"video_item_video__hMa_r",metadata:"video_item_metadata__26RNY",title:"video_item_title__3v-Cm",channel:"video_item_channel__2EBt2",count:"video_item_count__1RA-h"}},7:function(e,t,a){e.exports={hamburgerMenu:"hamburger_hamburgerMenu__1ybsH",item:"hamburger_item__1u3fw",blind:"hamburger_blind__2YhM-",maker:"hamburger_maker__5g0z0"}},72:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(27),i=a.n(c),r=(a(48),a(49),a(17)),o=a(5),l=a.n(o),d=a(8),u=a(3),m=a(6),j=a.n(m),b=a(0),h=function(e){var t=e.video,a=e.onSelected,n=e.parseIntView,s=e.diffDate,c=t.snippet;return Object(b.jsx)("li",{className:j.a.container,onClick:function(){window.scrollTo(0,0),a(t)},children:Object(b.jsxs)("div",{className:j.a.video,children:[Object(b.jsx)("img",{className:j.a.thumbanils,src:c.thumbnails&&c.thumbnails.high.url,alt:"thumbanils"}),Object(b.jsxs)("div",{className:j.a.metadata,children:[Object(b.jsx)("p",{className:j.a.title,children:t.snippet.title.length>30?"".concat(t.snippet.title.substr(0,30),"..."):t.snippet.title}),Object(b.jsx)("p",{className:j.a.channel,children:c.channelTitle}),Object(b.jsxs)("div",{className:j.a.count,children:[Object(b.jsx)("span",{children:"\uc870\ud68c\uc218 ".concat(n(t.statistics.viewCount),"\ud68c ")}),Object(b.jsx)("span",{children:"\xb7 ".concat(s(t.snippet.publishedAt),"\uc804")})]})]})]})})},p=a(16),_=a.n(p),v=function(){return Object(b.jsx)("div",{className:_.a.loaderContainer,children:Object(b.jsx)("div",{className:_.a.loader})})},f=a(12),x=a.n(f),O=function(e){var t=e.scrollTargetRef,a=e.parseIntView,n=e.diffDate,s=e.isLoading,c=e.videos,i=e.onSelected,r=e.searchCheck;return Object(b.jsx)(b.Fragment,{children:s?Object(b.jsx)(v,{}):Object(b.jsxs)("div",{className:x.a.videosContainer,children:[Object(b.jsx)("ul",{className:x.a.videos,children:c.map((function(e){return Object(b.jsx)(h,{parseIntView:a,diffDate:n,videoId:e.id,video:e,onSelected:i,searchCheck:r},e.id)}))}),Object(b.jsx)("div",{ref:t,className:x.a.targetObserver})]})})},g=s.a.memo(O),N=a(9),k=a.n(N),w=a(7),y=a.n(w),C=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:y.a.hamburgerMenu,children:[Object(b.jsxs)("a",{className:y.a.item,href:"https://hahmsongmin.github.io/yourtube/",children:[Object(b.jsx)("i",{className:"fas fa-home"}),Object(b.jsx)("span",{children:"\ud648"})]}),Object(b.jsxs)("div",{className:y.a.item,children:[Object(b.jsx)("i",{className:"fas fa-video"}),Object(b.jsx)("span",{children:"\uad6c\ub3c5"})]}),Object(b.jsxs)("div",{className:y.a.item,children:[Object(b.jsx)("i",{className:"fas fa-history"}),Object(b.jsx)("span",{children:"\uae30\ub85d"})]}),Object(b.jsxs)("div",{className:y.a.item,children:[Object(b.jsx)("i",{className:"fas fa-cog"}),Object(b.jsx)("span",{children:"\uc124\uc815"})]})]}),Object(b.jsx)("div",{className:y.a.blind}),Object(b.jsx)("span",{className:y.a.maker,children:"\xa9 2021 IvanSelah"})]})},I=a(30),S=function(e){var t=e.onSearch,a=Object(n.useRef)(),s=Object(n.useState)(!1),c=Object(u.a)(s,2),i=c[0],r=c[1],o=function(){t(a.current.value),a.current.value=""};return Object(b.jsxs)(b.Fragment,{children:[i&&Object(b.jsx)(C,{}),Object(b.jsx)("header",{children:Object(b.jsxs)("div",{className:k.a.navbar,children:[Object(b.jsx)("div",{className:k.a.hamburger,onClick:function(){r(!i)},children:Object(b.jsx)(I.a,{toggled:i,toggle:r,size:35})}),Object(b.jsxs)("a",{href:"https://hahmsongmin.github.io/yourtube/",className:k.a.moveHome,children:[Object(b.jsx)("i",{className:"fab fa-youtube ".concat(k.a.logo)}),Object(b.jsx)("span",{children:"YourTube"})]}),Object(b.jsxs)("div",{className:k.a.form,children:[Object(b.jsx)("input",{type:"text",ref:a,placeholder:"\uac80\uc0c9",onKeyPress:function(e){"Enter"===e.key&&o()}}),Object(b.jsx)("button",{type:"submit",onClick:function(){o()},children:Object(b.jsx)("i",{className:"fas fa-search"})})]}),Object(b.jsx)("div",{className:k.a.defaultUser,children:Object(b.jsx)("i",{className:"fas fa-user"})})]})})]})},T=a(2),M=a.n(T),B=function(e){var t=e.youtubeId,a=e.comments,s=e.parseIntView,c=e.diffDate,i=e.selectedVideo,r=e.videos,o=e.onSelected,l=Object(n.useState)(0),d=Object(u.a)(l,2),m=d[0],j=d[1],h=["#55efc4","#0984e3","#4834d4","#130f40","#fd79a8","#fdcb6e","#d63031","#182C61","#BDC581","#B33771"],p=function(e){window.scrollTo(0,0),o(e),function(){var e=Math.floor(8*Math.random());j(e)}()};return Object(b.jsxs)("section",{className:M.a.detail,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("iframe",{title:"content",className:M.a.player,allow:"fullscreen",frameBorder:"0",src:"https://www.youtube.com/embed/".concat(t,"?autoplay=1")}),Object(b.jsxs)("div",{className:M.a.description,children:[Object(b.jsx)("span",{className:M.a.tags,children:i.snippet.tags&&i.snippet.tags.map((function(e,t){if(/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/g.test(e)&&t<=20)return" #".concat(e)}))}),Object(b.jsx)("h3",{children:i.snippet.title}),Object(b.jsxs)("div",{className:M.a.statistics,children:[Object(b.jsx)("div",{className:M.a.views,children:"\uc870\ud68c\uc218 \n          ".concat(i.statistics.viewCount.replace(/\B(?=(\d{3})+(?!\d))/g,","),"\ud68c \xb7 ").concat(i.snippet.publishedAt.split("T")[0].replace(/-/g,".")," ")}),Object(b.jsxs)("div",{className:M.a.likeUnlike,children:[i.statistics.likeCount&&Object(b.jsxs)("div",{className:M.a.like,children:[Object(b.jsx)("i",{className:"far fa-thumbs-up"}),"\n                  ".concat(i.statistics.likeCount.replace(/\B(?=(\d{3})+(?!\d))/g,","))]}),i.statistics.dislikeCount&&Object(b.jsxs)("div",{className:M.a.unlike,children:[Object(b.jsx)("i",{className:"far fa-thumbs-down"}),"\n                  ".concat(i.statistics.dislikeCount.replace(/\B(?=(\d{3})+(?!\d))/g,","))]})]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:M.a.channelBox,children:[Object(b.jsx)("span",{className:M.a.channelIcon,style:{backgroundColor:"".concat(h[m])},children:i.snippet.channelTitle.substr(0,1)}),Object(b.jsx)("span",{className:M.a.channelTitle,children:i.snippet.channelTitle})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("span",{className:M.a.comment,children:i.statistics.commentCount&&"\ub313\uae00 ".concat(i.statistics.commentCount.replace(/\B(?=(\d{3})+(?!\d))/g,","),"\uac1c")}),Object(b.jsx)("div",{className:M.a.comments,children:a.map((function(e){var t=Math.floor(Math.random()*h.length);return Object(b.jsxs)("div",{className:M.a.commentBox,children:[Object(b.jsx)("span",{className:M.a.commentIcon,style:{backgroundColor:"".concat(h[t])},children:e.authorDisplayName.substr(0,2)}),Object(b.jsxs)("div",{className:M.a.commentText,children:[Object(b.jsx)("span",{children:"".concat(c(e.publishedAt),"\uc804")}),Object(b.jsx)("span",{children:e.textOriginal.length>100?"".concat(e.textOriginal.substr(0,100),"..."):e.textOriginal})]})]},Math.floor(1e7*Math.random()))}))})]})]}),Object(b.jsx)("ul",{className:M.a.videoList,children:r.map((function(e){return Object(b.jsx)("li",{className:M.a.container,onClick:function(){return p(e)},children:Object(b.jsxs)("div",{className:M.a.video,children:[Object(b.jsx)("img",{className:M.a.thumbanils,src:e.snippet.thumbnails.medium.url,alt:"thumbanils"}),Object(b.jsx)("div",{className:M.a.hoverVideo}),Object(b.jsxs)("div",{className:M.a.metadata,children:[Object(b.jsx)("p",{className:M.a.title,children:e.snippet.title.length>40?"".concat(e.snippet.title.substr(0,35),"..."):e.snippet.title}),Object(b.jsx)("p",{className:M.a.channel,children:e.snippet.channelTitle}),Object(b.jsxs)("div",{className:M.a.count,children:[Object(b.jsx)("span",{children:"\uc870\ud68c\uc218 ".concat(s(e.statistics.viewCount),"\ud68c ")}),Object(b.jsx)("span",{children:"\xb7 ".concat(c(e.snippet.publishedAt),"\uc804")})]})]})]})},e.id)}))})]})};var R=function(e){var t=e.youtube,a=Object(n.useRef)(),s=Object(n.useState)(),c=Object(u.a)(s,2),i=c[0],o=c[1],m=Object(n.useState)([]),j=Object(u.a)(m,2),h=j[0],p=j[1],_=Object(n.useState)(null),f=Object(u.a)(_,2),x=f[0],O=f[1],N=Object(n.useState)(null),k=Object(u.a)(N,2),w=k[0],y=k[1],C=Object(n.useState)(),I=Object(u.a)(C,2),T=I[0],M=I[1],R=Object(n.useState)(null),P=Object(u.a)(R,2),D=P[0],U=P[1],A=Object(n.useState)([]),L=Object(u.a)(A,2),V=L[0],F=L[1],E=Object(n.useState)(),Y=Object(u.a)(E,2),J=Y[0],H=Y[1],q=Object(n.useState)(!1),z=Object(u.a)(q,2),G=z[0],W=z[1],K=Object(n.useState)(!0),Z=Object(u.a)(K,2),Q=Z[0],X=Z[1];Object(n.useEffect)((function(){$()}),[t]),Object(n.useEffect)((function(){a.current&&ee()}),[Q,w]);var $=function(){var e=Object(d.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.mostPopular();case 3:a=e.sent,n=a.data.items,p(n),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,X(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,8,10,13]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=a.current;new IntersectionObserver((function(e,t){e[0].isIntersecting&&x&&(te(x),t&&t.disconnect())}),{root:null,threshold:0}).observe(e)},te=function(){var e=Object(d.a)(l.a.mark((function e(a){var n,s,c,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.nextSearch(a,w);case 3:n=e.sent,s=n.data,c=s.items.map((function(e){return e.id.videoId})),i=c.filter((function(e){return!T.includes(e)})),r=s.nextPageToken,y(r),ie(i),M(i),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){return e>=1e4?"".concat(parseInt(e/1e4),"\ub9cc"):e},ne=Object(n.useCallback)((function(e){var t=(new Date).getTime()-new Date(e).getTime();return(t=parseInt(t/36e5))<24?t+"\uc2dc\uac04":t>=24&&t<168?parseInt(t/24)+"\uc77c":t>=168&&t<672?parseInt(t/168)+"\uc8fc":t>=672&&t<8760?parseInt(t/672)+"\uac1c\uc6d4":t>=8760?parseInt(t/8760)+"\ub144":void 0}),[]),se=function(){var e=Object(d.a)(l.a.mark((function e(a){var n,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.comment(a);case 3:n=e.sent,s=n.data.items,c=s.map((function(e){return e.snippet.topLevelComment.snippet})),F(c),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(e){U(e),H(e.id),se(e.id)},ie=function(){var e=Object(d.a)(l.a.mark((function e(a){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(a.map((function(e){return t.searchCount(e)})));case 3:n=e.sent,s=n.map((function(e){return e.data.items[0]})),o([].concat(Object(r.a)(i),Object(r.a)(s))),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(d.a)(l.a.mark((function e(a){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.prev=1,e.next=4,Promise.all(a.map((function(e){return t.searchCount(e)})));case 4:n=e.sent,s=n.map((function(e){return e.data.items[0]})),o(s),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.prev=11,W(!0),X(!1),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[1,9,11,15]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(d.a)(l.a.mark((function e(a){var n,s,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a!==x){e.next=4;break}return e.abrupt("return");case 4:O(a),X(!0),U(null);case 7:return e.prev=7,e.next=10,t.search(a);case 10:n=e.sent,s=n.data,c=s.items.map((function(e){return e.id.videoId})),i=s.nextPageToken,M(c),y(i),re(c),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(7);case 21:return e.prev=21,window.scrollTo(0,0),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[7,19,21,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{onSearch:oe}),Q?Object(b.jsx)(v,{}):D?Object(b.jsx)(B,{youtubeId:J,comments:V,parseIntView:ae,diffDate:ne,isLoading:Q,selectedVideo:D,videos:x?i:h,onSelected:ce}):Object(b.jsx)(g,{scrollTargetRef:a,parseIntView:ae,diffDate:ne,isLoading:Q,videos:x?i:h,onSelected:ce,searchCheck:G})]})},P=a(28),D=a(29),U=a.n(D),A=new function e(t){var a=this;Object(P.a)(this,e),this.mostPopular=function(){return a.api.get("videos",{params:{part:"snippet,statistics",chart:"mostPopular",maxResults:50}})},this.searchCount=function(e){return a.api.get("videos",{params:{part:"snippet,statistics",id:e,maxResults:25}})},this.search=function(e){return a.api.get("search",{params:{part:"snippet",type:"video",maxResults:25,q:e}})},this.nextSearch=function(e,t){return a.api.get("search",{params:{part:"snippet",type:"video",maxResults:25,q:e,pageToken:t}})},this.comment=function(e){return a.api.get("commentThreads",{params:{part:"snippet",videoId:e,textFormat:"plainText",order:"time",maxResults:25}})},this.key=t,this.api=U.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3/",params:{key:this.key,regionCode:"kr"}})}("AIzaSyCejaHr4exuUf7GKWZxgLb9yj6MmkQSjNk");i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(R,{youtube:A})}),document.getElementById("root"))},9:function(e,t,a){e.exports={navbar:"video_search_navbar__1o2Au",hamburger:"video_search_hamburger__3sFja",moveHome:"video_search_moveHome__38mbw",logo:"video_search_logo__24MI_",form:"video_search_form__3zpgX",defaultUser:"video_search_defaultUser__1ETfC"}}},[[72,1,2]]]);
//# sourceMappingURL=main.d9aba979.chunk.js.map