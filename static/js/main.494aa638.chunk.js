(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(13),i=n.n(s),o=n(4),u=n.n(o),l=n(7),d=n(3),b=n(6),p=n(8),j=n(5),h=function(e){var t=e.audioRef,n=e.currentSong,c=e.setCurrentSong,r=e.isPlaying,s=e.setIsPlaying,i=e.songInfo,o=e.setSongInfo,b=e.songs,h=e.setSongs,g=e.isChanged,f=e.setIsChanged,m=function(e){var t=b.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));h(t)},v=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},O=function(){var e=Object(l.a)(u.a.mark((function e(a){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(g),isNaN(i.duration)&&isNaN(i.animationPercentage)){e.next=20;break}if(s=b.findIndex((function(e){return e.id===n.id})),"skip-forward"!==a){e.next=7;break}return e.next=6,c(b[(s+1)%b.length]);case 6:m(b[(s+1)%b.length]);case 7:if("skip-back"!==a){e.next=17;break}if((s-1)%b.length!==-1){e.next=14;break}return e.next=11,c(b[b.length-1]);case 11:return m(b[b.length-1]),r&&t.current.play(),e.abrupt("return");case 14:return e.next=16,c(b[(s-1)%b.length]);case 16:m(b[(s-1)%b.length]);case 17:r&&t.current.play(),e.next=20;break;case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:v(i.currentTime)}),Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(n.color[0],", ").concat(n.color[1],")")},className:"track",children:[Object(a.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){t.current.currentTime=e.target.value,o(Object(d.a)(Object(d.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(a.jsx)("div",{style:isNaN(i.animationPercentage)?{transform:"translateX(0%)"}:{transform:"translateX(".concat(i.animationPercentage,"%)")},className:"animate-track"})]}),Object(a.jsx)("p",{children:v(i.duration||0)})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(p.a,{onClick:function(){return O("skip-back")},className:"skip-back",size:"2x",icon:j.a}),Object(a.jsx)(p.a,{onClick:function(){r?(s(!r),t.current.pause()):(s(!r),t.current.play())},className:"play",size:"2x",icon:r?j.d:j.e}),Object(a.jsx)(p.a,{onClick:function(){return O("skip-forward")},className:"skip-forward",size:"2x",icon:j.b})]})]})},g=(n(12),function(e){var t=e.currentSong,n=e.isPlaying;e.isChanged,e.setIsChanged;return Object(a.jsxs)("div",{className:"song-wrapper",children:[Object(a.jsx)("div",{className:"song-bg",style:{backgroundImage:"url(".concat(t.cover,")")}}),Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("div",{className:"border-rotate ".concat(n?"start-rotate-cover":"pause-rotate-cover"),children:Object(a.jsx)("img",{className:"".concat(n?"start-rotate-cover":"pause-rotate-cover"),alt:t.name,src:t.cover})}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})]})}),f=function(e){var t=e.song,n=e.songs,c=e.setCurrentSong,r=e.id,s=e.audioRef,i=e.isPlaying,o=e.setSongs,b=function(){var e=Object(l.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:a=n.map((function(e){return e.id===r?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})})),o(a),i&&s.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{onClick:b,className:"library-song ".concat(t.active?"selected":""),children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.artist})]})]})},m=function(e){var t=e.songs,n=e.setCurrentSong,c=e.audioRef,r=e.isPlaying,s=e.setSongs,i=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(a.jsx)("h2",{children:"Library"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(f,{setSongs:s,songs:t,setCurrentSong:n,song:e,id:e.id,audioRef:c,isPlaying:r},t.id)}))})]})},v=function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Waves"}),Object(a.jsxs)("button",{onClick:function(){return n(!t)},children:["Library",Object(a.jsx)(p.a,{icon:j.c})]})]})},O=(n(25),n(29));var x=function(){return[{name:"Murmuration",artist:"Blue Wednesday, Shopan",cover:"https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-300x300.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=7814",color:["#066C74","#B57056"],id:Object(O.a)(),active:!0},{name:"Flushing the Stairs",artist:"Leavv",cover:"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=9917",color:["#E3EEB2","#2C6A65"],id:Object(O.a)(),active:!1},{name:"Lilo",artist:"Middle School, The Field Tapes",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=11244",color:["#3F4458","#E8F1E0"],id:Object(O.a)(),active:!1},{name:"Butterfly",artist:"Sleepy Fish",cover:"https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10021",color:["#0485A7","#2C2849"],id:Object(O.a)(),active:!1},{name:"Imagination",artist:"Montell Fish",cover:"https://chillhop.com/wp-content/uploads/2020/07/24bd0da848d9718fd19af104ff5c0b11f914cb25-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=9332",color:["#CF597C","#F9E2D4"],id:Object(O.a)(),active:!1},{name:"Glory Days",artist:"Sitting Duck, Hoffy Beats, Otaam",cover:"https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=7981",color:["#69C7B9","#AFB467"],id:Object(O.a)(),active:!1}]};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(x()),n=Object(b.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(r[0]),o=Object(b.a)(i,2),p=o[0],j=o[1],f=Object(c.useState)(!1),O=Object(b.a)(f,2),y=O[0],S=O[1],k=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0,isLoaded:!1}),C=Object(b.a)(k,2),N=C[0],w=C[1],P=Object(c.useState)(!1),I=Object(b.a)(P,2),F=I[0],T=I[1],L=Object(c.useState)(!0),M=Object(b.a)(L,2),B=M[0],E=M[1],R=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);w(Object(d.a)(Object(d.a)({},N),{},{currentTime:t,duration:n,animationPercentage:r}))},A=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.findIndex((function(e){return e.id===p.id})),t.next=3,j(r[(n+1)%r.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App ".concat(F?"library-active":""),children:[Object(a.jsx)(v,{libraryStatus:F,setLibraryStatus:T}),Object(a.jsx)(g,{isChanged:B,setIsChanged:E,isPlaying:y,currentSong:p}),Object(a.jsx)(h,{isChanged:B,setIsChanged:E,setSongs:s,songs:r,setSongInfo:w,songInfo:N,audioRef:e,isPlaying:y,setIsPlaying:S,currentSong:p,setCurrentSong:j}),Object(a.jsx)(m,{libraryStatus:F,setSongs:s,audioRef:e,songs:r,setCurrentSong:j,isPlaying:y}),Object(a.jsx)("audio",{onLoadedMetadata:R,onTimeUpdate:R,ref:e,src:p.audio,onEnded:A})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()}},[[26,1,2]]]);
//# sourceMappingURL=main.494aa638.chunk.js.map