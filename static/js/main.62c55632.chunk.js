(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),o=a.n(s),i=(a(92),a(93),a(94),a(95),a(86)),l=a(12),c=a(13),d=a(15),m=a(14),h=a(16),p=(a(96),a(33)),u=a.n(p),b=a(7),g=a.n(b),f=a(17),E=a(41),v=a(31),w=a.n(v),B=a(23),y=a.n(B),k=a(24),M=a.n(k),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={back:e.back||"/",back_label:e.back_label||"BACK",show:e.show,toggleShow:e.toggleShow},a.playBtn=r.a.createRef(),a.pauseBtn=r.a.createRef(),a.helpBtn=r.a.createRef(),a.editBtn=r.a.createRef(),a.loopBtn=r.a.createRef(),a.backwardBtn=r.a.createRef(),a.forwardBtn=r.a.createRef(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;this.state.show;return e=this.props.active?r.a.createElement(f.a,{icon:"pause",size:"2x"}):r.a.createElement(f.a,{icon:"play",size:"2x"}),r.a.createElement(u.a,{className:"MyNavBar"},r.a.createElement(u.a.Collapse,{className:"justify-content-left pull-left"},r.a.createElement(u.a.Toggle,null),r.a.createElement(w.a.Item,{id:"back"},r.a.createElement(g.a,{variant:"outline-primary",ref:this.editBtn},r.a.createElement(E.b,{to:this.state.back},r.a.createElement("span",{className:"NavBarButton"},this.state.back_label)))),r.a.createElement(y.a,{target:this.editBtn.current,show:this.props.show,placement:"right"},function(e){return r.a.createElement(M.a,Object.assign({id:"overlay-example"},e),"Edit music for choreo, after finishing edit, press Done to return to this page.")})),r.a.createElement(u.a.Collapse,{className:"justify-content-center"},r.a.createElement(w.a.Item,null,r.a.createElement(g.a,{variant:"outline-primary",className:"NavBarVertical",ref:this.backwardBtn},r.a.createElement(f.a,{icon:"backward",size:"2x"}))),r.a.createElement(w.a.Item,null,r.a.createElement(g.a,{variant:"outline-primary",ref:this.playBtn,onClick:this.props.togglePlay},e)),r.a.createElement(w.a.Item,null,r.a.createElement(g.a,{variant:"outline-primary",className:"NavBarVertical",ref:this.forwardBtn},r.a.createElement(f.a,{icon:"forward",size:"2x"}))),r.a.createElement(w.a.Item,null,r.a.createElement(g.a,{variant:"outline-primary",ref:this.loopBtn},r.a.createElement("span",{className:"NavBarButton"},"LOOP"))),r.a.createElement(y.a,{target:this.backwardBtn.current,show:this.props.show,placement:"left"},function(e){return r.a.createElement(M.a,Object.assign({id:"overlay-example"},e),"Go 10 seconds back")}),r.a.createElement(y.a,{target:this.playBtn.current,show:this.props.show,placement:"bottom"},function(e){return r.a.createElement(M.a,Object.assign({id:"overlay-example"},e),"Play track")}),r.a.createElement(y.a,{target:this.pauseBtn.current,show:this.props.show,placement:"bottom"},function(e){return r.a.createElement(M.a,Object.assign({id:"overlay-example"},e),"Pause track")}),r.a.createElement(y.a,{target:this.forwardBtn.current,show:this.props.show,placement:"right"},function(e){return r.a.createElement(M.a,Object.assign({id:"overlay-example"},e),"Go 10 seconds forward")}),r.a.createElement(y.a,{target:this.loopBtn.current,show:this.props.show,placement:"bottom"},function(e){return r.a.createElement(M.a,Object.assign({id:"overlay-example"},e),"Loop any part of the track")})),r.a.createElement(u.a.Collapse,null,r.a.createElement(w.a.Item,{id:"helpBtn"},r.a.createElement(g.a,{variant:"outline-primary",onClick:this.state.toggleShow,ref:this.helpBtn},r.a.createElement("span",{className:"NavBarButton"},"HELP")))))}}]),t}(r.a.Component),O=a(28),C=(a(132),a(37)),I=a.n(C),N=a(85),P=a.n(N),D=(a(134),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onPlusClick=function(){a.state.openModal(a.state.bar,a.state.beat)},a.state={bar:e.bar,beat:e.beat,openModal:e.openModal,media:e.addedImages,median:["https://i.ibb.co/SXW4htY/img1.jpg","https://i.ibb.co/vYJdvBg/img2.jpg"],show:e.show},a.plusBtn=r.a.createRef(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(I.a,{className:"Beat"},r.a.createElement(I.a.Header,{className:"Beat-header"},this.state.bar,":",this.state.beat),r.a.createElement(P.a,null,function(t){var a=t.onMouseDown,n=t.ref;return r.a.createElement(I.a.Body,{className:"Beat-body",ref:n,onMouseDown:a},e.props.addedImages.map(function(e){return console.log(e),e.bar===this.state.bar&&e.beat===this.state.beat?r.a.createElement("img",{className:"BeatItem",src:e.src,height:"180rem",width:"180rem"}):""}.bind(e)),r.a.createElement(g.a,{className:"BeatPlus",variant:"outline-primary",onClick:e.onPlusClick,ref:e.plusBtn},r.a.createElement(f.a,{icon:"plus",size:"7x"})))}),1===this.state.bar&&2===this.state.beat?r.a.createElement(y.a,{target:this.plusBtn.current,show:this.props.show,placement:"bottom"},function(e){return r.a.createElement(M.a,Object.assign({id:"overlay-example"},e),"Add photo, video, sketch, or comment to this beat")}):r.a.createElement("p",null))}}]),t}(r.a.Component)),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={openModal:e.openModal,addedImage:e.addedImage,show:e.show,active:e.active},a.scrollBar=r.a.createRef(),a.playTrack=a.playTrack.bind(Object(O.a)(a)),a.pauseTrack=a.pauseTrack.bind(Object(O.a)(a)),a.moveForward=a.moveForward.bind(Object(O.a)(a)),a.player=null,a.scrollSpeed=10,a.leftBound=r.a.createRef(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"playTrack",value:function(){this.player=setInterval(this.moveForward,1e3/this.scrollSpeed)}},{key:"pauseTrack",value:function(){this.player&&clearInterval(this.player)}},{key:"moveForward",value:function(){this.scrollBar.current.scrollBy(this.scrollSpeed,0)}},{key:"render",value:function(){return r.a.createElement("div",{className:"TrackTimeline",ref:this.scrollBar},r.a.createElement(D,{bar:1,beat:1,openModal:this.state.openModal,addedImages:this.props.addedImages,show:this.props.show}),r.a.createElement(D,{bar:1,beat:2,openModal:this.state.openModal,addedImages:this.props.addedImages,show:this.props.show}),r.a.createElement(D,{bar:1,beat:3,openModal:this.state.openModal,addedImages:this.props.addedImages,show:this.props.show}),r.a.createElement(D,{bar:1,beat:4,openModal:this.state.openModal,addedImages:this.props.addedImages,show:this.props.show}),r.a.createElement(D,{bar:2,beat:1,openModal:this.state.openModal,addedImages:this.props.addedImages,show:this.props.show}),r.a.createElement(D,{bar:2,beat:2,openModal:this.state.openModal,addedImages:this.props.addedImages,show:this.props.show}),r.a.createElement(D,{bar:2,beat:3,openModal:this.state.openModal,addedImages:this.props.addedImages,show:this.props.show}),r.a.createElement("div",{className:"playHead"},"\xa0"),r.a.createElement("div",{className:"leftBound",ref:this.leftBound,onMouseDown:this.onBoundMouseDown,onMouseUp:this.onBoundMouseUp,onMouseMove:this.onBoundMouseMove},"\xa0"),r.a.createElement("div",{className:"rightBound",onMouseDown:this.onBoundMouseDown,onMouseUp:this.onBoundMouseUp,onMouseMove:this.onBoundMouseMove},"\xa0"))}}]),t}(r.a.Component),x=a(25),F=a.n(x),T=(a(136),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).openGalleryOnClick=function(){a.setState({galleryModal:!0}),a.props.onHide()},a.onClose=function(){a.setState({galleryModal:!1})},a.sendimage0=function(){a.onClose(),a.state.setimage(a.state.images[0],a.props.beatselected.bar,a.props.beatselected.beat)},a.sendimage1=function(){a.onClose(),a.state.setimage(a.state.images[1],a.props.beatselected.bar,a.props.beatselected.beat)},a.sendimage2=function(){a.onClose(),a.state.setimage(a.state.images[2],a.props.beatselected.bar,a.props.beatselected.beat)},a.sendimage3=function(){a.onClose(),a.state.setimage(a.state.images[3],a.props.beatselected.bar,a.props.beatselected.beat)},a.state={beatselected:e.beatselected,galleryModal:!1,images:["https://i.ibb.co/SXW4htY/img1.jpg","https://i.ibb.co/vYJdvBg/img2.jpg","https://i.ibb.co/qdtwMXh/img3.jpg","https://i.ibb.co/qkfr06Q/img4.jpg"],setimage:e.setimage},a.openGalleryOnClick=a.openGalleryOnClick.bind(Object(O.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F.a,Object.assign({},this.props,{className:"MediaModal",size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(F.a.Body,null,"Selected Bar-Beat:",r.a.createElement("span",{className:"BeatIndicator"},"".concat(this.props.beatselected.bar,"-").concat(this.props.beatselected.beat))),r.a.createElement(g.a,{variant:"outline-primary",className:"MediaModal-line",onClick:this.openGalleryOnClick},r.a.createElement(F.a.Body,null,r.a.createElement(f.a,{icon:"image",size:"2x"})," Photo")),r.a.createElement(g.a,{variant:"outline-primary",className:"MediaModal-line"},r.a.createElement(F.a.Body,null,r.a.createElement(f.a,{icon:"video",size:"2x"})," Video")),r.a.createElement(g.a,{variant:"outline-primary",className:"MediaModal-line"},r.a.createElement(F.a.Body,null,r.a.createElement(f.a,{icon:"paint-brush",size:"2x"})," Sketch")),r.a.createElement(g.a,{variant:"outline-primary",className:"MediaModal-line"},r.a.createElement(F.a.Body,null,r.a.createElement(f.a,{icon:"comment",size:"2x"})," Comment")),r.a.createElement(F.a.Footer,{className:"MediaModal-line Footer"},r.a.createElement(g.a,{onClick:this.props.onHide},"Close"))),r.a.createElement(F.a,{show:this.state.galleryModal,onHide:this.onClose},r.a.createElement(F.a.Body,null,r.a.createElement(g.a,{variant:"primary",onClick:this.sendimage0},r.a.createElement("img",{src:"https://i.ibb.co/SXW4htY/img1.jpg",width:"180",height:"180"})),r.a.createElement(g.a,{variant:"primary",onClick:this.sendimage1},r.a.createElement("img",{src:"https://i.ibb.co/vYJdvBg/img2.jpg",width:"180rem",height:"180rem"})),r.a.createElement(g.a,{variant:"primary",onClick:this.sendimage2},r.a.createElement("img",{src:"https://i.ibb.co/qdtwMXh/img3.jpg",width:"180rem",height:"180rem"})),r.a.createElement(g.a,{variant:"primary",onClick:this.sendimage3},r.a.createElement("img",{src:"https://i.ibb.co/qkfr06Q/img4.jpg",width:"180rem",height:"180rem"})))))}}]),t}(r.a.Component)),R=(a(154),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).openModal=function(e,t){a.setState({modalShow:!0,beatselected:{bar:e,beat:t}})},a.setimage=function(e,t,n){a.setState({addedImages:[].concat(Object(i.a)(a.state.addedImages),[{src:e,bar:t,beat:n}])}),console.log("".concat(e," is added to addedImages")),console.log("addedImages now is ".concat(a.state.addedImages.map(function(e){return e.src})))},a.toggleShow=function(){a.setState({show:!a.state.show})},a.togglePlay=function(){a.setState({active:!a.state.active}),a.state.active?a.trackPlayer.current.playTrack():a.trackPlayer.current.pauseTrack()},a.state={modalShow:!1,beatselected:{bar:0,beat:0},addedImages:[],show:!1,active:!1},a.trackPlayer=r.a.createRef(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"MainBox",ref:this.MainBox},r.a.createElement(j,{className:"MyNavBarFlex",back:"/EDIT",back_label:"EDIT AUDIO",toggleShow:this.toggleShow,show:this.state.show,togglePlay:this.togglePlay,active:this.active}),r.a.createElement(S,{className:"TrackTimelineFlex",openModal:this.openModal,openGalery:this.openGalery,setBeatSelected:this.setBeatSelected,addedImages:this.state.addedImages,show:this.state.show,ref:this.trackPlayer}),r.a.createElement(T,{show:this.state.modalShow,beatselected:this.state.beatselected,onHide:function(){return e.setState({modalShow:!1})},setimage:this.setimage}))}}]),t}(r.a.Component));var z=function(){return r.a.createElement(R,null)},G=(a(155),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={prompt:!1},a.buttonRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"selects",value:function(e,t){"clicked"!=e.target.id&&1==e.buttons&&(e.target.style.background=t,e.target.id="clicked")}},{key:"removes",value:function(e,t){for(var a=document.getElementsByClassName("part".concat(t)),n=0;n<a.length;n++)"clicked"==a[n].id&&(a[n].style.visibility="hidden",a[n].id="dblclicked")}},{key:"renderPart",value:function(e,t,a){var n=this;return r.a.createElement("button",{className:"part".concat(e),style:{background:"".concat(t),width:"8.5em",height:"7em",marginRight:"-1px",marginTop:"-1px"},onMouseEnter:function(e){return n.selects(e,a)},onMouseDown:function(e){return n.selects(e,a)},onDoubleClick:function(t){return n.removes(t,e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"name1"},"Do you wanna know.mp3"),r.a.createElement("div",{id:"AudioTrack1"},this.renderPart(1,"#9370DB","#4B0082"),this.renderPart(1,"#9370DB","#4B0082"),this.renderPart(1,"#9370DB","#4B0082"),this.renderPart(1,"#9370DB","#4B0082"),this.renderPart(1,"#9370DB","#4B0082"),this.renderPart(1,"#9370DB","#4B0082"),this.renderPart(1,"#9370DB","#4B0082")),r.a.createElement("div",{id:"name2"},"Payphone.mp3"),r.a.createElement("div",{id:"AudioTrack2"},this.renderPart(2,"#32CD32","#006400"),this.renderPart(2,"#32CD32","#006400"),this.renderPart(2,"#32CD32","#006400"),this.renderPart(2,"#32CD32","#006400"),this.renderPart(2,"#32CD32","#006400")),r.a.createElement("div",{id:"name3"},"Mind in awe.mp3"),r.a.createElement("div",{id:"AudioTrack3"},this.renderPart(3,"#FFD700","#8B4513"),this.renderPart(3,"#FFD700","#8B4513"),this.renderPart(3,"#FFD700","#8B4513"),this.renderPart(3,"#FFD700","#8B4513"),this.renderPart(3,"#FFD700","#8B4513"),this.renderPart(3,"#FFD700","#8B4513"),this.renderPart(3,"#FFD700","#8B4513")))}}]),t}(r.a.Component)),H=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,{className:"MyNavBarFlex"}),r.a.createElement(G,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(30),Y=a(36),J=a(22);Y.b.add(J.h,J.g,J.b,J.i,J.e,J.j,J.f,J.c,J.a,J.d),o.a.render(r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(A.a,{exact:!0,path:"/",component:z}),r.a.createElement(A.a,{path:"/edit",component:H}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){e.exports=a(156)},92:function(e,t){},93:function(e,t,a){},94:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},95:function(e,t,a){},96:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.62c55632.chunk.js.map